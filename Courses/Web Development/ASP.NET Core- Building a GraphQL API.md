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
  - '[[Getting Started as an ASP.NET Core Developer]]'
prev_courses:
  - '[[ASP.NET Core in .NET 6- Dependency Injection]]'
next_courses:
  - '[[Building Web APIs with ASP.NET Core 8]]'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":8,"total":9,"prev":"ASP.NET Core in .NET 6- Dependency Injection","next":"Building Web APIs with ASP.NET Core 8"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/api-development
  - skill/asp-net-core
  - skill/graphql
status: not-started
created: 2026-04-29
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
  - Using GraphQL API
  - What you should know
- [**1. Getting Started with GraphQL**](#1-getting-started-with-graphql) (5 videos)
  - What is GraphQL?
  - GraphQL vs. REST
  - Open-source GraphQL projects
  - .NET Web API project overview
  - Setting up GraphQL in Web API
- [**2. Data Querying with GraphQL in .NET Web API**](#2-data-querying-with-graphql-in-net-web-api) (8 videos)
  - Operations in GraphQL
  - Types in GraphQL
  - Adding your first object graph type (course entity)
  - Adding your first query: All courses
  - Challenge: Add query to get single course
  - Solution: Add query to get single course
  - Adding your GraphQL schema file
  - Testing
- [**3. Data Mutation with GraphQL in .NET Web API**](#3-data-mutation-with-graphql-in-net-web-api) (7 videos)
  - What is a mutation?
  - Adding your first mutation: Add data
  - Add data: Testing
  - Challenge: Mutation to update data
  - Solution: Mutation to update data
  - Update data: Testing
  - Mutation to delete data
- [**4. Querying and Mutating Relational Data with GraphQL in .NET Web API**](#4-querying-and-mutating-relational-data-with-graphql-in-net-web-api) (5 videos)
  - Adding relationship data
  - Query to get relational data
  - Get relational data: Testing
  - Mutation to add relational data
  - Add relational data: Testing
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps for learning more about GraphQL API

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Using GraphQL API
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980&t=0)** - With GraphQL, you can query your API and get exactly what you need.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980&t=5)** Nothing more and nothing less.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980&t=8)** With GraphQL, you get to access the full capabilities of your data, from a single endpoint.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980&t=15)** You can use GraphQL to create a uniform API across your entire application, and use a type system, to make sure that you only ask for what is possible.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980&t=26)** We'll start off by talking about the key concepts of GraphQL that you need to know to get the most out of this course.
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980&t=33)** Next, you'll learn how to set up the development environment, query data with GraphQL, and also add, update and delete data using GraphQL mutations At the end of this course, you'll work with relational data, where you learn how to get relational data using queries and add relational data to the database using mutations.
>
> **[0:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980&t=58)** Hi, I am Ervis Trupja and I'm a full [stack.NET](https://stack.NET) Web Developer and trainer.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/using-graphql-api?u=76281980&t=64)** Join me in my LinkedIn learning course, as we explore GraphQL in an [ASP.NET](https://ASP.NET) web API application.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), net (2), asp (1)
> **URLs:** [stack.net](https://stack.net) (1), [asp.net](https://asp.net) (1)
> **CLI Commands:** make (1)
> **Code Keywords:** delete (1)
> **Prerequisites:** set up (1)
> **Speakers:** - with (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-you-should-know?u=76281980&t=0)** - [Instructor] Now, let us talk about a couple of things that you need to know to get the most out of this course.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-you-should-know?u=76281980&t=6)** On this course, we are going to add GraphQL to an existing [ASP.NET](https://ASP.NET) Web API project.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-you-should-know?u=76281980&t=13)** So having a basic understanding of how Web API projects work is recommended, but it is not required.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-you-should-know?u=76281980&t=20)** As a programming language, I'll use C#.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-you-should-know?u=76281980&t=23)** And as a framework, I'll use the .NET Core version five, or as we call it now, .NET5.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-you-should-know?u=76281980&t=30)** As my coding editor, I'll be using Visual Studio 2019 Community edition, but you can use any version of Visual Studio 2019 or later.

> [!info]- Semantic Content
>
> **Env Vars:** net (2), api (2), asp (1), net5 (1)
> **Tools:** visual studio (2)
> **Code Keywords:** let (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with GraphQL

> [↑ Back to Table of Contents](#table-of-contents)

#### What is GraphQL?
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=0)** - [Instructor] Per definition, GraphQL is a query language for your APIs.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=5)** But why do we need GraphQL if we already have the REST APIs, which have been around for years and years?
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=13)** In traditional REST APIs, when you want to get specific data, you need to create specific API endpoints, or create specific return type DTOs.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=23)** So, for example, let us say you are building an app which is going to work with books and authors.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=28)** If you want to get all the books in this case, you'd have to create an HTTPGET request, and then have an API endpoint.
>
> **[0:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=36)** API then /books.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=39)** And if you want to get the details of a single book, then in that case, you would have API then /books, then slash the book ID.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=48)** Now, as you can see in here, the problem in this case is that for each response, you need to have a new or a separate API endpoint.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=59)** Now, let us just say that you need to get only the book title from the book object.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=65)** Now, in this case, you either have to create a separate API endpoint, or just create a new DTO, and then use a mapper to just get the data that you need, or you could just return the whole book and just use the title.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=80)** But in this case, you are getting from the server way more data than you need, and this is called the over-fetching.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=88)** So, basically you are just getting from the server way more data that you aren't using on the front-end side, or it could be the other way around when you need more data from the API, but the API is not capable of returning all that data, or you have to do a lot of joints to get that data, which is in this case called the under-fetching of data.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=109)** So, basically you are getting less data than you need.
>
> **[1:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=113)** With GraphQL instead of having multiple URLs or API endpoints, you have a single entry point, and from this entry point you can just specify the data that you need and you are going to get just that data.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=129)** So, basically there'll be no over-fetching or under-fetching of data.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=134)** Other than that, with the GraphQL, you can easily aggregate data from multiple sources, or use a type system to describe your data.
>
> **[2:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=144)** With a type system, you can easily describe a schema for your data.
>
> **[2:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=148)** So, then when you want to get the data, you can just specify the exact data that you need.
>
> **[2:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=156)** Now, throughout this course, we are going to use an existing web API project, and we are going to add GraphQL to this .NET Web API project.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-graphql?u=76281980&t=165)** Now, before we get started, or before we start typing any code it's important to know that in GraphQL, we have types, we have queries, and we have schema.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), rest (2), httpget (1), dto (1), net (1)
> **Code Keywords:** case, (4), let (2), this . (1)
> **Definitions:** is a  (1), is called (1)
> **Prerequisites:** you need to have (1), before we start (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### GraphQL vs. REST
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=0)** - [Instructor] First of all, it's important to know that REST and GraphQL are two API design approaches that fulfill the same function.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=10)** The data transmission over internet protocols, such as the HTTP.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=16)** However, the way they work varies significantly.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=20)** For example, the GraphQL is a query language, and REST is an architectural pattern.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=27)** On GraphQL, you have a single endpoint, and you basically customize the query based on the data that you need as a response.
>
> **[0:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=35)** On the other hand, you have multiple endpoints.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=39)** And we said that in complex applications, you have lots and lots of API endpoints.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=45)** For example, you could have an API endpoint to get all the courses.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=49)** You could have an API endpoint to get all the books and then to get the details, to delete them, and much more.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=56)** The GraphQL is client-driven architecture, but REST is server-driven architecture.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=64)** A downside of GraphQL is that in GraphQL you do not have automatic caching mechanism or API versioning, but the REST uses caching automatically, and also supports multiple API versioning methods.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=80)** In GraphQL, you only get to see data in JSON format, but REST supports multiple data formats.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=89)** In GraphQL, we do not have HTTP status code, but in REST we can use the HTTP status codes to identify the errors easily.
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=99)** Now, as you can see in here, the GraphQL has some advantages over the rest, but it also has some disadvantages.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/graphql-vs-rest?u=76281980&t=107)** Now, the main advantage that we have already mentioned is that in GraphQL, since you get just the data that you need, you do not have over-fetching or down-fetching of data.

> [!info]- Semantic Content
>
> **Env Vars:** rest (6), api (6), http (3), json (1)
> **Analogies:** for example (2), such as (1)
> **Code Keywords:** function (1), delete (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### Open-source GraphQL projects
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=0)** - [Instructor] Before we start building our GraphQL project, let us first have a look at some libraries that can be used in different programming languages to integrate GraphQL with the programming language of your choice.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=14)** Then, we are going to check some of the open source projects that are public and available for you to test and create a general idea on how the GraphQL works.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=26)** So let us navigate to this URL.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=28)** So the graph [ql.org](https://ql.org) then slash code.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=34)** And here on the landing page or the welcome page, if you just scroll down, and here you have the go to option, you can just go to the language support which is the section down here.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=46)** Then you could go to tools and services.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=50)** Now here you can see that the GraphQL is supported in multiple languages like the PHP. Java, C#, Python, the C or C++ and other programming languages.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=63)** Now in this course as I go into work with an existing .NET Web API project, We are going to use the C#.NET.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=72)** So if I just click in here, then here you can see that we have multiple implementations like for example this GraphQL then -dotnet.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=81)** And here you have an example down here you'd have another library, the hot chocolate that I just scroll down.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=88)** You have the GraphQL NET, the entity GraphQL and much more.
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=94)** Now let us just scroll up because on the upcoming parts, we are going to install all the necessary packages or libraries that we need to set up GraphQL in our Web API project.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=105)** And let us check some of the open source projects of GraphQL.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=109)** And here's some of the open source projects that you can check are the SpaceX API.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=114)** And as the name already indicates, this an API provided by SpaceX and you can check all the information related to this company by using the GraphQL.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=125)** Then you have the Countries API and the GitHub API.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=130)** You also have other APIs but I just thought that these three APIs are interesting ones but you can just Google search for other APIs and you'll get lots of results.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=142)** So here let us go to the SpaceX API.
>
> **[2:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=145)** So let us open the SpaceX API and you're going to get the welcome page to the SpaceX Graph API.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=150)** And if you'll scroll down in here, you are going to see that you can access the graph by using the API SpaceX, then .land and GraphQL.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=158)** In here you can also check some running operations like some examples on how you can use this GraphQL.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=165)** And then I'll just scroll up and click the Run.
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=168)** In Explore, just right click and then open in a new tab.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=173)** So in here we have an example query and basically here we are just requesting for the CEO of the company.
>
> **[3:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=182)** And then we are just getting these data from the roster query.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=187)** So there I'll just click example query so I'll submit the operation and then continue.
>
> **[3:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=194)** Here on the right you're going to get the response data.
>
> **[3:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=197)** For the company you have the CEO set to Elon Musk and for the roster you also have the location of the roster in the universe.
>
> **[3:27](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=207)** Now here on the left, you have some other options which you could use.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=211)** Like for example if you want to get a list of all of the dragons, then in this case, I'll just remove then you type dragons.
>
> **[3:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=220)** And let's say for the dragons, we want to get details.
>
> **[3:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=223)** I'll just click in here so I can see which are the available options.
>
> **[3:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=228)** You can see that we can get if the dragon is active and down here, the description.
>
> **[3:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=236)** So let's say we just want to get the active and description.
>
> **[3:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=239)** If you want, you can also get the ID.
>
> **[4:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=240)** So you can just click the plus button here, get the ID and then execute the query.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=246)** And here you have all the information that you requested from this GraphQL.
>
> **[4:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=251)** And as we saw in the description, all the requests or all the operations are being processed by this graph.
>
> **[4:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=260)** We also have the Countries API.
>
> **[4:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=263)** And if you check the description in here, 80 countries API, so you can basically just get the details for a country like the name, the native language, the capital, the emoji, the currency and languages of that country.
>
> **[4:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=278)** So I'll just click the running Explorer and then let us just remove all these and let's say we want to get all the countries.
>
> **[4:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=288)** So countries, and then for each country, we want to get the code and the name of that country and also the continent.
>
> **[4:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=297)** And in the continent, we want to get the code and the name.
>
> **[5:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=302)** Now let us click the execute button, then continue.
>
> **[5:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=307)** And now you can see that we get all the countries.
>
> **[5:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=309)** So we have the color of the country, where it is located and the code of the continent.
>
> **[5:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/open-source-graphql-projects?u=76281980&t=316)** On the upcoming parts, We are going to add the GraphQL to our Web API project and you will be able to request only the data that you need in our Web API project as well.

