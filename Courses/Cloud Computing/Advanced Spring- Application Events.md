---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-spring-application-events
url: "https://www.linkedin.com/learning/advanced-spring-application-events"
duration_minutes: 43
duration: 43m
level: Advanced
updated: 7/14/2021
learners: 9810
skills:
  - Spring Framework
  - Software Architectural Design
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHruy-utfvsCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626117142879?e=2147483647&amp;v=beta&amp;t=fNocRdL2VOHR0D_MSyg5v4XklnWSjVxh58ORoRX2H_w"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Advance Your Spring Development Skills]]'
prev_courses:
  - '[[Advanced Spring- Spring Boot Actuator]]'
next_courses:
  - '[[Advanced Spring- Effective Integration Testing with Spring Boot]]'
path_nav: '[{"path":"Advance Your Spring Development Skills","position":5,"total":6,"prev":"Advanced Spring- Spring Boot Actuator","next":"Advanced Spring- Effective Integration Testing with Spring Boot"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/spring-framework
  - skill/software-architectural-design
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Advanced%20Spring-%20Application%20Events.md)

![Advanced Spring: Application Events](https://media.licdn.com/dms/image/v2/C560DAQHruy-utfvsCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626117142879?e=2147483647&amp;v=beta&amp;t=fNocRdL2VOHR0D_MSyg5v4XklnWSjVxh58ORoRX2H_w)

# Advanced Spring: Application Events

> Figuring out how to architect a new application is a big deal. Doing it the wrong way can lead to a huge headache later. Testing and refactoring can become nightmarish. But it doesn't have to be that way. In this course, instructor Terezija Semenski shows you powerful, easy-to-follow design techniques for Spring events that you can use to write clean, testable, maintainable code with flexible and 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events) | 43m | Advanced | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Take advantage of Spring events](#take-advantage-of-spring-events)
  - [What you need to know](#what-you-need-to-know)
- [**1. Exploring the Power of Spring Events**](#1-exploring-the-power-of-spring-events) (2 videos)
  - [Spring events vs. direct method calls](#spring-events-vs-direct-method-calls)
  - [Highlights of Spring events](#highlights-of-spring-events)
- [**2. Implementing Custom Spring Events**](#2-implementing-custom-spring-events) (4 videos)
  - [Create and publish custom events](#create-and-publish-custom-events)
  - [Implement a new listener for events](#implement-a-new-listener-for-events)
  - [Challenge: Create a new event listener](#challenge-create-a-new-event-listener)
  - [Solution: Create a new event listener](#solution-create-a-new-event-listener)
- [**3. Async and Filtering Events**](#3-async-and-filtering-events) (2 videos)
  - [Implement asynchronous events](#implement-asynchronous-events)
  - [Filter events](#filter-events)
- [**4. Transactional Events**](#4-transactional-events) (4 videos)
  - [Transaction bound events](#transaction-bound-events)
  - [Implement custom transaction event listeners](#implement-custom-transaction-event-listeners)
  - [Challenge: Create a custom transaction event listener](#challenge-create-a-custom-transaction-event-listener)
  - [Solution: Create a custom transaction event listener](#solution-create-a-custom-transaction-event-listener)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Take advantage of Spring events
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=0)** - [Terezija] Writing clean and modular code has never been more important.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=5)** Doing it the wrong way can lead to huge headaches later.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=10)** Spring events give developers an easy way to implement flexible and loosely coupled architectural design.
>
> **[0:20](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=20)** In this course, we'll cover key concepts of Spring events.
>
> **[0:25](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=25)** You will learn how to avoid bad design, breaking solid principles, cycling dependencies, and how easy it is to add new features without refactoring existing code.
>
> **[0:39](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=39)** And most importantly, I'll demonstrate some three key real world scenarios of using events with resections, (mumbles) calls and the long running services.
>
> **[0:51](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=51)** Hi, I'm Terezija Semenski.
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=54)** I've been a software developer in Java and Spring for over a decade.
>
> **[0:59](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=59)** Join me in this course to learn how Spring events work internally.
>
> **[1:04](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=64)** What are the benefits and how you can apply them in your next project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), next (1)
> **Speakers:** - [terezija] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Before starting this course, let's explore what skills and knowledge you will need.
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-application-events/what-you-need-to-know?u=76281980&t=6)** This course is targeted at intermediate and advanced developers.
>
> **[0:11](https://www.linkedin.com/learning/advanced-spring-application-events/what-you-need-to-know?u=76281980&t=11)** In order to truly be successful in this course, you should have experience with Java and solid understanding of Spring Framework and Spring Boot.
>
> **[0:22](https://www.linkedin.com/learning/advanced-spring-application-events/what-you-need-to-know?u=76281980&t=22)** Our focus will be on the latest versions of Java 15 and Spring Boot, current 2.5.
>
> **[0:30](https://www.linkedin.com/learning/advanced-spring-application-events/what-you-need-to-know?u=76281980&t=30)** Throughout this course, we will be using IntelliJID, but any Java IDE is sufficient with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Spring Boot]] (2), [[Spring Framework]] (1)
> **Versions:** java 15 (1), 2.5 (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)


### 1. Exploring the Power of Spring Events

[↑ Back to Table of Contents](#table-of-contents)

#### Spring events vs. direct method calls
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=0)** - Spring Events are one of the more used functionalities in the framework, but also one of the more useful.
>
> **[0:08](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=8)** They give developers a way for different components to communicate and have more flexibility with each other than the traditional method calls.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=19)** The one system leads to more flexible and loosely coupled architectural design.
>
> **[0:26](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=26)** Coupling refers to a degree of knowledge that one object has about the other object that it interacts with.
>
> **[0:34](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=34)** The loose coupling architecture design can handle changes because they reduce the dependency between multiple components.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=43)** It reduces the risk that the change made between one component might create an anticipated impact on the other component.
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=54)** It simplifies testing, maintenance and troubleshooting problems.
>
> **[0:59](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=59)** Another benefit of Event system is it provides published subscribe capability.
>
> **[1:05](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=65)** Which means subscribers can be added or removed at any point in time.
>
> **[1:13](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=73)** Event publishers and Event subscribers are not tied up and can be used independently of each other.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=81)** Event system allows sending data to other components effectively.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=86)** Also changes in the publisher or listener will not affect each other as both are independent.
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=93)** They are free to make their own changes.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=96)** Event system allows invoking logic on multiple components at the same time.
>
> **[1:43](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=103)** Having said that, does any pattern come to your mind?
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=108)** It is the observer pattern that is well known from the Gang of Four design patterns.
>
> **[1:55](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=115)** Where in the observer pattern, we refer to observers.
>
> **[1:59](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=119)** In spring event system we refer to listeners.
>
> **[2:03](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=123)** When we refer to subject, we actually refer to event publisher.
>
> **[2:09](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=129)** So how do events compare to traditional method calls?
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=135)** When one class calls methods in another class, those classes are tightly coupled.
>
> **[2:23](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=143)** The more classes you have tightly coupled, the more difficult it becomes to make a change to one of them without having to also change several others.
>
> **[2:34](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=154)** Event driven are architecture also follows an open-closed principle.
>
> **[2:40](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=160)** Which means open for extension, but closed for modification.
>
> **[2:47](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=167)** For example.
>
> **[2:48](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=168)** Imagine we need to process a customer order and depending on some criterias send an email to the customer or update customer reward points.
>
> **[2:59](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=179)** With direct method calls, each time we need to make changes on order service.
>
> **[3:06](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=186)** At the same time, changes to the email service, also effect order service.
>
> **[3:12](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=192)** However, by using an event system, we can close order service for modification by using events and we can easily extend the behavior by implementing new listeners.
>
> **[3:27](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=207)** Event driven architectures allow new functionalities to be added with no disruption of old ones as the domain expands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Troubleshooting]] (1), data (1), [[Design Patterns]] (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (1), imagine (1)
> **Definitions:** refers to (1)
> **Speakers:** - spring (1)

#### Highlights of Spring events
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=0)** - [Instructor] Now that you're familiar with Event System Architectures, let's explore all features Spring Events, bring to the table.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=10)** Spring Events are one of the core capabilities provided by Spring Framework.
>
> **[0:16](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=16)** They allow us to publish and listen to specific Application Events that we can process as we wish.
>
> **[0:25](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=25)** Core components of Spring Events are Events, Publisher and Listeners.
>
> **[0:32](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=32)** An ApplicationEvent is a simple POJO class that holds data and is exchanged between publisher and listener.
>
> **[0:42](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=42)** Publisher constructs the event object and publishes it to anyone who is listening.
>
> **[0:49](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=49)** It uses ApplicationEventPublisher being and its Publisher event method.
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=55)** Listeners, there are different flavors of implementing listeners to an event.
>
> **[1:02](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=62)** It can be implemented within notations or by implementing Application Listener.
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=68)** The neat thing is that Spring does all the heavy lifting for us and registered all listeners.
>
> **[1:15](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=75)** So there is no need for manual registration.
>
> **[1:19](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=79)** Spring Events ones are by default synchronous, meaning the publisher thread blocks until all listeners have finished processing the event.
>
> **[1:30](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=90)** However, Spring also supports Asynchronous mode, meaning that it went as published in a new thread and release execution of publisher independently from the listener.
>
> **[1:44](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=104)** Transection Bound Events, Spring allows us to bind an Event Listener to phase of the current transaction.
>
> **[1:52](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=112)** This allows events to be used with more flexibility when the outcome of the current transaction matters to the listener.
>
> **[2:01](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=121)** Filtering Events, Spring Events gives us an option to find tune conditions under which circumstances our Event Listener will be triggered.
>
> **[2:12](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=132)** By default, Spring would provide several predefined application events that are tied to the life cycle of Spring Application Context.
>
> **[2:23](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=143)** So we can register listeners that are revoked.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=147)** When for example, Application Context is started.
>
> **[2:31](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=151)** However, if we have a use case where we want our listener to be triggered before Application Context is created, we need to register those listeners manually.
>
> **[2:43](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=163)** As we have seen the support for Application Events in Spring is pretty comprehensive and comes with a handful of features, which we will cover in detail in the next lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (7), [[Spring Framework]] (1), data (1), next (1)
> **CLI Commands:** find (1)
> **Env Vars:** pojo (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Implementing Custom Spring Events

[↑ Back to Table of Contents](#table-of-contents)

#### Create and publish custom events
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=0)** - [Instructor] Now that we have learned the benefits and highlights of Spring Events, let's take them into practice by creating our first Application Event.
>
> **[0:11](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=11)** Before we dive into the code, let me introduce you to the application we will be refactoring and extending throughout this course.
>
> **[0:20](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=20)** Our application is an e-commerce system that contains orders, products, and customers.
>
> **[0:28](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=28)** Through our journey, we will be refactoring existing and adding new functionalities by paying close attention to architectural impact, and pros and cons of each approach.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=41)** In this lesson, the use case we will be focusing on is the customer registration.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=48)** Imagine a customer has initiated registration, such a use case would persist a customer in the database, trigger an email service, maybe invoke external CRM registration system, and many other things.
>
> **[1:06](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=66)** Let's analyze how the simple case of persisting a customer and sending an email would be reflected in the code.
>
> **[1:16](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=76)** Make sure you have downloaded the exercise files, unzip the project files, and open it in the IDE of your choice, either from the terminal or from Java IDE.
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=93)** Immediately after opening the project, IntelliJ will pull all the Maven dependencies.
>
> **[1:40](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=100)** Make sure that you have the correct Java version installed.
>
> **[1:45](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=105)** You can check it by opening File, Project Structure.
>
> **[1:49](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=109)** Under Project SDK, you should see Java 15.
>
> **[2:00](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=120)** Our customer and email service are split into two different packages.
>
> **[2:05](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=125)** You can also imagine those could live in separate Maven modules.
>
> **[2:11](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=131)** Both customer and email service are Spring Beans.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=136)** In a typical imperative style, our CustomerService would call CustomerRepository to store customer in database, and would trigger an EmailService.
>
> **[2:29](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=149)** The fact that customerService has to know about sending emails has a couple of consequences, and pros and cons.
>
> **[2:39](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=159)** Very obvious advantage is that by looking at the code, we can understand the entire use case.
>
> **[2:46](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=166)** Even if there are other use cases coupled with customer registration, we know we need to add it here.
>
> **[2:54](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=174)** However, imagine adding promotion for a new customer or updating some external systems.
>
> **[3:04](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=184)** We not only need to provide an email service, but also all other functionalities that are coming up and centered around customer registration.
>
> **[3:15](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=195)** We might argue, why should the customer registration process need to know about all those first functionalities that are centered around it?
>
> **[3:25](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=205)** This creates more cyclic dependencies, and violates the single responsibility principle.
>
> **[3:33](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=213)** Testing becomes much harder as we might need to mock all different dependencies.
>
> **[3:40](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=220)** What will this look like in our system?
>
> **[3:45](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=225)** Let's create our first event by creating a new class in the Customer package.
>
> **[3:53](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=233)** We will call it CustomerRegisteredEvent.
>
> **[3:59](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=239)** We can extend an application event base class, however, since Spring version 4.2, this is no longer required, so we can leave it empty.
>
> **[4:12](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=252)** As part of our event, we want to make sure it contains the Customer object.
>
> **[4:19](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=259)** For getters, setters, and constructors, we can add annotation from project lombok.
>
> **[4:29](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=269)** Now in our CustomerService, in order to publish an event, we just need to inject ApplicationEventPublisher Bean.
>
> **[4:41](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=281)** And in our business logic, we can now call publisher.publishevent.
>
> **[4:49](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=289)** And as an argument provide CustomerRegisteredEvent together with the customer.
>
> **[4:55](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=295)** Since we migrated to events, we can remove dependencies to emailService.
>
> **[5:02](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=302)** In the next lesson, we will proceed by implementing listener for CustomerRegisteredEvent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (4), [[Java]] (3), database (2), [[E-Commerce]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (3), unzip (1)
> **Env Vars:** ide (2), crm (1), sdk (1)
> **Analogies:** imagine (3)
> **Code Identifiers:** customerservice (1), emailservice (1)
> **Versions:** java 15 (1), version 4 (1)
> **Cross-References:** coming up (1), in the next (1)
> **Tools:** terminal (1), intellij (1)

#### Implement a new listener for events
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=0)** - [Instructor] Now that you have improved the design of ExistingService, let's add new features by implementing an event listener.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=10)** Anyone can have multiple listeners doing different work based on application requirements.
>
> **[0:18](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=18)** Spring gives us two ways to define Listener.
>
> **[0:22](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=22)** We can either implement an ApplicationListener interface or use @EventListener.
>
> **[0:30](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=30)** With ApplicationListener, as long as it is registered as Spring bean, it will receive events.
>
> **[0:38](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=38)** Spring uses the signature of the listener to determine if it matches that event or not.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=46)** Limitations of using ApplicationListener is that it can only be used for objects that extend ApplicationEvent class.
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=55)** On top of that, Listener can only process one event type.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=61)** Starting with Spring 4.2, it's now possible to simply annotate a method over Spring bean with @EventListener.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=72)** Each method will be automatically registered as a new application listener to listen for one or many events, depending on the signature of the method.
>
> **[1:24](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=84)** Unlike ApplicationListener interface, which only supports void return type, annotated methods may have a nonvoid return type.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=95)** When they do, the result of the method in vocation is send as a new event.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=102)** If the return type is either an array or a collection, each element is send as a new individual event.
>
> **[1:51](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=111)** It is also possible to define the order in which listeners for the same event are to be invoked.
>
> **[2:00](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=120)** To do so, we can use SpringCommon @order annotation, alongside EventListener annotation.
>
> **[2:10](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=130)** So far we have created and published RegisteredEvent.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=136)** Now, we need to create a new listener that will capture RegisteredEvent and trigger RegistrationEmail.
>
> **[2:26](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=146)** Under the email package, create a new class called EmailListeners.
>
> **[2:35](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=155)** We need to register a new listener by creating new methods.
>
> **[2:42](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=162)** Return type can be void since we don't need to send new events.
>
> **[2:47](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=167)** Let's call it onRegisteredEvent that accepts type CustomerRegisteredEvent.
>
> **[2:55](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=175)** In order for this method to get triggered when event is sent we need to annotate it with @EventListener.
>
> **[3:03](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=183)** And also mark our class as Spring bean with @Component.
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=191)** Right now, our listener is not doing anything.
>
> **[3:15](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=195)** In order to send an email we just need to inject EmailService.
>
> **[3:25](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=205)** I like to use project loan book @RequiredArcsConstructor to remove well-played code and handle construction injection.
>
> **[3:36](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=216)** And we can now call emailservice.sendregisteredemail by providing a customer from the event that came as a method argument.
>
> **[3:50](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=230)** Keep in mind that the email service we are using is just doing log print.
>
> **[3:57](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=237)** In a real application, we would be using real email implementation.
>
> **[4:03](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=243)** For testing, you can run EmailCustomerServiceTest class and check results for registeredcustomer, foranewcustomer, sendsanemail.
>
> **[4:16](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=256)** You can see that test class does not know anything about events infrastructure.
>
> **[4:23](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=263)** What we only care is that CustomerService receives a new customer and expect an email service has been called.
>
> **[4:43](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=283)** And there you have it.
>
> **[4:44](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=284)** We have successfully refactor the code from using direct method calls to Spring beans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3)
> **Code Identifiers:** onregisteredevent (1)
> **Versions:** 4.2 (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a new event listener
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=6)** - [Instructor] So far, we managed to refactor existing code to move from direct method calls to event system.
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=15)** In this challenge, we want you to extend existing functionality of customer service remove method.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=23)** This method is responsible for removing user from the database.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=29)** However, we also want you to inform the customer, by email, that his account has been removed.
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=37)** First, you should create a new event.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=41)** For example, you can call it CustomerRemovedEvent.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=46)** Make sure this event is published once the customer has been removed.
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=53)** Next, create a listener that is capturing new event and is calling existing methods from email service.
>
> **[1:03](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=63)** For sending an email, you already have a method called CustomerRemovedEmail that is just doing lock print.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=72)** And finally, you can run a test method to test if email service has been called app or user removal.
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=82)** This challenge should take about five to 10 minutes.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=86)** When you're done, or if you get stuck, you can check out my solution reader to see how I solved the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (1), next (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create a new event listener
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:08](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=8)** How did you make out with the challenge?
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=10)** I hope you were successful.
>
> **[0:12](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=12)** I will walk you through my solution.
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=15)** Now it might look different than yours, but that's fine, as long as the outcome is the same.
>
> **[0:22](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=22)** First, between the customer package, we will create a new class, CustomerRemovedEvent, which will be used as an event class.
>
> **[0:33](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=33)** This is just a POJO that needs to hold a customer object.
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=37)** I like to use long block annotations to make things less cluttered.
>
> **[0:42](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=42)** Now in our customer service, remove customer method, make sure after the customer has been removed, we publish an event.
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=53)** ApplicationEventPublisher has already been injected from the previous exercise, so we can use it to publish a new CustomerRemovedEvent.
>
> **[1:06](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=66)** In the new CustomerRemovedEvent, we need to also include a reference through removed customer.
>
> **[1:14](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=74)** Between EventListener's class, create a new method called onCustomerRemovedEvent with the argument CustomerRemovedEvent and annotate it with @EventListener.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=94)** For sending an email, we will use an existing method from email service, sendCustomerRemovedEmail, and call it between our method.
>
> **[1:45](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=105)** Keep in mind, this method is just doing log print.
>
> **[1:51](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=111)** And finally, you can run a test method to test if email service has been called up, and it was a removal.
>
> **[2:06](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=126)** And there you have it.
>
> **[2:08](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=128)** We managed to extend existing functionalities by using events.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Identifiers:** oncustomerremovedevent (1), sendcustomerremovedemail (1)
> **Env Vars:** pojo (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Async and Filtering Events

[↑ Back to Table of Contents](#table-of-contents)

#### Implement asynchronous events
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=0)** - [Instructor] By default, spring events are synchronous, meaning the publisher thread blocks until all listeners interested in a particular event have finished processing the event.
>
> **[0:13](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=13)** What if we have a listener that takes too long to get executed and publishing synchronously?
>
> **[0:20](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=20)** It isn't really what we're looking for.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=23)** We may need asynchronous handling of our events.
>
> **[0:27](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=27)** To make an event listener run in async mode, all they have to do is use the at S in connotation on that listener.
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=37)** We also need to enable asynchronous processing by adding at enable Async on top of our spring configuration.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=46)** Keep in mind that using Async in event system comes with its limitations.
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=54)** Async listeners cannot publish a subsequent event by returning value.
>
> **[1:00](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=60)** If you need to publish another event, use application event publisher.
>
> **[1:06](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=66)** If an asynchronous event listener throws an exception, it's not propagated to the caller.
>
> **[1:13](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=73)** However, by implementing Async Uncaught Exception Handler Interface, we can process any asynchronous exceptions.
>
> **[1:24](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=84)** As part of our exercise, we need to add a new feature on top of customer registration use-case.
>
> **[1:32](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=92)** For each registration, we need to form external analytics system so our marketing people can start to track them in a customer funnel.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=102)** However, external call is really slow and it doesn't make sense we blog the whole use case.
>
> **[1:50](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=110)** Running this event asynchronously sound like a perfect fit.
>
> **[1:56](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=116)** Let's go back to our project and create a new event listener.
>
> **[2:02](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=122)** First under the analytics package, we have a class analytics service that has a method called register new customer with a timeout of five seconds to simulate long running service.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=136)** What we need is the listener that we'll call this method.
>
> **[2:21](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=141)** We need a new class called analytics customer registered listener.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=147)** Since this is a spring bean, we will add, add component annotation.
>
> **[2:35](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=155)** We will create a new method of type word called unregister event with the argument customer registered event.
>
> **[2:48](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=168)** We need to call analytics service, which we will first inject with constructor injection.
>
> **[2:57](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=177)** Now we can use it as a part of our listener.
>
> **[3:03](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=183)** We also need to mark our listener as add event listener and add Asynch annotations.
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=191)** To verify if our listener and analytics service has been triggered, we can run our test.
>
> **[3:18](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=198)** The test is calling customer service dot register.
>
> **[3:22](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=202)** We are also verifying the call to register new customer.
>
> **[3:27](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=207)** Due to the nature of us in Kronos, the call to this service might not have been called immediately after the main thread of customer service has finished.
>
> **[3:37](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=217)** So we added a small timeout.
>
> **[3:41](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=221)** Let's run our tests.
>
> **[3:47](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=227)** Even though our test is green, notice that customer register has been running more than five seconds.
>
> **[3:56](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=236)** We forgot to enable asynchronous method execution capability.
>
> **[4:01](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=241)** To do that, we just need to add, add enable async inner spring configuration.
>
> **[4:16](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=256)** After we re-run our test, you can see registered new customer method has been called, but we weren't waiting for it to end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Analytics]] (6), application (1), feature (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Filter events
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=0)** - [Instructor] In certain circumstances, we may want our event listeners to be triggered.
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=6)** Let's say you want to execute event listeners only for users that belong to the VIP group.
>
> **[0:14](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=14)** You could write this by implementing if statements.
>
> **[0:18](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=18)** However, overusing conditionals results in code that is more complex and difficult to maintain.
>
> **[0:26](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=26)** In some cases we can avoid this by fine tuning those conditions with @EventListener and Spring Expression Language.
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=37)** @EventListener provides a conditional tribute that accepts spell expression.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=43)** The event will be handled if the expression evaluates the Boolean true, or one of the following strings: true, on, yes, or one.
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=55)** The default expression is empty string, meaning the event is always handled.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=61)** Here's some examples for referencing event and its content.
>
> **[1:06](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=66)** #event to reference an event.
>
> **[1:10](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=70)** #event.customer.type equals b2c.
>
> **[1:16](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=76)** We can also reference other Spring beans with at @myBean.test #event.
>
> **[1:25](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=85)** For more on expressions, you can check Spring docs.
>
> **[1:30](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=90)** In this lesson, our marketing department is asking us to run a promotion for all new customers who have signed up for a newsletter.
>
> **[1:41](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=101)** This sounds like a perfect candidate for conditional event listeners.
>
> **[1:47](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=107)** Within the promotion package, we will create a new promotion listeners class.
>
> **[2:00](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=120)** Mark it as a Spring bean.
>
> **[2:05](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=125)** Let's create a new method on registration event of type void with customer register event as an argument.
>
> **[2:20](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=140)** We will also inject and use promotion service and its method applied from promotion.
>
> **[2:33](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=153)** Now, if you mark our method only with @EventListener, it will be triggered every time.
>
> **[2:40](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=160)** We need to apply the condition by first referencing the event, customer, and newsletter.
>
> **[2:51](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=171)** In our test package, we have a class with methods that check if promotions are applied or not depending if customer applied for a newsletter.
>
> **[3:12](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=192)** If we have done our job right, our registered customer test cases should be green.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (1)
> **Code Identifiers:** mybean (1)
> **Env Vars:** vip (1)
> **Speakers:** - [instructor] (1)


