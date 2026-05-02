---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-graphql-applications-in-laravel
url: "https://www.linkedin.com/learning/building-graphql-applications-in-laravel"
duration_minutes: 44
duration: 44m
level: Intermediate
updated: 10/6/2022
learners: 10281
skills:
  - GraphQL
  - Laravel
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQE3QENCPg-P-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664905998454?e=2147483647&amp;v=beta&amp;t=hrwbzw2DCv-YMLHurxVO7NfWGYeGb6_m3z-m2is56Ns"
linkedin_topic: Web Development
learning_paths:
  - '[[Build Your Laravel Skills]]'
prev_courses:
  - '[[Building RESTful APIs in Laravel]]'
next_courses:
  - '[[Essential Jigsaw for PHP and Laravel Developers]]'
path_nav: '[{"path":"Build Your Laravel Skills","position":4,"total":7,"prev":"Building RESTful APIs in Laravel","next":"Essential Jigsaw for PHP and Laravel Developers"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/graphql
  - skill/laravel
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20GraphQL%20Applications%20in%20Laravel.md)

![Building GraphQL Applications in Laravel](https://media.licdn.com/dms/image/v2/C560DAQE3QENCPg-P-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664905998454?e=2147483647&amp;v=beta&amp;t=hrwbzw2DCv-YMLHurxVO7NfWGYeGb6_m3z-m2is56Ns)

# Building GraphQL Applications in Laravel

> Projects Build a GraphQL API in PHP; create queries; and create, update, and delete a user, leveraging Lighthouse. GraphQL is a query language for APIs that enables application-to-application communication and provides a complete and understandable description of the data in your API, making it easier to evolve APIs over time. GraphQL lets you ask for what you want in a single query by enabling cl

> [LinkedIn Learning](https://www.linkedin.com/learning/building-graphql-applications-in-laravel) | 44m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Build GraphQL apps in Laravel](#build-graphql-apps-in-laravel)
- [**1. Understanding GraphQL**](#1-understanding-graphql) (3 videos)
  - [What is GraphQL?](#what-is-graphql)
  - [GraphQL versus REST](#graphql-versus-rest)
  - [Why GraphQL?](#why-graphql)
- [**2. Introduction to GraphQL Schemas and Types**](#2-introduction-to-graphql-schemas-and-types) (5 videos)
  - [The type system](#the-type-system)
  - [The object types and fields](#the-object-types-and-fields)
  - [The query and mutation types](#the-query-and-mutation-types)
  - [The scalar type](#the-scalar-type)
  - [The enum type](#the-enum-type)
- [**3. Development Environment Setup**](#3-development-environment-setup) (5 videos)
  - [Prerequisite and development environment checklist](#prerequisite-and-development-environment-checklist)
  - [Setting up Laravel](#setting-up-laravel)
  - [Setting up a database with users](#setting-up-a-database-with-users)
  - [Setting up Lighthouse](#setting-up-lighthouse)
  - [A Hello World GraphQL endpoint](#a-hello-world-graphql-endpoint)
- [**4. GraphQL Queries**](#4-graphql-queries) (5 videos)
  - [Diving into GraphQL queries with Lighthouse](#diving-into-graphql-queries-with-lighthouse)
  - [Querying fields in GraphQL](#querying-fields-in-graphql)
  - [Querying with arguments](#querying-with-arguments)
  - [Querying with aliases](#querying-with-aliases)
  - [Using the Lighthouse paginate directive](#using-the-lighthouse-paginate-directive)
- [**5. GraphQL Mutations**](#5-graphql-mutations) (4 videos)
  - [Diving into GraphQL mutations with Lighthouse](#diving-into-graphql-mutations-with-lighthouse)
  - [Creating a user](#creating-a-user)
  - [Updating a user](#updating-a-user)
  - [Deleting a user](#deleting-a-user)
- [**Conclusion**](#conclusion) (1 videos)
  - [Exploring more Lighthouse and GraphQL functionalities](#exploring-more-lighthouse-and-graphql-functionalities)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build GraphQL apps in Laravel](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980&t=0)** - [Mandeeya] [[Application Programming Interfaces (API)|Application programming interfaces]] bring different applications together and enable access to information on different servers.
>
> **[0:09](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980&t=9)** [[GraphQL]] is one way to enable application-to-application communication.
>
> **[0:14](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980&t=14)** With an increase in number of new APIs being built in GraphQL, it is imperative to know how to [[Fetch]], create, and alter data on the server.
>
> **[0:24](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980&t=24)** In this course, we will start with an introduction to GraphQL.
>
> **[0:28](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980&t=28)** We'll learn about the different types, queries, and mutations, and then we will build a GraphQL API together from scratch based on users' data to perform CRUD functions.
>
> **[0:42](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980&t=42)** At the end of this course, you will learn how to build a GraphQL API in [[PHP]] and how to create, alter, and retrieve data from a GraphQL API.
>
> **[0:54](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980&t=54)** My name is Mandeeya, and I've been programming and building web and API applications for the past 10 years, and I'm very excited about the future of APIs on the web.
>
> **[1:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980&t=65)** So come along as we demystify GraphQL and PHP to enable you to start working with it right away in your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7), [[PHP]] (2), [[Application Programming Interfaces (API)|Application programming interfaces]] (1), [[Fetch]] (1)
> **Env Vars:** api (4), php (2), crud (1)
> **CLI Commands:** php (2)
> **Speakers:** - [mandeeya] (1)


### 1. Understanding GraphQL

[↑ Back to Table of Contents](#table-of-contents)

#### [What is GraphQL?](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=0)** - [Instructor] Let's start by defining what [[GraphQL]] is.
>
> **[0:04](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=4)** GraphQL is a query language for APIs, and can be used to query data from a server.
>
> **[0:11](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=11)** It also allows clients to specify exactly what data they need.
>
> **[0:15](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=15)** GraphQL provides a complete and understandable description of the data in an API, and makes it easier to evolve APIs over time.
>
> **[0:25](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=25)** With GraphQL, you ask for the data you need from the service, and you get exactly what you want.
>
> **[0:32](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=32)** Let's assume we have users data stored in a database in our system, each user has a name, email, and address, and we want to expose the users data via an API.
>
> **[0:44](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=44)** The GraphQL request flow from the client side will be to make a request to our GraphQL endpoint by defining the query data or information structure of the users data we're interested in.
>
> **[0:58](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=58)** Our GraphQL endpoint will interpret the query, and serve data from the users database by returning the shape defined in the query.
>
> **[1:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=68)** This means you describe the data you want to expose via the API, clients ask for exactly what they want and get results in the shape requested.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7)
> **Env Vars:** api (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [GraphQL versus REST](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=0)** - [Instructor] The most common type of APIs available are [[Representational State Transfer (REST)|REST]] APIs.
>
> **[0:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=5)** REST has for long been the standard approach for building APIs.
>
> **[0:09](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=9)** REST stands for [[Representational State Transfer (REST)|Representational State Transfer]] and represents the constraints of REST architectural style, which allows for interaction with RESTful web services.
>
> **[0:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=21)** Let's take a look at some of the differences between a REST and [[GraphQL]] API.
>
> **[0:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=27)** In a REST API, there are many HTTP methods that can be used to define endpoints, the most common being GET, POST, PUT and DELETE.
>
> **[0:38](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=38)** In a REST API, you would use a GET request to retrieve a record, a POST request to create one, a PUT request to update a record, and a DELETE request to delete one.
>
> **[0:52](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=52)** These requests are usually different endpoints defined by the API service.
>
> **[0:57](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=57)** This means you will need to have separate GET, POST, DELETE, PUT routes in your API service.
>
> **[1:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=65)** However, in GraphQL, all these methods are consolidated into one POST request to a GraphQL endpoint.
>
> **[1:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=73)** GraphQL can be organized in terms of schema, whereas REST can be arranged in terms of endpoints.
>
> **[1:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=81)** In a REST API, you would typically design multiple endpoints for clients to access data via those endpoints.
>
> **[1:30](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=90)** Assuming we want to pull a user's address information.
>
> **[1:34](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=94)** In a REST API, you would first need to make a GET request to a user's address endpoint to get the addresses available to the user, then another request to the address endpoint to retrieve information related to the address.
>
> **[1:53](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=113)** However, in GraphQL, you can do this in one query.
>
> **[1:59](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=119)** You specify the user ID and the address field as well as the information you want to pull from the address and you get the information you want in the shape you described.
>
> **[2:11](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=131)** In REST, just like in the previous example, we had to access multiple endpoints to gain lower level information.
>
> **[2:20](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=140)** For every resource in a REST API, there's an endpoint for performing CRUD operations.
>
> **[2:26](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=146)** This means for a single resource, there could be at least four endpoints per resource.
>
> **[2:32](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=152)** These number of endpoints increase the code complexity and maintenance.
>
> **[2:37](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=157)** In GraphQL, however, there is a single endpoint and we can access all exposed resources by querying the shape we want.
>
> **[2:46](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=166)** Whenever our API changes in REST, we need to version it so that clients can call the right resource in the right way.
>
> **[2:55](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=175)** API versioning can get complex with many versions and often requires users to update their code with new version endpoints and request parameters.
>
> **[3:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=186)** GraphQL, however, doesn't require versioning, and the same endpoint can be used for many upgrades to the API.
>
> **[3:15](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=195)** The query fields could change, however, clients of the API would not need to adjust multiple endpoints to upgrade.
>
> **[3:23](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=203)** GraphQL uses a strong type system to define APIs.
>
> **[3:29](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=209)** Types are defined in a schema using the schema definition language, SDL, which serves as the contract between the client and the server to define how a client can access data.
>
> **[3:43](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=223)** REST, however, doesn't offer type-safety or autogenerated documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (14), [[GraphQL]] (8), [[Representational State Transfer (REST)|Representational state transfer]] (1)
> **Env Vars:** rest (14), api (12), post (4), put (3), delete (3)
> **API Endpoints:** put  (3), get  (2), post  (2), delete  (1)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Why GraphQL?](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=0)** - So, why use [[GraphQL]]?
>
> **[0:03](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=3)** Given the popularity of [[Representational State Transfer (REST)|REST]] APIs, why would one use GraphQL over the internet standard for many years?
>
> **[0:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=10)** There are many reasons why you should consider using GraphQL and we'll take a look at some of the reasons.
>
> **[0:16](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=16)** Due to the ability to only [[Fetch]] and access the data you want in the shape you need, GraphQL APIs tend to use only the resources required to give you what you want.
>
> **[0:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=27)** This means, GraphQL prevents over-fetching or under-fetching of data.
>
> **[0:32](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=32)** You only need to query and maintain one API endpoint.
>
> **[0:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=36)** A GraphQL design principle is hierarchical and product-centric.
>
> **[0:40](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=40)** A GraphQL query is hierarchical means the fields are nested within other fields and a query is shaped like the data it returns.
>
> **[0:48](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=48)** Following the product-centric design principle, it means GraphQL is driven by the data needs of the client and the language and run time that support the client.
>
> **[0:58](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=58)** GraphQL is strongly typed, which means queries are executed within the context of the system and it provides a declarative query language.
>
> **[1:07](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=67)** GraphQL APIs are organized in terms of fields and types, not endpoints, which enables clients to access the full capabilities of data from a single endpoint.
>
> **[1:19](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=79)** This makes GraphQL queries cleaner and easier to read and navigate, given that they're written in [[JSON]], which is a format almost every developer's familiar with.
>
> **[1:29](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=89)** Every GraphQL API conforms to a schema, which defines the shape of the data model and the queries a client can make.
>
> **[1:37](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=97)** This means, clients or users of the API can use one of the many tools available to play with the schema shape, such as the GraphQL playground.
>
> **[1:47](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=107)** There's no need to provide detailed level documentation before users can read and query your API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (13), [[Representational State Transfer (REST)|Rest]] (1), [[Fetch]] (1), [[JSON]] (1)
> **Env Vars:** api (4), rest (1), json (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - so (1)


### 2. Introduction to GraphQL Schemas and Types

[↑ Back to Table of Contents](#table-of-contents)

#### [The type system](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=0)** - [Instructor] The [[GraphQL]] type system is used to describe the potential a GraphQL sever has.
>
> **[0:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=6)** This means we can say that a GraphQL schema is made out of types by way of describing what data can be queried.
>
> **[0:15](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=15)** Let's take a look at this GraphQL query and response.
>
> **[0:18](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=18)** On the left is a query made by the client and on the right is the response from the GraphQL API.
>
> **[0:26](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=26)** We start by defining a root type which in this case is an object.
>
> **[0:30](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=30)** Then we indicate by selecting the user object and next we select the fields, name and age for the user object.
>
> **[0:41](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=41)** We can see that the API endpoint on the right retains the data in the exact shape defined in the query.
>
> **[0:49](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=49)** The query we just defined shows that a GraphQL service will always have a set of types which describe the data, which can be queried.
>
> **[0:58](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=58)** There are many different GraphQL types and we will take a look in the next lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7)
> **Env Vars:** api (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [The object types and fields](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=0)** - [Instructor] Let's take a look at what [[GraphQL]] object types and fields are.
>
> **[0:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=5)** Object types are the fundamental components of a GraphQL schema.
>
> **[0:09](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=9)** They represent the shape of the data available in a service as well as the fields.
>
> **[0:15](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=15)** Most of the types in GraphQL are object types.
>
> **[0:19](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=19)** So let's take a look at this example.
>
> **[0:22](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=22)** User in this case represents a GraphQL object type.
>
> **[0:26](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=26)** This means a type with fields.
>
> **[0:29](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=29)** Name and address are fields on the user type.
>
> **[0:33](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=33)** This means that name and address are the fields defined with the user object.
>
> **[0:38](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=38)** When we want to [[Fetch]] user information, these are the fields that would be available and only these fields based on how we're defining it in our GraphQL API.
>
> **[0:49](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=49)** The string definition is a built-in GraphQL scaler type.
>
> **[0:55](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=55)** They are some of the basic elements in a GraphQL schema.
>
> **[0:59](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=59)** You can view them as similar to built-in type in programming languages.
>
> **[1:03](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=63)** An example is integer.
>
> **[1:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=65)** We'll dive into scaler types in a moment.
>
> **[1:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=68)** The apostrophe at the end of the string means the field is required and cannot be null.
>
> **[1:15](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=75)** This means we always need to return a value for this field if a user object exists.
>
> **[1:22](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=82)** Address represents an array of the address objects available to the user.
>
> **[1:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=87)** This means that there's an address object type and a user can have more than one address.
>
> **[1:33](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=93)** And here's a representation of the address type.
>
> **[1:37](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=97)** As you can see, it's also a simple object type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7), [[Fetch]] (1)
> **Definitions:** means that (2), is a  (1)
> **Env Vars:** api (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [The query and mutation types](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=0)** - [Instructor] With our understanding of object types and fields, we can dive into the other types in [[GraphQL]].
>
> **[0:07](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=7)** Most of the time you will be working with object types.
>
> **[0:11](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=11)** However, a schema has two special types, which we could also call the root types.
>
> **[0:17](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=17)** These are the query and mutation types.
>
> **[0:20](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=20)** Every GraphQL schema must have a query type.
>
> **[0:24](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=24)** A schema defines the capabilities of a GraphQL API, and the query type defines the queries a GraphQL offers.
>
> **[0:32](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=32)** In other words, you can think of a query as [[Representational State Transfer (REST)|rest]] endpoint, an entry point to querying a graph.
>
> **[0:39](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=39)** Queries [[Fetch]] data, just like GET methods in a REST API.
>
> **[0:46](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=46)** Let's take a look at the GraphQL query on the left to fetch data.
>
> **[0:51](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=51)** The result is represented on the right.
>
> **[0:53](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=53)** We are fetching a specific address by providing the address ID in this query.
>
> **[1:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=60)** This means our query type definition in our GraphQL schema needs to have an address with an argument for an ID.
>
> **[1:09](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=69)** So unlike queries, a GraphQL service may or may not have a mutation.
>
> **[1:15](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=75)** Mutations enable an entry point to change data.
>
> **[1:20](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=80)** You can think of mutation as delete post or put endpoint in rest.
>
> **[1:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=87)** Defining a mutation is similar to queries.
>
> **[1:30](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=90)** We change the name from query to mutation, and define the mutation methods.
>
> **[1:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=96)** For example, let's say we want to enable clients to create users via our GraphQL API represented by this mutation definition.
>
> **[1:45](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=105)** We first need to define the fields needed create a user, as well as the types of those fields.
>
> **[1:53](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=113)** And then we define the type created or returned on the mutation.
>
> **[1:57](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=117)** And this shows a very simple example of how you can define mutations.
>
> **[2:02](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=122)** We will dive into creating queries and mutations with real examples in upcoming lessons.
>
> **[2:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=128)** So this introduction should give you a base before we dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (8), [[Representational State Transfer (REST)|Rest]] (3), [[Fetch]] (2)
> **Env Vars:** api (3), rest (1)
> **Analogies:** just like (1), similar to (1), for example (1)
> **API Endpoints:** get  (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [The scalar type](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=0)** - [Instructor] Let's take a look at scalar types.
>
> **[0:03](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=3)** Scalar types are often built-in [[GraphQL]] types, just like built-in types available in many other programming languages such as Int, String, Arrays, to name a few.
>
> **[0:14](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=14)** Scalars are primitive data types in the GraphQL type system and store all only a single value.
>
> **[0:23](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=23)** Here are some examples of scalar types available in GraphQL and Lighthouse.
>
> **[0:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=27)** We have Int, Float, String, Boolean, and ID.
>
> **[0:32](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=32)** The ID scalar type represents a unique identification.
>
> **[0:37](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=37)** Custom scalar types can also be defined in a GraphQL service.
>
> **[0:41](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=41)** Luckily, there are a lot of predefined custom scalar types available for different languages in GraphQL libraries so you never really need to create your own.
>
> **[0:52](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=52)** Lighthouse, the GraphQL framework we will use to build our GraphQL service, has some pre-defined custom scalar types such as date.
>
> **[1:02](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=62)** Custom scalar types are used in the same way as built-in scalar types as shown here.
>
> **[1:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=68)** PostCode is a custom scalar type and the postcode field is defined just like the in-built String! type for the name field.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7)
> **Analogies:** just like (2), such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The enum type](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-enum-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-enum-type?u=76281980&t=0)** - [Instructor] Enums types with a restricted set of values.
>
> **[0:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-enum-type?u=76281980&t=5)** Enum types are similar to enums in other programming languages, such as in [[Java]] or C shell.
>
> **[0:12](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-enum-type?u=76281980&t=12)** An enum is defined as an object type, and the syntax for defining an enum is by specifying the enum name and then the enum values, and that's it.
>
> **[0:24](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-enum-type?u=76281980&t=24)** The enum values should always be unique and immutable.
>
> **[0:28](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-enum-type?u=76281980&t=28)** By this definition, it means we can use the user status enum and specify any one of the values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Analogies:** similar to (1), such as (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)


### 3. Development Environment Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Prerequisite and development environment checklist](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=0)** - [Instructor] This course is aimed at beginners with no [[GraphQL]] experience.
>
> **[0:04](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=4)** However, a good understanding of programming in [[PHP]] and [[Laravel]] is required in order to successfully follow along.
>
> **[0:11](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=11)** Let's take a look at what you should know.
>
> **[0:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=13)** First, you must have a good understanding of PHP with basic insights into object-oriented principles.
>
> **[0:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=21)** You should also have PHP installed on your computer.
>
> **[0:24](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=24)** Secondly, an introductory level to Laravel will be very helpful in following along, since we'll be learning how to build GraphQL in Laravel.
>
> **[0:34](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=34)** We'll be using a database to store data and our examples.
>
> **[0:38](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=38)** A good understanding of [[Databases]] with local setup will be required to follow along successfully in this course.
>
> **[0:45](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=45)** You're free to use whichever [[Database Management]] system you want.
>
> **[0:48](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=48)** However, in this course, we'll be used in [[MySQL]].
>
> **[0:52](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=52)** You should also have an IDE installed on your computer, as well as a terminal for writing commands.
>
> **[0:58](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=58)** Did you check all boxes?
>
> **[1:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=60)** If you did, then you're ready to rock this.
>
> **[1:02](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=62)** If you didn't check all the boxes, then I suggest reading up in the area you have little experience in before moving along in this course.
>
> **[1:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=70)** This would enable you to follow along much more smoothly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[Laravel]] (3), [[GraphQL]] (2), [[Databases]] (1), [[Database Management]] (1)
> **CLI Commands:** php (3), mysql (1)
> **Env Vars:** php (3), ide (1)
> **Tools:** terminal (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Setting up Laravel](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=0)** - [Instructor] Now that we know the prerequisites for following along in this course let's begin our setup with a fresh installation of [[Laravel]].
>
> **[0:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=8)** This will enable us to start from scratch and configure our development environment together to mitigate missing steps as we call along.
>
> **[0:17](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=17)** The Laravel documentation provides a good installation guide for different operating systems.
>
> **[0:23](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=23)** Follow the installation guide for your os as listed here.
>
> **[0:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=27)** I'll be developing on a macOS and I'll create the Laravel project via Composer.
>
> **[0:34](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=34)** Composer is a dependency manager for [[PHP]].
>
> **[0:37](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=37)** You have the option to choose the best installation method for your os.
>
> **[0:41](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=41)** So if you choose to do so with Composer, you can go ahead and install it following the instructions outlined in this guide.
>
> **[0:49](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=49)** So go ahead and install Composer.
>
> **[0:51](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=51)** With Composer installed, let's create a Laravel project with this command in a folder called Laravel [[GraphQL]].
>
> **[0:59](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=59)** So open up your terminal and type, Composer, create project.
>
> **[1:04](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=64)** The installation takes some time.
>
> **[1:16](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=76)** Once the installation is completed, CD into the folder we created the project in.
>
> **[1:23](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=83)** And let's start the server.
>
> **[1:25](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=85)** Let's check if our installation was successful by opening the address provided in a browser.
>
> **[1:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=96)** We can see the Laravel welcome/demo page which means the first part of the Laravel setup is complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (7), [[PHP]] (1), [[GraphQL]] (1)
> **CLI Commands:** composer (6), php (1), cd (1)
> **Prerequisites:** setup (2), install (2), configure (1)
> **Non-Speech:** (typing sound) (2)
> **Code Identifiers:** macos (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Setting up a database with users](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=0)** - [Instructor] We just finished installing [[Laravel]] and checked that our installation works.
>
> **[0:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=5)** We will need a database to provide data in our [[GraphQL]] API.
>
> **[0:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=10)** We will use existing data infrastructure which comes with Laravel.
>
> **[0:15](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=15)** Let's start by configuring Laravel to recognize and connect to our database.
>
> **[0:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=21)** First, let's check if we can connect to our database server.
>
> **[0:25](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=25)** I'll be using [[MySQL]].
>
> **[0:26](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=26)** However, you are free to use the database server of your choice.
>
> **[0:30](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=30)** I'll also be using a VS Code plugin to connect to and manage my database.
>
> **[0:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=36)** Let's create a database for our application.
>
> **[0:39](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=39)** I'll call it laravel.
>
> **[0:48](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=48)** Our database has been created, and there are no tables yet.
>
> **[0:53](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=53)** Now, let's go ahead and define our database configuration in our Laravel application.
>
> **[1:01](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=61)** Open up the .env file.
>
> **[1:07](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=67)** Look for the DB_DATABASE name which is laravel, the USERNAME root, and the PASSWORD for your database server which is password in my case.
>
> **[1:20](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=80)** Let's save it.
>
> **[1:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=81)** Laravel comes with a users table which can be used out of the box.
>
> **[1:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=87)** This includes a solid, out-of-the-box authentication system as well.
>
> **[1:31](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=91)** We're interested in the users table.
>
> **[1:33](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=93)** So let's go ahead and migrate the table so we can seed some data.
>
> **[1:37](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=97)** Let's open up a terminal.
>
> **[1:40](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=100)** Make sure you are in the laravel project, and let's migrate.
>
> **[1:49](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=109)** Once we run our migration, we can see that a few tables have been created.
>
> **[1:54](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=114)** Let's open up our database connection, refresh, and we can see that these tables have been created.
>
> **[2:03](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=123)** We also have a users table.
>
> **[2:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=125)** Next, let's go ahead and seed some data into our users table.
>
> **[2:11](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=131)** All seed classes are stored in database, in seeders package.
>
> **[2:18](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=138)** Let's get some users in our users table by seeding this data.
>
> **[2:22](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=142)** We can see the database with Tinker.
>
> **[2:24](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=144)** Let's go into the Tinker console.
>
> **[2:30](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=150)** And next, let's seed some users' data.
>
> **[2:43](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=163)** We want to seed about 10 users.
>
> **[2:48](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=168)** And we can see that 10 users have been created for us.
>
> **[2:54](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=174)** Next, let's check if these users were actually created.
>
> **[3:01](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=181)** Let's select the users.
>
> **[3:04](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=184)** And as we can see down here, we have 10 users created in the users table.
>
> **[3:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=190)** This is great.
>
> **[3:11](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=191)** We are slowly setting up our environment to dive into building our GraphQL API to access data from our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (8), [[GraphQL]] (2), [[MySQL]] (1)
> **Env Vars:** api (2), db_database (1), username (1), password (1)
> **CLI Commands:** mysql (1), make (1)
> **Tools:** vs code (1), terminal (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Setting up Lighthouse](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=0)** - [Instructor] There are a number of [[GraphQL]] libraries out there for [[PHP]].
>
> **[0:03](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=3)** However, Lighthouse leads the pack when it comes to building Graph QL APIs in [[Laravel]].
>
> **[0:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=10)** Lighthouse is a framework for serving GraphQL.
>
> **[0:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=13)** In fact, Lighthouse is made specifically for Laravel.
>
> **[0:17](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=17)** So it is Laravel friendly.
>
> **[0:19](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=19)** I particularly like how it is optimized for eloquent queries.
>
> **[0:23](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=23)** We'll learn more about that later.
>
> **[0:25](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=25)** Installing Lighthouse is quite straightforward.
>
> **[0:28](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=28)** We can require it via Composer.
>
> **[0:31](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=31)** So let's copy this command, open up our terminal and run it.
>
> **[0:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=36)** This would pull in the Lighthouse package.
>
> **[0:44](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=44)** Once Lighthouse is installed, we can install a GraphQL client library, maybe a development tool such as GraphQL Playground.
>
> **[0:55](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=55)** Let's go ahead and install it.
>
> **[0:58](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=58)** Open up your terminal.
>
> **[1:01](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=61)** GraphQL Playground is a graphical and interactive in-browser.
>
> **[1:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=66)** GraphQL IDE for querying and interacting with a GraphQL API.
>
> **[1:12](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=72)** So you can think of it as Postman for [[Representational State Transfer (REST)|REST]] API.
>
> **[1:16](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=76)** And that's all the installation required to set up Lighthouse.
>
> **[1:20](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=80)** We will confirm this installation in the next lesson with a simple hello world GraphQL query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (8), [[Laravel]] (3), [[PHP]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (2), php (1), ide (1), rest (1)
> **Tools:** terminal (2), postman (1)
> **Prerequisites:** install (2), set up (1)
> **CLI Commands:** php (1), composer (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), think of it as (1)
> **Cross-References:** in the next (1)

#### [A Hello World GraphQL endpoint](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=0)** - As a tradition in software engineering when learning anything new, we need to say hello.
>
> **[0:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=6)** We made it this far, which means we can gift ourselves with a good old Hello World programme to confirm our setup.
>
> **[0:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=13)** Let's create a Hello World end point to return Hello World when we define our query with the field 'greetings'.
>
> **[0:22](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=22)** Let's start by defining a simple query in a schema.
>
> **[0:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=27)** In our root folder, let's create a directory called [[GraphQL]] and a file called, schema.graphql.
>
> **[0:39](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=39)** We can then go ahead and define our query.
>
> **[0:42](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=42)** Would be of type query, filled greetings, and of type string.
>
> **[0:50](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=50)** Next, we need to define a query class to resolve the query.
>
> **[0:55](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=55)** Query classes are created with the name space app graphql queries.
>
> **[1:02](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=62)** In here, we don't see a graphql directory.
>
> **[1:07](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=67)** We can use the built in artisan command lighthouse query to create a query class.
>
> **[1:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=73)** So let's open up our terminal and let's type [[PHP]] Artisan Lighthouse Query and the name of our query class, which in this case would be Greetings.
>
> **[1:30](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=90)** If we open up graphql queries, we have our class Greetings.
>
> **[1:35](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=95)** So let's go ahead and return a string called Hello World.
>
> **[1:39](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=99)** Let's save this.
>
> **[1:46](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=106)** Now we can open our playground and query the API by specifying the query field we defined to return Hello World.
>
> **[1:57](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=117)** So here we define an object and greetings.
>
> **[2:02](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=122)** Once we hit play, we'll see that we have Hello World returned, and there you have it.
>
> **[2:09](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=129)** We have successfully set up [[Laravel]], a database Lighthouse and confirmed it works with a Hello World API.
>
> **[2:17](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=137)** We will dive more into graphql basics and work our way through queries and mutations later on in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (6), [[PHP]] (1), [[Laravel]] (1)
> **Env Vars:** api (2), php (1)
> **Prerequisites:** setup (1), set up (1)
> **CLI Commands:** php (1)
> **Tools:** terminal (1)
> **Speakers:** - as (1)
> **Non-Speech:** (typing) (1)


### 4. GraphQL Queries

[↑ Back to Table of Contents](#table-of-contents)

#### [Diving into GraphQL queries with Lighthouse](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=0)** - Now that we have an overview of the basic types and schema of [[GraphQL]], we are ready to dive into practical examples of defining GraphQL schemas.
>
> **[0:12](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=12)** We will be creating a schema on the user's table.
>
> **[0:15](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=15)** Our GraphQL service will enable clients to query the user's table to retrieve data.
>
> **[0:22](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=22)** In chapter three, we set up our users' table and seeded it with some data.
>
> **[0:28](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=28)** We also connected to our database from Laravelle.
>
> **[0:32](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=32)** We will use this previous setup to define queries on our user object.
>
> **[0:38](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=38)** The users' table has the following fields we're interested in.
>
> **[0:42](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=42)** ID, name, and email.
>
> **[0:45](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=45)** Let's start by opening up the schema file.
>
> **[0:49](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=49)** Let's remove the previous definition.
>
> **[0:51](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=51)** First, we need to define the user type, which is an object, followed by the fields we want to expose, in this case the ID, name and email.
>
> **[1:01](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=61)** We would also define the types of these fields.
>
> **[1:04](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=64)** We start with a keyword type.
>
> **[1:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=66)** Then the object name, which is user, and then the fields we want to expose.
>
> **[1:12](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=72)** So let's go ahead and type it.
>
> **[1:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=73)** ID would take type ID.
>
> **[1:17](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=77)** We also want the name of type string, as well as the email also of type string.
>
> **[1:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=87)** Next, we need to define the query.
>
> **[1:30](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=90)** We specify the endpoint name which in this case will be users.
>
> **[1:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=96)** Type query.
>
> **[1:40](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=100)** Our endpoint name would be users.
>
> **[1:44](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=104)** We want to retain an array of type users so we define that type users.
>
> **[1:54](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=114)** We also define the directive @all the @all directive is inbuilt in Lighthouse and automatically uses eloquent to resolve the field.
>
> **[2:07](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=127)** And there we have it.
>
> **[2:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=128)** We have successfully created a GraphQL query to return users.
>
> **[2:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=133)** In the next lesson we will query this definition to get all users in the database using the GraphQL Playground.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (5)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - now (1)

#### [Querying fields in GraphQL](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=0)** - [Instructor] We successfully created a query to [[Fetch]] users' data which means we can now access this query via a [[GraphQL]] endpoint.
>
> **[0:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=10)** Let's make sure we're defining our type correctly.
>
> **[0:12](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=12)** Let's open our playground and refresh the page.
>
> **[0:16](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=16)** Start by typing.
>
> **[0:18](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=18)** (keyboard clicks) And here we can see there's a suggestion for users.
>
> **[0:25](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=25)** We want to query users and we can define the fields we want to pull which in this case could be id, name, and email.
>
> **[0:40](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=40)** We can also decide to only query for id and name.
>
> **[0:44](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=44)** Let's execute.
>
> **[0:46](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=46)** And there you go.
>
> **[0:48](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=48)** We have the user's data in the shape we described on the right.
>
> **[0:53](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=53)** We can also decide to pull the email, in this case.
>
> **[0:58](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=58)** Execute and we can see the email is now part of the data returned.
>
> **[1:04](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=64)** This information is being pulled from the users table we seeded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[GraphQL]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Querying with arguments](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=0)** - [Instructor] Comparing what we have done so far to a [[Representational State Transfer (REST)|REST]] API, our user query will be a get request to [[Fetch]] all users' data.
>
> **[0:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=10)** What if we want the clients of our service to filter the users or fetch the data for only one user?
>
> **[0:18](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=18)** In most REST APIs will define a separate endpoint such as, users ID and accept a parameter for the user ID.
>
> **[0:32](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=32)** In [[GraphQL]], we do not need a separate endpoint.
>
> **[0:37](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=37)** We can achieve the same via arguments.
>
> **[0:40](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=40)** Let's say we want to enable filtering on the users by ID.
>
> **[0:47](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=47)** First, we define the query name, which in this case would be user.
>
> **[0:54](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=54)** The type, ID.
>
> **[1:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=60)** And a directive called @eq, which means we want to put a constraint to retain only one user, as well as the return type, which would be the user object.
>
> **[1:15](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=75)** And finally, the @find directive which is similar to eloquence find method.
>
> **[1:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=81)** Let's open up the GraphQL playground.
>
> **[1:25](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=85)** We can then query for only one user.
>
> **[1:28](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=88)** Let's say we want to query for only the user with ID two.
>
> **[1:34](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=94)** We define user and we need to specify the ID which in this case would be two.
>
> **[1:43](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=103)** And then the fields we want to pull.
>
> **[1:47](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=107)** So maybe just the name and ID click to execute and we can see we get the results for only the user with ID two.
>
> **[1:57](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=117)** And there you have it.
>
> **[1:59](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=119)** We have pulled data from the user's table and we have also filtered based on the user ID.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Fetch]] (2), [[GraphQL]] (2)
> **Env Vars:** rest (2), api (1)
> **CLI Commands:** find (2)
> **Analogies:** such as (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Querying with aliases](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=0)** - [Instructor] Let's take a look at aliases.
>
> **[0:02](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=2)** Aliases are a fun way to run multiple queries and separate data.
>
> **[0:07](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=7)** If we execute our previous query with the argument id, we can see here that the result object field matches the name of the field in the query, but it doesn't include the id or an incremental field.
>
> **[0:26](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=26)** Assuming we want to run this query again for a different id, we will run into an issue of not knowing which user the data belongs to and there will be a conflict of resolution.
>
> **[0:39](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=39)** In fact, we'll get an error if we try.
>
> **[0:44](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=44)** So let's say we want to run this again for the user with id 4, and here we see there's an error.
>
> **[0:52](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=52)** We can use aliases to rectify this.
>
> **[0:56](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=56)** We define an alias by typing out whichever name we want followed by the query.
>
> **[1:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=65)** And we can repeat it for as many queries as we want.
>
> **[1:09](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=69)** Let's do it right now.
>
> **[1:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=70)** Let's type the alias userOne and maybe we can call this userTwo.
>
> **[1:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=81)** Let's hit run and we can see that our aliases are defined in the results.

> [!info]- Semantic Content
>
> **Code Identifiers:** userone (1), usertwo (1)
> **Speakers:** - [instructor] (1)

#### [Using the Lighthouse paginate directive](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=0)** - [Instructor] It is almost always a given to implement pagination when exposing large sets of data via an API.
>
> **[0:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=8)** Lighthouse makes it easier to implement pagination in [[GraphQL]].
>
> **[0:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=13)** We can leverage the @paginate directive to implement pagination on a large set of models in chunks.
>
> **[0:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=21)** The model in this case will be our User model.
>
> **[0:24](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=24)** Let's implement pagination on the User's query.
>
> **[0:28](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=28)** All we need to do is replace the @all directive with paginate.
>
> **[0:38](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=38)** And then we can go ahead and query our users and define the size.
>
> **[0:43](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=43)** Let's open up GraphQL Playground.
>
> **[0:47](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=47)** We can go ahead and define, "Pull in the users information."
>
> **[0:53](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=53)** Now, we need to define our pagination.
>
> **[0:59](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=59)** A "first" and "page" arguments are automatically added, and we can leverage that in constraining the data we [[Fetch]].
>
> **[1:09](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=69)** So we want to pull the first five, and we want the page size to be one.
>
> **[1:18](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=78)** We then go ahead and define a data object.
>
> **[1:22](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=82)** And define the fields we want to pull, which in this case would be name, id, and email.
>
> **[1:28](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=88)** We're also provided with the paginatorInfo object.
>
> **[1:33](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=93)** The paginatorInfo can be specified as an object to retrieve additional information on the pagination.
>
> **[1:41](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=101)** So let's go ahead and define that.
>
> **[1:44](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=104)** The paginatorInfo object has fields such as currentPage, and this would allow us to retrieve the index of the current page.
>
> **[1:54](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=114)** As well as lastPage, this enables us to retrieve the index of the first item in the current page.
>
> **[2:02](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=122)** We also have many more such as hasMorePages, which is a Boolean to find out if there are more pages after the current pagination.
>
> **[2:12](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=132)** There's also lastItem to enable us retrieve the index of the last item.
>
> **[2:19](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=139)** As well as total, to get the total number of items.
>
> **[2:23](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=143)** There are many more fields that we can explore.
>
> **[2:26](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=146)** Let's click to execute.
>
> **[2:28](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=148)** As we can see, we have only five items returned.
>
> **[2:32](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=152)** And we also have our paginator information.
>
> **[2:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=156)** We can adjust this to only two items.
>
> **[2:40](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=160)** We hit execute, and we can see only two items returned.
>
> **[2:44](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=164)** And the total number of items in our database is 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (2), [[Fetch]] (1)
> **Code Identifiers:** paginatorinfo (3), currentpage (1), lastpage (1), hasmorepages (1), lastitem (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. GraphQL Mutations

[↑ Back to Table of Contents](#table-of-contents)

#### [Diving into GraphQL mutations with Lighthouse](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=0)** - [Narrator] Up until now, we have been looking at how to create queries, types, and fields.
>
> **[0:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=6)** We have also looked at how to query them, all this with preexisting data in a table.
>
> **[0:14](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=14)** In reality, an API will provide clients the opportunity to create, read, update, and delete entities.
>
> **[0:22](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=22)** We have mainly been building the read aspect of CRUD.
>
> **[0:26](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=26)** In a [[Representational State Transfer (REST)|REST]] API, there will typically be an endpoint to create, update, and delete an entity, commonly defined by the post, put, and delete methods.
>
> **[0:37](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=37)** In [[GraphQL]], however, we use mutations to achieve the same.
>
> **[0:42](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=42)** Mutations enable us to alter data on a server.
>
> **[0:46](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=46)** Let's take a look at a simple generic mutation.
>
> **[0:50](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=50)** In defining a mutation, we use the keyword mutation rather than query.
>
> **[0:56](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=56)** This mutation takes the input's name and email to create a user.
>
> **[1:03](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=63)** Finally, the mutation returns data.
>
> **[1:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=66)** It returns the ID of the newly-created user.
>
> **[1:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=70)** In the next lessons, we will take a look at creating, updating, and deleting a user, leveraging Lighthouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[GraphQL]] (1)
> **Env Vars:** api (2), crud (1), rest (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [Creating a user](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=0)** - [Instructor] Let's start by defining a Mutation to create a user.
>
> **[0:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=6)** This Mutation should enable us to specify a name and email to create a user.
>
> **[0:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=13)** We won't be specifying the password and other information.
>
> **[0:18](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=18)** We start by defining the object Mutation.
>
> **[0:24](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=24)** So we have type Mutation, the name of the Mutation, which would be createUser.
>
> **[0:38](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=38)** And then the arguments, name and email.
>
> **[0:43](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=43)** Name would be of type String.
>
> **[0:47](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=47)** Then the email, also of type String.
>
> **[0:53](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=53)** We could actually go ahead and pass in a password field, but in this case we will not be validating or encoding the password.
>
> **[1:04](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=64)** We also need to define the user object.
>
> **[1:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=70)** And finally, the @create directive.
>
> **[1:14](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=74)** Let's save and open our playground.
>
> **[1:17](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=77)** We can from here create our Mutation.
>
> **[1:20](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=80)** Let's start by defining the Mutation, and we define our Mutation name as createUser, and then we can go ahead and define the fields.
>
> **[1:31](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=91)** So name could be Doe.
>
> **[1:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=96)** And email, doe@[mail.com](https://mail.com).
>
> **[1:45](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=105)** And password, we could say password for now.
>
> **[1:50](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=110)** Of course, we would want to type a much stronger password if it was a real application.
>
> **[1:56](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=116)** And next, we want to return the ID, and maybe also the name.
>
> **[2:05](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=125)** Click execute, and we see that the user was created, and the ID and name returned.
>
> **[2:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=133)** Let's check if the user actually exists in our database.
>
> **[2:18](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=138)** If we open and check our users table, we can refresh this query.
>
> **[2:25](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=145)** And here we can see that we have a new entry in the users table with name Doe, and the email we defined as well as the password.
>
> **[2:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=156)** But of course, this is not encrypted, which is something we wouldn't do if we were pushing this to production.
>
> **[2:42](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=162)** So we have just tackled the first part of CRUD, creating entities.
>
> **[2:47](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=167)** In the next lesson, we will look at how we can update the user we just created.

> [!info]- Semantic Content
>
> **Code Identifiers:** createuser (2)
> **URLs:** [mail.com](https://mail.com) (1)
> **Env Vars:** crud (1)
> **Cross-References:** in the next (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [Updating a user](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=0)** - [Instructor] Let's take a look at how we can update the user.
>
> **[0:04](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=4)** We might want to update the email, name, or password, or any other field that we defined.
>
> **[0:12](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=12)** The Mutation definition for updating the user is quite similar to creating a user.
>
> **[0:17](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=17)** All we need to do is define the Mutation similar to create and use @update directive.
>
> **[0:26](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=26)** Let's see how that would look.
>
> **[0:29](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=29)** We first define the name of the Mutation, which in this case we will call updateUser, and then the fields.
>
> **[0:38](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=38)** So we want to require an ID, and we want to expose the field's name and email to be updateable.
>
> **[0:52](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=52)** We can also throw in the password here.
>
> **[0:57](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=57)** And we would return the type User.
>
> **[1:02](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=62)** And instead of @create, we would use the directive @update.
>
> **[1:10](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=70)** Let's save this.
>
> **[1:12](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=72)** Now if we head over to our [[GraphQL]] playground, we can delete this create user definition and we can define an update mutation.
>
> **[1:26](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=86)** So we can call the updateUser, and we specify the name, which in this case we might want to change to Joe.
>
> **[1:41](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=101)** And we also need to define the ID.
>
> **[1:43](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=103)** If we remember from the user we created earlier, the ID was 11, and we would like to return the ID and the name.
>
> **[1:57](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=117)** Click to execute, and we see that the user 11 has been updated, and the ID and name returned.
>
> **[2:07](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=127)** Let's check if the user was actually updated in the table.
>
> **[2:11](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=131)** Let's refresh our users table, and we can see the name was changed from Doe to Joe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (1)
> **Code Identifiers:** updateuser (2)
> **Analogies:** similar to (2)
> **Speakers:** - [instructor] (1)

#### [Deleting a user](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=0)** - [Instructor] Let's take a look at how we can delete the user we created and update it.
>
> **[0:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=6)** Deletion is quite straightforward.
>
> **[0:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=8)** We first define the delete mutation, which we will call delete user.
>
> **[0:14](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=14)** So let's open up our schema.[[GraphQL]] file.
>
> **[0:18](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=18)** We specified to delete the user by ID.
>
> **[0:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=21)** So let's define the mutation name, delete user.
>
> **[0:27](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=27)** We take in the argument ID, which should be required.
>
> **[0:33](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=33)** The object is of type user, and we define the @delete directive.
>
> **[0:42](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=42)** And that's it.
>
> **[0:43](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=43)** Let's save.
>
> **[0:45](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=45)** And then we open up our graphql playground.
>
> **[0:49](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=49)** Let's give it a refresh.
>
> **[0:50](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=50)** And we can go ahead and define our mutation to delete the user.
>
> **[0:56](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=56)** Delete user.
>
> **[0:59](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=59)** Next enter ID.
>
> **[1:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=60)** And we want to delete the user we created and updated, which in this case has the ID 11.
>
> **[1:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=68)** And we would like to return the ID.
>
> **[1:12](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=72)** Execute.
>
> **[1:14](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=74)** And we can see our user was deleted.
>
> **[1:16](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=76)** Let's confirm that in the table.
>
> **[1:19](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=79)** So we have our user still in the table.
>
> **[1:22](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=82)** Let's refresh.
>
> **[1:24](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=84)** And we can see our user was successfully deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring more Lighthouse and GraphQL functionalities](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980&t=0)** - [Instructor] Congratulations on completing this course.
>
> **[0:04](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980&t=4)** To recap, we had an introduction to [[GraphQL]] and we looked at the benefits of GraphQL over [[Representational State Transfer (REST)|REST]].
>
> **[0:13](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980&t=13)** We also built a GraphQL service to [[Fetch]], create, and alter data using the user model.
>
> **[0:21](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980&t=21)** We have covered almost everything you need to build a simple GraphQL application in [[Laravel]] using Lighthouse, leveraging existing eloquent models.
>
> **[0:33](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980&t=33)** However, there is still a lot more you can do with GraphQL, such as exploring more on directives and leveraging eloquent relationships with Lighthouse as well as subscriptions, securing your GraphQL service, the Apollo Federation among others.
>
> **[0:53](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980&t=53)** The Lighthouse site and documentation will be a great reference to continue learning and exploring how much more you can further improve your Laravel GraphQL knowledge.
>
> **[1:06](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980&t=66)** Thank you for following along, and until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7), [[Laravel]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Fetch]] (1)
> **Env Vars:** rest (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Rasheeda Yehuza]]

## Skills Covered

- GraphQL
- Laravel

## Path Context

### In [[Build Your Laravel Skills]]
← [[Building RESTful APIs in Laravel]] | **4 of 7** | [[Essential Jigsaw for PHP and Laravel Developers]] →

## Appears In

- [[Build Your Laravel Skills]]

## Related Courses

_Courses sharing skills:_

- [[Winter CMS with Laravel]] — Laravel
- [[Essential Statamic for PHP and Laravel Developers]] — Laravel
- [[Essential Jigsaw for PHP and Laravel Developers]] — Laravel
- [[Building RESTful APIs in Laravel]] — Laravel
- [[Advanced Laravel]] — Laravel

---

[↑ Back to top](#)