> [!info]- Semantic Content
>
> **Env Vars:** api (14), net (3), ceo (2), url (1), php (1)
> **Code Keywords:** let (11), continue (2), public (1), case, (1)
> **UI Navigation:** go to (4), scroll down (3), scroll up (2), navigate to (1), open the (1)
> **CLI Commands:** php (1), python (1), dotnet (1)
> **Prerequisites:** before we start (1), install (1), set up (1)
> **Analogies:** for example (2)
> **URLs:** [ql.org](https://ql.org) (1)
> **Cross-References:** as we saw (1)

#### .NET Web API project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=0)** - We have said that throughout this course we're going to use a .NET web API project.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=4)** So before we type any code that is related to the GraphQL, let us have a look at this project.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=10)** This is a simple .NET API project and in here we have just a single API end point.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=17)** So if you just go to controllers and then inside the controllers folder, we have the courses controller.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=23)** This is our only controller.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=25)** Then inside the data folder, we do have a module.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=28)** The module name is of course our C-sharp, which has properties like the ID, the name, description, review, the date added and date updated.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=37)** And inside the repositories, we do have a single repository, the courses repository.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=43)** Which by using the App Db context file, it gets all the courses from the database, It gets a single course by using the ID, It adds a new course, It updates an existing course, And at the end, it also deletes a course from the database.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=61)** The application Db Context in here we have defined the Db Context options.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=66)** And then we have a single Db set, which is named courses.
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=70)** Then you have the app settings, the Jason file, And in the app settings the Jason file we do have the default connection string.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=76)** So our database connection string, we have the program .CS which is the entry point of the web API project.
>
> **[1:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=83)** And the startup.CS.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=86)** In the startup.CS, If you scroll down, you have just configured in here, the application Db context.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=92)** And here we have defined that we want to use an SQL server database.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=97)** And then down here we have also added, or we have also configured the courses repository.
>
> **[1:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=102)** In this app I have also added the Swagger and the Swagger is used to just visualize the API end points.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=111)** Now to this project I've also added Swagger and the swagger is a tool or a library that is used to visualize the API endpoints.
>
> **[2:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=120)** So then I'll just click the run button or the play button up here to see the result.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=125)** So in here you can see that we are redirected to Swagger, and now you can see we have five API end points.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=131)** to get, one post, a put and a delete.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=133)** So let us just add a course.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=136)** Post then try it out.
>
> **[2:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=138)** And you would not need to define the ID because the ID is going to be generated by the database.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=143)** The course name is going to be, let's say, introduction to GraphQL.
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=151)** The description is going to be, this is a quick introduction.
>
> **[2:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=156)** So let's say GraphQL, the review for this course, that is going to be nine.
>
> **[2:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=163)** I'm not going to change the date added and data updated because they are just for demo purposes.
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=168)** and I click the execute button.
>
> **[2:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=170)** And then down here you can see that course with the ID one, And then I'll just scroll up.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=175)** I'll close this one.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=175)** If you want to get all the courses, just go to Get and try it out.
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=180)** Execute.
>
> **[3:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=181)** Here you can see we have a list of courses, but since we have just a single course, we're going to have just an item in here.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=187)** So the course with the ID one, if you want to get the details, you can also use the API courses ID.
>
> **[3:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=193)** So try it out.
>
> **[3:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=196)** ID one, and then execute.
>
> **[3:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=200)** Here we have the result.
>
> **[3:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=202)** The same way you can just update and delete this course.
>
> **[3:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=205)** And here in the App Db Get, where you get the details of a course.
>
> **[3:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=209)** If you want to get, for example, just the name.
>
> **[3:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=212)** Then in that case, you'd have to go and create either a different API end point or just create a detail.
>
> **[3:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=221)** So just like a view module and then return just the name by using the same code but by using an AutoMapper.
>
> **[3:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=231)** Now, in these case, for example, where we get the details of a course, if you want to get from the course, just the name and the description, what you have to do is you have to go back and either create a new API endpoint or create a new DTR class and use that class together with an AutoMapper to just get these two values.
>
> **[4:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=252)** Now you can imagine that if you want to get just the name or just the description or just the review in all these cases, you have to either create the API end points or new details and then use the AutoMappers.
>
> **[4:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=264)** And this is why the GraphQL is really useful because you define a type, you define a query, then you define the schema.
>
> **[4:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/dot-net-web-api-project-overview?u=76281980&t=274)** And then by using all these three components together, you can just request for any property that you want to get.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), net (2), sql (1), dtr (1)
> **Code Keywords:** let (4), module (3), delete (2), case, (2), type, (1)
> **UI Navigation:** go to (2), scroll down (1), scroll up (1)
> **Analogies:** for example (2), just like (1), imagine (1)
> **Definitions:** is a  (3)
> **Speakers:** - we (1)

