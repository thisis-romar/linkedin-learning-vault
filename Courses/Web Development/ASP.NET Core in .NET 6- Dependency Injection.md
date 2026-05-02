---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: asp-dot-net-core-in-dot-net-6-dependency-injection
url: "https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection"
duration_minutes: 47
duration: 47m
level: Intermediate
updated: 4/29/2022
learners: 27378
skills:
  - ASP.NET Core
  - Dependency Injection
exercise_files: true
github: "https://github.com/LinkedInLearning/asp-net-core-in-dotnet-6-dependency-injection"
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQE_rmyIpbOtCA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1651080063253?e=2147483647&amp;v=beta&amp;t=kuP6Mr4L0IBNaW_8tWzLSbEDa8uxtLDzrEOjgObUNpo"
linkedin_topic: Web Development
learning_paths:
  - '[[Getting Started as an ASP.NET Core Developer]]'
prev_courses:
  - '[[ASP.NET Core- Token-Based Authentication]]'
next_courses:
  - '[[ASP.NET Core- Building a GraphQL API]]'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":7,"total":9,"prev":"ASP.NET Core- Token-Based Authentication","next":"ASP.NET Core- Building a GraphQL API"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/asp-net-core
  - skill/dependency-injection
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/ASP.NET%20Core%20in%20.NET%206-%20Dependency%20Injection.md)

