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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20Angular%20and%20ASP.NET%20Core%20Applications.md)

![Building Angular and ASP.NET Core Applications](https://media.licdn.com/dms/image/v2/C4E0DAQHLAL3kLeQiyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1574791870697?e=2147483647&amp;v=beta&amp;t=-Gi80_DsezuAgvv88arZ9AWpsvOdzJryFJ_nlG1iVEQ)

# Building Angular and ASP.NET Core Applications

> Want to build your own web application? In this course, Ervis Trupja shows you how, explaining what it takes to create a web app using Angular, the popular JavaScript framework, for the front end and the ASP.NET Web API for the back end. Ervis steps through how to build the service layer with the ASP.NET Web API to expose the required endpoints to create, read, update, and delete entries. He then 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications) | 2h 56m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Setting Up the App Infrastructure]]** (4 videos)
- **[[#2. Setting Up Web API]]** (7 videos)
- **[[#3. Getting Started with Angular]]** (12 videos)
- **[[#4. Implementing NgRx to an Existing Angular App]]** (7 videos)
- **[[#5. Implementing Authentication in Your Angular App]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting started with Angular
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=1)** - Have you ever wanted to build a web application?
>
> **[0:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=4)** Emerging technologies like [ASP.NET](https://ASP.NET) Web API and JavaScript frameworks like Angular make it easy to design and build single-page applications.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=14)** A web API is a great framework for exposing your data and services and Angular is a great JavaScript framework for building highly interactive web applications.
>
> **[0:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=27)** During this course, we'll build this service layer with the [ASP.NET](https://ASP.NET) Web API to expose the required endpoints to create, read, update, and delete entries.
>
> **[0:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=39)** Then, we'll build a rich UI using Angular with Bootstrap.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=45)** As we dive into Angular components and services, I'll teach you how to send the request to a web API application, and most importantly, how to receive a response and even how to handle errors.
>
> **[0:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=58)** We will also take advantage of the ngrx/store library to implement Redux better in our Angular app.
>
> **[1:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=65)** By the end of this course, we'll learn about authenticating users using Auth0.
>
> **[1:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=71)** Hi, I am Ervis Trupja and I specialize in building enterprise level web apps.
>
> **[1:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-started-with-angular?u=76281980&t=77)** Join me in my LinkedIn Learning course as we explore building web apps using Angular and .NET Core Web API.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), net (3), asp (2)
> **URLs:** [asp.net](https://asp.net) (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Keywords:** delete (1)
> **Speakers:** - have (1)

#### What you should know already
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/what-you-should-know-already?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/what-you-should-know-already?u=76281980&t=0)** - [Narrator] Before we start this course, let us talk about what you should know.
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/what-you-should-know-already?u=76281980&t=5)** To build our apps, I'm going to use Visual Code and .NET Core 3.0, or any version of .NET Core greater than 2.0 should work just fine.
>
> **[0:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/what-you-should-know-already?u=76281980&t=15)** To generate our services and components, I'll be using Angular CLI.
>
> **[0:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/what-you-should-know-already?u=76281980&t=20)** To test our API endpoints, I'll be using Postman, and Bootstrap for designing pages, so having a basic understanding of Bootstrap is recommended but not required.
>
> **[0:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/what-you-should-know-already?u=76281980&t=32)** This is not an introduction course, so I assume that you are already familiar with Angular concepts like components, services, injection, et cetera, and also with API concepts like controller, API endpoint, et cetera.
>
> **[0:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/what-you-should-know-already?u=76281980&t=47)** Throughout this course, if you would like to follow along while I'm coding, you can download the exercise files from the course page.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), net (2), cli (1)
> **Versions:** 3.0 (1), 2.0 (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Code Keywords:** let (1)
> **Tools:** postman (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)


### 1. Setting Up the App Infrastructure

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Demo application overview
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=1)** - [Instructor] Throughout this course, we'll build an app from ground up.
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=5)** We'll start with nothing but just visual code and build a complete functional app.
>
> **[0:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=11)** Our app is named summaries, and it's just to add books, update books, delete books or view book details.
>
> **[0:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=19)** So as a user, we use this app to keep track of all the books that we want to read, we have read or we are currently reading.
>
> **[0:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=28)** In the main page you will see only one button which is the login button, let us click this button to log into our app.
>
> **[0:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=38)** And in here, choose any of the providers to log in to the account.
>
> **[0:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=42)** So I'll choose Google in my case.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=45)** Once you are logged in to the account, you'll see two additional buttons at the top right.
>
> **[0:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=50)** The add, which is the section where you can add a book to the collection, and books where you can see all the books.
>
> **[0:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=58)** In here you can see data like title, which is title of the book, description, author, rate, date started, and date read.
>
> **[1:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=70)** Based on these two columns, we have the status column.
>
> **[1:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=74)** So for example if you have started to read a book but you have not read it yet, the status is going to be in progress.
>
> **[1:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=82)** If you have not started the book, then the status is going to be not started, and if you have started the book and you have read it, then the status is going be read.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=96)** Here on the actions column, you have three options.
>
> **[1:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=100)** You have the show, which will display the details of the book like the full description because in the first page, we can only see a portion of it.
>
> **[1:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=111)** Then you have the update button to update a book, and the delete button to delete a book.
>
> **[2:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=120)** Let's go back to all the books and delete our first book.
>
> **[2:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=124)** So once you click the delete button, you'll be redirected to this confirmation page, where you can either configure the action or just cancel it by going back.
>
> **[2:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=135)** Let us configure it, if we go back to the books, you'll see that that book does not exist anymore.
>
> **[2:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=143)** Now let us update this book.
>
> **[2:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=146)** So, go to update, let us provide a date start, a date read, and a rate of let's say, 4.5, and then click the update button.
>
> **[2:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=162)** So here now we see that this book has a date start, it has a date read, and the status is changed to read, and whenever you want to log out from the app, you can just click the log out button at the top right corner.
>
> **[2:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/demo-application-overview?u=76281980&t=179)** So we were successful, we logged out, and now in here we can see only the login button.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), delete (5), case. (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** configure (2)
> **Versions:** 4.5 (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### .NET Core templates
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=0)** - [Instructor] To create our app we are going to use the default templates that come with .NET Core and to do so, we are going to use the .NET Core CLI, or the command line interface.
>
> **[0:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=13)** The .NET Core CLI is a new cross platform tool chain for developing .NET Core apps.
>
> **[0:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=20)** By using the .NET Core CLI, you can build apps on top of programming languages like C#, Visual Basic, and F#.
>
> **[0:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=29)** You can also add or modify config files, like gitignore, globaljson, webconfig, or even create solution files.
>
> **[0:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=40)** But, what is important in our case is the templates that we can use to build applications.
>
> **[0:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=46)** Some of them are the mvc to create [ASP.NET](https://ASP.NET) Core MVC applications, the angular to create [ASP.NET](https://ASP.NET) Core Angular apps, or if you want to create React.js apps, in this case you can use the react keyword.
>
> **[1:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=64)** You can also use the webapi keywork to create [ASP.NET](https://ASP.NET) Core Web API projects.
>
> **[1:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=72)** So, let us go to Visual Code and see this in action.
>
> **[1:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=77)** In here go to File and then Open Folder.
>
> **[1:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=83)** You can choose any folder of your choice, but in my case I'll just go to Desktop and create a new folder in here named Summaries.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=95)** Then I'll press Enter and Select Folder.
>
> **[1:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=100)** Let us close the Welcome tab in here, right click inside the Summaries folder, and choose the Open Internal.
>
> **[1:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=110)** Before you do anything, make sure that you have installed already the latest .NET Core version.
>
> **[1:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=116)** For that write in here dotnet -v, scroll up in here, and you'll see that we have already installed the .NET Core SDK 3.0.
>
> **[2:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=131)** Let us close the tab on the left and now let us create our first project.
>
> **[2:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=139)** If you want to see all the available templates, you can write in here dotnet and then new.
>
> **[2:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=146)** So here we can see that if you want to create, for example, a solution file, you can just write dotnet new and then sln.
>
> **[2:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=156)** Or if you want to create an Angular app, you can write dotnet new angular.
>
> **[2:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=162)** Or if you want to create a console app, you can just write console instead.
>
> **[2:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=169)** In our case, we want to create an Angular app.
>
> **[2:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=173)** So for that let us scroll down and in here write dotnet new angular and then press Enter.
>
> **[3:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=183)** We see that our project was created successfully.
>
> **[3:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=186)** If you want to see all the files, you can just expand the Explorer and here you will see all the files.
>
> **[3:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=194)** Now, before we go to the next part, let us run this project by writing in here dotnet run.
>
> **[3:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=203)** So we that our app was compiled and ran successfully.
>
> **[3:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=207)** If you want to see the result, simply hold the Control key and then click on any of these links.
>
> **[3:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=215)** And here we have the result.
>
> **[3:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/dot-net-core-templates?u=76281980&t=216)** So this is the app that comes by default with the .NET Core template, but we are going to modify this app throughout this course.

> [!info]- Semantic Content
>
> **Env Vars:** net (11), cli (3), asp (3), mvc (1), api (1)
> **Code Keywords:** let (6), interface (1), new. (1), case, (1)
> **CLI Commands:** dotnet (6), make (1)
> **UI Navigation:** go to (4), scroll up (1), scroll down (1), click on (1)
> **URLs:** [asp.net](https://asp.net) (3)
> **File Paths:** react.js (1)
> **Versions:** 3.0 (1)
> **Tools:** command line (1)

#### Web API architectural overview
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=0)** - [Instructor] The .NET new Angular command created some default files within the solution.
>
> **[0:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=6)** Now this solution has both the Web API and Angular project-related files.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=14)** On this part we'll have a look at the Web API project.
>
> **[0:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=18)** And on the next one, on the Angular project.
>
> **[0:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=21)** So for that let's go to Visual Code.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=25)** In Visual Code, in Explorer we are going to see the ClientApp folder.
>
> **[0:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=31)** Now this folder has the Angular-related files, so we're not going to discuss about that now.
>
> **[0:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=38)** The next folder is the Controllers folder.
>
> **[0:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=42)** Inside this folder we can find all the Web API controllers.
>
> **[0:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=46)** So for example we have the WeatherForecastCotroller, and this controller has a single API endpoint, the Get endpoint.
>
> **[0:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=57)** The next, we have the Pages folder.
>
> **[1:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=61)** Inside this folder we have three files, and the most important one is the ViewImports.cshtml, which is used to import all the necessary libraries that we can use throughout the views.
>
> **[1:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=76)** For example, the TagHelpers.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=80)** Another important folder is the wwwroot folder, and this folder is known as the root folder for the .NET Core apps.
>
> **[1:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=90)** And this folder is mainly used to store static files like images, documents, et cetera, because by keeping the static documents in here we can easily access them.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=105)** Another important file is the Program.cs file.
>
> **[1:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=109)** And this file is also known as the entry file for the .NET apps.
>
> **[1:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=115)** In here we can see the Main method, and inside the Main method we have the CreateWebHostBuilder method.
>
> **[2:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=125)** And inside this method we can see that we have configured as our startup file, the Startup.cs file.
>
> **[2:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=133)** So next we have the Startup.cs file which is also known as the configuration file because basically we can do in here all the configurations like the database connection strings, the services that we want to use, et cetera.
>
> **[2:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=150)** Inside the Startup.cs we have two methods, the ConfigureServices and the Configure methods.
>
> **[2:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=158)** The ConfigureSevices method is used to configure dependency interaction.
>
> **[2:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=162)** And on the other hand we have the Configure method which is used to setup middle wares, routing rules, et cetera.
>
> **[2:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/web-api-architectural-overview?u=76281980&t=171)** So for example if we want to use a service in the future, we can configure it inside the ConfigureServices method.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), net (3)
> **Prerequisites:** configure (4), setup (1)
> **Code Keywords:** static (2), let (1)
> **Definitions:** known as (3)
> **Analogies:** for example (3)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Angular architectural overview
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=0)** - [Narrator] We have already mentioned that the .NET new Angular command created both a web API and an Angular project.
>
> **[0:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=9)** So let's go to visual code and see which are the default Angular files that were created.
>
> **[0:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=17)** In our solution you can see the client app folder and the all the Angular related code goes in here.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=25)** Here we have three main folders.
>
> **[0:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=28)** The e2e which is used for unit testing related code.
>
> **[0:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=34)** We have the node modules where we have all the libraries that we need to use to run our Angular app.
>
> **[0:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=43)** And the most important folder in here is the source folder where all the code goes in.
>
> **[0:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=50)** Inside the source folder we have the app folder, the assets and the environments.
>
> **[0:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=58)** Inside the app we define the modules.
>
> **[1:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=62)** Inside the app we have all components like counter, fetch data et cetera.
>
> **[1:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=71)** Other than that we have the app.component.html which is know as the entry component file in Angular applications.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=80)** If we open this file we're going to see in here that we have defined the menu and the body of our application.
>
> **[1:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=89)** Then next we have the app.module.ts file and this is know as the configuration file in Angular projects.
>
> **[1:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=98)** Because inside here we define all the components that we want to use, we define all the modules that we want to use and also the router for our Angular app.
>
> **[1:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=109)** Then next we have the asset folder.
>
> **[1:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=112)** This folder is used to generally keep the static files like for example the icon, images, documents et cetera.
>
> **[2:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=123)** And inside the environments we have the two environment files like the production environment and the development environment where we define all the specific information that we want to use for each environments.
>
> **[2:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=139)** Next we have the index.html which is the file where we define the route component where in this case we have defined the app-route.
>
> **[2:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=150)** And then if you scroll down you will see the angular.json file where we define the Angular related configurations like for example where do we get the styles from?
>
> **[2:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=161)** Which is the assets folder?
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=163)** Et cetera.
>
> **[2:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-architectural-overview?u=76281980&t=165)** Then next we have the package.json file where we define scripts like for example the script to build the Angular app which is the ng build, the script to run the test and even the dependencies like Angular animations, common, compiler et cetera.

> [!info]- Semantic Content
>
> **File Paths:** app.component.html (1), app.module.ts (1), index.html (1), angular.json (1), package.json (1)
> **Code Keywords:** let (1), module (1), static (1)
> **Analogies:** for example (3)
> **Env Vars:** net (1), api (1)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** node (1)
> **Speakers:** - [narrator] (1)


