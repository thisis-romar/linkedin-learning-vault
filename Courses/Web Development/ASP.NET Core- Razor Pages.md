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
  - Getting Started as an ASP.NET Core Developer
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/asp-net-core
  - skill/asp-net-razor
status: not-started
created: 2026-04-19
---

![ASP.NET Core: Razor Pages](https://media.licdn.com/dms/image/v2/C560DAQG_sOyeCs-0JQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655920911407?e=2147483647&amp;v=beta&amp;t=O6fB7HCf-3S4TgDZ07jep1_exvbexYywbY8cEvTp3yU)

# ASP.NET Core: Razor Pages

> Razor Pages allows you to build ASP.NET web applications quickly and easily without an MVC framework. In this course, instructor Ervis Trupja shows you how to create a Razor Pages application, use the PageModel, and manage dependencies as you go. Find out how to get your first dynamically rendered page up and running before you learn about data binding, working with forms and data, and securing yo

> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051) | 1h 46m | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Ervis Trupja]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/asp-net-core-razor-pages-2476438)

## Skills Covered

- ASP.NET Core
- ASP.NET Razor

## Table of Contents

### Introduction

#### Why use Razor Pages?
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980&t=0)** - Razor Pages is a page focused development framework for building dynamic data driven web applications with clean separation of concerns.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980&t=11)** We'll start this course by talking about the key concepts of Razor Pages and the comparison between Razor Pages and MVC framework.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980&t=20)** Next, you learn about data binding in Razor Pages where you learn about one way, two way, and event data binding.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980&t=28)** You'll also learn about model binding and data forms validation.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980&t=34)** Then you learn how to configure Entity framework core in a Razor Pages application and how to get and store data in an SQL server database using the Entity framework core.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980&t=45)** By the end of these cores, you'll also learn about securing Razor Page applications, where you'll learn about the difference between authentication and authorization, and also learn about simple, role based, and claims based authorization.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980&t=61)** Hi, my name is Ervis Trupja and I'm a freelance full stack developer and trainer.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/why-use-razor-pages?u=76281980&t=67)** Join me in my LinkedIn learning course as we explore the Razor Pages framework by building a simple application.

> [!info]- Semantic Content
>
> **Env Vars:** mvc (1), sql (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - razor (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980&t=0)** - [Instructor] Now, let us talk about a couple of things that you need to know to get the most out of this course.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980&t=7)** On this course you are going to create an [ANP.NET](https://ANP.NET) Razor Pages application.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980&t=13)** Having experience with any .net framework, especially NPC, is going to be helpful, but is not required.
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980&t=22)** As a programming language, I'll use C#.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980&t=25)** Having basic knowledge of C# is recommended.
>
> **[0:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980&t=29)** As development framework, I'm going to use the .NET Core 6.0 or as we call it now the .NET six.
>
> **[0:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-you-should-know?u=76281980&t=36)** As coding editor, I'm going to use Visual Studio 2022, Community edition.

