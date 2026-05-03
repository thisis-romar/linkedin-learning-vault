---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations
url: "https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations"
level: Beginner
updated: 11/8/2024
learners: 2095
skills:
  - ASP.NET
  - ASP.NET Razor
  - ASP.NET Web API
  - ASP.NET MVC
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGr2z4gmZo59g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729698292325?e=2147483647&amp;v=beta&amp;t=hO_r3-QlS8ZVo4SrSr7TbWdDJXm-4Wsp7r-HxAOl6u0"
linkedin_topic: Web Development
learning_paths:
  - '[[Getting Started as an ASP.NET Core Developer]]'
next_courses:
  - '[[C- and .NET Essential Training]]'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":1,"total":9,"prev":null,"next":"C- and .NET Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/asp-net
  - skill/asp-net-razor
  - skill/asp-net-web-api
  - skill/asp-net-mvc
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Learning%20Asp%20Dot%20Net%20Core%20Mvc%20Razor%20Pages%20Web%20Apis%20Other%20Foundations.md)

![Learning Asp Dot Net Core Mvc Razor Pages Web Apis Other Foundations](https://media.licdn.com/dms/image/v2/D4D0DAQGr2z4gmZo59g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729698292325?e=2147483647&amp;v=beta&amp;t=hO_r3-QlS8ZVo4SrSr7TbWdDJXm-4Wsp7r-HxAOl6u0)

# Learning Asp Dot Net Core Mvc Razor Pages Web Apis Other Foundations

> This course focuses on the fundamentals of the ASP.NET Core framework and how to use it to create a variety of web applications. Software developer and trainer Brice Wilson teaches beginning ASP.NET Core developers how to use techniques that apply to several different types of applications, including how to configure dependency injection and middleware. By the end of the course, you'll understand 

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations) | Beginner | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Why you should learn ASP.NET Core](#why-you-should-learn-aspnet-core)
  - [What you need to know](#what-you-need-to-know)
- [**1. Getting Started with ASP.NET Core**](#1-getting-started-with-aspnet-core) (5 videos)
  - [Understanding the capabilities of ASP.NET Core](#understanding-the-capabilities-of-aspnet-core)
  - [ASP.NET Core development tools](#aspnet-core-development-tools)
  - [Create and run an ASP.NET Core application](#create-and-run-an-aspnet-core-application)
  - [Configuring dependency injection](#configuring-dependency-injection)
  - [Using middleware](#using-middleware)
- [**2. Creating Razor Pages Applications**](#2-creating-razor-pages-applications) (8 videos)
  - [Understanding Razor Pages](#understanding-razor-pages)
  - [Using Razor syntax](#using-razor-syntax)
  - [Implementing page layouts](#implementing-page-layouts)
  - [Routing to pages](#routing-to-pages)
  - [Creating links with tag helpers](#creating-links-with-tag-helpers)
  - [Binding to data](#binding-to-data)
  - [Challenge: Create a Razor Pages application](#challenge-create-a-razor-pages-application)
  - [Solution: Create a Razor Pages application](#solution-create-a-razor-pages-application)
- [**3. Creating MVC Applications**](#3-creating-mvc-applications) (6 videos)
  - [Understanding Model-View-Controller applications](#understanding-model-view-controller-applications)
  - [Handling requests with controllers](#handling-requests-with-controllers)
  - [Working with MVC models](#working-with-mvc-models)
  - [Rendering MVC views](#rendering-mvc-views)
  - [Challenge: Create a MVC application](#challenge-create-a-mvc-application)
  - [Solution: Create a MVC application](#solution-create-a-mvc-application)
- [**4. Creating Web APIs**](#4-creating-web-apis) (6 videos)
  - [Understanding controller-based APIs and minimal APIs](#understanding-controller-based-apis-and-minimal-apis)
  - [Creating controller-based Web APIs](#creating-controller-based-web-apis)
  - [Creating minimal Web APIs](#creating-minimal-web-apis)
  - [Using Swagger to test Web APIs](#using-swagger-to-test-web-apis)
  - [Challenge: Create a Web API](#challenge-create-a-web-api)
  - [Solution: Create a Web API](#solution-create-a-web-api)
- [**5. Creating gRPC APIs**](#5-creating-grpc-apis) (7 videos)
  - [Understanding gRPC APIs](#understanding-grpc-apis)
  - [Creating a .proto file](#creating-a-proto-file)
  - [Generating C# assets](#generating-c-assets)
  - [Implementing service methods](#implementing-service-methods)
  - [Calling gRPC services](#calling-grpc-services)
  - [Challenge: Create a gRPC service](#challenge-create-a-grpc-service)
  - [Solution: Create a gRPC service](#solution-create-a-grpc-service)
- [**6. Creating SignalR Applications**](#6-creating-signalr-applications) (5 videos)
  - [Understanding SignalR applications](#understanding-signalr-applications)
  - [Creating a server hub](#creating-a-server-hub)
  - [Creating a JavaScript client](#creating-a-javascript-client)
  - [Challenge: Create a SignalR application](#challenge-create-a-signalr-application)
  - [Solution: Create a SignalR application](#solution-create-a-signalr-application)
- [**7. Creating Blazor Applications**](#7-creating-blazor-applications) (5 videos)
  - [Understanding Blazor](#understanding-blazor)
  - [Developing a Blazor application](#developing-a-blazor-application)
  - [Creating a standalone Blazor WebAssembly application](#creating-a-standalone-blazor-webassembly-application)
  - [Challenge: Create a Blazor application](#challenge-create-a-blazor-application)
  - [Solution: Create a Blazor application](#solution-create-a-blazor-application)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps on your learning journey](#next-steps-on-your-learning-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why you should learn ASP.NET Core](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980&t=0)** - [ASP.NET](https://ASP.NET) Core is a huge topic.
>
> **[0:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980&t=3)** Are you confused by all the different application types?
>
> **[0:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980&t=6)** Are you unsure where to start?
>
> **[0:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980&t=7)** You've come to the right place.
>
> **[0:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980&t=9)** In this course, I'll teach you [ASP.NET](https://ASP.NET) Core development and how to get started building all kinds of applications with it.
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980&t=16)** Specifically, I'll show you how to create server rendered apps with Razor Pages and the model-view-controller architecture.
>
> **[0:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980&t=24)** I'll also show you several types of web services, as well as a few newer technologies for building unique web-based solutions.
>
> **[0:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980&t=31)** Hi, I'm Brice Wilson, and I've been a .NET developer for over 20 years.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/why-you-should-learn-asp-dot-net-core?u=76281980&t=36)** Join me to learn what's possible with [ASP.NET](https://ASP.NET) Core and how to use it to build your next web application in this hands-on course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (3)
> **Env Vars:** net (4), asp (3)
> **URLs:** [asp.net](https://asp.net) (3)
> **Definitions:** is a  (1)
> **Speakers:** - asp (1)

#### [What you need to know](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Here's what you should know to get the most out of this course.
>
> **[0:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/what-you-need-to-know?u=76281980&t=3)** A basic understanding of [[HTML]] would be helpful.
>
> **[0:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/what-you-need-to-know?u=76281980&t=7)** I'll be creating and showing you some very simple web-based user interfaces, but I'm not going to spend much time explaining the specific HTML.
>
> **[0:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/what-you-need-to-know?u=76281980&t=15)** It would also be helpful if you're already familiar with C#.
>
> **[0:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/what-you-need-to-know?u=76281980&t=19)** However, I'm not going to be using any advanced language features, so even if you're only familiar with similar object-oriented languages, you'll probably have no trouble following along.
>
> **[0:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/what-you-need-to-know?u=76281980&t=29)** That's truly about it.
>
> **[0:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/what-you-need-to-know?u=76281980&t=31)** I've tried to keep the prerequisites to a minimum and focus on [ASP.NET](https://ASP.NET) Core.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/what-you-need-to-know?u=76281980&t=36)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[ASP.NET Core]] (1)
> **Env Vars:** html (2), asp (1), net (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with ASP.NET Core

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the capabilities of ASP.NET Core](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=0)** - Let me start by explaining how [ASP.NET](https://ASP.NET) Core fits in the net ecosystem.
>
> **[0:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=6)** .NET has been around for well over 20 years and is a general purpose development platform that includes programming languages, libraries, and other tools to build all kinds of applications.
>
> **[0:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=17)** [ASP.NET](https://ASP.NET) Core extends the .NET platform with tools and libraries to help developers specifically create different types of web applications.
>
> **[0:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=28)** [ASP.NET](https://ASP.NET) evolved into what is now known as [ASP.NET](https://ASP.NET) Core.
>
> **[0:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=33)** It and the web have evolved a lot over the years.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=36)** You can do a lot more with [ASP.NET](https://ASP.NET) Core now than just the basic rendering of [[HTML]] that was in some of the earliest versions.
>
> **[0:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=45)** Server rendered web applications are still an important part of the framework, but the capabilities and sophistication of the available libraries have grown significantly.
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=55)** We'll explore how to create both Razor Pages applications and Model-View-Controller applications.
>
> **[1:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=62)** They're both great choices for server rendered apps.
>
> **[1:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=65)** I'll cover the similarities and differences between them so you can better understand which might be best for your project and the way you like to organize your code.
>
> **[1:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=74)** [ASP.NET](https://ASP.NET) Core is also great for creating web APIs.
>
> **[1:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=79)** They let you serve data to mobile apps, desktop apps, or even other web apps.
>
> **[1:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=84)** I'll show you how to create two different flavors of web APIs with [ASP.NET](https://ASP.NET) Core.
>
> **[1:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=89)** The first is controller based APIs.
>
> **[1:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=92)** They're structured similarly to the MVC server rendered apps.
>
> **[1:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=96)** A newer application type designed to get an API up and running quickly with minimal dependencies is known as a minimal API project.
>
> **[1:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=105)** Again, I'll cover the pros and cons of both so you can decide which is right for your projects.
>
> **[1:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=111)** These four project types I've mentioned so far make up the bulk of what most people think of when they think of web apps.
>
> **[1:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=119)** However, [ASP.NET](https://ASP.NET) Core is also capable of building some other interesting types of applications.
>
> **[2:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=126)** gRPC is a cross-platform, remote procedure call framework.
>
> **[2:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=130)** The gRPC specification was originally developed by [[Google]] and is designed to support high performance services using multiple programming languages and development stacks.
>
> **[2:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=141)** [ASP.NET](https://ASP.NET) Core includes excellent support for creating gRPC servers and clients.
>
> **[2:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=148)** SignalR is an [ASP.NET](https://ASP.NET) Core library that supports realtime web functionality, including server side code pushing content to clients instantly.
>
> **[2:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=158)** I'll talk more about how this works and show you how to create a SignalR server hub and [[JavaScript]] client later in the course.
>
> **[2:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=167)** The final [ASP.NET](https://ASP.NET) Core application type I'm going to cover in the course is Blazor.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=172)** It's a really interesting technology that lets you create client site applications using C# and existing .NET libraries.
>
> **[3:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=180)** It's a great alternative to using JavaScript for client side development while still supporting interoperability with JavaScript libraries and code.
>
> **[3:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=190)** The last point I want to make regarding the capabilities of [ASP.NET](https://ASP.NET) Core is that it's open-source and cross platform.
>
> **[3:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=198)** Early versions of .NET and [ASP.NET](https://ASP.NET) only ran on [[Windows]].
>
> **[3:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=202)** Those days are long gone.
>
> **[3:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=204)** [ASP.NET](https://ASP.NET) Core is fully cross platform and works great on Windows, Mac, OS, and [[Linux]].
>
> **[3:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-the-capabilities-of-asp-dot-net-core?u=76281980&t=212)** Up next, I'll talk about some of the development tools commonly used when building [ASP.NET](https://ASP.NET) Core apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (13), [[JavaScript]] (3), [[ASP.NET]] (2), [[Windows]] (2), [[HTML]] (1)
> **Env Vars:** net (19), asp (15), api (2), html (1), mvc (1)
> **URLs:** [asp.net](https://asp.net) (15)
> **Definitions:** is a  (2), known as (2), is an  (1)
> **Code Identifiers:** grpc (3)
> **CLI Commands:** make (2)
> **Cross-References:** later in (1)
> **Documentation:** specification (1)

#### [ASP.NET Core development tools](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=0)** - [Instructor] There are only a couple of things you absolutely need to install before you can get started with [ASP.NET](https://ASP.NET) Core Development.
>
> **[0:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=7)** The first is the .NET SDK.
>
> **[0:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=10)** You can get that directly from [[Microsoft]] at dotnet.[microsoft.com](https://microsoft.com).
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=16)** That site has downloads available for various .NET runtimes, but to create your own applications, you're going to need the SDK.
>
> **[0:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=25)** It includes all of the runtimes as well as the libraries and tools you'll need to create your own apps.
>
> **[0:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=31)** The only other thing you really need is an editor where you can write some code.
>
> **[0:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=35)** This can really be just about any text editor.
>
> **[0:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=38)** You'll probably find the experience much more pleasant if your editor has some support for C#, although that's not technically required.
>
> **[0:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=47)** If you already have a favorite editor, check to see if there's a C# extension or plugin for it.
>
> **[0:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=53)** If you don't already have a favorite editor, I'll give you a couple of quick recommendations.
>
> **[0:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=59)** The first is Visual Studio.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=61)** This is Microsoft's full-blown integrated development environment and can handle just about any .NET related development task you're likely to encounter.
>
> **[1:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=71)** It comes in three additions, Community, Professional and Enterprise.
>
> **[1:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=76)** Professional and Enterprise require you to purchase a license, but the Community edition is free for students, open-source contributors, and individuals.
>
> **[1:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=86)** Visual Studio is a great development tool, but note that it only runs on [[Windows]].
>
> **[1:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=92)** It also has lots of features and may feel overwhelming to a new developer or someone just getting started with [ASP.NET](https://ASP.NET) Core development.
>
> **[1:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=103)** The tool I prefer, and that I'm going to use in the course is Visual Studio Code.
>
> **[1:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=108)** It's free, cross-platform and very extensible.
>
> **[1:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=113)** You can download versions for Windows, macOS, or [[Linux]] at code.[visualstudio.com](https://visualstudio.com).
>
> **[2:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=120)** It's a fast and lightweight editor right out of the box, but there are also thousands of extensions available for it that can help you accomplish just about any development task.
>
> **[2:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=131)** For [ASP.NET](https://ASP.NET) Core development, I'll recommend you also install the C# Dev Kit extension to give you lots of great syntax highlighting and other features to assist with .NET development.
>
> **[2:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=144)** If you're new to VS code or just want to learn more about it and fully utilize its features, you should check out another of my [[LinkedIn]] learning courses titled, Learning Visual Studio Code.
>
> **[2:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=156)** Okay, there are a couple of other important development tools I want to specifically mention, but they're both included with the .NET SDKs, so, you don't need to download or install them separately.
>
> **[2:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=168)** The first is the .NET Command line interface or [[CLI]].
>
> **[2:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=173)** As its name suggests, it's a command line tool you'll run in your favorite terminal.
>
> **[2:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=178)** It has lots of features, but we'll primarily use it to create new projects and build and run those projects.
>
> **[3:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=185)** The last tool I'll mention is the Kestrel web server.
>
> **[3:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=189)** It will also be installed as part of the .NET SDK.
>
> **[3:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=193)** It's cross platform, and is configured by default in the [ASP.NET](https://ASP.NET) Core project templates.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=200)** It's the recommended server for [ASP.NET](https://ASP.NET) Core and makes it easy to run your applications on your development machine.
>
> **[3:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=207)** With those pieces in place, you're ready to start creating and running [ASP.NET](https://ASP.NET) Core applications.
>
> **[3:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/asp-dot-net-core-development-tools?u=76281980&t=213)** In the next movie, that's exactly what we'll do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (6), [[Microsoft]] (3), [[Windows]] (2), [[Linux]] (1), [[LinkedIn]] (1)
> **Env Vars:** net (13), asp (6), sdk (3), cli (1)
> **URLs:** [asp.net](https://asp.net) (6), [microsoft.com](https://microsoft.com) (1), [visualstudio.com](https://visualstudio.com) (1)
> **Tools:** visual studio (4), command line (2), vs code (1), terminal (1)
> **Prerequisites:** install (3), you'll need (1), getting started (1)
> **CLI Commands:** dotnet (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** macos (1)

#### [Create and run an ASP.NET Core application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=0)** - [Instructor] Let's now use the .NET [[CLI]] to create and run a new [ASP.NET](https://ASP.NET) Core application.
>
> **[0:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=7)** I'm here in [[Powershell]] on a [[Windows]] machine, but you can run the CLI from any terminal on macOS or [[Linux]].
>
> **[0:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=15)** You invoke the CLI with the command dotnet You follow that with additional commands or options based on what you're trying to accomplish.
>
> **[0:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=24)** The first option I'll show you is --help.
>
> **[0:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=28)** This shows you a quick list of the available commands along with a brief description to get you started.
>
> **[0:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=34)** You use the new command to create a new .NET project or file.
>
> **[0:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=41)** Before creating a new project, you can view a list of the available project templates with the list option.
>
> **[0:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=50)** This list is pretty long and includes much more than just [ASP.NET](https://ASP.NET) Core templates.
>
> **[0:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=56)** To filter the list to just those items with web in the name, you can use the command .dotnet new list web.
>
> **[1:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=68)** We're going to explore several of these project templates throughout the course, but right now I just want to create a basic empty project.
>
> **[1:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=76)** Notice that each template has a name in the first column, which is followed by a short name in the second column.
>
> **[1:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=84)** You use the short name with the new command to create new projects based on that template.
>
> **[1:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=90)** The first item in this list is the template for an empty [ASP.NET](https://ASP.NET) Core project.
>
> **[1:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=95)** The short name for it is web.
>
> **[1:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=98)** I can create a new empty project with the command dotnet new web.
>
> **[1:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=105)** I'll add the -o option to specify the output folder where I want the project created.
>
> **[1:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=112)** I'll create it in a sub folder of the current folder named first web project.
>
> **[2:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=122)** It looks like the command executed successfully.
>
> **[2:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=125)** I'll now change to the project directory and open that directory in VS Code with the command code period.
>
> **[2:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=133)** The period representing the current directory, I want to briefly mention the files and folders that got created.
>
> **[2:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=145)** The bin and obj folders contain artifacts from the compilation and build process.
>
> **[2:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=151)** We're not going to spend much time there in this course.
>
> **[2:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=155)** The properties folder contains a file named launchsettings.[[JSON]] with some settings that determine how your app is run.
>
> **[2:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=162)** We'll look inside it in just a minute.
>
> **[2:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=165)** The app settings files contain general application settings you can configure specific to your execution environment.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=172)** The next two files in the list are the project and solution files.
>
> **[2:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=177)** They contain additional information as which version of .NET to use, what packages to include and things like that.
>
> **[3:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=184)** Right now I want to focus on the contents of the program.cs file.
>
> **[3:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=190)** This is the only code file in the project at the moment, and because I created this project with the empty project template, it only has a few basic lines in it.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=200)** Let's go over what this code does.
>
> **[3:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=202)** The first thing I want to mention is that this code uses what's known as top level statements.
>
> **[3:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=208)** If you've written C# code before, you're probably used to your program's entry point being wrapped inside a class named program with a method named main.
>
> **[3:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=218)** Top level statements let you accomplish the same thing with less code by just including the code that would've appeared inside the main function.
>
> **[3:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=227)** Only one file in your project can have top level statements.
>
> **[3:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=231)** VS Code shows you refactoring options if you click on the little light bulb icon.
>
> **[3:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=238)** If you prefer to use a main method, just select convert to program.main style program.
>
> **[4:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=246)** We still have the same code, it's now just wrapped inside the traditional program class.
>
> **[4:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=251)** I'm going to undo that and stick with the top level statements.
>
> **[4:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=257)** The first two lines of code here create an application host and store it in the app variable.
>
> **[4:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=263)** It encapsulates and configures the app's resources and features.
>
> **[4:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=267)** The first line creates a web application builder object, which can be configured with various options before the host object is created with the call to builder.build.
>
> **[4:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=279)** There are lots of different options you can configure, but I'll quickly add a couple of lines of code that will clear out the default logging providers and just add back the console logger.
>
> **[4:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=291)** After the host is built, the MapGet method is called to handle HTTP requests made to the root of our new web application.
>
> **[5:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=300)** The first parameter to MapGet is the URL you want to handle.
>
> **[5:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=304)** The URL is just a forward slash to represent the root of the site.
>
> **[5:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=309)** The second parameter is a function that will execute when an HTTP GET request is received for that URL.
>
> **[5:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=317)** This one is a lambda function that will just return the string hello world back to the browser.
>
> **[5:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=323)** I'm going to quickly add a second URL to the app.
>
> **[5:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=326)** I want it to respond to HTTP GET request, so I'll add another call to MapGet.
>
> **[5:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=333)** Let's imagine I want to include an about page with general information about my company.
>
> **[5:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=339)** I'll make the URL /about.
>
> **[5:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=344)** The second parameter will be another lambda function that just returns a basic string to the client.
>
> **[5:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=357)** This gives us two URLs to test when we run the app.
>
> **[6:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=361)** Before I do that though, I want to return to the launchsettings.json file.
>
> **[6:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=366)** I mentioned earlier in the properties folder in the project.
>
> **[6:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=373)** This file is only used on your local development machine and contains profiles that configure how the application will run.
>
> **[6:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=381)** The application will use the built-in Kestrel web server by default, which is configured with the first two profiles named HTTP and HTTPS.
>
> **[6:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=394)** There are various settings you can add to the profiles, but the one I want you to note now is the URL with a randomly generated port number you can use to access the site when you run it.
>
> **[6:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=406)** The HTTP version of my application is currently configured to run on port 5257.
>
> **[6:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=413)** We can run the app in a terminal using the .NET CLI.
>
> **[6:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=417)** I'm going to use the terminal built into VS Code, but you can also do this from any terminal on your computer.
>
> **[7:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=426)** The command to build and start the app is dotnet run.
>
> **[7:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=432)** It takes just a few seconds to build and start the server.
>
> **[7:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=436)** In the output, you can see the app is now listening for new requests at the URL we saw inside the launchsettings.json file.
>
> **[7:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=445)** To quickly open it in a browser I can hold down the control key and click that link in the output.
>
> **[7:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=452)** That opens my default browser to the root of the application.
>
> **[7:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=456)** An HTTP GET request was issued for that URL and you can see the hello world response that was configured in the code to be returned for that address.
>
> **[7:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=466)** To quickly demonstrate the second URL I configured in the code, I'll add /about to the end of the current URL in the address bar.
>
> **[7:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=477)** As expected, that shows the very brief bit of text about the company.
>
> **[8:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=482)** When you're done trying out your app, you can switch back to the terminal and press Control + C to stop it.
>
> **[8:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=489)** You've now seen the basics of getting a simple [ASP.NET](https://ASP.NET) Core application up and running.
>
> **[8:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/create-and-run-an-asp-dot-net-core-application?u=76281980&t=495)** Up next, we'll add to this basic app and talk about the [[Dependency Injection]] system and how to use it to add additional services to the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (4), [[ASP.NET Core]] (4), [[JSON]] (3), [[Powershell]] (1), [[Windows]] (1)
> **Env Vars:** url (10), net (8), http (6), cli (4), asp (4)
> **Tools:** terminal (5), vs code (3), powershell (1)
> **CLI Commands:** dotnet (4), make (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **Exercise Files:** template (4)
> **Definitions:** is a  (2), known as (1), is called (1)
> **File Paths:** launchsettings.json (3)

#### [Configuring dependency injection](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=0)** - [Instructor] When configuring your apps in the Program.cs file, there are a couple of primary ways to include additional functionality, the injection of services and the inclusion of middleware.
>
> **[0:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=12)** We'll talk about middleware in the next movie.
>
> **[0:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=14)** Right now, I want to focus on how to inject services into your [ASP.NET](https://ASP.NET) Core applications.
>
> **[0:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=20)** First, when I talk about injecting services, I'm not talking about web services, but rather discrete pieces of functionality I want to make available in the app.
>
> **[0:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=30)** These types of services are injected via the built-in [[Dependency Injection]] system.
>
> **[0:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=37)** I'm not going to dive too deeply into this, but I do want to provide a quick overview of dependency injection in case this topic is new to you.
>
> **[0:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=46)** Objects that depend on other objects can just create those objects as they need them.
>
> **[0:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=51)** However, this makes it difficult to use a different implementation later, and the code is harder to unit test.
>
> **[0:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=59)** When you use dependency injection, objects are passed dependencies, usually in the constructor rather than creating them internally.
>
> **[1:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=68)** Dependencies are usually defined with an interface so that it's easier to support different implementations and testability.
>
> **[1:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=75)** The interfaces are registered with implementations in a container.
>
> **[1:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=80)** You'll sometimes hear this referred to as an inversion of control or IOC container.
>
> **[1:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=86)** The web application builder object we've already seen in the Program.cs file of our new [ASP.NET](https://ASP.NET) Core application has a services property.
>
> **[1:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=97)** Services are injected into the app via that property.
>
> **[1:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=102)** Groups of related services are registered by calling an extension method on an IServiceCollection object.
>
> **[1:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=113)** You can see here that the services property on the web application builder object is an IServiceCollection.
>
> **[2:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=120)** The naming convention for the extension methods that add groups of services is the [[Microsoft Word|word]] add, followed by the name of the service group.
>
> **[2:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=131)** For instance, I'll start to type add, and you can see the code completion help brings up a long list of extension methods that will register lots of interesting new functionality for my app.
>
> **[2:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=142)** If I wanted to use the model view controller pattern in this app, I could call the AddControllersWithViews extension method.
>
> **[2:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=153)** Similarly, I could add authorization services with a call to AddAuthorization.
>
> **[2:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=163)** Different [ASP.NET](https://ASP.NET) Core project templates will already include calls to register certain services based on the features in that template.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=172)** I'm not going to cover creating your own custom services in this course, but I do want to quickly point out that there are several ways you can add your own services to the container.
>
> **[3:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=183)** Probably the most common is with the AddScoped method.
>
> **[3:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=191)** You can pass it to generic parameters that are the interface and the implementation you want to use for your service.
>
> **[3:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=206)** Obviously, this interfacing class don't exist in my project, so I'm going to delete this line of code.
>
> **[3:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=214)** I don't want to run the app again just yet, but I do want to make sure it still builds successfully.
>
> **[3:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=219)** So I'll quickly show you another .NET [[CLI]] command.
>
> **[3:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=224)** If you want to build your project without running it, you can just type dotnet build.
>
> **[3:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=233)** Okay, I got no warnings and no errors.
>
> **[3:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=236)** We'll see more examples of registering services as we explore different [ASP.NET](https://ASP.NET) Core project types later in the course.
>
> **[4:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/configuring-dependency-injection?u=76281980&t=244)** Up next, I'll add middleware and explain how it can also be used to add functionality to your apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (4), [[Dependency Injection]] (3), [[Microsoft Word|Word]] (1), [[CLI]] (1)
> **Env Vars:** net (5), asp (4), ioc (1), cli (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **CLI Commands:** make (2), dotnet (1)
> **Cross-References:** in the next (1), later in (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)

#### [Using middleware](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=0)** - [Instructor] Middleware is software designed to handle and manipulate HTTP requests and responses.
>
> **[0:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=7)** It's configured in what you can think of as a pipeline.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=11)** With no middleware in place, HTTP requests are received by the server process and a response is sent to the client.
>
> **[0:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=20)** When middleware is added to the pipeline, the request is processed by each successive piece of middleware on the way to the server, and in the reverse order when the response is sent back to the client.
>
> **[0:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=32)** The middleware can manipulate the request and responses by doing things such as adding headers, enforcing authentication rules, and much more.
>
> **[0:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=43)** There's lots of middleware built into [ASP.NET](https://ASP.NET) Core that you can add to your app with a simple function call.
>
> **[0:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=50)** You can also add your own custom middleware.
>
> **[0:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=52)** I'll quickly show you an example of both.
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=55)** Most web apps need the ability to display some type of error page if an exception is thrown.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=61)** [ASP.NET](https://ASP.NET) Core includes a couple of pieces of middleware for this.
>
> **[1:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=66)** One, for exceptions found during development that can help you troubleshoot the problem, and another for production deployments that can be more user-friendly.
>
> **[1:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=75)** To include these, I'll start with an if statement that checks if the current environment is running in development.
>
> **[1:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=88)** If it is development, I'll call the UseDeveloperExceptionPage function on the WebApplication object.
>
> **[1:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=100)** I mentioned earlier that the convention for adding services to the [[Dependency Injection]] system is to call a function named add, followed by the group of services you're adding.
>
> **[1:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=111)** The conventional name for functions that add middleware start with the [[Microsoft Word|word]] Use.
>
> **[1:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=117)** UseDeveloperExceptionPage will add middleware to the HTTP pipeline that automatically displays an exception page designed for developers if an exception is encountered.
>
> **[2:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=128)** When this application is built for production, I want it to present a more user-friendly exception page, so I'll add an else condition and add the UseExceptionHandler middleware.
>
> **[2:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=147)** This will handle exceptions and route the app to the /Error URL, which I haven't actually created yet.
>
> **[2:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=154)** Since middleware is processed in the order it's added to the pipeline, each piece of middleware passes the HTTP request or response off to the subsequent piece of middleware.
>
> **[2:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=167)** One exception to this is the case when the middleware determines that the request can either be terminated or completely handled without further processing.
>
> **[2:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=176)** This is known as short circuiting the request.
>
> **[2:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=179)** Handling requests for static files is one case where requests get short circuited.
>
> **[3:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=185)** I'll now add the UseStaticFiles middleware.
>
> **[3:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=194)** With that middleware in the pipeline, the request will be short circuited if it's determined that the HTTP request is for a static file rather than a request that requires dynamic processing on the server.
>
> **[3:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=208)** In the case of a short circuited request, no further middleware is processed.
>
> **[3:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=213)** In this case, the static file would be returned as the response.
>
> **[3:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=217)** There's lots of built-in middleware you can add with other methods that start with the word Use.
>
> **[3:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=222)** You can see some of them by looking over the choices in the code completion help.
>
> **[3:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=228)** I can't cover all of them in this course, but we'll see more of them as we look at more application types later on.
>
> **[3:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=237)** In addition to the built-in middleware, you can also add your own with a call to the Use method on the WebApplication object.
>
> **[4:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=253)** You pass it a function that accepts the current HTTP context and the next piece of middleware in the pipeline.
>
> **[4:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=261)** Inside the function, you use the HTTP context object to manipulate the request or response as needed.
>
> **[4:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=269)** I'm going to add a custom header to the HTTP response.
>
> **[4:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=280)** I'll name it x-my-custom-header, and just set its value to My customheader value.
>
> **[4:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=295)** When your middleware is done making changes, you hand it off to the next piece of middleware in the pipeline using the next object pass to the function.
>
> **[5:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=305)** Since this is an async function, I'll use the await keyword and then call the Invoke method on the next object.
>
> **[5:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=318)** Okay. Let's now run the app and check out the changes.
>
> **[5:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=322)** I'll open the built in terminal and start it with the command, dotnet run.
>
> **[5:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=330)** I'll click the link in the output to open the app in a browser.
>
> **[5:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=335)** In order to look for my new custom header, I'm going to press F12 to open the browser's dev tools.
>
> **[5:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=342)** I'm already on the Network tab, so I'll now refresh the page so we can see the request.
>
> **[5:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=349)** There, in the response header section, you can see the custom header I added with my custom piece of middleware.
>
> **[5:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=355)** Before I wrap up this demo, I want to quickly go back to the terminal and point out one more thing.
>
> **[6:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=361)** Notice near the beginning of the output from the dotnet run command, I've got a warning.
>
> **[6:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=367)** It tells me the WebRootPath was not found, and it seems to be looking for a folder named wwwroot inside my project directory.
>
> **[6:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=377)** This is a result of me adding the StaticFiles middleware.
>
> **[6:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=381)** When you include that middleware, [ASP.NET](https://ASP.NET) Core looks by default for those files in a directory named wwwroot.
>
> **[6:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=390)** Because I created this project using the empty project template, it didn't come with a wwwroot directory already in place.
>
> **[6:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=398)** As we'll see later, many of the other project templates do come with that middleware and directory by default, I can fix this in my project pretty easily.
>
> **[6:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=408)** I'll first stop it with the command Control + C.
>
> **[6:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=411)** I'll then just add a new empty folder to the project named wwwroot.
>
> **[7:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=420)** I'll now restart the app.
>
> **[7:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=426)** That got rid of the warning.
>
> **[7:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=428)** Okay, in this chapter, I've covered some of the basics to get you started with [ASP.NET](https://ASP.NET) Core development and shown you a few of the common tools and features you'll use across multiple application types.
>
> **[7:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=441)** In the next chapter, we'll start looking at specific application types.
>
> **[7:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=446)** First up will be Razor Pages applications.
>
> **[7:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=449)** They're are popular choice for server rendered applications, and a great way to get some experience with the Razor syntax, which lets you combine C# code with [[HTML]].
>
> **[7:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-middleware?u=76281980&t=459)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (4), [[Microsoft Word|Word]] (2), [[Dependency Injection]] (1), [[HTML]] (1)
> **Env Vars:** http (8), asp (4), net (4), url (1), f12 (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **UI Navigation:** open the (3)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Warnings:** warning (2), troubleshoot (1)
> **CLI Commands:** dotnet (2)
> **Tools:** terminal (2)


### 2. Creating Razor Pages Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Razor Pages](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=0)** - [Instructor] Razor Pages applications are probably the most productive way to get started building server rendered apps with [ASP.NET](https://ASP.NET) Core.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=8)** As the name suggests, Razor Pages projects are structured around the pages of a website, and the functionality of each page is reasonably self-contained usually within one or two files.
>
> **[0:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=20)** Let's create a new Razor Pages project with the .NET [[CLI]] and take a look at how they're structured and configured.
>
> **[0:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=28)** I'll create a new project with the command, dotnet new.
>
> **[0:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=33)** The short name to use when creating a new Razor Pages project with the CLI is webapp.
>
> **[0:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=40)** The short name razor also works.
>
> **[0:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=44)** I'll add the -o option, and create the project in a new subdirectory named razor-pages.
>
> **[0:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=54)** It looks like that was created successfully.
>
> **[0:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=56)** I'll now change to the new directory and open it in VS Code.
>
> **[1:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=65)** Let's first open up the Program.cs file, and see how it's different from the one we saw on the empty web project I created earlier.
>
> **[1:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=74)** The contents of this file are not all that different from the Program.cs file I showed you for the empty web project template.
>
> **[1:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=82)** This one is just a little less empty, and comes with the services and middleware already in place to help us quickly get started building a Razor Pages app.
>
> **[1:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=91)** Specifically note the call to AddRazorPages on line 4, and the call to MapRazorPages further down on line 23.
>
> **[1:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=101)** The structure of the project is also a little different.
>
> **[1:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=105)** Notice that in my project explorer on the left that the project has a folder named Pages that I didn't have in the empty project I created earlier.
>
> **[1:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=116)** Inside it are a few default pages to get me started.
>
> **[1:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=119)** Webpages in a Razor Pages app have the file extension, .cshtml.
>
> **[2:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=126)** That's used to denote a file that contains the Razor syntax, which is a combination of C# and [[HTML]].
>
> **[2:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=134)** The default homepage for a new Razor Pages application will be in a file named index.cshtml.
>
> **[2:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=143)** If you've done any [[Web Development]] before, you'll quickly notice that this file doesn't look like a typical HTML file.
>
> **[2:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=150)** There's a div tag and a few other HTML tags down at the bottom, but there's no root HTML tag and no body tag.
>
> **[2:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=159)** There's also several lines at the top that don't look like HTML at all.
>
> **[2:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=164)** Over the next few movies, I'm going to explain all of this, so hang in there.
>
> **[2:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=168)** Let's start at the top of this file with the line of code that contains an @ symbol followed by the [[Microsoft Word|word]] page.
>
> **[2:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=175)** This is a directive, specifically it's the page directive.
>
> **[3:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=180)** It indicates that this file is a Razor page and will respond to requests directly as opposed to presentation files and other project types we'll look at later in the course.
>
> **[3:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=191)** Just below the page directive is the model directive.
>
> **[3:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=195)** It specifies the C# class that will be the page model for this page.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=200)** The page model is a class used to store data that will be presented on the page, as well as logic for processing requests to the page.
>
> **[3:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=209)** By convention, the name of the page model class is the name of the page followed by the word model.
>
> **[3:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=216)** This is the index page, so the page model class is named IndexModel.
>
> **[3:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=222)** Also by convention, the page model class is defined in a separate file that has the same name as the page file with an additional .cs extension on the end.
>
> **[3:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=233)** This file is named index.cshtml, so the page model for this file is defined in index.cshtml.cs.
>
> **[4:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=244)** Notice that this is a pretty typical looking C# class.
>
> **[4:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=248)** It's named IndexModel and it inherits from a class named PageModel.
>
> **[4:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=254)** The constructor receives an injected ILogger instance, which is assigned to a private property to handle any logging you want to do in the class.
>
> **[4:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=264)** The only other bit of code here is the OnGet method at the bottom.
>
> **[4:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=268)** It will be called when the page is requested via an HTTP GET request, and can be used to initialize any state or other properties you define on the class.
>
> **[4:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=279)** The page model class gives you a way to separate the logic of a page from the presentation of the page.
>
> **[4:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=285)** That sounds great.
>
> **[4:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=287)** However, we still need a way to incorporate data and the results of that logic into the presentation.
>
> **[4:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=293)** That's the role of the special Razor syntax that gives Razor Pages their name.
>
> **[4:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-razor-pages?u=76281980&t=299)** It combines C# code and HTML in the same file, and I'll show you how it works in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[CLI]] (2), [[Microsoft Word|Word]] (2), [[ASP.NET Core]] (1), [[Web Development]] (1)
> **Env Vars:** html (6), net (2), cli (2), asp (1), http (1)
> **Definitions:** is a  (5)
> **Cross-References:** later in (1), in the next (1)
> **CLI Commands:** dotnet (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **API Endpoints:** get  (1)
> **Tools:** vs code (1)

#### [Using Razor syntax](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=0)** - [Instructor] Razor syntax allows you to embed entire C# code blocks in your pages, as well as simple C# expressions that will be evaluated and rendered as [[HTML]] before being sent back to the browser.
>
> **[0:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=14)** This default index page we looked at in the last movie already has a C# code block in it just after the page and Model directives.
>
> **[0:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=24)** On line three, you can see the @ sign followed by a pair of curly braces.
>
> **[0:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=29)** That's a C# code block.
>
> **[0:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=31)** I can write just about any C# code I want inside those curly braces.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=36)** Currently, it contains just one line of code that assigns a value to an element in the special ViewData array.
>
> **[0:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=44)** ViewData is a property that exists on all views such as this razor page.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=49)** It's a simple weekly typed dictionary that is a convenient place to store small bits of data you might need on your page.
>
> **[0:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=57)** You access values in the dictionary using string keys.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=61)** This line of code assigns the string "Home page" to the key named "Title."
>
> **[1:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=67)** Let's imagine I want to store a welcome message in the ViewData collection.
>
> **[1:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=71)** I can just give it a new key and assign it a value.
>
> **[1:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=73)** (keys clicking)
>
> **[1:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=83)** The key is "WelcomeMessage," and I just assigned it a simple string.
>
> **[1:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=88)** I can then render that value in the page by using a razor expression.
>
> **[1:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=93)** This page already has a div element with the static "WelcomeMessage" inside a paragraph tag.
>
> **[1:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=100)** I'll first select it and delete that, and replace it with a razor expression.
>
> **[1:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=106)** (keys clicking) Expressions also begin with the @ symbol.
>
> **[1:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=116)** That's followed by a C# expression whose result you want to render.
>
> **[2:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=121)** This is known as an implicit expression.
>
> **[2:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=124)** They're great for rendering individual pieces of data.
>
> **[2:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=128)** However, one limitation they have is that they can't render expressions that contain spaces or C# generics.
>
> **[2:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=136)** The one exception to this is a space that can appear after the await keyword if you're calling an async function.
>
> **[2:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=143)** For those more complex cases, you'll need to use an explicit razor expression.
>
> **[2:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=148)** The only difference is that you surround the expression with parentheses just after the @ sign.
>
> **[2:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=155)** (keys clicking) Implicit is fine for this expression, so I'll remove those parentheses.
>
> **[2:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=163)** Let me now add a little more code to the C# code block above.
>
> **[2:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=167)** I'll declare a new variable named thanksMessage, and assign it a string.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=172)** (keys clicking) I can also render that value in the page with an implicit expression.
>
> **[3:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=184)** I'll add another paragraph tag and do that.
>
> **[3:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=187)** I just use the @ sign followed by the variable name.
>
> **[3:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=191)** (keys clicking) You can also write functions in code blocks.
>
> **[3:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=198)** I'll write a simple one named Greeting that returns a string.
>
> **[3:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=201)** (keys clicking) I'll just have it return the two messages I created, concatenated together.
>
> **[3:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=210)** (keys clicking)
>
> **[3:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=221)** I can now call that function using another implicit expression in the HTML, and the value return will appear in the rendered page.
>
> **[3:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=230)** (keys clicking) Before we go any further, I'll quickly run this in the terminal so we can take a look at the updated page.
>
> **[4:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=240)** I'll also show you another [[CLI]] command that will run your app and have it watch for new code changes so you don't have to keep stopping and restarting it with each update.
>
> **[4:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=250)** Instead of dotnet run, I'll start it with the command dotnet watch.
>
> **[4:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=256)** (keys clicking) That will build and run the app, and it will also watch for new code changes.
>
> **[4:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=262)** When it detects them, it will automatically rebuild and restart the app for you.
>
> **[4:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=269)** Starting the app automatically opened it in a browser for me.
>
> **[4:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=274)** It looks good, all the expressions rendered correctly, and we can see the expected output.
>
> **[4:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=280)** I only want to keep one of them, so I'll go back to the code and remove the first two and just leave the call to the Greeting function.
>
> **[4:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=287)** (keys clicking) Notice that after I made that change, you can see new output in the terminal letting me know the app has been reloaded.
>
> **[5:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=301)** Okay, you can also embed conditionals, loops, and other standard C# constructs in razor pages.
>
> **[5:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=308)** Before I show you that, let's return briefly to the index Model class I showed you in the last movie.
>
> **[5:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=316)** Remember that this is the Model class for the index page.
>
> **[5:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=320)** It's another place we can store Model and state data that we might want to render on the page.
>
> **[5:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=326)** I'll add a couple of new members to demonstrate that.
>
> **[5:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=329)** I'll add a Boolean field named ShowGreeting, and just hard code it to true for now.
>
> **[5:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=335)** (keys clicking) I'll also add a string array named OtherProjectTypes that will store some of the other project types we'll explore in the course.
>
> **[5:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=347)** (keys clicking)
>
> **[5:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=358)** Let's now go back to the page and see how we can work with these new values.
>
> **[6:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=363)** I want to use the value of the ShowGreeting member from the Model class to decide if I should call the Greeting function I wrote in the code block here on the page.
>
> **[6:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=374)** Just like with the expressions I showed you earlier, you can transition from HTML to C# using the @ sign.
>
> **[6:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=382)** Before the call to Greeting, I'll add @ followed by a normal C# if statement.
>
> **[6:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=388)** (keys clicking) I want to call the function if the value of the ShowGreeting member on the index Model class is true.
>
> **[6:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=396)** I access it with the Model property, which will be an instance of the index Model class.
>
> **[6:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=402)** From there, I can reference ShowGreeting.
>
> **[6:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=405)** (keys clicking) If the expression is true, it will execute the code inside a pair of curly braces just like any other if statement.
>
> **[6:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=414)** I'll add those curly braces around the call to the Greeting function.
>
> **[6:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=418)** (keys clicking) Notice that I don't need an @ sign in front of the curly braces, just in front of the if keyword.
>
> **[7:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=427)** Similarly, if this conditional had an else if or an else block, I would also not need an @ sign in front of those.
>
> **[7:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=435)** Let's now add a loop to iterate over the OtherProjectTypes array I created, and print its values to the page.
>
> **[7:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=443)** I'll first add a little text to the page to introduce the data I'm going to display.
>
> **[7:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=448)** (keys clicking) I'll use an HTML unordered list to present the data.
>
> **[7:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=456)** (keys clicking) Inside the UL tag is where I want to write my loop.
>
> **[7:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=461)** I'll again transition to C# with the @ sign.
>
> **[7:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=466)** I'll then write a very normal looking for each loop, again using the Model property to access the OtherProjectTypes array on the index Model class.
>
> **[7:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=476)** (keys clicking) Inside the loop, I'll add an li element and use an implicit expression to render the loop variable I named Project Type.
>
> **[8:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=491)** (keys clicking) I'll switch back over to my browser and show you the new page.
>
> **[8:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=498)** Because I ran the app with the watch command, it's been automatically reloaded, and the page is even refreshed in the browser.
>
> **[8:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=505)** You can see the greeting is still displayed because our conditional evaluated to true, and the for each loop ran successfully and rendered the OtherProjectTypes from the index Model class.
>
> **[8:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=518)** There are lots of other C# constructs you can embed in your razor pages.
>
> **[8:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=523)** Remember to transition to C# with the @ sign, and then you can similarly add for loops, while loops, using blocks, try catch blocks, and lots more.
>
> **[8:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=534)** You can check out the official documentation for a complete list.
>
> **[8:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=538)** Okay, I've been telling you that this is the index page for the site, but you can see it doesn't look much like a complete HTML page.
>
> **[9:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=547)** It really just consists of a single div element.
>
> **[9:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-razor-syntax?u=76281980&t=550)** Coming up, I'll explain why that is, and how to implement page layouts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[CLI]] (1)
> **Non-Speech:** (keys clicking) (19)
> **Env Vars:** html (5), cli (1)
> **Cross-References:** in the last (2), go back to (2), coming up (1)
> **Definitions:** is a  (3), known as (1)
> **Analogies:** just like (2), such as (1), imagine (1)
> **CLI Commands:** dotnet (2)
> **Tools:** terminal (2)

#### [Implementing page layouts](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=0)** - [Instructor] Let's now talk about how relatively small snippets of [[HTML]], like those we've seen in our Razor pages, get turned into complete and syntactically valid HTML pages.
>
> **[0:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=12)** Here I've opened the index.cshtml file I was experimenting with in the previous movie.
>
> **[0:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=18)** At the top of the file are a couple of directives and a code block.
>
> **[0:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=22)** Below that is a snippet of HTML, but it's really just a div element with a few elements nested inside it.
>
> **[0:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=30)** This is effectively just the content area for our applications homepage.
>
> **[0:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=35)** It's easier to maintain your site if you keep common page elements in separate files so they can be referenced when needed.
>
> **[0:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=43)** This lets you make updates in one place rather than making the same small change on every page.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=49)** Most sites have page elements that are the same throughout most or all of the site.
>
> **[0:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=54)** This can include headers, footers, navigation menus, and even references to style sheets and [[JavaScript]] files.
>
> **[1:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=62)** Those common elements are stored in layout files.
>
> **[1:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=67)** A page declares which layout file it should use by setting its layout property, usually done in the code block at the top of the page.
>
> **[1:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=76)** This page has a code block, but it doesn't assign a value to a layout property.
>
> **[1:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=82)** The layout for this page is actually being set in a file named _ViewStart.cshtml that lives in the Pages folder.
>
> **[1:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=94)** The code in this file will run before every page.
>
> **[1:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=98)** Right now, it contains a code block with only one line of code that sets the layout property to _Layout.
>
> **[1:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=105)** I could override this in an individual page file, but this is a convenient way to define a default layout file for all the pages in your site.
>
> **[1:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=115)** _Layout refers to the _Layout.cshtml file in the Shared folder.
>
> **[2:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=123)** Even at a glance, you can probably tell this looks more like a complete HTML file than the snippet in the index page.
>
> **[2:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=131)** There's an HTML tag at the top, followed by a head tag, a body tag, and more.
>
> **[2:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=137)** The contents of this file define the overall page structure for all the pages that use it for their layout.
>
> **[2:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=144)** Therefore, if you want to make changes to the navigation links that appear at the top of every page, you can open this file and update them in one place.
>
> **[2:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=154)** The content for each individual page is inserted into this layout with a call to a function named RenderBody.
>
> **[2:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=163)** You can see it here on line 35.
>
> **[2:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=166)** So when we visit the homepage of this application, the div element inside the index.cshtml file will be inserted into this page, where the call to RenderBody appears.
>
> **[3:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=180)** In addition to the main content for a page, Razor pages can also declare what are known as sections of HTML that you can render in different parts of a layout file.
>
> **[3:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=191)** Notice that near the end of this layout file, there are several script tags that reference JavaScript files.
>
> **[3:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=198)** After that is a call to a function named RenderSectionAsync.
>
> **[3:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=203)** The first parameter to the function is the string Scripts.
>
> **[3:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=207)** If a Razor page using this layout has a section named Scripts, then it will be rendered in the page where you see this function call.
>
> **[3:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=216)** This effectively gives you a way to insert snippets of HTML at multiple places inside a layout file.
>
> **[3:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=224)** This particular call to RenderSectionAsync is clearly designed to add references to additional JavaScript files that a particular page might need.
>
> **[3:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=234)** Notice that the second parameter to the function is named required and set to false, meaning that individual Razor pages are not required to declare a Scripts section.
>
> **[4:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=246)** In fact, the index page doesn't have one, but let's go add one so you can see what that looks like.
>
> **[4:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=255)** At the end of this file, I'm going to declare a new section.
>
> **[4:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=259)** I do that with the section directive.
>
> **[4:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=262)** That starts with an at sign, followed by the [[Microsoft Word|word]] section.
>
> **[4:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=268)** I then need to give the section a name.
>
> **[4:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=271)** Remember that the Layout file was attempting to render a section named Scripts, so that's what I'll name this section.
>
> **[4:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=281)** That's followed by a pair of curly braces.
>
> **[4:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=283)** The HTML you put inside the curly braces is what will be added to the page when it calls RenderSectionAsync.
>
> **[4:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=292)** If I drill into the default wwwroot folder in this project, you'll see there's a JS directory containing an empty JavaScript file named site.js.
>
> **[5:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=306)** In my new section, I'll add a script tag to reference that file.
>
> **[5:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=321)** Just to show you that you can really include any content you want in a section, I'll also add an HTML comment here so that we can better spot it when I run the app.
>
> **[5:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=339)** I've already got the app running in watch mode, so I'll now switch over to my browser and open the dev tools.
>
> **[5:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=348)** I'll click on the sources panel and select the homepage.
>
> **[5:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=355)** Around the middle of the page, you can see the main content area rendered from the index.cshtml file.
>
> **[6:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=362)** Further down, you can see the three script tags that were in the layout page, and after that, you can see the content I added to the Scripts section in the index file.
>
> **[6:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=373)** I want to show you one more example of using sections in your Razor pages.
>
> **[6:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=379)** Let's imagine I want to declare a section with HTML to present a welcome message.
>
> **[6:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=385)** I'll add a new section after the Scripts section, and just name it Welcome.
>
> **[6:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=395)** I'm going to cut the h1 tag above and make it the content for this section.
>
> **[6:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=406)** I'll update the actual message to say, "Welcome to Index.cshtml."
>
> **[6:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=416)** Let's now switch back to my browser and see what this looks like so far.
>
> **[7:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=421)** I've got a giant unhandled exception.
>
> **[7:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=425)** The text in the exception is basically letting me know that I've declared a section that's not been rendered.
>
> **[7:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=432)** If you declare a section in a Razor page, the corresponding layout page is required to either render that section or explicitly ignore it.
>
> **[7:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=442)** I'm not currently doing either, which is why I am getting an exception.
>
> **[7:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=446)** Let's fix that.
>
> **[7:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=448)** I'll go back to _Layout.cshtml.
>
> **[7:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=453)** I'll copy this existing call to RenderSectionAsync.
>
> **[7:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=458)** I'll scroll up and paste it just after the closing header tag.
>
> **[7:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=465)** I'll then update the name of the section to render from Scripts to Welcome.
>
> **[7:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=471)** I'll now go back to the browser and refresh the page.
>
> **[7:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=477)** You can see the exception is gone and the welcome message now contains the content from the Welcome section I declared on the page.
>
> **[8:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=485)** Okay, the last thing I want to show you related to layouts is how you can easily override the default layout file.
>
> **[8:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=493)** I'll first copy all of the contents of this _Layout.cshtml file, so I can use it as the starting point for a new layout file.
>
> **[8:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=507)** I'll now create a new file in the shared folder named InformationLayout.cshtml.
>
> **[8:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=521)** I'll paste into it the contents of the other Layout file.
>
> **[8:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=526)** I'll now quickly move through it and make a few changes.
>
> **[8:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=529)** I'll change the title element to Company Info.
>
> **[8:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=536)** I will remove the rendering of the Welcome section I just added.
>
> **[9:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=542)** I'll update the copyright in the footer to use my name instead of the project name.
>
> **[9:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=551)** Lastly, I'll remove all of the script tags at the bottom as well as the call to RenderSectionAsync that renders the page's Scripts section.
>
> **[9:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=563)** I now want to update the included [[Privacy]] page to use this layout instead of the one in the default layout file.
>
> **[9:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=571)** I'll do that in the Privacy.cshtml file.
>
> **[9:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=575)** Inside the code block at the top of the file, I need to set the layout property to the new file I created.
>
> **[9:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=589)** I don't have to include the file extension.
>
> **[9:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=592)** I'll quickly switch back to the browser and click on the privacy link at the top of the page.
>
> **[9:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=599)** The page looks similar because I didn't make that many changes, but you can tell from the copyright notice at the bottom that now includes my name, that it is using the new layout file.
>
> **[10:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=610)** Taking advantage of layout files in section declarations gives you fine grain control over how your pages appear while eliminating lots of potentially duplicate code.
>
> **[10:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=621)** Once you've got several pages in your app, you need to make sure your users can easily navigate between them.
>
> **[10:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-page-layouts?u=76281980&t=628)** I'll show you some techniques to do that in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (10), [[JavaScript]] (4), [[Privacy]] (3), [[Microsoft Word|Word]] (1)
> **Env Vars:** html (10)
> **CLI Commands:** make (6)
> **UI Navigation:** click on (2), open the (1), select the (1), scroll up (1)
> **Definitions:** is a  (3), refers to (1), known as (1)
> **Cross-References:** go back to (2), in the next (1)
> **File Paths:** site.js (1)
> **Analogies:** imagine (1)

#### [Routing to pages](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=0)** - [Instructor] In order to successfully receive HTTP request, and present your users with the page they're hoping to find, [asp.net](https://asp.net) core has to implement a [[Routing]] system.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=11)** The job of the routing system is to look at the HTTP request, including the URL, HTTP verb and other request properties, and determine what page in the application should handle that request.
>
> **[0:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=25)** In this movie, I'm going to show you the default routing behavior in razor pages apps, and in an upcoming movie, I'll build on those ideas, and show you how to implement route templates and how to use model binding with the parameters passed with HTTP request.
>
> **[0:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=41)** I mentioned earlier that by default, all the pages in a razor pages app are in a folder named page.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=49)** [Asp.net](https://Asp.net) core will look at the URL requested, and see if it can find a page in the pages folder that matches the first segment of the URL after the host and port number.
>
> **[1:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=62)** This app currently has an index page, an error page and a [[Privacy]] page.
>
> **[1:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=67)** I've already got the app running here in a browser.
>
> **[1:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=70)** You can see that the URL in the address bar doesn't refer to a specific page.
>
> **[1:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=76)** When that's the case, [asp.net](https://asp.net) core will look for an index page in the pages folder.
>
> **[1:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=82)** I can also get to the index page by explicitly adding it to the url.
>
> **[1:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=88)** Similarly, I can go to the privacy page by adding/privacy after the host name.
>
> **[1:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=97)** It makes sense to organize the pages for slightly larger sites into folders.
>
> **[1:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=103)** When you do that, [asp.net](https://asp.net) core will effectively just treat the pages folder in the project as the root content folder, and each URL segment as a folder within it.
>
> **[1:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=115)** To demonstrate that, I'll create a new folder inside pages named company info.
>
> **[2:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=123)** I'll then move the privacy page, and its page model class into that folder.
>
> **[2:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=136)** After the app reloads, You see I get an error when requesting the slash privacy URL.
>
> **[2:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=142)** However, all I have to do is update it to include the company info folder.
>
> **[2:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=151)** So by default, the routing convention is to look for pages based on the structure of the file system inside the pages folder.
>
> **[2:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=160)** For much larger sites, you may find it helpful to manage the pages in your app with a feature known as areas, they give you a little more flexibility if your app has multiple large distinct sections, and you maybe want to apply it a different look to them or just generally think about them more independently, you organize your pages into areas by first creating a folder named areas at the root of your project.
>
> **[3:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=191)** Inside this folder, you'll create folders named for each specific area.
>
> **[3:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=196)** These area sub folders will become the first URL segment for requests made to area pages.
>
> **[3:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=203)** The pages themselves will live in an additional sub folder named pages.
>
> **[3:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=208)** Let's imagine I want an area for engineering pages.
>
> **[3:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=212)** I'll first create a folder named engineering, and at the same time create a pages folder inside it.
>
> **[3:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=223)** Let's also imagine I want a [[Human Resources (HR)|human resources]] area, so I'll also create an HR folder with a pages folder inside it.
>
> **[3:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=235)** When [asp.net](https://asp.net) core is looking for the pages being requested, this area's folder is one of the default places it will look.
>
> **[4:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=244)** The first segment of the URL will be the name of the folder inside the areas folder, and the second segment will be the name of the page itself.
>
> **[4:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=253)** The areas folder itself and the pages folder, inside each area will not be part of the URL.
>
> **[4:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=260)** Let's create a couple of new pages, and try this out.
>
> **[4:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=263)** I could create new pages by adding new empty files, and just start typing the contents I need in them.
>
> **[4:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=270)** I could also copy and paste an existing file, and make the necessary adjustments.
>
> **[4:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=275)** However, the option I want to demonstrate for you is adding new pages with the .NET [[CLI]].
>
> **[4:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=281)** I'll first add a new page to the engineering area.
>
> **[4:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=285)** The command I'll use is .NET new page.
>
> **[4:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=290)** I'll then use the dash dash name option, and name the page web dev.
>
> **[4:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=297)** I'll use the dash dash namespace option to put it in the razor-pages.engineering namespace.
>
> **[5:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=310)** I'll then use the dash dash output option to specify where the file should be created.
>
> **[5:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=316)** This one will go in areas engineering pages.
>
> **[5:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=327)** I will hit enter and we can see the new page was created.
>
> **[5:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=330)** I'll now use a similar command to create a new index page in the HR area.
>
> **[5:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=346)** Okay.
>
> **[5:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=346)** Let's now check out the new pages in VS code.
>
> **[5:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=350)** I'll expand the engineering pages folder, and you can see I now have a page, and a corresponding page model web dev.
>
> **[5:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=359)** I'll quickly add a line of content to the page.
>
> **[6:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=361)** I'll create an H1 tag with just a greeting from the [[Web Development]] team.
>
> **[6:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=371)** I'll quickly add something similar to the new HR index page.
>
> **[6:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=384)** Okay, let's now go back to the browser, and see what the URL looks like for these new pages.
>
> **[6:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=391)** To get to the web dev page, I'll update the URL to engineering/webdev.
>
> **[6:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=400)** We can see the greeting I added to that page.
>
> **[6:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=403)** I'll now update the URL to just HR with no additional segment after that.
>
> **[6:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=411)** We see the correct greeting there as well.
>
> **[6:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=413)** I didn't need the name of the file for that one because I named the page index, which is the default page loaded if I don't specify one.
>
> **[7:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=422)** There is one problem with each of these pages though, they don't appear to be using the standard layout page used by the pages in the root pages folder.
>
> **[7:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=433)** Remember from the previous chapter that the _ViewStart.cshtml file in the root pages folder contains a code block.
>
> **[7:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=444)** The code in this block runs before every view or page is processed.
>
> **[7:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=449)** All it does currently is specify which layout to use.
>
> **[7:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=453)** If you want similar functionality for the pages in the areas folder, you'll have to add a separate _viewstart.cshtml file to it.
>
> **[7:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=462)** I'm going to copy the file, I've already got into the areas folder by holding down my control key, and dragging it up there.
>
> **[7:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=476)** I'll go back to the browser, refresh the page, and you can now see the pages using the layout file, I'm going to show you some additional routing techniques, and how to bind the data being sent in the HTTP request coming up.
>
> **[8:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/routing-to-pages?u=76281980&t=489)** But in the next movie, I'll show you how to use tag helpers to create links to our new pages, and fix one I broke along the way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (5), [[Routing]] (5), [[Privacy]] (5), [[Human Resources (HR)|Human resources]] (1), [[CLI]] (1)
> **Env Vars:** url (12), http (5), net (2), cli (1)
> **URLs:** [asp.net](https://asp.net) (5)
> **Cross-References:** go back to (2), previous chapter (1), coming up (1), in the next (1)
> **CLI Commands:** find (3), make (1)
> **Analogies:** imagine (2)
> **Tools:** vs code (1)
> **UI Navigation:** go to (1)

#### [Creating links with tag helpers](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=0)** - [Instructor] Before I show you some additional [[Routing]] techniques, I want to create and fix some links from the previous movie using tag helpers.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=8)** Tag helpers are small bits of Razor markup that assist in creating [[HTML]] markup for your pages.
>
> **[0:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=15)** There are built in tag helpers to help you create image tags, [[Forms]], script tags, validation messages, and more.
>
> **[0:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=24)** They look a lot like standard HTML and usually take the form of additional attributes you add to standard HTML elements.
>
> **[0:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=32)** Because I need to add and update some links, I'm going to show you some examples using the anchor tag helper.
>
> **[0:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=39)** In the last movie, I moved the [[Privacy]] page into a new folder inside the root Pages folder.
>
> **[0:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=46)** As a result, the links on the page no longer work.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=49)** Clicking on it just leaves me here on the homepage.
>
> **[0:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=52)** I want to fix that and I also want to add new links to the navigation at the top for the Engineering and [[Human Resources (HR)|Human Resources]] pages I created.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=61)** Finally, I want to add a link to the official [asp.net](https://asp.net) core site when I reference the other project types here on the homepage.
>
> **[1:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=69)** I've already got the layout page open here in VS Code.
>
> **[1:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=73)** That's where all of the links are for the navigation bar at the top.
>
> **[1:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=77)** I'll scroll down a little and you can see the link for the privacy page here on line 26.
>
> **[1:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=85)** If you just glance at it, it looks a lot like a normal anchor tag.
>
> **[1:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=89)** It uses the standard ahtml element.
>
> **[1:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=93)** It's got a CSS class applied to it, and before the closing tag, you can see the text for the link, just the [[Microsoft Word|word]] privacy.
>
> **[1:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=101)** The tag helper parts are the two additional attributes on the element.
>
> **[1:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=105)** They both start with asp-.
>
> **[1:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=108)** The first is asp-area and then asp-page.
>
> **[1:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=113)** By convention, the names of tag helper attributes begin with asp-.
>
> **[2:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=120)** By adding values to these attributes, [asp.net](https://asp.net) core can render exactly the link we need on the server before it's added to the page and sent back to the client.
>
> **[2:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=131)** Remember that I moved the Privacy page into a new folder named Company Info.
>
> **[2:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=136)** Therefore, I'm going to update the asp-page attribute to include that folder.
>
> **[2:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=145)** I defined some new areas in the last movie, but the Privacy page is not in them, so I really don't need the asp-area attribute.
>
> **[2:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=154)** I'll delete it.
>
> **[2:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=156)** I now want to add links to the new Engineering and Human Resources pages.
>
> **[2:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=161)** I'll first copy and paste the li element for the Privacy link, and use that as a starting point.
>
> **[2:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=170)** The Engineering page is in an area, so I'll add an asp-area attribute to this tag.
>
> **[2:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=178)** The area name is Engineering.
>
> **[3:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=186)** The page in that area I want to link to is named WebDev, so I'll use that for the asp-page attribute.
>
> **[3:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=195)** Finally, I want the text of the link to just be Engineering.
>
> **[3:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=201)** I'll copy and paste again to add the Human Resources link.
>
> **[3:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=210)** The area for that page is named HR, and the page is just the Index page.
>
> **[3:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=219)** I'll set the link text to Human Resources.
>
> **[3:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=226)** The tag helper understands how the areas are organized and will use these attributes to create the link we need to the page.
>
> **[3:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=234)** I've got one more link here in the Layout page to fix.
>
> **[4:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=240)** There's a second link to the privacy page in the footer.
>
> **[4:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=243)** I'll fix it the same way I did the one above.
>
> **[4:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=246)** I'll delete the area attribute and include the new folder on the page attribute.
>
> **[4:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=257)** Okay, I now want to add a new link to the main Index page, so I'll open index.cshtml.
>
> **[4:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=266)** I think I'll update the word explore here online 23 to link to the official [asp.net](https://asp.net) core site.
>
> **[4:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=273)** I'm going to use the anchor tag helper, so I'll first surround it with a normal anchor tag.
>
> **[4:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=284)** There are quite a few helper attributes you can use when creating new links, so I'll use a few here that I didn't use on the previous links I worked on.
>
> **[4:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=293)** The asp-protocol attribute specifies which protocol to use for the link.
>
> **[4:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=299)** I'll set it to https.
>
> **[5:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=305)** The host I want to link to is [asp.net](https://asp.net).
>
> **[5:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=313)** I'll also set the page to Index.
>
> **[5:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=323)** Okay, that should build the link I want.
>
> **[5:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=325)** Let's jump back to the browser and see how I did.
>
> **[5:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=330)** The Privacy link is working again, the Engineering link works, and the Human Resources link works.
>
> **[5:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=341)** Back on the homepage, we can see the word Explore is now a link.
>
> **[5:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=346)** I'll right click on it and choose inspect to get a better look at the anchor tag used for it.
>
> **[5:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=353)** The href attribute that was generated looks correct.
>
> **[5:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=356)** I'll close the dev tools and then click it.
>
> **[6:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=362)** It does in fact take me to the main [asp.net](https://asp.net) core site.
>
> **[6:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=366)** The URL in the address bar is different because [[Microsoft]] is doing some redirection from the [asp.net](https://asp.net) host, but it got me where I wanted to be.
>
> **[6:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=375)** The anchor tag helper is just one of many tag helpers that can help you create more maintainable markup in your pages.
>
> **[6:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=383)** I hope you'll take the time to try it out and explore some of the other tag helpers available.
>
> **[6:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-links-with-tag-helpers?u=76281980&t=388)** Now that I've got the links in the app cleaned up, let's turn our attention back to routing and see how you can use route templates and data binding to receive and bind to parameters passed from the client.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (8), [[Human Resources (HR)|Human resources]] (5), [[ASP.NET Core]] (4), [[HTML]] (3), [[Microsoft Word|Word]] (3)
> **URLs:** [asp.net](https://asp.net) (6)
> **Env Vars:** html (3), css (1), url (1)
> **Cross-References:** in the last (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)

#### [Binding to data](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=0)** - [Instructor] Passing data to a server in an HTTP request is important in just about every web application.
>
> **[0:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=7)** Receiving that data simply, safely, and efficiently is key to the stability and performance of your app.
>
> **[0:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=14)** I'm going to show you how to use route parameters to receive that data and automatically bind it to properties on the server.
>
> **[0:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=21)** As the name suggests, route parameters are pieces of data included in the route or URL of the request.
>
> **[0:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=29)** We declare route parameters with a route template.
>
> **[0:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=32)** Route templates are declared with the page directive in a cshtml file.
>
> **[0:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=38)** I'm going to open the index.cshtml file in the HR area I created earlier and add a route template to it.
>
> **[0:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=47)** To declare a route template, you add a space after the page directive and put the template inside a pair of double quotes.
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=55)** Here is where I can declare additional URL segments that will be treated as route parameters.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=61)** Each one must be surrounded by a pair of curly braces and separated from the next one by some literal value.
>
> **[1:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=69)** I'll call the first route parameter for this page, "name" I'll then use a literal forward slash to separate it from the next parameter, which I'll call "id".
>
> **[1:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=80)** As this is currently written, both of those additional URL segments will be required and [ASP.NET](https://ASP.NET) Core will not match a route to this page without them.
>
> **[1:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=91)** Let's imagine I want them to be optional segments.
>
> **[1:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=94)** I can implement that by adding a question mark after the parameter names.
>
> **[1:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=101)** So the way this works is [ASP.NET](https://ASP.NET) Core will use its [[Routing]] [[Algorithms]] to determine what page matches the requested URL.
>
> **[1:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=110)** When this page matches the URL segments after the page name if present, will be interpreted as these name and ID parameters.
>
> **[1:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=119)** We now need to bind to those parameters so we can easily use them.
>
> **[2:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=124)** To do that, I'm going to open the page model class for this page.
>
> **[2:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=128)** There are a couple of different ways you can bind to those optional route parameters.
>
> **[2:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=133)** The first is by adding parameters to the method in this class that will process the request.
>
> **[2:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=138)** In the case of a get request, that will be the on get method here at the bottom of the class.
>
> **[2:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=144)** I'll add parameters for the name and id.
>
> **[2:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=152)** If I wanted to use the values received in those parameters outside this handler method, I'll need to assign the values to a property.
>
> **[2:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=160)** I'll quickly declare new properties for them.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=172)** Inside the handler method, I can now assign the parameter values to those properties.
>
> **[3:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=182)** Once the values are stored in the properties, I can reference them like any other property and present their values on the page.
>
> **[3:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=190)** I'll go back to the page file and use some razor syntax to add a new conditional message to the screen.
>
> **[3:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=214)** Because the route parameter is optional, I want to make sure it's not null before adding the new message to the screen.
>
> **[3:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=222)** If the name is not null, then I'll show the message with the name and ID values.
>
> **[3:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=227)** I'll now switch back to my browser and try it out.
>
> **[3:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=231)** I'll click the [[Human Resources (HR)|human resources]] link and we only see the generic message.
>
> **[3:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=236)** And if you look at the address bar, you don't see the additional URL segments for name and id.
>
> **[4:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=242)** That's correct, because the link in the layout page doesn't include those segments.
>
> **[4:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=248)** I'll now manually update the URL to include a name and id.
>
> **[4:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=255)** I'll hit Enter and the GET request is sent to the server, and you can see the values of the route parameters were successfully bound to the page model properties and the new message is now shown on the screen.
>
> **[4:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=269)** The technique I just showed you works great, but let me show you a slightly different syntax you might prefer.
>
> **[4:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=275)** I'll first remove the parameters and code I added to the on get request handler.
>
> **[4:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=285)** Rather than receiving values and assigning them to properties, I can add the BindProperty attribute to the properties themselves.
>
> **[4:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=297)** This will effectively behave just like the previous code.
>
> **[5:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=300)** However, properties are not bound by default with GET requests like I'm using here.
>
> **[5:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=306)** I need to set the SupportsGet property to true on the attribute.
>
> **[5:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=316)** I'll also add it to the ID property.
>
> **[5:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=321)** Let's now try out this version in the browser.
>
> **[5:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=325)** The main link without the route parameters still works fine.
>
> **[5:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=332)** It also still binds fine when I include the route parameters.
>
> **[5:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=337)** Model binding is a big topic and route parameters are just one possible source for model data.
>
> **[5:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=343)** You can also bind to form fields, the request body, query string parameters and uploaded files.
>
> **[5:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=351)** Covering all the options could easily be the topic for an entire course.
>
> **[5:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=355)** However, know that the techniques for those other options are very similar to what I've shown you here, so don't be afraid to experiment with other options.
>
> **[6:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/binding-to-data?u=76281980&t=365)** Up next, I'll present a challenge to give you some practice building a small razor pages application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2), [[Routing]] (1), [[Algorithms]] (1), [[Human Resources (HR)|Human resources]] (1)
> **Env Vars:** url (7), asp (2), net (2), http (1)
> **Exercise Files:** template (4)
> **Analogies:** imagine (1), just like (1), similar to (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **API Endpoints:** get  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)

#### [Challenge: Create a Razor Pages application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=0)** - [Instructor] I now want to give you some practice creating a new Razor Pages app and trying out some of the techniques I've shown you in this chapter.
>
> **[0:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=13)** I'm purposely not going to be too specific about the requirements here.
>
> **[0:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=17)** I'll give you some general task and leave the details up to you.
>
> **[0:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=21)** In the next movie, I'll show you how I went about solving the challenge.
>
> **[0:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=25)** Start by using the .NET [[CLI]] to create a new project with the Razor Pages application template.
>
> **[0:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=32)** The functionality and features aren't that important for the purposes of this challenge, but if you have an app you already know you want to build or one you've built before, feel free to use it here.
>
> **[0:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=42)** Name the project whatever you like.
>
> **[0:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=45)** Once you've successfully created the project, add a new page to the Pages folder.
>
> **[0:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=50)** Then add a new property to the new page's PageModel class.
>
> **[0:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=54)** It's okay to assign it hard-coded values for now.
>
> **[0:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=58)** Use Razor syntax to present the property value on your new page.
>
> **[1:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=63)** Next, add a named section to the page containing a basic welcome message you can present from the site's layout page.
>
> **[1:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=71)** Lastly, open the layout page and add a navigation link to the new page and a call to render section async to show the welcome message you declared above.
>
> **[1:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=83)** Run the app and make sure everything works as expected.
>
> **[1:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-razor-pages-application?u=76281980&t=86)** In the next movie, I'll show you my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** net (1), cli (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a Razor Pages application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=0)** (Electronic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=5)** - [Speaker] The first step to solving this challenge is to create a new razor pages project with the dot net [[CLI]].
>
> **[0:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=12)** I'll do that here in my terminal with the [command.net](https://command.net) new web app.
>
> **[0:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=17)** I'll add the dash O option to specify an output folder I'll name "razor pages challenge."
>
> **[0:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=24)** I'll then change into the new directory and open the project with VS code.
>
> **[0:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=33)** As you know, the project template creates a few default pages, but I'm going to create a new one using the dotnet CLI.
>
> **[0:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=40)** I'll do that in the terminal built into VS code.
>
> **[0:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=43)** The command I'll use is dotnet new page.
>
> **[0:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=47)** I'll create a page to display the names of programming books.
>
> **[0:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=51)** I'll use the dash dash name option to name it "Books."
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=55)** I'll also specify a namespace using the dash dash namespace option.
>
> **[1:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=65)** I'll then add the dash dash output option to put it in the pages folder.
>
> **[1:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=72)** It looks like it was created successfully.
>
> **[1:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=75)** I'll now open up the page model class for the new page.
>
> **[1:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=79)** I'm going to add a public property to the class and then use razor syntax on the page to display the value of the property.
>
> **[1:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=87)** I'll make the property an array of strings named "Recommended Books."
>
> **[1:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=92)** (no speaking here)
>
> **[1:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=107)** I'll now go to the page file and use a four each loop to display the contents of the array.
>
> **[1:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=114)** (no speaking here)
>
> **[2:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=128)** Remember that to transition from [[HTML]] to C sharp, you use the at symbol.
>
> **[2:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=133)** I'm using it here to begin my for each loop as well as to reference the property on the page model class, and display the value of the book loop variable.
>
> **[2:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=142)** I'll now declare a section at the bottom of the page that will contain a welcome message that can be presented independently of the main page content I just created.
>
> **[2:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=152)** (no speaking here)
>
> **[2:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=161)** The section declaration begins with "at section" and the contents of the section appear inside a pair of curly braces.
>
> **[2:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=170)** Okay, I now want to create a navigation link for my new page in the project's layout file, I'll open up underscore layout dot CSHTML.
>
> **[3:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=180)** To create a link for the books page, I'll start by copying and pasting the LI element for the homepage link.
>
> **[3:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=195)** I now need to update the reference to the page.
>
> **[3:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=197)** It will be slash books instead of slash index.
>
> **[3:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=204)** I'll also change the text for the link to be books instead of home.
>
> **[3:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=210)** I now need to add a call to render section async to display the welcome message I added to the new page.
>
> **[3:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=217)** I'll scroll down some and add it just after the header tag.
>
> **[3:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=222)** (no speaking here) The name of the section is "Welcome" and I want to set the required parameter to false.
>
> **[3:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=239)** Okay, that was the last task on the challenge.
>
> **[4:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=242)** I'm now ready to run the app and see how I did.
>
> **[4:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=245)** I'll open the VS code terminal and start it with the [command.net](https://command.net) run.
>
> **[4:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=251)** Once it gets started, I can hold down the control key and click the link in the output to open the app in a browser.
>
> **[4:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=260)** It looks good so far.
>
> **[4:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=262)** The new books link appears next to the [[Privacy]] link on the navigation bar.
>
> **[4:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=267)** I'll click it and the page loads and correctly presents the section welcome message and the list of fake book titles stored on the page model class.
>
> **[4:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=276)** Razor pages apps are a great way to get started with [asp.net](https://asp.net) core development.
>
> **[4:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=281)** I hope you'll continue to experiment with the features I've shown you and try out more advanced features as you gain more experience.
>
> **[4:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=288)** In the next chapter, I'll introduce you to model view controller applications.
>
> **[4:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=293)** They have a lot in common with razor pages, but structure things a little differently.
>
> **[4:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-razor-pages-application?u=76281980&t=298)** Stay tuned to learn more and decide which server rendered project type you prefer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2), [[HTML]] (1), [[Privacy]] (1), [[ASP.NET Core]] (1)
> **Tools:** terminal (3), vs code (3)
> **UI Navigation:** open the (3), go to (1), scroll down (1)
> **Env Vars:** cli (2), html (1), cshtml (1)
> **CLI Commands:** dotnet (2), make (1)
> **URLs:** [command.net](https://command.net) (2), [asp.net](https://asp.net) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)


### 3. Creating MVC Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Model-View-Controller applications](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=0)** - [Instructor] Model view controller, or MVC, apps are server rendered web applications very similar to Razor Pages.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=8)** In fact, many of the things I showed you in the last chapter on Razor Pages are directly applicable to MVC apps as well.
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=16)** They use Razor syntax for their views.
>
> **[0:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=18)** You can use tag helpers with both and route templates and data binding are very similar between the two.
>
> **[0:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=25)** The primary difference is in how they're structured.
>
> **[0:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=28)** Razor Pages apps are structured around the page itself with a page model available to gather and provide data to the page.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=36)** With MVC apps, you can think of the controller as performing that main role.
>
> **[0:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=42)** Controllers receive the HTTP requests from the browser and process them with methods on the controller class known as action methods.
>
> **[0:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=50)** They're called controllers because they control how the request is processed and how the model and view are used to help fulfill the request.
>
> **[0:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=59)** Models in an MVC app aren't all that different from models you might create for any other app.
>
> **[1:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=64)** They're usually classes that represent the domain entities in your application.
>
> **[1:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=69)** They're also where you want to store your business logic.
>
> **[1:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=72)** The controller does a lot of processing, but that should really be limited to handling [[Routing]] and the coordination between the models and views.
>
> **[1:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=80)** The actual business logic for your application should be contained inside the model classes.
>
> **[1:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=86)** It's important to note that models should not have references to controllers or views.
>
> **[1:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=92)** Controllers and views will reference them, but they should not take dependencies in the other direction.
>
> **[1:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=98)** This makes it much easier to create unit tests for them.
>
> **[1:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=102)** Testability is one of the main reasons to use an MVC architecture.
>
> **[1:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=107)** The separation of concerns means you can more easily isolate and write tests for the different components.
>
> **[1:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=114)** I want to make sure to point out that the M in MVC stands for model, but you may also hear people refer to them as ViewModels, or you may even hear about apps containing models and ViewModels.
>
> **[2:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=127)** When developers talk about ViewModels, they're usually referring to models that have been specifically designed to work with a particular view as opposed to a pure domain model.
>
> **[2:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=137)** Whose goal is to best represent an actual business entity regardless of how it might be represented in any one particular application view.
>
> **[2:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=146)** How granular you choose to be when creating models or ViewModels will depend both on the size of your app and your personal preferences.
>
> **[2:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=155)** The larger the app or the more you plan to share code with other applications, the more benefit I think you'll find creating both models and ViewModels.
>
> **[2:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=165)** The views in an MVC app are where you'll place all of the user interface elements, just as you would in a Razor Page.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=172)** However, the views in an MVC app should contain as little logic as possible, and any logic they do should be directly related to manipulation of the view itself.
>
> **[3:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=183)** It's expected that the page and PageModel class in a Razor Pages app will contain a lot of the logic required to correctly present the requested data.
>
> **[3:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=193)** However, in an MVC application, that logic should reside in the controller and model classes.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=200)** The controller processing a request will specify which view will be returned to the browser and what model data should be passed to that view.
>
> **[3:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=209)** Creating the views themselves is nearly identical to what you've already seen with Razor Pages because they both use the Razor syntax.
>
> **[3:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=217)** Let's now create a new MVC app and look at the project template before diving a little deeper into each of the main components.
>
> **[3:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=225)** The short name used to create a new MVC app is, as you might have guessed, just MVC.
>
> **[3:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=232)** So the command I'll use to create a new one is dotnet new mvc.
>
> **[3:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=237)** I'll add the -o option to have it created in a subdirectory named mvc-app.
>
> **[4:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=246)** That successfully created the project.
>
> **[4:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=248)** I'll now switch to that new directory and then open it in VS code.
>
> **[4:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=256)** A lot of this should look pretty familiar.
>
> **[4:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=258)** The project has many files and folders in common with the empty project template and the Razor Pages template we've already seen in the course.
>
> **[4:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=266)** The Program.cs file uses the same techniques to configure services and middleware.
>
> **[4:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=271)** However, instead of adding a service for Razor Pages, you can see on line four that it calls a method named AddControllersWithViews that provides the functionality we need for an MVC app.
>
> **[4:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=284)** The other thing I want to point out is the additional default folders that get created with this template.
>
> **[4:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=290)** Notice that there are folders named Models, Views, and Controllers.
>
> **[4:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=297)** There's at least one default file in each of those and in the upcoming movies, I'll talk about each in more detail.
>
> **[5:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-model-view-controller-applications?u=76281980&t=304)** We'll start in the next movie with controllers since they're the piece in control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Env Vars:** mvc (13), http (1)
> **Exercise Files:** template (4)
> **CLI Commands:** make (1), find (1), dotnet (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** known as (1), stands for (1)
> **Tools:** vs code (1)
> **UI Navigation:** switch to (1)

#### [Handling requests with controllers](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=0)** - [Instructor] C is the last letter in MVC, but I'm going to cover it first because it's really the primary piece of the architecture.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=8)** Controllers are responsible for receiving HTTP requests, instantiating models, taking the results from a model's processing, and passing it to a selected view to be rendered and returned to the client.
>
> **[0:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=21)** Let's look at each of those steps in turn.
>
> **[0:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=23)** I'll start in the Program.cs file.
>
> **[0:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=26)** The first job of controllers is to receive HTTP requests.
>
> **[0:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=30)** The [[Routing]] configuration for your app is what directs requests to specific controllers and specific methods on those controllers.
>
> **[0:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=39)** Near the end of this file, there's a call to MapControllerRoute that defines the route template that will be used to route requests to specific controllers and methods.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=49)** The methods on the controllers that respond to requests are known as Action methods.
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=55)** The default template is assigned to the pattern parameter and the format of it should look familiar to you.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=61)** It looks a lot like the route template I showed you for Razor pages in the previous chapter.
>
> **[1:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=66)** The template is declared inside a pair of double quotes, and each URL segment appears in a pair of curly braces.
>
> **[1:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=74)** The first segment of this route template will correspond to the controller name.
>
> **[1:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=78)** Notice that inside the curly braces, it has controller=Home.
>
> **[1:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=83)** This is assigning a default controller value in case one is not provided in the URL, so if no controller is specified, the app will use the Home controller.
>
> **[1:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=93)** The second URL segment specifies the action method on the controller that will handle the request.
>
> **[1:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=100)** It also has a default value.
>
> **[1:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=103)** If no method is specified, it will call the Index method on the controller.
>
> **[1:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=108)** The last segment in this default template is an optional ID value.
>
> **[1:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=112)** Remember that adding a question mark after a route parameter name in a template makes that parameter optional.
>
> **[1:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=119)** You can customize this template to fit the needs of your application and how you want to format the URLs in your app, but this is a good starting point.
>
> **[2:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=128)** Let's now expand the Controllers folder in the project and open the default Home Controller that was included with the project template.
>
> **[2:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=136)** The first thing I want to point out is the name of the class itself.
>
> **[2:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=140)** By convention, Controller classes include the [[Microsoft Word|word]] Controller as a suffix on the class name.
>
> **[2:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=147)** Also, notice that this class inherits from a built-in class named Controller.
>
> **[2:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=152)** Remember that it's the action methods on the class that will handle the HTTP requests.
>
> **[2:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=158)** This class currently has three action methods.
>
> **[2:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=161)** You can tell they're action methods because they all return an implementation of the IActionResult interface.
>
> **[2:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=168)** Using the routing template defined in Program.cs, HTTP requests sent to /Home/Index will be handled by this Index method.
>
> **[2:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=178)** Requests to /Home/[[Privacy]] will be handled by the Privacy method.
>
> **[3:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=184)** Additional route parameters could be received by these methods as part of the data binding process I talked about in the previous chapter.
>
> **[3:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=192)** It's inside these methods that you can instantiate the models you need to retrieve data and implement business logic.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=200)** You can then specify the view to return to the client.
>
> **[3:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=203)** The Index and Privacy methods here just call the View method inherited from the Controller class and return the value it returns, which is a valid implementation of the IActionResult interface named ViewResult.
>
> **[3:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=219)** [ASP.net](https://ASP.net) Core will search for a view with the same name as the action method, so if a request is routed to the Index action method, then it will search for a view named Index.cshtml.
>
> **[3:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=232)** It will look for that file first in a sub-folder of the Views folder named after the controller.
>
> **[3:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=239)** If it doesn't find it there, it will look in the shared folder inside the Views folder.
>
> **[4:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=245)** I'll expand the Views/Home folder in the project explorer and you can see there are views named Index.cshtml and Privacy.cshtml that will be the views for these action methods.
>
> **[4:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=259)** There's not a view named Error in this folder to handle the Error action method at the end of the class.
>
> **[4:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=266)** However, you can see that it's here inside the Views/Shared folder.
>
> **[4:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=270)** If you wanted an action method to return a view with a name that did not match the action method name, you could call an overload of the view method that accepts a view name as a string parameter.
>
> **[4:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=283)** For instance, I could have this privacy method return the Index view if I wanted.
>
> **[4:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=289)** Additionally, there are other overloads that allow you to pass model objects that contain data to be rendered in the view.
>
> **[4:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=297)** You could see an example of that on line 29 where a new instance of the Error view model class is being passed to the View method.
>
> **[5:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=305)** Let's now see how to add a new controller to a project.
>
> **[5:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=311)** One option for creating new controllers is just to manually add a new file and start writing your controller code.
>
> **[5:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=318)** Another option is to use a controller template available with the .NET [[CLI]].
>
> **[5:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=323)** That's the option I'm going to show you.
>
> **[5:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=325)** The command is dotnet new mvccontroller.
>
> **[5:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=331)** I'll use the -n option to name the controller EngineeringController.
>
> **[5:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=339)** I'll then use the -o option to create it in the Controllers folder in the project.
>
> **[5:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=347)** The last option I'll use is the --namespace option to put it in the same namespace as the other controllers in the project.
>
> **[5:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=357)** You can see it was created successfully.
>
> **[6:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=360)** I'll open the new file from the Controllers folder.
>
> **[6:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=363)** By default, the controller gets created with a single action method named Index.
>
> **[6:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=369)** Using the route template declared in Progrma.cs, that will be the default action method called if someone were to address this controller in the first URL segment, but didn't provide an action method in the second segment.
>
> **[6:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=383)** Let's imagine we want a page in our application to display the current projects underway in the engineering department.
>
> **[6:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=390)** I'll add a new action method to the class named CurrentProjects.
>
> **[6:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=400)** Notice that this method and the Index method above both return an action result instance.
>
> **[6:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=406)** The HomeControllers methods returned IActionResult.
>
> **[6:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=410)** ActionResult is an abstract class that implements the IActionResult interface, and I'm actually going to return a ViewResult instance, which is a subclass of ActionResult.
>
> **[7:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=422)** All of that is a long way of saying there's no real practical difference between the interface and an abstract class return types in this case.
>
> **[7:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=430)** Okay, we've got a new controller added to the project, but before I can finish this new action method, I need to gather the data I want rendered on the page.
>
> **[7:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=440)** That's the job of a model, the M in MVC.
>
> **[7:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/handling-requests-with-controllers?u=76281980&t=444)** I'll talk about them more and finish this method in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (5), [[Routing]] (2), [[Microsoft Word|Word]] (1), [[ASP.NET Core]] (1), [[CLI]] (1)
> **Env Vars:** http (4), url (4), mvc (2), asp (1), net (1)
> **Exercise Files:** template (12)
> **Definitions:** is a  (4), is an  (2), known as (1)
> **Cross-References:** previous chapter (2), in the next (1)
> **CLI Commands:** find (1), dotnet (1)
> **UI Navigation:** open the (2)
> **Analogies:** for instance (1), imagine (1)

#### [Working with MVC models](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=0)** - [Instructor] I think the models in an MVC-APP are the easiest of the three components to understand, because they're just plain old C-Sharp classes.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=8)** They really shouldn't have references to Controllers or Views.
>
> **[0:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=12)** This allows them to exist independently, which means they're easier to reuse in other applications, and they're also easier to test.
>
> **[0:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=21)** In order to complete the CurrentProjects action method I started in the last movie, I need to create a model class to store data and implement business logic.
>
> **[0:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=31)** I'll right-click on the Models folder in the Project EXPLORER and create a New File.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=36)** I'll name it EngineeringDepartment.cs.
>
> **[0:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=43)** I'll put it in the same namespace with other models in the project and then declare a very basic class.
>
> **[1:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=60)** I'll add a public property to the class named CurrentSoftwareProjects that will be an array of strings.
>
> **[1:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=73)** I'll now add a constructor and initialize the property inside it.
>
> **[1:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=83)** Here's where you might normally retrieve some data from a database or web service.
>
> **[1:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=91)** You could also add as many other properties and methods to implement business logic as you need.
>
> **[1:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=96)** I'm going to keep it very simple for demonstration purposes and just hard-code a few values in the CurrentSoftwareProjects array.
>
> **[1:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=115)** I will now hop back over to my EngineeringController class and create a new instance of the model in the action method.
>
> **[2:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=122)** I first need to add a using statement at the top to bring in the Models namespace.
>
> **[2:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=130)** I will then create a new instance in the CurrentProjects action method and assign it to a variable.
>
> **[2:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=142)** This is the only model object I need for this method.
>
> **[2:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=145)** If you have an action method that requires you to gather data using multiple Models, then you may find it beneficial to also create a single view model class that can store just the data from your various models that you'll need to present in your view.
>
> **[2:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=160)** View model classes are effectively models designed just to service a particular view, and can greatly simplify the code in your view.
>
> **[2:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=169)** Okay, I'm now ready to create a new view and pass my model to it.
>
> **[2:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/working-with-mvc-models?u=76281980&t=173)** I'll show you how to do that and a few other details about MVC Views in the next movie.

> [!info]- Semantic Content
>
> **Env Vars:** mvc (2), app (1), explorer (1)
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** find (1)
> **UI Navigation:** right-click (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Rendering MVC views](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=0)** - [Instructor] Views in MVC apps use the same razor syntax as views in razor pages apps.
>
> **[0:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=6)** However, because of the separation of concerns in an MVC app, the controller must specifically select the view to use for a given request rather than it being addressed directly the way pages are in razor pages apps.
>
> **[0:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=20)** Selecting and returning a view is the last thing I need to add to the current project's action method here on the EngineeringController.
>
> **[0:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=28)** The call to the view method on line 11 above isn't past any parameters.
>
> **[0:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=33)** Therefore, [ASP.NET](https://ASP.NET) Core will attempt to locate a view named Index.cshtml and the view will not be passed any model data.
>
> **[0:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=43)** For the current project's view, I will also let [ASP.NET](https://ASP.NET) Core look for a view with the same name as the action method, but I want it to be able to use the EngineeringDepartment instance as its view model.
>
> **[0:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=56)** I do that by using the method overload that takes a single model object as a parameter.
>
> **[1:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=65)** As I've already mentioned, there's also an overload that allows you to pass a different view name as a string parameter and one that takes a view name and a model object.
>
> **[1:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=76)** That's all the code I need to add to this action method, but I haven't yet created either of the views used by this controller.
>
> **[1:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=84)** There's a .NET [[CLI]] command to create views, but this time I'll show you the manual way to create them.
>
> **[1:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=90)** The first thing I'll do is create a new folder inside the views folder named Engineering.
>
> **[1:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=98)** Because the controller is named EngineeringController, it will first look for views in a folder named Engineering.
>
> **[1:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=106)** I'll now create a simple view for the index method.
>
> **[1:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=112)** You can include code blocks and other razor syntax in MVC views just like you can in razor pages. But for this index view, I'm just going to add a simple welcome message inside an h3 tag.
>
> **[2:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=133)** I'll make the view for the current projects action method a little more interesting.
>
> **[2:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=137)** I'll add another new file to the Engineering folder and name this one CurrentProjects.cshtml.
>
> **[2:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=148)** Here I want to render the contents of the current [[Software Projects]] array from the EngineeringDepartment model class.
>
> **[2:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=155)** In the previous chapter while working with razor pages, I showed you that you used the @Model directive inside the page to specify a model to be used with the page.
>
> **[2:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=166)** We don't need to do that here in this MVC view.
>
> **[2:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=169)** Because I've passed the model I want to use as a parameter to the view method inside the controller.
>
> **[2:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=176)** However, I still reference the model in the view using the same syntax I showed you before.
>
> **[3:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=182)** I'll first add a heading above the list of current projects.
>
> **[3:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=191)** I'll then use some razor syntax to write a loop that will iterate over the projects array in the model and print out the name of each project.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=200)** I'll first add an unordered list.
>
> **[3:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=205)** Inside that I'll add a for-each loop and print out a bulleted list of project names.
>
> **[3:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=226)** Notice that using @Model gives me a reference to the model object passed to the view method in the controller.
>
> **[3:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=234)** Before I test this out, I want to add links to the two new actions on the EngineeringController.
>
> **[4:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=240)** I want them to appear in the navigation bar for all routes, so I'll add them to the _Layout.cshtml file in the views shared folder.
>
> **[4:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=251)** I'll copy and paste the li element for the [[Privacy]] link and use it to create the two new links.
>
> **[4:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=269)** The first one will link to the index action on the EngineeringController.
>
> **[4:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=279)** These tag helpers will help generate a link to /Engineering/Index.
>
> **[4:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=285)** I'll change the link text to Engineering Department.
>
> **[4:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=292)** I'll paste the li element again and add a link for the CurrentProjects.
>
> **[5:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=301)** This time the controller will be Engineering and the action will be CurrentProjects.
>
> **[5:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=312)** I'll set the link text to CurrentProjects as well.
>
> **[5:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=319)** Okay, let's now run it and try it out.
>
> **[5:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=321)** I'll start it with the command dotnet run.
>
> **[5:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=326)** Once it started, I'll click the link in the output.
>
> **[5:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=331)** You can see everything looks good so far.
>
> **[5:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=334)** I'll click the Engineering Department link and it does take me to that page with the simple view I created.
>
> **[5:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=340)** Notice that the URL and the address bar just has /Engineering on the end.
>
> **[5:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=346)** The tag helpers I use left off /Index since it's the default and was unnecessary for this link.
>
> **[5:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=353)** I'll now click the Current Projects link.
>
> **[5:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=357)** You can see the view did correctly receive the Engineering Department model and the razor syntax printed out the names of the Current Software Projects.
>
> **[6:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=366)** Also, notice that since this did not get routed to the default action method for the controller, the URL in the address bar now includes the controller and the action method name.
>
> **[6:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=378)** Okay, now it's time for you to practice creating an MVC app.
>
> **[6:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/rendering-mvc-views?u=76281980&t=382)** In the next movie, I'll present a challenge for you to work on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2), [[Software Projects]] (2), [[CLI]] (1), [[Privacy]] (1)
> **Env Vars:** mvc (5), net (3), asp (2), url (2), cli (1)
> **CLI Commands:** make (1), dotnet (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Cross-References:** previous chapter (1), in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a MVC application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=0)** (bright, upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=5)** - [Instructor] It is your turn to practice creating your own MVC application.
>
> **[0:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=9)** I'm going to stick with an app to manage books, but you should feel free to create an app in whatever domain you prefer.
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=16)** Start by using the .NET [[CLI]] to create a new application using the MVC project template.
>
> **[0:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=23)** Add to your project a model class to retrieve and store information about books or whatever domain type you want to use in your app.
>
> **[0:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=30)** After adding a model, use the CLI to create a new controller to handle HTTP request related to the model data.
>
> **[0:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=39)** I'm going to create one named Books Controller.
>
> **[0:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=42)** Add two new action methods to the new controller, one to display all books and another to display just your favorite book.
>
> **[0:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=50)** Each action method should return a different view, so also create views with appropriate razor syntax to display the data gathered in the action methods.
>
> **[1:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=60)** Finally, update the default layout page to include links to the two new action methods, and then run your app with the .NET CLI.
>
> **[1:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-mvc-application?u=76281980&t=69)** In the next movie, I'll show you how I solved this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (3)
> **Env Vars:** cli (3), mvc (2), net (2), http (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright, upbeat music) (1)

#### [Solution: Create a MVC application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=0)** - [Instructor] Let me now show you how I'll solve the challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=8)** I'll first create a new project in my terminal using the dotnet [[CLI]].
>
> **[0:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=13)** Remember that the short name used to create a new MVC app is just MVC.
>
> **[0:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=18)** So the command I'll use is dotnet new mvc.
>
> **[0:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=23)** I'll add the -o option, which is the short form of the --output option to create the project in a new folder named books-mvc.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=36)** Once that's created, I'll change into the new directory and then open it in VS Code.
>
> **[0:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=44)** The first thing I'm going to add to the new project is a model class for my books.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=49)** The project template already created a models folder, so I'm just going to add a new file to it named Books.cs.
>
> **[0:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=58)** I want this class to be in the same namespace as other model classes in the project, so I'll add a file scoped namespace at the top of the file.
>
> **[1:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=71)** I'll then declare the new public class.
>
> **[1:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=78)** Inside the class, I'll declare two new public properties.
>
> **[1:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=82)** The first will store a list of all books in a string array I'll name Library.
>
> **[1:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=91)** The second will be a string property that just stores my current favorite book.
>
> **[1:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=102)** I'm going to add a constructor and initialize both properties inside it.
>
> **[1:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=111)** In a production application, you would likely retrieve data from a database or web service, but for the sake of simplicity, I'm just going to hard code values for the properties here.
>
> **[2:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=138)** With my model in place, I'm ready to add a new controller to the project.
>
> **[2:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=142)** I'll add it using the built-in terminal with the dotnet CLI.
>
> **[2:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=148)** The command is dotnet new mvccontroller.
>
> **[2:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=154)** The -n option lets me give it a name.
>
> **[2:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=157)** Mine will be BooksController.
>
> **[2:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=161)** I'll add -o to create it in the controller's folder.
>
> **[2:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=167)** Lastly, I'll add --namespace to put it in the books-mvc.Controllers namespace.
>
> **[2:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=179)** I'll open the new file from the Controllers folder in the project.
>
> **[3:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=184)** There's already a default action method named Index.
>
> **[3:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=187)** I'll use it as the endpoint that retrieves and displays the list of books from the model.
>
> **[3:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=193)** I need to create an instance of the model class, so I'll first bring in the namespace at the top of the file.
>
> **[3:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=203)** I can now create a new books instance inside the action method and assign it to a variable.
>
> **[3:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=214)** I now just need to pass the model to the view.
>
> **[3:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=217)** As this is written, the Index action method will try to find a view also named Index.
>
> **[3:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=223)** That would be fine, but just for a little variety, I'll show you the overload of the view method that lets you use a specific view by name.
>
> **[3:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=231)** I'll have it use a view named all books.
>
> **[3:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=238)** I still need to pass it the model.
>
> **[4:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=240)** That will be the second parameter.
>
> **[4:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=244)** Before I create the all books view, I'll go ahead and add a second action method named FavoriteBook.
>
> **[4:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=257)** The body of this method will look very similar to the index method.
>
> **[4:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=261)** I'll instantiate a new Books instance and pass it to the View method.
>
> **[4:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=266)** I won't pass a view name this time, which will cause the method to search for a view that is also named FavoriteBook.
>
> **[4:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=280)** Okay, I'm now ready to create the two views for these methods.
>
> **[4:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=284)** I'll create the all books view first.
>
> **[4:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=287)** They'll go in a new folder inside the views folder named books to match the name of the controller minus the controller suffix.
>
> **[4:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=296)** The first view will be named allbooks.cshtml.
>
> **[5:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=303)** I'll add an [[HTML]] header explaining that this will present a list of all books in the library.
>
> **[5:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=315)** I'll then use Razor syntax to add a four each loop to print out all of the books in the library property on the model.
>
> **[5:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=331)** That's all I'll add to this view.
>
> **[5:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=333)** I'll now add another one to the book's folder named favoriteBook.cshtml.
>
> **[5:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=341)** I'll make this view even simpler than the last one.
>
> **[5:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=344)** It will just have a header, and then I'll reference the model and print out the favorite book property.
>
> **[5:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=358)** Let's now add links to the new routes inside the main layout page.
>
> **[6:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=363)** Rather than create new links this time, I think I'll just update the home and [[Privacy]] links on the navigation bar to the new routes.
>
> **[6:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=371)** On the first one, I'll change the ASP controller attribute to Books and leave ASP action set to Index.
>
> **[6:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=380)** I'll change the link text to be All Books.
>
> **[6:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=385)** On the second link, I'll set the controller to Books, but the ASP action attribute will be Favorite Book.
>
> **[6:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=397)** I'll also set the link text for this one to Favorite Book.
>
> **[6:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=403)** Let's now try it out.
>
> **[6:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=405)** I'll start it with the command dotnet run.
>
> **[6:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=410)** I'll click the link in the output and switch over to my browser.
>
> **[6:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=416)** The updates to the navigation bar look correct.
>
> **[6:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=419)** I'll click the All Books link.
>
> **[7:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=422)** That looks good, and so does the Favorite Book link.
>
> **[7:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=427)** You can also see the controller and action methods in the URL match those I added to the app.
>
> **[7:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=433)** Okay, you've now seen some of the similarities and differences between Razor Pages apps and MVC apps.
>
> **[7:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=440)** They're both great server rendered options.
>
> **[7:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=443)** I personally think Razor Pages are the best for smaller apps that you want to get up and running quickly.
>
> **[7:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=449)** For larger apps, I like the more sophisticated architecture and testability of the model view controller design pattern.
>
> **[7:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=456)** Use whichever you think will best meet the requirements of your specific project.
>
> **[7:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=461)** Up next, we'll turn our attention to web APIs.
>
> **[7:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-mvc-application?u=76281980&t=465)** I'll show you a couple of different web API project types and a great built-in tool for manually testing your APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2), [[HTML]] (1), [[Privacy]] (1)
> **Env Vars:** mvc (3), asp (3), cli (1), html (1), url (1)
> **CLI Commands:** dotnet (5), find (1), make (1)
> **Tools:** terminal (2), vs code (1)
> **Code Identifiers:** favoritebook (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)


### 4. Creating Web APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding controller-based APIs and minimal APIs](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=0)** - [Instructor] In addition to standalone server-rendered web applications, [ASP.NET](https://ASP.NET) Core is also great at helping you develop web APIs to deliver data to other applications.
>
> **[0:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=12)** There are two different web API project types, controller-based APIs and minimal APIs.
>
> **[0:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=19)** There's a lot that's similar between them, but also a few differences.
>
> **[0:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=23)** Both are designed to work over HTTP and can be used to build RESTful APIs.
>
> **[0:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=30)** [[Representational State Transfer (REST)|REST]] stands for [[Representational State Transfer (REST)|Representational State Transfer]], and is an architectural pattern that uses HTTP verbs and status codes, along with other requests and response elements to manage application data.
>
> **[0:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=44)** Both types of Web API can serve data to just about any client application.
>
> **[0:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=50)** This can include desktop apps, mobile apps, web apps, or even other APIs.
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=55)** As long as a client can make an HTTP request, they can access data via an [ASP.NET](https://ASP.NET) Core web API.
>
> **[1:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=64)** The difference between the two project types are primarily about how the code is structured and the specific features that are available.
>
> **[1:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=72)** Controller-based APIs are structured, as the name suggests, around controller classes.
>
> **[1:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=78)** You'll find that these are structured and work a lot like Model-View-Controller apps without the View.
>
> **[1:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=84)** Instead of a View, they generally just return data in the [[JSON]] format.
>
> **[1:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=90)** Minimal web APIs don't use controllers.
>
> **[1:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=93)** Instead, they define endpoints with functions.
>
> **[1:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=96)** The handlers for your HTTP request are usually Lambda expressions.
>
> **[1:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=101)** These will look and feel familiar to you if you've ever done [[Node.js]] development with the Express framework.
>
> **[1:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=108)** The functionality available in the two web API project types is similar, but not identical.
>
> **[1:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=115)** A few of the additional features in controller-based APIs include model binding, model validation, the JSON Patch package, and OData support.
>
> **[2:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-controller-based-apis-and-minimal-apis?u=76281980&t=126)** In the next couple of movies, I'll show you how to create each type of web API and let you see how they're structured so you can decide which is best for your next project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2), [[JSON]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Representational State Transfer (REST)|Representational state transfer]] (1), [[Node.js]] (1)
> **Env Vars:** api (5), http (4), asp (2), net (2), json (2)
> **CLI Commands:** make (1), find (1), node (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Definitions:** stands for (1), is an  (1)
> **File Paths:** node.js (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Creating controller-based Web APIs](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=0)** - [Instructor] Let's now focus our attention on controller-based web APIs.
>
> **[0:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=5)** Before I create a new project, let's use the .NET [[CLI]] to review some of the options for creating new web APIs.
>
> **[0:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=12)** I'll bring up a list of the available [asp.net](https://asp.net) core project templates with the dotnet new list [asp.net](https://asp.net).
>
> **[0:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=23)** The third template in the list is the one we're interested in.
>
> **[0:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=27)** The short name for it is just webapi.
>
> **[0:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=30)** However, that doesn't distinguish controller-based APIs from minimal APIs, so let's look at the options we can include when creating a new project.
>
> **[0:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=39)** I'll do that with the command dotnet new webapi --help.
>
> **[0:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=48)** There are lots of options available in this list, but the one I want to focus on now is the last one at the end.
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=55)** The controllers or use controllers option is a Boolean.
>
> **[0:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=59)** If it's true, then a controller based API will be created.
>
> **[1:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=64)** The default value for this option is false, so to make sure I now create a new controller-based API, I'll use the command dotnet new webapi --use-controllers.
>
> **[1:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=79)** I'll add the -o option to create the project in a new folder named controller-api.
>
> **[1:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=89)** I'll now change to the new directory and open the project with VS Code.
>
> **[1:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=98)** One thing you might notice about the structure of this project is that it looks a little bit like an MVC project.
>
> **[1:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=105)** It's got a Controllers folder.
>
> **[1:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=108)** Inside it is a default controller named WeatherForecastController.
>
> **[1:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=113)** There's not a Views folder for the obvious reason that APIs don't typically return views.
>
> **[1:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=119)** There's also no Models folder, although there is a default model in a file named WeatherForecast in the root of the project.
>
> **[2:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=128)** I'm not sure why the template creates this file at the root of the project, but you can always add your own Models folder if you like.
>
> **[2:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=137)** Let's now take a quick look inside program.cs.
>
> **[2:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=140)** The MVC apps we created in the previous chapter included a call in program.cs to a service method named AddControllersWithViews.
>
> **[2:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=151)** Notice here on line five that this controller-based web API project instead calls a method named AddControllers.
>
> **[2:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=159)** [[Routing]] is also configured a little differently.
>
> **[2:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=162)** The MVC app configured routing by calling a method named MapControllerRoute and passed in a pattern used to route incoming URLs to a specific controller and action methods.
>
> **[2:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=175)** This API project just calls MapControllers on line 23.
>
> **[3:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=180)** No route template is provided because most web APIs use what is known as attribute routing.
>
> **[3:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=186)** There are examples of this in the default WeatherForecastController.
>
> **[3:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=193)** Notice that lines five and six apply attributes to the WeatherForecastController class.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=200)** The addition of the API controller attribute gives the class additional features that you wouldn't have by default on an MVC controller.
>
> **[3:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=208)** This includes features related to model binding, automatic HTTP 400 responses for failed model validation, and more.
>
> **[3:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=217)** It also requires that attribute routing be used, which is the second attribute you see here.
>
> **[3:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=223)** The route attribute is passed a template, much like those we saw with MVC apps in the previous chapter.
>
> **[3:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=230)** Requests with the name of this controller, WeatherForecast, in the first URL segment will be directed to this class.
>
> **[3:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=238)** You could also include hard-coded segments as well if you wanted.
>
> **[4:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=242)** For instance, I could add API to the front of this route template if that's how I wanted the URLs to be formatted.
>
> **[4:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=250)** The controller class will now only respond to requests to /api/WeatherForecast.
>
> **[4:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=257)** Another difference between web API controllers and MVC controllers is that web API controllers inherit from controller base rather than controller.
>
> **[4:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=267)** Controller also inherits from controller base, but adds support for views, which is why it isn't used as the base class for web API controllers.
>
> **[4:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=276)** This sample WeatherForecastController is designed to return a random five-day weather forecast.
>
> **[4:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=283)** The private summaries variable on line nine declares an array of different weather conditions, and the only action method on this class is further down on line 22.
>
> **[4:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=295)** Notice that it too has an attribute applied to it.
>
> **[4:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=298)** The HTTP get attribute designates this as a method that will only respond to requests with the HTTP get verb.
>
> **[5:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=307)** A name property is set, but that's really just there for link generation.
>
> **[5:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=312)** It doesn't affect the list of URLs this method will handle.
>
> **[5:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=316)** As it is, this method doesn't add any additional URL segments to the route beyond that set for the controller itself.
>
> **[5:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=324)** However, I could configure the method to include URL segments to be appended to the controller template or even override it all together.
>
> **[5:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=333)** I could do that with additional route attributes added to the method, or I can include them with the HTTP get attribute I've already got.
>
> **[5:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=342)** Since this method returns a random five-day forecast, I'll pass 5day as the first parameter to the attribute.
>
> **[5:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=352)** That becomes a URL segment appended to the one defined for the class.
>
> **[5:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=357)** Therefore, the URL the method will handle is now /WeatherForecast/5day.
>
> **[6:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=364)** I'll try that out in just a second, but I first want to show you how to add a new controller to the project.
>
> **[6:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=370)** As usual, you could just add a new file and start typing your code.
>
> **[6:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=374)** However, there's also an API controller template you can use.
>
> **[6:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=378)** I'll add it with the command dotnet new apicontroller.
>
> **[6:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=383)** Apicontroller is the short name for the template.
>
> **[6:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=388)** I'll use the --name option, and name it ClimateController.
>
> **[6:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=395)** I'll use --output to put it in the Controllers folder in the project.
>
> **[6:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=402)** I'll add --namespace and specify the namespace used for the existing controller.
>
> **[6:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=412)** Finally, I'll add the --actions option, which will stub out the controller with several standard read/write action methods that I might want to use.
>
> **[7:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=424)** I'll press enter and that gets created.
>
> **[7:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=427)** I'll open the new file from the Controllers folder.
>
> **[7:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=431)** As you can see, it looks a lot like the default Weather Forecast Controller.
>
> **[7:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=435)** There's a route attribute with a route template in place.
>
> **[7:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=439)** It's got the API controller attribute applied, and it inherits from ControllerBase.
>
> **[7:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=444)** It also already includes several action methods with different HTTP verb attributes already applied.
>
> **[7:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=451)** Let's now try out the two controllers.
>
> **[7:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=457)** Once the app gets started, I'll control click the link in the output, as you've seen me do several times already.
>
> **[7:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=464)** That opens a browser to what would be the homepage if this were a Razor pages app or an MVC app.
>
> **[7:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=471)** However, I'm getting a 404 error.
>
> **[7:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=474)** That's because there's no controller configured to respond to requests to this URL.
>
> **[7:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=479)** Because this is an API, I'll have to manually update the URL in the address bar to try out the controllers.
>
> **[8:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=487)** Remember, I changed the route template for the Weather Forecast Controller to be /api/WeatherForecast.
>
> **[8:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=496)** I also updated the action method to append the segment 5day onto that.
>
> **[8:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=503)** Now you can see the output returned from the server.
>
> **[8:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=506)** The random five-day forecast was automatically serialized to the [[JSON]] data format.
>
> **[8:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=512)** This isn't terribly useful to view in a browser, but it's a great way to serve data to other apps that can easily consume JSON data.
>
> **[8:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=520)** I can try out the other controller at /api/Climate.
>
> **[8:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=527)** That also works, but just returns an array containing value1 and value2 for now.
>
> **[8:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=533)** Now that you have a sense for how controller-based APIs work and how they're similar to MVC apps, in the next movie, I'll show you a minimal API.
>
> **[9:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-controller-based-web-apis?u=76281980&t=543)** They're a great way to get an API up and running quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (4), [[JSON]] (2), [[CLI]] (1), [[ASP.NET Core]] (1), [[ASP.NET]] (1)
> **Env Vars:** api (14), mvc (8), url (7), http (5), json (2)
> **Exercise Files:** template (10)
> **CLI Commands:** dotnet (4), make (1)
> **Definitions:** is a  (3), known as (1), is an  (1)
> **API Endpoints:** /api/weatherforecast (2), /api/climate (1)
> **Cross-References:** previous chapter (2), in the next (1)
> **URLs:** [asp.net](https://asp.net) (2)

#### [Creating minimal Web APIs](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=0)** - [Instructor] Minimal web APIs let you implement most of the functionality available in controller-based APIs, but with minimal files and dependencies.
>
> **[0:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=9)** Let's go ahead and create one with the .NET [[CLI]].
>
> **[0:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=13)** I'll use the same command I did to create a controller-based API, .NET new webAPI.
>
> **[0:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=21)** This will create a minimal API by default, so the only other option I'm going to add is the -O option to specify an output directory.
>
> **[0:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=32)** I'll now open the new project.
>
> **[0:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=38)** If you look at the files and folders here in the VS code project explorer, you'll start to realize why these are called minimal APIs.
>
> **[0:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=47)** There's no models folder, no controllers folder, and of course, no views folder.
>
> **[0:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=52)** The only actual code file in the project is the program .CS file.
>
> **[0:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=58)** You're not limited to a single code file in a minimal API.
>
> **[1:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=62)** You can add more if you need to, and just add a using statement at the top of this file to pull in any new namespaces you want to use.
>
> **[1:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=70)** Inside here, you'll find the same default weather forecast functionality included with the controller-based API template, but it's obviously implemented differently.
>
> **[1:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=80)** I like that they did that with the template, because you can easily compare the two and quickly understand some of the differences between the two project types.
>
> **[1:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=89)** After the standard web application builder object is created on line one, there's a call to add endpoints API Explorer.
>
> **[1:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=98)** That call is specific to minimal APIs, which configure endpoints directly.
>
> **[1:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=103)** After that are a few calls related to the Swagger testing tool.
>
> **[1:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=108)** I'll talk about Swagger and show you how to use it in the next movie.
>
> **[1:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=112)** A little further down beginning on line 19, you start to see the code specific to delivering weather forecast data.
>
> **[2:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=120)** The summaries variable stores the array of different weather conditions, and below that, on line 24 is the declaration of the first endpoint in the API.
>
> **[2:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=131)** Endpoints are added by calling methods on the web application object named map, followed by an HTTP verb.
>
> **[2:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=140)** This one is MapGet, but you could also call MapPost, MapPut, or MapDelete if you wanted to handle requests with those verbs.
>
> **[2:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=149)** The first parameter passed to the method is the URL it will handle.
>
> **[2:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=153)** This one will currently handle GetRequest for /WeatherForecast.
>
> **[2:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=158)** Just to make it the same as the URL I used in the last movie, I'll change it to /API /WeatherForecast /5day since it will return a random five day forecast.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=172)** You can also capture route parameters in this URL, much like we did earlier with route templates.
>
> **[2:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=178)** You can that by surrounding a URL segment with curly braces.
>
> **[3:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=184)** That parameter would then be passed along as a function parameter to the Lambda expression that is the second parameter to MapGet.
>
> **[3:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=195)** I don't actually want to add a parameter here, so I'll remove it for now.
>
> **[3:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=203)** With or without parameters, this Lambda expression is the route handler.
>
> **[3:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=208)** It contains the code that we'll execute in response to the HTDP request.
>
> **[3:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=213)** It's pretty common to use Lambda expressions for route handlers, but you could also use a local function, instance method, or static method if you prefer.
>
> **[3:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=223)** The body of this particular Lambda expression contains nearly the same code you saw in the similar controller-based example.
>
> **[3:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=231)** One small difference is that this version returns five instances of the weather forecast record declared at the end of this file.
>
> **[4:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=243)** The previous version used a weather forecast class.
>
> **[4:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=247)** This example could have used a class as well.
>
> **[4:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=249)** I think they just used a record in the template in keeping with the overall minimal design idea.
>
> **[4:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=255)** One more thing I want to point out about the MapGet method is that it returns a route handler builder object.
>
> **[4:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=264)** You can chain on calls to extension methods, as you see on lines 36 and 37, to include additional functionality on the endpoint.
>
> **[4:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=274)** The extension methods return a compatible interface, so you can easily add as many as you need.
>
> **[4:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=280)** Let's quickly add one additional endpoint before I run the app and test it out.
>
> **[4:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=285)** I'll also call MapGet to create a handler for a GetRequest.
>
> **[4:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=293)** I'll make the URL /API /idealweather.
>
> **[5:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=301)** I'll capture a route parameter, and then just echo it back in the response.
>
> **[5:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=306)** To do that, I'll add a slash, and then favorite weather surrounded by curly braces.
>
> **[5:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=314)** That segment of the URL will be captured as a parameter and passed to the Lambda expression I'll now use as the route handler.
>
> **[5:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=330)** Inside the body of the Lambda, I'll just return a string that includes the parameter value.
>
> **[5:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=345)** Let's now run the app and try out the two end points.
>
> **[5:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=351)** I'll click the link in the output and then switch to the browser window that opens.
>
> **[5:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=357)** Just as you saw with the controller-based example earlier, I get a 404 error because there's no API endpoint defined for what would've been the homepage of a normal web app with views or pages.
>
> **[6:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=369)** The URL I defined for the weather forecast endpoint was /API /weatherforecast /5day, so I'll add that in the address bar.
>
> **[6:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=384)** That did correctly return the random five day forecast serialized to [[JSON]].
>
> **[6:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=389)** Let's now try the second endpoint that takes a route parameter.
>
> **[6:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=393)** The URL for it is /API /idealweather /some weather condition.
>
> **[6:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=400)** I like cool weather, so I'll pass it chilly.
>
> **[6:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=407)** Because the response was a single string rather than an array or an object, the server didn't attempt to serialize it to JSON.
>
> **[6:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=415)** But you can see it did echo back the value I passed as a route parameter.
>
> **[7:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=420)** Minimal web APIs are great for [[Microservices]], prototypes, or any service you want to get working quickly.
>
> **[7:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=427)** I hope you'll give them a try.
>
> **[7:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=428)** Sending test requests to either type of [asp.net](https://asp.net) core API with a browser, as I've been doing, isn't ideal.
>
> **[7:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=436)** You could view some requests or response details if you opened up the browser dev tools, but it's also awkward to submit requests with anything but the HTTP Get verb using a browser.
>
> **[7:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=448)** Thankfully, [[Microsoft]] has included a built-in tool called Swagger to make testing your APIs a little easier.
>
> **[7:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-minimal-web-apis?u=76281980&t=456)** I'll show you that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[CLI]] (1), [[Microservices]] (1), [[ASP.NET Core]] (1), [[Microsoft]] (1)
> **Env Vars:** api (12), url (8), net (2), http (2), json (2)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** in the next (1), in the last (1), as you saw (1)
> **Exercise Files:** template (3)
> **UI Navigation:** open the (1), switch to (1)
> **Code Identifiers:** webapi (1)
> **URLs:** [asp.net](https://asp.net) (1)

#### [Using Swagger to test Web APIs](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=0)** - [Instructor] It can be difficult to test new API methods if you haven't yet developed the client applications that will consume the API.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=8)** Or maybe the client applications exist, but they're developed by a different development team that expects you to deliver a bug-free service, ready for production deployment.
>
> **[0:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=17)** Swagger is a tool that helps you document and test your web APIs.
>
> **[0:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=22)** You can read more about the Swagger project at [swagger.io](https://swagger.io).
>
> **[0:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=26)** What I'm going to show you in this demo is an embedded version of the Swagger UI that can be hosted inside your [ASP.NET](https://ASP.NET) Core web API projects.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=36)** This is the code for the minimal-api project I created in the previous movie.
>
> **[0:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=42)** The web API project template I used included all the code needed for a basic Swagger configuration.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=49)** The Swagger services are registered on line six with the call to AddSwaggerGen.
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=55)** Actually, generating documentation for your service and hosting the Swagger UI happens on lines 13 and 14.
>
> **[1:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=63)** The call to UseSwagger generates a document that conforms to the OpenAPI specification for web services.
>
> **[1:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=71)** OpenAPI is a language agnostic specification for describing the capabilities of a service.
>
> **[1:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=78)** The Swagger UI enabled on line 14 will use the document generated by UseSwagger to show you details about your service and let you make calls to it and view the details of the HTTP response.
>
> **[1:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=93)** Because this is something you wouldn't normally want available in a production environment, notice that the calls to UseSwagger and UseSwaggerUI are wrapped in an IF statement and only called if the current application environment is development.
>
> **[1:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=107)** Let's try it out.
>
> **[1:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=110)** I'll start the app in my terminal with dotnet run.
>
> **[1:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=114)** I'll click the link in the output, but you've already seen that the URL is just going to return a 404 Not Found.
>
> **[2:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=122)** Before I show you the Swagger UI, I want to show you the OpenAPI document that was generated by the call to UseSwagger.
>
> **[2:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=130)** You can find it at /swagger/v1/swagger.[[JSON]].
>
> **[2:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=139)** This is a JSON document that describes the endpoints and schema used in the service.
>
> **[2:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=145)** It can be read by the Swagger UI or any other tool that supports the OpenAPI specification.
>
> **[2:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=151)** By default, the Swagger UI is hosted at the URL /swagger.
>
> **[2:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=157)** It's really a little web app hosted inside your app.
>
> **[2:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=161)** You can see the name of the service.
>
> **[2:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=163)** I named this one minimal-api, as well as the endpoints available on the service and schemas used by the service.
>
> **[2:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=171)** Click on an endpoint to see more information about it.
>
> **[2:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=174)** I'll first click on the weatherforecast endpoint.
>
> **[2:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=177)** I can see that the endpoint takes no parameters and I can see an example schema for the data returned.
>
> **[3:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=189)** To test it, I click the Try it out button on the right.
>
> **[3:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=193)** If the endpoint required parameters, I would now need to enter them.
>
> **[3:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=197)** Since this one doesn't, I just click the big blue Execute button.
>
> **[3:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=202)** That ran quickly and updated the UI below.
>
> **[3:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=207)** It shows us the curl command you can use to generate the same HTTP request it used.
>
> **[3:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=213)** You can also see the request URL below that.
>
> **[3:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=216)** A little further down is the server response.
>
> **[3:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=222)** The response code was 200, and you can see the JSON returned in the response body does contain the random weather forecast data.
>
> **[3:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=231)** Further down, you can also see the HTTP response headers.
>
> **[3:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=238)** Let's now try out the second endpoint that does require a parameter.
>
> **[4:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=245)** It lets me know that the favoriteweather parameter is required.
>
> **[4:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=249)** I'll click the Try it out button and enter my favorite weather.
>
> **[4:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=254)** I'll now click Execute.
>
> **[4:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=261)** It also executed successfully, and you can see similar information about the request and response.
>
> **[4:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=267)** Remember, I had this endpoint just return a string rather than an object or array, so the response body is just that string and didn't get serialized to JSON.
>
> **[4:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=277)** These endpoints expect basic HTTP get request, but if your service includes endpoints for post or put request, then there would also be places for you to enter a message body to submit with the request.
>
> **[4:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=291)** Swagger is a very handy tool that makes it much easier than it would be otherwise to test your API endpoints.
>
> **[4:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=298)** It's straightforward enough that you may even be able to get your users to use it and do some testing for you.
>
> **[5:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/using-swagger-to-test-web-apis?u=76281980&t=304)** Okay, in the next movie, I'm going to present a web API challenge, so you can practice creating your own project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[ASP.NET Core]] (1)
> **Env Vars:** api (6), http (4), url (3), json (3), asp (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (1), dotnet (1), find (1), curl (1)
> **Documentation:** specification (3)
> **URLs:** [swagger.io](https://swagger.io) (1), [asp.net](https://asp.net) (1)
> **UI Navigation:** click on (2)
> **File Paths:** swagger/v1/swagger.json (1)

#### [Challenge: Create a Web API](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=5)** - [Instructor] It's your turn to practice creating your own web API.
>
> **[0:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=9)** In this challenge, I want you to start by creating a new minimal Web API project using the .NET [[CLI]].
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=16)** As you've seen, the project template includes sample code related to weather forecasts.
>
> **[0:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=21)** Go ahead and remove the code specific to serving weather data.
>
> **[0:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=25)** We're going to serve book data in this API.
>
> **[0:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=28)** Add a new "Book" record type to the program.CS file that includes string properties for the book's title and author.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=36)** This will be our model type.
>
> **[0:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=38)** If this were a production application, you would probably retrieve actual book data from a database of some kind, but since we don't have that here, create several new book instances and add them to an array and store the array in a variable.
>
> **[0:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=52)** We'll use that as our tiny data source.
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=55)** Next, create a new API endpoint to return all the books in the array.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=61)** Choose any URL that makes sense to you for that purpose.
>
> **[1:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=65)** Create a second endpoint to allow callers of your API to search the array of books by author name.
>
> **[1:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=72)** The URL for this endpoint should include a route parameter that will be used as the search term.
>
> **[1:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=78)** Finally, use Swagger to test both endpoints and verify that they return the expected results.
>
> **[1:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-web-api?u=76281980&t=85)** I'll show you my solution in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** api (5), url (2), net (1), cli (1)
> **Exercise Files:** template (1), sample code (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)

#### [Solution: Create a Web API](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=0)** - [Instructor] I am going to show you how I solved the challenge, but don't worry if your code doesn't exactly match mine.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=11)** The goal is to create a working web API and reinforce your understanding of the project types.
>
> **[0:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=17)** To get started, I'm going to use the dotnet [[CLI]] to create a new minimal API project.
>
> **[0:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=23)** The command to do that is dotnet new webAPI.
>
> **[0:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=29)** I want to create the project in a new directory named books-API.
>
> **[0:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=34)** I'll specify that with the -O option.
>
> **[0:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=38)** I'll now switch to that directory and open the project in VS Code.
>
> **[0:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=47)** All of the code that comes with the project template is in the program.CS file.
>
> **[0:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=53)** I'm going to add all of the code for the challenge in here, but I don't need the sample code specific to serving weather forecast data, so I'll delete the summaries variable, the existing call to map get and the weather forecast record declaration at the end of the file.
>
> **[1:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=77)** Since this service will serve book data, I want to book model to use.
>
> **[1:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=82)** I could create a class, but a record will be adequate for our modest needs here.
>
> **[1:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=87)** It only needs two string properties, title and author.
>
> **[1:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=96)** I don't have a database or other production level source of book data right now, so I'm just going to declare an array of books and assign it to a variable named library.
>
> **[1:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=111)** I'll basically use this array as my data source for the web service.
>
> **[1:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=115)** I'm going to paste a few book instances into the array just so you don't have to watch me type so much.
>
> **[2:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=123)** Okay, now I want to add a couple of endpoints to the service.
>
> **[2:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=127)** The first one, we will just return a list of all books in the array.
>
> **[2:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=131)** I'll create it by calling MapGet on the web application object.
>
> **[2:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=139)** The first parameter to MapGet is the URL for the endpoint.
>
> **[2:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=144)** I can make this whatever I want but should choose a name that will hopefully make sense to the other developers that will be consuming my API.
>
> **[2:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=152)** I'll make it /api/books/list.
>
> **[2:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=160)** The second parameter to MapGet is a function that will serve as the route handler.
>
> **[2:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=165)** I'm going to use a Lambda expression.
>
> **[2:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=168)** It won't take any parameters and will just return the library variable I declared above.
>
> **[2:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=176)** The second endpoint should allow callers of the API to search for books by author name.
>
> **[3:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=182)** I'll create it with another call to MapGet.
>
> **[3:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=188)** I'll make the URL for this endpoint /api/books/authorsearch.
>
> **[3:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=198)** I want the search term to be passed as a route parameter.
>
> **[3:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=202)** That will be the last segment of the URL, and it must be surrounded by curly braces.
>
> **[3:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=207)** I'll name it author name.
>
> **[3:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=211)** The lambda expression for this endpoint is going to be a little longer than the previous one and will accept the route parameter as a parameter to the expression.
>
> **[3:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=221)** It will be a string and needs the same name as the route parameter.
>
> **[3:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=231)** Inside the Lambda, I'll use the static FindAll method on the array class to search for the books with an author name matching the search term, FindAll returns and array containing the matching elements.
>
> **[4:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=244)** So that's what I'll return back to the client.
>
> **[4:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=253)** The first parameter to FindAll is the array I want to search.
>
> **[4:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=257)** That will be the array stored in my library variable.
>
> **[4:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=262)** The second parameter is a predicate with the search condition.
>
> **[4:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=266)** It will be passed each book in the array,, and I'll compare the author of that book with the search term.
>
> **[4:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=273)** If they match, then the book will be included in the array returned to the client.
>
> **[4:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=282)** I'll call the Contains method to do the comparison.
>
> **[4:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=289)** I'll use a method overload that makes the search case insensitive.
>
> **[4:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=299)** Okay, that should return our array filtered by author name.
>
> **[5:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=303)** Let's now run the app and try it out.
>
> **[5:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=309)** I'll click the link in the output to open it in a browser.
>
> **[5:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=313)** I could update the address bar with the URL for the end points and try them out that way, but I think using Swagger for this is much nicer.
>
> **[5:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=321)** I get to it by just adding /swagger after the port number in the URL.
>
> **[5:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=329)** It correctly recognized the two endpoints and the schema for the book record type I created.
>
> **[5:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=335)** I'll click on the first endpoint to expand it and then click the try it out button.
>
> **[5:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=341)** This endpoint doesn't require any parameters, so I can just click the execute button.
>
> **[5:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=347)** That worked as expected, and if I scroll down a little, you can see the [[JSON]] representation of the books returned.
>
> **[5:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=355)** Let's now try out the second endpoint.
>
> **[5:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=359)** This one requires the author name we want to search for as a route parameter.
>
> **[6:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=363)** I didn't make this very robust, so I'm only going to search for a name I know exists.
>
> **[6:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=368)** I'll first search for Hemingway.
>
> **[6:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=379)** That also worked correctly.
>
> **[6:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=381)** I got a 200 response code, and the JSON return now only shows the two books in the array by Ernest Hemingway.
>
> **[6:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=388)** I hope your service worked as well.
>
> **[6:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=390)** A quick bonus challenge you can try would be to implement the same functionality with a controller based web API.
>
> **[6:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=397)** Both types of API projects are very popular and great for serving data to all kinds of applications.
>
> **[6:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=404)** In the next chapter, I'm going to cover GRPC services.
>
> **[6:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-web-api?u=76281980&t=408)** I'll explain what they are, when you might use them, and of course how to get started creating them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[CLI]] (1)
> **Env Vars:** api (7), url (5), json (2), cli (1), grpc (1)
> **CLI Commands:** make (5), dotnet (2)
> **UI Navigation:** switch to (1), open the (1), click on (1), scroll down (1)
> **API Endpoints:** /api/books/list (1), /api/books/authorsearch (1)
> **Exercise Files:** template (1), sample code (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** webapi (1)


### 5. Creating gRPC APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding gRPC APIs](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=0)** - [Instructor] Standard web APIs like we saw in the previous chapter aren't the best solution for every scenario.
>
> **[0:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=6)** Sometimes you need a little more performance.
>
> **[0:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=9)** gRPC is a remote procedure call framework that is language agnostic and can give you better performance than a simple web API.
>
> **[0:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=18)** By default, gRPC services utilize [[Protocol Buffers]], which is a language-neutral platform developed by [[Google]] for serializing structured data.
>
> **[0:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=29)** gRPC services with protocol buffers are developed contract first.
>
> **[0:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=35)** This means that services are defined independent of any programming language in special proto files.
>
> **[0:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=42)** They define the calls you make to the service, as well as the types of parameters they accept and the data they return.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=49)** gRPC is language agnostic.
>
> **[0:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=52)** Tooling exists in lots of different languages to read the proto files that define a service and generate strongly typed server code to implement the service and client code to call it.
>
> **[1:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=64)** gRPC services generally perform better than web APIs because of the reduced network usage that results from the [[Protocol Buffers|protobuf]] binary serialization.
>
> **[1:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=74)** For all these reasons, gRPC services can be a good alternative if you need the flexibility to work with different languages, need to deliver services that are more efficient and performant, or need more advanced [[Real-Time]] communication than you would get with a typical [[Representational State Transfer (REST)|rest]] service.
>
> **[1:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=92)** Let's jump over to the terminal and start creating one.
>
> **[1:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=96)** As you've seen me do several times already, I'm going to create a new project with the .NET [[CLI]].
>
> **[1:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=102)** The short name for the gRPC project template is just gRPC, so the command I'll use is dotnet new grpc.
>
> **[1:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=112)** I'll add -o to create it in a directory named grpc-server.
>
> **[2:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=120)** I'll now open that directory in VS Code.
>
> **[2:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=127)** Let's start by taking a look inside the Program.cs file.
>
> **[2:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=131)** There's not as much starter code here as we've seen in some of the other project templates.
>
> **[2:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=136)** The only service being registered is on line 6 with the call to AddGrpc.
>
> **[2:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=142)** You also have to register each specific service your application will host with a call to MapGrpcService.
>
> **[2:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=150)** That call is being made on line 11.
>
> **[2:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=154)** Notice that the specific service type is passed as a generic type parameter.
>
> **[2:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=159)** The service class that comes with the template is named GreeterService, and we'll check it out in just a bit.
>
> **[2:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=166)** Just after the call to MapGrpcService is a basic call to MapGet, much like we saw in the previous chapter on web APIs.
>
> **[2:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=175)** If a standard HTTP GET request is sent to the root of the app, then a message will be returned letting the caller know this is a gRPC service, and must be called with a gRPC client.
>
> **[3:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=188)** I'll talk about gRPC clients a little later.
>
> **[3:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=192)** Okay, probably the most important part of a gRPC service is the proto file that defines the service contract.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=200)** The default one is in the Protos folder in the project.
>
> **[3:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-grpc-apis?u=76281980&t=204)** I'll show you what's in this one and add a second one to the project in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Protocol Buffers]] (2), [[Google]] (1), [[Protocol Buffers|Protobuf]] (1), [[Real-Time]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** grpc (12)
> **Definitions:** is a  (4), means that (1)
> **Env Vars:** api (1), net (1), cli (1), http (1)
> **Cross-References:** previous chapter (2), in the next (1)
> **Exercise Files:** template (2), starter code (1)
> **CLI Commands:** make (1), dotnet (1)
> **Tools:** terminal (1), vs code (1)

#### [Creating a .proto file](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=0)** - [Instructor] Let's now see how to define a GRPC service contract with a proto file.
>
> **[0:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=5)** I'm going to start with the default greet.proto file that came with the project template.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=11)** I'm going to show you some of the basic syntax, but I'll also encourage you to check out the official documentation at [protobuf.dev](https://protobuf.dev).
>
> **[0:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=20)** The first line here just declares which version of the proto syntax we'll be using, [[Protocol Buffers|proto3]] in this case.
>
> **[0:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=26)** Line three assigns a value to the C# namespace option.
>
> **[0:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=32)** By default, the value is just the name of the project I created with the dash replaced with an underscore.
>
> **[0:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=38)** When I use the available tooling to generate C# code from this file, it will be placed inside a C# namespace with this value.
>
> **[0:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=47)** The package declaration on line five is optional and used to prevent name clashes between message types.
>
> **[0:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=54)** This will be used and interpreted differently based on which programming language you plan on using.
>
> **[1:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=60)** The service specifier on line eight declares a name for the service.
>
> **[1:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=65)** Inside the curly braces, you use the RPC specifier to declare the different remote procedure calls that will exist on the service.
>
> **[1:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=74)** This one currently has a SayHello method that takes a HelloRequest object as a parameter and returns a HelloReply object.
>
> **[1:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=83)** Those types are defined below.
>
> **[1:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=85)** They're declared with the message specifier.
>
> **[1:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=88)** And when you generate C# code from this file, these messages will become classes.
>
> **[1:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=94)** Inside the curly braces for the messages, you declare the members that will be a part of the message along with their data type.
>
> **[1:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=102)** Lots of familiar scalar data types are available, including int32, int64, strings, floats, and Booleans.
>
> **[1:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=111)** Each member is also assigned a numeric value that identifies the field for serialization purposes.
>
> **[1:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=118)** Numbers must be unique and not reused if you add or change fields in the future.
>
> **[2:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=124)** To add a new method to this service, I can just declare a new one with the RPC specifier inside the service declaration.
>
> **[2:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=132)** I'll add one named GreetNewEmployee that takes an employee object as a parameter and returns a HelloReply object.
>
> **[2:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=145)** I'm reusing the HelloReply message from the first method, but I don't yet have an employee message.
>
> **[2:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=152)** I'll paste that in next with a few different fields and data types.
>
> **[2:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=156)** I'll show you how to generate new C# code that includes this new method in just a few minutes, but I want to first add a second service to the application.
>
> **[2:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=165)** I'm going to do that with a second proto file.
>
> **[2:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=168)** I'll create it as a new empty file in the Protos folder.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=172)** I'll name it webdev.proto.
>
> **[2:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=177)** It will use the same syntax and have the same namespace as the greeter service, but I'll name the package for this one webdev.
>
> **[3:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=199)** I'll now add the service specifier and name it webdev.
>
> **[3:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=207)** Inside it, I'm going to declare a single RPC named CreateProject that might be used to create and save a new [[Web Development]] project on the server.
>
> **[3:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=220)** It will take a Project object as a parameter and return a ProjectConfirmation object.
>
> **[3:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=235)** I now need to define those two types with the message specifier.
>
> **[3:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=239)** I'll give Project two properties, name and id.
>
> **[4:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=249)** I'll keep ProjectConfirmation very simple and just give it a single string to store a message.
>
> **[4:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=259)** Okay, this is a small, but complete proto file.
>
> **[4:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=263)** Right now, it's just a random text file sitting in a project folder.
>
> **[4:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=267)** To properly include it in my project, I need to reference it inside the project file, so I'll now open the grpc-server.csproj file.
>
> **[4:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=279)** Inside the ItemGroup element on line 10, you can see the project template already included a reference to the default greet.proto file.
>
> **[4:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=288)** The element is named [[Protocol Buffers|Protobuf]].
>
> **[4:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=290)** The Include attribute is a path to the proto file.
>
> **[4:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=294)** The code generation tools we'll talk about shortly will look for Protobuf elements to know what services to generate code for.
>
> **[5:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=303)** The GrpcServices attribute is used to control what C# code is generated for the service.
>
> **[5:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=310)** It can be set to server, client, both, or none.
>
> **[5:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=315)** I'll add a second Protobuf element for the web dev proto file I created.
>
> **[5:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=320)** I'll also set it to only have server code generated.
>
> **[5:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=327)** Okay, with that in place, I'm ready to generate C# server code from the proto files I referenced.
>
> **[5:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-proto-file?u=76281980&t=333)** I'll show you how to do that in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Protocol Buffers|Protobuf]] (4), [[Protocol Buffers|Proto3]] (1), [[Web Development]] (1)
> **Env Vars:** rpc (3), grpc (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **File Paths:** grpc-server.csproj (1)
> **URLs:** [protobuf.dev](https://protobuf.dev) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** open the (1)

#### [Generating C# assets](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=0)** - [Isn't] I now have the proto files for my GRPC services in place.
>
> **[0:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=4)** The next step is to use those proto files to generate C# server code that implements the services.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=11)** We do that in [ASP.NET](https://ASP.NET) Core using tooling available in a NuGet package.
>
> **[0:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=17)** I've still got my main C# project file open here in my editor.
>
> **[0:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=22)** The GRPC project template included a reference to the Grpc.AspNetCore package on line 15.
>
> **[0:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=31)** That's a meta package that includes references to three other packages that assist with GRPC development.
>
> **[0:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=39)** One of them is Grpc.Tools.
>
> **[0:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=42)** That package includes tooling that will automatically read your proto files and generate C# code to implement them each time you build your project.
>
> **[0:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=53)** The generated code files are added to the obj folder in your project.
>
> **[0:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=58)** Therefore, they aren't referenced in your project and aren't added to your source control system.
>
> **[1:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=63)** I'll open the VS Code terminal and try it out.
>
> **[1:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=66)** I'll build the project with the command dotnet build followed by the name of the C# project file.
>
> **[1:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=76)** After a few seconds, you can see the build was successful.
>
> **[1:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=80)** I'll now close the terminal and expand the services folder in the Project Explorer.
>
> **[1:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=88)** It currently only contains one file named GreeterService.cs.
>
> **[1:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=93)** There's not a file here for the Web Dev Service I created.
>
> **[1:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=97)** Notice that this GreeterService class inherits from a class named Greeter.GreeterBase.
>
> **[1:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=103)** GreeterBase is the class generated by the GRPC tooling when I built the project.
>
> **[1:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=110)** It's an abstract class created inside the obj folder.
>
> **[1:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=114)** It's up to us developers to create concrete classes that inherit from those generated base classes.
>
> **[2:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=121)** This GreeterService class was created by the GRPC project template.
>
> **[2:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=126)** I'm going to have to create my own concrete class for the Web Dev Service.
>
> **[2:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=130)** Before I do that, I want to give you a quick peek at the base class that was generated.
>
> **[2:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=136)** I'll put my [[Cursor]] on the reference to the GreeterBase class and press F12 to jump to the definition for that class.
>
> **[2:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=144)** That opens a file named GreetGrpc.cs.
>
> **[2:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=149)** You can see that the class declaration begins on line 82 and that it's an abstract partial class.
>
> **[2:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=156)** Also, take note of its location in the VS Code Project Explorer.
>
> **[2:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=160)** It's buried inside the obj folder in a subfolder named Protos.
>
> **[2:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=165)** Also notice that there are other files in that folder for the Web Dev Service I created inside the WebDev.Proto profile.
>
> **[2:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=174)** Now that I've generated the base classes, I need to implement the new method I added to the GreeterService and create a concrete service class for the Web Dev Service.
>
> **[3:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/generating-c-sharp-assets?u=76281980&t=185)** I'll do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (1)
> **Env Vars:** grpc (5), asp (1), net (1), f12 (1)
> **Tools:** vs code (2), terminal (2)
> **Exercise Files:** template (2)
> **CLI Commands:** dotnet (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [isn (1)

#### [Implementing service methods](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=0)** - [Instructor] I'm now ready to create concrete classes that inherit from the abstract base classes generated for my GRPC services.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=8)** I've already got the GreeterService.cs file open.
>
> **[0:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=12)** It was created for me by the GRPC project template.
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=16)** The default greet.proto file declared a method on the service named SayHello.
>
> **[0:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=22)** The code generation tooling created a virtual method with that name in the abstract base class.
>
> **[0:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=28)** It's up to me as the developer to override that virtual method in my concrete service class.
>
> **[0:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=35)** The method here is to code provided by the project template.
>
> **[0:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=38)** Remember that I added a second method to the greet.proto file named GreetNewEmployee.
>
> **[0:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=44)** A virtual version of that method was added to the abstract base class when I rebuilt the project.
>
> **[0:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=51)** I now need to override it here with my desired functionality.
>
> **[1:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=75)** I want similar functionality to the SayHello method above, so I'll copy the body of it and paste it into this new method.
>
> **[1:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=88)** I'll just update the message to say Welcome to the company.
>
> **[1:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=95)** That's all I need to do for this basic implementation.
>
> **[1:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=98)** I now need to create a concrete service class for the web dev service.
>
> **[1:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=102)** An abstract base class was created for it when I built the project in the last movie.
>
> **[1:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=107)** However, I've got to start from scratch creating a concrete class for it.
>
> **[1:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=112)** I'll start by adding a new file to the services folder named WebDevService.cs.
>
> **[2:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=121)** I'll first add a couple of using statements for some GRPC namespaces.
>
> **[2:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=132)** Grpc.Core is built in, and grpc_server is the namespace containing the generated code for my service.
>
> **[2:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=140)** I'll now add a namespace for the [[Representational State Transfer (REST)|rest]] of the code I'll add to this file.
>
> **[2:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=148)** I'll name the class WebDevService, and it will inherit from the generated class named WebDev.WebDevBase.
>
> **[2:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=164)** I'll put my [[Cursor]] on WebDevBase and press F12 to jump to the definition for it.
>
> **[2:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=171)** You can see on line 69 that it's an abstract class and it only has a single virtual method named CreateProject.
>
> **[3:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=183)** All the virtual method does is throw an exception, so I need to override it in my concrete class to implement my desired functionality.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=200)** I'll delete this call to the base class method and paste in a new body.
>
> **[3:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=207)** This will just return a new project confirmation object with the message property set to a string that includes the new project name.
>
> **[3:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=215)** In addition to creating the base class for the service, the code generation tools also created classes for the message types defined in the proto files.
>
> **[3:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=225)** The project and project confirmation types used on this method refer to those generated C# classes.
>
> **[3:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=232)** Okay, the last thing I need to do before I can run this app and host the GRPC services is to register the WebDevService inside the Program.cs file.
>
> **[4:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=244)** I showed you earlier the call to MapGrpcService you see here on line 11.
>
> **[4:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=250)** It passes the concrete service class name as a type parameter.
>
> **[4:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=254)** I'll add a similar call just below it that registers the WebDevService.
>
> **[4:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=265)** This app is now ready to run and start receiving calls.
>
> **[4:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=269)** Unfortunately, that requires a GRPC client.
>
> **[4:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=273)** We can't just use the browser or swagger.
>
> **[4:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=276)** [ASP.NET](https://ASP.NET) Core really just includes hosting a GRPC server.
>
> **[4:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=281)** You can create GRPC clients using lots of different programming languages.
>
> **[4:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=286)** Even though the clients aren't part of [ASP.NET](https://ASP.NET) Core, I still want you to see one quick example of creating one.
>
> **[4:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/implementing-service-methods?u=76281980&t=293)** I'll show you that in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** grpc (7), asp (2), net (2), f12 (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Cross-References:** in the last (1), in the next (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** grpc_server (1)
> **Speakers:** - [instructor] (1)

#### [Calling gRPC services](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=0)** - [Instructor] You can create GRPC clients using lots of different programming languages.
>
> **[0:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=5)** I'm going to show you a very basic example with a console application in C sharp.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=11)** I'll start by opening the VS code terminal and using the dotnet [[CLI]] to create a new console app.
>
> **[0:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=21)** I'll put it in a folder named GRPC client.
>
> **[0:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=28)** With that in place, I want to include the new client app alongside my server app here in VS code.
>
> **[0:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=35)** I'll do that with what is known as a VS code workspace.
>
> **[0:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=39)** I'll right-click in the project explorer and add the new app folder to a workspace.
>
> **[0:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=53)** You can now see I have the folders for the server and client projects available in VS code.
>
> **[0:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=59)** I now need to add a few NuGet packages to the client project that will allow it to generate the necessary client code and make requests to a GRPC service.
>
> **[1:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=69)** I'll add them in the VS code terminal with the dotnet CLI.
>
> **[1:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=79)** The command I'll use is dotnet add.
>
> **[1:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=82)** I'll follow that with the name of the project file, the command package, and then the name of the NuGet package.
>
> **[1:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=97)** The first one is [grpc.net](https://grpc.net).client.
>
> **[1:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=102)** The next one is [[Google]].[[Protocol Buffers|protobuf]].
>
> **[1:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=110)** The last one is Grpc.tools.
>
> **[1:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=114)** It contains the tooling to help us generate C sharp client code.
>
> **[2:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=125)** The server project used the proto files to generate the necessary C sharp code.
>
> **[2:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=130)** Similarly, we need them on the client so the tooling can generate the appropriate client code.
>
> **[2:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=136)** I'll add a new Protos folder to the client project.
>
> **[2:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=141)** I'll now copy the two proto files from the server project into the new folder in the client project.
>
> **[2:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=156)** I need to make one small change in each of them.
>
> **[2:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=159)** I'll start with greet.proto.
>
> **[2:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=163)** I want the generated C sharp code added to a namespace named GRPC client instead of GRPC server.
>
> **[2:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=173)** That's the only change I'm going to make.
>
> **[2:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=175)** I'll now make the same change in webdev.proto.
>
> **[3:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=182)** I now need to reference these proto files in the project file, grpc_client.cs proj.
>
> **[3:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=190)** Inside the item group element, I'll add a new protobuf element that references the greet.proto file.
>
> **[3:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=209)** Notice that this time I set the GRPC Services attribute to client so that the code generation tooling only generates client code.
>
> **[3:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=218)** I'll copy and paste this to also add a reference to webdev.proto.
>
> **[3:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=228)** With the proto files in place and referenced, I can generate the C sharp client code by building the project.
>
> **[4:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=240)** It built with no errors.
>
> **[4:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=243)** I'll now expand the obj folder and show you the new files.
>
> **[4:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=249)** They're nested a few levels deep inside a Protos folder.
>
> **[4:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=254)** Let's now write some code inside program.cs that uses the generated client code to call our GRPC service.
>
> **[4:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=261)** I'll first delete this Hello, world code.
>
> **[4:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=265)** I need a couple of using statements for the built-in GRPC libraries and the generated client code.
>
> **[4:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=278)** GRPC clients communicate with servers over a channel.
>
> **[4:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=283)** I get a reference to a channel by calling GrpcChannel.ForAddress.
>
> **[4:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=294)** ForAddress takes a parameter, which is the address of the GRPC server.
>
> **[4:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=299)** Your server address will probably not be the same as my server address, if you're following along with me.
>
> **[5:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=305)** The best thing to do is copy it from the launch settings.[[JSON]] file in your server project.
>
> **[5:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=322)** I'll now paste this as a parameter to the ForAddress method.
>
> **[5:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=327)** The channel is passed to the generated client constructor to create a client object I can use to call the remote procedures.
>
> **[5:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=343)** I'm going to call the create project procedure I define on the service and store the response in a variable.
>
> **[5:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=356)** Remember that the create project procedure expects to be passed a project object.
>
> **[6:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=362)** I'll create one in line.
>
> **[6:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=376)** I'll print the reply to the console.
>
> **[6:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=388)** Let's try it out.
>
> **[6:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=391)** Remember, I've got two separate applications here.
>
> **[6:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=394)** I first need to start the server so it's available to receive request when I start the client.
>
> **[6:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=400)** I'll change to the server project directory and start it with dotnet run.
>
> **[6:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=411)** Now that it's running, I'll open a second terminal for the client.
>
> **[6:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=418)** I'll also start it with dotnet run.
>
> **[7:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=424)** After a couple of seconds, I get a response back that the new project was created so we know the client did successfully connect to the server and call the remote procedure.
>
> **[7:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=434)** Okay, up next, I want to give you some practice creating your own GRPC service.
>
> **[7:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/calling-grpc-services?u=76281980&t=440)** Stay tuned for a challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2), [[Protocol Buffers|Protobuf]] (2), [[Google]] (1), [[JSON]] (1)
> **Env Vars:** grpc (11), cli (2)
> **CLI Commands:** dotnet (5), make (4)
> **Tools:** vs code (5), terminal (3)
> **File Paths:** settings.json (1)
> **Code Identifiers:** grpc_client (1)
> **URLs:** [grpc.net](https://grpc.net) (1)
> **UI Navigation:** right-click (1)

#### [Challenge: Create a gRPC service](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=0)** - [Instructor] In this challenge, I'll have you create a new gRPC service hosted with [ASP.NET](https://ASP.NET) Core.
>
> **[0:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=12)** The service will work with book data much like the other challenges in the course.
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=16)** Start by creating a new project with the .NET [[CLI]] using the gRPC project template.
>
> **[0:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=23)** Add a new proto file to the project named books.proto.
>
> **[0:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=27)** Inside the proto file, declare a new remote procedure call named GetAuthor that takes a message with a Title property and returns a message with an Author property.
>
> **[0:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=39)** With the proto file in place, register it in the project file and generate the C# server code based on it.
>
> **[0:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=46)** You should then provide an implementation for the service.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=49)** To keep things simple, you can hard-code a few books in the service.
>
> **[0:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=53)** Have the service return the author of the requested book title.
>
> **[0:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=57)** Finally, register the service in the program.cs file and build it to make sure you don't have any errors.
>
> **[1:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-grpc-service?u=76281980&t=64)** I'll show you my solution in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (1), [[CLI]] (1)
> **Env Vars:** net (2), asp (1), cli (1)
> **Code Identifiers:** grpc (2)
> **CLI Commands:** make (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a gRPC service](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=0)** - [Instructor] I will now show you how I solve the challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=8)** Just as a reminder, your solution doesn't have to look exactly like mine to be correct.
>
> **[0:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=13)** This is just one way to solve it.
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=16)** I'll start by creating a new GRPC application using the .NET [[CLI]].
>
> **[0:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=21)** The command I'll use is dotnet new grpc.
>
> **[0:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=28)** I'll add the -o option to put the project in a directory named grpc-challenge.
>
> **[0:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=36)** I'll now change to the new directory and open it in VS Code.
>
> **[0:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=46)** The first thing I need to add to the project is a new proto file.
>
> **[0:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=50)** As you've already seen, the project template comes with a default proto file named greet.proto.
>
> **[0:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=57)** If you were creating a production application, you would probably want to remove that file and the related service implementation.
>
> **[1:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=63)** However, I would probably only do that after you get at least one other proto file added to your project because keeping the sample in place as a syntax reference can be very helpful.
>
> **[1:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=74)** I'm just going to leave this one for now and add a new one named books.proto.
>
> **[1:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=82)** Before we declare any RPC calls in the file, we need to add details for the syntax version and namespace.
>
> **[1:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=90)** I'll use the [[Protocol Buffers|proto3]] syntax in this file.
>
> **[1:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=97)** I'll use the C# namespace option to set the namespace for my C# code files to grpc_challenge.
>
> **[1:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=113)** Finally, I'll set the package to books.
>
> **[1:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=119)** I'm now ready to specify the service.
>
> **[2:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=121)** I'll also name it books.
>
> **[2:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=126)** Inside the curly braces, I'll declare a new remote procedure call named GetAuthor.
>
> **[2:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=134)** It will accept a book title message as a parameter and return a book author message.
>
> **[2:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=148)** I now need to define those message types.
>
> **[2:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=151)** I'll first add BookTitle and just give it a single string property.
>
> **[2:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=161)** I'll also keep BookAuthor very simple with a single property for the author name.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=172)** I'm now ready to generate C# code for this service.
>
> **[2:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=176)** Remember that I do that by building the project, but I first need to add a reference to the proto file in the project file.
>
> **[3:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=184)** I'll copy and paste the reference to the greet.proto file and update the include attribute to point to the new books.proto file.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=200)** I want to generate server side code, so I'll leave the GRPC services attributes at the server.
>
> **[3:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=206)** I'll now open the built-in terminal and build the project to generate the C# service code.
>
> **[3:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=219)** That ran with no errors.
>
> **[3:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=220)** So I now have an abstract base class I can inherit from in the project's OBJ folder.
>
> **[3:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=226)** I'll implement the concrete class in a file I'll add to the services folder named BooksService.cs.
>
> **[3:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=235)** I'll first add to this new file a couple of using statements.
>
> **[3:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=239)** The first is for the built-in namespace Grpc.Core.
>
> **[4:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=246)** The second is for the GRPC challenge namespace containing the generated C# code.
>
> **[4:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=255)** I'll then declare the namespace for the code I'll add to this file.
>
> **[4:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=263)** I'm now ready to declare the new service class.
>
> **[4:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=266)** I'll name it BooksService, and it will inherit from the abstract BooksBase class generated from the proto file.
>
> **[4:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=281)** Since I don't have a database containing books, I'm going to hard code a few bere inside the class.
>
> **[4:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=288)** I'll first add a small record type I'll use to create them.
>
> **[4:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=291)** I'll just give it title and author properties.
>
> **[5:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=301)** I will store an array of books in a variable named library.
>
> **[5:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=311)** I'll paste in the same books I used earlier in the course.
>
> **[5:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=318)** I'm now ready to override the virtual GetAuthor method from the abstract base class.
>
> **[5:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=324)** I'll use some code completion help to stub it out.
>
> **[5:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=331)** I'll delete this line from the body and replace it with a line that finds the first book in my library array with a title that matches the title on the request.
>
> **[5:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=341)** I'll store the author of that book in a variable.
>
> **[5:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=359)** I will then add that author string to a new book author instance and return it from the method.
>
> **[6:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=377)** The last thing I need to do is register the service in the Program.cs file.
>
> **[6:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=382)** On line 11, there's already a call to MapGrpcService that registers the greeter service.
>
> **[6:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=389)** Since I don't plan to use that service, I'm just going to change it to register my book service instead.
>
> **[6:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=396)** That's all the code I need for this basic implementation.
>
> **[6:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=399)** Just to make sure I didn't make any mistakes, I'll open the terminal and build it with the command dotnet build.
>
> **[6:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=411)** Looks like I typed it all correctly.
>
> **[6:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=413)** No build errors.
>
> **[6:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=414)** I hope you got your version to work as well.
>
> **[6:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=417)** As a bonus challenge, you could now try creating a client for your new service.
>
> **[7:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=422)** I showed you earlier how to create a basic C# client in a console app, but you can also create GRPC clients in lots of other languages as well.
>
> **[7:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=431)** So if you're already familiar with [[Python (Programming Language)|Python]], C++, or maybe [[Java]], try creating a client with it.
>
> **[7:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=438)** GRPC services perform better than standard web APIs, but sometimes you need [[Real-Time]] functionality.
>
> **[7:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=445)** SignalR is an [ASP.NET](https://ASP.NET) Core library that gives you that capability.
>
> **[7:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-grpc-service?u=76281980&t=451)** I'll cover it in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), [[Protocol Buffers|Proto3]] (1), [[Python (Programming Language)|Python]] (1), [[Java]] (1), [[Real-Time]] (1)
> **Env Vars:** grpc (5), net (2), cli (1), rpc (1), obj (1)
> **CLI Commands:** dotnet (2), make (2), python (1)
> **Tools:** terminal (2), vs code (1)
> **Cross-References:** earlier in (1), in the next (1)
> **UI Navigation:** open the (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** grpc_challenge (1)


### 6. Creating SignalR Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding SignalR applications](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=0)** - [Instructor] Server-side web apps and services are great at sitting around waiting on request and then sending responses to those requests back to the client.
>
> **[0:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=9)** However, that means the client won't know about new information unless they request and receive it.
>
> **[0:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=15)** SignalR adds [[Real-Time]] web functionality to apps and gives servers the ability to push content to clients at any time.
>
> **[0:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=23)** This can be great for things like real-time chat apps, corporate [[Dashboards]] that always need the latest data, and any app requiring time-sensitive alerts.
>
> **[0:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=34)** SignalR accomplishes this by supporting two-way communication between the server and clients.
>
> **[0:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=40)** The server acts as a hub for this communication and can push messages to all clients or individual clients as needed.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=49)** [ASP.NET](https://ASP.NET) Core even provides a base class named hub you can use to implement your SignalR servers.
>
> **[0:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=56)** SignalR supports multiple transports for the communication between the server and clients.
>
> **[1:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=62)** [[WebSocket|WebSockets]] are the preferred transport, and will automatically be used if supported by both the client and server.
>
> **[1:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=69)** This shouldn't be a problem with any modern browser, since they all support WebSockets these days.
>
> **[1:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=75)** However, SignalR will gracefully fall back to using [[Server-Sent Events]], or long polling if a particular client doesn't support WebSockets.
>
> **[1:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=85)** The last thing I'll mention before I get into a demo is that SignalR is really a feature you can add to any [ASP.NET](https://ASP.NET) Core project.
>
> **[1:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=94)** There's relatively little server code required to get a basic SignalR hub up and running, so I would really think of it less like another project type and more of a feature you can add to any project when you need real-time functionality.
>
> **[1:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-signalr-applications?u=76281980&t=108)** In the next movie, I'll take one of the apps I created earlier and add some SignalR features to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (3), [[WebSocket|Websockets]] (3), [[ASP.NET Core]] (2), [[Dashboards]] (1), [[Server-Sent Events]] (1)
> **Env Vars:** asp (2), net (2)
> **URLs:** [asp.net](https://asp.net) (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Creating a server hub](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=0)** - [Instructor] Because you can really add SignalR functionality to any [ASP.NET](https://ASP.NET) Core application, I'm not going to create a new application for this demo.
>
> **[0:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=9)** Instead, I'll just add a new feature to an app I created earlier in the course.
>
> **[0:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=14)** I'm going to add the ability to post messages inside the app.
>
> **[0:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=18)** When new messages are received by the server, it will notify all clients and update them with the new message.
>
> **[0:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=26)** I've already opened the razor-pages app I created while demonstrating it a few chapters back.
>
> **[0:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=31)** In this movie, I'm going to focus on adding the server-side SignalR code, and in the next movie, we'll add the slightly more complex client-side code.
>
> **[0:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=41)** The main thing I need to add to the server is a new hub class.
>
> **[0:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=45)** I'll add a new file to the root of the project named MessageHub.cs.
>
> **[0:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=52)** [ASP.NET](https://ASP.NET) Core includes a hub base class in the [[Microsoft]].AspNetCore.SignalR namespace.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=61)** (keyboard clacking) I'll now just declare a new class named MessageHub that inherits from the built-in Hub base class.
>
> **[1:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=74)** (keyboard clacking) This class inherits from the base class all of the SignalR plumbing, so we really only need to add the methods we want to call from our clients.
>
> **[1:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=88)** I'll add a new async method named PostMessage.
>
> **[1:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=92)** (keyboard clacking) The method takes a string parameter that will be the message posted to the message board.
>
> **[1:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=105)** I can do whatever I want with that message, but all I'm going to do here is push it out to all of the client applications so the new message is included on the message board being viewed in the browser.
>
> **[1:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=116)** I can do that with the inherited Clients property.
>
> **[2:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=120)** (keyboard clacking) Notice that with the Clients property, I can send messages to a single client or use the All property to send a message to all connected clients.
>
> **[2:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=132)** That's what I'm going to do.
>
> **[2:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=134)** (keyboard clacking) I'm calling the SendAsync method, and passing it the name of the client-side method to call, followed by the parameter I want to pass to that method.
>
> **[2:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=150)** I'm passing it the message as a parameter, and I'll show you how to implement ReceiveNewMessage when we work on the client code in the next movie.
>
> **[2:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=158)** I'm keeping this very simple.
>
> **[2:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=160)** That's the only code I'm going to add to the hub right now.
>
> **[2:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=163)** I now need to add support for SignalR inside Program.cs.
>
> **[2:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=168)** I can add the SignalR service with a call to AddSignalR.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=172)** (keyboard clacking) The only other thing I need to do here is register the hub class I created, and assign it an endpoint that the clients will use to call it.
>
> **[3:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=187)** I do that with a call to MapHub.
>
> **[3:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=191)** (keyboard clacking) It takes a generic type parameter that is the type of the hub class.
>
> **[3:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=198)** That will be the MessageHubClass I created.
>
> **[3:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=201)** (keyboard clacking) I'll pass the endpoint of the hub as a string parameter.
>
> **[3:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=208)** I could make this anything I want, I'll just use /messageHub.
>
> **[3:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=212)** (keyboard clacking) That's it for the basic server code.
>
> **[3:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=220)** I've got a hub class, I've enabled SignalR, and I've registered my hub with an endpoint.
>
> **[3:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-server-hub?u=76281980&t=225)** In the next movie, I'll add a user interface and some client-side code to connect to the server with [[JavaScript]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2), [[Microsoft]] (1), [[JavaScript]] (1)
> **Env Vars:** asp (2), net (2)
> **Cross-References:** in the next (3), earlier in (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** messagehub (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating a JavaScript client](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=0)** - [Instructor] Before I can write the [[JavaScript]] code to connect to the message hub on the server, I first need to create a user interface for the message board.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=8)** I'll start by adding a new navigation link to the project's layout page.
>
> **[0:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=15)** I'll copy the LI element for the link to the homepage and paste it at the end of the list of navigation links.
>
> **[0:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=26)** I'll update the new link to go to a page at slash message board.
>
> **[0:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=30)** I'll also change the text for the link to messages.
>
> **[0:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=40)** I now need to create the page I just linked to.
>
> **[0:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=43)** I'll add it to the pages folder and name the file MessageBoard.cshtml.
>
> **[0:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=53)** Because this will be a standard razor page, the first thing I'll add to the file is the page directive.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=61)** I'll then page in some [[HTML]] for the user interface.
>
> **[1:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=64)** This just creates a very basic interface I can use to input and display messages for the message board.
>
> **[1:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=71)** The first div element that begins on line three contains a text box with an ID value of message input and a button labeled send message.
>
> **[1:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=82)** Users can type their message in the text box and press the button to send the message to the server.
>
> **[1:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=88)** A little further down on line 10, I've created another div that I'll use to display all of the messages received from all clients.
>
> **[1:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=96)** I gave the div the ID new messages, and right now it only has a header, making it clear it will display the new messages.
>
> **[1:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=104)** I'll add some JavaScript in a minute to append messages to this div as they come in.
>
> **[1:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=110)** A section named welcome is declared on line 14.
>
> **[1:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=113)** You may remember that the layout page for this app includes a placeholder for a welcome section, so this H3 tag will get inserted, welcoming users to the message board.
>
> **[2:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=125)** That's it for the user interface.
>
> **[2:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=127)** I now need to add some client side code to connect to the server.
>
> **[2:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=131)** The first step is to install the signal R JavaScript library.
>
> **[2:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=135)** There are several ways you can install it, but since I already have node JS and the node package manager [[npm]] on my computer, that's what I'm going to use.
>
> **[2:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=146)** Here in the terminal, I'll type npm install at [[Microsoft]] slash signal R.
>
> **[2:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=158)** That ran and successfully added a node modules folder to my project.
>
> **[2:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=164)** Down inside the Microsoft signal R dist browser folder, I'm going to copy the signalr.min.js file.
>
> **[2:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=176)** I'll now paste it in the project's wwwroot JS folder.
>
> **[3:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=186)** That opens the file and you can see all the minified code inside it.
>
> **[3:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=189)** I'll just close it and then open the layout page so I can add a script reference to it.
>
> **[3:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=197)** Near the bottom of the file, there are already a few script tags in place.
>
> **[3:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=201)** The last one in the list is a reference to an empty file for user code that was included with the project template.
>
> **[3:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=208)** That's where I'll write my code in just a minute.
>
> **[3:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=211)** That code will use objects declared in the signal R package I just downloaded, so I need to make sure I reference it before the user file.
>
> **[3:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=229)** I can now open the site.js file referenced below.
>
> **[3:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=233)** It's also in the wwwroot js folder.
>
> **[3:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=238)** You can see it doesn't yet contain any actual code.
>
> **[4:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=242)** The first thing I need to do here is create a new connection to the server and store it in a variable.
>
> **[4:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=247)** I'll do that by creating a new signal R, dot hub connection builder instance.
>
> **[4:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=263)** I can chain on a call to a method named with URL to specify the endpoint I want to connect to.
>
> **[4:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=275)** Remember that I use slash message hub when I configured the endpoint in the program dot CS file.
>
> **[4:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=281)** I'll then chain on a call to build, which will create the connection and store it in the variable I declared.
>
> **[4:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=290)** Okay, I now want to add the code that will handle calls from the server passing in new messages.
>
> **[4:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=296)** I do that by calling a method on the connection object named on.
>
> **[5:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=303)** The first parameter to on is the name of the method called by the server.
>
> **[5:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=308)** In the previous movie, I configured the server to call receive new message, so I'll add that string here as the first parameter.
>
> **[5:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=320)** The second parameter to on is a function that will handle the call from the server.
>
> **[5:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=325)** It will be past the new message as a parameter.
>
> **[5:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=331)** I'm going to paste in the body of the function to save some typing time.
>
> **[5:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=337)** This code first creates a new paragraph element and stores it in a variable.
>
> **[5:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=342)** I then set the text content of the element to the text of the incoming message.
>
> **[5:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=348)** Finally, I get a reference to the new messages element on the page and append the new paragraph element to it.
>
> **[5:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=355)** This effectively just appends new messages to the end of that list, as they come in.
>
> **[6:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=361)** I'll now call connection.start, which will start the connection and begin waiting for new messages to arrive.
>
> **[6:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=370)** I'm trying to keep this code as simple as possible to give you a sense of how it works without distracting you too much with extra code you would likely include in a production quality application.
>
> **[6:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=382)** I'm thinking specifically about error handling.
>
> **[6:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=385)** Notice that if I hover my mouse over the call to start, the popup lets us know that it returns a promise.
>
> **[6:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=392)** Promises are a form of asynchronous code in JavaScript and allow you to write callbacks to handle errors as well as the successful completion of the asynchronous code.
>
> **[6:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=402)** I'm not going to add any error handling code now, but I just wanted to point that out so you know where to do it when developing your production apps.
>
> **[6:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=412)** Okay, that's all the code I need to write to handle the calls from the server.
>
> **[6:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=417)** I now need to add some code to handle someone typing a new message and clicking the send button.
>
> **[7:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=423)** The ID for the button is send.
>
> **[7:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=425)** I'll first get a reference to it.
>
> **[7:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=432)** I'll then add an event listener for the click event.
>
> **[7:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=446)** The second parameter to add event listener is the function that will handle the event.
>
> **[7:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=451)** Inside it, I'll get the new message text from the message input element and store it in a variable.
>
> **[7:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=466)** I'll then use the connection object to invoke the post message method I added to the hub class on the server.
>
> **[8:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=481)** The parameter for the post message method is passed as the second parameter to invoke.
>
> **[8:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=488)** Because I'm explicitly handling the buttons click event, I'll add a call to event dot prevent default so the event isn't handled as it normally would be, otherwise.
>
> **[8:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=502)** That's all I need to add to send a new message to the server hub, which will then push the message out to all clients.
>
> **[8:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=510)** I'll start the app in the terminal and try it out.
>
> **[8:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=516)** In order to really see this in action, I'm going to open two browsers to the message board page.
>
> **[8:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=523)** I'll now add a new message to the browser on the left and click the send message button.
>
> **[8:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=533)** Notice that the new message gets appended to the message list in both browsers.
>
> **[8:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=538)** I'll try the same thing from the second browser.
>
> **[9:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=548)** That message also got pushed to both browsers, so it looks like everything is working as expected.
>
> **[9:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=553)** I've got a realtime connection between both browsers and the server, which allows the server to make calls to the clients and keep them updated with fresh data.
>
> **[9:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=563)** Pretty cool, I think.
>
> **[9:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-javascript-client?u=76281980&t=565)** And the next movie offers in a challenge to give you some practice, building a similar signal R application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[npm]] (2), [[Microsoft]] (2), [[HTML]] (1)
> **CLI Commands:** node (3), npm (2), make (2)
> **Env Vars:** html (1), npm (1), url (1)
> **Prerequisites:** install (3)
> **File Paths:** signalr.min.js (1), site.js (1)
> **Tools:** terminal (2)
> **UI Navigation:** open the (2)
> **Definitions:** is a  (2)

#### [Challenge: Create a SignalR application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=0)** (bright, upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=5)** - [Instructor] It's now your turn to practice adding real time functionality to an app with SignalR.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=11)** In this challenge, you'll create the start of a very basic sales dashboard.
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=16)** Users will have the ability to post the amount of new sales, and the largest sales will be pushed from the server to all clients and displayed in their browser.
>
> **[0:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=26)** Start by creating a new Razor Pages application you'll use to send and receive [[Real-Time]] sales data.
>
> **[0:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=33)** Add a new class to the project named SalesHub that will inherit from the built-in hub class.
>
> **[0:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=40)** Add a method to the sales hub class named PostNewSale that will receive all new sales data and alert all clients if a new sale is greater than $1,000.
>
> **[0:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=52)** On the site's homepage, add UI elements to allow users to submit new sales amounts and display the large sales received from the server.
>
> **[1:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=62)** In order to make it all work, you know you'll need to add some [[JavaScript]] code.
>
> **[1:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=67)** Add code to send new sales to the server and receive and display large sales.
>
> **[1:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=73)** Don't forget, you'll first need to install the SignalR package from [[npm]].
>
> **[1:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=78)** Finally, open two browsers simultaneously and test out the application.
>
> **[1:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=83)** Add sales data greater than $1,000, and verify that it's sent from the server to both clients.
>
> **[1:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-signalr-application?u=76281980&t=90)** In the next movie, I'll show you my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[JavaScript]] (1), [[npm]] (1)
> **CLI Commands:** make (1), npm (1)
> **Prerequisites:** you'll need (1), install (1)
> **Env Vars:** npm (1)
> **Cross-References:** in the next (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright, upbeat music) (1)

#### [Solution: Create a SignalR application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=0)** - [Instructor] I'll now show you how I solved the challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=8)** I could add the signal R functionality to an existing application, but for the sake of simplicity, I'll create a new Razor pages app.
>
> **[0:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=16)** I'll do that in my terminal with the command dotnet new webapp.
>
> **[0:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=21)** I'll put it in a folder named signalr-challenge.
>
> **[0:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=30)** With that created, I'll go into the new folder and open the project in VS code.
>
> **[0:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=40)** I'm first going to implement the server code.
>
> **[0:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=42)** I'll do that with a new hub class in a file named SalesHub.cs.
>
> **[0:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=50)** I first want to pull in the [[Microsoft]].AspNetCore.SignalR namespace.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=61)** I'll now declare the new SalesHub class and have it inherit from the base Hub class.
>
> **[1:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=72)** For the basic functionality in the challenge, I only need to add a single method to the class named PostNewSale.
>
> **[1:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=85)** It is an async method that takes a new sales amount as an integer parameter.
>
> **[1:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=90)** I only want the server to alert the client of new sales if the sale is greater than $1,000.
>
> **[1:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=111)** I'm using the SendAsync method to call ReceiveLargeSale on the client and pass it the sale amount.
>
> **[1:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=118)** Before I can call this new method, I need to enable SignalR for the project and register the new hub.
>
> **[2:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=125)** I do that in Program.cs.
>
> **[2:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=128)** I'll first enable SignalR with a call to AddSignalR.
>
> **[2:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=137)** A little further down in the file, I'll register the new hub class with a call to MapHub.
>
> **[2:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=149)** The class name is passed as a type parameter and I pass the server endpoint as a string parameter.
>
> **[2:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=155)** I'm now ready to add the user interface elements.
>
> **[2:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=158)** I'm going to add them to the homepage, so I'll open index.cshtml.
>
> **[2:44](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=164)** I'm going to update the text on the existing h1 tag and delete the paragraph tag below it.
>
> **[2:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=176)** I'll now paste in some [[HTML]], so you don't have to watch me type so much.
>
> **[3:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=183)** The first div I added, starting on line 11, adds the input element so users can send sales data to the server.
>
> **[3:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=191)** There's an input box with an ID of saleAmount and a button with an ID of send.
>
> **[3:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=197)** A little further down, on line 18, is another div where new sales data received from the server will be displayed.
>
> **[3:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=205)** It currently just has an h3 element, but the div has an ID of largeSales, and later I'll get a reference to that and a pin to its sales data sent from the server.
>
> **[3:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=216)** That's it for the UI.
>
> **[3:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=218)** I now need to add some [[JavaScript]].
>
> **[3:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=220)** That starts with installing the SignalR package using [[npm]].
>
> **[3:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=226)** The command to install it is npm install @microsoft/signalr.
>
> **[3:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=237)** That installed with no errors in a folder named node modules.
>
> **[4:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=246)** I'll drill down into node modules and copy the minified signalr code file.
>
> **[4:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=253)** I'll paste it in the wwroot.js folder in my project.
>
> **[4:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=265)** That also opens it in my editor, but I'll get a headache if I look at all that minified code, so I'll go ahead and close it.
>
> **[4:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=272)** However, I do need to add a reference to the JavaScript file and I'll do that in _layout.cshtml.
>
> **[4:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=285)** I'll add the script tag near the end of the file just before the reference to site.js that will contain the code I'm going to write.
>
> **[5:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=301)** I'm now ready to add some code to site.js.
>
> **[5:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=310)** All SignalR communication is done with a connection object.
>
> **[5:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=314)** That's the first thing I need to add here.
>
> **[5:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=321)** I create it with a call to HubConnectionBuilder.
>
> **[5:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=324)** I add the address of the endpoint I'm going to use by chaining on a call to withUrl.
>
> **[5:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=334)** Finally, I actually create the connection and store it in a variable with a call to build.
>
> **[5:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=342)** I'll now use the connection object to handle server calls to ReceiveLargeSale.
>
> **[5:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=356)** The second parameter to the own method is a function that will handle the server call.
>
> **[6:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=361)** I'll paste in the body of it.
>
> **[6:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=365)** This code creates a new paragraph element and adds the new sales amount to it before appending the element to the div with ID largeSales.
>
> **[6:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=374)** I'll now start the connection with a call to its start method.
>
> **[6:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=380)** The code I've written so far will handle calls from the server, but I need to add a little more to submit new sales data.
>
> **[6:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=388)** I'll do that by handling the click event for the button I added to the user interface.
>
> **[6:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=393)** I first get a reference to it with a call to getElementById.
>
> **[6:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=402)** I'll chain on a call to addEventListener and handle the click event.
>
> **[6:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=415)** Inside the handler function, I'll get the sales amount from the text box and store it in a variable.
>
> **[7:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=430)** I'll then invoke the PostNewSale method on the server passing it the new sales amount.
>
> **[7:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=444)** The server expects to be passed an integer, so I'm converting the string from the text box with a call to the JavaScript number constructor.
>
> **[7:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=453)** Since I handled it myself, I can now cancel the default event behavior.
>
> **[7:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=461)** I'm now ready to run the app and try it out.
>
> **[7:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=468)** Once it gets started, I'll open two browsers to the site's homepage.
>
> **[7:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=474)** In the first browser, I'll send in a new order for $1,200.
>
> **[8:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=481)** After clicking the button, you can see it was received by the server, which called all of the clients with the new sale amount.
>
> **[8:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=488)** I'll quickly add another sale to the other browser.
>
> **[8:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=493)** Its sale got reported to all clients as well.
>
> **[8:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=496)** As a final test, I'll enter a smaller sale amount below my $1,000 threshold.
>
> **[8:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=504)** As expected that didn't get sent out to the clients.
>
> **[8:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=508)** I hope you were able to solve the challenge as well.
>
> **[8:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=511)** For some extra SignalR practice, try exploring the API little more and implement some new scenarios that only send updates to a subset of all clients.
>
> **[8:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=521)** I think SignalR opens up exciting new ways to keep client applications up to date with fresh data and enables [[Real-Time]] notifications that developers previously didn't think possible with standard web applications.
>
> **[8:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=535)** Keep it in mind and I bet you'll find lots of use cases for it.
>
> **[9:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-signalr-application?u=76281980&t=540)** Up next, we're going to explore Blazer and I'll show you how you can apply your C# and .NET skills to client side [[Web Development]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[Microsoft]] (2), [[npm]] (2), [[HTML]] (1), [[Real-Time]] (1)
> **CLI Commands:** npm (2), node (2), dotnet (1), find (1)
> **Code Identifiers:** largesales (2), saleamount (1), withurl (1), getelementbyid (1), addeventlistener (1)
> **File Paths:** site.js (2), wwroot.js (1)
> **Env Vars:** html (1), api (1), net (1)
> **Tools:** terminal (1), vs code (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)


### 7. Creating Blazor Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Blazor](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=0)** - [Instructor] Being a full stack web developer often means learning lots of different technologies, and how to fit them together into a cohesive application that meets your user's needs.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=11)** Blazer is an [asp.net](https://asp.net) core technology that makes that at least a little easier by allowing you to develop full stack web applications entirely with C-sharp and .NET.
>
> **[0:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=23)** Blazer applications are composed primarily of Razor components.
>
> **[0:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=27)** They're self-contained user interface elements implemented with the Razor syntax I showed you earlier in the course.
>
> **[0:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=35)** Razor components also contain the programming logic to enable interactivity.
>
> **[0:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=40)** Blazer was first introduced in 2018 and has evolved rapidly, including some pretty significant changes introduced with .NET eight.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=49)** The biggest change is the introduction of multiple render modes.
>
> **[0:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=54)** The render mode describes where and how the razor components [[HTML]] is rendered before being handed off to the browser for presentation.
>
> **[1:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=63)** The static server render mode is the simplest and renders the HTML on the server before sending it over the network to the browser.
>
> **[1:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=72)** This is very much like what happens in a traditional server-side web app like you might build with Razor pages or MVC.
>
> **[1:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=79)** This mode doesn't include any interactivity with the Razor components.
>
> **[1:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=83)** The interactive server render mode also renders the HTML on the server, but it does allow for interactivity.
>
> **[1:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=91)** This might include things like interacting with the UI elements on a razor component in such a way that the app makes changes to data or other elements on the screen.
>
> **[1:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=101)** Blazer manages the interactivity over a SignalR connection to the server.
>
> **[1:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=106)** The SignalR plumbing is managed for you, so you don't have to configure your own hub as you saw in the previous chapter.
>
> **[1:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=114)** The third render mode is interactive web assembly.
>
> **[1:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=117)** In that mode, all interactivity is handled and executed on the client.
>
> **[2:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=123)** A version of the .NET runtime is downloaded to the browser and executed with web assembly.
>
> **[2:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=129)** It takes time to download the .NET assemblies to the browser, but once they're there, execution can be much faster since it doesn't require round trips to the server.
>
> **[2:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=140)** That brings us to the fourth render mode, interactive auto.
>
> **[2:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=144)** It really combines the best aspects of interactive server and interactive webassembly.
>
> **[2:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=150)** The application can begin running in interactive server mode, so the app is immediately responsive while that web assembly package is being downloaded.
>
> **[2:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=159)** Once that download is complete, the app can execute locally for the best ongoing performance.
>
> **[2:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=165)** In addition to the full stack version of Blazer, I'm going to show you, I want to at least mention a couple of other options available with Blazer.
>
> **[2:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=173)** The first is Blazer WebAssembly, which runs entirely in a browser.
>
> **[2:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=178)** This hosting model doesn't rely on a server at all beyond having a page that can deliver the Blazer assemblies to the browser.
>
> **[3:06](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=186)** Once they're on the client, the application can run in the browser completely disconnected from the server.
>
> **[3:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=192)** The other option I want to mention is Blazer Hybrid.
>
> **[3:16](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=196)** It lets you build native desktop and mobile applications with Blazer.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=200)** The Razor components in the app will be rendered in a web view on the client.
>
> **[3:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=205)** As you can probably tell, Blazer is a pretty big topic.
>
> **[3:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=209)** And in this chapter, I'll just introduce you to some of the most common scenarios and ways to use it.
>
> **[3:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=215)** Let's start with a look at the Blazer project templates you can choose from.
>
> **[3:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=219)** To see a list of the available Blazer templates, I'll use the command dotnet new list blazer.
>
> **[3:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=229)** That brings up two templates on my machine.
>
> **[3:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=232)** If you have some older versions of [asp.net](https://asp.net) core installed, you may also see additional templates that were available with those versions.
>
> **[4:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=240)** The first one in the list is the recommended template for most scenarios.
>
> **[4:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=245)** The template name is just Blazer web app, and the short name you use when creating a new project is simply Blazer.
>
> **[4:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=252)** This will create a new Blazer app capable of using any of the render modes I described earlier.
>
> **[4:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=258)** The second one is for web assembly standalone apps.
>
> **[4:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=262)** It comes pre-configured to run exclusively in a browser with web assembly and won't include much of the [asp.net](https://asp.net) core application configuration you normally find in the program.cs file, for example.
>
> **[4:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=275)** I'm going to create a project with the latest full stack template.
>
> **[4:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=279)** Let's first quickly look at the options available for it with the command dotnet new blazer --help.
>
> **[4:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=289)** Most of these options are available with lots of other [asp.net](https://asp.net) core projects, but the interactivity option is specific to Blazer.
>
> **[4:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=298)** You can apply it with -int or --interactivity.
>
> **[5:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=304)** It lets you specify which render mode to use for interactive components.
>
> **[5:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=309)** Specifying none will enable static server rendering only.
>
> **[5:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=313)** The web assembly and auto options will enable client side rendering.
>
> **[5:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=318)** One important thing to note about those options is the template will actually create two projects for you, one each for the server and client components.
>
> **[5:28](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=328)** Specifying server means rendering will happen on the server and updates will be sent to the client over a SignalR connection.
>
> **[5:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=336)** This is the default option and the one I'm going to use.
>
> **[5:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=339)** I'll create the new project with the command dotnet new blazer -o blazer app.
>
> **[5:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=351)** I'll now open the new project in VS Code.
>
> **[5:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/understanding-blazor?u=76281980&t=357)** In the next movie, I'll go over the project structure and how the app is composed of Razor components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (4), [[HTML]] (3)
> **Env Vars:** net (4), html (3), mvc (1)
> **Exercise Files:** template (4), download the (1)
> **CLI Commands:** dotnet (3), find (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **Cross-References:** earlier in (1), as you saw (1), previous chapter (1), in the next (1)
> **Definitions:** is an  (1), is a  (1)
> **Tools:** vs code (1)

#### [Developing a Blazor application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=0)** - [Instructor] Let's now walk through the new Blazer project I created in the previous movie and see how it's similar and different to some of the other [asp.net](https://asp.net) core projects we've already looked at in the course.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=11)** Let's start with the Program.cs file.
>
> **[0:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=14)** The contents of this file should look pretty familiar by now even though some of the specifics vary depending on the project type.
>
> **[0:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=22)** There are just a couple of lines in here that I want to specifically call out related to Blazer.
>
> **[0:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=27)** The first is the call to AddRazorComponents on line six.
>
> **[0:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=32)** The components that make up Blazer apps are officially known as Razor components.
>
> **[0:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=37)** However, you may occasionally hear people also refer to them as Blazer components.
>
> **[0:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=43)** The call to AddRazorComponents adds the services required to use them.
>
> **[0:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=48)** The project template also already chained on a call to AddInteractiveServerComponents.
>
> **[0:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=54)** That's a result of me taking the default value of server for the interactivity option I showed you in the previous movie.
>
> **[1:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=61)** It configures the app to handle interactivity on the server over a signal R connection.
>
> **[1:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=67)** A little further down on line 24, there's a call to MapRazorComponents.
>
> **[1:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=73)** It discovers the components available in your app as well as specifies the app's root component as a generic type parameter.
>
> **[1:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=81)** That generic parameter defaults to the app component.
>
> **[1:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=85)** Let's look at it next.
>
> **[1:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=87)** It's in the Components folder in a file named App.razor.
>
> **[1:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=92)** By convention, files containing Razor components end with the .razor extension.
>
> **[1:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=99)** This is the application's root component, and you can see it contains the top level [[HTML]] elements you would expect to find on any webpage.
>
> **[1:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=108)** Inside the head element, you see some standard meta tags and links to a few CSS files.
>
> **[1:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=114)** On line 12, there's a tag that inserts the Blazer head outlet component.
>
> **[2:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=120)** Notice that the syntax for nesting components is very much like the syntax for regular HTML elements.
>
> **[2:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=127)** The head outlet component is a built-in component that gathers page title and other head content from nested components and inserts them here in the rendered page.
>
> **[2:18](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=138)** A little further down on line 17, you can see a reference to a built-in [[JavaScript]] file required for Blazer apps.
>
> **[2:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=146)** Just above it is another nested component named Routes.
>
> **[2:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=151)** This is where the router will load components the users navigate to.
>
> **[2:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=156)** It's defined in another file in the Components folder named Routes.razor.
>
> **[2:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=161)** This component scans the assembly specified as the app assembly for component [[Routing]] information.
>
> **[2:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=168)** The other important bit of configuration here is the default layout attribute on line three.
>
> **[2:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=174)** The default layout is currently set to MainLayout.
>
> **[2:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=178)** It's defined as a file inside the Components Layout folder named MainLayout.razor.
>
> **[3:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=185)** This is conceptually similar to the layout files we've used with other project types in the course.
>
> **[3:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=192)** The root app component declares the topmost HTML elements and this layout component is really declaring the contents of the body tag that will get rendered on the client.
>
> **[3:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=204)** It lays out the general navigation for the site and includes a placeholder where content from body components can be loaded.
>
> **[3:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=211)** Another Razor component, the NavMenu component, is inserted on line five.
>
> **[3:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=217)** That component is declared in the NavMenu.razor file.
>
> **[3:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=221)** This is another example of how Blazer apps are really composed by creating smaller Razor components you combine to implement the functionality you need in a reusable way.
>
> **[3:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=232)** In the middle of this layout is a placeholder for the main body component.
>
> **[3:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=237)** It's declared with the @Body reference on line 14.
>
> **[4:01](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=241)** Let's now look at a couple of the components that might get loaded here.
>
> **[4:05](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=245)** The first I'll show you is the Home component.
>
> **[4:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=248)** It's declared in the Pages sub-folder in a file named Home.razor.
>
> **[4:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=253)** This component is very simple.
>
> **[4:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=255)** Not all components are routable, but this one is, so it uses the page directive at the top to define the route for the component.
>
> **[4:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=264)** The slash just means this will be the component loaded when users visit the homepage of the site.
>
> **[4:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=270)** The included page outlet component contains the text that will be rendered as the title element inside the head outlet component I showed you earlier.
>
> **[4:40](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=280)** Razor components use Razor syntax so they can contain C# code.
>
> **[4:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=285)** This one, however, is very simple and doesn't include any code.
>
> **[4:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=288)** For another example, I'll open the Counter.razor file in the Pages folder.
>
> **[4:54](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=294)** This component also includes a page directive and can be accessed by adding /counter to the site's base address.
>
> **[5:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=302)** Because I created this project with server side rendering, the render mode is set here to InteractiveServer.
>
> **[5:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=309)** The important thing to note about this is that render modes can be configured at the component level.
>
> **[5:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=315)** In the code block that begins on line 12, a current count variable is declared, which is displayed as part of the paragraph tag on line eight.
>
> **[5:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=325)** The IncrementCount function is set as the on-click handler for the button and it just increments the value of the current count variable.
>
> **[5:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=333)** This interactivity will be handled on the server and the necessary updates to the UI will be sent back to the client over a signal R connection.
>
> **[5:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=343)** Let's now add a very simple new component to the project.
>
> **[5:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=346)** Components are really just files with markup and code.
>
> **[5:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=350)** They use the same Razor syntax you've seen throughout the course.
>
> **[5:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=353)** You can add them with the .NET [[CLI]], but I actually think, in this case, they're easier to add to the project yourself.
>
> **[6:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=360)** I'm going to add a new greeting component.
>
> **[6:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=363)** I'll create a new file in the Components folder named Greeting.razor.
>
> **[6:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=371)** Inside the file, I'm just going to add a simple greeting inside an h3 tag.
>
> **[6:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=379)** I can add a code block at the bottom and include any C# code I need for the component.
>
> **[6:26](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=386)** I'm not going to add any code right now and we'll just use the component to display the greeting inside other components.
>
> **[6:33](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=393)** I do that by nesting it using the component name as a custom tag.
>
> **[6:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=398)** If I wanted to use my Greeting component here inside the Counter component, I can just add a tag reference to it.
>
> **[6:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=405)** I'll add it just above the Counter header.
>
> **[6:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=413)** Let's now run the app and try it out.
>
> **[6:58](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=418)** Once it gets started, I'll click the link in the output to open the app in a browser.
>
> **[7:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=423)** When it initially loads, we see the home component in the main content area.
>
> **[7:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=428)** Before I click on the link for the counter, I'm going to open the browser's developer tools and go to the Network tab.
>
> **[7:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=437)** I'll now click the Counter link on the site's navigation bar.
>
> **[7:21](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=441)** Notice on the Network tab, I now have a new web socket connection.
>
> **[7:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=445)** That's the signal R connection that was started behind the scenes to manage the interactivity for this component.
>
> **[7:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=458)** I can now click the counter button and you can see the current count value increasing without any additional network traffic.
>
> **[7:45](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=465)** It's all being handled by the single R connection.
>
> **[7:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=468)** One of the great things about Blazer is that the component code you write for interactivity is the same regardless of where the rendering happens.
>
> **[7:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=477)** In this movie, you've seen how a full stack Blazer app is configured for server side rendering.
>
> **[8:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/developing-a-blazor-application?u=76281980&t=483)** In the next movie, I'll show you a few small differences in web assembly apps, but also show you that the component code remains the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[ASP.NET Core]] (1), [[JavaScript]] (1), [[Routing]] (1), [[CLI]] (1)
> **Env Vars:** html (3), css (1), net (1), cli (1)
> **UI Navigation:** open the (3), navigate to (1), click on (1), go to (1)
> **Definitions:** is a  (2), known as (1), defined as (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)

#### [Creating a standalone Blazor WebAssembly application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=0)** - [Instructor] In this movie, I'm going to create a new standalone Blazor WebAssembly App and show you some of the similarities and differences between it and the full Stack Blazor app from the previous movie.
>
> **[0:11](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=11)** I'll create the new app in the terminal with the command dotnet new blazorwasm short for Blazor web assembly.
>
> **[0:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=19)** I'll add the dash O option to specify the directory where I want it created.
>
> **[0:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=31)** I'll open the new project in vscode.
>
> **[0:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=38)** There are a few small structural differences in this project, but let's start where we always start, in Program.cs.
>
> **[0:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=46)** Because this application will run with web assembly on the client rather than as a normal web application on a server, there's less to configure here.
>
> **[0:56](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=56)** And most of the web apps I've created so far in the course, the program.cs file creates a web application builder object.
>
> **[1:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=63)** In this project, on line five, it creates a web assembly host builder instead.
>
> **[1:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=70)** It then uses the root components property on that object to declare the app component as the root component and load it in place of the [[HTML]] element with the ID app.
>
> **[1:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=82)** Let's now take a look at the app component.
>
> **[1:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=85)** In the full Stack Blazor app, it was located inside a components folder.
>
> **[1:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=89)** Here it just sits at the root of the project.
>
> **[1:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=92)** In the full Stack Blazor app, the app component contained the top level HTML elements and a reference to a routes component.
>
> **[1:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=102)** In this WebAssembly version, the app component doesn't contain any HTML and includes what was effectively the contents of the routes component from the earlier project.
>
> **[1:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=112)** The [[Routing]] configuration here is not significantly different from what we saw earlier.
>
> **[1:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=117)** It still scans the project for routable components, and on line three specifies that the default layout is declared in the main layout file.
>
> **[2:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=127)** We still need those root HTML elements though.
>
> **[2:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=130)** For web assembly projects, those are declared in the index dot html file inside the www root folder.
>
> **[2:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=139)** This file contains some fairly standard meta and link elements inside the head tag.
>
> **[2:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=145)** Inside the body tag is where the root app component will be loaded.
>
> **[2:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=149)** Notice that the first div inside it on line 16 has an ID of app.
>
> **[2:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=155)** We saw earlier in the program dot CS file.
>
> **[2:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=158)** That's where the root component will be loaded.
>
> **[2:41](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=161)** The other content you see here is just to display a progress indicator until the component is fully loaded.
>
> **[2:47](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=167)** Let's now look at the main layout component.
>
> **[2:50](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=170)** It's in the layout folder.
>
> **[2:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=172)** The HTML in here is very similar to that in the full stack apps main layout file.
>
> **[2:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=179)** It loads a nav menu component on the left sidebar and a little further down on line 13, there's a body directive indicating where content components will be loaded.
>
> **[3:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=190)** Let's now look at one of those content components.
>
> **[3:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=192)** Inside the pages folder, at the root of the project, there's a counter component.
>
> **[3:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=197)** Just like we saw in the Full Stack app.
>
> **[3:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=200)** This component implements the same counter functionality we saw in the full Stack app, and the code in this file is identical to the earlier version with one exception.
>
> **[3:30](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=210)** This one doesn't include a render mode directive at the top of the file.
>
> **[3:35](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=215)** Because this is a Web Assembly Blazor app, we already know all of the components will be rendered on the client.
>
> **[3:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=222)** Let's run the app and try out the counter.
>
> **[3:46](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=226)** Once it gets going, I'll click the link in the output to open it in a browser.
>
> **[3:51](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=231)** Before I click on the counter link in the navigation bar, I'm going to open the browser's dev tools and go to the network tab.
>
> **[3:59](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=239)** I'll now click the counter link and then click the button on the component a few times to increase the counter value.
>
> **[4:10](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=250)** Notice that this generates no network traffic in the dev tools.
>
> **[4:14](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=254)** When I did this in the Full Stack app, you saw it establish a web socket connection to the server where the UI updates were rendered.
>
> **[4:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=262)** Here you don't see anything.
>
> **[4:23](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=263)** All of the processing and rendering is happening on the client.
>
> **[4:27](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=267)** The best part is that the component code is the same for both apps.
>
> **[4:31](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=271)** Okay, next up, it's your turn to practice creating your own Blazor application.
>
> **[4:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/creating-a-standalone-blazor-webassembly-application?u=76281980&t=276)** Stay tuned for the final challenge of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[Routing]] (1)
> **Env Vars:** html (5)
> **UI Navigation:** open the (2), click on (1), go to (1)
> **Definitions:** short for (1), is a  (1)
> **CLI Commands:** dotnet (1)
> **Cross-References:** earlier in (1)
> **Tools:** terminal (1)
> **Analogies:** just like (1)

#### [Challenge: Create a Blazor application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-blazor-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-blazor-application?u=76281980&t=0)** - [Instructor] In this final challenge of the course, I want you to use the .NET [[CLI]] to create a new full-stack Blazor application configured for server-side rendering.
>
> **[0:15](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-blazor-application?u=76281980&t=15)** Add a new component to the Components folder named ThankYou.
>
> **[0:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-blazor-application?u=76281980&t=19)** The component should just contain some simple markup thanking users for visiting the application.
>
> **[0:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-blazor-application?u=76281980&t=25)** Next, add the new component to the Counter and Weather components that were included in the Blazor project template.
>
> **[0:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-blazor-application?u=76281980&t=32)** You can just add it near the bottom of those components, so the thank you message appears near the end of those pages.
>
> **[0:38](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-blazor-application?u=76281980&t=38)** Finally, run the app with the .NET CLI, and verify that the new reusable component is nested in the other components and being displayed correctly on the screen.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/challenge-create-a-blazor-application?u=76281980&t=49)** In the next movie, I'll show you my solution for the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2)
> **Env Vars:** net (2), cli (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a Blazor application](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=0)** - [Instructor] I'll now walk you through how I solve the Blazor challenge.
>
> **[0:09](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=9)** I'll start by creating a new app with the .NET [[CLI]].
>
> **[0:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=13)** The short name for the Blazor full stack template is just Blazor, so the command I'll use is dotnet new blazor.
>
> **[0:22](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=22)** I'll put the new project in a folder named blazor-challenge.
>
> **[0:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=29)** I'm not going to include any other options.
>
> **[0:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=32)** Remember that the default configuration is for server side interactivity and rendering.
>
> **[0:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=37)** That's what I want here, so this is all I need to pass to the project template.
>
> **[0:43](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=43)** I'll open the project in VS Code.
>
> **[0:49](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=49)** I'll expand the Components Pages folder, and you can see that the template includes a few routable components to get you started.
>
> **[0:57](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=57)** I'm going to create my new thank you component in the Components folder rather than the Pages folder, because it won't be routable.
>
> **[1:04](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=64)** I just plan to use it as a bit of reusable markup.
>
> **[1:08](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=68)** I'll add a new file named ThankYou.razor.
>
> **[1:13](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=73)** I don't need to include a page directive at the top since the component won't be routable.
>
> **[1:19](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=79)** I'll just add a paragraph tag with a short thank you message.
>
> **[1:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=89)** I'm not going to add a code block to the component, but as a bonus challenge, you could experiment with adding some interactivity to yours.
>
> **[1:37](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=97)** I want to use this new component inside a couple of the components included with the project template.
>
> **[1:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=102)** I'll first open the counter component from the pages folder.
>
> **[1:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=108)** I'll nest the thank you component after the last bit of markup in this file.
>
> **[1:53](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=113)** I include it by using the component name as if it were another [[HTML]] level.
>
> **[2:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=123)** The beauty of components is that they're reusable, so I'll also go ahead and add the thank you component to the end of the weather component.
>
> **[2:12](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=132)** Just before the code block near the end of this file, I'll nest the new component.
>
> **[2:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=140)** Let's now run the app and see how it looks.
>
> **[2:24](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=144)** I'll click the link in the output to open the app in a browser.
>
> **[2:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=149)** I'll click on the link for the Counter.
>
> **[2:32](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=152)** There you can see the thank you message just below the Click me button.
>
> **[2:36](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=156)** We should also receive it on the Weather component.
>
> **[2:39](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=159)** It shows up correctly there as well.
>
> **[2:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=162)** Blazor is a big topic and one of [[Microsoft]]'s most exciting new web technologies.
>
> **[2:48](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=168)** I've only scratched the surface of what you can do with it, but I hope I've given you a sense of the possibilities when creating full stack web applications entirely in C# and composing apps from reusable components.
>
> **[3:02](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/solution-create-a-blazor-application?u=76281980&t=182)** Both have the potential to be huge time savers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), [[HTML]] (1), [[Microsoft]] (1)
> **UI Navigation:** open the (3), click on (1)
> **Exercise Files:** template (4)
> **Env Vars:** net (1), cli (1), html (1)
> **CLI Commands:** dotnet (1)
> **Tools:** vs code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps on your learning journey](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=0)** - Congratulations on finishing the course.
>
> **[0:03](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=3)** I've shown you a lot of things in this course, but there's always more to learn.
>
> **[0:07](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=7)** You should feel confident evaluating the requirements for your next project and deciding which [ASP.NET](https://ASP.NET) Core technologies will help you satisfy those requirements.
>
> **[0:17](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=17)** You also know enough to get started on a new project.
>
> **[0:20](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=20)** However, be prepared to dig deeper into the details and continue learning.
>
> **[0:25](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=25)** [[LinkedIn]] Learning has lots of great courses to help you do that.
>
> **[0:29](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=29)** You should also do your best to put your new skills into practice as soon as possible.
>
> **[0:34](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=34)** Solving real world problems will reinforce the knowledge you have and naturally lead you to the topics you're ready to explore Further.
>
> **[0:42](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=42)** On that note, I'll invite you to download and share your certificate of completion, ask any questions you have in the course Q and A, and follow me on LinkedIn.
>
> **[0:52](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=52)** I hope you enjoyed the course and found it helpful.
>
> **[0:55](https://www.linkedin.com/learning/learning-asp-dot-net-core-mvc-razor-pages-web-apis-other-foundations/next-steps-on-your-learning-journey?u=76281980&t=55)** Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[ASP.NET Core]] (1)
> **Env Vars:** asp (1), net (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - congratulations (1)


## Skills Covered

- ASP.NET
- ASP.NET Razor
- ASP.NET Web API
- ASP.NET MVC

## Path Context

### In [[Getting Started as an ASP.NET Core Developer]]
**1 of 9** | [[C- and .NET Essential Training]] →

## Appears In

- [[Getting Started as an ASP.NET Core Developer]]

## Related Courses

_Courses sharing skills:_

- [[ASP.NET Core- Razor Pages]] — ASP.NET Razor

---

[↑ Back to top](#)