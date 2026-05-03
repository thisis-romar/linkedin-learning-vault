---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: spring-with-graphql
url: "https://www.linkedin.com/learning/spring-with-graphql"
duration_minutes: 64
duration: 1h 4m
level: Intermediate
updated: 2/18/2025
learners: 9810
skills:
  - Spring Framework
  - GraphQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEn-bZc-Hdr2w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1657817616889?e=2147483647&amp;v=beta&amp;t=I-yHZOrfX8EuGKsxAYBurTyQAEpl0j55g6C_VfvN1aI"
linkedin_topic: Software Development
learning_paths:
  - '[[Building Your Skills in Spring Development]]'
prev_courses:
  - '[[Spring 6 Design Patterns]]'
next_courses:
  - '[[Spring Framework in Depth]]'
path_nav: '[{"path":"Building Your Skills in Spring Development","position":2,"total":4,"prev":"Spring 6 Design Patterns","next":"Spring Framework in Depth"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/spring-framework
  - skill/graphql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Spring%20with%20GraphQL.md)

![Spring with GraphQL](https://media.licdn.com/dms/image/v2/C560DAQEn-bZc-Hdr2w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1657817616889?e=2147483647&amp;v=beta&amp;t=I-yHZOrfX8EuGKsxAYBurTyQAEpl0j55g6C_VfvN1aI)

# Spring with GraphQL

> If you’re a back-end engineer or full-stack developer, it’s time to get up to speed with GraphQL, the extremely popular and powerful query language that tells you everything you need to know about your APIs. The problem is, for Java-based, back-end operations, there’s often a gap between traditional frameworks and the data access technologies of most engineers.In this course, instructor Frank Mole

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql) | 1h 4m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Build a GraphQL API with Spring Boot](#build-a-graphql-api-with-spring-boot)
  - [What you should know](#what-you-should-know)
- [**1. Getting to Know GraphQL**](#1-getting-to-know-graphql) (5 videos)
  - [The power of GraphQL](#the-power-of-graphql)
  - [GraphQL in Java](#graphql-in-java)
  - [GraphQL terminology](#graphql-terminology)
  - [GraphQL schemas](#graphql-schemas)
  - [Using the playground](#using-the-playground)
- [**2. Building GraphQL APIs**](#2-building-graphql-apis) (8 videos)
  - [Setting up the project](#setting-up-the-project)
  - [Creating the schema](#creating-the-schema)
  - [Creating a Spring Data repository](#creating-a-spring-data-repository)
  - [Creating the GraphQL controller](#creating-the-graphql-controller)
  - [Mutations](#mutations)
  - [Errors](#errors)
  - [Challenge: Extending the API](#challenge-extending-the-api)
  - [Solution: Extending the API](#solution-extending-the-api)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build a GraphQL API with Spring Boot](https://www.linkedin.com/learning/spring-with-graphql/build-a-graphql-api-with-spring-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/build-a-graphql-api-with-spring-boot?u=76281980&t=0)** - [Frank] [[GraphQL]] is a powerful way to query and manipulate data through APIs. [[Spring Boot]] offers an easy path for building a GraphQL endpoint using [[Java]], which for many of us is a natural language choice. Hi, my name is Frank Moley. I'm a developer, architect teacher, and perpetual student with over 25 years of development experience, mostly in the JVM as a backend and systems developer. Please join me in this course, Spring with GraphQL, to learn how to leverage the simplicity and speed of Spring Boot to develop a GraphQL endpoint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (4), [[Spring Boot]] (2), [[Java]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** jvm (1)
> **Speakers:** - [frank] (1)

#### [What you should know](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to be successful in this course and to get the most out of it, you should know a few things prior to taking this course. And, of course, you will need some proper software on your machine. So with that, let's level set. This course is a [[Java]] based course. So let's start there. I will be using JDK 17 as an LTS version that is supported by Spring at the current time. It makes the most sense to leverage it. Ensure you have it installed in on your path. And remember, you need a JDK, not just a JRE. Now, you won't need to know any of the new features of the language. To be honest, you should be able to just have a very base knowledge of Java, and you should be able to be successful. Now, I'm going to be using Maven as a [[Dependency Management]] and build tool, but [[Gradle]] is perfectly fine as well, if you feel more comfortable with that. We won't really be doing much outside of our IDE. So as long as yours supports the tool, either one is perfectly fine. And speaking of IDEs, you should have one, preferably, one that is focused on Java. Now, I'm going to be using IntelliJ Premium because I use it every day. But by no means should you go out and buy it just for this course. Most modern IDEs that work with Java support plugins for Spring and [[GraphQL]]. The most important thing is that you know how to use your IDE and you're comfortable with it.
>
> **[1:35](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=95)** Not necessarily the one that I am using. Now, this is a Spring course. So you will need some base knowledge of Spring. I have many courses in the [[LinkedIn]] Learning library on the Spring. So if you don't know the framework, please take a pause, and go learn it by taking my Learning Spring with [[Spring Boot]] course, my Spring Boot Essential Training course, or my Spring: Framework in Depth course. We will be using the core framework. So as long as you understand inversion of control and Java config for the application context, you should be good. We'll also be using some annotation. So component scanning will come into play, but you get that free with Spring Boot. We will be using a touch of Spring Web. So if you get the basics of it, that should be sufficient, but you should understand what controllers are. We will be using [[Spring Data]], specifically JPA with embedded [[Databases]]. Now, many of my courses here on the library talk about using Spring Data with JPA, including Learning Spring with Spring Boot. So you should be familiar with it. And we have tools here if you're not. Now, if you know JPA or hibernate, you'll probably be fine. There's just a couple things that I'm going to show you that will come into play. But again, I address these as well in those other courses, if you want a little bit more depth in Spring Data. Maybe most I impactfully we will be using Spring Boot.
>
> **[3:10](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=190)** You really need to understand not only the basics, but the core operations of Spring Boot, because we're going to leverage them to build out this course and to build out our GraphQL implementation. So make sure you understand not only how Spring works, but how Spring Boot itself works. Now, when it comes to GraphQL itself, the prerequisites are going to be minimal. You should know at a high level what it is and why people use it. Now, we're going to go into those details. But most of the discussion outside of the code in this course are going to center around GraphQL itself. So some very basic knowledge will be sufficient. Now, you will need to have a GraphQL playground. There are many ways to get one. You can install it as an application. You can use it in your browser, which is what I'm going to do. You can install it through an app. You can use your IDE plugins. It really doesn't matter how you get a GraphQL playground, just get one. If you use [[Google]] Chrome, there's some great extensions out there that allow you to run the playground. And again, that's what I'm going to use in this course in order to connect to my GraphQL API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7), [[Spring Boot]] (7), [[Java]] (5), [[Spring Data]] (3), [[Dependency Management]] (1)
> **Env Vars:** ide (3), jpa (3), jdk (2), lts (1), jre (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)


### 1. Getting to Know GraphQL

[↑ Back to Table of Contents](#table-of-contents)

#### [The power of GraphQL](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=0)** - [Instructor] [[GraphQL]] is considered by many to be the most logical way to build an API that is consumed by both [[JavaScript]] applications as well as mobile applications. We should start with the very basics here, and talk about what GraphQL is. First and foremost, GraphQL is an API or an application programming interface. It is designed to serve data when requested to other systems or other parts of the system itself and full stack engineers know all about that. It is also a query language for that API. This allows you to structure queries against the API to get data that matches what you ask for. Most importantly, is that it is a runtime for answering the queries. GraphQL not only is the API and the language to query it, but it also provides a running mechanism to [[Fetch]] and serve data. Now, one of the coolest aspects of GraphQL is that due to its graph nature and how the query works, you can ask the API for exactly what you want and structure it how you want it and then you will be rewarded with the data, exactly how you need it, whether you traverse the graph or request a single type. So now that we know the basics of the, what it is, let's talk about why you would use GraphQL.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=96)** One of the biggest advantages for front end developers especially is the concept of a single request. With that single request, you can get the resource, all resources, or a selection of resources. To do this with [[Representational State Transfer (REST)|REST]], you would need at least two APIs, most likely many more. In addition to control of which resource you get and how many instances you get, you can filter the payload of the response to only return the fields that you need. With REST, you always get the whole object. So, we can get one or more resources and one or more fields on those resources, but then we get to sub-resources. With REST, we often get an ID on the parent and then call a different API to get the sub-resources, based on those values in the parent object. With GraphQL, we don't need to do that. We can leverage the graph nature and pull back all sub-resources of a parent resource, or a single sub-resource, or just fields within that resource. Now you add that into filtering and we start to get a real picture of what we want, what we can return, and how we do it. Another advantage, especially in the front end world, is that we don't need multiple endpoints configured. In a REST world, we often need base URLs for each service. With GraphQL, we only need the URL of the GraphQL server.
>
> **[3:15](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=195)** Type safety is very important to many developers and GraphQL provides type safety, unlike REST. Now, like it or not, APIs change and non-passive changes causes us to deal with API versioning in REST. With GraphQL, however, versions are a thing of the past. We leveraged schemas and registries to handle different versions, but we still have one instance of our GraphQL server. Now we're going to talk about the how to in this course, specifically for [[Java]] developers using Spring, but there are a lot of other implementations, things like Go, JavaScript, and others that you can use to implement GraphQL servers. Again, in this course, we're going to focus on Java and use Spring as our native runtime.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (13), [[Representational State Transfer (REST)|Rest]] (6), [[JavaScript]] (2), [[Java]] (2), [[Fetch]] (1)
> **Env Vars:** api (8), rest (6), url (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [GraphQL in Java](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=0)** - [Instructor] While many people immediately think of [[Node.js]] for [[GraphQL]] implementations, as previously stated, there are many languages that support GraphQL itself. We're going to talk about [[Java]]'s, and then jump into Spring's wrap around that. GraphQL Java is a pure Java implementation of GraphQL that is independently maintained. First and foremost, it is an open source software project, meaning it brings with it everything that is great about OSS. It is covered by the very flexible MIT license. And they use [[GitHub]] discussions for all active issues, as well as questions, and they also leverage Twitter and do respond on Stack Overflow. So again, you're getting the full breadth of an open source software project. Now, using GraphQL Java does have a little bit of confusion. It is the core library. As such, it can be used as a standalone project and is definitely intended to be used that way if you want to. If you choose to go that route, you will have to provide HTTP services to wrap it. This is where the confusion kind of comes in. It's a core library, not the exposing of it but you most definitely can use it with any framework or core libraries exposing HTTP. The team that maintains this worked with Spring itself to create an official supported version of [[Spring Boot]] integration.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=96)** There are other abstractions available, including from companies like Netflix, but we're going to focus on the one that is maintained by Spring source in collaboration with the GraphQL Java team. Now, when I look at the way that they've implemented GraphQL Java in Spring, the first thing that comes in my mind is this is very MVC like. GraphQL leverages these MVC-like patterns of controllers to handle the exposing of queries and mutations. In addition, you can leverage [[Spring Data]] GraphQL repositories as opposed to just standard repositories if you want to simply expose CRUD operations through an MVC portal. We're not going to do that in this course but I did want to let you know that it is possible to simply write a Spring Data repository and expose it as a GraphQL interface. Now, the Spring Boot starter is going to wire the common defaults so you don't have to. And throughout this course, we're actually not going to manipulate those defaults, except for the printing of the schema. We're going to leave everything else alone because we don't need to, and in most cases, you won't need to either. We're going to rely on a static schema definition, and this is really good practice, whether you're writing [[Representational State Transfer (REST)|REST]] or GraphQL or SOAP, I'm a big fan of contract-first development, and with GraphQL, the schema is the contract.
>
> **[3:10](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=190)** So we can leverage that and build a static schema and load it automatically through the starter so that we get that contract-first development practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (12), [[Java]] (6), [[Spring Boot]] (2), [[Spring Data]] (2), [[Node.js]] (1)
> **Env Vars:** mvc (3), http (2), oss (1), mit (1), crud (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Documentation:** stack overflow (1)
> **Tools:** github (1)
> **Best Practices:** good practice (1)

#### [GraphQL terminology](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=0)** - [Instructor] Since I assume that you are stronger in [[Java]] and Spring than [[GraphQL]], I want to focus a bit on the terms used for GraphQL that may be exposed in this course. The most used aspect of GraphQL, at least in my opinion, comes from queries and mutations flows. Objects are the highest level resource you can retrieve in GraphQL. Objects are defined in schemas, which we will discuss in a bit. Fields are elements from the objects that you can specify in a query to request the data. Fields are elements of the object itself. And with GraphQL, you can specify what you want returned by putting the fields in your query. Queries, as you might expect, are essentially what you are asking GraphQL to return to you. You will see lots of examples of queries as we go forward in this course. Queries have variables in them that allow you to specify specific objects you want returned. And they can be as simple as an ID or as complex as the value in a type. Mutations are how you change the data. When working with systems, we have to manipulate the data and not just query it. And mutations are how you manipulate the data that is stored in the backing data source. Fragments allow you to build reusable components for your queries in the same way we would in Java OOP. Let's just say you need a complex query that shares field structure in various parts.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=96)** Fragments allow you to build a component and then use that component in the actual query. Directives allow you to build custom query operations. Think about a scenario where you show a simplified view of data in a component but allow that component to expand with more data. You can achieve this behavior in GraphQL with a single query by adding a fragment that uses a logic statement to load the detailed view. GraphQL is based on a schema. That schema defines all of the objects, queries, and mutations. The type system is how we go about defining all of these objects and we do so in a structured way. It sort of looks similar to [[JSON]] but it's not JSON. And there's an entire type structure that must be defined because GraphQL is type-safe. Now, there are object types with their fields. Object types are what you would imagine them to be. They're the definitions of the objects that get returned by your queries as well as input types that are used for mutations. The scalars in those objects, as well as other objects, are fields. And fields are what we use to actually specify where the data exists in those objects. Arguments, as you might imagine, are what we would pass to a query or a mutation that provides the logic and the data input that we use to build the GraphQL query
>
> **[3:12](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=192)** or the mutation itself. Just like with the method signature, arguments are how you pass data to the method in the same way that you would pass data to an object query or a mutation. Now, the query and mutation types are special types within the schema that specify the queries that we define, as well as the mutations. And each of them exist in their own structure within the type system. Now, I mentioned earlier a little bit about fields. And fields can contain scalars. They can contain lists, including lists of types. And they can contain enumerations, which are defined within the type system. Now, scalars have a default value that every implementation must maintain. But with GraphQL Java, we get extra scalars that don't exist in the standard GraphQL spec. And we'll talk a little bit about those as we do our implementations. And like most languages, there's the concept of interfaces. If you have two objects that share a set of core fields, you can specify an interface and implement that in both of those objects, which allows you to reduce the complexity of your schema but building in reuse where possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (12), [[Java]] (3), [[JSON]] (2)
> **Analogies:** imagine (2), similar to (1), just like (1)
> **Env Vars:** json (2), oop (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### [GraphQL schemas](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=0)** - [Instructor] Now we're going to actually go through the process of building a [[GraphQL]] schema as part of this course. But one of the benefits of GraphQL being so popular is that there are several free and available schemas. And we're going to take a look at one of those before we get into the process of building our own. Now, the one that we're going to look at specifically in this course is the Countries API, and this was written by a guy named Trevor Blades, and it's a very popular API for doing basic work with GraphQL. So let's take a look at that. If you navigate into your browser to that link, you'll come up with the current version of the Countries API. Now this is set up with this URL such that every time they make an update, current will always point to the latest version. And you'll see that he has a basic read me set up for this. Now we can jump into the schema itself and take a look at it. So he has several objects defined. He's got Continent, Country, Language, Query, and State. And if we take a look at Country, which is the one that we're most likely going to be messing with if we're going into the Countries API, you'll see that he has a code, a continent, a currency, and emoji, and this is essentially the flag for that country, as well as language. And the way that he has structured this is that each resource has various queries underneath it. And we're going to take a look at that here in a little bit. But let's jump into the SDL so we can actually see how this API is built. So he has several queries defined. So Continents, a specific continent, Countries, a specific country,
>
> **[1:35](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=95)** Languages and a specific language. So those are the queries that you can act on on this API. And then he has defined all of his types. And we're going to go through this process throughout this course, but you'll see that he has a continent, which is a code name in countries. He has the type Country. Again, as we just looked at before, he has Language in here and State as it comes into appropriate value for his API. And he's got some cash control. Now we're not going to get into this level of detail with what we are going to build, but it's good to know that this exists because you can leverage that. Now, the way that this site is structured, there is an Explorer which takes you to a GraphQL type playground. Now, through this course, we're going to use a GraphQL playground. We can get one for default with [[Spring Boot]], but I don't like the way that it looks as opposed to playground. So I'm going to use playground throughout this but in the next video, we're going to take you through the playground and let you see how to actually implement it and work with it and play with your queries and mutations. So you can get a feel if your GraphQL schema is actually doing what you want it to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (6), [[Spring Boot]] (1)
> **Env Vars:** api (7), url (1), sdl (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Using the playground](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=0)** - [Trevor] One of the most powerful tools for [[GraphQL]], especially while you're developing, or inspecting an API is the GraphQL Playground. Now, as I mentioned in the prerequisite video there are several ways to get to a playground. And the API that we're going to go look at has its own on Apollo GraphQL. However, we're going to leverage a browser extension in Chrome as we're doing it in this video. So we're going to go look at the countries API and that countries API is available at [https://countries.trevorblades.com](https://countries.trevorblades.com). And this is a really cool API, because of the way it structures the data and what it gives you when you query states and countries. Let's take a look at that. So this is GraphQL Playground. This is a plug-in extension that I run in Chrome. Again, there's many ways to get to this, but you'll see that I've populated the URL here with countries.[trevorblades.com/graphql](https://trevorblades.com/graphql). The first thing that I want you to do is to open up the schema on the right hand side. This allows you to look at all of the schema queries that you can execute against and what you will get back from them. This is really powerful when you're building queries and inspecting an API, or testing your own to make sure that it gives you back what you want. So let's go ahead and close that. And we're going to start with our first query. We're going to type query. And the query that we are going to go to is countries. And you'll notice that because it's loaded the schema
>
> **[1:33](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=93)** it knows what you can get with some sort of an intelliSense. So let's load countries. And with our countries, we want to get the name. We want to get the emoji, and we want to get the code. So these are objects within our country element. And we can see that by going over here to the country and you'll see all of these values. So we have a code, a name, native, phone, continent, capital, currency, et cetera. We're going to use this to query our countries and this is going to return all of them that are in the system. So let's go ahead and hit play here. And you'll see that we get back the country with its name, its emoji and its code. Now let me show you how powerful this is. We're going to switch emoji and put it below code and now hit our play again. And you'll see that it returns it in the order that we requested, which is what we would want. Now because of the structure of this, it's not as important the order, nonetheless, it's really powerful to be able to manipulate that. So let's say we actually just wanted to get one country. Let's change our query to be country, and you'll see that the country itself takes an argument and the argument can either be the ID, or the code. We're going to do code. And we will do US as the code And we will get the name. We'll go ahead and get the code again. We will get the emoji and we will get the phone.
>
> **[3:08](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=188)** So let's go ahead and hit play on this. And you'll see that we get back exactly what we asked for. We got a country whose name was United States. The code was US. You see the American flag and the phone is one, which is the country code prefix for that country. Now let's put in something that doesn't exist. So UB, hit play, you'll see back we get a null country in this case. So the API has structured itself such that this is okay. With [[Representational State Transfer (REST)|rest]] we would get a 404. It said, this is okay, you just passed in data that didn't exist. Now we're going to spend a lot of time in GraphQL Playground. So I encourage you before you go to the next video, just play around with this. Look at the API, maybe go query states for instance or other values within this and see what you can come up with. You might find that you can do some really cool stuff with this that you never thought you could, like joining countries to states. Things like that. That's the power of this API is you really can get what you want, when you want it and how you want it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (6), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (9), url (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [https://countries.trevorblades.com](https://countries.trevorblades.com) (1), [trevorblades.com](https://trevorblades.com) (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** intellisense (1)
> **Cross-References:** next video (1)


### 2. Building GraphQL APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up the project](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=0)** - [Frank] So now, it's time to get into the real content of this course. And that's building an application with Spring that exposes a [[GraphQL]] API. And to do that, we need to start by building a [[Spring Boot]] app. Now there's multiple ways to do this. And quite often, I usually just use my IDE plugins to do this. But I'm going to walk through start.[spring.io](https://spring.io) for you so you can see how to do this in case you don't have a Spring plugin. So, as I mentioned, I want you to go to start.[spring.io](https://spring.io). And this is the Spring Initializr. This is where you can use to build any project you want to. So let's go through some of our options. So we're going to choose a Maven project. Again, if you're using [[Gradle]], that's perfectly fine. We are going to use [[Java]]. Now, I'm going to select a snapshot version, because as of right now, this has not been formally released. But 2.7.0 is when GraphQL will be released to the general public as part of Spring Boots. So we'll go ahead and select 2.7.0. I'm going to fill in a group. And for me, it's com.frankmoley.lil, for [[LinkedIn]] Learning. We are going to call this hplus. The data set I have is from an hplus online store. So that's what we're going to name this. And for a description, we would simply say graphql in spring boot. Now, we're going to create a JAR. We're going to pick Java 17. And now we need to go pick our dependency. So we're going to select ADD DEPENDENCY. The first one that we want to choose is Web.
>
> **[1:35](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=95)** Now, we're going to go choose GraphQL itself. And now, we will pick JPA, so [[Spring Data]] JPA. We will need an embedded database. So we're going to use h2. And don't worry, I provided you the scheme and the data for that. And the final thing that we're going to add is Actuator. We're not going to actually use Actuator. I use that to debug my application and to look at things that are running. Feel free to leave that out if you want to. I tend to never leave it out. But that's just when I'm doing coding. So the next thing we're going to do is we're going to generate. Now, what this is going to do is it's going to create a ZIP file, and it will download that ZIP file. So now, I want to jump into a terminal. And I am going to put this code in a specific location on my machine. Now, my location is going to be very different than yours, but that's okay. Just put it somewhere where you know that you're working from it. Preferably somewhere where you actually have your Exercise Files close by. So it's easy to move files as you need to. So here, we're going to do an unzip on Downloads hplus. And again, this is for me, you guys are going to have a little bit different structure, but this is where my downloads go. And I'm going to tell it I want to put it in a directory. And the directory I use is code, and we're going to put it in a folder called spring-graphql. And with that, I will unzip the file. So now what I'm going to do is I'm going to go ahead and open this up. Now, I have a command line tool
>
> **[3:06](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=186)** that I can use to open it up in my IDE. So I'm going to go ahead and navigate to code spring-graphql. And from here, I'm going to do an idea ., that will open up this directory here, and it will import it in. So this will open up IntelliJ. Okay, so from here, we can open up the hplus folder that we just created. And you'll see that there's several files in here. Now, a lot of these I tend to get rid of because I have Maven on my machine. So I'm going to go ahead and get rid of them now. And now, we're left with just a pam and a source file. And within there, you will see that we have Java application. And this is the Spring Boot application. This is the starting point for a Spring Boot application. We will actually go through and define all of the things that we need to make this work. But this is the entry point. We also get a application properties file, which we will leverage. We get a test file as well, which will make sure that the application context loads. And that's about it. That's all we really need. And we're ready to start kicking the tires on this application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (6), [[Spring Boot]] (4), [[Java]] (3), [[Gradle]] (1), [[LinkedIn]] (1)
> **Env Vars:** ide (2), jpa (2), zip (2), api (1), jar (1)
> **CLI Commands:** unzip (2), make (2)
> **Versions:** 2.7.0 (2), java 17 (1)
> **Tools:** terminal (1), command line (1), intellij (1)
> **Exercise Files:** zip file (2), exercise files (1)
> **URLs:** [spring.io](https://spring.io) (2)
> **UI Navigation:** go to (1), navigate to (1)

#### [Creating the schema](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=0)** - [Instructor] As with any good web service API, the best thing to do is to start with your schema. I've gone on records on that many times, that schema-first development is the way to go, and with [[GraphQL]], it's the best way with [[Spring Boot]] to do this. So let's go ahead and jump in and start creating our first schema. All right, so let's open up H+, go to source/main/resources, and I want you to start by creating a new directory, and that directory name is GraphQL. Now, this is by convention. Spring Boot is going to load your schema under source/main/resources/GraphQL. You can change that behavior through the application properties if you don't want to use this folder structure, but it doesn't really matter as long as it loads in, and there's no reason to not just use what comes out of the box. It just makes it easier for everybody who may be using your work down line. So within here, we're going to create a new file, and the file that we are going to create, we're going to call schema.graphqls, and that's very important. The beginning doesn't matter, but everything after the dot does, because when the resource loader runs, it's going to look for files called graphqls and load those. Okay, so now within here, we're going to start by creating our type, and the first type that we're going to create is customer. Now, customer has an ID, and it's capital I capital D exclamation point.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=96)** Now, because I know what our data looks like, everything is going to be required. So we're going to put in here a first name, and that's going to need an exclamation point as well, on the string. Last name, string exclamation point. And we will continue through the entire customer object. Now, if you pulled from the exercise files, you'll notice I gave you a data folder. In that data folder is a schema.[[SQL]], and we're going to mimic what we see on the customers table in order to do this. So you'll see, we got first name, last name, email, phone, address, et cetera, et cetera. That's what we are going to use. So back up here, we'll do email, and that's going to be a string, always there, phone number, also a string, always there, address, a string, city will be a string, state will be a string, and zip code will also be a string. Now, all of these types in this object are strings, but as we go throughout this course, we will have ones that are not strings. So now let's jump down here, and let's create a type of query. So we're going to support three different queries to begin with. The first is simply customers, and this is going to return an array of customer type, and there must be something in there. We also are going to do customerByID,
>
> **[3:11](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=191)** and customerByID takes an ID value, and that returns a customer. And the final one we will do is customerByEmail. That takes an email, which is a string, and that returns a type customer. Now, we'll expand on this as we go, but there's one other thing that I like to add. I want to go to application.properties, and we are going to add spring.graphql.schema.printerenabled, and we are going to set it equal to true. And that's all there is to it. We've now built our first schema and set up Spring Boot to load this schema. Now, we need to put a few more pieces in place before we're going to see it actually load, but this is step one, get the schema defined and know what elements we are going to need to add.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (4), [[Spring Boot]] (3), [[SQL]] (1)
> **Code Identifiers:** customerbyid (2), customerbyemail (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **File Paths:** schema.sql (1)
> **Env Vars:** api (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### [Creating a Spring Data repository](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=0)** - [Instructor] Now you can back a [[GraphQL]] service with any data source. You could call [[Representational State Transfer (REST)|REST]] services. And it's something that I encourage you to do, which is use Spring RestTemplate as a data source so that you can expose a GraphQL layer for your [[Microservices]] architecture. But in this case, we're going to go directly to the database. So we're going to use [[Spring Data]] to be our data provider using a built-in in-memory database. Obviously, in the real world, you would back this with a real database. But for now, for demo purposes, the embedded database works great. So let's jump into our IDE. So the first thing that I want you to do is I want you to open up source, main, resources. And I want you to copy from the data directory that I provided in the exercise files the data dot [[SQL]] and the schema dot sql. And I want you to paste those right into resources. Now, what this allows it to do is that the schema dot sql will define an in-memory database, and data dot sql will load data into that database, assuming that you've set your properties correctly. So let's go ahead and do that. Jump into application properties, and we're going to do spring dot jpa dot hibernate dot ddl auto. And we are going to set this equal to none. What this is saying is use the schema dot sql and data dot sql and don't override with DDL from Hibernate itself, because the default implementation of JPA is Hibernate that is used by Spring Data.
>
> **[1:35](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=95)** So we're going to tell Hibernate only handle accessing data, don't handle the DDL. So DML only, no DDL. All right, with that said, let's write a little bit of code. So we're going to jump up here to our base package. and we'll create a new package called data. And within data, we are going to create a new [[Java]] class, and this will be called Customer. All right. Now, our Customer will be an entity, and this is from javax dot persistence. And we also need to specify the name of our table, because the name of our table is specific based on how I build schema, not necessarily how JPA expects it. So we're going to set our table name equal to CUSTORMERS, also from javax dot persistence. Now it's going to complain here a little bit, because we need some data in here, specifically an ID. But what I want you to do is I want you to go back to the schema dot sql. And this is sort of a pattern that I use quite often. I want you to copy the CREATE TABLE statement, come back over to your class and add a comment block and just paste that in. That way, we have the data right in front of us. So we will do an at ID from javax dot persistence, at Column, name equals CUSTOMER ID,
>
> **[3:06](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=186)** and generatedValue. In this case, we are going to use a generation strategy of IDENTITY.
>
> **[3:23](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=203)** Now, this is something that you have to be very cognizant of. We're actually going to return this entity through GraphQL. So the name of our fields must match our schema. If we go load our schema file, you'll see that we call the first element ID. But in this case, the column name is CUSTOMER ID. So let's go ahead and handle that by doing a private long id. Now we'll go ahead and do the rest of them. So Column, name equals FIRST NAME,
>
> **[4:01](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=241)** private String, firstName. And we'll go through and do the rest of these real quick. So now that you've done all of that typing, I want you to take a look and make sure that you match what I have here in these columns. And you'll see from the schema that I've named my elements within the class the exact same as they are in my schema, and that I've used the values from the scheme itself. So I'm going to go ahead and delete this comment block since I don't need it anymore. But I do need to generate getters and setters. Now, every IDE has a way to do this. I am simply going to go into the generation functions, select them all, and it will give me getters and setters for everything. That's all I need to do for the Customer itself. But I need to tie it to Spring Data. So let's create a new Interface. And this we're going to call CustomerRepository. Now, CustomerRepository is going to extend JpaRepository. And that is a template that we're going to pass in Customer and big L Long. Now we need to put in a method in here in order to do our email. So we are going to do Customer findCustomerByEmail. And we will pass it a string of email. And that will give us our method. So now we have Spring Data set up, and we'll be able to use it
>
> **[5:34](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=334)** as soon as we wire the schema to JPA through the controller, and that's coming up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Spring Data]] (4), [[GraphQL]] (3), [[Representational State Transfer (REST)|Rest]] (3), [[Microservices]] (1)
> **Env Vars:** ddl (3), jpa (3), ide (2), customer (2), rest (1)
> **Code Identifiers:** generatedvalue (1), firstname (1), findcustomerbyemail (1)
> **Cross-References:** go back to (1), coming up (1)
> **Exercise Files:** exercise files (1), template (1)
> **CLI Commands:** make (1)
> **SQL:** create table (1)
> **Definitions:** is a  (1)

#### [Creating the GraphQL controller](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=0)** - [Instructor] So now it's time to give [[GraphQL]] some actual exposure. We're going to build the controller so we can now wire it to the data and expose it to the GraphQL playground. So back in your IDE, go to source, main, [[Java]], in the base package I want you to create a new package and we'll call this controller. Now in here we will create a new Java class called CustomerController. So the first thing that we're going to do is we're going to annotate this with @Controller. This will allow [[Spring Boot]] to load this automatically, so the definitions we're providing is all we're going to actually have to do to get GraphQL up and running. We need to have an instance in here of our customer repository and because we are going to do injection properly as a constructor parameter, we will add it to a constructor. There is no need to auto wire this, this is the only constructor now on this class, it will automatically get called based on the system rules itself. So if you've ever done Spring MVC, you will know that we often put request mapping, such as GetMapping or PostMapping on the methods that are going to be used to expose [[Representational State Transfer (REST)|rest]] to the outside world. It's very, very similar with GraphQL. We are going to use QueryMapping and we will do a public Iterable Customer.
>
> **[1:40](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=100)** And now we need to call this the exact same as it's called in the schema file. So let's open up that schema file again, and you will see that our queries name is customers, so we're going to name this the same. Now, if you don't want to name your methods the same you can provide an override in the QueryMapping annotation but for these purposes, it's fine just to continue with the name. And all we're going to do is we're going to return this.customerRepository.findAll. And we've got a couple more 'cause there's a couple more queries here. So let's do another QueryMapping, public Customer, customerById, and we need to pass an argument to this, so the @Argument annotation is going to be used. And again, we need to name this the exact same or we need to provide within that annotation the name that we want to use, but we'll go ahead and name it the exact same and we simply need to do a return this.customerRepository.findById and we will pass at the ID, now this will return an optional. So we're going to do orElseThrow just to ensure that we don't have to deal with the optional itself and now we have one more. So we're going to do a QueryMapping
>
> **[3:14](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=194)** public Customer customerByEmail, pass it an argument.
>
> **[3:22](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=202)** This is going to be a string email and for this we're going to return this.customerRepository.findCustomerByEmail and pass it our email. And that's all there is to it, we actually can now run our application. Now, if you've never run a Spring Boot application in your IDE, you'll see up here that I actually have it auto wired and that's just a feature of IntelliJ. But all you have to do is go to the HplusApplication and you'll see this main method here. All you need to do is run that main method. So we'll go ahead and run it. Before we go to the GraphQL playground I want you to take a look at a few things in here. So you'll see that we have [[Spring Data]] mentioned here on the third and fourth lines and that's because it's loaded Spring Data. So we now have an in-memory database from H2 running and that data has been loaded. You'll see a couple lines down that we also have Tomcat running on port 8080 and that's good to know because that's what's actually going to serve our GraphQL. Remember the GraphQL library itself is standalone, it needs HTTP, Spring Boot web gives us that out of the box. If you scroll down through, you can read the rest of it. But what you'll need to know is that we are on port 8080 and the GraphQL endpoint is /graphql as you can see right here. So let's jump into a playground and now we have our playground
>
> **[4:55](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=295)** loaded at localhost:8080/graphql. If I open up the schema, you'll see that the schema got loaded based on what we created and we definitely can do a customers and we will see all of the customers that we have. So let's just bring back the ID, the first name, the last name, and the email, hit play. And you'll see we return a whole bunch of data from the database. So let's change this up just a little bit. Let's do customerById, we will pass an ID of, let's look at Elizabeth here. So we'll pass the id of 2 and we will run this. Oops, helps to close my parentheses there. Sorry about that. Hit play. And you'll see that we got that data element back and of course we can add to it, oh we want the address now and let's get the zip code as well. And now we get all of that data back. And the last thing that we're going to test here is we are going to grab that email address and we're going to change this query to customerByEmail. We need to send the email and we will put it in quotes and play. We get the same data back, but now the query was customerByEmail as you can see right here. So this is basically a fully functioning GraphQL server with just a few configuration files
>
> **[6:29](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=389)** and a little bit of POJO, not a whole lot of craziness to get to this point but that's the power of Spring Boot mixed with a really robust library of GraphQL. So now it's time to extend this thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (12), [[Spring Boot]] (4), [[Java]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Spring Data]] (2)
> **Code Identifiers:** customerrepository (3), customerbyemail (3), customerbyid (2), findall (1), findbyid (1)
> **Env Vars:** ide (2), mvc (1), http (1), pojo (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Ports:** port 8080 (2), :8080 (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)
> **Tools:** intellij (1)
> **Analogies:** such as (1)

#### [Mutations](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=0)** - [Instructor] That was very easy to get a [[GraphQL]] server up and running. We did it in about 15 minutes. But now we need to actually do more than just query the data, because very few services exist that don't have the ability to modify data. So that's our next step. Let's go create a mutation. All right. So let's open up hplus, source, main, resources, graphql. And let's open up our schema. Now, when you're building a mutation, you need to create a specific type for that mutation. And it's called an input. So we will create a CustomerInput. And our CustomerInput is basically going to be the exact same as the Customer, without the ID. Because in our case, the Customer itself gets its ID from the identity and that comes from the database. So we don't need to specify that on the input. Now, if you were going to use the exact same object to create it, you would still have to create another instance or use an interface. Either way, you would be fine. Let's scroll down here to the bottom, and let's create a type of Mutation. And our mutation that we are going to create is addCustomer. That takes an input of CustomerInput. And that will yield for us a Customer. So now we need to go back to our controller and source, main, [[Java]], controller, CustomerController.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=96)** And let us go to the very bottom. We will start with a MutationMapping. And this will be a public Customer addCustomer, 'cause that's what we call the mutation. We'll pass an argument. Now this time we're going to put a name for our argument, because I want to make sure that it makes sense in the method itself. So the name is input and we got that from the schema. But what we are going to send is a CustomerInput object called customerInput. Now we haven't created that object yet, so just allow it to show the error, and that's fine. We will return this dot CustomerRepository dot save. And we are going to do a customerInput dot getCustomerEntity. So we're going to have to create that method. So let's go ahead and create this class. We will do a new Java class called CustomerInput. Now, our CustomerInput has to match the schema. So let's just take this right here. And once again, we will add some comments, so we've got a heads-up, and it will be very simply private String firstName and through the [[Representational State Transfer (REST)|rest]] of the list. All right, now that we've got those fields typed,
>
> **[3:08](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=188)** let's go ahead and get rid of this comment. And now we need to do two things. The first thing we're going to do is we're going to go ahead and generate our getters and setters. And now towards the bottom, I want to create a helper method on this POJO. So this is going to be public Customer getCustomerEntity.
>
> **[3:33](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=213)** Import that class in. And we will create a customer. And we will go through and set all of the fields on our Customer. And we will do it from this object itself. So go ahead and do that for everything. After we've typed all of that, we will simply now return our customer. And now let's jump back to our controller. And everything's good to go. So now it's time to play this and go build our mutation. Go ahead and start the server up and jump to our playground. Now you'll see if we open up the schema, we have the queries, 'cause it hasn't actually reloaded. So if you want to see that, copy it, start a new one up. You can kill the other one. And refresh, have it load up. And now you'll see that we have the mutation. So we can add this mutation to our elements. So we will do a mutation addCustomer. All right. So now that we've put in our addCustomer input object, we now need to tell GraphQL what we want to see when the Customer comes back out. And we're going to want to see the ID, the first name, the last name and the email. So we'll go ahead and close our schema and play this out.
>
> **[5:07](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=307)** This actually has added it to our database at an idea of 1001. And the reason I know that is because there's a thousand customers in there, and identity means that 1001 is the next one. But let me show you what's really cool. Hit Play again, and it throws an error message, because we have a unique constraint on email. So next video, we're going to take care of that error and make it a little bit cleaner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (3), [[Java]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** addcustomer (4), customerinput (2), getcustomerentity (2), firstname (1)
> **CLI Commands:** make (2), go build (1)
> **Cross-References:** go back to (1), next video (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** pojo (1)
> **Speakers:** - [instructor] (1)

#### [Errors](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=0)** - [Instructor] If you remember in the last video, I showed you a very ugly internal server error, when it actually was something that we were able to control. And I don't like internal errors if we actually can control the situation. So I want to show you how to modify the error output in a way that makes it more conducive to a production system. Just as a quick reminder, this was the internal error that we got when we tried to duplicate adding our entry. So what I want you to do is to open up source main [[Java]] and go to our controller and let's add another new class in here. And we are going to call this one HPlusEexceptionHandler. And this is going to extend the DataFetcherExceptionResolverAdapter.
>
> **[0:55](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=55)** Let's go ahead and annotate this with @Component. And we are going to override a method. Now with [[GraphQL]], you can return multiple errors and you'll see that we have a resolved multiple errors method that we can override. But what we're going to do for the purposes of this course is just do our resolve to single error. So we will override that. And what we're going to do is we're going to create an error type from GraphQL Execution and we will start by setting it equal to null. Okay, so now we're going to do an if exception is an instance of DataIntegrityViolationException and this is a wrapper that gets put around a constraint violation exception. So if we get a constraint violation exception, we will set the type equal to ErrorType.BadRequest.
>
> **[1:58](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=118)** Else, we will do a type
>
> **[2:07](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=127)** of internal error. Now the real key here is that we're going to actually return some data with our error so that you know what's going on. So we'll create a GraphQLErrorBuilder.NewError
>
> **[2:24](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=144)** and we will send in the ENV and we will do a dot message. And that message that we are going to send is received message colon space. And then we will pull the message off of the exception. And now we will do a dot error type of type. And then we will build this. Let's go ahead and do that import. And set the semicolon that I missed. And now let's restart our application. Now because this is an embedded database, we lost that data element that we added, right? Because we reloaded the schema and we reloaded the data. So let's go back to our GraphQL. Let's go ahead and play this once. And it added it again at 1001. Now, if we try to play it again, you'll see that we have a much more clear message. The message is that we could not execute this statement. And we should probably trim this in a production system. We don't want to expose our sequel, but for right now, it's fine. But you see that we got an exception that was a constraint violation exception. We also said it was a bad request. Now bad request probably isn't the most appropriate for this. But the point is, is that by simply adding in this extension class, we were able to control the errors in our application so that they're more meaningful. And you can do this throughout the entire stack.
>
> **[3:57](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=237)** If you take an error and catch it, put in data that you want, you can simply pull it out of that error and return it to your clients so that they know what they need to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (3), [[Java]] (1)
> **Definitions:** is an  (2), is a  (1)
> **Cross-References:** in the last (1), go back to (1)
> **Env Vars:** env (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Extending the API](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=0)** - [Instructor] So now it's time for you to take what you've learned and extend the API. If you look at the schema.[[SQL]] file and the data.sql file, I provided you several tables, and in those tables, there is data for each and every one of them. I'm going to encourage you to implement as many of them as you want. And in my solution, I'm going to go forward and do that. So let's talk about how I want you to do this additional query. You've got several options, do one of them, or do all of them, leverage JPA joints where possible. If you do that, [[GraphQL]] will wire those elements properly and you will get the data back with less traversing the database itself. Utilize the schema.sql file to guide you. You can also create your own SQL file for these additions. Just remember, there can only be one root. And I encourage you to take this as far as you can. If you want to add mutations, add mutations. If you want to go through and do the whole graph, do the whole graph. Again, the purpose here is to give you something to build from based on the knowledge you have in this course. So have fun, enjoy it, and I will be back with my solution to this problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[GraphQL]] (1)
> **File Paths:** schema.sql (2), data.sql (1)
> **Env Vars:** api (1), jpa (1), sql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Extending the API](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=0)** - [Instructor] So now it's time for my solution to this exercise of extending the API. Let's start in the IDE. And I made a lot of changes cause I went ahead and implemented the entire graph. We'll start specifically with the schema file. You'll see if we go towards the top I added a type for salesperson, a type for product, a type for an order, and a type for order line. And I included the order lines on the order, which means I'm going to have some one-to-many and many-to-one relationships, because order and order line both have entities as part of the definition. So let's take a look at how I did the order itself. So the order itself, we have some very simple elements on the entity. We've got the order ID, which as you would expect is the ID. But then we have a many-to-one relationship with customer. This allows us to load the customer data from the order itself. We also have salesperson in the same construct. And you'll see at the bottom we have order lines. Now this is something that's not in this database table because it's at another table. So we're mapping it as a one-to-many using the order as the mapping. So this way, if I loaded order, I'm going to get all of the lines because that's what makes the most sense. It doesn't really make sense to get an order line if you're looking at a sales system as a whole. So let's take a look at the order line itself. You'll see that I have some joint columns here.
>
> **[1:34](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=94)** So I've got the many-to-one with order. I have a one-to-one with product because I need to load the product details for the order line itself. And then of course the quantity. So you'll see, I went ahead and created an entity and a repository for each of our elements in the database. I also created controllers for order a product and salesperson, because all of those have queries in the schema. Now, if I go ahead and restart my application, and let it come up, I can jump into the [[GraphQL]] Playground and let's start with the [[Microsoft Products|products]] query. So if I do a query on products, you'll see that I return all of the elements. Now, one thing that I want to note I'm going to jump back to the ID here. So on the product, you will see that we have an element that in the [[Databases]] numeric, we turned it into a big decimal as is appropriate on an entity, but what you'll find if you look at the schema for this, it's a float. Now if you remember, I talked about the fact that there were scalers that were specific for [[Java]] and this is one of them. There is a mapper that will take a big decimal and turn it into a float. So of course the numeric data from the database that becomes a big decimal in Java then becomes a float in GraphQL. And that's a very important thing to note because we wouldn't usually use floats for computing things like money because of the uncertainty of a float itself.
>
> **[3:07](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=187)** We would use a numeric data type like big decimal. So that's one thing that I specifically want to call out. So let's jump back to the GraphQL Playground. And let's take a look at our orders query and let's start at the top. So I want to get all of the orders in the system. In this case, we only have one. I want the idea of that order. I want the customer and I want data from the customer. I want the salesperson and data from the salesperson. I want the order lines and I specifically want to get the product details and the quantity. So if I run this query, you will see that I get the single order that came back. I get the customer data, the salesperson data, I get the order lines, and each order line has a quantity as well as the product details, including the price. So this is a very real example of how GraphQL could be used to get a very complex graph from a simple query without going back to the database multiple times.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (4), [[Microsoft Products|Products]] (2), [[Java]] (2), [[Databases]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** api (1), ide (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=0)** - [Frank Moley] So we've come to the end of this course. But I want to take a moment to talk about what you can do next to expand on the knowledge that you've gained from this course specifically. Let's start off with a quick review. So we've learned a little bit about [[GraphQL]] and we've implemented a simple schema for GraphQL, using [[Spring Boot]] as the runtime. We leveraged JPA to pull data. Now, this is a very important thing I want to talk about because your data source may not always be a database. It could be a [[Representational State Transfer (REST)|REST]] service. It could be many other things, including a GraphQL service, if you wanted to do some sort of a translation. So, there are many different ways to execute data fetches that then are exposed via GraphQL. An important note about that GraphQL. There is a GraphQL client contained within [[Java]] GraphQL. It's not something I talked about because it's not very common that you would translate from one GraphQL to another. It's also not super common to be consuming GraphQL. Usually, you're going to use this for a full stack application but it is there if you need to. And if you have a use for it, I encourage you to take a look at it and read it. We wired all of this together using controllers, very similar to a Spring MVC controller, but of course we had query mappings and mutation mappings. And then we customize our errors so that we're a little bit more friendly when we return those errors to the client so that they can take action as appropriate. Now, some of the next steps that you can do.
>
> **[1:33](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=93)** So, I would encourage you first of all, to build your own from scratch. Find a data set that you're excited about, weather or Star Wars characters or Harry Potter. It doesn't matter what the data is. Build a GraphQL instance using that data and what we've done in this course. Try it with the REST-based service instead of JPA. Using REST template is super simple and it will give you the ability to do it in a way that is probably more natural to people where they're building an application that's culling REST services. Add a [[JavaScript]] front end. It makes sense. You've already got the web package. You can expose a static [[HTML]] page that contains your JavaScript and then you can leverage GraphQL. That's what you would do in a full stack application with Java. Take a look at the batching APIs that come with this. Batching is a way to really save network bandwidth when you always know that if you're going to load X, you may load Y. There's a whole concept of batching that comes with GraphQL Java. And I encourage you to take a look at that if you have use cases that get more advanced. And finally, I really want to take some time to say thank you. I want to start by saying that my commitment to you does not end when this course ends. You'll find me very active on the Q and A section in [[LinkedIn]] Learning for each of my courses. I respond to messages on Twitter, StackOverflow. My [[GitHub]] is always active. You can always reach out to me with questions
>
> **[3:07](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=187)** about this course or any of my courses in the library. And I'm more than happy to jump in and help out where I can. I do ask, if you're having problems with your code, that when you ask the question, you give me a GitHub link to your code so I can actually jump in and take a look at the running code, as opposed to trying to diagnose an error from a stack trace. Couple places I'm fpmoles on Twitter, StackOverflow and GitHub. And of course, I'm Frank-Moley here on LinkedIn. Finally, I really just want to say thank you. Your time is valuable. The fact that you took your time to learn from me means the world to me and I'm not sugarcoating this. This is really how I feel. This is something that excites me. And the fact that you spent time with me is very meaningful to me. That's why my commitment is as strong as it is to you. And I encourage you to take advantage of that commitment as you need help throughout these courses. Once again, thanks. And I hope you get a little taste of GraphQL and Spring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (13), [[Representational State Transfer (REST)|Rest]] (4), [[Java]] (3), [[GitHub]] (3), [[JavaScript]] (2)
> **Env Vars:** rest (4), jpa (2), mvc (1), html (1)
> **Tools:** github (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Exercise Files:** template (1)
> **Analogies:** similar to (1)
> **Warnings:** important note (1)


## Instructor

- [[Frank P Moley III]]

## Resources

- Exercise files available

## Skills Covered

- Spring Framework
- GraphQL

## Path Context

### In [[Building Your Skills in Spring Development]]
← [[Spring 6 Design Patterns]] | **2 of 4** | [[Spring Framework in Depth]] →

## Appears In

- [[Building Your Skills in Spring Development]]

## Related Courses

_Courses sharing skills:_

- [[Building GraphQL Applications in Laravel]] — GraphQL
- [[Advanced Spring- Application Events]] — Spring Framework
- [[Advanced Spring- Spring Boot Actuator]] — Spring Framework
- [[Performance Tuning in Spring Apps]] — Spring Framework
- [[Building a GraphQL Project with React.js]] — GraphQL

---

[↑ Back to top](#)