### 2. Setting Up Web API

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating data models
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=0)** - [Narrator] In this part, we are going to create our Data Model.
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=5)** And, Data Models are used as signature for the way we want the database tables to look.
>
> **[0:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=11)** So, its model field will be translated into a database table field.
>
> **[0:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=19)** So, let's go to a Visual Code to see this in action.
>
> **[0:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=23)** In here we are going to create a new folder and are going to name this folder: Data.
>
> **[0:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=30)** Because we are going to put inside here all the data related files like models, services, et cetera.
>
> **[0:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=36)** models, services, et cetera.
>
> **[0:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=40)** Now, inside the Data folder, let us create another folder.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=45)** We are going to name this folder: Models.
>
> **[0:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=50)** And inside the Models folder, we are going to create our C Sharp file which is going to represent our books model.
>
> **[0:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=59)** For that we click on the New file button, and then we write in here Book.cs.
>
> **[1:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=63)** and then we write in here Book.cs.
>
> **[1:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=67)** So let us first, define in here the namespace, for that we can just go to Controllers, and then just copy the namespace in line 8 Controllers, and then just copy the namespace in line 8 go back to Book.cs, and paste it here.
>
> **[1:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=79)** go back to Book.cs, and paste it here.
>
> **[1:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=83)** Now that we have the namespace, we can create our class.
>
> **[1:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=90)** For that we write in your public class, the name is Book and then inside here we can define all the properties.
>
> **[1:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=101)** The first property, is going to be the identifier.
>
> **[1:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=106)** For that we write in here, prop, and then click the double tab button to create the property.
>
> **[1:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=114)** This property is going to be of type integer and we're going to name it: Id.
>
> **[2:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=122)** Let us create another line for the adult, which is going to be of type: string.
>
> **[2:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=129)** We name it: Title and let us create another one of type, string, for the Author, and another one for the Description of type, string.
>
> **[2:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=144)** Now, let's create one more for Now, let's create one more for the rate we want to give to the book for that we write in here, prop.
>
> **[2:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=153)** This is going to of type double, and, we name it: Rate, and let's create two more for the DateStart and DateEnd.
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=163)** For that we write in here, prop, of type: DateTime, of type: DateTime, and then we name it: DateStart.
>
> **[2:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=174)** And of course we need to import the necessary namespace by pressing in here, Control Dat, and then we import the, using System.
>
> **[3:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=183)** and then we import the, using System.
>
> **[3:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=186)** And last, let's do the same for the DateEnd.
>
> **[3:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=190)** So, type is going to be: DateTime, the name is going to be: DateEnd.
>
> **[3:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=197)** Now, we have seen from the demo that users don't have to always provide a Rate, a DateStart, or a DateEnd.
>
> **[3:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=207)** This means that these fields are optional fields because we don't always require the user to provide the value.
>
> **[3:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=216)** To make this feels nullable, we just write the question mark after the datatype, so.
>
> **[3:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=222)** DateTime question mark, means that the DateStart is now nullable.
>
> **[3:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/creating-data-models?u=76281980&t=227)** And this is how our book model looks like.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), type: (3), type, (2), class. (1), public (1)
> **UI Navigation:** go to (2), click on (1)
> **Cross-References:** go back to (2)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Adding a service and data
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=0)** - [Instructor] Now that we have created our model, it is time to work with data using that model, as our data signature.
>
> **[0:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=8)** Now, we're not going to use a real database, since that is not the focus of this course.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=14)** But we are going to use a static file from which we will get the data to work with.
>
> **[0:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=19)** So, let us start by creating our service, and configuring it.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=25)** Inside the data folder, we are going to create a new folder named Services.
>
> **[0:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=32)** And inside here, we are going to create our interface.
>
> **[0:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=37)** For that we write iBookService.cs.
>
> **[0:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=44)** Let us create a namespace, so for that we write in here namespacesummaries.data.
>
> **[0:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=55)** And inside here, let's create our interface.
>
> **[0:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=59)** For that we write public interface iBookService.
>
> **[1:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=67)** Then, inside here, we are going to create all the method signatures.
>
> **[1:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=72)** So we want to have a method which is going to return all the books.
>
> **[1:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=77)** For that, we write in here listBook and rename this method GetAllBooks.
>
> **[1:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=85)** Let us import the necessary namespace in here by pressing control dot and then choose the usingSystem.Collections.Generic namespace.
>
> **[1:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=98)** Let us also import the book class by importing the usingSummaries.controllers.
>
> **[1:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=106)** Or we can just go to the book.cs file, in here, change the summaries.controllers namespace to summaries.data, go back to iBookService and change the controllers to data.
>
> **[2:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=125)** Next, we are going to create a method which is used to return a single book.
>
> **[2:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=130)** For that, we write in here GetBookById.
>
> **[2:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=136)** And it takes the parameter a book id.
>
> **[2:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=141)** And next, we need a method of type void, because we don't want to return anything for updating books.
>
> **[2:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=148)** For that we write void updateBook.
>
> **[2:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=154)** This method takes two parameters.
>
> **[2:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=157)** The first parameter is going to be the ID of the book that we want to update and the second parameter is going to be the new values of the book.
>
> **[2:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=169)** Next, we have a method to delete the books.
>
> **[2:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=172)** So for that, we write void DeleteBook.
>
> **[2:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=178)** We're going to pass as a parameter, a book ID.
>
> **[3:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=182)** And the last one is going to be a method to add a new book to our collection.
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=188)** For that, we write AddBook and we pass as a parameter book newBook.
>
> **[3:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=198)** Let us save the changes and go to the services folder and add our service.
>
> **[3:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=206)** So for that, we write in here bookService.cs.
>
> **[3:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=211)** Let us defined the namespace to be summaries.Data.
>
> **[3:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=220)** And then inside here, we write public class BookService.
>
> **[3:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=227)** Which inherits from the IBookService.
>
> **[3:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=232)** Now, to be able to use this service, we need to implement all the IBookService interface members, so, control.implementInterface.
>
> **[4:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=245)** And we are going to implement a logic in the upcoming part.
>
> **[4:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=248)** So, for now, let us go to the startup.cs file and configure this service.
>
> **[4:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=254)** So, go to startup.cs and then inside the configure services, just alter the AddSpaSaticFiles, write services.AddTransient, which means that we are going to create a new reference to our service each time we use it in a different controller.
>
> **[4:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=279)** So, which is the file that we want to inject in our controllers, that is going to be the IBookService and which is the implementation of this file, the implementation is the bookService.
>
> **[4:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=297)** And parenthesis at the end.
>
> **[5:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=300)** Let import this namespace, control dot and then using summaries.data.
>
> **[5:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=307)** And that's it.
>
> **[5:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=308)** But before we go to the next part, let us create a static file which is going to return a list of books.
>
> **[5:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=315)** So for that, let's go to the data folder.
>
> **[5:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=318)** Inside here, create a file, name it data.cs.
>
> **[5:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=324)** Now, in here, let us write the namespace.
>
> **[5:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=326)** So for that, we write in here namespace summaries.data.
>
> **[5:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=336)** Inside here, we are going to have static class which is used to return data to our users.
>
> **[5:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=343)** In here, I'll not write all the codes since we are just returning a list of books, but I'll get the code from the data.txt file which you can find in your exercise files.
>
> **[5:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=354)** So I'll just paste the code in here and fix the errors.
>
> **[5:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=359)** The first problem that we have is that we need to import a list, so control dot.
>
> **[6:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=364)** We import the collections.generic.
>
> **[6:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=367)** Then next, we import the date time, which is part of the system namespace.
>
> **[6:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=373)** And we see that we get the DateRead issue.
>
> **[6:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=376)** Which says that book does not contain a definition for DateRead.
>
> **[6:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=381)** Let us go to our book.cs file.
>
> **[6:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=385)** And inside here, we see that instead of writing DateRead, we have written DateEnd.
>
> **[6:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-a-service-and-data?u=76281980&t=390)** So, let us change that to DateRead, save the changes and go back to the data.cs file and we see that the error is gone.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), interface (4), static (3), public (2), pass (2)
> **Code Identifiers:** ibookservice (3), bookservice (2), listbook (1), usingsystem (1), usingsummaries (1)
> **UI Navigation:** go to (7)
> **Cross-References:** go back to (2)
> **Prerequisites:** configure (2)
> **File Paths:** data.txt (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)

#### Create API endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=0)** - [Narrator] Now that we set up this service, and we created the data file, which has the data that we will work with, it is time to create a controller which will have the API Endpoints that we are going to need.
>
> **[0:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=13)** So, let's see this in action.
>
> **[0:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=16)** In our solution, let's go to the Controllers folder and create a new controller.
>
> **[0:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=22)** We are going to name this controller BooksController.cs.
>
> **[0:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=29)** Inside here, let us define the namespace to be Summaries.Controllers and then inside here we are going to create our first controller.
>
> **[0:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=42)** And the controller is just a class, so for that, we write in here public class BooksController.
>
> **[0:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=50)** But for a class to be a controller, we need to inherit in this case from the controller base class.
>
> **[0:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=57)** So for that we write in here colon and then Controller.
>
> **[1:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=63)** Let us import the necessary name space for controller, which is the AspNetCore.mvc.
>
> **[1:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=71)** Now, inside here, we are going to write all the code.
>
> **[1:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=75)** First of all, let us define the route for this controller.
>
> **[1:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=78)** So we are just going to write in here, Route and then, inside double quotes, api, slash, inside square brackets, write Controller.
>
> **[1:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=91)** Inside this controller, we want to use the books service.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=96)** So, to use the service, we need to inject it in our constructor.
>
> **[1:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=100)** For that, we write in here private IBookService.
>
> **[1:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=107)** We are going to name it underscore service.
>
> **[1:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=112)** And then we write in here, ctor.
>
> **[1:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=115)** Double tap to create the constructor.
>
> **[1:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=118)** Let us import the names space for the IBookService.
>
> **[2:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=121)** Change the ClassName to the controller name, which is BooksController.
>
> **[2:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=126)** And then write inside here as a parameter, IBookService.
>
> **[2:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=131)** Now, inside the constructor write Service is equal to service.
>
> **[2:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=137)** So we have everything set up.
>
> **[2:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=138)** Now it's time to create our first API Endpoint, for creating or adding a new book.
>
> **[2:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=148)** To add a new book, we are going to send an HTTP post request.
>
> **[2:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=154)** So, for that we write in here http Post.
>
> **[2:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=159)** And then we name this HttpPost.
>
> **[2:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=161)** Or the URL for this request to be AddBook.
>
> **[2:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=166)** Then here we write public IActionResult Add Book.
>
> **[2:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=174)** We want to pass as a body request.
>
> **[2:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=177)** So FromBody, the book that we want to add, and that's it.
>
> **[3:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=183)** And then, inside here we are going to use this service that we just injected, to add our book to our collection.
>
> **[3:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=191)** So for that, we just write in here service.AddBook, and then, Book.
>
> **[3:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=197)** And now let us return a success response by writing in here return.
>
> **[3:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=201)** Okay.
>
> **[3:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=202)** Then double quotes, Added.
>
> **[3:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=207)** So we are using the add method, but the add method is not implemented yet.
>
> **[3:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=214)** For that, let us copy this value, go to our Data folder, and inside services, go to BookService, and here we have the add book method.
>
> **[3:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=227)** So, what this method should do, is basically get the data.
>
> **[3:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=231)** From the data, get the books, and to the books, we should add the new book.
>
> **[4:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=240)** And that's it.
>
> **[4:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=240)** Let us remove the line ten, because we don't need it.
>
> **[4:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/create-api-endpoint?u=76281980&t=245)** Let's save the changes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), public (2), class, (1), class. (1), private (1)
> **Env Vars:** api (2), http (1), url (1)
> **UI Navigation:** go to (3)
> **Prerequisites:** set up (2)
> **Speakers:** - [narrator] (1)

#### Read API endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=0)** - [Instructor] The users want to be able to see what they have in their collection and so we need to implement a feature that will return all their books.
>
> **[0:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=10)** For that, we'll create a read API endpoint.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=14)** So, let's go to Visual Code and see this in action.
>
> **[0:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=18)** And here go inside the Controllers, then BooksController.cs.
>
> **[0:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=24)** After the AddBook we are going to add a new API endpoint.
>
> **[0:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=30)** So, read all books.
>
> **[0:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=34)** This is going to be an HTTP get request and the name of the URL is going to be the same as the action name, so for that we just write inside double quotes, square brackets, and then action.
>
> **[0:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=51)** Next, we define the implementation.
>
> **[0:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=54)** So for that we write public IActionResult, then GetBooks, then inside here we write var allBooks.
>
> **[1:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=69)** We are going to use the service, so service.GetAllBooks.
>
> **[1:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=76)** And once we have the books, we want to return them to the users by writing return Ok and then inside here allBooks.
>
> **[1:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=87)** Let us press Enter and save the changes.
>
> **[1:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=91)** Now, let's go to the GetAllBooks method and write the implementation.
>
> **[1:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=97)** So, inside Data, then go to Services, BookService.
>
> **[1:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=103)** In line 17, we have the GetAllBooks method and what this method does is that it gets all the books from the data and just returns them.
>
> **[1:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=117)** So return Data.Books.ToList.
>
> **[2:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/read-api-endpoint?u=76281980&t=122)** Let us import the necessary namespace, which is the System.Link, and save the changes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (1), var (1)
> **Env Vars:** api (2), http (1), url (1)
> **UI Navigation:** go to (3)
> **Code Identifiers:** allbooks (2)
> **Speakers:** - [instructor] (1)

#### Update API endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=0)** - [Instructor] So far we know how to add new data and how to read them, but sometimes users might enter bad data.
>
> **[0:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=8)** So, we should give them the ability to update their existing data.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=14)** For that we are going to create an update API endpoint.
>
> **[0:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=18)** In here we need to go inside the Controllers folder and then BooksController.cs file.
>
> **[0:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=26)** Just after the ReadAllBooks, we are going to add a new endpoint for updating an existing book.
>
> **[0:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=38)** This is going to be an HTTP put request, so for that we write in here http put and then we write public IActionResult, UpdateBook.
>
> **[0:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=56)** Of course in the HTTP put, we can define the URL.
>
> **[1:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=60)** So for that we write, inside double quotes UpdateBook and we are going to pass as the URL parameter, the book ID.
>
> **[1:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=71)** So just write ID in there and the UpdateBook method is going to take two parameters.
>
> **[1:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=78)** The first parameter is going to be the ID of the book we want to update and the second parameter, which we are going to pass as a body request, is going to be the book with a new values.
>
> **[1:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=94)** In here by using this service, we write UpdateBook and pass the ID and the book parameters.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=105)** Next, we just return the Okay book.
>
> **[1:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=110)** Now let us go to our service and implement the UpdateBook method.
>
> **[1:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=115)** For that we go inside the Data folder, then Services, and then BookService.cs.
>
> **[2:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=123)** Scroll down to the UpdateBook method and in here we are going to write our code.
>
> **[2:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=130)** So before we update a book, we need to first get the old data.
>
> **[2:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=135)** For that we just write in here var OldBook is equal to Data.Books.Firstordefault
>
> **[2:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=149)** and goes to n.id is equal to the ID parameter.
>
> **[2:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=158)** Now we check if we have an existing book.
>
> **[2:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=161)** So if the old book is different from null, we are going to update this book.
>
> **[2:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=168)** So, we start with a title by writing in here OldBook.Title that is going to be now the NewBook.Title and then we do the same for author and description.
>
> **[3:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=189)** We also have the rate, the date start, and the date read.
>
> **[3:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/update-api-endpoint?u=76281980&t=204)** That's it.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), public (1), let (1), var (1)
> **Env Vars:** http (2), url (2), api (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Speakers:** - [instructor] (1)

#### Delete API endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=0)** - [Instructor] It is great that the user can now add new books, modify existing books, and see all the books.
>
> **[0:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=8)** But what if the user wants to delete a book from its collection?
>
> **[0:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=12)** Well, let's implement a delete API endpoint to do that.
>
> **[0:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=17)** So, let's go to visual code.
>
> **[0:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=19)** And here we need to go to the books controller and scroll down after the update book.
>
> **[0:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=28)** And write, delete the book.
>
> **[0:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=33)** This is going to be an http delete request.
>
> **[0:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=36)** So for that we write in here http delete.
>
> **[0:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=40)** And the name of the API endpoint is going to be delete book.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=45)** And we are going to pass as the parameter of this URL the book ID.
>
> **[0:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=52)** Now, let's write in here public ix result.
>
> **[0:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=59)** Delete book.
>
> **[1:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=62)** And then int ID.
>
> **[1:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=67)** Then you write service dot delete book.
>
> **[1:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=74)** We pass as a parameter the ID.
>
> **[1:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=77)** And let us just return.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=80)** Okay.
>
> **[1:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=83)** Let's save the changes and go to the delete book method and implement the S3 code.
>
> **[1:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=89)** For that go inside the services method, then book service dot cs and implement the delete book.
>
> **[1:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=99)** What we want to do in here is that we want to find the book, and then remove this book from our collection.
>
> **[1:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=106)** So for that, let's write in here var book is equal to dera dot books dot first or default.
>
> **[1:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=118)** And that goes to end dot ID is equal to the book ID that we get as a parameter.
>
> **[2:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=126)** And then dera dot books dot remove.
>
> **[2:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=133)** And then we just write in here the book.
>
> **[2:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=138)** Let us save the changes, and scroll down to see all the other methods.
>
> **[2:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=143)** We see that we are still missing the get book by ID method so since we are in here let us implement that one, too.
>
> **[2:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=151)** What we want to do is that we want to return from the data that books, the book where the book ID, so first or default and that goes to end dot ID, is equal to the book ID.
>
> **[2:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=170)** Let's go to the controller and implement an additional end point for reading a single book.
>
> **[2:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=176)** So I just write in here get a single book by ID.
>
> **[3:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=183)** This is going to be an http get request.
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=188)** We are going to name the URL single book and it will also have a parameter of ID as part of the URL.
>
> **[3:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=199)** Then we write in here public ix results, get book by ID, int ID.
>
> **[3:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=213)** And then in here we write var book, is equal to service dot get book by ID and we pass as a parameter the ID in here.
>
> **[3:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=227)** And then we just return, okay, book.
>
> **[3:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/delete-api-endpoint?u=76281980&t=234)** And then save the changes.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (10), let (9), pass (3), public (2), var (2)
> **UI Navigation:** go to (4), scroll down (2)
> **Env Vars:** url (3), api (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Testing API endpoints using Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=0)** - [Tutor] Now that we have created all the API endpoints that we needed, it's time to implement the Angular client App to consume them.
>
> **[0:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=9)** But before we do so, let us test the work as expected.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=14)** And to test them, we're going to use Postman and I'm assuming that you have already installed it, if not, you can get it from their website.
>
> **[0:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=23)** So now, let's go to Visual Code and run our project.
>
> **[0:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=27)** In here, right click and then go to Open in Terminal and write in here, dotnet run.
>
> **[0:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=36)** Now that we see that our app was compiled successfully, let us scroll up to the localhost 5001 and copy this link.
>
> **[0:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=46)** Go to Postman and create a new request.
>
> **[0:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=52)** Let us paste the URL that we just copied in here and then write, /api/Books/GetBooks.
>
> **[1:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=66)** And click the Send button to send a request.
>
> **[1:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=70)** So in here we see that we get all the books that we have in our collection which means that the GET API for getting all books works fine.
>
> **[1:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=79)** Now, let us test the single book API.
>
> **[1:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=83)** For that we write in here, SingleBook, and let us provide an ID of one.
>
> **[1:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=92)** Let's click the Send button and we see that the book with ID one was returned.
>
> **[1:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=99)** Now, let us test the update book so let us say we want to update this book, for that we just write in here, UpdateBook and we paste the book ID number one, which means that we want to update this book and let's copy all these values.
>
> **[2:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=120)** Let's go to the Body request because that's from where we want to send the new data and then go to the Headers.
>
> **[2:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=129)** In here write, Content-Type, application/json.
>
> **[2:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=139)** Then go to Body, then raw and paste it in here.
>
> **[2:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=144)** Let us change the title to, Updated Title.
>
> **[2:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=149)** Make sure that you, change the GET request to a PUT request.
>
> **[2:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=154)** And then click the Send button.
>
> **[2:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=157)** We see that our book was updated.
>
> **[2:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=161)** If you want to make sure, you can just write in here, SingleBook, and then leave the one as the ID.
>
> **[2:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=170)** Change the request to GET and click the Send button one more time.
>
> **[2:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=176)** Now we see that the book that we get, has the title, Updated Title.
>
> **[3:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=181)** Now, let's test the add new book functionality.
>
> **[3:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=186)** For that we write instead of SingleBook, AddBook.
>
> **[3:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=190)** We remove the ID from here.
>
> **[3:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=193)** We change the GET to a POST.
>
> **[3:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=196)** And, we want to add a new book with ID of, let's say 20, the title is going to be, New Book Title, New Author.
>
> **[3:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=210)** And we can leave the other data as they are.
>
> **[3:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=214)** So, New Author, we have the POST in here, click the Send button.
>
> **[3:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=220)** And we see that we get the Added response which means that our book was added.
>
> **[3:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=225)** And the request status is 200, which means it was a successful request.
>
> **[3:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=230)** Let's see if we have our book now in our collection, for that we write in here, GetBooks.
>
> **[3:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=237)** Change the POST to GET and click Send one more time.
>
> **[4:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=242)** If we scroll down in here, we're going to see the book that we just added with the ID of 20, the new book title and the author.
>
> **[4:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=252)** Now let us delete a book, for that, instead of GetBooks we write, DeleteBook.
>
> **[4:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=261)** We provide an ID of 20.
>
> **[4:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=264)** We change the request to DELETE and we click the Send button.
>
> **[4:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=271)** We see that the book was deleted.
>
> **[4:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=273)** Now, let's change the request to GET.
>
> **[4:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=279)** Let's change this to GetBooks.
>
> **[4:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/testing-api-endpoints-using-postman?u=76281980&t=284)** Click the Send button and we see that the book with the ID 20 is missing because we just delete it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), delete (3), type, (1)
> **API Endpoints:** get  (5), post  (2), /api/books/getbooks (1), put  (1), delete
 (1)