![ASP.NET Core in .NET 6: Dependency Injection](https://media.licdn.com/dms/image/v2/C4D0DAQE_rmyIpbOtCA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1651080063253?e=2147483647&amp;v=beta&amp;t=kuP6Mr4L0IBNaW_8tWzLSbEDa8uxtLDzrEOjgObUNpo)

# ASP.NET Core in .NET 6: Dependency Injection

> If you’re a .NET developer or looking to enter the field, it’s essential to have a working understanding of dependency injection, a software development design pattern that allows for having objects that are not dependent on each other. In this course, .NET C# programmer David Grace provides an introduction to dependency injection, from configuration to implementation. He also talks through the ad

> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection) | 47m | Intermediate | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Dependency injection overview](#dependency-injection-overview)
  - [What you should know](#what-you-should-know)
  - [Setting up your environment](#setting-up-your-environment)
- [**1. What Is Dependency Injection?**](#1-what-is-dependency-injection) (2 videos)
  - [What is dependency injection?](#what-is-dependency-injection)
  - [Service lifetimes](#service-lifetimes)
- [**2. Configuring Dependency Injection in ASP.NET Core**](#2-configuring-dependency-injection-in-aspnet-core) (3 videos)
  - [Setting up the services](#setting-up-the-services)
  - [How to configure dependency injection](#how-to-configure-dependency-injection)
  - [Other dependency injection configuration methods](#other-dependency-injection-configuration-methods)
- [**3. Using Dependency Injection in ASP.NET Core**](#3-using-dependency-injection-in-aspnet-core) (6 videos)
  - [How to inject services into a controller](#how-to-inject-services-into-a-controller)
  - [Inject services in other components of a web application](#inject-services-in-other-components-of-a-web-application)
  - [How to set up a hosted service](#how-to-set-up-a-hosted-service)
  - [Disposing of a service](#disposing-of-a-service)
  - [Challenge: Set up an application using dependency injection](#challenge-set-up-an-application-using-dependency-injection)
  - [Solution: Set up an application using dependency injection](#solution-set-up-an-application-using-dependency-injection)
- [**4. Common Errors**](#4-common-errors) (4 videos)
  - [Forgetting to add a service](#forgetting-to-add-a-service)
  - [Injecting services with different service lifetimes](#injecting-services-with-different-service-lifetimes)
  - [Circular dependency](#circular-dependency)
  - [Ambiguous constructors](#ambiguous-constructors)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue your ASP.NET Core journey](#continue-your-aspnet-core-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Dependency injection overview
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=0)** - If you're looking for a job as a .NET developer, it is essential that you understand what dependency injection is and how it works.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=7)** It's a popular feature in software development that allows for having entities that are not dependent on each other.
>
> **[0:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=12)** I'm David Grace and I've been a .NET, C# programmer for over 15 years.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=16)** And I work with dependency injection regularly.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=19)** We'll have a look at how to set up and configure dependency injection and walk you through the different service lifetimes and how they work.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=26)** Afterwards, we'll implement dependency injection into a real-life example using an [ASP.NET](https://ASP.NET) Core MVC application to show you how to inject a service and use the methods within it.
>
> **[0:36](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=36)** Then, you'll have the opportunity to try it out for yourselves.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=39)** Finally, we'll talk you through some of the common errors that can occur when setting up dependency injection.
>
> **[0:44](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=44)** So come and join me as we talk through dependency injection in [ASP.NET](https://ASP.NET) Core and explore the benefits that will make a complex system look simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (6), [[ASP.NET Core]] (2), feature (1), [[Software Development]] (1), application (1)
> **Env Vars:** net (4), asp (2), mvc (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** make (1)
> **Speakers:** - if (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=0)** - [Instructor] The concepts you should know to make the most out of this course, let's take a little bit of time to go through them.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=6)** You should have a fair amount of experience coding in C#.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=9)** We'll be using variables, fields, and access modifiers within the course, to name a few.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=15)** As well as that, you'll need to have an understanding of object-oriented principles and how they work, in particular, knowledge of classes, interfaces, as well as inheritance is vital for understanding dependency injection.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=28)** You'll also need to know how a constructor works and how it can be overloaded.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=32)** You should also have some experience in working with an [ASP.NET](https://ASP.NET) Core application.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=37)** There are some big changes to its predecessor, [ASP.NET](https://ASP.NET), including the way it is configured.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=42)** Knowledge in the MVC design pattern is also required, as we'll be using an [ASP.NET](https://ASP.NET) Core MVC web application to demonstrate dependency injection.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=51)** You should know what a controller, action model, and a view is.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=55)** Finally, you should be familiar with the Visual Studio IDE.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=59)** I will be using Visual Studio throughout the course to demonstrate dependency injection examples.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=64)** If you are following along at home, make sure you have it installed on your machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (3), [[ASP.NET Core]] (2), application (1), [[ASP.NET]] (1), web application (1)
> **Env Vars:** asp (3), net (3), mvc (2), ide (1)
> **URLs:** [asp.net](https://asp.net) (3)
> **CLI Commands:** make (2)
> **Tools:** visual studio (2)
> **Prerequisites:** you'll need (1), make sure you have (1)
> **Speakers:** - [instructor] (1)

#### Setting up your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=0)** - [Instructor] Before we get started, you'll need to install some software onto your machine.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=4)** Firstly, download the Visual Studio IDE.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=7)** You can use other IDE such as Visual Studio Code if you wish but I will be using Visual Studio.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=14)** You can download Visual Studio from Microsoft's website, either the free community edition or the paid professional and enterprise editions will work for this course.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=23)** I will be using a Windows machine with Visual Studio 2022 version 17.0.5.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=30)** If you're using an older copy of Visual Studio such as 2019, you'll need to download Visual Studio 2022 because .NET 6 projects are not supported in earlier versions.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=40)** Visual Studio versions beyond 2022 should support the examples in this course.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=46)** You'll need to download the .NET 6 SDK.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=49)** If you have Visual Studio 2022 installed, the SDK should already be installed.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=54)** You can run this command line, .net hyphen hyphen list hyphen SDK to see which SDKs are installed.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=63)** If any of the listed versions begin with a six and it's version 6.0 0.101 or above, you should be fine.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=71)** However, if you haven't got the right version or the command line froze in error, the likelihood is you need to install the SDK.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=77)** You could do that by searching for .net six SDK in a search engine.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=81)** It would normally be the first result.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=86)** From there, you can install the SDK.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=88)** Just remember to install the SDK and not the run time.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=92)** Also ensure that it's version 6.0 0.101 or above.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=98)** There are a number of course videos where you can download the source code to follow along on your machine.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=103)** The source code is located in a GitHub repository and is available at this URL.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=109)** Each course video that has a code (indistinct) is located within a branch of that repay.
>
> **[1:55](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=115)** The branch in naming convention begins with the chapter number followed by an underscore followed by the video number.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=121)** If there is a B after the video number, that is the code state before the video begins.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=126)** This is ideal if you want to follow along and code as you watch the video.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=129)** If an E appears there, that is the code state once a video finishes.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=134)** This is beneficial if you want to experiment with what you've learnt from the video.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=138)** If neither the B or the E appears there, it means there's no coding changes throughout the video's duration.
>
> **[2:24](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=144)** One way to download the source code from GitHub onto your machine is to pick the appropriate branch, go to code and download zip.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=154)** We will go ahead and download this onto our desktop.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=158)** Once it's downloaded, if you're using a Windows machine and have Wind Runner installed, you can right click and go to Extract Files.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=165)** Select the folder location you wish to extract the files to.
>
> **[2:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=169)** It's best to shorten the folder name otherwise the application may not run.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=173)** Then, click okay.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=174)** This will download the source files onto your machine.
>
> **[2:58](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=178)** Then it's a case of going into your download files and finding the .net six dot di dot SLN file.
>
> **[3:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=185)** By clicking on it, it should open the solution in Visual Studio 2022.
>
> **[3:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=192)** Once it's open in Visual Studio 2022, you'll be greeted with the projects and files in your solution explorer.
>
> **[3:18](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=198)** This normally appears on the right hand side of a Visual Studio solution.
>
> **[3:22](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=202)** There is a Services Class library and an MVC project.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=206)** Make sure that the MVC project is set up to run as a startup project.
>
> **[3:30](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=210)** It will be highlighted in bold if it is.
>
> **[3:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=212)** If it's not, right click on the project and select set a startup project.
>
> **[3:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=218)** When you're ready to run the web application, you can click on the play icon in your Visual Studio solution.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=226)** This will build and run the application.
>
> **[3:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=229)** A browser window should automatically open to local host code on 8 0 0 1.
>
> **[3:54](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=234)** And you should be greeted with a web application is working message.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=237)** If a browser window doesn't open, you should still be able to navigate to that URL and be greeted with the same message.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[GitHub]] (2), application (2), web application (2), [[Microsoft]] (1)
> **Tools:** visual studio (13), command line (2), github (2)
> **Env Vars:** sdk (7), ide (2), net (2), url (2), mvc (2)
> **Exercise Files:** download the (5), source code (3)
> **Prerequisites:** install (4), you'll need (3), set up (1)
> **Versions:** version 6 (2), 0.101 (2), version 17 (1), 0.5 (1)
> **UI Navigation:** go to (2), click on (2), select the (1), open the (1)
> **Definitions:** is a  (2)


### 1. What Is Dependency Injection?

[↑ Back to Table of Contents](#table-of-contents)

#### What is dependency injection?
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=0)** - The Inversion of Control, or IoC design principle, is defined as given responsibility for control or logic to something else such as a framework.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=10)** Dependency injection, or DI, is a design pattern that is part of the IoC design pattern allows dependent objects of a class to be created elsewhere rather than in the class itself.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=21)** Take this example, a customer wishes to purchase a baseball bat from an online store.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=27)** However, before they purchase it, they want to know how much they're paying for it.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=31)** At this point, they aren't interested in the shipping costs.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=33)** However, the weight of the product would have to be used to calculate shipping costs should they wish to purchase it.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=39)** If the product service was dependent on the shipping cost service, it would have to create the shipping cost service when creating the product service even if the customer didn't want to buy it.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=49)** However, with dependency injection, we can keep our product and shipping cost services as separate entities.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=55)** By doing this, it means the customer can view the product, and the system doesn't have to work out what the shipping costs are.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=61)** [ASP.NET](https://ASP.NET) Core has a built in DI container and is designed to support dependency injection.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=67)** The way it works is that you register the classes as services in your [ASP.NET](https://ASP.NET) Core application.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=72)** These services are registered as part of your web application's DI container as a service descriptor instance.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=79)** Each registered service is added as a collection to an IServiceCollection instance.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=85)** Once the application has started, these services can be resolved using an IServiceProvider instance.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=92)** This instance looks at the registered service to resolve them at runtime.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=96)** Dependency injection is a popular design pattern in software programming.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=100)** This is because it allows us to reduce dependencies and decouples related classes.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=105)** This allowed software to grow over time with less boundaries.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=109)** It can also be used in many different parts of the application's life cycle.
>
> **[1:53](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=113)** Maybe you need to display how many products a customer has added to their shopping cart, or whether they have purchased a product previously, dependency injection caters for both scenarios.
>
> **[2:03](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=123)** In addition, it has support for different service lifetimes where we can specify when a new service is created, and when it is disposed of.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (6), [[Dependency Injection]] (5), application (3), [[ASP.NET Core]] (2), web application (1)
> **Env Vars:** asp (2), net (2)
> **Definitions:** is a  (2), defined as (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### Service lifetimes
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=0)** - We're now going to look at the different Service Lifetimes independency injection.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=4)** We mentioned that [ASP.NET](https://ASP.NET) Core has a built-in DI container, and it's designed to support dependency injection.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=10)** We are going to have a look at the different Service Lifetimes so that we can register the classes to the [ASP.NET](https://ASP.NET) Core DI container classes can be registered as services with the following Service Lifetimes Singleton, Scoped, and Transient.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=25)** Let's look at each one individually Singleton Service Lifetime classes are only created once per application.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=33)** Once it's been created, the instance will be alive until the service is disposed of this is normally disposed of when the application stops.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=42)** Just say we are selling a baseball bat for 20 dollars we would like to display this information to any customer who requests it.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=49)** A Singleton Service Lifetime class can be used to store product information such as the name, and the price with a Singleton service lifetime class.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=57)** It means we could store the information in the web application without having to call an external resource such as a database.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=63)** Every time we need it.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=66)** Scope Service Lifetime classes are initialized.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=68)** When a Scope is created, the instance will be alive until the scope has been disposed of.
>
> **[1:14](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=74)** In [ASP.NET](https://ASP.NET) Core, a scope is either defined for a life cycle of a HTTP request, or it can be explicitly defined looking at an example of how a HTTP you request works in [ASP.NET](https://ASP.NET) Core.
>
> **[1:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=87)** If a user has requested a webpage the scope would begin once you've requested the webpage, and would end once the webpage has finished loading.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=95)** If another user was requesting the same webpage at the same time, a separate scope would be created.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=102)** Scope Service Lifetime classes can also be explicitly defined.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=106)** And one example of this is in a background service just say we wanted to email a report of all the products that we are selling for less than 20 dollars.
>
> **[1:55](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=115)** In this instance, we will create a task within our background service to do this.
>
> **[1:59](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=119)** The scope would be created when the task begins, and will be disposed of when the task ends.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=125)** The final Service Lifetime is Transient.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=128)** Transient Service Lifetime classes have new instances every time they're requested.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=133)** This means that these instances cannot be shared in different components of the application.
>
> **[2:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=137)** They are ideal for retrieving information from a database, or an API.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=142)** An example of this is requested a product information such as the name, and price.
>
> **[2:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=147)** If we are retrieving this information from either a database, or API.
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=151)** We can retrieve this information, and store it in a separate class.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=155)** That means we no longer need the service, and it can be disposed of.
>
> **[2:39](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=159)** Having these different Service Lifetime classes means that some classes are unable to depend on each other, any Scope, or Transient Service Lifetime classes can rely on any service regardless of their lifetime, but it's a different story for a Singleton Service Lifetime class.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=174)** It's fine to inject a Transient Service Lifetime class as it knows, just to create a new instance of the service but with a Scope Service Lifetime class it wouldn't know which Scope service belongs to.
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=186)** As a result, it will throw an error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (4), application (3), database (3), product (2), api (2)
> **Env Vars:** asp (4), net (4), http (2), api (2)
> **URLs:** [asp.net](https://asp.net) (4)
> **Analogies:** such as (3)
> **Definitions:** means that (2)
> **Cross-References:** we mentioned (1)
> **Speakers:** - we (1)


### 2. Configuring Dependency Injection in ASP.NET Core

[↑ Back to Table of Contents](#table-of-contents)

#### Setting up the services
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=0)** - [Presenter] We are now going to set up the services that we are going to use for dependency injection.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=5)** To demonstrate this, we're going to set up an [ASP.NET](https://ASP.NET) Core MVC web application in .NET 6.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=11)** The web application will be an online shopping website where we are selling merchandise.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=16)** Before we set up our services, we need to set up some models.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=19)** The first model class will represent a product, and it will contain properties such as the name, a unique stock keeping unit code, or sku, and the price.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=28)** The other model class will represent the shopping cart.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=31)** The shopping cart will contain a unique identifier to allow us to separate each customer's shopping cart.
>
> **[0:36](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=36)** In addition, it will store all the items that have been added to the shopping cart.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=40)** Then we move on to our services.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=42)** The services will be classes that will be added to the DI container.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=46)** This includes a storage service, which will be used as a database to store product and shopping cart data.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=52)** In addition, we will add a shopping cart service which can be used to add a product to a shopping cart.
>
> **[0:58](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=58)** Finally, we will add a product service where we can get specific information about a particular product.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=64)** Now looking at our services in more detail, with the storage service, we want to store all the data that we're going to be using for our online shopping web application.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=73)** Think of it as a database for this example.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=77)** It will store all the products, that will be available to buy on the website, as well as any shopping cart records that customers have been using to add products.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=86)** As this information will be used by any user hitting the web application, we will set this up with a singleton service lifetime.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=93)** Next, we will have a look at the shopping cart service.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=97)** With our shopping cart service, we could have multiple purposes for it.
>
> **[1:41](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=101)** In the site layout, we wish to add a product to the shopping cart.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=106)** We also wish to display the number of products that a customer has added.
>
> **[1:50](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=110)** As we have requirements to use this service in more than one of the web applications components, we will set this up with a scope service lifetime.
>
> **[1:58](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=118)** Finally, we will look at the product service.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=121)** We will use this service to get a product based on its unique sku identifier.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=126)** When we have retrieved the product information from the storage service, it will be stored in a separate class.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=132)** As a result, we no longer need the service, and it can be disposed of.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=136)** As a result, we will set this service up with a transient service lifetime.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=141)** Just a note that each service inherits an interface with the members and properties we wish to expose.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=146)** So the storage service inherits the IStorageService, the shopping cart service inherits the IShoppingCartService, and the product service inherits the IProductService.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=158)** We will be using the interface as a service when we add it to the DI container.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=163)** We now have our services set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (10), web application (4), [[Microsoft Products|Products]] (3), database (2), data (2)
> **Prerequisites:** set up (5)
> **Env Vars:** net (2), asp (1), mvc (1)
> **Analogies:** such as (1), think of it as (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Warnings:** note that (1)
> **Speakers:** - [presenter] (1)

#### How to configure dependency injection
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=0)** - [Instructor] Now we're going to go ahead and configure these classes up as services in our [ASP.NET](https://ASP.NET) Core Web Application using the appropriate Service lifetimes.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=8)** In .NET 6, there are some major changes that focused around cleaner code.
>
> **[0:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=12)** With [ASP.NET](https://ASP.NET) Core Web Application that target .NET 6 and beyond, we're able to add the configuration to the Program class without the need for the Startup class.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=21)** Prior to .NET 6, [ASP.NET](https://ASP.NET) Core configuration would typically take place in a Startup class.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=27)** We'll show you how to add your services for both types of Web Applications as there are some subtle differences.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=33)** We need to ensure that each class inherits an Interface and contains the members we wish to use.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=38)** The Interface will be exposed as a service to be used in Dependency Injection.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=42)** The reason why we expose the Interface is because an Interface only exposes the name and return types of its members.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=48)** The Interface doesn't care about what each member does or what dependencies it relies on.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=52)** As a result, if we need to add a dependency to a class like the Product Service dependent on the StorageService, any other classes that are dependent on the StorageService will not need to be changed.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=64)** This is an [ASP.NET](https://ASP.NET) Core NBC App.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=67)** And if you're using .NET 6 or above, you may not have a Startup class.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=72)** Your configuration would've been moved to the Program class.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=75)** In addition, you'll realize that there is no namespace, no class or no main method.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=80)** This is as a result of C# 10 console template changes for .NET 6.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=85)** The features that make this happen are top-level statements global using directives and implicit using directives.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=92)** This means if you are using a project that uses the console template, you only have to write the body of the main method in your Program class.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=104)** We have our builder instance and this has a Services property.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=108)** Within our Services property, we have Service Lifetime Extension Methods where we can add a Service to our DI container and assign the appropriate Service Lifetime.
>
> **[1:57](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=117)** These methods are AddSingleton, AddScoped and AddTransient.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=131)** Go ahead and add this Services which are contained in our Services Library.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=135)** First, we're at the Storage Service and assign this as a Singleton service lifetime.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=140)** Let's use the AddSingleton extension method from our ServiceCollection.
>
> **[2:24](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=144)** So we find the AddSingleton extension method.
>
> **[2:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=147)** We pass in the IStorageService as a Service and the StorageService as the implementation.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=153)** Next, we'll go ahead and add our ShoppingCartService.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=157)** For this, use the AddScoped extension method from our ServiceCollection to assign it with a Scoped service lifetime.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=163)** So we get our IServiceCollection by calling builder.Services and we find the AddScoped extension method.
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=168)** Passing the IShoppingCartService as the service and the ShoppingCartService as the implementation.
>
> **[2:57](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=177)** Finally, we'll use the AddTransient extension method to add our ProductService.
>
> **[3:01](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=181)** This will assign the Service with the Transient service lifetime.
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=186)** So we get our IServiceCollection by calling builder.Services.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=189)** We find our AddTransient, passing the IProductService as the Service and ProductService as the implementation.
>
> **[3:18](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=198)** And there we are.
>
> **[3:18](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=198)** We have successfully added our Services to the DI container.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=203)** If you're using .NET 5 or have a Program and Startup class in your application, you add Services in a similar way.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=211)** In the Startup class, there is a ConfigureServices method.
>
> **[3:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=214)** Within that an IServiceCollection instance is passed in as a parameter.
>
> **[3:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=222)** In this instance, we can call the same extension methods to add our Services to the DI container and define what Service lifetime they should be.
>
> **[3:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=229)** So we call AddSingleton for the StorageService, addScoped for the ShoppingCartService, addTransient for the ProductService.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (4), web application (2), web (1), [[Dependency Injection]] (1), product (1)
> **Env Vars:** net (10), asp (4), nbc (1)
> **CLI Commands:** find (3), make (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **Code Identifiers:** addscoped (1), addtransient (1)
> **Exercise Files:** template (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** configure (1)

#### Other dependency injection configuration methods
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=0)** - [Instructor] We've talked about the AddSingleton AddScoped and AddTransient extension methods.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=5)** Let's have a look at these overloads for these methods and how we can use them to configure dependency injection in our [asp.net](https://asp.net) call web application.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=13)** When adding a service to the DI container we can pass in the type as a generic type into the method.
>
> **[0:18](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=18)** This is how we did it already.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=20)** Alternatively, we can pass in the type as a parameter.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=23)** Whichever way we do it, we're also able to override the default behavior and run a delegate to create an instance of our service.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=31)** For example, there may be many customers that have added products to their shopping cart.
>
> **[0:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=35)** We need a way of defining which shopping cart belongs to which customer, one way we can do that is to pass in a unique identifier which defines which shopping cart belongs to which customer.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=45)** That means we can treat each shopping cart separately, and it makes it easier to assign to a particular customer.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=51)** Let's go ahead and look at the different ways of configuring dependency injection.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=55)** On the screen we could see that we have our services configured by using a generic type.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=60)** Now we're going to go ahead and change this bypass, and in the type these parameters, into the method.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=65)** We would do this for the storage service.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=67)** We need to wrap around the type of operator, if we are passing in the types as parameters.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=77)** You can also do that for the shopping cart and product services if you wish.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=82)** The benefits of doing it this way, is that it's easier to register services dynamically rather than having to register each service one by one.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=92)** Next, we're going to override a default behavior of adding a service to the DI container.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=98)** Looking at the shopping cart service, we're going to go ahead and add a new parameter.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=102)** It will be called ID, and we need to ensure that its value is set to the private field.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=108)** So we give it a type of Guid, and then we set the ID, that's passed in as the parameter to the private field.
>
> **[1:56](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=116)** Going back to our program class, if we were to leave the shopping cart service configuration like this, it refer a runtime exception when the application is started.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=125)** What we can do is part in a parameter when using the AddScoped method for our shopping cart service.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=132)** For this we have to pass in an instance of the service provider, as a parameter for the delegate.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=146)** The parameter is a delicate which expects an instance of the service as its return type.
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=151)** We can create the service as a new instance at this stage.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=155)** Now, as you can see, it's better a storage service instance as one of its parameters.
>
> **[2:41](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=161)** So we call the return and we set up a new instance of the shopping cart service.
>
> **[2:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=166)** We could go ahead and create a new instance of storage service, but that would mean it wouldn't be reading the storage service instance from the DI container.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=173)** However, this delegate is parted in an I service provider instance as a parameter.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=179)** Within that interface, there is a get required service method and we can use that to resolve the storage service instance from the DI container.
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=186)** So we get our service provider instance, and we find the get required service method, passed in the I storage service as its generic type.
>
> **[3:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=196)** Finally, we generate a unique ID for the other parameter, and we have our instance set up.
>
> **[3:21](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=201)** We simply just go Guid.NewGuid.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=206)** Now, you know the different configuration methods that we could use for dependency injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (3), generic (3), [[ASP.NET]] (1), web application (1), [[Microsoft Products|Products]] (1)
> **Prerequisites:** set up (2), configure (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Using Dependency Injection in ASP.NET Core

[↑ Back to Table of Contents](#table-of-contents)

#### How to inject services into a controller
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=0)** - [Instructor] We've already added our services to the DI Container.
>
> **[0:03](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=3)** Now we're going to start using these services in different components within our [ASP.NET](https://ASP.NET) Core application.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=9)** The first way of doing this is to inject a service into a controller.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=13)** With an ASP. NET Core MVC application, we can use a parameter in the controller's constructor.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=19)** We can add the service type and it will automatically resolve it to the instance from the DI Container.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=24)** Once we have done that, we can assign the instance to a field in our controller.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=28)** From there, any of the controller's actions are able to use the service members as part of its functionality.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=34)** We have our [ASP.NET](https://ASP.NET) Core MVC web application open and we're going to display the product details based on its SKU.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=42)** We have our product controller and we have an empty constructor.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=46)** We are going to pass in our services from our DI Container to use for dependency injection.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=51)** First, we're going to pass in our product service as a parameter, as we're using the interface as the service, we're going to declare the eye product service interface as the type.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=60)** Then we're going to give it a name of product service.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=64)** So we find our eye product service type and give it the name of product service.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=69)** (computer keyboard clicking) Afterwards, we have to define our product service instance to a local field in the controller.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=76)** We would create a read only field in our product controller and call it _productservice.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=81)** (computer keyboard typing) So we give it a private access modifier.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=85)** Make sure it's read only then find the eye product service type giving it the name _productservice.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=92)** Then we assign our local field to our parameter instance.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=96)** So we get the _productservice field and just set it to the product service parameter that we're passing in.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=104)** As we now have our product service instance, we could start to use it.
>
> **[1:50](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=110)** We have created a Get method within our product controller.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=114)** This is set up in the web application to run through the product route with a SKU appended to it.
>
> **[1:59](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=119)** We go ahead and call our Get method in our product service instance to get the data for a particular product.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=130)** As we are passing in the SKU as the action parameter, we will use that parameter in the product service Get method.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=138)** The Get method will return us the product instance which we can use as part of the Razor View model.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=149)** In our Razor View, we have defined the model that is being passed into it.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=158)** Having the models instance means we can display the name, the price, and the SKU.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=163)** Let's run the application and see if we're getting the data.
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=168)** Looking at our storage service, we're storing the products that we wish to include as part of our online shopping website.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=175)** One of these products has a SKU of BUB-APR.
>
> **[2:58](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=178)** It has a title of a gumball for your thoughts apron and a price of $24.
>
> **[3:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=184)** We will test out our product controller action by navigating to this URL and see that the application is showing the correct name, price, and SKU.
>
> **[3:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=192)** So the product is called A gumball for your thoughts apron.
>
> **[3:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=196)** The SKU is BUB-APR.
>
> **[3:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=199)** And the price is $24.
>
> **[3:22](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=202)** That means we have successfully injected the product service into our controller.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=206)** As the product service depends on the storage service to get the product data, we can see that both services have been created successfully in the DI Container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (23), application (4), data (3), [[ASP.NET Core]] (2), web application (2)
> **Env Vars:** sku (7), asp (3), net (3), mvc (2), bub (2)
> **CLI Commands:** find (2), make (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Non-Speech:** (computer keyboard clicking) (1), (computer keyboard typing) (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Inject services in other components of a web application
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=0)** - It's time to look at injecting services into other components of [ASP.NET](https://ASP.NET) Core.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=6)** There may be scenarios where we want to inject a service outside of a class.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=10)** One example would be in MVC Application where we want to inject a service directly into a Razor View.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=16)** Fortunately, with [ASP.NET](https://ASP.NET) Core, we're able to do that using the HTTP Context instance for a property called Request Services.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=24)** The request services property is an eye service collection instance and it contains the method Get Required Service which allows us to resolve a service from the DI container.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=34)** That means that as long as we have the HTTP context instance to add, we're able to resolve a service regardless of what component it sits in.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=43)** We have our Razor View open that displays the product information.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=47)** What we want to do here is to return an instance of our shopping cart service.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=51)** So we can display a message as to whether the product has been added to the shopping cart.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=56)** The first thing we need to do is to declare our shopping cart service instance from the DI container into a local variable.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=63)** We could do that by calling ViewContext.HttpContext.RequestServices.GetRequiredService.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=69)** With the generic type, we pass in the eye shopping cart service interface as the Type.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=77)** Within the shopping cart service there is a method called hasProduct.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=84)** This method checks whether a product has been added to the shopping cart.
>
> **[1:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=87)** It expects a sku-parameter.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=89)** So we can pass in our SKU from the product model.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=94)** Once it's determined whether the product has been added to the shopping cart, Either returns True to say that the product has been added or False if it hasn't.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=104)** Now that we know whether the product has been added to the shopping cart.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=107)** We can do an if statement around the variable.
>
> **[1:50](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=110)** If it's true, we state a message to the customer that the product has already been added to the shopping cart.
>
> **[1:56](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=116)** Otherwise, we tell them that it hasn't and we give them the option to add the item to the shopping cart.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=132)** For adding a shopping cart item.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=134)** There is functionality through an action called Add To Shopping Cart that has been created in the product controller.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=142)** This expects a sku-parameter.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=146)** Inside the method, it checks to see whether a product exists within that sku.
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=151)** Assuming it does it gets the Shopping Cart Service instance.
>
> **[2:36](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=156)** This instance is passed in as a parameter in the construction of the controller.
>
> **[2:41](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=161)** It then calls the Add Product method within that.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=165)** The Add Product method in the shopping cart service gets the current shopping cart from the storage service and adds the item to the customer's shopping cart.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=175)** The user is then redirected back to the product page.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=179)** The message is updated saying that they have added the item to the shopping cart.
>
> **[3:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=184)** Using this action we can use a form element that does a post request to that action.
>
> **[3:10](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=190)** Inside the form element.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=191)** We can add a button that will fire off to that action and add the product to the shopping cart.
>
> **[3:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=197)** Running the application at this URL, we can see that the message is appearing saying that the product hasn't been added to the shopping cart.
>
> **[3:25](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=205)** By clicking on the Add Cart button we can see that the message has been updated.
>
> **[3:30](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=210)** Now, the product has been added to the customer's shopping cart.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=213)** That means that in the Razor View we have successfully resolved our shopping cart service from the DI container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (16), [[ASP.NET Core]] (2), application (2), generic (1)
> **Env Vars:** asp (2), net (2), http (2), mvc (1), sku (1)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Code Identifiers:** hasproduct (1)
> **Speakers:** - it (1)

