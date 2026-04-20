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
  - Building Your Skills in Spring Development
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/spring-framework
  - skill/graphql
status: not-started
created: 2026-04-20
---

![Spring with GraphQL](https://media.licdn.com/dms/image/v2/C560DAQEn-bZc-Hdr2w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1657817616889?e=2147483647&amp;v=beta&amp;t=I-yHZOrfX8EuGKsxAYBurTyQAEpl0j55g6C_VfvN1aI)

# Spring with GraphQL

> If you’re a back-end engineer or full-stack developer, it’s time to get up to speed with GraphQL, the extremely popular and powerful query language that tells you everything you need to know about your APIs. The problem is, for Java-based, back-end operations, there’s often a gap between traditional frameworks and the data access technologies of most engineers.In this course, instructor Frank Mole

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql) | 1h 4m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Frank P Moley III]]

## Resources

- Exercise files available

## Skills Covered

- Spring Framework
- GraphQL

## Table of Contents

### Introduction

#### Build a GraphQL API with Spring Boot
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/build-a-graphql-api-with-spring-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/build-a-graphql-api-with-spring-boot?u=76281980&t=0)** - [Frank] GraphQL is a powerful way to query and manipulate data through APIs.
>
> **[0:05](https://www.linkedin.com/learning/spring-with-graphql/build-a-graphql-api-with-spring-boot?u=76281980&t=5)** Spring Boot offers an easy path for building a GraphQL endpoint using Java, which for many of us is a natural language choice.
>
> **[0:15](https://www.linkedin.com/learning/spring-with-graphql/build-a-graphql-api-with-spring-boot?u=76281980&t=15)** Hi, my name is Frank Moley.
>
> **[0:17](https://www.linkedin.com/learning/spring-with-graphql/build-a-graphql-api-with-spring-boot?u=76281980&t=17)** I'm a developer, architect teacher, and perpetual student with over 25 years of development experience, mostly in the JVM as a backend and systems developer.
>
> **[0:28](https://www.linkedin.com/learning/spring-with-graphql/build-a-graphql-api-with-spring-boot?u=76281980&t=28)** Please join me in this course, Spring with GraphQL, to learn how to leverage the simplicity and speed of Spring Boot to develop a GraphQL endpoint.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Env Vars:** jvm (1)
> **Speakers:** - [frank] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to be successful in this course and to get the most out of it, you should know a few things prior to taking this course.
>
> **[0:07](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=7)** And, of course, you will need some proper software on your machine.
>
> **[0:11](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=11)** So with that, let's level set.
>
> **[0:13](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=13)** This course is a Java based course.
>
> **[0:16](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=16)** So let's start there.
>
> **[0:18](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=18)** I will be using JDK 17 as an LTS version that is supported by Spring at the current time.
>
> **[0:25](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=25)** It makes the most sense to leverage it.
>
> **[0:28](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=28)** Ensure you have it installed in on your path.
>
> **[0:31](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=31)** And remember, you need a JDK, not just a JRE.
>
> **[0:36](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=36)** Now, you won't need to know any of the new features of the language.
>
> **[0:39](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=39)** To be honest, you should be able to just have a very base knowledge of Java, and you should be able to be successful.
>
> **[0:47](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=47)** Now, I'm going to be using Maven as a dependency management and build tool, but Gradle is perfectly fine as well, if you feel more comfortable with that.
>
> **[0:56](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=56)** We won't really be doing much outside of our IDE.
>
> **[0:59](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=59)** So as long as yours supports the tool, either one is perfectly fine.
>
> **[1:04](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=64)** And speaking of IDEs, you should have one, preferably, one that is focused on Java.
>
> **[1:11](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=71)** Now, I'm going to be using IntelliJ Premium because I use it every day.
>
> **[1:17](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=77)** But by no means should you go out and buy it just for this course.
>
> **[1:22](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=82)** Most modern IDEs that work with Java support plugins for Spring and GraphQL.
>
> **[1:28](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=88)** The most important thing is that you know how to use your IDE and you're comfortable with it.
>
> **[1:35](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=95)** Not necessarily the one that I am using.
>
> **[1:38](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=98)** Now, this is a Spring course.
>
> **[1:41](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=101)** So you will need some base knowledge of Spring.
>
> **[1:44](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=104)** I have many courses in the LinkedIn Learning library on the Spring.
>
> **[1:49](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=109)** So if you don't know the framework, please take a pause, and go learn it by taking my Learning Spring with Spring Boot course, my Spring Boot Essential Training course, or my Spring: Framework in Depth course.
>
> **[2:03](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=123)** We will be using the core framework.
>
> **[2:06](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=126)** So as long as you understand inversion of control and Java config for the application context, you should be good.
>
> **[2:14](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=134)** We'll also be using some annotation.
>
> **[2:16](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=136)** So component scanning will come into play, but you get that free with Spring Boot.
>
> **[2:21](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=141)** We will be using a touch of Spring Web.
>
> **[2:25](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=145)** So if you get the basics of it, that should be sufficient, but you should understand what controllers are.
>
> **[2:33](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=153)** We will be using Spring Data, specifically JPA with embedded databases.
>
> **[2:38](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=158)** Now, many of my courses here on the library talk about using Spring Data with JPA, including Learning Spring with Spring Boot.
>
> **[2:46](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=166)** So you should be familiar with it.
>
> **[2:48](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=168)** And we have tools here if you're not.
>
> **[2:51](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=171)** Now, if you know JPA or hibernate, you'll probably be fine.
>
> **[2:55](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=175)** There's just a couple things that I'm going to show you that will come into play.
>
> **[2:59](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=179)** But again, I address these as well in those other courses, if you want a little bit more depth in Spring Data.
>
> **[3:05](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=185)** Maybe most I impactfully we will be using Spring Boot.
>
> **[3:10](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=190)** You really need to understand not only the basics, but the core operations of Spring Boot, because we're going to leverage them to build out this course and to build out our GraphQL implementation.
>
> **[3:22](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=202)** So make sure you understand not only how Spring works, but how Spring Boot itself works.
>
> **[3:27](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=207)** Now, when it comes to GraphQL itself, the prerequisites are going to be minimal.
>
> **[3:32](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=212)** You should know at a high level what it is and why people use it.
>
> **[3:36](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=216)** Now, we're going to go into those details.
>
> **[3:39](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=219)** But most of the discussion outside of the code in this course are going to center around GraphQL itself.
>
> **[3:45](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=225)** So some very basic knowledge will be sufficient.
>
> **[3:49](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=229)** Now, you will need to have a GraphQL playground.
>
> **[3:52](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=232)** There are many ways to get one.
>
> **[3:54](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=234)** You can install it as an application.
>
> **[3:56](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=236)** You can use it in your browser, which is what I'm going to do.
>
> **[3:59](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=239)** You can install it through an app.
>
> **[4:01](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=241)** You can use your IDE plugins.
>
> **[4:03](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=243)** It really doesn't matter how you get a GraphQL playground, just get one.
>
> **[4:07](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=247)** If you use Google Chrome, there's some great extensions out there that allow you to run the playground.
>
> **[4:12](https://www.linkedin.com/learning/spring-with-graphql/what-you-should-know?u=76281980&t=252)** And again, that's what I'm going to use in this course in order to connect to my GraphQL API.

> [!info]- Semantic Content
>
> **Env Vars:** ide (3), jpa (3), jdk (2), lts (1), jre (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)


### 1. Getting to Know GraphQL

#### The power of GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=0)** - [Instructor] GraphQL is considered by many to be the most logical way to build an API that is consumed by both JavaScript applications as well as mobile applications.
>
> **[0:13](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=13)** We should start with the very basics here, and talk about what GraphQL is.
>
> **[0:19](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=19)** First and foremost, GraphQL is an API or an application programming interface.
>
> **[0:25](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=25)** It is designed to serve data when requested to other systems or other parts of the system itself and full stack engineers know all about that.
>
> **[0:37](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=37)** It is also a query language for that API.
>
> **[0:41](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=41)** This allows you to structure queries against the API to get data that matches what you ask for.
>
> **[0:49](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=49)** Most importantly, is that it is a runtime for answering the queries.
>
> **[0:54](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=54)** GraphQL not only is the API and the language to query it, but it also provides a running mechanism to fetch and serve data.
>
> **[1:05](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=65)** Now, one of the coolest aspects of GraphQL is that due to its graph nature and how the query works, you can ask the API for exactly what you want and structure it how you want it and then you will be rewarded with the data, exactly how you need it, whether you traverse the graph or request a single type.
>
> **[1:30](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=90)** So now that we know the basics of the, what it is, let's talk about why you would use GraphQL.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=96)** One of the biggest advantages for front end developers especially is the concept of a single request.
>
> **[1:43](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=103)** With that single request, you can get the resource, all resources, or a selection of resources.
>
> **[1:51](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=111)** To do this with REST, you would need at least two APIs, most likely many more.
>
> **[1:57](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=117)** In addition to control of which resource you get and how many instances you get, you can filter the payload of the response to only return the fields that you need.
>
> **[2:09](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=129)** With REST, you always get the whole object.
>
> **[2:13](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=133)** So, we can get one or more resources and one or more fields on those resources, but then we get to sub-resources.
>
> **[2:22](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=142)** With REST, we often get an ID on the parent and then call a different API to get the sub-resources, based on those values in the parent object.
>
> **[2:34](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=154)** With GraphQL, we don't need to do that.
>
> **[2:38](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=158)** We can leverage the graph nature and pull back all sub-resources of a parent resource, or a single sub-resource, or just fields within that resource.
>
> **[2:49](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=169)** Now you add that into filtering and we start to get a real picture of what we want, what we can return, and how we do it.
>
> **[2:57](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=177)** Another advantage, especially in the front end world, is that we don't need multiple endpoints configured.
>
> **[3:04](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=184)** In a REST world, we often need base URLs for each service.
>
> **[3:09](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=189)** With GraphQL, we only need the URL of the GraphQL server.
>
> **[3:15](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=195)** Type safety is very important to many developers and GraphQL provides type safety, unlike REST.
>
> **[3:24](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=204)** Now, like it or not, APIs change and non-passive changes causes us to deal with API versioning in REST.
>
> **[3:34](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=214)** With GraphQL, however, versions are a thing of the past.
>
> **[3:39](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=219)** We leveraged schemas and registries to handle different versions, but we still have one instance of our GraphQL server.
>
> **[3:48](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=228)** Now we're going to talk about the how to in this course, specifically for Java developers using Spring, but there are a lot of other implementations, things like Go, JavaScript, and others that you can use to implement GraphQL servers.
>
> **[4:03](https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql?u=76281980&t=243)** Again, in this course, we're going to focus on Java and use Spring as our native runtime.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), rest (6), url (1)
> **Code Keywords:** interface (1), for. (1), type. (1), let (1), return, (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### GraphQL in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=0)** - [Instructor] While many people immediately think of Node.js for GraphQL implementations, as previously stated, there are many languages that support GraphQL itself.
>
> **[0:10](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=10)** We're going to talk about Java's, and then jump into Spring's wrap around that.
>
> **[0:16](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=16)** GraphQL Java is a pure Java implementation of GraphQL that is independently maintained.
>
> **[0:23](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=23)** First and foremost, it is an open source software project, meaning it brings with it everything that is great about OSS.
>
> **[0:32](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=32)** It is covered by the very flexible MIT license.
>
> **[0:36](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=36)** And they use GitHub discussions for all active issues, as well as questions, and they also leverage Twitter and do respond on Stack Overflow.
>
> **[0:46](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=46)** So again, you're getting the full breadth of an open source software project.
>
> **[0:50](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=50)** Now, using GraphQL Java does have a little bit of confusion.
>
> **[0:56](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=56)** It is the core library.
>
> **[0:58](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=58)** As such, it can be used as a standalone project and is definitely intended to be used that way if you want to.
>
> **[1:08](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=68)** If you choose to go that route, you will have to provide HTTP services to wrap it.
>
> **[1:13](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=73)** This is where the confusion kind of comes in.
>
> **[1:16](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=76)** It's a core library, not the exposing of it but you most definitely can use it with any framework or core libraries exposing HTTP.
>
> **[1:26](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=86)** The team that maintains this worked with Spring itself to create an official supported version of Spring Boot integration.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=96)** There are other abstractions available, including from companies like Netflix, but we're going to focus on the one that is maintained by Spring source in collaboration with the GraphQL Java team.
>
> **[1:49](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=109)** Now, when I look at the way that they've implemented GraphQL Java in Spring, the first thing that comes in my mind is this is very MVC like.
>
> **[2:00](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=120)** GraphQL leverages these MVC-like patterns of controllers to handle the exposing of queries and mutations.
>
> **[2:09](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=129)** In addition, you can leverage Spring Data GraphQL repositories as opposed to just standard repositories if you want to simply expose CRUD operations through an MVC portal.
>
> **[2:23](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=143)** We're not going to do that in this course but I did want to let you know that it is possible to simply write a Spring Data repository and expose it as a GraphQL interface.
>
> **[2:34](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=154)** Now, the Spring Boot starter is going to wire the common defaults so you don't have to.
>
> **[2:40](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=160)** And throughout this course, we're actually not going to manipulate those defaults, except for the printing of the schema.
>
> **[2:47](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=167)** We're going to leave everything else alone because we don't need to, and in most cases, you won't need to either.
>
> **[2:54](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=174)** We're going to rely on a static schema definition, and this is really good practice, whether you're writing REST or GraphQL or SOAP, I'm a big fan of contract-first development, and with GraphQL, the schema is the contract.
>
> **[3:10](https://www.linkedin.com/learning/spring-with-graphql/graphql-in-java?u=76281980&t=190)** So we can leverage that and build a static schema and load it automatically through the starter so that we get that contract-first development practice.

> [!info]- Semantic Content
>
> **Env Vars:** mvc (3), http (2), oss (1), mit (1), crud (1)
> **Code Keywords:** static (2), let (1), interface (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Documentation:** stack overflow (1)
> **Tools:** github (1)
> **Best Practices:** good practice (1)

#### GraphQL terminology
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=0)** - [Instructor] Since I assume that you are stronger in Java and Spring than GraphQL, I want to focus a bit on the terms used for GraphQL that may be exposed in this course.
>
> **[0:11](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=11)** The most used aspect of GraphQL, at least in my opinion, comes from queries and mutations flows.
>
> **[0:18](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=18)** Objects are the highest level resource you can retrieve in GraphQL.
>
> **[0:23](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=23)** Objects are defined in schemas, which we will discuss in a bit.
>
> **[0:27](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=27)** Fields are elements from the objects that you can specify in a query to request the data.
>
> **[0:34](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=34)** Fields are elements of the object itself.
>
> **[0:37](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=37)** And with GraphQL, you can specify what you want returned by putting the fields in your query.
>
> **[0:44](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=44)** Queries, as you might expect, are essentially what you are asking GraphQL to return to you.
>
> **[0:50](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=50)** You will see lots of examples of queries as we go forward in this course.
>
> **[0:56](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=56)** Queries have variables in them that allow you to specify specific objects you want returned.
>
> **[1:02](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=62)** And they can be as simple as an ID or as complex as the value in a type.
>
> **[1:07](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=67)** Mutations are how you change the data.
>
> **[1:10](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=70)** When working with systems, we have to manipulate the data and not just query it.
>
> **[1:15](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=75)** And mutations are how you manipulate the data that is stored in the backing data source.
>
> **[1:21](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=81)** Fragments allow you to build reusable components for your queries in the same way we would in Java OOP.
>
> **[1:29](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=89)** Let's just say you need a complex query that shares field structure in various parts.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=96)** Fragments allow you to build a component and then use that component in the actual query.
>
> **[1:42](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=102)** Directives allow you to build custom query operations.
>
> **[1:47](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=107)** Think about a scenario where you show a simplified view of data in a component but allow that component to expand with more data.
>
> **[1:55](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=115)** You can achieve this behavior in GraphQL with a single query by adding a fragment that uses a logic statement to load the detailed view.
>
> **[2:05](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=125)** GraphQL is based on a schema.
>
> **[2:08](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=128)** That schema defines all of the objects, queries, and mutations.
>
> **[2:14](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=134)** The type system is how we go about defining all of these objects and we do so in a structured way.
>
> **[2:21](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=141)** It sort of looks similar to JSON but it's not JSON.
>
> **[2:25](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=145)** And there's an entire type structure that must be defined because GraphQL is type-safe.
>
> **[2:32](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=152)** Now, there are object types with their fields.
>
> **[2:35](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=155)** Object types are what you would imagine them to be.
>
> **[2:38](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=158)** They're the definitions of the objects that get returned by your queries as well as input types that are used for mutations.
>
> **[2:47](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=167)** The scalars in those objects, as well as other objects, are fields.
>
> **[2:53](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=173)** And fields are what we use to actually specify where the data exists in those objects.
>
> **[3:00](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=180)** Arguments, as you might imagine, are what we would pass to a query or a mutation that provides the logic and the data input that we use to build the GraphQL query or the mutation itself.
>
> **[3:14](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=194)** Just like with the method signature, arguments are how you pass data to the method in the same way that you would pass data to an object query or a mutation.
>
> **[3:26](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=206)** Now, the query and mutation types are special types within the schema that specify the queries that we define, as well as the mutations.
>
> **[3:34](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=214)** And each of them exist in their own structure within the type system.
>
> **[3:40](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=220)** Now, I mentioned earlier a little bit about fields.
>
> **[3:42](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=222)** And fields can contain scalars.
>
> **[3:45](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=225)** They can contain lists, including lists of types.
>
> **[3:48](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=228)** And they can contain enumerations, which are defined within the type system.
>
> **[3:53](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=233)** Now, scalars have a default value that every implementation must maintain.
>
> **[3:58](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=238)** But with GraphQL Java, we get extra scalars that don't exist in the standard GraphQL spec.
>
> **[4:05](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=245)** And we'll talk a little bit about those as we do our implementations.
>
> **[4:09](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=249)** And like most languages, there's the concept of interfaces.
>
> **[4:13](https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology?u=76281980&t=253)** If you have two objects that share a set of core fields, you can specify an interface and implement that in both of those objects, which allows you to reduce the complexity of your schema but building in reuse where possible.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), type. (1), let (1), interface (1)
> **Analogies:** imagine (2), similar to (1), just like (1)
> **Env Vars:** json (2), oop (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### GraphQL schemas
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=0)** - [Instructor] Now we're going to actually go through the process of building a GraphQL schema as part of this course.
>
> **[0:05](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=5)** But one of the benefits of GraphQL being so popular is that there are several free and available schemas.
>
> **[0:11](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=11)** And we're going to take a look at one of those before we get into the process of building our own.
>
> **[0:16](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=16)** Now, the one that we're going to look at specifically in this course is the Countries API, and this was written by a guy named Trevor Blades, and it's a very popular API for doing basic work with GraphQL.
>
> **[0:28](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=28)** So let's take a look at that.
>
> **[0:31](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=31)** If you navigate into your browser to that link, you'll come up with the current version of the Countries API.
>
> **[0:37](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=37)** Now this is set up with this URL such that every time they make an update, current will always point to the latest version.
>
> **[0:44](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=44)** And you'll see that he has a basic read me set up for this.
>
> **[0:48](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=48)** Now we can jump into the schema itself and take a look at it.
>
> **[0:52](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=52)** So he has several objects defined.
>
> **[0:54](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=54)** He's got Continent, Country, Language, Query, and State.
>
> **[0:59](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=59)** And if we take a look at Country, which is the one that we're most likely going to be messing with if we're going into the Countries API, you'll see that he has a code, a continent, a currency, and emoji, and this is essentially the flag for that country, as well as language.
>
> **[1:16](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=76)** And the way that he has structured this is that each resource has various queries underneath it.
>
> **[1:20](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=80)** And we're going to take a look at that here in a little bit.
>
> **[1:23](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=83)** But let's jump into the SDL so we can actually see how this API is built.
>
> **[1:28](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=88)** So he has several queries defined.
>
> **[1:30](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=90)** So Continents, a specific continent, Countries, a specific country, Languages and a specific language.
>
> **[1:38](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=98)** So those are the queries that you can act on on this API.
>
> **[1:41](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=101)** And then he has defined all of his types.
>
> **[1:43](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=103)** And we're going to go through this process throughout this course, but you'll see that he has a continent, which is a code name in countries.
>
> **[1:51](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=111)** He has the type Country.
>
> **[1:52](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=112)** Again, as we just looked at before, he has Language in here and State as it comes into appropriate value for his API.
>
> **[2:02](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=122)** And he's got some cash control.
>
> **[2:03](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=123)** Now we're not going to get into this level of detail with what we are going to build, but it's good to know that this exists because you can leverage that.
>
> **[2:13](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=133)** Now, the way that this site is structured, there is an Explorer which takes you to a GraphQL type playground.
>
> **[2:20](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=140)** Now, through this course, we're going to use a GraphQL playground.
>
> **[2:23](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=143)** We can get one for default with Spring Boot, but I don't like the way that it looks as opposed to playground.
>
> **[2:30](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=150)** So I'm going to use playground throughout this but in the next video, we're going to take you through the playground and let you see how to actually implement it and work with it and play with your queries and mutations.
>
> **[2:40](https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas?u=76281980&t=160)** So you can get a feel if your GraphQL schema is actually doing what you want it to do.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), url (1), sdl (1)
> **Code Keywords:** let (3), this. (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Using the playground
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=0)** - [Trevor] One of the most powerful tools for GraphQL, especially while you're developing, or inspecting an API is the GraphQL Playground.
>
> **[0:09](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=9)** Now, as I mentioned in the prerequisite video there are several ways to get to a playground.
>
> **[0:14](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=14)** And the API that we're going to go look at has its own on Apollo GraphQL.
>
> **[0:19](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=19)** However, we're going to leverage a browser extension in Chrome as we're doing it in this video.
>
> **[0:26](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=26)** So we're going to go look at the countries API and that countries API is available at [https://countries.trevorblades.com](https://countries.trevorblades.com).
>
> **[0:35](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=35)** And this is a really cool API, because of the way it structures the data and what it gives you when you query states and countries.
>
> **[0:43](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=43)** Let's take a look at that.
>
> **[0:45](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=45)** So this is GraphQL Playground.
>
> **[0:47](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=47)** This is a plug-in extension that I run in Chrome.
>
> **[0:50](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=50)** Again, there's many ways to get to this, but you'll see that I've populated the URL here with countries.[trevorblades.com/graphql](https://trevorblades.com/graphql).
>
> **[0:58](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=58)** The first thing that I want you to do is to open up the schema on the right hand side.
>
> **[1:03](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=63)** This allows you to look at all of the schema queries that you can execute against and what you will get back from them.
>
> **[1:10](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=70)** This is really powerful when you're building queries and inspecting an API, or testing your own to make sure that it gives you back what you want.
>
> **[1:20](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=80)** So let's go ahead and close that.
>
> **[1:22](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=82)** And we're going to start with our first query.
>
> **[1:26](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=86)** We're going to type query.
>
> **[1:28](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=88)** And the query that we are going to go to is countries.
>
> **[1:30](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=90)** And you'll notice that because it's loaded the schema it knows what you can get with some sort of an intelliSense.
>
> **[1:37](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=97)** So let's load countries.
>
> **[1:40](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=100)** And with our countries, we want to get the name.
>
> **[1:45](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=105)** We want to get the emoji, and we want to get the code.
>
> **[1:51](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=111)** So these are objects within our country element.
>
> **[1:53](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=113)** And we can see that by going over here to the country and you'll see all of these values.
>
> **[1:58](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=118)** So we have a code, a name, native, phone, continent, capital, currency, et cetera.
>
> **[2:04](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=124)** We're going to use this to query our countries and this is going to return all of them that are in the system.
>
> **[2:10](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=130)** So let's go ahead and hit play here.
>
> **[2:12](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=132)** And you'll see that we get back the country with its name, its emoji and its code.
>
> **[2:18](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=138)** Now let me show you how powerful this is.
>
> **[2:20](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=140)** We're going to switch emoji and put it below code and now hit our play again.
>
> **[2:29](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=149)** And you'll see that it returns it in the order that we requested, which is what we would want.
>
> **[2:34](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=154)** Now because of the structure of this, it's not as important the order, nonetheless, it's really powerful to be able to manipulate that.
>
> **[2:41](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=161)** So let's say we actually just wanted to get one country.
>
> **[2:44](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=164)** Let's change our query to be country, and you'll see that the country itself takes an argument and the argument can either be the ID, or the code.
>
> **[2:54](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=174)** We're going to do code.
>
> **[2:56](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=176)** And we will do US as the code And we will get the name.
>
> **[3:03](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=183)** We'll go ahead and get the code again.
>
> **[3:04](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=184)** We will get the emoji and we will get the phone.
>
> **[3:08](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=188)** So let's go ahead and hit play on this.
>
> **[3:11](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=191)** And you'll see that we get back exactly what we asked for.
>
> **[3:14](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=194)** We got a country whose name was United States.
>
> **[3:17](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=197)** The code was US.
>
> **[3:18](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=198)** You see the American flag and the phone is one, which is the country code prefix for that country.
>
> **[3:25](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=205)** Now let's put in something that doesn't exist.
>
> **[3:28](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=208)** So UB, hit play, you'll see back we get a null country in this case.
>
> **[3:34](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=214)** So the API has structured itself such that this is okay.
>
> **[3:38](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=218)** With rest we would get a 404.
>
> **[3:40](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=220)** It said, this is okay, you just passed in data that didn't exist.
>
> **[3:45](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=225)** Now we're going to spend a lot of time in GraphQL Playground.
>
> **[3:48](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=228)** So I encourage you before you go to the next video, just play around with this.
>
> **[3:53](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=233)** Look at the API, maybe go query states for instance or other values within this and see what you can come up with.
>
> **[4:04](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=244)** You might find that you can do some really cool stuff with this that you never thought you could, like joining countries to states.
>
> **[4:11](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=251)** Things like that.
>
> **[4:13](https://www.linkedin.com/learning/spring-with-graphql/using-the-playground?u=76281980&t=253)** That's the power of this API is you really can get what you want, when you want it and how you want it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (2), this. (2), switch (1), for. (1)
> **Env Vars:** api (9), url (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [https://countries.trevorblades.com](https://countries.trevorblades.com) (1), [trevorblades.com](https://trevorblades.com) (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** intellisense (1)
> **Cross-References:** next video (1)


### 2. Building GraphQL APIs

#### Setting up the project
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=0)** - [Frank] So now, it's time to get into the real content of this course.
>
> **[0:03](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=3)** And that's building an application with Spring that exposes a GraphQL API.
>
> **[0:08](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=8)** And to do that, we need to start by building a Spring Boot app.
>
> **[0:12](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=12)** Now there's multiple ways to do this.
>
> **[0:14](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=14)** And quite often, I usually just use my IDE plugins to do this.
>
> **[0:17](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=17)** But I'm going to walk through start.[spring.io](https://spring.io) for you so you can see how to do this in case you don't have a Spring plugin.
>
> **[0:26](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=26)** So, as I mentioned, I want you to go to start.[spring.io](https://spring.io).
>
> **[0:31](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=31)** And this is the Spring Initializr.
>
> **[0:33](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=33)** This is where you can use to build any project you want to.
>
> **[0:37](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=37)** So let's go through some of our options.
>
> **[0:39](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=39)** So we're going to choose a Maven project.
>
> **[0:41](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=41)** Again, if you're using Gradle, that's perfectly fine.
>
> **[0:44](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=44)** We are going to use Java.
>
> **[0:46](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=46)** Now, I'm going to select a snapshot version, because as of right now, this has not been formally released.
>
> **[0:51](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=51)** But 2.7.0 is when GraphQL will be released to the general public as part of Spring Boots.
>
> **[0:57](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=57)** So we'll go ahead and select 2.7.0.
>
> **[1:01](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=61)** I'm going to fill in a group.
>
> **[1:02](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=62)** And for me, it's com.frankmoley.lil, for LinkedIn Learning.
>
> **[1:08](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=68)** We are going to call this hplus.
>
> **[1:10](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=70)** The data set I have is from an hplus online store.
>
> **[1:14](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=74)** So that's what we're going to name this.
>
> **[1:16](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=76)** And for a description, we would simply say graphql in spring boot.
>
> **[1:23](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=83)** Now, we're going to create a JAR.
>
> **[1:25](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=85)** We're going to pick Java 17.
>
> **[1:28](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=88)** And now we need to go pick our dependency.
>
> **[1:30](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=90)** So we're going to select ADD DEPENDENCY.
>
> **[1:32](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=92)** The first one that we want to choose is Web.
>
> **[1:35](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=95)** Now, we're going to go choose GraphQL itself.
>
> **[1:39](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=99)** And now, we will pick JPA, so Spring Data JPA.
>
> **[1:45](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=105)** We will need an embedded database.
>
> **[1:47](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=107)** So we're going to use h2.
>
> **[1:50](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=110)** And don't worry, I provided you the scheme and the data for that.
>
> **[1:53](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=113)** And the final thing that we're going to add is Actuator.
>
> **[1:56](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=116)** We're not going to actually use Actuator.
>
> **[1:57](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=117)** I use that to debug my application and to look at things that are running.
>
> **[2:01](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=121)** Feel free to leave that out if you want to.
>
> **[2:03](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=123)** I tend to never leave it out.
>
> **[2:05](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=125)** But that's just when I'm doing coding.
>
> **[2:07](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=127)** So the next thing we're going to do is we're going to generate.
>
> **[2:11](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=131)** Now, what this is going to do is it's going to create a ZIP file, and it will download that ZIP file.
>
> **[2:16](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=136)** So now, I want to jump into a terminal.
>
> **[2:19](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=139)** And I am going to put this code in a specific location on my machine.
>
> **[2:23](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=143)** Now, my location is going to be very different than yours, but that's okay.
>
> **[2:28](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=148)** Just put it somewhere where you know that you're working from it.
>
> **[2:32](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=152)** Preferably somewhere where you actually have your Exercise Files close by.
>
> **[2:35](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=155)** So it's easy to move files as you need to.
>
> **[2:38](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=158)** So here, we're going to do an unzip on Downloads hplus.
>
> **[2:45](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=165)** And again, this is for me, you guys are going to have a little bit different structure, but this is where my downloads go.
>
> **[2:51](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=171)** And I'm going to tell it I want to put it in a directory.
>
> **[2:53](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=173)** And the directory I use is code, and we're going to put it in a folder called spring-graphql.
>
> **[3:00](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=180)** And with that, I will unzip the file.
>
> **[3:02](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=182)** So now what I'm going to do is I'm going to go ahead and open this up.
>
> **[3:05](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=185)** Now, I have a command line tool that I can use to open it up in my IDE.
>
> **[3:08](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=188)** So I'm going to go ahead and navigate to code spring-graphql.
>
> **[3:13](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=193)** And from here, I'm going to do an idea ., that will open up this directory here, and it will import it in.
>
> **[3:20](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=200)** So this will open up IntelliJ.
>
> **[3:27](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=207)** Okay, so from here, we can open up the hplus folder that we just created.
>
> **[3:31](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=211)** And you'll see that there's several files in here.
>
> **[3:34](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=214)** Now, a lot of these I tend to get rid of because I have Maven on my machine.
>
> **[3:38](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=218)** So I'm going to go ahead and get rid of them now.
>
> **[3:44](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=224)** And now, we're left with just a pam and a source file.
>
> **[3:47](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=227)** And within there, you will see that we have Java application.
>
> **[3:51](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=231)** And this is the Spring Boot application.
>
> **[3:53](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=233)** This is the starting point for a Spring Boot application.
>
> **[3:56](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=236)** We will actually go through and define all of the things that we need to make this work.
>
> **[4:00](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=240)** But this is the entry point.
>
> **[4:02](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=242)** We also get a application properties file, which we will leverage.
>
> **[4:07](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=247)** We get a test file as well, which will make sure that the application context loads.
>
> **[4:12](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=252)** And that's about it.
>
> **[4:13](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=253)** That's all we really need.
>
> **[4:14](https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project?u=76281980&t=254)** And we're ready to start kicking the tires on this application.

> [!info]- Semantic Content
>
> **Env Vars:** ide (2), jpa (2), zip (2), api (1), jar (1)
> **Code Keywords:** this. (3), let (1), public (1)
> **CLI Commands:** unzip (2), make (2)
> **Versions:** 2.7.0 (2), java 17 (1)
> **Tools:** terminal (1), command line (1), intellij (1)
> **Exercise Files:** zip file (2), exercise files (1)
> **URLs:** [spring.io](https://spring.io) (2)
> **UI Navigation:** go to (1), navigate to (1)

#### Creating the schema
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=0)** - [Instructor] As with any good web service API, the best thing to do is to start with your schema.
>
> **[0:08](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=8)** I've gone on records on that many times, that schema-first development is the way to go, and with GraphQL, it's the best way with Spring Boot to do this.
>
> **[0:16](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=16)** So let's go ahead and jump in and start creating our first schema.
>
> **[0:21](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=21)** All right, so let's open up H+, go to source/main/resources, and I want you to start by creating a new directory, and that directory name is GraphQL.
>
> **[0:33](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=33)** Now, this is by convention.
>
> **[0:35](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=35)** Spring Boot is going to load your schema under source/main/resources/GraphQL.
>
> **[0:40](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=40)** You can change that behavior through the application properties if you don't want to use this folder structure, but it doesn't really matter as long as it loads in, and there's no reason to not just use what comes out of the box.
>
> **[0:52](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=52)** It just makes it easier for everybody who may be using your work down line.
>
> **[0:57](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=57)** So within here, we're going to create a new file, and the file that we are going to create, we're going to call schema.graphqls, and that's very important.
>
> **[1:07](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=67)** The beginning doesn't matter, but everything after the dot does, because when the resource loader runs, it's going to look for files called graphqls and load those.
>
> **[1:19](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=79)** Okay, so now within here, we're going to start by creating our type, and the first type that we're going to create is customer.
>
> **[1:29](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=89)** Now, customer has an ID, and it's capital I capital D exclamation point.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=96)** Now, because I know what our data looks like, everything is going to be required.
>
> **[1:41](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=101)** So we're going to put in here a first name, and that's going to need an exclamation point as well, on the string.
>
> **[1:47](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=107)** Last name, string exclamation point.
>
> **[1:52](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=112)** And we will continue through the entire customer object.
>
> **[1:55](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=115)** Now, if you pulled from the exercise files, you'll notice I gave you a data folder.
>
> **[1:59](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=119)** In that data folder is a schema.sql, and we're going to mimic what we see on the customers table in order to do this.
>
> **[2:08](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=128)** So you'll see, we got first name, last name, email, phone, address, et cetera, et cetera.
>
> **[2:12](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=132)** That's what we are going to use.
>
> **[2:14](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=134)** So back up here, we'll do email, and that's going to be a string, always there, phone number, also a string, always there, address, a string, city will be a string, state will be a string, and zip code will also be a string.
>
> **[2:38](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=158)** Now, all of these types in this object are strings, but as we go throughout this course, we will have ones that are not strings.
>
> **[2:46](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=166)** So now let's jump down here, and let's create a type of query.
>
> **[2:53](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=173)** So we're going to support three different queries to begin with.
>
> **[2:57](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=177)** The first is simply customers, and this is going to return an array of customer type, and there must be something in there.
>
> **[3:07](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=187)** We also are going to do customerByID, and customerByID takes an ID value, and that returns a customer.
>
> **[3:19](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=199)** And the final one we will do is customerByEmail.
>
> **[3:23](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=203)** That takes an email, which is a string, and that returns a type customer.
>
> **[3:29](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=209)** Now, we'll expand on this as we go, but there's one other thing that I like to add.
>
> **[3:34](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=214)** I want to go to application.properties, and we are going to add spring.graphql.schema.printerenabled, and we are going to set it equal to true.
>
> **[3:46](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=226)** And that's all there is to it.
>
> **[3:47](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=227)** We've now built our first schema and set up Spring Boot to load this schema.
>
> **[3:54](https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema?u=76281980&t=234)** Now, we need to put a few more pieces in place before we're going to see it actually load, but this is step one, get the schema defined and know what elements we are going to need to add.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (2), type, (2), continue (1)
> **Code Identifiers:** customerbyid (2), customerbyemail (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **File Paths:** schema.sql (1)
> **Env Vars:** api (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### Creating a Spring Data repository
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=0)** - [Instructor] Now you can back a GraphQL service with any data source.
>
> **[0:05](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=5)** You could call REST services.
>
> **[0:07](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=7)** And it's something that I encourage you to do, which is use Spring RestTemplate as a data source so that you can expose a GraphQL layer for your microservices architecture.
>
> **[0:17](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=17)** But in this case, we're going to go directly to the database.
>
> **[0:20](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=20)** So we're going to use Spring Data to be our data provider using a built-in in-memory database.
>
> **[0:27](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=27)** Obviously, in the real world, you would back this with a real database.
>
> **[0:31](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=31)** But for now, for demo purposes, the embedded database works great.
>
> **[0:34](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=34)** So let's jump into our IDE.
>
> **[0:37](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=37)** So the first thing that I want you to do is I want you to open up source, main, resources.
>
> **[0:42](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=42)** And I want you to copy from the data directory that I provided in the exercise files the data dot sql and the schema dot sql.
>
> **[0:52](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=52)** And I want you to paste those right into resources.
>
> **[0:57](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=57)** Now, what this allows it to do is that the schema dot sql will define an in-memory database, and data dot sql will load data into that database, assuming that you've set your properties correctly.
>
> **[1:10](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=70)** So let's go ahead and do that.
>
> **[1:12](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=72)** Jump into application properties, and we're going to do spring dot jpa dot hibernate dot ddl auto.
>
> **[1:19](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=79)** And we are going to set this equal to none.
>
> **[1:21](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=81)** What this is saying is use the schema dot sql and data dot sql and don't override with DDL from Hibernate itself, because the default implementation of JPA is Hibernate that is used by Spring Data.
>
> **[1:35](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=95)** So we're going to tell Hibernate only handle accessing data, don't handle the DDL.
>
> **[1:41](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=101)** So DML only, no DDL.
>
> **[1:44](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=104)** All right, with that said, let's write a little bit of code.
>
> **[1:46](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=106)** So we're going to jump up here to our base package.
>
> **[1:50](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=110)** and we'll create a new package called data.
>
> **[1:53](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=113)** And within data, we are going to create a new Java class, and this will be called Customer.
>
> **[1:59](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=119)** All right. Now, our Customer will be an entity, and this is from javax dot persistence.
>
> **[2:05](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=125)** And we also need to specify the name of our table, because the name of our table is specific based on how I build schema, not necessarily how JPA expects it.
>
> **[2:16](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=136)** So we're going to set our table name equal to CUSTORMERS, also from javax dot persistence.
>
> **[2:25](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=145)** Now it's going to complain here a little bit, because we need some data in here, specifically an ID.
>
> **[2:31](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=151)** But what I want you to do is I want you to go back to the schema dot sql.
>
> **[2:36](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=156)** And this is sort of a pattern that I use quite often.
>
> **[2:41](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=161)** I want you to copy the CREATE TABLE statement, come back over to your class and add a comment block and just paste that in.
>
> **[2:50](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=170)** That way, we have the data right in front of us.
>
> **[2:52](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=172)** So we will do an at ID from javax dot persistence, at Column, name equals CUSTOMER ID,
>
> **[3:06](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=186)** and generatedValue.
>
> **[3:08](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=188)** In this case, we are going to use a generation strategy of IDENTITY.
>
> **[3:23](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=203)** Now, this is something that you have to be very cognizant of.
>
> **[3:26](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=206)** We're actually going to return this entity through GraphQL.
>
> **[3:30](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=210)** So the name of our fields must match our schema.
>
> **[3:34](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=214)** If we go load our schema file, you'll see that we call the first element ID.
>
> **[3:40](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=220)** But in this case, the column name is CUSTOMER ID.
>
> **[3:43](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=223)** So let's go ahead and handle that by doing a private long id.
>
> **[3:49](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=229)** Now we'll go ahead and do the rest of them.
>
> **[3:50](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=230)** So Column, name equals FIRST NAME,
>
> **[4:01](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=241)** private String, firstName.
>
> **[4:06](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=246)** And we'll go through and do the rest of these real quick.
>
> **[4:09](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=249)** So now that you've done all of that typing, I want you to take a look and make sure that you match what I have here in these columns.
>
> **[4:17](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=257)** And you'll see from the schema that I've named my elements within the class the exact same as they are in my schema, and that I've used the values from the scheme itself.
>
> **[4:27](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=267)** So I'm going to go ahead and delete this comment block since I don't need it anymore.
>
> **[4:32](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=272)** But I do need to generate getters and setters.
>
> **[4:35](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=275)** Now, every IDE has a way to do this.
>
> **[4:41](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=281)** I am simply going to go into the generation functions, select them all, and it will give me getters and setters for everything.
>
> **[4:47](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=287)** That's all I need to do for the Customer itself.
>
> **[4:50](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=290)** But I need to tie it to Spring Data.
>
> **[4:53](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=293)** So let's create a new Interface.
>
> **[4:56](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=296)** And this we're going to call CustomerRepository.
>
> **[5:02](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=302)** Now, CustomerRepository is going to extend JpaRepository.
>
> **[5:07](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=307)** And that is a template that we're going to pass in Customer and big L Long.
>
> **[5:14](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=314)** Now we need to put in a method in here in order to do our email.
>
> **[5:18](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=318)** So we are going to do Customer findCustomerByEmail.
>
> **[5:26](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=326)** And we will pass it a string of email.
>
> **[5:29](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=329)** And that will give us our method.
>
> **[5:31](https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository?u=76281980&t=331)** So now we have Spring Data set up, and we'll be able to use it as soon as we wire the schema to JPA through the controller, and that's coming up next.

> [!info]- Semantic Content
>
> **Env Vars:** ddl (3), jpa (3), ide (2), customer (2), rest (1)
> **Code Keywords:** let (5), case, (3), private (2), pass (2), override (1)
> **Code Identifiers:** generatedvalue (1), firstname (1), findcustomerbyemail (1)
> **Cross-References:** go back to (1), coming up (1)
> **Exercise Files:** exercise files (1), template (1)
> **CLI Commands:** make (1)
> **SQL:** create table (1)
> **Definitions:** is a  (1)

#### Creating the GraphQL controller
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=0)** - [Instructor] So now it's time to give GraphQL some actual exposure.
>
> **[0:05](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=5)** We're going to build the controller so we can now wire it to the data and expose it to the GraphQL playground.
>
> **[0:12](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=12)** So back in your IDE, go to source, main, Java, in the base package I want you to create a new package and we'll call this controller.
>
> **[0:25](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=25)** Now in here we will create a new Java class called CustomerController.
>
> **[0:32](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=32)** So the first thing that we're going to do is we're going to annotate this with @Controller.
>
> **[0:36](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=36)** This will allow Spring Boot to load this automatically, so the definitions we're providing is all we're going to actually have to do to get GraphQL up and running.
>
> **[0:46](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=46)** We need to have an instance in here of our customer repository and because we are going to do injection properly as a constructor parameter, we will add it to a constructor.
>
> **[1:01](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=61)** There is no need to auto wire this, this is the only constructor now on this class, it will automatically get called based on the system rules itself.
>
> **[1:12](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=72)** So if you've ever done Spring MVC, you will know that we often put request mapping, such as GetMapping or PostMapping on the methods that are going to be used to expose rest to the outside world.
>
> **[1:25](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=85)** It's very, very similar with GraphQL.
>
> **[1:29](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=89)** We are going to use QueryMapping and we will do a public Iterable Customer.
>
> **[1:40](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=100)** And now we need to call this the exact same as it's called in the schema file.
>
> **[1:45](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=105)** So let's open up that schema file again, and you will see that our queries name is customers, so we're going to name this the same.
>
> **[1:55](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=115)** Now, if you don't want to name your methods the same you can provide an override in the QueryMapping annotation but for these purposes, it's fine just to continue with the name.
>
> **[2:08](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=128)** And all we're going to do is we're going to return this.customerRepository.findAll.
>
> **[2:16](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=136)** And we've got a couple more 'cause there's a couple more queries here.
>
> **[2:19](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=139)** So let's do another QueryMapping, public Customer, customerById, and we need to pass an argument to this, so the @Argument annotation is going to be used.
>
> **[2:35](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=155)** And again, we need to name this the exact same or we need to provide within that annotation the name that we want to use, but we'll go ahead and name it the exact same and we simply need to do a return this.customerRepository.findById and we will pass at the ID, now this will return an optional.
>
> **[3:00](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=180)** So we're going to do orElseThrow just to ensure that we don't have to deal with the optional itself and now we have one more.
>
> **[3:10](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=190)** So we're going to do a QueryMapping public Customer customerByEmail, pass it an argument.
>
> **[3:22](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=202)** This is going to be a string email and for this we're going to return this.customerRepository.findCustomerByEmail and pass it our email.
>
> **[3:36](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=216)** And that's all there is to it, we actually can now run our application.
>
> **[3:40](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=220)** Now, if you've never run a Spring Boot application in your IDE, you'll see up here that I actually have it auto wired and that's just a feature of IntelliJ.
>
> **[3:49](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=229)** But all you have to do is go to the HplusApplication and you'll see this main method here.
>
> **[3:55](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=235)** All you need to do is run that main method.
>
> **[3:58](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=238)** So we'll go ahead and run it.
>
> **[4:03](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=243)** Before we go to the GraphQL playground I want you to take a look at a few things in here.
>
> **[4:08](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=248)** So you'll see that we have Spring Data mentioned here on the third and fourth lines and that's because it's loaded Spring Data.
>
> **[4:14](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=254)** So we now have an in-memory database from H2 running and that data has been loaded.
>
> **[4:21](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=261)** You'll see a couple lines down that we also have Tomcat running on port 8080 and that's good to know because that's what's actually going to serve our GraphQL.
>
> **[4:29](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=269)** Remember the GraphQL library itself is standalone, it needs HTTP, Spring Boot web gives us that out of the box.
>
> **[4:39](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=279)** If you scroll down through, you can read the rest of it.
>
> **[4:42](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=282)** But what you'll need to know is that we are on port 8080 and the GraphQL endpoint is /graphql as you can see right here.
>
> **[4:49](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=289)** So let's jump into a playground and now we have our playground loaded at localhost:8080/graphql.
>
> **[4:58](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=298)** If I open up the schema, you'll see that the schema got loaded based on what we created and we definitely can do a customers and we will see all of the customers that we have.
>
> **[5:10](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=310)** So let's just bring back the ID, the first name, the last name, and the email, hit play.
>
> **[5:20](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=320)** And you'll see we return a whole bunch of data from the database.
>
> **[5:24](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=324)** So let's change this up just a little bit.
>
> **[5:27](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=327)** Let's do customerById, we will pass an ID of, let's look at Elizabeth here.
>
> **[5:36](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=336)** So we'll pass the id of 2 and we will run this.
>
> **[5:40](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=340)** Oops, helps to close my parentheses there.
>
> **[5:44](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=344)** Sorry about that.
>
> **[5:44](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=344)** Hit play.
>
> **[5:46](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=346)** And you'll see that we got that data element back and of course we can add to it, oh we want the address now and let's get the zip code as well.
>
> **[5:56](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=356)** And now we get all of that data back.
>
> **[5:58](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=358)** And the last thing that we're going to test here is we are going to grab that email address and we're going to change this query to customerByEmail.
>
> **[6:08](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=368)** We need to send the email and we will put it in quotes and play.
>
> **[6:14](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=374)** We get the same data back, but now the query was customerByEmail as you can see right here.
>
> **[6:21](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=381)** So this is basically a fully functioning GraphQL server with just a few configuration files and a little bit of POJO, not a whole lot of craziness to get to this point but that's the power of Spring Boot mixed with a really robust library of GraphQL.
>
> **[6:41](https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller?u=76281980&t=401)** So now it's time to extend this thing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (6), this. (4), public (3), this, (2)
> **Code Identifiers:** customerrepository (3), customerbyemail (3), customerbyid (2), findall (1), findbyid (1)
> **Env Vars:** ide (2), mvc (1), http (1), pojo (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Ports:** port 8080 (2), :8080 (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)
> **Tools:** intellij (1)
> **Analogies:** such as (1)

#### Mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=0)** - [Instructor] That was very easy to get a GraphQL server up and running.
>
> **[0:04](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=4)** We did it in about 15 minutes.
>
> **[0:06](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=6)** But now we need to actually do more than just query the data, because very few services exist that don't have the ability to modify data.
>
> **[0:16](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=16)** So that's our next step.
>
> **[0:17](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=17)** Let's go create a mutation.
>
> **[0:19](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=19)** All right. So let's open up hplus, source, main, resources, graphql.
>
> **[0:25](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=25)** And let's open up our schema.
>
> **[0:27](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=27)** Now, when you're building a mutation, you need to create a specific type for that mutation.
>
> **[0:33](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=33)** And it's called an input.
>
> **[0:35](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=35)** So we will create a CustomerInput.
>
> **[0:41](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=41)** And our CustomerInput is basically going to be the exact same as the Customer, without the ID.
>
> **[0:46](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=46)** Because in our case, the Customer itself gets its ID from the identity and that comes from the database.
>
> **[0:53](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=53)** So we don't need to specify that on the input.
>
> **[0:56](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=56)** Now, if you were going to use the exact same object to create it, you would still have to create another instance or use an interface.
>
> **[1:04](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=64)** Either way, you would be fine.
>
> **[1:07](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=67)** Let's scroll down here to the bottom, and let's create a type of Mutation.
>
> **[1:14](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=74)** And our mutation that we are going to create is addCustomer.
>
> **[1:19](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=79)** That takes an input of CustomerInput.
>
> **[1:24](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=84)** And that will yield for us a Customer.
>
> **[1:28](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=88)** So now we need to go back to our controller and source, main, java, controller, CustomerController.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=96)** And let us go to the very bottom.
>
> **[1:40](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=100)** We will start with a MutationMapping.
>
> **[1:43](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=103)** And this will be a public Customer addCustomer, 'cause that's what we call the mutation.
>
> **[1:50](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=110)** We'll pass an argument.
>
> **[1:54](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=114)** Now this time we're going to put a name for our argument, because I want to make sure that it makes sense in the method itself.
>
> **[2:01](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=121)** So the name is input and we got that from the schema.
>
> **[2:04](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=124)** But what we are going to send is a CustomerInput object called customerInput.
>
> **[2:11](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=131)** Now we haven't created that object yet, so just allow it to show the error, and that's fine.
>
> **[2:17](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=137)** We will return this dot CustomerRepository dot save.
>
> **[2:26](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=146)** And we are going to do a customerInput dot getCustomerEntity.
>
> **[2:30](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=150)** So we're going to have to create that method.
>
> **[2:33](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=153)** So let's go ahead and create this class.
>
> **[2:40](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=160)** We will do a new Java class called CustomerInput.
>
> **[2:45](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=165)** Now, our CustomerInput has to match the schema.
>
> **[2:48](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=168)** So let's just take this right here.
>
> **[2:52](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=172)** And once again, we will add some comments, so we've got a heads-up, and it will be very simply private String firstName and through the rest of the list.
>
> **[3:06](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=186)** All right, now that we've got those fields typed, let's go ahead and get rid of this comment.
>
> **[3:12](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=192)** And now we need to do two things.
>
> **[3:13](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=193)** The first thing we're going to do is we're going to go ahead and generate our getters and setters.
>
> **[3:19](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=199)** And now towards the bottom, I want to create a helper method on this POJO.
>
> **[3:24](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=204)** So this is going to be public Customer getCustomerEntity.
>
> **[3:33](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=213)** Import that class in.
>
> **[3:34](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=214)** And we will create a customer.
>
> **[3:41](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=221)** And we will go through and set all of the fields on our Customer.
>
> **[3:46](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=226)** And we will do it from this object itself.
>
> **[3:50](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=230)** So go ahead and do that for everything.
>
> **[3:53](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=233)** After we've typed all of that, we will simply now return our customer.
>
> **[3:57](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=237)** And now let's jump back to our controller.
>
> **[3:59](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=239)** And everything's good to go.
>
> **[4:01](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=241)** So now it's time to play this and go build our mutation.
>
> **[4:07](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=247)** Go ahead and start the server up and jump to our playground.
>
> **[4:14](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=254)** Now you'll see if we open up the schema, we have the queries, 'cause it hasn't actually reloaded.
>
> **[4:21](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=261)** So if you want to see that, copy it, start a new one up.
>
> **[4:28](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=268)** You can kill the other one.
>
> **[4:31](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=271)** And refresh, have it load up.
>
> **[4:34](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=274)** And now you'll see that we have the mutation.
>
> **[4:37](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=277)** So we can add this mutation to our elements.
>
> **[4:40](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=280)** So we will do a mutation addCustomer.
>
> **[4:48](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=288)** All right. So now that we've put in our addCustomer input object, we now need to tell GraphQL what we want to see when the Customer comes back out.
>
> **[4:58](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=298)** And we're going to want to see the ID, the first name, the last name and the email.
>
> **[5:04](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=304)** So we'll go ahead and close our schema and play this out.
>
> **[5:07](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=307)** This actually has added it to our database at an idea of 1001.
>
> **[5:13](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=313)** And the reason I know that is because there's a thousand customers in there, and identity means that 1001 is the next one.
>
> **[5:19](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=319)** But let me show you what's really cool.
>
> **[5:22](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=322)** Hit Play again, and it throws an error message, because we have a unique constraint on email.
>
> **[5:27](https://www.linkedin.com/learning/spring-with-graphql/mutations?u=76281980&t=327)** So next video, we're going to take care of that error and make it a little bit cleaner.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), public (2), case, (1), interface (1), yield (1)
> **Code Identifiers:** addcustomer (4), customerinput (2), getcustomerentity (2), firstname (1)
> **CLI Commands:** make (2), go build (1)
> **Cross-References:** go back to (1), next video (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** pojo (1)
> **Speakers:** - [instructor] (1)

#### Errors
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=0)** - [Instructor] If you remember in the last video, I showed you a very ugly internal server error, when it actually was something that we were able to control.
>
> **[0:09](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=9)** And I don't like internal errors if we actually can control the situation.
>
> **[0:13](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=13)** So I want to show you how to modify the error output in a way that makes it more conducive to a production system.
>
> **[0:20](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=20)** Just as a quick reminder, this was the internal error that we got when we tried to duplicate adding our entry.
>
> **[0:27](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=27)** So what I want you to do is to open up source main Java and go to our controller and let's add another new class in here.
>
> **[0:36](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=36)** And we are going to call this one HPlusEexceptionHandler.
>
> **[0:42](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=42)** And this is going to extend the DataFetcherExceptionResolverAdapter.
>
> **[0:55](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=55)** Let's go ahead and annotate this with @Component.
>
> **[1:01](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=61)** And we are going to override a method.
>
> **[1:04](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=64)** Now with GraphQL, you can return multiple errors and you'll see that we have a resolved multiple errors method that we can override.
>
> **[1:12](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=72)** But what we're going to do for the purposes of this course is just do our resolve to single error.
>
> **[1:17](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=77)** So we will override that.
>
> **[1:20](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=80)** And what we're going to do is we're going to create an error type from GraphQL Execution and we will start by setting it equal to null.
>
> **[1:31](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=91)** Okay, so now we're going to do an if exception is an instance of DataIntegrityViolationException and this is a wrapper that gets put around a constraint violation exception.
>
> **[1:45](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=105)** So if we get a constraint violation exception, we will set the type equal to ErrorType.BadRequest.
>
> **[1:58](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=118)** Else, we will do a type
>
> **[2:07](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=127)** of internal error.
>
> **[2:10](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=130)** Now the real key here is that we're going to actually return some data with our error so that you know what's going on.
>
> **[2:16](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=136)** So we'll create a GraphQLErrorBuilder.NewError
>
> **[2:24](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=144)** and we will send in the ENV and we will do a dot message.
>
> **[2:29](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=149)** And that message that we are going to send is received message colon space.
>
> **[2:36](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=156)** And then we will pull the message off of the exception.
>
> **[2:41](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=161)** And now we will do a dot error type of type.
>
> **[2:47](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=167)** And then we will build this.
>
> **[2:49](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=169)** Let's go ahead and do that import.
>
> **[2:54](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=174)** And set the semicolon that I missed.
>
> **[2:57](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=177)** And now let's restart our application.
>
> **[3:03](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=183)** Now because this is an embedded database, we lost that data element that we added, right?
>
> **[3:07](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=187)** Because we reloaded the schema and we reloaded the data.
>
> **[3:12](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=192)** So let's go back to our GraphQL.
>
> **[3:14](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=194)** Let's go ahead and play this once.
>
> **[3:15](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=195)** And it added it again at 1001.
>
> **[3:18](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=198)** Now, if we try to play it again, you'll see that we have a much more clear message.
>
> **[3:25](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=205)** The message is that we could not execute this statement.
>
> **[3:28](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=208)** And we should probably trim this in a production system.
>
> **[3:30](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=210)** We don't want to expose our sequel, but for right now, it's fine.
>
> **[3:34](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=214)** But you see that we got an exception that was a constraint violation exception.
>
> **[3:39](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=219)** We also said it was a bad request.
>
> **[3:41](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=221)** Now bad request probably isn't the most appropriate for this.
>
> **[3:45](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=225)** But the point is, is that by simply adding in this extension class, we were able to control the errors in our application so that they're more meaningful.
>
> **[3:54](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=234)** And you can do this throughout the entire stack.
>
> **[3:57](https://www.linkedin.com/learning/spring-with-graphql/errors?u=76281980&t=237)** If you take an error and catch it, put in data that you want, you can simply pull it out of that error and return it to your clients so that they know what they need to do.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), override (3), this. (2), else, (1), type. (1)
> **Definitions:** is an  (2), is a  (1)
> **Cross-References:** in the last (1), go back to (1)
> **Env Vars:** env (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Extending the API
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=0)** - [Instructor] So now it's time for you to take what you've learned and extend the API.
>
> **[0:11](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=11)** If you look at the schema.sql file and the data.sql file, I provided you several tables, and in those tables, there is data for each and every one of them.
>
> **[0:22](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=22)** I'm going to encourage you to implement as many of them as you want.
>
> **[0:26](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=26)** And in my solution, I'm going to go forward and do that.
>
> **[0:29](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=29)** So let's talk about how I want you to do this additional query.
>
> **[0:33](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=33)** You've got several options, do one of them, or do all of them, leverage JPA joints where possible.
>
> **[0:40](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=40)** If you do that, GraphQL will wire those elements properly and you will get the data back with less traversing the database itself.
>
> **[0:50](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=50)** Utilize the schema.sql file to guide you.
>
> **[0:53](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=53)** You can also create your own SQL file for these additions.
>
> **[0:56](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=56)** Just remember, there can only be one root.
>
> **[0:59](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=59)** And I encourage you to take this as far as you can.
>
> **[1:02](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=62)** If you want to add mutations, add mutations.
>
> **[1:04](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=64)** If you want to go through and do the whole graph, do the whole graph.
>
> **[1:07](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=67)** Again, the purpose here is to give you something to build from based on the knowledge you have in this course.
>
> **[1:14](https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api?u=76281980&t=74)** So have fun, enjoy it, and I will be back with my solution to this problem.

> [!info]- Semantic Content
>
> **File Paths:** schema.sql (2), data.sql (1)
> **Env Vars:** api (1), jpa (1), sql (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Extending the API
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=0)** - [Instructor] So now it's time for my solution to this exercise of extending the API.
>
> **[0:10](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=10)** Let's start in the IDE.
>
> **[0:12](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=12)** And I made a lot of changes cause I went ahead and implemented the entire graph.
>
> **[0:17](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=17)** We'll start specifically with the schema file.
>
> **[0:21](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=21)** You'll see if we go towards the top I added a type for salesperson, a type for product, a type for an order, and a type for order line.
>
> **[0:29](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=29)** And I included the order lines on the order, which means I'm going to have some one-to-many and many-to-one relationships, because order and order line both have entities as part of the definition.
>
> **[0:42](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=42)** So let's take a look at how I did the order itself.
>
> **[0:46](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=46)** So the order itself, we have some very simple elements on the entity.
>
> **[0:50](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=50)** We've got the order ID, which as you would expect is the ID.
>
> **[0:54](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=54)** But then we have a many-to-one relationship with customer.
>
> **[0:57](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=57)** This allows us to load the customer data from the order itself.
>
> **[1:02](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=62)** We also have salesperson in the same construct.
>
> **[1:06](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=66)** And you'll see at the bottom we have order lines.
>
> **[1:08](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=68)** Now this is something that's not in this database table because it's at another table.
>
> **[1:13](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=73)** So we're mapping it as a one-to-many using the order as the mapping.
>
> **[1:18](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=78)** So this way, if I loaded order, I'm going to get all of the lines because that's what makes the most sense.
>
> **[1:23](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=83)** It doesn't really make sense to get an order line if you're looking at a sales system as a whole.
>
> **[1:29](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=89)** So let's take a look at the order line itself.
>
> **[1:32](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=92)** You'll see that I have some joint columns here.
>
> **[1:34](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=94)** So I've got the many-to-one with order.
>
> **[1:38](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=98)** I have a one-to-one with product because I need to load the product details for the order line itself.
>
> **[1:44](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=104)** And then of course the quantity.
>
> **[1:46](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=106)** So you'll see, I went ahead and created an entity and a repository for each of our elements in the database.
>
> **[1:53](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=113)** I also created controllers for order a product and salesperson, because all of those have queries in the schema.
>
> **[2:00](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=120)** Now, if I go ahead and restart my application, and let it come up, I can jump into the GraphQL Playground and let's start with the products query.
>
> **[2:11](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=131)** So if I do a query on products, you'll see that I return all of the elements.
>
> **[2:16](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=136)** Now, one thing that I want to note I'm going to jump back to the ID here.
>
> **[2:21](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=141)** So on the product, you will see that we have an element that in the databases numeric, we turned it into a big decimal as is appropriate on an entity, but what you'll find if you look at the schema for this, it's a float.
>
> **[2:39](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=159)** Now if you remember, I talked about the fact that there were scalers that were specific for Java and this is one of them.
>
> **[2:45](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=165)** There is a mapper that will take a big decimal and turn it into a float.
>
> **[2:50](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=170)** So of course the numeric data from the database that becomes a big decimal in Java then becomes a float in GraphQL.
>
> **[2:57](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=177)** And that's a very important thing to note because we wouldn't usually use floats for computing things like money because of the uncertainty of a float itself.
>
> **[3:07](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=187)** We would use a numeric data type like big decimal.
>
> **[3:11](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=191)** So that's one thing that I specifically want to call out.
>
> **[3:13](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=193)** So let's jump back to the GraphQL Playground.
>
> **[3:16](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=196)** And let's take a look at our orders query and let's start at the top.
>
> **[3:19](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=199)** So I want to get all of the orders in the system.
>
> **[3:22](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=202)** In this case, we only have one.
>
> **[3:24](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=204)** I want the idea of that order.
>
> **[3:25](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=205)** I want the customer and I want data from the customer.
>
> **[3:28](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=208)** I want the salesperson and data from the salesperson.
>
> **[3:31](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=211)** I want the order lines and I specifically want to get the product details and the quantity.
>
> **[3:37](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=217)** So if I run this query, you will see that I get the single order that came back.
>
> **[3:42](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=222)** I get the customer data, the salesperson data, I get the order lines, and each order line has a quantity as well as the product details, including the price.
>
> **[3:52](https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api?u=76281980&t=232)** So this is a very real example of how GraphQL could be used to get a very complex graph from a simple query without going back to the database multiple times.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (1), case, (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** api (1), ide (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=0)** - [Frank Moley] So we've come to the end of this course.
>
> **[0:02](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=2)** But I want to take a moment to talk about what you can do next to expand on the knowledge that you've gained from this course specifically.
>
> **[0:10](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=10)** Let's start off with a quick review.
>
> **[0:13](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=13)** So we've learned a little bit about GraphQL and we've implemented a simple schema for GraphQL, using Spring Boot as the runtime.
>
> **[0:22](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=22)** We leveraged JPA to pull data.
>
> **[0:24](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=24)** Now, this is a very important thing I want to talk about because your data source may not always be a database.
>
> **[0:30](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=30)** It could be a REST service.
>
> **[0:33](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=33)** It could be many other things, including a GraphQL service, if you wanted to do some sort of a translation.
>
> **[0:39](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=39)** So, there are many different ways to execute data fetches that then are exposed via GraphQL.
>
> **[0:45](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=45)** An important note about that GraphQL.
>
> **[0:47](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=47)** There is a GraphQL client contained within Java GraphQL.
>
> **[0:52](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=52)** It's not something I talked about because it's not very common that you would translate from one GraphQL to another.
>
> **[0:59](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=59)** It's also not super common to be consuming GraphQL.
>
> **[1:02](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=62)** Usually, you're going to use this for a full stack application but it is there if you need to.
>
> **[1:07](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=67)** And if you have a use for it, I encourage you to take a look at it and read it.
>
> **[1:11](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=71)** We wired all of this together using controllers, very similar to a Spring MVC controller, but of course we had query mappings and mutation mappings.
>
> **[1:21](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=81)** And then we customize our errors so that we're a little bit more friendly when we return those errors to the client so that they can take action as appropriate.
>
> **[1:30](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=90)** Now, some of the next steps that you can do.
>
> **[1:33](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=93)** So, I would encourage you first of all, to build your own from scratch.
>
> **[1:36](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=96)** Find a data set that you're excited about, weather or Star Wars characters or Harry Potter.
>
> **[1:42](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=102)** It doesn't matter what the data is.
>
> **[1:44](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=104)** Build a GraphQL instance using that data and what we've done in this course.
>
> **[1:50](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=110)** Try it with the REST-based service instead of JPA.
>
> **[1:53](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=113)** Using REST template is super simple and it will give you the ability to do it in a way that is probably more natural to people where they're building an application that's culling REST services.
>
> **[2:06](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=126)** Add a JavaScript front end.
>
> **[2:08](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=128)** It makes sense. You've already got the web package.
>
> **[2:10](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=130)** You can expose a static HTML page that contains your JavaScript and then you can leverage GraphQL.
>
> **[2:17](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=137)** That's what you would do in a full stack application with Java.
>
> **[2:22](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=142)** Take a look at the batching APIs that come with this.
>
> **[2:25](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=145)** Batching is a way to really save network bandwidth when you always know that if you're going to load X, you may load Y.
>
> **[2:31](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=151)** There's a whole concept of batching that comes with GraphQL Java.
>
> **[2:36](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=156)** And I encourage you to take a look at that if you have use cases that get more advanced.
>
> **[2:42](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=162)** And finally, I really want to take some time to say thank you.
>
> **[2:46](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=166)** I want to start by saying that my commitment to you does not end when this course ends.
>
> **[2:52](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=172)** You'll find me very active on the Q and A section in LinkedIn Learning for each of my courses.
>
> **[2:58](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=178)** I respond to messages on Twitter, StackOverflow.
>
> **[3:02](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=182)** My GitHub is always active.
>
> **[3:04](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=184)** You can always reach out to me with questions about this course or any of my courses in the library.
>
> **[3:09](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=189)** And I'm more than happy to jump in and help out where I can.
>
> **[3:13](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=193)** I do ask, if you're having problems with your code, that when you ask the question, you give me a GitHub link to your code so I can actually jump in and take a look at the running code, as opposed to trying to diagnose an error from a stack trace.
>
> **[3:27](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=207)** Couple places I'm fpmoles on Twitter, StackOverflow and GitHub.
>
> **[3:31](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=211)** And of course, I'm Frank-Moley here on LinkedIn.
>
> **[3:34](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=214)** Finally, I really just want to say thank you.
>
> **[3:37](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=217)** Your time is valuable.
>
> **[3:39](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=219)** The fact that you took your time to learn from me means the world to me and I'm not sugarcoating this.
>
> **[3:45](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=225)** This is really how I feel.
>
> **[3:47](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=227)** This is something that excites me.
>
> **[3:49](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=229)** And the fact that you spent time with me is very meaningful to me.
>
> **[3:53](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=233)** That's why my commitment is as strong as it is to you.
>
> **[3:57](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=237)** And I encourage you to take advantage of that commitment as you need help throughout these courses.
>
> **[4:02](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=242)** Once again, thanks.
>
> **[4:03](https://www.linkedin.com/learning/spring-with-graphql/next-steps?u=76281980&t=243)** And I hope you get a little taste of GraphQL and Spring.

> [!info]- Semantic Content
>
> **Code Keywords:** super (2), this. (2), finally, (2), let (1), static (1)
> **Env Vars:** rest (4), jpa (2), mvc (1), html (1)
> **Tools:** github (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Exercise Files:** template (1)
> **Analogies:** similar to (1)
> **Warnings:** important note (1)


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