> [!info]- Semantic Content
>
> **Env Vars:** net (3), anp (1), npc (1)
> **Code Keywords:** let (1)
> **URLs:** [anp.net](https://anp.net) (1)
> **Versions:** 6.0 (1)
> **Tools:** visual studio (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Razor Pages

#### What is ASP.NET Razor Pages?
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=0)** - [Narrator] Per definition, "[ASP.NET](https://ASP.NET) Razor Pages is a server-side, page-focused framework that enables building dynamic, data-driven websites with clean separation of concerns."
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=14)** Razor Pages is also known as a cross-platform development framework because apps built with Razor Pages can be deployed to Windows, Unix and Mac operating systems.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=26)** There are other frameworks that you could use to build cross-platform applications, but what are the key benefits of using Razor Pages over other frameworks?
>
> **[0:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=36)** First of all, the Razor Pages is a really lightweight and a very flexible framework.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=43)** It also provides the developers with full control over rendered HTML.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=49)** Last but not least, Razor Pages is the recommended framework for cross-platform, server-side HTML generation.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=59)** But is this framework for anyone, or can it be used just by developers with a certain level of expertise?
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=67)** The Razor Pages framework is really for any developer with any level of expertise.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=72)** If you are a developer with experience in any page-centric frameworks like PHP, [ASP.NET](https://ASP.NET) Web Pages, or [ASP.NET](https://ASP.NET) Web Forms, you can grasp this framework even faster.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=85)** This framework is easy to learn, and you can start building apps really quickly.
>
> **[1:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=91)** To be able to work with Razor Pages, you need to have installed at least .NET Core version 2.0, SDK, and Runtime.
>
> **[1:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=101)** Throughout this course, we are going to use the .NET Core version six or as we call it now, .NET six which is the current latest stable version.
>
> **[1:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=112)** Other than what we have mentioned so far, it's important to know that [ASP.NET](https://ASP.NET) Razor Pages is easy to learn, it's well supported with a large community of developers, and most importantly, it's a robust framework.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=128)** Last but not least, the Razor Pages use the popular C# programming language for the server-side programming, and Razor templating syntax for embedding C# in HTML markup to generate content for browsers dynamically.
>
> **[2:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/what-is-asp-dot-net-razor-pages?u=76281980&t=145)** You are going to learn more about the Razor templating syntax on the upcoming parts, as we build our application.

> [!info]- Semantic Content
>
> **Env Vars:** net (7), asp (4), html (3), php (1), sdk (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **Definitions:** is a  (2)
> **CLI Commands:** php (1)
> **Versions:** version 2 (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [narrator] (1)

#### ASP.NET Razor Pages vs. ASP.NET MVC
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=0)** - Razor pages are often compared with the [ASP.NET](https://ASP.NET) MVC framework.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=6)** The truth is that these two frameworks have a lot in common but they also have some key differences.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=13)** So before you decide which framework you want to use on your next project, it's important to know what the advantages of one framework are over another.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=23)** So let us first analyze how MVC framework works.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=28)** MVC stands for model view controller.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=33)** It's important to know that when you send a request from the view, a controller is going to handle the request and then send back a response.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=40)** But how does all this work?
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=42)** Let us say, you are in the browser and you click a link, which requests data from home/index The MVC application is going to receive this request.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=55)** Then it's going to use the [ASP.NET](https://ASP.NET) routing to decide which controller and action to trigger, and then use the [ASP.NET](https://ASP.NET) view engine to locate and render the view So the user can see the result.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=72)** As you can see in here the keywords are controller and action and [ASP.NET](https://ASP.NET) routing is the one that decides which controller and which action to call.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=84)** So basically decides how to handle your request.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=89)** The default routing configuration uses a combination of a controller and the action names.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=96)** But you can customize this to use your own custom names.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=100)** So for example, for the home index the routing is going to first search for the home controller and within the home controller it's going to look for the index action.
>
> **[1:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=112)** The same goes for the home welcome The routing system will first check for the home controller.
>
> **[1:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=118)** So it's going to search for a controller with a name home and then it's going to check for an action with a name welcome.
>
> **[2:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=127)** If we look behind the scenes the call will look something like this.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=132)** So we have a class named home controller.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=134)** It's important that the name of the class ends with controller, because that is really important for the engine and for this class to be an MVC controller, you need to inherit from the base class controller.
>
> **[2:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=148)** Then inside this class or inside this controller we have two actions.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=154)** We see that we have a method.
>
> **[2:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=156)** So a method with the return type IActionResult named index, which returns a view and another one with the same return type.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=165)** So IActionResult, and the name is welcome.
>
> **[2:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=169)** And it also returns a view.
>
> **[2:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=171)** The HTTP gets that you've seen here are called the decorators which tell our application that these two actions can be used to get data.
>
> **[3:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=181)** If you were to create a form which would be used to add data to the database then instead of having HTTPGet, we would have HTTPPost.
>
> **[3:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=192)** Now, this is just a brief description on how the MVC works.
>
> **[3:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=197)** Let us have a look at the Razor Pages.
>
> **[3:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=200)** The same way, let us assume that you are in the browser and you click a link which requests data from the home welcome.
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=208)** The Razor Pages application is going to receive this request.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=213)** Then the [ASP.NET](https://ASP.NET) routing is going to decide which Razor Page to trigger.
>
> **[3:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=218)** And then it's going to use the view engine to locate and render the view so the user can see the result.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=226)** And as you can see here, the key words are not controller and action, but is the Razor Page.
>
> **[3:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=234)** So behind the scenes, whenever you would call for example home welcome, the Razor Pages engine is going to first check the pages folder, which is the main folder where you can find all the razor pages.
>
> **[4:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=248)** Then it will check for the home folder.
>
> **[4:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=250)** Then within this folder is going to check for the welcome view.
>
> **[4:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=256)** So welcome.cshtml In Razor Pages, for each C sharp HDML file which is a view that the user gets to see.
>
> **[4:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=264)** We have a file C sharp, HTML dot C sharps so dot CS which is where all the logic is placed.
>
> **[4:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=273)** So for example, if we would have a simpler request let's say just home, then the [ASP.NET](https://ASP.NET) routing is going to search within the pages folder for a file named home dot C sharp HDML.
>
> **[4:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=286)** And as we said, for the C sharp HDML we are going to have the file C sharp dot HDML CS where all the logic is placed.
>
> **[4:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=294)** A real simple Razor Page example is going to look like this.
>
> **[5:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=300)** So in here we have the home model class.
>
> **[5:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=302)** It's really important that the name of the class ends with model.
>
> **[5:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=305)** So similar to with controllers, where it was important that the file name or the class name ends with controller.
>
> **[5:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=312)** In here, it's important that the class name ends with model and we do not inherit from the base class controller but we inherit from the base class page model but there are also other differences that you might need to take into consideration when you decide.
>
> **[5:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=330)** For example, in Razor Pages application, everything important can be found within the pages folder.
>
> **[5:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=339)** However, on MVC, you have separate folders for controllers and the views.
>
> **[5:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=345)** So basically in Razor Pages, everything is under the pages folder and in MVC, the code is spread in multiple folders.
>
> **[5:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=354)** Based on what we have taught so far, it's clear that the Razor Page is designed for page focused scenarios and MVC is controller heavy.
>
> **[6:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=365)** Other than that it's important to mention that in Razor Pages the anti-forgery token validation is enabled automatically but in MVC, you have to enable it manually.
>
> **[6:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=375)** It's not complicated but you just have to enable it manually.
>
> **[6:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=379)** And last but not least with Razor Pages, it's hard to create complex routes, but with MVC it's easier to create complex routes.
>
> **[6:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=390)** So in conclusion, there are few advantages of using Razor Pages over MVC.
>
> **[6:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=397)** The Razor Pages are easy to understand in the context of structure.
>
> **[6:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=402)** The Razor Pages do not have a controller and action to load The Razor Pages contain called behind each individual page.
>
> **[6:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=410)** This makes the Razor Pages more structured and easy to understand compared to MVC which is spread in multiple folders.
>
> **[6:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=419)** But MVC on the other hand is really good framework for the web applications, which have a lot of dynamic server views, single page applications rest API calls, et cetera.
>
> **[7:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-vs-asp-dot-net-mvc?u=76281980&t=433)** But Razor Pages are perfect for simple static pages that are read only or have lots of data input forms.

> [!info]- Semantic Content
>
> **Env Vars:** mvc (14), asp (6), net (6), hdml (4), http (1)
> **Code Keywords:** let (5), this. (2), type. (1), class. (1), static (1)
> **URLs:** [asp.net](https://asp.net) (6)
> **Analogies:** for example (4), similar to (1)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - razor (1)

#### Creating an empty ASP.NET Razor Pages project
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=0)** - [Instructor] On this part, we are going to create an empty Razor Pages application using Visual Studio and .NET 6 framework.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=9)** So let us go to Visual Studio and see it in action.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=13)** In here to create an empty project, I'll just go to File.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=17)** Then, New.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=19)** Project.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=21)** From the project templates in here, I'm going to select the [ASP.NET](https://ASP.NET) Core Web App.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=26)** And you can see in the description which says that, "A project template for creating an [ASP.NET](https://ASP.NET) Core application with example [ASP.NET](https://ASP.NET) Razor Pages content."
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=37)** If you do not see this option or this template in here, you can simply search... "web... app."
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=46)** And then select the [ASP.NET](https://ASP.NET) Core Web App.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=51)** Now click the Next button.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=54)** In here, now we need to provide a name.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=56)** I'm going to name this app the MoviesApp.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=61)** Because we are going to use it to store information about our favorite movies.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=66)** I click the Next button.
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=70)** We have said that throughout this course, we are going to use the .NET version 6.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=73)** So from the dropdown in here, I'm going to select the .NET 6.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=77)** And if you have other versions of .NET Core, you're going to see them here on the dropdown.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=84)** So I'm going to select the .NET 6.
>
> **[1:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=87)** I'm going to leave checked the Configure for HTTPS.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=92)** And I click the Create button.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=95)** Now that the app is created, I'm going to close the Properties.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=98)** Then go to the Solution Explorer, so we can see the project structure.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=104)** And here you can see that it's a pretty simple project.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=107)** So it has the Connected Services, which is used to connect your app to third-party services, like Azure services, Google services, et cetera.
>
> **[1:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=115)** Inside the Dependencies, you have the Analyzers, which are used to analyze the code for errors or mistakes.
>
> **[2:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=123)** Then you have the Frameworks.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=124)** And here, by default, we're going to have just the Microsoft.[NETCore.App](https://NETCore.App) and the [AspNetCore.App](https://AspNetCore.App).
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=132)** Then inside the Properties, we have the launchSettings.json file.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=136)** And inside this file, you can basically define profiles for your projects or how you want to execute your project.
>
> **[2:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=144)** And in here, for example, inside the profiles, we have two profiles, the MoviesApp... and the IIS Express.
>
> **[2:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=152)** For the MoviesApp, whenever we run this app, it's going to run on these ports.
>
> **[2:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=159)** And for the IIS Express is going to run on a different port.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=163)** Now, the profiles that you see in here, you can see them listed here, on the dropdown where you get to define how you want to run your app.
>
> **[2:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=172)** Then next, we have the root folder.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=175)** And the root folder contains static assets for the app, like HDML files, so let's say, static HDML files, JavaScript files, CSS, images that you want to load in your app.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=187)** And in here, you can see that they are separated in three different folders.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=191)** css for CSS code.
>
> **[3:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=193)** js for JavaScript code.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=195)** lib for different JavaScript libraries, like jquery, jquery-validation, et cetera.
>
> **[3:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=201)** And the last one is the icon that you see in your browser.
>
> **[3:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=204)** Now in here, if you want to store images, you can simply just create a new folder, images, and then store the images of the static images in your application.
>
> **[3:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=215)** We mentioned on the previous parts that the most important folder in a Razor Pages application is the Pages folder.
>
> **[3:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=223)** Because basically in here you put all of the important pages.
>
> **[3:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=228)** If I open this folder.
>
> **[3:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=230)** In here you're going to see that we have some pages.
>
> **[3:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=232)** So we have the Error page, we have the Index, and we have the Privacy.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=237)** Now, for each cshtml, we have the cshtml.cs, which is used to write the logic.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=246)** Now, in this case, we do not have like a super complex logic, but the most important part is that we have this OnGet method, which is used to return the view.
>
> **[4:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=257)** And down here, we have the Index.
>
> **[4:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=260)** And here we also have the constructor.
>
> **[4:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=262)** And we have the OnGet method.
>
> **[4:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=264)** You can see that the Index page has a class IndexModel.
>
> **[4:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=269)** And it inherits from the base class PageModel.
>
> **[4:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=273)** The same goes for Privacy.
>
> **[4:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=275)** But we have two different views in here.
>
> **[4:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=278)** The ViewImports.
>
> **[4:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=281)** And in this view, we basically import all the namespaces or the usings that we want to use throughout the app.
>
> **[4:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=288)** And on the ViewStart, we get to design, which is the default layout that is going to be used to render our application.
>
> **[4:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=297)** So in here we see that our layout page is set to be the _Layout.
>
> **[5:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=301)** You can find this page inside the Shared folder.
>
> **[5:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=305)** And in here you have the _Layout.cshtml, which also contains the navigation bar.
>
> **[5:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=313)** But the most important section in here is inside this div container.
>
> **[5:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=318)** The method RenderBody.
>
> **[5:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=320)** Because this method serves as the placeholder where we render all the pages.
>
> **[5:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=327)** Now, at the bottom of the Solution, we have the appsettings.json file.
>
> **[5:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=331)** The appsettings is also known as the configuration file because in here we store data like the connection strings, the application secrets, et cetera.
>
> **[5:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=340)** And the last one is the Program.cs, which is the most single important file.
>
> **[5:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=347)** Because the whole app execution starts from this file.
>
> **[5:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=350)** And here you can see that we have some default comments.
>
> **[5:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=354)** Like for example, in this section you can add services to the container.
>
> **[5:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=357)** It seems like we have added, for example, the Razor Pages service.
>
> **[6:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=362)** Then down here, you can define the request pipeline.
>
> **[6:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=366)** This code in here is going to be executed only if the environment is not Development.
>
> **[6:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=370)** So basically, in production.
>
> **[6:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=375)** And then, down here, we have this line, UseHttpsRedirection, which is used to redirect HTTP requests to HTTPS.
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=384)** We have the UseStaticFiles, which enables static files such as HTML, CSS, and images, and JavaScript files to be served.
>
> **[6:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=393)** So if you want to use files from this folder, you need to have this enabled.
>
> **[6:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=399)** Then we have the UseRouting, which as the name already indicates, as the route matching to the middleware pipeline.
>
> **[6:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=405)** And we said that whenever a request goes through a Razor Pages application, the [ASP.NET](https://ASP.NET) route is going to check for the page name within the Pages folder.
>
> **[6:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=418)** Then we have the MapRazorPages.
>
> **[7:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=420)** And this method is used to configure the endpoint routing for the Razor Pages.
>
> **[7:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=426)** So basically, this is the method that is used for the [ASP.NET](https://ASP.NET) route to be able to recognize an [ASP.NET](https://ASP.NET) Razor Page request.
>
> **[7:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/creating-an-empty-asp-dot-net-razor-pages-project?u=76281980&t=437)** And the last method, as the name already indicates, is used to run the application.

> [!info]- Semantic Content
>
> **Env Vars:** net (12), asp (7), css (3), https (2), iis (2)
> **Code Keywords:** static (4), let (2), new. (1), default, (1), case, (1)
> **UI Navigation:** select the (4), go to (3), dropdown (3)
> **URLs:** [asp.net](https://asp.net) (7), [netcore.app](https://netcore.app) (1), [aspnetcore.app](https://aspnetcore.app) (1)
> **Analogies:** for example (3), such as (1)
> **Prerequisites:** configure (2), you need to have (1)
> **File Paths:** launchsettings.json (1), appsettings.json (1)
> **Tools:** visual studio (2)

#### Key ASP.NET Razor Pages concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=0)** - [Narrator] Now that we have seen the project structure of an anti-Razor Pages application, it's important to know the key concepts that you are going to use throughout this course to get the most out of it.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=13)** The most important concept is the Razor Pages, that's a Razor page or a Razor file.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=19)** The Razor pages or Razor files are files that contain both the client sides of the HTML and also the C sharp code.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=28)** So these are the C sharp and also the C sharp code.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=34)** The Razor pages are the pages that are decorated with the @page keyword.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=40)** For each page we also have a model.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=43)** And we use the model keyword to define the model.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=47)** Another important component in a Razor page or Razor file is the Razor code block where you can write C sharp code.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=55)** If we go back to Visual Studio and then here, for instance, I have up on the error dot c sharp HTML Razor page.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=63)** We are going to see that this is a Razor page because it's decorated by the page keyword.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=69)** The model for this page is the error model.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=72)** And if you right click and then go to Definition, you are going to see that we are redirected to the Error dot C Sharp HTML dot C sharp So the CS, and that is basically the code behind file of this one.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=89)** And then here you have the, @ symbol and opening and closing curly brackets, where inside here you can write C sharp code.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=96)** So for example, string example is equal to just an empty string.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=106)** Now, if you go to the error dot C sharp HTML, so another way to navigate to the model, inside here so, in the error, if you expand the error you are going to see the model for that Razor page.
>
> **[2:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=122)** To pass data from a page to a model, or vice versa, We are going to use model binding.
>
> **[2:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=127)** The model binding is not a Razor specific concept but it's important to know that we're going to use model binding to pass data.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=136)** To validate data, we are going to use model validation methods.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/key-asp-dot-net-razor-pages-concepts?u=76281980&t=140)** And throughout this course we are going to learn how to validate data both on the front end side, but also on the back.

> [!info]- Semantic Content
>
> **Env Vars:** html (4)
> **UI Navigation:** go to (2), navigate to (1)
> **Code Keywords:** pass (2)
> **Analogies:** for instance (1), for example (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. Working with Forms in Razor Pages

#### Data binding in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] Binding data is a fundamental task in building applications because at some point every application needs to either display data or receive data.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=11)** So data binding is a connection bridge between the views.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=15)** So what the user gets to see, and the business logic of the application, which happens to be the back end side.
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=22)** In Razor applications, you combine data using three different ways.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=28)** We have the one-way data binding, which is the one-directional data binding.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=32)** So basically, the data comes from the back end to the view.
>
> **[0:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=36)** We have the two-way data binding.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=38)** As the name already indicates, the data comes from two directions.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=42)** So we get data from the backend, but we are also able to send data to the backend.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=48)** And the third one is the event-binding or binding to user actions.
>
> **[0:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=53)** Examples of one-way data binding would be when you load data in a grid or when you load data in a table.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=60)** When you get a profile picture where you display time on the screen.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=64)** And so for example, on the case of time on the screen, you just get the time, but you're not actually having any effect or you're not changing the time.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=72)** Or when you load data in a grid or in a table, you're just getting data from the backend side but you're not sending any data to the backend.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=82)** Or the two-way data binding, we would have as an example, a calculator.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=85)** So you basically provide the values, and you also get a response.
>
> **[1:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=90)** You would have a form validation.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=92)** So you provide some data, and you get a response.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=95)** And as an event by an example, we would have when the user clicks a button, let's say we can have a function that responds to the click event.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=106)** When the user types something on the keyboard.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=109)** When the user touches screen.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/data-binding-in-asp-dot-net-razor-pages?u=76281980&t=111)** Or even when the user moves the mouse.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (1), for example (1)
> **Speakers:** - [instructor] (1)