> **Env Vars:** api (3), post (3), url (1), put (1), delete (1)
> **UI Navigation:** go to (6), scroll up (1), scroll down (1)
> **CLI Commands:** make (2), dotnet (1)
> **Tools:** postman (2), terminal (1)
> **Definitions:** means that (3)
> **Speakers:** - [tutor] (1)


### 3. Getting Started with Angular

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Angular key concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=0)** - [Instructor] Angular is an open source web application framework developed by Google.
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=5)** The framework has many features like two way data binding, templating, routing, components, dependency injection and so on, but which are the main concepts and what is the main purpose in Angular?
>
> **[0:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=20)** One of the key concepts in Angular are modules.
>
> **[0:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=24)** In modules, service containers that group together blocks of functionalities that belong together like components, directives, services, and so on.
>
> **[0:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=35)** An important Angular module which comes by default when generating an Angular app, is the app module.
>
> **[0:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=42)** Which is also known as the config module, as here we get to configure the components, providers, bootstrappers, etc.
>
> **[0:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=50)** Components is another key concept in Angular, and the component defines the behavior of a portion of a screen.
>
> **[0:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=58)** Inside a component we have template, directives, and data binding.
>
> **[1:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=64)** A template is an HTML that defines how the view for that component is rendered.
>
> **[1:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=70)** On the other hand, directives are custom attributes that enhance the HTML syntax and are used to attach behaviors to specific elements on that page.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=80)** Data binding is a process that connects a component to its template and allows data and events to flow between them.
>
> **[1:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=91)** A component is decorated with the @ component syntax.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=95)** Inside the component we define the selector, which is a name that we want to use to render the view, we define the template URL, which is the HTML file for this component.
>
> **[1:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=106)** We have providers for services, and also we can define in here the CSS code, which is going to be applied to this HTML only.
>
> **[1:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=115)** Last but not least, another important concept is the services.
>
> **[2:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=120)** Services define reusable functionalities that are independent of the views.
>
> **[2:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=125)** This means that we can use a single service in different components.
>
> **[2:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/angular-key-concepts?u=76281980&t=130)** Dependency injection is a way to supply dependencies and to supply services to different classes or components, we use dependency injection, and to use a service in Angular, we need to inject it in the components constructor.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (2), known as (1), means that (1)
> **Env Vars:** html (4), url (1), css (1)
> **Exercise Files:** template (4)
> **Code Keywords:** module (3)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Generating components and services
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=0)** - [Narrator] Before we start developing our Angular app, let us first create all the components and services that we will use.
>
> **[0:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=8)** A component in Angular represents a single feature.
>
> **[0:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=11)** So this means that in our case, we need a component for each feature like showing all books, creating, deleting, etc.
>
> **[0:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=20)** And we will also create a service, which we are going to use to interact with our web API.
>
> **[0:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=26)** So let's go to visual code and see this in action.
>
> **[0:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=30)** Before we create anything in here, let us install the angular CLI which is an Angular Command Line Interface used for creating components, services, etc.
>
> **[0:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=43)** For that, right-click in here and then go to open in terminal and then write mpm install-g to install in globally at Angular/cli.
>
> **[1:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=63)** In here, press Enter.
>
> **[1:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=64)** And we see that the Angular CLI was installed.
>
> **[1:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=68)** If you want to go from here, just type in here ng-v and we see that the Angular CLI was installed successfully.
>
> **[1:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=78)** Now, let us go inside the ClientApp folder.
>
> **[1:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=83)** Then go inside the source folder and then inside the app folder.
>
> **[1:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=89)** Inside here we are going to create two new folders, one folder for the components.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=95)** So we are going to name that folder components.
>
> **[1:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=99)** And another folder for services.
>
> **[1:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=101)** So we are going to name that folder services.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=105)** Now, let us go in the components folder, right-click, and then open in Terminal.
>
> **[1:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=113)** So we see that we are in the components path.
>
> **[1:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=116)** To create a component, we are going to use the Angular CLI ng generate.
>
> **[2:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=122)** So for that, we write in here ng g, which stands for generate, then c, which stands for component.
>
> **[2:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=133)** And then we are going to name our component books.
>
> **[2:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=137)** This is going to be the components that we use to display all books.
>
> **[2:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=141)** So, let's press enter.
>
> **[2:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=145)** We see that we get an error in here which says that more than one module matches.
>
> **[2:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=150)** Because we have in here more than one module, we need to define to which module the books component will belong.
>
> **[2:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=157)** So we are going to place the books components inside the app.module.ts module.
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=163)** For that, we write ng generate component name books, and place it in the module app.
>
> **[2:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=173)** So dash m app.
>
> **[2:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=175)** Now we can see that our component was generated successfully.
>
> **[2:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=179)** If you want to confirm it, you can go to the app.module.ts file.
>
> **[3:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=185)** And in here, you can scroll down and see that the books component is already part of the declarations array.
>
> **[3:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=194)** Let us now go and create the other components.
>
> **[3:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=199)** Another component we are going to create will be the delete book component.
>
> **[3:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=203)** So we write in here delete-book.
>
> **[3:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=208)** Another one is going to be the new book component.
>
> **[3:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=212)** So we write in here, new-book.
>
> **[3:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=217)** Then we have the show book component for displaying a single book details.
>
> **[3:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=223)** And then we have the update book.
>
> **[3:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=226)** So we created all the components that we need now, let us create our service.
>
> **[3:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=230)** For that, go to the services folder.
>
> **[3:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=233)** Right-click in here, and then go to open in Terminal and write in here ng g which stands for generate, s for service, and we are going to name our service, the book service.
>
> **[4:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=246)** So, just write in here, book.
>
> **[4:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=251)** We see that our service was generated successfully.
>
> **[4:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=255)** Let us go back to the app.module.ts.
>
> **[4:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=258)** Let's close the terminal.
>
> **[4:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=261)** Here now we can see all the components.
>
> **[4:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=264)** So here we can see the components that we just created.
>
> **[4:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=267)** And for us to be able to use the book service that we just created, we need to include it in the providers array.
>
> **[4:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=274)** So for that we write in here, book service.
>
> **[4:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/generating-components-and-services?u=76281980&t=279)** And then we import the necessary namespace, which is the services/book.service.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), module (8), delete (2), case, (1), interface (1)
> **UI Navigation:** go to (4), right-click (3), scroll down (1)
> **Env Vars:** cli (4), api (1)
> **Tools:** terminal (4), command line (1)
> **Definitions:** stands for (3), means that (1), is an  (1)
> **Prerequisites:** install (3), before we start (1)
> **File Paths:** app.module.ts (3)
> **Cross-References:** go back to (1)

