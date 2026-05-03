---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: creating-spring-boot-microservices
url: "https://www.linkedin.com/learning/creating-spring-boot-microservices"
duration_minutes: 196
duration: 3h 16m
level: Intermediate
updated: 6/17/2024
learners: 20928
skills:
  - Microservices
  - Spring Boot
exercise_files: true
github: "https://github.com/LinkedInLearning/creating-spring-boot-microservices-3839084/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGP3Ee7Z9yRyA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719009004889?e=2147483647&amp;v=beta&amp;t=hxWhfegk-y7A0sXENAf2PH1PBy8D85fApuwx3ItteTw"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started In Spring Development]]'
prev_courses:
  - '[[Learning Spring 6 With Spring Boot]]'
next_courses:
  - '[[Spring Data 2]]'
path_nav: '[{"path":"Getting Started In Spring Development","position":2,"total":5,"prev":"Learning Spring 6 With Spring Boot","next":"Spring Data 2"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/microservices
  - skill/spring-boot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Creating%20Spring%20Boot%20Microservices.md)

![Creating Spring Boot Microservices](https://media.licdn.com/dms/image/v2/D560DAQGP3Ee7Z9yRyA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719009004889?e=2147483647&amp;v=beta&amp;t=hxWhfegk-y7A0sXENAf2PH1PBy8D85fApuwx3ItteTw)

# Creating Spring Boot Microservices

> If you’re looking for a practical introduction on creating Spring Boot microservices, this course was designed just for you. Join instructor and software developer Mary Ellen Bowman as she provides a skills-based, intermediate-level overview on how to create microservices using the power of Spring Boot 3. Along the way, discover several other related technologies and frameworks such as Spring Data

> [LinkedIn Learning](https://www.linkedin.com/learning/creating-spring-boot-microservices) | 3h 16m | Intermediate | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Build a RESTful Spring Boot microservice](#build-a-restful-spring-boot-microservice)
  - [What you should know](#what-you-should-know)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. Spring Framework Introduction**](#1-spring-framework-introduction) (5 videos)
  - [Inversion of control pattern](#inversion-of-control-pattern)
  - [Spring ApplicationContext and Spring Beans](#spring-applicationcontext-and-spring-beans)
  - [Spring autowiring annotations](#spring-autowiring-annotations)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**2. Create a Spring Boot Microservice**](#2-create-a-spring-boot-microservice) (5 videos)
  - [Introduction to Spring Initializr](#introduction-to-spring-initializr)
  - [Project setup](#project-setup)
  - [Build, deploy, and launch the microservice](#build-deploy-and-launch-the-microservice)
  - [Challenge: Add the Actuator dependency](#challenge-add-the-actuator-dependency)
  - [Solution: Add the Actuator dependency](#solution-add-the-actuator-dependency)
- [**3. Leverage Spring-Data-JPA Repository Interfaces**](#3-leverage-spring-data-jpa-repository-interfaces) (8 videos)
  - [The domain model](#the-domain-model)
  - [The persistence entities](#the-persistence-entities)
  - [Declare JPA repositories](#declare-jpa-repositories)
  - [Spring Data JPA repository dependency injection](#spring-data-jpa-repository-dependency-injection)
  - [Invoking the repositories](#invoking-the-repositories)
  - [Introduction to Spring Data query methods](#introduction-to-spring-data-query-methods)
  - [Challenge: Create a JPQL query method](#challenge-create-a-jpql-query-method)
  - [Solution: Create a JPQL query method](#solution-create-a-jpql-query-method)
- [**4. Expose RESTful API's with Spring Data REST**](#4-expose-restful-apis-with-spring-data-rest) (6 videos)
  - [Create APIs with Spring Data REST](#create-apis-with-spring-data-rest)
  - [Mapping API endpoints to repositories](#mapping-api-endpoints-to-repositories)
  - [Override default behavior](#override-default-behavior)
  - [Swagger UI](#swagger-ui)
  - [Challenge: Modify the URL repository keyword](#challenge-modify-the-url-repository-keyword)
  - [Solution: Modify the URL repository keyword](#solution-modify-the-url-repository-keyword)
- [**5. Expose RESTful API's with Spring MVC**](#5-expose-restful-apis-with-spring-mvc) (7 videos)
  - [Choosing the right framework](#choosing-the-right-framework)
  - [Declaring a new RestController](#declaring-a-new-restcontroller)
  - [Create the RestController HTTP POST endpoint](#create-the-restcontroller-http-post-endpoint)
  - [Create the RestController HTTP GET endpoint](#create-the-restcontroller-http-get-endpoint)
  - [Create the RestController HTTP PUT, PATCH, and DELETE endpoints](#create-the-restcontroller-http-put-patch-and-delete-endpoints)
  - [Challenge: Add a PATCH endpoint](#challenge-add-a-patch-endpoint)
  - [Solution: Add a PATCH endpoint](#solution-add-a-patch-endpoint)
- [**6. Best Practices**](#6-best-practices) (5 videos)
  - [Global exception handling](#global-exception-handling)
  - [Transaction rollback](#transaction-rollback)
  - [Add a runtime logger](#add-a-runtime-logger)
  - [JUnit, Mockito, and SpringBootTest](#junit-mockito-and-springboottest)
  - [API documentation](#api-documentation)
- [**7. Dockerized Microservices and Databases**](#7-dockerized-microservices-and-databases) (4 videos)
  - [Why Docker?](#why-docker)
  - [Dockerizing a microservice](#dockerizing-a-microservice)
  - [Spring Boot Docker Compose](#spring-boot-docker-compose)
  - [Database versioning with Flyway migrate](#database-versioning-with-flyway-migrate)
- [**8. Create a RESTful MongoDB Microservice**](#8-create-a-restful-mongodb-microservice) (5 videos)
  - [Use cases for an image microservice](#use-cases-for-an-image-microservice)
  - [Challenge: Create the Spring Boot MongoDB project](#challenge-create-the-spring-boot-mongodb-project)
  - [Solution: Create the Spring Boot MongoDB project](#solution-create-the-spring-boot-mongodb-project)
  - [Image file upload microservice](#image-file-upload-microservice)
  - [Spring Data MongoDB documents and repositories](#spring-data-mongodb-documents-and-repositories)
- [**9. Create an API Gateway with Spring Cloud**](#9-create-an-api-gateway-with-spring-cloud) (6 videos)
  - [Use cases for an API gateway microservice](#use-cases-for-an-api-gateway-microservice)
  - [Routing to the JPA microservice](#routing-to-the-jpa-microservice)
  - [Routing to the MongoDB microservice](#routing-to-the-mongodb-microservice)
  - [Add Spring Security to the gateway](#add-spring-security-to-the-gateway)
  - [Orchestrate with Docker Compose](#orchestrate-with-docker-compose)
  - [Cleaning up the workspace](#cleaning-up-the-workspace)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build a RESTful Spring Boot microservice](https://www.linkedin.com/learning/creating-spring-boot-microservices/build-a-restful-spring-boot-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/build-a-restful-spring-boot-microservices?u=76281980&t=0)** - Would you like to venture into the world of [[Spring Boot]] [[Microservices]], but don't know where to start? Boiling down the vast number of spring projects can be truly daunting, but it's easier than you think. Together we will build Spring Boot Microservices by leveraging [[Spring Data]] and spring web modules. Then we'll create a Spring Cloud API gateway with [[Spring Security]]. And finally, we'll deploy them as Dockerized containers. Now every solution needs a problem and every problem has a stakeholder. Our stakeholder is an imaginary tour operator, called Explore California. They need a new backend with restful APIs to expose their library of tours. Hi, I'm Mary Ellen Bowman. I'm a senior [[Java]] developer, and I will take you through this learning journey. We've got plenty to do, so let's get to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Microservices]] (2), [[Spring Data]] (1), [[Spring Security]] (1), [[Java]] (1)
> **Env Vars:** api (1)
> **Definitions:** is an  (1)
> **Speakers:** - would (1)

#### [What you should know](https://www.linkedin.com/learning/creating-spring-boot-microservices/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/what-you-should-know?u=76281980&t=0)** - Our work on this course is going to model a real-world project. I am the architect and you will shadow me as a [[Java]] developer. Our company has been tasked to reengineer a website for our customer, Explore California. You and I will create the backend services. I will guide you through the process and give you challenges along the way. I've already met with the business analyst. We are going to create several [[Spring Boot]] [[Microservices]]. It's okay if you have not had any Spring experience. We'll walk through the basics of Spring [[Dependency Injection]], then start creating Spring Boot microservices with [[Spring Data]], MVC, Spring Cloud Gateway, and [[Spring Security]]. Don't worry, we are not going to get hung up on the details of every module. We are focused on delivery here. You can then parlay this experience into your next Spring Boot project. Let's get to work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[Microservices]] (2), [[Java]] (1), [[Dependency Injection]] (1), [[Spring Data]] (1)
> **Env Vars:** mvc (1)
> **Speakers:** - our (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/creating-spring-boot-microservices/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] Let's take a moment to show you how to use the source code files, and how to run the project in [[GitHub]] [[Codespaces]]. We'll be using a GitHub repository for the project that'll go along with each video. There's a link in the repo on the course homepage just under the video player. To access the code for a given video, you'll go to the appropriate branch in GitHub. To practice along with the course, you can clone the repository to your local machine, or you can create a codespace directly from the course Overview page. First, click Open next to the GitHub Codespaces. If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. Here is our code repository. Click the Branches and you can see some sample branches here. The naming convention for the branches is chapter number, underscore, video number, and then B or E, depending on whether the code is in the beginning state or the ending state of a video. Codespaces is a code editor in the cloud with the full power of Visual Studio right in your browser. Using Codespaces, you have everything you need to get going without complex installations or build tools. Just one click and you're ready to go. If you want to be able to commit your own changes,
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/how-to-use-the-exercise-files?u=76281980&t=94)** you should first fork the repository into your own account. I'm going to create a new fork and make sure you uncheck Copy the main branch only because we need several branches in this repository to be forked. Okay, so now we're working off of our own fork. To start up Codespaces, just click the dropdown on Code and the click the Codespaces tab and click Create codespace on main. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. Okay, to change the branch, because there's really no code on the main branch, click this branch down here, branch name down here, and you search a branch name like 01_02, and that would pull it from origin. So I have already set up this Codespaces with a few things for you. I have [[Java]] 21, there is Maven set up, there is [[Git]] set up, and then I have extensions, the Docker extension, and this is the extension for source control. And then running in the IDE and then seeing other extensions can be added if you wanted to.
>
> **[3:10](https://www.linkedin.com/learning/creating-spring-boot-microservices/how-to-use-the-exercise-files?u=76281980&t=190)** To get a new terminal, we could do that for a new terminal. And this is a virtual machine in your browser and you can edit files. And they just pop up for you to use right away. If you ever want to make a change in the branch, you could do that just right in the virtual IDE. If you accidentally close your browser, don't worry, your work will not be lost. Just go back to the Codespaces tab, select your codespaces name in GitHub and it will reconnect. There's one more tip I wanted to advise you of. If you find that the IDE with the source code is not responsive to like, if you make Java changes, or it's not finding your imports in the autocomplete or things like that, it might be this down here. If you ever see it, say, Java Lightweight Mode, just click that and it's going to set up all the Java connections and knowledge about the repositories and refresh the workspace. And we see now this Java Ready appears. So if you look down and see Java Ready is not there, it just says Lightweight, then click that to make sure it's Java Ready, so you are equipped to build everything you want. And then this is the [[Spring Boot]] Dashboard, which I use from time to time. Sometimes you have to close the browser for the codespace and restart the codespace to get that to to show up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (10), [[GitHub]] (7), [[Java]] (7), [[Git]] (1), [[Spring Boot]] (1)
> **Tools:** github (7), terminal (2), visual studio (1)
> **CLI Commands:** make (4), git (1), docker (1), find (1)
> **Prerequisites:** set up (4), getting started (1)
> **Env Vars:** ide (3)
> **UI Navigation:** go to (1), dropdown (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (2)


### 1. Spring Framework Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Inversion of control pattern](https://www.linkedin.com/learning/creating-spring-boot-microservices/inversion-of-control-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/inversion-of-control-pattern?u=76281980&t=0)** - [Instructor] Before we get into creating [[Spring Boot]] [[Microservices]], let me give you a brief introduction to the basic core [[Spring Framework]]. Spring Core is an open-source framework providing [[Dependency Injection]] of Spring beans. This is via the Spring application context. The Spring application context follows the inversion of control design pattern. So what is dependency injection or DI? DI separates usage of objects from dependence. Dependency creation is managed outside the class which results in flexibility, maintainability, and ease of [[Unit Testing]]. An inversion-of-control framework or IOC maintains the lifecycle of an object and requires dependency injection. The class relinquishes control, hence inversion of control to the framework. The Spring application context or Spring container is the IOC framework of Spring. A Spring bean is a [[Java]] object managed by the Spring container. Default scope is singleton, but there are other scopes which we will not be using, some of which are prototype, request, and session. How do we configure our dependency injection? Originally, it was with XML, which you could still do today, but it's difficult to keep in sync with the Java code.
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/inversion-of-control-pattern?u=76281980&t=94)** The better way is to put our [[Metadata]] right into the Java code, either by annotating methods or annotating classes. If you go to the [spring.io/projects](https://spring.io/projects) website, you will be presented with many, many modules. For our needs, the modules we will use for our microservices will be the Spring Framework, Spring Boot, [[Spring Data]], Spring MVC, and Spring Cloud. So I have a demonstration of a project without Spring dependency injection, and then the various ways we can leverage it to improve the code. So here we have a folder called Tour service. And it's a Maven project, so here's the POM and we are using Java 21 and we have a assembly plugin, and our main class is application. And then we want to build a jar with all of its dependencies bundled in one. Very simple. So within the main Java comm example, we're looking at, since the project we're working on is going to be about tours and travel agencies, I have a plain Java record, which has the attributes of a very simple tour, which is the title of the tour, the price as an integer, and a Boolean whether it's kid friendly or not. And then in the utilities folder, I have a tour repository, which is just going to keep a list in memory of tours. So that's just the tours is an array list. And here's the repository
>
> **[3:07](https://www.linkedin.com/learning/creating-spring-boot-microservices/inversion-of-control-pattern?u=76281980&t=187)** and has a public method to save a tour and has a public method to find all the tours and then find a tour by type, whether it's kid friendly or not. Then I have a tour management service that has a dependency on the tour repository class, and it will call the save method on the tour repository to create a tour. So here's a public method create tour, which we'll call the tour repository save method with the different types of tour, Big Sur Retreat, Day Spa Package, et cetera. And finally, for a travel agent that would like to display a list of tours, so you have a public method to display tours, it's also has a dependency on the tour repository and it will evoke the find all and then stream it to standard out for all the tours, and then to display the tours by type, whether it's kid friendly or not. And then our main application class, and here's where we would instantiate the tour repository. And you must create this first because then you need to create the tour travel agent service as and pass that repo into its constructor. We also want to create all the tours. So invoke the construct for tour management service passing in the tour repository. And then we want to print display all the tours and display all the tours by whether it's kid friendly or not.
>
> **[4:41](https://www.linkedin.com/learning/creating-spring-boot-microservices/inversion-of-control-pattern?u=76281980&t=281)** And so let's run this. And so here's the output of it. For all the Explore California catalog, it shows all the tours, and then here shows the ones that are kid friendly or not. So the problem with this class, it's simple code, it works, there's no problem with it, and why wouldn't you? But the problem is the main class, this application class, it's responsible for the interdependencies. I just want to display the tours. That's all really the output of this main method is I just, but in order to display the tours, I need to instantiate the repository first, instantiate the Tour Management Service which creates all the tours, and then instantiate the travel agent service, passing it into the repository. Let's see if there's a better way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Dependency Injection]] (5), [[Spring Boot]] (2), [[Microservices]] (2), [[Spring Framework]] (2)
> **Env Vars:** ioc (2), xml (1), mvc (1), pom (1)
> **CLI Commands:** find (3)
> **Definitions:** is an  (2), is a  (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Versions:** java 21 (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** configure (1)

#### [Spring ApplicationContext and Spring Beans](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-application-context-and-spring-beans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-application-context-and-spring-beans?u=76281980&t=0)** - [Instructor] So let's see what we can do by adding [[Spring Framework]], Spring context to our POM XML file. So here we've added the dependency of Spring Framework, and now in our application, we're actually going to have this new line here that instantiates a application context. And here, we're passing a class SpringBeans.class. And this is where we're going to have our configuration of our [[Dependency Injection]]. So here's our SpringBeans class and we have an @ annotation of configuration of this class. And then we're going to set up the dependency between the classes. So we have the instantiation of a tourRepository and it's a Spring bean, and we have a tourManagementService, which is dependent on tourRepository. So we're passing in the method of creating the tourRepository object. And the same thing with TravelAgentService. It needs the tourRepository as well. So back in our application class, all I do is instantiate the application context, passing that SpringBeans class. And then from that context, I say get bean and I want the TravelAgentService class. It'll have within the [[Spring Boot]] container that object. It'll look it up and pass that TravelAgentService. And I'm going to call it agent.
>
> **[1:33](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-application-context-and-spring-beans?u=76281980&t=93)** And from that agent, it displays tours and displays the ToursBy isKidFriendly. So I have some break points here and I have break points in the Spring bean. So you'll actually see whenever we instantiate the application context, that it will invoke those constructors. First, it knows because everything depends on tourRepository. It constructs tourRepository first. Now I'm going to continue. Next, it constructs the tourManagementService. Next, it constructs the TravelAgentService. Keep going. I'm back in my main class, step over it. And now I have my travel agent object and it's a singleton. And so I could just hit Go and it will invoke those methods to print out those tours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (2), [[Dependency Injection]] (1), [[Spring Boot]] (1)
> **Code Identifiers:** tourrepository (6), tourmanagementservice (2), iskidfriendly (1)
> **Env Vars:** pom (1), xml (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Spring autowiring annotations](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-autowiring-annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-autowiring-annotations?u=76281980&t=0)** - [Instructor] Another way that we can use [[Dependency Injection]] and configure it is with autowiring. And this is what we're going to do now is I'm going to edit the TourRepository, and this is on the 01_03b branch. And so I'm going to, at the top of that TourRepository, I'm going to add the annotation repository. And that's an artifact of a stereotype of repository. And now I'm going to, for the TourManagementService, I'm just going to say @Service. And I'm going to on the TravelAgentService say @Service. So these are just stereotypes, which gives a message to Spring that says, okay, for this service, I have this dependency TourRepository. And the Spring application context will know, okay, this TourRepository, it has an annotation on it as well. So this is annotated as a Spring bean as well. So this will autowire, it will inject this dependency automatically. So just by having those three annotations, and these boil down to just components, calling it repository or calling it service, that really doesn't matter. That's more of a clue to the developer to do that. So because we have those three annotations, we can delete the SpringBeans class. And then back in the application we're just like, okay, we have a compile error, of course, because we deleted the SpringBeans class.
>
> **[1:35](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-autowiring-annotations?u=76281980&t=95)** So we're going to edit this. And what we're going to say is we're going to use package scanning. So it's going to say, okay, from what package, from what base package am I going to start scanning for Spring beans, scanning for those annotations? So I'm just going to use this. I could, you know, hard code this here, but I'm just going to say from the application class, this application class getPackageName. So that if this gets refactored later, I don't have to have that hard coded in there. And save it and then delete the import for SpringBeans. And I'm going to put a break point in the constructors to show that these get invoked on their own and debug this application. It automatically called the TourRepository constructor and it autowired the TourRepository into the TourManagementService and creates all those tours and the TravelAgentService autowired the TourRepository in that constructor. And then here we are in the main method, we're going to say, okay, give me the TravelAgentService and do everything it was doing before to display the tours
>
> **[3:11](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-autowiring-annotations?u=76281980&t=191)** and display the kid-friendly tours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (1)
> **Code Identifiers:** getpackagename (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Challenge](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge?u=76281980&t=5)** - [Instructor] Okay, I have a challenge. It's your turn. Let's see if you can do this, and I'm sure you can. So I want you to invoke the TourManagementService.createTour within the application [[Java]] class. So pull the tour management service object out of the container, create a new tour, and have the tour called Zoo Tour with the price 100 and the kid friendly is true. And here in the branch, 01_04, is where you would do it and it's right after this, pulling the bean of Travel Agent Service. Let's see if you can get the Tour Management Service off of the context and then create the zoo tour.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** createtour (1)
> **Speakers:** - [instructor] (1)

#### [Solution](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution?u=76281980&t=0)** - [Instructor] Did you figure it out? So on line 15 is the answer. So, we invoke the context.getBean to get the TourManagementService object, and we name that object manager. And then, from manager, we invoke createTour for the Zoo Tour where the price is 100, and it is kid friendly. And then it just prints them out. So, this time, I'm going to show you how to build it and run it from the command line. Make sure that you are in the tour-service folder, and we are on branch 01_05. mvn clean install. So it's going to build it, make sure it downloads any dependencies that it needs, and then we're going to launch the jar. So if you look at the target folder, we've bundled the tour-service, as well as any dependencies, into one jar so we can just do it on one command line. So [[Java]] -jar target, tour-service,
>
> **[1:09](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution?u=76281980&t=69)** - jar-with-dependencies.jar. And there we printed it, and there is Zoo Tour. Awesome.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **CLI Commands:** make (2), mvn (1)
> **Code Identifiers:** getbean (1), createtour (1)
> **Tools:** command line (2)
> **Speakers:** - [instructor] (1), - jar (1)
> **Prerequisites:** install (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Create a Spring Boot Microservice

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Spring Initializr](https://www.linkedin.com/learning/creating-spring-boot-microservices/introduction-to-spring-initializer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/introduction-to-spring-initializer?u=76281980&t=0)** - [Instructor] In this chapter, we will see how to create a [[Spring Boot]] microservice with Spring Initializr. To build a [[Java]] application, the first step is to create a Java project. Most Java projects rely on third-party dependencies, and these dependencies usually have dependencies of their own. On top of that, each version of the dependency rely on other versions. To avoid JAR hell, we use [[Dependency Management]] systems like Maven or [[Gradle]], but even Maven and Gradle have versioning issues between individual JARs that can be a nuisance. Spring Boot recognizes this and creates the notion of a Spring Boot starter which bundles several dependencies into a grouping that's easier to manage. On top of that, starters make automatic configuration decisions at runtime following convention over configuration. There are a lot, and I mean a lot, of Spring Boot starter dependencies, so even cobbling together a project of your own can be difficult. This is where Spring Initializr comes to the rescue. Spring Initializr is a tool for creating Spring Boot Java projects. Initializr creates a package structure, the pom.xml for Maven or build.gradle for Gradle files, and any required Java source classes. For our first Spring Boot microservice, we will employ five Spring Boot starters.
>
> **[1:35](https://www.linkedin.com/learning/creating-spring-boot-microservices/introduction-to-spring-initializer?u=76281980&t=95)** Web, which includes Tomcat and Spring MVC, [[Representational State Transfer (REST)|REST]] Repositories to expose [[Spring Data]] repositories over REST, Spring Data JPA to form our object to relational mapping, Lombok, which is a handy library to generate our getters and setters and loggers, and H2, an in-memory database driver. We will start coding our first Spring Boot application with H2 and then later move on to a real persistent relational database. After answering all of the questions in Spring Initializr and selecting the desired dependencies, it generates the project for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (8), [[Java]] (5), [[Gradle]] (4), [[Representational State Transfer (REST)|Rest]] (2), [[Spring Data]] (2)
> **Env Vars:** rest (2), jar (1), mvc (1), jpa (1)
> **File Paths:** pom.xml (1), build.gradle (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### [Project setup](https://www.linkedin.com/learning/creating-spring-boot-microservices/project-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/project-setup?u=76281980&t=0)** - [Instructor] So now we're actually going to use Spring Initializr to create our project. I'm on branch O2_O2b, and I just wanted to tell you that I have removed all of the tour service projects that we worked on the last chapter. We're not going to need that anymore. So we're going to navigate to the Spring Initializr, start.[spring.io](https://spring.io). And here's the Spring Initializr UI. The language we'll select is [[Java]]. [[Spring Boot]] version is 3.2.5. And we're going to use Maven. Our group is going to stay, com.example. Our artifact ID is going to be explorecali-jpa,
>
> **[0:45](https://www.linkedin.com/learning/creating-spring-boot-microservices/project-setup?u=76281980&t=45)** and I'm going to make a note here. This is the Explore California, Relational Database Microservice. And then the package name is com.example.explorecali,
>
> **[1:03](https://www.linkedin.com/learning/creating-spring-boot-microservices/project-setup?u=76281980&t=63)** I'm going to remove the dash, just jpa in there. And now let's add dependencies. If we click this, we can see some of the, lots of dependencies here, but I already know what I want. So I'm just going to start typing web, Spring Web, also [[Representational State Transfer (REST)|Rest]] Repositories,
>
> **[1:29](https://www.linkedin.com/learning/creating-spring-boot-microservices/project-setup?u=76281980&t=89)** [[Spring Data]] JPA, Lombok, and our database driver we'll need is H2. And we've got, we want to package into a Jar, and the version of Java we're using is 21. So I just want to show if you click EXPLORE, it'll actually break down the folder service that it will generate for you. So let's look at first, here's the package structure, the explorecalijpa application file. It's not a very large file, but two things jump out at us. This is a Java class that has a main method, and there is an @SpringBootApplication annotation. If you've been writing Java web applications for years, it's probably been a long time since you've written a class with a main method. This is a major paradigm shift. We get the control back. We are no longer writing code that has to be packaged into a War and then deployed on a web or application server. The web application server is within our application. Adding SpringBootApplication annotation to this class with the web dependency, and this main method, tells Java and Spring Boot that this is where our microservice starts.
>
> **[3:04](https://www.linkedin.com/learning/creating-spring-boot-microservices/project-setup?u=76281980&t=184)** Command line parameters or special startup logic resides here. Other things we can look at is the POM file. There's the POM file with all of our starters. So if we close that and if we do GENERATE, it will generate a Zip file. And what I have in back in our [[Codespaces]], if I change to branch O2_O2e, there is the code generated from Spring Initializr. One thing I did want to add that I changed here as well is that the version of this, I changed it from the default, which was a snapshot version, it's going to be 3.0.0. So with this one POM file and this one Java source file, we can now build and run a project as a Spring Boot application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Spring Boot]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Spring Data]] (1), [[Codespaces]] (1)
> **Env Vars:** pom (3), jpa (1), explore (1), generate (1)
> **Versions:** 3.2.5 (1), 3.0.0 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Tools:** command line (1)
> **Exercise Files:** zip file (1)

#### [Build, deploy, and launch the microservice](https://www.linkedin.com/learning/creating-spring-boot-microservices/build-deploy-and-launch-the-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/build-deploy-and-launch-the-microservice?u=76281980&t=0)** - [Instructor] So here is our IDE and we're on branch 02_03. And here all of our code is there. So let's actually build this. Make sure you're in the proper folder. I'm going to explorecali-JPA. And now, let's compile it. It's going to build, it's going to run the built-in J unit test, which we'll talk about another time. And it built to success. Let's look in the target folder. And there's our jar, this is a fat jar. Everything is in that one jar file that we need to run. So let's run it. We will run that, so we see a message about spring. A lot of thing, initializing going on here. Move this out of the way, we see a message that Tomcat, which is our web server, is started on port 8080. That's what I was saying, the Tomcat web server is bundled within the application within the JVM of this jar. And the last message we know is a started explore cali application. I'm going to go to another terminal, and I'm going to issue the curl command and localhost 8080. So this is a port within the virtual machine of code spaces. And what we see here is that our application is now accepting requests. And what it prints for this get command
>
> **[1:36](https://www.linkedin.com/learning/creating-spring-boot-microservices/build-deploy-and-launch-the-microservice?u=76281980&t=96)** of this localhost 8080 is a [[JSON]] message. And don't worry about the meaning of this message. It's basically saying, "I'm alive." If there was any problem, we would see a response from, like a message says, site can't be reached, or something like that. I'm going back to the terminal where I started this. I'm just going to hit control C to stop that. And then this is the beauty of a microservice. It's completely self-contained with a runnable single command, and this makes it a favorite of the [[DevOps]] and [[Cloud Computing]] crowds. Without implementing any explore cali solutions, we could see that the [[Spring Boot]] project is already equipped with the basic plumbing required by most web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[DevOps]] (1), [[Cloud Computing]] (1), [[Spring Boot]] (1)
> **Env Vars:** ide (1), jpa (1), jvm (1), json (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1), curl (1)
> **Tools:** terminal (2)
> **Ports:** port 8080 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add the Actuator dependency](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-add-actuator-dependency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-add-actuator-dependency?u=76281980&t=0)** - [Instructor] It's time for a challenge. So we're in branch 02_04 and we want to add another dependency and it's called Actuator. So how you would start to do this is go into Spring Initializr and within, now let me get back here, so within the "add dependencies," I will spell it out for you and actually is written right there, Actuator, as a suggestion. [[Spring Boot]] Actuator. So, I want you to select that. Go to the explore in the pom.xml within the website, find the actuator dependency that it's added, and then come back and paste it into the pom.xml within one of these dependencies, within the dependency tag. Once you do that, then we'll run the application and we'll see what Actuator does for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (1)
> **File Paths:** pom.xml (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add the Actuator dependency](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-add-actuator-dependency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-add-actuator-dependency?u=76281980&t=0)** - [Instructor] Did you get it? I'll show you what we had to do. So select [[Spring Boot]] Actuator, and then go to EXPLORE, into the pom.xml, and let's find it, here's the dependency actuator, you just copy that and paste it. And here in the 02_05 branch, we see the dependency added spring-boot-starter-actuator. Let's compile and run that, make sure we are in the explorecali folder, clean and install to build that again. And run the jar, just wait for it to make sure that it's ready. Tomcat started. Go back to our other terminal, and now we're going to say curl localhost:8080/actuator/health.
>
> **[1:06](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-add-actuator-dependency?u=76281980&t=66)** And it gives a status, UP. So Actuator is a very useful tool to basically do a health check to see that, okay, has this microservice, has it bootstrapped everything properly? Is it ready to go? 'Cause it might be running but maybe it's not bootstrapped properly. So everything is ready to go and it's ready to accept requests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (1)
> **CLI Commands:** make (2), find (1), curl (1)
> **File Paths:** pom.xml (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)
> **Ports:** :8080 (1)
> **Env Vars:** explore (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)


### 3. Leverage Spring-Data-JPA Repository Interfaces

[↑ Back to Table of Contents](#table-of-contents)

#### [The domain model](https://www.linkedin.com/learning/creating-spring-boot-microservices/the-domain-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/the-domain-model?u=76281980&t=0)** - [Instructor] Before we can start implementing the solution for the Explore California RESTful Web Service, we need to flesh out the domain model from the ubiquitous language. This is the terminology used by the stakeholder. A big help is to look at the Explore California's current website, specifically in the [explorecalifornia.org/tours](https://explorecalifornia.org/tours) page. The primary entities are tour packages and tours. So here is a list of tour packages, which is a collection of tours, for example, Backpack Cal, California Calm, California Hotsprings, Cycle California. And then if I drill down into Backpack Cal, for example, I see Big Sur Retreat and it's three days and it's $750, and a description of it, the rating, if it's a medium, high or low, and then how many days it is. And it's also some difficulty and ease that that's what the rating is, is how difficult it is or not. And then looking at this website, I've defined the following classes. So I've defined the following classes, and I have them in this class diagram. And with this class diagram, which will show you the attributes in the classes and how they relate to each other, the central artifact is a tour. A tour has a title, a description, which is a short explanation, a blurb, which is a longer explanation, a price, a duration,
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/the-domain-model?u=76281980&t=94)** a comma-separated list of bullet points, and keywords used for searching tours. We also see that a tour has a region and a difficulty. Region is modeled as an enumerated type, where the possible values are Northern_California, Central_Coast, Southern_California, and Varies. Difficulty is modeled as an enumeration as well, where the possible values are Easy, Medium, Difficult, and Varies. Tour is associated with one tour package, but a tour package is associated with several possible tours.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5)
> **Analogies:** for example (2)
> **URLs:** [explorecalifornia.org](https://explorecalifornia.org) (1)
> **Speakers:** - [instructor] (1)

#### [The persistence entities](https://www.linkedin.com/learning/creating-spring-boot-microservices/the-perstence-entities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/the-perstence-entities?u=76281980&t=0)** - [Instructor] Now that we've established the business classes for the domain model, let's see the persistence entities. We will use Jakarta Persistence Layer, formally [[Java]] Persistence API for the object to relational mapping. Now I'm on branch 303_02, and I've created this folder called model. And then within that folder are by entity classes. So let's look at Tour and give more view here so you can see more code. So this is a class called Tour. If the Jakarta Persistence API is new to you, or you do not recognize the @Entity or @ID annotations, I suggest you hop over to the Java Persistence with JPA course in the [[LinkedIn]] Learning Library. It's pretty good. All the attributes in the class are presented here, plus the generated id, all these attributes and the generate id, and then a constructor on one line, and it takes all the fields and initializes the attributes of those fields. And then we have the many to one relationship to a tour package. Now let's look at region. Region is an enum and it's different enumerations are Central Coast, Southern California, Northern California, and Varies. And difficulty is also an enumeration. And that's where we have, whether it's Easy, Medium,
>
> **[1:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/the-perstence-entities?u=76281980&t=97)** Difficult, or Varies. And finally is the tour package. And this is an entity, and this will be mapped to the tour package table. It has an ID that is a string because it's not generated, we're going to provide it. That's a more static value. And then a string, that's the name, is there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[LinkedIn]] (1)
> **Definitions:** is a  (2), is an  (2)
> **Env Vars:** api (2), jpa (1)
> **Speakers:** - [instructor] (1)

#### [Declare JPA repositories](https://www.linkedin.com/learning/creating-spring-boot-microservices/declare-jpa-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/declare-jpa-repositories?u=76281980&t=0)** - [Instructor] Using just JPA, the next step would be creating services which invoke the entity manager to create read, update, and delete entity objects. Instead, we are going to use [[Spring Data]] JPA framework and we'll see how Spring Data JPA gives us better functionality while writing less code. In the last chapter, we chose to include the Spring Data repository dependency, Spring Data abstracts away from any particular data source by following a repository pattern. Now we're actually going to see the implementation of that pattern. Spring Data starts with a [[Java]] repository interface with two bounded type parameters. The first type, T, is the entity class name, and the second parameter ID is the type of the unique ID of the entity. The repository interface is just a marker without any methods. Crudrepository is a Spring Data artifact common to many types of data sources. It extends from repository and declares methods that create update, read, and delete entities, which inherit the bounded type parameters. ListCrudRepository declares more methods that use list collections instead of iterables. JpaRepository interface extends from ListCrudRepository and adds even more methods specific for relational database data sources.
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/declare-jpa-repositories?u=76281980&t=94)** For our domain, we will extend TourPackageRepository and TourRepository from JpaRepository. The first bounded type parameter for TourPackageRepository would be TourPackage and the ID of the Tour Package is of type string. The first bounded parameter for TourRepository would be a tour and the ID of the tour is of type integer. Now let's add those to the project and I'll show you the different methods declared by default from those interfaces. So let's add those repositories. Now in, it's a new folder called Repo under Explore Kelly JPA, and I'm going to create two new files. A new file is tour package repository.java, and this is an interface and we're going to say extends CrudRepository with TourPackage as the first parameter and string as the second one. And we want to import the tour package. Okay, and now let's create one for tour.
>
> **[3:04](https://www.linkedin.com/learning/creating-spring-boot-microservices/declare-jpa-repositories?u=76281980&t=184)** Extends. Tour. And that's an integer, ID. Now I'm just going to use my IDE to show you some of the methods to come just with a CrudRepository. So I'm going to right click and do source action and override implement methods and look at all of these methods we have. We have count, delete, finds, exists and saves. Those are the things that come from the CrudRepository. Now I'm going to change it and let's see if we change this to JpaRepository
>
> **[3:54](https://www.linkedin.com/learning/creating-spring-boot-microservices/declare-jpa-repositories?u=76281980&t=234)** Source action override implement methods, and then we get some extra methods there. We get find by one as well as flush, which would save in flush, which are specific to JPA, and then the finds, return list values instead of iterables. And so because we like all those methods, let's go back and change TourPackageRepository to extend from JPA repository. And get rid of those imports. That's not necessary. Okay, we got our repository interfaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (6), [[Java]] (2)
> **Env Vars:** jpa (6), ide (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** repository.java (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Spring Data JPA repository dependency injection](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-jpa-repository-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-jpa-repository-dependency-injection?u=76281980&t=0)** - [Instructor] So now, let's inject the repositories into Spring bean services. In the exercise files, I have a new folder called business, and we're going to have our business logic and two services, TourPackageService and TourService. So TourPackageService, I've annotated this as a Spring bean with the @ annotation and remember auto wiring, it will auto wire the tour package repository 'cause it will recognize that the tour package repository automatically is a Spring bean. You don't need to annotate it with repository, it's known by [[Spring Data]] JPA. It's going to put it into the constructor, and now let's populate this createTourPackage method to actually invoke our tour package repository. So we're going to say tourPackageRepository.findById, because we want to look up to see if this tour package exists already, and if it does, then we'll return it, otherwise we'll create a new one. So let me have that auto complete happen again, findById, find it by the code orElse, leveraging optionals, orElse, we're going to invoke the repository to create it in the database, so tourPackageRepository.save our new entity. Let's put this all on the next line. It's easier to read.
>
> **[1:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-jpa-repository-dependency-injection?u=76281980&t=97)** And we need another end parentheses there. And now, let's do lookupAll, so that would be tourPackageRepository.findAll, returns a list of tour packages, and then the total would be the count. So tourPackageRepository.count. That returns the total number of tour packages. Now in TourService, this is a service that interacts with both tours and tour packages. So, we've have the @Service annotation. It's going to inject the tourPackageRepository and the tourRepository, and now, let's look at the methods we need to populate here. So to create a new tour package, we're going to look it up by the tour package name, and if it's not found, we're going to throw an exception, findById, and the tourPackageName and orElseThrow,
>
> **[2:38](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-jpa-repository-dependency-injection?u=76281980&t=158)** use our lambda to say a new RuntimeException with a message, "Tour package not found for id" tourPackageName. So if it's not found, it'll throw an exception there. And now if it is found, then we will have the tour package, and now we need to save the new tour. And then finally, get the total count of tours.
>
> **[3:15](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-jpa-repository-dependency-injection?u=76281980&t=195)** Excellent, okay, now you might ask, "When do we actually implement the repository interfaces?" You have an interface, which provides a contract. You also need a concrete class to fulfill that contract, right? Yes, that's right, but Spring data does it for us. So it will actually be the Spring data object injected to the services and that object will fulfill our contract for our repository interfaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (3)
> **Code Identifiers:** tourpackagerepository (5), findbyid (3), orelse (2), tourpackagename (2), createtourpackage (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** jpa (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Invoking the repositories](https://www.linkedin.com/learning/creating-spring-boot-microservices/invoking-the-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/invoking-the-repositories?u=76281980&t=0)** - [Instructor] Now let's invoke the repositories by launching the application. So we are in the application main class and we need to load the database with the collection of predefined tours and tour packages. The Explore California Travel Agency provided us with a .[[JSON]] file that represents all the possible tours and it's in the main explorer of ExploreCalifornia. There it is right there. Some of the fields map directly to the fields in our tour entity like title, description, and blurb. However some fields like price, tour package, difficulty, region, those all require conversion and in ExplorecaliApplication, that's where we're going to do that. Our Explorecali web application uses an in-memory database called H2. [[Spring Boot]] connects to H2 with the default when the dependency is provided. We need to load the data each time the application starts. So now we have services to create the tours and tour packages, but how should we invoke them before accepting web requests? Remember this ExplorecaliApplication class? In that class is the main method, the application starting point. Right there. I've already made some changes to this class. I use the @Autowired annotation to inject the tour service and tour package service Spring beans
>
> **[1:33](https://www.linkedin.com/learning/creating-spring-boot-microservices/invoking-the-repositories?u=76281980&t=93)** into the ExplorecaliApplication class. We don't need to tell Spring to scan packages looking for these Spring beans because Spring Boot uses the folder where Spring Boot application is declared. So in this package, com.example.explorecalijpa, that's where it will start the package scanning. The main method does not have access to the services because it's static and is at class scope, not object scope. But what we can do is have Explorecali application, implement the command-line runner interface. Now to fully implement that interface, we have to implement a run method. After the application has successfully launched but before it begins accepting web requests, Spring Boot invokes the ExplorecaliApplication.run method and passes any command-line arguments. We don't use any of these arguments here, but we do want to set up the database before permitting web requests. Since the run method is at object scope, we can access those injected services. And what we'll do is create our tour packages, then create our tours. And after each one of those, I'm going to call the service to say the total number of packages and the total number of tours. So here I am invoking a private method called createTourAllPackages. So these are all hard coded with a code and a name of a tour package.
>
> **[3:07](https://www.linkedin.com/learning/creating-spring-boot-microservices/invoking-the-repositories?u=76281980&t=187)** BC's the name for Backpack Calm, et cetera. And then there's a private method called createToursFromFiles, which is passed the name of the file. And you don't have to know all the details of that, but we're using a record and a static method on it, and the records called TourFromFiles where we have the mapping of each of the fields that are in that JSON file. And then use the object mapper to map the JSON to a TourFromFiles record object. And then from each of those, when they're imported, invoke the tourService.createTour method passing in those attributes and create each one. So I'm going to run this in debug and I have a break point in the main method and in the run method. And I find it easier to use the Spring Boot extension in [[Codespaces]] to run in debug. So I go up here and here Codespaces has explorecali. Select it, and I'm going to say Debug. And right away, bang, it hit main very quickly because that's the first thing to do. So I'm just going to hit proceed. See, I'll show the console here of what's going on. There's a lot of bootstrapping going on. So now we're in the run method and we're going to invoke the createTourAllPackages private method. And now we're going to say,
>
> **[4:39](https://www.linkedin.com/learning/creating-spring-boot-microservices/invoking-the-repositories?u=76281980&t=279)** "Okay, how many packages are persisted?" And it'll print it down to the console right here. So it persisted nine packages. Now I'm going to run the createToursFromFile. And it hit that break point there. I'm just going to take that break point away and say go. And look. Oh my goodness, we have an exception. Let's look at the details of the exception. It says, "RuntimeException: Tour Package not found for id:Backpack Cal." So let's try to debug what's happened here. So whenever the createTour, let's drill down into that createTour, is invoked. This is the method. First we look up a tour package. And if it can't find it by the ID it says, "Tour package, not found for id:" + tourPackageName. But here's the problem, and I've done this on purpose just to try to help understand querying. The ID is not passed in, it's the name. Backpack Cal is the name. The ID, if you remember, is BC. But we don't have in the JSON file, we only have the name. So we need to create something called a query method that will look up a tour package by the name. So here's how we do this. We'll go into the repo.
>
> **[6:11](https://www.linkedin.com/learning/creating-spring-boot-microservices/invoking-the-repositories?u=76281980&t=371)** Go to the TourPackageRepository. And I'm going to add a new method. And what I want to do is say find the tour package by name, and if it doesn't find it, then the optional will be empty. And let's call it findByName. Passing in a string of name. And then have a change the tour service. Instead of saying findById say findByName. Okay. And let's run this again. And I'm just going to say Run this time instead of Debug. So it starts the Spring Boot application. And oh, okay, we got Persisted Packages 9 Persisted Tours 30. It's working, and it's now accepting web requests. Is it a miracle? Well, no, it's not magical at all. Spring implements the method for us under the covers to follow the rules for declarating the methods. Because we didn't add any [[SQL]] at all. We just declared a method on an interface. Let's find out what the rules that we have to follow to create a [[Spring Data]] query method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (6), [[JSON]] (4), [[Codespaces]] (2), [[SQL]] (1), [[Spring Data]] (1)
> **Code Identifiers:** createtour (3), createtourallpackages (2), findbyname (2), createtoursfromfiles (1), tourservice (1)
> **CLI Commands:** find (5)
> **Env Vars:** json (4), sql (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to Spring Data query methods](https://www.linkedin.com/learning/creating-spring-boot-microservices/introduction-to-spring-data-query-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/introduction-to-spring-data-query-methods?u=76281980&t=0)** - [Instructor] For general purpose database lookups, the built-in find all and find one repository methods are sufficient. But what do we do if we want to look up all easy tours or all tours less than $800 or both, do we have to create ugly [[SQL]] scripts? No, [[Spring Data]] property expressions to the rescue. We just de declare methods for our JPA repository interface, then via bean utils reflections and generics, spring data implements the method under the covers for us. However, we must follow the syntax rules when declaring methods and correctly map the entity properties to the method signatures. So these are the rules when using property expressions to query for entities. First, we have to declare the return type for a single value. It can be the actual class or an optional of it. For multiple, a collection. Then you need to begin the method signature with findBy, followed by the property name in camel case. Optionally, chain sub property names following camel case rules. For example, in the tour repository interface, findByRegion and findByTitle. You can also perform record count queries with property expressions. Same rules as entity queries, but a long value is returned and the method starts with countBy. For example, in tour repository, we can get the total number of tours in a region or at a certain price.
>
> **[1:38](https://www.linkedin.com/learning/creating-spring-boot-microservices/introduction-to-spring-data-query-methods?u=76281980&t=98)** Spring data facilitates fast failure. Query methods are verified at bootstrap. Here, tour package has no attribute name title. Spring data throws a spring data query creation exception at application startup. The method signatures can include logical expressions such as findByRegionAndDifficulty where the parameters are region and difficulty. You can have operators. So all tours less than a certain price would be findByPriceLessThan, and then give a maximum price as an integer. You can also sort, find all tours and sort them by title alphabetically and that would be findByTitleOrderByTitleAscending. And even apply limits. Find by the highest price tour, findTopByOrderByPriceDescending. For a full description of all the types of property expressions, see the spring data query method reference. And on this page, you can see all the different possible query methods and operators and expressions that you can add. And in the [[LinkedIn]] Learning library, there is a full class on spring data with two whole chapters devoted to spring data query methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (8), [[SQL]] (1), [[LinkedIn]] (1)
> **Code Identifiers:** findby (1), findbyregion (1), findbytitle (1), countby (1), findbyregionanddifficulty (1)
> **CLI Commands:** find (4)
> **Analogies:** for example (2), such as (1)
> **Env Vars:** sql (1), jpa (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a JPQL query method](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-create-a-jpql-query-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-create-a-jpql-query-method?u=76281980&t=5)** - [Instructor] So I have a challenge for you in the TourService class. I have two new methods on the service. One is called lookup by difficulty and lookup by package, and they are currently returning empty lists. And I want query methods on the tour repository that will look up all the tours by difficulty, and then look up a list of tours by a certain package name. See if you can add two methods that do that and then invoke them in this service.

> [!info]- Semantic Content
>
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a JPQL query method](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-create-a-jpql-query-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-create-a-jpql-query-method?u=76281980&t=0)** - [Instructor] Did you figure it out? The full answer will be in branch 03_08, but I'm just going to code it right in front of us now so you understand completely. So I'm going to add a new method called List Tour findByDifficulty. And this is kind of nice because I've installed the [[Spring Boot]] extension, it auto-populates with IntelliSense the attribute that is allowed. But if you don't have that, that's okay. So findByDifficulty because on a tour, there is a difficulty attribute, so we just say findByDifficulty and use camel case on there. So I need to include that import. And the next one is Tour findByTourPackage. Let's look at the attributes of the tour again. So we have a TourPackage attribute, but we want to find it by the code. So if we drill down into TourPackage, there's the code attribute. So if we just chain them together following camel case rules, so TourPackageCode,
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-create-a-jpql-query-method?u=76281980&t=94)** passing in the string for the code, and that's the proper syntax. So let's invoke the TourRepository findByDifficulty, passing in the difficulty, and tourRepository findByTourPackageCode
>
> **[2:03](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-create-a-jpql-query-method?u=76281980&t=123)** passing in the TourPackage code. And let's run this just to verify that we got our syntax correct. And if we didn't, Spring Boot would just tell us at startup. We don't even need to invoke those methods. It started up and it's accepting web request. There's a log here that prints all the names of the tours and the number of tours, so we're good to go. And we can now accept web requests on Port 8080.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2)
> **Code Identifiers:** findbydifficulty (4), findbytourpackage (1), tourrepository (1), findbytourpackagecode (1)
> **CLI Commands:** find (1)
> **Ports:** port 8080 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Expose RESTful API's with Spring Data REST

[↑ Back to Table of Contents](#table-of-contents)

#### [Create APIs with Spring Data REST](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-apis-with-spring-data-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-apis-with-spring-data-rest?u=76281980&t=0)** - [Narrator] In this chapter, we will learn about [[Spring Data]] [[Representational State Transfer (REST)|REST]], which is a service for creating hypermedia-driven RESTful APIs. What is a hypermedia-driven RESTful API? According to Roy Fielding, who first published the REST API specification, an API is not truly RESTful unless we follow a uniform interface. One of his constraints for a uniform interface is followed when hypermedia as an engine of application state, or HATEOAS, is employed. A RESTful API should do more than expose resource endpoints over HTTP. It should also expose API's documentation and automatically provide navigation between resources. Hypermedia-driven APIs accomplish just that. The implementers of Spring Data REST agreed, and that's why Spring Data REST APIs are hypermedia-driven out of the box. No extra configuration is needed. In fact, you've seen it in action already. Remember a while back when we tested to see if a microservice was running properly? We invoked the localhost:8080/profile endpoint, and it generated this [[JSON]] response. This is an example of that out of the box support. Localhost:8080/profile is an active link to the documentation the API exposes by the microservice. Spring Data REST employs hypermedia application language, or HAL standard to associate resource objects
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-apis-with-spring-data-rest?u=76281980&t=94)** to one another.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (5), [[Spring Data]] (4), [[JSON]] (1)
> **Env Vars:** api (6), rest (5), hateoas (1), http (1), json (1)
> **Definitions:** is a  (2), is an  (2)
> **URLs:** [localhost:8080](https://localhost:8080) (2)
> **Ports:** :8080 (2)
> **Documentation:** specification (1), the documentation (1)
> **Speakers:** - [narrator] (1)

#### [Mapping API endpoints to repositories](https://www.linkedin.com/learning/creating-spring-boot-microservices/mapping-api-endpoints-to-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/mapping-api-endpoints-to-repositories?u=76281980&t=0)** - [Instructor] So what does [[Spring Data]] [[Representational State Transfer (REST)|REST]] actually do for us? Similar to Spring Data JPA, which extrapolates the underlying backend data store services from a CRUD repository, Spring Data REST exposes the same repositories as web services with no extra coding or configuration. All we need to do is add the Spring Data REST starter dependency to the palm, rebuild the application, and start it. And that's when the magic happens. An application startup after Bootstrap, Spring Data REST finds the JPA entities that have the Spring Data repositories, creates an endpoint that matches the entity name, appends an s to that endpoint, and exposes methods as RESTful resource APIs over HTTP. So let's see how HTTP verbs GET, POST, PUT, PATCH, and DELETE maps to our repository methods. FindAll, findById are mapped to HTTP GET. So for our TourRepository, HTTP GET /tours invokes tourRepository.findAll(). GET /tours/5 will return the Tour with the ID 5. JpaRepository lookup methods allow for paging and sorting. So the tours endpoint also has paging and sorting parameters. HTTP POST creates entities. The [[JSON]] request body maps to the save method. HTTP PUT and PATCH modifies an existing entity.
>
> **[1:40](https://www.linkedin.com/learning/creating-spring-boot-microservices/mapping-api-endpoints-to-repositories?u=76281980&t=100)** PUT modifies all non-ID elements of an entity. PATCH modifies some elements. So a staff member of identifier two, Spring Data REST must first look up that member, and apply the modifications. And finally, HTTP DELETE of the endpoint maps to the repository .delete method. The response body returns hypermedia-enabled JSON content. The relationships, even if the JPA entity is a [[Fetch]]-type EAGER, contains the endpoint of the relationship. So the tourPackage attribute is actually a link to fetch the tourPackage details. So what about query methods? Can they be invoked from Spring Data REST? Of course, they can. After the resource name, add slash, search, slash the method name and the method parameters as query parameters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (8), [[Representational State Transfer (REST)|Rest]] (6), [[JSON]] (2), [[Fetch]] (2)
> **Env Vars:** http (7), rest (6), jpa (3), put (3), patch (3)
> **API Endpoints:** delete  (2), get  (2), put  (2), patch  (2), post  (1)
> **Code Identifiers:** tourpackage (2), findbyid (1), tourrepository (1), findall (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Override default behavior](https://www.linkedin.com/learning/creating-spring-boot-microservices/override-default-behavior?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/override-default-behavior?u=76281980&t=0)** - [Instructor] Now let's look at ways to override the default [[Spring Data]] [[Representational State Transfer (REST)|REST]] behavior. How about the endpoint name? In this example, for an entity called staff, the default mapping for the staff entity is the staffs endpoint. Staffs is not proper English as staff is already plural. Thankfully, we can override the default endpoint name with a RepositoryRestResource annotation. So that's what we have here is @RepositoryRestResource, and we're saying that the path is staff, and any other children that reference that will be referenced as staff. We can also modify the schema of the response body by creating a projection interface. Here is a projection called showSummary that only exposes the title, price, and duration of a tour. Now invoking the /tours endpoint with the projection=showSummary, we only see those three attributes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** showsummary (2)
> **Env Vars:** rest (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Swagger UI](https://www.linkedin.com/learning/creating-spring-boot-microservices/swagger-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/swagger-ui?u=76281980&t=0)** - [Instructor] So what tools in our developer toolbox should we use to invoke the APIs? Here are some examples. There are command line tools like curl or HTTPie. Chrome has a plugin called Advanced Web Client. There are desktop applications like Postman or Fiddler. IntelliJ has an HTTP client. Visual Studio has a Thunder client. But the easiest way is to bundle a client library into the microservice, which automatically discovers the endpoints and presents them on a UI. There are several ones to choose from, but in this course, we're going to use springdoc-openapi. The openapi specification is a standard for documenting, consuming, and visually interfacing with machines. Swagger is a tool that implements the openapi specification. springdoc-openapi is a library that includes Swagger to dynamically generate [[Spring Boot]] API documentation. Since the beginning of this chapter, I've already added to the library in the pom.xml, the dependency for openapi, and it is this springdoc-openapi-starter-webmvc-ui. And that's appropriate, because this is a web MVC microservice. So what does this actually do? Let's run our application. First, make sure that it's built.
>
> **[1:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/swagger-ui?u=76281980&t=97)** So now it's built with this new dependency, and I'm going to invoke it at the command line with just the regular [[Java]] command. So it's going to start up, and whenever it's ready to accept requests within [[Codespaces]], I'm going to get this little popup that says if I want to open this in a browser, if you're just using the [[GitHub]] repositories and running locally, the endpoint on the browser you would use is just a local host, calling 8080. But in Codespaces, it automatically generates for this virtual machine an endpoint that's exposed publicly. And so my Codespace name is bookish-fishstick, and then it adds this unique ID on there and then it's saying it's on 8080 port. And now that we've added some Spring Boot RESTful repositories, now we see the tourPackages endpoint exposed on this default profile endpoint. So now let's go to Swagger. So I'm going to add to the endpoint swagger-ui/index.[[HTML]]. And here is a new webpage that this is invoked on our microservice, and it is showing all of the public endpoints that you can invoke on our microservice. So we have the profile that's just showing some documentation about our endpoint. So let's get our tourPackages. So we click down and drill into here and say, try it out.
>
> **[3:12](https://www.linkedin.com/learning/creating-spring-boot-microservices/swagger-ui?u=76281980&t=192)** And if we wanted to add paging, we don't really need that. If we wanted to filter by a certain number, we don't have to, then just like execute. And here are all of our tour packages. If we wanted to add a tour package, let's create one. I'm going to create one called California Zoos. The Swagger knows what the schema is of the data, so it just provides an example in there and I just can type that in, execute that endpoint, and now we have California Zoos and the response body comes back. And so here is the endpoint. If I wanted to drill down into looking at a California zoo, I can get that. I'll put it over here and just see it come right up in the browser as well as within the Swagger. If I wanted to access it directly, I could say CZ here, there it is. If I wanted to edit it, I could do that.
>
> **[4:31](https://www.linkedin.com/learning/creating-spring-boot-microservices/swagger-ui?u=76281980&t=271)** Therefore it's now Cal Zoos. And then finally, if I wanted to delete it,
>
> **[4:46](https://www.linkedin.com/learning/creating-spring-boot-microservices/swagger-ui?u=76281980&t=286)** and that deletes the endpoint. So if I want to go back here to get it again, providing CZ, I get a 404, HTTP response 404, which means not found. If it was created appropriately, I get a 200 back if it was done appropriately. Let's scroll down and show some of our new findByDifficulty method that we added. And because it's an enumerated type, it has a dropdown. It's such a sweet interface. It's great also for internal testing, the testers can test your endpoints with the openapi, just discovering the endpoints that you have. Sweet!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Codespaces]] (2), [[Java]] (1), [[GitHub]] (1), [[HTML]] (1)
> **Tools:** command line (2), postman (1), intellij (1), visual studio (1), github (1)
> **Definitions:** is a  (5)
> **Env Vars:** http (2), api (1), mvc (1)
> **Code Identifiers:** tourpackages (2), findbydifficulty (1)
> **UI Navigation:** go to (1), scroll down (1), dropdown (1)
> **File Paths:** pom.xml (1), swagger-ui/index.html (1)
> **CLI Commands:** curl (1), make (1)

#### [Challenge: Modify the URL repository keyword](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-modify-url-repository-keyword?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-modify-url-repository-keyword?u=76281980&t=0)** - [Instructor] So, I have another challenge for you. As we can see, the tourPackages endpoint, I would like to rename it from tour and then uppercase P packages to just the [[Microsoft Word|word]] packages. So I'd like to challenge you to see if you could do that, and here's a previous slide from another video and words of example of how we change the endpoint of StaffRepo from "staffs" to "staff." So, see if you can make the code change, start up the application and verify it by going to the Swagger page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** tourpackages (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Modify the URL repository keyword](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-modify-url-repository-keyword?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-modify-url-repository-keyword?u=76281980&t=0)** - [Instructor] So here in Branch 04_06, we see the answer to the challenge is we're using the @RepositoryRestResource annotation, setting the path to packages and collection rel resource to packages. Let's build it and run it. Open our endpoint in the browser, /swagger-ui/index.[[HTML]],
>
> **[0:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-modify-url-repository-keyword?u=76281980&t=37)** and there's our new endpoints. Let's get the packages. So now we have the packages endpoint. Awesome.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **File Paths:** swagger-ui/index.html (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Expose RESTful API's with Spring MVC

[↑ Back to Table of Contents](#table-of-contents)

#### [Choosing the right framework](https://www.linkedin.com/learning/creating-spring-boot-microservices/choosing-the-right-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/choosing-the-right-framework?u=76281980&t=0)** - [Instructor] Spring Web MVC is a well-known web tier development framework. But did you know that it can be used to create Restful APIs? This has been possible since its inception, but the implementation resulted in controller classes that were messy and brutal with annotations. That changed with Spring Web MVC version four with introduction of the @RestController annotation. Annotating a class with @RestController tells Spring MVC that this class follows Restful web service stereotypical behavior. A RestController class mediates between web requests and the internals of the application. It is responsible for directing requests to the appropriate services and then sending the response back to the client. In [[Spring Data]] [[Representational State Transfer (REST)|REST]], the framework itself mediates between web requests and the persistent domain model. So what are the reasons you would choose to use and expose an API via the RestController? One reason is that your application is not using Spring Data REST repositories. Another is that your API launches an algorithmic service that is not just used for data retrieval or you need to hide the internal data model from the client, either to limit complexity or for proprietary reasons. And finally, you require a layer of business services between the web tier and the data access tier. Let's walk through the major components of a RestController. Here's how you annotate a class to denote it
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/choosing-the-right-framework?u=76281980&t=94)** as a RestController. It is not necessary, but it follows convention, to have controller as the suffix of the class name. The @RestController annotation is required. The @RequestMapping annotation of the class level gives a base URL for the entire class. For maintainability, each class should map to only one resource. Here the resource is example and the base URL is /examples. To create new examples, annotate a method with @PostMapping. The @ request body annotation on the parameter is the result of the Spring MVC Data Binding and HTTP REST body to a [[Java]] object. By default, the request body is expected to be in [[JSON]] format. Normally HTTP status 200 is returned upon successful completion of the method. This method overrides that with @ResponseStatus annotation. So a successful completion will instead return a 201, which is created status. For a method that fetches all examples, annotate it with @GetMapping. For a method that fetches just one example by ID, use @GetMapping with a path parameter, which is concatenated at the end of the class request mapping. Here it is called ID. Then have a path variable parameter that matches the mapping name. HTTP Put and HTTP Path mappings are available
>
> **[3:10](https://www.linkedin.com/learning/creating-spring-boot-microservices/choosing-the-right-framework?u=76281980&t=190)** for modifying one element. Here, both path variable and @RequestBody are employed. And finally, HTTP delete has a @DeleteMapping. Here we delete one element. So at path variable is provided to denote which element to remove.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Spring Data]] (2), [[Java]] (1), [[JSON]] (1)
> **Env Vars:** http (5), mvc (4), rest (3), api (2), url (2)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Declaring a new RestController](https://www.linkedin.com/learning/creating-spring-boot-microservices/declaring-a-new-restcontroller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/declaring-a-new-restcontroller?u=76281980&t=0)** - So, Explore California wants to add new features. They would like to allow their travelers to rate tours and publish the average score for a tour. They met with our business analyst and myself to describe the new functionality. Then the business analyst translated Explore California's requests into new requirements and four use cases that we'll look at now. The first use case is rate a tour. For a traveler who's participated in a tour, I would like to submit a one to five star score and a comment up to 255 characters and I have a personal customer identifier. This is not an identifier that our company maintains. The customer maintains those IDs. The second use case is, as a traveler who's previously rated a tour, I would like to modify the score or the comment using my personal identifier. The third use case is, as a potential traveler, I would like to view all ratings for a tour. I would like to view all the scores and comments for a tour, and I don't need a personal customer identifier for this use case. And the last new use case is, as a traveler, I would like to view the average score for each tour. I do not need an ID for that use case. And finally, I have some non-functional system requirements. As a front end developer who would be coding this website, I expect that the API to return a 201 when a new rating
>
> **[1:36](https://www.linkedin.com/learning/creating-spring-boot-microservices/declaring-a-new-restcontroller?u=76281980&t=96)** has been successfully created in the database, and I expect the API to return a 400 when a request body is not valid. I got a jumpstart on the code for these use cases. Let me show you my approach. I started looking at the nouns of the use cases, and obviously a big one that jumped out to me was tour rating. And so I have an entity tour rating that will map to a tour_rating database table. And I have a generated identifier that's of type integer. I saw that a tour rating would be associated with a particular tour, so I have a many to one annotation saying that a tour could have many tour ratings. There's a customer identifier that's an integer, a score, and a comment. Next, I have a tour rating repository in the repo folder. I do not want this repository to be exposed to [[Spring Data]] [[Representational State Transfer (REST)|rest]], so I set exported equals false in the repository rest resource annotation. And then I have two methods for the tour rating repository. Find by tour ID, and that will return a list of tour ratings, and find by tour ID and customer ID, and that would return one unique tour rating if it is found. Next, I have tour rating service, whereas the business logic interacting
>
> **[3:11](https://www.linkedin.com/learning/creating-spring-boot-microservices/declaring-a-new-restcontroller?u=76281980&t=191)** between tour ratings and tours. So I want to create a new tour rating. And so here I have the method create new with all the attributes passed in. The unique identifier will be generated, so a tour ID, customer ID score, and comment is passed in. I have this method that's a private method called Verify Tour, and what this will do is if a tour ID is passed in, we want to verify that that really is a tour, so we're going to invoke the tour repository find by ID method, and if it's not found, then a no such element exception will be thrown and it's saying that tour does not exist. So if the tour doesn't exist, a exception would be thrown and we would not even create that tour. Another one is lookup ratings by ID. So this is the unique ID in the database. Next is look up all tour ratings. Every tour rating you can possibly find. Next is lookup ratings for a tour ID. So passing in just the tour ID and we're going to invoke that find by tour ID method using verify tour again. If that tour ID is invalid, that no such element exception is going to be thrown. Update will be, we want to modify a tour rating. So first we want to look up the tour rating by the tour ID and the customer ID, and if, let's see, verify tour rating. That also, if it's not found, no such element exception will be thrown.
>
> **[4:47](https://www.linkedin.com/learning/creating-spring-boot-microservices/declaring-a-new-restcontroller?u=76281980&t=287)** And we're going to modify the comment and the score. We look it up, set the comment that's passed in and the score, and then save it. And then this is the case where they might update either one or the other. They could update the score or the comment, and so an optional is passed in for each of those, and so after verifying that the tour exists for that tour ID and customer ID, and if we have a tour rating, if that score is present in the optional, then we will set the score. If the comment is present, we'll set the comment and then do the save. Here we are deleting a tour rating, first looking up the tour rating by tour ID and customer ID, and then delete it. Get the average score from a tour rating. We're going to find the tour by ID verifying that its tour exists. And then now we have this list of ratings. We're going to stream it and map it to an integer of the score, and then using streams, get the average, and if the average is present that it had ratings on there, then it would return the average as a double. Otherwise, a null would be returned. And then lastly, the jumpstart that I got on this is in, I created the controller, and here is the rest controller. There's no method yet. All we've declared is this @RestController. We have our request mapping as /tours/ they have to provide the tour ID and then ratings,
>
> **[6:24](https://www.linkedin.com/learning/creating-spring-boot-microservices/declaring-a-new-restcontroller?u=76281980&t=384)** and then all of our endpoints will be off of that base URI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Spring Data]] (1)
> **CLI Commands:** find (6)
> **Env Vars:** api (2), uri (1)
> **Code Identifiers:** tour_rating (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### [Create the RestController HTTP POST endpoint](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-post-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-post-endpoint?u=76281980&t=0)** - [Instructor] Now let's implement an API to create a tour rating. But do we want all the attributes of a tour rating to be sent in the request body? Let's look at the tour rating. So here is our tour rating entity. We have the generated ID, a tour, object, customer ID, score, and comment. So the ID for creating will not be passed in. That's going to be generated. The customer ID and the score and the comment, I think that's fine to put in the payload. But I don't think we want to have the client send an entire tour as part of the request body. They would likely just send a tour identifier. So we would like to create a transfer object, a data transfer object, to encapsulate the request body. And that's what I've done in rating DTO in the web folder. So in the web folder, which I've created, there's the rating DTO, and we're in the branch 0503B. And so, here we have the rating DTO and the attributes are score, a comment, and a customer ID and we don't have a tour ID here because that's going to be part of the parameter on the URL. So we can apply [[Java]] validations here. The minimum score is zero, the maximum score is five. The maximum number of characters in a comment is 255, and the customer ID cannot be null.
>
> **[1:36](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-post-endpoint?u=76281980&t=96)** And those are the annotations that we've added for that validation. So whenever this rating DTO is passed to the create method in the [[Representational State Transfer (REST)|rest]] controller, we want [[Spring Boot]] validation to do the validation for us. So that is a new dependency that we're going to add in the pom. And it's spring-boot-starter-validation. And that's in the groupId of springframework.boot.
>
> **[2:12](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-post-endpoint?u=76281980&t=132)** Okay. Make sure that all lines up there. So there's our new dependency that we've added. So next, let's look at our tour rating controller that we looked at in the last video. So here's our rest controller. And now let's create a method to create a tour rating. And now we want to use the path variable tour ID and that's part of this path right there. And now our request body, the end parenthesis there, and our request body will be the rating DTO at request body. And then @Valid will apply the validation and then RatingDto is passed in. So let's import the request body. Part of Java [[Spring Framework]] and Jakarta validation and then the annotations to say this is H to DP post. And then one last thing is once this is successfully created, we want to return HTP status created.
>
> **[3:33](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-post-endpoint?u=76281980&t=213)** So we have our tour rating service injected into this rest controller. So let's invoke that, passing in the tour ID and now the customer ID will be on the rating DTO dot get customer ID. ratingDTO.getScore and ratingDTO.getComment. So we saw in this create new method that if the tour is not found, it will throw an exception. No such method element exception. So we want to catch that exception. And if it's thrown, we want it to return an HTP status not found. So we can do that within our rest controller with an exception handler. So let's create a method that's an exception handler to, and the exception would be for no such element exception. And then the response would be HTP not found. So, not found is a 404 so there's our annotation. So, let's have the method. And, we want to get the message off of the exception and return that. Okay, we've coded that all up. Let's build that. Make sure that we're in the proper folder. Need a bigger terminal window.
>
> **[5:16](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-post-endpoint?u=76281980&t=316)** Okay, so I want to debug it with this Spring Boot dashboard and I've set a break point in our exception handler. Nope, there's an old break point that we had there. Let's keep going. We've got our tours persisted. So let's refresh our swagger page and scroll down. And here is our tour rating controller. It's all created and we just put in a tour ID. I know that there's a tour ID of one and let's say I give it a score of five. The comment was, "It was great." And the customer ID is 23. That's just some number I've made up. Like I said, we're not managing the customer IDs. And we got a 201 created back. Let's see what happens whenever we put in some invalid data. Let's say we have a score of a really big score that's not a valid score to put in and we get a bad request. It's a 400 is returned and about, if our comment is really, really big, let's see if that works. So that's, the comment was too big.
>
> **[6:52](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-post-endpoint?u=76281980&t=412)** And now let's just say that that was great. That was fine. Put a score of two and let's put an invalid tour ID in here. And it's spinning because we've hit the break point. So here is our exception handler because through no such element exception. Hit go and go back to our break point and that returned a 404 and tour ID does not exist. Excellent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (4), [[Java]] (2), [[Spring Boot]] (2), [[Spring Framework]] (1)
> **Env Vars:** dto (6), htp (3), api (1), url (1)
> **Code Identifiers:** ratingdto (2), groupid (1), getscore (1), getcomment (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), go back to (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)

#### [Create the RestController HTTP GET endpoint](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-get-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-get-endpoint?u=76281980&t=0)** - [Instructor] Now let's create two new APIs. One to look all the ratings for a tour and the other to calculate the average score for all the ratings. I think it's best to hide the implementation of tour ratings entity from the API. So we will return a list of tour DTO objects. We're going to do a get mapping. And we're going to return a list of rating DTOs. Let's import the list. So let's get the tour ratings from the database first. From the service. Going to look up ratings by the tour ID. And now we need to convert these tour rating entities into rating DTOs. Okay? And now we want to calculate the average by setting the URL with a slash average at the end. And we will return with a packet of key value pairs of the [[Microsoft Word|word]] average, and then the actual average score. So now we're going to have the slash average at the end of the URL. Import the map. So our key would be the word average. Then we call the tour rating service, get average score, and then pass in the tour ID. So this will return basically a key value player in the form of adjacent string.
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-get-endpoint?u=76281980&t=94)** Okay, let's run it. Okay, it started up fine. Let's go to our swagger page. And so in our tour rating controller, let's me refresh this page. Now we see we have our post methods that we had before. Now we have a get on just getting all the ratings and then get on the average. So let's create a few tour ratings first. On tour ID one. Let's say the score was five and it was great. And a customer ID was two. Create that. Do another one where the score was one, the person said awful, and their customer ID was three. And didn't execute that. Making sure that it's created, yes, that's working. And then let's say somebody else said it was a score of one and it was just meh, and their customer ID was four. Execute that and that created. Now let's invoke our new endpoint to get the ratings, get all of them that we just created for tour ID one. And there's our tour ratings. And now let's get that average.
>
> **[3:15](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-get-endpoint?u=76281980&t=195)** Does it work, the average? Yes, 2.3333, repeating. That looks good to me. I think the customer's going to be happy with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Env Vars:** url (2), api (1), dto (1)
> **Versions:** 2.3333 (1)
> **UI Navigation:** go to (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Create the RestController HTTP PUT, PATCH, and DELETE endpoints](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-put-patch-and-delete-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-put-patch-and-delete-endpoints?u=76281980&t=0)** - [Instructor] Our next task is we're going to do the endpoints for HTTP put and HTTP delete. So now I'm going to do a PutMapping and I'm going to call my method updateWithPut and it will return a RatingDto. And we're passing in a request body. We're going to do the validation as well on that. Gimme a little bit of space there. So we're going to return a new RatingDto, and we're going to invoke the tourRatingService to update the tour rating. So we're invoking this service and then it will return a TourRating entity, which will be used to instantiate a new RatingDto, which will be returned. So that's the end of that method. And now we need DeleteMapping. And what's going to be passed in on the DeleteMapping is a customer ID. So delete any rating for this tour for this customer, the rating that that person has made. I'm going to invoke the service to delete a TourRating by the tourID and the customerID and end that and that does not return anything.
>
> **[1:39](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-put-patch-and-delete-endpoints?u=76281980&t=99)** Okay, looks good, no compilation errors. Okay, let's run it. Okay, we're all there. Let's refresh our Swagger page because we have new endpoints. So there's our delete endpoint and there is our put endpoint. So there's no ratings right now because we start fresh each time. So let's create one for tour ID one, let's say the score is five, the person thought it was great and the customer ID was 23. Execute that. It's created, very good. So let's modify it. I'm just going to copy this request body.
>
> **[2:35](https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-put-patch-and-delete-endpoints?u=76281980&t=155)** So for Tour ID one, this is what we put for the request body before they changed their mind, they gave it a three and said it was meh. Execute that. It's modified, it said it was 23. Let's see all the ratings for that tour. And there is the rating and it's modified. Now let's go down to delete. So here the tour ID was one and the customer ID was 23. We'll delete that. I've got an okay response on that and let's go back all the way to the top to get all of them for tour ID. And we get an empty list back because there's no more rating on there.

> [!info]- Semantic Content
>
> **Code Identifiers:** updatewithput (1), tourratingservice (1), tourid (1), customerid (1)
> **Env Vars:** http (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add a PATCH endpoint](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-add-a-patch-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-add-a-patch-endpoint?u=76281980&t=0)** - [Instructor] So I have a challenge for you. You've seen how I implemented PutMapping, where updateWithPut and what's implied with a put is that all the attributes have changed. Now, a patch is that one attribute could change, many attributes can change, all of them can change, but it doesn't necessarily have to mean that. So here's a stubbed out method of updateWithPatch, and it doesn't have any annotations on it and it doesn't invoke a service. So you're going to fill this in and find the correct annotation. And then in the TourRatingService, invoke the updateSome method. So the result is create this endpoint, the person invoking the endpoint could put in a new score, could put in a changed comment, or both could be changed. So put that in, run it, and test it in the swagger.

> [!info]- Semantic Content
>
> **Code Identifiers:** updatewithput (1), updatewithpatch (1), updatesome (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add a PATCH endpoint](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-add-a-patch-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-add-a-patch-endpoint?u=76281980&t=0)** - [Instructor] So here's the solution. We have the PatchMapping. And we do updateWithPatch. And passing in the tourId and the RequestBody of the ratingDto. And basically, if an attribute is not provided, it's considered null. So we have to have the customerId, the validation, say if it's nullable, okay, you're okay, you don't have to pass in a score. So if there's no score passed in, it would pass in an optional of empty. If it does, it get an optional of the score. And then here's an optional of nullable, which you could have a null value in there, or you could actually pass it in a comment. So that's how it invokes that service. And now let's look at the Swagger. So I created already a rating with the customerId 23, gave it a score of 5 and said it was great. Now let's scroll down to the patch. And now I'm going to say, I'm not going to change the comments, it's still great, but they changed their score to 5. And we got it back. It said, okay, it was a 4 of a score, it's still great, but not perfect.

> [!info]- Semantic Content
>
> **Code Identifiers:** customerid (2), updatewithpatch (1), tourid (1), ratingdto (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Global exception handling](https://www.linkedin.com/learning/creating-spring-boot-microservices/global-exception-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/global-exception-handling?u=76281980&t=0)** - [Instructor] Well, so, because I was a little rushed to help you learn some of these frameworks, I neglected to follow some of our team's coding standards. So in this section we're going to pay some technical debt and employ best practices. And this is actually some comments they received from other people on the team about the tour ratings controller code. And they said, you know, "What happens if there's an error?" And so that was a little vague. I was like, "I already put something in for exception." Another person said, "You need a common exception handler, not just something for tour rating controller." And I said, "Oh yeah, that's true." We don't handle other type of errors, do we? And then somebody actually more specifically said, "Create a controller advice class that extends from response entity exception handler." Okay, that's very detailed and let's actually see what we are talking about there. So here's from the branch 0507 in the tour rating controller. We had this exception handler in the controller, but that would only handle exceptions that happened within this tour rating controller. What is the person talking about? So this is on our branch 0601. And I created this global exception handler class and I annotated it with controller advice. So this is a global exception handler for anything that happens in the application and I extend it from this response entity exception handler from spring.
>
> **[1:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/global-exception-handling?u=76281980&t=97)** And I'll drill down into that. And this will handle all of these typical type of exceptions you would have in a web application. So just by extending from that, it handles that. And then, here's where we actually handle the no such element exception, which is thrown in our service. That's not called out in response entity exception handler. So this code annotates it with exception handler and just follows the same signature as the response entity exception handlers passing in the no such element exception. And then the web request. This is all required by the framework. And then I build from the exception the status that's going to be returned, which is HTP not found and a message and return it by invoking this create response entity, which is a protected method within the response entity exception handler. Something else I did is I catch resource not found exception, which is thrown by the [[Spring Data]] [[Representational State Transfer (REST)|rest]] framework. So if you try to look up a endpoint that's minded by spring data rest our packages or our tours endpoint, you try to give an invalid there, it's going to throw the resource not found exception. So we handle that and we say, "Okay, HGP not found." And finally, a good best practice is, so anything else, any other type of exception that's not called out in the base class
>
> **[3:11](https://www.linkedin.com/learning/creating-spring-boot-microservices/global-exception-handling?u=76281980&t=191)** or called out here, just a general exception, very unexpected. We are going to return an internal server error, which is a 500, maybe get the message off of the exception. You can do whatever you want in this part to say how you want to handle this problem. You could even, who knows, send a notification. But, this is what we've handled here. So I'm already running this. I have endpoints on the handle, no such element exception. I have break points in these as well as the resource not found exception. And so let's try to get a package that doesn't exist. Just have a package, YYYY. There's no such tour package with that name. And we have our break point and here we are in that handler. And how about what at the bottom? Let's get a tour rating for a tour ID that doesn't exist and we're in our break point for the handle. No such element exception. Okay, that was a good cleanup. Good suggestions by the team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** htp (1), hgp (1), yyyy (1)
> **Definitions:** is a  (3)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Transaction rollback](https://www.linkedin.com/learning/creating-spring-boot-microservices/transaction-rollback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/transaction-rollback?u=76281980&t=0)** - [Instructor] So we got a message from our project manager that there was a little requirement that was missed. And she said we need a service to create more than a batch tour rating for many customers. So if any tour rating for any customer already exists, then the entire request should fail. So they want to have an endpoint for creating a rating for several customers, and the request body would just have a list of customer IDs. But it's also noted that if any of the customer IDs in the list, if there's already a rating for that customer ID, then the whole request should fail. And so this brought back something that we didn't do, and that is dealing with transactions and database rollbacks. So in 6_02, here is this new public method that I've created in TourRatingService, which will rate many, so passing in a tour ID and a score and a list of customers, and it will verify the tour and then iterate through the customers, and before it actually creates a rating for that customer, it'll look up to see if there already has a rating for that torrent customer, and if there is, a constraint violation exception happens. So also what's added to this is, I added an annotation transactional, @Transactional.
>
> **[1:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/transaction-rollback?u=76281980&t=97)** And this is a best practice for all your business services in case you need to roll back a database transaction. So I'm going to show what happens whenever I comment that out.
>
> **[1:52](https://www.linkedin.com/learning/creating-spring-boot-microservices/transaction-rollback?u=76281980&t=112)** I'm going to comment out the @Transactional for this class and then run it and go to our Swagger. And so here's our new endpoint for batch and try it out. And I'm going to create, for tourid 1, give a score of 3, and then in the request body, say for customer 1, 2, and 3. And that will create those ratings. Let's just verify that for tourid 1. We have three ratings. We don't have a comment in there, but that's fine. This was just an overall rating that we wanted to affect the score. Now let's do more. Let's say I want to create for tourid 1 a score of 4. And let's say I put in the customer IDs 4, 5, 6, and 1. And the requirement is if there is any previous existing rating for that customer and tour, then the entire request should fail. I've commented out the @Transactional, so let's execute that. And we got an error on that, a 400, which is expected. That was a bad request. However, if I do a GET on the tour ratings, again,
>
> **[3:28](https://www.linkedin.com/learning/creating-spring-boot-microservices/transaction-rollback?u=76281980&t=208)** we see the ones we had before for customer 1, 2, and 3, but it did create customers 4, 5, and 6 when we did not want that. So let's go back in here, stop this, and put @Transactional back in. And so what's going to happen is an exception's going to be thrown and then therefore the database transaction will roll back and it would be like the request never happened. So let's just create some batch requests. Let's say 1, 2, and 3. Execute that, and we'll say score front for 5. And let's say again we did before 4, 5, 6, and 1, execute. We got the 400 again. Now let's get all the ratings for the tour. And we only see customer ID 1, 2, and 3.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **API Endpoints:** get  (1)
> **UI Navigation:** go to (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Add a runtime logger](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-a-runtime-logger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-a-runtime-logger?u=76281980&t=0)** - [Instructor] Here is a very valuable comment, "Please add logging to this project," I completely agree. Logging is a valuable tool for monitoring, accessing, and debugging an application at runtime. In [[Java]], the important artifacts for logging are the logger, which is responsible for capturing events, appender, records the events, and layouts, which are responsible for the appearance of the data in the log entry. There are several logging frameworks available, like java.util.logging, Log4j, and Logback. An abstraction layer, such as SLF4J, decouples an application from any of these frameworks, which allow it to bind to a specific logging framework at runtime. Logging events in code is very easy. Each class instantiates a class scoped logger, then calls methods on it to record the events according to its imports or severity. Explorecali uses the Logback framework where there are four kinds of events, error, warning, info, debug, and trace. Trace is the lowest event, which may only be of interest to a developer trying to follow the logic flow. Info and warning share the same level of severity. Let's look at our usage of it. So in the TourRatingController, all I needed to do was
>
> **[1:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-a-runtime-logger?u=76281980&t=97)** add this Lombok annotation of @Slf4j, which automatically instantiates a logger object for the class. So within the class methods, I have this log object which is instantiated by the annotation Slf4j, and I have methods that I can use on that to log different types of messages and severity. So here we're coming into TourRating, and it's just an informational, somebody did a post of tours to create a new tour, and the tourId is then inserted into where those little curly brackets are. So I'm going to just do a dot here, so you can see all the different methods you can add on here. Depending on the severity, you can do info, error, debug, trace. So through the [[Representational State Transfer (REST)|rest]] of this class, at the beginning, I put an info information. So we just see overall activity that's going on in the system. I also added some error logging in our GlobalExceptionHandler. I created a private method called logException, and that's just whatever exception is caught is passed in. So each of my exception handlers calls logException, and the exception is passed in. So all the details of the exception including the stack trace and the error message that goes into that exception would be logged.
>
> **[3:12](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-a-runtime-logger?u=76281980&t=192)** Also, I added logging in the TourRatingService, information on each of the methods that are invoked, log.info. Now let's see how the logger is configured. This setup is done in the resources folder. There is a logback.xml file, and it configures the appenders and the layouts. So configuring the appenders and layouts can be a little tricky. Each destination has its own appender, and each appender can format the messages differently. And for appenders sent to a file, there could be extra parameters, such as where to store the file, and creating new files as the log grows. [[Spring Boot]] provides a shortcut to this by applying the most commonly used configuration into an external resources file. And that's this resource's full path here, to base.xml, actually maps out to, I'll bring up the [[GitHub]] reference, down in spring-boot, spring-boot-project, spring-boot, framework, logback, and it's basically includes this XML file to just set up default logging for you. But you can look into more detailed ways to log. Lastly, we configure the log level. We set the log level as debug. In production systems, we typically set the log level at trace or info.
>
> **[4:46](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-a-runtime-logger?u=76281980&t=286)** And our last configuration I've added here is for file logging, not just console logging. I set this environment variable called logging.file.name. And so we won't just be logging to the console, but then log messages will go to this file, ./logs/myapp.logs. So let's build it and restart it.
>
> **[5:19](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-a-runtime-logger?u=76281980&t=319)** So I'll make the terminal a little bigger here, so we can see the new log messages that pop up as the application starts up. So here each in our service, every time there was a creating of a tour package, that all gets logged. And let's go to Swagger. And I'm going to force an error to happen. So I'm going to try to get a tour-rating-controller with a tourId that doesn't exist, which returns a 404, but we also see the details of it. So here's our exception now that is logged. So we see the message about, okay, there at this time, at that time, caught an exception and it was a NoSuchElementsException. Tour 1111 does not exist. And then we see the full stack trace where it happened in verifyTour, RatingService. And the same thing we see in our logs, myapp.logs. That's another option. The same thing is logged there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Spring Boot]] (1), [[GitHub]] (1)
> **Code Identifiers:** tourid (2), logexception (2), verifytour (1)
> **Definitions:** is a  (3)
> **Prerequisites:** setup (1), set up (1), configure (1)
> **File Paths:** logback.xml (1), base.xml (1)
> **Env Vars:** slf4j (1), xml (1)
> **Tools:** github (1), terminal (1)
> **Analogies:** such as (2)

#### [JUnit, Mockito, and SpringBootTest](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980&t=0)** - [Instructor] So now we have some other comments from other developers on our team, and one is on TourRatingService. "This class needs some [[JUnit]] test coverage. Mock these calls to the repository method." Great comment. The next one is on the TourRatingController. "Please add @SpringBootTest JUnit test." I couldn't agree more. I really feel guilty when I write code and I don't have any unit tests on it. And so the goal of these unit tests, I have in front of me, the TourRatingService test. And so this is to test the Tour Rating Service, all of the public methods within the TourRatingService and underneath the TourRatingService, invokes the Tour repository and the Tour rating repository. So we don't want to invoke those. We want to just test the code within the TourRatingService. So how we do that is we mock and we're using a tool called mockito, and we annotate our class, TourRatingService test. These are within the test source folder. And so we say okay, it extends the mockito extension. And then I have just some static variables for setup so I don't have to repeat things. I do an at mock on the Tour repository mock object and at mock on Tour rating repository mock. So having this annotation basically creates an object
>
> **[1:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980&t=97)** that has the same public methods, but it doesn't really invoke it. And then I say inject mock. So this TourRatingService, this would be the actual class and it would inject these repository methods into it. I also have a mock of a Tour and I have a Tour rating mock and a Tour rating mock two. So first, I'm going to test look up rating by ID, which is on the service. And I annotate the method with @Test. And this is a static when call. This is a mockito call. So this is the setup to say when the Tour rating repository mock, whenever the find buy idea is called, then return a mock data. So I have to set up, before I invoke the TourRatingService, how the behavior of the mocked dependencies should behave. So when I look up rating by ID, find by ID, I wanted to return the Tour rating mock object. And then here I do my assert. So here I invoke the service to look up by ID and it returns an optional and I want to assert that the result of this call is the Tour rating mock. So I call it, and it's going to actually do that. Let me show you the actual service
>
> **[3:14](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980&t=194)** on look up by ID. So this is the call that's being mocked. Okay? So we repeat that pattern on the [[Representational State Transfer (REST)|rest]] of our methods. For look up all, we want to mock how the rating repository is going to say, okay, find all and look up all and assert that the response is the same, is a list of those. And then get average score. There's a lot of mocking going on to get the average score And then look up ratings, we want to mock that there's a list of classes that will be returned and then delete. Assert is about, okay, what is the return value of a service? Some services, some methods don't actually return anything. So we want to verify. So here, we set up in our delete test that invokes the service.delete, it doesn't return anything. So we set up the precondition of when the repository is invoked, and then invoke the service. And here afterwards we say, okay, did something call the repository method delete with the correct type of class. And then the same thing is done here with the rate many. We want to verify that the repository is called. And here, you can actually say how many times it's called. So here on rate many, this precondition sets up that there was two repository mock invocations. So we called whenever we said find by tour ID, customer ID,
>
> **[4:53](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980&t=293)** it's actually going to be called two times because we're passing in a list of two different customers. And here we can verify, okay, did the Tour rating repository mock get invoked two times and the method was safe. Other things here, we're verifying that on an update that we're passing in a mock and verify that the set comment and set score were invoked. And then creating new, this is a captor. This is a way to say [[Fetch]] the actual values that were passed into a mock method. So here, we set up a captor. So this is for creating new and we're going to create a Tour rating. And so we set up this Tour rating captor and we invoke the service, and then call and verify that the save method on the Tour rating repository was called and then pass in this captor capture. And now we can actually see, okay, what was passed into that save method. And so whenever we do the capture, we say okay, get the value of it and verify that the Tour that was passed in was the one that I passed in originally on the service, the customer ID. The score is two and then the comment was, okay. And of course we should test the unhappy path.
>
> **[6:27](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980&t=387)** If we pass in a tour ID that is invalid, we want to say, okay, when we do a find by ID and then return an optional empty, we want to assert that the no such element exception class is thrown. So let's run, using this little testing extension. I can run just these tests in here and there's my test results and it went green. I can expand it to see all of the tests there. I can run them one at a time. Excellent. So next, the other comment was about the controller. We want to test the controller. So the same type of principles are applied here, but what's different here is we have this annotation at [[Spring Boot]] test, with a web environment of random port. What the heck is going on here? So we could test a TourRatingController where we mock the attributes and invoke the public methods, but that's not the real world of how this controller is invoked. It's invoked as APIs from endpoints. So what spring boot test actually does, it actually runs our entire application within the JVM of this JUnit test, which I think is pretty awesome. And then if you don't specify this web environment, random port, it will use the default port of 8080. So you should say random port
>
> **[8:03](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980&t=483)** if you have a whole trove of regression tests that there's a bunch of controllers to being tested. So you don't want the ports to step on each other, so say random port. And then I have the typical things on the setup. So I don't have any repeats. Now this, a autowired test rest template. So this is a API test client that will use the random port that we've assigned at spring boot test, and it's a tool that we can use to invoke the APIs, just as you would through HTTP, but it's wired up to use that random port. And so because we do not want to actually invoke the services in the controller, we just want to call the code in the controller itself. We set mockbean, which is our TourRatingService, and we mock a tour rating and a tour mock. So this is where we're going to test our create tour rating. And so here, we invoke rest template and say post for entity. And these are actual methods to invoke an API. The TourRatingURL is slash tours 99 slash rating. So test rest template will insert the base URL, whatever the local host and then whatever port is generated before that. So the great thing about that is you're not only testing it
>
> **[9:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980&t=577)** as in the real world, you're testing the data binding. You're testing that, okay, we're passing in this rating DTO, will it bind and map correctly to my controller. So it's not like I can run this in debug and then step into the post for entity. If I want to run this in debug, I need to set a break point in my TourRatingController. So here, I actually have my TourRatingController and I have a break point in create tour rating. And so let's run just this test, here in debug, and I'll put a break point right there and put a break point right there. So debug test, give it a little moment to start up.
>
> **[10:28](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980&t=628)** I just want to show you that the terminal window here, you see that it actually starts. This is like the log message. We've actually started our spring boot application within JUnit and we've hit our break point to post for entity. I'm going to say go and pop. Here we go. We hit our break point for create tour rating. Step over that. This rating service is a mock of the tour rating service and we've already told this tour rating service mock, how to respond to the attributes. So we also saw that the binding of the rating DTO passed in binds properly. And I'm going to hit go, and here we are back in the test call and we're verifying that on the service mock, it invoked the create new method. Hit go. So then we have, for all the other methods in the controller that were invoking these similarly, I will say that there was one little wrinkle that had to be added for the patch. In order to test patch in the palm.xml, I had to add the HTTP client dependency in order for a patch to work. So we're verifying all of these. And now since they are a part of our regression tests,
>
> **[12:06](https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest?u=76281980&t=726)** whenever we run Maven Clean install, not only does this compile the code, it will automatically run our suite of regression tests. And you see that spring message that's showing, that it's starting up our entire microservice within the test, which I think is cool. Awesome. So glad we have these. I feel so guilty when I have code with no tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JUnit]] (4), [[Representational State Transfer (REST)|Rest]] (4), [[Spring Boot]] (4), [[Fetch]] (1)
> **Definitions:** is a  (7), is called (2)
> **Prerequisites:** set up (5), setup (3), install (1)
> **Env Vars:** api (2), http (2), dto (2), jvm (1), url (1)
> **CLI Commands:** find (5)
> **Exercise Files:** template (3)
> **File Paths:** palm.xml (1)
> **Tools:** terminal (1)

#### [API documentation](https://www.linkedin.com/learning/creating-spring-boot-microservices/api-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/api-documentation?u=76281980&t=0)** - [Instructor] And the last comment that we have in our technical debt we need to pay is that it's a documentation comment that says, please add more Swagger documentation to the APIs. This helps our testers and our front end developers understand the application, and it's a very valid comment. So with the dependency that we've added for Spring Dock, we actually also have more methods that we can use to have external-facing documentation. So I'm in our TourRatingController and one of them is I've added @Tag and I say, okay, the name of this is for TourRating. And I give a description, the rating of the Tour API. This is like an overall comment that would be seen on the Swagger UI. And so the annotation @operation gives more detailed description of the method. If I wanted to, I could give more detailed description of the parameters that are passed in, but I think the rating DTO is documented in the schema of the Swagger, so that's fine. And I want to document as much as I can without getting too detailed in case the API changes and then I have to remember to change all those details as well. So this is just my choice in the level of documentation. Maybe your organization later would have more strict guidelines,
>
> **[1:32](https://www.linkedin.com/learning/creating-spring-boot-microservices/api-documentation?u=76281980&t=92)** but I think this is fine. So I just put a comment on each one of the public methods, get the average score for a tour, modify all tour rating attributes, modify some tour rating attributes, and delete, and give tours the same score. So that's great for our TourRatingController, but remember, in [[Spring Data]] [[Representational State Transfer (REST)|REST]] we have those endpoints too, so I can document those as well. So for Tour Package Repository, I added the tag, this is a Tour Package. And the description, the Tour Package API. If I wanted to, I could put an operation method here on this search, find by name. And in TourRepository I do the same thing. This is the tag is for the tours resource, and the description is, The Tour API. So let's build and run that and let's run it. So I'm going to refresh our Swagger endpoint that we have here already open, and here's our comments. So now it's just a lot nicer with Tour rating over a title there, rating for a tour, for a package, tours. And then these have been here, this is what I was talking about in the schemas, so I just wanted to you that you know, the details of a rating DTO are here, which is valuable for anybody interfacing with these client methods.
>
> **[3:07](https://www.linkedin.com/learning/creating-spring-boot-microservices/api-documentation?u=76281980&t=187)** And then this comment here overall is in the application.
>
> **[3:16](https://www.linkedin.com/learning/creating-spring-boot-microservices/api-documentation?u=76281980&t=196)** In my SpringBootApplication, I created this Bean to set the header of the Swagger. And so here's the description, Services for the Explore California Relational Database. And the title is the simple name. I just extracted it from the the class. And then the version I have is 3.0.0.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (4), dto (2), rest (1)
> **CLI Commands:** find (1)
> **Versions:** 3.0.0 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 7. Dockerized Microservices and Databases

[↑ Back to Table of Contents](#table-of-contents)

#### [Why Docker?](https://www.linkedin.com/learning/creating-spring-boot-microservices/why-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/why-docker?u=76281980&t=0)** - [Instructor] Enough of this in-memory demo database stuff. Let's use a true data store that persists data after the application ends. Our Explore Cali JPA [[Spring Boot]] Microservice uses an H2 database as our data store, and it's good for demos or setting up a test bench, but that's not how applications are in the real world. You may be thinking, "Ugh, great. To follow along on my local machine, I need to download, install, and configure my [[SQL]], which will clutter my PC." I could have taken this approach, but I thought I would instead incorporate a product that's a standard in [[Software Development]] for [[Continuous Integration (CI)|continuous integration]] and delivery, and that's Docker. Docker is used to build, deploy, and run containers for software applications, and it's simply an application delivery technology. In order to follow along with this course, you do need to install Docker locally. if you are not running [[Codespaces]]. A simple web search of install Docker will provide all the help you need. However, our Codespace instance already has Docker installed. I assume that you are a [[Java]] developer. The goal of Java is to write once, run anywhere. You don't need to take a Java source code written on a Mac and recompile it to run on a PC. You take bytecode. It could be in the form of .class files, JAR files, WAR files, or even EAR files. But as long as the Java virtual machine is installed,
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/why-docker?u=76281980&t=94)** the application will run. But applications aren't normally standalone. Infrastructure, such as [[Databases]], messaging technology, platform-specific configurations, standalone UI deployments that include node must all play together nicely before an application is truly usable. Docker is used to manage all the interdependencies of the infrastructure and gather them into one or more images, similar to a Java JAR file. And then the Docker Engine is a platform on which the image is run. A running image is known as a container. Let's make another analogy to Java. Just like a Java class file is only a declaration, it is at the runtime that one or more instances of a class become Java objects. Likewise, an image is a collection of files. Containers are running instances of an image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8), [[Spring Boot]] (1), [[SQL]] (1), [[Software Development]] (1), [[Continuous Integration (CI)|Continuous integration]] (1)
> **CLI Commands:** docker (7), node (1), make (1)
> **Env Vars:** jar (2), jpa (1), sql (1), war (1), ear (1)
> **Prerequisites:** install (3), configure (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** such as (1), similar to (1), just like (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Dockerizing a microservice](https://www.linkedin.com/learning/creating-spring-boot-microservices/dockerizing-a-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/dockerizing-a-microservice?u=76281980&t=0)** - [Instructor] Let's jump right into a demonstration of Docker images and containers by containerizing our Explore Cali JPA application. There are several tools for building an image, but we are going to use a Maven plugin called Jib. And here is the plugin in our pom.xml. In the configuration, I set a base image infrastructure, eclipse-temurin:21-jre-ubi9-minimal. This is a lightweight version of a [[Linux]] operating system, plus the [[Java]] 21 runtime environment. I also needed to create a folder in the source main that has a jib folder and have our ExploreCalifornia.[[JSON]] file in that folder. So that is when the containerized application runs, it will find the json file as part of the image when it builds it. So at the terminal, I'm going to just invoke the plugin. The plugin, and the goal is docker build. And so it will take our application and turn it into an image. It's going to take a little while, because we need to download all of the things for the Eclipse Temurin plugin. So it's pulling down images from someplace called Docker Hub. Similar to Maven Central where it has the dependencies,
>
> **[1:36](https://www.linkedin.com/learning/creating-spring-boot-microservices/dockerizing-a-microservice?u=76281980&t=96)** Docker hub has images that are being downloaded and it was successfully completed. So how do we know we have an image? I'm going to issue the command docker images. And here is our Explore Cali JPA 3.0.0 image. Now let's run this. And oh, I also wanted to show there's a Docker extension in code spaces, and here's a section that says images and the version. Now let's run it. So the command is docker run -p, and this is where we're going to publish the port. So it by default runs at 8080, and we are going to publish it at 8080. So when the container will run, we will be able to access the application through the port 8080, and we want to give the image name. And 3.0.0 is our tag. So we got the popup that we can access this now through 8080, and we see the similar messages like our springboot application has started and the log messages that we're familiar with. And we see in this tab here, in the extension,
>
> **[3:11](https://www.linkedin.com/learning/creating-spring-boot-microservices/dockerizing-a-microservice?u=76281980&t=191)** that this is our running container. I want to explore this dropdown, so you can actually see these are running files like you would see on a file system of an operating system. And within the app folder is where we would find our class files, or our application when it is built, and the libraries for our dependencies. And there is our ExploreCalifornia.json within that container. I'm going to go to a different terminal. And just to show you, we had the pop up for, okay, you wanted to see 8080. You can also, within code spaces, go to this port section and this little green dot says that 8080 is exposed. If you hover over here, this little globe, it'll open in the browser. So whenever you are running this locally, your code spaces will have a different name than mine. But, so here's our browser, and I'm going to add the swagger onto it. So our application is running, but it is not running in the JVM of our code spaces. It's running on top of the Docker platform. So I'll go back to my terminals, and if I wanted to stop this, I could hit control C,
>
> **[4:50](https://www.linkedin.com/learning/creating-spring-boot-microservices/dockerizing-a-microservice?u=76281980&t=290)** but I want to go into this other terminal here, so it'll show other Docker commands to stop. So I could say docker ps -a, which shows the running containers. And just like here, within here I can right click and stop it. But I also wanted to show you how to do this at the command line. So docker stop, and I need to give the container name, the container ID. So I'm going to copy this. Oops. I'm going to copy this and paste it, allow it to paste. So it stopped it. So I look over here and it stopped the running application. And even though it stopped it, there's still a state that it needs to be removed. So I could right click here and say remove, or I could remove it with a Docker command. So the container is gone. I want to just prove that there's no container. Our image is still there. And if I wanted to remove the image, I would just say docker rmi, remove image, and it removes that image. This has been a very brief overview of Docker and our [[Microservices]].
>
> **[6:24](https://www.linkedin.com/learning/creating-spring-boot-microservices/dockerizing-a-microservice?u=76281980&t=384)** This is not a course on Docker, but I wanted to give you enough information that you can comfortably continue with the course, and I'll guide you through the things you need to learn. There are plenty of courses in the [[LinkedIn]] library which will dig much deeper into the platform, including the course by Mary Ellen Bowman. It's a good course that I recommend, "[[Introduction to Docker for Java Developers]]."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[Java]] (2), [[Linux]] (1), [[Microservices]] (1), [[LinkedIn]] (1)
> **CLI Commands:** docker (16), find (2)
> **Tools:** terminal (3), command line (1)
> **File Paths:** explorecalifornia.json (2), pom.xml (1)
> **Env Vars:** jpa (2), jvm (1)
> **Versions:** 3.0.0 (2), java 21 (1)
> **UI Navigation:** go to (2), dropdown (1)
> **Ports:** :21 (1), port 8080 (1)

#### [Spring Boot Docker Compose](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-boot-docker-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-boot-docker-compose?u=76281980&t=0)** - [Instructor] Docker Hub is an online repository of dockerized third party images similar to Maven Central, which is the repository of Maven dependencies. You can even create your own Docker Hub account to store your own images. I'm going to search for [[MySQL]]. In this video, we will switch from the H2 to the MySQL database by downloading the MySQL docker image from Docker Hub. But first we need to orchestrate the interaction between the Explore Cali JP application and MySQL. Running related containers is called orchestration and this can be done manually with the Docker command line interface or through automated tools such as Docker [[Jetpack Compose|Compose]], Docker Swarm and [[Kubernetes]]. For local development, Docker Compose is a good choice over manual [[CLI]]. Docker Compose requires a Y-A-M-L, or YAML file that defines the desired deployment relationships. The command docker-compose up begins the orchestration. Detached mode runs it in the background. Docker-compose down tears down everything. Hitting Control + C does the same thing when it's not running in the background. And isn't it just like [[Spring Boot]] to have a tool to make this easier? The tool is Spring Boot Docker Compose. All we do is go to start.[spring.io](https://spring.io),
>
> **[1:36](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-boot-docker-compose?u=76281980&t=96)** say that we want the Docker Compose support, select the data source and Spring Initializer generates all we need. From the generated pom.xml, now have Spring Boot Docker Compose and MySQL container J and a compose.yml file. So now when we run the Spring Boot application, it will do the following. The Docker Compose engine starts with the Spring Boot application, downloads the MySQL docker image from Docker Hub, launches and configures a MySQL container, and creates a docker volume. Within our microservice, a new database persistence context is automatically instantiated and connects to the MySQL database container and the application is ready to accept API requests. When the Spring Boot application shuts down gracefully, Docker Compose stops the MySQL container, but does not delete the image or the volume. So the running application again will use the local image and new records have been persisted. So we are on the branch 0703E and I have applied the changes that were suggested through Spring Initializer and those two changes are in the pom.xml. There was these two dependencies added, one is for Spring Boot Docker Compose
>
> **[3:09](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-boot-docker-compose?u=76281980&t=189)** and the other is for the MySQL driver. And the other addition is this compose.yml, which Docker Compose will use when it starts up and it will download the MySQL image and then assign the following environment variables for the username and password of the database and assigns the port of 3306. So I got to make sure that I'm in the correct folder. I'm not. And here's how we would launch it. We would launch it from the Maven Spring Boot plugin. So Maven install just to make sure that the code is compiled and then say, "Spring Boot run". And the first thing it'll do is, normally do, is it'll compile the sources and run the unit test. So the unit test will be run with the H2 database. It's not going to use MySQL. Okay, so now Docker Compose is kicking in. It's looking in the file and seeing what to do. And first thing is, okay, download the image. Let me put in the Docker extension here so we can see the progress is what's going on. And we see the MySQL images downloaded. It's started. And now we have to wait for a little bit. And after a while it starts up.
>
> **[4:45](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-boot-docker-compose?u=76281980&t=285)** We were connecting to the entity manager and we're creating tours and there's 30 tours persisted. We get the pop-up to open in browser. We can click that to open here or you could also go through this interface to see the 8080. And this little globe thing will open up a browser. And let's go to our swagger page. And let's see our tour packages.
>
> **[5:19](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-boot-docker-compose?u=76281980&t=319)** And there's our tour packages loaded from the dot [[JSON]] file, but now it's actually from a database. And let's just get a list of our tours. And there's our tours. Now remember, we have a persistent database, so if I Control + C out of this, that will invoke a Docker Compose down. And so, that's why we see this is no longer highlighted. Let me start it up again. Do Spring Boot run. I should have admitted the install 'cause now it's going to run the tests again, which is really unnecessary 'cause we know they run, they pass. Okay, it's starting up again, connecting to the context. So there is a problem here. When we start up our application, remember how we start up the application and it creates the tours from the JSON file? Well before, on the first time we ran it, there's 30. Now we run it, there's 60. That means it's created those again. So now that we have a persistent data store, we need to think of ways to version our database and that's what we're going to do next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (16), [[MySQL]] (13), [[Spring Boot]] (10), [[JSON]] (2), [[Kubernetes]] (1)
> **CLI Commands:** docker (24), mysql (13), make (3)
> **Env Vars:** json (2), cli (1), yaml (1), api (1)
> **File Paths:** pom.xml (2), compose.yml (2)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **UI Navigation:** go to (2), select the (1)
> **Analogies:** similar to (1), such as (1), just like (1)
> **Exercise Files:** download the (2)

#### [Database versioning with Flyway migrate](https://www.linkedin.com/learning/creating-spring-boot-microservices/database-versioning-with-flyway-migrate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/database-versioning-with-flyway-migrate?u=76281980&t=0)** - [Instructor] Now that we have switched to a real persistent database, [[MySQL]], we need to adjust how our database is being initialized. Flyway is a database migration tool that controls triggering of version database migration scripts. I've already added the required files to our application, so let's look at the changes. So we are in branch 07_04e, and in the palm.xml, I've added two dependencies to the palm. It's flywaydb, flyway-core, and flyway-mysql. And then I've added some [[SQL]] scripts in the resources db migration folder, and they've been broken up and versioned by file name. And the order is defined by the version number prefix of the file. So Flyway records in a table the name of the scripts that have already been run. So the first SQL script creates the tour_package table, and the tour table and sets constraints and then fills the tour_package table. And then v1.2 adds tours to the tour table. Then v1.3 creates the tour_rating table, and then 1.4 initializes it with several tour ratings. So whenever the application starts up, it will run all four of these,
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/database-versioning-with-flyway-migrate?u=76281980&t=94)** and then it will record that all the way up to 1.4 is already run, so if we restart the application, it will not rerun those unless we add something like 1.5 or v2 or et cetera. And now in the application properties, I don't want hibernate to generate the ddl anymore, I'm going to say, "Okay, do not generate the ddl. I have these migration scripts that will do it instead." And lastly, I don't, from the previous run of Docker, I don't want that database around anymore. So I'm going to remove the container. So here's the container. I'm going to grab the ID. This is a pre-existing container. It's stopped but it's not removed. I'm going to copy the ID and then say docker remove, paste. And now I'm going to say docker volume prune, which will remove that volume. And yes, I'm sure I want to do that. And it reclaimed 197 megs, so we don't have that old version that has 60 tours in it. And so now let's try it and run it like we did before. So Maven install, spring-boot:run. It's running the unit tests,
>
> **[3:06](https://www.linkedin.com/learning/creating-spring-boot-microservices/database-versioning-with-flyway-migrate?u=76281980&t=186)** starting up the docker composed container. Okay, now it's connecting the application. And just want to look at the logs here. We've persisted 30 tours. Let me bring this up a little bit. I want to show where it runs the scripts. So here connects to the database. Flyway is giving it... Saying that it has a schema history table, and it ran four migrations. So creating schema history, and then it talks about the different versions. It's kind of wrapped around here, but 1.1, 1.2, 1.3, 1.4. And there's this persisted 30 tours. And now I'm going to hit Control + C, and that'll do Docker [[Jetpack Compose|compose]] down. And I'm going to run this again. I don't need to do the install again. And we still have 30 persisted tours, and we see no migration is necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[SQL]] (2), [[Jetpack Compose|Compose]] (1)
> **Versions:** 1.4 (3), v1.2 (1), v1.3 (1), 1.5 (1), 1.1 (1)
> **CLI Commands:** docker (5), mysql (2)
> **Code Identifiers:** tour_package (2), tour_rating (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **File Paths:** palm.xml (1)


### 8. Create a RESTful MongoDB Microservice

[↑ Back to Table of Contents](#table-of-contents)

#### [Use cases for an image microservice](https://www.linkedin.com/learning/creating-spring-boot-microservices/use-cases-for-a-image-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/use-cases-for-a-image-microservice?u=76281980&t=0)** - So Explore California requires an image server. We have three use cases. The first use case is, as a company photographer, I would like to upload photos to a server. The second is, as a front end developer, I would like to see a list of all images. I would like to get a list of images by file name and the unique identifier. And the third use case is to [[Fetch]] an image by ID. As a front end developer, I would like our website to download photos by referencing the unique ID. Let's get back to the code and design for these use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Speakers:** - so (1)

#### [Challenge: Create the Spring Boot MongoDB project](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-create-the-spring-boot-mongodb-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-create-the-spring-boot-mongodb-project?u=76281980&t=0)** - [Instructor] So even though I already have a design for this solution, I'd like you to set up the project. I'd like you to navigate to start.[spring.io](https://spring.io) in Spring Initializr, and the following settings, which should be used. Make sure it's a Maven project using [[Java]] 21, the name of the project should be explorecali-images, the [[Spring Boot]] version should be the latest non-M3 version or snapshot, the package name should be com.example.explorecaliimages, without any hyphens. So the required dependencies you should add are Spring Web, [[Spring Data]] [[MongoDB]], the nonreactive one, Spring Boot Actuator, Lombok, and Docker [[Jetpack Compose|Compose]] Support, and then change the default version in the POM, once it's downloaded, to 3.0.0. And then, I would like you to grab the OpenAPI dependency for the Swagger UI from our explorecali-jpa pom.xml.
>
> **[1:19](https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-create-the-spring-boot-mongodb-project?u=76281980&t=79)** Once you generate that and download the zip, you can simply drag and drop if you're using Code Spaces into the folder here. So, make sure you select outside of any of these folders. Select here and if you drag and drop your solution in there, you should have a sibling package called explorecali-images. Give it a go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Java]] (1), [[Spring Data]] (1), [[MongoDB]] (1), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** make (2), docker (1)
> **UI Navigation:** drag and drop (2), navigate to (1)
> **Versions:** java 21 (1), 3.0.0 (1)
> **File Paths:** pom.xml (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Env Vars:** pom (1)
> **Exercise Files:** download the (1)

#### [Solution: Create the Spring Boot MongoDB project](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-create-the-spring-boot-mongodb-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-create-the-spring-boot-mongodb-project?u=76281980&t=0)** - [Narrator] Were you able to figure it out? In the Branch > 08_03 that I have here, I have the results of how I did it myself. And so I have a explorecali-images folder, which is a sibling to explorecali-jpa. And here's the POM.xml with the name and the version>21. There's actuator, [[MongoDB]], web, docker-[[Jetpack Compose|compose]], lombok, our openapi, and then starter-test always comes along. There's the maven-plugin and then it also generated the ExplorecaliImagesApplication class. And finally it also generated this compose.yaml file. And these are settings specifically for mongodb. So now that we have all that in place, we should be able to run, compile and run everything and see that Docker Compose kicks in to connect to a real MongoDB image. So that will build it, and then spring-boot:run. We'll start off the Docker Compose and launch the application. See the Docker [[CLI]] is starting and Tomcat has started up.
>
> **[1:33](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-create-the-spring-boot-mongodb-project?u=76281980&t=93)** We see the popup for seeing Open in Browser. And for this URL, there's nothing to see yet. That's fine, but we can go to our swagger-ui
>
> **[1:48](https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-create-the-spring-boot-mongodb-project?u=76281980&t=108)** to prove that the application is running and we don't have any endpoints yet, so everything's good to go there. It's up to you. But I also created in my code spaces in the launch.[[JSON]], I created the ability to have the [[Spring Boot]] application launch from the Spring Boot dashboard extension. So if I wanted to debug, I could, or run directly, I could do it from here. And this will invoke the Docker Compose as needed. Excellent!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (5), [[MongoDB]] (3), [[Spring Boot]] (2), [[CLI]] (1), [[JSON]] (1)
> **CLI Commands:** docker (5)
> **File Paths:** pom.xml (1), compose.yaml (1), launch.json (1)
> **Env Vars:** pom (1), cli (1), url (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Image file upload microservice](https://www.linkedin.com/learning/creating-spring-boot-microservices/image-file-upload-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/image-file-upload-microservice?u=76281980&t=0)** - [Instructor] So let's look at my design that I've already put forward here, and I've populated some classes already for the project that you built for me, so the main domain model is a class called image in the model folder, and this is declared as @Document, and that is a [[MongoDB]] artifact. In JPA, they have entities; in MongoDB, they have documents, and a document is a collection, and I'm calling that images, so what is this image class? What are the attributes? The first is a String id, and this is an artifact from MongoDB having an identifier, which is a very long, unique string. Then I have my own attributes, which is the file name, and then an array of bytes, which is the actual data of the image file. Let's look at my controller, so I've already set up my controller with some information with Swagger of what this is, and I have a RequestMapping. The base URL is /api/images. Keep that in mind. We're going to look at that in the next chapter, why that's unique, and the folder ImageController, we have a PostMapping, and this is to create an image and upload an image, so the path would be /api/images/upload, and it will be uploading a MediaType multi form data value,
>
> **[1:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/image-file-upload-microservice?u=76281980&t=97)** and the response will be created if everything was successful, a little comment on the Swagger of what it's going to do, and then it's declared to handle a file upload, and the parameter is a MultipartFile, and inside this method, we instantiate the image object, and then we set, from this file attribute the original file name, the file bytes, which is the array of bytes, that's the data, and then invoke our business service to save the image and passing in that image object, and then, the result would be that ID would be generated by Mongo, and when we would return that in the response, so that is the create, and we can also download an image by the unique identifier, so here we [[Fetch]] the file by the Mongo identifier, and so in our service, we say getImage, passing in this path variable id, and in the response, which will return a response entity, we map it to say, "Okay, if we received it, "then return a okay," which is a 200 status, and on the header, say, "Content disposition attachment file name equals," and then provide the file name, and then provide the body so that it can be downloaded. If it was not able to fetch it, a response entity returned not found, which would be a 404, and then we have this other endpoint
>
> **[3:14](https://www.linkedin.com/learning/creating-spring-boot-microservices/image-file-upload-microservice?u=76281980&t=194)** which says, "Get a list of all Mongo identifiers "and their file names," and then, so we have a service that returns find all IdNames, so let's look what is an IdName? An IdName is a purely an interface that is a [[Spring Data]] projection where off of the image entity or image document, it will pull the identifier and the file name off of it, and we will get into that later when we create our Mongo repositories, and then, our image service is just stubbed out messages. We haven't implemented them yet, and we'll get to that next, but here's the structure of how I've designed it, and next, we'll populate these methods with a Spring Data Mongo repository methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3), [[Fetch]] (2), [[Spring Data]] (2)
> **Definitions:** is a  (9), is an  (2)
> **CLI Commands:** mongo (5), find (1)
> **API Endpoints:** /api/images (1), /api/images/upload (1)
> **Env Vars:** jpa (1), url (1)
> **Code Identifiers:** getimage (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)

#### [Spring Data MongoDB documents and repositories](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980&t=0)** - [Instructor] Now we're going to create our [[MongoDB]] repositories. So I'm going to create a new folder called repo and a new file called image repository dot [[Java]].
>
> **[0:22](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980&t=22)** And this will be an interface. So here's where we apply the [[Spring Data]] MongoDB. This will extend from Mongo repository. And our two options are image, and then the type of the ID is string. Import the image. Did we import the right image? Didn't work. Let's try it again. Import image from model. Very good. Now I'm going to do a source action here so we can see what methods come from spring data MongoDB. We have the find all, the insert, the delete, the save, more find all and more counts by this, using query by example. That's what those examples there are. And finding one by query by example. So those are just some of the default methods we get. And so let's inject, remove that constructor,
>
> **[1:45](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980&t=105)** our image repository, make that lowercase, import that, and generate a constructor.
>
> **[2:09](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980&t=129)** So now we have injected the image repository into the image service and we can invoke it now within the save image. Okay, and we can now also invoke the get image
>
> **[2:31](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980&t=151)** to find by ID. Awesome. Okay, we've got a couple more methods to populate here, and this is why we're going to use query methods to find by name, by finding it by the file name. And then this is the list of find everything and return the identifier and the names. And within our image repository, let's add our query methods. First, I need to find the image by the file name. So it's simply find by file name. Okay, and then the next one I need to do is get a list of ID names of the entire database.
>
> **[3:25](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980&t=205)** So remember, this ID name is purely a interface that's a projection where it's saying, referencing the ID and the file name attribute in the image class. And then in the repository, having nothing after the by [[Microsoft Word|word]], says everything. Okay, so then let's populate our service with these methods. So find by name, find by file name, passing in the name,
>
> **[3:59](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980&t=239)** and find ID names. Find ID name by. Excellent. So all this plumbing is in place. I think we're ready to run this, so make sure that we're in the correct folder. So Maven Clean install, and then to launch it, [[Spring Boot]], run go.
>
> **[4:30](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980&t=270)** Okay, so it's built the jar and now it's running the Docker [[Jetpack Compose|Compose]] container. And I'm going to show on Docker, what's running here. I'm just going to close that 'cause it's in my way. And it's showing on Tomcat on Port 8080. It started up, started the Explore Cali Images. Here's our running Mongo image container. And let's look at the Swagger. So we have our new methods added. Let's upload an image from our file system. So this will look for a file on your local computer because of the reference to the outside world within Code Spaces. If you're running local host, you would have to look in the file system of that local host. But since it's referencing from the outside world, I'm on my browser and it's going to upload, I need to choose a file for my own personal file system. And I actually have in my documents folder, a Explore Cali logo. So I'm going to choose that and execute it to upload, and it uploaded it. And there's the unique identifier in MongoDB. I'm just going to copy that. And let's invoke the endpoints to show all of our images and file names.
>
> **[6:07](https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-data-mongodb-documents-and-repositories?u=76281980&t=367)** And here's our image ID, and the file name is logo.png. And now let's actually fulfill the last requirement to [[Fetch]] that image by the ID. There's that ID that I copied, execute, and Swagger gives me a nice little download file link. So if a front end developer, all they would need to do is reference the full path to get that URL from API slash images. But Swagger is being helpful to us. So I can click download file here, and here's my file. I'll save it in my downloads folder. And then let's look at it and there's my file. Awesome!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (4), [[Spring Data]] (2), [[Java]] (1), [[Microsoft Word|Word]] (1), [[Spring Boot]] (1)
> **CLI Commands:** find (11), mongo (2), make (2), docker (2)
> **Env Vars:** url (1), api (1)
> **Ports:** port 8080 (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 9. Create an API Gateway with Spring Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Use cases for an API gateway microservice](https://www.linkedin.com/learning/creating-spring-boot-microservices/use-cases-for-an-api-gateway-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/use-cases-for-an-api-gateway-microservice?u=76281980&t=0)** - [Instructor] So this is just our first iteration with this customer of security. I think as it goes on, we'll maybe have some more strict authorization, but for now, all that we need to do is pass in a secured way, that token to the people that have to have authorization to add packages and add tours and delete them, modify them, as well as uploading images. Use case one is to protect our tour data. As a tour publisher, I should have the ability to create, update, or delete tours, tour packages, or ratings in the [[MySQL]] database. Use case two, protect images. As a tour publisher, I only should have the ability to upload images to the [[MongoDB]] database. Use case three, permit fetching tour data. As a front end developer, I should be able to freely reference tours, tour packages and ratings stored in the MySQL database for presentation on the Explore California website. Use case four, permit fetching images. As a front end developer, I should be able to freely download images saved to the Mongo database for presentation on the Explore California website. And then we have some non-functional requirements. For this iteration of the solution, we are not managing user accounts or logins. For endpoints that require authentication,
>
> **[1:36](https://www.linkedin.com/learning/creating-spring-boot-microservices/use-cases-for-an-api-gateway-microservice?u=76281980&t=96)** we will simply use basic auth, which is a special token on the HTTP header request. Open endpoints will not require the special token and the authentication will employ [[Spring Security]]. So we have a couple options. The first is to add Spring Security to both of our [[Microservices]] and expose them to the internet. The second is to create a secure API gateway. There are several API gateway [[Microsoft Products|products]] out there. Ours will leverage the Spring Cloud API gateway module. Our gateway will route requests to our domain microservices. This will allow us to address cross-cutting concerns, such as security, monitoring, metrics, and resilience. Artifacts of the Spring Cloud API gateway, are predicates and filters for pre and post-processing of HTTP requests and responses. Path rewriting will modify the path of a rerouted URL. Circuit breakers handle outages gracefully, and request rate limiting will protect the system from being overwhelmed. So in Spring Initializer, I have created a project, which is called ExploreCali-Gateway. We're using [[Java]] and Maven, [[Spring Boot]] 325, and for dependencies,
>
> **[3:11](https://www.linkedin.com/learning/creating-spring-boot-microservices/use-cases-for-an-api-gateway-microservice?u=76281980&t=191)** I've chosen the reactive gateway out of Spring Cloud [[Routing]], and we're using packaging as a jar, and it's Java 21. And I've put it already in the project in the branch of 0901. And so here's the project, ExploreCali-gateway, and our palm file, Explore-Cali-gateway. And it has Spring Cloud starter gateway, and it also includes, as part of independency management, it chooses the correct Spring Cloud version. And of course, it creates our Spring boot application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[Spring Security]] (2), [[Microservices]] (2), [[Java]] (2), [[Spring Boot]] (2)
> **Env Vars:** api (4), http (2), url (1)
> **CLI Commands:** mysql (2), mongo (1)
> **Definitions:** is a  (1), is called (1)
> **Versions:** java 21 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Routing to the JPA microservice](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-jpa-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-jpa-microservice?u=76281980&t=0)** - [Instructor] I'm going to take a cookbook approach to setting up routes to our [[Microservices]] using Spring Cloud Gateway, but I did want to show you how to access more detailed documentation. So in the [spring.io](https://spring.io) website URL, we want to drill down into Cloud. And then within Cloud, we see all the different modules within Cloud. And we are particularly interested in Spring Cloud Gateway. And then, the tab Learn, the reference doc for the latest general availability is where we want to go, and this is going to show you all the detailed ways of configuring a Spring Cloud Gateway. There are two ways to configure a gateway, an external properties file, or via Gateway [[Java]] libraries. We're going to use a properties file, similar to what's shown here, a application.yml in our Resources folder. And it is very difficult to perfectly hand code application.yml, because spacing and tabs are very important, so I'm just going to copy and paste it. So, we are currently in 0902B, but I'm going to go to in the code repository in branch 0902E and just copy this over
>
> **[1:34](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-jpa-microservice?u=76281980&t=94)** into the file and paste that in. So, we're going to set up the route for our ExplorecaliGatewayApplication. So what we want to do first is I want to launch that application, and I'm in the ExplorecaliJPAApplication folder. For the gateway, I want to route the gateway to the ExplorecaliJPA microservice. I can't let the default port be 8080 because I want the gateway to be 8080. So I have on this command line here, set up SERVER_PORT environment variable =8082, and then kickstart MAVEN to run the [[Spring Boot]] application. This is also possible within an applications property where in lowercase server.port=8082, but this is just a nice way to do it all in one command line. And we'll just wait for that to start. So the database is up, and the application is up and running on 8082. And I'm going to use the curl command. So, it's localhost, we're not exposing it to the code spaces URL here. Within this virtual machine of code spaces,
>
> **[3:07](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-jpa-microservice?u=76281980&t=187)** their microservices references each other with localhosts, so I'm just going to use the curl command line to say within localhost, skip the tours just to prove that that endpoint is working, and yes it is. So, let's get back to our gateway routes. So, we have to set up a Spring Cloud Gateway route, and then we set up the ID of the route. So the first route we're going to set up is to access the tours, so that endpoint is anything /tours and anything after that. So, we're going to create this route, it's called tour-route. The uri for it is localhost:8082. And now we set the predicate, which is, okay, what are the conditions to meet this route? And we only have one predicate, is that anything that starts with /tours and then the ** is a wild card after it. There's other predicates we can have. We can say, okay, if a certain value is on the header, if there is a certain method, if it's a GAD or a post to put whatever, and there's also cookies we can set as predicates. And then, our next route is for the packages, 'cause those are our two main endpoints in the ExplorecaliJPA is that we have the packages route, and so our predicate is /packages, and then the wild card of anything after that. We can also employ something called filters
>
> **[4:44](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-jpa-microservice?u=76281980&t=284)** where we say you can put a prefix on a path to say, okay, maybe it has to start with that /m or mobile or something, and so that would be a path prefix filter. And some other filters could be about values on the add values to the header on the request, add values to the header on the response, and then even add parameters on the URL. So, let's go to a window and start that. So we're in the ExplorecaliGateway, and we're going to run that. Okay, it's saying it's up with port 8080. Let's go back to that other curl command, so where we previously referenced port 8082 to look up the tours, let's do port 8080 to reference the tours. There's our tours. How about packages? Awesome, we can look up the packages. And how about we create a package? So, since we are creating a package, we want to say on the header that there is a content type. And then we have some data, and this is our [[JSON]] data. I'm going to create a beekeeper tour package.
>
> **[6:23](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-jpa-microservice?u=76281980&t=383)** Okay, let me make sure that all that syntax is correct. Ah, okay, I got a 500 back, because my string was too long for the code. It has to be two Bs, not three. And there it goes, it created it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (2), [[Java]] (1), [[Spring Boot]] (1), [[JSON]] (1)
> **Env Vars:** url (3), server_port (1), maven (1), gad (1), json (1)
> **Prerequisites:** set up (5), configure (1)
> **CLI Commands:** curl (3), make (1)
> **Ports:** port 8080 (2), :8082 (1), port 8082 (1)
> **Tools:** command line (3)
> **Definitions:** is a  (3)
> **File Paths:** application.yml (2)

#### [Routing to the MongoDB microservice](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-mongodb-microservice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-mongodb-microservice?u=76281980&t=0)** - [Instructor] Now let's add the route to our Explore Cali Images microservice. So let's actually start that up. So I have, just a reminder, in the last video, we have the explorecali-jpa [[Microsoft]] already running on port 8082. Now in another terminal, I'm going to run on port 8081 our Explore Cali gateway application. Okay, that's running on 8081. And let's go to where we had our, we're running our curl commands in this window. Let's do a curl and list any images that are in our [[MongoDB]] database. So it would be localhost:8081/api,
>
> **[1:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-mongodb-microservice?u=76281980&t=60)** remember we have API in the front of our URLs for our images microservice. And there is our logo.png image. So now let's set up the [[Routing]] for this within our gateway application YAML. So I am in branch 09_03b. Again, I'm just going to copy from 09_03e, the route, and then we'll talk about it. Make sure the tabbing is correct. And so here we have a route called tour-image-route. The URI is localhost:8081. The predicate is we are going to set the path of /images, not /apiimages as the input URL. So just like we'll have /tours, /packages, and /images for all of our getters and setters, but we have to know that whenever we invoke the other domain microservice for our images, we need to have a filter that is a prefixed path to add the /api. Excellent. So let's run this. It was running in our previous video, so let's compile it and run it again with our new settings. Okay, it's up and running.
>
> **[2:43](https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-mongodb-microservice?u=76281980&t=163)** Let's go back, clear this screen and do the curl again, but this time on 8080, and this time we just say /images. And there we list our images. It's just one. And we see the log that the GET /api/images was invoked. Okay, we now have our routing set up. Before we go onto our next video, let's tear everything down, hit Control + C on all of these services to make sure nothing is running so we can start fresh whenever we add security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (2), [[Microsoft]] (1), [[MongoDB]] (1)
> **CLI Commands:** curl (3), make (2)
> **Ports:** :8081 (2), port 8082 (1), port 8081 (1)
> **Env Vars:** api (1), yaml (1), uri (1), url (1)
> **Cross-References:** in the last (1), previous video (1), next video (1)
> **URLs:** [localhost:8081](https://localhost:8081) (2)
> **API Endpoints:** get  (1), /api/images (1)
> **Prerequisites:** set up (2)

#### [Add Spring Security to the gateway](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway?u=76281980&t=0)** - [Instructor] So now we are going to add [[Spring Security]] to our API gateway. The first step is to add the spring security dependency to our palm. So here is the dependency, it's [[Spring Boot]] starter security, and I just want to show you the behavior of just adding this dependency to our gateway. So I'm building the Explore Cali Gateway, and while that's building, we need to start our Explore Cali JPA microservice and then start our Explore Cali Images microservice that is running on 8081. The JPA is running on 8082. So now that the gateway has been built, let's run it. So that is now running, go away, and I have a curl command. I'm going to invoke the 8080 slash packages endpoint to give me the packages. And I got a denied. It says 401 unauthorized. And just to show you, if I would try to invoke any endpoint on the gateway, what happens? I get a prompt for a sign in and username and password.
>
> **[1:33](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway?u=76281980&t=93)** So what happens is, just from including the spring security dependency, all my endpoints are blocked and require authorization. That simply won't do. So what we are going to do is stop that and we need to configure our gateway. So I'm going to add a security configuration in a config folder, security config [[Java]]. And I'm working in the branch 0904B. Over on [[GitHub]], here it is on branch 0904E, the class, security, config. I'm just going to copy and paste that in. So what does this do? So this class is annotated with ant configuration and then we're going to create a beam. And we are also annotating this with enable web [[Flux]] security. And we're going to create a spring security, filter chain object. And we're just invoking this pattern. A HTTP security object is passed in, and then we're going to take this and using the builder pattern, add some more authorization information on it. And so I created authorized exchange
>
> **[3:06](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway?u=76281980&t=186)** and now I say, okay, what's acceptable and what is not. So we want to say for HTTP post, put, patch and delete, those endpoints have to be authenticated. But for a get, you can permit those. And then the slash star star is an ant wild card that says any endpoint. I could spell out particular endpoints if I want to, but I'm saying a wild card of any endpoint here. I'm employing HTTP, basic authorization and form login. And then because we're just running this in a local environment and invoking curl, the CSRF sort of gets in the way so we're going to disable that. There's other ways to handle that in a production environment, but since we're just doing this on our local, then it's fine. Okay, so next we're going to build this again
>
> **[4:07](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway?u=76281980&t=247)** and run it. And let's check to see if we can get a list of packages now. And yes, it returned. Okay, we got our packages, TOR packages. Now what do we do when we want to actually invoke a protected endpoint? So if I go back to my log of my gateway, I scroll up, I see this generated message in the log saying, user using generated security password. So this password is generated and it's new on each time whenever you start up this service. And I'm just going to copy that. And now here, I have a curl to create a new package. And so it's a HGTP post to packages on 8080. The content type is adjacent. And I'm going to create a new package, called beekeepers you betcha, and the code is capital B, capital B. And then in curl, you have this option to have a username and password. So the default user is user. And now I'm going to paste in the password. Okay. And it looks like it worked. It returned, HTTP 201 created. And now let's go back to that first curl
>
> **[5:40](https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway?u=76281980&t=340)** where it did a get and we're going to say BB on packages, and it found it. So this is just our first iteration with this customer of security. I think, you know, as it goes on, we'll maybe have some more strict authorization, but for now, all that we need to do is pass in a secured way, that token to the people that have to have authorization to add packages and add tours and delete them, modify them, as well as uploading images. They would have to use that token. And it could be used as a straight thing, as we did with the username password on curl. We could also have it base 64 encoded and use the HTTP auth header. But this is just our first go around. Spring security is huge. There are so many different options that you could do, you know, if we ended up doing OAuth or whatever. There's actual courses just on spring security. So if you need to know more, delve into it. It's really worth learning more about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Security]] (6), [[Spring Boot]] (1), [[Java]] (1), [[GitHub]] (1), [[Flux]] (1)
> **Env Vars:** http (5), jpa (2), api (1), csrf (1), tor (1)
> **CLI Commands:** curl (6)
> **Cross-References:** go back to (2)
> **Tools:** github (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)

#### [Orchestrate with Docker Compose](https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose?u=76281980&t=0)** - [Instructor] There are many ways to deploy these three [[Microservices]] into a production environment which will hide the domain microservices behind an API gateway. We are going to simulate a production deployment locally with the Docker [[Jetpack Compose|Compose]] engine. So it's not important for you to know how to create your own deployment with Docker Compose. I just wanted to show you how microservices play well in a containerized environment. So the goal of this is to build and deploy on one command line. So what do we want to do? You want to compile all your microservices, create Docker images for all three of your microservices with Jib, download the [[MongoDB]] image, launch and configure it, download the [[MySQL]] image, launch and configure it, launch and configure the explorecali-images, hiding port 8081, launch and configure the explorecali-jpa image and hiding port 8082, and launch and configure the gateway, exposing port 8080. And believe it or not, we can do it all on that one line with mvn clean compile jib:dockerBuild and then the command docker-compose up. Now what did I do to make that happen? First I created a pom.xml in our base folder and declared our three modules within it, the explorecali-gateway, images, and jpa,
>
> **[1:37](https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose?u=76281980&t=97)** and then I have the plugin for Jib within that pom but I configure it to skip. So don't run Jib for the main base module. Next, I modified the explorecali-gateway application.yaml so we override the default URL to use system environment variables. The two variables are JPA_APP_URI and the other is MONGO_APP_URI. Before we just hardcoded it to localhost:8082 and localhost:8081. Now we can override with environment variables. And lastly is I created a docker-compose.xml in the base folder. So we apply the environment variables MONGO_APP_URI and JPA_APP_URI in the parent folder and define five services. These services are just the named running containers of their Docker images. The Mongo and MySQL images are downloaded from Docker Hub and instantiated as mongo-db and mysql-db containers. mongo-app is the instantiation of our explorecali-images microservice and it depends on mongo-db. It is port 8081 and is not published outside the Docker Compose instance. jpa-app is the instantiation
>
> **[3:11](https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose?u=76281980&t=191)** of our explorecali-jpa microservice and it depends on the mysql-db. Its port is 8082 and it is not published, and finally, gateway-app is the instantiation of our explorecali-gateway microservice. It depends on our jpa and mongo-apps. Its port has been published as 8080. So within the Docker Compose, container services reference each other with just HTTP, the service name, and its port which is how we assign our URI environment variables. So let's look at the docker-compose.xml. So here's our docker-compose.xml and our five services, and I wanted to call out in our mongo-app which is the container for the images this environment variable. This is the spring.application.[[JSON]]. This is things that you would typically see within the applications.properties. So we have our server port set at 8081 and then the details on how to connect to the mongo-db. All of the usernames and passwords and we do not want spring.docker.compose to run within it. We are setting up the database ourselves, so we are not going to use this spring.docker.compose engine, so that's disabled. The same in our jpa-app.
>
> **[4:43](https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose?u=76281980&t=283)** Here we have the server.port to 8081 and then our datasource.url to connect to MySQL is in here and as well as our username and the password, and again, we do not want spring.docker.compose to run. So let's build this.
>
> **[5:12](https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose?u=76281980&t=312)** So all on that one line we'll build, make the images, and deploy to the Docker container, and I'm going to bring this desktop up so we can watch it as it goes. So we see it's creating the images.
>
> **[5:38](https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose?u=76281980&t=338)** It's the creating the MongoDB application.
>
> **[5:48](https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose?u=76281980&t=348)** So one thing I've noticed whenever I was creating this was that sometimes it takes a while for the MySQL to start up and to connect to it locally. So on my gateway-app and on my apps for jpa to restart on failure. If it fails to connect, then just keep trying. So if you saw some error messages there, it's just going to try and try until it works again. So we see that finally the JPA is up and we have our persistent packages and tours. Let's try to get our packages, and there they are. There are our packages. I'll show you, if I try that again and just tried it on the 8082 port, it won't work because it is not exposed. Now let's try to invoke a protected source, so we need to look in the logs for the gateway and here's our generated password.
>
> **[7:06](https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose?u=76281980&t=426)** I created a curlscommand.text file which will help do common curl methods to access our endpoints. So let's do the operation to upload an image. I'm just going to paste into here the password and this curl will upload a file called Booth.1. I just have to rename that, it's actually Booth. There is a file here, an image within the container. So we are running this locally within the [[Codespaces]] virtual machine. And it worked and we got the ID back. So if we wanted to get a list of all the images, there is our image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (11), [[MySQL]] (6), [[Microservices]] (5), [[MongoDB]] (2), [[JSON]] (1)
> **CLI Commands:** docker (15), mongo (7), mysql (6), make (2), curl (2)
> **Env Vars:** jpa_app_uri (2), mongo_app_uri (2), api (1), url (1), http (1)
> **File Paths:** docker-compose.xml (3), pom.xml (1), application.yaml (1), spring.application.json (1)
> **Ports:** port 8081 (2), port 8082 (1), port 8080 (1), :8082 (1), :8081 (1)
> **Prerequisites:** configure (6)
> **URLs:** [localhost:8082](https://localhost:8082) (1), [localhost:8081](https://localhost:8081) (1)
> **Exercise Files:** download the (2)

#### [Cleaning up the workspace](https://www.linkedin.com/learning/creating-spring-boot-microservices/cleaning-up-our-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/cleaning-up-our-workspace?u=76281980&t=0)** - [Instructor] I wanted to add one final note of how to tear down everything that we have built up. So right now we have Docker [[Jetpack Compose|Compose]] running. We want to tear everything down and clean up our code spaces. So the first thing we do is in this window, I'm hitting Control + C, which will stop the docker containers. You could see the docker containers are stopping. And then I want to remove the images. I can actually, are you sure you want to stop the containers? Yes. And remove them. So this will remove them. And now I want to remove the images. Yes. I want to remove the images.
>
> **[0:55](https://www.linkedin.com/learning/creating-spring-boot-microservices/cleaning-up-our-workspace?u=76281980&t=55)** So all the images are removed. And then I want to have the volumes removed as well. And since the images are removed, I could do docker volume prune. Yes, I'm sure. And one last thing is that a folder is called data. And this is where the persistent information would be stored for our Mongo and [[MySQL]] [[Databases]] between runs. However, if I would try to remove that folder,
>
> **[1:32](https://www.linkedin.com/learning/creating-spring-boot-microservices/cleaning-up-our-workspace?u=76281980&t=92)** I do not have permission. It does not let me. So what I have to do is do, within code space is pseudo su root. So I can actually go into the root user and do an rm -r data and then the folder is gone. So if you wanted to start fresh with no images, one option is to remove your code spaces instance and create a new one. Or this is the way to do it one at a time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (1), [[MySQL]] (1), [[Databases]] (1)
> **CLI Commands:** docker (4), mongo (1), mysql (1), rm (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/creating-spring-boot-microservices/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-spring-boot-microservices/next-steps?u=76281980&t=0)** - Thanks for joining me on this journey of creating [[Spring Boot]] [[Microservices]]. So what's next? We barely scratched the surface of [[Spring Data]]'s capabilities, so for more details, check out my course, Spring Data. And if you want to learn more about Docker, I have an [[Introduction to Docker for Java Developers]] course. I hope you enjoyed shadowing me, and I hope this helps you in your spring [[Application Development]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (2), [[Spring Boot]] (1), [[Microservices]] (1), [[Java]] (1), [[Application Development]] (1)
> **CLI Commands:** docker (2)
> **Speakers:** - thanks (1)


## Instructor

- [[Mary Ellen Bowman]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/creating-spring-boot-microservices-3839084/codespaces)

## Skills Covered

- Microservices
- Spring Boot

## Path Context

### In [[Getting Started In Spring Development]]
← [[Learning Spring 6 With Spring Boot]] | **2 of 5** | [[Spring Data 2]] →

## Appears In

- [[Getting Started In Spring Development]]

## Related Courses

_Courses sharing skills:_

- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Spring Boot
- [[Advanced Spring- Spring Boot Actuator]] — Spring Boot
- [[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing]] — Spring Boot
- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Spring Boot
- [[Advanced Spring- Effective Integration Testing with Spring Boot]] — Spring Boot

---

[↑ Back to top](#)