#### Setting up GraphQL in Web API
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=0)** - [Tutor] Now that you know what GraphQL is all about and also had an overview of the Web API project, it is time to get our hands dirty, and start working on the actual project.
>
> **[0:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=12)** On this part, we are going to install all the necessary packages, and also partially set up the GraphQL in the startup.csclass.
>
> **[0:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=22)** So then I'll just go back to our project.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=25)** And then we're going to first install the NuGet packages, after that, then I'll just go to dependencies right click then go to Manage NuGet packages, or you can just go to tools, and then you go to NuGet Package Manager, and then Manage NuGet Packages for for Solution.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=45)** Now you go to Browse, and then you let us search for GraphQL.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=51)** So graph and then QL.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=54)** We are going to install this package so the GraphQL package.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=59)** Then here select the project, and then install.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=65)** Then you later search for graphiql.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=69)** This is the package and it says in here that the GraphiQL is available as a middleware for [ASP.NET](https://ASP.NET) Core.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=76)** And then you click install.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=80)** Then accept the license.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=82)** And the package is installed.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=84)** Now let us search for another package and that is going to be the graph.server.transports.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=93)** And then select this package of the AspNetCore.SystemTextJson and then click install.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=105)** And the last package that we're going to install is going to be graph then server, then in here UI, and then GraphQL.
>
> **[1:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=118)** So, this package in here, and then click the install button.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=125)** Now let us just go to the Solution Explorer.
>
> **[2:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=128)** And then you go to Dependencies and then go to Packages.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=132)** You're going to see in here all the packages that we just installed and also the entity framework core, the SqlServer, the tools and the SwashbuckleAspNetCore.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=142)** You can see in here that these packages, are the 5.0 and a number after the zero, which means that we are currently using the .NET core version five.
>
> **[2:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=152)** So the 5.0, or as we also call it now the .NET 5.O.
>
> **[2:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=159)** So now let us go to these Startup.cs.
>
> **[2:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=162)** And then here we have two methods.
>
> **[2:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=166)** Let's scroll down.
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=168)** And then down here it also says that this method gets called by the runtime and use this method to configure the HTTP request pipeline.
>
> **[2:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=178)** So just after the addScope for the course repository, we're going to just add in here the GraphQL so GraphQL.
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=186)** And here we're going to type services.AddGraphQL.
>
> **[3:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=196)** And then after .AddGraphQL, I'm going to use the .AddSystemTextJSON method sorter.
>
> **[3:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=204)** Add and then SystemTextJSON method.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=213)** Now let us import namespace for this one.
>
> **[3:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=217)** And then is going to be the GraphQL.Server and we need this method so the GraphQL is able to compose a JSON response so now we can see the response, in our result.
>
> **[3:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=228)** And if you hover on this method, you can see that this returns a GraphQLBuilder.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=233)** And in the description it says that it adds, IGraphQLRequestDeserializer, and the DocumentWriter to the service collection with the provided configuration or settings.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=246)** And here if you want you can also define some options.
>
> **[4:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=249)** Now for example options that go to options.EnableMetrics and then you can set this to true but we do not need the metrics to be enabled so I'm just going to remove, this option in here and then scroll down to the other method, which is the configure method.
>
> **[4:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=270)** In here the same way we are going to also use so we are going to define the usage of the GraphQL so, GraphQL.
>
> **[4:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=281)** And then here I'm going to type app.Use.
>
> **[4:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=290)** But on here we need to define the schemaClass but since we have not created this schemaClass we're just going to comment out this line for now and once we have the schemaClass, we are going to enable this line.
>
> **[5:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=303)** And then here we're going to have app.UseGraphQL and then GraphiQL and this is used to visualize or to run like an interface so we can interact with the GraphQL.
>
> **[5:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=319)** Think of the GraphQLGraphiQL as the Swagger dashboard that we get when we configure Swagger.
>
> **[5:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=329)** And then in here if you want, you can define a custom string path or you can just leave the default one which is ui/graphiQL.
>
> **[5:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=337)** So I'll just define the custom one that is going to be ui, and then slash graphql.
>
> **[5:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=346)** So let us add another slash in front of the, UI.
>
> **[5:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/setting-up-graphql-in-web-api?u=76281980&t=353)** Now let us save all the changes and this is all you're going to do, in this part.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (10), scroll down (2), select the (1)
> **Prerequisites:** install (8), configure (3), set up (1)
> **Code Keywords:** let (8), interface (1)
> **Env Vars:** net (3), api (1), asp (1), http (1), json (1)
> **Code Identifiers:** schemaclass (3), addscope (1), graphiql (1)
> **Versions:** 5.0 (2)
> **URLs:** [asp.net](https://asp.net) (1)
> **Cross-References:** go back to (1)


### 2. Data Querying with GraphQL in .NET Web API

> [↑ Back to Table of Contents](#table-of-contents)

#### Operations in GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=0)** - When you create an API to be able to work with data, you create the API end points and then send to these API end points, HTTP requests.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=10)** You send the HTTP GET to get the data.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=14)** HTTP DELETE to remove the data, etcetera.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=17)** And you have already seen the swagger visualization of our API, that I have already created.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=24)** In GraphQL to work with data, we have two main types of operations.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=31)** We do have a vQuery type and as the name already indicates, the query type is used to query data.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=38)** So to read data from a data source.
>
> **[0:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=41)** We also have the mutations, and mutations are used to write data or to store data in the data store.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=50)** We also have another operation type in GraphQL, which is the subscription type.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=57)** The subscription type is a way to create and maintain a real time connection with the GraphQL server.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=64)** On the upcoming parts, you are going to learn how to query data.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=68)** So how to get data from the database using the query type operation.
>
> **[1:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/operations-in-graphql?u=76281980&t=72)** And you'll also learn how to store data in the database, using the mutation type operation.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), http (3), delete (1)
> **Code Keywords:** delete (1), type. (1)
> **API Endpoints:** get  (1), delete  (1)
> **Code Identifiers:** vquery (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### Types in GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=0)** - [Instructor] We have said that GraphQL is a strongly typed language.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=4)** The type system is used to define different data types that can be used in a GraphQL application.
>
> **[0:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=12)** In GraphQL, we have different types and these types are grouped into two main categories.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=20)** We have the basic types and the object types.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=25)** Some examples of the basic types are the string, the integer, the float, the boolean, the ID, etc.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=34)** But how can we use these types of GraphQL in our .NET application?
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=40)** Well, since we are using the library, so we are using the GraphQL for .NET, Let us check all of them one by one.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=47)** So in GraphQL, we have the string type in .NET, we have the same type the string type, but in our library, GraphQL for .NET we have the StringGraphType.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=59)** So that way, when we configure the string type of GraphQL in .NET we're going to use the StringGraphType definition.
>
> **[1:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=67)** For integer, we do have the IntGraphType, for DateTime, we do have the DateTimeGraphType, for the Boolean we do have the BooleanGraphTypeID and for the last one, which is a special type in GraphQL and in .NET, we have, for example, integers, long, string, and we just decorate these properties with the key decorator and we know that that property is the identifier of that class or that entity.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=100)** In GraphQL we have the ID keyword and the same keyword exists in GraphQL for .NET and that is the IdGraphType.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=109)** So these are some examples of the basic types in GraphQL.
>
> **[1:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=114)** So these are some examples of the GraphQL types.
>
> **[1:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=118)** but we said that other than the basic types, we also have the object types.
>
> **[2:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=122)** And in here we have an object type in GraphQL.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=126)** So we have the type in the beginning then we have the type name in this case the name is ExampleObject and inside of this object, we have two properties.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=135)** The first one is ID of type integer and the second one is name of type string, but how can we write the same type in the GraphQL for data which we are going to use in the upcoming parts?
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=149)** So in the first section, we have a declaration of an object type in GraphQL.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=154)** The name of the object is example.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=157)** We do have ID of type integer and name of type string.
>
> **[2:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=161)** If you're going to write the same type or class in C-sharp, that is going to be public class example, then we're going to have public int Id and then string name.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=174)** Now, in GraphQL for .NET what we're going to do is we're going to create a class with the name of the class that we would normally write in .NET so in C-sharp, but we are just going to add the type ending, then we are going to inherit from the ObjectGraphType and then in here best is a barometer the object name.
>
> **[3:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=193)** So in here we have the example, we are going to pass the example as a barometer in here.
>
> **[3:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=198)** Then down here, we create a constructor and inside this constructor, we are going to have our values of the ID and the name value.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/types-in-graphql?u=76281980&t=206)** And of course, for these two properties, you can define the types as well.

