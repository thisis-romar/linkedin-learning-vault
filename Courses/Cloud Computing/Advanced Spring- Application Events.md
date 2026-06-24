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
  - '[Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)'
prev_courses:
  - '[Advanced Spring- Spring Boot Actuator](Advanced%20Spring-%20Spring%20Boot%20Actuator.md)'
next_courses:
  - '[Advanced Spring- Effective Integration Testing with Spring Boot](../Software%20Development/Advanced%20Spring-%20Effective%20Integration%20Testing%20with%20Spring%20Boot.md)'
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
created: 2026-05-03
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

#### [Take advantage of Spring events](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/take-advantage-of-spring-events?u=76281980&t=0)** - [Terezija] Writing clean and modular code has never been more important. Doing it the wrong way can lead to huge headaches later. Spring events give developers an easy way to implement flexible and loosely coupled architectural design. In this course, we'll cover key concepts of Spring events. You will learn how to avoid bad design, breaking solid principles, cycling dependencies, and how easy it is to add new features without refactoring existing code. And most importantly, I'll demonstrate some three key real world scenarios of using events with resections, (mumbles) calls and the long running services. Hi, I'm Terezija Semenski. I've been a software developer in [Java](../../Skills/Software%20Development/Java.md) and Spring for over a decade. Join me in this course to learn how Spring events work internally. What are the benefits and how you can apply them in your next project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Speakers:** - [terezija] (1)

#### [What you need to know](https://www.linkedin.com/learning/advanced-spring-application-events/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/what-you-need-to-know?u=76281980&t=0)** - [Instructor] Before starting this course, let's explore what skills and knowledge you will need. This course is targeted at intermediate and advanced developers. In order to truly be successful in this course, you should have experience with [Java](../../Skills/Software%20Development/Java.md) and solid understanding of [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) and [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md). Our focus will be on the latest versions of Java 15 and Spring Boot, current 2.5. Throughout this course, we will be using IntelliJID, but any Java IDE is sufficient with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (2), [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) (1)
> **Versions:** java 15 (1), 2.5 (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)


### 1. Exploring the Power of Spring Events

