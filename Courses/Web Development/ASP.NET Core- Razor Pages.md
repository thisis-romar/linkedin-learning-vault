---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: asp-dot-net-core-razor-pages-14933051
url: "https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051"
duration_minutes: 106
duration: 1h 46m
level: Intermediate
updated: 6/24/2022
learners: 45099
skills:
  - ASP.NET Core
  - ASP.NET Razor
exercise_files: true
github: "https://github.com/LinkedInLearning/asp-net-core-razor-pages-2476438"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQG_sOyeCs-0JQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655920911407?e=2147483647&amp;v=beta&amp;t=O6fB7HCf-3S4TgDZ07jep1_exvbexYywbY8cEvTp3yU"
linkedin_topic: Web Development
learning_paths:
  - '[Getting Started as an ASP.NET Core Developer](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20as%20an%20ASP.NET%20Core%20Developer.md)'
prev_courses:
  - '[C- and .NET Essential Training](../Software%20Development/C-%20and%20.NET%20Essential%20Training.md)'
next_courses:
  - '[Building Angular and ASP.NET Core Applications](Building%20Angular%20and%20ASP.NET%20Core%20Applications.md)'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":3,"total":9,"prev":"C- and .NET Essential Training","next":"Building Angular and ASP.NET Core Applications"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/asp-net-core
  - skill/asp-net-razor
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/ASP.NET%20Core-%20Razor%20Pages.md)