#### How to set up a hosted service
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=0)** - [Instructor] It's time to look at the hosted services and the relationship with services independency injection.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=6)** What is a hosted service?
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=8)** A hosted service is a service that allows tasks to run in the background.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=13)** They can either be configured in an [ASP.NET](https://ASP.NET) Core application, or be set up for a Worker Service template.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=19)** A Worker Service template is designed specifically for background tasks.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=23)** These are tasks that could be run independently off the web application.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=27)** However, we have a requirement to update a product stock level within the web application.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=32)** In this instance, we're going to add a hosted service as part of an [ASP.NET](https://ASP.NET) Core application.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=38)** We have created a new product background service class.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=45)** To make this a hosted service, we have inherited the background service abstract class.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=50)** Looking at the background service abstract class, it expects the execute async method to be implemented.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=56)** Going back to the product background service class, we can see that we have done that.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=61)** The purpose of the execute async method is to execute the task.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=65)** When the task is executed, it implements a five second delay at the start.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=69)** This is so we can delay the task at the beginning to demonstrate the updating of stock levels.
>
> **[1:14](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=74)** Afterwards, it explicitly creates a new scope.
>
> **[1:18](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=78)** This is so we can resolve services within the task and not keep them alive any longer than we need to.
>
> **[1:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=83)** It uses that scope to get the product service instance from the di container.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=88)** Next, it makes an API call to get the stock levels for all the products.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=93)** Assuming the API call is successful, it binds adjacent response to a product stock model class.
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=99)** This class stores the product skew and the stock level.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=103)** From there, it will go through each product stock model instance and find the product using our product service instance.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=109)** If it's successful in finding the product, it will go ahead and update the stock level.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=114)** Once the task is complete, it will sleep for a minute before repeating the task.
>
> **[1:59](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=119)** Moving into the program class, we can add a hosted service to the service collection by calling the ad hosted service extension method and declaring the service as the generic type.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=130)** Going back to our product background service, a hosted service supports the same service lifetimes as a singleton service.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=136)** That means it supports classes that have a singleton or transient service lifetime.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=141)** Looking at the constructor, we're able to inject the storied service as it has a singleton service lifetime.
>
> **[2:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=147)** In order to use a scope service lifetime class, you must at a custom scope and call it within that scope.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=154)** Running our application, Our Bob hyphen APR product displays a stock level of four.
>
> **[2:39](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=159)** This is the stock level that is stored in the storage service when the application runs.
>
> **[2:44](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=164)** The hosted service is calling this API endpoint to update the stock.
>
> **[2:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=169)** Looking at the Bob hyphen APR product, the stock level being updated to 10.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=173)** If we look at the console window, we can see that our hosted service has updated to stock levels.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=179)** Refreshing our product page, We can see that it's now displaying our stock level to 10.
>
> **[3:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=184)** So we have successfully used dependency injection in a hosted service to update stock level of a product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (15), application (4), api (3), [[ASP.NET Core]] (2), web application (2)
> **Env Vars:** api (3), asp (2), net (2), apr (2)
> **CLI Commands:** make (1), find (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Disposing of a service
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=0)** - [Instructor] Unmanaged resources such as a file resource or a connection to a database sometimes needs to be disposed of when we are finished with them.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=8)** This is either to free up memory or so unmanaged resources are released.
>
> **[0:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=12)** This is done by inheriting the IDisposable interface and implementing the Disposable method into the class.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=19)** And it works in the same way with classes that use dependency injection.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=23)** The disposable method is implemented and any instances that need to be disposed of will sit in that method.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=30)** Outside of dependency injection, we have to dispose of the class.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=34)** This is even done by calling the dispose method or by wrapping the instance around using statement.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=40)** However, this does not need to be done with dependency injection services and is widely discouraged.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=46)** As discussed earlier, services can either have a Singleton scoped or transient service lifetime.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=52)** When the service has reached its lifetime, it will call the dispose method automatically.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=56)** There are some exceptions to that if you're registering a Singleton service without an interface and creating a new instance for it but that is a general rule.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=65)** Why should we not explicitly dispose of services that we use for dependency injection?
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=70)** By calling dispose method, particularly for services with the Singleton scope service lifetime, the service will be disposed before its scheduled lifetime has expired.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=80)** This could have a knock-on effect for other services that it depends on.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=85)** For instance, if the product service relies on the storage service and the storage service has been given a Singleton service lifetime, that means that the storage service will be initialized for the applications lifetime.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=96)** If we dispose of the storage service, that means that the product service is unable to perform its duty with the storage service and will for an exception.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=106)** In the product service class, we are inheriting the IDisposable interface.
>
> **[1:50](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=110)** That means we have to declare the dispose method that's within it.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=114)** However, to ensure that we're unable to dispose of the service outside of the class, we need to ensure that the dispose method is not publicly available.
>
> **[2:03](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=123)** There are a few ways of doing this, the best way is to change the dispose method to an interface declaration.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=129)** We can do that by getting the IDisposable interface and calling the dispose method inside the service.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=135)** By not specifying the access modifier, the method will be seen as private and will not be able to be called outside of the class.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=142)** Be aware that the IDisposable interface only needs to be inherited in the class and not specific interface.
>
> **[2:28](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=148)** Otherwise, the dispose method will be available as a declaration when we register the service in the DI container and can still be called upon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (4), product (3), database (1)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **Best Practices:** general rule (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Set up an application using dependency injection
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=5)** - [Instructor] It's time for you to put dependency injection into action.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=9)** The goal here is to display a list of all the products on the homepage of the web application.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=13)** There is a method called GetAll in the ProductService class that will retrieve all the products when called.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=19)** When using an [ASP.NET](https://ASP.NET) Core MVC application, the aim here is to inject the product service from the DI container so it could be used to achieve the end result.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=28)** So we already have a Visual Studio solution which you can download from GitHub.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=32)** There are two projects within that solution.
>
> **[0:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=35)** The first project is a Service Library and this stores the services that we can inject as part of dependency injection.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=42)** If we go into our product service, we can see that we have a GetAll method.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=46)** This buffer returns a list of all the products.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=49)** The other projects is an [ASP.NET](https://ASP.NET) Core MVC application and the goal here is to add the necessary classes from the Service Library to display a list of products on the homepage.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=60)** The homepage is already set up as a controller in our MVC application so you can make the necessary modifications within that to display all the products.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=69)** Be aware that modifications are only needed in the MVC application.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=73)** The Service Library should remain untouched.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=75)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5), application (4), [[Dependency Injection]] (2), [[ASP.NET Core]] (2), product (2)
> **Env Vars:** mvc (4), asp (2), net (2)
> **Definitions:** is a  (2), is an  (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Tools:** visual studio (1), github (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)

#### Solution: Set up an application using dependency injection
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980&t=0)** - [Instructor] Here is one solution that displays all the products on the homepage using dependency injection and [ASP.NET](https://ASP.NET) Core MVC.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980&t=13)** The first thing we have to do is to add the storage service and product service to the DI container.
>
> **[0:18](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980&t=18)** Although we are not using the storage service directly in the MVC application, the product service depends on the storage service.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980&t=24)** So it needs to be added.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980&t=27)** Afterwards, we move to our HomeController class to inject the product service as a parameter in the controller.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980&t=32)** From there, we can create a private field in the controller that will store an instance of the product service.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980&t=39)** Then it's just a case of calling the GetAll method from the private field and returning it as part of the View in the Index action.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980&t=49)** By running our application, we can see that all four of our products are displayed on the homepage of our web application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (4), [[Microsoft Products|Products]] (2), application (2), [[Dependency Injection]] (1), [[ASP.NET Core]] (1)
> **Env Vars:** mvc (2), asp (1), net (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Common Errors

[↑ Back to Table of Contents](#table-of-contents)

#### Forgetting to add a service
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=0)** - [Instructor] We're now going to look at some common errors that occur when using dependency injection.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=5)** The first one is forgetting to add a service.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=7)** It's essential to register your services to the DI container.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=11)** If you attempt to use the service and it has not been registered, the application will throw an exception.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=17)** It's important to remember that a service is not initialized until it's used for the first time.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=21)** So it may not be obvious that it hasn't been registered.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=23)** Let's have a look and see what error we get when we forget to add the service.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=28)** In our product controller, you can see that we are injecting the product service as a dependency.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=34)** In our program class, we can see that we've added this class we have a transient scope lifetime.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=39)** Let's go ahead and remove the registration and run the application.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=46)** We can see that the application is running fine.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=48)** Let's go ahead and go to our product page.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=51)** We can see that when we go to the product page, we are getting an invalid operation exception, stated that we are unable to resolve the service for the particular type.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=60)** Let's add the product service back in.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=63)** What happens if we remove a service that is dependent on another service?
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=67)** The product service is reliant on the storage service when it's registered.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=71)** So it's not been added to the DI container.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=73)** We will still get an invalid operation exception, but the error message is slightly different.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=79)** Let's go ahead and remove the storage service from the DI container.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=86)** Running the application.
>
> **[1:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=87)** We can see in this instance, it's telling us that some services are unable to be constructed.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=93)** If we look further down the exception, we can see that we've been unable to resolve the IStorageService.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=98)** So it's always important to take time to register your services into the DI container if you wish to inject them or rely on them as a dependency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (6), application (4), [[Dependency Injection]] (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### Injecting services with different service lifetimes
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=0)** - [Instructor] We discuss services that have different service lifetimes may not be able to depend on each other.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=5)** This is particularly apparent with a singleton service.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=8)** If you inject a class that has a scope service lifetime, the class with a singleton service lifetime will not know what scope it belongs to.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=16)** The only way this will work is we're able to create a custom scope.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=19)** We'll have a look at what exception would be greater with, if we were to make this mistake.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=24)** So we have our storage service which has been registered with singleton service lifetime.
>
> **[0:29](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=29)** Then we have our shopping cart service that has been registered as a scope service lifetime.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=34)** Let's go ahead and add the shopping cart service as a dependency storage service and run the application.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=43)** The application is unable to start, and we're being greeted with an aggregate exception saying some services are not able to be constructed.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=51)** Looking at the inner exception, we can see that the singleton service cannot consume a class with a scope service lifetime.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=57)** If we need to use a scope service with a singleton service we need to create a custom scope.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=63)** To do this, we can inject the service provider into our singleton class install the instances as a private field.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=69)** We replace the eye shopping cart service type with the eye service provider and rename the parameter to service provider.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=77)** We create a new field, giving it a private access modifier making it read-only and passing it in the eye service provider as the type giving it the name _service provider.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=89)** Then we just assign the _service provider field to the service provider parameter that we're passing in.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=95)** We recreate a new scope in the ad shopping cart method.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=100)** The ad shopping cart method is run every time a HTTP request is generated.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=104)** This is to ensure that customers have a shopping cart assigned to them.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=108)** Within this method, we can create a new scope and resolve the shopping cart service.
>
> **[1:53](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=113)** So we name our variable scope and we find our _service provider field.
>
> **[2:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=120)** Within the service provider instance, there are two methods that we can use to create a custom scope.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=125)** Either create scope or create asyn scope.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=128)** Depending on whether we're calling asyn methods.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=130)** Let's create a custom scope, declaring the variable scope as the new instance of our scope.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=138)** From there if we need to resolve our shopping cart service we need to use our scope variable to do this.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=143)** We can call the service provider instance and the get required service method.
>
> **[2:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=147)** Part in our shopping cart service as a service.
>
> **[2:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=152)** We will put in a break point now and run the application.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=158)** We could see that we're able to resolve our shopping cart service within our singleton service and call any methods that reside within it.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=165)** However, this is only for the lifetime of the scope.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** http (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Circular dependency
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=0)** - [Instructor] Circular dependency is when one class relies on another class and vice versa.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=5)** For example, we have a product service, and we wish to inject the category service to get all a categories that a product belongs to.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=11)** However, with the category service, we wish to inject the product service to get all the products that belong to a particular category.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=17)** This is an example of circular dependency as the category service relies on the product service, and the product service relies on the category service.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=25)** Circular dependency is a bad idea as it can involve tight coupling between classes, something that dependency injection is designed to reduce.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=32)** In addition, it can make the code confusing as it goes against the single responsibility principle.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=37)** If both services rely on each other, they both have a responsibility for each other.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=42)** In [ASP.NET](https://ASP.NET) Core, it's forbidden to use circular dependency to inject services for a class's constructor.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=49)** If you really need to use circular dependency, you can inject the service by injecting the service collection into the constructor and using that service collection to get the service.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=57)** Let's see what happens when we try and use circular dependency in [ASP.NET](https://ASP.NET) Core.
>
> **[1:02](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=62)** With the ProductService, we're are dependent on the storageService to get product information.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=68)** Now we decide that we want to use the productService within our StorageService.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=72)** We go ahead and inject the productService into our StorageService and run the application.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=77)** When we run the application, we can see we're getting A circular dependency dependency was detected for the service error.
>
> **[1:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=83)** Sometimes it is unavoidable to use circular dependency.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=86)** If we really need to inject the productService into our StorageService, we can inject the serviceProvider and result the service with any of the methods.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=94)** We replace the IProductService with the IServiceProvider type and rename the parameter to serviceProvider.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=102)** Then we get the _serviceProvider field and declare it with the serviceProvider parameter that we're passing in.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=109)** We are unable to result the productService in the constructor, otherwise the application will still have a circular dependency issue, but without the error.
>
> **[1:58](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=118)** The application will just end up in a loop.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=121)** With the serviceProvider instance, we can use the GetRequiredService extension method to get the productService instance to be used for dependency injection.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=128)** So we call the variable productService and we call the _serviceProvider field, get in the GetRequiredService extension method, and pass it in the IProductService as the service.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=143)** It's always best to look at your code architecture first and see if circular dependency can be avoided before using this workaround as a fix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (6), application (4), [[Dependency Injection]] (2), [[ASP.NET Core]] (2), [[Microsoft Products|Products]] (1)
> **Code Identifiers:** productservice (6), serviceprovider (4), storageservice (1)
> **Env Vars:** asp (2), net (2)
> **URLs:** [asp.net](https://asp.net) (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Ambiguous constructors
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=0)** - Constructor overloading is when a class has more than one constructor.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=4)** The constructors are formed with the same name but have a different list of parameters.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=8)** C Sharp can tell the difference in constructors even through the number of parameters specified, the type given to each parameter or the way they are ordered.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=16)** What happens if a service use for dependency injection takes advantage of constructor overloading?
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=22)** For example, the ShoppingCartService has a constructor where it passes in the productService as a parameter.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=27)** However, it also has another constructor where it passes in the StorageService.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=32)** Out of the box the DI container would not know which constructor to use to initialize the service, and would therefore throw an ambiguous constructor error.
>
> **[0:41](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=41)** The resolution around this is to explicitly initialize the service when registering the service in the DI container.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=47)** Earlier, when registering services for dependency injection, there was an extension method to create the service instance.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=52)** This is a good opportunity to use this, as we can tell which constructor to use when initializing our service in the DI container.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=60)** The one downside with this is that if we need to add additional dependencies to our constructor, we also need to add these same dependencies when registering the service.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=69)** We have our ShoppingCartService, and we can see that we are using a constructor overlay technique.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=75)** With the first constructor, we're passing in a dependency for the productService, whereas for the second constructor, we're passing in a dependency for the StorageService.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=84)** Using the default way to register a service is going to cause an exception.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=88)** If we run the application now, we can see that we're getting a constructors are ambiguous error.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=95)** The obvious fix would just be to remove one of the constructors and that would fix the error.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=100)** However, what if either constructor was being used in other applications?
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=104)** This is where we can explicitly initialize the service when registering it, going into our program class and our service collection instance, we can find the extension method that allows us to create the service, passing in an instance of the service provider, we can use that to resolve dependencies on the constructor's parameters.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=128)** We find the AddScoped extension method that has the delegate.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=131)** We pass in the IServiceProvider as the type, and the serviceProvider as the parameter's name.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=136)** We then return a new instance of the ShoppingCartService.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=142)** As we want to use a constructor that has a StorageService as a parameter, we can select that one.
>
> **[2:27](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=147)** From the serviceProvider, we can use the GetRequiredService extension method to resolve the service.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=154)** If we run the application now, we can see that it's able to initialize our service, and we can now use it for dependency injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (3), application (2)
> **Code Identifiers:** productservice (2), serviceprovider (2)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - constructor (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Continue your ASP.NET Core journey
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=0)** - Now that you have a better understanding of dependency injection and how it is used in [ASP.NET](https://ASP.NET) Core, I encourage you to start using it in your web applications to get a better understanding on how it works and how it behaves.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=11)** The built-in DI container is just one of several DI containers that are available for [ASP.NET](https://ASP.NET) Core.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=17)** Others include AutoFac and StructureMap.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=20)** I encourage you to check them out to see how they differ.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=24)** As the built-in DI container is a slim down version on how to use dependency injection, it may not have as many features as some of the others.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=31)** However, I've always found that it's more than up to the job.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=34)** The benefits of dependency injection really come across are much larger and more complex applications.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=40)** I'm sure you agree with me that it's a great design pattern when you use it regularly.
>
> **[0:44](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=44)** If you want to get in touch with me, you can find me on LinkedIn, visit my website, or my YouTube channel.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=49)** Thanks very much for watching.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=50)** And I hope to see you again in one of my courses soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (3), [[ASP.NET Core]] (2), web (1), [[LinkedIn]] (1)
> **Env Vars:** asp (2), net (2)
> **URLs:** [asp.net](https://asp.net) (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)


## Instructor

- [[David Grace]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/asp-net-core-in-dotnet-6-dependency-injection)

## Skills Covered

- ASP.NET Core
- Dependency Injection

## Path Context

### In [[Getting Started as an ASP.NET Core Developer]]
← [[ASP.NET Core- Token-Based Authentication]] | **7 of 9** | [[ASP.NET Core- Building a GraphQL API]] →

## Appears In

- [[Getting Started as an ASP.NET Core Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building Web APIs with ASP.NET Core 8]] — ASP.NET Core
- [[ASP.NET Core- Building a GraphQL API]] — ASP.NET Core
- [[ASP.NET Core- Token-Based Authentication]] — ASP.NET Core
- [[Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security]] — ASP.NET Core
- [[Building Angular and ASP.NET Core Applications]] — ASP.NET Core

---

[↑ Back to top](#)