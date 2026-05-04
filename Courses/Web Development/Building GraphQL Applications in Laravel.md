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
  - '[Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)'
prev_courses:
  - '[Building RESTful APIs in Laravel](Building%20RESTful%20APIs%20in%20Laravel.md)'
next_courses:
  - '[Essential Jigsaw for PHP and Laravel Developers](Essential%20Jigsaw%20for%20PHP%20and%20Laravel%20Developers.md)'
path_nav: '[{"path":"Build Your Laravel Skills","position":4,"total":7,"prev":"Building RESTful APIs in Laravel","next":"Essential Jigsaw for PHP and Laravel Developers"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/graphql
  - skill/laravel
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/build-graphql-apps-in-laravel?u=76281980&t=0)** - [Mandeeya] [Application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md) bring different applications together and enable access to information on different servers. [GraphQL](../../Skills/Web%20Development/GraphQL.md) is one way to enable application-to-application communication. With an increase in number of new APIs being built in GraphQL, it is imperative to know how to [Fetch](../../Skills/Web%20Development/Fetch.md), create, and alter data on the server. In this course, we will start with an introduction to GraphQL. We'll learn about the different types, queries, and mutations, and then we will build a GraphQL API together from scratch based on users' data to perform CRUD functions. At the end of this course, you will learn how to build a GraphQL API in [PHP](../../Skills/Software%20Development/PHP.md) and how to create, alter, and retrieve data from a GraphQL API. My name is Mandeeya, and I've been programming and building web and API applications for the past 10 years, and I'm very excited about the future of APIs on the web. So come along as we demystify GraphQL and PHP to enable you to start working with it right away in your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (7), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Application programming interfaces](../../Skills/Software%20Development/Application%20Programming%20Interfaces%20(API).md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** api (4), php (2), crud (1)
> **CLI Commands:** php (2)
> **Speakers:** - [mandeeya] (1)


### 1. Understanding GraphQL

[↑ Back to Table of Contents](#table-of-contents)

#### [What is GraphQL?](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/what-is-graphql?u=76281980&t=0)** - [Instructor] Let's start by defining what [GraphQL](../../Skills/Web%20Development/GraphQL.md) is. GraphQL is a query language for APIs, and can be used to query data from a server. It also allows clients to specify exactly what data they need. GraphQL provides a complete and understandable description of the data in an API, and makes it easier to evolve APIs over time. With GraphQL, you ask for the data you need from the service, and you get exactly what you want. Let's assume we have users data stored in a database in our system, each user has a name, email, and address, and we want to expose the users data via an API. The GraphQL request flow from the client side will be to make a request to our GraphQL endpoint by defining the query data or information structure of the users data we're interested in. Our GraphQL endpoint will interpret the query, and serve data from the users database by returning the shape defined in the query. This means you describe the data you want to expose via the API, clients ask for exactly what they want and get results in the shape requested.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (7)
> **Env Vars:** api (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [GraphQL versus REST](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=0)** - [Instructor] The most common type of APIs available are [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs. REST has for long been the standard approach for building APIs. REST stands for [Representational State Transfer](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and represents the constraints of REST architectural style, which allows for interaction with RESTful web services. Let's take a look at some of the differences between a REST and [GraphQL](../../Skills/Web%20Development/GraphQL.md) API. In a REST API, there are many HTTP methods that can be used to define endpoints, the most common being GET, POST, PUT and DELETE. In a REST API, you would use a GET request to retrieve a record, a POST request to create one, a PUT request to update a record, and a DELETE request to delete one. These requests are usually different endpoints defined by the API service. This means you will need to have separate GET, POST, DELETE, PUT routes in your API service. However, in GraphQL, all these methods are consolidated into one POST request to a GraphQL endpoint. GraphQL can be organized in terms of schema, whereas REST can be arranged in terms of endpoints. In a REST API, you would typically design multiple endpoints for clients to access data via those endpoints. Assuming we want to pull a user's address information. In a REST API,
>
> **[1:35](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=95)** you would first need to make a GET request to a user's address endpoint to get the addresses available to the user, then another request to the address endpoint to retrieve information related to the address. However, in GraphQL, you can do this in one query. You specify the user ID and the address field as well as the information you want to pull from the address and you get the information you want in the shape you described. In REST, just like in the previous example, we had to access multiple endpoints to gain lower level information. For every resource in a REST API, there's an endpoint for performing CRUD operations. This means for a single resource, there could be at least four endpoints per resource. These number of endpoints increase the code complexity and maintenance. In GraphQL, however, there is a single endpoint and we can access all exposed resources by querying the shape we want. Whenever our API changes in REST, we need to version it so that clients can call the right resource in the right way. API versioning can get complex with many versions and often requires users to update their code with new version endpoints and request parameters. GraphQL, however,
>
> **[3:08](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/graphql-versus-rest?u=76281980&t=188)** doesn't require versioning, and the same endpoint can be used for many upgrades to the API. The query fields could change, however, clients of the API would not need to adjust multiple endpoints to upgrade. GraphQL uses a strong type system to define APIs. Types are defined in a schema using the schema definition language, SDL, which serves as the contract between the client and the server to define how a client can access data. REST, however, doesn't offer type-safety or autogenerated documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (14), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (8), [Representational state transfer](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** rest (14), api (12), post (4), put (3), delete (3)
> **API Endpoints:** put  (3), get  (2), post  (2), delete  (1)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Why GraphQL?](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=0)** - So, why use [GraphQL](../../Skills/Web%20Development/GraphQL.md)? Given the popularity of [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs, why would one use GraphQL over the internet standard for many years? There are many reasons why you should consider using GraphQL and we'll take a look at some of the reasons. Due to the ability to only [Fetch](../../Skills/Web%20Development/Fetch.md) and access the data you want in the shape you need, GraphQL APIs tend to use only the resources required to give you what you want. This means, GraphQL prevents over-fetching or under-fetching of data. You only need to query and maintain one API endpoint. A GraphQL design principle is hierarchical and product-centric. A GraphQL query is hierarchical means the fields are nested within other fields and a query is shaped like the data it returns. Following the product-centric design principle, it means GraphQL is driven by the data needs of the client and the language and run time that support the client. GraphQL is strongly typed, which means queries are executed within the context of the system and it provides a declarative query language. GraphQL APIs are organized in terms of fields and types, not endpoints, which enables clients to access the full capabilities of data from a single endpoint. This makes GraphQL queries cleaner and easier to read and navigate, given that they're written in [JSON](../../Skills/Web%20Development/JSON.md), which is a format almost every developer's familiar with. Every GraphQL API conforms to a schema, which defines the shape of the data model
>
> **[1:35](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/why-graphql?u=76281980&t=95)** and the queries a client can make. This means, clients or users of the API can use one of the many tools available to play with the schema shape, such as the GraphQL playground. There's no need to provide detailed level documentation before users can read and query your API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (13), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-type-system?u=76281980&t=0)** - [Instructor] The [GraphQL](../../Skills/Web%20Development/GraphQL.md) type system is used to describe the potential a GraphQL sever has. This means we can say that a GraphQL schema is made out of types by way of describing what data can be queried. Let's take a look at this GraphQL query and response. On the left is a query made by the client and on the right is the response from the GraphQL API. We start by defining a root type which in this case is an object. Then we indicate by selecting the user object and next we select the fields, name and age for the user object. We can see that the API endpoint on the right retains the data in the exact shape defined in the query. The query we just defined shows that a GraphQL service will always have a set of types which describe the data, which can be queried. There are many different GraphQL types and we will take a look in the next lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (7)
> **Env Vars:** api (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [The object types and fields](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=0)** - [Instructor] Let's take a look at what [GraphQL](../../Skills/Web%20Development/GraphQL.md) object types and fields are. Object types are the fundamental components of a GraphQL schema. They represent the shape of the data available in a service as well as the fields. Most of the types in GraphQL are object types. So let's take a look at this example. User in this case represents a GraphQL object type. This means a type with fields. Name and address are fields on the user type. This means that name and address are the fields defined with the user object. When we want to [Fetch](../../Skills/Web%20Development/Fetch.md) user information, these are the fields that would be available and only these fields based on how we're defining it in our GraphQL API. The string definition is a built-in GraphQL scaler type. They are some of the basic elements in a GraphQL schema. You can view them as similar to built-in type in programming languages. An example is integer. We'll dive into scaler types in a moment. The apostrophe at the end of the string means the field is required and cannot be null. This means we always need to return a value for this field if a user object exists. Address represents an array of the address objects available to the user. This means that there's an address object type and a user can have more than one address.
>
> **[1:33](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-object-types-and-fields?u=76281980&t=93)** And here's a representation of the address type. As you can see, it's also a simple object type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (7), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Definitions:** means that (2), is a  (1)
> **Env Vars:** api (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [The query and mutation types](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=0)** - [Instructor] With our understanding of object types and fields, we can dive into the other types in [GraphQL](../../Skills/Web%20Development/GraphQL.md). Most of the time you will be working with object types. However, a schema has two special types, which we could also call the root types. These are the query and mutation types. Every GraphQL schema must have a query type. A schema defines the capabilities of a GraphQL API, and the query type defines the queries a GraphQL offers. In other words, you can think of a query as [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) endpoint, an entry point to querying a graph. Queries [Fetch](../../Skills/Web%20Development/Fetch.md) data, just like GET methods in a REST API. Let's take a look at the GraphQL query on the left to fetch data. The result is represented on the right. We are fetching a specific address by providing the address ID in this query. This means our query type definition in our GraphQL schema needs to have an address with an argument for an ID. So unlike queries, a GraphQL service may or may not have a mutation. Mutations enable an entry point to change data. You can think of mutation as delete post or put endpoint in rest. Defining a mutation is similar to queries. We change the name from query to mutation,
>
> **[1:33](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-query-and-mutation-types?u=76281980&t=93)** and define the mutation methods. For example, let's say we want to enable clients to create users via our GraphQL API represented by this mutation definition. We first need to define the fields needed create a user, as well as the types of those fields. And then we define the type created or returned on the mutation. And this shows a very simple example of how you can define mutations. We will dive into creating queries and mutations with real examples in upcoming lessons. So this introduction should give you a base before we dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (8), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (3), [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **Env Vars:** api (3), rest (1)
> **Analogies:** just like (1), similar to (1), for example (1)
> **API Endpoints:** get  (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [The scalar type](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-scalar-type?u=76281980&t=0)** - [Instructor] Let's take a look at scalar types. Scalar types are often built-in [GraphQL](../../Skills/Web%20Development/GraphQL.md) types, just like built-in types available in many other programming languages such as Int, String, Arrays, to name a few. Scalars are primitive data types in the GraphQL type system and store all only a single value. Here are some examples of scalar types available in GraphQL and Lighthouse. We have Int, Float, String, Boolean, and ID. The ID scalar type represents a unique identification. Custom scalar types can also be defined in a GraphQL service. Luckily, there are a lot of predefined custom scalar types available for different languages in GraphQL libraries so you never really need to create your own. Lighthouse, the GraphQL framework we will use to build our GraphQL service, has some pre-defined custom scalar types such as date. Custom scalar types are used in the same way as built-in scalar types as shown here. PostCode is a custom scalar type and the postcode field is defined just like the in-built String! type for the name field.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (7)
> **Analogies:** just like (2), such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The enum type](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-enum-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/the-enum-type?u=76281980&t=0)** - [Instructor] Enums types with a restricted set of values. Enum types are similar to enums in other programming languages, such as in [Java](../../Skills/Software%20Development/Java.md) or C shell. An enum is defined as an object type, and the syntax for defining an enum is by specifying the enum name and then the enum values, and that's it. The enum values should always be unique and immutable. By this definition, it means we can use the user status enum and specify any one of the values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Analogies:** similar to (1), such as (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)


### 3. Development Environment Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Prerequisite and development environment checklist](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/prerequisite-and-development-environment-checklist?u=76281980&t=0)** - [Instructor] This course is aimed at beginners with no [GraphQL](../../Skills/Web%20Development/GraphQL.md) experience. However, a good understanding of programming in [PHP](../../Skills/Software%20Development/PHP.md) and [Laravel](../../Skills/Web%20Development/Laravel.md) is required in order to successfully follow along. Let's take a look at what you should know. First, you must have a good understanding of PHP with basic insights into object-oriented principles. You should also have PHP installed on your computer. Secondly, an introductory level to Laravel will be very helpful in following along, since we'll be learning how to build GraphQL in Laravel. We'll be using a database to store data and our examples. A good understanding of [Databases](../../Skills/Software%20Development/Databases.md) with local setup will be required to follow along successfully in this course. You're free to use whichever [Database Management](../../Topics/Database%20Management.md) system you want. However, in this course, we'll be used in [MySQL](../../Skills/Software%20Development/MySQL.md). You should also have an IDE installed on your computer, as well as a terminal for writing commands. Did you check all boxes? If you did, then you're ready to rock this. If you didn't check all the boxes, then I suggest reading up in the area you have little experience in before moving along in this course. This would enable you to follow along much more smoothly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Database Management](../../Topics/Database%20Management.md) (1)
> **CLI Commands:** php (3), mysql (1)
> **Env Vars:** php (3), ide (1)
> **Tools:** terminal (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Setting up Laravel](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=0)** - [Instructor] Now that we know the prerequisites for following along in this course let's begin our setup with a fresh installation of [Laravel](../../Skills/Web%20Development/Laravel.md). This will enable us to start from scratch and configure our development environment together to mitigate missing steps as we call along. The Laravel documentation provides a good installation guide for different operating systems. Follow the installation guide for your os as listed here. I'll be developing on a macOS and I'll create the Laravel project via Composer. Composer is a dependency manager for [PHP](../../Skills/Software%20Development/PHP.md). You have the option to choose the best installation method for your os. So if you choose to do so with Composer, you can go ahead and install it following the instructions outlined in this guide. So go ahead and install Composer. With Composer installed, let's create a Laravel project with this command in a folder called Laravel [GraphQL](../../Skills/Web%20Development/GraphQL.md). So open up your terminal and type, Composer, create project. The installation takes some time. Once the installation is completed, CD into the folder we created the project in. And let's start the server. Let's check if our installation was successful by opening the address provided in a browser.
>
> **[1:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-laravel?u=76281980&t=96)** We can see the Laravel welcome/demo page which means the first part of the Laravel setup is complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (7), [PHP](../../Skills/Software%20Development/PHP.md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=0)** - [Instructor] We just finished installing [Laravel](../../Skills/Web%20Development/Laravel.md) and checked that our installation works. We will need a database to provide data in our [GraphQL](../../Skills/Web%20Development/GraphQL.md) API. We will use existing data infrastructure which comes with Laravel. Let's start by configuring Laravel to recognize and connect to our database. First, let's check if we can connect to our database server. I'll be using [MySQL](../../Skills/Software%20Development/MySQL.md). However, you are free to use the database server of your choice. I'll also be using a VS Code plugin to connect to and manage my database. Let's create a database for our application. I'll call it laravel.
>
> **[0:48](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=48)** Our database has been created, and there are no tables yet. Now, let's go ahead and define our database configuration in our Laravel application. Open up the .env file. Look for the DB_DATABASE name which is laravel, the USERNAME root, and the PASSWORD for your database server which is password in my case. Let's save it. Laravel comes with a users table which can be used out of the box. This includes a solid, out-of-the-box authentication system as well. We're interested in the users table. So let's go ahead and migrate the table so we can seed some data. Let's open up a terminal. Make sure you are in the laravel project, and let's migrate.
>
> **[1:49](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=109)** Once we run our migration, we can see that a few tables have been created. Let's open up our database connection, refresh, and we can see that these tables have been created. We also have a users table. Next, let's go ahead and seed some data into our users table. All seed classes are stored in database, in seeders package. Let's get some users in our users table by seeding this data. We can see the database with Tinker. Let's go into the Tinker console. And next, let's seed some users' data.
>
> **[2:43](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-a-database-with-users?u=76281980&t=163)** We want to seed about 10 users. And we can see that 10 users have been created for us. Next, let's check if these users were actually created. Let's select the users. And as we can see down here, we have 10 users created in the users table. This is great. We are slowly setting up our environment to dive into building our GraphQL API to access data from our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (8), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Env Vars:** api (2), db_database (1), username (1), password (1)
> **CLI Commands:** mysql (1), make (1)
> **Tools:** vs code (1), terminal (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Setting up Lighthouse](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/setting-up-lighthouse?u=76281980&t=0)** - [Instructor] There are a number of [GraphQL](../../Skills/Web%20Development/GraphQL.md) libraries out there for [PHP](../../Skills/Software%20Development/PHP.md). However, Lighthouse leads the pack when it comes to building Graph QL APIs in [Laravel](../../Skills/Web%20Development/Laravel.md). Lighthouse is a framework for serving GraphQL. In fact, Lighthouse is made specifically for Laravel. So it is Laravel friendly. I particularly like how it is optimized for eloquent queries. We'll learn more about that later. Installing Lighthouse is quite straightforward. We can require it via Composer. So let's copy this command, open up our terminal and run it. This would pull in the Lighthouse package. Once Lighthouse is installed, we can install a GraphQL client library, maybe a development tool such as GraphQL Playground. Let's go ahead and install it. Open up your terminal. GraphQL Playground is a graphical and interactive in-browser. GraphQL IDE for querying and interacting with a GraphQL API. So you can think of it as Postman for [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API. And that's all the installation required to set up Lighthouse. We will confirm this installation in the next lesson with a simple hello world GraphQL query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (8), [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=0)** - As a tradition in software engineering when learning anything new, we need to say hello. We made it this far, which means we can gift ourselves with a good old Hello World programme to confirm our setup. Let's create a Hello World end point to return Hello World when we define our query with the field 'greetings'. Let's start by defining a simple query in a schema. In our root folder, let's create a directory called [GraphQL](../../Skills/Web%20Development/GraphQL.md) and a file called, schema.graphql. We can then go ahead and define our query. Would be of type query, filled greetings, and of type string. Next, we need to define a query class to resolve the query. Query classes are created with the name space app graphql queries. In here, we don't see a graphql directory. We can use the built in artisan command lighthouse query to create a query class. So let's open up our terminal and let's type [PHP](../../Skills/Software%20Development/PHP.md) Artisan Lighthouse Query and the name of our query class, which in this case would be Greetings. If we open up graphql queries, we have our class Greetings.
>
> **[1:35](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/a-hello-world-graphql-endpoint?u=76281980&t=95)** So let's go ahead and return a string called Hello World. Let's save this. Now we can open our playground and query the API by specifying the query field we defined to return Hello World. So here we define an object and greetings. Once we hit play, we'll see that we have Hello World returned, and there you have it. We have successfully set up [Laravel](../../Skills/Web%20Development/Laravel.md), a database Lighthouse and confirmed it works with a Hello World API. We will dive more into graphql basics and work our way through queries and mutations later on in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (6), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Laravel](../../Skills/Web%20Development/Laravel.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=0)** - Now that we have an overview of the basic types and schema of [GraphQL](../../Skills/Web%20Development/GraphQL.md), we are ready to dive into practical examples of defining GraphQL schemas. We will be creating a schema on the user's table. Our GraphQL service will enable clients to query the user's table to retrieve data. In chapter three, we set up our users' table and seeded it with some data. We also connected to our database from Laravelle. We will use this previous setup to define queries on our user object. The users' table has the following fields we're interested in. ID, name, and email. Let's start by opening up the schema file. Let's remove the previous definition. First, we need to define the user type, which is an object, followed by the fields we want to expose, in this case the ID, name and email. We would also define the types of these fields. We start with a keyword type. Then the object name, which is user, and then the fields we want to expose. So let's go ahead and type it. ID would take type ID. We also want the name of type string, as well as the email also of type string. Next, we need to define the query. We specify the endpoint name which in this case will be users.
>
> **[1:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-queries-with-lighthouse?u=76281980&t=96)** Type query. Our endpoint name would be users. We want to retain an array of type users so we define that type users. We also define the directive @all the @all directive is inbuilt in Lighthouse and automatically uses eloquent to resolve the field. And there we have it. We have successfully created a GraphQL query to return users. In the next lesson we will query this definition to get all users in the database using the GraphQL Playground.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - now (1)

#### [Querying fields in GraphQL](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-fields-in-graphql?u=76281980&t=0)** - [Instructor] We successfully created a query to [Fetch](../../Skills/Web%20Development/Fetch.md) users' data which means we can now access this query via a [GraphQL](../../Skills/Web%20Development/GraphQL.md) endpoint. Let's make sure we're defining our type correctly. Let's open our playground and refresh the page. Start by typing. (keyboard clicks) And here we can see there's a suggestion for users. We want to query users and we can define the fields we want to pull which in this case could be id, name, and email. We can also decide to only query for id and name. Let's execute. And there you go. We have the user's data in the shape we described on the right. We can also decide to pull the email, in this case. Execute and we can see the email is now part of the data returned. This information is being pulled from the users table we seeded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Querying with arguments](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=0)** - [Instructor] Comparing what we have done so far to a [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API, our user query will be a get request to [Fetch](../../Skills/Web%20Development/Fetch.md) all users' data. What if we want the clients of our service to filter the users or fetch the data for only one user? In most REST APIs will define a separate endpoint such as, users ID and accept a parameter for the user ID. In [GraphQL](../../Skills/Web%20Development/GraphQL.md), we do not need a separate endpoint. We can achieve the same via arguments. Let's say we want to enable filtering on the users by ID. First, we define the query name, which in this case would be user. The type, ID. And a directive called @eq, which means we want to put a constraint to retain only one user, as well as the return type, which would be the user object. And finally, the @find directive which is similar to eloquence find method. Let's open up the GraphQL playground. We can then query for only one user. Let's say we want to query for only the user with ID two. We define user and we need to specify the ID
>
> **[1:40](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-arguments?u=76281980&t=100)** which in this case would be two. And then the fields we want to pull. So maybe just the name and ID click to execute and we can see we get the results for only the user with ID two. And there you have it. We have pulled data from the user's table and we have also filtered based on the user ID.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2)
> **Env Vars:** rest (2), api (1)
> **CLI Commands:** find (2)
> **Analogies:** such as (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Querying with aliases](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/querying-with-aliases?u=76281980&t=0)** - [Instructor] Let's take a look at aliases. Aliases are a fun way to run multiple queries and separate data. If we execute our previous query with the argument id, we can see here that the result object field matches the name of the field in the query, but it doesn't include the id or an incremental field. Assuming we want to run this query again for a different id, we will run into an issue of not knowing which user the data belongs to and there will be a conflict of resolution. In fact, we'll get an error if we try. So let's say we want to run this again for the user with id 4, and here we see there's an error. We can use aliases to rectify this. We define an alias by typing out whichever name we want followed by the query. And we can repeat it for as many queries as we want. Let's do it right now. Let's type the alias userOne and maybe we can call this userTwo. Let's hit run and we can see that our aliases are defined in the results.

> [!info]- Semantic Content
>
> **Code Identifiers:** userone (1), usertwo (1)
> **Speakers:** - [instructor] (1)

#### [Using the Lighthouse paginate directive](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=0)** - [Instructor] It is almost always a given to implement pagination when exposing large sets of data via an API. Lighthouse makes it easier to implement pagination in [GraphQL](../../Skills/Web%20Development/GraphQL.md). We can leverage the @paginate directive to implement pagination on a large set of models in chunks. The model in this case will be our User model. Let's implement pagination on the User's query. All we need to do is replace the @all directive with paginate. And then we can go ahead and query our users and define the size. Let's open up GraphQL Playground. We can go ahead and define, "Pull in the users information." Now, we need to define our pagination. A "first" and "page" arguments are automatically added, and we can leverage that in constraining the data we [Fetch](../../Skills/Web%20Development/Fetch.md). So we want to pull the first five, and we want the page size to be one. We then go ahead and define a data object. And define the fields we want to pull, which in this case would be name, id, and email. We're also provided with the paginatorInfo object. The paginatorInfo can be specified as an object
>
> **[1:37](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/using-the-lighthouse-paginate-directive?u=76281980&t=97)** to retrieve additional information on the pagination. So let's go ahead and define that. The paginatorInfo object has fields such as currentPage, and this would allow us to retrieve the index of the current page. As well as lastPage, this enables us to retrieve the index of the first item in the current page. We also have many more such as hasMorePages, which is a Boolean to find out if there are more pages after the current pagination. There's also lastItem to enable us retrieve the index of the last item. As well as total, to get the total number of items. There are many more fields that we can explore. Let's click to execute. As we can see, we have only five items returned. And we also have our paginator information. We can adjust this to only two items. We hit execute, and we can see only two items returned. And the total number of items in our database is 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/diving-into-graphql-mutations-with-lighthouse?u=76281980&t=0)** - [Narrator] Up until now, we have been looking at how to create queries, types, and fields. We have also looked at how to query them, all this with preexisting data in a table. In reality, an API will provide clients the opportunity to create, read, update, and delete entities. We have mainly been building the read aspect of CRUD. In a [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API, there will typically be an endpoint to create, update, and delete an entity, commonly defined by the post, put, and delete methods. In [GraphQL](../../Skills/Web%20Development/GraphQL.md), however, we use mutations to achieve the same. Mutations enable us to alter data on a server. Let's take a look at a simple generic mutation. In defining a mutation, we use the keyword mutation rather than query. This mutation takes the input's name and email to create a user. Finally, the mutation returns data. It returns the ID of the newly-created user. In the next lessons, we will take a look at creating, updating, and deleting a user, leveraging Lighthouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Env Vars:** api (2), crud (1), rest (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [Creating a user](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=0)** - [Instructor] Let's start by defining a Mutation to create a user. This Mutation should enable us to specify a name and email to create a user. We won't be specifying the password and other information. We start by defining the object Mutation. So we have type Mutation, the name of the Mutation, which would be createUser. And then the arguments, name and email. Name would be of type String. Then the email, also of type String. We could actually go ahead and pass in a password field, but in this case we will not be validating or encoding the password. We also need to define the user object. And finally, the @create directive. Let's save and open our playground. We can from here create our Mutation. Let's start by defining the Mutation, and we define our Mutation name as createUser, and then we can go ahead and define the fields. So name could be Doe.
>
> **[1:36](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=96)** And email, doe@[mail.com](https://mail.com).
>
> **[1:45](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/creating-a-user?u=76281980&t=105)** And password, we could say password for now. Of course, we would want to type a much stronger password if it was a real application. And next, we want to return the ID, and maybe also the name. Click execute, and we see that the user was created, and the ID and name returned. Let's check if the user actually exists in our database. If we open and check our users table, we can refresh this query. And here we can see that we have a new entry in the users table with name Doe, and the email we defined as well as the password. But of course, this is not encrypted, which is something we wouldn't do if we were pushing this to production. So we have just tackled the first part of CRUD, creating entities. In the next lesson, we will look at how we can update the user we just created.

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
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=0)** - [Instructor] Let's take a look at how we can update the user. We might want to update the email, name, or password, or any other field that we defined. The Mutation definition for updating the user is quite similar to creating a user. All we need to do is define the Mutation similar to create and use @update directive. Let's see how that would look. We first define the name of the Mutation, which in this case we will call updateUser, and then the fields. So we want to require an ID, and we want to expose the field's name and email to be updateable. We can also throw in the password here. And we would return the type User. And instead of @create, we would use the directive @update. Let's save this. Now if we head over to our [GraphQL](../../Skills/Web%20Development/GraphQL.md) playground, we can delete this create user definition and we can define an update mutation. So we can call the updateUser, and we specify the name,
>
> **[1:35](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/updating-a-user?u=76281980&t=95)** which in this case we might want to change to Joe. And we also need to define the ID. If we remember from the user we created earlier, the ID was 11, and we would like to return the ID and the name. Click to execute, and we see that the user 11 has been updated, and the ID and name returned. Let's check if the user was actually updated in the table. Let's refresh our users table, and we can see the name was changed from Doe to Joe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Code Identifiers:** updateuser (2)
> **Analogies:** similar to (2)
> **Speakers:** - [instructor] (1)

#### [Deleting a user](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/deleting-a-user?u=76281980&t=0)** - [Instructor] Let's take a look at how we can delete the user we created and update it. Deletion is quite straightforward. We first define the delete mutation, which we will call delete user. So let's open up our schema.[GraphQL](../../Skills/Web%20Development/GraphQL.md) file. We specified to delete the user by ID. So let's define the mutation name, delete user. We take in the argument ID, which should be required. The object is of type user, and we define the @delete directive. And that's it. Let's save. And then we open up our graphql playground. Let's give it a refresh. And we can go ahead and define our mutation to delete the user. Delete user. Next enter ID. And we want to delete the user we created and updated, which in this case has the ID 11. And we would like to return the ID. Execute. And we can see our user was deleted. Let's confirm that in the table. So we have our user still in the table. Let's refresh. And we can see our user was successfully deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring more Lighthouse and GraphQL functionalities](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-graphql-applications-in-laravel/exploring-more-lighthouse-and-graphql-functionalities?u=76281980&t=0)** - [Instructor] Congratulations on completing this course. To recap, we had an introduction to [GraphQL](../../Skills/Web%20Development/GraphQL.md) and we looked at the benefits of GraphQL over [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). We also built a GraphQL service to [Fetch](../../Skills/Web%20Development/Fetch.md), create, and alter data using the user model. We have covered almost everything you need to build a simple GraphQL application in [Laravel](../../Skills/Web%20Development/Laravel.md) using Lighthouse, leveraging existing eloquent models. However, there is still a lot more you can do with GraphQL, such as exploring more on directives and leveraging eloquent relationships with Lighthouse as well as subscriptions, securing your GraphQL service, the Apollo Federation among others. The Lighthouse site and documentation will be a great reference to continue learning and exploring how much more you can further improve your Laravel GraphQL knowledge. Thank you for following along, and until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (7), [Laravel](../../Skills/Web%20Development/Laravel.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** rest (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Rasheeda Yehuza](../../Instructors/Web%20Development/Rasheeda%20Yehuza.md)

## Skills Covered

- GraphQL
- Laravel

## Path Context

### In [Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)
← [Building RESTful APIs in Laravel](Building%20RESTful%20APIs%20in%20Laravel.md) | **4 of 7** | [Essential Jigsaw for PHP and Laravel Developers](Essential%20Jigsaw%20for%20PHP%20and%20Laravel%20Developers.md) →

## Appears In

- [Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Winter CMS with Laravel](Winter%20CMS%20with%20Laravel.md) — Laravel
- [Essential Statamic for PHP and Laravel Developers](Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md) — Laravel
- [Essential Jigsaw for PHP and Laravel Developers](Essential%20Jigsaw%20for%20PHP%20and%20Laravel%20Developers.md) — Laravel
- [Building RESTful APIs in Laravel](Building%20RESTful%20APIs%20in%20Laravel.md) — Laravel
- [Advanced Laravel](Advanced%20Laravel.md) — Laravel

---

[↑ Back to top](#)