### 4. Transactional Events

[↑ Back to Table of Contents](#table-of-contents)

#### Transaction bound events
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=0)** - [Instructor] Spring allows us to bind an EventListener to phase of the current resection.
>
> **[0:07](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=7)** In this lesson, you will learn how to allow the events to be used with more flexibility when the outcome of the current transaction matters to the listener.
>
> **[0:18](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=18)** In Spring, whenever we want our class or methods to be executed in a transaction, we use transactional notation.
>
> **[0:28](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=28)** It is used to combine more than one rights on a database as a single atomic operation.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=35)** When somebody calls the method annotated with transactional, all or none of the rights of the database are executed.
>
> **[0:45](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=45)** Now, imagine using events within transactional context.
>
> **[0:50](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=50)** What does this look like?
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=53)** Let's look at the example of an order management.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=57)** When a customer places an order in our e-commerce system, order service runs in transaction and makes updates to the order from saved to completed by calling order repository.
>
> **[1:13](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=73)** It also publishes an order completed event, which triggers all interested listeners.
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=82)** In our case, we have a listener that updates user reward points or for customer and another one that sends a notification email about an order completed successfully.
>
> **[1:37](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=97)** Since we are running under transaction, all database updates either get committed or rolled back.
>
> **[1:45](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=105)** In our case, we have consistency, since both order and user reward points need to get updated, or in our case, after an error both get reverted.
>
> **[1:59](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=119)** So far so good, but what about the case of an error?
>
> **[2:06](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=126)** In case an exception happens, sever in order service or order repository, everything is still good, as we haven't published an event yet.
>
> **[2:18](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=138)** In case an exception happens in the first listener, we still might be on the safe side as invocation of other listeners is interrupted.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=150)** Everything is rolled back, so we have consistent state between order and customer reward points and the email has not been sent yet.
>
> **[2:40](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=160)** The same goes for the listener that sends out an email.
>
> **[2:45](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=165)** However, what if there are no exceptions?
>
> **[2:49](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=169)** Both order repository and customer repository issue stage changes.
>
> **[2:55](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=175)** Commit has not yet occurred.
>
> **[2:58](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=178)** An email is sent, and at the end of the method execution, commit fails, and stage changes are rolled back.
>
> **[3:08](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=188)** We still have a consistent state in database with no order completed and reward points changed.
>
> **[3:16](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=196)** However, we have sent an email to the client that the transaction went through.
>
> **[3:22](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=202)** We would much rather wait for the commit to successfully happen and then issue an email.
>
> **[3:30](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=210)** Spring provides us a special kind of listener called TransactionalEventListener.
>
> **[3:38](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=218)** This doesn't mean that the event listener is transactional itself, but event consumption is delayed until a certain transaction outcome.
>
> **[3:50](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=230)** This gives us more fine grain control on when event listeners should get triggered based on the transaction phase.
>
> **[4:00](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=240)** Before commit, the event will be handled before the transaction commit.
>
> **[4:06](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=246)** After commit, this is a default phase used.
>
> **[4:10](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=250)** The event will be handled when the transaction gets committed successfully.
>
> **[4:14](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=254)** We can use this in our event listener should only run if the current transaction was successful.
>
> **[4:22](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=262)** After rollback, the event will be handled after the transaction has rolled back.
>
> **[4:29](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=269)** After completion, the event will be handled when the transaction commits or is rolled back.
>
> **[4:36](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=276)** We can use it in cases we want to always run our listener.
>
> **[4:42](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=282)** This leads us to the following rule.
>
> **[4:45](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=285)** It is almost always advised to avoid infrastructure interactions within EventListener that is part of transactional context.
>
> **[4:56](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=296)** Not only does it cause the transaction to run longer, but more problematic is if subsequent event listener fails and the transaction rolls back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (4), management (1), [[E-Commerce]] (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Implement custom transaction event listeners
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=0)** - [Instructor] Previously, you learned how to delay event conception until a certain phase of transaction with @TransactionalEventListener.
>
> **[0:11](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=11)** Let's use it to our advantage to fix the use-case of placing an order when an email is sent even though rollback has occurred.
>
> **[0:22](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=22)** In our project, we have order package with OrderService.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=29)** OrderService has a method, placeOrder, which accepts an order as an argument.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=36)** As you can see, it is changing the status of the order to complete it, saving it to the database, and after that, publishing an order-completed event.
>
> **[0:49](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=49)** Now, we need to create listener in promotion listeners clause, which listens for order-completed event.
>
> **[1:10](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=70)** We also need to call promotion service dot calculate reward points.
>
> **[1:18](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=78)** Whenever a new order is made, our listener appends rewards status points to the customer.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=86)** Imagine here logic that iterates through each order entry that contains products with quantities and calculates the sum of all gathered reward points.
>
> **[1:38](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=98)** For the sake of simulation, reward points have been hard-coded to 10 for each order.
>
> **[1:46](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=106)** This number is appended to the existing customer reward points.
>
> **[1:51](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=111)** We also need to append email listener for order-completed event, which is responsible for sending out an email.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=144)** Now let's check our two test cases, one, where a transaction has been successfully committed and an email has been sent, and another, where rollback is occurring and email should not be sent.
>
> **[2:43](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=163)** Keep in mind, there is one caveat to put rollback to the test.
>
> **[2:49](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=169)** Since we want our commit to fail, there is a constraint on customer reward points which only accepts two digits, which means customers have a maximum of 99 reward points.
>
> **[3:05](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=185)** Since we start with 90 points and on each order append 10 more, we expect the commit to fail.
>
> **[3:14](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=194)** Let's run them through.
>
> **[3:21](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=201)** Well, the first one seems fine.
>
> **[3:24](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=204)** The second one failed.
>
> **[3:26](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=206)** It seems that rollback did occur but our email went through.
>
> **[3:31](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=211)** We can also see that in the console log.
>
> **[3:37](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=217)** Email did get triggered after reward points listener.
>
> **[3:43](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=223)** Let's notify our email listener to get triggered only after successful commit.
>
> **[3:51](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=231)** For that, we will use @TransactionalEventListener with phase after commit.
>
> **[4:03](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=243)** Even if we leave out the phase, it will still work, as this is the default phase.
>
> **[4:09](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=249)** Now, let's rerun our test.
>
> **[4:21](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=261)** And now we have covered all use-cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (1), [[Microsoft Products|Products]] (1), [[Simulation]] (1)
> **Warnings:** keep in mind (1), caveat (1)
> **Code Identifiers:** placeorder (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a custom transaction event listener
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=0)** - [Instructor] You saw the power of Transaction EventListeners and how we can narrow down when, and if they get triggered.
>
> **[0:14](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=14)** Let's use them to our advantage in this challenge.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=19)** Our order placement use case is almost complete.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=23)** We managed to send an email only on a successful commit.
>
> **[0:28](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=28)** In this challenge, we want you to inform our help desk when the roll back has occurred so they can follow up to check what is wrong with that order.
>
> **[0:40](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=40)** To inform the help desk, you need to use the ticketing service bin and its method create ticket, which accepts an order object.
>
> **[0:50](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=50)** Once you are done with implementation, you can run a ticket service test to verify your implementation.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=57)** The test has two use cases that verify when tickets should and should not get created.
>
> **[1:05](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=65)** This challenge should take about five to 10 minutes.
>
> **[1:09](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=69)** If you get stuck, you can check out my solution video to see how I solved the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a custom transaction event listener
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=0)** - [Instructor] How was the challenge?
>
> **[0:08](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=8)** I hope you were able to solve it and verify the solution with provided tests.
>
> **[0:13](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=13)** I will work through it step by step towards the solution.
>
> **[0:18](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=18)** First, we need to create a transaction event listener.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=23)** We can use some existing class, but I would recommend a new one in a ticket package called ticket order failed listener.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=36)** This is also string bean, so we need to annotate it with add component.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=43)** In the class we need a new method of type void called on order completed event with order complete the event as an argument.
>
> **[0:56](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=56)** This method should only get involved on rollback.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=61)** Since we need to delay invocation, only on a certain phase of the transaction adds through sectional event listener is a perfect fit.
>
> **[1:11](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=71)** We should also define the phase, which in this case is after rollback.
>
> **[1:17](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=77)** What is left to do is called ticket service.
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=82)** So we will inject it with construction injection.
>
> **[1:30](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=90)** In the method body now, we can call ticket service dot create ticket with an order as an argument.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=102)** To verify solution, we need to run the test.
>
> **[1:55](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=115)** And now we can see our test went through.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=0)** - [Terezija] Congratulations, you have made it to the end.
>
> **[0:03](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=3)** I hope you enjoyed this course and now have a solid understanding of Spring events.
>
> **[0:09](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=9)** You've just experienced the benefits of events and how they help you write modular decoupled code.
>
> **[0:17](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=17)** If you want to know more about event-based architectures, I highly recommend searching our library for Allen Holub's course on Software Architecture in Domain-Driven Design.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=29)** You can also check out my course on Advanced Spring Integration Testing Using Spring Boot.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=36)** If you have any questions, please feel free to get in touch on LinkedIn and on Twitter.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=43)** I really do appreciate your engagement as well as your feedback on this course.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=48)** If you enjoyed this course, I'd love to know.
>
> **[0:51](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=51)** Thank you so much for watching and I hope you enjoyed this course, until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Architecture]] (1), [[Integration Testing]] (1), [[Spring Boot]] (1), [[LinkedIn]] (1), next (1)
> **Speakers:** - [terezija] (1)


## Instructor

- [[Terezija Semenski]]

## Resources

- Exercise files available

## Skills Covered

- Spring Framework
- Software Architectural Design

## Path Context

### In [[Advance Your Spring Development Skills]]
← [[Advanced Spring- Spring Boot Actuator]] | **5 of 6** | [[Advanced Spring- Effective Integration Testing with Spring Boot]] →

## Appears In

- [[Advance Your Spring Development Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Spring- Spring Boot Actuator]] — Spring Framework
- [[Performance Tuning in Spring Apps]] — Spring Framework
- [[Spring Framework in Depth]] — Spring Framework
- [[Spring with GraphQL]] — Spring Framework
- [[Spring 6 Design Patterns]] — Spring Framework

---

[↑ Back to top](#)