#### Cleaning up code and updating the router
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=0)** - [Instructor] Before we implement anything new, let us go to our Angular app and clean up the code from the existing components that we do not need.
>
> **[0:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=9)** Also, let us update the router so it uses our components.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=14)** Let's go to visual code, and see this in action.
>
> **[0:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=17)** In here, go inside the ClientApp folder, because here we have all the Angular-related code, and then inside the source folder.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=25)** Then here, go inside the app folder.
>
> **[0:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=29)** We have a couple of components outside the components folder.
>
> **[0:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=32)** So we have counter, fetch-data, home, and nav-menu.
>
> **[0:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=37)** Now, we need the home component, so let us just drag and drop it inside the components folder.
>
> **[0:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=44)** And then, click the Move button.
>
> **[0:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=48)** Also we need the nav-menu, so let us drag and drop it as well.
>
> **[0:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=53)** We don't need the counter and the fetch-data components.
>
> **[0:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=56)** So, let us remove these components.
>
> **[1:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=61)** And now let us go and change our router.
>
> **[1:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=64)** For that, go inside the app.module.ts file, because this is our config file for the router.
>
> **[1:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=71)** Here, first, let us remove the counter component, and the fetch-data component import.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=80)** Then, change the URL for the nav-menu.
>
> **[1:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=84)** Now, the nav-menu is going to be /components, and we do the same for the home component by just writing in here, components.
>
> **[1:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=99)** Let us scroll down to the declarations array, and remove from here the CounterComponent and the FetchDataComponent.
>
> **[1:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=110)** And then, scroll down to the router module.
>
> **[1:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=113)** In here we want to modify this module, so it matches with our components.
>
> **[1:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=118)** So let us start with the first one.
>
> **[2:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=121)** So, I'll just copy this line, and paste it in here.
>
> **[2:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=125)** So whenever we have, in the URL, /books, we want to render the books component.
>
> **[2:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=132)** So for that, we just write in here, BooksComponent.
>
> **[2:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=136)** And we can remove the pathmatch: 'full' from here.
>
> **[2:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=140)** Let us do the same for the other URL, so I'll just paste in here.
>
> **[2:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=145)** Let's create four more, for updating books, creating books, etc.
>
> **[2:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=150)** So the other one is going to be new-book.
>
> **[2:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=154)** So whenever we write /new-book, we want to render the NewBookComponent.
>
> **[2:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=161)** Whenever we write update-book, and we provide an ID as a parameter, because we want to know which book we want to update, we want to render the UpdateBook Component.
>
> **[2:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=176)** The same way, when we want to delete a book, so.
>
> **[2:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=179)** When we want to delete a book, and of course we want to provide an ID as a parameter.
>
> **[3:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=186)** We want to render the DeleteBookComponent, and the same way, the last one, when we want to show a single book, in this case we need to provide the ID as well because we want to know the details of which book we want to render.
>
> **[3:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=204)** The component that we're going to use is the ShowBookComponent.
>
> **[3:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=209)** Let us remove the two path configurations from here.
>
> **[3:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=214)** One last thing that we need to change is that we need to go to the nav-menu, and then go inside the nav-menu.component.html.
>
> **[3:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=224)** So here we want to have only two options.
>
> **[3:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=227)** The first option is going to be when we want to add a new book.
>
> **[3:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=231)** So for that, we just write in here the name of the link, is going to be Add, and the route link is going to be new book.
>
> **[4:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=240)** So we write in here new-book.
>
> **[4:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=244)** Let us remove the other one.
>
> **[4:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=247)** The other option is going to be all books, or we can just write in here Books, and the URL for this one is going to be /books.
>
> **[4:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=261)** Let us leave the title Summaries by default, and save the changes.
>
> **[4:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=267)** Now to round the application out, just first close the app.module.ts, then collapse all the folders, right click in here, go to Open in Terminal, and then write in here dotnet run.
>
> **[4:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=285)** Which is going to install all the necessary Angular packages, and will run the application.
>
> **[4:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=295)** So we see that our app was compiled successfully.
>
> **[4:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=298)** Let us scroll up in here, and copy this thing, or we can just Control and click, and then open the browser of your choice.
>
> **[5:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=307)** Paste the URL in here, and then Enter, Let us just accept this self-signed certificate, and here now we see the app running.
>
> **[5:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=319)** We have the Summaries title on the top left, and we have the two buttons on the top right, which are the Books, so when we click we go to the books component, and we have the Add new books, and when we click it we go to the new book components.
>
> **[5:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=333)** The same way, we can go to delete book, so we can just write in here delete-book, and just provide in here a dummy ID, press Enter.
>
> **[5:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=345)** We see that the delete book component was rendered, etc.
>
> **[5:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=348)** Now, since we are in here, let us change the homepage.
>
> **[5:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=352)** For that, we need to go to the homepage component, so let's go back to visual code.
>
> **[5:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=359)** In here, go inside the ClientApp, go inside the src, inside the app, then components, and home component, then home.component.html.
>
> **[6:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=371)** So I'll just close the terminal, and this is going to be a really simple design, so I'll just write in here, Welcome, and then let us just write in here, Welcome to the book summaries manager, then just write in here, where you can: then column.
>
> **[6:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=394)** Let us remove these list items, and add new ones, so here we can add books, in this manager we can update books, we can delete, we can view details, etc.
>
> **[6:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=416)** So, let's remove this part as well.
>
> **[7:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=422)** Let us save the changes, and go back to our app.
>
> **[7:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/cleaning-up-code-and-updating-the-router?u=76281980&t=426)** We see that we have in here the new welcome design.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), delete (6), module (4), new, (1), import. (1)
> **UI Navigation:** go to (8), drag and drop (2), scroll down (2), scroll up (1), open the (1)
> **Env Vars:** url (5)
> **File Paths:** app.module.ts (2), nav-menu.component.html (1), home.component.html (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **CLI Commands:** dotnet (1)
> **Prerequisites:** install (1)

#### Designing the Books page
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=0)** - [Instructor] Now that we have everything set up let us go to Visual Code and design the books page which will be used to render all books from our web API.
>
> **[0:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=11)** So in here go inside the ClientApp then source, app, components, and the books components.
>
> **[0:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=23)** So let us start with the books.component.ts file.
>
> **[0:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=28)** Inside here let us create a public array which is going to be used to hold all the books.
>
> **[0:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=36)** So let's write in here public books of type book and this is going to be an array.
>
> **[0:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=46)** Let us create a book interface to hold the data for that go inside the app folder and then inside here create a folder named interfaces and inside the interfaces folder we are going to create new file named book.ts.
>
> **[1:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=68)** The book.ts is going to be an interface, let's name this interface book and it's going to have the same properties as our book model in our web API project.
>
> **[1:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=79)** So let us start with the ID which is of the type number then we have the title which is going to be a string then we have description of type string.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=95)** The author of type string.
>
> **[1:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=99)** We have the rate which is optional and is of type number.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=105)** We have the date start which is optional of type date and we have the date read which is also optional of type date.
>
> **[1:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=117)** So let's save the changes in here and go back to the book.component.ts and we see that the error is gone.
>
> **[2:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=125)** Now let's go to the books.component.html file and here we start designing the view.
>
> **[2:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=131)** First of all we are going to have an h1 header which says book summaries.
>
> **[2:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=140)** Then next we are going to have a table which is going to be used to display all the data.
>
> **[2:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=146)** The table will have the default bootstrap classes of table and then table dash striped and we want to display this table only if the books array has data.
>
> **[2:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=160)** For that we write in here ngif is equal to books.
>
> **[2:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=166)** This table is going to have a table head so thead and then we are going to have a tbody so tbody, inside the table head we are going to have all of the table headers.
>
> **[3:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=180)** So inside the table row let us create the table headers and we are going to have a couple of them.
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=188)** So I'll just copy paste this table header.
>
> **[3:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=193)** The first table header is going to be title.
>
> **[3:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=198)** Then we will have author, then we have rate, preface, then we have rate, next we have the date started the date read, the status of the book.
>
> **[3:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=215)** So was it read or was it just added and then the last one is going to be the actions.
>
> **[3:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=221)** So here we will have some buttons which we are going to use to either delete the book, show the details or update the book, then inside the tbody write a trow
>
> **[3:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=235)** and then we have an ngfor so star ngfor.
>
> **[3:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=239)** Let the book of books array and then inside here we are going to have the tds to display the data for all the table headers that we have defined up here.
>
> **[4:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=254)** So to display the title we are going to write in here.
>
> **[4:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=258)** Book.title and then close the curly brackets.
>
> **[4:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=263)** We'll do the same for the other fields like the description, the author, et cetera.
>
> **[4:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=268)** So I'll just remove this line and Control + C to copy this line.
>
> **[4:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=275)** Control + V to paste it, so I'll just paste it a couple of times.
>
> **[4:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=280)** So we display the title now we want to display the description and next we want to display the author.
>
> **[4:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=288)** Then the rate, then the date start, the date read,
>
> **[4:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=298)** and the last one is going to be used for the status.
>
> **[5:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=300)** So we want to check if the book has a page read it means that this book was read.
>
> **[5:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=309)** Otherwise, we want to check if the book has a date start and if a book has a date start.
>
> **[5:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=317)** So, if it doesn't have a date read but it has a date start it means that this book is in progress, so just write here in progress.
>
> **[5:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=328)** Otherwise this book has not been started yet so just write in here not started, and the last column is going to be the actions.
>
> **[5:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=340)** Actions include delete, show details, and update.
>
> **[5:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=344)** So I'll just create in here a button so I'll just write in here now type button and in here we are going to have the last column for actions, so I'll just write in here for now td actions and we'll come and implement all the actions one by one.
>
> **[6:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=364)** Now one last thing that we need to change in here is the date format.
>
> **[6:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=368)** So for that we enter the default date pipe or that we just write in here a pipe and then date, colon inside double quotes we write dd which stands for day then capital MM and which stand for year.
>
> **[6:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=386)** Let us copy this pipe and paste it down here.
>
> **[6:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=393)** Save the changes and add one more thing in line 19 in the description, so here I'll just write pipe slice colon zero colon 50 which means get the first 50 characters of the description and then I'll just write three dots in here just to signify that this value continues.
>
> **[6:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=419)** So let's save the changes and scroll to the top of this page.
>
> **[7:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=424)** Just after the h1 let us add a loader.
>
> **[7:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=430)** This is going to be just a loading text and it's going to be a simple one so for that we just write in here p ngif we don't have books
>
> **[7:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=443)** then just display here in emphasized text or just a bold text of loading.
>
> **[7:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=451)** Let us save the changes, close all the windows, collapse the folder, right click, go to open in terminal and then type in here dotnet run.
>
> **[7:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=466)** So now that the app was compiled successfully let us copy this value in here.
>
> **[7:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=472)** Go to the browser of your choice and paste the URL in here.
>
> **[7:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=477)** If we go to the books we'll see that we get the book summaries, but then we have the loading in here.
>
> **[8:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=484)** Because we don't have any books yet.
>
> **[8:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-books-page?u=76281980&t=486)** So that's what we are going to do on the next part.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), interface (3), public (2), delete (2)
> **File Paths:** book.ts (2), books.component.ts (1), book.component.ts (1), books.component.html (1)
> **UI Navigation:** go to (5)
> **Env Vars:** api (2), url (1)
> **Definitions:** means that (2), stands for (1)
> **CLI Commands:** dotnet (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### Reading data from Angular
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=0)** - Now that we have the HTML file ready, let us modify the DS file to read the data from the web API.
>
> **[0:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=8)** For that we are going to first create a method in the Angular service.
>
> **[0:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=12)** Then next we are going to inject this service in our component, then call the method from our component, and at the end, handle the response.
>
> **[0:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=21)** Let's go to visual code and see this in action.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=25)** In here, go to ClientApp, then source, app, and then services.
>
> **[0:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=31)** In here open the book.service.ts file.
>
> **[0:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=35)** Let us first define the base URL.
>
> **[0:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=38)** And the base URL, which is of type string, is going to be api/books.
>
> **[0:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=48)** For us to be able to send HTTP requests to our web API, we need to inject the HTTP client.
>
> **[0:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=56)** So for that we write in here private http, and then httpClient.
>
> **[1:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=65)** Now let us create a method to get all the books.
>
> **[1:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=68)** For that, we just write in here getAllBooks, and then inside this method, we are going to return this.http.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=80)** We want to send a get request, which is going to return an array of books, and then inside here we are going to define the URL where we want to send this get request.
>
> **[1:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=92)** So that is going to be this.baseURL, and here /GetBooks.
>
> **[1:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=100)** That's all we need to do in the service bar.
>
> **[1:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=103)** Now let's go to our component.
>
> **[1:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=106)** Save the changes in here and go to the components.
>
> **[1:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=109)** For that, go to the components folder, then books, and then books.component.ts.
>
> **[1:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=117)** In here, let us inject this service, so we can use the method that we just created.
>
> **[2:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=122)** For that we write private service of type BookService.
>
> **[2:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=131)** Then inside the ngOnInit, whenever the books component is initialized, we want to get all the books.
>
> **[2:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=139)** For that, in here we write this.service.getAllBooks, and then to this method we want to subscribe, so subscribe.
>
> **[2:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=148)** This is going to return some data, which is a list of books, and then just write in here this.books is equal to the data, which is the response of our request.
>
> **[2:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=162)** Let us save the changes and collapse all the folders.
>
> **[2:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=166)** Right-click.
>
> **[2:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=169)** Open in Terminal.
>
> **[2:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=171)** Write in here dotnet run.
>
> **[2:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=175)** Now that the app is compiled successfully, copy the local host 5001 and go to your browser.
>
> **[3:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=183)** Paste the URL in here.
>
> **[3:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=186)** So the app is running successfully.
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=188)** Go to the books.
>
> **[3:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=190)** In here now we can see that all the books were loaded successfully.
>
> **[3:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=194)** And if we check the first book for example, which has the date started value but not a date read, we see that the status is In Progress.
>
> **[3:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=202)** And for the second book where we don't have a date started or a date read, we have a status of Not Started.
>
> **[3:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/reading-data-from-angular?u=76281980&t=209)** And from the third book, which has a date started and a date read value, we see that the status is Read, so we read this book.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (4), private (2)
> **Env Vars:** url (4), api (2), http (2), html (1)
> **UI Navigation:** go to (7), open the (1), right-click (1)
> **Code Identifiers:** getallbooks (2), httpclient (1), baseurl (1), ngoninit (1)
> **File Paths:** book.service.ts (1), books.component.ts (1)
> **CLI Commands:** dotnet (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### Designing the Create page
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=0)** - [Instructor] On this part, we are going to design the Create Page, which we are going to use to add new books to our collection.
>
> **[0:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=7)** So, let's go to Visual Code and see this in action.
>
> **[0:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=11)** In here, go inside the ClientApp, and then src, app, components, new-book, and the new-book.component.html.
>
> **[0:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=23)** In here we want to have a form, and inside here, we are going to have multiple divs.
>
> **[0:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=32)** Let's write in here class, form-group, and then inside the form-group, we are going to have a label, for, let's say in this case, for a title, let's name this label, Title, and then we are going to have an input or the value.
>
> **[0:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=51)** So, type is going to be text, we are going to add a class of form-control, then let's apply it in here an id of title, and a placeholder of Book title.
>
> **[1:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=72)** Let's do the same for the other fields, like description, author, et cetera, so.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=80)** Let's write in here, Description, copy this value to the id, then change the placeholder to Book description.
>
> **[1:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=93)** Let's do the same for the author, now put the author between the title and description.
>
> **[1:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=99)** So I'll just write in here, author, Author, change the id to author, and then, Book author.
>
> **[1:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=114)** Now we need three more fields for the rate for the date added and date read, and if you want to have all of 'em in the same row, let us just create a div in here with a class of row, and then inside this div, we want to have three more divs, so for that we just write, div, which has a class of col-nd-4,
>
> **[2:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=145)** col, which stands for column, so on the screen it's extra small, just take four columns, and we do the same for the small dash four.
>
> **[2:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=156)** Let's create three of them, and then inside the first one, we are going to have the dateStart, so I'll just copy this form-group from up here, and then, paste it in line 19.
>
> **[2:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=174)** We'll change the for description to for dateStart, and then here, Date start, change the placeholder to Date start, and then the type is going to be date, it has the class form-control, let's add the id to be dateStart.
>
> **[3:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=202)** Let's do the same for the dateEnd.
>
> **[3:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=206)** So in here I'll just copy the line 20 to 24, and paste it in line 28.
>
> **[3:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=214)** We'll change this to Date read, and then change the for to dateRead.
>
> **[3:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=222)** The type is going to be date, the id is going to be dateRead, and the placeholder, Date read.
>
> **[3:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=231)** Now let's do the last one for the rate.
>
> **[3:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=235)** So I'll just copy the line 12 to 15.
>
> **[4:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=242)** I'll scroll down in here and paste it in here.
>
> **[4:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=247)** The label is going to be rate, the for rate, and the id rate.
>
> **[4:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=255)** The type, however, is going to be a number, and we can set in here the min and the maximum values if you want to have, so let's say the minimum value of the rate can be zero, and the maximum value can be five.
>
> **[4:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=272)** Let's change the placeholder as well.
>
> **[4:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=275)** So the placeholder is going to be rate, and also before you run the app, make sure that you have the dateRead inside a div of class form-group.
>
> **[4:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=288)** So, I'll put the label in here, and then close the div tag in here, so, /div, and it's closed.
>
> **[5:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=303)** So let us save the changes and run the app.
>
> **[5:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=305)** Let's collapse the folders, right-click, go to Open in Terminal, in here write dotnet run.
>
> **[5:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=315)** Let's copy this URL, and go to a browser of your choice, paste the URL in here, and we'll see the result.
>
> **[5:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=323)** In here go to Add, and here we can see our form.
>
> **[5:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=328)** Now let us change the design a little bit, or let us change the width for this form.
>
> **[5:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=335)** Let's go back to the new-book, so, we'll then go to Visual Code, and in your book components, scroll up to the top, remove this p tag from here, I'll create a div, and this div will have a class add-book, or you can name the class anything you want, so add-book, then I'll call the div, and scroll down to the bottom, we'll paste it in here after the form.
>
> **[6:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=369)** Now, let's go to the CSS file for this HTML file, so by, you can just open and close Explorer, and you'll be inside the new-book folder, then go to the new-book.component.css.
>
> **[6:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=386)** Here let us define the add-book class, so for that we just write, .add-book, and we want this class to have a padding, and then we want to have in here zero, 20%, zero, and 20%.
>
> **[6:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=404)** Let's save the changes, and go back to the browser, so now in here we see that we have a better looking form.
>
> **[6:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=414)** Now let us put a star next to the fields that are required from here, like the Title, the Author, and the Description.
>
> **[7:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=421)** For that, let's go back to our CSS.
>
> **[7:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=424)** In here, I'll just write that, whichever element has a required class, required after that element, add a content of a star, and then change the color of that star to red.
>
> **[7:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=443)** Let's put a semi-colon in here, save the changes, and copy the required, go back to the component.html, and put that after each label that you want to have the star, like the title, for example, class required, let's copy this value, paste it in the author, paste it in the description, and then scroll down to the bottom of this form, 'cause we want to add a few buttons as well.
>
> **[7:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=474)** So, after the last div, just before the form, we want to have two buttons.
>
> **[8:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=482)** So I'll just write in here button.
>
> **[8:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=485)** The first button, is going to be a button, a (mumbles) button, with a class btn-success, which means that this is going to be a green button, and the type is going to be submit.
>
> **[8:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=500)** Let's change the text to Add, and let's create another button for the cancel.
>
> **[8:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=506)** So I'll just write in here Cancel, the button will have the default class, and whenever a user clicks this button, we are going to redirect the user to all books.
>
> **[8:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=519)** So for that, I'll just write in here, routerLink, is equal to, inside square brackets we write, single quotes and /books.
>
> **[8:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=532)** Let's save the changes and go back to our web browser.
>
> **[8:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=535)** So here we see the stars, we see the Add, and the Cancel button.
>
> **[8:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=538)** So let us click the Cancel button.
>
> **[9:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-create-page?u=76281980&t=541)** We see that we are redirected to all books.

> [!info]- Semantic Content
>
> **Code Keywords:** let (32), class, (4), for, (1), case, (1), type, (1)
> **UI Navigation:** go to (7), scroll down (3), right-click (1), scroll up (1)
> **Code Identifiers:** datestart (3), dateread (3), dateend (1), routerlink (1)
> **Env Vars:** url (2), css (2), html (1)
> **Cross-References:** go back to (5)
> **File Paths:** new-book.component.html (1), new-book.component.css (1), component.html (1)
> **CLI Commands:** make (1), dotnet (1)
> **Definitions:** stands for (1), means that (1)

#### Adding new data from Angular
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=0)** - [Narrator] Now that we created a form, it's time to add the create functionality in our Angular app.
>
> **[0:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=7)** For that we are first going to create a method in Angular service then we are going to inject the service in our component.
>
> **[0:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=15)** Then we are going to add the form group to the form.
>
> **[0:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=18)** Next, we'll send a request from our component and that the end, we are going to handle the response.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=25)** So let's go to Visual Code and see this in action.
>
> **[0:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=29)** In here we'll go inside the client app and the inside source.
>
> **[0:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=34)** App, services and the book_service.ts.
>
> **[0:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=39)** Here we are going to create a method named addBook which will take, as a parameter, a book of type book and it will simply return this.http.post and then here write this.baseURL plus, inside double quotes, write / AddBook.
>
> **[1:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=68)** Then to this post request we are going to parse, as a parameter, the book.
>
> **[1:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=73)** Now let us go to our component, so inside the component go to the new-book folder then new-book.compenet.ts.
>
> **[1:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=82)** Here we are going to inject our service, so our private service BookService.
>
> **[1:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=89)** Before we do anything else let us create a form group in here which we are going to use in our form.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=95)** So for that we write in here addBookForm.
>
> **[1:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=102)** This is going to be a type FormGroup.
>
> **[1:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=106)** Then inside the ngOnIt we are going to construct this form group.
>
> **[1:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=110)** So, this .addBookForm is equal to this. and we are going to use a form builder.
>
> **[2:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=120)** So let us inject the form builder in our constructor, for that we write private fb for short which is of type FormBuilder.
>
> **[2:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=133)** So here we will write this.fb.group and then inside here we write curly brackets.
>
> **[2:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=143)** Here we are going to define all the properties of the form and the form has an ID.
>
> **[2:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=149)** The value is going to be just a random number so we'll just write Math.floor, we get a Math.random and the number is going to be between one and 991.
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=163)** So we write Math.random times 1000.
>
> **[2:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=167)** Then next we have the title, so I'll just write in here title.
>
> **[2:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=172)** It will not have a default value so we can just write in here null or we can just write an empty string.
>
> **[2:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=177)** I'll just write null and this field is a required fields so for that we write Validators.required we are going to do the same for the author and for the description.
>
> **[3:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=191)** So I'll just write in here author and description.
>
> **[3:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=197)** If you want to have more than one validator, then you can compose the validators.
>
> **[3:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=202)** To do so you can write in here Validators.compose and then inside here I'll just write square brackets and then I'll define the first validator which means that this field is a required field.
>
> **[3:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=219)** And also this field should be at least 30 characters long.
>
> **[3:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=225)** So Validators.minLength required or minLength, 30.
>
> **[3:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=231)** Next we have the rate which we are going to set to null.
>
> **[3:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=239)** We have the dateStart and the dateRead.
>
> **[4:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=248)** So let us save the changes and go to our html file.
>
> **[4:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=253)** Let's copy this value and now let's go to the html file.
>
> **[4:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=259)** In the form we are going to define the form group.
>
> **[4:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=263)** So for that we write in here formGroup is equal to the addBook form.
>
> **[4:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=270)** Then we are going to define this submit event.
>
> **[4:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=273)** So for that we just write in here ngSubmit.
>
> **[4:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=279)** And once we submit the form we are going to execute the onSubmit method.
>
> **[4:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=286)** Next, for each input we need to define the form control name.
>
> **[4:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=291)** So, that's going to be like formControlName is equal to the form control that we have defined in our form group.
>
> **[5:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=302)** So, and I'll start with the first one.
>
> **[5:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=304)** The first one is going to be the title.
>
> **[5:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=308)** I'll just copy this value or we'll have another one for the author.
>
> **[5:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=315)** Let's copy this value.
>
> **[5:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=318)** Then we'll have another one for the description.
>
> **[5:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=323)** The we'll have another one for the dateStart.
>
> **[5:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=328)** But this going to be dateStart then another one for the dateRead.
>
> **[5:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=337)** And the last one for the rate.
>
> **[5:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=340)** I'll just write in here rate.
>
> **[5:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=344)** Now let us go back to our component.ts file and create the onSubmit method.
>
> **[5:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=351)** So in here just write onSubmit this.service.addBook and the book value in here is going to come from the this.addBookForm.value.
>
> **[6:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=368)** To execute this request we need to write in here subscribe so we need to subscribe to it and then we'll have in here data.
>
> **[6:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=376)** So once we have submitted this form, we want to redirect our users to the books list.
>
> **[6:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=382)** So for that we just write in here this.
>
> **[6:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=387)** We need to inject the router.
>
> **[6:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=391)** So for that I'll write in here private router router.
>
> **[6:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=399)** Then let us scroll down here.
>
> **[6:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=402)** this.router.naviagte and then we want to navigate to the books.
>
> **[6:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=412)** So inside double quotes /books.
>
> **[6:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=418)** Let us save the changes and run the application to see the result in action.
>
> **[7:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=422)** So let us just right-click and go to terminal.
>
> **[7:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=426)** Write in here dotnet run.
>
> **[7:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=431)** Let us go to the browser and in here we see that we get an error which says that we cannot bind the form group since it's not a known property of form.
>
> **[7:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=441)** And that's right because we are using the reactive forms module but we have not configured it in our app.module.ts file.
>
> **[7:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=448)** So let us go that file and configure the reactive forms module.
>
> **[7:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=454)** So in here go the client app.
>
> **[7:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=457)** Then inside source.
>
> **[7:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=460)** App, and then go to the app.module.ts.
>
> **[7:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=464)** Scroll down in here to the imports array and after the forms module write ReactiveFormsModule.
>
> **[7:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=474)** Save the changes and go back to the browser.
>
> **[7:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=479)** Now we see that the app ran successfully.
>
> **[8:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=482)** Let's go to the add, here let's provide a title so New Title.
>
> **[8:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=490)** Author, description, so we see that we don't get a notification that we need to provide a description which is more than 30 characters but we are going to do that on the next part.
>
> **[8:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=502)** So, this is just description.
>
> **[8:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=505)** Let's add a date start.
>
> **[8:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=509)** Let's add a date read.
>
> **[8:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=513)** And a rate of 3.9 and click the add button.
>
> **[8:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=520)** So we see that we get an error in here but if we expand the http error response, we are going to see that this is not an error because the status is 200.
>
> **[8:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=531)** So let us go back to our controller and have a look.
>
> **[8:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=535)** So in here find the controller which is inside the controllers folder.
>
> **[8:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=539)** Books.Controller.cs.
>
> **[9:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=541)** So in here, instead of returning the added string let us remove it completely and save the changes.
>
> **[9:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=548)** Let us rerun our application but first let's stop it.
>
> **[9:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=552)** So no running here again the dotnet run command and let's go back to the browser.
>
> **[9:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=559)** In here press Ctrl + F5 to refresh the browser and let's enter new data.
>
> **[9:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=566)** So, New Book, the author is going to be, let's say New Book.
>
> **[9:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=570)** New Book, let's enter a date start.
>
> **[9:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=576)** Date read and a rate of 4.3 and click the add button one more time.
>
> **[9:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/adding-new-data-from-angular?u=76281980&t=582)** Now we see that we are redirected to the all books view and our book can be seen down here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), this. (8), module (5), private (3), this . (1)
> **Code Identifiers:** addbook (3), addbookform (3), datestart (3), onsubmit (3), minlength (2)
> **UI Navigation:** go to (9), scroll down (2), navigate to (1), right-click (1)
> **File Paths:** app.module.ts (2), book_service.ts (1), new-book.compenet.ts (1), component.ts (1)
> **Cross-References:** go back to (4)
> **CLI Commands:** dotnet (2), find (1)
> **Versions:** 3.9 (1), 4.3 (1)
> **Definitions:** is a  (2)