#### ASP.NET Razor Pages application overview
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=0)** - On the last chapter we created a new razor pages application throughout this course we are going to use the same project but I've added to that project some new pages which are necessary for the upcoming parts.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=14)** So let us go to visual studio and have a look at all the new pages, and how our project looks like.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=23)** In visual studio let us go to the solution explorer, and then in here, go inside the pages folder, and in here you can see that I've added three new pages.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=33)** We have the add movie which are going to use to add new movies.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=38)** We have the movie which are going to use to display the details of a single movie and movies view to display a list of movies.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=48)** For each view, you are going to see that we have the csharp file, which is the code behind file and they are currently all empty.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=57)** So if I go to movie, you'll see it's empty.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=61)** If I go to movies you'll see it's empty, and to create a new page.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=66)** So I'm just going to create in here new page just go to add a Razor Page, in your select razor page, empty razor page using entity framework or using entity framework.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=79)** and then the CRUD operation.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=81)** I have selected the razor page empty.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=85)** I click add, let us name this page, test.
>
> **[1:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=91)** And then click the add button one more time.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=94)** We are going to see that the test view was created and we have the code behind file, which is the csharp file.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=100)** And it has just the model which inherits from the page model.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=105)** And then just the get method.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=109)** Now let us start visual studio so we can see the project.
>
> **[1:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=115)** Once the application starts, you're going to see in here this simple landing page, then here on the top you have the movies, and here we are going to have a list of movies. And currently all this data is hard coded.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=128)** So you're going to have a list of movies here on the bottom right, you have the add new button.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=133)** When you click in here, you'll be redirected to this view which is a form where you are going to provide a title, a rate, and a description.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=142)** Then click add movie to store all this data in the database.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=146)** Also in the movies view, when you click show details you are going to be redirected to this new page.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=155)** And here you're going to have the movie title the movie rate, and the description, because as you could see here on the show all on the list you have just the title and the rate, but if you want to see also the description you need to click the show details button.
>
> **[2:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=170)** Now, if you want to navigate to the test page that we just added, you can simply just go in here and then click test and then press enter.
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=180)** You'll see that you get just an empty screen because the csharp HTML file doesn't have any call.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=187)** But if I go to visual studio, for example, and then you go to test dot csharp HTML, and I'm just going to add an H1 tag, which says hello from test page, then save and click this button, the hot reload.
>
> **[3:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=207)** Let's go back to the browser.
>
> **[3:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=209)** In here, now you're going to see the H1 tag that we just typed.
>
> **[3:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=215)** So let us close the browser and go back to visual studio.
>
> **[3:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=219)** We are going to remove the test page.
>
> **[3:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=223)** So just right click, then delete.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=226)** We do not need the privacy, as well.
>
> **[3:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=229)** So, then we are going to remove the error.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=237)** Now, let us build our project to make sure that everything works as expected.
>
> **[4:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=245)** And you can see that the build succeeded.
>
> **[4:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/asp-dot-net-razor-pages-application-overview?u=76281980&t=248)** And if I run the project, we can see that the project runs successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (1)
> **UI Navigation:** go to (7), navigate to (1)
> **Tools:** visual studio (5)
> **Env Vars:** html (2), crud (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### One-way data binding in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] On this part, you are going to learn about one way data binding.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=5)** You are going to do so by replacing the hard coded HDML data in here with a list of data that comes from the code behind file of a razor page.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=15)** The data will still be hard coded data, but not on a view.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=19)** You'll learn on the next chapter how to get data from an SQL database using the entity framework core.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=27)** So for now, let us go to visual studio and see it in action.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=32)** In visual studio, I'll just go to the Solution Explorer and then you'll go to the movies.cshtml which is the view, and then go to the code behind file.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=43)** So let us open this file and then we are going to pass this data to the view so we can show all this data in the table.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=51)** Now to the view, we are going to pass a list of movies, but for us to be able to pass these list of movies, we are going to create the movie model.
>
> **[1:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=62)** So let us go to this Solution Explorer and here right click.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=66)** Go to add, we are going to add a new folder.
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=70)** I'm going to name this folder the data folder.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=73)** And inside this folder I'm going to add another folder.
>
> **[1:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=78)** Going to name this folder the model's folder.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=82)** And a model is just a C-sharp class and we are going to use the same class to create our table in the database on the next chapter.
>
> **[1:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=90)** So let us go to class.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=94)** We are going to name this the movie and I click the add button.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=102)** The movie class is going to have just four properties.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=105)** Now we can add as many as we want, but that is not the focus of this course.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=109)** We're going to keep the movie model as simple as possible.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=114)** It's going to have a title.
>
> **[1:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=116)** It will also have a property of type integer named rate and it'll also have a property of type string named description.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=128)** Now as I said, in here if you want you can add other properties like for example, the date created, date created by, et cetera.
>
> **[2:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=137)** Then I'll save the changes in here and go to the movies C-sharp file.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=143)** And here I'll just type public.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=146)** This is going to keep the list of movies.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=149)** So list movie.
>
> **[2:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=152)** Let us import the namespace.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=154)** That is going to be the movies app.data.models and we have movies and then get set.
>
> **[2:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=162)** Now, when you want to send data from the model to the view, you need to use the OnGet method.
>
> **[2:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=170)** And when you want to get data from the view, then you need to use another method called OnPost.
>
> **[2:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=178)** And we going to talk about that method on one of the upcoming parts.
>
> **[3:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=183)** Now, let us add the values to the movies.
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=186)** So movies is equal to a new list of movie.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=191)** Then inside you'll just create a new movie, which is going to have the title let's say, okay, let me bring the T down here.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=206)** Title is going to be first movie title.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=213)** The rate is going to be let's say 10.
>
> **[3:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=218)** The description is going to be let's say,
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=226)** first movie description goes here.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=233)** And the movie needs to also have an ID.
>
> **[3:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=235)** So ID is going to be a one.
>
> **[4:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=240)** Now, let us add one more movie.
>
> **[4:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=242)** So I'll just copy this one in here, paste it down here.
>
> **[4:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=249)** Let's add one more and then one more.
>
> **[4:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=255)** Now, depending on how you want to structure the code, can just bring the new movie down here.
>
> **[4:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=261)** Let's say two.
>
> **[4:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=263)** This is going to be the second movie.
>
> **[4:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=267)** Let's say the rate is going to be seven, ID three.
>
> **[4:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=274)** Rate is going to be five.
>
> **[4:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=278)** Say third movie.
>
> **[4:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=280)** Now, these are not important, but just so we are consistent on just replace all these values and the ID is going to be four in here.
>
> **[4:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=289)** Then I'm going to remove the coma and add a semi colon in here.
>
> **[4:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=296)** So now that we have the list of movies, let us go to the view.
>
> **[5:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=300)** So in the Solution Explorer, I'll just go to the movies.cshtml.
>
> **[5:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=306)** And now here, all this hard coded data.
>
> **[5:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=309)** So all these table rows, I'll just remove them all.
>
> **[5:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=313)** So I'll just remove all this data.
>
> **[5:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=318)** And I'm going to use in here for each loop to iterate through the movies and display all the data.
>
> **[5:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=326)** So each in here I'll type var_movie in the model.movies.
>
> **[5:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=342)** Then inside here, we are going to have the table rows.
>
> **[5:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=347)** Now to structure this code, press Control + K + D.
>
> **[5:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=351)** Let us remove the extra spaces from here.
>
> **[5:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=355)** Now, instead of the one in here, we are going to have the movie ID.
>
> **[5:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=359)** So for that @_movie.id.
>
> **[6:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=364)** Then in here, we are going to have the movie title.
>
> **[6:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=367)** So @_movie.title and then in here we are going to have @_movie.description and then from 10.
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=384)** And then on these show details we're going to redirect the users to movie.
>
> **[6:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=387)** And then the movie ID is going to be @_movie.id.
>
> **[6:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=397)** Now we're going to talk more about the routing on the upcoming parts.
>
> **[6:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=402)** So let us save all the changes and let us run the project to see the result.
>
> **[6:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=409)** So we see that the app (indistinct) successfully.
>
> **[6:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=411)** Let us go to movies.
>
> **[6:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=413)** And on here you can see the four movies that we added to the list.
>
> **[6:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=416)** So here for example, we see that we have a title and here we have the rate, but the rate is actually wrong.
>
> **[7:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=423)** So we have in here the description.
>
> **[7:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=425)** Then I'll just go back to visual studio and fix this real quick.
>
> **[7:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=429)** And here we can see that on line 26 instead of using the rate, we have used the description.
>
> **[7:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=435)** So let us type in here rate, save all the changes, then hot reload.
>
> **[7:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=441)** Let's go back to the browser.
>
> **[7:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=444)** And on here, you see that we have the title, we have the rate, and then we have the action.
>
> **[7:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=448)** If you hover on this action, you'll see that at the bottom left you have movie slash one which is the ID one.
>
> **[7:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/one-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=455)** And for the last one you're going to have the movie slash four which is the ID four of the fourth movie title.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), pass (3), class. (1), public (1)
> **UI Navigation:** go to (10)
> **Cross-References:** next chapter (2), go back to (2)
> **Tools:** visual studio (3)
> **Env Vars:** hdml (1), sql (1)
> **Analogies:** for example (2)
> **Code Identifiers:** var_movie (1)
> **Speakers:** - [instructor] (1)