> [!info]- Semantic Content
>
> **Code Keywords:** for . (4), public (2), let (1), type, (1), pass (1)
> **Env Vars:** net (9)
> **Definitions:** is a  (3)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Adding your first object graph type (course entity)
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=0)** - [Instructor] On this part, we are going to create the first object type in our project.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=5)** And for that, we are going to create the course type.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=8)** So let us go to Visual Studio and see it in action.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=11)** In here, I'll just go to the Solution Explorer and then I'll create a new folder.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=16)** So add and then new folder.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=20)** I'm going to name GraphQL because in here I'm going to put all the GraphQL related code for GraphQL.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=28)** And then inside here we are going to have types, so I'll just right-click then go to new folder.
>
> **[0:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=35)** I'm going to name this folder the types folder.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=39)** And here we are going to add the first type and that is going to be the course type.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=43)** And the reason why we are adding the course type is because in the data folder, in the models, we have the course model.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=51)** And this course is just a C# class.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=54)** It has some properties.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=55)** The first one is of type integer, but it has the key decoration in here, which means it's going to be the primary key in our database.
>
> **[1:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=62)** Then we have the name and description of type string.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=65)** We have the review of type integer, and then the date added and date updated of type date time.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=73)** So in here then I'll just go to the Solution Explorer, I'm just going to pin the Solution Explorer in here.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=80)** And then in here in the types, I'm just going to right-click then go to add.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=85)** We're going to add a new class.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=88)** Now let us say I'm on board.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=89)** First type the course type and then click the add button.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=96)** In here to create an object type of GraphQL, we have said that we need to inherit from the base class object graph type and (mumbles) the model name.
>
> **[1:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=105)** So in here column and then object graph type.
>
> **[1:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=112)** Let us important the namespace and the namespace is going to be the graphql.types.
>
> **[1:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=119)** And then here past the bar meta the course model.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=124)** So let us import the namespace and that is going to be the courses that graphql.data.models.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=131)** Now, inside here we said that we are going to create a constructor.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=135)** So to create a constructor, just type cto and then double tab, the constructor is created.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=141)** And now inside these constructor, we are going to define all the properties or all the fields of this object type.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=150)** So let us start with the first one.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=153)** There's going to be field.
>
> **[2:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=156)** And we are going to create our first field for x that goes to x.Id.
>
> **[2:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=166)** Then next thing here we are going to define the type.
>
> **[2:49](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=169)** So the type of this field.
>
> **[2:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=172)** So type.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=174)** And this is going to be type of.
>
> **[2:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=177)** And the type of these field is going to be the Id graph type.
>
> **[3:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=181)** So Id graph type.
>
> **[3:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=184)** Now, if your wondering here you can just define the description as well or you can just type .description and then provide a description for this field.
>
> **[3:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=196)** So I did not say this is going to be the Id property from the course object.
>
> **[3:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=204)** Now, let us create the other ones.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=206)** At the end, I'll just add semi colon and then create the other one.
>
> **[3:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=209)** I'm just scrolling here to the left.
>
> **[3:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=212)** The other property is going to be for the name.
>
> **[3:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=214)** So field and then in here x.
>
> **[3:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=218)** That goes to x.description.
>
> **[3:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=221)** The type and the type is going to be for this one type of.
>
> **[3:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=228)** And the type is going to be the string graph type.
>
> **[3:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=232)** And then if you want, you can either add the description in here or you can just add the description at the end.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=237)** I'll just close actually the Solution Explorer so we have more space.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=241)** I'm just going to copy this part.
>
> **[4:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=243)** So control C and then just paste it in here.
>
> **[4:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=247)** And the description is going to be description property for the course object.
>
> **[4:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=254)** Now let us copy the last line so control C just paste it in here.
>
> **[4:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=258)** And then we are going to have a field for the name.
>
> **[4:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=261)** The type is going to be the same, string graph type.
>
> **[4:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=263)** And this is going to be the name property from the course object.
>
> **[4:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=268)** The other one is going to be review.
>
> **[4:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=271)** And if you check the review type is of type integer.
>
> **[4:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=274)** In here, you can just change int graph type and then in here review.
>
> **[4:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=283)** We're already from the course object.
>
> **[4:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=285)** Now the description is optional so if you don't want to, you do not have to provide a description.
>
> **[4:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=292)** Then here, this is going to be the date edit and the type is going to date time, graph type.
>
> **[4:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=299)** And this is going to be the date edit.
>
> **[5:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=303)** The other one is going to be the date updated and the type in here's going to be the date time graph type.
>
> **[5:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=310)** And the here change the field from description to be the date updated.
>
> **[5:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=315)** And this is how you can create an object type in GraphQL in a .NET application.
>
> **[5:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=323)** I'll just remove the extra space.
>
> **[5:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-object-graph-type-course-entity?u=76281980&t=325)** And this is all for this far.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (12), let (7), class. (2), type . (1)
> **UI Navigation:** go to (5), right-click (2)
> **Env Vars:** net (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Adding your first query: All courses
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=0)** - [Instructor] So, in the last part, we created a custom object type of GraphQL, we named that type the CourseType, and in here, we defined all the fields, so all the properties.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=11)** Now we have said that to get data from a data source, and in our case, we're going to use an SQL Server Database, we're going to create, or we have to create a Query, and that is what we're going to do on this part.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=24)** So let us go to the Solution Explorer, and then in here go to GraphQL.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=30)** In here, we're going to create a new folder. So add a new folder.
>
> **[0:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=36)** We're going to name this folder, the Queries folder.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=40)** So, Queries folder.
>
> **[0:44](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=44)** Now inside this folder, we're going to add a single file.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=48)** So add a Class.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=50)** we're going to name this Class, the Query, or let us just name it the CourseQuery.
>
> **[0:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=58)** And then click the Add button.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=61)** Now for the Course Query, we need to inherit from the base class object graph type.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=66)** So, as you head from the object graph type and let us import the NameSpace and the NameSpace is going to be GraphQL.Types, and then inside we're going to create a constructor, so ctor is a shortcut and then Tab key.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=86)** Now we're going to define the return, so we're going to define the return in this way, and that is going to be a field and they would turn type is going to be a ListGraphType.
>
> **[1:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=101)** So we're going to return the list part of course we're using the [GraphQL.net](https://GraphQL.net), so that is ListGraphType.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=107)** And the items in this list are going to be of type CourseType.
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=111)** So let us just copy this name Control+C and then paste it in here.
>
> **[1:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=116)** Let us import the NameSpace.
>
> **[1:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=119)** The NameSpace is going to be a GraphQL and then Types.
>
> **[2:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=123)** And then now in here, we're going to first define a name for this Query.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=131)** The name is going to be "courses."
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=134)** So what this means is that we're going to use the courses keyword when we want to get the list of courses.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=140)** Then you, if you want, you can add a description.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=143)** So I'm here. I can just type, it "Returns list of courses."
>
> **[2:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=148)** And then down here, we're going to define where we want to get this data from.
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=154)** And you'll just type resolve.
>
> **[2:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=156)** The resolve we're going to have a context and now you'll need to define the actual place where we want to get the data.
>
> **[2:44](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=164)** And yeah, I have already created a repository, so if you go to data folder, then repositories and here we have the CoursesRepository.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=173)** we're going to use this repository to get data from the database and this repository uses the application DB context file.
>
> **[3:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=182)** So in here that just go to the CourseQuery, and of course for us to be able to use this repository, we need to inject it's up here, CoursesRepository and then just repository is going to be the name let us support the NameSpace that is going to be Data.Repositories and then in here, I'll just type repository.GetsAllCourses.
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=208)** And this is a method in the repository to get all the courses.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=213)** So in here, if you go to the CourseRepository, in here you have this method, it basically gets all the courses from the database and returns a list.
>
> **[3:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-query-all-courses?u=76281980&t=223)** So here in the CourseQuery these is all you need to do on the next part and this is all you need to do in this part.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1), class. (1), class, (1), type. (1)
> **UI Navigation:** go to (5)
> **Definitions:** is a  (2)
> **URLs:** [graphql.net](https://graphql.net) (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add query to get single course
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-add-query-to-get-single-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-add-query-to-get-single-course?u=76281980&t=0)** - [Instructor] So far, you have learned how to create the course query, and in this query you added the first field to return a list of course types.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-add-query-to-get-single-course?u=76281980&t=9)** Now, it is time for you to get the hands dirty and write some code.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-add-query-to-get-single-course?u=76281980&t=14)** So we created the query field to get the list of course types.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-add-query-to-get-single-course?u=76281980&t=19)** You can now go ahead and add a new field to get a single course type.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-add-query-to-get-single-course?u=76281980&t=23)** For that, you'll need to first add a new query field, then define the keyword or the name of that field, so how you want to call that field, and then at the end, resolve or get the result by using the course's repository.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-add-query-to-get-single-course?u=76281980&t=40)** So give it a try and in case you fail to solve this challenge, you can check the solution on the next part.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Add query to get single course
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=0)** - On the last part I asked you to add a new field in the course query to get a single course site.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=7)** So let us now go to Visual Studio and check how I solved this challenge.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=13)** In your Visual Studio, just go to the course query, and then here we're going to add a new field.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=19)** So for that, I'll just type in here "field."
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=24)** The return type will not be a list graph type but just a course type, so "CourseType."
>
> **[0:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=33)** Then inside here, we said that we need to define the key word or the name.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=40)** So for that, I'll just type in here, "course."
>
> **[0:44](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=44)** So we have the courses in here because we are returning a list, but here we are getting just a single course type, so just "course."
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=52)** And a description.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=54)** So this is just going to return.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=57)** "This returns a single course by ID."
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=66)** And then down here, we are going to define the rest of the code.
>
> **[1:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=70)** Now, as you can see in here, the third one is the query arguments.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=75)** So since in this case, we are going to get a course by ID, we need to pass some arguments and that is going to be the course ID.
>
> **[1:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=83)** So for that, I'll just type "new QueryArguments."
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=89)** And then inside the query arguments, I'm going to pass just a single argument, but as you can see, it expects as a parameter an array of arguments.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=98)** So now I'll just type "new" and then "QueryArgument," then define the type of this argument and the type is going to be the identifier.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=108)** So a non null graph type.
>
> **[1:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=115)** And the type is going to be an Int graph type.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=121)** So what basically defined in here is that we defined that the parameter for the query arguments is going to be of type integer, but it is a required parameter.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=132)** And then in here, we're going to define the name.
>
> **[2:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=139)** So the name of these parameters is going to be ID.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=143)** And a description can be, so let's say description is going to be "Course ID."
>
> **[2:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=151)** And then after you define the query arguments, we are going to define the result.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=158)** So in here I'll just type, "resolve," and then to get a response, we are going to use the repository.
>
> **[2:44](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=164)** So on here, "context."
>
> **[2:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=168)** That goes to, and the response is going to be the repository.
>
> **[2:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=172)** So "repository," and then "GetCourseById."
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=179)** And then here, we are going to pass as a parameter, the ID that is going to come from the query arguments.
>
> **[3:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=185)** And to get the argument in here, I'm going to type "context.GetArgument," so "context.GetArgument."
>
> **[3:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=199)** and then to get this argument, we need to define the keyword that we want to use.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=203)** And here we have defined that the name is going to be ID.
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=208)** So now just type ID.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=211)** But since we made this argument a non null graph type, then here, we are going to define an optional, so like the default value.
>
> **[3:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=219)** And the default value is going to be just "int.MinValue."
>
> **[3:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=225)** And here, let us import the namespace for the get argument.
>
> **[3:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=228)** And that is going to be the GraphQL.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=233)** And this is all you need to do in here.
>
> **[3:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=235)** So let us actually just get this path, this is from here to here.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=241)** And then I'll just put semicolon and that's it.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-add-query-to-get-single-course?u=76281980&t=246)** So this is all you need to do to create these two fields for the course query.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (4), pass (3), type. (2), return. (1)
> **Tools:** visual studio (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - on (1)

#### Adding your GraphQL schema file
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=0)** - [Trainer] On this part, we are going to create the last piece of the puzzle to get data from the database.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=7)** That is the schema of the GraphQL.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=10)** The GraphQL schema is used to define which data is available for the users.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=17)** So let us go to Visual Studio and see it in action.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=21)** In here, I'll just go to the Solution Explorer, because I'm going to add a new file.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=25)** So inside the GraphQL folder, just right click, then go to Add, and then Class.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=34)** Now for this file to be the application schema, we need to inherit from the base class, Schema.
>
> **[0:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=41)** So I'll just type in here schema, then import the namespace and the namespace is going to be the GraphQL.Types.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=51)** Then here just create a constructor.
>
> **[0:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=53)** So ctor, then double-tap.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=56)** And then inside here, I'm going to inject the Query file that I have created.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=61)** And that is the CourseQuery.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=64)** So in here, just type CourseQuery and then import the namespace for the CourseQuery and that is the GraphQL.Queries.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=77)** And then here, the name is going to be the query.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=81)** Then inside this construct, I'm going to type that this.Query.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=85)** So the Query file is going to be the query, which is in this case, the CourseQuery file.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=93)** Now this is all you need to do for now on the app schema.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-graphql-schema-file?u=76281980&t=98)** On the next part, we are going to configure or we are going to update the start-up, the CS file, and then we're going to test what we have created so far.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), class. (1), class, (1), this. (1), case, (1)
> **UI Navigation:** go to (3)
> **Tools:** visual studio (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [trainer] (1)

#### Testing
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=0)** - [Instructor] So now that we have created all we need to create to set up the GraphQL in our web API application, we are going to start our app and test what we have created so far.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=11)** But before we do that, we need to add one more line.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=15)** So let us go to Visual Studio and see it in action.
>
> **[0:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=18)** In Visual Studio, just go to the Startup.cs file.
>
> **[0:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=23)** And then in here scroll down to the Configure method.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=27)** And then in here, comment out this line.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=31)** So app.UseGraphQL.
>
> **[0:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=34)** And in here we are going to use the AppSchema class.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=39)** So let us just import the namespace, GraphQL, and here add semicolons, save all the changes, and start this project.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=54)** So on here we can see that the app ran successfully.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=57)** Now let us just go to our GraphQL.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=59)** So for that, in here we define that the GraphQL you are at least going to be UI, and then slash GraphQL, and then press enter.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=68)** And now you can see that the GraphIQL is loaded.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=71)** Now to get data from our queries, I'll just remove this code and here I'll just type curly brackets.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=77)** And then let's say, I want to call the courses query.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=81)** And from here, I want to get the ID, the name and the description.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=86)** And then click the play button up here.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=89)** And here you can see that we get an error, which says that unable to resolve the service for the epic issue schema.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=98)** So let us just go back to visual studio.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=100)** And if we go to the application schema, so go to definition, we can see that in the application schema, we use the course query.
>
> **[1:49](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=109)** So let's just go to the Startup.cs.
>
> **[1:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=113)** And then in here, scroll up.
>
> **[1:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=116)** We have added the courses repository.
>
> **[2:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=120)** Let us also add services.AddScoped.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=125)** And this is going to be for the course query.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=129)** So, course query.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=134)** Let's import the namespace.
>
> **[2:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=136)** That's going to be graphQL.Queries.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=141)** And in here, let us also add services.AddScoped.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=149)** I'm going to go into add in here, the AppSchema.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=157)** Now let us save all the changes and then just restart this project.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=165)** In here now, let us go to UI, then graphql.
>
> **[2:49](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=169)** Press enter.
>
> **[2:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=172)** Also remove this part.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=174)** And then just in here type courses.
>
> **[2:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=176)** Now you can see here that we get some suggestions and down here can see that we have the course type and the description that we added, which says returns a single course by ID.
>
> **[3:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=186)** And on the second one, we have that it returns a list of courses.
>
> **[3:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=191)** So I'll just choose the second one.
>
> **[3:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=194)** Now, inside here, we are going to use the ID.
>
> **[3:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=197)** And the ID says, is the ID property for the course object.
>
> **[3:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=202)** These are all the descriptions that we provided on the previous parts.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=206)** We can define the name and the description.
>
> **[3:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=209)** And then click in here the play button.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=213)** And here on the right, you can see that we get some data and we get a list of courses.
>
> **[3:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=218)** And in our case, we just have a single course.
>
> **[3:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=220)** And if you want to use the other query field, just type in here course.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=226)** And this one expects the ID parameter.
>
> **[3:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=230)** And the value is going to be, let's say one, because we have a course with the ID one.
>
> **[3:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=235)** Let's hit down here, we just want to get the name.
>
> **[3:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=238)** And in here you can see that the name is Introduction to GraphQL.
>
> **[4:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=242)** Now let us click the play button.
>
> **[4:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=245)** We do get that course and just the name field.
>
> **[4:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=250)** Now let us change the ID to let's say 123, and we know that we do not have such course in our database, and click play.
>
> **[4:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/testing?u=76281980&t=259)** Now you can see that the course value is null.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), class. (1), case, (1)
> **UI Navigation:** go to (7), scroll down (1), scroll up (1)
> **Tools:** visual studio (3)
> **Prerequisites:** set up (1), configure (1)
> **Code Identifiers:** graphql (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Data Mutation with GraphQL in .NET Web API

> [↑ Back to Table of Contents](#table-of-contents)

#### What is a mutation?
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=0)** - [Instructor] We have previously mentioned that any operation that involves data manipulation is done by mutation.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=7)** To add data, you need a mutation.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=11)** To update data, you need a mutation.
>
> **[0:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=14)** And to remove data, you also need a mutation.
>
> **[0:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=18)** So basically, mutations are used to modify data in a data store and return a value.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=25)** In our case, the data store is the SQL server database.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=30)** A query in comparison to REST APIs is like the GET request.
>
> **[0:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=35)** And the mutations are like the state changing methods, which for example, are the POST, the DELETE, the PUT, et cetera.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/what-is-a-mutation?u=76281980&t=45)** On the upcoming parts you're going to add a mutation file and then in this file, you're going to add different fields which you're going to use to modify data in our database.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), rest (1), post (1), delete (1), put (1)
> **Code Keywords:** case, (1), delete (1)
> **API Endpoints:** get  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Adding your first mutation: Add data
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=0)** - [Instructor] On this part, we are going to add our first mutation file.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=5)** And in this mutation file, we're going to add our first method or the first field.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=11)** And then we are going to use this field to add new data to the database.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=16)** So for that, let us go to Visual Studio and see connection.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=20)** In here, I'll just go to the Solution Explorer, and then you go to the GraphQL.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=26)** And here since we're going to add our first mutation, let us just right-click and then add a new folder.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=32)** Let us name this folder, the Mutations, and then right-click, go to Add.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=40)** We're going to add a new class.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=42)** We are going to name this class, the CourseMutation.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=46)** Mutation, and then click the Add button.
>
> **[0:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=51)** Now for this file to be a mutation file, we need to enhance from the base class ObjectGraphType.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=59)** So in here, enhance from the ObjectGraphType.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=66)** Now let us just remove the extra S from here and then import the namespace.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=73)** That is going to be the GraphQL.Types.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=76)** And then here, I'm going to type ctor to create a constructor.
>
> **[1:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=83)** Then inside this constructor, I'm going to inject the repository file that we use to interact with our database.
>
> **[1:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=89)** And that is the CoursesRepository, and then just name it repository.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=96)** So let us import the namespace.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=98)** That is going to be Data.Repositories.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=103)** And now inside here, we are going to create the first field.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=107)** So in here, I'll just type field.
>
> **[1:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=110)** The return type is going to be the CourseType.
>
> **[1:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=117)** That's a body namespace.
>
> **[2:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=123)** And now in here, the first parameter that we are going to define is going to be the name.
>
> **[2:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=127)** So how do we want to call this field?
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=129)** That is going to be addCourse.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=133)** Then the second parameter can be, let's say a description.
>
> **[2:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=137)** So let's say it's used to add a new course to the database.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=143)** Then we're going to have the arguments.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=146)** And we said that you can pass as arguments, an array of arguments.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=150)** So for that, I'll just type in here new QueryArguments.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=158)** And then here, we're going to have a single argument, and that is going to be an input type for the CourseType.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=165)** So in here, I'll just type new QueryArgument.
>
> **[2:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=171)** We're going to define the type of this argument.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=175)** And that is going to be a NonNullGraphType.
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=180)** And for the NonNullGraphType, you're going to also define the type.
>
> **[3:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=185)** And this is going to be a new type that we're going to create, and we're going to name it the CourseInputType.
>
> **[3:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=194)** Now, let us just copy this name, Control + C, and then just goes to the Solution Explorer and you'd go to the Types folder.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=203)** So we do have the CourseType for the queries.
>
> **[3:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=205)** Now we are going to create another type for the mutations.
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=208)** So just right-click, then go to Add, and then Class.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=213)** We have the CourseInputType, and then click Add.
>
> **[3:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=217)** Now, for this in here to be an input type for the mutations, we need to enhance from the base InputObjectGraphType.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=226)** So InputObjectGraphType.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=233)** So let us import the namespace, and that is going to be the GraphQL.Types.
>
> **[3:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=239)** Then in here, we are going to create a constructor, ctor, then double-tap.
>
> **[4:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=246)** Then the name is going to be the CourseInputType.
>
> **[4:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=251)** And here, we are going to have all the fields that we're going to use for the CourseInputType to send data to the mutation file.
>
> **[4:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=260)** So let us just go to the Solution Explorer.
>
> **[4:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=263)** And then I'll just go to the CourseType.
>
> **[4:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=264)** I'm just going to copy these values, Control + C, then go to the CourseInputType, and then paste them in here.
>
> **[4:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=273)** Now, in here, when you define an input type, what we're going to do is that we're going to just define the type in here for the field.
>
> **[4:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=282)** So for example, the first one is going to be IdGraphType, the second one is going to be StringGraphType, et cetera.
>
> **[4:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=292)** So in here, the value or the input value for this field is going to be InputGraphType, then we're going to have the second one and the other ones.
>
> **[5:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=305)** So just type all the code in here.
>
> **[5:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=314)** Now let's just copy the second one, so Control + C, paste in here.
>
> **[5:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=320)** This is going to be the same.
>
> **[5:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=322)** Then we have an IntGraphType.
>
> **[5:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=325)** And the last two ones are of type DateTimeGraphType.
>
> **[5:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=330)** Let's paste in here.
>
> **[5:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=336)** Now, the only thing that we need to keep in here is going to be the name of this field.
>
> **[5:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=342)** So in here, for example, for the first one, we're going to have Id.
>
> **[5:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=347)** And actually, the Id is generated from the database, so we can just remove the Id completely from here.
>
> **[5:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=354)** We're not going to send this as a parameter.
>
> **[5:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=359)** So we're going to have the description.
>
> **[6:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=364)** Okay, so I'll select here.
>
> **[6:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=369)** Then we're going to have the name.
>
> **[6:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=377)** And I'm going to do the same for the other properties.
>
> **[6:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=388)** So this is all you need to do in here.
>
> **[6:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=390)** Now let us just save all the changes and go back to the CourseMutation.
>
> **[6:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=394)** Now, in here, you can see that we have the CourseInputType.
>
> **[6:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=398)** And in here, we can also define the name.
>
> **[6:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=402)** Name is going to be the course.
>
> **[6:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=408)** And if you want, you can also add a description.
>
> **[6:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=410)** So Description is equal to Course input parameter.
>
> **[6:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=416)** Now, after the arguments, we know that we need to define the resolve.
>
> **[7:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=420)** So, resolve.
>
> **[7:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=422)** So basically, how do we want to store this data in the database?
>
> **[7:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=425)** And here, I'll just type context that goes to, and then inside here, I'm going to first get the course object from the request and then store that course in the database.
>
> **[7:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=441)** So I'll just type in your var, and then here, course is equal to context.GetArgument.
>
> **[7:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=453)** So we need to first get the argument, so the course from the request.
>
> **[7:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=458)** For that, I'm going to use the GraphQL, and then in here, course, and then define the name.
>
> **[7:49](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=469)** And the name is going to be the course.
>
> **[7:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=472)** I'll just paste it in here.
>
> **[7:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=474)** Let's important namespace for the course.
>
> **[7:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=478)** That is going to be the Data.Models.
>
> **[8:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=482)** Now that we have the course object, so the course value that gets passed in the request, we are just going to choose the repository, and then here, .AddCourse, and then pass the parameter, the course.
>
> **[8:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=497)** And then, of course, since we're using resolve, we are going to also return a value.
>
> **[8:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=502)** That is going to be, so basically, return, and then repository.AddCourse, because from the AddCourse, we get as a response, the newly added course.
>
> **[8:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=513)** And then here, just add semi-colon.
>
> **[8:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=515)** And here, we can see that we have an error, so I'll just remove the semi-colon from here, add a parenthesis and then semi-colon.
>
> **[8:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-your-first-mutation-add-data?u=76281980&t=522)** And this is all you need to do to add a mutation field.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), class. (2), pass (2), class, (1), type. (1)
> **UI Navigation:** go to (9), right-click (3)
> **Analogies:** for example (2)
> **Code Identifiers:** addcourse (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Add data: Testing
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=0)** - [Instructor] On this part, we are going to test what we have built so far.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=4)** So we are going to test the ad course from the CourseMutation file.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=10)** For that let us go to Visual Studio and see it in action.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=13)** Here the first thing that we need to do is we need to go to the Startup.cs file and then here scroll down, go to ConfigureServices and you can see that we have already configured the CourseQuery.
>
> **[0:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=26)** So let us also configure the CourseMutation.
>
> **[0:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=30)** So services.AddScoped, and then you are going to add the CourseMutation.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=42)** Now, let us just import the name space for the CourseMutation and that is the GraphQL.Mutations.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=50)** Then next, let us just go to the AppSchema.
>
> **[0:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=54)** So just right click then go to definition.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=57)** And here in the AppSchema we have also configured the query to be the CourseQuery.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=63)** So let us also configure the mutation files, so CourseMutation and then just mutation, let's import the namespace for the CourseMutation that is going to be the GraphQL.Mutations.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=79)** And then down here say, this.Mutation is equal to the mutation bar meter.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=88)** Now let us save all the changes and run this project.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=96)** So now just go to UI then GraphQL.
>
> **[1:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=103)** Then let us first check for all the data that we have in our database.
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=107)** So we are going to write a query.
>
> **[1:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=110)** And the query that we're going to call is going to be the courses.
>
> **[1:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=116)** And we're going to display the ID, the name, and the description.
>
> **[2:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=122)** Now let us click the play button up here.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=126)** And you can see that in our database, we have a single course, and that is the course with the ID one.
>
> **[2:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=132)** Now let us add a new course to the database by using the mutation that we just created.
>
> **[2:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=137)** So I'll just cut these lines and then here I'll just type Mutation.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=142)** We're going to use the addCourse mutation, you can see that we already get the suggestion once we type adds.
>
> **[2:29](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=149)** And this is going to be course type, is just to add a new course to the database.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=155)** So addCourse, this expects a course bar meter, and then here let us define all the values, so let us start with the name.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=167)** The name is going to be course name example.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=174)** Then we're going to have the description.
>
> **[2:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=178)** Description is going to be course description example.
>
> **[3:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=185)** Now we are going to have the review.
>
> **[3:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=188)** And the review it's going to be, let's say eight, then we're going to have the date added.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=195)** So I'll just pull them down here.
>
> **[3:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=200)** If we did add it, its going to be lets say here 2021 and then 09/09 and the date updated is going to be, let's say 2021, then 10 and 10.
>
> **[3:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=220)** And then in here, we are going to just get as a response to the ID, we're going to go get the name, the description, the review, the date added, and the date updated.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=237)** Now let us click the play button.
>
> **[4:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=240)** And then here we can see that we get an error and the error says that the date added and the date updated, because we have defined them to be date times, the input type or the value that they're expecting here is a date time and not a string like this.
>
> **[4:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=254)** So I'll just copy the start time from here.
>
> **[4:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=257)** Just as an example, Control + C, paste it in here.
>
> **[4:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=265)** Let's copy the other one, Control + C and then paste the value in here and let us click the play button one more time.
>
> **[4:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=278)** And now you can see that we get a response.
>
> **[4:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=281)** And the response is we have created a course with ID two, the name is Course Name Example, the Course Description Example, we do have the date added and date updated and the review is set.
>
> **[4:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=293)** Now, if you want, we can use the CoursesQuery as well, so I'll just type in here, query and then courses.
>
> **[5:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=302)** And from the course, you want to get the ID, you want to get the name and the description.
>
> **[5:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-data-testing?u=76281980&t=308)** And if you click the play button in here, you're going to see that now we have two courses in our database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), this. (2), type, (1)
> **UI Navigation:** go to (6), scroll down (1)
> **Code Identifiers:** addcourse (2)
> **Prerequisites:** configure (2)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Mutation to update data
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-mutation-to-update-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-mutation-to-update-data?u=76281980&t=0)** - [Instructor] So far, you have learned how to create the mutation to add data to the database.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-mutation-to-update-data?u=76281980&t=6)** Now it is time for you to challenge yourself and add another mutation field that you can use to update existing data in the database.
>
> **[0:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/challenge-mutation-to-update-data?u=76281980&t=16)** For that, you'll need to first add a new mutation field, define the keyboard, define the parameters, and then at the end, resolve, so give it a try, and in case you want to learn how I solved this challenge, check out the next part.

