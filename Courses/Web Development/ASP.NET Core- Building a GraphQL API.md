---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: asp-dot-net-core-building-a-graphql-api
url: "https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api"
duration_minutes: 98
duration: 1h 38m
level: Intermediate
updated: 1/27/2022
learners: 27378
skills:
  - API Development
  - ASP.NET Core
  - GraphQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHKGBsyOnB6Hw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643138871864?e=2147483647&amp;v=beta&amp;t=L8EaVW3Re-UhMfodYl7qccMHkUT6t85Jr21OGEDzOQU"
linkedin_topic: Web Development
learning_paths:
  - '[Getting Started as an ASP.NET Core Developer](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20as%20an%20ASP.NET%20Core%20Developer.md)'
prev_courses:
  - '[ASP.NET Core in .NET 6- Dependency Injection](ASP.NET%20Core%20in%20.NET%206-%20Dependency%20Injection.md)'
next_courses:
  - '[Building Web APIs with ASP.NET Core 8](Building%20Web%20APIs%20with%20ASP.NET%20Core%208.md)'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":8,"total":9,"prev":"ASP.NET Core in .NET 6- Dependency Injection","next":"Building Web APIs with ASP.NET Core 8"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/api-development
  - skill/asp-net-core
  - skill/graphql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/ASP.NET%20Core-%20Building%20a%20GraphQL%20API.md)

