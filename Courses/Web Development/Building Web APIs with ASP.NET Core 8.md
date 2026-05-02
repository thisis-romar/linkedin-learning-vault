---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-web-apis-with-asp-dot-net-core-8
url: "https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8"
duration_minutes: 157
duration: 2h 37m
level: Intermediate
updated: 4/9/2024
learners: 32598
skills:
  - API Development
  - ASP.NET Core
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG-B4jp_AX4mw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712683571358?e=2147483647&amp;v=beta&amp;t=q1YLlRgqh9i4UweixEriV1rsyNAodADqm3sN6fhttuc"
linkedin_topic: Web Development
learning_paths:
  - '[[Getting Started as an ASP.NET Core Developer]]'
prev_courses:
  - '[[ASP.NET Core- Building a GraphQL API]]'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":9,"total":9,"prev":"ASP.NET Core- Building a GraphQL API","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/api-development
  - skill/asp-net-core
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20Web%20APIs%20with%20ASP.NET%20Core%208.md)

![Building Web APIs with ASP.NET Core 8](https://media.licdn.com/dms/image/v2/D560DAQG-B4jp_AX4mw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712683571358?e=2147483647&amp;v=beta&amp;t=q1YLlRgqh9i4UweixEriV1rsyNAodADqm3sN6fhttuc)

# Building Web APIs with ASP.NET Core 8

> Modern web applications provide much of their functionality in an API. In this course, Christian Wenz—a web pioneer, technology specialist, and entrepreneur—shows you how to design and implement such an API using ASP.NET Core 8. Get started with minimal APIs and the basics of HTTP, REST, and API design. Learn how to retrieve and write data, and practice what you learn with hands-on challenges.

> [LinkedIn Learning](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8) | 2h 37m | Intermediate | 33K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Web APIs with ASP.NET Core 8](#web-apis-with-aspnet-core-8)
  - [Why an API?](#why-an-api)
  - [What you should know](#what-you-should-know)
- [**1. Getting Started**](#1-getting-started) (8 videos)
  - [Prerequisites and setup](#prerequisites-and-setup)
  - ["Hello World," API style](#hello-world-api-style)
  - ["Hello World" with Visual Studio Code](#hello-world-with-visual-studio-code)
  - [Minimal APIs](#minimal-apis)
  - [HTTP in a nutshell](#http-in-a-nutshell)
  - [REST basics](#rest-basics)
  - [API design basics](#api-design-basics)
  - [Tools for API testing](#tools-for-api-testing)
- [**2. Retrieving Data**](#2-retrieving-data) (12 videos)
  - [Controllers and actions](#controllers-and-actions)
  - [Routing basics](#routing-basics)
  - [Creating a data model](#creating-a-data-model)
  - [Using entity framework core](#using-entity-framework-core)
  - [Returning a list of items](#returning-a-list-of-items)
  - [Using ActionResult](#using-actionresult)
  - [Returning an item](#returning-an-item)
  - [Handling errors](#handling-errors)
  - [Making the API asynchronous](#making-the-api-asynchronous)
  - [Working with minimal APIs](#working-with-minimal-apis)
  - [Challenge: Searching items](#challenge-searching-items)
  - [Solution: Searching items](#solution-searching-items)
- [**3. Writing Data**](#3-writing-data) (9 videos)
  - [HTTP methods](#http-methods)
  - [Model binding](#model-binding)
  - [Adding an item with POST](#adding-an-item-with-post)
  - [Model validation](#model-validation)
  - [Updating an item with PUT](#updating-an-item-with-put)
  - [Deleting an item with DELETE](#deleting-an-item-with-delete)
  - [Migrating the code to Minimal APIs](#migrating-the-code-to-minimal-apis)
  - [Challenge: Deleting several items](#challenge-deleting-several-items)
  - [Solution: Deleting several items](#solution-deleting-several-items)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Web APIs with ASP.NET Core 8](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/welcome?u=76281980&t=0)** - [Christian] These days, internet-enabled devices come in countless different form factors.
>
> **[0:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/welcome?u=76281980&t=6)** They all need to connect to a server to carry out work, and typically, they are using HTTP.
>
> **[0:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/welcome?u=76281980&t=14)** This is where a web API comes in, providing a uniform contract to talk to a service.
>
> **[0:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/welcome?u=76281980&t=21)** In my [[LinkedIn]] Learning Course, I will show you how to use [[[ASP.NET]]](https://ASP.NET) Core to build a powerful [[Representational State Transfer (REST)|rest]] API that any client may use.
>
> **[0:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/welcome?u=76281980&t=31)** You'll see what [ASP.NET](https://ASP.NET) Core offers and how it makes creating APIs a positive and productive experience.
>
> **[0:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/welcome?u=76281980&t=40)** My name is Christian Wenz.
>
> **[0:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/welcome?u=76281980&t=42)** I started creating web applications in the mid-1990s and never looked back.
>
> **[0:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/welcome?u=76281980&t=48)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2), [[LinkedIn]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (2), asp (2), net (2), http (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Speakers:** - [christian] (1)

#### [Why an API?](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=0)** - [Christian] In this course, we will be creating APIs with .NET.
>
> **[0:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=5)** Well, with [[[ASP.NET]]](https://ASP.NET) Core to be specific.
>
> **[0:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=9)** Remember what was previously called .NET Core is now called .NET, but the web portion is still [ASP.NET](https://ASP.NET) Core.
>
> **[0:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=18)** Not to confuse it with [ASP.NET](https://ASP.NET) based on the legacy .NET framework.
>
> **[0:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=23)** But I digress, let's talk more about building web APIs with [ASP.NET](https://ASP.NET) Core 8, that is part of .NET 8.
>
> **[0:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=33)** So why do we need such an API in the first place?
>
> **[0:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=40)** The idea is that we have certain types and pieces of information, certain data that we would like to share and provide it to very different types of clients, such as web applications, mobile apps, native applications, maybe even desktop application.
>
> **[1:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=61)** All of those clients should use a uniform contract, the same language, the same format, so to speak, to communicate with the API.
>
> **[1:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=73)** And that is the whole idea, at least in a nutshell.
>
> **[1:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=79)** So we have different clients that try to consume data, and they are using an API to facilitate that.
>
> **[1:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=90)** We will be using .NET for that, and you will see how easy it is to achieve that, and we will also adhere to certain standards.
>
> **[1:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/why-an-api?u=76281980&t=102)** Let's go!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (3), [[ASP.NET]] (1)
> **Env Vars:** net (10), asp (4), api (3)
> **URLs:** [asp.net](https://asp.net) (4)
> **Analogies:** such as (1)
> **Speakers:** - [christian] (1)

#### [What you should know](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=0)** - [Presenter] There are certainly many things to learn when creating an API with .NET.
>
> **[0:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=6)** But it's beneficial if you already know a few things.
>
> **[0:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=9)** Not too many, don't worry.
>
> **[0:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=10)** But, well, since we are using .NET, any previous exposure to the technology is certainly beneficial.
>
> **[0:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=22)** If you've been using the thing that was previously called .NET Core, that's great.
>
> **[0:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=27)** If you've been using the old .NET framework, you still know many of the basics that we require in this course.
>
> **[0:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=36)** We will be using .NET 8 here, which at the time of recording is the latest version.
>
> **[0:44](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=44)** It's a so-called long-term support version, which basically means three years of support.
>
> **[0:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=51)** However, I expect that most, if not all of the content of this course will also work with .NET 9 and you can also apply the knowledge from this course in previous .NET versions if you are still using them.
>
> **[1:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=68)** Also, when we are writing code, we will be using C# as our language of choice.
>
> **[1:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=76)** .NET supports several languages, but C# is by far the most popular one.
>
> **[1:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=83)** That's why we picked it for this course.
>
> **[1:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=85)** If you're proficient in any other support .NET language, you'll still be able to follow along just fine.
>
> **[1:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=93)** We will be creating web content, mainly web APIs, so any background knowledge here is, of course, beneficial.
>
> **[1:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=105)** If you've had any previous exposure to HTTP on a technical side, not just as a consumer using a web browser, that's a good thing.
>
> **[1:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=114)** You don't have to know everything in and out about the protocol because some of the more advanced and in depth features will be thoroughly explained later.
>
> **[2:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=123)** But still, if you know the details about HTTP, that's certainly helpful.
>
> **[2:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=130)** Also, if you have previously worked with the web stack of .NET, which is commonly called [[[ASP.NET]]](https://ASP.NET) core and includes, among other things, the web API stack that we will be using, but also web technologies or web frameworks like [ASP.NET](https://ASP.NET) Core MVC or [ASP.NET](https://ASP.NET) Core Razor Pages, you will recognize some or many of the things that we are about to show and discuss.
>
> **[2:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=158)** On the other hand, if you don't, don't worry.
>
> **[2:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=161)** I'll explain everything so that you can follow along easily.
>
> **[2:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/what-you-should-know?u=76281980&t=165)** And with that out of the way, let's start creating our APIs with [ASP.NET](https://ASP.NET) Core 8.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (4)
> **Env Vars:** net (14), asp (4), api (2), http (2), mvc (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **Definitions:** basically means (1)
> **Speakers:** - [presenter] (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Prerequisites and setup](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=0)** - [Instructor] Let's get started and dive right into creating APIs with [[[ASP.NET]]](https://ASP.NET) Core.
>
> **[0:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=8)** Before we do that, we first have to pick the software we will be using to implement those APIs.
>
> **[0:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=20)** The first choice, and also at least usually my primary choice is Visual Studio by [[Microsoft]].
>
> **[0:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=30)** If you go to [visualstudio.com](https://visualstudio.com), that's the site here, and essentially a redirect to visualstudio.[microsoft.com](https://microsoft.com), you see further down below on their page the Visual Studio family.
>
> **[0:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=48)** Currently the Visual Studio family consists of two family members.
>
> **[0:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=53)** There have been three before.
>
> **[0:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=55)** I'll talk about that in a minute, but currently there are only two.
>
> **[1:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=62)** On the left side we have the Visual Studio, the fully featured IDE, and you see the tiny logo here.
>
> **[1:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=72)** That's available on [[Windows]] only, which is not necessarily a problem, but we'll talk about other operating systems in a bit.
>
> **[1:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=82)** Now, when you're interested in using Visual Studio, you can download it right here.
>
> **[1:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=87)** And you see that there are three different editions of Visual Studio: Community, Professional and Enterprise.
>
> **[1:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=94)** And the year after that, that's basically the major version number.
>
> **[1:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=99)** Internally, it's version number 17.8, which came out with .NET8, and the next version will likely be 17.9, but it's referred to as Visual Studio 2022.
>
> **[1:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=115)** And there have been several releases of that, so that's why the year looks like it's a bit dated.
>
> **[2:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=122)** But no, there was a new version coming out for .NET8, and usually there is a new version coming out for each new major .NET release.
>
> **[2:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=132)** With regards to those three editions, the good news is it doesn't really matter which of those you are choosing because everything we cover in this course can be achieved with any of those three versions.
>
> **[2:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=145)** The Community edition is the only one that is free, free if you meet the prerequisites.
>
> **[2:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=152)** Prerequisites include that you are an individual developer or you do open source work.
>
> **[2:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=159)** Do have a look at the specific license requirements at the time when you consider downloading that version so that you can see whether that's something for you.
>
> **[2:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=172)** If not, the for pay Professional or Enterprise versions come to mind.
>
> **[2:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=177)** But again, it doesn't matter which edition you're using, at least for the topics of this course.
>
> **[3:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=186)** Now, if you are not using Windows or do not want to use the Windows only Visual Studio, there is another option, and that one's called Visual Studio Code.
>
> **[3:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=196)** Once again, we can have a look at those logos here and we see the Windows logo, the Mac OS logo, and yes, that's a penguin.
>
> **[3:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=204)** So [[Linux]] is supported as well.
>
> **[3:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=206)** Visual Studio Code has, and I have to be blunt here, nothing to do with Visual Studio.
>
> **[3:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=212)** It's basically a branding thing.
>
> **[3:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=214)** It evolved from a different tool, but it belongs to the family.
>
> **[3:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=218)** And as you know, some family members just look very, very different.
>
> **[3:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=221)** And maybe that applies to the Visual Studio family here as well.
>
> **[3:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=226)** So Visual Studio Code is a text-based IDE, or as they call it here, a source code editor, but one that runs on a variety of operating systems, not only Windows, but also Mac OS and various Linux distributions.
>
> **[4:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=243)** Actually, Visual Studio Code is very popular with [[JavaScript]] developers and that might come as a surprise.
>
> **[4:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=251)** It is used to work on projects or on code that doesn't use any Microsoft or .NET technologies at all.
>
> **[4:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=258)** It's just a very good IDE.
>
> **[4:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=262)** In contrast, Visual Studio has more wizards and a few more built-in features, so it is arguably the more powerful IDE.
>
> **[4:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=272)** But still, Visual Studio Code is a very fine choice and it will work very well when creating web APIs.
>
> **[4:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=283)** Now, as you can see here, there are the different operating systems.
>
> **[4:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=288)** So you just pick yours and then get an installer or some instructions.
>
> **[4:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=294)** There's also a dedicated download page for the Visual Studio Code website.
>
> **[5:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=300)** And actually code.[visualstudio.com](https://visualstudio.com), that is the main page for Visual Studio Code, including not only documentation, but also a list of extensions, because extensions is what makes Visual Studio Code excellent because you get so many extra features, code completion, et cetera, when you add the appropriate extensions to your system.
>
> **[5:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=326)** So these are the two choices we have.
>
> **[5:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=329)** Within this course, I will be using Visual Studio because it's sometimes easier to set up a project.
>
> **[5:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=336)** I'll make sure that I will also tell you how you can do things like project initialization without Visual Studio, and of course you always have the exercise files.
>
> **[5:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=349)** But one more piece of information here.
>
> **[5:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=353)** As I mentioned, the family had one more member.
>
> **[5:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=356)** The third member of the Visual Studio family was Visual Studio for Mac, a Mac edition of Visual Studio.
>
> **[6:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=364)** And once again, it had nothing to do with the Windows Visual Studio.
>
> **[6:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=367)** It was again branding.
>
> **[6:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=369)** So Visual Studio for Mac did have some wizards to set up projects or features, but it was discontinued.
>
> **[6:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=378)** Currently, the most popular option for .NET development on a Mac, if it's not Visual Studio Code, is Rider by a company called JetBrains.
>
> **[6:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=389)** I use it myself, and that would be an option there.
>
> **[6:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=394)** And it's also a commercial product.
>
> **[6:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=396)** No matter which of these three tools you're using, you will be able to create web APIs in no time with that, so either Visual Studio or Visual Studio Code.
>
> **[6:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=410)** And there's a third piece of software that you will see within this course from time to time, and that one's called Postman.
>
> **[7:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=420)** Postman is a tool that makes it easy to test APIs because you can send requests to an API, you can set HTP methods, you can set HTP headers, you can analyze the data that is coming back, very powerful and also very useful.
>
> **[7:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=440)** There will be other options as well, and you'll see them in this course, but still, Postman, again, very powerful tool I can only recommend.
>
> **[7:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=449)** And with that out of the way, we have everything we need on our system.
>
> **[7:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/prerequisites-and-setup?u=76281980&t=455)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Microsoft]] (3), [[Linux]] (2), [[ASP.NET Core]] (1), [[JavaScript]] (1)
> **Tools:** visual studio (29), postman (3)
> **Env Vars:** net (4), ide (4), net8 (2), htp (2), asp (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (2), [asp.net](https://asp.net) (1), [microsoft.com](https://microsoft.com) (1)
> **Definitions:** is a  (4)
> **Prerequisites:** set up (2), initialization (1)
> **Versions:** 17.8 (1), 17.9 (1)
> **Exercise Files:** source code (1), exercise files (1)

#### ["Hello World," API style](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=0)** - [Lecturer] Without any further ado, let's create our first web API with .NET, using Visual Studio.
>
> **[0:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=8)** I have it installed right here.
>
> **[0:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=9)** And then go to File, New, and then Project.
>
> **[0:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=13)** That brings up the same wizard that you get when you use the pop-up window that shows up when you launch Visual Studio and say that you would like to create a new project.
>
> **[0:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=23)** Here we go.
>
> **[0:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=25)** On the left we see the project templates I've been recently been using.
>
> **[0:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=29)** And you see quite a bit, I did quite some work.
>
> **[0:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=33)** And on the right you get a complete list that you can filter.
>
> **[0:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=37)** So for instance, all project types, there is API and there is Web API.
>
> **[0:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=43)** And what you see here depends a little bit also on which versions of the .NET SDK you have installed.
>
> **[0:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=50)** But basically when you filter for Web API or API, you will get a couple of templates, and the first one and the last one, they look very, very similar.
>
> **[1:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=63)** Yes, there's one difference.
>
> **[1:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=64)** The first one is C# and number three is F#.
>
> **[1:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=67)** So you can also filter by language.
>
> **[1:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=70)** And in the end, you will have a template called [[[ASP.NET]]](https://ASP.NET) Core Web API.
>
> **[1:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=75)** And that sets up an API for us.
>
> **[1:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=78)** There are a few options which you can set and those options basically mandate how the project files look, because there will be some changes to the code.
>
> **[1:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=95)** Just to start, I'll do a dummy project.
>
> **[1:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=99)** So how about MyFirstAspNetCoreWebApi?
>
> **[1:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=105)** That's quite a mouthful.
>
> **[1:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=107)** So that's the project name and also the solution name.
>
> **[1:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=110)** A solution contains several projects in one.
>
> **[1:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=114)** Then we pick the framework version we'd like to use, whether we want to work with authentication, which you don't, this time at least, whether we would like to use HTTPS, that's always a good idea, whether we would like to use Docker.
>
> **[2:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=128)** We won't use it this time, but support for it is built in here.
>
> **[2:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=133)** And then three more check boxes.
>
> **[2:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=136)** The first one asks us if you'd like to enable support for something called OpenAPI.
>
> **[2:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=141)** Yes, we leave that intact.
>
> **[2:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=144)** You'll see very shortly what that gives us.
>
> **[2:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=148)** Then do not use top-level statements.
>
> **[2:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=150)** If we check that box, code will work the same, but there will be more code, and less code is probably good, so I would like to leave it as is.
>
> **[2:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=159)** And then, Use controllers.
>
> **[2:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=161)** There are two different options how to create APIs with [ASP.NET](https://ASP.NET) Core, with a controller or without it.
>
> **[2:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=168)** We'll have a look at both options, but I do prefer the controller-based approach.
>
> **[2:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=175)** But no worries, I'll show you both.
>
> **[2:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=178)** But I'd like start with controllers, and therefore I will leave that checked.
>
> **[3:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=186)** And then I hit Create.
>
> **[3:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=188)** And then essentially Visual Studio is taking the template and unpacks it, fills in placeholders, and I have a project.
>
> **[3:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=198)** Technically it's .NET that does that, because the template is part of .NET.
>
> **[3:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=203)** But that's what we are getting.
>
> **[3:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=205)** We now have our Vision Studio solution and we have a couple of files here and folders.
>
> **[3:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=213)** We have a controller folder with an implementation.
>
> **[3:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=217)** We have a properties folder, and the properties folder contains the LaunchSettings file, which basically sets up the server.
>
> **[3:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=228)** We are working with local hosts.
>
> **[3:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=229)** The local machine and the web server will run on the local machine, but we'll use a random port.
>
> **[3:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=235)** So when you see a port number in this video, you might have a different port number.
>
> **[3:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=239)** They are assigned at random upon project creation.
>
> **[4:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=244)** And then we have a file called Program.cs.
>
> **[4:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=248)** And Program.cs is, as with all .NET projects, basically the entry points to the application.
>
> **[4:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=256)** And everything is set up here, we don't have to change anything here at the moment.
>
> **[4:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=261)** We also don't need to look at implementation details, because we are about to see that when we do our own coding.
>
> **[4:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=270)** But just to get started, we can run the application in the Debug menu.
>
> **[4:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=275)** We can either say Start Debugging, so then the debugger starts and we can peek into code as the application runs, or we can be brave and just say no start without debugging, because there certainly won't be any bugs in this code.
>
> **[4:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=290)** And therefore, Visual Studio builds the application, runs it, and then by default a web browser opens.
>
> **[5:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=301)** It opens up at localhost: and then a random port number, then /swagger.
>
> **[5:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=308)** Do you remember that Open API support checkbox we made sure is checked?
>
> **[5:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=313)** Basically that's the effect.
>
> **[5:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=314)** Open API is a standard that can be used to document APIs, and Swagger and Swagger UI, so we are using both, they are tools to basically use that information about an API and create a UI for that.
>
> **[5:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=331)** So here we see that MyFirstAspNetCoreWebApi, that project, has an endpoint called GET/WeatherForecast.
>
> **[5:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=340)** And if I am expanding that, I can try that out.
>
> **[5:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=345)** I hit Execute, and then I get the response.
>
> **[5:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=350)** So that API gives us [[JSON]] bag, and that's basically an array with five entries with some random temperatures or random weather forecast.
>
> **[6:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=361)** Basically that's the example that's part of the Visual Studio template.
>
> **[6:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=366)** And this showed you how to set up a project, how to run it from Visual Studio, and then how to use Swagger to actually see whether the API is working.
>
> **[6:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=381)** One more piece of advice, by the way.
>
> **[6:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=383)** If you go to the root of that server, like this, you'll get HTTP 404, not found.
>
> **[6:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=390)** There's nothing at the root, because it's an API, it's not a website.
>
> **[6:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-api-style?u=76281980&t=394)** So use the Swagger UI if you'd like to test it in the browser, or use a tool like Postman, as we'll see later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2), [[JSON]] (1)
> **Env Vars:** api (13), net (7), asp (2), sdk (1), https (1)
> **Tools:** visual studio (6), postman (1)
> **Exercise Files:** template (4)
> **UI Navigation:** go to (2), checkbox (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** docker (1)

#### ["Hello World" with Visual Studio Code](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=0)** - Now we will be using Visual Studio to create web APIs.
>
> **[0:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=4)** So we do file, where is file new project?
>
> **[0:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=8)** There is no file new project.
>
> **[0:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=11)** Basically you can open a folder.
>
> **[0:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=14)** So in order to create our web API application, we have to do something else.
>
> **[0:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=20)** I'll close Visual Studio again and then I head over to my terminal and we can dotnet new and then Web API because that's the project template that we will be using.
>
> **[0:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=34)** And if you do dash dash help, then we will get a list of all of the options that we have when calling dotnet new web API, we can provide a name and an output folder.
>
> **[0:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=53)** And then we have some options and some of them sound suspiciously similar to what we've seen in Visual Studio.
>
> **[1:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=60)** So authentication was here.
>
> **[1:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=63)** And then further down below we have stuff whether we would like to use HTTPS or not.
>
> **[1:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=70)** So by default we do, but we can set this to off.
>
> **[1:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=74)** Basically we can set the framework version of choice.
>
> **[1:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=81)** We can disable open API, but we won't.
>
> **[1:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=85)** And then we have the dash dash use controllers switch.
>
> **[1:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=90)** And by default that's off as you saw in Visual Studio.
>
> **[1:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=95)** And now we just dotnet new web API.
>
> **[1:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=98)** The output folder is the name of the project.
>
> **[1:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=101)** So how about my second ASP Net Core web API?
>
> **[1:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=108)** And I'd like to use controllers and that sets up the same kind of project.
>
> **[1:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=116)** So if I go to my second ASP Net Core Web API and I just open Visual Studio Code in that folder.
>
> **[2:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=126)** And if I trust that template, I get something that looks exactly like the code we've seen before in Visual Studio.
>
> **[2:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=138)** And with that out the way, I can go to the run menu and then either start debugging or run without debugging.
>
> **[2:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=148)** Depending on whether and how you have been using Visual Studio Code before, you may be prompted to install some extensions that can be helpful.
>
> **[2:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=160)** For instance, when working with C# and usually those extensions recommended by Visual Studio Code, really recommended to be installed.
>
> **[2:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=169)** So I already did that on the system so I can just do run without debugging.
>
> **[2:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=174)** And then same thing happens, so the project is built.
>
> **[2:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=179)** And again, that depends on what's installed here.
>
> **[3:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=184)** I have to say, okay, what kind of application is this?
>
> **[3:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=186)** Is this a [[Java]] application?
>
> **[3:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=188)** Do I want to do Java debugging or .NET MAUI?
>
> **[3:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=192)** No, it's just C#.
>
> **[3:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=194)** And then I can pick the configuration I'd like to use when setting up the project.
>
> **[3:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=202)** I get an HTTP and an HTTPS configuration and I'd like to use the HTTPS one.
>
> **[3:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=211)** And there was the same option in Visual Studio before and HTTPS was the one selected by default.
>
> **[3:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=216)** So now we are using basically the same thing.
>
> **[3:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=219)** The project is built, we have a terminal here that basically shows us what's happening, shows us the dotnet build call.
>
> **[3:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=227)** So that dotnet [[CLI]] that we have just been using has also been used in order to compile the project.
>
> **[3:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=236)** And then after all has been said and done, once again the web browser will open.
>
> **[4:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=244)** And then in the web browser we see the UI we already know.
>
> **[4:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=249)** Here it is, you see the project name.
>
> **[4:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=252)** And once again, we have that UI to try out what we have built or well, what the dotnet command line interface built for us.
>
> **[4:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/hello-world-with-visual-studio-code?u=76281980&t=261)** So this is still working and this is how you set up a web API project with the CLI so that you can use it within Visual Studio Code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[CLI]] (2)
> **Env Vars:** api (8), https (4), asp (2), cli (2), net (1)
> **Tools:** visual studio (10), terminal (2), command line (1)
> **CLI Commands:** dotnet (6)
> **Exercise Files:** template (2)
> **Best Practices:** recommended (2)
> **Prerequisites:** install (1), set up (1)
> **Cross-References:** as you saw (1)

#### [Minimal APIs](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=0)** - [Instructor] Maybe you remember this checkbox here, Use controllers.
>
> **[0:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=5)** And it was disabled, and I enabled it.
>
> **[0:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=9)** And when using the .Net [[CLI]] to create a web API, that feature was also disabled, and I had to enable it when setting up the project.
>
> **[0:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=20)** Now, what happens if there is no checkbox, if I do not want to use controllers?
>
> **[0:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=29)** Controllers are the web [[API Development]] approach that has been in place since the very beginning.
>
> **[0:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=37)** We will be using something called controllers, and in those controllers, we have the implementation of the API.
>
> **[0:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=43)** So we kind of separate them out.
>
> **[0:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=46)** And a new feature was added back in .Net 6, it was called minimal APIs.
>
> **[0:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=52)** And the name minimal sounds like minimal feature set.
>
> **[0:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=56)** But that's not true these days, instead, it's just minimal boilerplate code, I would say.
>
> **[1:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=62)** So I remove that checkbox again, and we see what we are getting.
>
> **[1:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=68)** I'm creating a new project using the same template, but with that option that I do not want to have controllers.
>
> **[1:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=75)** And indeed, the project does not have a controllers folder.
>
> **[1:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=79)** And the Program.cs file now has this.
>
> **[1:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=84)** It has code, in Program.cs, that looks like it's that /weatherforecast endpoint we have been seeing before, and there is the actual implementation.
>
> **[1:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=98)** So the implementation is now directly in Program.cs.
>
> **[1:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=101)** And of course, if a project gets larger, then you certainly will not put everything into Program.cs.
>
> **[1:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=110)** So you'll have the business logic somewhere else and you just reference it here.
>
> **[1:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=115)** But these are the differences.
>
> **[1:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=117)** Either we have controllers with the API implementation or the implementation is directly in Program.cs, and the letter approach is called minimal APIs.
>
> **[2:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=129)** That's the difference.
>
> **[2:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=130)** We will be using controllers when we work on a sample application in the next chapter.
>
> **[2:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/minimal-apis?u=76281980&t=137)** But eventually, we'll convert the implementation back to a minimal API so that you see both worlds, so to speak.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), [[API Development]] (1)
> **Env Vars:** api (5), cli (1)
> **UI Navigation:** checkbox (3)
> **Exercise Files:** boilerplate (1), template (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [HTTP in a nutshell](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=0)** - [Instructor] After this quick start into creating APIs with Dotnet, let's take a few steps back and look at HTTP in a nutshell.
>
> **[0:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=10)** This here is the standards document for HTTP version two, which is supported in all the major browsers.
>
> **[0:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=22)** However, from a protocol perspective, most of the concepts of the preceding versions, HGTP 1.1 and HTTP 1.0 still apply to web applications today, and especially for APIs.
>
> **[0:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=40)** This can be confirmed when we look at the specific document.
>
> **[0:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=46)** As it says here, HTTP version two is an optimized expression of the semantics of HTTP.
>
> **[0:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=57)** This specification is an alternative too, but does not obsolete the message syntax of HTTP 1.1, HTTPS existing semantics remain unchanged.
>
> **[1:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=69)** So basically there have been optimizations in HTTP two, but the essence of how HTTP works is still the same as it was in HTTP 1.1.
>
> **[1:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=84)** So let's have a look at that HTTP 1.1 specification, and we immediately get a warning that the document has been superseded.
>
> **[1:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=92)** Yes, it has, but still it's true today as well because the ideas are the same.
>
> **[1:44](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=104)** You have here a very nice list of people that have worked on HTTP 1.1.
>
> **[1:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=110)** The most famous person here is arguably Tim Burnes Lee, or now Sir Tim Burnes Lee.
>
> **[1:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=118)** But apart from a few other gentlemen, there is also a person called Roy Fielding.
>
> **[2:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=124)** And Roy Fielding will become a bit more important very soon.
>
> **[2:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=131)** We'll talk about him.
>
> **[2:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=133)** Let's stick with the HTP protocol first.
>
> **[2:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=136)** The abstract section is actually pretty descriptive because it basically says HGP is a stateless protocol, a protocol for distributed collaborative hypermedia information systems.
>
> **[2:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=155)** So basically a protocol for, well, [[HTML]] based content, I would say.
>
> **[2:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=161)** And it is stateless, which is actually the reason why later cookies have been invented.
>
> **[2:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=170)** And back in the days when the web was created, hypermedia was the idea behind that and is also the idea behind HTML.
>
> **[3:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=180)** So you have documents, and those documents, they're linked with each other and they can contain things like images.
>
> **[3:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=188)** But basically that's what we do when we are exchanging content via HTTP.
>
> **[3:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=196)** The type of contents is pretty long, and there are many interesting aspects covered here.
>
> **[3:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=204)** And what I would like to recommend is that you do not read the specification, because those things that are of utter importance for creating APIs will be covered in this course.
>
> **[3:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=219)** Just a generic understanding of how HTP works is important.
>
> **[3:44](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=224)** For instance here, number nine, we have method definitions.
>
> **[3:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=228)** This is where HTTP methods are defined, I guess we all know get, and then possibly post, but there are six others as well, and we will use some of them and also discuss why they are important, especially when working with an API.
>
> **[4:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=250)** Also, we have status code definitions.
>
> **[4:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=254)** So for instance, we have HGP status 200, okay, or probably the most famous one, 404 not found.
>
> **[4:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=264)** And these are also part of that specification.
>
> **[4:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=269)** So lots of stuff going on here, and specifically those HTP status codes will become important when we talk about designing our API, because we will use those status codes to, for instance, denote errors that occurred on the server, or invalid requests will be handled that way.
>
> **[4:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=288)** A very interesting HTP feature, at least in my book, is content negotiation.
>
> **[4:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=296)** Content negotiation is a mechanism where in a nutshell, the client tells the server what kind of data format it wants, and the server then looks at that information and returns the data in the format requested.
>
> **[5:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=315)** Typical API example, we have an API and the API sends data that doesn't define any format, right?
>
> **[5:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=323)** So when calling the API, we could say I'd like to have the data in [[JSON]] format, and then the server can send JSON, and next time we could say, ah, this time I would like to have the data in XML format, and the server then can send XML.
>
> **[5:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=338)** So that's possible.
>
> **[5:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=340)** It's baked into HTTP.
>
> **[5:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=342)** It's also possible with [[[ASP.NET]]](https://ASP.Net) core web API, but I'm sorry, we will only work with JSON in this course because that's the defacto standard for APIs these days.
>
> **[5:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=356)** All you have to remember is that HTP is very well suited for usage within APIs.
>
> **[6:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=364)** Clients readily supported and most use cases for APIs can be done very easily with what HTTP has to offer.
>
> **[6:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-in-a-nutshell?u=76281980&t=373)** We'll use some of the aspects of that specification and we will also use a concept called [[Representational State Transfer (REST)|rest]], which is actually hidden in that document here, and we'll talk about that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[HTML]] (2), [[ASP.NET Core]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** http (15), api (7), htp (5), json (3), hgp (2)
> **Versions:** 1.1 (5), 1.0 (1)
> **Documentation:** specification (5)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for instance (3)
> **CLI Commands:** dotnet (1)
> **URLs:** [asp.net](https://asp.net) (1)

#### [REST basics](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=0)** - [Instructor] Do you remember the name Roy Fielding, the person at the top position in the credits of the HTTP 1.1 specification we previously had a look at?
>
> **[0:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=11)** Well, that Roy Fielding got his PhD from UCI in the year 2000 and his dissertation was called, "Architectural Styles and the Design of Network-based Software Architectures."
>
> **[0:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=26)** Chapter five of his thesis was called, "[[Representational State Transfer (REST)|Representational State Transfer]], or [[Representational State Transfer (REST)|REST]]."
>
> **[0:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=32)** And you see the chapter introduction right here.
>
> **[0:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=36)** This REST principle is the basis for many, many APIs out there.
>
> **[0:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=41)** Sometimes REST is rather, let's say a religious topic where some people have very, very strong opinions.
>
> **[0:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=49)** I mean, everyone's opinionated, including me, but some people are more opinionated than others.
>
> **[0:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=55)** Let me just put it that way.
>
> **[0:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=57)** I try to handle this as pragmatic as possible because there's not one wrong and one right, or many wrongs and one right.
>
> **[1:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=65)** Some people just have different opinions.
>
> **[1:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=68)** I do have some points which I would like to make here.
>
> **[1:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=71)** First of all, REST isn't a technology, it's a design concept.
>
> **[1:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=78)** It's a programming paradigm, and the idea is that REST is using existing infrastructure.
>
> **[1:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=85)** REST is built on top of HTTP, because HTTP, as I mentioned before, comes with many features that are really, really useful, including for APIs.
>
> **[1:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=100)** The basic idea is that we are using URIs, Uniform Resource Identifiers, to access resources.
>
> **[1:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=111)** So URIs provide access to some kind of resource, and the next question is, in which form would I like to have the information about that resource?
>
> **[2:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=123)** Or, what do I want to do with that resource?
>
> **[2:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=126)** I'd like to read the resource, I'd like to write to the resource, et cetera.
>
> **[2:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=131)** That's something that comes from HTTP as well.
>
> **[2:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=134)** It will not be part of the URI, we will use other measures, for instance, HTTP headers or, most of the time, HTTP methods.
>
> **[2:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=149)** To give you an example, for operations like retrieving information, writing information, updating information, specific HTTP methods will be used.
>
> **[2:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=158)** So the URI might even be the same, but we'll use a different HTTP method.
>
> **[2:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=165)** Therefore, we are once again reusing existing infrastructure.
>
> **[2:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=171)** Although REST is flexible in many areas, Fielding still defined six architectural constraints.
>
> **[3:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=182)** And although I do not really want to go far into the philosophical space here, I think it's important to know about them.
>
> **[3:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=191)** First and foremost, RESTful APIs need to have a uniform interface.
>
> **[3:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=198)** For me, that's probably the most important aspect.
>
> **[3:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=201)** There are several approaches how to achieve this.
>
> **[3:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=204)** One thing Fielding recommended was something which is spelled H-A-T-E-O-A-S, an acronym for hypermedia as the engine of application state.
>
> **[3:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=216)** Yeah, I know that's pretty long and it comes with a couple of extra demands, including that the representation of each resource should contain specific links pointing to let's say, things that you can do with that resource.
>
> **[3:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=230)** For instance, if you have a category of items and each category of items contains a list of items, the representation of the category would contain a link to the list of the items in that category.
>
> **[4:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=242)** So that's one of those aspects, but we'll probably do it rather lightweight in our course.
>
> **[4:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=248)** Next up, is client-server.
>
> **[4:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=252)** Well, client-server means client-server architecture, of course, with the client and the server being independent from each other.
>
> **[4:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=262)** A client may evolve, a server may evolve, but that should not render the API useless.
>
> **[4:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=270)** And while we are working on our application, both the server and the client will be the same machine, but still they will be independent.
>
> **[4:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=279)** We can ensure this independence by having a contract between client and server, and that contract is then adhered to.
>
> **[4:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=289)** There's also a third item.
>
> **[4:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=291)** The API should be stateless.
>
> **[4:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=295)** If you consider where Fielding is coming from, HTTP is stateless, so API should be stateless as well.
>
> **[5:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=303)** Talk about self-fulfilling prophecy.
>
> **[5:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=306)** Also, the data retrieved from the API should be cacheable.
>
> **[5:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=314)** Retrieving a list of items, for instance, is something that could be cached, changing an item or adding a new one, rather not.
>
> **[5:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=323)** HTTP also has support for caching.
>
> **[5:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=326)** It's one of the chapters in the HTTP specifications.
>
> **[5:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=331)** And also a layered [[System Architecture]], something that REST needs to support, but I think that's obvious.
>
> **[5:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=339)** We have several layers in a typical web application anyway, so I would say that's a no-brainer.
>
> **[5:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=346)** And finally, we have something called code on demand, and that's optional.
>
> **[5:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=354)** The idea is that when you return data, you could also return code that can then be run by the client.
>
> **[6:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=361)** Hmm, in the web.
>
> **[6:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=363)** Don't we have that concept already?
>
> **[6:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=365)** Yeah, [[JavaScript]] is something that actually does that.
>
> **[6:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=370)** Again, remember where Fielding is coming from.
>
> **[6:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=373)** However, we will not use something like this in the API, but you try to adhere as much as possible to the other five constraints.
>
> **[6:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=384)** The idea is you should follow those constraints, but you absolutely do not have to follow those constraints if you find good reasons to ignore one or the other of those.
>
> **[6:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/rest-basics?u=76281980&t=396)** However, in our course, once we actually write our API, some of these aspects will be very obvious when you see our code and how our API is designed and works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (8), [[Representational State Transfer (REST)|Representational state transfer]] (1), [[System Architecture]] (1), [[JavaScript]] (1)
> **Env Vars:** http (11), rest (8), api (7), uri (2), uci (1)
> **Analogies:** for instance (3)
> **CLI Commands:** make (1), find (1)
> **Versions:** 1.1 (1)
> **Documentation:** specification (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [API design basics](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=0)** - [Instructor] There are so many approaches to API design.
>
> **[0:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=4)** So many best practices, naming standards, and, first and foremost, personal preferences.
>
> **[0:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=11)** I do have my preferences when creating an API, but you may have developed your own.
>
> **[0:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=18)** This course is on creating web APIs with .NET and [[[ASP.NET]]](https://ASP.NET) Core, so I do not want to force you to a specific style.
>
> **[0:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=27)** I would like you to learn how web APIs work with the .NET stack.
>
> **[0:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=32)** Therefore, I tend to handle things rather flexibly.
>
> **[0:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=35)** However, there are some best practices that many, if not most, people agree upon.
>
> **[0:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=39)** I'd like to briefly cover those.
>
> **[0:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=42)** The APIs we are working on will be for the fictional H+ Sport brand.
>
> **[0:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=47)** You see the fake website here, [hplussport.com](https://hplussport.com).
>
> **[0:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=51)** Well, the website is not fake, but the company just doesn't exist.
>
> **[0:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=55)** However, you can navigate around, and there is even an online shop here.
>
> **[1:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=61)** And that online shop has a couple of categories, activewear for men, for women, and some more.
>
> **[1:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=68)** And then, you can just pick a category.
>
> **[1:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=70)** And, in that category, you have a couple of articles, and some of those articles, they also have options, so usually sizes.
>
> **[1:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=84)** This is the idea here.
>
> **[1:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=86)** So you pick something you like, and then you can put it into a shopping cart, and then later might want to order it.
>
> **[1:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=96)** And, in the API we will be developing, we are working with that list of [[Microsoft Products|products]].
>
> **[1:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=103)** So we won't have a shopping cart, and we also won't have all of these different sizes.
>
> **[1:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=108)** But with the list of products, we can work really, really well, and I can tell you all of the important [ASP.NET](https://ASP.NET) Core web API features through that API.
>
> **[2:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=120)** But back to the API design.
>
> **[2:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=125)** When we set up the URIs that represent the resources in our shop, one common aspect that many agree upon is that we should use nouns, not verbs.
>
> **[2:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=139)** Verbs indicate an action, but actions in [[Representational State Transfer (REST)|REST]] are usually denoted by the appropriate HTTP method, so we are using nouns.
>
> **[2:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=149)** So how about this URL, or URI, to denote a list of all of the products that are available in the shop.
>
> **[2:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=162)** So we have the server name, api.[hplussport.com](https://hplussport.com), and, again, that's not the real domain locally.
>
> **[2:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=170)** That's just an example here.
>
> **[2:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=172)** And then, /products.
>
> **[2:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=174)** We are using HTTP GET, so the default HTTP method, and that also indicates that we would like to retrieve information.
>
> **[3:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=182)** We don't want to add products yet.
>
> **[3:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=184)** We'll talk about that later.
>
> **[3:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=186)** When I would like to access an individual product from a list of products, how can I do that?
>
> **[3:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=191)** The most common approach is to do something like this, api.[hplussport.com/products](https://hplussport.com/products), which represents all of the products, / and then the ID of the product, could be a GUID, and here it's a simple integer, it makes things easier for us.
>
> **[3:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=209)** So far so good.
>
> **[3:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=212)** Some of those products have variants or have other sub-properties for clothing, different sizes for instance.
>
> **[3:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=221)** How can we model them?
>
> **[3:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=222)** /products/123 gives us the product with the ID 123.
>
> **[3:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=230)** And what if we append /variants?
>
> **[3:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=234)** That could give us all of the variants for that specific product.
>
> **[3:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=238)** And you probably already guessed what happens if I like to take a look at one specific variant for one specific product.
>
> **[4:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=247)** Yes, gotcha.
>
> **[4:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=247)** /products/ID of the product /variants/ID of the variant.
>
> **[4:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=255)** This is all for retrieving data, but what should I do if I would like to add a product, update a product, delete a product?
>
> **[4:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=270)** That's when HTTP methods come in.
>
> **[4:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=274)** There's some subtle differences how you could do this.
>
> **[4:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=277)** But, in general, GET is for reading data.
>
> **[4:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=282)** POST is for creating a new item, so you do a POST request to /products.
>
> **[4:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=290)** PUT is updating an existing item.
>
> **[4:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=293)** So you would issue a PUT HTTP request to /products/123, or whatever the ID is.
>
> **[5:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=301)** And the DELETE method would delete an item.
>
> **[5:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=305)** The URI would be /products/123.
>
> **[5:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=310)** That's how you map HTTP methods to actions that should be taken.
>
> **[5:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=314)** Those actions are usually taken on a specific item or on a set of items.
>
> **[5:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/api-design-basics?u=76281980&t=321)** That item, or those items, they have a uniform URI, so this is what the REST principle is all about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (14), [[ASP.NET Core]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** api (6), http (6), net (4), uri (3), asp (2)
> **API Endpoints:** post  (2), put  (2), get  (1), delete  (1)
> **URLs:** [hplussport.com](https://hplussport.com) (3), [asp.net](https://asp.net) (2)
> **Analogies:** for instance (1)
> **Warnings:** gotcha (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Tools for API testing](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=0)** - [Instructor] There are many options how to test your API.
>
> **[0:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=4)** And the good news is it doesn't really matter what you're using, at least with regards to being able to follow this course.
>
> **[0:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=11)** However, I do have some preferences and I'd like to share them with you.
>
> **[0:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=16)** One tool I already mentioned is Postman from [getpostman.com](https://getpostman.com), which is a very powerful yet very flexible tool, especially if you need advanced features.
>
> **[0:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=30)** Here it is, and I create a new request and I'm pasting in the URL of the API endpoint of the API we have been creating within Visual Studio.
>
> **[0:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=46)** So I can pick the HTTP method, I'm sticking with Get, and then I hit send and then I get the data back.
>
> **[0:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=55)** It's automatically detected as [[JSON]], I see color coding.
>
> **[1:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=60)** I can have a look at the HEP headers that have been sent.
>
> **[1:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=64)** I can add extra headers, I can add a body, I can add authentication information.
>
> **[1:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=72)** So lots of features here.
>
> **[1:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=75)** I can also save the request.
>
> **[1:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=78)** I can create collections of requests and share them with my peers or with my development team so that everyone is testing the same way.
>
> **[1:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=87)** So really, really a powerful tool, which I absolutely like to use.
>
> **[1:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=94)** And also very important, we see the HTTP status code here, that's something we'll have some fun with later in this course.
>
> **[1:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=105)** The second option is the Browser Dev tools or web dev tools or F12 tools, because in most browsers you hit the F12 key and then those tools pop up.
>
> **[2:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=120)** So here we are in Chrome.
>
> **[2:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=123)** The weather forecast endpoint is already open, I hit F12.
>
> **[2:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=127)** And then in the network tab, I see all of the outgoing network requests.
>
> **[2:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=132)** So I just refresh the page so that we get the request.
>
> **[2:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=136)** And then in the request, we see all the headers, the response headers coming from the server for instance one, they're telling us that JSON is there also a request header we have sent to the server.
>
> **[2:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=150)** We can have a look at the response that came from the server.
>
> **[2:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=154)** So once again, we see its JSON nicely formatted.
>
> **[2:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=158)** I can right click on that request.
>
> **[2:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=162)** And then for instance, I can copy the request as a [[Fetch]] call.
>
> **[2:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=167)** So there's a [[JavaScript]] API, but I can also override headers for instance.
>
> **[2:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=173)** I can run the request again, I can save the request and then run it later.
>
> **[2:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=179)** So also quite nice tooling, but in my book, it's more suited for web applications because you see all of the elements on the page and can interact with them, run JavaScript code for APIs, I mean get requests work really well here.
>
> **[3:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=199)** Post requests are a bit more cumbersome.
>
> **[3:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=201)** So I would use if feasible and possible something like Postman, something specific.
>
> **[3:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=209)** And finally, there's also a third option I'd like to mention because it's relatively popular in the .NET space.
>
> **[3:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=219)** Still it's called Fiddler, originally from Telerik, now they're part of progress.
>
> **[3:44](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=224)** And what that is, it's a proxy that basically intercepts your traffic.
>
> **[3:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=230)** So you interact with your API and Fiddler kicks in and Fiddler captures that traffic and can then display it.
>
> **[4:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=241)** Here we are on the tool.
>
> **[4:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=243)** There's the request to the weather forecast endpoint.
>
> **[4:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=246)** And there are many others here.
>
> **[4:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=249)** And once again, we see the data, we can look at everything in the request.
>
> **[4:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=255)** We can even script things.
>
> **[4:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=257)** And again, this is rather a tool for specifically web applications when you really would like to know what kind of requests are being sent, whether you're missing something or whether you would like to change a request on the fly.
>
> **[4:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=271)** But in general, of all of the three tools mentioned, they are all good in their own area.
>
> **[4:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/tools-for-api-testing?u=76281980&t=279)** Postman is probably my number one because it's really suited for APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[JavaScript]] (2), [[Fetch]] (1)
> **Env Vars:** api (5), json (3), f12 (3), http (2), url (1)
> **Tools:** postman (3), visual studio (1)
> **Analogies:** for instance (3)
> **URLs:** [getpostman.com](https://getpostman.com) (1)
> **Cross-References:** later in (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)


### 2. Retrieving Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Controllers and actions](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=0)** - [Instructor] In this chapter, we will start implementing the API for HPlusSport with the probably easiest use case there is, retrieving data.
>
> **[0:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=12)** Remember what we've done so far, we've created a project using the [[[ASP.NET]]](https://ASP.NET) core Web API template.
>
> **[0:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=20)** And in that wizard, or alternatively when using the .NET [[CLI]] with the parameters the CLI provides us with, we made sure that we use controllers.
>
> **[0:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=34)** So I'd like to use controllers at first, and then later, we'll migrate over to minimal APIs.
>
> **[0:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=41)** And I would also like to enable OpenAPI support so that we get that Swagger UI that allowed us to try out the API directly in the browser.
>
> **[0:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=51)** The wording of the labels of those check boxes may differ a little bit depending on the version of Visual Studio and the version of the SDK, but basically that's what we set up.
>
> **[1:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=63)** And then we had a controllers folder in our application, and we didn't have a specific look at it, but we are about to implement such a controller right now.
>
> **[1:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=75)** Yet the controller that was created for us, it was a C# class, and it had, among other things, a method called Get, and it's called Get because it's responsible for handling GET requests.
>
> **[1:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=91)** And that method then made sure that some random weather forecast would be returned if the browser hits that endpoint or any client hits that endpoint.
>
> **[1:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=103)** And indeed then we were running the application, and we could confirm that in the browser or in Postman or in the Swagger UI, we do get data back when we send an HTTP GET request to that endpoint.
>
> **[2:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=120)** Now what shall we need to do when we would like to create our own controller?
>
> **[2:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=126)** And there are a few basics which we need to know, and after seeing them, we will actually implement one.
>
> **[2:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=133)** First of all, we have to set up the controller.
>
> **[2:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=136)** The controller handles the HTTP requests.
>
> **[2:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=140)** And each controller is a class where the name ends in Controller, and that class derives from ControllerBase, not from controller, that would be [ASP.NET](https://ASP.NET) Core MVC, but ControllerBase.
>
> **[2:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=154)** So we are inheriting from that class.
>
> **[2:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=157)** And then we are using the APIController class attribute, and that gives us some convenience features for our APIs.
>
> **[2:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=167)** So for instance, the content negotiation, which I previously mentioned, is enabled by using APIController and a few other things as well.
>
> **[2:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=177)** And then when we have a method, if we call it Get, it's responsible for GET.
>
> **[3:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=184)** We can also use an attribute, HttpGet, and then make sure that GET requests are handled by that method.
>
> **[3:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=191)** There are many other things involved here, and we'll see that as we go, but these are essentially the basics.
>
> **[3:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=199)** So let's head over to Visual Studio.
>
> **[3:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=203)** Here we go.
>
> **[3:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=205)** So file, new project, and [ASP.NET](https://ASP.NET) Core Web API is the template we want.
>
> **[3:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=213)** I'd like to call the project HPlusSport.API, because it's our API.
>
> **[3:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=219)** But the solution I just would like to call HPlusSport.
>
> **[3:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=222)** There might be other projects in that solution.
>
> **[3:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=225)** And in the next step, remember enable OpenAPI support is checked, and use controllers will be checked as well.
>
> **[3:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=238)** And then I create my project.
>
> **[4:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=241)** I'll have the solution called HPlusSport, and I have the HPlusSport.API project inside.
>
> **[4:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=249)** I have this weather forecast, but I'll get rid of it right now because we don't need it.
>
> **[4:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=254)** We would like to run our own.
>
> **[4:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=256)** And also in the controller's folder, the weather forecast controller is something I don't want, and we don't need it either.
>
> **[4:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=266)** When we go to the properties folder and launch settings, we see the setup of the project.
>
> **[4:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=273)** And what I'm doing here is first I remove the support for IIS.
>
> **[4:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=279)** Let's just use the built-in web server that comes with .NET called Kestrel.
>
> **[4:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=285)** Here's an HTTP and an HTTPS configuration.
>
> **[4:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=289)** And you see the random ports that were just created when I set up the project and will be used throughout this course is localhost port 7201 for HTTPS and 5222 for HTTP.
>
> **[5:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=304)** And I also get rid of IIS Express, we don't need that either.
>
> **[5:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=309)** And that's it.
>
> **[5:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=311)** Now it's time to create our very first controller.
>
> **[5:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=314)** I add a new controller, and then I get a list of items I can scaffold.
>
> **[5:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=322)** Actually there's also a template for creating a controller using the .NET CLI.
>
> **[5:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=326)** But in here, I just use the UI.
>
> **[5:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=330)** I have to switch over to API.
>
> **[5:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=332)** I don't want an MVC controller.
>
> **[5:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=333)** That's for a website or webpage.
>
> **[5:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=336)** I want an API controller.
>
> **[5:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=338)** And as you can see here, there are a couple of options.
>
> **[5:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=342)** So for instance, I can have an API controller that provides me with read and write endpoints, and it's using Entity Framework.
>
> **[5:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=350)** So the application is more or less built for me.
>
> **[5:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=354)** Well kind of.
>
> **[5:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=356)** But I think for our first steps, an empty API controller is a fine choice.
>
> **[6:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=364)** And then I have to pick a name.
>
> **[6:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=366)** Now we would like to provide an API for the [[Microsoft Products|products]] that HPlusSport provides.
>
> **[6:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=373)** So the API will then be called something like this, API.[HPlusSport.com/products](https://HPlusSport.com/products).
>
> **[6:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=381)** Remember when we were talking about API design.
>
> **[6:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=384)** And therefore, I will call this class ProductsController.cs.
>
> **[6:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=390)** The class name has to end in Controller, and the string before that is often part of the URL.
>
> **[6:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=398)** Everything can be configured, but I think that's a good start.
>
> **[6:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=401)** So I create that class, and you see here that the things which I saw on the slide are immediately visible here.
>
> **[6:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=410)** The class is derived from ControllerBase, and we are using the APIController attribute.
>
> **[6:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=416)** And now in the next step, I could just create a, say, public void, let's use void for now, GetProducts.
>
> **[7:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=428)** And I call the method GetProducts, not Get, because I like descriptive names of methods.
>
> **[7:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=434)** And the method name starts with Get, so it will work with GET.
>
> **[7:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=439)** But I also like to be explicit.
>
> **[7:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=442)** So I'm adding the HttpGet attribute here.
>
> **[7:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=446)** And that's just our start.
>
> **[7:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=448)** Don't worry, we'll talk about implementation and naming and those attributes in depth.
>
> **[7:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=454)** But we now have actually an API that doesn't do anything, admittedly.
>
> **[7:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=460)** We have our structure now, but of course we don't know what to do with it.
>
> **[7:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/controllers-and-actions?u=76281980&t=466)** There is one more ingredient missing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (3), [[CLI]] (3), [[Microsoft Products|Products]] (2)
> **Env Vars:** api (16), net (6), http (4), asp (3), cli (3)
> **URLs:** [asp.net](https://asp.net) (3), [hplussport.com](https://hplussport.com) (1)
> **Prerequisites:** set up (3), setup (1)
> **API Endpoints:** get  (3)
> **Tools:** visual studio (2), postman (1)
> **Exercise Files:** template (3)
> **Cross-References:** in the next (2)

#### [Routing basics](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=0)** - [Instructor] One missing ingredient is [[Routing]], or routing depending on where you live.
>
> **[0:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=6)** That means which URL maps to which endpoint, to which method, or, as it's called, to which action method, and of course to which controller.
>
> **[0:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=18)** There are, of course, several ways to achieve this, but the one I prefer most of the time is just to use attributes.
>
> **[0:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=26)** Here is a simple example.
>
> **[0:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=28)** We have the route attribute, and we use it like this, Route, and then the ("/[[Microsoft Products|products]]"), and that's basically the URL to call a specific method.
>
> **[0:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=46)** So if you use [Route("/products")] or [Route("/products")], and then we have a path or URL fragment, that URL fragment will be routed to the method that follows.
>
> **[1:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=60)** We can also use parameters.
>
> **[1:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=62)** So if you use /products/ and then in curly braces {id}, now if we call say /products/42, in the action method that follows, we can then have a parameter called id.
>
> **[1:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=80)** And the value of that ID parameter is taken from the route.
>
> **[1:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=86)** So we call /products/42, then the ID parameter for the action method is 42.
>
> **[1:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=94)** If the action parameter is optional, we can use a syntax like this, id and the question mark, and that's important because if you don't do this, then the ID parameter in our example is mandatory, which means that only if there is slash something appended after /products, then routing works, then that action method is found.
>
> **[2:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=120)** If no action method is found for a route, then usually we get HTTP 404 Not Found.
>
> **[2:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=130)** That's the appropriate HTTP error message.
>
> **[2:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=134)** Another thing, and you may have seen a part of this in the application so far already, is there is [controller], and this is a placeholder for the name of the current controller.
>
> **[2:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=149)** For instance, in our products controller, we would like to be /products part of the URL.
>
> **[2:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=157)** Of course we could put /products in our route attribute, but what happens then if we later happen to change the name of the controller, we would need to update the URL as well if we wanted it.
>
> **[2:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=172)** If however, we always would like to have the controller name in the URL, then we can just have a placeholder and that [controller] is then replaced by the controller name.
>
> **[3:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=183)** The controller name is the name of the controller class minus the controller suffix.
>
> **[3:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=189)** So for the products controller, it would be products.
>
> **[3:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=194)** Let's have a look at the code we have so far.
>
> **[3:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=196)** We have our ProductsController, which is our API controller, and there is a route for the whole controller.
>
> **[3:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=204)** So this gives a base route, and for anything appended to the URL there, we can use route or route attributes and our action methods.
>
> **[3:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=216)** The route here that the template suggests is api/controller, so in our case that means api/products.
>
> **[3:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=227)** That API prefixe is there because maybe, just maybe, the project also contains regular web content webpages, and therefore maybe all of the API aspects should be in a subfolder or should have a URL prefix, like api.
>
> **[4:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=245)** So the base route here is api/products because product is the controller name, and as I already mentioned, the method name here starts with get, so it is responsible for GET requests, and I also made it clear by adding the HttpGet attribute.
>
> **[4:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=265)** Now maybe it would be a good idea if the method actually return something.
>
> **[4:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=270)** Let's use something simple.
>
> **[4:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=272)** Let's do public string and then return OK.
>
> **[4:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=278)** Yes, I know really simple, but we can use that to actually validate whether our application is running as expected.
>
> **[4:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=289)** So we can build the project.
>
> **[4:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=291)** Then the browser launches with the Swagger UI, and then we actually see the endpoint in action.
>
> **[5:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=302)** Here's Swagger with the endpoint, and if I just load the route, as we've already discussed, then there's nothing here but /api/products, which is the route we chose.
>
> **[5:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=317)** Then we indeed get OK here.
>
> **[5:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=320)** We can go into the network tab and see the request, which is here.
>
> **[5:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=329)** Let me move this up a little bit.
>
> **[5:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=330)** And then we see OK came back, and if you look at the HTTP headers and the response headers we saw, ah, Content-Type.
>
> **[5:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=338)** So what type of data do we get, text/plain.
>
> **[5:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=342)** So that is not [[JSON]], that's just plain text because if our method returns a string, then it's considered just plain text.
>
> **[5:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=352)** If we return something else, structure, an object, something like that, it'll be turned into JSON.
>
> **[6:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=360)** And we will see that in a minute.
>
> **[6:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/routing-basics?u=76281980&t=363)** But first, let's work on having more elaborate real world data than just a simple OK.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (15), [[Routing]] (3), [[JSON]] (2)
> **Env Vars:** url (9), http (3), api (3), json (2)
> **Definitions:** is a  (3), means that (1)
> **API Endpoints:** get  (1), /api/products (1)
> **Exercise Files:** template (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Creating a data model](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=0)** - [Instructor] Before we actually start implementing the API, we have to set up our data model, the APIs for HPlusSport.
>
> **[0:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=8)** So let's check the HPlusSport shop here.
>
> **[0:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=11)** And in the shop, we have several categories, and those categories can have an arbitrary number of [[Microsoft Products|products]].
>
> **[0:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=18)** So let's just jump into one of those categories and let's pick a product.
>
> **[0:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=24)** And we have a name and we have a price.
>
> **[0:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=28)** We also have sizes and colors and options.
>
> **[0:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=31)** We'll ignore them because we don't need them for our API, at least not within the scope of our course.
>
> **[0:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=40)** So the actual data model is a bit more complex than what we are doing.
>
> **[0:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=43)** But with those information so far, we can implement quite a bit with a [[[ASP.NET]]](https://ASP.NET) Core web API.
>
> **[0:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=52)** Note that the cross-back training tank here somehow doesn't show a price.
>
> **[0:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=57)** Why? Because it's not available.
>
> **[0:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=59)** So we should also have an option in our model that something is just currently out of stock.
>
> **[1:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=66)** Let's head back over to our application.
>
> **[1:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=70)** Here in Visual Studio, I first set up a new folder where I will put my model classes, and I'll call that folder Models.
>
> **[1:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=83)** And, of course, you can put your models wherever you want to.
>
> **[1:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=87)** So that folder name is just arbitrary chosen by me.
>
> **[1:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=92)** We have two model classes.
>
> **[1:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=93)** We have categories.
>
> **[1:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=94)** So I'll just add a new class and I'll call it Category.
>
> **[1:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=101)** It'll automatically generate Category.cs.
>
> **[1:44](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=104)** And I'll also add a class called Product, which I then use to model my product.
>
> **[1:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=114)** So first of all, I will later be using Entity Framework Core for making sure that the data is persistent.
>
> **[2:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=123)** So we are using Entity Framework Core to talk to a data store without the need to write any custom [[SQL]].
>
> **[2:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=132)** This, however, requires that each model class has an identifier.
>
> **[2:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=138)** And I'll just use public int Id.
>
> **[2:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=143)** So we'll have an auto value, and I think that's good enough.
>
> **[2:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=147)** So the products will then be numbered, 1, 2, 3, 4, 5, et cetera.
>
> **[2:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=152)** And then we just have a couple of properties.
>
> **[2:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=155)** How about string Sku and maybe a Name?
>
> **[2:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=163)** And also a Description, of course.
>
> **[2:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=167)** And then a price would be a good idea.
>
> **[2:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=171)** So we should do a decimal and then Price.
>
> **[2:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=177)** And we also talked about that items could be out of stock.
>
> **[3:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=183)** So I'll do a boolean and I'll call it IsAvailable.
>
> **[3:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=188)** And for the strings, I give them a default value, and that's string.Empty.
>
> **[3:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=194)** And I'll do it for all of the three strings here.
>
> **[3:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=197)** And then I have my products represented, but I would also like to be interested in which category that product is in.
>
> **[3:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=210)** And first of all, it's a property.
>
> **[3:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=213)** I would like to have the CategoryId, but, of course, I would also like to be able to point to the category from that product.
>
> **[3:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=226)** So I would like to add a public virtual Category.
>
> **[3:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=230)** And I'll also call it category.
>
> **[3:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=233)** That is pretty good so far.
>
> **[3:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=236)** Let's maybe quickly switch over to the Category class where I also set up a couple of properties.
>
> **[4:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=247)** Once again, I start with the int Id because that's what's required from Entity Framework Core.
>
> **[4:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=256)** And then just have a Name of the category, which defaults to string.Empty.
>
> **[4:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=263)** And I'd like to point back to the products.
>
> **[4:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=265)** So public virtual and then List of products.
>
> **[4:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=269)** I can have an arbitrary number of products.
>
> **[4:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=273)** And that's almost it. There is a small catch.
>
> **[4:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=278)** And the catch is this.
>
> **[4:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=280)** In the Product class, I can point to the category of a product.
>
> **[4:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=287)** In the Category, I can point to the list of products that category has, including the product we just had.
>
> **[4:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=296)** In the Product, I can point back to the Category.
>
> **[4:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=299)** In the Category, I can point back to the products, and therefore I might get an infinite loop and this is later serialized into [[JSON]].
>
> **[5:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=308)** And therefore, when this Product is converted into JSON, eventually, for usage in the API, I can use all of the data here.
>
> **[5:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=320)** I can also use the CategoryId, but I can't serialize the Category.
>
> **[5:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=325)** And, therefore, I am adding an attribute called JsonIgnore.
>
> **[5:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=332)** And what JsonIgnore does is it removes that property when the data is serialized into JSON.
>
> **[5:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/creating-a-data-model?u=76281980&t=343)** So we have our Product model, we have our Category model, what we don't have yet is data, but that will be taken care of next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (8), [[JSON]] (3), [[ASP.NET Core]] (1), [[SQL]] (1)
> **Env Vars:** api (4), json (3), asp (1), net (1), sql (1)
> **Prerequisites:** set up (3)
> **Definitions:** is a  (2)
> **URLs:** [asp.net](https://asp.net) (1)
> **Tools:** visual studio (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Using entity framework core](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=0)** - [Instructor] After creating the model classes, the next step will be to add Entity Framework Core to the project, we are using [[Microsoft]]'s object relational mapper, or OR mapper, to talk to the database, which will provide us with an API to work with a data store, and we don't have to write any [[SQL]] ourselves.
>
> **[0:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=22)** Entity Framework Core does all of the magic.
>
> **[0:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=26)** And then, we just need to make sure that Entity Framework Core knows about our model classes, and then the OR mapper does everything automatically for us.
>
> **[0:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=37)** Please note that Entity Framework Core is beyond the scope of this course, so I'll tell you exactly what you need to know, but for any other questions that go more in depth, and for all of the background information, I can only refer you to the excellent Entity Framework Core content in the [[LinkedIn]] Learning Library.
>
> **[0:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=58)** But now, over to Visual Studio, where we could just go to Manage NuGet Packages, and then browse all available packages, and then install Entity Framework Core and anything else we need, see, it's even the first match here.
>
> **[1:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=77)** But, I'll show you the command line way of things, so that even without Visual Studio, you can add packages.
>
> **[1:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=86)** I'm using the Package Manager Console, that include it here, I just increase the font size a little bit, then I call Install-Package, then Microsoft.EntityFrameworkCore.
>
> **[1:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=103)** And that then installs the package into our project.
>
> **[1:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=106)** And I would also like to install Microsoft.EntityFrameworkCore in memory, because I intend to use an in-memory database for our sample application.
>
> **[1:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=119)** That of course means, whenever we restart the application, everything is gone.
>
> **[2:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=124)** But that's not a problem, I would say, because for testing purposes, this just works fine.
>
> **[2:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=135)** Now let's work on configuring everything so that Entity Framework Core can do its thing.
>
> **[2:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=143)** The first thing we need is a so-called context.
>
> **[2:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=148)** That's the mechanism that Entity Framework Core uses.
>
> **[2:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=151)** So that Entity Framework Core is married with our models.
>
> **[2:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=157)** I'll add such a context as a class in our Models folder, and since we are providing an API for the H Plus sport shop, I'll just call it ShopContext.
>
> **[2:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=171)** But of course the name is arbitrary.
>
> **[2:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=174)** I just have to make sure that it derives from DbContext.
>
> **[2:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=178)** And that comes, as you can see, from Microsoft.EntityFrameworkCore, I hit Control dot so that the using Microsoft Entity Framework Core is suggested, so that I'm adding that.
>
> **[3:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=192)** I first start with the constructor, ShopContext, and it expects DBContextOptions of ShopContext.
>
> **[3:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=202)** And basically I just refer this to the base constructor.
>
> **[3:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=205)** So not much work I'm doing here.
>
> **[3:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=209)** It's getting more interesting when I configure the context, so, we later talk to the context, give us the [[Microsoft Products|products]].
>
> **[3:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=218)** And in turn, Entity Framework Core then issues a select statement to the data store, retrieving all of the products.
>
> **[3:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=225)** So we have to configure the context so that there is a list of products, and we are not using a list here, we have to use a DB set of product.
>
> **[3:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=234)** And we call it Products, and later, accessing products means we access all of the products stored in the database or in the data store.
>
> **[4:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=243)** The same thing is true, of course, for the categories.
>
> **[4:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=248)** And I call this Categories, plural.
>
> **[4:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=252)** And then, I would also like to have some sample data, I'd like to fill the model.
>
> **[4:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=260)** And if you look at the exercise files, there's already a prepared class, ModelBuilderExtensions, which are built.
>
> **[4:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=267)** And as you can see here, we are adding, in our case, five categories and 33 products, so yes, I type this all, by hand, for you.
>
> **[4:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=279)** And the seed method basically fills the model and makes sure that we have data to work with.
>
> **[4:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=288)** Now, I would like to call this, when the model creating event takes place, that's the right time in the life cycle, so I do a protected override void, and then OnModelCreating.
>
> **[5:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=302)** And, instead of calling the base OnModelCreating, I just configure everything, so I say modelBuilder, and then Seed, so I'm calling the extension method I just showed you, but before filling the model, I have to define the relationships, so that a product belongs to a category, and a category can have an arbitrary number of product, and that looks like this, so modelBuilder.
>
> **[5:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=331)** And then if you look at the category, as an entity, the category has many products, and you see it's a fluent API here.
>
> **[5:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=343)** And each product has one, and only one, category.
>
> **[5:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=348)** And we also have a foreign key.
>
> **[5:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=351)** And remember that the product class has a category ID property, if you recall.
>
> **[6:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=361)** And that category ID will be the ID from the category class.
>
> **[6:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=367)** That's the foreign key relationship we have been defining here.
>
> **[6:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=371)** And that is our shop context.
>
> **[6:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=374)** We are almost done, but we have to tell the application to use that context, and to use an in-memory database for that.
>
> **[6:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=383)** And the right place for this final task is Program CS.
>
> **[6:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=387)** And in Program CS, we call builder.Services, and then AddDbContext, DB context of ShopContext.
>
> **[6:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=399)** So use that context, and I'd like to set options.
>
> **[6:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=405)** And the option is UseInMemoryDatabase, that's why I installed the NuGet package before, and I just have to provide an arbitrary name for the database, how about Shop?
>
> **[6:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=417)** Now everything is working together, we have our product model, represent the product, we have our category model, representing a category.
>
> **[7:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=427)** We defined the relationships for that, we are using Entity Framework, we will have a list of products, we'll have a list of categories, and we are tying everything together here in Program CS.
>
> **[7:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=440)** So we are essentially done with preparation.
>
> **[7:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-entity-framework-core?u=76281980&t=443)** So next up we will actually write the API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (9), [[Microsoft]] (5), [[SQL]] (1), [[LinkedIn]] (1)
> **Prerequisites:** install (3), configure (3)
> **Env Vars:** api (4), sql (1)
> **Tools:** visual studio (2), command line (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** modelbuilder (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)

#### [Returning a list of items](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=0)** - [Instructor] It's now time to create our first real API endpoint, one that returns several items at once.
>
> **[0:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=7)** For instance, all of the categories we have in our system or all of the [[Microsoft Products|products]] we have in our system.
>
> **[0:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=13)** There are different approaches to achieve that, and the first one that I think is the most intuitive one is this.
>
> **[0:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=22)** We have a method, and that method is responsible for get requests.
>
> **[0:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=28)** So we have the HttpGet attribute and it's called GetXxx.
>
> **[0:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=32)** GetAllProducts in my case.
>
> **[0:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=35)** And this method just returns a list of products.
>
> **[0:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=41)** Db is our database context, a shop context instance in our example.
>
> **[0:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=47)** And that gives us the list of products.
>
> **[0:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=49)** Remember that the shop context had this products property and this will just retrieve the data.
>
> **[0:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=59)** The method returns the list and [[[ASP.NET]]](https://ASP.NET) core web API automatically serializes that into [[JSON]].
>
> **[1:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=67)** So let's go over to Visual Studio.
>
> **[1:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=72)** This is the method and I'd like to call it GetAllProducts.
>
> **[1:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=76)** This could give you a pointer what other kind of methods we will write.
>
> **[1:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=81)** And in that method we need the shop context and we probably need this in other methods, as well.
>
> **[1:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=90)** So how about we create a private read only ShopContext and I just call it underscore context.
>
> **[1:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=99)** You could also call it db, but that's the naming I like.
>
> **[1:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=103)** And then in the constructor, we use [[Dependency Injection]] for the ShopContext and then just set that property.
>
> **[1:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=115)** And we have to do one more thing.
>
> **[1:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=117)** Remember that we had this seed method which I prepared which fills the database which contains the data for our data store.
>
> **[2:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=128)** This will not run automatically.
>
> **[2:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=131)** Instead, we need to make sure that the data is present.
>
> **[2:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=138)** And there is a method and it looks like this, underscore context.
>
> **[2:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=142)** So our context, then Database, and then EnsureCreated.
>
> **[2:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=148)** And only if we have this, the seed method is called when we first try to access the context and access the list of products.
>
> **[2:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=156)** And now we can specifically do that.
>
> **[2:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=159)** So further down below here in GetAllProducts, we just change the signature to, how about IEnnumerable of Product, and then we just return underscore context.Products and then ToArray.
>
> **[2:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=178)** Should be good enough.
>
> **[3:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=181)** And that's basically it.
>
> **[3:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=182)** So we have our ShopContext which we get via dependency injection, and via that ShopContext, we get access to the products, the GetAllProducts method returns a list of products, and thanks to Web API, we just don't get an array or a list.
>
> **[3:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=202)** No, we get JSON, and that's what we'll see when we launch the application.
>
> **[3:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=207)** So the browser's opening up.
>
> **[3:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=210)** We see the /api/Products endpoint.
>
> **[3:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=214)** I hit Try it out.
>
> **[3:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=216)** And when I hit the button here, then there will be a small delay because then that seed method runs, and in the end when we get data back, yes, we get a response body and you see all of the items, all 33 of them are now returned by our method.
>
> **[3:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=236)** And you see that's also valid JSON and we didn't have to do anything.
>
> **[4:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-a-list-of-items?u=76281980&t=240)** We were just returning a C# object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (9), [[JSON]] (3), [[Dependency Injection]] (2), [[ASP.NET Core]] (1)
> **Env Vars:** api (3), json (3), asp (1), net (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **API Endpoints:** /api/products (1)
> **Tools:** visual studio (1)
> **Analogies:** for instance (1)

#### [Using ActionResult](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=0)** - [Instructor] There is a second approach to return something from our API, a different return type.
>
> **[0:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=6)** It's called ActionResult.
>
> **[0:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=9)** That's a type that basically means, okay, there is an action method and it returns quote unquote something.
>
> **[0:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=16)** There are two changes in the implementation, though.
>
> **[0:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=18)** First of all, obviously the return type of the GetAllProducts method needs to be ActionResult.
>
> **[0:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=24)** It can also be ActionResult of the actual data that we want the API to return.
>
> **[0:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=30)** And the second change is that we cannot end the method with ReturnProduct because (indistinct) of product does not match the type ActionResult.
>
> **[0:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=42)** But what we can do when we work with ActionResult is that we specifically provide the HTTP status code we want to return.
>
> **[0:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=50)** So far we haven't had any errors or issues, so it was always HTTP 200 OK as the default.
>
> **[1:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=60)** But later we might have implementations where we verify arguments or anything else, and in that specific case, there might be a path in the method that says we return HTTP, I don't know, 404 not found, or we return HTTP 200, and this flexibility is something we gain when using ActionResult.
>
> **[1:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=83)** For most of the HTTP status codes, there is a helper method that essentially returns that status code and data that then will be serialized into [[JSON]].
>
> **[1:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=93)** For HTTP 200 OK, the method is called Ok as well.
>
> **[1:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=98)** So return Ok of [[Microsoft Products|products]] returns HTTP 200 plus the products then in serialized format.
>
> **[1:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=108)** Let's just take a quick look in Visual Studio.
>
> **[1:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=112)** So here's our GetAllProducts method and I would like it to return an ActionResult.
>
> **[1:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=119)** I could type it like this or I can just leave it as it is.
>
> **[2:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=126)** And now, of course, I have to return an ActionResult, and the Ok method returns an Ok object result which derives from ActionResult.
>
> **[2:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=137)** So this works, really subtle change, but gives us so much more flexibility.
>
> **[2:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=144)** And when we launch that and go to the browser, and how about this time, we just directly go to api/products.
>
> **[2:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/using-actionresult?u=76281980&t=154)** Then you see we get the same list of the same 33 articles in the HPlusSport inventory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[JSON]] (1)
> **Env Vars:** http (7), api (2), json (1)
> **Definitions:** is a  (2), basically means (1), is an  (1), is called (1)
> **UI Navigation:** go to (2)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Returning an item](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=0)** - [Instructor] When returning just one item, technically there doesn't seem to be a big difference.
>
> **[0:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=7)** We just return one product instead of a list of [[Microsoft Products|products]].
>
> **[0:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=12)** However, we should probably tell the API which product we want.
>
> **[0:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=18)** Remember that when we were talking about API design, we suggested a URL like this /products/, and then the id of the product.
>
> **[0:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=29)** We can reflect that in code.
>
> **[0:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=32)** So we are using the HttpGet attribute and we are also using the Route attribute, and we set the route to /products/ and then the placeholder of id.
>
> **[0:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=45)** Later when we have a look at our code, we already have that base Route/products or /API/products, so we can abbreviate that a little bit.
>
> **[0:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=55)** But that is the idea here.
>
> **[0:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=57)** If we call /product/42, then the action method gets a parameter.
>
> **[1:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=65)** It's called id because that is the name of the placeholder we chose, and the value of that will be 42.
>
> **[1:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=74)** The alternative approach, of course, would be to not return an ActionResult but to return a product, but the [[Representational State Transfer (REST)|rest]] of the syntax and the [[Routing]] attribute would be exactly the same.
>
> **[1:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=88)** I, of course, prefer the ActionResult way, because what do we do if the product doesn't exist?
>
> **[1:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=95)** But first let's head over to the implementation.
>
> **[1:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=100)** Remember that we already have our base Route API/ and then the controller name, so API/products.
>
> **[1:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=108)** So we just have to append the id part, so we could do something like this: Route and then curly brace this id.
>
> **[1:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=119)** However, we can abbreviate that as well.
>
> **[2:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=121)** We can put that into the HttpGet attribute.
>
> **[2:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=126)** It's a bit a matter of taste.
>
> **[2:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=129)** Personally, I prefer having individual attributes for individual tasks.
>
> **[2:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=136)** Yes, then the code might look a little bit more ugly (laughs) if you have a lot of those attributes.
>
> **[2:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=141)** But still, I think that's more explicit.
>
> **[2:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=144)** On the other hand, since what you see now seems to be the more common approach being used, I wanted to show you that so that if you encounter this in the wild, you immediately know what is going on.
>
> **[2:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=159)** But, of course, we don't put this here, instead we just create a new method for that purpose.
>
> **[2:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=168)** So we have HttpGet of, and then curly braces id, that's our placeholder, for a public ActionResult.
>
> **[2:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=179)** GetProduct of int id.
>
> **[3:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=183)** And that then can be used to find the product and then return it.
>
> **[3:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=189)** Let's just start real simple.
>
> **[3:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=191)** So we have a product, and that's in the context, all of the products.
>
> **[3:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=197)** Find the one with the given id, because id is our identifier here, and then return Okay of product.
>
> **[3:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=208)** That's pretty simple, isn't it?
>
> **[3:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=211)** I mean, once again, we just have to retrieve the data from somewhere and then return it, and that's what makes ASP NET Core web API so intuitive to use, at least for common scenarios.
>
> **[3:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=223)** We have our new endpoint here I had tried out.
>
> **[3:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=228)** I'm interested in the article with, let's say, id of one, the first one.
>
> **[3:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=235)** And indeed, we get our Grunge Skater Jeans.
>
> **[3:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=238)** So it works really, really well.
>
> **[4:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=241)** But what happens if I'm interested in the article with the id 42?
>
> **[4:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=248)** Remember, there are only 33 in the inventory.
>
> **[4:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=252)** And what do we get back?
>
> **[4:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=254)** 204 Undocumented, nothing.
>
> **[4:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=257)** An Http status code starting with a two means success, but I don't count this as success.
>
> **[4:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/returning-an-item?u=76281980&t=263)** So we are in dire need for some proper error handling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (7), [[Representational State Transfer (REST)|Rest]] (1), [[Routing]] (1)
> **Env Vars:** api (6), url (1), asp (1), net (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Handling errors](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=0)** - [Instructor] We just got an HTTP 204 status code, I just looked it up in the specification, it means no content.
>
> **[0:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=9)** And that absolutely makes sense, we were asking for the item with the ID 42, there is no such item, so there's nothing to server could have returned.
>
> **[0:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=20)** But remember that in the [[Representational State Transfer (REST)|REST]] principle, the HTTP status codes are taken into account, and there is a status code for we can't find anything, that's HTTP 404 not found.
>
> **[0:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=35)** So actually we should return that in those cases.
>
> **[0:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=38)** And this is how error handling works in general.
>
> **[0:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=40)** Here's our implementation so far.
>
> **[0:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=43)** So we have our action method, it's finding a product and then it does return okay of product, which means HTTP status code 200 converted or serialized into [[JSON]] will be returned.
>
> **[0:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=58)** But what if there is no such product?
>
> **[1:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=62)** We would like to return HTTP 404 and since the status code that's called okay, 200, is represented by the okay method, you guessed right there is also a not found method and return not found essentially returns HTTP 404.
>
> **[1:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=83)** And this is how error handling commonly works in web APIs.
>
> **[1:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=90)** We return 200 if everything is okay, if something is not found, for instance, we have an ID that just doesn't exist, it's 404 not found.
>
> **[1:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=100)** And if some parameters have incorrect values, then we could do HTTP 400, bad request.
>
> **[1:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=108)** And of course there's a method called bad request that does specifically that, let's improve our implementation.
>
> **[1:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=116)** So we have our product, but if it's null then we can return not found.
>
> **[2:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=126)** Subtle change, but now that API endpoint just makes much more sense because it handles at least this error quite gracefully.
>
> **[2:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=138)** So we try it out.
>
> **[2:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=140)** Once again, let's start with ID one and that gives us the grunge skater jeans.
>
> **[2:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=146)** And if we do 42, then we get 404 file not found
>
> **[2:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=155)** or not found.
>
> **[2:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=156)** And actually there is even a URL in here.
>
> **[2:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=160)** So how about we open that one and it brings us directly to the HTTP specification where the 404 not found status code is explained.
>
> **[2:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/handling-errors?u=76281980&t=174)** And again, subtle change but typical for web APIs and made really easy with ASP .NET Core web API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[JSON]] (1)
> **Env Vars:** http (8), api (2), rest (1), json (1), url (1)
> **Documentation:** specification (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Making the API asynchronous](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=0)** - [Instructor] And finally, since we are working with the data store so much, we may want to make our actions asynchronous.
>
> **[0:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=8)** That's a rather easy task thanks to what .NET offers us.
>
> **[0:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=13)** All we need to do is change the method signature.
>
> **[0:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=16)** So instead of public IEnumerable of product, we can do public async task of IEnumerable of product, and then we have to call await within that method whenever we have another asynchronous call.
>
> **[0:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=34)** So for instance, if we call ToList on the [[Microsoft Products|products]] that we receive via Entity Framework Core, we could do this asynchronously because then when we call ToList, the data from data store is materialized so we can access it.
>
> **[0:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=52)** Entity Framework Core tries to do that as late as possible because anything we change in our query could change the sequel that is then sent to the data store.
>
> **[1:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=62)** And therefore this materialization phase is always important and can also take a tiny bit of time, and therefore an asynchronous call might be a good idea.
>
> **[1:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=73)** Also, when working with ActionResult, we just do public async task of ActionResult and then can still return Okay of products, in our case.
>
> **[1:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=89)** Really tiny change, so let's do that real quick.
>
> **[1:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=94)** Let's start with GetAllProducts, which will now turn into a public async method returning a task of ActionResult.
>
> **[1:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=105)** And then instead of ToArray, we can do ToArrayAsync.
>
> **[1:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=110)** And we have to await that.
>
> **[1:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=113)** And this will work once we use Entity Framework Core here, in that controller as well.
>
> **[2:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=123)** And for the GetProduct method, which will now also be an async task, we do not call Find, we call FindAsync, because you can now await that.
>
> **[2:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=139)** And in the end we just return NotFound, or return Okay of product.
>
> **[2:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=148)** Subtle change, and depending on what your API is doing, this can be beneficial for the performance.
>
> **[2:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/making-the-api-asynchronous?u=76281980&t=156)** It's not a must that you do everything in an asynchronous way, but if you do, it's really very easy with the essentially syntax sugar that .NET is providing us with async and await.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **Env Vars:** net (2), api (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Working with minimal APIs](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=0)** - [Instructor] We have reached a first milestone with our controller-based API.
>
> **[0:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=4)** We can retrieve all [[Microsoft Products|products]] and a single product.
>
> **[0:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=8)** Now how about we migrate this to minimal API so that you see the same thing, but using the alternative approach for creating APIs with [[[ASP.NET]]](https://ASP.NET) Core.
>
> **[0:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=20)** In Program.cs, what we need to do is, we have to add several calls to app.Map and then Get, which basically maps a get request to an endpoint.
>
> **[0:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=33)** So far, we have the endpoint/api/Products, et cetera.
>
> **[0:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=37)** How about we skip the /api for the minimal APIs?
>
> **[0:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=42)** So just /products, and then we have to provide the implementation here.
>
> **[0:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=51)** We can do that as a Lambda expression.
>
> **[0:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=54)** But don't we use the ShopContext somehow?
>
> **[1:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=62)** How do we get that?
>
> **[1:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=64)** How is that possible or feasible?
>
> **[1:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=65)** Well, what we can do is, we can use [[Dependency Injection]] again, and here's how that is working.
>
> **[1:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=77)** We just get the ShopContext as a parameter here, automatically.
>
> **[1:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=85)** If we want to do that asynchronously, we can do async, and then adjust return await _context.Products.ToArrayAsync
>
> **[1:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=103)** and that's it.
>
> **[1:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=105)** And the other endpoint would be app.MapGet, /products/ and then the id as the placeholder, and once again, we have an asynchronous method that receives the id, but of course also the ShopContext.
>
> **[2:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=126)** Call _context, and the implementation is basically what we are pulling from the products controller with some changes.
>
> **[2:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=138)** So let me just copy and paste that, because there will now be a difference.
>
> **[2:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=144)** We cannot return NotFound or Ok.
>
> **[2:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=148)** What we have to do is we have to use a different type and the different type is accessible via Results.
>
> **[2:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=157)** Then we have Results., and here we have a list of the major HTTP status codes, for instance, NotFound.
>
> **[2:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=170)** So that's what we're using here.
>
> **[2:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=171)** We are returning Results.NotFound, and otherwise, we are returning Results.Ok and then off the product we want to return.
>
> **[3:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=184)** That's basically the idea here.
>
> **[3:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=189)** Let's run this now, and see how Swagger UI is updated thanks to our new two endpoints we've just added to the system.
>
> **[3:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=203)** Here we are, two endpoints there, so /api/Products, that's the controller-based API, /products, these are the two minimal APIs.
>
> **[3:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=214)** So how about we try this one out, we run it, and we wait for the results, and we get nothing back.
>
> **[3:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=223)** We don't have any data.
>
> **[3:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=225)** Do you know what we are missing?
>
> **[3:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=228)** In the controller, we were calling EnsureCreated.
>
> **[3:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=233)** We don't have that call in Program.cs.
>
> **[3:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=236)** Well, we don't have it yet, and it looks a little bit different here.
>
> **[4:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=243)** I just show you what you need to do, so the common solution here is to set up a scope, and that scope is created, and with that scope, we create our db context, so scope.ServiceProvider, and then GetRequiredService, and our service is of course the ShopContext.
>
> **[4:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=270)** And then, once we have that, we just do await, and then db.Database.EnsureCreatedAsync.
>
> **[4:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=281)** So I'm showing you the asynchronous way of calling EnsureCreated here as well.
>
> **[4:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=289)** And now, we make sure that yes, the database will be created, the seed method will be called, and therefore, if we return to the application, go to /products, try it out, run Execute, then this time, we are getting, once again, our 33 products.
>
> **[5:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/working-with-minimal-apis?u=76281980&t=315)** And that's how you migrate the controller-based API to a minimal API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (10), [[ASP.NET Core]] (1), [[Dependency Injection]] (1)
> **Env Vars:** api (5), asp (1), net (1), http (1)
> **API Endpoints:** /api/products (2)
> **CLI Commands:** make (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)

#### [Challenge: Searching items](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/challenge-searching-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/challenge-searching-items?u=76281980&t=0)** - [Narrator] Time for a quick coding challenge.
>
> **[0:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/challenge-searching-items?u=76281980&t=8)** Take the API as it is, but add a new endpoint and that endpoint should not return a list of all [[Microsoft Products|products]], but only of those products that are in stock.
>
> **[0:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/challenge-searching-items?u=76281980&t=21)** So think about a good URI for that endpoint, and then implement it in a [[[ASP.NET]]](https://ASP.NET) core web API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[ASP.NET Core]] (1)
> **Env Vars:** api (2), uri (1), asp (1), net (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Searching items](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=0)** - [Instructor] Possibly the hardest part of this challenge was to find a good URI.
>
> **[0:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=10)** I would recommend /api/[[Microsoft Products|products]]/available.
>
> **[0:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=17)** So all of the available products will be returned, and if you would like to go down that route, no pun intended, then here's how this can be implemented.
>
> **[0:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=27)** So we use HttpGet and our route is now available.
>
> **[0:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=33)** And then we have public async Task.
>
> **[0:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=38)** And then, very similar to get all products, we can use ActionResult or ActionResult of IEnumerable of Product.
>
> **[0:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=52)** Both will work.
>
> **[0:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=53)** GetAvailableProducts.
>
> **[0:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=57)** And then, essentially, we return await, and then _context.Products.Where, product IsAvailable is true.
>
> **[1:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=72)** And then we converted to an array in an asynchronous fashion.
>
> **[1:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=82)** Basically that's all we need to do.
>
> **[1:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=85)** And if we'd like to work with a minimal API here, that, of course, works as well.
>
> **[1:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=91)** So app.MapGet, and then full URI, products/available.
>
> **[1:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=98)** And it's an async method that only needs the ShopContext coming in via [[Dependency Injection]].
>
> **[1:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=109)** And then, what we are returning is results.Ok.
>
> **[1:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=116)** And then, basically, the same call as before, just need to remove the return.
>
> **[2:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=127)** And then, we are done.
>
> **[2:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=131)** So the implementations are more or less the same, just the syntax is a bit different.
>
> **[2:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=136)** You may have your preference, I may have my preference.
>
> **[2:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=139)** Well, let's just have a look at the available products.
>
> **[2:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=143)** I try this out, I hit the button, I get a list, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, and 12.
>
> **[2:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=154)** The product number 11 is not available, so it is missing from that list.
>
> **[2:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=159)** If you don't believe me, if we have a look at all of the products, we'll also get 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, and then 11, the cross-back training tank is not available.
>
> **[2:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-searching-items?u=76281980&t=173)** So it is missing from our new endpoint, but it's still in the "give me all of the products no matter what" endpoint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (8), [[Dependency Injection]] (1)
> **Env Vars:** uri (2), api (1)
> **CLI Commands:** find (1)
> **API Endpoints:** /api/products/available (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Writing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [HTTP methods](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=0)** - [Instructor] In this chapter, we will finally change the data in our data store, we will be writing new items to it.
>
> **[0:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=9)** Remember, as of now, we are using the in-memory database, so when you restart the application, the data's gone.
>
> **[0:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=18)** Keep that in mind and don't be confused if data you have just written seems to have vanished just a few minutes later if you restarted the application in between.
>
> **[0:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=31)** That being out of the way, let's start.
>
> **[0:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=35)** And since we are now writing information to the data store, we need to expand our arsenal of HTTP methods we are using.
>
> **[0:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=46)** We've briefly covered it before, but now is a good time to reiterate, because we will be using that in our implementation in this chapter.
>
> **[0:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=58)** So far, the HTTP method we've been working with was GET, GET for reading data.
>
> **[1:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=68)** Remember, in [[Representational State Transfer (REST)|REST]] we have a representation of data, and the URI serves as that representation, whereas the HTTP method denotes what we would like to do with that data or that resource.
>
> **[1:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=85)** That means we'd like to read it.
>
> **[1:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=87)** And if we want to create new data, so if say we would like to add a new item to the data store, HTTP POST is the main HTTP method to use there.
>
> **[1:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=106)** For web applications, GET and POST are almost exclusively being used for an API, though there is more, because when we would like to update existing data, HTTP PUT comes into play.
>
> **[2:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=127)** I have seen applications that are using POST for that as well, and they do some funny things with the URI, so there might be another endpoint.
>
> **[2:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=136)** Depending on the scenario, there's also HTTP PATCH, and we could go down the rabbit hole and discuss this for an extended amount of time, but let me just put it that way.
>
> **[2:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=150)** In many CRUD-based applications, remember, CRUD, create, read, update, delete, POST is used to create new data, to add data to the data store, whereas PUT updates existing data.
>
> **[2:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=163)** And that's the same model that we will be using in this chapter.
>
> **[2:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=167)** And finally, when deleting data from our data store, HTTP DELETE is the HTTP method we are using.
>
> **[2:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=177)** That's all we need to know.
>
> **[2:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/http-methods?u=76281980&t=179)** And with those HTTP methods, we can now complete the CRUD functionality of our API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** http (10), post (4), crud (3), uri (2), api (2)
> **API Endpoints:** post  (4), get  (2), put  (2), delete  (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Model binding](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=0)** - [Presenter] While implementing our API, we've had at least one instance where our action method expected an argument.
>
> **[0:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=11)** And in that case, the argument came from the route.
>
> **[0:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=16)** Remember? We had the route definition here.
>
> **[0:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=21)** But of course, arguments can also come from other sources, other parts of the HTTP request, for instance.
>
> **[0:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=29)** And there are a couple of options and I would like to show you the most important ones.
>
> **[0:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=35)** There are more, but the following three are the ones you will most likely be using most of the time.
>
> **[0:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=46)** First of all, there's the [FromBody] attribute.
>
> **[0:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=51)** As the name suggests, the data here comes from the body of HTTP request.
>
> **[0:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=57)** What's that?
>
> **[0:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=58)** An HTTP request consists of HTTP headers and also optionally an HTTP body or a request body.
>
> **[1:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=67)** So after the headers, there will be an empty line and afterwards the payload, the data, the HTTP body, and that's what [FromBody] does.
>
> **[1:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=80)** If you use the [FromBody] attribute, you make crystal clear that the data that you want as an argument comes from the request body.
>
> **[1:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=91)** We'll see that in action really shortly, actually.
>
> **[1:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=95)** It also works for complex types, by the way.
>
> **[1:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=98)** So you are not limited to say integers or strings or other primitive data types.
>
> **[1:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=106)** You can also send more complex data.
>
> **[1:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=110)** For instance, a full product.
>
> **[1:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=114)** The next option is [FromRoute].
>
> **[1:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=117)** So if you have a [[Routing]] template or routing template, and in the template you can have placeholders.
>
> **[2:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=125)** And we've seen that in Visual Studio just a few seconds ago, with the [FromRoute] attribute, you make clear that this parameter is taken from the route.
>
> **[2:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=135)** So if we have a parameter called ID and the route, we have a placeholder called ID, that will be mapped.
>
> **[2:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=143)** You may have noted that this attribute was missing in our code so far because there was only one place where we were using ID.
>
> **[2:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=153)** But the more complex a URI gets, the more parameters you may have, the better it is to be explicit and make sure that you state where data is coming from.
>
> **[2:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=167)** I'm not doing this all of the time, especially with simple examples, but again, the more explicit, the better.
>
> **[2:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=177)** There's a third one I'd like to show you, and that's [FromQuery].
>
> **[3:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=184)** [FromQuery] takes data from the query string of a URL.
>
> **[3:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=188)** That's the thing after the question mark.
>
> **[3:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=191)** So if you have parameters there, like, question mark, A equals B, then that parameter A can be a parameter for the action method.
>
> **[3:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=203)** In many cases, [[[ASP.NET]]](https://ASP.NET) Core web API is clever enough to take the correct source from where data is pulled.
>
> **[3:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=213)** In other cases, there is an order of priorities which source is looked at first, but, and I've said this twice before, and I'll say it a third time now, be as explicit as possible because that will save you from some pain later on.
>
> **[3:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=235)** This whole process, by the way, so taking data from the body, from the route, from the query string, from somewhere, and then put this into here, a method parameter, even if it's a complex type, that's called model binding, at least in [ASP.NET](https://ASP.NET) Core.
>
> **[4:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-binding?u=76281980&t=258)** It's a super convenient feature if used correctly, and we will be using it when working with the API and that actually comes up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (2), [[ASP.NET Core]] (2)
> **Env Vars:** http (6), api (3), asp (2), net (2), uri (1)
> **CLI Commands:** make (3)
> **Exercise Files:** template (3)
> **URLs:** [asp.net](https://asp.net) (2)
> **Analogies:** for instance (2)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)

#### [Adding an item with POST](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=0)** - [Instructor] We are now ready to add a new item.
>
> **[0:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=4)** In our application, we could add a new product to our data store.
>
> **[0:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=9)** First of all, we need an action method.
>
> **[0:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=13)** That action method needs the HttpPost attribute because that method will be responsible for answering HttpPost requests.
>
> **[0:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=24)** Remember post is the HTTP method we will be using to add new content.
>
> **[0:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=31)** The name of that method will be PostProduct.
>
> **[0:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=36)** As usual, we start the name of the method with the HTTP method we are using.
>
> **[0:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=43)** And the argument for that method is of type product.
>
> **[0:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=49)** That's the model binding we've just talked about.
>
> **[0:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=54)** [[[ASP.NET]]](https://ASP.NET) Core web API assembles a product out of the individual values that are sent as part of the HTTP request as you'll see in a minute.
>
> **[1:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=67)** In the implementation of that method, we have to access our database context, so DB or _context to, we were calling that and then .[[Microsoft Products|Products]], which represents all of the products in our data store .Add.
>
> **[1:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=81)** And then we can add the product.
>
> **[1:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=84)** That's what Entity Framework Core does.
>
> **[1:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=88)** So that's beyond the scope of the course, but is a very easy, low friction way of adding content to the data store.
>
> **[1:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=99)** However, when we do that, the data is not persistent to the data store yet.
>
> **[1:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=105)** We have to call the method SaveChanges for that to happen.
>
> **[1:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=112)** And since the PostProduct method is an asynchronous one, we are calling SaveChangesAsync and then have to await it.
>
> **[2:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=123)** The type of that method, the return type is task of ActionResult.
>
> **[2:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=128)** So we could just return HTTP 200 OK.
>
> **[2:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=133)** But remember when we talked about the principles of [[Representational State Transfer (REST)|REST]], we could, when we add something to the data store, provide an information including a URI that points to the newly added element in our data store.
>
> **[2:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=151)** We are saving a product and the product doesn't have an ID yet because that's automatically a signed, that's not provided when calling the API.
>
> **[2:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=161)** So we could just return the representation of the newly added item that includes that product id.
>
> **[2:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=170)** [ASP.NET](https://ASP.NET) Core web API comes with a certain type of action results for that.
>
> **[2:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=176)** And what we will be using is called CreatedAt.
>
> **[3:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=183)** If you do return called CreatedAtAction, we return an HTTP status code for called CreatedAt.
>
> **[3:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=191)** We'll see that when we actually write and run the code and we provide three arguments.
>
> **[3:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=199)** The first one is the name of the method that's responsible for retrieving the item we just added.
>
> **[3:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=208)** And if you recall, we were calling that GetProduct.
>
> **[3:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=213)** GetProduct, the method expects an id.
>
> **[3:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=218)** Usually that's part of the route, but we can provide it here because when saving the product to the data store, the ID property of product will be automatically set.
>
> **[3:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=229)** So we can just provide an anonymous object with ID set to product.Id, product.Id after calling SaveChangesAsync will contain the ID of the newly added product.
>
> **[4:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=244)** And the third argument is the product itself.
>
> **[4:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=249)** Here we go.
>
> **[4:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=250)** Let's implement that new method.
>
> **[4:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=253)** We start with the HttpPost attribute because if you forget that, know C# method matches the route when later sending the HttpPost requests and therefore make sure that you don't forget this.
>
> **[4:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=268)** So we do a public async and then Task of ActionResult.
>
> **[4:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=275)** We could also do ActionResult of Product, but just ActionResult should be good enough here, PostProduct, and the argument is of type Product and we call it lowercase product.
>
> **[4:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=289)** And in there we go to the list of products and add our new product and then wait the SaveChanges call or to be precise, the SaveChangesAsync call.
>
> **[5:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=305)** And then we are returning not OK, but CreatedAtAction.
>
> **[5:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=312)** And the first argument is the action name, so GetProduct because that's the name of the method up here.
>
> **[5:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=323)** Or we could also do name of GetProduct.
>
> **[5:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=329)** So we don't have magic strings.
>
> **[5:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=331)** The parameter is the id and we are pulling the ID from our product, which is now safely stored in the database and product, the actual product is the third argument here and that is the full implementation.
>
> **[5:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=348)** So from the HTTP request, we pull the product model binding, we save it into the database, and then we return a CreatedAtAction.
>
> **[6:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=362)** Let's head over to Postman to check our API.
>
> **[6:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=366)** We could of course do that in browser as well, but I would like to show you the precise request that's being sent and how you can replicate it with Postman.
>
> **[6:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=376)** First of all, I'm querying the /api/products endpoint with HTTP GET to see the list of data I am receiving.
>
> **[6:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=387)** And in the end you'll notice that we have 33 products because the last product has an id of 33.
>
> **[6:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=399)** And we will be able to use that later to see whether adding data to the data store works.
>
> **[6:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=405)** So now let's switch over to HTTP POST so we post to the endpoint, but when we do that, we are sending a payload and there is no entry for [[JSON]] here.
>
> **[7:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=420)** So I'll just say raw so that we can enter raw data to send.
>
> **[7:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=425)** And we are sending a JSON structure with a sku.
>
> **[7:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=430)** So how about ABC123, and what else is in the product?
>
> **[7:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=434)** A name, how about Cool Sweater and then some price, 999, sounds like a bargain.
>
> **[7:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=445)** And then of course, since we need a category, CategoryId and let's just use one.
>
> **[7:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=453)** That's how our product looks like.
>
> **[7:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=455)** These are the main properties of a product, right?
>
> **[7:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=458)** So we are sending that as part of the HttpPost request in the request body.
>
> **[7:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=466)** However, we need to tell the server which format we are using.
>
> **[7:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=472)** It's obvious here that it's JSON, but we have to tell the server.
>
> **[7:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=476)** The server should not, must not and will not guess.
>
> **[8:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=481)** And that's what HTTP Headers are for.
>
> **[8:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=483)** So you see there are a couple of those and there is the Content-Type HTTP Header here set to application/json.
>
> **[8:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=491)** And this is what tells the server that JSON is coming and the header is here because I have set this to JSON.
>
> **[8:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=503)** Verify that you sent that header, that Content-Type application/json is part of that headers list.
>
> **[8:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=511)** If it's not, just add it at the bottom, but we need that header.
>
> **[8:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=516)** So in theory, this now looks good and in practice I am hitting Send.
>
> **[8:44](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=524)** And what we are getting is HTTP 400, Bad Request because there's one thing missing.
>
> **[8:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=530)** The problem is in our model, it's the category property.
>
> **[8:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=535)** You see the green squiggly line, non-nullable property.
>
> **[9:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=541)** So category can't be null, but we are not setting the category.
>
> **[9:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=545)** We are only setting the CategoryId, but that does not automatically fill the category.
>
> **[9:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=551)** Of course, we could try to retrieve the category in our API and then specifically set it, but there are two other ways how we could fix this.
>
> **[9:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=564)** We could disable the nullable checks, so nullable disable, that would work then.
>
> **[9:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=571)** Then we could assign null, or we can make the category nullable.
>
> **[9:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=578)** I mean our products, they all have a category, but still, I think this is the best way to fix this right now.
>
> **[9:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=587)** And there's one more thing I'd like to add.
>
> **[9:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=590)** I'd like to add an extra attribute to our CategoryId.
>
> **[9:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=595)** And that's the Required attribute that comes from System.ComponentModel.DataAnnotations.
>
> **[10:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=604)** And this makes sure that I always have to provide a CategoryId.
>
> **[10:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=611)** And since now I have a rather weak restriction with regards to the category, it's nullable, I would like to add this Required attribute, so that I always have to set that CategoryId.
>
> **[10:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=626)** I always have to provide it.
>
> **[10:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=628)** We'll talk about validation that comes with those data annotations a little bit later, but that's how we can fix that request.
>
> **[10:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=637)** While the app is restarting, one more piece of advice.
>
> **[10:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=641)** Bad Request most often means that in the request there's some invalid data, an invalid structure for instance, or missing data.
>
> **[10:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=651)** So that's why you got 400 Bad Request.
>
> **[10:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=655)** If you get something like 405, that often means that you forgot the HttpPost attribute or you're not using HttpPost.
>
> **[11:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=664)** But here it was clearly that category was not nullable.
>
> **[11:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=670)** And now rerun the same request.
>
> **[11:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=672)** Remember in the body we have our Cool Sweater.
>
> **[11:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=676)** I hit Send and this time we get 201 Created.
>
> **[11:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=681)** That's that CreatedAtAction.
>
> **[11:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=684)** And that is basically what then is returned from the API.
>
> **[11:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=694)** So we don't just have HTTP 200 OK and no extra data.
>
> **[11:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=699)** No, no, we get something back, we get a full product back, our Cool Sweater with an ID of 34.
>
> **[11:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=707)** So now we get the ID of the newly added product and just to verify that that's now really part of the data store, I switch back to GET, Send requests to that endpoint.
>
> **[12:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=720)** And then we are scrolling, scrolling, scrolling.
>
> **[12:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/adding-an-item-with-post?u=76281980&t=723)** And at the very end, the product with the ID 34, our Cool Sweater is now part of the data store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (7), [[Microsoft Products|Products]] (6), [[ASP.NET Core]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** http (12), api (6), json (5), asp (2), net (2)
> **Definitions:** is a  (1), is an  (1), is called (1), means that (1)
> **API Endpoints:** /api/products (1), get
 (1), post
 (1)
> **CLI Commands:** make (2)
> **URLs:** [asp.net](https://asp.net) (2)
> **Tools:** postman (2)
> **Cross-References:** we talked about (1)

#### [Model validation](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=0)** - [Lecturer] Let's briefly talk about validation now.
>
> **[0:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=4)** We've just added the required attribute to the category ID, and I mentioned that that means that we have to set that category ID.
>
> **[0:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=13)** There are other attributes apart from required as well, but that's beyond the scope of this course.
>
> **[0:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=21)** That's something baked into [[[ASP.NET]]](https://ASP.NET) Core.
>
> **[0:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=24)** However required is pretty useful.
>
> **[0:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=26)** So let's make other fields required as well.
>
> **[0:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=29)** I would say the skew is something we always need.
>
> **[0:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=32)** We always need a name.
>
> **[0:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=34)** And I would also argue we always need a description.
>
> **[0:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=39)** Well, actually we would also need a price most of the time, but let's just use those three things and then let's see what that means to our current API call.
>
> **[0:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=53)** Back in postman, let's switch over to posts and let's have a look at our request body.
>
> **[1:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=62)** We have the skew, we have the name, but we don't have a description.
>
> **[1:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=66)** So when I hit send, what happens?
>
> **[1:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=69)** Bad request. But there's more.
>
> **[1:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=71)** Let's have a look at the data coming back.
>
> **[1:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=73)** One of our validation errors occurred.
>
> **[1:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=75)** Okay, and what are the errors?
>
> **[1:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=77)** Ah, the description field is required and we didn't set it.
>
> **[1:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=82)** That's true.
>
> **[1:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=84)** And notice that I didn't write any code for that to happen.
>
> **[1:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=90)** That came automatically out of the box thanks to two things.
>
> **[1:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=96)** The first thing of course, is that we have those required attributes, especially the one for the description property.
>
> **[1:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=107)** And the second reason why this worked is this attribute here, the API controller attribute.
>
> **[1:55](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=115)** If that is set, all the models provided as argument as parts of model binding are validated.
>
> **[2:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=122)** And if that validation fails by default, we get HTTP 400.
>
> **[2:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=128)** And most cases that's excellent and that's what we would like to use.
>
> **[2:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=133)** However, in some cases we might also want to add our own custom validation, and I'll just show you how you can set that up because as you see in our post product method, we don't check the model.
>
> **[2:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=154)** It's done automatically.
>
> **[2:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=155)** But we can call this check on our own and there's a property called model state is valid, and that tells us whether the current state of the model is valid or not.
>
> **[2:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=171)** So if it's not valid, then we can return bad requests.
>
> **[2:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=178)** That's basically the code that comes as part of the API control attribute.
>
> **[3:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=183)** At least similar to that.
>
> **[3:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=185)** We don't need this because it comes automatically.
>
> **[3:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=188)** We don't even come into that method if the model state is not valid.
>
> **[3:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=194)** But again, if we want to do some custom validation or if you want to do some logging in those cases, we need to write code like this.
>
> **[3:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=202)** But we also need to make sure that this method is actually called.
>
> **[3:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=209)** So I'll show you what you need to do.
>
> **[3:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=211)** You go to Program CS and in Program CS after the ad controllers call, you do configure API behavior options.
>
> **[3:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=222)** You can set a couple of options, but I only would like to set one.
>
> **[3:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=227)** And the option I'd like to set is called Suppress Model State Invalid Filter.
>
> **[3:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=236)** That's that filter that makes sure if the model state is invalid, we just do HTTP 400.
>
> **[4:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=242)** And I will suppress this. So I set this to true.
>
> **[4:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=247)** And now if I do that invalid code call again, I once again get bad request, but I don't get this information again, that I was lacking a description for my product.
>
> **[4:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=260)** So this time I was jumping into that method in our [[Microsoft Products|products]] controller and we were hitting that piece of code and we are just returning a bad request without any additional information.
>
> **[4:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=276)** So that's how you can handle these things as well.
>
> **[4:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/model-validation?u=76281980&t=281)** In the exercise files, the code here and the Program CS code is in a comment because we want that default behavior, but that way you can still see the code and try it out if you just remove the comments or turn the comments into code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** api (4), http (2), asp (1), net (1)
> **CLI Commands:** make (2)
> **Definitions:** means that (1), is called (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Tools:** postman (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### [Updating an item with PUT](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=0)** - [Instructor] When updating items, in our case [[Microsoft Products|products]], we need to think about our strategy first.
>
> **[0:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=7)** What kind of arguments do we provide to our action method?
>
> **[0:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=13)** Here is what I recommend.
>
> **[0:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=15)** We have here an action method, and I call it put product because the put HTTP method is responsible for updates.
>
> **[0:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=29)** And of course we need HTTP put as an attribute to make sure that put requests are routed here.
>
> **[0:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=38)** We are also using a route template, so slash API slash products slash and then the ID of the product we would like to update, remember slash API slash product slash 42 is the URI that represents a specific product.
>
> **[0:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=56)** If you would like to update that product, that is the URI we should use.
>
> **[1:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=63)** So now we know that the product with a given ID shall be updated but with what?
>
> **[1:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=71)** We need, well the new product, the updated product.
>
> **[1:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=76)** So the second argument will be a product, something of our data type product and that will contain name and description, et cetera.
>
> **[1:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=89)** And that will be written to the database.
>
> **[1:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=92)** We are not sending a delta, something like this property has changed to that because then we might also run into concurrency issues.
>
> **[1:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=101)** We just send a full product and then we let entity Framework Core do its thing.
>
> **[1:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=110)** Here's how that looks like.
>
> **[1:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=112)** We basically say, okay, this product is modified and therefore when calling save changes or save changes async then as your Framework Core updates the product in the data store and then we have to return something.
>
> **[2:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=132)** And the recommendation here is that we return nothing, return no content because what should we return?
>
> **[2:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=141)** We update an item, we send a full product.
>
> **[2:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=145)** So we just expect that, yeah, that's the data that is then written to the database.
>
> **[2:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=149)** So no surprises there.
>
> **[2:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=150)** The ID won't change and we provide all of the properties and therefore returning no content is a good idea.
>
> **[2:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=159)** That's the strategy.
>
> **[2:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=161)** The implementation is a little bit longer because we will also do proper error handling.
>
> **[2:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=167)** Here we go, we start with HTTP put because I tend to forget that.
>
> **[2:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=173)** And if I do then nothing will happen when sending a put request, well, not nothing, we get an error and then we have public async, task of action result, put product, and we get an ID and a product and that ID comes from the route.
>
> **[3:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=195)** So I'll put it in here.
>
> **[3:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=198)** And then we do context entry of product, state is entity state modified anti Framework Core stuff.
>
> **[3:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=210)** And then we would just call a wait underscore context, save changes async and in the end return and then no content as we discussed on the slide.
>
> **[3:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=221)** However, a couple of things can go wrong and in those cases our application should be resilient.
>
> **[3:48](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=228)** So one thing could be that we get the ID because it's part of the URI, but the product we are sending has a different ID, then something is off.
>
> **[3:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=239)** That's a bad request, so we do exactly that.
>
> **[4:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=244)** So if the ID in the route is not the ID in the payload, then we just return bad request.
>
> **[4:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=252)** And what could also go wrong is the storing to the database and we will make sure that there is some error handling in place for that.
>
> **[4:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=261)** So I put the await underscore context dot save changes async into a try catch block.
>
> **[4:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=269)** And what I'm catching is a DB update concurrency exception.
>
> **[4:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=275)** So there is a concurrency issue which means that something didn't work because for instance the API in a parallel call already changed something in the database.
>
> **[4:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=290)** Maybe the product is gone for instance.
>
> **[4:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=293)** And actually that's something that could happen.
>
> **[4:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=296)** So it could be that there is no product with the given ID.
>
> **[5:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=303)** There are a couple of ways how we can find it out.
>
> **[5:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=306)** And what I recommend us doing is we go to a list of products and then do an any call because then we are not materializing the products from the database because then we could run into additional issues.
>
> **[5:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=323)** So I'm basically looking for any products where the product ID is the ID from the route.
>
> **[5:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=331)** And if we don't find any of those, then we return not found.
>
> **[5:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=338)** And otherwise, well something else happened and I'll just say we just threw an exception.
>
> **[5:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=346)** That's I think the most sensible approach.
>
> **[5:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=349)** And that exception then will be converted into HTTP 500 because we now have a server error.
>
> **[5:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=357)** But this not found, which is mapped to HTTP 404 is the correct answer if we try to update a product that doesn't exist.
>
> **[6:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=368)** That's our implementation.
>
> **[6:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=370)** So let's get to Postman where we have the request from before, but this time I'm adding a description, that's a mandatory field as we now know.
>
> **[6:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=379)** So how about warm and cold at the same time?
>
> **[6:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=384)** That will be a fitting description.
>
> **[6:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=386)** And now I'm sending a post request to slash API slash product, adding this product.
>
> **[6:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=392)** At least that's what I hope.
>
> **[6:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=393)** I sent request, 201 created, the ID is 34 and now I can try to update it.
>
> **[6:44](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=404)** And how about I just change the price to 8.99 because it's on sale now.
>
> **[6:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=413)** And what would be the appropriate URL for that?
>
> **[6:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=417)** Well slash API slash products and then slash 34 because that's the ID of that product.
>
> **[7:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=426)** If I hit send, I get 400 bad request and no additional information here, just bad request.
>
> **[7:16](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=436)** What is missing?
>
> **[7:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=438)** The ID is missing.
>
> **[7:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=439)** I have to provide the id not only in the route but also in here in the payload.
>
> **[7:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=443)** So I set ID to 34 and then I hit send again and this time, 204, no content.
>
> **[7:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=454)** So the product was updated, my error handling also worked.
>
> **[7:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=461)** So I go to get to see whether yes, there's really a product with that ID, indeed, there is a cool sweater that's warm and cold at the same time and it costs 8.99.
>
> **[7:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/updating-an-item-with-put?u=76281980&t=472)** So now I'm also able to update existing products in our data store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (7)
> **Env Vars:** http (5), api (5), uri (3), url (1)
> **Definitions:** is a  (5)
> **CLI Commands:** make (2), find (2)
> **Versions:** 8.99 (2)
> **UI Navigation:** go to (2)
> **Analogies:** for instance (2)
> **Cross-References:** we discussed (1)

#### [Deleting an item with DELETE](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=0)** - [Instructor] We are almost done with CRUD.
>
> **[0:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=2)** We had create, read, update, and now, finally, delete.
>
> **[0:07](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=7)** We would like to remove a product from our data store.
>
> **[0:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=12)** You know how this works by now, we have a method, I call it DeleteProduct.
>
> **[0:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=18)** It's just important that it starts with the name of the HTTP method, and I'm also using the appropriate attribute, HttpDelete.
>
> **[0:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=29)** If I'm deleting the product with the id, say 42, then the URI will be /api/[[Microsoft Products|products]]/42.
>
> **[0:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=38)** So I'm using a route in the HttpDelete attribute.
>
> **[0:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=43)** And so the only information the DeleteProduct method needs is the ID of the product to delete, not the product itself, just the id.
>
> **[0:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=53)** So first of all, we try to retrieve the product to delete from the database.
>
> **[0:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=58)** We can use the find method of FindAsync in our asynchronous method.
>
> **[1:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=64)** And then it's time for some error handling because what happens if the product we would like to delete doesn't exist in the first place?
>
> **[1:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=72)** You already know the drill.
>
> **[1:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=74)** We return HTTP 404 Not Found in that case.
>
> **[1:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=80)** Otherwise, we have our product, and then we can use Entity Framework Core to remove it by just doing _context, or however our data contact is called, .product.remove.
>
> **[1:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=92)** We provide the product and then we call SaveChanges or SaveChangesAsync.
>
> **[1:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=98)** The only remaining question is what should this method return.
>
> **[1:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=102)** And kind of consensus is it should return the product so that you know what exactly was deleted.
>
> **[1:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=111)** Maybe the client application needs to use that information.
>
> **[1:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=117)** Here we go.
>
> **[1:58](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=118)** We write our action methods, but before we do, as always, I'm using the attribute to denote the HTTP method to use and I'm also providing the route.
>
> **[2:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=130)** And then we can do our public async Task of ActionResult.
>
> **[2:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=135)** And we could also do ActionResult of product if we were so inclined.
>
> **[2:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=139)** And then DeleteProduct(int id) that comes from the route.
>
> **[2:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=146)** So we could put a FromRoute attribute in front here, but, in this case, it is not necessary.
>
> **[2:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=157)** So I'll remove it.
>
> **[2:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=159)** But it would be a good practice, as I already mentioned, with the more complex APIs to always specifically say where data is coming from.
>
> **[2:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=166)** And then we pull out the product from our data store.
>
> **[2:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=171)** So we go to the products and then call Find, or here, FindAsync of that id.
>
> **[2:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=177)** And if there's no such product, then it's time for HTTP 404 Not Found.
>
> **[3:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=185)** Otherwise, we just remove the product from our data store using Entity Framework Core and persist those changes to the database.
>
> **[3:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=197)** And finally, we return the product together with HTTP 200 OK.
>
> **[3:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=204)** So we just do Ok of product.
>
> **[3:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=208)** And we are done.
>
> **[3:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=210)** Let's head over two Postman once again.
>
> **[3:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=213)** Before we delete our product, we should create one, or we could delete one of the existing ones.
>
> **[3:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=219)** It doesn't really matter.
>
> **[3:41](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=221)** But let's just set up a new product.
>
> **[3:44](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=224)** We are not providing an id for that, just the pseudo name, et cetera.
>
> **[3:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=231)** So I post this to the /api/products endpoint.
>
> **[3:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=236)** We get an id of 34.
>
> **[4:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=240)** So if we do a get request to /api/products/34, then we get that product, we get our Cool Sweater.
>
> **[4:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=250)** And then if we issue a delete request to that endpoint, we get 200 OK.
>
> **[4:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=257)** We once again see our Cool Sweater.
>
> **[4:22](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=262)** But for the last time, because if we do a get request to that same URI, now we get HTTP 404 Not Found.
>
> **[4:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=272)** That product has been successfully deleted.
>
> **[4:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=275)** And that completes CRUD.
>
> **[4:37](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/deleting-an-item-with-delete?u=76281980&t=277)** We have created elements, we have read them, we have updated them, and now we've also deleted them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4)
> **Env Vars:** http (6), crud (2), uri (2)
> **API Endpoints:** /api/products/42 (1), /api/products (1), /api/products/34 (1)
> **CLI Commands:** find (2)
> **Tools:** postman (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Best Practices:** good practice (1)

#### [Migrating the code to Minimal APIs](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=0)** - [Instructor] We have completed our API as a controller based API.
>
> **[0:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=4)** But as promised, I would also like to show you how this looks when using the minimal API approach.
>
> **[0:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=11)** And instead of you watching me copy and paste code over from the controller to program CS, and then changing a few things, I just did that before and I just showed you the highlights, what I did.
>
> **[0:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=25)** And I would like to do this from the bottom to the top.
>
> **[0:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=28)** So I start with the last HTTP method we were using, Delete.
>
> **[0:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=34)** So for delete I am just calling in program CS, of course.
>
> **[0:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=38)** App.macdelete, which is responsible for delete HCP requests.
>
> **[0:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=45)** I provide the URI, and it'll be slash product slash id, remember our controller based API was API slash product slash id.
>
> **[0:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=54)** So that's the difference here.
>
> **[0:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=56)** And then in the handler method, I of course expect the ID as an argument, but I also need the database context.
>
> **[1:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=64)** So I'm using [[Dependency Injection]] like this so that I can access it.
>
> **[1:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=68)** And the remainder of the method is essentially the same.
>
> **[1:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=72)** I just was using Results Dot and they're not found and Results dot okay because that allows me minimal APIs to access those helper methods that yield HTTP status codes, in that case here 404, and in that case 200.
>
> **[1:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=90)** Apart from that, no changes necessary.
>
> **[1:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=94)** When doing the put call.
>
> **[1:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=96)** Essentially the same thing, this time, app.Mapput for http, put the URL is still slash product slash and then the ID placeholder.
>
> **[1:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=107)** The method arguments are ID and product as in the controller based API.
>
> **[1:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=113)** But additionally, thanks to dependency injection, the shop context and the code inside is still the same except for using results dot bad request instead of bad request.
>
> **[2:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=126)** And results.notfound and results.nocontent.
>
> **[2:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=131)** So you see, I wouldn't say it's just a different syntax, it's a different approach, but the actual implementation is more or less the same.
>
> **[2:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=141)** And then we have MAP post.
>
> **[2:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=144)** So we are doing a post request to slash [[Microsoft Products|products]].
>
> **[2:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=148)** We get a product thanks to Model Binding, but we also get the database context and then well, we do the same things.
>
> **[2:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=155)** But remember, in the controller based API, we were returning created at HTTP 201 and the first argument was the name of the action method that would return one individual product.
>
> **[2:52](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=172)** So we were using name of and then get product as a method or a string get product.
>
> **[2:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=177)** We can do that here as well.
>
> **[2:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=179)** So it's the same thing except for using results.here, but this get product, how is that mapped to the slash product slash ID get endpoint.
>
> **[3:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=193)** I'll tell you how because there was one more thing I had to add, this name here.
>
> **[3:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=198)** Get product, that's arbitrary, that's the one I picked.
>
> **[3:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=201)** And up here we have our map get slash product slash ID endpoint.
>
> **[3:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=209)** And after the implementation, which I didn't change, I'm adding dot with name and then get product.
>
> **[3:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=216)** And this name here is the name I reference when returning the created at route result.
>
> **[3:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=225)** And these are all of the changes I had to do.
>
> **[3:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=229)** The bulk of the implementation is still the same and the functionality of the API is indeed identical.
>
> **[4:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=241)** Let's quickly try this out.
>
> **[4:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=242)** This time in Swagger.
>
> **[4:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=244)** Everything starting with slash API is the controller based API and those six, eight points up here, that's the minimal API.
>
> **[4:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=255)** So we have a list of products ranging from one through 33.
>
> **[4:23](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=263)** Then I can create a new product with a post request.
>
> **[4:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=267)** I already get the structure here in the UI, we don't need the id.
>
> **[4:31](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=271)** Let's make up a SKU.
>
> **[4:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=272)** How about DF 456 this time?
>
> **[4:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=275)** How about a T-shirt description for fashionistas?
>
> **[4:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=282)** Is that a [[Microsoft Word|word]]?
>
> **[4:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=283)** 999 sounds like a fair price.
>
> **[4:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=285)** And the category will be one, I hit execute.
>
> **[4:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=290)** And then we get the new T-shirt with an idea of 34 as the data returned with HTTP 201.
>
> **[4:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=297)** Let's verify that the T-shirt is really there by using the endpoint to access an individual product.
>
> **[5:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=304)** This time with 34.
>
> **[5:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=306)** And yes, we get the T-shirt back, then we can do the put call to update a product.
>
> **[5:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=313)** We update the product with the idea of 34 and then we just have to provide the full product.
>
> **[5:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=318)** So the Sku remains the same.
>
> **[5:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=321)** The name, as well description, how about very fancy and it's on sale.
>
> **[5:28](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=328)** So now it's only 499.
>
> **[5:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=330)** The category stays the same.
>
> **[5:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=333)** I hit execute.
>
> **[5:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=335)** I get 204, so no content but the changes, they are really there because if I hit execute here again for the get endpoint, I get now a very fancy T-shirt for only 499.
>
> **[5:50](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=350)** And finally I can delete that product again.
>
> **[5:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=356)** So I say ID 34, hit Execute, and then the T-shirt was deleted.
>
> **[6:02](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=362)** Here I'm seeing the product data for a final time, but when I then scroll back up to the get endpoint and hit execute again, I'm getting the only correct answer.
>
> **[6:17](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/migrating-the-code-to-minimal-apis?u=76281980&t=377)** 404, the T-shirt is gone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (2), [[Microsoft Products|Products]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** api (11), http (4), hcp (1), uri (1), url (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Deleting several items](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/challenge-deleting-several-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/challenge-deleting-several-items?u=76281980&t=0)** (upbeat rhythmic music)
>
> **[0:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/challenge-deleting-several-items?u=76281980&t=5)** - [Tutor] So far, our delete method only accepts one parameter, the ID of the product to be deleted.
>
> **[0:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/challenge-deleting-several-items?u=76281980&t=15)** But what if we wanted to have an API endpoint that accepts an arbitrary number of IDs and deletes all of them?
>
> **[0:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/challenge-deleting-several-items?u=76281980&t=24)** To implement that, of course, there are several ways how this can be achieved, think about what URI you'd like to use and how the data that's then part of that API call will be bound to the arguments of the method.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), uri (1)
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat rhythmic music) (1)

#### [Solution: Deleting several items](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=0)** - [Instructor] As it is often the case, there's more than one way to reach a solution.
>
> **[0:11](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=11)** We could of course, just change our lead product method and make it accept, say, an array of ideas, but then that would mess up our [[Routing]].
>
> **[0:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=20)** So I recommend we add a new endpoint here with a pretty similar implementation.
>
> **[0:29](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=29)** There are a few changes, though, of course the HTTP method delete sounds like a good fit, but currently we are using a delete HTTP call to /[[Microsoft Products|products]] or /API/products/ID to delete that one item.
>
> **[0:47](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=47)** We need something different for a list of products because we don't have an endpoint that represents a list of products.
>
> **[0:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=56)** Therefore, I propose we can issue an HTTP post request to a specific endpoint.
>
> **[1:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=61)** And that endpoint could be called delete, for instance.
>
> **[1:06](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=66)** So let's actually try this out.
>
> **[1:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=69)** I am adding a new method.
>
> **[1:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=72)** I am using HttpPost, and the route is delete.
>
> **[1:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=78)** So it'll be /api/products/delete.
>
> **[1:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=81)** And of course you can choose whatever UI scheme you want, right?
>
> **[1:25](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=85)** That's just my proposition.
>
> **[1:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=87)** And then I'm doing an public async Task<ActionResult> and I'll call it DeleteMultiple(int[] ids).
>
> **[1:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=96)** And it expects an array of IDs.
>
> **[1:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=102)** Where does that array of IDs come from?
>
> **[1:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=105)** The endpoint/api/product/delete.
>
> **[1:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=109)** And I would recommend we put it in a query string.
>
> **[1:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=113)** We could also use a different mechanism.
>
> **[1:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=116)** We could put it in the payload.
>
> **[1:57](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=117)** We could introduce a type that contains a list of IDs.
>
> **[2:01](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=121)** Many, many options.
>
> **[2:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=123)** But I would like to go with the query string and to make that clear, and since I've mentioned but not used it yet, let's add the FromQuery attribute here.
>
> **[2:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=135)** Alright, so what do we do here?
>
> **[2:18](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=138)** Actually there is a method that allows us to delete a range of elements via entity, framework, core, but we need that range and we need to do some proper error handling.
>
> **[2:32](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=152)** Imagine that we get five IDs now.
>
> **[2:34](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=154)** Four of them map to existing products, but the fifth does not.
>
> **[2:40](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=160)** And in my book, if one of those IDs doesn't exist, the endpoint should say not found.
>
> **[2:46](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=166)** Therefore, we can introduce a list of products.
>
> **[2:51](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=171)** You could use other data types here as well, of course.
>
> **[2:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=174)** And then we just iterate over all of the IDs that we received from the query string.
>
> **[3:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=183)** And each time we are pulling the product from our database context, from our list of products using Find Async.
>
> **[3:14](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=194)** And if there's no such product, then we immediately return not found.
>
> **[3:19](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=199)** So we are immediately leaving the method.
>
> **[3:24](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=204)** Otherwise we are just adding the product to our list of products.
>
> **[3:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=210)** And in the end, we just go to our context, to our products and then do RemoveRange.
>
> **[3:39](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=219)** And then we are removing the list of products, and then we await context.SaveChangeAsync(); and basically that's it.
>
> **[3:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=233)** We can now return all of the products if we want to, and then have an implementation that accepts a list of IDs and then deletes all of them.
>
> **[4:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=248)** Once again, we can rely on Sagger to try this out real quick, but of course, Postman or other tools would be a fine choice as well.
>
> **[4:15](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=255)** Here's our new endpoint/api/product/delete.
>
> **[4:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=260)** When we say tried out, the tool correctly identifies ideas as an array of integer, and we can add just a couple of items.
>
> **[4:27](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=267)** So how about we add the item of one and of three and of five, and then I hit execute and the response is, well, an array of three products, the one with the ID one, then ID three, and further down below ID five.
>
> **[4:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=289)** So supposedly those three products have been removed.
>
> **[4:54](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=294)** And what's the URL?
>
> **[4:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=296)** it /api/Products/Delete?ids=3&ids=5
>
> **[5:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=304)** just as we are used to it from query strings.
>
> **[5:08](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=308)** And this is then mapped into the array IDs.
>
> **[5:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=312)** And then if we have a look at the full list of products in our data store, we see the first one has the ID of two, and then we have number four, and then we have the ID six.
>
> **[5:26](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=326)** So items one, three, and five were properly removed by our new endpoint.
>
> **[5:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/solution-deleting-several-items?u=76281980&t=333)** And in the exercise files, I've also implemented that as a minimal API endpoint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (16), [[Routing]] (1)
> **Env Vars:** http (3), api (2), url (1)
> **API Endpoints:** /api/products/delete (2), /api/product/delete (2)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for instance (1), imagine (1)
> **Tools:** postman (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=0)** - [Instructor] We have reached the end of our journey.
>
> **[0:03](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=3)** But it's just the end of our journey together, because your individual journey will of course, continue.
>
> **[0:10](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=10)** At least, I hope it does.
>
> **[0:12](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=12)** And I already have a couple of ideas which topics might be of interest to add onto what you've learned so far.
>
> **[0:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=20)** There are several topics where we just didn't have the time to cover them very much in-depth, since our mission was to provide a good overview of what's possible and how to implement the most important functionality.
>
> **[0:36](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=36)** One of those additional topics is what I would like to call advanced data retrieval.
>
> **[0:43](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=43)** So far, we have just pushed everything from the database to the clients.
>
> **[0:49](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=49)** But maybe the API would like to have additional features such as sorting or pagination or filtering, et cetera.
>
> **[0:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=59)** There are various approaches how to achieve this, and it might be a nice addition to our API.
>
> **[1:05](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=65)** Also, APIs can be versioned.
>
> **[1:09](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=69)** Imagine you have an API and people are using that API, and then you add something to it and find out that that's maybe not 100% compatible with what's already there.
>
> **[1:21](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=81)** One idea here is that you can just create a new version of your API, and then both of those versions are running, and clients can choose which version should be used.
>
> **[1:33](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=93)** I think that's a very valuable addition.
>
> **[1:35](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=95)** Also, securing APIs is a big topic, and a topic with many, many different aspects.
>
> **[1:42](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=102)** For instance, enforcing HTTPS, or making the API friendly for [[JavaScript]] calls, because there are some security mechanisms in place, or using token-based authorization or authentication for your API.
>
> **[1:56](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=116)** Lots of topics, which will be covered in the advanced [[[ASP.NET]]](https://ASP.NET) Core web API course.
>
> **[2:04](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=124)** So if you're interested in the things you see here, I can only recommend in watching that advanced course.
>
> **[2:13](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=133)** Another topic we just briefly mentioned,, but of course there's so much more to discuss here, is API design.
>
> **[2:20](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=140)** How can you make your APIs even more RESTful, and therefore maybe more predictable and/or friendly to use?
>
> **[2:30](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=150)** And since I've already mentioned security, the whole topic of [ASP.NET](https://ASP.NET) Core security is very, very important.
>
> **[2:38](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=158)** Web-based applications are available 24/7, so they can be attacked 24/7.
>
> **[2:45](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=165)** Knowing about various security risks and mitigations within the context of [ASP.NET](https://ASP.NET) Core, of course, is paramount.
>
> **[2:53](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=173)** And therefore, I encourage you to also invest in that subject.
>
> **[2:59](https://www.linkedin.com/learning/building-web-apis-with-asp-dot-net-core-8/next-steps?u=76281980&t=179)** And with that, thanks again for tuning in, and I hope you enjoy creating your APIs with [ASP.NET](https://ASP.NET) Core and [ASP.NET](https://ASP.NET) Core web API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (5), [[JavaScript]] (1)
> **Env Vars:** api (10), asp (5), net (5), https (1)
> **URLs:** [asp.net](https://asp.net) (5)
> **Analogies:** such as (1), imagine (1), for instance (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Christian Wenz]]

## Resources

- Exercise files available

## Skills Covered

- API Development
- ASP.NET Core

## Path Context

### In [[Getting Started as an ASP.NET Core Developer]]
← [[ASP.NET Core- Building a GraphQL API]] | **9 of 9**

## Appears In

- [[Getting Started as an ASP.NET Core Developer]]

## Related Courses

_Courses sharing skills:_

- [[ASP.NET Core- Building a GraphQL API]] — ASP.NET Core, API Development
- [[Programming with the Gemini Flash API]] — API Development
- [[Getting Started with the Google Gemini API]] — API Development
- [[OpenAI API- Working with Files]] — API Development
- [[Openai Api Introduction]] — API Development

---

[↑ Back to top](#)