> [!info]- Semantic Content
>
> **Code Keywords:** try, (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Solution: Mutation to update data
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=0)** - [Tutor] On the last part, I asked you to add a new field in the Course Mutation to update an existing course in a database.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=9)** So now let us go to Visual Studio and check how I solved this challenge.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=15)** In here I'll just go to the Solution Explorer, and then you go to GraphQL, then mutations, and then Course Mutation.
>
> **[0:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=25)** Just after the current field course type, we are going to create a new one.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=32)** So in here I'll just type field and then I'm going to have course type, and then in here the name is going to be update course.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=48)** The description is going to be, is used to update an existing course in the database.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=59)** And then next we need to pass the arguments.
>
> **[1:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=62)** When we update a course, we pass two arguments.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=65)** The first argument is the ID of the course that we want to update and the second argument are the new values that we want to use.
>
> **[1:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=75)** So for that in here I'll just type arguments and then we are going to have a new query arguments, and then in here we're going to have the first argument which is going to be the ID.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=95)** So for that, just type in here new query argument and then this is going to be of type non null graph type and the type is going to be ID graph type, and the value or the way that we want to access this one, is going to be by name ID.
>
> **[2:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=120)** So in here name and then ID.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=125)** If you want, you can also add a description.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=129)** So description ID, of the course, to be updated.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=135)** Now let us add the other arguments at the end in here I'll just add a comma.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=140)** And then down here, I'm just going to type new query argument, then non null graph type.
>
> **[2:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=153)** The input type in here is going to be the course input type.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=158)** And here we have the course input type.
>
> **[2:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=162)** The name is going to be course, and the description is going to be updated course values.
>
> **[2:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=177)** And then here at the end, so after the arguments we're going to put a comma, because the last piece is going to be the resolve.
>
> **[3:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=184)** So in the resolve going to have context that goes to, and then inside here, we need to first get the ID, So VAR ID is equal to.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=195)** And then context dot get argument.
>
> **[3:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=200)** The argument is going to be of type integer.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=203)** And we're going to use the ID key word.
>
> **[3:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=206)** Now let us import the namespace for the get argument.
>
> **[3:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=210)** Now the same way we are going to get the course so CTRL + C, CTRL + V.
>
> **[3:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=214)** This is going to be VAR course in here.
>
> **[3:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=217)** The return type is going to be the course and the name is going to be the course name.
>
> **[3:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=222)** So course, and down here, we're just going to return that repository dot update course.
>
> **[3:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=231)** We are going to pass two parameters, the ID and the course.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=241)** Then you, will see that we have some errors.
>
> **[4:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=244)** And the reason for that is because we have the closing parenthesis in here.
>
> **[4:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=249)** I'll just remove it from here.
>
> **[4:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=252)** Put it down here and then add semicolon.
>
> **[4:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=257)** Now let us save the changes.
>
> **[4:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/solution-mutation-to-update-data?u=76281980&t=259)** And this is all you need to do to resolve this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (3), pass (3), type. (3), var (2)
> **Env Vars:** var (2), ctrl (2)
> **UI Navigation:** go to (3)
> **Tools:** visual studio (1)
> **Speakers:** - [tutor] (1)