#### Two-way data binding in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] On this part, you are going to learn about two-way data binding.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=5)** We have mentioned on the first part of this chapter, that an example of two-way data binding, is when we use forms.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=13)** So, we can get data to a form, but, also submit data from a form.
>
> **[0:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=18)** You'll also learn how to use the OnPost method to submit data from a form to Razor Page Model.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=25)** So let us go to Visual Studio.
>
> **[0:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=29)** In Visual Studio, let us go to the Solution Explorer.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=33)** And then you go to the AddMovie.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=37)** And if you want you can just right-click, and then go to PageModel, and then you'll be redirected, or, you'll be sent to the PageModel file.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=47)** And then here we are going to define the properties that we want to bind to our form.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=51)** And we have seen that in our form, we have three properties.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=56)** So, I'll just type public string Title.
>
> **[1:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=62)** Then we have another one, that is string Description.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=69)** and we have one more, which is int Rate.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=77)** Now, if you want to initialize these values, you can use the OnGet method.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=81)** So, for example, in here, title is going to be Welcome.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=89)** And we have said that the OnGet method is the first method that gets executed, which also renders the AddMovie view in this case.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=98)** So let us go to the AddMovie.
>
> **[1:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=101)** And here we can see that we have a form.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=103)** So, for this form, let us define the method.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=107)** The method is going to be post, and then to bind the values from the C# file in the C# HTML, we are going to use the name property.
>
> **[1:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=118)** So in here, input, and then name.
>
> **[2:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=122)** This is going to be the name of the property that we're going to use to bind the value.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=126)** So, Title, the type is going to be a text.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=134)** Let's do the same for the rate.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=136)** So, the name is going to be Rate, and for the text area, the name is going to be the Description.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=150)** Now, let us just go to the C# file one more time.
>
> **[2:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=156)** And here for us to be able to receive the request we are going to create, or, we are going to use the method OnPost.
>
> **[2:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=166)** And then inside here, I'll just debug.
>
> **[2:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=169)** So, let's say, string value is equal to the dollar sign, the first value is going to be the Title, the second value is going to be the Rate, and the third value is going to be the Description, and then in here, that'll just return the same page.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=195)** Now, if you want you can also redirect the users to another page.
>
> **[3:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=198)** For that you need to use the method, return, redirect, And let's say after the users, add a new movie, we want to redirect them to all the movies, so in here, Movies.
>
> **[3:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=210)** You'll see that you get an error, and that's right, because we are trying to return something in a method which doesn't have a return type.
>
> **[3:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=218)** So let us define the return type to be a ActionResult, and you'll see that the error is gone.
>
> **[3:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=225)** And let us comment out this line, then let us put a break point in here.
>
> **[3:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=234)** Let us save all the changes, and run this project.
>
> **[3:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=239)** In here, let's go to the Movies, then Add New.
>
> **[4:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=243)** I'm going to provide a Movie Title, let's say, Ervis.
>
> **[4:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=250)** The rate is going to be 9.
>
> **[4:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=251)** This is a description.
>
> **[4:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=254)** And I click the Add Movie button.
>
> **[4:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=257)** You are going to see that we reach the break point.
>
> **[4:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=261)** And then in here, if I hover on the value you're going to see that we didn't get any data.
>
> **[4:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=266)** So the Title came as null, the Rate came as zero which is the default integer value, and the Description came as null.
>
> **[4:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=275)** Now the reason for that is because, by using this way we can only send data to the front end.
>
> **[4:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=281)** If you want these properties to be bidirectional, so, to bind values in both directions, which are other words for two way data binding, you need to use a decorator named BindProperty.
>
> **[4:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=299)** So, BindProperty for the Title, BindProperty for the Rate, and BindProperty for the Description.
>
> **[5:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=312)** Then I'll save the change one more time, and then run this project.
>
> **[5:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=320)** Let us provide a title in here.
>
> **[5:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=322)** So, Simple Title, let's say, 8, Sample Description, and click the Add Movie button one more time.
>
> **[5:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=333)** Now, if you hover on the title, you're going to see that we have Sample Title.
>
> **[5:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=338)** If you hover on the Rate, you're going to see 8, and if you hover on the Description, you're going to see the Sample Description.
>
> **[5:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=345)** So, basically if you want a property to be able to bind data from the front end to the back end, then you'll need to use the BindProperty.
>
> **[5:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=355)** And if you go to the BindProperty, so just right-click, and then go to Definition, you're going to see that the BindProperty inherits from the attributes, and on here, you can just click continue, and you'll be redirected to the same page.
>
> **[6:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/two-way-data-binding-in-asp-dot-net-razor-pages?u=76281980&t=375)** On the upcoming parts, we're going to redirect the users to the Movies page, after the movie has already been stored in the database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), public (1), case. (1), return, (1), type. (1)
> **UI Navigation:** go to (9), right-click (2)
> **Tools:** visual studio (2)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Event binding in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=0)** - With event binding, you can add a specific event which is then going to call a function.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=6)** When the event is triggered in the associated dump element.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=10)** The event binding lets you list four and respond to user actions such as key strokes, mouse movements, clicks, and touches.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=21)** On this part you're going to learn how to create a simple page handler.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=26)** So let us go to visual studio and see it in action.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=30)** In visual studio, I'll just use the at movie csharp HTML file, And then I am going to create an, A tag.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=40)** Then you're going to type asp, then page, then handler, is equal to.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=47)** Then I'll say my on click.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=56)** Let us name this link, let's say, click me.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=60)** So this is going to be the method name.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=63)** So control C, I'll just copy this value, then go to the csharp file.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=69)** So in your public void, on get, so the on get is important. And then paste the name, and then add the parentheses in here, so this becomes a method. Then here I'll just add the string stop here, and the string and then just put a break point, just so we can see that we reached this function.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=94)** Now let us save all the changes and then run this project.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=102)** So the app brand successfully, let us go to the movies and then here, add new.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=107)** And then up here, you can see that we have the click me button.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=111)** And when I hover over here, you'll see that at the bottom left, you have add movie, then question mark.
>
> **[1:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=119)** We have handler is equal to my on click.
>
> **[2:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=123)** So whenever you click this link there's going to be a handler function on the csharp file named my on click.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=131)** So let us click this link.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=133)** You are going to see that once I click the link, I'm reaching this break point which means that everything is working as expected.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=140)** So you can use this functionality, let's say, when you want to track how a user behaves in your website.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=146)** Now here, I'll just click continue.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=150)** And then I'll just close the browser.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=153)** Just going to comment out these lines.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=157)** So I'll not remove the call just so you have the call just remove then the break points.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=163)** Then go to the at movie.
>
> **[2:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/event-binding-in-asp-dot-net-razor-pages?u=76281980&t=166)** I'll just comment out this line and then save all the changes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (3), public (1), new. (1), continue (1)
> **UI Navigation:** go to (4)
> **Tools:** visual studio (2)
> **Env Vars:** html (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - with (1)

#### Model binding ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=0)** - When you bind data in a Razor Pages application, or any application in general, if you have a lot of properties, the Razor Page C# file is going to become very, very long.
>
> **[0:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=12)** Imagine you have 30 properties that you need to bind.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=16)** The code could easily become messy.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=19)** For that, it's important to know that in Razor Pages, you can also bind models.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=25)** With models, you get to define just a single line of code for the model and then use the properties within the model to bind data.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=34)** Let us go to Visual Studio and see this in action.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=38)** So in here, I'll just go to the C# file for the AddMovie.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=42)** And then instead of defining three properties, so I'm going to comment all this out.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=49)** I'm going to use a single line, that is going to be, 'public Movie'.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=57)** And then, let's import the namespace of this model.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=61)** That is the MoviesApp.Data.Models, then Movie, and then get set.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=71)** Now down here, we see we have an error because we do not have the title anymore.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=76)** So let me comment out this line.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=79)** So now we have the movie, let's go to AddMovie.cshtml.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=85)** Then here on the input, instead of using title, we are going to use Movie.Title.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=92)** Let me copy this part.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=93)** Control C.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=95)** We're going to have Movie.Rate.
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=99)** And then in here, Movie.Description.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=103)** Let us save all the changes.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=105)** Let's go back to the C sharp file.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=109)** In here, now, instead of having the value, title rate description, we are going to have the value, Movie.Title, Movie.Rate, and Movie.Description.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=126)** Let us comment out this line, so line 32.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=130)** Put a break point in here.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=133)** Save all the changes and run this project.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=138)** Now that the project ran successfully, let us go to Movies.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=143)** Then you go to add new.
>
> **[2:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=145)** Let's provide in here sample title.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=150)** The rate is going to be, let's say eight.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=153)** The description is going to be, 'This is a description'.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=157)** And then click the add movie button.
>
> **[2:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=161)** So in here now we see that we reached the break point.
>
> **[2:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=164)** So let us hover over the title.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=167)** We are going to see that we have an exception in here, which says that the movie title through an exception of type Null Reference Exception.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=175)** And if we hover on the movie, you are going to see that the movie is null.
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=180)** The same goes for rate and for the description.
>
> **[3:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=184)** Now, if we scroll up in here, we are going to see that we have defined the property movie of type movie, but we have not used the bind property decorator, which we said is necessary if we want to pass data from the view to the C# file.
>
> **[3:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=201)** So let us stop Visual Studio.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=206)** And then in here just before the movie, I'll type, 'BindProperty'.
>
> **[3:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=212)** Going to save all the changes and run the project one more time.
>
> **[3:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=217)** In here let us go to Movies, then add new.
>
> **[3:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=221)** Let's type in your movie title, nine, description.
>
> **[3:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=227)** And then click the add movie button.
>
> **[3:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/model-binding-asp-dot-net-razor-pages?u=76281980&t=231)** Then here, if I hover on the title, you're going to see that we have the movie title, on the rate, we have the nine, and on the description we have the description value.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), new. (2), public (1), pass (1), type, (1)
> **UI Navigation:** go to (6), scroll up (1)
> **Tools:** visual studio (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - when (1)

#### Form data validation in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=0)** - When it comes to working with forms, it's really important that you validate the data before you store them in the database.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=8)** To validate forms, you can either use JavaScript code on the front end, or you can validate the form data on the back end.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=16)** On this part, you'll learn how to validate forms on the back end side and show the errors on the front end side.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=23)** set on the form, if the data is not valid.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=26)** So, let us go to Visual Studio and see it in action.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=31)** The first thing that you'll need in here is that you'll need a placeholder where you want to display the errors.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=37)** So, let us go to the C sharp HDML files at the top of the view.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=42)** And in here, after each input, we are going to use a span as a placeholder for the errors.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=50)** So in here, just type, span.
>
> **[0:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=53)** And then after the span ASP validation, then four.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=59)** And then in here, we are going to use, let's say, @Model.Movie and then this is going to be for the title.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=75)** So, we use in here @Model.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=77)** The model is used for the model definition up here.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=81)** So in this case, it's going to be the @moviemodel, file dot movie property, or the binding value dot title property.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=92)** So basically it's going to be this file.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=95)** Here we are going to have this property.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=97)** And then in this property, we are going to have the title.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=103)** Now, if you want, we can also use single property.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=106)** So, let us actually disable this one.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=109)** Control KC to comb it out.
>
> **[1:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=112)** Let us enable this part up here.
>
> **[1:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=115)** Control KU Say the change in here.
>
> **[1:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=119)** Let us go to the view.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=121)** You are going to see that we have an error because now in the model we do not have a movie, but we have the Model.Title.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=129)** Let us also remove the movie from here.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=132)** Keep just the title.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=135)** And then after the validation, we're going to add a class, and the class is going to be a bootstrap class.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=143)** text dash danger, which is used to change the text color to red.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=149)** So, let us copy this line.
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=151)** Control C, place it down here.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=155)** This is now going to be for the rate.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=158)** Let us remove the movie from here.
>
> **[2:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=161)** Let's copy this one more time.
>
> **[2:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=164)** Place it down here.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=167)** The last one is going to be for the description.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=173)** Now let us save the changes here.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=174)** Let us go to the C sharp file and then let us scroll down here.
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=180)** On the post, we can comma out this line, and we can enable this one.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=187)** And then, here we can add a check for the model state.
>
> **[3:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=190)** So, if the model state dot is not valid, because we have this explanation marking here.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=203)** So, if the model state is not valid, what this means is that, if you have defined a property to be required, but you have not provided a value, then the model state will not be valid.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=213)** So, it's going to return the page.
>
> **[3:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=215)** So return page.
>
> **[3:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=219)** Otherwise, if it's successful, So let's say if all the data is provided, we are going to return the movies page.
>
> **[3:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=228)** So, let us put a break point in here.
>
> **[3:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=231)** Now up here, you can see that we have defined bind property, which means that all these fields are required.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=237)** And the rate, since its integer is going to default to zero.
>
> **[4:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=242)** So, even if we do not provide a value, this is going to be ignored.
>
> **[4:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=245)** And a zero value will be provided by default.
>
> **[4:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=249)** But we can still make this work by adding checks, for example, to check if the rate is greater than zero.
>
> **[4:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=255)** So, let us run this app.
>
> **[4:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=260)** Let's go to movies.
>
> **[4:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=261)** Tap add new.
>
> **[4:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=263)** Then you have not provided any value.
>
> **[4:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=265)** So I'll just click Add Movie.
>
> **[4:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=269)** You'll see that the title is now, the rate is zero.
>
> **[4:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=273)** the description is now.
>
> **[4:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=275)** So the model state is not valid.
>
> **[4:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=277)** Got to click Continue.
>
> **[4:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=280)** You're going to see that we get the same view.
>
> **[4:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=283)** And in here we have that the title field is required.
>
> **[4:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=286)** The value is invalid because in here we expect a number, and the description is required.
>
> **[4:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=292)** If I provide now, let's say a rate of eight, it's going to be title, and I'll not provide the description.
>
> **[5:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=302)** Click Add Movie.
>
> **[5:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=304)** This is not valid.
>
> **[5:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=306)** Click Continue.
>
> **[5:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=309)** You can see that we have these two values, but we didn't have the description provided.
>
> **[5:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=315)** Now, if we want, we could make the description optional.
>
> **[5:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=317)** To make the description optional, then I'll just go to Visual Studio.
>
> **[5:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=322)** On the description just after the string, I'm going to add the question mark, which stands for optional.
>
> **[5:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=330)** Then save all the changes.
>
> **[5:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=332)** Hot reload.
>
> **[5:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=337)** This was executed.
>
> **[5:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=338)** And now it's true.
>
> **[5:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=341)** Click Continue.
>
> **[5:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=342)** Let's go back to the browser.
>
> **[5:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=344)** Now here, let us provide a title.
>
> **[5:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=346)** So title name, the rate is going to be, let's say 10.
>
> **[5:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=350)** I will not provide a description, because the description is now optional.
>
> **[5:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=354)** And click Add Movie.
>
> **[5:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/form-data-validation-in-asp-dot-net-razor-pages?u=76281980&t=356)** You are going to see that we are redirected to all movies page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), continue (3), type, (1), case, (1), class, (1)
> **UI Navigation:** go to (6), scroll down (1)
> **CLI Commands:** make (3)
> **Env Vars:** hdml (1), asp (1)
> **Tools:** visual studio (2)
> **Prerequisites:** you'll need (2)
> **Cross-References:** go back to (1)
> **Definitions:** stands for (1)