#### Designing the Book Details page
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=0)** - [Instructor] Now we are going to design the details page.
>
> **[0:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=3)** So let's go to our app.
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=5)** In here we have all the books and in the actions column we want to have a button saying show so when we click that button, we'll be redirected to another page where we can see the details of the book.
>
> **[0:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=19)** So let us start by changing the design of this page a little bit, like making this table wider.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=25)** For that let's go to Visual Code.
>
> **[0:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=28)** In here go to ClientApp then source, then app and then to the app.component.html from where we render the router outlet, so from where we render the content of each active component.
>
> **[0:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=44)** Let us change this default container class to another class, like for example body wrapper.
>
> **[0:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=52)** So we have the body wrapper in here and then save the changes here, copy this class, go to the styles.css, paste it in here and then put a dot in front of it so that we know it's a class.
>
> **[1:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=73)** And we are going to write in here padding zero so 20 at the left then zero and 20 pixels on the right.
>
> **[1:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=84)** Let's go back to our app so now here we have a wider table, now let us go back to the books component and add a show button in here.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=96)** Inside the components we go up to books, and then books.component.html.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=105)** Let us remove the actions from here and we write button.
>
> **[1:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=110)** This is going to be of type button.
>
> **[1:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=113)** Let's add a class so class is going to be btn btn dash default and then btn dash small.
>
> **[2:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=126)** The text in here is going to be show and let us add an event and let us add the click event in here.
>
> **[2:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=137)** So whenever the user clicks this button we want to execute the showBook method which has as a parameter the book.id.
>
> **[2:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=149)** Now let us go to the ts file and implement this method.
>
> **[2:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=153)** So just after the ngOnInit write showBook, id this is going to be of type number.
>
> **[2:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=162)** What we want to do in here is that we just want to redirect the users from this component to the showBook component.
>
> **[2:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=170)** So for that we write private, router and then router and here we just write this.router.navigate
>
> **[3:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=184)** to the inside double quotes write show dash book then slash and here we need to append the ID that comes from the view and that's it.
>
> **[3:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=202)** Now let's go to the app, so we see that we have the show button here, let us click this button.
>
> **[3:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=210)** So we are redirected to the show book and then we said ID of one.
>
> **[3:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=215)** Now let us design this page in here.
>
> **[3:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=218)** So let's go to the showBook component in here let us define the book that we are going to get from the database.
>
> **[3:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=226)** Which is of type book and now let's go to the component.html file.
>
> **[3:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=234)** Where we are going to create the card that we are going to use to display the book detail.
>
> **[4:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=240)** So let us start by creating a div.
>
> **[4:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=244)** We can write in here a class book details.
>
> **[4:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=249)** Let us just copy this value and go to the css file.
>
> **[4:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=254)** So write in here dot and then show book details we are just going to write in here padding zero, 20%, zero, 20% save the changes and go back to the html file.
>
> **[4:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=272)** Now in here we are going to create our card.
>
> **[4:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=275)** So let is just write in here div and this div will have a class of card and we want to display this card only if we have a book.
>
> **[4:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=286)** So ngIf a book has values.
>
> **[4:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=291)** The card has body, so for that we just write in here div class card dash body then inside the body we want to create an h5 tag which stands for the card title.
>
> **[5:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=307)** So just write in here card dash title then here we want to display the book.title and another one for the book.author.
>
> **[5:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=322)** Let's just write in front of here by, so it's a book by the author, change the tag to an h6 tag and from card title write in here card subtitle and the dash two and text muted.
>
> **[5:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=343)** Then next inside a paragraph let us display the book description, so for that we just write book.description and then at the end let us create two links, one for canceling the action.
>
> **[5:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=359)** So we are going to redirect the users to the books page, and another one to redirect the users to the update page.
>
> **[6:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=366)** So in case the user wants to update the book.
>
> **[6:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=369)** So for that we just brought in here a, and then we are going to define the router links so for that we just write routerLink.
>
> **[6:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=382)** That's equal to inside double quotes write square brackets and then single quotes slash books so this is where we want to redirect the users.
>
> **[6:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=396)** Just write in here class, card dash link.
>
> **[6:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=402)** We are going to name this one back and let's copy and paste this line we are going to change the URL to update dash book we'll take another parameter in here, the book.id and then we are going to name it update, so let us remove this empty line's end save the changes and let's go to our app.
>
> **[7:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=432)** So let's go to the books, let's click the show button and the reason why we don't see anything in here is because we have the condition to not show anything if the book is empty.
>
> **[7:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=445)** So the ngIf condition that we have in here.
>
> **[7:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=448)** Let us remove this one, let's go back to the, and here now we can see the update and the back button.
>
> **[7:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=455)** So if click the back we'll be redirected to the show all books.
>
> **[7:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/designing-the-book-details-page?u=76281980&t=460)** So let us reword the change and save the changes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (31), class, (3), class. (1), private (1), this. (1)
> **UI Navigation:** go to (10)
> **Code Identifiers:** showbook (4), ngif (2), ngoninit (1), routerlink (1)
> **File Paths:** app.component.html (1), styles.css (1), books.component.html (1), component.html (1)
> **Cross-References:** go back to (4)
> **Env Vars:** url (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)

#### Getting a single book from Angular
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=0)** - [Instructor] Now that we have created the book details view, it's time to get the data from the Web API.
>
> **[0:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=6)** For that, we are going to create a method in our service.
>
> **[0:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=10)** Then we are going to inject this service in our component.
>
> **[0:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=13)** And at the end, we are going to handle result.
>
> **[0:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=16)** So, let's see this in action.
>
> **[0:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=19)** In here, go to ClientApp, src, app, services, and then book.service.ts file.
>
> **[0:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=29)** Here we are going to create a method which takes the parameter of book ID and then returns a book.
>
> **[0:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=36)** So let's write in here, "getBookById, id, it's of type number.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=45)** We are going to return this.http.get which is going to return a Book response, then this._baseURL.
>
> **[0:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=58)** And then in here we write inside double quotes, /singleBook, then /, and we append in here the id.
>
> **[1:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=72)** Let us save the changes and go to our component.
>
> **[1:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=75)** So inside the components folder, go to show-book, then show-book.component.cs.
>
> **[1:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=84)** Let us inject in here the service so we can use the method that we just created.
>
> **[1:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=89)** So, private service, BookService.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=95)** And then inside the ngOnInit, we are going to use that method.
>
> **[1:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=99)** For that we write this.service.getBookById.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=105)** And we are going to get the ID from the URL, so of that we are going to use the activated route.
>
> **[1:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=110)** Let us inject it in ouR constructors.
>
> **[1:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=113)** So, private route, ActivatedRoute, and theN in here write this.route.snapshot.parameters.id.
>
> **[2:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=132)** Now it's important that the ID that you write in here, needs to be the same like the one that you have defined in your route.
>
> **[2:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=142)** So let us go to our app.module.cs file.
>
> **[2:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=148)** If you scroll down in here, we have said that when we have the show-book URL, that parameter is going to be id.
>
> **[2:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=156)** So the value in here needs to be the same like the value in here.
>
> **[2:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=162)** So let's write in here subscribe, and then data.
>
> **[2:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=167)** The data is basically going to be the Book, so this.book is equal to the data.
>
> **[2:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=175)** Let us save the changes and go to our app.
>
> **[2:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=178)** So now in here we can see that we get the book details.
>
> **[3:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=182)** If I click the Back button, we are redirected to all books, and let's open another one.
>
> **[3:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=189)** When we click the Update button, we are redirected to the update-books.
>
> **[3:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/getting-a-single-book-from-angular?u=76281980&t=193)** So let us now implement the update-books component.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (5), private (2), module (1)
> **Code Identifiers:** getbookbyid (2), singlebook (1), ngoninit (1), our (1), then (1)
> **UI Navigation:** go to (5), scroll down (1)
> **Env Vars:** url (2), api (1)
> **File Paths:** book.service.ts (1)
> **Speakers:** - [instructor] (1)