#### Update data: Testing
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=0)** - So on the last part, you learnt how to create the object course mutation.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=4)** On this part, let us test if everything works as expected.
>
> **[0:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=9)** So now I'll just start this project.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=13)** And then you go to UI and then graph QL.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=17)** We do have the query to get all the data.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=21)** So just clicking in here play, and you can see that we currently have two courses, one with the ID one and one with the ID two.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=28)** Let us update the one with the ID two.
>
> **[0:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=32)** So for that let us just type in here mutation and we are going to use the update course mutation.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=38)** This will take two parameters.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=40)** The ID is going to be two, and we already get an error in here.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=46)** The reason for that is because the ID is expected to be of type integer.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=50)** Just remove the double quotes.
>
> **[0:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=53)** And that in here, the second permit it is going to be the course.
>
> **[0:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=57)** And for the course, let's say we want to update the name.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=61)** So the name is going to be updated.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=63)** We want to also update the description.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=68)** This is going to be updated.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=71)** Then let's also update the review, and the review let's say is going to be two.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=77)** Then if you want we can also update the date edit.
>
> **[1:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=81)** And let us actually just copy this date in here.
>
> **[1:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=86)** Control C place it in here.
>
> **[1:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=88)** That changes to zero nine.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=92)** Add that zero nine and then update it and for that date update it and us just scroll to the right, actually let's break it down here.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=108)** The date updated value is going to be, let's say 10, then your 10.
>
> **[1:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=116)** And what we want to get is the response, or what we want to return is going to be the ID, the name and the description.
>
> **[2:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=131)** Now from here let us remove the query.
>
> **[2:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=133)** So control X.
>
> **[2:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=135)** So we have just the mutation and I click the play button.
>
> **[2:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=141)** Now you can see that the ID was updated.
>
> **[2:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=145)** Now we can see that the course was updated.
>
> **[2:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=148)** So let us just use the query.
>
> **[2:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=152)** I'm going to remove the mutation and then click the play icon.
>
> **[2:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=157)** And here you can see that the course with the ID two has the name updated, the description updated.
>
> **[2:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=162)** And if you check for the review, that is going to be two as well, because that is the value that we set.
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=173)** Now the reason why we got zero in here, we use a mutation when we execute this mutation and we've got zero for the ID.
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=180)** So if I just try for example, in your updated one, since I have not defined the ID in here, and that is not necessary, we are going to get the ID zero as a response if I click play in here.
>
> **[3:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/update-data-testing?u=76281980&t=194)** You can see the ID zero, but you shouldn't worry about that value.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - so (1)