[↑ Back to Table of Contents](#table-of-contents)

#### [Spring events vs. direct method calls](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=0)** - Spring Events are one of the more used functionalities in the framework, but also one of the more useful. They give developers a way for different components to communicate and have more flexibility with each other than the traditional method calls. The one system leads to more flexible and loosely coupled architectural design. Coupling refers to a degree of knowledge that one object has about the other object that it interacts with. The loose coupling architecture design can handle changes because they reduce the dependency between multiple components. It reduces the risk that the change made between one component might create an anticipated impact on the other component. It simplifies testing, maintenance and troubleshooting problems. Another benefit of Event system is it provides published subscribe capability. Which means subscribers can be added or removed at any point in time. Event publishers and Event subscribers are not tied up and can be used independently of each other. Event system allows sending data to other components effectively. Also changes in the publisher or listener will not affect each other as both are independent.
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=93)** They are free to make their own changes. Event system allows invoking logic on multiple components at the same time. Having said that, does any pattern come to your mind? It is the observer pattern that is well known from the Gang of Four [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md). Where in the observer pattern, we refer to observers. In spring event system we refer to listeners. When we refer to subject, we actually refer to event publisher. So how do events compare to traditional method calls? When one class calls methods in another class, those classes are tightly coupled. The more classes you have tightly coupled, the more difficult it becomes to make a change to one of them without having to also change several others. Event driven are architecture also follows an open-closed principle. Which means open for extension, but closed for modification. For example. Imagine we need to process a customer order and depending on some criterias send an email to the customer or update customer reward points. With direct method calls, each time we need to make changes on order service. At the same time, changes to the email service,
>
> **[3:09](https://www.linkedin.com/learning/advanced-spring-application-events/spring-events-vs-direct-method-calls?u=76281980&t=189)** also effect order service. However, by using an event system, we can close order service for modification by using events and we can easily extend the behavior by implementing new listeners. Event driven architectures allow new functionalities to be added with no disruption of old ones as the domain expands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (1), imagine (1)
> **Definitions:** refers to (1)
> **Speakers:** - spring (1)

#### [Highlights of Spring events](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=0)** - [Instructor] Now that you're familiar with Event System Architectures, let's explore all features Spring Events, bring to the table. Spring Events are one of the core capabilities provided by [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md). They allow us to publish and listen to specific Application Events that we can process as we wish. Core components of Spring Events are Events, Publisher and Listeners. An ApplicationEvent is a simple POJO class that holds data and is exchanged between publisher and listener. Publisher constructs the event object and publishes it to anyone who is listening. It uses ApplicationEventPublisher being and its Publisher event method. Listeners, there are different flavors of implementing listeners to an event. It can be implemented within notations or by implementing Application Listener. The neat thing is that Spring does all the heavy lifting for us and registered all listeners. So there is no need for manual registration. Spring Events ones are by default synchronous, meaning the publisher thread blocks until all listeners have finished processing the event. However, Spring also supports Asynchronous mode, meaning that it went as published in a new thread
>
> **[1:38](https://www.linkedin.com/learning/advanced-spring-application-events/highlights-of-spring-events?u=76281980&t=98)** and release execution of publisher independently from the listener. Transection Bound Events, Spring allows us to bind an Event Listener to phase of the current transaction. This allows events to be used with more flexibility when the outcome of the current transaction matters to the listener. Filtering Events, Spring Events gives us an option to find tune conditions under which circumstances our Event Listener will be triggered. By default, Spring would provide several predefined application events that are tied to the life cycle of Spring Application Context. So we can register listeners that are revoked. When for example, Application Context is started. However, if we have a use case where we want our listener to be triggered before Application Context is created, we need to register those listeners manually. As we have seen the support for Application Events in Spring is pretty comprehensive and comes with a handful of features, which we will cover in detail in the next lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Framework](../../Skills/Software%20Development/Spring%20Framework.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** pojo (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Implementing Custom Spring Events

[↑ Back to Table of Contents](#table-of-contents)

#### [Create and publish custom events](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=0)** - [Instructor] Now that we have learned the benefits and highlights of Spring Events, let's take them into practice by creating our first Application Event. Before we dive into the code, let me introduce you to the application we will be refactoring and extending throughout this course. Our application is an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) system that contains orders, [products](../../Skills/Software%20Development/Microsoft%20Products.md), and customers. Through our journey, we will be refactoring existing and adding new functionalities by paying close attention to architectural impact, and pros and cons of each approach. In this lesson, the use case we will be focusing on is the customer registration. Imagine a customer has initiated registration, such a use case would persist a customer in the database, trigger an email service, maybe invoke external CRM registration system, and many other things. Let's analyze how the simple case of persisting a customer and sending an email would be reflected in the code. Make sure you have downloaded the exercise files, unzip the project files, and open it in the IDE of your choice, either from the terminal or from [Java](../../Skills/Software%20Development/Java.md) IDE.
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=93)** Immediately after opening the project, IntelliJ will pull all the Maven dependencies. Make sure that you have the correct Java version installed. You can check it by opening File, Project Structure. Under Project SDK, you should see Java 15.
>
> **[2:00](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=120)** Our customer and email service are split into two different packages. You can also imagine those could live in separate Maven modules. Both customer and email service are Spring Beans. In a typical imperative style, our CustomerService would call CustomerRepository to store customer in database, and would trigger an EmailService. The fact that customerService has to know about sending emails has a couple of consequences, and pros and cons. Very obvious advantage is that by looking at the code, we can understand the entire use case. Even if there are other use cases coupled with customer registration, we know we need to add it here. However, imagine adding promotion for a new customer or updating some external systems. We not only need to provide an email service, but also all other functionalities that are coming up and centered around customer registration. We might argue, why should the customer registration process need to know about all those first functionalities that are centered around it? This creates more cyclic dependencies, and violates the single responsibility principle. Testing becomes much harder as we might need
>
> **[3:37](https://www.linkedin.com/learning/advanced-spring-application-events/create-and-publish-custom-events?u=76281980&t=217)** to mock all different dependencies. What will this look like in our system? Let's create our first event by creating a new class in the Customer package. We will call it CustomerRegisteredEvent. We can extend an application event base class, however, since Spring version 4.2, this is no longer required, so we can leave it empty. As part of our event, we want to make sure it contains the Customer object. For getters, setters, and constructors, we can add annotation from project lombok. Now in our CustomerService, in order to publish an event, we just need to inject ApplicationEventPublisher Bean. And in our business logic, we can now call publisher.publishevent. And as an argument provide CustomerRegisteredEvent together with the customer. Since we migrated to events, we can remove dependencies to emailService. In the next lesson, we will proceed by implementing listener for CustomerRegisteredEvent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** make (3), unzip (1)
> **Env Vars:** ide (2), crm (1), sdk (1)
> **Analogies:** imagine (3)
> **Code Identifiers:** customerservice (1), emailservice (1)
> **Versions:** java 15 (1), version 4 (1)
> **Cross-References:** coming up (1), in the next (1)
> **Tools:** terminal (1), intellij (1)

#### [Implement a new listener for events](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=0)** - [Instructor] Now that you have improved the design of ExistingService, let's add new features by implementing an event listener. Anyone can have multiple listeners doing different work based on application requirements. Spring gives us two ways to define Listener. We can either implement an ApplicationListener interface or use @EventListener. With ApplicationListener, as long as it is registered as Spring bean, it will receive events. Spring uses the signature of the listener to determine if it matches that event or not. Limitations of using ApplicationListener is that it can only be used for objects that extend ApplicationEvent class. On top of that, Listener can only process one event type. Starting with Spring 4.2, it's now possible to simply annotate a method over Spring bean with @EventListener. Each method will be automatically registered as a new application listener to listen for one or many events, depending on the signature of the method. Unlike ApplicationListener interface, which only supports void return type, annotated methods may have a nonvoid return type.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=95)** When they do, the result of the method in vocation is send as a new event. If the return type is either an array or a collection, each element is send as a new individual event. It is also possible to define the order in which listeners for the same event are to be invoked. To do so, we can use SpringCommon @order annotation, alongside EventListener annotation. So far we have created and published RegisteredEvent. Now, we need to create a new listener that will capture RegisteredEvent and trigger RegistrationEmail. Under the email package, create a new class called EmailListeners. We need to register a new listener by creating new methods. Return type can be void since we don't need to send new events. Let's call it onRegisteredEvent that accepts type CustomerRegisteredEvent. In order for this method to get triggered when event is sent we need to annotate it with @EventListener. And also mark our class as Spring bean with @Component. Right now, our listener is not doing anything.
>
> **[3:15](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=195)** In order to send an email we just need to inject EmailService. I like to use project loan book @RequiredArcsConstructor to remove well-played code and handle construction injection. And we can now call emailservice.sendregisteredemail by providing a customer from the event that came as a method argument. Keep in mind that the email service we are using is just doing log print. In a real application, we would be using real email implementation. For testing, you can run EmailCustomerServiceTest class and check results for registeredcustomer, foranewcustomer, sendsanemail. You can see that test class does not know anything about events infrastructure. What we only care is that CustomerService receives a new customer and expect an email service has been called.
>
> **[4:43](https://www.linkedin.com/learning/advanced-spring-application-events/implement-a-new-listener-for-events?u=76281980&t=283)** And there you have it. We have successfully refactor the code from using direct method calls to Spring beans.

> [!info]- Semantic Content
>
> **Code Identifiers:** onregisteredevent (1)
> **Versions:** 4.2 (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a new event listener](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-new-event-listener?u=76281980&t=6)** - [Instructor] So far, we managed to refactor existing code to move from direct method calls to event system. In this challenge, we want you to extend existing functionality of customer service remove method. This method is responsible for removing user from the database. However, we also want you to inform the customer, by email, that his account has been removed. First, you should create a new event. For example, you can call it CustomerRemovedEvent. Make sure this event is published once the customer has been removed. Next, create a listener that is capturing new event and is calling existing methods from email service. For sending an email, you already have a method called CustomerRemovedEmail that is just doing lock print. And finally, you can run a test method to test if email service has been called app or user removal. This challenge should take about five to 10 minutes. When you're done, or if you get stuck, you can check out my solution reader to see how I solved the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create a new event listener](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=0)** - [Instructor] Welcome back. How did you make out with the challenge? I hope you were successful. I will walk you through my solution. Now it might look different than yours, but that's fine, as long as the outcome is the same. First, between the customer package, we will create a new class, CustomerRemovedEvent, which will be used as an event class. This is just a POJO that needs to hold a customer object. I like to use long block annotations to make things less cluttered. Now in our customer service, remove customer method, make sure after the customer has been removed, we publish an event. ApplicationEventPublisher has already been injected from the previous exercise, so we can use it to publish a new CustomerRemovedEvent. In the new CustomerRemovedEvent, we need to also include a reference through removed customer. Between EventListener's class, create a new method called onCustomerRemovedEvent with the argument CustomerRemovedEvent and annotate it with @EventListener.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=94)** For sending an email, we will use an existing method from email service, sendCustomerRemovedEmail, and call it between our method. Keep in mind, this method is just doing log print. And finally, you can run a test method to test if email service has been called up, and it was a removal.
>
> **[2:06](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-new-event-listener?u=76281980&t=126)** And there you have it. We managed to extend existing functionalities by using events.

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

#### [Implement asynchronous events](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=0)** - [Instructor] By default, spring events are synchronous, meaning the publisher thread blocks until all listeners interested in a particular event have finished processing the event. What if we have a listener that takes too long to get executed and publishing synchronously? It isn't really what we're looking for. We may need asynchronous handling of our events. To make an event listener run in async mode, all they have to do is use the at S in connotation on that listener. We also need to enable asynchronous processing by adding at enable Async on top of our spring configuration. Keep in mind that using Async in event system comes with its limitations. Async listeners cannot publish a subsequent event by returning value. If you need to publish another event, use application event publisher. If an asynchronous event listener throws an exception, it's not propagated to the caller. However, by implementing Async Uncaught Exception Handler Interface, we can process any asynchronous exceptions. As part of our exercise, we need to add a new feature on top of customer registration use-case. For each registration,
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=94)** we need to form external analytics system so our marketing people can start to track them in a customer funnel. However, external call is really slow and it doesn't make sense we blog the whole use case. Running this event asynchronously sound like a perfect fit. Let's go back to our project and create a new event listener. First under the analytics package, we have a class analytics service that has a method called register new customer with a timeout of five seconds to simulate long running service. What we need is the listener that we'll call this method. We need a new class called analytics customer registered listener. Since this is a spring bean, we will add, add component annotation. We will create a new method of type [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) called unregister event with the argument customer registered event. We need to call analytics service, which we will first inject with constructor injection. Now we can use it as a part of our listener. We also need to mark our listener as add event listener and add Asynch annotations.
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=191)** To verify if our listener and analytics service has been triggered, we can run our test. The test is calling customer service dot register. We are also verifying the call to register new customer. Due to the nature of us in Kronos, the call to this service might not have been called immediately after the main thread of customer service has finished. So we added a small timeout. Let's run our tests. Even though our test is green, notice that customer register has been running more than five seconds. We forgot to enable asynchronous method execution capability. To do that, we just need to add, add enable async inner spring configuration.
>
> **[4:16](https://www.linkedin.com/learning/advanced-spring-application-events/implement-asynchronous-events?u=76281980&t=256)** After we re-run our test, you can see registered new customer method has been called, but we weren't waiting for it to end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Filter events](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=0)** - [Instructor] In certain circumstances, we may want our event listeners to be triggered. Let's say you want to execute event listeners only for users that belong to the VIP group. You could write this by implementing if statements. However, overusing conditionals results in code that is more complex and difficult to maintain. In some cases we can avoid this by [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) those conditions with @EventListener and Spring Expression Language. @EventListener provides a conditional tribute that accepts spell expression. The event will be handled if the expression evaluates the Boolean true, or one of the following strings: true, on, yes, or one. The default expression is empty string, meaning the event is always handled. Here's some examples for referencing event and its content. #event to reference an event. #event.customer.type equals b2c. We can also reference other Spring beans with at @myBean.test #event. For more on expressions, you can check Spring docs. In this lesson, our marketing department is asking us to run a promotion for all new customers
>
> **[1:38](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=98)** who have signed up for a newsletter. This sounds like a perfect candidate for conditional event listeners. Within the promotion package, we will create a new promotion listeners class.
>
> **[2:00](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=120)** Mark it as a Spring bean. Let's create a new method on registration event of type void with customer register event as an argument.
>
> **[2:20](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=140)** We will also inject and use promotion service and its method applied from promotion.
>
> **[2:33](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=153)** Now, if you mark our method only with @EventListener, it will be triggered every time. We need to apply the condition by first referencing the event, customer, and newsletter.
>
> **[2:51](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=171)** In our test package, we have a class with methods that check if promotions are applied or not depending if customer applied for a newsletter.
>
> **[3:12](https://www.linkedin.com/learning/advanced-spring-application-events/filter-events?u=76281980&t=192)** If we have done our job right, our registered customer test cases should be green.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (1)
> **Code Identifiers:** mybean (1)
> **Env Vars:** vip (1)
> **Speakers:** - [instructor] (1)


### 4. Transactional Events

[↑ Back to Table of Contents](#table-of-contents)

#### [Transaction bound events](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=0)** - [Instructor] Spring allows us to bind an EventListener to phase of the current resection. In this lesson, you will learn how to allow the events to be used with more flexibility when the outcome of the current transaction matters to the listener. In Spring, whenever we want our class or methods to be executed in a transaction, we use transactional notation. It is used to combine more than one rights on a database as a single atomic operation. When somebody calls the method annotated with transactional, all or none of the rights of the database are executed. Now, imagine using events within transactional context. What does this look like? Let's look at the example of an order management. When a customer places an order in our [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) system, order service runs in transaction and makes updates to the order from saved to completed by calling order repository. It also publishes an order completed event, which triggers all interested listeners. In our case, we have a listener that updates user reward points or for customer and another one that sends a notification email about an order completed successfully.
>
> **[1:37](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=97)** Since we are running under transaction, all database updates either get committed or rolled back. In our case, we have consistency, since both order and user reward points need to get updated, or in our case, after an error both get reverted. So far so good, but what about the case of an error? In case an exception happens, sever in order service or order repository, everything is still good, as we haven't published an event yet. In case an exception happens in the first listener, we still might be on the safe side as invocation of other listeners is interrupted. Everything is rolled back, so we have consistent state between order and customer reward points and the email has not been sent yet. The same goes for the listener that sends out an email. However, what if there are no exceptions? Both order repository and customer repository issue stage changes. Commit has not yet occurred. An email is sent, and at the end of the method execution, commit fails, and stage changes are rolled back. We still have a consistent state in database
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=191)** with no order completed and reward points changed. However, we have sent an email to the client that the transaction went through. We would much rather wait for the commit to successfully happen and then issue an email. Spring provides us a special kind of listener called TransactionalEventListener. This doesn't mean that the event listener is transactional itself, but event consumption is delayed until a certain transaction outcome. This gives us more fine grain control on when event listeners should get triggered based on the transaction phase. Before commit, the event will be handled before the transaction commit. After commit, this is a default phase used. The event will be handled when the transaction gets committed successfully. We can use this in our event listener should only run if the current transaction was successful. After rollback, the event will be handled after the transaction has rolled back. After completion, the event will be handled when the transaction commits or is rolled back. We can use it in cases we want to always run our listener. This leads us to the following rule.
>
> **[4:45](https://www.linkedin.com/learning/advanced-spring-application-events/transaction-bound-events?u=76281980&t=285)** It is almost always advised to avoid infrastructure interactions within EventListener that is part of transactional context. Not only does it cause the transaction to run longer, but more problematic is if subsequent event listener fails and the transaction rolls back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Implement custom transaction event listeners](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=0)** - [Instructor] Previously, you learned how to delay event conception until a certain phase of transaction with @TransactionalEventListener. Let's use it to our advantage to fix the use-case of placing an order when an email is sent even though rollback has occurred. In our project, we have order package with OrderService. OrderService has a method, placeOrder, which accepts an order as an argument. As you can see, it is changing the status of the order to complete it, saving it to the database, and after that, publishing an order-completed event. Now, we need to create listener in promotion listeners clause, which listens for order-completed event.
>
> **[1:10](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=70)** We also need to call promotion service dot calculate reward points. Whenever a new order is made, our listener appends rewards status points to the customer. Imagine here logic that iterates through each order entry that contains [products](../../Skills/Software%20Development/Microsoft%20Products.md) with quantities and calculates the sum of all gathered reward points. For the sake of [Simulation](../../Skills/Hardware/Simulation.md), reward points have been hard-coded to 10 for each order. This number is appended to the existing customer reward points. We also need to append email listener for order-completed event, which is responsible for sending out an email.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=144)** Now let's check our two test cases, one, where a transaction has been successfully committed and an email has been sent, and another, where rollback is occurring and email should not be sent. Keep in mind, there is one caveat to put rollback to the test. Since we want our commit to fail, there is a constraint on customer reward points which only accepts two digits, which means customers have a maximum of 99 reward points. Since we start with 90 points and on each order append 10 more, we expect the commit to fail. Let's run them through. Well, the first one seems fine. The second one failed. It seems that rollback did occur but our email went through. We can also see that in the console log. Email did get triggered after reward points listener. Let's notify our email listener to get triggered only after successful commit. For that, we will use @TransactionalEventListener with phase after commit.
>
> **[4:03](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=243)** Even if we leave out the phase, it will still work, as this is the default phase. Now, let's rerun our test.
>
> **[4:21](https://www.linkedin.com/learning/advanced-spring-application-events/implement-custom-transaction-event-listeners?u=76281980&t=261)** And now we have covered all use-cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Simulation](../../Skills/Hardware/Simulation.md) (1)
> **Warnings:** keep in mind (1), caveat (1)
> **Code Identifiers:** placeorder (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a custom transaction event listener](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/challenge-create-a-custom-transaction-event-listener?u=76281980&t=0)** - [Instructor] You saw the power of Transaction EventListeners and how we can narrow down when, and if they get triggered. Let's use them to our advantage in this challenge. Our order placement use case is almost complete. We managed to send an email only on a successful commit. In this challenge, we want you to inform our help desk when the roll back has occurred so they can follow up to check what is wrong with that order. To inform the help desk, you need to use the ticketing service bin and its method create ticket, which accepts an order object. Once you are done with implementation, you can run a ticket service test to verify your implementation. The test has two use cases that verify when tickets should and should not get created. This challenge should take about five to 10 minutes. If you get stuck, you can check out my solution video to see how I solved the challenge.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a custom transaction event listener](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=0)** - [Instructor] How was the challenge? I hope you were able to solve it and verify the solution with provided tests. I will work through it step by step towards the solution. First, we need to create a transaction event listener. We can use some existing class, but I would recommend a new one in a ticket package called ticket order failed listener. This is also string bean, so we need to annotate it with add component. In the class we need a new method of type void called on order completed event with order complete the event as an argument. This method should only get involved on rollback. Since we need to delay invocation, only on a certain phase of the transaction adds through sectional event listener is a perfect fit. We should also define the phase, which in this case is after rollback. What is left to do is called ticket service. So we will inject it with construction injection.
>
> **[1:30](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=90)** In the method body now, we can call ticket service dot create ticket with an order as an argument. To verify solution, we need to run the test.
>
> **[1:55](https://www.linkedin.com/learning/advanced-spring-application-events/solution-create-a-custom-transaction-event-listener?u=76281980&t=115)** And now we can see our test went through.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-application-events/next-steps?u=76281980&t=0)** - [Terezija] Congratulations, you have made it to the end. I hope you enjoyed this course and now have a solid understanding of Spring events. You've just experienced the benefits of events and how they help you write modular decoupled code. If you want to know more about event-based architectures, I highly recommend searching our library for Allen Holub's course on [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) in Domain-Driven Design. You can also check out my course on Advanced Spring [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) Using [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md). If you have any questions, please feel free to get in touch on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and on Twitter. I really do appreciate your engagement as well as your feedback on this course. If you enjoyed this course, I'd love to know. Thank you so much for watching and I hope you enjoyed this course, until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) (1), [Integration Testing](../../Skills/Software%20Development/Integration%20Testing.md) (1), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [terezija] (1)


## Instructor

- [Terezija Semenski](../../Instructors/Artificial%20Intelligence%20(AI)/Terezija%20Semenski.md)

## Resources

- Exercise files available

## Skills Covered

- Spring Framework
- Software Architectural Design

## Path Context

### In [Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)
← [Advanced Spring- Spring Boot Actuator](Advanced%20Spring-%20Spring%20Boot%20Actuator.md) | **5 of 6** | [Advanced Spring- Effective Integration Testing with Spring Boot](../Software%20Development/Advanced%20Spring-%20Effective%20Integration%20Testing%20with%20Spring%20Boot.md) →

## Appears In

- [Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Spring- Spring Boot Actuator](Advanced%20Spring-%20Spring%20Boot%20Actuator.md) — Spring Framework
- [Performance Tuning in Spring Apps](Performance%20Tuning%20in%20Spring%20Apps.md) — Spring Framework
- [Spring Framework in Depth](../Software%20Development/Spring%20Framework%20in%20Depth.md) — Spring Framework
- [Spring with GraphQL](../Software%20Development/Spring%20with%20GraphQL.md) — Spring Framework
- [Spring 6 Design Patterns](../Software%20Development/Spring%206%20Design%20Patterns.md) — Spring Framework

---

[↑ Back to top](#)