#### Updating existing data from Angular
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=0)** - [Instructor] Now let us see how we can update existing data in Angular.
>
> **[0:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=4)** So in our case we are going to see how we can update an existing book from our collection.
>
> **[0:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=10)** We are going to first create a method in our service.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=14)** Then we are going to create the view.
>
> **[0:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=16)** Then we are going to create the FormGroup in our component.ts file.
>
> **[0:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=21)** And to use the method from our service we are going to inject the service.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=25)** Then next, we are going to send a request and handle response.
>
> **[0:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=30)** So let's go to visual code and see this in action.
>
> **[0:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=34)** Let us first create the service method.
>
> **[0:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=37)** So inside source, app, services, book.service.ts.
>
> **[0:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=44)** Here we are gong to create a method which we are going to name updateBook which takes as a parameter a book that we are going to return of this.http dot want to send a put request this.baseURL and then we write inside double quotes UpdateBook slash we want to append to this one the book ID.
>
> **[1:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=75)** Because we want to paste the book ID as a URL parameter.
>
> **[1:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=79)** And in the request body, we want to paste the book.
>
> **[1:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=84)** That's it.
>
> **[1:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=85)** Now, let us go and create the view.
>
> **[1:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=88)** The view in our case is like the new book.component.html.
>
> **[1:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=93)** So, I'll just copy this view and scroll down to the update book.
>
> **[1:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=100)** I'll remove the existing code and paste it in here.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=105)** One thing that we need to change is the AddBookForm to UpdateBookForm and change the class in here from Add Book to Update Book.
>
> **[1:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=117)** Let us scroll down to the bottom, change the add in here to update.
>
> **[2:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=125)** And then save the changes.
>
> **[2:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=127)** Now, let us go to book.component.css file.
>
> **[2:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=133)** Copy this code and go to the updatebook.css file and paste it in here.
>
> **[2:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=140)** Change the add book to update book.
>
> **[2:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=145)** Now let us go to the update-book.component.ts file.
>
> **[2:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=151)** So in here, let us inject everything that we need.
>
> **[2:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=154)** We are going to start with a service because we need a service to get a single book and then to send a put request.
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=163)** For that we will write service BookService.
>
> **[2:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=169)** Then we are going to inject the route, the activated route to get the idea of the book from the URL.
>
> **[2:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=175)** So, private route ActivatedRoute, then we need the router to navigate to all books after we have updated the books.
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=188)** So private router, router.
>
> **[3:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=192)** And the last one is going to be the FormBuilder to construct our form group.
>
> **[3:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=196)** So, fb FormBuilder.
>
> **[3:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=202)** Here, we need to create the FormBuilder that we are going to use.
>
> **[3:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=205)** And we have said that we will use the UpdateBookForm.
>
> **[3:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=209)** So let's just write in here UpdateBookForm, this is going to be our FormGroup.
>
> **[3:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=217)** Then, inside the, and joinin' it, we are going to get the single book and construct our FormGroup.
>
> **[3:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=225)** For that, we just write in here this.service.getBookById then we rewrite this.route.snapshot.params which stands for parameters dot id.
>
> **[4:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=244)** And in here, we write subscribe and then data that goes to it.
>
> **[4:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=250)** Here, we are going to first, get the book data.
>
> **[4:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=254)** So, that I'll just write in here this.book is equal to data.
>
> **[4:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=259)** And for the book, we are going to create a book variable up here.
>
> **[4:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=263)** So a book, that is of that any, or you can write off that book.
>
> **[4:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=269)** And now, it's time to create our UpdateBookForm.
>
> **[4:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=275)** Now, since the code is nearly the same like the new book, I'll just go and copy these lines from here.
>
> **[4:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=285)** Comeback to the update book component, paste them in here.
>
> **[4:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=290)** I'll change the AddBookForm to UpdateBookForm.
>
> **[4:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=296)** And then, assign in here the real data.
>
> **[4:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=299)** So, the id in this case is going to be data.id, the same way, and we're going to do the same for title, author, description and all the other properties.
>
> **[5:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=313)** So, I just change here title, author, description, rate, dateStart and dataRead.
>
> **[5:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=328)** Let us import the validators which is part of the angular forms and that's it.
>
> **[5:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=335)** Let us now run the app to see the results.
>
> **[5:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=337)** So I'll just collapse everything and then just go to terminal and run in here .net run.
>
> **[5:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=346)** Let us go to the browser.
>
> **[5:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=350)** Go in here to books.
>
> **[5:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=352)** Then, show a book.
>
> **[5:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=355)** Then, click the update button.
>
> **[5:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=358)** So we see that we get all the details for the book, but we don't see the date start even though it has a value.
>
> **[6:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=365)** Now, that is just a formatting issue so, let us go visual code and fix this problem.
>
> **[6:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=371)** So, and you go to the Update book.component.
>
> **[6:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=374)** Let us close the terminal in here and create a method.
>
> **[6:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=378)** Just after the ngOnInit.
>
> **[6:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=381)** We are going to name this method FormatDate, which takes us a parameter a date, which takes us a parameter a date.
>
> **[6:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=390)** So, if it has a value, it will return and your date, so date.toISOString.
>
> **[6:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=405)** I will get the substring zero to 10.
>
> **[6:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=413)** Now, let us use this method for both date start, so this.formatDate for DateStart.
>
> **[7:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=425)** And this.formatDate for the dateRead.
>
> **[7:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=432)** That I'll save the changes and go back to our app.
>
> **[7:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=436)** So now, we can see the date in here.
>
> **[7:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=439)** One more thing that's left in here is that we need to implement the update functionality.
>
> **[7:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=445)** So, for that, let us go to visual code one more time.
>
> **[7:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=450)** In here, we are going to implement the onSubmit method.
>
> **[7:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=453)** So, onSubmit here.
>
> **[7:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=459)** What this method will do is basically, this.service.updateBook, it takes us a parameter of this.updateBookForm.value.
>
> **[7:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=473)** We're going to subscribe, once it's a successful request.
>
> **[7:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=478)** Or we'll simply redirect the users to all books, so this.router.navigate to the books URL, so slash books.
>
> **[8:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=492)** That I'll save the changes, but before we test our app, let's go to the HTML file one more time.
>
> **[8:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=499)** So in here, go the description and let us change the input in here to be a textarea because we don't want to have an input for the descriptions since the description might be read along.
>
> **[8:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=511)** So, textarea in here, let's go to the right.
>
> **[8:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=515)** We need to close it.
>
> **[8:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=519)** So now, it's closed.
>
> **[8:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=522)** Let's save the the changes and go back to our app.
>
> **[8:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=527)** So we see it, we have a textarea now in here, let us change the values of title Managing to just Update, we can change the Date start, if we want.
>
> **[8:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=539)** And then we can change the Date read.
>
> **[9:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=543)** And then click the update button.
>
> **[9:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=546)** So we see that we are redirected to the all books view and we can see that the first book here is managing update.
>
> **[9:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/updating-existing-data-from-angular?u=76281980&t=554)** We have now a Date Started and a Date Read, that's why the status is changed to read.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), this. (10), private (2)
> **Code Identifiers:** updatebook (2), formatdate (2), onsubmit (2), baseurl (1), getbookbyid (1)
> **UI Navigation:** go to (10), scroll down (2), navigate to (2)
> **File Paths:** component.ts (1), book.service.ts (1), book.component.html (1), book.component.css (1), updatebook.css (1)
> **Env Vars:** url (3), html (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **Definitions:** stands for (1)

#### Deleting data from Angular
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=0)** - [Instructor] The only feature left is deleting data.
>
> **[0:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=3)** So, removing a book from our collection.
>
> **[0:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=7)** And that is what we are going to do now.
>
> **[0:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=10)** So, let's go to visual code.
>
> **[0:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=12)** In here, we are going to first create a service method.
>
> **[0:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=16)** So, let's go to our service file, which is the book.service.ts and at the end, just after the updateBook, we are going to add the deleteBook method.
>
> **[0:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=31)** This method is going us take us a parameter, an I'd of type number.
>
> **[0:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=35)** And we are going to send the delete request.
>
> **[0:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=38)** So that, we write in here return this.http.delete and then inside here, we write this.baseURL.
>
> **[0:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=49)** Then inside double quotes, DeleteBook and the plus ID.
>
> **[0:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=59)** Now, let us go to our delete component.
>
> **[1:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=63)** And since the delete component is nearly the same like the show book component, we are going to copy the HTML from here.
>
> **[1:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=71)** So let's copy the HTML and then go to the deleteBook.
>
> **[1:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=77)** And we are going to paste it in here.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=80)** Let us leave everything the same in here except the update button, so let us change that to approve.
>
> **[1:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=88)** Let us close the terminal, remove the router link.
>
> **[1:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=93)** And instead, we are going to add a click event.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=96)** So, whenever a user clicks this link, we are going to execute the deleteBook method.
>
> **[1:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=104)** The deleteBook method has a parameter of ID, so we get that from book.id.
>
> **[1:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=111)** And that's it.
>
> **[1:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=112)** Let us also change the class from card link to btn-danger.
>
> **[2:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=120)** And let's go now to our deleteBook component to implement the functionality.
>
> **[2:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=126)** So for that, go to the deleteBook.component.ts.
>
> **[2:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=131)** Inside here, we are going to inject the route, router and service.
>
> **[2:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=136)** So, let's write private route, activatedRoute, then private router, router and this service which is the book service.
>
> **[2:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=148)** So, private service, bookService.
>
> **[2:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=154)** Let's import the router.
>
> **[2:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=156)** Which is part of the Angular/router.
>
> **[2:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=161)** Inside the ngOnInit, let us get the detail for the book.
>
> **[2:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=165)** So, this.service.getBookById, and then here we write this.route.snapshot.parameteres.id
>
> **[3:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=180)** then .subscribe, and here, we just write, this goes to it.
>
> **[3:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=187)** This.book is equal to data.
>
> **[3:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=192)** Let's create a book in here.
>
> **[3:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=194)** So let's write in here book and we can leave it of type any.
>
> **[3:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=199)** Now, let us import the deleteBook method, which takes us a parameter an id of type number.
>
> **[3:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=209)** And what this will do is that it will send a delete request by using the deleteBook service method.
>
> **[3:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=216)** So, this.service.deleteBook id and then, subscribe.
>
> **[3:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=229)** In here, we are just going to redirect the user to all the books.
>
> **[3:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=233)** So this.router.navigate to all the books.
>
> **[4:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=243)** And that's it.
>
> **[4:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=244)** We are missing only one little thing in here.
>
> **[4:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=247)** It's a button from all books.
>
> **[4:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=250)** We need to have a delete button in there.
>
> **[4:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=252)** So, let us go to the books.
>
> **[4:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=255)** Then books.component.html, scroll down to the bottom.
>
> **[4:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=261)** So, in here, let us copy the existing button.
>
> **[4:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=267)** So I'll just copy this button.
>
> **[4:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=272)** And since we are in here, let us create an update button as well.
>
> **[4:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=275)** So, first one is going to be update, we are going to change btn default to btn success.
>
> **[4:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=287)** And the method is going to be updateBook.
>
> **[4:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=293)** Therefore, delete, we're going to change the btn default to btn danger.
>
> **[4:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=298)** The method is going to be deleteBook.
>
> **[5:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=303)** And we are going to change the text to delete.
>
> **[5:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=307)** Now, let us go to the TS file.
>
> **[5:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=310)** Scroll down here to the showBook.
>
> **[5:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=313)** I'll just copy this one and paste it two times.
>
> **[5:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=317)** One for the update and another one for the delete.
>
> **[5:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=322)** So, change in here the showBook to updateBook.
>
> **[5:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=326)** And the showBook in here to deleteBook.
>
> **[5:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=330)** Let us save the changes and go to our application.
>
> **[5:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=334)** So now, here we can see three buttons if I click the update button.
>
> **[5:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=338)** I'll be redirected to the update book component.
>
> **[5:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=342)** Let me cancel and go back to all books.
>
> **[5:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=345)** Now, if I click the delete button, we will come here to this approval step, because we don't want to just delete books.
>
> **[5:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=355)** And we can click the approve button to delete the book and we see that the book is now deleted.
>
> **[6:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=360)** One more thing that we can improve in here is the view.
>
> **[6:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=364)** So, let us go back to our code.
>
> **[6:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=367)** In here, I'll just go to the showBook.css file.
>
> **[6:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=373)** Copy these lines and then go to the deleteBook.css file and paste them in here, save the changes and go back to the application.
>
> **[6:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=382)** And now, we can see that we have a better look and if we want to improve it even more, we can just go back to the code.
>
> **[6:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=389)** In here, let us change this a take to button.
>
> **[6:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=393)** Copy it in here.
>
> **[6:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=398)** Paste it here, save the changes and go to the app one more time.
>
> **[6:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/deleting-data-from-angular?u=76281980&t=401)** And now, we can see that the approve text is in white.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), delete (12), this. (7), private (3)
> **Code Identifiers:** deletebook (12), showbook (4), updatebook (3), baseurl (1), activatedroute (1)
> **UI Navigation:** go to (11), scroll down (2), navigate to (1)
> **File Paths:** book.service.ts (1), deletebook.component.ts (1), books.component.html (1), showbook.css (1), deletebook.css (1)
> **Cross-References:** go back to (4)
> **Env Vars:** html (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Handling errors in Angular
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=0)** - [Instructor] We have implemented the core features of our app, but so far, we kind of assumed that everything will work as expected, and that is not the case all the time.
>
> **[0:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=11)** So, what we need to do is that we need to take care of the errors as well.
>
> **[0:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=15)** Like, what happens when something goes wrong, or when the users do not provide the necessary data?
>
> **[0:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=22)** Let us go to our app, and see an example.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=25)** So, let us say we want to add a new book.
>
> **[0:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=28)** In here I'll not provide any data, even though it says that the title, author, and description fields are required.
>
> **[0:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=36)** If I click Add, the API endpoint is going to return a successful response, so I have added nothing to my collection, which is just wrong.
>
> **[0:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=47)** Now, let us close the app, and go and fix this issue in our web API.
>
> **[0:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=54)** So, now we go inside the controllers, then BooksController, close the terminal, and scroll down to the AddBook method.
>
> **[1:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=63)** Let us put the breaking point.
>
> **[1:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=65)** And here we are going to add a try-catch block, which we are going to use to catch an exception, in case anything goes wrong.
>
> **[1:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=73)** So, try, and catch, and inside the catch, we are going to write, Exception ex.
>
> **[1:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=83)** So, let us press Enter, press Enter here, and then press Enter one more time.
>
> **[1:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=91)** In case something goes wrong, what we want to do is that we want to return a BadRequest.
>
> **[1:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=98)** And the message of the BadRequest is going to be ex.Message.
>
> **[1:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=104)** Let us import the exception, so, Control + ., using System.
>
> **[1:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=109)** Inside the try, the first thing that we need to do, is that we need to check if we have any data for the book.
>
> **[1:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=116)** So, if book is different from null, we're going to add the book to our collection.
>
> **[2:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=127)** So, let us cut these two lines, and paste them here.
>
> **[2:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=133)** So, the book was added.
>
> **[2:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=135)** We're going to just return, Ok, book.
>
> **[2:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=138)** Otherwise, we're just going to return a BadRequest, which says that the book was not added.
>
> **[2:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=148)** Now we are returning either success or failure from our API, but we need to handle this from the Angular part as well.
>
> **[2:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=155)** So, let us go to the ClientApp, source, app, components, and then go to the new-book component, then go inside the TS file.
>
> **[2:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=169)** Here, scroll down to the onSubmit method, and in this method, we are going to add the catch.
>
> **[2:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=178)** So, in case the request is a success, what we want to do is that we just want to navigate to the books, but in case it is an error, so we just write in here, error, then we want to display maybe an error message.
>
> **[3:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=194)** So, let us go up here and write, showError is of type bool, and the default value is false, because we don't have any errors.
>
> **[3:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=206)** Then scroll down to onSubmit.
>
> **[3:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=209)** Here we write, this.showError is equal to true.
>
> **[3:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=214)** Now, what is the error?
>
> **[3:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=216)** Well, we can add an error in our HTML, so let us go to the HTML file.
>
> **[3:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=223)** And here, just before the form, we can create a div, so I can just write in here div.
>
> **[3:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=230)** We are going to show this div only if we have an error, so only if the showError is true.
>
> **[3:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=239)** So, showError.
>
> **[4:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=241)** And then, this is going to have class of alert alert-danger, and the role is an alert.
>
> **[4:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=252)** We can just write in here, "Book was not added to your library.
>
> **[4:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=260)** "Please, try again!"
>
> **[4:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=265)** Let us save the changes, and click this icon here on the left to debug the app, and then just click the play button up here to start debugging.
>
> **[4:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=278)** So, we see that the app ran successfully.
>
> **[4:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=280)** Let's go to Add.
>
> **[4:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=282)** Let's not add any data in here, and just click the Add button.
>
> **[4:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=287)** So, in here we see that we have reached the breaking point.
>
> **[4:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=291)** Now, let us just continue with F10, or by just clicking the button up here.
>
> **[4:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=297)** So, now we have a check, but the check will always have an ID, because we automatically generate that from the typescript.
>
> **[5:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=305)** So, instead of checking if the book is null, we can check if the book.Author is different from null, and the book.Title is different from null, and also, the book.Description is different from null.
>
> **[5:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=329)** Only then, we can add a book to our collection.
>
> **[5:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=332)** Otherwise, we are just going to return a BadRequest, saying that the book was not added.
>
> **[5:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=336)** I'll just save the changes, and press F10, or just click the button.
>
> **[5:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=342)** For the changes to be applied, we need to restart the app, so I'll just restart the app.
>
> **[5:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=349)** Let's close the first tab.
>
> **[5:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=351)** So, let's go one more time to Add.
>
> **[5:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=354)** Then, let's click the Add button.
>
> **[5:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=357)** We have reached the breaking point, so let us just continue pressing the F10.
>
> **[6:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=361)** Now we see that we return a BadRequest.
>
> **[6:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=365)** Let's go back to the app, and here we can see the error, which says, the book was not added to your library.
>
> **[6:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=373)** So, this is how you would handle it from the web API part, but it would be even better if we can simply prevent the users from sending a BadRequest.
>
> **[6:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=382)** So, let us say, in this case, if the user doesn't provide a title, author, or description, he should not even be able to press the Add button.
>
> **[6:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=390)** But how can we do that?
>
> **[6:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=391)** So, let's go to Visual Code, and start writing some code.
>
> **[6:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=395)** In here, let us stop the app, and go to the new-book.component.html, close the terminal, and let's do that for title first.
>
> **[6:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=406)** So, I'll just write in here another div.
>
> **[6:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=409)** And then, this div is going to show up, so, ngIf, if we addBookForm, so, .controls, if the control title in the addBookForm .isInvalid.
>
> **[7:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=430)** But how do we know if it's invalid or not?
>
> **[7:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=432)** If we go to the addBookForm in the component.ts file, you see in here that the title is required.
>
> **[7:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=439)** So, if we don't have a value, it means that it's invalid, because we had defined in here that this field is a required field, so it must have a value.
>
> **[7:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=449)** Let's go back to the HTML.
>
> **[7:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=450)** If it's invalid, and, inside parenthesis, I'll just copy this part, then I'll say, .dirty, so if this field has some values, or .touched.
>
> **[7:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=472)** So, in case I have already clicked over this field.
>
> **[7:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=477)** In this case, what we want to do, is that we want to display an error inside this div.
>
> **[8:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=483)** So, I'll now check for the different kinds of errors, because if we check it from the component, we can have validators like required, or minimum length, et cetera.
>
> **[8:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=497)** So, now in here, I'll check for the required validator.
>
> **[8:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=500)** For that, I'll just write div, and then I'll write *ngIf, and then I'll just copy, and paste it here, and I'll say, if the errors is related to required, then just display down here, "Book title is required".
>
> **[8:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=525)** And then we can just scroll to the bottom in here, to the Add button, and we can add a condition in here to not display this button at all unless all the conditions are met.
>
> **[8:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=536)** So, for that we can write in here, in square brackets, disabled, which means disable this button if the addBookForm.pristine or invalid, so, addBookForm.invalid.
>
> **[9:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=558)** Let us save the changes, and run the application one more time, just to see what happens.
>
> **[9:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=566)** We can close the first one.
>
> **[9:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=568)** Let's go to the Add button.
>
> **[9:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=572)** Here we'll see that the Add button is disabled.
>
> **[9:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=576)** And if I click over Title, and then I just remove the cursor, you'll see that the book title is required.
>
> **[9:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=585)** Now, let us go back and do the same for the Author and Description.
>
> **[9:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=590)** So, I'll just close the debug console, scroll up in here.
>
> **[9:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=597)** First of all, let us format the code in here, so by pressing Control + Shift + P, and then choose the Toggle Word Wrap, so we have everything fit in the same screen.
>
> **[10:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=612)** And then we are going to just write in here, class, so the error displays in red, alert alert-danger.
>
> **[10:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=626)** Let us copy this div, go after the book author, paste it in here, and we can just replace the title with author.
>
> **[10:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=640)** So, this one here, this one, this one, this one.
>
> **[10:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=646)** Let's write in here, author.
>
> **[10:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=649)** Let us copy it one more time, scroll down after the description, and then just replace the author with description, so this one, this one, and this one, also this one.
>
> **[11:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=664)** So, "Book description is required".
>
> **[11:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=667)** But for description we have another condition as well.
>
> **[11:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=671)** The description needs to be at least 30 characters in length.
>
> **[11:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=676)** For that we can add another condition.
>
> **[11:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=680)** So, let us go back to the HTML file.
>
> **[11:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=683)** I'll just copy this one, and then paste it down here.
>
> **[11:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=687)** I'll not check for the error required in here, but for the error minlength, and then I'll just write in here, "Description needs to be at least 30 chars".
>
> **[11:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=704)** Let us save the changes, and go back to our app.
>
> **[11:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=708)** Let us refresh the browser.
>
> **[11:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=711)** So, if I click here, title is required.
>
> **[11:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=713)** If I click here, author is required.
>
> **[11:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=716)** If I click here, description is required.
>
> **[11:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=719)** Let me just enter some values.
>
> **[12:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=721)** It says that it needs to be at least 30 chars long, so I'll just enter enough chars.
>
> **[12:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=726)** Now I'll just enter an author, I'll enter a title, and now we see that the Add button was enabled, so let us now click the Add button.
>
> **[12:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=735)** We see that we reached the breaking point.
>
> **[12:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=737)** I'll just press F5.
>
> **[12:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-errors-in-angular?u=76281980&t=740)** Let's go back to the app, and we see that the book was just added.

> [!info]- Semantic Content
>
> **Code Keywords:** let (37), try, (2), catch, (2), continue (2), case, (2)
> **UI Navigation:** go to (9), scroll down (4), navigate to (1), scroll up (1), toggle (1)
> **Code Identifiers:** addbookform (5), showerror (4), onsubmit (2), ngif (2), isinvalid (1)
> **Env Vars:** api (4), html (4), f10 (3)
> **Cross-References:** go back to (5)
> **Definitions:** is a  (2), is an  (2), means that (1)
> **File Paths:** new-book.component.html (1), component.ts (1)
> **Tools:** terminal (2)


### 4. Implementing NgRx to an Existing Angular App

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why NgRx?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=0)** - [Narrator] Before we answer the why, let us answer the what.
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=5)** So, what is NgRx?
>
> **[0:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=7)** To understand NgRx, we need to first understand the second part, Rx.
>
> **[0:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=12)** Which is where everything starts from.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=14)** Rx, or RxJS, is a reactive extensions library for JavaScript.
>
> **[0:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=21)** So, RxJS is a library for reactive programming using observables to make it easier to compose asynchronous or callback-based code.
>
> **[0:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=33)** So, NgRx is a Rx powered state management library for Angular applications.
>
> **[0:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=41)** But which are the key NgRx concepts?
>
> **[0:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=44)** NgRx has four key concepts, which are store, state, reducer, and actions.
>
> **[0:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=52)** To put it simply, store is the database of our application.
>
> **[0:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=56)** It stores different states defined in our app.
>
> **[1:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=60)** And state is a single immutable data structure.
>
> **[1:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=65)** So states are what make up the store.
>
> **[1:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=69)** And the NgRx store serves as a client-side single source of truth.
>
> **[1:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=76)** If the store is the database of the application, the reducers are the tables.
>
> **[1:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=82)** The reducer is a pure function that accepts two parameters.
>
> **[1:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=87)** An action, and the previous state with a type and optional data associated with the event.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=95)** So, store keeps the state of the application, and reducers get the state of the store.
>
> **[1:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=101)** But how do we update the store when we need to?
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=105)** That is the role of the actions.
>
> **[1:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=108)** Actions represent payloads of information that are dispatched to the store from the application and are usually triggered by user interaction.
>
> **[1:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=118)** Now, to recap a few points.
>
> **[2:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=121)** The store stores the whole state.
>
> **[2:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=125)** The reducers return fragments of the state.
>
> **[2:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=129)** And actions are pre-defined user-triggered events that define how a state should change.
>
> **[2:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=137)** Now let us illustrate this with an example to understand it even better.
>
> **[2:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=143)** So let's say we have an app.
>
> **[2:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=145)** And we have the view, or the UI.
>
> **[2:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=147)** And then here we have a button.
>
> **[2:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=150)** Now, from this button we can trigger an event.
>
> **[2:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=154)** So, when we click a button we use an action to define how we want the state to change because we said that actions represent payloads of information that are dispatched to the store from the application and are usually triggered by user interaction.
>
> **[2:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=171)** So, in this case, we button click.
>
> **[2:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=175)** Now we dispatch the action to the store by using the dispatch method.
>
> **[3:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=180)** Now, here we have a reducer, which we have said is a pure function that accepts two parameters.
>
> **[3:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=187)** An action, and the previous state with a type and optional data associated with the event.
>
> **[3:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/why-ngrx?u=76281980&t=194)** The reducer will take these two parameters and return a new state which then we use to update the UI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), from. (1), case, (1)
> **Definitions:** is a  (6)
> **CLI Commands:** make (2)
> **Speakers:** - [narrator] (1)

