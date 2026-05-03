---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-angular-and-asp-dot-net-core-applications
url: "https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications"
duration_minutes: 176
duration: 2h 56m
level: Intermediate
updated: 11/26/2019
learners: 6348
skills:
  - ASP.NET Core
  - Angular
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHLAL3kLeQiyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1574791870697?e=2147483647&amp;v=beta&amp;t=-Gi80_DsezuAgvv88arZ9AWpsvOdzJryFJ_nlG1iVEQ"
linkedin_topic: Web Development
learning_paths:
  - '[[Getting Started as an ASP.NET Core Developer]]'
prev_courses:
  - '[[ASP.NET Core- Razor Pages]]'
next_courses:
  - '[[Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security]]'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":4,"total":9,"prev":"ASP.NET Core- Razor Pages","next":"Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/asp-net-core
  - skill/angular
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20Angular%20and%20ASP.NET%20Core%20Applications.md)

![Building Angular and ASP.NET Core Applications](https://media.licdn.com/dms/image/v2/C4E0DAQHLAL3kLeQiyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1574791870697?e=2147483647&amp;v=beta&amp;t=-Gi80_DsezuAgvv88arZ9AWpsvOdzJryFJ_nlG1iVEQ)

# Building Angular and ASP.NET Core Applications

> Want to build your own web application? In this course, Ervis Trupja shows you how, explaining what it takes to create a web app using Angular, the popular JavaScript framework, for the front end and the ASP.NET Web API for the back end. Ervis steps through how to build the service layer with the ASP.NET Web API to expose the required endpoints to create, read, update, and delete entries. He then 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications) | 2h 56m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started with Angular](#getting-started-with-angular)
  - [What you should know already](#what-you-should-know-already)
- [**1. Setting Up the App Infrastructure**](#1-setting-up-the-app-infrastructure) (4 videos)
  - [Demo application overview](#demo-application-overview)
  - [.NET Core templates](#net-core-templates)
  - [Web API architectural overview](#web-api-architectural-overview)
  - [Angular architectural overview](#angular-architectural-overview)
- [**2. Setting Up Web API**](#2-setting-up-web-api) (7 videos)
  - [Creating data models](#creating-data-models)
  - [Adding a service and data](#adding-a-service-and-data)
  - [Create API endpoint](#create-api-endpoint)
  - [Read API endpoint](#read-api-endpoint)
  - [Update API endpoint](#update-api-endpoint)
  - [Delete API endpoint](#delete-api-endpoint)
  - [Testing API endpoints using Postman](#testing-api-endpoints-using-postman)
- [**3. Getting Started with Angular**](#3-getting-started-with-angular) (12 videos)
  - [Angular key concepts](#angular-key-concepts)
  - [Generating components and services](#generating-components-and-services)
  - [Cleaning up code and updating the router](#cleaning-up-code-and-updating-the-router)
  - [Designing the Books page](#designing-the-books-page)
  - [Reading data from Angular](#reading-data-from-angular)
  - [Designing the Create page](#designing-the-create-page)
  - [Adding new data from Angular](#adding-new-data-from-angular)
  - [Designing the Book Details page](#designing-the-book-details-page)
  - [Getting a single book from Angular](#getting-a-single-book-from-angular)
  - [Updating existing data from Angular](#updating-existing-data-from-angular)
  - [Deleting data from Angular](#deleting-data-from-angular)
  - [Handling errors in Angular](#handling-errors-in-angular)
- [**4. Implementing NgRx to an Existing Angular App**](#4-implementing-ngrx-to-an-existing-angular-app) (7 videos)
  - [Why NgRx?](#why-ngrx)
  - [NgRx actions](#ngrx-actions)
  - [NgRx store](#ngrx-store)
  - [NgRx reducers](#ngrx-reducers)
  - [Connecting the dots](#connecting-the-dots)
  - [Challenge: Delete a book](#challenge-delete-a-book)
  - [Solution: Delete a book](#solution-delete-a-book)
- [**5. Implementing Authentication in Your Angular App**](#5-implementing-authentication-in-your-angular-app) (4 videos)
  - [Setting up Auth0](#setting-up-auth0)
  - [Setting up an authentication service](#setting-up-an-authentication-service)
  - [Handling authentication](#handling-authentication)
  - [AuthGuard](#authguard)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go next](#where-to-go-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with Angular](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=1)** - Have you ever wanted to build a web application? Emerging technologies like [ASP.NET](https://ASP.NET) Web API and [[JavaScript]] frameworks like [[Angular]] make it easy to design and build single-page applications. A web API is a great framework for exposing your data and services and Angular is a great JavaScript framework for building highly interactive web applications. During this course, we'll build this service layer with the [ASP.NET](https://ASP.NET) Web API to expose the required endpoints to create, read, update, and delete entries. Then, we'll build a rich UI using Angular with Bootstrap. As we dive into Angular components and services, I'll teach you how to send the request to a web API application, and most importantly, how to receive a response and even how to handle errors. We will also take advantage of the ngrx/store library to implement Redux better in our Angular app. By the end of this course, we'll learn about authenticating users using Auth0. Hi, I am Ervis Trupja and I specialize in building enterprise level web apps. Join me in my [[LinkedIn]] Learning course as we explore building web apps using Angular and .NET Core Web API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[ASP.NET Web API]] (2), [[JavaScript]] (2), [[LinkedIn]] (1)
> **Env Vars:** api (5), net (3), asp (2)
> **URLs:** [asp.net](https://asp.net) (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - have (1)

#### [What you should know already](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/what-you-should-know-already?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/what-you-should-know-already?u=76281980&t=0)** - [Narrator] Before we start this course, let us talk about what you should know. To build our apps, I'm going to use Visual Code and .NET Core 3.0, or any version of .NET Core greater than 2.0 should work just fine. To generate our services and components, I'll be using [[Angular CLI]]. To test our API endpoints, I'll be using Postman, and Bootstrap for designing pages, so having a basic understanding of Bootstrap is recommended but not required. This is not an introduction course, so I assume that you are already familiar with [[Angular]] concepts like components, services, injection, et cetera, and also with API concepts like controller, API endpoint, et cetera. Throughout this course, if you would like to follow along while I'm coding, you can download the exercise files from the course page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular CLI]] (1), [[Angular]] (1)
> **Env Vars:** api (3), net (2), cli (1)
> **Versions:** 3.0 (1), 2.0 (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Tools:** postman (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)


### 1. Setting Up the App Infrastructure

[↑ Back to Table of Contents](#table-of-contents)

#### [Demo application overview](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=1)** - [Instructor] Throughout this course, we'll build an app from ground up. We'll start with nothing but just visual code and build a complete functional app. Our app is named summaries, and it's just to add books, update books, delete books or view book details. So as a user, we use this app to keep track of all the books that we want to read, we have read or we are currently reading. In the main page you will see only one button which is the login button, let us click this button to log into our app. And in here, choose any of the providers to log in to the account. So I'll choose [[Google]] in my case. Once you are logged in to the account, you'll see two additional buttons at the top right. The add, which is the section where you can add a book to the collection, and books where you can see all the books. In here you can see data like title, which is title of the book, description, author, rate, date started, and date read. Based on these two columns, we have the status column. So for example if you have started to read a book but you have not read it yet, the status is going to be in progress. If you have not started the book, then the status is going to be not started, and if you have started the book and you have read it, then the status is going be read.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=96)** Here on the actions column, you have three options. You have the show, which will display the details of the book like the full description because in the first page, we can only see a portion of it. Then you have the update button to update a book, and the delete button to delete a book. Let's go back to all the books and delete our first book. So once you click the delete button, you'll be redirected to this confirmation page, where you can either configure the action or just cancel it by going back. Let us configure it, if we go back to the books, you'll see that that book does not exist anymore. Now let us update this book. So, go to update, let us provide a date start, a date read, and a rate of let's say, 4.5, and then click the update button. So here now we see that this book has a date start, it has a date read, and the status is changed to read, and whenever you want to log out from the app, you can just click the log out button at the top right corner. So we were successful, we logged out, and now in here we can see only the login button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** configure (2)
> **Versions:** 4.5 (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [.NET Core templates](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=0)** - [Instructor] To create our app we are going to use the default templates that come with .NET Core and to do so, we are going to use the .NET Core [[CLI]], or the command line interface. The .NET Core CLI is a new cross platform tool chain for developing .NET Core apps. By using the .NET Core CLI, you can build apps on top of programming languages like C#, Visual Basic, and F#. You can also add or modify config files, like gitignore, globaljson, webconfig, or even create solution files. But, what is important in our case is the templates that we can use to build applications. Some of them are the mvc to create [ASP.NET](https://ASP.NET) Core MVC applications, the [[Angular]] to create [ASP.NET](https://ASP.NET) Core Angular apps, or if you want to create [[React.js]] apps, in this case you can use the [[React.js|react]] keyword. You can also use the webapi keywork to create [ASP.NET](https://ASP.NET) Core Web API projects. So, let us go to Visual Code and see this in action. In here go to File and then Open Folder. You can choose any folder of your choice, but in my case I'll just go to Desktop and create a new folder in here named Summaries. Then I'll press Enter and Select Folder.
>
> **[1:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=100)** Let us close the Welcome tab in here, right click inside the Summaries folder, and choose the Open Internal. Before you do anything, make sure that you have installed already the latest .NET Core version. For that write in here dotnet -v, scroll up in here, and you'll see that we have already installed the .NET Core SDK 3.0. Let us close the tab on the left and now let us create our first project. If you want to see all the available templates, you can write in here dotnet and then new. So here we can see that if you want to create, for example, a solution file, you can just write dotnet new and then sln. Or if you want to create an Angular app, you can write dotnet new angular. Or if you want to create a console app, you can just write console instead. In our case, we want to create an Angular app. So for that let us scroll down and in here write dotnet new angular and then press Enter. We see that our project was created successfully. If you want to see all the files, you can just expand the Explorer and here you will see all the files.
>
> **[3:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=194)** Now, before we go to the next part, let us run this project by writing in here dotnet run. So we that our app was compiled and ran successfully. If you want to see the result, simply hold the Control key and then click on any of these links. And here we have the result. So this is the app that comes by default with the .NET Core template, but we are going to modify this app throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[CLI]] (3), [[ASP.NET Core]] (3), [[React.js]] (1), [[React.js|React]] (1)
> **Env Vars:** net (11), cli (3), asp (3), mvc (1), api (1)
> **CLI Commands:** dotnet (6), make (1)
> **UI Navigation:** go to (4), scroll up (1), scroll down (1), click on (1)
> **URLs:** [asp.net](https://asp.net) (3)
> **File Paths:** react.js (1)
> **Versions:** 3.0 (1)
> **Tools:** command line (1)

#### [Web API architectural overview](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=0)** - [Instructor] The .NET new [[Angular]] command created some default files within the solution. Now this solution has both the Web API and Angular project-related files. On this part we'll have a look at the Web API project. And on the next one, on the Angular project. So for that let's go to Visual Code. In Visual Code, in Explorer we are going to see the ClientApp folder. Now this folder has the Angular-related files, so we're not going to discuss about that now. The next folder is the Controllers folder. Inside this folder we can find all the Web API controllers. So for example we have the WeatherForecastCotroller, and this controller has a single API endpoint, the Get endpoint. The next, we have the Pages folder. Inside this folder we have three files, and the most important one is the ViewImports.cshtml, which is used to import all the necessary libraries that we can use throughout the views. For example, the TagHelpers. Another important folder is the wwwroot folder, and this folder is known as the root folder for the .NET Core apps. And this folder is mainly used to store static files
>
> **[1:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=94)** like images, documents, et cetera, because by keeping the static documents in here we can easily access them. Another important file is the Program.cs file. And this file is also known as the entry file for the .NET apps. In here we can see the Main method, and inside the Main method we have the CreateWebHostBuilder method. And inside this method we can see that we have configured as our startup file, the Startup.cs file. So next we have the Startup.cs file which is also known as the configuration file because basically we can do in here all the configurations like the database connection strings, the services that we want to use, et cetera. Inside the Startup.cs we have two methods, the ConfigureServices and the Configure methods. The ConfigureSevices method is used to configure dependency interaction. And on the other hand we have the Configure method which is used to setup middle wares, [[Routing]] rules, et cetera. So for example if we want to use a service in the future, we can configure it inside the ConfigureServices method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[Routing]] (1)
> **Env Vars:** api (4), net (3)
> **Prerequisites:** configure (4), setup (1)
> **Definitions:** known as (3)
> **Analogies:** for example (3)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Angular architectural overview](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=0)** - [Narrator] We have already mentioned that the .NET new [[Angular]] command created both a web API and an Angular project. So let's go to visual code and see which are the default Angular files that were created. In our solution you can see the client app folder and the all the Angular related code goes in here. Here we have three main folders. The e2e which is used for [[Unit Testing]] related code. We have the node modules where we have all the libraries that we need to use to run our Angular app. And the most important folder in here is the source folder where all the code goes in. Inside the source folder we have the app folder, the assets and the environments. Inside the app we define the modules. Inside the app we have all components like counter, [[Fetch]] data et cetera. Other than that we have the app.component.[[HTML]] which is know as the entry component file in Angular applications. If we open this file we're going to see in here that we have defined the menu and the body of our application. Then next we have the app.module.ts file and this is know as the configuration file
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=96)** in Angular projects. Because inside here we define all the components that we want to use, we define all the modules that we want to use and also the router for our Angular app. Then next we have the asset folder. This folder is used to generally keep the static files like for example the icon, images, documents et cetera. And inside the environments we have the two environment files like the production environment and the development environment where we define all the specific information that we want to use for each environments. Next we have the index.html which is the file where we define the route component where in this case we have defined the app-route. And then if you scroll down you will see the angular.[[JSON]] file where we define the Angular related configurations like for example where do we get the styles from? Which is the assets folder? Et cetera. Then next we have the package.json file where we define scripts like for example the script to build the Angular app which is the ng build, the script to run the test and even the dependencies like Angular animations, common, compiler et cetera.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (12), [[HTML]] (2), [[JSON]] (2), [[Unit Testing]] (1), [[Fetch]] (1)
> **File Paths:** app.component.html (1), app.module.ts (1), index.html (1), angular.json (1), package.json (1)
> **Analogies:** for example (3)
> **Env Vars:** net (1), api (1)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** node (1)
> **Speakers:** - [narrator] (1)


### 2. Setting Up Web API

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating data models](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=0)** - [Narrator] In this part, we are going to create our Data Model. And, Data Models are used as signature for the way we want the database tables to look. So, its model field will be translated into a database table field. So, let's go to a Visual Code to see this in action. In here we are going to create a new folder and are going to name this folder: Data. Because we are going to put inside here all the data related files like models, services, et cetera. models, services, et cetera. Now, inside the Data folder, let us create another folder. We are going to name this folder: Models. And inside the Models folder, we are going to create our C Sharp file which is going to represent our books model. For that we click on the New file button, and then we write in here Book.cs. and then we write in here Book.cs. So let us first, define in here the namespace, for that we can just go to Controllers, and then just copy the namespace in line 8 Controllers, and then just copy the namespace in line 8 go back to Book.cs, and paste it here. go back to Book.cs, and paste it here. Now that we have the namespace, we can create our class. For that we write in your public class, the name is Book
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=96)** and then inside here we can define all the properties. The first property, is going to be the identifier. For that we write in here, prop, and then click the double tab button to create the property. This property is going to be of type integer and we're going to name it: Id. Let us create another line for the adult, which is going to be of type: string. We name it: Title and let us create another one of type, string, for the Author, and another one for the Description of type, string. Now, let's create one more for Now, let's create one more for the rate we want to give to the book for that we write in here, prop. This is going to of type double, and, we name it: Rate, and let's create two more for the DateStart and DateEnd. For that we write in here, prop, of type: DateTime, of type: DateTime, and then we name it: DateStart. And of course we need to import the necessary namespace by pressing in here, Control Dat, and then we import the, using System. and then we import the, using System. And last, let's do the same for the DateEnd.
>
> **[3:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=190)** So, type is going to be: DateTime, the name is going to be: DateEnd. Now, we have seen from the demo that users don't have to always provide a Rate, a DateStart, or a DateEnd. This means that these fields are optional fields because we don't always require the user to provide the value. To make this feels nullable, we just write the question mark after the datatype, so. DateTime question mark, means that the DateStart is now nullable. And this is how our book model looks like.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (1)
> **Cross-References:** go back to (2)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Adding a service and data](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=0)** - [Instructor] Now that we have created our model, it is time to work with data using that model, as our data signature. Now, we're not going to use a real database, since that is not the focus of this course. But we are going to use a static file from which we will get the data to work with. So, let us start by creating our service, and configuring it. Inside the data folder, we are going to create a new folder named Services. And inside here, we are going to create our interface. For that we write iBookService.cs. Let us create a namespace, so for that we write in here namespacesummaries.data.
>
> **[0:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=55)** And inside here, let's create our interface. For that we write public interface iBookService. Then, inside here, we are going to create all the method signatures. So we want to have a method which is going to return all the books. For that, we write in here listBook and rename this method GetAllBooks. Let us import the necessary namespace in here by pressing control dot and then choose the usingSystem.Collections.Generic namespace. Let us also import the book class by importing the usingSummaries.controllers. Or we can just go to the book.cs file, in here, change the summaries.controllers namespace to summaries.data, go back to iBookService and change the controllers to data. Next, we are going to create a method which is used to return a single book. For that, we write in here GetBookById. And it takes the parameter a book id. And next, we need a method of type void, because we don't want to return anything for updating books. For that we write void updateBook.
>
> **[2:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=154)** This method takes two parameters. The first parameter is going to be the ID of the book that we want to update and the second parameter is going to be the new values of the book. Next, we have a method to delete the books. So for that, we write void DeleteBook. We're going to pass as a parameter, a book ID. And the last one is going to be a method to add a new book to our collection. For that, we write AddBook and we pass as a parameter book newBook. Let us save the changes and go to the services folder and add our service. So for that, we write in here bookService.cs. Let us defined the namespace to be summaries.Data.
>
> **[3:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=220)** And then inside here, we write public class BookService. Which inherits from the IBookService. Now, to be able to use this service, we need to implement all the IBookService interface members, so, control.implementInterface. And we are going to implement a logic in the upcoming part. So, for now, let us go to the startup.cs file and configure this service. So, go to startup.cs and then inside the configure services, just alter the AddSpaSaticFiles, write services.AddTransient, which means that we are going to create a new reference to our service each time we use it in a different controller. So, which is the file that we want to inject in our controllers, that is going to be the IBookService and which is the implementation of this file, the implementation is the bookService. And parenthesis at the end. Let import this namespace, control dot and then using summaries.data. And that's it. But before we go to the next part, let us create a static file which is going to return a list of books.
>
> **[5:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=315)** So for that, let's go to the data folder. Inside here, create a file, name it data.cs. Now, in here, let us write the namespace. So for that, we write in here namespace summaries.data.
>
> **[5:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=336)** Inside here, we are going to have static class which is used to return data to our users. In here, I'll not write all the codes since we are just returning a list of books, but I'll get the code from the data.txt file which you can find in your exercise files. So I'll just paste the code in here and fix the errors. The first problem that we have is that we need to import a list, so control dot. We import the collections.generic. Then next, we import the date time, which is part of the system namespace. And we see that we get the DateRead issue. Which says that book does not contain a definition for DateRead. Let us go to our book.cs file. And inside here, we see that instead of writing DateRead, we have written DateEnd. So, let us change that to DateRead, save the changes and go back to the data.cs file and we see that the error is gone.

> [!info]- Semantic Content
>
> **Code Identifiers:** ibookservice (3), bookservice (2), listbook (1), usingsystem (1), usingsummaries (1)
> **UI Navigation:** go to (7)
> **Cross-References:** go back to (2)
> **Prerequisites:** configure (2)
> **File Paths:** data.txt (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)

#### [Create API endpoint](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=0)** - [Narrator] Now that we set up this service, and we created the data file, which has the data that we will work with, it is time to create a controller which will have the API Endpoints that we are going to need. So, let's see this in action. In our solution, let's go to the Controllers folder and create a new controller. We are going to name this controller BooksController.cs. Inside here, let us define the namespace to be Summaries.Controllers and then inside here we are going to create our first controller. And the controller is just a class, so for that, we write in here public class BooksController. But for a class to be a controller, we need to inherit in this case from the controller base class. So for that we write in here colon and then Controller. Let us import the necessary name space for controller, which is the AspNetCore.mvc. Now, inside here, we are going to write all the code. First of all, let us define the route for this controller. So we are just going to write in here, Route and then, inside double quotes, api, slash, inside square brackets, write Controller. Inside this controller, we want to use the books service.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=96)** So, to use the service, we need to inject it in our constructor. For that, we write in here private IBookService. We are going to name it underscore service. And then we write in here, ctor. Double tap to create the constructor. Let us import the names space for the IBookService. Change the ClassName to the controller name, which is BooksController. And then write inside here as a parameter, IBookService. Now, inside the constructor write Service is equal to service. So we have everything set up. Now it's time to create our first API Endpoint, for creating or adding a new book. To add a new book, we are going to send an HTTP post request. So, for that we write in here http Post. And then we name this HttpPost. Or the URL for this request to be AddBook. Then here we write public IActionResult Add Book. We want to pass as a body request. So FromBody, the book that we want to add, and that's it. And then, inside here we are going to use this service that we just injected, to add our book to our collection.
>
> **[3:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=191)** So for that, we just write in here service.AddBook, and then, Book. And now let us return a success response by writing in here return. Okay. Then double quotes, Added. So we are using the add method, but the add method is not implemented yet. For that, let us copy this value, go to our Data folder, and inside services, go to BookService, and here we have the add book method. So, what this method should do, is basically get the data. From the data, get the books, and to the books, we should add the new book. And that's it. Let us remove the line ten, because we don't need it. Let's save the changes.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), http (1), url (1)
> **UI Navigation:** go to (3)
> **Prerequisites:** set up (2)
> **Speakers:** - [narrator] (1)

#### [Read API endpoint](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=0)** - [Instructor] The users want to be able to see what they have in their collection and so we need to implement a feature that will return all their books. For that, we'll create a read API endpoint. So, let's go to Visual Code and see this in action. And here go inside the Controllers, then BooksController.cs. After the AddBook we are going to add a new API endpoint. So, read all books. This is going to be an HTTP get request and the name of the URL is going to be the same as the action name, so for that we just write inside double quotes, square brackets, and then action. Next, we define the implementation. So for that we write public IActionResult, then GetBooks, then inside here we write var allBooks.
>
> **[1:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=69)** We are going to use the service, so service.GetAllBooks. And once we have the books, we want to return them to the users by writing return Ok and then inside here allBooks. Let us press Enter and save the changes. Now, let's go to the GetAllBooks method and write the implementation. So, inside Data, then go to Services, BookService. In line 17, we have the GetAllBooks method and what this method does is that it gets all the books from the data and just returns them. So return Data.Books.ToList. Let us import the necessary namespace, which is the System.Link, and save the changes.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), http (1), url (1)
> **UI Navigation:** go to (3)
> **Code Identifiers:** allbooks (2)
> **Speakers:** - [instructor] (1)

#### [Update API endpoint](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=0)** - [Instructor] So far we know how to add new data and how to read them, but sometimes users might enter bad data. So, we should give them the ability to update their existing data. For that we are going to create an update API endpoint. In here we need to go inside the Controllers folder and then BooksController.cs file. Just after the ReadAllBooks, we are going to add a new endpoint for updating an existing book. This is going to be an HTTP put request, so for that we write in here http put and then we write public IActionResult, UpdateBook.
>
> **[0:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=56)** Of course in the HTTP put, we can define the URL. So for that we write, inside double quotes UpdateBook and we are going to pass as the URL parameter, the book ID. So just write ID in there and the UpdateBook method is going to take two parameters. The first parameter is going to be the ID of the book we want to update and the second parameter, which we are going to pass as a body request, is going to be the book with a new values. In here by using this service, we write UpdateBook and pass the ID and the book parameters.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=105)** Next, we just return the Okay book. Now let us go to our service and implement the UpdateBook method. For that we go inside the Data folder, then Services, and then BookService.cs. Scroll down to the UpdateBook method and in here we are going to write our code. So before we update a book, we need to first get the old data. For that we just write in here var OldBook is equal to Data.Books.Firstordefault
>
> **[2:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=149)** and goes to n.id is equal to the ID parameter.
>
> **[2:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=158)** Now we check if we have an existing book. So if the old book is different from null, we are going to update this book. So, we start with a title by writing in here OldBook.Title that is going to be now the NewBook.Title and then we do the same for author and description.
>
> **[3:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=189)** We also have the rate, the date start, and the date read.
>
> **[3:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=204)** That's it.

> [!info]- Semantic Content
>
> **Env Vars:** http (2), url (2), api (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Delete API endpoint](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=0)** - [Instructor] It is great that the user can now add new books, modify existing books, and see all the books. But what if the user wants to delete a book from its collection? Well, let's implement a delete API endpoint to do that. So, let's go to visual code. And here we need to go to the books controller and scroll down after the update book. And write, delete the book. This is going to be an http delete request. So for that we write in here http delete. And the name of the API endpoint is going to be delete book. And we are going to pass as the parameter of this URL the book ID. Now, let's write in here public ix result. Delete book. And then int ID. Then you write service dot delete book. We pass as a parameter the ID. And let us just return. Okay. Let's save the changes and go to the delete book method and implement the S3 code. For that go inside the services method, then book service dot cs and implement the delete book.
>
> **[1:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=99)** What we want to do in here is that we want to find the book, and then remove this book from our collection. So for that, let's write in here var book is equal to dera dot books dot first or default. And that goes to end dot ID is equal to the book ID that we get as a parameter. And then dera dot books dot remove. And then we just write in here the book. Let us save the changes, and scroll down to see all the other methods. We see that we are still missing the get book by ID method so since we are in here let us implement that one, too. What we want to do is that we want to return from the data that books, the book where the book ID, so first or default and that goes to end dot ID, is equal to the book ID. Let's go to the controller and implement an additional end point for reading a single book. So I just write in here get a single book by ID. This is going to be an http get request. We are going to name the URL single book and it will also have a parameter of ID as part of the URL.
>
> **[3:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=199)** Then we write in here public ix results, get book by ID, int ID. And then in here we write var book, is equal to service dot get book by ID and we pass as a parameter the ID in here. And then we just return, okay, book. And then save the changes.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), scroll down (2)
> **Env Vars:** url (3), api (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Testing API endpoints using Postman](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=0)** - [Tutor] Now that we have created all the API endpoints that we needed, it's time to implement the [[Angular]] client App to consume them. But before we do so, let us test the work as expected. And to test them, we're going to use Postman and I'm assuming that you have already installed it, if not, you can get it from their website. So now, let's go to Visual Code and run our project. In here, right click and then go to Open in Terminal and write in here, dotnet run. Now that we see that our app was compiled successfully, let us scroll up to the localhost 5001 and copy this link. Go to Postman and create a new request. Let us paste the URL that we just copied in here and then write, /api/Books/GetBooks.
>
> **[1:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=66)** And click the Send button to send a request. So in here we see that we get all the books that we have in our collection which means that the GET API for getting all books works fine. Now, let us test the single book API. For that we write in here, SingleBook, and let us provide an ID of one. Let's click the Send button and we see that the book with ID one was returned. Now, let us test the update book so let us say we want to update this book, for that we just write in here, UpdateBook and we paste the book ID number one, which means that we want to update this book and let's copy all these values. Let's go to the Body request because that's from where we want to send the new data and then go to the Headers. In here write, Content-Type, application/[[JSON]]. Then go to Body, then raw and paste it in here. Let us change the title to, Updated Title. Make sure that you, change the GET request to a PUT request. And then click the Send button. We see that our book was updated.
>
> **[2:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=161)** If you want to make sure, you can just write in here, SingleBook, and then leave the one as the ID. Change the request to GET and click the Send button one more time. Now we see that the book that we get, has the title, Updated Title. Now, let's test the add new book functionality. For that we write instead of SingleBook, AddBook. We remove the ID from here. We change the GET to a POST. And, we want to add a new book with ID of, let's say 20, the title is going to be, New Book Title, New Author. And we can leave the other data as they are. So, New Author, we have the POST in here, click the Send button. And we see that we get the Added response which means that our book was added. And the request status is 200, which means it was a successful request. Let's see if we have our book now in our collection, for that we write in here, GetBooks. Change the POST to GET and click Send one more time. If we scroll down in here, we're going to see the book that we just added with the ID of 20, the new book title and the author. Now let us delete a book, for that,
>
> **[4:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=256)** instead of GetBooks we write, DeleteBook. We provide an ID of 20. We change the request to DELETE and we click the Send button. We see that the book was deleted. Now, let's change the request to GET. Let's change this to GetBooks. Click the Send button and we see that the book with the ID 20 is missing because we just delete it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (1), [[JSON]] (1)
> **API Endpoints:** get  (5), post  (2), /api/books/getbooks (1), put  (1), delete
 (1)
> **Env Vars:** api (3), post (3), url (1), put (1), delete (1)
> **UI Navigation:** go to (6), scroll up (1), scroll down (1)
> **CLI Commands:** make (2), dotnet (1)
> **Tools:** postman (2), terminal (1)
> **Definitions:** means that (3)
> **Speakers:** - [tutor] (1)


### 3. Getting Started with Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [Angular key concepts](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=0)** - [Instructor] [[Angular]] is an open source web application framework developed by [[Google]]. The framework has many features like two way data binding, templating, [[Routing]], components, [[Dependency Injection]] and so on, but which are the main concepts and what is the main purpose in Angular? One of the key concepts in Angular are modules. In modules, service containers that group together blocks of functionalities that belong together like components, directives, services, and so on. An important Angular module which comes by default when generating an Angular app, is the app module. Which is also known as the config module, as here we get to configure the components, providers, bootstrappers, etc. Components is another key concept in Angular, and the component defines the behavior of a portion of a screen. Inside a component we have template, directives, and data binding. A template is an [[HTML]] that defines how the view for that component is rendered. On the other hand, directives are custom attributes that enhance the HTML syntax and are used to attach behaviors to specific elements on that page. Data binding is a process that connects a component to its template and allows data and events to flow between them. A component is decorated with the @ component syntax.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=95)** Inside the component we define the selector, which is a name that we want to use to render the view, we define the template URL, which is the HTML file for this component. We have providers for services, and also we can define in here the CSS code, which is going to be applied to this HTML only. Last but not least, another important concept is the services. Services define reusable functionalities that are independent of the views. This means that we can use a single service in different components. Dependency injection is a way to supply dependencies and to supply services to different classes or components, we use dependency injection, and to use a service in Angular, we need to inject it in the components constructor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[HTML]] (4), [[Dependency Injection]] (3), [[Google]] (1), [[Routing]] (1)
> **Definitions:** is a  (3), is an  (2), known as (1), means that (1)
> **Env Vars:** html (4), url (1), css (1)
> **Exercise Files:** template (4)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Generating components and services](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=0)** - [Narrator] Before we start developing our [[Angular]] app, let us first create all the components and services that we will use. A component in Angular represents a single feature. So this means that in our case, we need a component for each feature like showing all books, creating, deleting, etc. And we will also create a service, which we are going to use to interact with our web API. So let's go to visual code and see this in action. Before we create anything in here, let us install the [[Angular CLI]] which is an Angular Command Line Interface used for creating components, services, etc. For that, right-click in here and then go to open in terminal and then write mpm install-g to install in globally at Angular/[[CLI]].
>
> **[1:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=63)** In here, press Enter. And we see that the Angular CLI was installed. If you want to go from here, just type in here ng-v and we see that the Angular CLI was installed successfully. Now, let us go inside the ClientApp folder. Then go inside the source folder and then inside the app folder. Inside here we are going to create two new folders, one folder for the components. So we are going to name that folder components. And another folder for services. So we are going to name that folder services. Now, let us go in the components folder, right-click, and then open in Terminal. So we see that we are in the components path. To create a component, we are going to use the Angular CLI ng generate. So for that, we write in here ng g, which stands for generate, then c, which stands for component. And then we are going to name our component books. This is going to be the components that we use to display all books. So, let's press enter. We see that we get an error in here which says that more than one module matches. Because we have in here more than one module, we need to define to which module
>
> **[2:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=155)** the books component will belong. So we are going to place the books components inside the app.module.ts module. For that, we write ng generate component name books, and place it in the module app. So dash m app. Now we can see that our component was generated successfully. If you want to confirm it, you can go to the app.module.ts file. And in here, you can scroll down and see that the books component is already part of the declarations array. Let us now go and create the other components. Another component we are going to create will be the delete book component. So we write in here delete-book. Another one is going to be the new book component. So we write in here, new-book. Then we have the show book component for displaying a single book details. And then we have the update book. So we created all the components that we need now, let us create our service. For that, go to the services folder. Right-click in here, and then go to open in Terminal and write in here ng g which stands for generate, s for service, and we are going to name our service, the book service.
>
> **[4:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=246)** So, just write in here, book. We see that our service was generated successfully. Let us go back to the app.module.ts. Let's close the terminal. Here now we can see all the components. So here we can see the components that we just created. And for us to be able to use the book service that we just created, we need to include it in the providers array. So for that we write in here, book service. And then we import the necessary namespace, which is the services/book.service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[Angular CLI]] (4), [[CLI]] (1)
> **UI Navigation:** go to (4), right-click (3), scroll down (1)
> **Env Vars:** cli (4), api (1)
> **Tools:** terminal (4), command line (1)
> **Definitions:** stands for (3), means that (1), is an  (1)
> **Prerequisites:** install (3), before we start (1)
> **File Paths:** app.module.ts (3)
> **Cross-References:** go back to (1)

#### [Cleaning up code and updating the router](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=0)** - [Instructor] Before we implement anything new, let us go to our [[Angular]] app and clean up the code from the existing components that we do not need. Also, let us update the router so it uses our components. Let's go to visual code, and see this in action. In here, go inside the ClientApp folder, because here we have all the Angular-related code, and then inside the source folder. Then here, go inside the app folder. We have a couple of components outside the components folder. So we have counter, [[Fetch]]-data, home, and nav-menu. Now, we need the home component, so let us just drag and drop it inside the components folder. And then, click the Move button. Also we need the nav-menu, so let us drag and drop it as well. We don't need the counter and the fetch-data components. So, let us remove these components. And now let us go and change our router. For that, go inside the app.module.ts file, because this is our config file for the router. Here, first, let us remove the counter component, and the fetch-data component import. Then, change the URL for the nav-menu. Now, the nav-menu is going to be /components, and we do the same for the home component
>
> **[1:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=94)** by just writing in here, components. Let us scroll down to the declarations array, and remove from here the CounterComponent and the FetchDataComponent. And then, scroll down to the router module. In here we want to modify this module, so it matches with our components. So let us start with the first one. So, I'll just copy this line, and paste it in here. So whenever we have, in the URL, /books, we want to render the books component. So for that, we just write in here, BooksComponent. And we can remove the pathmatch: 'full' from here. Let us do the same for the other URL, so I'll just paste in here. Let's create four more, for updating books, creating books, etc. So the other one is going to be new-book. So whenever we write /new-book, we want to render the NewBookComponent. Whenever we write update-book, and we provide an ID as a parameter, because we want to know which book we want to update, we want to render the UpdateBook Component. The same way, when we want to delete a book, so. When we want to delete a book, and of course we want to provide an ID as a parameter. We want to render the DeleteBookComponent,
>
> **[3:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=192)** and the same way, the last one, when we want to show a single book, in this case we need to provide the ID as well because we want to know the details of which book we want to render. The component that we're going to use is the ShowBookComponent. Let us remove the two path configurations from here. One last thing that we need to change is that we need to go to the nav-menu, and then go inside the nav-menu.component.[[HTML]]. So here we want to have only two options. The first option is going to be when we want to add a new book. So for that, we just write in here the name of the link, is going to be Add, and the route link is going to be new book. So we write in here new-book. Let us remove the other one. The other option is going to be all books, or we can just write in here Books, and the URL for this one is going to be /books. Let us leave the title Summaries by default, and save the changes. Now to round the application out, just first close the app.module.ts, then collapse all the folders, right click in here, go to Open in Terminal, and then write in here dotnet run. Which is going to install all the necessary
>
> **[4:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=287)** Angular packages, and will run the application. So we see that our app was compiled successfully. Let us scroll up in here, and copy this thing, or we can just Control and click, and then open the browser of your choice. Paste the URL in here, and then Enter, Let us just accept this self-signed certificate, and here now we see the app running. We have the Summaries title on the top left, and we have the two buttons on the top right, which are the Books, so when we click we go to the books component, and we have the Add new books, and when we click it we go to the new book components. The same way, we can go to delete book, so we can just write in here delete-book, and just provide in here a dummy ID, press Enter. We see that the delete book component was rendered, etc. Now, since we are in here, let us change the homepage. For that, we need to go to the homepage component, so let's go back to visual code. In here, go inside the ClientApp, go inside the src, inside the app, then components, and home component, then home.component.html. So I'll just close the terminal, and this is going to be a really simple design, so I'll just write in here, Welcome, and then let us just write in here,
>
> **[6:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=381)** Welcome to the book summaries manager, then just write in here, where you can: then column. Let us remove these list items, and add new ones, so here we can add books, in this manager we can update books, we can delete, we can view details, etc. So, let's remove this part as well. Let us save the changes, and go back to our app. We see that we have in here the new welcome design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Fetch]] (3), [[HTML]] (2)
> **UI Navigation:** go to (8), drag and drop (2), scroll down (2), scroll up (1), open the (1)
> **Env Vars:** url (5)
> **File Paths:** app.module.ts (2), nav-menu.component.html (1), home.component.html (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **CLI Commands:** dotnet (1)
> **Prerequisites:** install (1)

#### [Designing the Books page](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=0)** - [Instructor] Now that we have everything set up let us go to Visual Code and design the books page which will be used to render all books from our web API. So in here go inside the ClientApp then source, app, components, and the books components. So let us start with the books.component.ts file. Inside here let us create a public array which is going to be used to hold all the books. So let's write in here public books of type book and this is going to be an array. Let us create a book interface to hold the data for that go inside the app folder and then inside here create a folder named interfaces and inside the interfaces folder we are going to create new file named book.ts. The book.ts is going to be an interface, let's name this interface book and it's going to have the same properties as our book model in our web API project. So let us start with the ID which is of the type number then we have the title which is going to be a string then we have description of type string.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=95)** The author of type string. We have the rate which is optional and is of type number. We have the date start which is optional of type date and we have the date read which is also optional of type date. So let's save the changes in here and go back to the book.component.ts and we see that the error is gone. Now let's go to the books.component.[[HTML]] file and here we start designing the view. First of all we are going to have an h1 header which says book summaries. Then next we are going to have a table which is going to be used to display all the data. The table will have the default bootstrap classes of table and then table dash striped and we want to display this table only if the books array has data. For that we write in here ngif is equal to books. This table is going to have a table head so thead and then we are going to have a tbody so tbody, inside the table head we are going to have all of the table headers. So inside the table row let us create the table headers and we are going to have a couple of them.
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=188)** So I'll just copy paste this table header. The first table header is going to be title. Then we will have author, then we have rate, preface, then we have rate, next we have the date started the date read, the status of the book. So was it read or was it just added and then the last one is going to be the actions. So here we will have some buttons which we are going to use to either delete the book, show the details or update the book, then inside the tbody write a trow
>
> **[3:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=235)** and then we have an ngfor so star ngfor. Let the book of books array and then inside here we are going to have the tds to display the data for all the table headers that we have defined up here. So to display the title we are going to write in here. Book.title and then close the curly brackets. We'll do the same for the other fields like the description, the author, et cetera. So I'll just remove this line and Control + C to copy this line. Control + V to paste it, so I'll just paste it a couple of times. So we display the title now we want to display the description and next we want to display the author. Then the rate, then the date start, the date read,
>
> **[4:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=298)** and the last one is going to be used for the status. So we want to check if the book has a page read it means that this book was read. Otherwise, we want to check if the book has a date start and if a book has a date start. So, if it doesn't have a date read but it has a date start it means that this book is in progress, so just write here in progress. Otherwise this book has not been started yet so just write in here not started, and the last column is going to be the actions. Actions include delete, show details, and update. So I'll just create in here a button so I'll just write in here now type button and in here we are going to have the last column for actions, so I'll just write in here for now td actions and we'll come and implement all the actions one by one. Now one last thing that we need to change in here is the date format. So for that we enter the default date pipe or that we just write in here a pipe and then date, colon inside double quotes we write dd which stands for day then capital MM and which stand for year. Let us copy this pipe and paste it down here. Save the changes and add one more thing in line 19
>
> **[6:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=397)** in the description, so here I'll just write pipe slice colon zero colon 50 which means get the first 50 characters of the description and then I'll just write three dots in here just to signify that this value continues. So let's save the changes and scroll to the top of this page. Just after the h1 let us add a loader. This is going to be just a loading text and it's going to be a simple one so for that we just write in here p ngif we don't have books
>
> **[7:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=443)** then just display here in emphasized text or just a bold text of loading. Let us save the changes, close all the [[Windows]], collapse the folder, right click, go to open in terminal and then type in here dotnet run. So now that the app was compiled successfully let us copy this value in here. Go to the browser of your choice and paste the URL in here. If we go to the books we'll see that we get the book summaries, but then we have the loading in here. Because we don't have any books yet. So that's what we are going to do on the next part.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Windows]] (1)
> **File Paths:** book.ts (2), books.component.ts (1), book.component.ts (1), books.component.html (1)
> **UI Navigation:** go to (5)
> **Env Vars:** api (2), url (1)
> **Definitions:** means that (2), stands for (1)
> **CLI Commands:** dotnet (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### [Reading data from Angular](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=0)** - Now that we have the [[HTML]] file ready, let us modify the DS file to read the data from the web API. For that we are going to first create a method in the [[Angular]] service. Then next we are going to inject this service in our component, then call the method from our component, and at the end, handle the response. Let's go to visual code and see this in action. In here, go to ClientApp, then source, app, and then services. In here open the book.service.ts file. Let us first define the base URL. And the base URL, which is of type string, is going to be api/books. For us to be able to send HTTP requests to our web API, we need to inject the HTTP client. So for that we write in here private http, and then httpClient. Now let us create a method to get all the books. For that, we just write in here getAllBooks, and then inside this method, we are going to return this.http. We want to send a get request, which is going to return an array of books, and then inside here we are going to define the URL where we want to send this get request. So that is going to be this.baseURL,
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=96)** and here /GetBooks. That's all we need to do in the service bar. Now let's go to our component. Save the changes in here and go to the components. For that, go to the components folder, then books, and then books.component.ts. In here, let us inject this service, so we can use the method that we just created. For that we write private service of type BookService.
>
> **[2:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=131)** Then inside the ngOnInit, whenever the books component is initialized, we want to get all the books. For that, in here we write this.service.getAllBooks, and then to this method we want to subscribe, so subscribe. This is going to return some data, which is a list of books, and then just write in here this.books is equal to the data, which is the response of our request. Let us save the changes and collapse all the folders. Right-click. Open in Terminal. Write in here dotnet run. Now that the app is compiled successfully, copy the local host 5001 and go to your browser. Paste the URL in here. So the app is running successfully. Go to the books. In here now we can see that all the books were loaded successfully. And if we check the first book for example, which has the date started value but not a date read, we see that the status is In Progress. And for the second book where we don't have a date started or a date read, we have a status of Not Started. And from the third book, which has a date started and a date read value, we see that the status is Read, so we read this book.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Angular]] (1)
> **Env Vars:** url (4), api (2), http (2), html (1)
> **UI Navigation:** go to (7), open the (1), right-click (1)
> **Code Identifiers:** getallbooks (2), httpclient (1), baseurl (1), ngoninit (1)
> **File Paths:** book.service.ts (1), books.component.ts (1)
> **CLI Commands:** dotnet (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### [Designing the Create page](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=0)** - [Instructor] On this part, we are going to design the Create Page, which we are going to use to add new books to our collection. So, let's go to Visual Code and see this in action. In here, go inside the ClientApp, and then src, app, components, new-book, and the new-book.component.[[HTML]]. In here we want to have a form, and inside here, we are going to have multiple divs. Let's write in here class, form-group, and then inside the form-group, we are going to have a label, for, let's say in this case, for a title, let's name this label, Title, and then we are going to have an input or the value. So, type is going to be text, we are going to add a class of form-control, then let's apply it in here an id of title, and a placeholder of Book title. Let's do the same for the other fields, like description, author, et cetera, so. Let's write in here, Description, copy this value to the id, then change the placeholder to Book description. Let's do the same for the author,
>
> **[1:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=94)** now put the author between the title and description. So I'll just write in here, author, Author, change the id to author, and then, Book author. Now we need three more fields for the rate for the date added and date read, and if you want to have all of 'em in the same row, let us just create a div in here with a class of row, and then inside this div, we want to have three more divs, so for that we just write, div, which has a class of col-nd-4,
>
> **[2:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=145)** col, which stands for column, so on the screen it's extra small, just take four columns, and we do the same for the small dash four. Let's create three of them, and then inside the first one, we are going to have the dateStart, so I'll just copy this form-group from up here, and then, paste it in line 19. We'll change the for description to for dateStart, and then here, Date start, change the placeholder to Date start, and then the type is going to be date, it has the class form-control, let's add the id to be dateStart. Let's do the same for the dateEnd. So in here I'll just copy the line 20 to 24, and paste it in line 28. We'll change this to Date read, and then change the for to dateRead. The type is going to be date, the id is going to be dateRead, and the placeholder, Date read. Now let's do the last one for the rate. So I'll just copy the line 12 to 15.
>
> **[4:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=242)** I'll scroll down in here and paste it in here. The label is going to be rate, the for rate, and the id rate. The type, however, is going to be a number, and we can set in here the min and the maximum values if you want to have, so let's say the minimum value of the rate can be zero, and the maximum value can be five.
>
> **[4:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=272)** Let's change the placeholder as well. So the placeholder is going to be rate, and also before you run the app, make sure that you have the dateRead inside a div of class form-group. So, I'll put the label in here, and then close the div tag in here, so, /div, and it's closed. So let us save the changes and run the app. Let's collapse the folders, right-click, go to Open in Terminal, in here write dotnet run. Let's copy this URL, and go to a browser of your choice, paste the URL in here, and we'll see the result. In here go to Add, and here we can see our form. Now let us change the design a little bit, or let us change the width for this form. Let's go back to the new-book, so, we'll then go to Visual Code, and in your book components, scroll up to the top, remove this p tag from here, I'll create a div, and this div will have a class add-book, or you can name the class anything you want, so add-book, then I'll call the div, and scroll down to the bottom,
>
> **[6:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=365)** we'll paste it in here after the form. Now, let's go to the CSS file for this HTML file, so by, you can just open and close Explorer, and you'll be inside the new-book folder, then go to the new-book.component.css. Here let us define the add-book class, so for that we just write, .add-book, and we want this class to have a padding, and then we want to have in here zero, 20%, zero, and 20%. Let's save the changes, and go back to the browser, so now in here we see that we have a better looking form. Now let us put a star next to the fields that are required from here, like the Title, the Author, and the Description. For that, let's go back to our CSS. In here, I'll just write that, whichever element has a required class, required after that element, add a content of a star, and then change the color of that star to red. Let's put a semi-colon in here, save the changes, and copy the required, go back to the component.html, and put that after each label that you want to have the star, like the title, for example, class required,
>
> **[7:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=459)** let's copy this value, paste it in the author, paste it in the description, and then scroll down to the bottom of this form, 'cause we want to add a few buttons as well. So, after the last div, just before the form, we want to have two buttons. So I'll just write in here button. The first button, is going to be a button, a (mumbles) button, with a class btn-success, which means that this is going to be a green button, and the type is going to be submit. Let's change the text to Add, and let's create another button for the cancel. So I'll just write in here Cancel, the button will have the default class, and whenever a user clicks this button, we are going to redirect the user to all books. So for that, I'll just write in here, routerLink, is equal to, inside square brackets we write, single quotes and /books. Let's save the changes and go back to our web browser. So here we see the stars, we see the Add, and the Cancel button. So let us click the Cancel button. We see that we are redirected to all books.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **UI Navigation:** go to (7), scroll down (3), right-click (1), scroll up (1)
> **Code Identifiers:** datestart (3), dateread (3), dateend (1), routerlink (1)
> **Env Vars:** url (2), css (2), html (1)
> **Cross-References:** go back to (5)
> **File Paths:** new-book.component.html (1), new-book.component.css (1), component.html (1)
> **CLI Commands:** make (1), dotnet (1)
> **Definitions:** stands for (1), means that (1)

#### [Adding new data from Angular](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=0)** - [Narrator] Now that we created a form, it's time to add the create functionality in our [[Angular]] app. For that we are first going to create a method in Angular service then we are going to inject the service in our component. Then we are going to add the form group to the form. Next, we'll send a request from our component and that the end, we are going to handle the response. So let's go to Visual Code and see this in action. In here we'll go inside the client app and the inside source. App, services and the book_service.ts. Here we are going to create a method named addBook which will take, as a parameter, a book of type book and it will simply return this.http.post and then here write this.baseURL plus, inside double quotes, write / AddBook. Then to this post request we are going to parse, as a parameter, the book. Now let us go to our component, so inside the component go to the new-book folder then new-book.compenet.ts. Here we are going to inject our service, so our private service BookService. Before we do anything else let us create a form group in here which we are going to use in our form.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=95)** So for that we write in here addBookForm. This is going to be a type FormGroup. Then inside the ngOnIt we are going to construct this form group. So, this .addBookForm is equal to this. and we are going to use a form builder. So let us inject the form builder in our constructor, for that we write private fb for short which is of type FormBuilder. So here we will write this.fb.group and then inside here we write curly brackets. Here we are going to define all the properties of the form and the form has an ID. The value is going to be just a random number so we'll just write Math.floor, we get a Math.random and the number is going to be between one and 991. So we write Math.random times 1000. Then next we have the title, so I'll just write in here title. It will not have a default value so we can just write in here null or we can just write an empty string. I'll just write null and this field is a required fields so for that we write Validators.required we are going to do the same for the author
>
> **[3:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=189)** and for the description. So I'll just write in here author and description. If you want to have more than one validator, then you can [[Jetpack Compose|compose]] the validators. To do so you can write in here Validators.compose and then inside here I'll just write square brackets and then I'll define the first validator which means that this field is a required field. And also this field should be at least 30 characters long. So Validators.minLength required or minLength, 30. Next we have the rate which we are going to set to null. We have the dateStart and the dateRead. So let us save the changes and go to our [[HTML]] file. Let's copy this value and now let's go to the html file. In the form we are going to define the form group. So for that we write in here formGroup is equal to the addBook form. Then we are going to define this submit event. So for that we just write in here ngSubmit. And once we submit the form we are going to execute the onSubmit method.
>
> **[4:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=286)** Next, for each input we need to define the form control name. So, that's going to be like formControlName is equal to the form control that we have defined in our form group. So, and I'll start with the first one. The first one is going to be the title. I'll just copy this value or we'll have another one for the author. Let's copy this value. Then we'll have another one for the description. The we'll have another one for the dateStart. But this going to be dateStart then another one for the dateRead. And the last one for the rate. I'll just write in here rate. Now let us go back to our component.ts file and create the onSubmit method. So in here just write onSubmit this.service.addBook and the book value in here is going to come from the this.addBookForm.value. To execute this request we need to write in here subscribe so we need to subscribe to it and then we'll have in here data. So once we have submitted this form,
>
> **[6:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=380)** we want to redirect our users to the books list. So for that we just write in here this. We need to inject the router. So for that I'll write in here private router router. Then let us scroll down here. this.router.naviagte and then we want to navigate to the books. So inside double quotes /books. Let us save the changes and run the application to see the result in action. So let us just right-click and go to terminal. Write in here dotnet run. Let us go to the browser and in here we see that we get an error which says that we cannot bind the form group since it's not a known property of form. And that's right because we are using the reactive [[Forms]] module but we have not configured it in our app.module.ts file. So let us go that file and configure the reactive forms module. So in here go the client app. Then inside source. App, and then go to the app.module.ts. Scroll down in here to the imports array and after the forms module write ReactiveFormsModule. Save the changes and go back to the browser.
>
> **[7:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=479)** Now we see that the app ran successfully. Let's go to the add, here let's provide a title so New Title. Author, description, so we see that we don't get a notification that we need to provide a description which is more than 30 characters but we are going to do that on the next part. So, this is just description. Let's add a date start. Let's add a date read. And a rate of 3.9 and click the add button. So we see that we get an error in here but if we expand the http error response, we are going to see that this is not an error because the status is 200. So let us go back to our controller and have a look. So in here find the controller which is inside the controllers folder. Books.Controller.cs. So in here, instead of returning the added string let us remove it completely and save the changes. Let us rerun our application but first let's stop it. So no running here again the dotnet run command and let's go back to the browser. In here press Ctrl + F5 to refresh the browser and let's enter new data. So, New Book, the author is going to be, let's say New Book. New Book,
>
> **[9:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=572)** let's enter a date start. Date read and a rate of 4.3 and click the add button one more time. Now we see that we are redirected to the all books view and our book can be seen down here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3), [[Angular]] (2), [[Jetpack Compose|Compose]] (2), [[HTML]] (2)
> **Code Identifiers:** addbook (3), addbookform (3), datestart (3), onsubmit (3), minlength (2)
> **UI Navigation:** go to (9), scroll down (2), navigate to (1), right-click (1)
> **File Paths:** app.module.ts (2), book_service.ts (1), new-book.compenet.ts (1), component.ts (1)
> **Cross-References:** go back to (4)
> **CLI Commands:** dotnet (2), find (1)
> **Versions:** 3.9 (1), 4.3 (1)
> **Definitions:** is a  (2)

#### [Designing the Book Details page](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=0)** - [Instructor] Now we are going to design the details page. So let's go to our app. In here we have all the books and in the actions column we want to have a button saying show so when we click that button, we'll be redirected to another page where we can see the details of the book. So let us start by changing the design of this page a little bit, like making this table wider. For that let's go to Visual Code. In here go to ClientApp then source, then app and then to the app.component.[[HTML]] from where we render the router outlet, so from where we render the content of each active component. Let us change this default container class to another class, like for example body wrapper. So we have the body wrapper in here and then save the changes here, copy this class, go to the styles.css, paste it in here and then put a dot in front of it so that we know it's a class. And we are going to write in here padding zero so 20 at the left then zero and 20 pixels on the right. Let's go back to our app so now here we have a wider table, now let us go back to the books component and add a show button in here.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=96)** Inside the components we go up to books, and then books.component.html. Let us remove the actions from here and we write button. This is going to be of type button. Let's add a class so class is going to be btn btn dash default and then btn dash small. The text in here is going to be show and let us add an event and let us add the click event in here. So whenever the user clicks this button we want to execute the showBook method which has as a parameter the book.id. Now let us go to the ts file and implement this method. So just after the ngOnInit write showBook, id this is going to be of type number. What we want to do in here is that we just want to redirect the users from this component to the showBook component. So for that we write private, router and then router and here we just write this.router.navigate
>
> **[3:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=184)** to the inside double quotes write show dash book then slash and here we need to append the ID that comes from the view and that's it. Now let's go to the app, so we see that we have the show button here, let us click this button. So we are redirected to the show book and then we said ID of one. Now let us design this page in here. So let's go to the showBook component in here let us define the book that we are going to get from the database. Which is of type book and now let's go to the component.html file. Where we are going to create the card that we are going to use to display the book detail. So let us start by creating a div. We can write in here a class book details. Let us just copy this value and go to the css file. So write in here dot and then show book details we are just going to write in here padding zero, 20%, zero, 20% save the changes and go back to the html file. Now in here we are going to create our card. So let is just write in here div
>
> **[4:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=278)** and this div will have a class of card and we want to display this card only if we have a book. So ngIf a book has values. The card has body, so for that we just write in here div class card dash body then inside the body we want to create an h5 tag which stands for the card title. So just write in here card dash title then here we want to display the book.title and another one for the book.author. Let's just write in front of here by, so it's a book by the author, change the tag to an h6 tag and from card title write in here card subtitle and the dash two and text muted. Then next inside a paragraph let us display the book description, so for that we just write book.description and then at the end let us create two links, one for canceling the action. So we are going to redirect the users to the books page, and another one to redirect the users to the update page. So in case the user wants to update the book. So for that we just brought in here a,
>
> **[6:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=376)** and then we are going to define the router links so for that we just write routerLink. That's equal to inside double quotes write square brackets and then single quotes slash books so this is where we want to redirect the users. Just write in here class, card dash link. We are going to name this one back and let's copy and paste this line we are going to change the URL to update dash book we'll take another parameter in here, the book.id and then we are going to name it update, so let us remove this empty line's end save the changes and let's go to our app. So let's go to the books, let's click the show button and the reason why we don't see anything in here is because we have the condition to not show anything if the book is empty. So the ngIf condition that we have in here. Let us remove this one, let's go back to the, and here now we can see the update and the back button. So if click the back we'll be redirected to the show all books. So let us reword the change and save the changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **UI Navigation:** go to (10)
> **Code Identifiers:** showbook (4), ngif (2), ngoninit (1), routerlink (1)
> **File Paths:** app.component.html (1), styles.css (1), books.component.html (1), component.html (1)
> **Cross-References:** go back to (4)
> **Env Vars:** url (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)

#### [Getting a single book from Angular](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=0)** - [Instructor] Now that we have created the book details view, it's time to get the data from the Web API. For that, we are going to create a method in our service. Then we are going to inject this service in our component. And at the end, we are going to handle result. So, let's see this in action. In here, go to ClientApp, src, app, services, and then book.service.ts file. Here we are going to create a method which takes the parameter of book ID and then returns a book. So let's write in here, "getBookById, id, it's of type number. We are going to return this.http.get which is going to return a Book response, then this._baseURL. And then in here we write inside double quotes, /singleBook, then /, and we append in here the id. Let us save the changes and go to our component. So inside the components folder, go to show-book, then show-book.component.cs. Let us inject in here the service so we can use the method that we just created. So, private service, BookService. And then inside the ngOnInit,
>
> **[1:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=97)** we are going to use that method. For that we write this.service.getBookById. And we are going to get the ID from the URL, so of that we are going to use the activated route. Let us inject it in ouR constructors. So, private route, ActivatedRoute, and theN in here write this.route.snapshot.parameters.id.
>
> **[2:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=132)** Now it's important that the ID that you write in here, needs to be the same like the one that you have defined in your route. So let us go to our app.module.cs file. If you scroll down in here, we have said that when we have the show-book URL, that parameter is going to be id. So the value in here needs to be the same like the value in here. So let's write in here subscribe, and then data. The data is basically going to be the Book, so this.book is equal to the data. Let us save the changes and go to our app. So now in here we can see that we get the book details. If I click the Back button, we are redirected to all books, and let's open another one. When we click the Update button, we are redirected to the update-books. So let us now implement the update-books component.

> [!info]- Semantic Content
>
> **Code Identifiers:** getbookbyid (2), singlebook (1), ngoninit (1), our (1), then (1)
> **UI Navigation:** go to (5), scroll down (1)
> **Env Vars:** url (2), api (1)
> **File Paths:** book.service.ts (1)
> **Speakers:** - [instructor] (1)

#### [Updating existing data from Angular](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=0)** - [Instructor] Now let us see how we can update existing data in [[Angular]]. So in our case we are going to see how we can update an existing book from our collection. We are going to first create a method in our service. Then we are going to create the view. Then we are going to create the FormGroup in our component.ts file. And to use the method from our service we are going to inject the service. Then next, we are going to send a request and handle response. So let's go to visual code and see this in action. Let us first create the service method. So inside source, app, services, book.service.ts. Here we are gong to create a method which we are going to name updateBook which takes as a parameter a book that we are going to return of this.http dot want to send a put request this.baseURL and then we write inside double quotes UpdateBook slash we want to append to this one the book ID. Because we want to paste the book ID as a URL parameter. And in the request body, we want to paste the book. That's it. Now, let us go and create the view. The view in our case is like the new book.component.[[HTML]]. So, I'll just copy this view
>
> **[1:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=97)** and scroll down to the update book. I'll remove the existing code and paste it in here. One thing that we need to change is the AddBookForm to UpdateBookForm and change the class in here from Add Book to Update Book. Let us scroll down to the bottom, change the add in here to update. And then save the changes. Now, let us go to book.component.css file. Copy this code and go to the updatebook.css file and paste it in here. Change the add book to update book. Now let us go to the update-book.component.ts file. So in here, let us inject everything that we need. We are going to start with a service because we need a service to get a single book and then to send a put request. For that we will write service BookService. Then we are going to inject the route, the activated route to get the idea of the book from the URL. So, private route ActivatedRoute, then we need the router to navigate to all books after we have updated the books. So private router, router.
>
> **[3:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=192)** And the last one is going to be the FormBuilder to construct our form group. So, fb FormBuilder. Here, we need to create the FormBuilder that we are going to use. And we have said that we will use the UpdateBookForm. So let's just write in here UpdateBookForm, this is going to be our FormGroup. Then, inside the, and joinin' it, we are going to get the single book and construct our FormGroup. For that, we just write in here this.service.getBookById then we rewrite this.route.snapshot.params which stands for parameters dot id. And in here, we write subscribe and then data that goes to it. Here, we are going to first, get the book data. So, that I'll just write in here this.book is equal to data. And for the book, we are going to create a book variable up here. So a book, that is of that any, or you can write off that book. And now, it's time to create our UpdateBookForm. Now, since the code is nearly the same like the new book, I'll just go and copy these lines from here. Comeback to the update book component,
>
> **[4:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=288)** paste them in here. I'll change the AddBookForm to UpdateBookForm. And then, assign in here the real data. So, the id in this case is going to be data.id, the same way, and we're going to do the same for title, author, description and all the other properties. So, I just change here title, author, description, rate, dateStart and dataRead.
>
> **[5:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=328)** Let us import the validators which is part of the angular [[Forms]] and that's it. Let us now run the app to see the results. So I'll just collapse everything and then just go to terminal and run in here .net run. Let us go to the browser. Go in here to books. Then, show a book. Then, click the update button. So we see that we get all the details for the book, but we don't see the date start even though it has a value. Now, that is just a formatting issue so, let us go visual code and fix this problem. So, and you go to the Update book.component. Let us close the terminal in here and create a method. Just after the ngOnInit. We are going to name this method FormatDate, which takes us a parameter a date, which takes us a parameter a date. So, if it has a value, it will return and your date, so date.toISOString.
>
> **[6:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=405)** I will get the substring zero to 10.
>
> **[6:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=413)** Now, let us use this method for both date start, so this.formatDate for DateStart. And this.formatDate for the dateRead. That I'll save the changes and go back to our app. So now, we can see the date in here. One more thing that's left in here is that we need to implement the update functionality. So, for that, let us go to visual code one more time. In here, we are going to implement the onSubmit method. So, onSubmit here. What this method will do is basically, this.service.updateBook, it takes us a parameter of this.updateBookForm.value. We're going to subscribe, once it's a successful request. Or we'll simply redirect the users to all books, so this.router.navigate to the books URL, so slash books.
>
> **[8:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=492)** That I'll save the changes, but before we test our app, let's go to the HTML file one more time. So in here, go the description and let us change the input in here to be a textarea because we don't want to have an input for the descriptions since the description might be read along. So, textarea in here, let's go to the right. We need to close it. So now, it's closed. Let's save the the changes and go back to our app. So we see it, we have a textarea now in here, let us change the values of title Managing to just Update, we can change the Date start, if we want. And then we can change the Date read. And then click the update button. So we see that we are redirected to the all books view and we can see that the first book here is managing update. We have now a Date Started and a Date Read, that's why the status is changed to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2), [[HTML]] (2), [[Forms]] (1)
> **Code Identifiers:** updatebook (2), formatdate (2), onsubmit (2), baseurl (1), getbookbyid (1)
> **UI Navigation:** go to (10), scroll down (2), navigate to (2)
> **File Paths:** component.ts (1), book.service.ts (1), book.component.html (1), book.component.css (1), updatebook.css (1)
> **Env Vars:** url (3), html (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **Definitions:** stands for (1)

#### [Deleting data from Angular](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=0)** - [Instructor] The only feature left is deleting data. So, removing a book from our collection. And that is what we are going to do now. So, let's go to visual code. In here, we are going to first create a service method. So, let's go to our service file, which is the book.service.ts and at the end, just after the updateBook, we are going to add the deleteBook method. This method is going us take us a parameter, an I'd of type number. And we are going to send the delete request. So that, we write in here return this.http.delete and then inside here, we write this.baseURL. Then inside double quotes, DeleteBook and the plus ID.
>
> **[0:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=59)** Now, let us go to our delete component. And since the delete component is nearly the same like the show book component, we are going to copy the [[HTML]] from here. So let's copy the HTML and then go to the deleteBook. And we are going to paste it in here. Let us leave everything the same in here except the update button, so let us change that to approve. Let us close the terminal, remove the router link. And instead, we are going to add a click event. So, whenever a user clicks this link, we are going to execute the deleteBook method. The deleteBook method has a parameter of ID, so we get that from book.id. And that's it. Let us also change the class from card link to btn-danger.
>
> **[2:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=120)** And let's go now to our deleteBook component to implement the functionality. So for that, go to the deleteBook.component.ts. Inside here, we are going to inject the route, router and service. So, let's write private route, activatedRoute, then private router, router and this service which is the book service. So, private service, bookService. Let's import the router. Which is part of the [[Angular]]/router. Inside the ngOnInit, let us get the detail for the book. So, this.service.getBookById, and then here we write this.route.snapshot.parameteres.id
>
> **[3:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=180)** then .subscribe, and here, we just write, this goes to it. This.book is equal to data. Let's create a book in here. So let's write in here book and we can leave it of type any. Now, let us import the deleteBook method, which takes us a parameter an id of type number. And what this will do is that it will send a delete request by using the deleteBook service method. So, this.service.deleteBook id and then, subscribe.
>
> **[3:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=229)** In here, we are just going to redirect the user to all the books. So this.router.navigate to all the books.
>
> **[4:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=243)** And that's it. We are missing only one little thing in here. It's a button from all books. We need to have a delete button in there. So, let us go to the books. Then books.component.html, scroll down to the bottom. So, in here, let us copy the existing button. So I'll just copy this button. And since we are in here, let us create an update button as well. So, first one is going to be update, we are going to change btn default to btn success. And the method is going to be updateBook. Therefore, delete, we're going to change the btn default to btn danger. The method is going to be deleteBook. And we are going to change the text to delete. Now, let us go to the TS file. Scroll down here to the showBook. I'll just copy this one and paste it two times. One for the update and another one for the delete. So, change in here the showBook to updateBook. And the showBook in here to deleteBook. Let us save the changes and go to our application. So now, here we can see three buttons
>
> **[5:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=336)** if I click the update button. I'll be redirected to the update book component. Let me cancel and go back to all books. Now, if I click the delete button, we will come here to this approval step, because we don't want to just delete books. And we can click the approve button to delete the book and we see that the book is now deleted. One more thing that we can improve in here is the view. So, let us go back to our code. In here, I'll just go to the showBook.css file. Copy these lines and then go to the deleteBook.css file and paste them in here, save the changes and go back to the application. And now, we can see that we have a better look and if we want to improve it even more, we can just go back to the code. In here, let us change this a take to button. Copy it in here. Paste it here, save the changes and go to the app one more time. And now, we can see that the approve text is in white.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Angular]] (1)
> **Code Identifiers:** deletebook (12), showbook (4), updatebook (3), baseurl (1), activatedroute (1)
> **UI Navigation:** go to (11), scroll down (2), navigate to (1)
> **File Paths:** book.service.ts (1), deletebook.component.ts (1), books.component.html (1), showbook.css (1), deletebook.css (1)
> **Cross-References:** go back to (4)
> **Env Vars:** html (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Handling errors in Angular](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=0)** - [Instructor] We have implemented the core features of our app, but so far, we kind of assumed that everything will work as expected, and that is not the case all the time. So, what we need to do is that we need to take care of the errors as well. Like, what happens when something goes wrong, or when the users do not provide the necessary data? Let us go to our app, and see an example. So, let us say we want to add a new book. In here I'll not provide any data, even though it says that the title, author, and description fields are required. If I click Add, the API endpoint is going to return a successful response, so I have added nothing to my collection, which is just wrong. Now, let us close the app, and go and fix this issue in our web API. So, now we go inside the controllers, then BooksController, close the terminal, and scroll down to the AddBook method. Let us put the breaking point. And here we are going to add a try-catch block, which we are going to use to catch an exception, in case anything goes wrong. So, try, and catch, and inside the catch, we are going to write, Exception ex. So, let us press Enter, press Enter here, and then press Enter one more time. In case something goes wrong,
>
> **[1:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=92)** what we want to do is that we want to return a BadRequest. And the message of the BadRequest is going to be ex.Message. Let us import the exception, so, Control + ., using System. Inside the try, the first thing that we need to do, is that we need to check if we have any data for the book. So, if book is different from null, we're going to add the book to our collection. So, let us cut these two lines, and paste them here. So, the book was added. We're going to just return, Ok, book. Otherwise, we're just going to return a BadRequest, which says that the book was not added. Now we are returning either success or failure from our API, but we need to handle this from the [[Angular]] part as well. So, let us go to the ClientApp, source, app, components, and then go to the new-book component, then go inside the TS file. Here, scroll down to the onSubmit method, and in this method, we are going to add the catch. So, in case the request is a success, what we want to do is that we just want to navigate to the books,
>
> **[3:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=184)** but in case it is an error, so we just write in here, error, then we want to display maybe an error message. So, let us go up here and write, showError is of type bool, and the default value is false, because we don't have any errors. Then scroll down to onSubmit. Here we write, this.showError is equal to true. Now, what is the error? Well, we can add an error in our [[HTML]], so let us go to the HTML file. And here, just before the form, we can create a div, so I can just write in here div. We are going to show this div only if we have an error, so only if the showError is true. So, showError. And then, this is going to have class of alert alert-danger, and the role is an alert. We can just write in here, "Book was not added to your library. "Please, try again!" Let us save the changes, and click this icon here on the left to debug the app, and then just click the play button up here to start debugging. So, we see that the app ran successfully.
>
> **[4:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=280)** Let's go to Add. Let's not add any data in here, and just click the Add button. So, in here we see that we have reached the breaking point. Now, let us just continue with F10, or by just clicking the button up here. So, now we have a check, but the check will always have an ID, because we automatically generate that from the typescript. So, instead of checking if the book is null, we can check if the book.Author is different from null, and the book.Title is different from null, and also, the book.Description is different from null. Only then, we can add a book to our collection. Otherwise, we are just going to return a BadRequest, saying that the book was not added. I'll just save the changes, and press F10, or just click the button. For the changes to be applied, we need to restart the app, so I'll just restart the app. Let's close the first tab. So, let's go one more time to Add. Then, let's click the Add button. We have reached the breaking point, so let us just continue pressing the F10. Now we see that we return a BadRequest. Let's go back to the app, and here we can see the error, which says, the book was not added to your library. So, this is how you would handle it from the web API part,
>
> **[6:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=376)** but it would be even better if we can simply prevent the users from sending a BadRequest. So, let us say, in this case, if the user doesn't provide a title, author, or description, he should not even be able to press the Add button. But how can we do that? So, let's go to Visual Code, and start writing some code. In here, let us stop the app, and go to the new-book.component.html, close the terminal, and let's do that for title first. So, I'll just write in here another div. And then, this div is going to show up, so, ngIf, if we addBookForm, so, .controls, if the control title in the addBookForm .isInvalid. But how do we know if it's invalid or not? If we go to the addBookForm in the component.ts file, you see in here that the title is required. So, if we don't have a value, it means that it's invalid, because we had defined in here that this field is a required field, so it must have a value. Let's go back to the HTML. If it's invalid, and, inside parenthesis, I'll just copy this part, then I'll say, .dirty, so if this field has some values, or .touched.
>
> **[7:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=472)** So, in case I have already clicked over this field. In this case, what we want to do, is that we want to display an error inside this div. So, I'll now check for the different kinds of errors, because if we check it from the component, we can have validators like required, or minimum length, et cetera. So, now in here, I'll check for the required validator. For that, I'll just write div, and then I'll write *ngIf, and then I'll just copy, and paste it here, and I'll say, if the errors is related to required, then just display down here, "Book title is required". And then we can just scroll to the bottom in here, to the Add button, and we can add a condition in here to not display this button at all unless all the conditions are met. So, for that we can write in here, in square brackets, disabled, which means disable this button if the addBookForm.pristine or invalid, so, addBookForm.invalid. Let us save the changes, and run the application one more time, just to see what happens.
>
> **[9:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=566)** We can close the first one. Let's go to the Add button. Here we'll see that the Add button is disabled. And if I click over Title, and then I just remove the [[Cursor]], you'll see that the book title is required. Now, let us go back and do the same for the Author and Description. So, I'll just close the debug console, scroll up in here. First of all, let us format the code in here, so by pressing Control + Shift + P, and then choose the Toggle [[Microsoft Word|Word]] Wrap, so we have everything fit in the same screen. And then we are going to just write in here, class, so the error displays in red, alert alert-danger. Let us copy this div, go after the book author, paste it in here, and we can just replace the title with author. So, this one here, this one, this one, this one. Let's write in here, author. Let us copy it one more time, scroll down after the description, and then just replace the author with description, so this one, this one,
>
> **[11:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=661)** and this one, also this one. So, "Book description is required". But for description we have another condition as well. The description needs to be at least 30 characters in length. For that we can add another condition. So, let us go back to the HTML file. I'll just copy this one, and then paste it down here. I'll not check for the error required in here, but for the error minlength, and then I'll just write in here, "Description needs to be at least 30 chars". Let us save the changes, and go back to our app. Let us refresh the browser. So, if I click here, title is required. If I click here, author is required. If I click here, description is required. Let me just enter some values. It says that it needs to be at least 30 chars long, so I'll just enter enough chars. Now I'll just enter an author, I'll enter a title, and now we see that the Add button was enabled, so let us now click the Add button. We see that we reached the breaking point. I'll just press F5. Let's go back to the app, and we see that the book was just added.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Angular]] (1), [[Microsoft Word|Word]] (1)
> **UI Navigation:** go to (9), scroll down (4), navigate to (1), scroll up (1), toggle (1)
> **Code Identifiers:** addbookform (5), showerror (4), onsubmit (2), ngif (2), isinvalid (1)
> **Env Vars:** api (4), html (4), f10 (3)
> **Cross-References:** go back to (5)
> **Definitions:** is a  (2), is an  (2), means that (1)
> **File Paths:** new-book.component.html (1), component.ts (1)
> **Tools:** terminal (2)


### 4. Implementing NgRx to an Existing Angular App

[↑ Back to Table of Contents](#table-of-contents)

#### [Why NgRx?](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=0)** - [Narrator] Before we answer the why, let us answer the what. So, what is NgRx? To understand NgRx, we need to first understand the second part, Rx. Which is where everything starts from. Rx, or RxJS, is a reactive extensions library for [[JavaScript]]. So, RxJS is a library for reactive programming using observables to make it easier to [[Jetpack Compose|compose]] asynchronous or callback-based code. So, NgRx is a Rx powered state management library for [[Angular]] applications. But which are the key NgRx concepts? NgRx has four key concepts, which are store, state, reducer, and actions. To put it simply, store is the database of our application. It stores different states defined in our app. And state is a single immutable data structure. So states are what make up the store. And the NgRx store serves as a client-side single source of truth. If the store is the database of the application, the reducers are the tables. The reducer is a pure function that accepts two parameters. An action, and the previous state with a type and optional data associated with the event.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=95)** So, store keeps the state of the application, and reducers get the state of the store. But how do we update the store when we need to? That is the role of the actions. Actions represent payloads of information that are dispatched to the store from the application and are usually triggered by user interaction. Now, to recap a few points. The store stores the whole state. The reducers return fragments of the state. And actions are pre-defined user-triggered events that define how a state should change. Now let us illustrate this with an example to understand it even better. So let's say we have an app. And we have the view, or the UI. And then here we have a button. Now, from this button we can trigger an event. So, when we click a button we use an action to define how we want the state to change because we said that actions represent payloads of information that are dispatched to the store from the application and are usually triggered by user interaction. So, in this case, we button click. Now we dispatch the action to the store by using the dispatch method. Now, here we have a reducer, which we have said is a pure function that accepts two parameters. An action, and the previous state
>
> **[3:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=189)** with a type and optional data associated with the event. The reducer will take these two parameters and return a new state which then we use to update the UI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Jetpack Compose|Compose]] (1), [[Angular]] (1)
> **Definitions:** is a  (6)
> **CLI Commands:** make (2)
> **Speakers:** - [narrator] (1)

#### [NgRx actions](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=0)** - [Instructor] Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. So, let's go to Visual Code and create our first actions. In here, before we start doing anything, let us install all the necessary packages. So, for that, right-click on ClientApp, and then open in Terminal. Let us clear the terminal in here by pressing cls, which stands for clear, and then type [[npm]] install. We are going to install the NgRx/core, then the NgRx/effects, we need this library for handling the side effects in our apps. Then the NgRx/store, and then, at the end, write --save.
>
> **[1:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=62)** Now, let's go inside our ClientApp folder, then src, then app. Inside here, we are going to create a new folder, which is going to hold all the NgRx-related code. So, let's create a folder and name this folder store. Then, inside here, we are going to create the actions. So, for that, let's just create a new file. We are going to name this file book.actions.ts. Then, let us create another file for holding all the action-related type constants. So, I'll just write action.types.ts. Now, you don't have to create this file, but we are going to create this file because it's easier to maintain the type of related issues. So, for that, we are going to create some constants in here, and then use 'em throughout the application. So, let us start with the first one. For that, we'll just write in here export, const, LOAD_BOOKS because we are going to first implement the load all books feature. So, load all books, and then we can put the same value in here. We also need another constant for when we successfully return all the books. So, for that, export, const, we can just copy this one up here,
>
> **[2:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=155)** and just add, at the end, success. Let's copy this one and paste it in here. Now, let us go to the book.actions.ts file, and the first thing that we are going to do in here is that we are going to import the action, so import the action from the NgRx store, and then, let us import all the types. So, for that, we can just write import all as types from, then ./action.types.
>
> **[3:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=197)** Now it's time to create our first actions, so, I'll just write in here export, class, loadBooksAction.
>
> **[3:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=209)** This will implement the action base class, and it will simply have in here a readonly type of types.LOAD_BOOKS. Now, normally, each action should have a constructor, but in this case, we don't pass any parameters, so we can just leave it empty, or we can create a constructor and pass nothing, just so we know that we need a constructor in here normally. So now, let's create another action in here. For that, I'll just write export, class, loadBooksSuccessAction.
>
> **[4:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=250)** This will implement the action base class, and the readonly type in here is going to be, so readonly type equal to types.LOAD_BOOKS_SUCCESS,
>
> **[4:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=265)** and inside the constructor, in here we are going to pass a payload. The payload is going to be a list, or an array, of books. So, let's write in here constructor, public payload,
>
> **[4:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=283)** and the payload is going to be of type book array, and that's it for this part, let's go now to the next one, and see how we can configure the store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **Prerequisites:** install (3), before we start (1), configure (1)
> **File Paths:** book.actions.ts (2), action.types.ts (1)
> **Env Vars:** load_books (2), load_books_success (1)
> **UI Navigation:** go to (2), right-click (1)
> **Code Identifiers:** loadbooksaction (1), loadbookssuccessaction (1)
> **Tools:** terminal (2)
> **CLI Commands:** npm (1)

#### [NgRx store](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=0)** - To handle the store side effects, we are going to create effect functions. So, let's see this in action. In here, go inside the store folder, which you can find inside src, app, and then store. In here, we are going to create a new file named book.effects.ts, and let's start creating this class. So, we are going to write export, class, BookEffects, and then, inside here, we are going to have a constructor where we are going to inject, first of all, the service, because now we don't want our components to directly interact with the services, we want the effects to do that for us. So here, let us write private, service, BookService, and here, let us also inject the actions. So, for that, we write in here, private, actions. Let's put a dollar sign, so we know that it's something related to observables, and then we write in here, actions. Let's go up here and import the actions, so, import actions from NgRx/effects,
>
> **[1:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=91)** and that's everything we need to inject in here. So now, let us create our first effect. I'll just write in here @effect. This is a method, so, loadBooks, let's put a dollar sign in here, and it will return an observable of action, and where do we get the action for? We get the action from the NgRx store. Just write in here, import action from NgRx, and then store.
>
> **[2:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=126)** So, this is going to be this.actions, that we just injected, .pipe, we are going to use the pipe method, and then, inside here, we are going place some parameters. The first one is going to be the type of the action, so, ofType, let's import all the types. So, for that, we just write import all as types from your ./action.types.
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=163)** Let us also import the book actions because we are going to use 'em as well, so. Import all as bookActions from ./book.actions,
>
> **[2:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=179)** and that's it, so here, the type is going to be bookActions.loadBooksAction, and here's a parameter,
>
> **[3:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=192)** we are going to press types.LOAD_BOOKS. Here now we are go to use the mergeMap method, so mergeMap, and then, inside the mergeMap, we will say that goes to, now it's time to use the service. Let us add the ofType method up to the NgRx effects, and the mergeMap is part of the RxJS operators, so I'll just write in here, import mergeMap from RxJS/operators, that's it.
>
> **[3:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=239)** So here now, in line 17, let's press enter. We are going to write this.service.getAllBooks.pipe,
>
> **[4:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=252)** and then I want to map the result, which is going to be books to a new, access our bookActions, .loadBooksSuccessAction,
>
> **[4:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=270)** and then I want to pass as a parameter the books result. We are missing the map, so, let us just add the map, in here, at line three, and that's it.

> [!info]- Semantic Content
>
> **Code Identifiers:** mergemap (5), bookactions (3), oftype (2), loadbooks (1), loadbooksaction (1)
> **File Paths:** book.effects.ts (1)
> **CLI Commands:** find (1)
> **Env Vars:** load_books (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - to (1)

#### [NgRx reducers](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=0)** - [Instructor] Now we are going to create a reducer to handle our first action. So let us go to Visual Code, then see that in action. So you will go inside the ClientApp, source, then app, store, and here, we are going to create a new file. We are going to name this file book.reducer.ts, and then, we are going to import all the book actions and the action types. So for that, let's write in here import, all as bookActions from, let's just write book.actions, and then import all as types from dot action.types. Now, for us to be able to use the book actions, we need to export them. So, let us go to the book.actions.ts file and, at the bottom, write export type, so we want to export Actions is equal to loadBookAction pipe loadBooksSuccessAction. Let's save the changes and go back to the reducer file. In here, now, we are going to create a function because we know that reducers are pure functions.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=95)** So for that, we are going to write export function BookReducer, and we know that a reducer takes two parameters, the first one is the state, and the second one is the action. So, the action is going to be the bookActions.Action that we just created, but we have not defined the state yet. So, let us define the state. For that, let's create, inside the store folder, a new file, app.state.ts. In the app, it is going to be on export interface AppState, and the field is going to be a readonly, so just write in here readonly books, and then, Book array. Let us save the changes and go back to the reducer. So now, inside this file, let us define the initial state of the state. So for that, let's write in here export const initialState, which is of type AppState, and the value is at books or just an empty array. So let's put an equal sign in here, and now, everything is set up.
>
> **[3:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=190)** So state has the initial value of the initialState. Now let's write curly brackets. Inside, you are going to have a switch because, in here, we need to check for the action type. So the switch is going to be for the action.type, and in here, we need to have a case. So, in case, we have a types.Load_Books_Success. What we want to do is that we just want to return. So return, put three dots in here, state, and then books is going to be the action.payload. Now, where does this payload come from? Let's check for the Load_Books_Success. For that, let's go to the book.effects. So here, we see that the loadBooksSuccessAction and the payload is the books, and we say that the parameter is books. So when we say here, in the reducer, that we want to return the action.payload, we are actually returning the books that we get from that result. Let us also have a default case as well. So for that, we just write default, and then, we just return the state, and that's it.

> [!info]- Semantic Content
>
> **Code Identifiers:** bookactions (2), loadbookssuccessaction (2), initialstate (2), loadbookaction (1)
> **File Paths:** book.reducer.ts (1), book.actions.ts (1), app.state.ts (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Connecting the dots](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=0)** - [Instructor] Now that we have set up the actions, store and reducers, it is time to connect the dots and see it in action. So, let us go to visual code. The first thing that we need to do in here is that we need to configure the store module and the effects module and the app.module.ts file. So, inside source, go inside app, and then, scroll to the app.module.ts. Then, scroll down to the imports, and after the router module, write storeModule.forRoot
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=45)** because this is our root module. And then in here inside curly brackets, define a name for the applications state. So, I'll just name it applicationState and then, bookReducer. So, let us just write in here EffectsModule.forRoot and then inside square brackets, write BookEffects. So we have done the configuration, let us go to our books component and see how we can get the data using the ngrx instead of using the service. So, let's go to components then books and then go inside the books.component.ts file. Here, we are going to create another property. Public books, we are going to put a dollar sign in here so we know it's an observable any. Now, let us remove the service from here. So I'll just remove it. And we are going to inject the store. To inject the store, write private then store, of type store, which takes us a parameter, the AppState.
>
> **[2:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=134)** Now, let us import this store. So the store belongs to the ngrx/store. And then inside here, this.books is equal to this.store.select. We want to get the applicationState. So the name that you provide in here needs to be the same like the name, predefined in here. So applicationState in here needs to be applicationState. So basically, we are reading the applicationState from the ngrx store. Next, let us comment out all the code from the ngOnInit, so, control KC. And then here, let us dispatch an action. So for that, we just write this.store.dispatch.
>
> **[3:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=193)** And the action is going to be a book action so, let us go to the top. And import all of them, so import all as bookActions
>
> **[3:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=206)** from forward slash dot dot slash one more.
>
> **[3:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=215)** Let's go inside the store and slash, book.actions.
>
> **[3:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=224)** Let us scroll down to the ngOnInit. And here now, we are going to write new bookActions.loadBooksAction.
>
> **[3:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=236)** And that's it. So now that we are dispatching an action, let us subscribe to the store so we can catch all the changes. For that, we just write in here this.books.subscribe. And we are going to get the state from here. So state is of type AppState, which is the result. And then we write this.books is equal to state.books. And that's it. Let us save the changes and run the application to see if everything works as expected. So, go to the debug tab in here and then click the play button. So, the app runs successfully, let's go to the books tab. And then here, we see that all books were loaded successfully. But the books now are not being called directly from a service but we are using the ngrx instead.

> [!info]- Semantic Content
>
> **Code Identifiers:** applicationstate (5), forroot (2), ngoninit (2), bookactions (2), storemodule (1)
> **UI Navigation:** go to (6), scroll down (2)
> **File Paths:** app.module.ts (2), books.component.ts (1)
> **Prerequisites:** set up (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Delete a book](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=5)** - [Instructor] Now it's time for a challenge. We learned how to set up the [[Microsoft Azure|Azure]] XStore, how to set up reducers and actions, and we combined those three to show all the books. So now, instead of directly using this service in the books components, we use the NgRx. Now you should use the same process to delete a book. So instead of using the service in the Delete Book component, you should use the NgRx. For that, you need to update the reducer function, update the actions file, and then inject the Store in the Delete Book component. So, give it a try and then be sure to watch the solution video to see how I solve it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Delete a book](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=0)** - [Instructor] So, I asked you to delete a book using the NgRx. Now, let us walk through my solution together. In here, let's go inside the ClientApp, and source, app, and store. Let us start with the actiontypes.ts. And here, we are going to add two more constants. So, let us copy these two lines and paste them down here. We are going to name this one Delete_Book, and the other one Delete_Book_Success. Let us change the string values as well. So Delete_Book, Delete, and Delete, and Delete_Book_Success. Now, let us go to the actions file, and here, add two actions. So, the first action's going to be export class deleteBookAction, which implements the Action base class, and the type is going to be readonly type is equal to types.Delete_Book, and the payload for this constructor is going to be of type number
>
> **[1:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=93)** because we are going to pass the book ID. So, let us just write in here public_payload of type number. Let us create one more action for the Success. So just below here, change the name to deleteBookSuccessAction and then the type to Delete_Book_Success and leave the constructor the same. For us to be able to use these actions, let us add them in the Action section. So you write deleteBookAction, then pipe, deleteBookSuccessAction. Let us save the changes and go to the effect file. If you are going to add another effect, I'll just copy these lines and paste them here. Let us change the name to deleteBook, then go to the other line. Here, instead of using the loadBooks action, we're going to use the deleteBook action. The type is going to be Delete_Book. Then, from this.service, we are going to use the deleteBook method, which takes us as a parameter the book ID. So here in the mergeMap, let's write action, and then, as a parameter,
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=188)** we are going to pass action.payload, and we have defined that the payload for this action is a number.
>
> **[3:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=203)** You have here, define the type number. So next, here in the book actions, instead of loading the loadBooksSuccessAction, we need to change that to deleteBookSuccessAction, and here, from books, just a single book, and here, we are just going to pass the book.id. The type of book is, of course, the book, or you can just write any, it will work in any case. So that's all you need to do in the Effect, Actions, and Types. Now, let us go to the reducer. Here, we are going to add a new case. So, here we write case, the case of types is Delete_Book_Success. Then, we are going to return, so in here, we write return, three dots,state, then the books is going to be all the books from the status, state.books, but we are going to filter the one that we want to delete. So filter, book, that goes to book.id is different from the action.payload, and that's it.
>
> **[4:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=295)** Now, let us go to our component. So we go inside the components, then delete-book, then delete-bookcomponent.ts. In here, scroll down to the deleteBook method. We are going to replace this method, which directly uses this.service with the NgRx. So, I'll just Control + K + C to comment out this line, and before we do anything, let us inject the store in here. So, private store Store, and then, in here, AppState. Let's import the Store from the ngrx/store, and then, scroll down to the book method. So here, we can write this.store.dispatch, and we are going to dispatch new. Let us import the actions up here. So now, I'll just write import all as actions or bookActions from, and then dot, let us go one step back, one more, and then go to store slash book.actions. Let us now scroll down to our method.
>
> **[6:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=390)** So new, bookActions.deleteBookAction, and we are going to pass as a parameter or as a payload the id. So, let us now save the changes and run the application and go to the Debug tab and press the Play button. So the app ran successfully. Let's go to Books, and here, we are going to delete the first books, I'll just click the Delete button, then I'll just click Approve. Now, let us go to All Books, and we see that that book is deleted. Let us delete the last one, let's approve, go back to Books, we see that the book is now removed, and we did that buy using the NgRx instead of using the service directly.

> [!info]- Semantic Content
>
> **Code Identifiers:** deletebook (4), deletebookaction (3), deletebooksuccessaction (3), bookactions (2), public_payload (1)
> **UI Navigation:** go to (8), scroll down (3)
> **File Paths:** actiontypes.ts (1), delete-bookcomponent.ts (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Implementing Authentication in Your Angular App

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up Auth0](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=0)** - Having secure applications is really important. And one of the key features when securing apps is to authenticate users. For authentication, we are going to use the Auth0 library and on this part we are going to learn it how to configure in an [[Angular]] application. So, let's go to [auth0.com](https://auth0.com) to create an account. In here go to sign up, if you don't have an account, and then you can sign up either with your email and a password, or, by using third party apps. So, I'm my case I'll be using [[GitHub]], but you can use [[Google]] or [[Microsoft]], as well. So we need to authorize the Auth0, and our account was created. Once you are in here, click the create application button that shows the application type, in our case our app is a single page application, so I'll just chose second tile Also, don't forget to provide a name, so I'll just name it Angular WebAPI alt and then click the create button. In here scroll down and choose the angular tile. And here you have all the steps that you need to take to configure Auth0 in an Angular application. So, let us start with the first one. Let's scroll down in here and from the application settings we can get the domain and client ID. Let's scroll down to the callback URL. Next we need to configure the callback URL,
>
> **[1:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=94)** so let us just copy this thing from here, then go to the second tab and scroll down to the allowed callback URLs. Paste have to URL in here, change the HTTP to HTTPS, and the port 3000, to our port which is 5001. Now, let us go back to the other tab, and scroll down to the configure logout URL, let us just copy this value, go back to the app details, and scroll down to the allowed logout URLs, and here just paste it, change the HTTP to HTTPS, and then deport to our port, which is 5001. Let's go back one more time, scroll down in here, and that's all we need to set up the application details. Before you move to the next part, make sure that you save all the changes. So, scroll down and then click the save changes button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[GitHub]] (1), [[Google]] (1), [[Microsoft]] (1)
> **UI Navigation:** scroll down (8), go to (3)
> **Env Vars:** url (4), http (2), https (2)
> **Prerequisites:** configure (4), set up (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **URLs:** [auth0.com](https://auth0.com) (1)
> **Ports:** port 3000 (1)

#### [Setting up an authentication service](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=0)** - Now that we've set up the Auth0 account, let us set up the authentication service. But before we do so, let us install the necessary package. So, let's go to Visual Code and see this in action. In here, right click on the ClientApp and then choose the open in Terminal option. To install the package, write [[npm]] install @auth0/auth0-spa-js
>
> **[0:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=37)** and then use the --save flag. So, the package was installed. Now, let us generate the service which we are going to use to authenticate the users. So, inside the ClientApp, go inside the src folder, and then inside the the app folder, then go inside the services folder, right click, and open it in Terminal. To generate the service we are going to use the [[Angular CLI]], so for that write ng, g which stands for generate, then s for service, and the name of the service is going to be auth service, so, you can just name it auth. Press enter and you will see now that inside the services folder, we have the auth.service.ts file which has the injectable decorator. Now, we can create this authentication service from scratch but we are going to use the default code which comes with the Auth0 because it has all the methods that we need. So, let's go back to our profile, and here scroll down to the add an authentication service section and copy all this code. Let's go back to Visual Code, select all the coding here, remove it and paste the new code. Now, in this file we have four methods.
>
> **[2:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=134)** The logout method is used to log out the users, and we would use this method when we want to, for example, redirect the users after they have successfully signed in. Then we have the login method to log in the users. We have the localAuthSetup, which checks the user session. We have the getUser method and this method is used to get the user profile details. So, we created the service, but for us to be able to use this service, we need to configure it in the app.module.ts file which is also known as the configuration file in [[Angular]]. So, let's go to that file, app.module.ts, scroll down in here to the providers section and after the BookService, let us set our new service, which is the AuthService. Let us save the changes, and on the next part we'll learn how to use this service to authenticate the users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[Angular CLI]] (1), [[Angular]] (1)
> **Prerequisites:** install (3), set up (2), configure (1)
> **UI Navigation:** go to (2), scroll down (2), click on (1)
> **File Paths:** app.module.ts (2), auth.service.ts (1)
> **Code Identifiers:** localauthsetup (1), getuser (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **Definitions:** stands for (1), known as (1)

#### [Handling authentication](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=0)** - [Instructor] We created the Auth Zero account and the authentication service. So now, it's time to use the service in our app. Currently in our app, any user can just come here, add a book, update a book, or even see all the books. Now but, we should allow only the authenticated users to interact with our data. So let's go to Visual Code and see this in action. In here we'll go inside the ClientApp, source, app, components, and then nav-menu. Let us first go to the nav-menu.component.ts file and here we need to inject the authentication service. For that we write, constructor, then private. We are going to name this service auth, and then AuthService. Now let us go to our nav-menu.component.[[HTML]] file. We can close the debug window because we don't need that window. And then here, what we want to do is that we want to display only the buttons that the user needs to see. So for example, if the user is not authenticated, here on the nav bar we just want to show a button which says log in. And after the user is logged in then we want to show the Add, Books, and a log out button.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=95)** So let's go to the nav-menu.html file and here, scroll down to the Books list item. Let's copy this list item and paste it down here two times. Now let us update the text of the first one to Log In, and the text of the second one to Log Out. Let us remove the router link from here because we want to have a click event. So whenever the user clicks the log in button, we want to execute the log in method from the authentication service. So, auth.login. Let's do the same for the log out button. So in here we write click, and then auth.logout. So if we go back to our app, we are going to see the log in and the log out buttons. Now if you want to see them based in a condition. So if the user is logged in, then we don't want to see the log in button. And if the user is logged out, we don't want to see the log out button. So let us go back one more time to our html file, and in here write we want to display this list item only if, so ngif, the user is authenticated. So auth.loggedIn. And the same way, we want to display the Books
>
> **[3:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=196)** and the Add buttons. So let us just paste the same code up here and in line 30, where we have the Books List item. But on the other hand, we want to display the log in button when the user is not logged in. So, just write an !, which means that this button will show up if the user is not logged in. Before we test our app we are missing one more piece in the component.ts file. So, let us go in here and implement the OnInit, let's write in here ng OnInit. And in here what we need to do that we need to handle the authentication call back. So for that we just write this.auth.handleAuthCallback.
>
> **[4:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=253)** Let us import the OnInit, which belongs to the [[Angular]]/core. Let us save the code and go back to our app. So now in here we can see only the Log in button because we are not logged in. So let us click this button. We get a pop-up to log in using our credentials, so I'll just log in using the [[Google]] account. Now that we were logged in we can see all the three buttons. We can click the Log out button to log out. And now we just wee the Log in button. But we still have a problem. So for example, if I write here in the URL/books, even though we are not logged in we are going to see all the books. Let's fix that on the next part.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Angular]] (1), [[Google]] (1)
> **UI Navigation:** go to (4), scroll down (1)
> **File Paths:** nav-menu.component.ts (1), nav-menu.component.html (1), nav-menu.html (1), component.ts (1)
> **Code Identifiers:** loggedin (1), handleauthcallback (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [AuthGuard](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=0)** - [Instructor] By implementing an AuthGuard, we can prevent the users that are not authenticated to access our app through a valid URL. So, let's go to visual code and see this in action. In here, right-click on the ClientApp, then Open in Terminal. To generate an AuthGuard we are going to use the [[Angular CLI]]. So for that we just write in here ng generate guard. And we are going to name it auth. From the options that we have, in here we are going to choose by pressing the space bar, the first one, and then press enter. If we go inside the ClientApp folder, then source, app, here we are going to see the authguard.ts file, which currently returns only a true value so let us modify the code in here. Fist of all, press control, shift, P. And then, search for the Toggle [[Microsoft Word|Word]] Wrap. We can close the terminal. Now let us start writing some code. So, let us remove the return true. Next we need to inject the authentication service. To inject the authentication service, we need to create a constructor, so here we write private auth AuthService, and then curly brackets at the end. In line 16, so inside the canActivate method,
>
> **[1:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=93)** write return this.auth service .isAuthenticated.pipe. And inside the pipe method we are going to use the tap method. And then here we write loggedIn, so we check if the user is logged in or not. And then, if the user is not logged in, then what we do in here is that we just write this.auth.login, redirect them to the login page. So in this case will be the login pop up. So state.url. And that's it. Let's import the tap, so that's going to be from the rxjs/operators. Now, let us save the changes, and to use this AuthGuard, we need to go to the app.module.ts file. And then, scroll down to the imports array. Here we have the RouterModule. And just after the component we can write comma, canActivate. Then, inside, square brackets write AuthGuard. Let us import the necessary name space which is the .authguard. And that's it.
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=188)** So, let us do the same for the other paths as well, so we can do that for NewBook. Then for UpdateBook. Or Delete and for ShowBook. Let us save the changes and run our application. So go to the Debug tab, and then press the Start Debugging button. So in here we see that we are not authenticated. Now, let's go to the URL and write in here /books, and because we are not authenticated and we won't access a URL which is being guarded, in this case we should be getting the login pop up. So, let's press enter. So, even though we see that we are not getting the data, we are not getting a pop up menu to log in. Let's go to our AuthGuard and see if we are missing anything. In here, scroll down to the canActivate method. And here we see that we are checking if the user is logged in. Now, let us just write in here, if not loggedIn, then save the changes. So, this means that is the user is not authenticated but he tries to access a URL which is being guarded, then we direct them to the log in page. So let us restart out app. So, we are not authenticated.
>
> **[4:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=281)** Let's write in here books. So now we see that we get the authentication pop up. Let us log in using [[Google]]. So now we are logged in, we can see the books that we wanted to access, and also we can see the log out button in here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular CLI]] (1), [[Microsoft Word|Word]] (1), [[Google]] (1)
> **UI Navigation:** go to (5), scroll down (2), right-click (1), toggle (1)
> **Code Identifiers:** canactivate (3), loggedin (2), isauthenticated (1)
> **Env Vars:** url (4), cli (1)
> **File Paths:** authguard.ts (1), app.module.ts (1)
> **Tools:** terminal (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go next](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=1)** - Thanks for joining me for this course. So far, we have build a functioning app enabler. But, this is far from the end of the journey. There is so much more you can do. So feel free to play around and experiment with the app we developed together. For instance, you could try to implement more features using the NgRx library, like getting a single book or updating a book. The fun in development is trying new things. In the meantime, if you have further questions that were not answered during this course, you can reach out to me on Twitter and [[LinkedIn]]. And if you want to learn more about .NET, feel free to check out my other LinkedIn learning courses, YouTube channel and my blog. Thanks and (speaking foreign language).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2)
> **Env Vars:** net (1)
> **Analogies:** for instance (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Ervis Trupja]]

## Resources

- Exercise files available

## Skills Covered

- ASP.NET Core
- Angular

## Path Context

### In [[Getting Started as an ASP.NET Core Developer]]
← [[ASP.NET Core- Razor Pages]] | **4 of 9** | [[Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security]] →

## Appears In

- [[Getting Started as an ASP.NET Core Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building Angular and Django Apps]] — Angular
- [[Building Web APIs with ASP.NET Core 8]] — ASP.NET Core
- [[ASP.NET Core- Building a GraphQL API]] — ASP.NET Core
- [[ASP.NET Core in .NET 6- Dependency Injection]] — ASP.NET Core
- [[ASP.NET Core- Token-Based Authentication]] — ASP.NET Core

---

[↑ Back to top](#)