### 3. Working with Data in Razor Pages

#### Setting up Entity Framework Core in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] Throughout this chapter, you are going to learn how to use Entity Framework Core to interact with an SQL server database.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=9)** For that we are going to follow three simple steps.
>
> **[0:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=12)** We are going to first create an Mt SQL server database.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=16)** Then we are going to get the database connection string.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=19)** And then at the end we are going to configure the Entity Framework Core.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=23)** For us to be able to configure the Entity Framework Core.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=26)** We need to install three packages.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=30)** The Microsoft Entity Framework Core.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=32)** The Microsoft.EntityFrameWorkCore.SqlServer, and the Microsoft.EntityFrameWorkCore.Tools.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=40)** The SQL server package, is a Microsoft SQL server database provider for Entity Framework Core.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=48)** The tools package, enables the no get package manager console to be used for Entity Framework Core commands.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=55)** We are going to use this package, when we create migrations.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=59)** So let us go to visual studio, and see it in action.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=64)** In here we are going to first create the SQL server database.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=68)** Now here on the left, you can go to the Server Explorer.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=71)** Now if you do not see this option in here.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=73)** You can just go to view, and then Server Explorer.
>
> **[1:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=78)** Now you let us right click in the data connections.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=82)** Then go to create new SQL server database.
>
> **[1:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=87)** From the server name drop down.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=89)** I'll just click the drop down, so we can load all the available server names.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=96)** And here you can see that I have two options the SQL express, and the SQL server.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=100)** I'm going to select, let's say the second one.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=103)** I'm going to use windows authentication, and the database name is going to be movies app and then dash DB.
>
> **[1:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=112)** And I click the okay button to create this database.
>
> **[1:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=117)** Now that the database was created.
>
> **[1:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=119)** Let us get the database connection string.
>
> **[2:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=120)** So for that I'll just right click, and then go to properties.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=125)** In here on the connection section, you have the connection string property.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=129)** I'll just select in here control a to select the whole value.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=133)** And then copy.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=135)** Now we have said that to store the database connection strings.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=138)** We use the app settings JSON file.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=141)** So in here I'll just go to appsettings.json.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=146)** And then here after the allowed host, I'll just put a comma.
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=151)** I'm going to create a new section, and you can see that I already have the predefined connection strings.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=157)** Now in here you can define multiple connection strings.
>
> **[2:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=160)** We are just going to define one connection string going to name it default connection.
>
> **[2:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=166)** And then in here based the value.
>
> **[2:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=171)** Now let us save the changes in here.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=174)** Next, we need to install all the packages.
>
> **[2:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=176)** So for that I'll just go to tools, then no get package manager.
>
> **[3:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=181)** And then either select the package manager console, or manage no get packages for solution.
>
> **[3:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=188)** If you select the package manager console, you'll just need to type in here.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=195)** So I'll just clear this window and then install dash package.
>
> **[3:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=204)** The first package we need to install is going to be the Microsoft.EntityFrameworkcore.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=213)** Then press enter.
>
> **[3:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=217)** Now that the Entity Framework Core package was installed.
>
> **[3:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=220)** Let us install the SQL server package.
>
> **[3:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=222)** So Microsoft.EntityFrameworkCore.SqlServer.
>
> **[3:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=231)** So the tools package was installed.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=233)** The next step is that we need to create the app DB context file.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=237)** So let us go to this Solution Explorer.
>
> **[3:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=239)** Then inside the data folder.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=241)** I'm going to add a new C sharp class.
>
> **[4:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=242)** So add a class, I'm going to name this class the application DbContext.
>
> **[4:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=251)** And this file is going to serve as the translator between the SQL, and our entities.
>
> **[4:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=258)** For this class to be the context file of Entity Framework Core.
>
> **[4:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=262)** We need to head from the base class DbContext.
>
> **[4:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=268)** That is important name space for the DbContext.
>
> **[4:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=271)** That is the Microsoft.EntityFrameWorkCore.
>
> **[4:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=275)** And down here I'm going to create the constructus Octor.
>
> **[4:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=279)** And in here I'm going to inject the DbContext options.
>
> **[4:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=282)** So DbContext options, and then here I'm going to base, or I'm going to use the name of this C sharp class.
>
> **[4:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=294)** I'll just name it options, and then pass these to the base class of base and then options.
>
> **[5:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=302)** Now inside here, we are going to define our only Db set.
>
> **[5:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=306)** And the Db set will be used by the Entity Framework Core, to create the table in our database.
>
> **[5:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=312)** And our database, we are going to have a single table, and to create the table.
>
> **[5:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=316)** We are going to use the model movie.
>
> **[5:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=319)** So for that after deconstructor, I'm just going to type public Db set.
>
> **[5:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=327)** And then in here movie, that's important name space for the movie.
>
> **[5:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=332)** That is going to be the moviesapp.data.models.
>
> **[5:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=337)** The table name is going to be movies, and then get set.
>
> **[5:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=340)** So we are able to get, and send data to the database.
>
> **[5:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=344)** Now we need to configure this file.
>
> **[5:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=347)** To be the default file, that is going to be used by the Entity Framework Core, to communicate with the SQL server database.
>
> **[5:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=354)** So for data has go to this Solution Explorer, and then in here go to Program.cs.
>
> **[6:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=362)** Then in here after the art razor pages line.
>
> **[6:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=365)** I'm going to type builder.Services.
>
> **[6:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=370)** We are going to add the database context.
>
> **[6:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=373)** And our database context file, is going to be the application DbContext.
>
> **[6:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=379)** So that I support the name space, that is moviesapp.data.
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=384)** And then inside here, we are going to define that this context file, is going to use the SQL server database.
>
> **[6:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=392)** So options that go to, and then in your options.UseSqlServer.
>
> **[6:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=404)** Now the SQL server, is going to have a connection string.
>
> **[6:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=407)** So let us first import the name space for the SQL server.
>
> **[6:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=411)** The connection string is going to come from the app settings that JSON file.
>
> **[6:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=414)** So this value, but how are we going to read this file.
>
> **[6:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=419)** And here I'll just type builder.Configuration and then get connection string.
>
> **[7:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=428)** The get connection string method is going to automatically search the app settings that JSON file for the connection strings section.
>
> **[7:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=436)** And from this section, we are going to get the default connection string.
>
> **[7:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=442)** And then at the end, going to add semi column and then control KD.
>
> **[7:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=446)** To format if we have missed any formatting.
>
> **[7:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=450)** Now in here I see that we have missed a closing phothosis (indistinct).
>
> **[7:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=455)** So I'll just add that and save the changes.
>
> **[7:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=460)** The last step, is that we need to add the migrations.
>
> **[7:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=463)** And the migrations will basically read the application DbContext, and here will check for any changes.
>
> **[7:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=469)** Then create an SQL readable code, which then will be used by the Entity Framework to update the therapies.
>
> **[7:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=476)** So you're on the Package Manager Consult, I'll just type add-migration.
>
> **[8:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=483)** Then we need to provide a migration name.
>
> **[8:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=486)** So this is going to be initial, and then press enter.
>
> **[8:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=492)** So this is why we need the EntityFrameworkCore.Tools package.
>
> **[8:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=497)** By having that package, we can type in here add migration command.
>
> **[8:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=502)** So we see that the migration file was created.
>
> **[8:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=505)** And you can see, that we have this file in here initial.
>
> **[8:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=507)** Which is the same name as our migration name.
>
> **[8:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=510)** It ignites from the base class migration.
>
> **[8:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=513)** This is going to just create a table named movies.
>
> **[8:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=515)** Which has the ID, the title, the rate, and the description.
>
> **[8:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=519)** The rate is of type integer.
>
> **[8:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=521)** The other ones are envar chart max.
>
> **[8:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=525)** Now for these changes to be reflected in our database.
>
> **[8:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=529)** We need to type the command update, and then database and press enter.
>
> **[8:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=536)** We see that the command was executed successfully.
>
> **[8:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=539)** So let us go to the Server Explorer.
>
> **[9:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=542)** Now in here, if I open the database and then tables.
>
> **[9:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=546)** You are going to see it.
>
> **[9:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=547)** We have in here the movies table, and if I show the table data.
>
> **[9:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=552)** We are going to see it for now.
>
> **[9:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=554)** We have no data.
>
> **[9:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/setting-up-entity-framework-core-in-asp-dot-net-razor-pages?u=76281980&t=556)** For the next part, you learn how to add data to this table, using the Entity Framework Core.