#### NgRx actions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=0)** - [Instructor] Actions are one of the main building blocks in NgRx.
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=5)** Actions express unique events that happen throughout your application.
>
> **[0:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=10)** So, let's go to Visual Code and create our first actions.
>
> **[0:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=15)** In here, before we start doing anything, let us install all the necessary packages.
>
> **[0:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=20)** So, for that, right-click on ClientApp, and then open in Terminal.
>
> **[0:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=27)** Let us clear the terminal in here by pressing cls, which stands for clear, and then type npm install.
>
> **[0:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=37)** We are going to install the NgRx/core, then the NgRx/effects, we need this library for handling the side effects in our apps.
>
> **[0:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=52)** Then the NgRx/store, and then, at the end, write --save.
>
> **[1:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=62)** Now, let's go inside our ClientApp folder, then src, then app.
>
> **[1:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=67)** Inside here, we are going to create a new folder, which is going to hold all the NgRx-related code.
>
> **[1:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=74)** So, let's create a folder and name this folder store.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=80)** Then, inside here, we are going to create the actions.
>
> **[1:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=83)** So, for that, let's just create a new file.
>
> **[1:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=87)** We are going to name this file book.actions.ts.
>
> **[1:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=94)** Then, let us create another file for holding all the action-related type constants.
>
> **[1:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=99)** So, I'll just write action.types.ts.
>
> **[1:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=106)** Now, you don't have to create this file, but we are going to create this file because it's easier to maintain the type of related issues.
>
> **[1:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=114)** So, for that, we are going to create some constants in here, and then use 'em throughout the application.
>
> **[2:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=120)** So, let us start with the first one.
>
> **[2:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=122)** For that, we'll just write in here export, const, LOAD_BOOKS because we are going to first implement the load all books feature.
>
> **[2:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=134)** So, load all books, and then we can put the same value in here.
>
> **[2:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=143)** We also need another constant for when we successfully return all the books.
>
> **[2:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=148)** So, for that, export, const, we can just copy this one up here, and just add, at the end, success.
>
> **[2:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=162)** Let's copy this one and paste it in here.
>
> **[2:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=166)** Now, let us go to the book.actions.ts file, and the first thing that we are going to do in here is that we are going to import the action, so import the action from the NgRx store, and then, let us import all the types.
>
> **[3:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=184)** So, for that, we can just write import all as types from, then ./action.types.
>
> **[3:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=197)** Now it's time to create our first actions, so, I'll just write in here export, class, loadBooksAction.
>
> **[3:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=209)** This will implement the action base class, and it will simply have in here a readonly type of types.LOAD_BOOKS.
>
> **[3:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=221)** Now, normally, each action should have a constructor, but in this case, we don't pass any parameters, so we can just leave it empty, or we can create a constructor and pass nothing, just so we know that we need a constructor in here normally.
>
> **[3:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=236)** So now, let's create another action in here.
>
> **[3:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=238)** For that, I'll just write export, class, loadBooksSuccessAction.
>
> **[4:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=250)** This will implement the action base class, and the readonly type in here is going to be, so readonly type equal to types.LOAD_BOOKS_SUCCESS,
>
> **[4:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=265)** and inside the constructor, in here we are going to pass a payload.
>
> **[4:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=269)** The payload is going to be a list, or an array, of books.
>
> **[4:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=273)** So, let's write in here constructor, public payload,
>
> **[4:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-actions?u=76281980&t=283)** and the payload is going to be of type book array, and that's it for this part, let's go now to the next one, and see how we can configure the store.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), export, (4), class, (4), pass (3), const (2)
> **Prerequisites:** install (3), before we start (1), configure (1)
> **File Paths:** book.actions.ts (2), action.types.ts (1)
> **Env Vars:** load_books (2), load_books_success (1)
> **UI Navigation:** go to (2), right-click (1)
> **Code Identifiers:** loadbooksaction (1), loadbookssuccessaction (1)
> **Tools:** terminal (2)
> **CLI Commands:** npm (1)