![ASP.NET Core: Razor Pages](https://media.licdn.com/dms/image/v2/C560DAQG_sOyeCs-0JQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655920911407?e=2147483647&amp;v=beta&amp;t=O6fB7HCf-3S4TgDZ07jep1_exvbexYywbY8cEvTp3yU)

# ASP.NET Core: Razor Pages

> Razor Pages allows you to build ASP.NET web applications quickly and easily without an MVC framework. In this course, instructor Ervis Trupja shows you how to create a Razor Pages application, use the PageModel, and manage dependencies as you go. Find out how to get your first dynamically rendered page up and running before you learn about data binding, working with forms and data, and securing yo

> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051) | 1h 46m | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Why use Razor Pages?](#why-use-razor-pages)
  - [What you should know](#what-you-should-know)
- [**1. Getting Started with Razor Pages**](#1-getting-started-with-razor-pages) (4 videos)
  - [What is ASP.NET Razor Pages?](#what-is-aspnet-razor-pages)
  - [ASP.NET Razor Pages vs. ASP.NET MVC](#aspnet-razor-pages-vs-aspnet-mvc)
  - [Creating an empty ASP.NET Razor Pages project](#creating-an-empty-aspnet-razor-pages-project)
  - [Key ASP.NET Razor Pages concepts](#key-aspnet-razor-pages-concepts)
- [**2. Working with Forms in Razor Pages**](#2-working-with-forms-in-razor-pages) (7 videos)
  - [Data binding in ASP.NET Razor Pages](#data-binding-in-aspnet-razor-pages)
  - [ASP.NET Razor Pages application overview](#aspnet-razor-pages-application-overview)
  - [One-way data binding in ASP.NET Razor Pages](#one-way-data-binding-in-aspnet-razor-pages)
  - [Two-way data binding in ASP.NET Razor Pages](#two-way-data-binding-in-aspnet-razor-pages)
  - [Event binding in ASP.NET Razor Pages](#event-binding-in-aspnet-razor-pages)
  - [Model binding ASP.NET Razor Pages](#model-binding-aspnet-razor-pages)
  - [Form data validation in ASP.NET Razor Pages](#form-data-validation-in-aspnet-razor-pages)
- [**3. Working with Data in Razor Pages**](#3-working-with-data-in-razor-pages) (5 videos)
  - [Setting up Entity Framework Core in ASP.NET Razor Pages](#setting-up-entity-framework-core-in-aspnet-razor-pages)
  - [Adding and storing data in a database](#adding-and-storing-data-in-a-database)
  - [Getting data from a database](#getting-data-from-a-database)
  - [Getting data by ID from a database](#getting-data-by-id-from-a-database)
  - [Service configuration in ASP.NET Razor Pages](#service-configuration-in-aspnet-razor-pages)
- [**4. Securing Razor Pages Applications**](#4-securing-razor-pages-applications) (4 videos)
  - [Authentication vs. authorization](#authentication-vs-authorization)
  - [Simple authorization in ASP.NET Razor Pages](#simple-authorization-in-aspnet-razor-pages)
  - [Role-based authorization in ASP.NET Razor Pages](#role-based-authorization-in-aspnet-razor-pages)
  - [Claims-based authorization in ASP.NET Razor Pages](#claims-based-authorization-in-aspnet-razor-pages)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps for learning more about Razor Pages](#next-steps-for-learning-more-about-razor-pages)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use Razor Pages?](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980&t=0)** - Razor Pages is a page focused development framework for building dynamic data driven web applications with clean separation of concerns. We'll start this course by talking about the key concepts of Razor Pages and the comparison between Razor Pages and MVC framework. Next, you learn about data binding in Razor Pages where you learn about one way, two way, and event data binding. You'll also learn about model binding and data [Forms](../../Skills/Web%20Development/Forms.md) validation. Then you learn how to configure Entity framework core in a Razor Pages application and how to get and store data in an [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database using the Entity framework core. By the end of these cores, you'll also learn about securing Razor Page applications, where you'll learn about the difference between authentication and authorization, and also learn about simple, role based, and claims based authorization. Hi, my name is Ervis Trupja and I'm a freelance full stack developer and trainer. Join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course as we explore the Razor Pages framework by building a simple application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** mvc (1), sql (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - razor (1)

#### [What you should know](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980&t=0)** - [Instructor] Now, let us talk about a couple of things that you need to know to get the most out of this course. On this course you are going to create an [ANP.NET](https://ANP.NET) Razor Pages application. Having experience with any .net framework, especially NPC, is going to be helpful, but is not required. As a programming language, I'll use C#. Having basic knowledge of C# is recommended. As development framework, I'm going to use the .NET Core 6.0 or as we call it now the .NET six. As coding editor, I'm going to use Visual Studio 2022, Community edition.

> [!info]- Semantic Content
>
> **Env Vars:** net (3), anp (1), npc (1)
> **URLs:** [anp.net](https://anp.net) (1)
> **Versions:** 6.0 (1)
> **Tools:** visual studio (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Razor Pages

[↑ Back to Table of Contents](#table-of-contents)

#### [What is ASP.NET Razor Pages?](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=0)** - [Narrator] Per definition, "[ASP.NET](https://ASP.NET) Razor Pages is a server-side, page-focused framework that enables building dynamic, data-driven websites with clean separation of concerns." Razor Pages is also known as a [Cross-platform Development](../../Skills/Mobile%20Development/Cross-platform%20Development.md) framework because apps built with Razor Pages can be deployed to [Windows](../../Glossary/Service/Windows.md), Unix and Mac operating systems. There are other frameworks that you could use to build cross-platform applications, but what are the key benefits of using Razor Pages over other frameworks? First of all, the Razor Pages is a really lightweight and a very flexible framework. It also provides the developers with full control over rendered [HTML](../../Skills/Web%20Development/HTML.md). Last but not least, Razor Pages is the recommended framework for cross-platform, server-side HTML generation. But is this framework for anyone, or can it be used just by developers with a certain level of expertise? The Razor Pages framework is really for any developer with any level of expertise. If you are a developer with experience in any page-centric frameworks like [PHP](../../Skills/Software%20Development/PHP.md), [ASP.NET](https://ASP.NET) Web Pages, or [ASP.NET](https://ASP.NET) Web [Forms](../../Skills/Web%20Development/Forms.md), you can grasp this framework even faster. This framework is easy to learn, and you can start building apps really quickly. To be able to work with Razor Pages,
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=94)** you need to have installed at least .NET Core version 2.0, SDK, and Runtime. Throughout this course, we are going to use the .NET Core version six or as we call it now, .NET six which is the current latest stable version. Other than what we have mentioned so far, it's important to know that [ASP.NET](https://ASP.NET) Razor Pages is easy to learn, it's well supported with a large community of developers, and most importantly, it's a robust framework. Last but not least, the Razor Pages use the popular C# programming language for the server-side programming, and Razor templating syntax for embedding C# in HTML markup to generate content for browsers dynamically. You are going to learn more about the Razor templating syntax on the upcoming parts, as we build our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [ASP.NET Razor](../../Skills/Web%20Development/ASP.NET%20Razor.md) (2), [ASP.NET](../../Skills/Web%20Development/ASP.NET.md) (2), [Cross-platform Development](../../Skills/Mobile%20Development/Cross-platform%20Development.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** net (7), asp (4), html (3), php (1), sdk (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **Definitions:** is a  (2)
> **CLI Commands:** php (1)
> **Versions:** version 2 (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** you need to have (1)

#### [ASP.NET Razor Pages vs. ASP.NET MVC](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=0)** - Razor pages are often compared with the [ASP.NET](https://ASP.NET) MVC framework. The truth is that these two frameworks have a lot in common but they also have some key differences. So before you decide which framework you want to use on your next project, it's important to know what the advantages of one framework are over another. So let us first analyze how MVC framework works. MVC stands for model view controller. It's important to know that when you send a request from the view, a controller is going to handle the request and then send back a response. But how does all this work? Let us say, you are in the browser and you click a link, which requests data from home/index The MVC application is going to receive this request. Then it's going to use the [ASP.NET](https://ASP.NET) [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) to decide which controller and action to trigger, and then use the [ASP.NET](https://ASP.NET) view engine to locate and render the view So the user can see the result. As you can see in here the keywords are controller and action and [ASP.NET](https://ASP.NET) routing is the one that decides which controller and which action to call. So basically decides how to handle your request. The default routing configuration uses a combination of a controller and the action names.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=96)** But you can customize this to use your own custom names. So for example, for the home index the routing is going to first search for the home controller and within the home controller it's going to look for the index action. The same goes for the home welcome The routing system will first check for the home controller. So it's going to search for a controller with a name home and then it's going to check for an action with a name welcome. If we look behind the scenes the call will look something like this. So we have a class named home controller. It's important that the name of the class ends with controller, because that is really important for the engine and for this class to be an MVC controller, you need to inherit from the base class controller. Then inside this class or inside this controller we have two actions. We see that we have a method. So a method with the return type IActionResult named index, which returns a view and another one with the same return type. So IActionResult, and the name is welcome. And it also returns a view. The HTTP gets that you've seen here are called the decorators which tell our application that these two actions can be used to get data. If you were to create a form which would be used to add data to the database then instead of having HTTPGet, we would have HTTPPost.
>
> **[3:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=192)** Now, this is just a brief description on how the MVC works. Let us have a look at the Razor Pages. The same way, let us assume that you are in the browser and you click a link which requests data from the home welcome. The Razor Pages application is going to receive this request. Then the [ASP.NET](https://ASP.NET) routing is going to decide which Razor Page to trigger. And then it's going to use the view engine to locate and render the view so the user can see the result. And as you can see here, the key words are not controller and action, but is the Razor Page. So behind the scenes, whenever you would call for example home welcome, the Razor Pages engine is going to first check the pages folder, which is the main folder where you can find all the razor pages. Then it will check for the home folder. Then within this folder is going to check for the welcome view. So welcome.cshtml In Razor Pages, for each C sharp HDML file which is a view that the user gets to see. We have a file C sharp, [HTML](../../Skills/Web%20Development/HTML.md) dot C sharps so dot CS which is where all the logic is placed. So for example, if we would have a simpler request let's say just home, then the [ASP.NET](https://ASP.NET) routing is going to search within the pages folder for a file named home dot C sharp HDML.
>
> **[4:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=286)** And as we said, for the C sharp HDML we are going to have the file C sharp dot HDML CS where all the logic is placed. A real simple Razor Page example is going to look like this. So in here we have the home model class. It's really important that the name of the class ends with model. So similar to with controllers, where it was important that the file name or the class name ends with controller. In here, it's important that the class name ends with model and we do not inherit from the base class controller but we inherit from the base class page model but there are also other differences that you might need to take into consideration when you decide. For example, in Razor Pages application, everything important can be found within the pages folder. However, on MVC, you have separate folders for controllers and the views. So basically in Razor Pages, everything is under the pages folder and in MVC, the code is spread in multiple folders. Based on what we have taught so far, it's clear that the Razor Page is designed for page focused scenarios and MVC is controller heavy. Other than that it's important to mention that in Razor Pages the anti-forgery token validation is enabled automatically but in MVC, you have to enable it manually. It's not complicated but you just have to enable it manually.
>
> **[6:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=379)** And last but not least with Razor Pages, it's hard to create complex routes, but with MVC it's easier to create complex routes. So in conclusion, there are few advantages of using Razor Pages over MVC. The Razor Pages are easy to understand in the context of structure. The Razor Pages do not have a controller and action to load The Razor Pages contain called behind each individual page. This makes the Razor Pages more structured and easy to understand compared to MVC which is spread in multiple folders. But MVC on the other hand is really good framework for the web applications, which have a lot of dynamic server views, single page applications [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API calls, et cetera. But Razor Pages are perfect for simple static pages that are read only or have lots of data input [Forms](../../Skills/Web%20Development/Forms.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (7), [ASP.NET](../../Skills/Web%20Development/ASP.NET.md) (5), [ASP.NET MVC](../../Skills/Web%20Development/ASP.NET%20MVC.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** mvc (14), asp (6), net (6), hdml (4), http (1)
> **URLs:** [asp.net](https://asp.net) (6)
> **Analogies:** for example (4), similar to (1)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - razor (1)

#### [Creating an empty ASP.NET Razor Pages project](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=0)** - [Instructor] On this part, we are going to create an empty Razor Pages application using Visual Studio and .NET 6 framework. So let us go to Visual Studio and see it in action. In here to create an empty project, I'll just go to File. Then, New. Project. From the project templates in here, I'm going to select the [ASP.NET](https://ASP.NET) Core Web App. And you can see in the description which says that, "A project template for creating an [ASP.NET](https://ASP.NET) Core application with example [ASP.NET](https://ASP.NET) Razor Pages content." If you do not see this option or this template in here, you can simply search... "web... app." And then select the [ASP.NET](https://ASP.NET) Core Web App. Now click the Next button. In here, now we need to provide a name. I'm going to name this app the MoviesApp. Because we are going to use it to store information about our favorite movies. I click the Next button. We have said that throughout this course, we are going to use the .NET version 6. So from the dropdown in here, I'm going to select the .NET 6. And if you have other versions of .NET Core, you're going to see them here on the dropdown. So I'm going to select the .NET 6. I'm going to leave checked the Configure for HTTPS. And I click the Create button.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=95)** Now that the app is created, I'm going to close the Properties. Then go to the Solution Explorer, so we can see the project structure. And here you can see that it's a pretty simple project. So it has the Connected Services, which is used to connect your app to third-party services, like [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) services, [Google](../../Glossary/Service/Google.md) services, et cetera. Inside the Dependencies, you have the Analyzers, which are used to analyze the code for errors or mistakes. Then you have the Frameworks. And here, by default, we're going to have just the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).[NETCore.App](https://NETCore.App) and the [AspNetCore.App](https://AspNetCore.App). Then inside the Properties, we have the launchSettings.[JSON](../../Skills/Web%20Development/JSON.md) file. And inside this file, you can basically define profiles for your projects or how you want to execute your project. And in here, for example, inside the profiles, we have two profiles, the MoviesApp... and the IIS Express. For the MoviesApp, whenever we run this app, it's going to run on these ports. And for the IIS Express is going to run on a different port. Now, the profiles that you see in here, you can see them listed here, on the dropdown where you get to define how you want to run your app. Then next, we have the root folder. And the root folder contains static assets for the app, like HDML files, so let's say, static HDML files, [JavaScript](../../Skills/Software%20Development/JavaScript.md) files, CSS, images that you want to load in your app. And in here, you can see that they are separated
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=189)** in three different folders. css for CSS code. js for JavaScript code. lib for different JavaScript libraries, like jquery, jquery-validation, et cetera. And the last one is the icon that you see in your browser. Now in here, if you want to store images, you can simply just create a new folder, images, and then store the images of the static images in your application. We mentioned on the previous parts that the most important folder in a Razor Pages application is the Pages folder. Because basically in here you put all of the important pages. If I open this folder. In here you're going to see that we have some pages. So we have the Error page, we have the Index, and we have the [Privacy](../../Skills/Data%20Science/Privacy.md). Now, for each cshtml, we have the cshtml.cs, which is used to write the logic. Now, in this case, we do not have like a super complex logic, but the most important part is that we have this OnGet method, which is used to return the view. And down here, we have the Index. And here we also have the constructor. And we have the OnGet method. You can see that the Index page has a class IndexModel. And it inherits from the base class PageModel. The same goes for Privacy. But we have two different views in here. The ViewImports. And in this view, we basically import all the namespaces
>
> **[4:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=285)** or the usings that we want to use throughout the app. And on the ViewStart, we get to design, which is the default layout that is going to be used to render our application. So in here we see that our layout page is set to be the _Layout. You can find this page inside the Shared folder. And in here you have the _Layout.cshtml, which also contains the navigation bar. But the most important section in here is inside this div container. The method RenderBody. Because this method serves as the placeholder where we render all the pages. Now, at the bottom of the Solution, we have the appsettings.json file. The appsettings is also known as the configuration file because in here we store data like the connection strings, the application secrets, et cetera. And the last one is the Program.cs, which is the most single important file. Because the whole app execution starts from this file. And here you can see that we have some default comments. Like for example, in this section you can add services to the container. It seems like we have added, for example, the Razor Pages service. Then down here, you can define the request pipeline. This code in here is going to be executed only if the environment is not Development. So basically, in production. And then, down here, we have this line, UseHttpsRedirection, which is used to redirect HTTP requests to HTTPS.
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=384)** We have the UseStaticFiles, which enables static files such as [HTML](../../Skills/Web%20Development/HTML.md), CSS, and images, and JavaScript files to be served. So if you want to use files from this folder, you need to have this enabled. Then we have the UseRouting, which as the name already indicates, as the route matching to the middleware pipeline. And we said that whenever a request goes through a Razor Pages application, the [ASP.NET](https://ASP.NET) route is going to check for the page name within the Pages folder. Then we have the MapRazorPages. And this method is used to configure the endpoint [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) for the Razor Pages. So basically, this is the method that is used for the [ASP.NET](https://ASP.NET) route to be able to recognize an [ASP.NET](https://ASP.NET) Razor Page request. And the last method, as the name already indicates, is used to run the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [ASP.NET Core](../../Skills/Web%20Development/ASP.NET%20Core.md) (3), [ASP.NET Razor](../../Skills/Web%20Development/ASP.NET%20Razor.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (2)
> **Env Vars:** net (12), asp (7), css (3), https (2), iis (2)
> **UI Navigation:** select the (4), go to (3), dropdown (3)
> **URLs:** [asp.net](https://asp.net) (7), [netcore.app](https://netcore.app) (1), [aspnetcore.app](https://aspnetcore.app) (1)
> **Analogies:** for example (3), such as (1)
> **Prerequisites:** configure (2), you need to have (1)
> **File Paths:** launchsettings.json (1), appsettings.json (1)
> **Tools:** visual studio (2)

#### [Key ASP.NET Razor Pages concepts](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=0)** - [Narrator] Now that we have seen the project structure of an anti-Razor Pages application, it's important to know the key concepts that you are going to use throughout this course to get the most out of it. The most important concept is the Razor Pages, that's a Razor page or a Razor file. The Razor pages or Razor files are files that contain both the client sides of the [HTML](../../Skills/Web%20Development/HTML.md) and also the C sharp code. So these are the C sharp and also the C sharp code. The Razor pages are the pages that are decorated with the @page keyword. For each page we also have a model. And we use the model keyword to define the model. Another important component in a Razor page or Razor file is the Razor code block where you can write C sharp code. If we go back to Visual Studio and then here, for instance, I have up on the error dot c sharp HTML Razor page. We are going to see that this is a Razor page because it's decorated by the page keyword. The model for this page is the error model. And if you right click and then go to Definition, you are going to see that we are redirected to the Error dot C Sharp HTML dot C sharp So the CS, and that is basically the code behind file of this one. And then here you have the, @ symbol and opening and closing curly brackets,
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=93)** where inside here you can write C sharp code. So for example, string example is equal to just an empty string. Now, if you go to the error dot C sharp HTML, so another way to navigate to the model, inside here so, in the error, if you expand the error you are going to see the model for that Razor page. To pass data from a page to a model, or vice versa, We are going to use model binding. The model binding is not a Razor specific concept but it's important to know that we're going to use model binding to pass data. To validate data, we are going to use model validation methods. And throughout this course we are going to learn how to validate data both on the front end side, but also on the back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4)
> **Env Vars:** html (4)
> **UI Navigation:** go to (2), navigate to (1)
> **Analogies:** for instance (1), for example (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. Working with Forms in Razor Pages

[↑ Back to Table of Contents](#table-of-contents)

#### [Data binding in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] Binding data is a fundamental task in building applications because at some point every application needs to either display data or receive data. So data binding is a connection bridge between the views. So what the user gets to see, and the business logic of the application, which happens to be the back end side. In Razor applications, you combine data using three different ways. We have the one-way data binding, which is the one-directional data binding. So basically, the data comes from the back end to the view. We have the two-way data binding. As the name already indicates, the data comes from two directions. So we get data from the backend, but we are also able to send data to the backend. And the third one is the event-binding or binding to user actions. Examples of one-way data binding would be when you load data in a grid or when you load data in a table. When you get a profile picture where you display time on the screen. And so for example, on the case of time on the screen, you just get the time, but you're not actually having any effect or you're not changing the time. Or when you load data in a grid or in a table, you're just getting data from the backend side but you're not sending any data to the backend. Or the two-way data binding, we would have as an example, a calculator. So you basically provide the values, and you also get a response. You would have a form validation. So you provide some data,
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=93)** and you get a response. And as an event by an example, we would have when the user clicks a button, let's say we can have a function that responds to the click event. When the user types something on the keyboard. When the user touches screen. Or even when the user moves the mouse.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** picture (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [ASP.NET Razor Pages application overview](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=0)** - On the last chapter we created a new razor pages application throughout this course we are going to use the same project but I've added to that project some new pages which are necessary for the upcoming parts. So let us go to visual studio and have a look at all the new pages, and how our project looks like. In visual studio let us go to the solution explorer, and then in here, go inside the pages folder, and in here you can see that I've added three new pages. We have the add movie which are going to use to add new movies. We have the movie which are going to use to display the details of a single movie and movies view to display a list of movies. For each view, you are going to see that we have the csharp file, which is the code behind file and they are currently all empty. So if I go to movie, you'll see it's empty. If I go to movies you'll see it's empty, and to create a new page. So I'm just going to create in here new page just go to add a Razor Page, in your select razor page, empty razor page using entity framework or using entity framework. and then the CRUD operation. I have selected the razor page empty. I click add, let us name this page, test. And then click the add button one more time.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=94)** We are going to see that the test view was created and we have the code behind file, which is the csharp file. And it has just the model which inherits from the page model. And then just the get method. Now let us start visual studio so we can see the project. Once the application starts, you're going to see in here this simple landing page, then here on the top you have the movies, and here we are going to have a list of movies. And currently all this data is hard coded. So you're going to have a list of movies here on the bottom right, you have the add new button. When you click in here, you'll be redirected to this view which is a form where you are going to provide a title, a rate, and a description. Then click add movie to store all this data in the database. Also in the movies view, when you click show details you are going to be redirected to this new page. And here you're going to have the movie title the movie rate, and the description, because as you could see here on the show all on the list you have just the title and the rate, but if you want to see also the description you need to click the show details button. Now, if you want to navigate to the test page that we just added, you can simply just go in here and then click test and then press enter. You'll see that you get just an empty screen because the csharp [HTML](../../Skills/Web%20Development/HTML.md) file doesn't have any call. But if I go to visual studio, for example,
>
> **[3:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=190)** and then you go to test dot csharp HTML, and I'm just going to add an H1 tag, which says hello from test page, then save and click this button, the hot reload. Let's go back to the browser. In here, now you're going to see the H1 tag that we just typed. So let us close the browser and go back to visual studio. We are going to remove the test page. So just right click, then delete. We do not need the [Privacy](../../Skills/Data%20Science/Privacy.md), as well. So, then we are going to remove the error. Now, let us build our project to make sure that everything works as expected. And you can see that the build succeeded. And if I run the project, we can see that the project runs successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **UI Navigation:** go to (7), navigate to (1)
> **Tools:** visual studio (5)
> **Env Vars:** html (2), crud (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [One-way data binding in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] On this part, you are going to learn about one way data binding. You are going to do so by replacing the hard coded HDML data in here with a list of data that comes from the code behind file of a razor page. The data will still be hard coded data, but not on a view. You'll learn on the next chapter how to get data from an [SQL](../../Skills/Data%20Science/SQL.md) database using the entity framework core. So for now, let us go to visual studio and see it in action. In visual studio, I'll just go to the Solution Explorer and then you'll go to the movies.cshtml which is the view, and then go to the code behind file. So let us open this file and then we are going to pass this data to the view so we can show all this data in the table. Now to the view, we are going to pass a list of movies, but for us to be able to pass these list of movies, we are going to create the movie model. So let us go to this Solution Explorer and here right click. Go to add, we are going to add a new folder. I'm going to name this folder the data folder. And inside this folder I'm going to add another folder. Going to name this folder the model's folder. And a model is just a C-sharp class and we are going to use the same class to create our table in the database on the next chapter. So let us go to class.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=94)** We are going to name this the movie and I click the add button. The movie class is going to have just four properties. Now we can add as many as we want, but that is not the focus of this course. We're going to keep the movie model as simple as possible. It's going to have a title. It will also have a property of type integer named rate and it'll also have a property of type string named description. Now as I said, in here if you want you can add other properties like for example, the date created, date created by, et cetera. Then I'll save the changes in here and go to the movies C-sharp file. And here I'll just type public. This is going to keep the list of movies. So list movie. Let us import the namespace. That is going to be the movies app.data.models and we have movies and then get set. Now, when you want to send data from the model to the view, you need to use the OnGet method. And when you want to get data from the view, then you need to use another method called OnPost. And we going to talk about that method on one of the upcoming parts. Now, let us add the values to the movies. So movies is equal to a new list of movie.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=191)** Then inside you'll just create a new movie, which is going to have the title let's say, okay, let me bring the T down here. Title is going to be first movie title. The rate is going to be let's say 10. The description is going to be let's say,
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=226)** first movie description goes here. And the movie needs to also have an ID. So ID is going to be a one. Now, let us add one more movie. So I'll just copy this one in here, paste it down here. Let's add one more and then one more. Now, depending on how you want to structure the code, can just bring the new movie down here. Let's say two. This is going to be the second movie. Let's say the rate is going to be seven, ID three. Rate is going to be five. Say third movie. Now, these are not important, but just so we are consistent on just replace all these values and the ID is going to be four in here. Then I'm going to remove the coma and add a semi colon in here. So now that we have the list of movies, let us go to the view. So in the Solution Explorer, I'll just go to the movies.cshtml. And now here, all this hard coded data. So all these table rows, I'll just remove them all. So I'll just remove all this data. And I'm going to use in here for each loop
>
> **[5:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=322)** to iterate through the movies and display all the data. So each in here I'll type var_movie in the model.movies.
>
> **[5:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=342)** Then inside here, we are going to have the table rows. Now to structure this code, press Control + K + D. Let us remove the extra spaces from here. Now, instead of the one in here, we are going to have the movie ID. So for that @_movie.id. Then in here, we are going to have the movie title. So @_movie.title and then in here we are going to have @_movie.description and then from 10.
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=384)** And then on these show details we're going to redirect the users to movie. And then the movie ID is going to be @_movie.id.
>
> **[6:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=397)** Now we're going to talk more about the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) on the upcoming parts. So let us save all the changes and let us run the project to see the result. So we see that the app (indistinct) successfully. Let us go to movies. And on here you can see the four movies that we added to the list. So here for example, we see that we have a title and here we have the rate, but the rate is actually wrong. So we have in here the description. Then I'll just go back to visual studio and fix this real quick. And here we can see that on line 26 instead of using the rate, we have used the description. So let us type in here rate, save all the changes, then hot reload. Let's go back to the browser. And on here, you see that we have the title, we have the rate, and then we have the action. If you hover on this action, you'll see that at the bottom left you have movie slash one which is the ID one. And for the last one you're going to have the movie slash four which is the ID four of the fourth movie title.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **UI Navigation:** go to (10)
> **Cross-References:** next chapter (2), go back to (2)
> **Tools:** visual studio (3)
> **Env Vars:** hdml (1), sql (1)
> **Analogies:** for example (2)
> **Code Identifiers:** var_movie (1)
> **Speakers:** - [instructor] (1)

#### [Two-way data binding in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] On this part, you are going to learn about two-way data binding. We have mentioned on the first part of this chapter, that an example of two-way data binding, is when we use [Forms](../../Skills/Web%20Development/Forms.md). So, we can get data to a form, but, also submit data from a form. You'll also learn how to use the OnPost method to submit data from a form to Razor Page Model. So let us go to Visual Studio. In Visual Studio, let us go to the Solution Explorer. And then you go to the AddMovie. And if you want you can just right-click, and then go to PageModel, and then you'll be redirected, or, you'll be sent to the PageModel file. And then here we are going to define the properties that we want to bind to our form. And we have seen that in our form, we have three properties. So, I'll just type public string Title. Then we have another one, that is string Description. and we have one more, which is int Rate.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=77)** Now, if you want to initialize these values, you can use the OnGet method. So, for example, in here, title is going to be Welcome. And we have said that the OnGet method is the first method that gets executed, which also renders the AddMovie view in this case. So let us go to the AddMovie. And here we can see that we have a form. So, for this form, let us define the method. The method is going to be post, and then to bind the values from the C# file in the C# [HTML](../../Skills/Web%20Development/HTML.md), we are going to use the name property. So in here, input, and then name. This is going to be the name of the property that we're going to use to bind the value. So, Title, the type is going to be a text. Let's do the same for the rate. So, the name is going to be Rate, and for the text area, the name is going to be the Description. Now, let us just go to the C# file one more time. And here for us to be able to receive the request we are going to create, or, we are going to use the method OnPost. And then inside here, I'll just debug. So, let's say, string value is equal to the dollar sign,
>
> **[2:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=176)** the first value is going to be the Title, the second value is going to be the Rate, and the third value is going to be the Description, and then in here, that'll just return the same page. Now, if you want you can also redirect the users to another page. For that you need to use the method, return, redirect, And let's say after the users, add a new movie, we want to redirect them to all the movies, so in here, Movies. You'll see that you get an error, and that's right, because we are trying to return something in a method which doesn't have a return type. So let us define the return type to be a ActionResult, and you'll see that the error is gone. And let us comment out this line, then let us put a break point in here. Let us save all the changes, and run this project. In here, let's go to the Movies, then Add New. I'm going to provide a Movie Title, let's say, Ervis. The rate is going to be 9. This is a description. And I click the Add Movie button. You are going to see that we reach the break point. And then in here, if I hover on the value you're going to see that we didn't get any data. So the Title came as null, the Rate came as zero which is the default integer value,
>
> **[4:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=272)** and the Description came as null. Now the reason for that is because, by using this way we can only send data to the front end. If you want these properties to be bidirectional, so, to bind values in both directions, which are other words for two way data binding, you need to use a decorator named BindProperty. So, BindProperty for the Title, BindProperty for the Rate, and BindProperty for the Description. Then I'll save the change one more time, and then run this project. Let us provide a title in here. So, Simple Title, let's say, 8, Sample Description, and click the Add Movie button one more time. Now, if you hover on the title, you're going to see that we have Sample Title. If you hover on the Rate, you're going to see 8, and if you hover on the Description, you're going to see the Sample Description. So, basically if you want a property to be able to bind data from the front end to the back end, then you'll need to use the BindProperty. And if you go to the BindProperty, so just right-click, and then go to Definition, you're going to see that the BindProperty inherits from the attributes,
>
> **[6:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=367)** and on here, you can just click continue, and you'll be redirected to the same page. On the upcoming parts, we're going to redirect the users to the Movies page, after the movie has already been stored in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** go to (9), right-click (2)
> **Tools:** visual studio (2)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Event binding in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=0)** - With event binding, you can add a specific event which is then going to call a function. When the event is triggered in the associated dump element. The event binding lets you list four and respond to user actions such as key strokes, mouse movements, clicks, and touches. On this part you're going to learn how to create a simple page handler. So let us go to visual studio and see it in action. In visual studio, I'll just use the at movie csharp [HTML](../../Skills/Web%20Development/HTML.md) file, And then I am going to create an, A tag. Then you're going to type asp, then page, then handler, is equal to. Then I'll say my on click. Let us name this link, let's say, click me. So this is going to be the method name. So control C, I'll just copy this value, then go to the csharp file. So in your public void, on get, so the on get is important. And then paste the name, and then add the parentheses in here, so this becomes a method. Then here I'll just add the string stop here, and the string and then just put a break point, just so we can see that we reached this function.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=94)** Now let us save all the changes and then run this project. So the app brand successfully, let us go to the movies and then here, add new. And then up here, you can see that we have the click me button. And when I hover over here, you'll see that at the bottom left, you have add movie, then question mark. We have handler is equal to my on click. So whenever you click this link there's going to be a handler function on the csharp file named my on click. So let us click this link. You are going to see that once I click the link, I'm reaching this break point which means that everything is working as expected. So you can use this functionality, let's say, when you want to track how a user behaves in your website. Now here, I'll just click continue. And then I'll just close the browser. Just going to comment out these lines. So I'll not remove the call just so you have the call just remove then the break points. Then go to the at movie. I'll just comment out this line and then save all the changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** go to (4)
> **Tools:** visual studio (2)
> **Env Vars:** html (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - with (1)

#### [Model binding ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=0)** - When you bind data in a Razor Pages application, or any application in general, if you have a lot of properties, the Razor Page C# file is going to become very, very long. Imagine you have 30 properties that you need to bind. The code could easily become messy. For that, it's important to know that in Razor Pages, you can also bind models. With models, you get to define just a single line of code for the model and then use the properties within the model to bind data. Let us go to Visual Studio and see this in action. So in here, I'll just go to the C# file for the AddMovie. And then instead of defining three properties, so I'm going to comment all this out. I'm going to use a single line, that is going to be, 'public Movie'. And then, let's import the namespace of this model. That is the MoviesApp.Data.Models, then Movie, and then get set. Now down here, we see we have an error because we do not have the title anymore. So let me comment out this line. So now we have the movie, let's go to AddMovie.cshtml. Then here on the input, instead of using title, we are going to use Movie.Title. Let me copy this part.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=93)** Control C. We're going to have Movie.Rate. And then in here, Movie.Description. Let us save all the changes. Let's go back to the C sharp file. In here, now, instead of having the value, title rate description, we are going to have the value, Movie.Title, Movie.Rate, and Movie.Description. Let us comment out this line, so line 32. Put a break point in here. Save all the changes and run this project. Now that the project ran successfully, let us go to Movies. Then you go to add new. Let's provide in here sample title. The rate is going to be, let's say eight. The description is going to be, 'This is a description'. And then click the add movie button. So in here now we see that we reached the break point. So let us hover over the title. We are going to see that we have an exception in here, which says that the movie title through an exception of type Null Reference Exception. And if we hover on the movie, you are going to see that the movie is null. The same goes for rate and for the description. Now, if we scroll up in here, we are going to see
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=187)** that we have defined the property movie of type movie, but we have not used the bind property decorator, which we said is necessary if we want to pass data from the view to the C# file. So let us stop Visual Studio. And then in here just before the movie, I'll type, 'BindProperty'. Going to save all the changes and run the project one more time. In here let us go to Movies, then add new. Let's type in your movie title, nine, description. And then click the add movie button. Then here, if I hover on the title, you're going to see that we have the movie title, on the rate, we have the nine, and on the description we have the description value.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (6), scroll up (1)
> **Tools:** visual studio (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - when (1)

#### [Form data validation in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=0)** - When it comes to working with [Forms](../../Skills/Web%20Development/Forms.md), it's really important that you validate the data before you store them in the database. To validate forms, you can either use [JavaScript](../../Skills/Software%20Development/JavaScript.md) code on the front end, or you can validate the form data on the back end. On this part, you'll learn how to validate forms on the back end side and show the errors on the front end side. set on the form, if the data is not valid. So, let us go to Visual Studio and see it in action. The first thing that you'll need in here is that you'll need a placeholder where you want to display the errors. So, let us go to the C sharp HDML files at the top of the view. And in here, after each input, we are going to use a span as a placeholder for the errors. So in here, just type, span. And then after the span ASP validation, then four. And then in here, we are going to use, let's say, @Model.Movie and then this is going to be for the title. So, we use in here @Model. The model is used for the model definition up here. So in this case, it's going to be the @moviemodel, file dot movie property, or the binding value dot title property. So basically it's going to be
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=93)** this file. Here we are going to have this property. And then in this property, we are going to have the title. Now, if you want, we can also use single property. So, let us actually disable this one. Control KC to comb it out. Let us enable this part up here. Control KU Say the change in here. Let us go to the view. You are going to see that we have an error because now in the model we do not have a movie, but we have the Model.Title. Let us also remove the movie from here. Keep just the title. And then after the validation, we're going to add a class, and the class is going to be a bootstrap class. text dash danger, which is used to change the text color to red. So, let us copy this line. Control C, place it down here. This is now going to be for the rate. Let us remove the movie from here. Let's copy this one more time. Place it down here. The last one is going to be for the description. Now let us save the changes here. Let us go to the C sharp file and then let us scroll down here. On the post, we can comma out this line, and we can enable this one.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=187)** And then, here we can add a check for the model state. So, if the model state dot is not valid, because we have this explanation marking here. So, if the model state is not valid, what this means is that, if you have defined a property to be required, but you have not provided a value, then the model state will not be valid. So, it's going to return the page. So return page. Otherwise, if it's successful, So let's say if all the data is provided, we are going to return the movies page. So, let us put a break point in here. Now up here, you can see that we have defined bind property, which means that all these fields are required. And the rate, since its integer is going to default to zero. So, even if we do not provide a value, this is going to be ignored. And a zero value will be provided by default. But we can still make this work by adding checks, for example, to check if the rate is greater than zero. So, let us run this app. Let's go to movies. Tap add new. Then you have not provided any value. So I'll just click Add Movie. You'll see that the title is now, the rate is zero. the description is now. So the model state is not valid. Got to click Continue.
>
> **[4:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=280)** You're going to see that we get the same view. And in here we have that the title field is required. The value is invalid because in here we expect a number, and the description is required. If I provide now, let's say a rate of eight, it's going to be title, and I'll not provide the description. Click Add Movie. This is not valid. Click Continue. You can see that we have these two values, but we didn't have the description provided. Now, if we want, we could make the description optional. To make the description optional, then I'll just go to Visual Studio. On the description just after the string, I'm going to add the question mark, which stands for optional. Then save all the changes. Hot reload. This was executed. And now it's true. Click Continue. Let's go back to the browser. Now here, let us provide a title. So title name, the rate is going to be, let's say 10. I will not provide a description, because the description is now optional. And click Add Movie. You are going to see that we are redirected to all movies page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **UI Navigation:** go to (6), scroll down (1)
> **CLI Commands:** make (3)
> **Env Vars:** hdml (1), asp (1)
> **Tools:** visual studio (2)
> **Prerequisites:** you'll need (2)
> **Cross-References:** go back to (1)
> **Definitions:** stands for (1)


### 3. Working with Data in Razor Pages

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up Entity Framework Core in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] Throughout this chapter, you are going to learn how to use Entity Framework Core to interact with an [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database. For that we are going to follow three simple steps. We are going to first create an Mt SQL server database. Then we are going to get the database connection string. And then at the end we are going to configure the Entity Framework Core. For us to be able to configure the Entity Framework Core. We need to install three packages. The [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Entity Framework Core. The Microsoft.EntityFrameWorkCore.SqlServer, and the Microsoft.EntityFrameWorkCore.Tools. The SQL server package, is a [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database provider for Entity Framework Core. The tools package, enables the no get package manager console to be used for Entity Framework Core commands. We are going to use this package, when we create migrations. So let us go to visual studio, and see it in action. In here we are going to first create the SQL server database. Now here on the left, you can go to the Server Explorer. Now if you do not see this option in here. You can just go to view, and then Server Explorer. Now you let us right click in the data connections. Then go to create new SQL server database. From the server name drop down. I'll just click the drop down, so we can load all the available server names.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=96)** And here you can see that I have two options the [SQL](../../Skills/Data%20Science/SQL.md) express, and the SQL server. I'm going to select, let's say the second one. I'm going to use [Windows](../../Glossary/Service/Windows.md) authentication, and the database name is going to be movies app and then dash DB. And I click the okay button to create this database. Now that the database was created. Let us get the database connection string. So for that I'll just right click, and then go to properties. In here on the connection section, you have the connection string property. I'll just select in here control a to select the whole value. And then copy. Now we have said that to store the database connection strings. We use the app settings [JSON](../../Skills/Web%20Development/JSON.md) file. So in here I'll just go to appsettings.json. And then here after the allowed host, I'll just put a comma. I'm going to create a new section, and you can see that I already have the predefined connection strings. Now in here you can define multiple connection strings. We are just going to define one connection string going to name it default connection. And then in here based the value. Now let us save the changes in here. Next, we need to install all the packages. So for that I'll just go to tools, then no get package manager. And then either select the package manager console, or manage no get packages for solution. If you select the package manager console,
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=191)** you'll just need to type in here. So I'll just clear this window and then install dash package. The first package we need to install is going to be the Microsoft.EntityFrameworkcore. Then press enter. Now that the Entity Framework Core package was installed. Let us install the SQL server package. So Microsoft.EntityFrameworkCore.SqlServer.
>
> **[3:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=231)** So the tools package was installed. The next step is that we need to create the app DB context file. So let us go to this Solution Explorer. Then inside the data folder. I'm going to add a new C sharp class. So add a class, I'm going to name this class the application DbContext. And this file is going to serve as the translator between the SQL, and our entities. For this class to be the context file of Entity Framework Core. We need to head from the base class DbContext. That is important name space for the DbContext. That is the Microsoft.EntityFrameWorkCore. And down here I'm going to create the constructus Octor. And in here I'm going to inject the DbContext options. So DbContext options, and then here I'm going to base, or I'm going to use the name of this C sharp class. I'll just name it options, and then pass these to the base class of base and then options. Now inside here, we are going to define our only Db set. And the Db set will be used by the Entity Framework Core, to create the table in our database. And our database, we are going to have a single table, and to create the table. We are going to use the model movie. So for that after deconstructor, I'm just going to type public Db set.
>
> **[5:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=327)** And then in here movie, that's important name space for the movie. That is going to be the moviesapp.data.models. The table name is going to be movies, and then get set. So we are able to get, and send data to the database. Now we need to configure this file. To be the default file, that is going to be used by the Entity Framework Core, to communicate with the SQL server database. So for data has go to this Solution Explorer, and then in here go to Program.cs. Then in here after the art razor pages line. I'm going to type builder.Services. We are going to add the database context. And our database context file, is going to be the application DbContext. So that I support the name space, that is moviesapp.data. And then inside here, we are going to define that this context file, is going to use the SQL server database. So options that go to, and then in your options.UseSqlServer.
>
> **[6:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=404)** Now the SQL server, is going to have a connection string. So let us first import the name space for the SQL server. The connection string is going to come from the app settings that JSON file. So this value, but how are we going to read this file. And here I'll just type builder.Configuration and then get connection string. The get connection string method is going to automatically search the app settings that JSON file for the connection strings section. And from this section, we are going to get the default connection string. And then at the end, going to add semi column and then control KD. To format if we have missed any formatting. Now in here I see that we have missed a closing phothosis (indistinct). So I'll just add that and save the changes. The last step, is that we need to add the migrations. And the migrations will basically read the application DbContext, and here will check for any changes. Then create an SQL readable code, which then will be used by the Entity Framework to update the therapies. So you're on the Package Manager Consult, I'll just type add-migration. Then we need to provide a migration name. So this is going to be initial, and then press enter. So this is why we need the EntityFrameworkCore.Tools package. By having that package,
>
> **[8:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=498)** we can type in here add migration command. So we see that the migration file was created. And you can see, that we have this file in here initial. Which is the same name as our migration name. It ignites from the base class migration. This is going to just create a table named movies. Which has the ID, the title, the rate, and the description. The rate is of type integer. The other ones are envar chart max. Now for these changes to be reflected in our database. We need to type the command update, and then database and press enter. We see that the command was executed successfully. So let us go to the Server Explorer. Now in here, if I open the database and then tables. You are going to see it. We have in here the movies table, and if I show the table data. We are going to see it for now. We have no data. For the next part, you learn how to add data to this table, using the Entity Framework Core.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (11), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** sql (15), json (3)
> **UI Navigation:** go to (12), select the (2), open the (1)
> **Prerequisites:** install (5), configure (3)
> **File Paths:** appsettings.json (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Adding and storing data in a database](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=0)** - Now that we have configured the entity framework core, it is time to add data to the database. For that, let us go to Visual Studio and see it in action. So in here, I'll just go to the Solution Explorer, and then here go to Add Movie. And then in here, go to the C# file. For us to be able to use the ApplicationDbContext, we need to create a constructor and then inject the AppDbContext in the constructor. First of all, I'm going to clean up the code. And then in here, just before the OnGet method, I'm going to type ctor then double tap. And this is going to create the constructor. Then just type in here, private then ApplicationDbContext and then _context; Let us import the name space for the ApplicationDbContext and that is the MoviesApp.Data. Then inject this in the constructor. I'll just remove the underscore so they are different. And then inside here, I'm going to assign to the context, the context or the injected context. Now on the OnPost, before we add data to the database, we are going to create the movie object. So for that, I'll just type in here var movie is equal to new Movie, and this movie is going to
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=93)** have the Title set to Title. It's going to have the Rate set to Rate and the Description set to Description. Now, down here, let's add a semi colon and then I'm going to use the context. So context.Movies.Add. We're going to add the movie object that we just created and then context.SaveChanges to save the changes in the database. Now, I knew you are going to get an error which says that this might be null. So actually you need to check for this nullable property but let us scroll up and let us make this property required as well. Then down here, let us remove this string value. Remove this other part. We're going to leave the breakpoint just so we have it for the parking. Now, let us save all the changes and run this project. Now that the project runs successfully, let us go to Movies then Add new. I'm going to provide the first title to be Welcome First movie. The rate is going to be 10. The description is going to be "The description of the first movie", and then just some dots in here and click the Add button. Now here, you are going to see
>
> **[3:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=184)** that the IsValid is equal to true. We have the value of the title. We have the value of the rate, and we have the value of the description. So let us go next, and here, the object is being created. We add this object to the context, and then we use context.SaveChanges to add the movie to the database. Next, we're going to be redirected to the Movies page. Now we do not see the movie that we just added in here because the data is not coming from the database so that I'll just close the browser. Then you go to Server Explorer, and then right click on the Movies. Show Table Data. In here, you can see that we have a movie with the Id 1 which has a title that we just provided, the rate, and the description.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (6), scroll up (1), click on (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Speakers:** - now (1)

#### [Getting data from a database](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=0)** - On this part, you are going to learn how to get data from the database using the entity framework core. So for that, let us go to Visual Studio. In Visual Studio, just go to the Solution Explorer, and then in here go to Movies, and then Movies C share file. In here instead of hard coding the data, we are going to get this data from the database. For that, the first thing that we need to do is that we need to inject the ApplicationDbContext in here. So I'll just type ctor and then in here, ApplicationDbContext. This is going to be context. Let us import the name space. And the name space is going to be MoviesApp.Data. And then here just type private ApplicationDbContext and then _context. Then inside the constructor, I'll just assign the value. So _context is equal to context. Then down here, I'll just remove the new list definition and then your movies is equal to, this is going to be context.Movies.ToList. So that'll save all the changes and let us run this project to see if everything works as expected. Now that the app runs successfully, let us go
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=94)** to Movies and now the movies will come from the database and you can see that we have just a single movie with a title Welcome First Movie. So let us go and add a new movie. Add new. This is going to be Second Movie in Db and the rate is going to be seven. This is the description for the second movie. Let's click the Add Movie button. We reach the break point. You're going to see that the model state is valid because we provided all the values. So I'll just remove the break point and then click Continue. And now you can see that we have two movies which are stored in the database and we can see them in here. So for the second movie, we provided the rate to be seven. So in here we have seven out of 10. Let us go and add one more movie. Let's say Third Movie Title. The rate is going to be eight. This is the description for the third movie. And I click the Add Movie button. In here you can see the third movie. The rate is eight out of 10 but if you click on the Show details you're going to see that the data in here is hard codes. For example, we have Special title treatment. If I go to the next one, you can see that data is not coming from the database. On the next part, you'll learn how to
>
> **[3:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=188)** get data for a single movie.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), click on (1)
> **Tools:** visual studio (2)
> **Analogies:** for example (1)
> **Speakers:** - on (1)

#### [Getting data by ID from a database](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=0)** - [Instructor] On the last part you learned how to load all the movies from the database. But when you go to the movie details you could see that the data was still hard coded. So on this part, you learn how to get a single movie from the database, using the movie ID. For that, let us go to visual studio. In here let us go to Solution Explorer. And then in here, go to movie, and then open the C file. And you are going to first inject the application DB context. So let us just go actually to the add movie, I'm going to copy this section, control C, and then paste it in here. Let is import that name space for the application DB context that is the movies app dot data. So here we see that we have an error and that's right because we are creating a constructor with the name, a movie model dot the constructor naming here needs to be movie model. So just type in here, movie model. Now in here, we are going to have a property or we're going to have a variable in here that we're going to use to store the movie data. If you want, you can just go to the movies. C sharp HTM.C sharp, copy this one, paste it in here. Now, instead of having a list of movies, we're going to have a single movie. So movie,
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=94)** the name is going to be movie, then import the name space for the movie. So, that is going to be the movies app dot data models. And then whenever we load this razor page we are going to set the value of the movie. And the movie is going to be context dot movies dot first or default, and here we can either use first or default, or just the first method. The reason why we use the first or default is because if we do not find a movie in the database if first or default is going to return now but the first method is going to throw an exception. So here N, that goes to N. dot ID is equal to. and then here we are going to use the movie ID. And the ID in here is going to come from the on get method. So here, we're going to have a bar meter. So int ID and we are going to use this ID to get the movie. And then here, you can see that you get a warning which says that possible now reference assignments. So basically the first or default can be now but this is not nullable in here. So let us just make it nullable. And now you can see that the warning is gone. So, where is the ID going to come from now if you go to the movie page, so then I'll just go to the solution, explore, and then open the movie.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=189)** You'll see that up here. After the page, we have defined the ID. The ID is going to be part of the razor page route. So what this means is that for you to be able to call this page, you need to pass as a par meter, the route ID, and for this ID you can also define a type because we have defined the type in our get method. So this can be int and here you can provide any value you want. So for example, before the ID, you could have let's say details and then ID, but it's important that the ID that you define in here is identical with the ID value that you provide inside the on get method. So in here, that'll just go back to here. I'm going to remove the details. Then I'm going to save all the changes. Then in here, we are going to replace the data. So for example, the title now is going to be the movie title. So in here, we are going to have, let's say at model dot and then we are going to have movie dot title. Then here we are going to have @ model dot movie dot rate. And then, and then down here we are going to have @ model dot movie dot description. Now you can say that you get a warning which says that this can possibly be now. So now that, I just had a question mark.
>
> **[4:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=284)** So if it has a value, we want to get the title. If it has a value, we want to get the read. And if it has a value, we want to get the description let us save all the changes. And then in here, I'll just put a break point to see if we get data on the on get method and then click the play button to start this project. So we can see that the project ran successfully. Now I'll just go to movies. And now when I click on show details, you are going to see that we reached the break point. The ID has the value one, because that is the ID of the movie that we clicked on show details that click continue. Now you can see that we have in your welcome first movie, 10 out of 10. This is the description for the first movie. Let's go to show all. Now that I click the third movie, which has the ID three and then click show details. You can see the ID here is three to continue. You'll see that this is the third movie. And here we have the rate eight of 10, and then this is a description for the third movie. And up here, you can see that the URL is being updated from movies to movie and then three. So if I change the three in here to two and press enter you'll see that I get the details for the second movie. If I change these from two, let's say to one, press enter. I'll get these details. Now, if you want, as I mentioned, you can just come in here.
>
> **[6:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=379)** So the movie is coming just from the movie here. Then we could have, let's say details and then ID save. So this is basically how you can define a custom route in here and click the play button. If you go in here to movies and then show details you'd see that the URL is movie one. You get an HTTP error, 404 which means that the page could not be found. But if you add in here after the movie which is basically the razor page name could add in here let's say, details. And then one, you are going to get the movie details. Let us go and reverse this change. And also add to the movie in here, the ID lets close the browser, your movie and then we' going to use model dot movie. And then question mark ID move the details from here. So we have just like the razor page name then slash the ID. Save the changes. Let's run this project one last time here let's go to movies. If I click your own show details we'll get the movie with ID two. And then when you click show all you're going to get all the movies and all this data is coming from the database.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (9), open the (2), click on (1)
> **Env Vars:** url (2), htm (1), http (1)
> **Analogies:** for example (2), just like (1)
> **Warnings:** warning (3)
> **Non-Speech:** (typing) (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), means that (1)
> **File Paths:** htm.c (1)

#### [Service configuration in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] So far, you have learned how to add data to the database and also how to get data from the database. In all cases, you have had to inject the application context, which is configured to use an [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database. This is not a good practice, especially if you do not want to be database type dependent. It is better to create a service and do the database calls from this service. Then, instead of injecting the ApplicationDb context, you could just inject this service. And that is what you are going to learn on this part. You are going to first add a service, then you are going to inject this service and then at the end, you are going to configure the service. So let us go to Visual Studio and see it in action. To add this service, let us go to the Solution Explorer and then here, inside the Data folder, I'll just right click and then go to add a new folder. I'm going to name this folder Services. If you want, we could also create a services folder outside the Data folder in the same level as the project folder. So actually, let us do that. So I'll just remove the services, then right click on the project, go to add a new folder. I'm going to name this folder the Services. Then right click. We're going to add a class. This is going to be named the MoviesService.
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=99)** For this class, I'm going to also add an interface where we're going to just define the method names. So add a new item. The item is going to be an interface, and I'm going to name this IMoviesService and then click the add button. So here, let us define the methods. The first one is going to be used to return a list of all the movies, so Movie. List of movie, let us import the name space for the movie. That is MoviesApp.Data.Models. I'm going to name it GetAll. The second method is just going to return a movie and the name is going to be Get. The parameter is going to take an integer ID. And the last one is going to be void. And this is going to be used to add a movie to the database. Now let us go to the class or to the service class. In here, let us inherit from the IMoviesService. We are going to get an error and the error says that the MoviesService does not implement the interface member GetAll, Get and Add. So let us show potential fixes and then implement interface. Now we are going to inject the database from these files, so I'll just create a constructor, ctor. Then here, private read only,
>
> **[3:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=197)** or maybe just ApplicationDbContext. And the name is going to be _context. Let's import the name space. That is the MoviesApp.Data. Let us inject it inside here. Remove the _so they are different. And then in here, I'm going to assign to the _context the context. Now to add a movie, I'll just type in here _context.Movies.Add, and then add a movie. Then _context.SaveChanges. To get a movie, just going to type in here var movie is equal to _context.Movies.FirstOrDefault. And then, x that goes to ID is equal to the ID parameter. And then just return movie. And actually, since we have the move in here we can just directly type in here return. And now since we have just a single line of code we can go even further and remove the return and just type in here that goes to, so we have like a single line method. And then we can do the same for the GetAll. So in here, I'll just remove all this code.
>
> **[4:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=290)** And in here, I'll just type that goes to. And here, now we are going to have context.Movies.ToList. And here we see that we get an error and that's right because this can also be null value. Now let us also go to the interface and then change this one in here to nullable, and we can see that the warning is gone. So let us save all the changes. We created the MoviesService, now let us inject this service. Let us start with the movie in here. Instead of having ApplicationDbContext, we are going to have the MoviesService. Let's import the name space, change the context in here from context to _service. Let's do the same for this one in here. This is going to be service without an underscore. Then we are going to have _service is equal to service. And on the OnGet method, we're going to use this service instead of the context. And that is going to be service.Get method and then paste the parameter, the ID. Let us do the same for the movies. Now, I'll actually just copy this code in here, Control + C, paste it in here.
>
> **[6:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=382)** Then change the constructor name to be the movies model. Let us import the name space for the MoviesService. That is the MoviesApp.Services. And then in here, _service.GetAll.
>
> **[6:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=403)** Let's save the changes. Let us copy this part and go to AddMovie. And here the same way we are going to replace this code. Then you change the movies model constructor name to be AddMovie. Let's import the name space for the MoviesService. And then down here, we are just going to use the _service.Add method and pass as a parameter the movie. Let us remove this redundant line. The third step is that we need to configure the MoviesService, because otherwise we are not able to inject it in here. For that, let us go to be Solution Explorer. Let's scroll down in here and go to the Program.cs. And then here, just after the builder.Services.AddRazor we are going to configure the service. So builder.Services.AddTransient. So we can use AddTransient, which means for each request a new reference is going to be created of the service. We can use AddScoped, which means for each page a single reference is going to be created. And the last method is AddSingleton, and this is going to create a single reference. So let us use the AddScoped,
>
> **[8:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=498)** because this is the best in our case. And then in here, the first parameter is going to be the IMoviesService. So this means: what are you injecting in the constructors? We're injecting the IMoviesService. But what is the implementation of the IMoviesService? And that is the second parameter and the implementation is the MoviesService. And this is all we need to do to add a service and configure this service in a Razor Pages application. So that'll start this project and see the result. In here, let us go to Movies. Now, the movies will be loaded using the MoviesService. And we can see here that we get an exception which says: unable to resolve service MoviesService while attempting to activate the MoviesModel. So let us go to the movies model. I'll just close the browser. Let's go in here to the Movies.cshtml. And that's right, because in here we can see that we have not injected the interface. So in the Program.cs, we have defined that we are going to inject the IMoviesService. And the implementation for the IMoviesService is in the MoviesService. So let us change this from MoviesService to IMoviesService. The same goes down here. Save the changes. Let us close this. Let us do the same for the movie. In here, we need to inject the IMoviesService. Save all the changes.
>
> **[9:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=595)** And then add Movie.cshtml. So in here, IMoviesService. And then in here, IMoviesService. Let us save all the changes around the project one more time. Now let us go to the Movies. We can see that the data is loaded successfully. And this data now is coming by using the MoviesService. Let us got to show details. It's working fine. That's going to show all. Let us add a new movie to the database. So, Added From Service. Eight. This is the description example. And I click the a movie button. And you can see that we were able to add a new movie to the database using the MoviesService.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **UI Navigation:** go to (12), click on (1), scroll down (1)
> **Prerequisites:** configure (4)
> **Env Vars:** sql (1)
> **Tools:** visual studio (1)
> **Best Practices:** good practice (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 4. Securing Razor Pages Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Authentication vs. authorization](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=0)** - [Instructor] It's important that the applications that you build are secure, and trusted by your clients. The first step to secure applications, is to add authentication and authorization. These two terms are often confused with each other, because they're typically used together, and also share the same "auth" abbreviation. Simply put, authentication is the process of verifying who someone is. And authorization on the other hand, is about permissions. So what the user can access. In other words, authentication verifies who the user is, and authorization checks or determines what resources a user can access. Now, let us simplify these two concepts, by using our application used to store movies. Let us say we want to add more security to our application, by adding authentication and authorization. This way, we would have different users with different roles. Let us assume that we just want to have two roles, a normal user, and an administrator. A normal user will visit our application, will provide the credentials and log in. After the user is logged in, he will be able to see the list of all movies. So, he has access to this page. But if he wants to access, let us say, a page which is meant to be just for the administrators.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=92)** The access will be denied. Now, let us log into our system, as an administrator. The administrator, the same way, is going to provide the username and password, and will be logged in to our system. If he wants to see the list of movies, he'll be able to see this page. And if he wants to access the admin panel, he will have access to this page as well. From this simple diagram, the user just providing the username and password, and then logging into our system, is about authentication. So the system knows about these users. The second part, where depending on the user role, they can access certain areas or certain pages of our system, is about authorization. So, you can log into the system, but you are not authorized or you are authorized to access just certain areas of the application.

> [!info]- Semantic Content
>
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Simple authorization in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] In Visual Studio, I'll just go to the Solution Explorer. Then here on pages, I'll go to the add movie page. So here I can just right click, then go to page model. Now, to add simple authorization is as simple as just adding in here the authorize attribute. And for the authorize attribute, let us import the necessary namespace, which is the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).AspNet.Core.Authorization. And this way, we have set this page model to be accessed just by authenticated users. But for the authorize to work, we need to update the program.cs file. So we basically need to set up the as AspNet Core authorization in our app. So let us just go to the Solution Explorer, and then here go to program.cs. Then after the builder, so we have creating the builder. After the Razor Pages, we are going to configure the authentication. For that, I'll just type in here, authentication, and then I'll type builder.services. So we are going to add the authentication service.AddAuthentication. For authentication, we need to provide the default authentication scheme that we want to use. And let us say we want to configure our app
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=93)** to use cookie-based authentication. For that, I'll just type in here, cookie... So cookie authentication defaults, and then authentication scheme. That's the body namespace for the cookie authentication defaults, and that is the Microsoft.AspNetCore.Authentication.Cookies. And if you're over the authentication scheme, the default one you're going to see is cookies. So after we have set up the default scheme, let us also use the add cookie method, which is a default method that is used to add a cookie in our browser. And in here, the same way we are going to define the cookie authentication scheme. So, the CookieAuthenticationDefaults.authentication scheme. And in here, we are going to add some options for the cookie. So basically, we're going to define where is our login page. So if the user is not logged in, where do we want the users to be redirected? And if the user is logged in, but he's not authorized, where do we want to redirect the users? So in your options, then curly brackets, I'll type in your options.LoginPath. So if the user is not logged in, redirect the user to the login Razor Page. Otherwise, options.AccessDeniedPath.
>
> **[3:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=192)** So if the user is logged in but he's not authorized to access the page, then redirect the user to the denied Razor Page. Let us add a semicolon at the end. I'll just now save all the changes, and then start this project. Now, let us go in here to the movies, and then go to add new. Since we added the authorize attribute, you can see that we are not authenticated, so we are not authorized to access that page. So, authentication in other words is just authorization with no rules at all. You can see in here that we are redirected to the login Razor Page. And then in here we have a default URL parameter set to be the add movie. And add movie is the component that we tried to access. So basically after you log in in this page of the app, you can use this parameter to redirect your users to the add movie page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2)
> **UI Navigation:** go to (6)
> **Prerequisites:** set up (2), configure (2)
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** url (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Role-based authorization in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Narrator] The role based authorization is when the user that will access a certain page is authenticated, so logged in, and also has the necessary roles. So, in other words, the role based authorization is like the simple authorization, plus the role check. In our app, for a user to be able to add a movie, we have just added that the user needs to be authenticated. Let us add one more condition, so only the users that are authenticated and have the role Manager can add the movies. For that, let us go to Visual Studio and see direction. In Visual Studio, just go to the AddMovie.[C#](../../Glossary/Language/C%23.md)[HTML](../../Skills/Web%20Development/HTML.md).c# file. And here, on the Authorized attribute, the only thing that we need to do is that we need to add the condition check roles. So, roles is equal to Manager. What this means is that, for the users to be able to render or to call this model, they need to be logged in, and they need to belong to the role manager. Now- but I'll save the changes- if we go to the Program.cs, we have defined in here that, whenever the user is not logged in, we just want to redirect them to the Login page. So, let us go to the Solution Explorer and actually create this page. So, I'll just right click, then go to Add. We are going to add a Razor Page.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=94)** This is going to be just an empty Razor Page, and the name is going to be the Login page. I'm not going to type any code in here, but I'll just simply display an h2 header, which is going to say "Welcome to login" or maybe just a simple Login page text. So, let us save the change one more time, and let us start this project and see if we are redirected to this page. So, the project ran successfully. Let us go to the movies. And now, from the movies, let us go to Add new, and you are going to see that we are redirected to the Login page, and the return URL is the same, with the Add Movie value. Let us close the browser and go back to Visual Studio one more time. Now, let us go to the Add Movie Razor Page. In here we have defined that the user that will be able to access this page needs to be of role Manager, and here let us add one more role. So, let us say to access this page, you can either be an Administrator or a Manager. For that, just inside the Roles string, you can type Administrator or just an Admin and Manager. The way you read this line is that the user needs to either be Administrator, so an Admin role, or a Manager.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=191)** But, if you want the users to have two roles instead of at least one role, then, in that case, you can add two authorized attributes. So down here, just add another Authorize, and then I'm going to define the role to be a Manager. And then, remove the manager from up here, and now we have authorized roles Admin, authorized roles Manager. So, basically, the user needs to be an Admin and a Manager. If you want, in here you can have more than one. So, for example, the user needs to be either Admin or Admin1 or Admin2 role and Manager role. So, this way, you can create, like, different combinations of roles that you want the users that access this page to have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [C#](../../Glossary/Language/C%23.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** go to (8)
> **Tools:** visual studio (3)
> **File Paths:** addmovie.c (1), html.c (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)

#### [Claims-based authorization in ASP.NET Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] When an identity is created, you can assign different properties or value to the identity which we call claims. In identity, a claim can be the value for example of the first name, last name, age, date of birth, or any value which adds more information to the identity of the user. Claims are really useful when you want to create more complex user validation checks. Like for example, let us say that the movies in our system need to be added just by users who are graduated from at least a high school. A graduated user would have a graduation year value. For this, you can add a policy which is going to be used to validate a claim. So let us go to visual studio and see this in action. In here, I'll just go to the program.sc file, and then in here, after the add authentication, I'm going to add an authorization policy. So now just type builder.Services.Addauthorization,
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=77)** and then inside the add authorization method, I'm going to define a policy so options, and then inside here, options.AddPolicy. I'm going to name this policy graduated only. And then the value or the property that we need to check against is going to be the graduation years. So for that, I'll just type in here policy that goes to policy.RequireClaim. So the logged in user needs to have a graduation year value.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=124)** I'll add semi column in here and then semi column in here. So graduated only let us copy this value and then go to the add movie. In here., I'll just comment out these two lines Control + KC and then I will just type authorize then policy. And the name of the policy is going to be graduated only. So, so far, it's enough for the user to just have this property and a value in this property. Now, if you want to this policy, you can add more conditions. So that I say, for example, for this policy to be valid, so for the claim to be checked as valid, you need to be graduated at certain years. For that in here on the add policy, you are going to type your after the required claim. So you need to have the graduation year value to be, and then in here the value is going to be, let's say 2010. Another value is going to be 2012 and then 2015.
>
> **[3:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=202)** What this means is that this policy is going to be valid only for the users that have been graduated in these three years. So let us say for example you are user who was graduated last year. In that case, since you do not pass the policy check, you'll not be able to access this page.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **UI Navigation:** go to (3)
> **Tools:** visual studio (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps for learning more about Razor Pages](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=0)** - If you have made it so far, I want to thank you and congratulate you for watching this course. Throughout this course you learned about Razor Pages and you started by having an introduction to the key concepts, a comparison with the embassy framework, and also learned how to create a new .NET project. The next you learned about the data binding in Razor Pages, where you learned about the one way data binding, like showing data on a table, two way data binding like four validation and event data binding like binding a button click event. Last but not least, you also learned about model binding and data [Forms](../../Skills/Web%20Development/Forms.md) validation. Next, you learned how to configure entity framework core to work with [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database, where you learned how to get data from a database and also send data to the database. By the end of this course you learned about securing Razor Pages where you learned about the difference between authentication and authorization, and also learned about simple, role based and claims based authorization. This is what you have learned so far, but what should you learn next? Next you can try and work some more with the entity framework. For example, you can try to update data in the database and also delete data from the database. In any case, if you have any questions about this course
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=96)** or the .NET technologies in general, feel free to get in touch with me via Twitter or [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). And if you want to learn more about the .NET technologies check out my other courses here on LinkedIn Learning Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** net (3), sql (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - if (1)


## Instructor

- [Ervis Trupja](../../Instructors/Web%20Development/Ervis%20Trupja.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/asp-net-core-razor-pages-2476438)

## Skills Covered

- ASP.NET Core
- ASP.NET Razor

## Path Context

### In [Getting Started as an ASP.NET Core Developer](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20as%20an%20ASP.NET%20Core%20Developer.md)
← [C- and .NET Essential Training](../Software%20Development/C-%20and%20.NET%20Essential%20Training.md) | **3 of 9** | [Building Angular and ASP.NET Core Applications](Building%20Angular%20and%20ASP.NET%20Core%20Applications.md) →

## Appears In

- [Getting Started as an ASP.NET Core Developer](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20as%20an%20ASP.NET%20Core%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Building Web APIs with ASP.NET Core 8](Building%20Web%20APIs%20with%20ASP.NET%20Core%208.md) — ASP.NET Core
- [ASP.NET Core- Building a GraphQL API](ASP.NET%20Core-%20Building%20a%20GraphQL%20API.md) — ASP.NET Core
- [ASP.NET Core in .NET 6- Dependency Injection](ASP.NET%20Core%20in%20.NET%206-%20Dependency%20Injection.md) — ASP.NET Core
- [ASP.NET Core- Token-Based Authentication](ASP.NET%20Core-%20Token-Based%20Authentication.md) — ASP.NET Core
- [Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security](Securing%20ASP.NET%20Core%20Apps-%20Advanced%20Techniques%20for%20Web%20Application%20Security.md) — ASP.NET Core

---

[↑ Back to top](#)