> [!info]- Semantic Content
>
> **Env Vars:** sql (15), json (3)
> **UI Navigation:** go to (12), select the (2), open the (1)
> **Code Keywords:** let (9), class. (2), class, (1), pass (1), public (1)
> **Prerequisites:** install (5), configure (3)
> **File Paths:** appsettings.json (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Adding and storing data in a database
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=0)** - Now that we have configured the entity framework core, it is time to add data to the database.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=6)** For that, let us go to Visual Studio and see it in action.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=11)** So in here, I'll just go to the Solution Explorer, and then here go to Add Movie.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=17)** And then in here, go to the C# file.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=20)** For us to be able to use the ApplicationDbContext, we need to create a constructor and then inject the AppDbContext in the constructor.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=30)** First of all, I'm going to clean up the code.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=33)** And then in here, just before the OnGet method, I'm going to type ctor then double tap.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=39)** And this is going to create the constructor.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=42)** Then just type in here, private then ApplicationDbContext and then _context; Let us import the name space for the ApplicationDbContext and that is the MoviesApp.Data.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=61)** Then inject this in the constructor.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=65)** I'll just remove the underscore so they are different.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=68)** And then inside here, I'm going to assign to the context, the context or the injected context.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=76)** Now on the OnPost, before we add data to the database, we are going to create the movie object.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=84)** So for that, I'll just type in here var movie is equal to new Movie, and this movie is going to have the Title set to Title.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=96)** It's going to have the Rate set to Rate and the Description set to Description.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=103)** Now, down here, let's add a semi colon and then I'm going to use the context.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=109)** So context.Movies.Add.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=114)** We're going to add the movie object that we just created and then context.SaveChanges to save the changes in the database.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=124)** Now, I knew you are going to get an error which says that this might be null.
>
> **[2:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=127)** So actually you need to check for this nullable property but let us scroll up and let us make this property required as well.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=138)** Then down here, let us remove this string value.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=143)** Remove this other part.
>
> **[2:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=147)** We're going to leave the breakpoint just so we have it for the parking.
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=151)** Now, let us save all the changes and run this project.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=158)** Now that the project runs successfully, let us go to Movies then Add new.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=165)** I'm going to provide the first title to be Welcome First movie.
>
> **[2:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=171)** The rate is going to be 10.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=173)** The description is going to be "The description of the first movie", and then just some dots in here and click the Add button.
>
> **[3:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=183)** Now here, you are going to see that the IsValid is equal to true.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=187)** We have the value of the title.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=189)** We have the value of the rate, and we have the value of the description.
>
> **[3:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=193)** So let us go next, and here, the object is being created.
>
> **[3:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=198)** We add this object to the context, and then we use context.SaveChanges to add the movie to the database.
>
> **[3:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=207)** Next, we're going to be redirected to the Movies page.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=211)** Now we do not see the movie that we just added in here because the data is not coming from the database so that I'll just close the browser.
>
> **[3:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=219)** Then you go to Server Explorer, and then right click on the Movies. Show Table Data.
>
> **[3:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/adding-and-storing-data-in-a-database?u=76281980&t=228)** In here, you can see that we have a movie with the Id 1 which has a title that we just provided, the rate, and the description.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), private (1), var (1), new. (1)
> **UI Navigation:** go to (6), scroll up (1), click on (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Speakers:** - now (1)

#### Getting data from a database
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=0)** - On this part, you are going to learn how to get data from the database using the entity framework core.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=6)** So for that, let us go to Visual Studio.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=10)** In Visual Studio, just go to the Solution Explorer, and then in here go to Movies, and then Movies C share file.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=19)** In here instead of hard coding the data, we are going to get this data from the database.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=25)** For that, the first thing that we need to do is that we need to inject the ApplicationDbContext in here.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=31)** So I'll just type ctor and then in here, ApplicationDbContext.
>
> **[0:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=41)** This is going to be context.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=46)** Let us import the name space.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=48)** And the name space is going to be MoviesApp.Data.
>
> **[0:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=53)** And then here just type private ApplicationDbContext and then _context.
>
> **[1:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=62)** Then inside the constructor, I'll just assign the value.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=65)** So _context is equal to context.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=69)** Then down here, I'll just remove the new list definition and then your movies is equal to, this is going to be context.Movies.ToList.
>
> **[1:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=83)** So that'll save all the changes and let us run this project to see if everything works as expected.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=92)** Now that the app runs successfully, let us go to Movies and now the movies will come from the database and you can see that we have just a single movie with a title Welcome First Movie.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=106)** So let us go and add a new movie. Add new.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=109)** This is going to be Second Movie in Db and the rate is going to be seven.
>
> **[1:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=118)** This is the description for the second movie.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=124)** Let's click the Add Movie button.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=126)** We reach the break point.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=128)** You're going to see that the model state is valid because we provided all the values.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=132)** So I'll just remove the break point and then click Continue.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=136)** And now you can see that we have two movies which are stored in the database and we can see them in here.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=141)** So for the second movie, we provided the rate to be seven.
>
> **[2:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=144)** So in here we have seven out of 10.
>
> **[2:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=147)** Let us go and add one more movie.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=149)** Let's say Third Movie Title.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=153)** The rate is going to be eight.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=155)** This is the description for the third movie.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=163)** And I click the Add Movie button.
>
> **[2:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=166)** In here you can see the third movie.
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=168)** The rate is eight out of 10 but if you click on the Show details you're going to see that the data in here is hard codes.
>
> **[2:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=177)** For example, we have Special title treatment.
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=180)** If I go to the next one, you can see that data is not coming from the database.
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-from-a-database?u=76281980&t=186)** On the next part, you'll learn how to get data for a single movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), private (1), new. (1), continue (1)
> **UI Navigation:** go to (4), click on (1)
> **Tools:** visual studio (2)
> **Analogies:** for example (1)
> **Speakers:** - on (1)

#### Getting data by ID from a database
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=0)** - [Instructor] On the last part you learned how to load all the movies from the database.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=4)** But when you go to the movie details you could see that the data was still hard coded.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=10)** So on this part, you learn how to get a single movie from the database, using the movie ID.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=16)** For that, let us go to visual studio.
>
> **[0:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=18)** In here let us go to Solution Explorer.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=21)** And then in here, go to movie, and then open the C file.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=28)** And you are going to first inject the application DB context.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=34)** So let us just go actually to the add movie, I'm going to copy this section, control C, and then paste it in here.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=46)** Let is import that name space for the application DB context that is the movies app dot data.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=55)** So here we see that we have an error and that's right because we are creating a constructor with the name, a movie model dot the constructor naming here needs to be movie model.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=64)** So just type in here, movie model.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=69)** Now in here, we are going to have a property or we're going to have a variable in here that we're going to use to store the movie data.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=76)** If you want, you can just go to the movies.
>
> **[1:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=78)** C sharp HTM.C sharp, copy this one, paste it in here.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=86)** Now, instead of having a list of movies, we're going to have a single movie.
>
> **[1:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=91)** So movie, the name is going to be movie, then import the name space for the movie.
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=99)** So, that is going to be the movies app dot data models.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=105)** And then whenever we load this razor page we are going to set the value of the movie.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=111)** And the movie is going to be context dot movies dot first or default, and here we can either use first or default, or just the first method.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=129)** The reason why we use the first or default is because if we do not find a movie in the database if first or default is going to return now but the first method is going to throw an exception.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=141)** So here N, that goes to N.
>
> **[2:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=145)** dot ID is equal to. and then here we are going to use the movie ID.
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=151)** And the ID in here is going to come from the on get method.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=154)** So here, we're going to have a bar meter.
>
> **[2:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=156)** So int ID and we are going to use this ID to get the movie.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=163)** And then here, you can see that you get a warning which says that possible now reference assignments.
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=168)** So basically the first or default can be now but this is not nullable in here.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=173)** So let us just make it nullable.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=175)** And now you can see that the warning is gone.
>
> **[2:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=178)** So, where is the ID going to come from now if you go to the movie page, so then I'll just go to the solution, explore, and then open the movie.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=189)** You'll see that up here.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=191)** After the page, we have defined the ID.
>
> **[3:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=194)** The ID is going to be part of the razor page route.
>
> **[3:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=200)** So what this means is that for you to be able to call this page, you need to pass as a par meter, the route ID, and for this ID you can also define a type because we have defined the type in our get method.
>
> **[3:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=215)** So this can be int and here you can provide any value you want.
>
> **[3:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=220)** So for example, before the ID, you could have let's say details and then ID, but it's important that the ID that you define in here is identical with the ID value that you provide inside the on get method.
>
> **[3:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=235)** So in here, that'll just go back to here.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=237)** I'm going to remove the details.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=241)** Then I'm going to save all the changes.
>
> **[4:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=243)** Then in here, we are going to replace the data.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=246)** So for example, the title now is going to be the movie title.
>
> **[4:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=252)** So in here, we are going to have, let's say at model dot and then we are going to have movie dot title.
>
> **[4:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=263)** Then here we are going to have @ model dot movie dot rate.
>
> **[4:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=270)** And then, and then down here we are going to have @ model dot movie dot description.
>
> **[4:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=278)** Now you can say that you get a warning which says that this can possibly be now.
>
> **[4:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=282)** So now that, I just had a question mark.
>
> **[4:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=284)** So if it has a value, we want to get the title.
>
> **[4:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=286)** If it has a value, we want to get the read.
>
> **[4:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=288)** And if it has a value, we want to get the description let us save all the changes.
>
> **[4:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=294)** And then in here, I'll just put a break point to see if we get data on the on get method and then click the play button to start this project.
>
> **[5:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=306)** So we can see that the project ran successfully.
>
> **[5:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=308)** Now I'll just go to movies.
>
> **[5:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=310)** And now when I click on show details, you are going to see that we reached the break point.
>
> **[5:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=315)** The ID has the value one, because that is the ID of the movie that we clicked on show details that click continue.
>
> **[5:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=325)** Now you can see that we have in your welcome first movie, 10 out of 10.
>
> **[5:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=330)** This is the description for the first movie.
>
> **[5:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=332)** Let's go to show all.
>
> **[5:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=335)** Now that I click the third movie, which has the ID three and then click show details.
>
> **[5:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=342)** You can see the ID here is three to continue.
>
> **[5:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=346)** You'll see that this is the third movie.
>
> **[5:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=349)** And here we have the rate eight of 10, and then this is a description for the third movie.
>
> **[5:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=354)** And up here, you can see that the URL is being updated from movies to movie and then three.
>
> **[6:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=362)** So if I change the three in here to two and press enter you'll see that I get the details for the second movie.
>
> **[6:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=368)** If I change these from two, let's say to one, press enter.
>
> **[6:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=372)** I'll get these details.
>
> **[6:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=375)** Now, if you want, as I mentioned, you can just come in here.
>
> **[6:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=379)** So the movie is coming just from the movie here.
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=384)** Then we could have, let's say details and then ID save.
>
> **[6:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=389)** So this is basically how you can define a custom route in here and click the play button.
>
> **[6:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=396)** If you go in here to movies and then show details you'd see that the URL is movie one.
>
> **[6:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=405)** You get an HTTP error, 404 which means that the page could not be found.
>
> **[6:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=410)** But if you add in here after the movie which is basically the razor page name could add in here let's say, details.
>
> **[6:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=418)** And then one, you are going to get the movie details.
>
> **[7:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=424)** Let us go and reverse this change.
>
> **[7:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=426)** And also add to the movie in here, the ID lets close the browser, your movie and then we' going to use model dot movie.
>
> **[7:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=438)** And then question mark ID move the details from here.
>
> **[7:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=444)** So we have just like the razor page name then slash the ID.
>
> **[7:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=448)** Save the changes.
>
> **[7:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=450)** Let's run this project one last time here let's go to movies.
>
> **[7:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=457)** If I click your own show details we'll get the movie with ID two.
>
> **[7:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/getting-data-by-id-from-a-database?u=76281980&t=462)** And then when you click show all you're going to get all the movies and all this data is coming from the database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), default, (2), continue (2), throw (1), pass (1)
> **UI Navigation:** go to (9), open the (2), click on (1)
> **Env Vars:** url (2), htm (1), http (1)
> **Analogies:** for example (2), just like (1)
> **Warnings:** warning (3)
> **Non-Speech:** (typing) (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), means that (1)