![ASP.NET Core: Building a GraphQL API](https://media.licdn.com/dms/image/v2/C560DAQHKGBsyOnB6Hw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643138871864?e=2147483647&amp;v=beta&amp;t=L8EaVW3Re-UhMfodYl7qccMHkUT6t85Jr21OGEDzOQU)

# ASP.NET Core: Building a GraphQL API

> Did you know that you can query your API with GraphQL and get exactly what you need? That’s because GraphQL is an open-source query language for APIs that allows you to access your data from a single endpoint. In this course, developer and trainer Ervis Trupja teaches you the basics of building a GraphQL API in an existing ASP.NET Web API project.Learn about the tasks and key concepts of GraphQL, 

> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api) | 1h 38m | Intermediate | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Using GraphQL API](#using-graphql-api)
  - [What you should know](#what-you-should-know)
- [**1. Getting Started with GraphQL**](#1-getting-started-with-graphql) (5 videos)
  - [What is GraphQL?](#what-is-graphql)
  - [GraphQL vs. REST](#graphql-vs-rest)
  - [Open-source GraphQL projects](#open-source-graphql-projects)
  - [.NET Web API project overview](#net-web-api-project-overview)
  - [Setting up GraphQL in Web API](#setting-up-graphql-in-web-api)
- [**2. Data Querying with GraphQL in .NET Web API**](#2-data-querying-with-graphql-in-net-web-api) (8 videos)
  - [Operations in GraphQL](#operations-in-graphql)
  - [Types in GraphQL](#types-in-graphql)
  - [Adding your first object graph type (course entity)](#adding-your-first-object-graph-type-course-entity)
  - [Adding your first query: All courses](#adding-your-first-query-all-courses)
  - [Challenge: Add query to get single course](#challenge-add-query-to-get-single-course)
  - [Solution: Add query to get single course](#solution-add-query-to-get-single-course)
  - [Adding your GraphQL schema file](#adding-your-graphql-schema-file)
  - [Testing](#testing)
- [**3. Data Mutation with GraphQL in .NET Web API**](#3-data-mutation-with-graphql-in-net-web-api) (7 videos)
  - [What is a mutation?](#what-is-a-mutation)
  - [Adding your first mutation: Add data](#adding-your-first-mutation-add-data)
  - [Add data: Testing](#add-data-testing)
  - [Challenge: Mutation to update data](#challenge-mutation-to-update-data)
  - [Solution: Mutation to update data](#solution-mutation-to-update-data)
  - [Update data: Testing](#update-data-testing)
  - [Mutation to delete data](#mutation-to-delete-data)
- [**4. Querying and Mutating Relational Data with GraphQL in .NET Web API**](#4-querying-and-mutating-relational-data-with-graphql-in-net-web-api) (5 videos)
  - [Adding relationship data](#adding-relationship-data)
  - [Query to get relational data](#query-to-get-relational-data)
  - [Get relational data: Testing](#get-relational-data-testing)
  - [Mutation to add relational data](#mutation-to-add-relational-data)
  - [Add relational data: Testing](#add-relational-data-testing)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps for learning more about GraphQL API](#next-steps-for-learning-more-about-graphql-api)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using GraphQL API](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980&t=0)** - With [GraphQL](../../Skills/Web%20Development/GraphQL.md), you can query your API and get exactly what you need. Nothing more and nothing less. With GraphQL, you get to access the full capabilities of your data, from a single endpoint. You can use GraphQL to create a uniform API across your entire application, and use a type system, to make sure that you only ask for what is possible. We'll start off by talking about the key concepts of GraphQL that you need to know to get the most out of this course. Next, you'll learn how to set up the development environment, query data with GraphQL, and also add, update and delete data using GraphQL mutations At the end of this course, you'll work with relational data, where you learn how to get relational data using queries and add relational data to the database using mutations. Hi, I am Ervis Trupja and I'm a full [stack.NET](https://stack.NET) Web Developer and trainer. Join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course, as we explore GraphQL in an [ASP.NET](https://ASP.NET) web API application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (7), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [ASP.NET Web API](../../Skills/Web%20Development/ASP.NET%20Web%20API.md) (1)
> **Env Vars:** api (3), net (2), asp (1)
> **URLs:** [stack.net](https://stack.net) (1), [asp.net](https://asp.net) (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - with (1)

#### [What you should know](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-you-should-know?u=76281980&t=0)** - [Instructor] Now, let us talk about a couple of things that you need to know to get the most out of this course. On this course, we are going to add [GraphQL](../../Skills/Web%20Development/GraphQL.md) to an existing [ASP.NET](https://ASP.NET) Web API project. So having a basic understanding of how Web API projects work is recommended, but it is not required. As a programming language, I'll use C#. And as a framework, I'll use the .NET Core version five, or as we call it now, .NET5. As my coding editor, I'll be using Visual Studio 2019 Community edition, but you can use any version of Visual Studio 2019 or later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1), [ASP.NET Web API](../../Skills/Web%20Development/ASP.NET%20Web%20API.md) (1)
> **Env Vars:** net (2), api (2), asp (1), net5 (1)
> **Tools:** visual studio (2)
> **URLs:** [asp.net](https://asp.net) (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with GraphQL

[↑ Back to Table of Contents](#table-of-contents)

#### [What is GraphQL?](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=0)** - [Instructor] Per definition, [GraphQL](../../Skills/Web%20Development/GraphQL.md) is a query language for your APIs. But why do we need GraphQL if we already have the [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs, which have been around for years and years? In traditional REST APIs, when you want to get specific data, you need to create specific API endpoints, or create specific return type DTOs. So, for example, let us say you are building an app which is going to work with books and authors. If you want to get all the books in this case, you'd have to create an HTTPGET request, and then have an API endpoint. API then /books. And if you want to get the details of a single book, then in that case, you would have API then /books, then slash the book ID. Now, as you can see in here, the problem in this case is that for each response, you need to have a new or a separate API endpoint. Now, let us just say that you need to get only the book title from the book object. Now, in this case, you either have to create a separate API endpoint, or just create a new DTO, and then use a mapper to just get the data that you need, or you could just return the whole book and just use the title. But in this case, you are getting from the server way more data than you need, and this is called the over-fetching. So, basically you are just getting from the server way more data that you aren't using on the front-end side,
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=93)** or it could be the other way around when you need more data from the API, but the API is not capable of returning all that data, or you have to do a lot of joints to get that data, which is in this case called the under-fetching of data. So, basically you are getting less data than you need. With GraphQL instead of having multiple URLs or API endpoints, you have a single entry point, and from this entry point you can just specify the data that you need and you are going to get just that data. So, basically there'll be no over-fetching or under-fetching of data. Other than that, with the GraphQL, you can easily aggregate data from multiple sources, or use a type system to describe your data. With a type system, you can easily describe a schema for your data. So, then when you want to get the data, you can just specify the exact data that you need. Now, throughout this course, we are going to use an existing web API project, and we are going to add GraphQL to this .NET Web API project. Now, before we get started, or before we start typing any code it's important to know that in GraphQL, we have types, we have queries, and we have schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Env Vars:** api (11), rest (2), httpget (1), dto (1), net (1)
> **Definitions:** is a  (1), is called (1)
> **Prerequisites:** you need to have (1), before we start (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [GraphQL vs. REST](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=0)** - [Instructor] First of all, it's important to know that [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and [GraphQL](../../Skills/Web%20Development/GraphQL.md) are two API design approaches that fulfill the same function. The data transmission over internet protocols, such as the HTTP. However, the way they work varies significantly. For example, the GraphQL is a query language, and REST is an architectural pattern. On GraphQL, you have a single endpoint, and you basically customize the query based on the data that you need as a response. On the other hand, you have multiple endpoints. And we said that in complex applications, you have lots and lots of API endpoints. For example, you could have an API endpoint to get all the courses. You could have an API endpoint to get all the books and then to get the details, to delete them, and much more. The GraphQL is client-driven architecture, but REST is server-driven architecture. A downside of GraphQL is that in GraphQL you do not have automatic caching mechanism or API versioning, but the REST uses caching automatically, and also supports multiple API versioning methods. In GraphQL, you only get to see data in [JSON](../../Skills/Web%20Development/JSON.md) format, but REST supports multiple data formats. In GraphQL, we do not have HTTP status code, but in REST we can use the HTTP status codes
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=96)** to identify the errors easily. Now, as you can see in here, the GraphQL has some advantages over the rest, but it also has some disadvantages. Now, the main advantage that we have already mentioned is that in GraphQL, since you get just the data that you need, you do not have over-fetching or down-fetching of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (10), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** rest (6), api (6), http (3), json (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Open-source GraphQL projects](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=0)** - [Instructor] Before we start building our [GraphQL](../../Skills/Web%20Development/GraphQL.md) project, let us first have a look at some libraries that can be used in different programming languages to integrate GraphQL with the programming language of your choice. Then, we are going to check some of the open source projects that are public and available for you to test and create a general idea on how the GraphQL works. So let us navigate to this URL. So the graph [ql.org](https://ql.org) then slash code. And here on the landing page or the welcome page, if you just scroll down, and here you have the go to option, you can just go to the language support which is the section down here. Then you could go to tools and services. Now here you can see that the GraphQL is supported in multiple languages like the [PHP](../../Skills/Software%20Development/PHP.md). [Java](../../Skills/Software%20Development/Java.md), C#, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), the C or C++ and other programming languages. Now in this course as I go into work with an existing .NET Web API project, We are going to use the C#.NET. So if I just click in here, then here you can see that we have multiple implementations like for example this GraphQL then -dotnet. And here you have an example down here you'd have another library, the hot chocolate that I just scroll down. You have the GraphQL NET, the entity GraphQL and much more.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=94)** Now let us just scroll up because on the upcoming parts, we are going to install all the necessary packages or libraries that we need to set up GraphQL in our Web API project. And let us check some of the open source projects of GraphQL. And here's some of the open source projects that you can check are the SpaceX API. And as the name already indicates, this an API provided by SpaceX and you can check all the information related to this company by using the GraphQL. Then you have the Countries API and the [GitHub](../../Skills/Software%20Development/GitHub.md) API. You also have other APIs but I just thought that these three APIs are interesting ones but you can just [Google](../../Glossary/Service/Google.md) search for other APIs and you'll get lots of results. So here let us go to the SpaceX API. So let us open the SpaceX API and you're going to get the welcome page to the SpaceX Graph API. And if you'll scroll down in here, you are going to see that you can access the graph by using the API SpaceX, then .land and GraphQL. In here you can also check some running operations like some examples on how you can use this GraphQL. And then I'll just scroll up and click the Run. In Explore, just right click and then open in a new tab. So in here we have an example query and basically here we are just requesting for the CEO of the company. And then we are just getting these data from the roster query. So there I'll just click example query
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=189)** so I'll submit the operation and then continue. Here on the right you're going to get the response data. For the company you have the CEO set to Elon Musk and for the roster you also have the location of the roster in the universe. Now here on the left, you have some other options which you could use. Like for example if you want to get a list of all of the dragons, then in this case, I'll just remove then you type dragons. And let's say for the dragons, we want to get details. I'll just click in here so I can see which are the available options. You can see that we can get if the dragon is active and down here, the description. So let's say we just want to get the active and description. If you want, you can also get the ID. So you can just click the plus button here, get the ID and then execute the query. And here you have all the information that you requested from this GraphQL. And as we saw in the description, all the requests or all the operations are being processed by this graph. We also have the Countries API. And if you check the description in here, 80 countries API, so you can basically just get the details for a country like the name, the native language, the capital, the emoji, the currency and languages of that country. So I'll just click the running Explorer and then let us just remove all these
>
> **[4:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=285)** and let's say we want to get all the countries. So countries, and then for each country, we want to get the code and the name of that country and also the continent. And in the continent, we want to get the code and the name. Now let us click the execute button, then continue. And now you can see that we get all the countries. So we have the color of the country, where it is located and the code of the continent. On the upcoming parts, We are going to add the GraphQL to our Web API project and you will be able to request only the data that you need in our Web API project as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (14), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** api (14), net (3), ceo (2), url (1), php (1)
> **UI Navigation:** go to (4), scroll down (3), scroll up (2), navigate to (1), open the (1)
> **CLI Commands:** php (1), python (1), dotnet (1)
> **Prerequisites:** before we start (1), install (1), set up (1)
> **Analogies:** for example (2)
> **URLs:** [ql.org](https://ql.org) (1)
> **Cross-References:** as we saw (1)

#### [.NET Web API project overview](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=0)** - We have said that throughout this course we're going to use a .NET web API project. So before we type any code that is related to the [GraphQL](../../Skills/Web%20Development/GraphQL.md), let us have a look at this project. This is a simple .NET API project and in here we have just a single API end point. So if you just go to controllers and then inside the controllers folder, we have the courses controller. This is our only controller. Then inside the data folder, we do have a module. The module name is of course our C-sharp, which has properties like the ID, the name, description, review, the date added and date updated. And inside the repositories, we do have a single repository, the courses repository. Which by using the App Db context file, it gets all the courses from the database, It gets a single course by using the ID, It adds a new course, It updates an existing course, And at the end, it also deletes a course from the database. The application Db Context in here we have defined the Db Context options. And then we have a single Db set, which is named courses. Then you have the app settings, the Jason file, And in the app settings the Jason file we do have the default connection string. So our database connection string, we have the program .CS which is the entry point of the web API project. And the startup.CS. In the startup.CS, If you scroll down, you have just configured in here, the application Db context.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=92)** And here we have defined that we want to use an [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database. And then down here we have also added, or we have also configured the courses repository. In this app I have also added the Swagger and the Swagger is used to just visualize the API end points. Now to this project I've also added Swagger and the swagger is a tool or a library that is used to visualize the API endpoints. So then I'll just click the run button or the play button up here to see the result. So in here you can see that we are redirected to Swagger, and now you can see we have five API end points. to get, one post, a put and a delete. So let us just add a course. Post then try it out. And you would not need to define the ID because the ID is going to be generated by the database. The course name is going to be, let's say, introduction to GraphQL. The description is going to be, this is a quick introduction. So let's say GraphQL, the review for this course, that is going to be nine. I'm not going to change the date added and data updated because they are just for demo purposes. and I click the execute button. And then down here you can see that course with the ID one, And then I'll just scroll up. I'll close this one. If you want to get all the courses, just go to Get and try it out. Execute. Here you can see we have a list of courses, but since we have just a single course,
>
> **[3:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=185)** we're going to have just an item in here. So the course with the ID one, if you want to get the details, you can also use the API courses ID. So try it out. ID one, and then execute. Here we have the result. The same way you can just update and delete this course. And here in the App Db Get, where you get the details of a course. If you want to get, for example, just the name. Then in that case, you'd have to go and create either a different API end point or just create a detail. So just like a view module and then return just the name by using the same code but by using an AutoMapper. Now, in these case, for example, where we get the details of a course, if you want to get from the course, just the name and the description, what you have to do is you have to go back and either create a new API endpoint or create a new DTR class and use that class together with an AutoMapper to just get these two values. Now you can imagine that if you want to get just the name or just the description or just the review in all these cases, you have to either create the API end points or new details and then use the AutoMappers. And this is why the GraphQL is really useful because you define a type, you define a query, then you define the schema. And then by using all these three components together, you can just request for any property that you want to get.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (4), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** api (11), net (2), sql (1), dtr (1)
> **UI Navigation:** go to (2), scroll down (1), scroll up (1)
> **Analogies:** for example (2), just like (1), imagine (1)
> **Definitions:** is a  (3)
> **Speakers:** - we (1)

#### [Setting up GraphQL in Web API](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=0)** - [Tutor] Now that you know what [GraphQL](../../Skills/Web%20Development/GraphQL.md) is all about and also had an overview of the Web API project, it is time to get our hands dirty, and start working on the actual project. On this part, we are going to install all the necessary packages, and also partially set up the GraphQL in the startup.csclass. So then I'll just go back to our project. And then we're going to first install the NuGet packages, after that, then I'll just go to dependencies right click then go to Manage NuGet packages, or you can just go to tools, and then you go to NuGet Package Manager, and then Manage NuGet Packages for for Solution. Now you go to Browse, and then you let us search for GraphQL. So graph and then QL. We are going to install this package so the GraphQL package. Then here select the project, and then install. Then you later search for graphiql. This is the package and it says in here that the GraphiQL is available as a middleware for [ASP.NET](https://ASP.NET) Core. And then you click install. Then accept the license. And the package is installed. Now let us search for another package and that is going to be the graph.server.transports. And then select this package
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=95)** of the AspNetCore.SystemTextJson and then click install.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=105)** And the last package that we're going to install is going to be graph then server, then in here UI, and then GraphQL. So, this package in here, and then click the install button. Now let us just go to the Solution Explorer. And then you go to Dependencies and then go to Packages. You're going to see in here all the packages that we just installed and also the entity framework core, the SqlServer, the tools and the SwashbuckleAspNetCore. You can see in here that these packages, are the 5.0 and a number after the zero, which means that we are currently using the .NET core version five. So the 5.0, or as we also call it now the .NET 5.O. So now let us go to these Startup.cs. And then here we have two methods. Let's scroll down. And then down here it also says that this method gets called by the runtime and use this method to configure the HTTP request pipeline. So just after the addScope for the course repository, we're going to just add in here the GraphQL so GraphQL. And here we're going to type services.AddGraphQL.
>
> **[3:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=196)** And then after .AddGraphQL, I'm going to use the .AddSystemTextJSON method sorter. Add and then SystemTextJSON method.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=213)** Now let us import namespace for this one. And then is going to be the GraphQL.Server and we need this method so the GraphQL is able to [compose](../../Glossary/Framework/Jetpack%20Compose.md) a [JSON](../../Skills/Web%20Development/JSON.md) response so now we can see the response, in our result. And if you hover on this method, you can see that this returns a GraphQLBuilder. And in the description it says that it adds, IGraphQLRequestDeserializer, and the DocumentWriter to the service collection with the provided configuration or settings. And here if you want you can also define some options. Now for example options that go to options.EnableMetrics and then you can set this to true but we do not need the metrics to be enabled so I'm just going to remove, this option in here and then scroll down to the other method, which is the configure method. In here the same way we are going to also use so we are going to define the usage of the GraphQL so, GraphQL. And then here I'm going to type app.Use.
>
> **[4:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=290)** But on here we need to define the schemaClass but since we have not created this schemaClass we're just going to comment out this line for now and once we have the schemaClass, we are going to enable this line. And then here we're going to have app.UseGraphQL and then GraphiQL and this is used to visualize or to run like an interface so we can interact with the GraphQL. Think of the GraphQLGraphiQL as the Swagger dashboard that we get when we configure Swagger. And then in here if you want, you can define a custom string path or you can just leave the default one which is ui/graphiQL. So I'll just define the custom one that is going to be ui, and then slash graphql. So let us add another slash in front of the, UI. Now let us save all the changes and this is all you're going to do, in this part.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (13), [ASP.NET Core](../../Skills/Web%20Development/ASP.NET%20Core.md) (1), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **UI Navigation:** go to (10), scroll down (2), select the (1)
> **Prerequisites:** install (8), configure (3), set up (1)
> **Env Vars:** net (3), api (1), asp (1), http (1), json (1)
> **Code Identifiers:** schemaclass (3), addscope (1), graphiql (1)
> **Versions:** 5.0 (2)
> **URLs:** [asp.net](https://asp.net) (1)
> **Cross-References:** go back to (1)


### 2. Data Querying with GraphQL in .NET Web API

[↑ Back to Table of Contents](#table-of-contents)

#### [Operations in GraphQL](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=0)** - When you create an API to be able to work with data, you create the API end points and then send to these API end points, HTTP requests. You send the HTTP GET to get the data. HTTP DELETE to remove the data, etcetera. And you have already seen the swagger visualization of our API, that I have already created. In [GraphQL](../../Skills/Web%20Development/GraphQL.md) to work with data, we have two main types of operations. We do have a vQuery type and as the name already indicates, the query type is used to query data. So to read data from a data source. We also have the mutations, and mutations are used to write data or to store data in the data store. We also have another operation type in GraphQL, which is the subscription type. The subscription type is a way to create and maintain a real time connection with the GraphQL server. On the upcoming parts, you are going to learn how to query data. So how to get data from the database using the query type operation. And you'll also learn how to store data in the database, using the mutation type operation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (3)
> **Env Vars:** api (4), http (3), delete (1)
> **API Endpoints:** get  (1), delete  (1)
> **Code Identifiers:** vquery (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### [Types in GraphQL](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=0)** - [Instructor] We have said that [GraphQL](../../Skills/Web%20Development/GraphQL.md) is a strongly typed language. The type system is used to define different data types that can be used in a GraphQL application. In GraphQL, we have different types and these types are grouped into two main categories. We have the basic types and the object types. Some examples of the basic types are the string, the integer, the float, the boolean, the ID, etc. But how can we use these types of GraphQL in our .NET application? Well, since we are using the library, so we are using the GraphQL for .NET, Let us check all of them one by one. So in GraphQL, we have the string type in .NET, we have the same type the string type, but in our library, GraphQL for .NET we have the StringGraphType. So that way, when we configure the string type of GraphQL in .NET we're going to use the StringGraphType definition. For integer, we do have the IntGraphType, for DateTime, we do have the DateTimeGraphType, for the Boolean we do have the BooleanGraphTypeID and for the last one, which is a special type in GraphQL and in .NET, we have, for example, integers, long, string, and we just decorate these properties with the key decorator
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=94)** and we know that that property is the identifier of that class or that entity. In GraphQL we have the ID keyword and the same keyword exists in GraphQL for .NET and that is the IdGraphType. So these are some examples of the basic types in GraphQL. So these are some examples of the GraphQL types. but we said that other than the basic types, we also have the object types. And in here we have an object type in GraphQL. So we have the type in the beginning then we have the type name in this case the name is ExampleObject and inside of this object, we have two properties. The first one is ID of type integer and the second one is name of type string, but how can we write the same type in the GraphQL for data which we are going to use in the upcoming parts? So in the first section, we have a declaration of an object type in GraphQL. The name of the object is example. We do have ID of type integer and name of type string. If you're going to write the same type or class in C-sharp, that is going to be public class example, then we're going to have public int Id and then string name. Now, in GraphQL for .NET what we're going to do is we're going to create a class with the name of the class that we would normally write in .NET so in C-sharp, but we are just going to add the type ending, then we are going to inherit from the ObjectGraphType
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=189)** and then in here best is a barometer the object name. So in here we have the example, we are going to pass the example as a barometer in here. Then down here, we create a constructor and inside this constructor, we are going to have our values of the ID and the name value. And of course, for these two properties, you can define the types as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (17)
> **Env Vars:** net (9)
> **Definitions:** is a  (3)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Adding your first object graph type (course entity)](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=0)** - [Instructor] On this part, we are going to create the first object type in our project. And for that, we are going to create the course type. So let us go to Visual Studio and see it in action. In here, I'll just go to the Solution Explorer and then I'll create a new folder. So add and then new folder. I'm going to name [GraphQL](../../Skills/Web%20Development/GraphQL.md) because in here I'm going to put all the GraphQL related code for GraphQL. And then inside here we are going to have types, so I'll just right-click then go to new folder. I'm going to name this folder the types folder. And here we are going to add the first type and that is going to be the course type. And the reason why we are adding the course type is because in the data folder, in the models, we have the course model. And this course is just a C# class. It has some properties. The first one is of type integer, but it has the key decoration in here, which means it's going to be the primary key in our database. Then we have the name and description of type string. We have the review of type integer, and then the date added and date updated of type date time. So in here then I'll just go to the Solution Explorer, I'm just going to pin the Solution Explorer in here. And then in here in the types, I'm just going to right-click then go to add. We're going to add a new class. Now let us say I'm on board. First type the course type and then click the add button.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=96)** In here to create an object type of GraphQL, we have said that we need to inherit from the base class object graph type and (mumbles) the model name. So in here column and then object graph type. Let us important the namespace and the namespace is going to be the graphql.types. And then here past the bar meta the course model. So let us import the namespace and that is going to be the courses that graphql.data.models. Now, inside here we said that we are going to create a constructor. So to create a constructor, just type cto and then double tab, the constructor is created. And now inside these constructor, we are going to define all the properties or all the fields of this object type. So let us start with the first one. There's going to be field. And we are going to create our first field for x that goes to x.Id. Then next thing here we are going to define the type. So the type of this field. So type. And this is going to be type of. And the type of these field is going to be the Id graph type. So Id graph type. Now, if your wondering here you can just define the description as well or you can just type .description
>
> **[3:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=193)** and then provide a description for this field. So I did not say this is going to be the Id property from the course object. Now, let us create the other ones. At the end, I'll just add semi colon and then create the other one. I'm just scrolling here to the left. The other property is going to be for the name. So field and then in here x. That goes to x.description. The type and the type is going to be for this one type of. And the type is going to be the string graph type. And then if you want, you can either add the description in here or you can just add the description at the end. I'll just close actually the Solution Explorer so we have more space. I'm just going to copy this part. So control C and then just paste it in here. And the description is going to be description property for the course object. Now let us copy the last line so control C just paste it in here. And then we are going to have a field for the name. The type is going to be the same, string graph type. And this is going to be the name property from the course object. The other one is going to be review. And if you check the review type is of type integer. In here, you can just change int graph type and then in here review. We're already from the course object.
>
> **[4:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=285)** Now the description is optional so if you don't want to, you do not have to provide a description. Then here, this is going to be the date edit and the type is going to date time, graph type. And this is going to be the date edit. The other one is going to be the date updated and the type in here's going to be the date time graph type. And the here change the field from description to be the date updated. And this is how you can create an object type in GraphQL in a .NET application. I'll just remove the extra space. And this is all for this far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (7)
> **UI Navigation:** go to (5), right-click (2)
> **Env Vars:** net (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Adding your first query: All courses](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=0)** - [Instructor] So, in the last part, we created a custom object type of [GraphQL](../../Skills/Web%20Development/GraphQL.md), we named that type the CourseType, and in here, we defined all the fields, so all the properties. Now we have said that to get data from a data source, and in our case, we're going to use an [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) Database, we're going to create, or we have to create a Query, and that is what we're going to do on this part. So let us go to the Solution Explorer, and then in here go to GraphQL. In here, we're going to create a new folder. So add a new folder. We're going to name this folder, the Queries folder. So, Queries folder. Now inside this folder, we're going to add a single file. So add a Class. we're going to name this Class, the Query, or let us just name it the CourseQuery. And then click the Add button. Now for the Course Query, we need to inherit from the base class object graph type. So, as you head from the object graph type and let us import the NameSpace and the NameSpace is going to be GraphQL.Types, and then inside we're going to create a constructor, so ctor is a shortcut and then Tab key. Now we're going to define the return, so we're going to define the return in this way, and that is going to be a field
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=95)** and they would turn type is going to be a ListGraphType. So we're going to return the list part of course we're using the [GraphQL.net](https://GraphQL.net), so that is ListGraphType. And the items in this list are going to be of type CourseType. So let us just copy this name Control+C and then paste it in here. Let us import the NameSpace. The NameSpace is going to be a GraphQL and then Types. And then now in here, we're going to first define a name for this Query. The name is going to be "courses." So what this means is that we're going to use the courses keyword when we want to get the list of courses. Then you, if you want, you can add a description. So I'm here. I can just type, it "Returns list of courses." And then down here, we're going to define where we want to get this data from. And you'll just type resolve. The resolve we're going to have a context and now you'll need to define the actual place where we want to get the data. And yeah, I have already created a repository, so if you go to data folder, then repositories and here we have the CoursesRepository. we're going to use this repository to get data from the database and this repository uses the application DB context file. So in here that just go to the CourseQuery, and of course for us to be able to use this repository,
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=189)** we need to inject it's up here, CoursesRepository and then just repository is going to be the name let us support the NameSpace that is going to be Data.Repositories and then in here, I'll just type repository.GetsAllCourses. And this is a method in the repository to get all the courses. So in here, if you go to the CourseRepository, in here you have this method, it basically gets all the courses from the database and returns a list. So here in the CourseQuery these is all you need to do on the next part and this is all you need to do in this part.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **UI Navigation:** go to (5)
> **Definitions:** is a  (2)
> **URLs:** [graphql.net](https://graphql.net) (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add query to get single course](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-add-query-to-get-single-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-add-query-to-get-single-course?u=76281980&t=0)** - [Instructor] So far, you have learned how to create the course query, and in this query you added the first field to return a list of course types. Now, it is time for you to get the hands dirty and write some code. So we created the query field to get the list of course types. You can now go ahead and add a new field to get a single course type. For that, you'll need to first add a new query field, then define the keyword or the name of that field, so how you want to call that field, and then at the end, resolve or get the result by using the course's repository. So give it a try and in case you fail to solve this challenge, you can check the solution on the next part.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Add query to get single course](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=0)** - On the last part I asked you to add a new field in the course query to get a single course site. So let us now go to Visual Studio and check how I solved this challenge. In your Visual Studio, just go to the course query, and then here we're going to add a new field. So for that, I'll just type in here "field." The return type will not be a list graph type but just a course type, so "CourseType." Then inside here, we said that we need to define the key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) or the name. So for that, I'll just type in here, "course." So we have the courses in here because we are returning a list, but here we are getting just a single course type, so just "course." And a description. So this is just going to return. "This returns a single course by ID."
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=66)** And then down here, we are going to define the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code. Now, as you can see in here, the third one is the query arguments. So since in this case, we are going to get a course by ID, we need to pass some arguments and that is going to be the course ID. So for that, I'll just type "new QueryArguments." And then inside the query arguments, I'm going to pass just a single argument, but as you can see, it expects as a parameter an array of arguments. So now I'll just type "new" and then "QueryArgument," then define the type of this argument and the type is going to be the identifier. So a non null graph type. And the type is going to be an Int graph type. So what basically defined in here is that we defined that the parameter for the query arguments is going to be of type integer, but it is a required parameter. And then in here, we're going to define the name. So the name of these parameters is going to be ID. And a description can be, so let's say description is going to be "Course ID." And then after you define the query arguments, we are going to define the result. So in here I'll just type, "resolve,"
>
> **[2:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=160)** and then to get a response, we are going to use the repository. So on here, "context." That goes to, and the response is going to be the repository. So "repository," and then "GetCourseById." And then here, we are going to pass as a parameter, the ID that is going to come from the query arguments. And to get the argument in here, I'm going to type "context.GetArgument," so "context.GetArgument." and then to get this argument, we need to define the keyword that we want to use. And here we have defined that the name is going to be ID. So now just type ID. But since we made this argument a non null graph type, then here, we are going to define an optional, so like the default value. And the default value is going to be just "int.MinValue." And here, let us import the namespace for the get argument. And that is going to be the [GraphQL](../../Skills/Web%20Development/GraphQL.md). And this is all you need to do in here. So let us actually just get this path, this is from here to here. And then I'll just put semicolon and that's it. So this is all you need to do to create these two fields for the course query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Tools:** visual studio (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - on (1)

#### [Adding your GraphQL schema file](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=0)** - [Trainer] On this part, we are going to create the last piece of the puzzle to get data from the database. That is the schema of the [GraphQL](../../Skills/Web%20Development/GraphQL.md). The GraphQL schema is used to define which data is available for the users. So let us go to Visual Studio and see it in action. In here, I'll just go to the Solution Explorer, because I'm going to add a new file. So inside the GraphQL folder, just right click, then go to Add, and then Class. Now for this file to be the application schema, we need to inherit from the base class, Schema. So I'll just type in here schema, then import the namespace and the namespace is going to be the GraphQL.Types. Then here just create a constructor. So ctor, then double-tap. And then inside here, I'm going to inject the Query file that I have created. And that is the CourseQuery. So in here, just type CourseQuery and then import the namespace for the CourseQuery and that is the GraphQL.Queries. And then here, the name is going to be the query. Then inside this construct, I'm going to type that this.Query. So the Query file is going to be the query, which is in this case, the CourseQuery file. Now this is all you need to do for now on the app schema.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=98)** On the next part, we are going to configure or we are going to update the start-up, the CS file, and then we're going to test what we have created so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5)
> **UI Navigation:** go to (3)
> **Tools:** visual studio (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [trainer] (1)

#### [Testing](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=0)** - [Instructor] So now that we have created all we need to create to set up the [GraphQL](../../Skills/Web%20Development/GraphQL.md) in our web API application, we are going to start our app and test what we have created so far. But before we do that, we need to add one more line. So let us go to Visual Studio and see it in action. In Visual Studio, just go to the Startup.cs file. And then in here scroll down to the Configure method. And then in here, comment out this line. So app.UseGraphQL. And in here we are going to use the AppSchema class. So let us just import the namespace, GraphQL, and here add semicolons, save all the changes, and start this project.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=54)** So on here we can see that the app ran successfully. Now let us just go to our GraphQL. So for that, in here we define that the GraphQL you are at least going to be UI, and then slash GraphQL, and then press enter. And now you can see that the GraphIQL is loaded. Now to get data from our queries, I'll just remove this code and here I'll just type curly brackets. And then let's say, I want to call the courses query. And from here, I want to get the ID, the name and the description. And then click the play button up here. And here you can see that we get an error, which says that unable to resolve the service for the epic issue schema. So let us just go back to visual studio. And if we go to the application schema, so go to definition, we can see that in the application schema, we use the course query. So let's just go to the Startup.cs. And then in here, scroll up. We have added the courses repository. Let us also add services.AddScoped. And this is going to be for the course query. So, course query. Let's import the namespace. That's going to be graphQL.Queries. And in here, let us also add services.AddScoped. I'm going to go into add in here, the AppSchema.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=157)** Now let us save all the changes and then just restart this project. In here now, let us go to UI, then graphql. Press enter. Also remove this part. And then just in here type courses. Now you can see here that we get some suggestions and down here can see that we have the course type and the description that we added, which says returns a single course by ID. And on the second one, we have that it returns a list of courses. So I'll just choose the second one. Now, inside here, we are going to use the ID. And the ID says, is the ID property for the course object. These are all the descriptions that we provided on the previous parts. We can define the name and the description. And then click in here the play button. And here on the right, you can see that we get some data and we get a list of courses. And in our case, we just have a single course. And if you want to use the other query field, just type in here course. And this one expects the ID parameter. And the value is going to be, let's say one, because we have a course with the ID one. Let's hit down here, we just want to get the name. And in here you can see that the name is Introduction to GraphQL. Now let us click the play button. We do get that course and just the name field. Now let us change the ID to let's say 123,
>
> **[4:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=253)** and we know that we do not have such course in our database, and click play. Now you can see that the course value is null.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (8)
> **UI Navigation:** go to (7), scroll down (1), scroll up (1)
> **Tools:** visual studio (3)
> **Prerequisites:** set up (1), configure (1)
> **Code Identifiers:** graphql (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Data Mutation with GraphQL in .NET Web API

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a mutation?](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=0)** - [Instructor] We have previously mentioned that any operation that involves [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) is done by mutation. To add data, you need a mutation. To update data, you need a mutation. And to remove data, you also need a mutation. So basically, mutations are used to modify data in a data store and return a value. In our case, the data store is the [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database. A query in comparison to [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs is like the GET request. And the mutations are like the state changing methods, which for example, are the POST, the DELETE, the PUT, et cetera. On the upcoming parts you're going to add a mutation file and then in this file, you're going to add different fields which you're going to use to modify data in our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** sql (1), rest (1), post (1), delete (1), put (1)
> **API Endpoints:** get  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Adding your first mutation: Add data](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=0)** - [Instructor] On this part, we are going to add our first mutation file. And in this mutation file, we're going to add our first method or the first field. And then we are going to use this field to add new data to the database. So for that, let us go to Visual Studio and see connection. In here, I'll just go to the Solution Explorer, and then you go to the [GraphQL](../../Skills/Web%20Development/GraphQL.md). And here since we're going to add our first mutation, let us just right-click and then add a new folder. Let us name this folder, the Mutations, and then right-click, go to Add. We're going to add a new class. We are going to name this class, the CourseMutation. Mutation, and then click the Add button. Now for this file to be a mutation file, we need to enhance from the base class ObjectGraphType. So in here, enhance from the ObjectGraphType. Now let us just remove the extra S from here and then import the namespace. That is going to be the GraphQL.Types. And then here, I'm going to type ctor to create a constructor. Then inside this constructor, I'm going to inject the repository file that we use to interact with our database. And that is the CoursesRepository, and then just name it repository.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=96)** So let us import the namespace. That is going to be Data.Repositories. And now inside here, we are going to create the first field. So in here, I'll just type field. The return type is going to be the CourseType. That's a body namespace. And now in here, the first parameter that we are going to define is going to be the name. So how do we want to call this field? That is going to be addCourse. Then the second parameter can be, let's say a description. So let's say it's used to add a new course to the database. Then we're going to have the arguments. And we said that you can pass as arguments, an array of arguments. So for that, I'll just type in here new QueryArguments.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=158)** And then here, we're going to have a single argument, and that is going to be an input type for the CourseType. So in here, I'll just type new QueryArgument. We're going to define the type of this argument. And that is going to be a NonNullGraphType. And for the NonNullGraphType, you're going to also define the type. And this is going to be a new type that we're going to create, and we're going to name it the CourseInputType. Now, let us just copy this name, Control + C, and then just goes to the Solution Explorer and you'd go to the Types folder. So we do have the CourseType for the queries. Now we are going to create another type for the mutations. So just right-click, then go to Add, and then Class. We have the CourseInputType, and then click Add. Now, for this in here to be an input type for the mutations, we need to enhance from the base InputObjectGraphType. So InputObjectGraphType. So let us import the namespace, and that is going to be the GraphQL.Types. Then in here, we are going to create a constructor, ctor, then double-tap. Then the name is going to be the CourseInputType. And here, we are going to have all the fields
>
> **[4:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=254)** that we're going to use for the CourseInputType to send data to the mutation file. So let us just go to the Solution Explorer. And then I'll just go to the CourseType. I'm just going to copy these values, Control + C, then go to the CourseInputType, and then paste them in here. Now, in here, when you define an input type, what we're going to do is that we're going to just define the type in here for the field. So for example, the first one is going to be IdGraphType, the second one is going to be StringGraphType, et cetera. So in here, the value or the input value for this field is going to be InputGraphType, then we're going to have the second one and the other ones. So just type all the code in here.
>
> **[5:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=314)** Now let's just copy the second one, so Control + C, paste in here. This is going to be the same. Then we have an IntGraphType. And the last two ones are of type DateTimeGraphType. Let's paste in here. Now, the only thing that we need to keep in here is going to be the name of this field. So in here, for example, for the first one, we're going to have Id. And actually, the Id is generated from the database, so we can just remove the Id completely from here. We're not going to send this as a parameter. So we're going to have the description. Okay, so I'll select here. Then we're going to have the name. And I'm going to do the same for the other properties.
>
> **[6:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=388)** So this is all you need to do in here. Now let us just save all the changes and go back to the CourseMutation. Now, in here, you can see that we have the CourseInputType. And in here, we can also define the name. Name is going to be the course. And if you want, you can also add a description. So Description is equal to Course input parameter. Now, after the arguments, we know that we need to define the resolve. So, resolve. So basically, how do we want to store this data in the database? And here, I'll just type context that goes to, and then inside here, I'm going to first get the course object from the request and then store that course in the database. So I'll just type in your var, and then here, course is equal to context.GetArgument.
>
> **[7:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=453)** So we need to first get the argument, so the course from the request. For that, I'm going to use the GraphQL, and then in here, course, and then define the name. And the name is going to be the course. I'll just paste it in here. Let's important namespace for the course. That is going to be the Data.Models. Now that we have the course object, so the course value that gets passed in the request, we are just going to choose the repository, and then here, .AddCourse, and then pass the parameter, the course. And then, of course, since we're using resolve, we are going to also return a value. That is going to be, so basically, return, and then repository.AddCourse, because from the AddCourse, we get as a response, the newly added course. And then here, just add semi-colon. And here, we can see that we have an error, so I'll just remove the semi-colon from here, add a parenthesis and then semi-colon. And this is all you need to do to add a mutation field.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (4)
> **UI Navigation:** go to (9), right-click (3)
> **Analogies:** for example (2)
> **Code Identifiers:** addcourse (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Add data: Testing](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=0)** - [Instructor] On this part, we are going to test what we have built so far. So we are going to test the ad course from the CourseMutation file. For that let us go to Visual Studio and see it in action. Here the first thing that we need to do is we need to go to the Startup.cs file and then here scroll down, go to ConfigureServices and you can see that we have already configured the CourseQuery. So let us also configure the CourseMutation. So services.AddScoped, and then you are going to add the CourseMutation. Now, let us just import the name space for the CourseMutation and that is the [GraphQL](../../Skills/Web%20Development/GraphQL.md).Mutations. Then next, let us just go to the AppSchema. So just right click then go to definition. And here in the AppSchema we have also configured the query to be the CourseQuery. So let us also configure the mutation files, so CourseMutation and then just mutation, let's import the namespace for the CourseMutation that is going to be the GraphQL.Mutations. And then down here say, this.Mutation is equal to the mutation bar meter. Now let us save all the changes and run this project.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=96)** So now just go to UI then GraphQL. Then let us first check for all the data that we have in our database. So we are going to write a query. And the query that we're going to call is going to be the courses. And we're going to display the ID, the name, and the description. Now let us click the play button up here. And you can see that in our database, we have a single course, and that is the course with the ID one. Now let us add a new course to the database by using the mutation that we just created. So I'll just cut these lines and then here I'll just type Mutation. We're going to use the addCourse mutation, you can see that we already get the suggestion once we type adds. And this is going to be course type, is just to add a new course to the database. So addCourse, this expects a course bar meter, and then here let us define all the values, so let us start with the name. The name is going to be course name example. Then we're going to have the description. Description is going to be course description example. Now we are going to have the review. And the review it's going to be, let's say eight,
>
> **[3:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=192)** then we're going to have the date added. So I'll just pull them down here. If we did add it, its going to be lets say here 2021 and then 09/09 and the date updated is going to be, let's say 2021, then 10 and 10. And then in here, we are going to just get as a response to the ID, we're going to go get the name, the description, the review, the date added, and the date updated. Now let us click the play button. And then here we can see that we get an error and the error says that the date added and the date updated, because we have defined them to be date times, the input type or the value that they're expecting here is a date time and not a string like this. So I'll just copy the start time from here. Just as an example, Control + C, paste it in here.
>
> **[4:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=265)** Let's copy the other one, Control + C and then paste the value in here and let us click the play button one more time. And now you can see that we get a response. And the response is we have created a course with ID two, the name is Course Name Example, the Course Description Example, we do have the date added and date updated and the review is set. Now, if you want, we can use the CoursesQuery as well, so I'll just type in here, query and then courses. And from the course, you want to get the ID, you want to get the name and the description. And if you click the play button in here, you're going to see that now we have two courses in our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (3)
> **UI Navigation:** go to (6), scroll down (1)
> **Code Identifiers:** addcourse (2)
> **Prerequisites:** configure (2)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Mutation to update data](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-mutation-to-update-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-mutation-to-update-data?u=76281980&t=0)** - [Instructor] So far, you have learned how to create the mutation to add data to the database. Now it is time for you to challenge yourself and add another mutation field that you can use to update existing data in the database. For that, you'll need to first add a new mutation field, define the keyboard, define the parameters, and then at the end, resolve, so give it a try, and in case you want to learn how I solved this challenge, check out the next part.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Mutation to update data](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=0)** - [Tutor] On the last part, I asked you to add a new field in the Course Mutation to update an existing course in a database. So now let us go to Visual Studio and check how I solved this challenge. In here I'll just go to the Solution Explorer, and then you go to [GraphQL](../../Skills/Web%20Development/GraphQL.md), then mutations, and then Course Mutation. Just after the current field course type, we are going to create a new one. So in here I'll just type field and then I'm going to have course type, and then in here the name is going to be update course. The description is going to be, is used to update an existing course in the database.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=59)** And then next we need to pass the arguments. When we update a course, we pass two arguments. The first argument is the ID of the course that we want to update and the second argument are the new values that we want to use. So for that in here I'll just type arguments and then we are going to have a new query arguments, and then in here we're going to have the first argument which is going to be the ID. So for that, just type in here new query argument and then this is going to be of type non null graph type and the type is going to be ID graph type, and the value or the way that we want to access this one, is going to be by name ID. So in here name and then ID. If you want, you can also add a description. So description ID, of the course, to be updated. Now let us add the other arguments at the end in here I'll just add a comma. And then down here, I'm just going to type new query argument, then non null graph type. The input type in here
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=154)** is going to be the course input type. And here we have the course input type. The name is going to be course, and the description is going to be updated course values. And then here at the end, so after the arguments we're going to put a comma, because the last piece is going to be the resolve. So in the resolve going to have context that goes to, and then inside here, we need to first get the ID, So VAR ID is equal to. And then context dot get argument. The argument is going to be of type integer. And we're going to use the ID key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). Now let us import the namespace for the get argument. Now the same way we are going to get the course so CTRL + C, CTRL + V. This is going to be VAR course in here. The return type is going to be the course and the name is going to be the course name. So course, and down here, we're just going to return that repository dot update course. We are going to pass two parameters, the ID and the course.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=241)** Then you, will see that we have some errors. And the reason for that is because we have the closing parenthesis in here. I'll just remove it from here. Put it down here and then add semicolon. Now let us save the changes. And this is all you need to do to resolve this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** var (2), ctrl (2)
> **UI Navigation:** go to (3)
> **Tools:** visual studio (1)
> **Speakers:** - [tutor] (1)

#### [Update data: Testing](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=0)** - So on the last part, you learnt how to create the object course mutation. On this part, let us test if everything works as expected. So now I'll just start this project. And then you go to UI and then graph QL. We do have the query to get all the data. So just clicking in here play, and you can see that we currently have two courses, one with the ID one and one with the ID two. Let us update the one with the ID two. So for that let us just type in here mutation and we are going to use the update course mutation. This will take two parameters. The ID is going to be two, and we already get an error in here. The reason for that is because the ID is expected to be of type integer. Just remove the double quotes. And that in here, the second permit it is going to be the course. And for the course, let's say we want to update the name. So the name is going to be updated. We want to also update the description. This is going to be updated. Then let's also update the review, and the review let's say is going to be two. Then if you want we can also update the date edit. And let us actually just copy this date in here. Control C place it in here. That changes to zero nine. Add that zero nine
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=95)** and then update it and for that date update it and us just scroll to the right, actually let's break it down here. The date updated value is going to be, let's say 10, then your 10. And what we want to get is the response, or what we want to return is going to be the ID, the name and the description.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=131)** Now from here let us remove the query. So control X. So we have just the mutation and I click the play button. Now you can see that the ID was updated. Now we can see that the course was updated. So let us just use the query. I'm going to remove the mutation and then click the play icon. And here you can see that the course with the ID two has the name updated, the description updated. And if you check for the review, that is going to be two as well, because that is the value that we set. Now the reason why we got zero in here, we use a mutation when we execute this mutation and we've got zero for the ID. So if I just try for example, in your updated one, since I have not defined the ID in here, and that is not necessary, we are going to get the ID zero as a response if I click play in here. You can see the ID zero, but you shouldn't worry about that value.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - so (1)

#### [Mutation to delete data](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=0)** - [Instructor] On this part, you are going to learn how to remove data from the database, using a mutation. For that, let us go to Visual Studio and see it in action. In Visual Studio, we need to go to the CourseMutation file, and then you are going to create another field. So now just type fields, and then in here, CourseType.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=28)** So the name for this field is going to be deleteCourse. Let's also add a description, and the description is going to be, Is used to delete a course from the database. And next we are going to have the arguments, and for us to be able to delete a course from the database, we need to use just the course ID, in here, new, and then QueryArguments, then inside here, we are going to have new QueryArgument,
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=73)** and this is going to be a NonNullGraphType. So we require this parameter when we want to call the deleteCourse mutation. And the type of this value is going to be the IdGraphType, and then in here, we need to define a name. So the name is going to be id, and then if you want, we can also add a description, and the description is going to be, Id of the course to be deleted. Then after the arguments, we are going to add the resolve. So resolve, and then in here, the resolve is going to be context, it goes to, and then inside here, we are going to first get the ID of the course that we want to delete, and the ID of that course is going to be var id is equal to, got to have context.GetArgument, the return type is going to be integer, so we are going to get an integer argument, and the name is going to be the id. And down here, we are just going to use the repository and then .DeleteCourse and pass as a parameter the id, and then in here, just return true. Now here at the end, let us just add a closing bracket
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=168)** and then semicolon. Now let us save all the changes and run this project.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=179)** Now here, I'll just go to ui and then [GraphQL](../../Skills/Web%20Development/GraphQL.md), and I'm going to use a mutation, instead I'm just going to pass the query so we can see the data, and then courses, and just id and name, and then click the play button. So we do have two courses in our database. Now let us use the deleteCourse mutation, and then in here, deleteCourse, the id is going to be 2, and then just id. And now let us click the play button, and here we can see that the deleteCourse was returned as null because we are just returning true. Now let's just type in here query, and then courses, and then id and name and click the play button, and you're going to see that we are going to get just a single course because the course with the id 2 was removed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Code Identifiers:** deletecourse (5)
> **UI Navigation:** go to (3)
> **Tools:** visual studio (2)
> **Speakers:** - [instructor] (1)


### 4. Querying and Mutating Relational Data with GraphQL in .NET Web API

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding relationship data](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=0)** - [Instructor] So far, we have worked with a single entity named course. You have learned how to query and mutate data, but real world apps you have more complex data types. You'll have to work with relational data, and that is what you're going to learn on the upcoming parts. But before you work with relational data, let us first update our existing database schema so we have a relational database. So for that, let us go to Visual Studio and see it in action. In here, if we go to the Solution Explorer, and then in here go to Data, then Models, inside the Course Class, you're going to see that we have an integer review. But a single course can have more than one review. So then I'll just comment out this line. So we are going to create a one-to-many relationship, then go to the Solution Explorer, right click on the Models then Add. We're going to add a new Class. We are going to name this class, the Review Class. Now inside this class, we are going to first have an identifier. So prop then double-tap. This is going to be an integer and then ID. Let us decorate this one with the key attributes of the database knows or the entity framework knows that this is the primary key in our database. And down here, we are going to have two properties. So prop, then integer rate.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=97)** We're going to have another property prop of type string and the value is going to be comment. And down here we're going to define the relationships of the relation. So we said that we're going to have a one-to-many relationships and here I'll just type public int, then CourseId and then get; set. And then down here we're going to have public course. We are going to name this one course and then get; set. Now under the framework is smart enough to know that the CourseId is going to be the primary key in the course model. But if you want, you can also define near the foreign key. So, the ForeignKey, lets import the namespace and that belongs to the ComponentModel.DataAnnotations.Schema and the foreignkey for the course is going to be the CourseId. Now, I want to see the changes in here and go to the course model. And you are going to now add the relation to the review model. So for that, I'll just type in here prop and then list of review. And then in here, Reviews. So this is all you need to do in the model side.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=189)** Now let us just go into the Solution Explore then here go to the AppDbContext. So we have defined in here a DbSet for the course. Now let us define a Db set for the review. So prop, this is going to be a DbSet and the type is going to be Review and the name is going to be the Reviews. Now let us see the changes and let us actually build the solution and fix the error. So Build, we see that the build fails so let us just go to the error list. Let's start with the first one. And we are updating course, so I'll just disable this one. I'm just going to fix the errors for now. Then let us go to this other one in here, and we need to also update or remove the CourseType in here, just. So in here we see that we have an error of the Field Review. I'll just comment out this line, save the changes, actually save all the changes. Now hear the last thing that is lucking is that we need to add a migration so we can update the database schema. So for that let us just go to the package manager consol and then you'll just type add-migration, the migration is going to be, let's say ReviewsAdded and then press enter. So you can see that the migration file was created
>
> **[4:44](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=284)** so we are basically dropping the review column from the courses and just adding a reviews table to apply this changes then just update and then database and press enter. Then here if you just go to the server explorer and then here connect to your database, so just right click, add a connection, and the server name is ETR and then sqlexpress. I'll use [Windows](../../Glossary/Service/Windows.md) authentication and then here sqlserver. And then using your windows authentication you'll search for the database, that is this database and if you do not know your database name you can just go to the Solution Explorer then go to appsettings.[JSON](../../Skills/Web%20Development/JSON.md) file and in here you have the data source, this is my database. So let me just go back to the Server Explorer and we have this connection here, just refresh, and you can that we have two tables. so we have the Courses table, and Reviews table. And if you can only just clean up the data in here, so just right lick and then Show Table Data and just actually keep this one
>
> **[6:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=380)** and just cancel the Server Explorer and let us add some reviews. Just, Show Table Data, the Rate is going to be nine. Comment, very good course, and the CourseId is going to be one. Let us also add another rate. Let's say Rate eight, Comment, good course, and the CourseId is going to be one and now we have two reviews for the same course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **UI Navigation:** go to (12), click on (1)
> **File Paths:** appsettings.json (1)
> **Env Vars:** etr (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Query to get relational data](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=0)** - [Instructor] On the last part, we manually added some data in the database. So, now let us add a query. So let us see how we can add a query to get relational data from the database. For that, let us got to Visual Studio and see it in action. And you're seeing as part of the response, we are going to also have the reviews. We need to create a new type in the Graph QL section. So, in the Solution Explorer, I'll just go in here to [GraphQL](../../Skills/Web%20Development/GraphQL.md), and then in the Types we have in here, the CourseType that I'll just actually copy paste these file. So control + C, control + V, and this is going to be the ReviewType. So, "Review," and this is going to be the ReviewType. Let us also change the name of the Constructor. The object graph type is going to be Review instead of Course. So in the review Field, we do have the ID. Then we do not have the Description or the Name. so I'll just remove Description, and the Name then the Review. But we do have in here, the Rate and the Comment. The type of the rate is an integer. So I'll just type in here "IntGraphType". And the type of the comment is "StringGraphType".
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=97)** Then up here we are going to have, let's say, "Rate property from the Review object." Up here we are going to have "ID property from the Review object." And then down here, we are going to have, "Comment property from the Review object." Now let us also change the file name and the name for this file is going to be ReviewType and then go to the CourseType and define the relationship between the course and the review. So in here, we commented out up here in the review field. So now we are going to define the relationship one to many, and then down here, we're going to type that now we are going to have a new field. The field is going to be the Reviews field. So in here x that goes to x.Reviews. And the type is going to be a list of ReviewTypes, so List<GraphTypes> of the ReviewType.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=179)** And actually the type needs to be wrapped in a type of, so that, oh. And then in here you can type that Description and the Description is going to be, let's say, "List of reviews." So this is all we need to do in here before we move to the next part, then I'll just go to the Solution Explorer. Then you'll go to Data, Repositories and then CoursesRepository. Let's scroll down here where we have the GetAllCourses. In here we're going to have courses that include, they're going to also include the reviews. So let us import the namespace for the Include() that is going to be the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).EntityFrameworkCore Then your n that goes to n.Reviews. Now let us save all the changes and this is all you need to do on this part. On the next one we are going to test what we've built so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Get relational data: Testing](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=0)** - [Instructor] On this part, we are going to test if everything that we have built so far works as expected. So for that, let us go to visual studio. And then in here, start this project. Then here, let us go to UI, then [GraphQL](../../Skills/Web%20Development/GraphQL.md). Then you are going to write a query. And the query that they are going to call is going to be the courses query. And then for each course, we're going to display the ID, the name, the description, and then the reviews. But in the reviews, we are going to display the rate and the comment. So this is all we are going to get from the database. And then click the play button up here. And here on the right, you can see that we get a response. Now, since we have just a single course in our database with the ID one, The name is Introduction to GraphQL. It has a description and then two reviews. One with the rate of nine, and one with the rate of 10, which are the rates that we manually added on the first part of this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2)
> **UI Navigation:** go to (2)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Mutation to add relational data](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=0)** - [Instructor] On this part, you are going to learn how to add relational data to the database. For that, let us go to Visual Studio. In Visual Studio, the first thing that we need to do is that we need to add a new input type so that I'll just go in here to [GraphQL](../../Skills/Web%20Development/GraphQL.md), and then, in here, inside the Types folder, we do have the CourseInputType. So let us also add a new one, so Control + C, Control + V to just create a copy. Now this is going to be the ReviewInputType, so Review and then InputType. But I'll change the name of the constructor, so Control + C, then paste in here. Let us also change the name in here, ReviewInputType, and then for the Review, we are going to have two fields. The first one is going to be of type integers, so IntGraphType. The name is going to be Rate. The second one is going to be of type string and the name is going to be Comment. Now let us remove the other ones, and this is all you need to do in this file. Now let us also go and rename this file, so from the CourseInputType Copy this is going to be the ReviewInputType.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=80)** So we have, in here, the ReviewInputType. Now since we are going to use the ReviewInputType with the CourseInputType, and it just goes with the CourseInputType. In here, now, we are not going to use the Review Field, but we are going to add a new one. So, in here, Field and the type is going to be a ListGraphType, and then, in here, passes a parameter, the ReviewInputType. And the priority name is going to be the Reviews priority. Now this is all we need to do in the GraphQL related call. So now let us just go to the Solution Explorer, and then you go to the Data, then Repositories, and CoursesRepository. In here, let us find the file or the method we use to add data to the database and that is the AddCourse. And, here, we are going to make some changes, as well, because we are going to store the course, and then after we have the course in the database we're going to add the reviews for that course. So, now, just type var newCourse is equal to new Course.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=167)** And, then, for this course we are going to provide the name, which is going to come from the course.Name. Then we are going to have the description, which is going to be course.Description. Then we're going to have the DateAdded course.DateAdded, and DateUpdated is equal to course.DateUpdated. Now, typically, you would set the DateUpdated to now, and the DateAdded would be just DateTime.now, but that is not the focus of this course. We are just going to pass these parameters from the request in the GraphQL. And then after you have everything related to the newCourse in here, you can just type _context.Courses.Add and then pass as a parameter the newCourse. So, in here, without the underscore, newCourse. Then after you add the newCourse, we're just going to type in here _context.SaveChanges. At this point, we also get the ID of the course that we just added. So, now, let us add all of the reviews of this course. For that, we're going to have a foreach loop, so foreach var review in the course.Reviews,
>
> **[4:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=258)** and then in here var newReview is equal to new Review. Then for each review we are going to have Rate. Rate is going to be the review.Rate. We are going to have a Comment. The Comment is going to be review.Comment. And we're going to have a CourseId, and the CourseId is going to be the newCourse.Id, so newCourse.Id, and then here at the end, we can just add this review to the database over that, _context.Reviews.Add, then you pass a parameter the newReview, and then _context.SaveChanges.
>
> **[5:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=317)** And then at the end, and then here at the end we can just clean up the code and just return the course. Now, on the next part, we're going to test if everything works as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (3)
> **Code Identifiers:** newcourse (7), newreview (2)
> **UI Navigation:** go to (3)
> **CLI Commands:** find (1), make (1)
> **Tools:** visual studio (2)
> **Speakers:** - [instructor] (1)

#### [Add relational data: Testing](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=0)** - [Instructor] On this part, we are going to test if adding relational data works as expected. So let us go to Visual Studio, and then in here, let us run this project.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=17)** Then it will let us go to UI and then [GraphQL](../../Skills/Web%20Development/GraphQL.md). Now, instead of a query, we are going to execute the mutation. So we're going to call a mutation or just cut these codes with control+X, and then here, mutation. Going to code the 'add course' mutation and you are going to have the course. Now the course is going to have a name. Say, the name is going to be Welcome Course. Actually, we need to use double quotes. So this needs to be a streak. Have double quotes. So you are going to have to insert the name. Then after the name, we are going to have the description. Type Welcome Course description. Then after the description, we are going to have the date edit. Date edit. And this is going to be, let's say a year. So 2020, then 11 11. Say, the date update is going to be 2020 at 12 12. And then we are going to also pass the reviews and for the reviews, we can just have an array of reviews. The first review is going to be, let's say, the rate.
>
> **[1:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=110)** Let's say five. The comment is going to be rate of five. And if you're... you can also add another rate, I'll just copy this one. Control+C and then paste it down here. Let's make this rate, say six. This is going to be rate of six. And then after this has been added, we're just going to return, let's say the name, the description, the date edit, basically everything that you've seen here. So edit that. Then update it. Then from the reviews, we're going to return the rate and the comment. Now let us click the play button and here now we can see that an argument was false. So the date edit doesn't have a valid date time. So let us just copy these values from here. Control+C, then paste it here, and also copy the date updated, Control+V and then click the play button. You can see that the new course was added successfully. Now, if you want to check all the courses from the database, I just type in here 'query', and then I'm going to call the courses, and then from the course, I want to get the ID, the name, and then I want to get the reviews. So here, just type 'reviews'.
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=208)** And from the reviews, I want to get the idea of the review. I want to get the rates and the comment, or we can actually just remove the ID and I click the play button. So before we used to have just a single course, now we have two courses. So one with the ID three and the other one that already was in there with the ID one. And then you have the descriptions and the reviews. So we did add two reviews of rate five and rate six. And we did have in the database rate nine and the rate eight.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps for learning more about GraphQL API](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=0)** - [Ervis] If you have made it so far, I want to thank you and congratulate you for watching this course. Through out this course you learned about [GraphQL](../../Skills/Web%20Development/GraphQL.md), and you started by having an introduction into concepts, [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) types, et cetera. The next you learned how to query data in GraphQL, where you build a query with two fields to get all the courses and a single course by IT. Next you learned how to mutate data. And we have said that in GraphQL to get data, you use queries but to add, update or delete data, you use mutations. By the end of this course, you learned how to query and add relational data to the database by using mutations. This is what we have learned so far, but what should you do next? Next, you can try and work some more with the relational data. So for example, you can try to update relational data with GraphQL, or delete relational data with GraphQL. In any case, if you have any questions about this course or .NET Technologies in general, feel free to get in touch with me via Twitter or [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). And if you want to learn more about .NET Technologies, check out my other courses here. And if you want to learn more about the .NET Technologies, check out my other courses here on LinkedIn Learning Hub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1)
> **Env Vars:** net (3)
> **Analogies:** for example (1)
> **Speakers:** - [ervis] (1)


## Instructor

- [Ervis Trupja](../../Instructors/Web%20Development/Ervis%20Trupja.md)

## Resources

- Exercise files available

## Skills Covered

- API Development
- ASP.NET Core
- GraphQL

## Path Context

### In [Getting Started as an ASP.NET Core Developer](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20as%20an%20ASP.NET%20Core%20Developer.md)
← [ASP.NET Core in .NET 6- Dependency Injection](ASP.NET%20Core%20in%20.NET%206-%20Dependency%20Injection.md) | **8 of 9** | [Building Web APIs with ASP.NET Core 8](Building%20Web%20APIs%20with%20ASP.NET%20Core%208.md) →

## Appears In

- [Getting Started as an ASP.NET Core Developer](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20as%20an%20ASP.NET%20Core%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Building Web APIs with ASP.NET Core 8](Building%20Web%20APIs%20with%20ASP.NET%20Core%208.md) — ASP.NET Core, API Development
- [Building GraphQL Applications in Laravel](Building%20GraphQL%20Applications%20in%20Laravel.md) — GraphQL
- [Building a GraphQL Project with React.js](Building%20a%20GraphQL%20Project%20with%20React.js.md) — GraphQL
- [Spring with GraphQL](../Software%20Development/Spring%20with%20GraphQL.md) — GraphQL
- [Programming with the Gemini Flash API](../Artificial%20Intelligence%20(AI)/Programming%20with%20the%20Gemini%20Flash%20API.md) — API Development

---

[↑ Back to top](#)