#### NgRx store
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=0)** - To handle the store side effects, we are going to create effect functions.
>
> **[0:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=6)** So, let's see this in action.
>
> **[0:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=9)** In here, go inside the store folder, which you can find inside src, app, and then store.
>
> **[0:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=17)** In here, we are going to create a new file named book.effects.ts, and let's start creating this class.
>
> **[0:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=29)** So, we are going to write export, class, BookEffects, and then, inside here, we are going to have a constructor where we are going to inject, first of all, the service, because now we don't want our components to directly interact with the services, we want the effects to do that for us.
>
> **[0:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=52)** So here, let us write private, service, BookService, and here, let us also inject the actions.
>
> **[1:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=62)** So, for that, we write in here, private, actions.
>
> **[1:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=68)** Let's put a dollar sign, so we know that it's something related to observables, and then we write in here, actions.
>
> **[1:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=80)** Let's go up here and import the actions, so, import actions from NgRx/effects,
>
> **[1:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=91)** and that's everything we need to inject in here.
>
> **[1:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=93)** So now, let us create our first effect.
>
> **[1:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=97)** I'll just write in here @effect.
>
> **[1:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=102)** This is a method, so, loadBooks, let's put a dollar sign in here, and it will return an observable of action, and where do we get the action for?
>
> **[1:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=114)** We get the action from the NgRx store.
>
> **[1:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=118)** Just write in here, import action from NgRx, and then store.
>
> **[2:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=126)** So, this is going to be this.actions, that we just injected, .pipe, we are going to use the pipe method, and then, inside here, we are going place some parameters.
>
> **[2:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=141)** The first one is going to be the type of the action, so, ofType, let's import all the types.
>
> **[2:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=150)** So, for that, we just write import all as types from your ./action.types.
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=163)** Let us also import the book actions because we are going to use 'em as well, so.
>
> **[2:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=167)** Import all as bookActions from ./book.actions,
>
> **[2:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=179)** and that's it, so here, the type is going to be bookActions.loadBooksAction, and here's a parameter,
>
> **[3:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=192)** we are going to press types.LOAD_BOOKS.
>
> **[3:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=198)** Here now we are go to use the mergeMap method, so mergeMap, and then, inside the mergeMap, we will say that goes to, now it's time to use the service.
>
> **[3:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=213)** Let us add the ofType method up to the NgRx effects, and the mergeMap is part of the RxJS operators, so I'll just write in here, import mergeMap from RxJS/operators, that's it.
>
> **[3:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=239)** So here now, in line 17, let's press enter.
>
> **[4:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=242)** We are going to write this.service.getAllBooks.pipe,
>
> **[4:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=252)** and then I want to map the result, which is going to be books to a new, access our bookActions, .loadBooksSuccessAction,
>
> **[4:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=270)** and then I want to pass as a parameter the books result.
>
> **[4:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-store?u=76281980&t=275)** We are missing the map, so, let us just add the map, in here, at line three, and that's it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), private (2), this. (2), class. (1), export, (1)
> **Code Identifiers:** mergemap (5), bookactions (3), oftype (2), loadbooks (1), loadbooksaction (1)
> **File Paths:** book.effects.ts (1)
> **CLI Commands:** find (1)
> **Env Vars:** load_books (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - to (1)

#### NgRx reducers
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=0)** - [Instructor] Now we are going to create a reducer to handle our first action.
>
> **[0:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=4)** So let us go to Visual Code, then see that in action.
>
> **[0:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=8)** So you will go inside the ClientApp, source, then app, store, and here, we are going to create a new file.
>
> **[0:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=19)** We are going to name this file book.reducer.ts, and then, we are going to import all the book actions and the action types.
>
> **[0:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=33)** So for that, let's write in here import, all as bookActions from, let's just write book.actions, and then import all as types from dot action.types.
>
> **[0:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=58)** Now, for us to be able to use the book actions, we need to export them.
>
> **[1:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=63)** So, let us go to the book.actions.ts file and, at the bottom, write export type, so we want to export Actions is equal to loadBookAction pipe loadBooksSuccessAction.
>
> **[1:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=84)** Let's save the changes and go back to the reducer file.
>
> **[1:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=88)** In here, now, we are going to create a function because we know that reducers are pure functions.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=95)** So for that, we are going to write export function BookReducer, and we know that a reducer takes two parameters, the first one is the state, and the second one is the action.
>
> **[1:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=113)** So, the action is going to be the bookActions.Action that we just created, but we have not defined the state yet.
>
> **[2:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=124)** So, let us define the state.
>
> **[2:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=126)** For that, let's create, inside the store folder, a new file, app.state.ts.
>
> **[2:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=135)** In the app, it is going to be on export interface AppState, and the field is going to be a readonly, so just write in here readonly books, and then, Book array.
>
> **[2:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=155)** Let us save the changes and go back to the reducer.
>
> **[2:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=159)** So now, inside this file, let us define the initial state of the state.
>
> **[2:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=165)** So for that, let's write in here export const initialState, which is of type AppState, and the value is at books or just an empty array.
>
> **[3:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=185)** So let's put an equal sign in here, and now, everything is set up.
>
> **[3:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=190)** So state has the initial value of the initialState.
>
> **[3:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=196)** Now let's write curly brackets.
>
> **[3:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=200)** Inside, you are going to have a switch because, in here, we need to check for the action type.
>
> **[3:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=206)** So the switch is going to be for the action.type, and in here, we need to have a case.
>
> **[3:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=212)** So, in case, we have a types.Load_Books_Success.
>
> **[3:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=219)** What we want to do is that we just want to return.
>
> **[3:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=223)** So return, put three dots in here, state, and then books is going to be the action.payload.
>
> **[3:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=234)** Now, where does this payload come from?
>
> **[3:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=237)** Let's check for the Load_Books_Success.
>
> **[4:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=242)** For that, let's go to the book.effects.
>
> **[4:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=245)** So here, we see that the loadBooksSuccessAction and the payload is the books, and we say that the parameter is books.
>
> **[4:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=253)** So when we say here, in the reducer, that we want to return the action.payload, we are actually returning the books that we get from that result.
>
> **[4:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=262)** Let us also have a default case as well.
>
> **[4:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/ngrx-reducers?u=76281980&t=264)** So for that, we just write default, and then, we just return the state, and that's it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), type, (2), function (2), switch (2), import, (1)
> **Code Identifiers:** bookactions (2), loadbookssuccessaction (2), initialstate (2), loadbookaction (1)
> **File Paths:** book.reducer.ts (1), book.actions.ts (1), app.state.ts (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Connecting the dots
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=0)** - [Instructor] Now that we have set up the actions, store and reducers, it is time to connect the dots and see it in action.
>
> **[0:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=8)** So, let us go to visual code.
>
> **[0:12](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=12)** The first thing that we need to do in here is that we need to configure the store module and the effects module and the app.module.ts file.
>
> **[0:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=22)** So, inside source, go inside app, and then, scroll to the app.module.ts.
>
> **[0:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=32)** Then, scroll down to the imports, and after the router module, write storeModule.forRoot
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=45)** because this is our root module.
>
> **[0:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=48)** And then in here inside curly brackets, define a name for the applications state.
>
> **[0:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=53)** So, I'll just name it applicationState and then, bookReducer.
>
> **[1:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=64)** So, let us just write in here EffectsModule.forRoot and then inside square brackets, write BookEffects.
>
> **[1:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=77)** So we have done the configuration, let us go to our books component and see how we can get the data using the ngrx instead of using the service.
>
> **[1:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=88)** So, let's go to components then books and then go inside the books.component.ts file.
>
> **[1:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=97)** Here, we are going to create another property.
>
> **[1:40](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=100)** Public books, we are going to put a dollar sign in here so we know it's an observable any.
>
> **[1:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=110)** Now, let us remove the service from here.
>
> **[1:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=113)** So I'll just remove it.
>
> **[1:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=116)** And we are going to inject the store.
>
> **[1:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=119)** To inject the store, write private then store, of type store, which takes us a parameter, the AppState.
>
> **[2:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=134)** Now, let us import this store.
>
> **[2:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=136)** So the store belongs to the ngrx/store.
>
> **[2:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=141)** And then inside here, this.books is equal to this.store.select.
>
> **[2:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=153)** We want to get the applicationState.
>
> **[2:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=157)** So the name that you provide in here needs to be the same like the name, predefined in here.
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=163)** So applicationState in here needs to be applicationState.
>
> **[2:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=168)** So basically, we are reading the applicationState from the ngrx store.
>
> **[2:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=174)** Next, let us comment out all the code from the ngOnInit, so, control KC.
>
> **[3:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=181)** And then here, let us dispatch an action.
>
> **[3:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=184)** So for that, we just write this.store.dispatch.
>
> **[3:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=193)** And the action is going to be a book action so, let us go to the top.
>
> **[3:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=198)** And import all of them, so import all as bookActions
>
> **[3:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=206)** from forward slash dot dot slash one more.
>
> **[3:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=215)** Let's go inside the store and slash, book.actions.
>
> **[3:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=224)** Let us scroll down to the ngOnInit.
>
> **[3:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=227)** And here now, we are going to write new bookActions.loadBooksAction.
>
> **[3:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=236)** And that's it.
>
> **[3:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=238)** So now that we are dispatching an action, let us subscribe to the store so we can catch all the changes.
>
> **[4:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=245)** For that, we just write in here this.books.subscribe.
>
> **[4:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=251)** And we are going to get the state from here.
>
> **[4:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=254)** So state is of type AppState, which is the result.
>
> **[4:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=260)** And then we write this.books is equal to state.books.
>
> **[4:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=271)** And that's it.
>
> **[4:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=273)** Let us save the changes and run the application to see if everything works as expected.
>
> **[4:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=279)** So, go to the debug tab in here and then click the play button.
>
> **[4:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=286)** So, the app runs successfully, let's go to the books tab.
>
> **[4:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=290)** And then here, we see that all books were loaded successfully.
>
> **[4:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/connecting-the-dots?u=76281980&t=294)** But the books now are not being called directly from a service but we are using the ngrx instead.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), module (6), this. (5), public (1), private (1)
> **Code Identifiers:** applicationstate (5), forroot (2), ngoninit (2), bookactions (2), storemodule (1)
> **UI Navigation:** go to (6), scroll down (2)
> **File Paths:** app.module.ts (2), books.component.ts (1)
> **Prerequisites:** set up (1), configure (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Delete a book
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=5)** - [Instructor] Now it's time for a challenge.
>
> **[0:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=8)** We learned how to set up the Azure XStore, how to set up reducers and actions, and we combined those three to show all the books.
>
> **[0:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=18)** So now, instead of directly using this service in the books components, we use the NgRx.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=25)** Now you should use the same process to delete a book.
>
> **[0:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=29)** So instead of using the service in the Delete Book component, you should use the NgRx.
>
> **[0:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=35)** For that, you need to update the reducer function, update the actions file, and then inject the Store in the Delete Book component.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/challenge-delete-a-book?u=76281980&t=45)** So, give it a try and then be sure to watch the solution video to see how I solve it.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), function (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Delete a book
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=0)** - [Instructor] So, I asked you to delete a book using the NgRx.
>
> **[0:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=10)** Now, let us walk through my solution together.
>
> **[0:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=14)** In here, let's go inside the ClientApp, and source, app, and store.
>
> **[0:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=21)** Let us start with the actiontypes.ts.
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=25)** And here, we are going to add two more constants.
>
> **[0:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=28)** So, let us copy these two lines and paste them down here.
>
> **[0:34](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=34)** We are going to name this one Delete_Book, and the other one Delete_Book_Success.
>
> **[0:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=47)** Let us change the string values as well.
>
> **[0:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=51)** So Delete_Book, Delete, and Delete, and Delete_Book_Success.
>
> **[0:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=59)** Now, let us go to the actions file, and here, add two actions.
>
> **[1:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=65)** So, the first action's going to be export class deleteBookAction, which implements the Action base class, and the type is going to be readonly type is equal to types.Delete_Book, and the payload for this constructor is going to be of type number because we are going to pass the book ID.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=96)** So, let us just write in here public_payload of type number.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=105)** Let us create one more action for the Success.
>
> **[1:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=109)** So just below here, change the name to deleteBookSuccessAction and then the type to Delete_Book_Success and leave the constructor the same.
>
> **[2:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=125)** For us to be able to use these actions, let us add them in the Action section.
>
> **[2:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=131)** So you write deleteBookAction, then pipe, deleteBookSuccessAction.
>
> **[2:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=141)** Let us save the changes and go to the effect file.
>
> **[2:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=147)** If you are going to add another effect, I'll just copy these lines and paste them here.
>
> **[2:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=155)** Let us change the name to deleteBook, then go to the other line.
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=163)** Here, instead of using the loadBooks action, we're going to use the deleteBook action.
>
> **[2:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=170)** The type is going to be Delete_Book.
>
> **[2:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=174)** Then, from this.service, we are going to use the deleteBook method, which takes us as a parameter the book ID.
>
> **[3:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=181)** So here in the mergeMap, let's write action, and then, as a parameter, we are going to pass action.payload, and we have defined that the payload for this action is a number.
>
> **[3:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=203)** You have here, define the type number.
>
> **[3:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=208)** So next, here in the book actions, instead of loading the loadBooksSuccessAction, we need to change that to deleteBookSuccessAction, and here, from books, just a single book, and here, we are just going to pass the book.id.
>
> **[3:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=230)** The type of book is, of course, the book, or you can just write any, it will work in any case.
>
> **[3:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=239)** So that's all you need to do in the Effect, Actions, and Types.
>
> **[4:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=244)** Now, let us go to the reducer.
>
> **[4:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=248)** Here, we are going to add a new case.
>
> **[4:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=250)** So, here we write case, the case of types is Delete_Book_Success.
>
> **[4:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=258)** Then, we are going to return, so in here, we write return, three dots,state, then the books is going to be all the books from the status, state.books, but we are going to filter the one that we want to delete.
>
> **[4:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=279)** So filter, book, that goes to book.id is different from the action.payload, and that's it.
>
> **[4:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=295)** Now, let us go to our component.
>
> **[5:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=301)** So we go inside the components, then delete-book, then delete-bookcomponent.ts.
>
> **[5:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=310)** In here, scroll down to the deleteBook method.
>
> **[5:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=313)** We are going to replace this method, which directly uses this.service with the NgRx.
>
> **[5:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=319)** So, I'll just Control + K + C to comment out this line, and before we do anything, let us inject the store in here.
>
> **[5:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=327)** So, private store Store, and then, in here, AppState.
>
> **[5:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=339)** Let's import the Store from the ngrx/store, and then, scroll down to the book method.
>
> **[5:50](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=350)** So here, we can write this.store.dispatch, and we are going to dispatch new.
>
> **[5:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=359)** Let us import the actions up here.
>
> **[6:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=361)** So now, I'll just write import all as actions or bookActions from, and then dot, let us go one step back, one more, and then go to store slash book.actions.
>
> **[6:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=387)** Let us now scroll down to our method.
>
> **[6:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=390)** So new, bookActions.deleteBookAction, and we are going to pass as a parameter or as a payload the id.
>
> **[6:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=402)** So, let us now save the changes and run the application and go to the Debug tab and press the Play button.
>
> **[6:53](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=413)** So the app ran successfully.
>
> **[6:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=415)** Let's go to Books, and here, we are going to delete the first books, I'll just click the Delete button, then I'll just click Approve.
>
> **[7:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=424)** Now, let us go to All Books, and we see that that book is deleted.
>
> **[7:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/solution-delete-a-book?u=76281980&t=430)** Let us delete the last one, let's approve, go back to Books, we see that the book is now removed, and we did that buy using the NgRx instead of using the service directly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), delete (9), pass (4), this. (3), case. (2)
> **Code Identifiers:** deletebook (4), deletebookaction (3), deletebooksuccessaction (3), bookactions (2), public_payload (1)
> **UI Navigation:** go to (8), scroll down (3)
> **File Paths:** actiontypes.ts (1), delete-bookcomponent.ts (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Implementing Authentication in Your Angular App

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Setting up Auth0
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=0)** - Having secure applications is really important.
>
> **[0:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=4)** And one of the key features when securing apps is to authenticate users.
>
> **[0:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=8)** For authentication, we are going to use the Auth0 library and on this part we are going to learn it how to configure in an Angular application.
>
> **[0:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=18)** So, let's go to [auth0.com](https://auth0.com) to create an account.
>
> **[0:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=22)** In here go to sign up, if you don't have an account, and then you can sign up either with your email and a password, or, by using third party apps.
>
> **[0:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=32)** So, I'm my case I'll be using GitHub, but you can use Google or Microsoft, as well.
>
> **[0:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=38)** So we need to authorize the Auth0, and our account was created.
>
> **[0:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=44)** Once you are in here, click the create application button that shows the application type, in our case our app is a single page application, so I'll just chose second tile Also, don't forget to provide a name, so I'll just name it Angular WebAPI alt and then click the create button.
>
> **[1:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=66)** In here scroll down and choose the angular tile.
>
> **[1:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=69)** And here you have all the steps that you need to take to configure Auth0 in an Angular application.
>
> **[1:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=75)** So, let us start with the first one.
>
> **[1:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=79)** Let's scroll down in here and from the application settings we can get the domain and client ID.
>
> **[1:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=88)** Let's scroll down to the callback URL.
>
> **[1:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=92)** Next we need to configure the callback URL, so let us just copy this thing from here, then go to the second tab and scroll down to the allowed callback URLs.
>
> **[1:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=107)** Paste have to URL in here, change the HTTP to HTTPS, and the port 3000, to our port which is 5001.
>
> **[1:59](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=119)** Now, let us go back to the other tab, and scroll down to the configure logout URL, let us just copy this value, go back to the app details, and scroll down to the allowed logout URLs, and here just paste it, change the HTTP to HTTPS, and then deport to our port, which is 5001.
>
> **[2:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=151)** Let's go back one more time, scroll down in here, and that's all we need to set up the application details.
>
> **[2:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=161)** Before you move to the next part, make sure that you save all the changes.
>
> **[2:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-auth0?u=76281980&t=165)** So, scroll down and then click the save changes button.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (8), go to (3)
> **Code Keywords:** let (8), type, (1)
> **Env Vars:** url (4), http (2), https (2)
> **Prerequisites:** configure (4), set up (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **URLs:** [auth0.com](https://auth0.com) (1)
> **Ports:** port 3000 (1)

#### Setting up an authentication service
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=0)** - Now that we've set up the Auth0 account, let us set up the authentication service.
>
> **[0:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=6)** But before we do so, let us install the necessary package.
>
> **[0:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=11)** So, let's go to Visual Code and see this in action.
>
> **[0:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=15)** In here, right click on the ClientApp and then choose the open in Terminal option.
>
> **[0:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=21)** To install the package, write npm install @auth0/auth0-spa-js
>
> **[0:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=37)** and then use the --save flag.
>
> **[0:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=43)** So, the package was installed.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=45)** Now, let us generate the service which we are going to use to authenticate the users.
>
> **[0:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=49)** So, inside the ClientApp, go inside the src folder, and then inside the the app folder, then go inside the services folder, right click, and open it in Terminal.
>
> **[1:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=66)** To generate the service we are going to use the Angular CLI, so for that write ng, g which stands for generate, then s for service, and the name of the service is going to be auth service, so, you can just name it auth.
>
> **[1:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=85)** Press enter and you will see now that inside the services folder, we have the auth.service.ts file which has the injectable decorator.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=96)** Now, we can create this authentication service from scratch but we are going to use the default code which comes with the Auth0 because it has all the methods that we need.
>
> **[1:47](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=107)** So, let's go back to our profile, and here scroll down to the add an authentication service section and copy all this code.
>
> **[2:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=121)** Let's go back to Visual Code, select all the coding here, remove it and paste the new code.
>
> **[2:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=130)** Now, in this file we have four methods.
>
> **[2:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=134)** The logout method is used to log out the users, and we would use this method when we want to, for example, redirect the users after they have successfully signed in.
>
> **[2:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=147)** Then we have the login method to log in the users.
>
> **[2:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=152)** We have the localAuthSetup, which checks the user session.
>
> **[2:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=158)** We have the getUser method and this method is used to get the user profile details.
>
> **[2:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=165)** So, we created the service, but for us to be able to use this service, we need to configure it in the app.module.ts file which is also known as the configuration file in Angular.
>
> **[2:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=178)** So, let's go to that file, app.module.ts, scroll down in here to the providers section and after the BookService, let us set our new service, which is the AuthService.
>
> **[3:19](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/setting-up-an-authentication-service?u=76281980&t=199)** Let us save the changes, and on the next part we'll learn how to use this service to authenticate the users.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), module (2)
> **Prerequisites:** install (3), set up (2), configure (1)
> **UI Navigation:** go to (2), scroll down (2), click on (1)
> **File Paths:** app.module.ts (2), auth.service.ts (1)
> **Code Identifiers:** localauthsetup (1), getuser (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **Definitions:** stands for (1), known as (1)

#### Handling authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=0)** - [Instructor] We created the Auth Zero account and the authentication service.
>
> **[0:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=5)** So now, it's time to use the service in our app.
>
> **[0:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=9)** Currently in our app, any user can just come here, add a book, update a book, or even see all the books.
>
> **[0:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=20)** Now but, we should allow only the authenticated users to interact with our data.
>
> **[0:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=27)** So let's go to Visual Code and see this in action.
>
> **[0:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=30)** In here we'll go inside the ClientApp, source, app, components, and then nav-menu.
>
> **[0:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=41)** Let us first go to the nav-menu.component.ts file and here we need to inject the authentication service.
>
> **[0:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=49)** For that we write, constructor, then private.
>
> **[0:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=56)** We are going to name this service auth, and then AuthService.
>
> **[1:02](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=62)** Now let us go to our nav-menu.component.html file.
>
> **[1:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=67)** We can close the debug window because we don't need that window.
>
> **[1:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=73)** And then here, what we want to do is that we want to display only the buttons that the user needs to see.
>
> **[1:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=78)** So for example, if the user is not authenticated, here on the nav bar we just want to show a button which says log in.
>
> **[1:27](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=87)** And after the user is logged in then we want to show the Add, Books, and a log out button.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=95)** So let's go to the nav-menu.html file and here, scroll down to the Books list item.
>
> **[1:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=104)** Let's copy this list item and paste it down here two times.
>
> **[1:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=112)** Now let us update the text of the first one to Log In, and the text of the second one to Log Out.
>
> **[2:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=121)** Let us remove the router link from here because we want to have a click event.
>
> **[2:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=126)** So whenever the user clicks the log in button, we want to execute the log in method from the authentication service.
>
> **[2:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=135)** So, auth.login.
>
> **[2:18](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=138)** Let's do the same for the log out button.
>
> **[2:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=141)** So in here we write click, and then auth.logout.
>
> **[2:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=148)** So if we go back to our app, we are going to see the log in and the log out buttons.
>
> **[2:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=155)** Now if you want to see them based in a condition.
>
> **[2:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=158)** So if the user is logged in, then we don't want to see the log in button.
>
> **[2:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=163)** And if the user is logged out, we don't want to see the log out button.
>
> **[2:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=168)** So let us go back one more time to our html file, and in here write we want to display this list item only if, so ngif, the user is authenticated.
>
> **[3:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=183)** So auth.loggedIn.
>
> **[3:10](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=190)** And the same way, we want to display the Books and the Add buttons.
>
> **[3:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=197)** So let us just paste the same code up here and in line 30, where we have the Books List item.
>
> **[3:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=205)** But on the other hand, we want to display the log in button when the user is not logged in.
>
> **[3:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=210)** So, just write an !, which means that this button will show up if the user is not logged in.
>
> **[3:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=219)** Before we test our app we are missing one more piece in the component.ts file.
>
> **[3:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=226)** So, let us go in here and implement the OnInit, let's write in here ng OnInit.
>
> **[4:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=240)** And in here what we need to do that we need to handle the authentication call back.
>
> **[4:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=244)** So for that we just write this.auth.handleAuthCallback.
>
> **[4:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=253)** Let us import the OnInit, which belongs to the angular/core.
>
> **[4:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=261)** Let us save the code and go back to our app.
>
> **[4:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=264)** So now in here we can see only the Log in button because we are not logged in.
>
> **[4:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=268)** So let us click this button.
>
> **[4:32](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=272)** We get a pop-up to log in using our credentials, so I'll just log in using the Google account.
>
> **[4:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=278)** Now that we were logged in we can see all the three buttons.
>
> **[4:43](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=283)** We can click the Log out button to log out.
>
> **[4:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=288)** And now we just wee the Log in button.
>
> **[4:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=291)** But we still have a problem.
>
> **[4:54](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=294)** So for example, if I write here in the URL/books, even though we are not logged in we are going to see all the books.
>
> **[5:05](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/handling-authentication?u=76281980&t=305)** Let's fix that on the next part.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), private (1), if, (1), this. (1)
> **UI Navigation:** go to (4), scroll down (1)
> **File Paths:** nav-menu.component.ts (1), nav-menu.component.html (1), nav-menu.html (1), component.ts (1)
> **Code Identifiers:** loggedin (1), handleauthcallback (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### AuthGuard
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=0)** - [Instructor] By implementing an AuthGuard, we can prevent the users that are not authenticated to access our app through a valid URL.
>
> **[0:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=9)** So, let's go to visual code and see this in action.
>
> **[0:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=13)** In here, right-click on the ClientApp, then Open in Terminal.
>
> **[0:20](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=20)** To generate an AuthGuard we are going to use the angular CLI.
>
> **[0:23](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=23)** So for that we just write in here ng generate guard.
>
> **[0:29](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=29)** And we are going to name it auth.
>
> **[0:31](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=31)** From the options that we have, in here we are going to choose by pressing the space bar, the first one, and then press enter.
>
> **[0:39](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=39)** If we go inside the ClientApp folder, then source, app, here we are going to see the authguard.ts file, which currently returns only a true value so let us modify the code in here.
>
> **[0:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=55)** Fist of all, press control, shift, P.
>
> **[0:58](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=58)** And then, search for the Toggle Word Wrap.
>
> **[1:04](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=64)** We can close the terminal.
>
> **[1:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=67)** Now let us start writing some code.
>
> **[1:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=69)** So, let us remove the return true.
>
> **[1:13](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=73)** Next we need to inject the authentication service.
>
> **[1:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=77)** To inject the authentication service, we need to create a constructor, so here we write private auth AuthService, and then curly brackets at the end.
>
> **[1:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=90)** In line 16, so inside the canActivate method, write return this.auth service .isAuthenticated.pipe.
>
> **[1:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=105)** And inside the pipe method we are going to use the tap method.
>
> **[1:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=111)** And then here we write loggedIn, so we check if the user is logged in or not.
>
> **[1:57](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=117)** And then, if the user is not logged in, then what we do in here is that we just write this.auth.login, redirect them to the login page.
>
> **[2:14](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=134)** So in this case will be the login pop up.
>
> **[2:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=137)** So state.url.
>
> **[2:24](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=144)** And that's it.
>
> **[2:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=145)** Let's import the tap, so that's going to be from the rxjs/operators.
>
> **[2:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=153)** Now, let us save the changes, and to use this AuthGuard, we need to go to the app.module.ts file.
>
> **[2:42](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=162)** And then, scroll down to the imports array.
>
> **[2:46](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=166)** Here we have the RouterModule.
>
> **[2:49](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=169)** And just after the component we can write comma, canActivate.
>
> **[2:56](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=176)** Then, inside, square brackets write AuthGuard.
>
> **[3:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=181)** Let us import the necessary name space which is the .authguard.
>
> **[3:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=187)** And that's it.
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=188)** So, let us do the same for the other paths as well, so we can do that for NewBook.
>
> **[3:17](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=197)** Then for UpdateBook.
>
> **[3:21](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=201)** Or Delete and for ShowBook.
>
> **[3:25](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=205)** Let us save the changes and run our application.
>
> **[3:28](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=208)** So go to the Debug tab, and then press the Start Debugging button.
>
> **[3:35](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=215)** So in here we see that we are not authenticated.
>
> **[3:37](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=217)** Now, let's go to the URL and write in here /books, and because we are not authenticated and we won't access a URL which is being guarded, in this case we should be getting the login pop up.
>
> **[3:52](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=232)** So, let's press enter.
>
> **[3:55](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=235)** So, even though we see that we are not getting the data, we are not getting a pop up menu to log in.
>
> **[4:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=243)** Let's go to our AuthGuard and see if we are missing anything.
>
> **[4:07](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=247)** In here, scroll down to the canActivate method.
>
> **[4:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=251)** And here we see that we are checking if the user is logged in.
>
> **[4:15](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=255)** Now, let us just write in here, if not loggedIn, then save the changes.
>
> **[4:22](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=262)** So, this means that is the user is not authenticated but he tries to access a URL which is being guarded, then we direct them to the log in page.
>
> **[4:33](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=273)** So let us restart out app.
>
> **[4:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=278)** So, we are not authenticated.
>
> **[4:41](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=281)** Let's write in here books.
>
> **[4:44](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=284)** So now we see that we get the authentication pop up.
>
> **[4:48](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=288)** Let us log in using Google.
>
> **[4:51](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/authguard?u=76281980&t=291)** So now we are logged in, we can see the books that we wanted to access, and also we can see the log out button in here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), this. (2), private (1), module (1), delete (1)
> **UI Navigation:** go to (5), scroll down (2), right-click (1), toggle (1)
> **Code Identifiers:** canactivate (3), loggedin (2), isauthenticated (1)
> **Env Vars:** url (4), cli (1)
> **File Paths:** authguard.ts (1), app.module.ts (1)
> **Tools:** terminal (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Where to go next
> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=1)** - Thanks for joining me for this course.
>
> **[0:03](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=3)** So far, we have build a functioning app enabler.
>
> **[0:06](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=6)** But, this is far from the end of the journey.
>
> **[0:09](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=9)** There is so much more you can do.
>
> **[0:11](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=11)** So feel free to play around and experiment with the app we developed together.
>
> **[0:16](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=16)** For instance, you could try to implement more features using the NgRx library, like getting a single book or updating a book.
>
> **[0:26](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=26)** The fun in development is trying new things.
>
> **[0:30](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=30)** In the meantime, if you have further questions that were not answered during this course, you can reach out to me on Twitter and LinkedIn.
>
> **[0:38](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=38)** And if you want to learn more about .NET, feel free to check out my other LinkedIn learning courses, YouTube channel and my blog.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-asp-dot-net-core-applications/where-to-go-next?u=76281980&t=45)** Thanks and (speaking foreign language).

> [!info]- Semantic Content
>
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