#### Service configuration in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] So far, you have learned how to add data to the database and also how to get data from the database.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=7)** In all cases, you have had to inject the application context, which is configured to use an SQL Server database.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=15)** This is not a good practice, especially if you do not want to be database type dependent.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=21)** It is better to create a service and do the database calls from this service.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=26)** Then, instead of injecting the ApplicationDb context, you could just inject this service.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=32)** And that is what you are going to learn on this part.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=34)** You are going to first add a service, then you are going to inject this service and then at the end, you are going to configure the service.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=43)** So let us go to Visual Studio and see it in action.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=47)** To add this service, let us go to the Solution Explorer and then here, inside the Data folder, I'll just right click and then go to add a new folder.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=59)** I'm going to name this folder Services.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=63)** If you want, we could also create a services folder outside the Data folder in the same level as the project folder.
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=70)** So actually, let us do that.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=71)** So I'll just remove the services, then right click on the project, go to add a new folder.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=81)** I'm going to name this folder the Services.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=86)** Then right click. We're going to add a class.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=92)** This is going to be named the MoviesService.
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=99)** For this class, I'm going to also add an interface where we're going to just define the method names.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=106)** So add a new item.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=111)** The item is going to be an interface, and I'm going to name this IMoviesService and then click the add button.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=121)** So here, let us define the methods.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=124)** The first one is going to be used to return a list of all the movies, so Movie.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=130)** List of movie, let us import the name space for the movie.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=134)** That is MoviesApp.Data.Models.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=138)** I'm going to name it GetAll.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=140)** The second method is just going to return a movie and the name is going to be Get.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=146)** The parameter is going to take an integer ID.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=150)** And the last one is going to be void.
>
> **[2:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=152)** And this is going to be used to add a movie to the database.
>
> **[2:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=159)** Now let us go to the class or to the service class.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=163)** In here, let us inherit from the IMoviesService.
>
> **[2:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=170)** We are going to get an error and the error says that the MoviesService does not implement the interface member GetAll, Get and Add.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=179)** So let us show potential fixes and then implement interface.
>
> **[3:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=185)** Now we are going to inject the database from these files, so I'll just create a constructor, ctor.
>
> **[3:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=193)** Then here, private read only, or maybe just ApplicationDbContext.
>
> **[3:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=204)** And the name is going to be _context.
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=208)** Let's import the name space.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=211)** That is the MoviesApp.Data.
>
> **[3:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=214)** Let us inject it inside here.
>
> **[3:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=218)** Remove the _so they are different.
>
> **[3:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=220)** And then in here, I'm going to assign to the _context the context.
>
> **[3:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=227)** Now to add a movie, I'll just type in here _context.Movies.Add, and then add a movie.
>
> **[3:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=239)** Then _context.SaveChanges.
>
> **[4:03](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=243)** To get a movie, just going to type in here var movie is equal to _context.Movies.FirstOrDefault.
>
> **[4:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=254)** And then, x that goes to ID is equal to the ID parameter.
>
> **[4:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=260)** And then just return movie.
>
> **[4:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=264)** And actually, since we have the move in here we can just directly type in here return.
>
> **[4:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=272)** And now since we have just a single line of code we can go even further and remove the return and just type in here that goes to, so we have like a single line method.
>
> **[4:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=285)** And then we can do the same for the GetAll.
>
> **[4:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=288)** So in here, I'll just remove all this code.
>
> **[4:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=290)** And in here, I'll just type that goes to.
>
> **[4:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=294)** And here, now we are going to have context.Movies.ToList.
>
> **[4:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=298)** And here we see that we get an error and that's right because this can also be null value.
>
> **[5:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=305)** Now let us also go to the interface and then change this one in here to nullable, and we can see that the warning is gone.
>
> **[5:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=314)** So let us save all the changes.
>
> **[5:16](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=316)** We created the MoviesService, now let us inject this service.
>
> **[5:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=321)** Let us start with the movie in here.
>
> **[5:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=324)** Instead of having ApplicationDbContext, we are going to have the MoviesService.
>
> **[5:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=334)** Let's import the name space, change the context in here from context to _service.
>
> **[5:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=343)** Let's do the same for this one in here.
>
> **[5:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=346)** This is going to be service without an underscore.
>
> **[5:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=350)** Then we are going to have _service is equal to service.
>
> **[5:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=356)** And on the OnGet method, we're going to use this service instead of the context.
>
> **[6:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=361)** And that is going to be service.Get method and then paste the parameter, the ID.
>
> **[6:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=372)** Let us do the same for the movies.
>
> **[6:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=373)** Now, I'll actually just copy this code in here, Control + C, paste it in here.
>
> **[6:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=382)** Then change the constructor name to be the movies model.
>
> **[6:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=386)** Let us import the name space for the MoviesService.
>
> **[6:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=390)** That is the MoviesApp.Services.
>
> **[6:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=393)** And then in here, _service.GetAll.
>
> **[6:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=403)** Let's save the changes.
>
> **[6:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=404)** Let us copy this part and go to AddMovie.
>
> **[6:50](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=410)** And here the same way we are going to replace this code.
>
> **[6:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=414)** Then you change the movies model constructor name to be AddMovie.
>
> **[7:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=425)** Let's import the name space for the MoviesService.
>
> **[7:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=430)** And then down here, we are just going to use the _service.Add method and pass as a parameter the movie.
>
> **[7:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=445)** Let us remove this redundant line.
>
> **[7:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=449)** The third step is that we need to configure the MoviesService, because otherwise we are not able to inject it in here.
>
> **[7:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=456)** For that, let us go to be Solution Explorer.
>
> **[7:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=460)** Let's scroll down in here and go to the Program.cs.
>
> **[7:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=463)** And then here, just after the builder.Services.AddRazor we are going to configure the service.
>
> **[7:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=469)** So builder.Services.AddTransient.
>
> **[7:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=475)** So we can use AddTransient, which means for each request a new reference is going to be created of the service.
>
> **[8:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=482)** We can use AddScoped, which means for each page a single reference is going to be created.
>
> **[8:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=489)** And the last method is AddSingleton, and this is going to create a single reference.
>
> **[8:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=495)** So let us use the AddScoped, because this is the best in our case.
>
> **[8:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=502)** And then in here, the first parameter is going to be the IMoviesService.
>
> **[8:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=507)** So this means: what are you injecting in the constructors?
>
> **[8:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=511)** We're injecting the IMoviesService.
>
> **[8:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=514)** But what is the implementation of the IMoviesService?
>
> **[8:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=517)** And that is the second parameter and the implementation is the MoviesService.
>
> **[8:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=523)** And this is all we need to do to add a service and configure this service in a Razor Pages application.
>
> **[8:49](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=529)** So that'll start this project and see the result.
>
> **[8:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=534)** In here, let us go to Movies.
>
> **[8:56](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=536)** Now, the movies will be loaded using the MoviesService.
>
> **[9:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=540)** And we can see here that we get an exception which says: unable to resolve service MoviesService while attempting to activate the MoviesModel.
>
> **[9:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=550)** So let us go to the movies model.
>
> **[9:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=551)** I'll just close the browser.
>
> **[9:14](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=554)** Let's go in here to the Movies.cshtml.
>
> **[9:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=558)** And that's right, because in here we can see that we have not injected the interface.
>
> **[9:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=562)** So in the Program.cs, we have defined that we are going to inject the IMoviesService.
>
> **[9:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=570)** And the implementation for the IMoviesService is in the MoviesService.
>
> **[9:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=575)** So let us change this from MoviesService to IMoviesService.
>
> **[9:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=580)** The same goes down here.
>
> **[9:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=582)** Save the changes.
>
> **[9:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=583)** Let us close this.
>
> **[9:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=586)** Let us do the same for the movie.
>
> **[9:48](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=588)** In here, we need to inject the IMoviesService.
>
> **[9:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=593)** Save all the changes.
>
> **[9:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=595)** And then add Movie.cshtml.
>
> **[9:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=598)** So in here, IMoviesService.
>
> **[10:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=601)** And then in here, IMoviesService.
>
> **[10:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=605)** Let us save all the changes around the project one more time.
>
> **[10:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=608)** Now let us go to the Movies.
>
> **[10:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=611)** We can see that the data is loaded successfully.
>
> **[10:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=613)** And this data now is coming by using the MoviesService.
>
> **[10:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=617)** Let us got to show details. It's working fine.
>
> **[10:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=621)** That's going to show all.
>
> **[10:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=622)** Let us add a new movie to the database.
>
> **[10:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=624)** So, Added From Service.
>
> **[10:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=629)** Eight.
>
> **[10:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=630)** This is the description example.
>
> **[10:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=633)** And I click the a movie button.
>
> **[10:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/service-configuration-in-asp-dot-net-razor-pages?u=76281980&t=636)** And you can see that we were able to add a new movie to the database using the MoviesService.