#### Mutation to delete data
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=0)** - [Instructor] On this part, you are going to learn how to remove data from the database, using a mutation.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=7)** For that, let us go to Visual Studio and see it in action.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=10)** In Visual Studio, we need to go to the CourseMutation file, and then you are going to create another field.
>
> **[0:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=19)** So now just type fields, and then in here, CourseType.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=28)** So the name for this field is going to be deleteCourse.
>
> **[0:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=35)** Let's also add a description, and the description is going to be, Is used to delete a course from the database.
>
> **[0:44](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=44)** And next we are going to have the arguments, and for us to be able to delete a course from the database, we need to use just the course ID, in here, new, and then QueryArguments, then inside here, we are going to have new QueryArgument,
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=73)** and this is going to be a NonNullGraphType.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=79)** So we require this parameter when we want to call the deleteCourse mutation.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=85)** And the type of this value is going to be the IdGraphType, and then in here, we need to define a name.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=95)** So the name is going to be id, and then if you want, we can also add a description, and the description is going to be, Id of the course to be deleted.
>
> **[1:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=108)** Then after the arguments, we are going to add the resolve.
>
> **[1:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=113)** So resolve, and then in here, the resolve is going to be context, it goes to, and then inside here, we are going to first get the ID of the course that we want to delete, and the ID of that course is going to be var id is equal to, got to have context.GetArgument, the return type is going to be integer, so we are going to get an integer argument, and the name is going to be the id.
>
> **[2:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=150)** And down here, we are just going to use the repository and then .DeleteCourse and pass as a parameter the id, and then in here, just return true.
>
> **[2:44](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=164)** Now here at the end, let us just add a closing bracket and then semicolon.
>
> **[2:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=171)** Now let us save all the changes and run this project.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=179)** Now here, I'll just go to ui and then graphql, and I'm going to use a mutation, instead I'm just going to pass the query so we can see the data, and then courses, and just id and name, and then click the play button.
>
> **[3:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=198)** So we do have two courses in our database.
>
> **[3:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=201)** Now let us use the deleteCourse mutation, and then in here, deleteCourse, the id is going to be 2, and then just id.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=213)** And now let us click the play button, and here we can see that the deleteCourse was returned as null because we are just returning true.
>
> **[3:44](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-delete-data?u=76281980&t=224)** Now let's just type in here query, and then courses, and then id and name and click the play button, and you're going to see that we are going to get just a single course because the course with the id 2 was removed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (3), pass (2), new, (1), require (1)
> **Code Identifiers:** deletecourse (5)
> **UI Navigation:** go to (3)
> **Tools:** visual studio (2)
> **Speakers:** - [instructor] (1)


### 4. Querying and Mutating Relational Data with GraphQL in .NET Web API

> [↑ Back to Table of Contents](#table-of-contents)

#### Adding relationship data
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=0)** - [Instructor] So far, we have worked with a single entity named course.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=5)** You have learned how to query and mutate data, but real world apps you have more complex data types.
>
> **[0:12](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=12)** You'll have to work with relational data, and that is what you're going to learn on the upcoming parts.
>
> **[0:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=18)** But before you work with relational data, let us first update our existing database schema so we have a relational database.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=27)** So for that, let us go to Visual Studio and see it in action.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=31)** In here, if we go to the Solution Explorer, and then in here go to Data, then Models, inside the Course Class, you're going to see that we have an integer review.
>
> **[0:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=43)** But a single course can have more than one review.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=47)** So then I'll just comment out this line.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=50)** So we are going to create a one-to-many relationship, then go to the Solution Explorer, right click on the Models then Add.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=60)** We're going to add a new Class.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=63)** We are going to name this class, the Review Class.
>
> **[1:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=68)** Now inside this class, we are going to first have an identifier.
>
> **[1:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=71)** So prop then double-tap.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=73)** This is going to be an integer and then ID.
>
> **[1:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=79)** Let us decorate this one with the key attributes of the database knows or the entity framework knows that this is the primary key in our database.
>
> **[1:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=90)** And down here, we are going to have two properties.
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=92)** So prop, then integer rate.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=97)** We're going to have another property prop of type string and the value is going to be comment.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=106)** And down here we're going to define the relationships of the relation.
>
> **[1:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=112)** So we said that we're going to have a one-to-many relationships and here I'll just type public int, then CourseId and then get; set.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=125)** And then down here we're going to have public course.
>
> **[2:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=129)** We are going to name this one course and then get; set.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=134)** Now under the framework is smart enough to know that the CourseId is going to be the primary key in the course model.
>
> **[2:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=140)** But if you want, you can also define near the foreign key.
>
> **[2:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=143)** So, the ForeignKey, lets import the namespace and that belongs to the ComponentModel.DataAnnotations.Schema and the foreignkey for the course is going to be the CourseId.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=165)** Now, I want to see the changes in here and go to the course model.
>
> **[2:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=170)** And you are going to now add the relation to the review model.
>
> **[2:54](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=174)** So for that, I'll just type in here prop and then list of review.
>
> **[3:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=182)** And then in here, Reviews.
>
> **[3:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=187)** So this is all you need to do in the model side.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=189)** Now let us just go into the Solution Explore then here go to the AppDbContext.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=195)** So we have defined in here a DbSet for the course.
>
> **[3:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=198)** Now let us define a Db set for the review.
>
> **[3:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=201)** So prop, this is going to be a DbSet and the type is going to be Review and the name is going to be the Reviews.
>
> **[3:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=214)** Now let us see the changes and let us actually build the solution and fix the error.
>
> **[3:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=219)** So Build, we see that the build fails so let us just go to the error list.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=226)** Let's start with the first one.
>
> **[3:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=231)** And we are updating course, so I'll just disable this one.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=237)** I'm just going to fix the errors for now.
>
> **[3:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=239)** Then let us go to this other one in here, and we need to also update or remove the CourseType in here, just.
>
> **[4:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=250)** So in here we see that we have an error of the Field Review.
>
> **[4:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=253)** I'll just comment out this line, save the changes, actually save all the changes.
>
> **[4:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=260)** Now hear the last thing that is lucking is that we need to add a migration so we can update the database schema.
>
> **[4:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=266)** So for that let us just go to the package manager consol and then you'll just type add-migration, the migration is going to be, let's say ReviewsAdded and then press enter.
>
> **[4:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=282)** So you can see that the migration file was created so we are basically dropping the review column from the courses and just adding a reviews table to apply this changes then just update and then database and press enter.
>
> **[4:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=298)** Then here if you just go to the server explorer and then here connect to your database, so just right click, add a connection, and the server name is ETR and then sqlexpress.
>
> **[5:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=321)** I'll use windows authentication and then here sqlserver.
>
> **[5:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=333)** And then using your windows authentication you'll search for the database, that is this database and if you do not know your database name you can just go to the Solution Explorer then go to appsettings.json file and in here you have the data source, this is my database.
>
> **[5:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=355)** So let me just go back to the Server Explorer and we have this connection here, just refresh, and you can that we have two tables.
>
> **[6:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=365)** so we have the Courses table, and Reviews table.
>
> **[6:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=370)** And if you can only just clean up the data in here, so just right lick and then Show Table Data and just actually keep this one and just cancel the Server Explorer and let us add some reviews.
>
> **[6:27](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=387)** Just, Show Table Data, the Rate is going to be nine.
>
> **[6:34](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=394)** Comment, very good course, and the CourseId is going to be one.
>
> **[6:43](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=403)** Let us also add another rate.
>
> **[6:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/adding-relationship-data?u=76281980&t=405)** Let's say Rate eight, Comment, good course, and the CourseId is going to be one and now we have two reviews for the same course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), class, (3), class. (2), public (2)
> **UI Navigation:** go to (12), click on (1)
> **File Paths:** appsettings.json (1)
> **Env Vars:** etr (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Query to get relational data
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=0)** - [Instructor] On the last part, we manually added some data in the database.
>
> **[0:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=4)** So, now let us add a query.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=5)** So let us see how we can add a query to get relational data from the database.
>
> **[0:11](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=11)** For that, let us got to Visual Studio and see it in action.
>
> **[0:15](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=15)** And you're seeing as part of the response, we are going to also have the reviews.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=20)** We need to create a new type in the Graph QL section.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=24)** So, in the Solution Explorer, I'll just go in here to GraphQL, and then in the Types we have in here, the CourseType that I'll just actually copy paste these file.
>
> **[0:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=37)** So control + C, control + V, and this is going to be the ReviewType.
>
> **[0:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=45)** So, "Review," and this is going to be the ReviewType.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=56)** Let us also change the name of the Constructor.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=60)** The object graph type is going to be Review instead of Course.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=65)** So in the review Field, we do have the ID.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=69)** Then we do not have the Description or the Name.
>
> **[1:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=73)** so I'll just remove Description, and the Name then the Review.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=77)** But we do have in here, the Rate and the Comment.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=84)** The type of the rate is an integer.
>
> **[1:27](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=87)** So I'll just type in here "IntGraphType".
>
> **[1:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=92)** And the type of the comment is "StringGraphType".
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=97)** Then up here we are going to have, let's say, "Rate property from the Review object."
>
> **[1:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=107)** Up here we are going to have "ID property from the Review object."
>
> **[1:51](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=111)** And then down here, we are going to have, "Comment property from the Review object."
>
> **[2:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=120)** Now let us also change the file name and the name for this file is going to be ReviewType and then go to the CourseType and define the relationship between the course and the review.
>
> **[2:14](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=134)** So in here, we commented out up here in the review field.
>
> **[2:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=142)** So now we are going to define the relationship one to many, and then down here, we're going to type that now we are going to have a new field.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=155)** The field is going to be the Reviews field.
>
> **[2:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=160)** So in here x that goes to x.Reviews.
>
> **[2:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=166)** And the type is going to be a list of ReviewTypes, so List<GraphTypes> of the ReviewType.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=179)** And actually the type needs to be wrapped in a type of, so that, oh.
>
> **[3:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=188)** And then in here you can type that Description and the Description is going to be, let's say, "List of reviews."
>
> **[3:19](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=199)** So this is all we need to do in here before we move to the next part, then I'll just go to the Solution Explorer.
>
> **[3:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=205)** Then you'll go to Data, Repositories and then CoursesRepository.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=211)** Let's scroll down here where we have the GetAllCourses.
>
> **[3:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=213)** In here we're going to have courses that include, they're going to also include the reviews.
>
> **[3:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=220)** So let us import the namespace for the Include() that is going to be the Microsoft.EntityFrameworkCore Then your n that goes to n.Reviews.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=233)** Now let us save all the changes and this is all you need to do on this part.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/query-to-get-relational-data?u=76281980&t=237)** On the next one we are going to test what we've built so far.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), include, (1), include( (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Get relational data: Testing
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=0)** - [Instructor] On this part, we are going to test if everything that we have built so far works as expected.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=7)** So for that, let us go to visual studio.
>
> **[0:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=10)** And then in here, start this project.
>
> **[0:13](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=13)** Then here, let us go to UI, then graphql.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=21)** Then you are going to write a query.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=24)** And the query that they are going to call is going to be the courses query.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=28)** And then for each course, we're going to display the ID, the name, the description, and then the reviews.
>
> **[0:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=38)** But in the reviews, we are going to display the rate and the comment.
>
> **[0:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=46)** So this is all we are going to get from the database.
>
> **[0:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=50)** And then click the play button up here.
>
> **[0:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=53)** And here on the right, you can see that we get a response.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=56)** Now, since we have just a single course in our database with the ID one, The name is Introduction to GraphQL.
>
> **[1:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=61)** It has a description and then two reviews.
>
> **[1:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/get-relational-data-testing?u=76281980&t=64)** One with the rate of nine, and one with the rate of 10, which are the rates that we manually added on the first part of this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **UI Navigation:** go to (2)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Mutation to add relational data
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=0)** - [Instructor] On this part, you are going to learn how to add relational data to the database.
>
> **[0:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=5)** For that, let us go to Visual Studio.
>
> **[0:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=8)** In Visual Studio, the first thing that we need to do is that we need to add a new input type so that I'll just go in here to GraphQL, and then, in here, inside the Types folder, we do have the CourseInputType.
>
> **[0:21](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=21)** So let us also add a new one, so Control + C, Control + V to just create a copy.
>
> **[0:27](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=27)** Now this is going to be the ReviewInputType, so Review and then InputType.
>
> **[0:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=35)** But I'll change the name of the constructor, so Control + C, then paste in here.
>
> **[0:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=40)** Let us also change the name in here, ReviewInputType, and then for the Review, we are going to have two fields.
>
> **[0:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=47)** The first one is going to be of type integers, so IntGraphType.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=52)** The name is going to be Rate.
>
> **[0:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=55)** The second one is going to be of type string and the name is going to be Comment.
>
> **[1:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=60)** Now let us remove the other ones, and this is all you need to do in this file.
>
> **[1:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=65)** Now let us also go and rename this file, so from the CourseInputType Copy this is going to be the ReviewInputType.
>
> **[1:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=80)** So we have, in here, the ReviewInputType.
>
> **[1:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=84)** Now since we are going to use the ReviewInputType with the CourseInputType, and it just goes with the CourseInputType.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=93)** In here, now, we are not going to use the Review Field, but we are going to add a new one.
>
> **[1:40](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=100)** So, in here, Field and the type is going to be a ListGraphType, and then, in here, passes a parameter, the ReviewInputType.
>
> **[1:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=117)** And the priority name is going to be the Reviews priority.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=121)** Now this is all we need to do in the GraphQL related call.
>
> **[2:05](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=125)** So now let us just go to the Solution Explorer, and then you go to the Data, then Repositories, and CoursesRepository.
>
> **[2:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=137)** In here, let us find the file or the method we use to add data to the database and that is the AddCourse.
>
> **[2:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=146)** And, here, we are going to make some changes, as well, because we are going to store the course, and then after we have the course in the database we're going to add the reviews for that course.
>
> **[2:38](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=158)** So, now, just type var newCourse is equal to new Course.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=167)** And, then, for this course we are going to provide the name, which is going to come from the course.Name.
>
> **[2:55](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=175)** Then we are going to have the description, which is going to be course.Description.
>
> **[3:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=182)** Then we're going to have the DateAdded course.DateAdded, and DateUpdated is equal to course.DateUpdated.
>
> **[3:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=196)** Now, typically, you would set the DateUpdated to now, and the DateAdded would be just DateTime.now, but that is not the focus of this course.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=203)** We are just going to pass these parameters from the request in the GraphQL.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=211)** And then after you have everything related to the newCourse in here, you can just type _context.Courses.Add and then pass as a parameter the newCourse.
>
> **[3:44](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=224)** So, in here, without the underscore, newCourse.
>
> **[3:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=230)** Then after you add the newCourse, we're just going to type in here _context.SaveChanges.
>
> **[3:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=238)** At this point, we also get the ID of the course that we just added.
>
> **[4:02](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=242)** So, now, let us add all of the reviews of this course.
>
> **[4:08](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=248)** For that, we're going to have a foreach loop, so foreach var review in the course.Reviews,
>
> **[4:18](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=258)** and then in here var newReview is equal to new Review.
>
> **[4:26](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=266)** Then for each review we are going to have Rate.
>
> **[4:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=268)** Rate is going to be the review.Rate.
>
> **[4:32](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=272)** We are going to have a Comment.
>
> **[4:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=275)** The Comment is going to be review.Comment.
>
> **[4:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=279)** And we're going to have a CourseId, and the CourseId is going to be the newCourse.Id, so newCourse.Id, and then here at the end, we can just add this review to the database over that, _context.Reviews.Add, then you pass a parameter the newReview, and then _context.SaveChanges.
>
> **[5:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=317)** And then at the end, and then here at the end we can just clean up the code and just return the course.
>
> **[5:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/mutation-to-add-relational-data?u=76281980&t=323)** Now, on the next part, we're going to test if everything works as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), var (3), pass (3)
> **Code Identifiers:** newcourse (7), newreview (2)
> **UI Navigation:** go to (3)
> **CLI Commands:** find (1), make (1)
> **Tools:** visual studio (2)
> **Speakers:** - [instructor] (1)

