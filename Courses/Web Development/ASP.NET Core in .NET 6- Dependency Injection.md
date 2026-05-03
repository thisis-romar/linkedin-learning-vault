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
created: 2026-05-03
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

#### [Dependency injection overview](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/dependency-injection-overview?u=76281980&t=0)** - If you're looking for a job as a .NET developer, it is essential that you understand what [[Dependency Injection]] is and how it works. It's a popular feature in [[Software Development]] that allows for having entities that are not dependent on each other. I'm David Grace and I've been a .NET, C# programmer for over 15 years. And I work with dependency injection regularly. We'll have a look at how to set up and configure dependency injection and walk you through the different service lifetimes and how they work. Afterwards, we'll implement dependency injection into a real-life example using an [ASP.NET](https://ASP.NET) Core MVC application to show you how to inject a service and use the methods within it. Then, you'll have the opportunity to try it out for yourselves. Finally, we'll talk you through some of the common errors that can occur when setting up dependency injection. So come and join me as we talk through dependency injection in [ASP.NET](https://ASP.NET) Core and explore the benefits that will make a complex system look simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (6), [[ASP.NET Core]] (2), [[Software Development]] (1)
> **Env Vars:** net (4), asp (2), mvc (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** make (1)
> **Speakers:** - if (1)

#### [What you should know](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-you-should-know?u=76281980&t=0)** - [Instructor] The concepts you should know to make the most out of this course, let's take a little bit of time to go through them. You should have a fair amount of experience coding in C#. We'll be using variables, fields, and access modifiers within the course, to name a few. As well as that, you'll need to have an understanding of object-oriented principles and how they work, in particular, knowledge of classes, interfaces, as well as inheritance is vital for understanding [[Dependency Injection]]. You'll also need to know how a constructor works and how it can be overloaded. You should also have some experience in working with an [ASP.NET](https://ASP.NET) Core application. There are some big changes to its predecessor, [ASP.NET](https://ASP.NET), including the way it is configured. Knowledge in the MVC design pattern is also required, as we'll be using an [ASP.NET](https://ASP.NET) Core MVC web application to demonstrate dependency injection. You should know what a controller, action model, and a view is. Finally, you should be familiar with the Visual Studio IDE. I will be using Visual Studio throughout the course to demonstrate dependency injection examples. If you are following along at home, make sure you have it installed on your machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (3), [[ASP.NET Core]] (2), [[ASP.NET]] (1)
> **Env Vars:** asp (3), net (3), mvc (2), ide (1)
> **URLs:** [asp.net](https://asp.net) (3)
> **CLI Commands:** make (2)
> **Tools:** visual studio (2)
> **Prerequisites:** you'll need (1), make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [Setting up your environment](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=0)** - [Instructor] Before we get started, you'll need to install some software onto your machine. Firstly, download the Visual Studio IDE. You can use other IDE such as Visual Studio Code if you wish but I will be using Visual Studio. You can download Visual Studio from [[Microsoft]]'s website, either the free community edition or the paid professional and enterprise editions will work for this course. I will be using a [[Windows]] machine with Visual Studio 2022 version 17.0.5. If you're using an older copy of Visual Studio such as 2019, you'll need to download Visual Studio 2022 because .NET 6 projects are not supported in earlier versions. Visual Studio versions beyond 2022 should support the examples in this course. You'll need to download the .NET 6 SDK. If you have Visual Studio 2022 installed, the SDK should already be installed. You can run this command line, .net hyphen hyphen list hyphen SDK to see which SDKs are installed. If any of the listed versions begin with a six and it's version 6.0 0.101 or above, you should be fine. However, if you haven't got the right version or the command line froze in error, the likelihood is you need to install the SDK. You could do that by searching for .net six SDK in a search engine. It would normally be the first result. From there, you can install the SDK. Just remember to install the SDK and not the run time.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=92)** Also ensure that it's version 6.0 0.101 or above. There are a number of course videos where you can download the source code to follow along on your machine. The source code is located in a [[GitHub]] repository and is available at this URL. Each course video that has a code (indistinct) is located within a branch of that repay. The branch in naming convention begins with the chapter number followed by an underscore followed by the video number. If there is a B after the video number, that is the code state before the video begins. This is ideal if you want to follow along and code as you watch the video. If an E appears there, that is the code state once a video finishes. This is beneficial if you want to experiment with what you've learnt from the video. If neither the B or the E appears there, it means there's no coding changes throughout the video's duration. One way to download the source code from GitHub onto your machine is to pick the appropriate branch, go to code and download zip. We will go ahead and download this onto our desktop. Once it's downloaded, if you're using a Windows machine and have Wind Runner installed, you can right click and go to Extract Files. Select the folder location you wish to extract the files to. It's best to shorten the folder name otherwise the application may not run. Then, click okay. This will download the source files onto your machine. Then it's a case of going into your download files and finding the .net six dot di dot SLN file.
>
> **[3:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-your-environment?u=76281980&t=185)** By clicking on it, it should open the solution in Visual Studio 2022. Once it's open in Visual Studio 2022, you'll be greeted with the projects and files in your solution explorer. This normally appears on the right hand side of a Visual Studio solution. There is a Services Class library and an MVC project. Make sure that the MVC project is set up to run as a startup project. It will be highlighted in bold if it is. If it's not, right click on the project and select set a startup project. When you're ready to run the web application, you can click on the play icon in your Visual Studio solution. This will build and run the application. A browser window should automatically open to local host code on 8 0 0 1. And you should be greeted with a web application is working message. If a browser window doesn't open, you should still be able to navigate to that URL and be greeted with the same message.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[GitHub]] (2), [[Microsoft]] (1)
> **Tools:** visual studio (13), command line (2), github (2)
> **Env Vars:** sdk (7), ide (2), net (2), url (2), mvc (2)
> **Exercise Files:** download the (5), source code (3)
> **Prerequisites:** install (4), you'll need (3), set up (1)
> **Versions:** version 6 (2), 0.101 (2), version 17 (1), 0.5 (1)
> **UI Navigation:** go to (2), click on (2), select the (1), open the (1)
> **Definitions:** is a  (2)


### 1. What Is Dependency Injection?

[↑ Back to Table of Contents](#table-of-contents)

#### [What is dependency injection?](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=0)** - The Inversion of Control, or IoC design principle, is defined as given responsibility for control or logic to something else such as a framework. [[Dependency Injection]], or DI, is a design pattern that is part of the IoC design pattern allows dependent objects of a class to be created elsewhere rather than in the class itself. Take this example, a customer wishes to purchase a baseball bat from an online store. However, before they purchase it, they want to know how much they're paying for it. At this point, they aren't interested in the shipping costs. However, the weight of the product would have to be used to calculate shipping costs should they wish to purchase it. If the product service was dependent on the shipping cost service, it would have to create the shipping cost service when creating the product service even if the customer didn't want to buy it. However, with dependency injection, we can keep our product and shipping cost services as separate entities. By doing this, it means the customer can view the product, and the system doesn't have to work out what the shipping costs are. [ASP.NET](https://ASP.NET) Core has a built in DI container and is designed to support dependency injection. The way it works is that you register the classes as services in your [ASP.NET](https://ASP.NET) Core application. These services are registered as part of your web application's DI container as a service descriptor instance. Each registered service is added as a collection to an IServiceCollection instance. Once the application has started, these services can be resolved using an IServiceProvider instance. This instance looks at the registered service to
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/what-is-dependency-injection?u=76281980&t=94)** resolve them at runtime. Dependency injection is a popular design pattern in software programming. This is because it allows us to reduce dependencies and decouples related classes. This allowed software to grow over time with less boundaries. It can also be used in many different parts of the application's life cycle. Maybe you need to display how many [[Microsoft Products|products]] a customer has added to their shopping cart, or whether they have purchased a product previously, dependency injection caters for both scenarios. In addition, it has support for different service lifetimes where we can specify when a new service is created, and when it is disposed of.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (5), [[ASP.NET Core]] (2), [[Microsoft Products|Products]] (1)
> **Env Vars:** asp (2), net (2)
> **Definitions:** is a  (2), defined as (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### [Service lifetimes](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=0)** - We're now going to look at the different Service Lifetimes independency injection. We mentioned that [ASP.NET](https://ASP.NET) Core has a built-in DI container, and it's designed to support [[Dependency Injection]]. We are going to have a look at the different Service Lifetimes so that we can register the classes to the [ASP.NET](https://ASP.NET) Core DI container classes can be registered as services with the following Service Lifetimes Singleton, Scoped, and Transient. Let's look at each one individually Singleton Service Lifetime classes are only created once per application. Once it's been created, the instance will be alive until the service is disposed of this is normally disposed of when the application stops. Just say we are selling a baseball bat for 20 dollars we would like to display this information to any customer who requests it. A Singleton Service Lifetime class can be used to store product information such as the name, and the price with a Singleton service lifetime class. It means we could store the information in the web application without having to call an external resource such as a database. Every time we need it. Scope Service Lifetime classes are initialized. When a Scope is created, the instance will be alive until the scope has been disposed of. In [ASP.NET](https://ASP.NET) Core, a scope is either defined for a life cycle of a HTTP request, or it can be explicitly defined looking at an example of how a HTTP you request works in [ASP.NET](https://ASP.NET) Core. If a user has requested a webpage the scope would begin once you've requested the webpage, and would end once the webpage has finished loading.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/service-lifetimes?u=76281980&t=95)** If another user was requesting the same webpage at the same time, a separate scope would be created. Scope Service Lifetime classes can also be explicitly defined. And one example of this is in a background service just say we wanted to email a report of all the [[Microsoft Products|products]] that we are selling for less than 20 dollars. In this instance, we will create a task within our background service to do this. The scope would be created when the task begins, and will be disposed of when the task ends. The final Service Lifetime is Transient. Transient Service Lifetime classes have new instances every time they're requested. This means that these instances cannot be shared in different components of the application. They are ideal for retrieving information from a database, or an API. An example of this is requested a product information such as the name, and price. If we are retrieving this information from either a database, or API. We can retrieve this information, and store it in a separate class. That means we no longer need the service, and it can be disposed of. Having these different Service Lifetime classes means that some classes are unable to depend on each other, any Scope, or Transient Service Lifetime classes can rely on any service regardless of their lifetime, but it's a different story for a Singleton Service Lifetime class. It's fine to inject a Transient Service Lifetime class as it knows, just to create a new instance of the service but with a Scope Service Lifetime class it wouldn't know which Scope service belongs to. As a result, it will throw an error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (4), [[Dependency Injection]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** asp (4), net (4), http (2), api (2)
> **URLs:** [asp.net](https://asp.net) (4)
> **Analogies:** such as (3)
> **Definitions:** means that (2)
> **Cross-References:** we mentioned (1)
> **Speakers:** - we (1)


### 2. Configuring Dependency Injection in ASP.NET Core

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up the services](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=0)** - [Presenter] We are now going to set up the services that we are going to use for [[Dependency Injection]]. To demonstrate this, we're going to set up an [ASP.NET](https://ASP.NET) Core MVC web application in .NET 6. The web application will be an online shopping website where we are selling merchandise. Before we set up our services, we need to set up some models. The first model class will represent a product, and it will contain properties such as the name, a unique stock keeping unit code, or sku, and the price. The other model class will represent the shopping cart. The shopping cart will contain a unique identifier to allow us to separate each customer's shopping cart. In addition, it will store all the items that have been added to the shopping cart. Then we move on to our services. The services will be classes that will be added to the DI container. This includes a storage service, which will be used as a database to store product and shopping cart data. In addition, we will add a shopping cart service which can be used to add a product to a shopping cart. Finally, we will add a product service where we can get specific information about a particular product. Now looking at our services in more detail, with the storage service, we want to store all the data that we're going to be using for our online shopping web application. Think of it as a database for this example. It will store all the [[Microsoft Products|products]], that will be available to buy on the website, as well as any shopping cart records that customers have been using to add products. As this information will be used by any user hitting the web application, we will set this up with a singleton service lifetime. Next, we will have a look at the shopping cart service.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/setting-up-the-services?u=76281980&t=97)** With our shopping cart service, we could have multiple purposes for it. In the site layout, we wish to add a product to the shopping cart. We also wish to display the number of products that a customer has added. As we have requirements to use this service in more than one of the web applications components, we will set this up with a scope service lifetime. Finally, we will look at the product service. We will use this service to get a product based on its unique sku identifier. When we have retrieved the product information from the storage service, it will be stored in a separate class. As a result, we no longer need the service, and it can be disposed of. As a result, we will set this service up with a transient service lifetime. Just a note that each service inherits an interface with the members and properties we wish to expose. So the storage service inherits the IStorageService, the shopping cart service inherits the IShoppingCartService, and the product service inherits the IProductService. We will be using the interface as a service when we add it to the DI container. We now have our services set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Dependency Injection]] (1), [[ASP.NET Core]] (1)
> **Prerequisites:** set up (5)
> **Env Vars:** net (2), asp (1), mvc (1)
> **Analogies:** such as (1), think of it as (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Warnings:** note that (1)
> **Speakers:** - [presenter] (1)

#### [How to configure dependency injection](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=0)** - [Instructor] Now we're going to go ahead and configure these classes up as services in our [ASP.NET](https://ASP.NET) Core Web Application using the appropriate Service lifetimes. In .NET 6, there are some major changes that focused around cleaner code. With [ASP.NET](https://ASP.NET) Core Web Application that target .NET 6 and beyond, we're able to add the configuration to the Program class without the need for the Startup class. Prior to .NET 6, [ASP.NET](https://ASP.NET) Core configuration would typically take place in a Startup class. We'll show you how to add your services for both types of Web Applications as there are some subtle differences. We need to ensure that each class inherits an Interface and contains the members we wish to use. The Interface will be exposed as a service to be used in [[Dependency Injection]]. The reason why we expose the Interface is because an Interface only exposes the name and return types of its members. The Interface doesn't care about what each member does or what dependencies it relies on. As a result, if we need to add a dependency to a class like the Product Service dependent on the StorageService, any other classes that are dependent on the StorageService will not need to be changed. This is an [ASP.NET](https://ASP.NET) Core NBC App. And if you're using .NET 6 or above, you may not have a Startup class. Your configuration would've been moved to the Program class. In addition, you'll realize that there is no namespace, no class or no main method. This is as a result of C# 10 console template changes for .NET 6. The features that make this happen are top-level statements global using directives and implicit using directives. This means if you are using a project
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=93)** that uses the console template, you only have to write the body of the main method in your Program class. We have our builder instance and this has a Services property. Within our Services property, we have Service Lifetime Extension Methods where we can add a Service to our DI container and assign the appropriate Service Lifetime. These methods are AddSingleton, AddScoped and AddTransient. Go ahead and add this Services which are contained in our Services Library. First, we're at the Storage Service and assign this as a Singleton service lifetime. Let's use the AddSingleton extension method from our ServiceCollection. So we find the AddSingleton extension method. We pass in the IStorageService as a Service and the StorageService as the implementation. Next, we'll go ahead and add our ShoppingCartService. For this, use the AddScoped extension method from our ServiceCollection to assign it with a Scoped service lifetime. So we get our IServiceCollection by calling builder.Services and we find the AddScoped extension method. Passing the IShoppingCartService as the service and the ShoppingCartService as the implementation. Finally, we'll use the AddTransient extension method to add our ProductService. This will assign the Service with the Transient service lifetime. So we get our IServiceCollection
>
> **[3:08](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-configure-dependency-injection?u=76281980&t=188)** by calling builder.Services. We find our AddTransient, passing the IProductService as the Service and ProductService as the implementation. And there we are. We have successfully added our Services to the DI container. If you're using .NET 5 or have a Program and Startup class in your application, you add Services in a similar way. In the Startup class, there is a ConfigureServices method. Within that an IServiceCollection instance is passed in as a parameter. In this instance, we can call the same extension methods to add our Services to the DI container and define what Service lifetime they should be. So we call AddSingleton for the StorageService, addScoped for the ShoppingCartService, addTransient for the ProductService.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (4), [[Dependency Injection]] (1)
> **Env Vars:** net (10), asp (4), nbc (1)
> **CLI Commands:** find (3), make (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **Code Identifiers:** addscoped (1), addtransient (1)
> **Exercise Files:** template (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** configure (1)

#### [Other dependency injection configuration methods](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=0)** - [Instructor] We've talked about the AddSingleton AddScoped and AddTransient extension methods. Let's have a look at these overloads for these methods and how we can use them to configure [[Dependency Injection]] in our [asp.net](https://asp.net) call web application. When adding a service to the DI container we can pass in the type as a generic type into the method. This is how we did it already. Alternatively, we can pass in the type as a parameter. Whichever way we do it, we're also able to override the default behavior and run a delegate to create an instance of our service. For example, there may be many customers that have added [[Microsoft Products|products]] to their shopping cart. We need a way of defining which shopping cart belongs to which customer, one way we can do that is to pass in a unique identifier which defines which shopping cart belongs to which customer. That means we can treat each shopping cart separately, and it makes it easier to assign to a particular customer. Let's go ahead and look at the different ways of configuring dependency injection. On the screen we could see that we have our services configured by using a generic type. Now we're going to go ahead and change this bypass, and in the type these parameters, into the method. We would do this for the storage service. We need to wrap around the type of operator, if we are passing in the types as parameters. You can also do that for the shopping cart and product services if you wish. The benefits of doing it this way, is that it's easier to register services dynamically rather than having to register each service one by one. Next, we're going to override a default behavior
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=95)** of adding a service to the DI container. Looking at the shopping cart service, we're going to go ahead and add a new parameter. It will be called ID, and we need to ensure that its value is set to the private field. So we give it a type of Guid, and then we set the ID, that's passed in as the parameter to the private field. Going back to our program class, if we were to leave the shopping cart service configuration like this, it refer a runtime exception when the application is started. What we can do is part in a parameter when using the AddScoped method for our shopping cart service. For this we have to pass in an instance of the service provider, as a parameter for the delegate.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/other-dependency-injection-configuration-methods?u=76281980&t=146)** The parameter is a delicate which expects an instance of the service as its return type. We can create the service as a new instance at this stage. Now, as you can see, it's better a storage service instance as one of its parameters. So we call the return and we set up a new instance of the shopping cart service. We could go ahead and create a new instance of storage service, but that would mean it wouldn't be reading the storage service instance from the DI container. However, this delegate is parted in an I service provider instance as a parameter. Within that interface, there is a get required service method and we can use that to resolve the storage service instance from the DI container. So we get our service provider instance, and we find the get required service method, passed in the I storage service as its generic type. Finally, we generate a unique ID for the other parameter, and we have our instance set up. We simply just go Guid.NewGuid. Now, you know the different configuration methods that we could use for dependency injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (3), [[ASP.NET]] (1), [[Microsoft Products|Products]] (1)
> **Prerequisites:** set up (2), configure (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Using Dependency Injection in ASP.NET Core

[↑ Back to Table of Contents](#table-of-contents)

#### [How to inject services into a controller](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=0)** - [Instructor] We've already added our services to the DI Container. Now we're going to start using these services in different components within our [ASP.NET](https://ASP.NET) Core application. The first way of doing this is to inject a service into a controller. With an ASP. NET Core MVC application, we can use a parameter in the controller's constructor. We can add the service type and it will automatically resolve it to the instance from the DI Container. Once we have done that, we can assign the instance to a field in our controller. From there, any of the controller's actions are able to use the service members as part of its functionality. We have our [ASP.NET](https://ASP.NET) Core MVC web application open and we're going to display the product details based on its SKU. We have our product controller and we have an empty constructor. We are going to pass in our services from our DI Container to use for [[Dependency Injection]]. First, we're going to pass in our product service as a parameter, as we're using the interface as the service, we're going to declare the eye product service interface as the type. Then we're going to give it a name of product service. So we find our eye product service type and give it the name of product service. (computer keyboard clicking) Afterwards, we have to define our product service instance to a local field in the controller. We would create a read only field in our product controller and call it _productservice. (computer keyboard typing) So we give it a private access modifier. Make sure it's read only then find the eye product service type giving it the name _productservice. Then we assign our local field to our parameter instance.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=96)** So we get the _productservice field and just set it to the product service parameter that we're passing in. As we now have our product service instance, we could start to use it. We have created a Get method within our product controller. This is set up in the web application to run through the product route with a SKU appended to it. We go ahead and call our Get method in our product service instance to get the data for a particular product. As we are passing in the SKU as the action parameter, we will use that parameter in the product service Get method. The Get method will return us the product instance which we can use as part of the Razor View model.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=149)** In our Razor View, we have defined the model that is being passed into it.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-inject-services-into-a-controller?u=76281980&t=158)** Having the models instance means we can display the name, the price, and the SKU. Let's run the application and see if we're getting the data. Looking at our storage service, we're storing the [[Microsoft Products|products]] that we wish to include as part of our online shopping website. One of these products has a SKU of BUB-APR. It has a title of a gumball for your thoughts apron and a price of $24. We will test out our product controller action by navigating to this URL and see that the application is showing the correct name, price, and SKU. So the product is called A gumball for your thoughts apron. The SKU is BUB-APR. And the price is $24. That means we have successfully injected the product service into our controller. As the product service depends on the storage service to get the product data, we can see that both services have been created successfully in the DI Container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2), [[Microsoft Products|Products]] (2), [[Dependency Injection]] (1)
> **Env Vars:** sku (7), asp (3), net (3), mvc (2), bub (2)
> **CLI Commands:** find (2), make (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Non-Speech:** (computer keyboard clicking) (1), (computer keyboard typing) (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Inject services in other components of a web application](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=0)** - It's time to look at injecting services into other components of [ASP.NET](https://ASP.NET) Core. There may be scenarios where we want to inject a service outside of a class. One example would be in MVC Application where we want to inject a service directly into a Razor View. Fortunately, with [ASP.NET](https://ASP.NET) Core, we're able to do that using the HTTP Context instance for a property called Request Services. The request services property is an eye service collection instance and it contains the method Get Required Service which allows us to resolve a service from the DI container. That means that as long as we have the HTTP context instance to add, we're able to resolve a service regardless of what component it sits in. We have our Razor View open that displays the product information. What we want to do here is to return an instance of our shopping cart service. So we can display a message as to whether the product has been added to the shopping cart. The first thing we need to do is to declare our shopping cart service instance from the DI container into a local variable. We could do that by calling ViewContext.HttpContext.RequestServices.GetRequiredService. With the generic type, we pass in the eye shopping cart service interface as the Type. Within the shopping cart service there is a method called hasProduct. This method checks whether a product has been added to the shopping cart. It expects a sku-parameter. So we can pass in our SKU from the product model. Once it's determined whether the product has been added
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=97)** to the shopping cart, Either returns True to say that the product has been added or False if it hasn't. Now that we know whether the product has been added to the shopping cart. We can do an if statement around the variable. If it's true, we state a message to the customer that the product has already been added to the shopping cart. Otherwise, we tell them that it hasn't and we give them the option to add the item to the shopping cart.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/inject-services-in-other-components-of-a-web-application?u=76281980&t=132)** For adding a shopping cart item. There is functionality through an action called Add To Shopping Cart that has been created in the product controller. This expects a sku-parameter. Inside the method, it checks to see whether a product exists within that sku. Assuming it does it gets the Shopping Cart Service instance. This instance is passed in as a parameter in the construction of the controller. It then calls the Add Product method within that. The Add Product method in the shopping cart service gets the current shopping cart from the storage service and adds the item to the customer's shopping cart. The user is then redirected back to the product page. The message is updated saying that they have added the item to the shopping cart. Using this action we can use a form element that does a post request to that action. Inside the form element. We can add a button that will fire off to that action and add the product to the shopping cart. Running the application at this URL, we can see that the message is appearing saying that the product hasn't been added to the shopping cart. By clicking on the Add Cart button we can see that the message has been updated. Now, the product has been added to the customer's shopping cart. That means that in the Razor View we have successfully resolved our shopping cart service from the DI container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2)
> **Env Vars:** asp (2), net (2), http (2), mvc (1), sku (1)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Code Identifiers:** hasproduct (1)
> **Speakers:** - it (1)

#### [How to set up a hosted service](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=0)** - [Instructor] It's time to look at the hosted services and the relationship with services independency injection. What is a hosted service? A hosted service is a service that allows tasks to run in the background. They can either be configured in an [ASP.NET](https://ASP.NET) Core application, or be set up for a Worker Service template. A Worker Service template is designed specifically for background tasks. These are tasks that could be run independently off the web application. However, we have a requirement to update a product stock level within the web application. In this instance, we're going to add a hosted service as part of an [ASP.NET](https://ASP.NET) Core application. We have created a new product background service class. To make this a hosted service, we have inherited the background service abstract class. Looking at the background service abstract class, it expects the execute async method to be implemented. Going back to the product background service class, we can see that we have done that. The purpose of the execute async method is to execute the task. When the task is executed, it implements a five second delay at the start. This is so we can delay the task at the beginning to demonstrate the updating of stock levels. Afterwards, it explicitly creates a new scope. This is so we can resolve services within the task and not keep them alive any longer than we need to. It uses that scope to get the product service instance from the di container. Next, it makes an API call to get the stock levels for all the [[Microsoft Products|products]].
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=93)** Assuming the API call is successful, it binds adjacent response to a product stock model class. This class stores the product skew and the stock level. From there, it will go through each product stock model instance and find the product using our product service instance. If it's successful in finding the product, it will go ahead and update the stock level. Once the task is complete, it will sleep for a minute before repeating the task. Moving into the program class, we can add a hosted service to the service collection by calling the ad hosted service extension method and declaring the service as the generic type. Going back to our product background service, a hosted service supports the same service lifetimes as a singleton service. That means it supports classes that have a singleton or transient service lifetime. Looking at the constructor, we're able to inject the storied service as it has a singleton service lifetime. In order to use a scope service lifetime class, you must at a custom scope and call it within that scope. Running our application, Our Bob hyphen APR product displays a stock level of four. This is the stock level that is stored in the storage service when the application runs. The hosted service is calling this API endpoint to update the stock. Looking at the Bob hyphen APR product, the stock level being updated to 10. If we look at the console window, we can see that our hosted service has updated to stock levels. Refreshing our product page, We can see that it's now displaying our stock level to 10. So we have successfully used [[Dependency Injection]]
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/how-to-set-up-a-hosted-service?u=76281980&t=186)** in a hosted service to update stock level of a product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET Core]] (2), [[Microsoft Products|Products]] (1), [[Dependency Injection]] (1)
> **Env Vars:** api (3), asp (2), net (2), apr (2)
> **CLI Commands:** make (1), find (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Disposing of a service](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=0)** - [Instructor] Unmanaged resources such as a file resource or a connection to a database sometimes needs to be disposed of when we are finished with them. This is either to free up memory or so unmanaged resources are released. This is done by inheriting the IDisposable interface and implementing the Disposable method into the class. And it works in the same way with classes that use [[Dependency Injection]]. The disposable method is implemented and any instances that need to be disposed of will sit in that method. Outside of dependency injection, we have to dispose of the class. This is even done by calling the dispose method or by wrapping the instance around using statement. However, this does not need to be done with dependency injection services and is widely discouraged. As discussed earlier, services can either have a Singleton scoped or transient service lifetime. When the service has reached its lifetime, it will call the dispose method automatically. There are some exceptions to that if you're registering a Singleton service without an interface and creating a new instance for it but that is a general rule. Why should we not explicitly dispose of services that we use for dependency injection? By calling dispose method, particularly for services with the Singleton scope service lifetime, the service will be disposed before its scheduled lifetime has expired. This could have a knock-on effect for other services that it depends on. For instance, if the product service relies on the storage service and the storage service has been given a Singleton service lifetime, that means that the storage service will be initialized
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/disposing-of-a-service?u=76281980&t=94)** for the applications lifetime. If we dispose of the storage service, that means that the product service is unable to perform its duty with the storage service and will for an exception. In the product service class, we are inheriting the IDisposable interface. That means we have to declare the dispose method that's within it. However, to ensure that we're unable to dispose of the service outside of the class, we need to ensure that the dispose method is not publicly available. There are a few ways of doing this, the best way is to change the dispose method to an interface declaration. We can do that by getting the IDisposable interface and calling the dispose method inside the service. By not specifying the access modifier, the method will be seen as private and will not be able to be called outside of the class. Be aware that the IDisposable interface only needs to be inherited in the class and not specific interface. Otherwise, the dispose method will be available as a declaration when we register the service in the DI container and can still be called upon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (4)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **Best Practices:** general rule (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Set up an application using dependency injection](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/challenge-set-up-an-application-using-dependency-injection?u=76281980&t=5)** - [Instructor] It's time for you to put [[Dependency Injection]] into action. The goal here is to display a list of all the [[Microsoft Products|products]] on the homepage of the web application. There is a method called GetAll in the ProductService class that will retrieve all the products when called. When using an [ASP.NET](https://ASP.NET) Core MVC application, the aim here is to inject the product service from the DI container so it could be used to achieve the end result. So we already have a Visual Studio solution which you can download from [[GitHub]]. There are two projects within that solution. The first project is a Service Library and this stores the services that we can inject as part of dependency injection. If we go into our product service, we can see that we have a GetAll method. This buffer returns a list of all the products. The other projects is an [ASP.NET](https://ASP.NET) Core MVC application and the goal here is to add the necessary classes from the Service Library to display a list of products on the homepage. The homepage is already set up as a controller in our MVC application so you can make the necessary modifications within that to display all the products. Be aware that modifications are only needed in the MVC application. The Service Library should remain untouched. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5), [[Dependency Injection]] (2), [[ASP.NET Core]] (2), [[GitHub]] (1)
> **Env Vars:** mvc (4), asp (2), net (2)
> **Definitions:** is a  (2), is an  (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Tools:** visual studio (1), github (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)

#### [Solution: Set up an application using dependency injection](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/solution-set-up-an-application-using-dependency-injection?u=76281980&t=0)** - [Instructor] Here is one solution that displays all the [[Microsoft Products|products]] on the homepage using [[Dependency Injection]] and [ASP.NET](https://ASP.NET) Core MVC. The first thing we have to do is to add the storage service and product service to the DI container. Although we are not using the storage service directly in the MVC application, the product service depends on the storage service. So it needs to be added. Afterwards, we move to our HomeController class to inject the product service as a parameter in the controller. From there, we can create a private field in the controller that will store an instance of the product service. Then it's just a case of calling the GetAll method from the private field and returning it as part of the View in the Index action. By running our application, we can see that all four of our products are displayed on the homepage of our web application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Dependency Injection]] (1), [[ASP.NET Core]] (1)
> **Env Vars:** mvc (2), asp (1), net (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Common Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Forgetting to add a service](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=0)** - [Instructor] We're now going to look at some common errors that occur when using [[Dependency Injection]]. The first one is forgetting to add a service. It's essential to register your services to the DI container. If you attempt to use the service and it has not been registered, the application will throw an exception. It's important to remember that a service is not initialized until it's used for the first time. So it may not be obvious that it hasn't been registered. Let's have a look and see what error we get when we forget to add the service. In our product controller, you can see that we are injecting the product service as a dependency. In our program class, we can see that we've added this class we have a transient scope lifetime. Let's go ahead and remove the registration and run the application. We can see that the application is running fine. Let's go ahead and go to our product page. We can see that when we go to the product page, we are getting an invalid operation exception, stated that we are unable to resolve the service for the particular type. Let's add the product service back in. What happens if we remove a service that is dependent on another service? The product service is reliant on the storage service when it's registered. So it's not been added to the DI container. We will still get an invalid operation exception, but the error message is slightly different. Let's go ahead and remove the storage service from the DI container. Running the application. We can see in this instance, it's telling us that some services are unable to be constructed. If we look further down the exception,
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/forgetting-to-add-a-service?u=76281980&t=94)** we can see that we've been unable to resolve the IStorageService. So it's always important to take time to register your services into the DI container if you wish to inject them or rely on them as a dependency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### [Injecting services with different service lifetimes](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=0)** - [Instructor] We discuss services that have different service lifetimes may not be able to depend on each other. This is particularly apparent with a singleton service. If you inject a class that has a scope service lifetime, the class with a singleton service lifetime will not know what scope it belongs to. The only way this will work is we're able to create a custom scope. We'll have a look at what exception would be greater with, if we were to make this mistake. So we have our storage service which has been registered with singleton service lifetime. Then we have our shopping cart service that has been registered as a scope service lifetime. Let's go ahead and add the shopping cart service as a dependency storage service and run the application. The application is unable to start, and we're being greeted with an aggregate exception saying some services are not able to be constructed. Looking at the inner exception, we can see that the singleton service cannot consume a class with a scope service lifetime. If we need to use a scope service with a singleton service we need to create a custom scope. To do this, we can inject the service provider into our singleton class install the instances as a private field. We replace the eye shopping cart service type with the eye service provider and rename the parameter to service provider. We create a new field, giving it a private access modifier making it read-only and passing it in the eye service provider as the type giving it the name _service provider. Then we just assign the _service provider field to the service provider parameter that we're passing in.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/injecting-services-with-different-service-lifetimes?u=76281980&t=95)** We recreate a new scope in the ad shopping cart method. The ad shopping cart method is run every time a HTTP request is generated. This is to ensure that customers have a shopping cart assigned to them. Within this method, we can create a new scope and resolve the shopping cart service. So we name our variable scope and we find our _service provider field. Within the service provider instance, there are two methods that we can use to create a custom scope. Either create scope or create asyn scope. Depending on whether we're calling asyn methods. Let's create a custom scope, declaring the variable scope as the new instance of our scope. From there if we need to resolve our shopping cart service we need to use our scope variable to do this. We can call the service provider instance and the get required service method. Part in our shopping cart service as a service. We will put in a break point now and run the application. We could see that we're able to resolve our shopping cart service within our singleton service and call any methods that reside within it. However, this is only for the lifetime of the scope.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Env Vars:** http (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Circular dependency](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=0)** - [Instructor] Circular dependency is when one class relies on another class and vice versa. For example, we have a product service, and we wish to inject the category service to get all a categories that a product belongs to. However, with the category service, we wish to inject the product service to get all the [[Microsoft Products|products]] that belong to a particular category. This is an example of circular dependency as the category service relies on the product service, and the product service relies on the category service. Circular dependency is a bad idea as it can involve tight coupling between classes, something that [[Dependency Injection]] is designed to reduce. In addition, it can make the code confusing as it goes against the single responsibility principle. If both services rely on each other, they both have a responsibility for each other. In [ASP.NET](https://ASP.NET) Core, it's forbidden to use circular dependency to inject services for a class's constructor. If you really need to use circular dependency, you can inject the service by injecting the service collection into the constructor and using that service collection to get the service. Let's see what happens when we try and use circular dependency in [ASP.NET](https://ASP.NET) Core. With the ProductService, we're are dependent on the storageService to get product information. Now we decide that we want to use the productService within our StorageService. We go ahead and inject the productService into our StorageService and run the application. When we run the application, we can see we're getting A circular dependency dependency was detected for the service error. Sometimes it is unavoidable to use circular dependency. If we really need to inject the productService into our StorageService, we can inject the serviceProvider and result the service with any of the methods.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/circular-dependency?u=76281980&t=94)** We replace the IProductService with the IServiceProvider type and rename the parameter to serviceProvider. Then we get the _serviceProvider field and declare it with the serviceProvider parameter that we're passing in. We are unable to result the productService in the constructor, otherwise the application will still have a circular dependency issue, but without the error. The application will just end up in a loop. With the serviceProvider instance, we can use the GetRequiredService extension method to get the productService instance to be used for dependency injection. So we call the variable productService and we call the _serviceProvider field, get in the GetRequiredService extension method, and pass it in the IProductService as the service. It's always best to look at your code architecture first and see if circular dependency can be avoided before using this workaround as a fix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (2), [[ASP.NET Core]] (2), [[Microsoft Products|Products]] (1)
> **Code Identifiers:** productservice (6), serviceprovider (4), storageservice (1)
> **Env Vars:** asp (2), net (2)
> **URLs:** [asp.net](https://asp.net) (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Ambiguous constructors](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=0)** - Constructor overloading is when a class has more than one constructor. The constructors are formed with the same name but have a different list of parameters. C Sharp can tell the difference in constructors even through the number of parameters specified, the type given to each parameter or the way they are ordered. What happens if a service use for [[Dependency Injection]] takes advantage of constructor overloading? For example, the ShoppingCartService has a constructor where it passes in the productService as a parameter. However, it also has another constructor where it passes in the StorageService. Out of the box the DI container would not know which constructor to use to initialize the service, and would therefore throw an ambiguous constructor error. The resolution around this is to explicitly initialize the service when registering the service in the DI container. Earlier, when registering services for dependency injection, there was an extension method to create the service instance. This is a good opportunity to use this, as we can tell which constructor to use when initializing our service in the DI container. The one downside with this is that if we need to add additional dependencies to our constructor, we also need to add these same dependencies when registering the service. We have our ShoppingCartService, and we can see that we are using a constructor overlay technique. With the first constructor, we're passing in a dependency for the productService, whereas for the second constructor, we're passing in a dependency for the StorageService. Using the default way to register a service is going to cause an exception. If we run the application now, we can see that we're getting
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/ambiguous-constructors?u=76281980&t=92)** a constructors are ambiguous error. The obvious fix would just be to remove one of the constructors and that would fix the error. However, what if either constructor was being used in other applications? This is where we can explicitly initialize the service when registering it, going into our program class and our service collection instance, we can find the extension method that allows us to create the service, passing in an instance of the service provider, we can use that to resolve dependencies on the constructor's parameters. We find the AddScoped extension method that has the delegate. We pass in the IServiceProvider as the type, and the serviceProvider as the parameter's name. We then return a new instance of the ShoppingCartService. As we want to use a constructor that has a StorageService as a parameter, we can select that one. From the serviceProvider, we can use the GetRequiredService extension method to resolve the service. If we run the application now, we can see that it's able to initialize our service, and we can now use it for dependency injection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (3)
> **Code Identifiers:** productservice (2), serviceprovider (2)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - constructor (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue your ASP.NET Core journey](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-in-dot-net-6-dependency-injection/continue-your-asp-dot-net-core-journey?u=76281980&t=0)** - Now that you have a better understanding of [[Dependency Injection]] and how it is used in [ASP.NET](https://ASP.NET) Core, I encourage you to start using it in your web applications to get a better understanding on how it works and how it behaves. The built-in DI container is just one of several DI containers that are available for [ASP.NET](https://ASP.NET) Core. Others include AutoFac and StructureMap. I encourage you to check them out to see how they differ. As the built-in DI container is a slim down version on how to use dependency injection, it may not have as many features as some of the others. However, I've always found that it's more than up to the job. The benefits of dependency injection really come across are much larger and more complex applications. I'm sure you agree with me that it's a great design pattern when you use it regularly. If you want to get in touch with me, you can find me on [[LinkedIn]], visit my website, or my YouTube channel. Thanks very much for watching. And I hope to see you again in one of my courses soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (3), [[ASP.NET Core]] (2), [[LinkedIn]] (1)
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