> [!info]- Semantic Content
>
> **Code Keywords:** let (35), interface (6), class. (2), class, (1), private (1)
> **UI Navigation:** go to (12), click on (1), scroll down (1)
> **Prerequisites:** configure (4)
> **Env Vars:** sql (1)
> **Tools:** visual studio (1)
> **Best Practices:** good practice (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 4. Securing Razor Pages Applications

#### Authentication vs. authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=0)** - [Instructor] It's important that the applications that you build are secure, and trusted by your clients.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=6)** The first step to secure applications, is to add authentication and authorization.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=13)** These two terms are often confused with each other, because they're typically used together, and also share the same "auth" abbreviation.
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=22)** Simply put, authentication is the process of verifying who someone is.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=28)** And authorization on the other hand, is about permissions.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=32)** So what the user can access.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=34)** In other words, authentication verifies who the user is, and authorization checks or determines what resources a user can access.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=46)** Now, let us simplify these two concepts, by using our application used to store movies.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=52)** Let us say we want to add more security to our application, by adding authentication and authorization.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=59)** This way, we would have different users with different roles.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=64)** Let us assume that we just want to have two roles, a normal user, and an administrator.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=71)** A normal user will visit our application, will provide the credentials and log in.
>
> **[1:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=78)** After the user is logged in, he will be able to see the list of all movies.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=82)** So, he has access to this page.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=86)** But if he wants to access, let us say, a page which is meant to be just for the administrators.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=92)** The access will be denied.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=94)** Now, let us log into our system, as an administrator.
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=99)** The administrator, the same way, is going to provide the username and password, and will be logged in to our system.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=107)** If he wants to see the list of movies, he'll be able to see this page.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=111)** And if he wants to access the admin panel, he will have access to this page as well.
>
> **[1:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=117)** From this simple diagram, the user just providing the username and password, and then logging into our system, is about authentication.
>
> **[2:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=127)** So the system knows about these users.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=130)** The second part, where depending on the user role, they can access certain areas or certain pages of our system, is about authorization.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/authentication-vs-authorization?u=76281980&t=141)** So, you can log into the system, but you are not authorized or you are authorized to access just certain areas of the application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Simple authorization in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] In Visual Studio, I'll just go to the Solution Explorer.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=5)** Then here on pages, I'll go to the add movie page.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=8)** So here I can just right click, then go to page model.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=13)** Now, to add simple authorization is as simple as just adding in here the authorize attribute.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=23)** And for the authorize attribute, let us import the necessary namespace, which is the Microsoft.AspNet.Core.Authorization.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=32)** And this way, we have set this page model to be accessed just by authenticated users.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=40)** But for the authorize to work, we need to update the program.cs file.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=47)** So we basically need to set up the as AspNet Core authorization in our app.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=52)** So let us just go to the Solution Explorer, and then here go to program.cs.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=59)** Then after the builder, so we have creating the builder.
>
> **[1:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=62)** After the Razor Pages, we are going to configure the authentication.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=68)** For that, I'll just type in here, authentication, and then I'll type builder.services.
>
> **[1:18](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=78)** So we are going to add the authentication service.AddAuthentication.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=86)** For authentication, we need to provide the default authentication scheme that we want to use.
>
> **[1:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=91)** And let us say we want to configure our app to use cookie-based authentication.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=96)** For that, I'll just type in here, cookie... So cookie authentication defaults, and then authentication scheme.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=111)** That's the body namespace for the cookie authentication defaults, and that is the Microsoft.AspNetCore.Authentication.Cookies.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=121)** And if you're over the authentication scheme, the default one you're going to see is cookies.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=129)** So after we have set up the default scheme, let us also use the add cookie method, which is a default method that is used to add a cookie in our browser.
>
> **[2:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=139)** And in here, the same way we are going to define the cookie authentication scheme.
>
> **[2:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=144)** So, the CookieAuthenticationDefaults.authentication scheme.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=153)** And in here, we are going to add some options for the cookie.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=157)** So basically, we're going to define where is our login page.
>
> **[2:41](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=161)** So if the user is not logged in, where do we want the users to be redirected?
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=165)** And if the user is logged in, but he's not authorized, where do we want to redirect the users?
>
> **[2:52](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=172)** So in your options, then curly brackets, I'll type in your options.LoginPath.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=179)** So if the user is not logged in, redirect the user to the login Razor Page.
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=186)** Otherwise, options.AccessDeniedPath.
>
> **[3:12](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=192)** So if the user is logged in but he's not authorized to access the page, then redirect the user to the denied Razor Page.
>
> **[3:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=201)** Let us add a semicolon at the end.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=203)** I'll just now save all the changes, and then start this project.
>
> **[3:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=212)** Now, let us go in here to the movies, and then go to add new.
>
> **[3:39](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=219)** Since we added the authorize attribute, you can see that we are not authenticated, so we are not authorized to access that page.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=226)** So, authentication in other words is just authorization with no rules at all.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=233)** You can see in here that we are redirected to the login Razor Page.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=237)** And then in here we have a default URL parameter set to be the add movie.
>
> **[4:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=244)** And add movie is the component that we tried to access.
>
> **[4:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/simple-authorization-in-asp-dot-net-razor-pages?u=76281980&t=247)** So basically after you log in in this page of the app, you can use this parameter to redirect your users to the add movie page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), new. (1)
> **UI Navigation:** go to (6)
> **Prerequisites:** set up (2), configure (2)
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** url (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Role-based authorization in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Narrator] The role based authorization is when the user that will access a certain page is authenticated, so logged in, and also has the necessary roles.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=11)** So, in other words, the role based authorization is like the simple authorization, plus the role check.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=19)** In our app, for a user to be able to add a movie, we have just added that the user needs to be authenticated.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=26)** Let us add one more condition, so only the users that are authenticated and have the role Manager can add the movies.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=37)** For that, let us go to Visual Studio and see direction.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=42)** In Visual Studio, just go to the AddMovie.c#html.c# file.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=47)** And here, on the Authorized attribute, the only thing that we need to do is that we need to add the condition check roles.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=55)** So, roles is equal to Manager.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=61)** What this means is that, for the users to be able to render or to call this model, they need to be logged in, and they need to belong to the role manager.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=71)** Now- but I'll save the changes- if we go to the Program.cs, we have defined in here that, whenever the user is not logged in, we just want to redirect them to the Login page.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=84)** So, let us go to the Solution Explorer and actually create this page.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=88)** So, I'll just right click, then go to Add.
>
> **[1:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=91)** We are going to add a Razor Page.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=94)** This is going to be just an empty Razor Page, and the name is going to be the Login page.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=104)** I'm not going to type any code in here, but I'll just simply display an h2 header, which is going to say "Welcome to login" or maybe just a simple Login page text.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=121)** So, let us save the change one more time, and let us start this project and see if we are redirected to this page.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=129)** So, the project ran successfully.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=131)** Let us go to the movies.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=135)** And now, from the movies, let us go to Add new, and you are going to see that we are redirected to the Login page, and the return URL is the same, with the Add Movie value.
>
> **[2:27](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=147)** Let us close the browser and go back to Visual Studio one more time.
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=151)** Now, let us go to the Add Movie Razor Page.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=155)** In here we have defined that the user that will be able to access this page needs to be of role Manager, and here let us add one more role.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=165)** So, let us say to access this page, you can either be an Administrator or a Manager.
>
> **[2:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=171)** For that, just inside the Roles string, you can type Administrator or just an Admin and Manager.
>
> **[3:02](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=182)** The way you read this line is that the user needs to either be Administrator, so an Admin role, or a Manager.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=191)** But, if you want the users to have two roles instead of at least one role, then, in that case, you can add two authorized attributes.
>
> **[3:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=202)** So down here, just add another Authorize, and then I'm going to define the role to be a Manager.
>
> **[3:29](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=209)** And then, remove the manager from up here, and now we have authorized roles Admin, authorized roles Manager.
>
> **[3:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=218)** So, basically, the user needs to be an Admin and a Manager.
>
> **[3:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=224)** If you want, in here you can have more than one.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=226)** So, for example, the user needs to be either Admin or Admin1 or Admin2 role and Manager role.
>
> **[3:58](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/role-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=238)** So, this way, you can create, like, different combinations of roles that you want the users that access this page to have.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), new, (1), case, (1)
> **UI Navigation:** go to (8)
> **Tools:** visual studio (3)
> **File Paths:** addmovie.c (1), html.c (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)

#### Claims-based authorization in ASP.NET Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=0)** - [Instructor] When an identity is created, you can assign different properties or value to the identity which we call claims.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=9)** In identity, a claim can be the value for example of the first name, last name, age, date of birth, or any value which adds more information to the identity of the user.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=23)** Claims are really useful when you want to create more complex user validation checks.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=30)** Like for example, let us say that the movies in our system need to be added just by users who are graduated from at least a high school.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=40)** A graduated user would have a graduation year value.
>
> **[0:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=44)** For this, you can add a policy which is going to be used to validate a claim.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=51)** So let us go to visual studio and see this in action.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=54)** In here, I'll just go to the program.sc file, and then in here, after the add authentication, I'm going to add an authorization policy.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=66)** So now just type builder.Services.Addauthorization,
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=77)** and then inside the add authorization method, I'm going to define a policy so options, and then inside here, options.AddPolicy.
>
> **[1:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=91)** I'm going to name this policy graduated only.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=98)** And then the value or the property that we need to check against is going to be the graduation years.
>
> **[1:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=104)** So for that, I'll just type in here policy that goes to policy.RequireClaim.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=114)** So the logged in user needs to have a graduation year value.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=124)** I'll add semi column in here and then semi column in here.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=130)** So graduated only let us copy this value and then go to the add movie.
>
> **[2:17](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=137)** In here., I'll just comment out these two lines Control + KC and then I will just type authorize then policy.
>
> **[2:28](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=148)** And the name of the policy is going to be graduated only.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=153)** So, so far, it's enough for the user to just have this property and a value in this property.
>
> **[2:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=160)** Now, if you want to this policy, you can add more conditions.
>
> **[2:44](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=164)** So that I say, for example, for this policy to be valid, so for the claim to be checked as valid, you need to be graduated at certain years.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=175)** For that in here on the add policy, you are going to type your after the required claim.
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=180)** So you need to have the graduation year value to be, and then in here the value is going to be, let's say 2010.
>
> **[3:13](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=193)** Another value is going to be 2012 and then 2015.
>
> **[3:22](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=202)** What this means is that this policy is going to be valid only for the users that have been graduated in these three years.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=211)** So let us say for example you are user who was graduated last year.
>
> **[3:35](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/claims-based-authorization-in-asp-dot-net-razor-pages?u=76281980&t=215)** In that case, since you do not pass the policy check, you'll not be able to access this page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (1), case, (1), pass (1)
> **Analogies:** for example (4)
> **UI Navigation:** go to (3)
> **Tools:** visual studio (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps for learning more about Razor Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=0)** - If you have made it so far, I want to thank you and congratulate you for watching this course.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=7)** Throughout this course you learned about Razor Pages and you started by having an introduction to the key concepts, a comparison with the embassy framework, and also learned how to create a new .NET project.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=21)** The next you learned about the data binding in Razor Pages, where you learned about the one way data binding, like showing data on a table, two way data binding like four validation and event data binding like binding a button click event.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=40)** Last but not least, you also learned about model binding and data forms validation.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=47)** Next, you learned how to configure entity framework core to work with SQL server database, where you learned how to get data from a database and also send data to the database.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=60)** By the end of this course you learned about securing Razor Pages where you learned about the difference between authentication and authorization, and also learned about simple, role based and claims based authorization.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=75)** This is what you have learned so far, but what should you learn next?
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=80)** Next you can try and work some more with the entity framework.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=85)** For example, you can try to update data in the database and also delete data from the database.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=92)** In any case, if you have any questions about this course or the .NET technologies in general, feel free to get in touch with me via Twitter or LinkedIn.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-razor-pages-14933051/next-steps-for-learning-more-about-razor-pages?u=76281980&t=103)** And if you want to learn more about the .NET technologies check out my other courses here on LinkedIn Learning Library.

> [!info]- Semantic Content
>
> **Env Vars:** net (3), sql (1)
> **Code Keywords:** new . (1), delete (1), case, (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - if (1)


## Path Context

### In [[Getting Started as an ASP.NET Core Developer]]
← [[C- and .NET Essential Training]] | **3 of 9** | [[Building Angular and ASP.NET Core Applications]] →

## Appears In

- [[Getting Started as an ASP.NET Core Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building Web APIs with ASP.NET Core 8]] — ASP.NET Core
- [[ASP.NET Core- Building a GraphQL API]] — ASP.NET Core
- [[ASP.NET Core in .NET 6- Dependency Injection]] — ASP.NET Core
- [[ASP.NET Core- Token-Based Authentication]] — ASP.NET Core
- [[Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security]] — ASP.NET Core

---

[↑ Back to top](#)