#### Add relational data: Testing
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=0)** - [Instructor] On this part, we are going to test if adding relational data works as expected.
>
> **[0:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=6)** So let us go to Visual Studio, and then in here, let us run this project.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=17)** Then it will let us go to UI and then GraphQL.
>
> **[0:20](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=20)** Now, instead of a query, we are going to execute the mutation.
>
> **[0:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=24)** So we're going to call a mutation or just cut these codes with control+X, and then here, mutation.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=31)** Going to code the 'add course' mutation and you are going to have the course.
>
> **[0:39](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=39)** Now the course is going to have a name.
>
> **[0:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=42)** Say, the name is going to be Welcome Course.
>
> **[0:49](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=49)** Actually, we need to use double quotes.
>
> **[0:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=52)** So this needs to be a streak.
>
> **[0:56](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=56)** Have double quotes.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=59)** So you are going to have to insert the name.
>
> **[1:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=63)** Then after the name, we are going to have the description.
>
> **[1:09](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=69)** Type Welcome Course description.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=76)** Then after the description, we are going to have the date edit.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=82)** Date edit.
>
> **[1:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=83)** And this is going to be, let's say a year.
>
> **[1:25](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=85)** So 2020, then 11 11.
>
> **[1:30](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=90)** Say, the date update is going to be 2020 at 12 12.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=96)** And then we are going to also pass the reviews and for the reviews, we can just have an array of reviews.
>
> **[1:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=106)** The first review is going to be, let's say, the rate.
>
> **[1:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=110)** Let's say five.
>
> **[1:52](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=112)** The comment is going to be rate of five.
>
> **[1:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=117)** And if you're... you can also add another rate, I'll just copy this one.
>
> **[2:01](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=121)** Control+C and then paste it down here.
>
> **[2:04](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=124)** Let's make this rate, say six.
>
> **[2:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=127)** This is going to be rate of six.
>
> **[2:10](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=130)** And then after this has been added, we're just going to return, let's say the name, the description, the date edit, basically everything that you've seen here.
>
> **[2:24](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=144)** So edit that. Then update it.
>
> **[2:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=148)** Then from the reviews, we're going to return the rate and the comment.
>
> **[2:35](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=155)** Now let us click the play button and here now we can see that an argument was false.
>
> **[2:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=161)** So the date edit doesn't have a valid date time.
>
> **[2:45](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=165)** So let us just copy these values from here.
>
> **[2:47](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=167)** Control+C, then paste it here, and also copy the date updated, Control+V and then click the play button.
>
> **[2:59](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=179)** You can see that the new course was added successfully.
>
> **[3:03](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=183)** Now, if you want to check all the courses from the database, I just type in here 'query', and then I'm going to call the courses, and then from the course, I want to get the ID, the name, and then I want to get the reviews.
>
> **[3:23](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=203)** So here, just type 'reviews'.
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=208)** And from the reviews, I want to get the idea of the review.
>
> **[3:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=211)** I want to get the rates and the comment, or we can actually just remove the ID and I click the play button.
>
> **[3:42](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=222)** So before we used to have just a single course, now we have two courses.
>
> **[3:46](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=226)** So one with the ID three and the other one that already was in there with the ID one.
>
> **[3:50](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=230)** And then you have the descriptions and the reviews.
>
> **[3:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=233)** So we did add two reviews of rate five and rate six.
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/add-relational-data-testing?u=76281980&t=237)** And we did have in the database rate nine and the rate eight.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (1), return, (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps for learning more about GraphQL API
> [LinkedIn Learning](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=0)** - [Ervis] If you have made it so far, I want to thank you and congratulate you for watching this course.
>
> **[0:07](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=7)** Through out this course you learned about GraphQL, and you started by having an introduction into concepts, data manipulation types, et cetera.
>
> **[0:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=17)** The next you learned how to query data in GraphQL, where you build a query with two fields to get all the courses and a single course by IT.
>
> **[0:28](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=28)** Next you learned how to mutate data.
>
> **[0:31](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=31)** And we have said that in GraphQL to get data, you use queries but to add, update or delete data, you use mutations.
>
> **[0:41](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=41)** By the end of this course, you learned how to query and add relational data to the database by using mutations.
>
> **[0:48](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=48)** This is what we have learned so far, but what should you do next?
>
> **[0:53](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=53)** Next, you can try and work some more with the relational data.
>
> **[0:58](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=58)** So for example, you can try to update relational data with GraphQL, or delete relational data with GraphQL.
>
> **[1:06](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=66)** In any case, if you have any questions about this course or .NET Technologies in general, feel free to get in touch with me via Twitter or LinkedIn.
>
> **[1:17](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=77)** And if you want to learn more about .NET Technologies, check out my other courses here.
>
> **[1:22](https://www.linkedin.com/learning/asp-dot-net-core-building-a-graphql-api/next-steps-for-learning-more-about-graphql-api?u=76281980&t=82)** And if you want to learn more about the .NET Technologies, check out my other courses here on LinkedIn Learning Hub.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), case, (1)
> **Env Vars:** net (3)
> **Analogies:** for example (1)
> **Speakers:** - [ervis] (1)


## Instructor

- [[Ervis Trupja]]

## Resources

- Exercise files available

## Skills Covered

- API Development
- ASP.NET Core
- GraphQL

## Path Context

### In [[Getting Started as an ASP.NET Core Developer]]
← [[ASP.NET Core in .NET 6- Dependency Injection]] | **8 of 9** | [[Building Web APIs with ASP.NET Core 8]] →

## Appears In

- [[Getting Started as an ASP.NET Core Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building Web APIs with ASP.NET Core 8]] — ASP.NET Core, API Development
- [[Building GraphQL Applications in Laravel]] — GraphQL
- [[Building a GraphQL Project with React.js]] — GraphQL
- [[Spring with GraphQL]] — GraphQL
- [[Programming with the Gemini Flash API]] — API Development

---

[↑ Back to top](#)