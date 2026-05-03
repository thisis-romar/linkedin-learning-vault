---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: spring-framework-in-depth-23924413
url: "https://www.linkedin.com/learning/spring-framework-in-depth-23924413"
duration_minutes: 115
duration: 1h 55m
level: Intermediate
updated: 11/20/2024
learners: 4948
skills:
  - Spring Framework
exercise_files: true
github: "https://github.com/LinkedInLearning/spring-framework-in-depth-5945181"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHQkdsXWP-ZQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731028968463?e=2147483647&amp;v=beta&amp;t=-mjsjugJVQVObGKGZsHfNt1Pxh2dERYzXZ-sAX5je0o"
linkedin_topic: Software Development
learning_paths:
  - '[[Building Your Skills in Spring Development]]'
prev_courses:
  - '[[Spring with GraphQL]]'
next_courses:
  - '[[Advanced Spring- Effective Integration Testing with Spring Boot]]'
path_nav: '[{"path":"Building Your Skills in Spring Development","position":3,"total":4,"prev":"Spring with GraphQL","next":"Advanced Spring- Effective Integration Testing with Spring Boot"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/spring-framework
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Spring%20Framework%20in%20Depth.md)

![Spring Framework in Depth](https://media.licdn.com/dms/image/v2/D4D0DAQHQkdsXWP-ZQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731028968463?e=2147483647&amp;v=beta&amp;t=-mjsjugJVQVObGKGZsHfNt1Pxh2dERYzXZ-sAX5je0o)

# Spring Framework in Depth

> Spring is an application framework and inversion-of-control (IOC) container for the Java platform. The framework's core features can be used by any Java application and are ideal for enterprise and internet-based app development. Get a comprehensive overview of Spring in this intermediate-level course with software architect Frank Moley. Frank develops applications and web services with Spring, an

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413) | 1h 55m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Building blocks of Spring](#building-blocks-of-spring)
  - [What you should know](#what-you-should-know)
- [**1. Spring Overview**](#1-spring-overview) (2 videos)
  - [Introduction to Spring](#introduction-to-spring)
  - [The inversion of control (IoC) container](#the-inversion-of-control-ioc-container)
- [**2. Configuring the ApplicationContext**](#2-configuring-the-applicationcontext) (7 videos)
  - [Introduction to the ApplicationContext](#introduction-to-the-applicationcontext)
  - [Configuration of Spring with Java](#configuration-of-spring-with-java)
  - [Work with the environment](#work-with-the-environment)
  - [Profiles](#profiles)
  - [Spring Expression Language](#spring-expression-language)
  - [Bean scopes](#bean-scopes)
  - [Proxies](#proxies)
- [**3. Component Scanning**](#3-component-scanning) (3 videos)
  - [The component scan](#the-component-scan)
  - [Implementing component scanning](#implementing-component-scanning)
  - [Lifecycle methods](#lifecycle-methods)
- [**4. The Bean Lifecycle**](#4-the-bean-lifecycle) (10 videos)
  - [Why the lifecycle is so important](#why-the-lifecycle-is-so-important)
  - [The overall picture](#the-overall-picture)
  - [The init phase: Loading bean definitions](#the-init-phase-loading-bean-definitions)
  - [Init: Bean factory post-processing](#init-bean-factory-post-processing)
  - [Init: Bean instantiation](#init-bean-instantiation)
  - [Init: Setters](#init-setters)
  - [Init: Bean post-processing](#init-bean-post-processing)
  - [Init: Differences based on configuration](#init-differences-based-on-configuration)
  - [The use phase](#the-use-phase)
  - [The destruction phase](#the-destruction-phase)
- [**5. Aspect-Oriented Programming**](#5-aspect-oriented-programming) (7 videos)
  - [Aspecting in Spring](#aspecting-in-spring)
  - [Define aspect-oriented programming (AOP) pointcuts](#define-aspect-oriented-programming-aop-pointcuts)
  - [Implement AOP advice: Before](#implement-aop-advice-before)
  - [Implement AOP advice: After](#implement-aop-advice-after)
  - [Implement AOP advice: Around](#implement-aop-advice-around)
  - [Challenge: Building your own aspect](#challenge-building-your-own-aspect)
  - [Solution: Building your own aspect](#solution-building-your-own-aspect)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building blocks of Spring](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/building-blocks-of-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/building-blocks-of-spring?u=76281980&t=0)** - [Frank] Fully harnessing the power of the [[Spring Framework]] makes you more effective as a developer in the framework. Learn to debug, extend, and maximize its value. In this course, you can learn the full utilization of the framework itself. Hi, I'm Frank Moley. I'm a developer, architect, teacher, and perpetual student, working primarily in distributed systems for over 25 years, many of those years utilizing the Spring Framework. Join me in this course, Spring Framework in Depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (3)
> **Speakers:** - [frank] (1)

#### [What you should know](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we kick off our learning of the [[Spring Framework]] in depth, there are a few key things you need to know, and have set up on your machine. The Spring framework itself is written in [[Java]], and was designed for the JVM. We will be using Java as our development language for this course. We specifically will be using Java 17. You need to have the JDK installed for development in Java, not a JRE. Make sure your installation on your machine is a JDK. It can be any JDK implementation as long as it is a JDK. Each provider has really good instructions for various operating systems when it comes to that installation. You'll need basic knowledge of the Java language. I won't be using any of the more advanced language constructs, but you need to be able to understand the Java code quickly to be successful. I am not focusing any time there in this course. You should have an IDE that you are comfortable with. I am going to be using IntelliJ Ultimate Edition for my development. I use these tools every day, so I am most comfortable with them. You definitely don't need to use a paid IDE to be successful in this course. Many of the actions that I will use in my IDE exist in other IDs natively
>
> **[1:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=92)** or through plugins. The key here is to understand, and use the IDE that is most comfortable to you in order to develop in Java. We will also be using Maven for [[Dependency Management]], but we won't really focus on it at all. Just ensure you either have Maven installed on your machine or know how to use the embedded wrappers to mimic what I will be doing. Apache provides excellent documentation for each operating system on how to install Maven itself. If you would like to dig in deeper to Maven, I have a course here in the library on learning Maven. There's a little prerequisite knowledge you will need to be successful in this course. The first is just some basic spring knowledge. You don't need to be an expert, but some understanding of the framework, and its utilization will help you grasp the deeper concepts of how the framework itself operates. I have a course on [[LinkedIn]] Learning called Learning Spring with [[Spring Boot]] 3. That should give you a good jumpstart. As previously mentioned, you should know Java. Now, Spring can be used with other JVM languages like [[Kotlin]] for instance, but we are going to use Java in this course. If you need a refresher on that, there are several good courses
>
> **[3:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=186)** in the LinkedIn Learning Library on learning Java. You should also understand the basics of Maven, just so you can grasp the dependency management we will be leveraging with our work. If you want to a refresher on Maven, as I previously mentioned, I have a course on the topic in the LinkedIn Learning Library. Finally, we'll be talking about aspecting, and aspect-oriented programming. It would be good for you to understand the conceptual levels of a AOP before we get too deep into how the framework itself operates as it is critical to the operation of Spring in some aspects. So it's worth a little bit of time right now to go read up about aspecting, and Aspect Oriented Programming before you continue to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (10), [[LinkedIn]] (3), [[Spring Framework]] (2), [[Dependency Management]] (2), [[Spring Boot]] (1)
> **Env Vars:** jdk (4), ide (4), jvm (2), jre (1), aop (1)
> **Prerequisites:** set up (1), you need to have (1), you'll need (1), install (1), prerequisite (1)
> **CLI Commands:** make (1), apache (1)
> **Definitions:** is a  (2)
> **Versions:** java 17 (1)
> **Cross-References:** next video (1)
> **Tools:** intellij (1)


### 1. Spring Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Spring](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=0)** - [Instructor] As we dig into the [[Spring Framework]] in depth, it is important to level set on exactly what Spring is and why it has become the most popular framework for the JDK. Spring is a framework that provides the plumbing for an application, so you as the developer can focus on business processes or user needs instead of the underlying needs of the application. Spring is an open-source project backed by Broadcom. The power of Spring really starts with this community. The core committers are all fantastic developers and the community only makes them better. They're all very active in answering questions responding to bugs and sharing their opinions on how to use Spring in the most effective manner. Spring was and still is to a large part, still focused on enterprise abstractions. It is really the bread and butter of its operational usage. However, Spring is fully capable of supporting internet-focused applications. With the advent of [[Microservices]] architectures where [[Java]] is the language of choice, Spring really shines with [[Spring Boot]] and embedded application servers. Spring is really lightweight. I know many users of other frameworks will laugh at that comment, but if you look at the feature sets Spring provides and the way the projects are broken apart to optimize workflows,
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=93)** it really is a lightweight framework. Consider especially traditional Jakarta EE implementations, formerly Java Enterprise Edition, the Spring packaging and abstractions are much smaller. Spring is also very unobtrusive. If you build your applications using best practices and current recommended strategies, you can dramatically reduce your dependence on imports from the Spring catalog. Through the use of abstractions of facades, you can actually keep your business logic completely intact while not requiring any Spring imports in those class files. So let's spend a moment and talk about the most popular use cases for Spring, and that is starting with the enterprise itself. With Spring, especially Spring Boot, there is no need for heavy application servers. Even if you don't use Spring Boot, Tomcat is sufficient to run your packaged WAR file. However, most users today are building executable JARs with the app server embedded in it. Spring achieves much of this by abstracting from the heavy enterprise system APIs that come with Jakarta EE. That doesn't mean you don't still have access to technologies like JMS. You just abstract them away from the application server.
>
> **[3:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=187)** By leveraging this in your ecosystem, your code is simpler, but so is your operational burden. By leveraging dedicated systems instead of large application server implementations, you make your code easier to distribute and scale as well. I have mentioned business logic a lot already and it is a key win for Spring. Think of how complex and repetitive it is to set up a [[Java Database Connectivity (JDBC)|JDBC]] connection, build a query, and execute it, and then read the results into an object all while shutting down the results set and the connection. Now repeat that for every database query in your application. Then expand that by every other common system that you use. This literature code with copy and paste that is error prone at best. With Spring, that all just goes away. The framework handles it for you, so your code is just the business logic. And ultimately that is really what you care about. Another big benefit of Spring is the [[Dependency Injection]] aspect of the framework. Spring manages all of your runtime dependencies by allowing the framework to maintain these objects, you don't have to deal with the creation and maintenance of these objects. This greatly decreases the complexity of your code, which of course improves your maintainability.
>
> **[4:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=284)** It also helps you avoid some of the most common issues around [[Memory Management]] that can creep into Java-based applications even with its automatic garbage collection. With Spring, you create these objects once. This is done either through configuration of the application context or through formal object creation and configuration with JavaConfig. At the point the object is configured, it is maintained by the application context until the application closes. This is a technique that does take some getting used to as with any dependency injection-based framework. But we are going to spend some time talking about it in much detail later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Spring Boot]] (3), [[Dependency Injection]] (2), [[Spring Framework]] (1), [[Microservices]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** jdk (1), war (1), jms (1), jdbc (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [The inversion of control (IoC) container](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=0)** - [Instructor] The inversion of control pattern is fundamental to the operation of the [[Spring Framework]]. It is critical for users of the framework to understand not only the benefits of inversion control, and [[Dependency Injection]] in general, but also to understand the consequences of using this pattern. Inversion of control adds a new dimension to how you write your code. The container itself maintains all of the classes, including the dependency classes. This is the critical aspect of IOC. While the container handles the maintenance of these objects, your business logic code doesn't have to. Objects are injected at runtime, usually during a startup operation. This allows the container to maintain the objects and hand them as dependencies to other objects throughout the runtime. An object that accepts these dependencies usually does so through construction of the object itself or through setter methods. This is a topic that can cause some discussion, but the rule of thumb is this, if your class cannot operate without the dependency, it should be injected via constructor injection. If however, your class can treat the dependency as optional or can accept multiple, but variable concrete implementations of the dependency, then and only then can it be injected via setter injection.
>
> **[1:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=96)** So let's take a look at a traditional [[Dependency Management]] graph so we can visualize the difference, especially with some kind of complexity. So we're going to start our example with a class called Main. Now, in the construction of Main, you have two dependent classes. So you need to construct those while you're constructing Main. However, in constructing one of those dependent classes, you need another class. So you need to construct it as well in Main. And that class finally, has two dependent classes. So once again, you need to construct those as well, and you're going to do it in Main. So now we're four layers deep of object construction just to create a single class. This level of complexity exists in many [[Java]] programs. In fact, it exists in many object-oriented languages in general. For the IOC container model, we will use the same dependency graph. In this case, we start with our IOC container and our main class. Now, the IOC container manages every object in our graph. So Main has two dependencies like before, but instead of Main having to construct them, it takes them as constructor arguments and the IOC container handles that injection at object creation for Main. Now, when the IOC created our dependent classes, that had a dependency as well.
>
> **[3:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=191)** It once again handled the injection via constructor argument and hands the object its dependency. And once again, we have a dependent class that has two dependencies of its own. Once again, the IOC container handles injecting them through constructor arguments. Now, you may immediately see that we have an order in which our dependencies must be created to make this model work. With Spring, we don't have to worry about that. As you will see in this course, the framework handles all of that for us. What you will see is that this complexity actually becomes a simplification because we only do this once and order doesn't matter. No matter how many times the dependency is used, the container handles it for us. So let's take a little time and talk about why this is so important of a topic when dealing with complex applications. Inversion of control and dependency injection in general, reduce the noise in your code. If you have a class that is used in several places in your application, this becomes even more clear. You can focus on your code and the business logic you need to implement, not constructing and managing dependencies. By removing construction of objects within your code, you reduce coupling. You simply consume the objects
>
> **[4:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=285)** and become less coupled to their object creation. This becomes even better if you code to interfaces, but more on that in a little bit. Dependency injection and inversion of control also reduce the bugs that arrived during object creation. We all know how repetitive behavior in code is handled, copy and paste. If a bug exists, you have now copied it into two places. If you modify that behavior in one spot and don't do it in another, you still have the bug. By allowing the IOC to handle construction, you can focus on the API contract of your dependencies. This allows interfaces to be dependencies instead of the concrete objects. Again, this allows you to have cleaner code that is less coupled to your dependent objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (3), [[Spring Framework]] (1), [[Dependency Management]] (1), [[Java]] (1)
> **Env Vars:** ioc (8), api (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)


### 2. Configuring the ApplicationContext

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the ApplicationContext](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=0)** - [Instructor] The Application Context and more specifically, the BeanFactory is one of the most important components of the [[Spring Framework]]. As we dig in deeper to the Framework as a whole, we need to fully understand the application context and the role it plays during runtime of our applications. The first thing that we need to discuss is the purpose of the application context. The application context acts as the heart of the SpringApplication. This is the central element that you deal with from the Spring Framework when developing an application. As previously mentioned, your classes should seldom, if ever, have imports from the Spring Framework, except in the few cases of annotations. However, the application context and the entry point of your application is an exception. The application context encapsulates the BeanFactory. The BeanFactory, as we will discuss, is the IoC container itself. The application context encapsulates it to provide a user access to the BeanFactory under very controlled situations. As such, it provides [[Metadata]] for bean creation. We will talk a lot about bean configuration, but no matter the mechanism that you use to configure your beans, the application context serves to take that configuration and to allow the framework to use it to build the IoC container itself. It also ensures that your beans
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=95)** are created in appropriate order as we saw previously. This can be a concern when a central object manages all of the dependencies in an application. It must be done in proper order to ensure dependencies are available when needed for the construction of objects. Spring handles that through mechanisms within the BeanFactory and ultimately the application context. As mentioned, the BeanFactory provides for the inversion of control container. This provides all the facilities for injection of beans at startup and runtime. While most beans are singletons and injected at startup, there are other types of beans that get handled slightly differently, however. All of the injection is handled by the BeanFactory. Most of the developers interaction with Spring is actually configuring the IoC container. We do use abstractions provided by Spring, but they are just pre-configured facades on top of repetitive processes for the most part. Really using Spring is more about configuration, at least at its core. The BeanFactory maintains a handle to all singleton beans in the application. Now, what this means is that beans of type singleton will always be referenced in the BeanFactory. Even if a class goes out of scope in the main runtime, the BeanFactory will always have a handle to it.
>
> **[3:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=192)** This also means that the instance object is injected everywhere it is used, so you need to keep that in account when storing state in these objects. Attributes for these classes must be handled carefully. Beans that aren't singletons are handled differently, and we'll talk about those a little later on. Multiple application contexts can bring a little bit more challenge to your application and we need to at least mention that they're there. A spring application can have more than one application context. It will always have at least one, but in certain situations there can exist multiple. Web containers, for instance, always have multiple application contexts in play. The parent context can interact with the child context, but the other is not usually possible. This makes sense if you think about OOP in general because there is always a parent context and the [[Representational State Transfer (REST)|rest]] are children, much like a dependency graph for your business objects. We aren't going to go into too much depth here on multiple application contexts, however. Because most often it is the framework that is controlling these cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (3), [[Metadata]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is an  (1), means that (1)
> **Env Vars:** oop (1)
> **Cross-References:** as we saw (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Configuration of Spring with Java](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=0)** - [Instructor] We're going to start our journey of configuring Spring with JavaConfig. While it is not the first way introduced to configure, it is the most common type of configuration method in use today. XML is still valid but not often used and has been removed from the examples and generally not favored anymore. Sometimes no matter what you do, you need to type the config for Spring applications, and JavaConfig should be your first choice because of its benefits. First off, it provides natural language syntax. There is no other language schema or structure to consider, you just use [[Java]]. It also provides compile time checking of object creation and syntax because it's the native language. This compile time checking is very welcome, especially if you have used XML syntax where you would have to run the application to test the actual configuration. Because it is Java, it integrates better in most cases with your IDE. This is less critical with more modern plugins for your IDE of course, but it does offer nice syntax highlighting and auto completion in most IDEs. So let's take a look at this in real life. In the IDE, load the simple program that I have created for you from the exercise files, this is an overly complex implementation of a Hello World program.
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=93)** So we can show Spring, it's not a real application. Go ahead and run the main method in source main Java, the application class, and you'll simply see that it is going to output Hello Frank. And it's going to do the same every five seconds until it does the fifth time. So while that is running, I'm going to go ahead and open up the palm file for my application and we're going to add a few things. The first thing that I like to do is add a property and that property is going to be Spring.version and we are going to use 6.1.13 that is the most current as of the time of creation of this course. We're then going to add a dependency section and the first dependency that we are going to add is Spring core. Now Spring core comes from org.[[Spring Framework]] and we will simply pass in Spring.version. Now we're going to add another dependency and that is going to be Spring.context once again from org.Spring framework. And once again, we will do Spring.version as the property. So I'm going to go ahead and let Maven run and it will download these dependencies for us. Now that that is done, I want to go the root package that I have and we are going to create a new Java class and we are going to call this application config.
>
> **[3:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=187)** Now to our application config class. Here we are going to start with an at value and we'll talk more about what this is later, but we're simply going to pass it a string of Hello and it will be a private string called "Greeting". Now we are going to create a bean and this is how you do JavaConfig. I'm going to create a time service and I will simply call this time service. And in there I am simply going to return a new time service with a Boolean of true to say that it is 24. We're going to do the same with an at being annotation again. And now I'm going to create an output service and we will simply call this output service and we are going to pass to it a greeting service called greeting service and a time service, as you might imagine called Time Service. And then we will simply return a new output service passing it, both the greeting service and the time service. And now we are going to do an at bean public greeting service. We will call it, as you might imagine, greeting service. And we will simply return a new greeting service,
>
> **[4:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=282)** passing it our greeting. There we go. So we've actually now run the configuration that we need for Spring. So let's go back to our application class. So the first thing that I want to do here is I want to delete everything above the for loop. And we're going to start by getting an instance of an application context. Now, this is an interface, we will call it context. And we are going to create an annotation config application context. This is one of the many flavors that we get and we will simply pass it the class that we just created. Now we are going to simply get a handle to the output service from the context and we will get a bean. Now, there are many ways to get a bean, but one of the ways is to simply pass it, the class that I want to get. We're not going to get it by name, we're going to get it by class, and at this point we actually can run our application. So we haven't created anything in our main method here, other than the output service, and we didn't really create it. We got it from the context that we have. So let's run this and I want you to notice the output difference. None. And that's intentional. Spring is running, it's handling all of the injection, it's handling all of the object creation, but your application still behaves the exact same way.
>
> **[6:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=377)** That is the power of Spring from the very beginning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Spring Framework]] (2)
> **Env Vars:** ide (3), xml (2)
> **Definitions:** is an  (2)
> **Analogies:** imagine (2)
> **Versions:** 6.1.13 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)

#### [Work with the environment](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=0)** - [Instructor] Most applications cannot be deployed to just one data center anymore, and robust configuration patterns are needed to support this. The use of environment variables is one of the most common ways of injecting data into a running application, to Flex, by data center or environment. Spring provides an environment abstraction that allows you to build applications that Flex configuration based on environment variables. The environment is populated by default with all of the environment variables of the runtime of the application. The environment is also populated, and can be supplemented by properties via runtime arguments or files, among other things. This allows you to provide a set of default configuration that can be overridden at runtime. There's a detailed hierarchy in the Spring documentation on the order in which these values, when they share a key, will be overridden. This is a very powerful construct, especially in the cloud native world that I use a lot. It is also useful in traditional applications when dealing with multiple environments. You can use a mixture of properties and environment variables to manipulate the configuration as you migrate from environment to environment, or from data center to data center. This is how I manage things like URLs of other services, log levels, and various other runtime configurations.
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=94)** So let's take a look at this in practice. The first thing that I want you to do is to open up the service, and the output service specifically, and we are going to add a new attribute. So we will call this String name. Now, because it is final, we need to add it to our constructor. And we will simply set this.name = name. We can then remove it from the generate output method as a parameter. And with that, this class is ready. So let's prepare our application a little bit more by creating a new file in our resources directory. And we will call this application.properties. And this is, by convention, the name of your properties file. So we're going to create two new properties. The first one will be app.name, and I'm simply going to pass in Frank. And the next one will be app.greeting, and I will pass in Hello. So now that that's ready, let's go to our application config. And the first thing that we are going to do is we are going to annotate this class with a property source. We will look on our class path for a file called application.properties. Now, we can go to our hard-coded @Value statement, and we can convert that to be ${app.greeting}.
>
> **[3:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=193)** But, we also need a name. So we're going to do the same thing with @Value. Do "${app.name}", and this will be a private String called name. And now down in our output service, we can simply pass the name. Now let's go to our application class, and we will simply remove the string parameter to the method where we no longer need it. So now if we run our application, we should expect to see everything behaving the same. So we're injecting this right now from our properties file. Now, as I mentioned, there is a hierarchy to the waythat this works. So I'm going to go in and I'm going to edit my run configuration. This is the configuration my IDE is passing to the running application. There's a couple different ways that you can do this. You can set up VM arguments, so I can simply pass in a D, and we'll pass in a greeting here, so app.greeting, and we're going to set that equal to Howdy. And the other way is through environment variables. Now, when you're dealing with environment variables, there's a pattern we can use. So we're going to do APP_NAME, in all caps, and we will set that equal to Partner. So now if I run this,
>
> **[4:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=289)** you will see that we've actually converted both of those. The VM argument and the environment override the property that we have set in the properties file. So we're now passing in Howdy Partner from a mixture of VM arguments as well as environment variables. But the important thing on that environment variable is by capitalizing it and replacing the dot with underscore, you have a pattern that leverages how we normally deal with environment variables against our Spring application, where we normally do the dot convention in application.properties files.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3)
> **Env Vars:** ide (1), app_name (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Profiles](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=0)** - [Instructor] We talked about using environment variables for flexing by environment. Sometimes there is a desire to change behavior based on pre-configured profiles. A case for this that I have used are injecting mocking behavior in a QA environment. Let's take a look at this in action in Spring. The first thing I want you to do is open up your application.config. And on the TimeService, we are going to mark @Profile ("!dev"). And now, we are going to add another bean. And we're going to say at @Profile("dev"). And then we will do a public TimeService.
>
> **[1:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=72)** And we'll return a new TimeService with this time it being false. Now, the way that I'm going to do this is I'm actually going to create some configuration specifically for this. So I'm going to start with my initial configuration. I'm going to get rid of the greeting changes that we made before. So we're going to start there. And I'm going to set a VM argument of -Dspring.profiles.active=prod.
>
> **[1:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=116)** And I'm going to name this one Prod. Now I'm going to duplicate this one, and we will call this one Dev. And now, I'm going to set spring.profiles.active=dev. And we will Apply. So now, let's go ahead and run our Dev profile. You'll see that we are getting the time output in 12-hour format. Go ahead and stop that. And now I'm going to run that Prod configuration. And now we're getting it in 24-hour format, simply by passing in that profile behavior. Now, I did use a little bit of Spring Expression Language with the !dev, we'll talk a little bit more about that later. But it's important to note that you can do this in a single configuration file, like we've done here. You can actually set a profile for an entire configuration file. So you could build a configuration file for each of your environment profiles that you want to apply. Again, I use this a lot of times when mocking behavior for QA environments or when mocking things in tests, it gives you a nice way you can set your profile. Metrics are another good use of this where you don't want to admit metrics to your expensive metrics collection system
>
> **[3:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=210)** when you're running things locally, but you need it to work in your environments. Again, the ideas are vast, but this is how you deal with profiles in a Spring application.

> [!info]- Semantic Content
>
> **File Paths:** application.config (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Spring Expression Language](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=0)** - [Instructor] Sometimes declaring multiple beans to express profiles isn't ideal. In addition, sometimes you want to load different files from the class path based on some value or environment variable. Enter into the picture Spring Expression Language. SpEL gives you the ability to use expressions in your configuration. We've already done this, but I want to get a little bit more deep into it. So let's take a look at a simple case in action. Let's go back to our ApplicationConfig class, and let's actually remove our profile statements and our entire 12 TimeService. We'll create an @Value, and we're going to do a little bit more complex behavior here. So what we're going to do, we're going to start with a double quote. We're going to do a pound statement. Now, the pound says, "Go look at the Spring Expression Language and run it." And we're going to do it by creating a new Boolean. And the boolean is going to be environment{'spring.profiles.active'},
>
> **[1:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=90)** does not equal 'dev'.
>
> **[1:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=100)** And then we need to close this out. We will do a private boolean is24, and now we need to actually use this. So we will simply pass in is24 to our TimeService. And remove our unused import. We will run Prod once again. You'll see that we have time in a 24-hour format. And we will run Dev. And we have it in a 12-hour format. So, while we achieve the same thing, we remove the profile from the actual bean definition. So now we are back to one bean of type TimeService, no matter what. And we've used a much more complicated way to get that we are in dev or not, but we did this to show you what you can do with Spring Expression Language. The sky is the limit here with what you can do as far as the configuration and the way that you can manipulate it to set a value. Of course, it doesn't have to be a boolean, you could get a string, you could get a number. Anything you can do in [[Java]], you can do in Spring Expression Language, for the most part, and it gives you just another layer of flexibility when configuring your application context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Cross-References:** go back to (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Bean scopes](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=0)** - [Instructor] There is a concept in Spring of bean scopes that is very important to understand. While they aren't used that often in normal practice, it is important to understand them so that you can use them when needed. The most common bean scope is a singleton scope. The singleton is the default scope of all beings defined for the application context. If you do not specify a scope, you get a singleton. You get one instance of the object per context definition. Now, you can declare two beans of the same type in a context, but you have to do some work to get them injected properly, and most often this becomes very cumbersome and isn't recommended. One thing to be aware of, as we previously mentioned, you need to be careful with state. Because you have one and only one instance of the class, all state essentially becomes static on that class. I have run into issues with this very thing more than once, especially early in my Spring career. Keep in mind how state impacts behavior of methods as some other thread may change your data. Now, I mentioned that you have to treat it like it's static. It is not static but its behavior is such that it behaves the same way, and I want to make that very clear. A prototype scope is the next one that we're going to discuss.
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=93)** A prototype bean is one that you get a new instance every time it is referenced. This means that once the instance is no longer needed or referenced, it becomes available for garbage collection. A definition of the prototype or it's [[Metadata]] is stored in the IoC container. When an instance is needed, it is created based on the definition within the IoC and Spring hands the instance over and then releases the handle. A prototype bean is never stored as an instantiated object in the IoC container itself. These bean types can be very useful for transient data or interface types that can flex based on application state, which is how I have used them exclusively. Session beans are very similar to prototype bean. They apply to web environments only, as you might guess by the name. You get one instance of the bean per user session. This allows you to keep session data separate from other sessions when needed. Like a prototype bean, the definition is stored in the IoC container, but the instance itself is never stored. The final scope that we will talk about is request-scoped beans, which are very similar to session- and prototype-scoped beans. Once again, these only apply to web environments. Again, you might guess that from the name.
>
> **[3:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=187)** You get one instance of the bean per request into the application. The definition is stored in the IoC container, but again, the instance is not and will be available for garbage collection once the request is done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** be aware (1), be careful (1), keep in mind (1)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Proxies](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=0)** - [Instructor] The final topic in this chapter that we need to discuss is proxies. Proxies are essentially aspected behavior that is applied to your classes by the framework under various conditions. In Spring, everything is a proxy, and this comes with some considerations. This behavior was added in Spring 4.0. All of your classes that are managed by the IOC get wrapped with at least one proxy. Proxies are used to add behavior to your class. Many of the proxies have specific purposes that enable you to write cleaner code. Spring uses both JDK and CGLib proxies in its operation. I mentioned a moment ago that there are some considerations when using proxies. First and foremost, and one that will cause a defect at least once for you if you don't remember this, is that proxies can only apply their behavior when the call goes through the proxy. Private methods don't get exposed via the proxy, so they cannot have behavior added to them. In fact, for the same reason, internal calls don't have proxy behavior. This lack of behavior, as mentioned, can be a source of bugs. One way that I have experienced this was in transactional rollbacks. When I've written some [[Java Database Connectivity (JDBC)|JDBC]] template code
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=95)** using transactions, internal calls burnt me because the rollback on exception wasn't handled because it wasn't part of the proxy, yet the transactional behavior was within the proxy. So keep this in mind if you are making calls from a method in a class to another method in a class that you have to be very careful that the proxy behavior you expect most likely isn't going to be there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java Database Connectivity (JDBC)|Jdbc]] (1)
> **Env Vars:** ioc (1), jdk (1), jdbc (1)
> **Versions:** 4.0 (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Component Scanning

[↑ Back to Table of Contents](#table-of-contents)

#### [The component scan](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=0)** - [Instructor] If you've ever used [[Spring Boot]], the auto configuration is partially achieved through component scanning mixed with conditional configurations. In fact, for many classes, external configuration isn't needed as component scanning can solve the configuration for you. The root annotation that is used for component scanning is @component. This annotation indicates that the class should be loaded into the bean factory, and configured using annotations, and inspections of the class itself. Component is the root annotation, but there are several stereotypes of this annotation that can be used as well. Often you will want to use these stereotypes like @service, so you can write your own aspects to add behavior to your classes based on the type. We'll go through an example of that later on. Component scanning scans a base package, and that packages sub packages, and loads configuration automatically for each bean it finds. It uses other annotations to direct the IOC container to build the dependency graph. [[Dependency Injection]] is achieved as mentioned through component scanning. It is achieved mainly through the annotation, autowired. This instructs the IOC container to inject a beam into the needed value at that point. The Spring designers are very specific about how you should use autowiring. While you can put it on a class attribute, you should only set it on methods.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=95)** If a dependency is required, it should be set on the constructor. If the dependency isn't, it should be on a setter, but never on the attribute, even though it's allowed. Attribute settings should only be used for tests. If you have more than one being of the same type, you can use the qualifier annotation to inject a specific version by name, but I will urge some caution here. This can be very difficult to manage in your application, and you'll often find it isn't worth the effort. Instead, you should look at a factory, inject the factory, and let it make the decision on which implementation to provide. If you have properties or constants that need to be injected, you can use the add value annotation to instruct the IOC container to put a value into a variable for use elsewhere, and we've already done that through our examples to date. To start the component scanning engine, you need to prime the pump, so to speak. You will need some form of [[Java]] or XML configuration to start component scanning on your own. If you are using Spring Boot, you are getting auto configuration through this method by a special annotation. The base package is defined in this configuration. Scanning occurs during startup, and we will go through that lifecycle in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Dependency Injection]] (1), [[Java]] (1)
> **Env Vars:** ioc (3), xml (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** in the next (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Implementing component scanning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=0)** - [Instructor] So now that we've spent some initial time learning about component scanning, let's put it into practice in our application, and replace our [[Java]] config with component scanning. All right, the first thing that I want you to do is open up source main Java, the service package, and let's start with the greeting service class. In here, we will start by annotating this with at service, which is a stereotype of at component. And now, on our string greeting, we are going to inject a value here. And the value, as you might guess, is going to come from our configuration property. So we're going to go to app dot greeting, and now we can remove from the constructor, the greeting. Now we're going to go ahead and remove the final here, and then we will remove the setter in the constructor. And we are now done with that class. So now, let's go to the output service class, and we're going to do a very similar thing. We're going to go to our name, and we are going to set an at value on it. We will do dollar sign, curly brace, app dot name. We will once again add "at service" to our output service. We will remove the name from our constructor,
>
> **[1:38](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=98)** and we will remove the final. Now you'll notice that I'm not auto wiring my constructor. We used to have to do that, but we don't have to anymore with Spring. If there is one and only one constructor, it will use it. Now if you have multiple constructors, you do need to tell the framework which one to use, but this is not the case for us. So we are good without auto wiring our constructor. So now let's go to the time service class, and once again, we will do an at service annotation on it. We will set our Boolean with an at value, and the at value here will be very much the same that we did before. So we will do pound curly brace, new Boolean, open parentheses, environment, bracket, single tick, spring dot profiles, active, close our bracket, does not equal single tick dev, end our parentheses, and end our bracket.
>
> **[3:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=181)** Now we remove from our constructor, our Boolean, and we will simply replace this with super, which though it is not necessary, I like to use super because I am a little bit old school. Feel free to delete that if you don't want to. So with that, we have our classes now set up. So let's go to our app config. So the first thing that we need to do here is, we need to do at component scan, and we need to set our base package, and we will set it equal to com dot Frank Moley, dot LIL, dot FID, which is our current package. Technically, you don't need that because it will scan its own package and anything below it. I like to go ahead and specify it. It just makes me feel a little bit better. And we will simply delete all of our (indistinct). Go ahead and remove the unused imports. Now I need to do is run our application. So we'll go ahead and run Prod, and you will see that everything is working as we would expect, and it's doing so because even though we've removed the manual configuration with Java config, component scanning has taken over, has grabbed all of our service classes, all of our values, injected the values into those service classes, and dropped all of that into the IOC container for the application to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3)
> **UI Navigation:** go to (5)
> **Env Vars:** lil (1), fid (1), ioc (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Lifecycle methods](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=0)** - [Instructor] Sometimes you have behavior that you need to perform within a class that requires the [[Dependency Injection]] to be completed, but this behavior needs to be done before the application is ready to use or right before it's destroyed. Enter into the picture lifecycle methods/ While Spring is starting up, and the next chapter is going to be entirely focused on this behavior, the system is actually not usable, and at the same time occurring during shutdown. Spring proxies are not always available during object instantiation or destruction. In fact, usually they're not available at all. This means that not everything is available during the construction of an application that you may need to use behavior wise, and it's important to know this. This will also apply during the destruction phase as you have no control over the order of garbage collection, and you need a way to do some work before spring goes out of scope. One thing to note is that these lifecycle methods utilize JSR-250 annotations, and are not Spring specific. Post-construction, as the name implies, is a method that should be executed after construction of the object. Again in the Spring world this allows us to construct the object as part of the IOC lifecycle, but then do some work using Spring, and all of the proxies that come with it. The annotation on this method
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=93)** is at post construct. It takes no parameters as the framework itself runs this method. One use that I have had for this is warming in memory caches of data. I used to work on a system that needed to make a web service call as well as a database call to store some data in memory. This was a perfect use case because both of these constructs leveraged Spring abstractions and I couldn't do them in the actual constructor because spring wasn't available. This method is technically called after all property setting is completed. We will talk about this more in the lifecycle chapter, but it is important to know that you can also use your optional dependencies for your class in these post construct methods. Now, I'm including a very simple code snippet here for you to view because we're not actually going to build a post-construct, but this is an important enough topic that you need to know how to do it, and it's very simple. Annotate with that post-construct. It's a public void method, we usually use init by convention, and then any initialization work that you need to do after the object is constructed, and when spring is almost completely done. In fact, you can use all of the Spring constructs that you want to in this init method, but it's the application is into the use phase, and that's the most important part here. Now pre-destroy, as the name implies,
>
> **[3:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=186)** is the method that is executed before the class itself is marked for garbage collection. The annotation is at pre-destroy. This is very useful when you need to capture some state before the application closes in a backing database among other use cases. Again, it is a method that takes no parameters. This is executed when the application context itself closes again before garbage collection takes place. In fact, Spring still has a handle to everything in the IOC, and technically Spring is still running when this method is executed, but it's part of the close operation of the application context. Now, once again, I provided a quick code snippet because we're not going to be implementing it in this course, but it is important that you've seen it. So it's at pre-destroy. We do public void destroy by convention, and then we do any of the work. Again, we have full access to Spring, and all of the proxies in this pre-destroy method, we just don't get to call it when we want. It is called by application context close in that process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (1)
> **Definitions:** is a  (2), means that (1), is an  (1), is called (1)
> **Env Vars:** ioc (2), jsr (1)
> **CLI Commands:** make (1)
> **Cross-References:** next chapter (1)
> **Analogies:** picture (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### 4. The Bean Lifecycle

[↑ Back to Table of Contents](#table-of-contents)

#### [Why the lifecycle is so important](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=0)** - [Instructor] The lifecycle of the Spring application explains the various states your application goes through while being managed by the [[Spring Framework]]. It is critical for Spring developers to fully understand this lifecycle. So let's talk about why the knowledge of the framework is so critical for a highly effective Spring developer. Knowledge of the lifecycle increases overall knowledge of Spring. As you learn how the parts fit together in the lifecycle, you will gain understanding in how to use the framework in the way the designers intended it to be used. It also improves extensibility of the framework itself. You will learn how to write custom processors that interact with Beans or the BeanFactory at appropriate times in the lifecycle to add behavior to your application or individual classes. It can also aid in troubleshooting by providing a baseline for debugging application issues. Because everything in Spring is a proxy, debugging stepwise can be very challenging. However, knowledge of the lifecycle can help you better determine where to break your code and where to investigate for issues. Another aspect of learning about the details of the framework like Spring is it enhances your professional development, something all developers should reach for.
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=94)** As engineers, we don't spend enough time understanding the details of our craft as a whole in my opinion. Learning is the key to that, hence, why you are here. This level of understanding of any framework, especially Spring, provides deeper knowledge of the tools we use, which of course, makes us more capable when using these tools. It also allows us to have more educated discussions with our peers about the tools. It can also allow us to have discussions that can be fruitful with the entire community, not just the peers at our company. Finally, it can help us make better architectural decisions. I have used my knowledge of Spring and proxies to design toolkits that allowed us to inject desired behavior, like encryption, audit logging, and various other crosscutting concerns, on applications I have been involved with because I understood the lifecycle. Spring is [[Open-Source Software]]. And as such, it needs a community. Knowledge of the framework allows for much better interactions with the community. This can come from simple tasks, like filing more detailed bug reports. It can also come into play with detailed discussions around best practices, speaking at conferences, and other educational discussions. This knowledge can also help you be an open-source developer
>
> **[3:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=191)** and contribute to the framework. Spring, as most open-source software projects, is driven by the community. There is usually a corporate backer on big frameworks like Spring, but that doesn't mean that they ignore their roots. Contributing in open-source is your way of helping the next generation, as well as the current generation, of developers. Knowledge of the lifecycle and the framework as a whole can make this a shorter journey from problem to solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Open-Source Software]] (2), [[Spring Framework]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The overall picture](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=0)** - [Instructor] So let's dig into the lifecycle as a whole by starting with an overview. There are three primary phases of the lifecycle, and we are going to spend most of the time talking about the first. The initialization phase is the most complex, and quite frankly, the most interesting of the lifecycle. While in reality, it is one of the shortest phases in chronological time of the three, it is really where we can impact the behavior of our application the most. The next phase is the use phase. The largest majority of time is actually spent in this phase, but most of the interaction with the [[Spring Framework]] here is behind the scenes. You may be using abstractions from Spring, but during the use phase, most of the work by the framework is through proxies applied during the initialization phase. The final phase is the destruction phase, which occurs when the application context starts to close or when its close method is triggered. As we begin to dig into the initialization phase, let's give a high level overview. The initialization phase begins when the application context itself is created. This can be done as in our example manually, or via a runtime like an application server. It is further broken down into two parts. The setup of the bean factory via its initialization is the first part.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=95)** The second is the bean initialization and instantiation phase where your bean objects are actually created and ultimately managed by the framework. This is a high level overview of the initialization phase, and we will talk about each individual stage as we go through the [[Representational State Transfer (REST)|rest]] of this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Prerequisites:** initialization (7), setup (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The init phase: Loading bean definitions](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=0)** - [Instructor] The first step of initialization is the loading of bean definitions. In our original overview, this is where we are at in the initialization phase. There are several sources of our bean definitions. While we're talking about the lifecycle from a traditional flow, there is some slight variance here on how each of these gets loaded. JavaConfig is the first that we will talk about. This is the most different of the loading of bean definitions because the objects are constructed as part of reading the definitions, so keep that in mind as we go through the [[Representational State Transfer (REST)|rest]] of this chapter. This configuration strategy impacts how many of these beans can be initialized. XML configuration is still valid for configuring the application context. Though it isn't preferred anymore, it is still being used in many applications. The XML file or files are read to prime the bean definitions. The final way we will talk about, and we've already seen, is component scanning and ultimately auto-configuration is driven by [[Spring Boot]]. This works very much the same way as XML config, except that there is not an XML definition. Instead, you're relying on the components and the annotation of them to be loaded into the BeanFactory instead of defining them in an XML document or doing the actual object construction in JavaConfig. So let's talk about how we prime the factory.
>
> **[1:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=99)** The bean definitions are loaded into the BeanFactory from all sources. In fact, a given application can have all three sources as the source of the BeanFactory definitions. ID is used to create the index for the factory, not name. That is really, really important to remember, that ID is what you use. Even though you can reference them by things like class from the BeanFactory, the ID is the most important aspect when looking at how they get indexed. The BeanFactory only contains references at this point, and that's another important thing to remember. At this point, we have nothing more than references. We don't actually have objects, so the BeanFactory, we know all of the classes, but we haven't created anything. We just have those references. Now, this phase is complete when the following conditions are met. All beans have been loaded into the BeanFactory. Again, references, but they've all been loaded into the BeanFactory. Beans are just [[Metadata]]. I can't say this enough because it is very important to remember. If you're debugging a problem at this point in time, there are no objects. There are only references and the metadata associated with them that makes up the definition of the bean in the BeanFactory, and no object instantiation
>
> **[3:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=192)** of your code has occurred at this point yet. You can't use anything. Nothing's been created and we definitely aren't at the point where Spring is ready to let your application run. That is the initial part of the phase around the BeanFactory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Spring Boot]] (1)
> **Env Vars:** xml (5)
> **Prerequisites:** initialization (2)
> **Speakers:** - [instructor] (1)

#### [Init: Bean factory post-processing](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=0)** - [Instructor] We're now going to take a look at the final step of loading of the bean definitions into the factory, and this is the post-processing of bean definitions. So here's where we're at in the overall view. Again, we have all of the bean definitions loaded, and now we are in the post-process step. So BeanFactory post-processors. The important thing to note here is that anything acting at this phase works on the entire BeanFactory, not individual beans, but on the entire factory itself. At this point, you can modify or transform any bean in the factory prior to its instantiation. The most common example that you may encounter, and we've actually already used it through an annotation, is the PropertySourcesPlaceholderConfigurer. During this portion, we load the properties into the context and then can apply them to the definitions of the beans, because at this point, those objects haven't been created, but we need to have that [[Metadata]] in order to create the beans in a later step. So BeanFactoryPostProcessors have a very valid purpose. This is the first extension point in the lifecycle that you, as a developer, can impact the lifecycle. This allows you to write custom components to impact the entirety of the BeanFactory if you choose to do so.
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=94)** It's important to note here that this is not a very common place to extend. You can definitely do it, but usually, the work that most developers do don't need to impact the entire BeanFactory. So you normally just use them, you don't actually write them. But nothing says that you can't. If you have some very specific need, you can definitely write your own BeanFactoryPostProcessor, and it will be executed at this point in time. But as I said, it's very common to use existing ones, things like registering scope or properties like we've previously seen. So let's talk a little bit about BeanFactoryPostProcessors if you are using [[Java]] config. If you do this and you want to have your own BeanFactoryPostProcessor, the bean definition itself must be static. This removes the side effects of dynamic instances. So let's walk through this a little bit. You're going to manipulate every bean in the BeanFactory through a bean that must be in the BeanFactory itself. You can see how you can start to get dynamic instance effects because of this. Therefore, by making these methods static in your Java config, it puts it into a state where you cannot manipulate the data, because it's existing once in the entire JVM. Now, when this phase is completed, the BeanFactory is completely loaded, not only loaded, but ready for the next step
>
> **[3:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=190)** with all references. All of the beans in the factory have been completely configured at this point. All system level work is completed in spring at this point. Everything downstream becomes individual beams, and the framework itself, which is now up and running, will do all of that work in proper order. So the BeanFactory itself is loaded. It's set up in a way that it can now be instantiated each individual component, and spring is ready to now dig in and let its container orchestration start to do its work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Metadata]] (1)
> **Env Vars:** jvm (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Init: Bean instantiation](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=0)** - [Instructor] So now we're going to start looking at actions that are taken on each individual bean in the factory with the instantiation phase. This is the high level overview of the initialization phase that we've seen several times now. And in this case, we're talking about the instantiation of the beans. We're going to actually go create some stuff now. And of course, creating things in an object-oriented language means construction. So beans are instantiated in the factory using their constructors. Now remember. When there is only one constructor that can constructors used. When there are multiple ones, Spring has to know which one to use. So you must have autowired one for Spring to know which constructor to use. Otherwise, you're going to run into issues. The important thing to note here is that part of the BeanFactory post-processing is determined the order that construction must occur in order to satisfy the dependencies of each class. So the order is done correctly without any interaction by you. Spring simply figures out the graph and determines the order it needs to create them because of course, dependencies must be created before they can be injected into another constructor. The handle to the class instance remains in the BeanFactory for the lifecycle of the application, unless those beans are not singletons. And if they are not singletons, they actually don't get constructed here
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=93)** unless they need to be used. They may simply wait in the factory unconstructed until they become a dependency, but the handle remains in the BeanFactory and will remain there for the entire lifecycle of the application. Now there is a concept of eager loading versus lazy loading of beans. By default, all beans are instantiated eagerly. To truly be lazy, there can be nothing that depends on them. So if you want a bean to be annotated in a way that it is lazily instantiated, it cannot be a dependency for any other bean. But even if a bean is specified as lazy, Spring and the ApplicationContext reserves the right to ignore it for any reason. So you may specify something as lazy, it may not be a dependency, but there is a chance that it will still be created at this portion, even though you've told the framework not to. So when this phase is complete, a bean pointer is still referenced in the BeanFactory. That doesn't change. Every object in the BeanFactory has now been constructed, but none of them are available for use yet by the [[Spring Framework]]. Anything that you did during construction
>
> **[3:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=187)** cannot rely on Spring, which is why we talked about those lifecycle methods because none of this, including the framework itself, are available for use by your application at this point in time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (1)
> **Definitions:** is a  (2)
> **Cross-References:** we talked about (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Init: Setters](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=0)** - [Instructor] After objects are constructed, we can now call the setters on them, and this is what the [[Spring Framework]] does next. So back to our overview of where we are. We have created the bean factory, we've instantiated all of the beans in that factory, and now when appropriate, we are going to call the setters. Now this is a post-initialization dependency. After all the beans have been instantiated, the setters are called when appropriate. And I say that because if you remember JavaConfig, we don't rely on the setters. They're actually been configured. So autowiring occurs at this point for anything that is not constructor-based. If it is an attribute that you have gone against what the community says to do and autowired it, this is when it will occur. Again, JavaConfig behaves differently because we don't rely on the setters. You create the object in the bean definition. So this phase does not apply for anything handled by JavaConfig. Now when this phase is complete, the beans have been fully initialized, and all of their dependencies have been injected in either through the constructor or through the setters, or again, in JavaConfig, we kind of merge at the end of this because we're now back to the same point. All initial dependencies have been injected into every bean. However, the beans are still not ready for use because at this point, Spring is not done.
>
> **[1:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=97)** We still have a little bit more work to do, but again, it's important to know at this point, though this phase is different, everything converges at this point. And from here on out, all of it behaves the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Init: Bean post-processing](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=0)** - [Instructor] In the IoC, we have fully baked objects that are almost ready for use. We now enter the bean post-processing section of the lifecycle, which is three distinct steps, but we're going to discuss them as one because they act in the same way. So once again, back to our map, we have built a bean factory. We've instantiated the beans. If we are not in JavaConfig, we've called the setters. At this point, no matter the config type, everything is the same. We are now going to run our bean post-processors. So what is bean post-processing? This is the final point of configuration manipulation that can be done in a Spring-based application. Each bean may have additional behaviors added at this point. Now, there are two types of extensible and generic processing that we can apply here. We have the before and the after of the initializer. So let's first talk about the initializer, which is the middle of these three steps. Again, the initializer is the second BeanPostProcessor action. This is a very special case and we don't actually interact in this case on paper. This is where all of the PostConstruct methods that we talked about before get called, which should tell you that at this point, Spring is actually ready to be used.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=95)** The framework provides many of these, even though you may not need them, but because the framework provides them, you get them. But any PostConstruct method that you create will be called during this step. Now, there is a BeanPostProcessor interface that we use to interact with the other two steps. This allows you to inject common behavior to a class of beings or to an individual bean. It still operates at the individual bean level, but because you can apply it to a class, it will do them in order. There are two types, as you might imagine, because there are two other steps here, there is the before and the after. And those reference those PostConstruct methods, as well as the other things that happen during the initialization. The framework leverages lots of these. In fact, one of them is how proxies get added to all of our beans before the initializer. Now when this phase is complete, the beans have been instantiated and initialized. The dependencies have all been created and injected as appropriate. The beans are finally ready for use, which means your application at the end of this phase will enter into the use phase, and we'll talk about that.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Cross-References:** we talked about (1)
> **Analogies:** imagine (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Init: Differences based on configuration](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=0)** - [Instructor] I've alluded to the fact earlier that there are some differences in the initialization phase based on the configuration types, and I want to spend a little bit more time talking about them because I believe that they are extremely important for you to understand. What we're specifically talking about in our overview is the instantiate bean and the setters being called. So, as we've talked about almost ad nauseum, [[Java]] Config has one of the biggest differences. The initialization and setters are merged because they call the method annotated with @Bean. These @Bean annotation methods are executed in proper order, but they are executed as you write them in code. Therefore, there is no need to call a setter or anything like that. Now, let's talk about some of the ways that auto-configuration is just a touch different. The instantiation of all of the beans occurs as normal, and it's all of the beans that were scanned based on @Component or any of its stereotypes. Autowired constructors, when you have more than one, are the ones that we use. When you only have one, that is the one that will be used, which makes sense because you can't construct an object in Java without the constructor. Now, during setter injection, autowired setters, as well as the fields that you shouldn't be using but are available for use,
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=94)** they happen during this part of the lifecycle when the setters are called. Now, XML configuration works very much the same way, but it is a little bit different because of the naming. So, instantiation of all beans and constructor arg injection happens during the instantiation phase. And that makes sense because, again, you cannot construct an object in Java without its constructor. So those constructor args that you put in your XML are driven at this point. What makes sense if you think about it, but it's just a little bit different terminology, is the setters being called are actually driven by the property injection. So in XML, we call them properties, but really they are just setters being called. So that happens during that phase of the lifecycle when the setter injection occurs. So, again, none of this should be new at this point, but this terminology is just a little bit different and it's worth at least repeating to make sure that you fully understand the differences. Because if you work with Spring long enough, you will deal with all of these types of configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3)
> **Env Vars:** xml (3)
> **Prerequisites:** initialization (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The use phase](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=0)** - [Instructor] Once all of the beans are initialized, configured, and instantiated, we enter the use phase of the lifecycle. The use phase is a rather mundane part of our application from a Spring perspective, but it's the most intensive from your application code perspective. Most of the time is actually spent in this phase of a running application, unless of course it's crashing all the time, but we're talking about normal operations. The ApplicationContext via the bean factory serves proxies to the original classes into all of its injected classes. This happens during the initialization lifecycle, but this is the operations that occur during the use phase. Those proxies are actually what we're interacting with, ultimately getting to the underlying class through there. The application context or the underlying bean factory specifically maintains a handle to each bean when we are in the case of a singleton. We've talked about prototypes and how those are a little bit different, but for most beans, they are singletons, and the application context maintains that handle, and you can reference them from the application context if you want to. Which brings us to context-aware beans. Context-aware beans is a mechanism, it's an interface that Spring provides to give you a handle to the application context. Now in our example, we created an instance of the application context in our main method.
>
> **[1:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=92)** That is not necessarily what we're talking about here. What we're talking about here is an actual interface that allows us to interact with the application context from within a class that is managed by the application context itself. This handle allows us to reference beans in the application context and any point in time if we need to do so. Now of course, we could just have them injected as part of the initialization routine, but there are times in specific circumstances where you need to actually go grab something out of the application context, and you can do that through this context-aware bean. Again, this is not a very common interface to use with a few exceptions. When you're in those exception cases, it is very nice to know that you have access to the application context if you need it. Again, remember, usually in object-oriented languages, the parent knows about the child but not the other way around. This is very much that situation for the most part, but when you have this interface that you implement, you actually can get access to the parent from a child, and that's sort of a unique case. Again, it's not very common, but keep this in your tool belt because there may be a time that you need to do this, especially with administration type processes where you may need to access some method of a bean based on some condition that is outside the normal flow of your application.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** initialization (2)
> **Speakers:** - [instructor] (1)

#### [The destruction phase](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=0)** - [Instructor] When your application begins to shut down, hopefully on purpose, you enter the destruction phase of the lifecycle. Now, the destruction phase is only at the end of the lifecycle, but it is an important aspect when dealing with applications, especially those targeting cloud native deployments. It begins when close is called on an application context. The application context interface provides a close method that must be implemented with every implementation of that interface. At this point, any bean managed by the IOC that has a pre-destroy annotated method will have that method executed when close is called on the application context. The beans themselves are not destroyed. They can't be. This is an object oriented language with a garbage collection, so you don't actually destroy anything. Spring simply allows them to be garbage collected. But before that, before it gets to that point, those pre-destroy methods will be called. So spring is technically still running at this point, which means you have every access to all of the proxies, all of the interfaces that spring provides you. The beans themselves have not been destroyed when close is called, and they're actually still managed by Spring. Now, there are a few caveats here. A context cannot be reused again.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=95)** Once you call close, that is a final operation from the perspective of the context. Yes, you could reinitialize a context from the same criteria, but it is a new instance of the application context of the bean factory, so you can never reuse them. Close is the end-state. That is it. Prototype beans are never impacted by an application context close because when a prototype or a session or a request bean is served to the application, Spring actually releases the handle at that point. Remember those beans, we only keep the [[Metadata]] in the IOC. We create them as we need them, and at that point, Spring releases them so they will be garbage collected like every other object that you create outside of Spring itself. And as I alluded to, only garbage collection can destroy a bean instance. I know it sounds trivial to say, but many times people don't really understand how garbage collection comes into play. So application context closed, does not destroy them. It only marks them to be able to be destroyed, which is why it's really important that when you have state to manage on a closing of an application context, you do that in a pre-destroyed method. That way you are guaranteed, assuming you're not in a crash situation, that those methods will be called,
>
> **[3:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=188)** and set your state in the underlying data store before those classes are marked for garbage collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1)
> **Definitions:** is called (3), is an  (2), is a  (2)
> **Env Vars:** ioc (2)
> **Speakers:** - [instructor] (1)


### 5. Aspect-Oriented Programming

[↑ Back to Table of Contents](#table-of-contents)

#### [Aspecting in Spring](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=0)** - [Instructor] One of the coolest features with Spring, at least in my opinion, is how easy it is to leverage aspecting to add global behavior to your application. So what are aspects? Aspects are nothing more than reusable blocks of code that are injected into your application, usually at runtime. And with Spring, that is how it is done. These blocks of code are injected, they're not written into your code. You inject them in from another library or another class. These are powerful tools for adding behavior outside the primary functions within Spring. It also allows you to do something once and apply it everywhere. This is called cross-cutting concerns. And you now can solve them in one place and apply them to all of your applications, not just one. But you're not doing it through a library, you're doing it through an aspect. So there are some several common applications of aspecting, and I'm going to talk through a few of those. One of those, and probably the one I've used most in my professional career is logging, the ability to annotate a method with standard Spring annotations and then target those annotations to perform a logging routine without actually having to write structured logging in your code, but guarantee that you get that custom logging everywhere, is a really powerful application. Now, transaction management
>
> **[1:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=92)** is another application of aspecting. Spring actually does this through a proxy, but you can add behavior to it when you're dealing with your transactions. Caching is another one. Again, Spring has an annotation where a proxy takes care of this, but there are times where you may want to apply aspects to your caching routines. And security is a big one, being able to apply specific security behavior through an aspect. I've actually tied this into my logging aspect. When the logging aspect tackles PII, I inject a security aspect to then go in and hash sensitive data before it actually gets written to standard out. So why would we go about the process of doing this when there are other ways? So again, we're going to go back to the logging routine because this one is a really big one. Let's say every single service method in your application has a structured log requirement from your operations team. If you had to actually go write that every single time, you're subject to miss, you're subject to bugs, things like that, you're going to have copy and paste problems. The list goes on and on. If you simply apply an aspect and target some method signature or some annotation, you get the logging requirements solved in one place. This eliminates the code duplication that will happen in the previous instance.
>
> **[3:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=185)** If you have this logging routine written once and everybody copies and pastes it, you're going to have duplication in your code, even if it's not a complete copy and paste. You also start to deal with mixing of concerns. What is the purpose of your method? It's to operate some service, not to do a logging routine. Well, now part of your code within that method has to deal with logging. By applying an aspect, your code is only doing your business logic and the aspect is applying that behavior on your behalf. It therefore allows you to maintain your application logic and not worry about these other concerns. So let's talk a little bit about how Spring does aspecting, because it is not exclusive to Spring to use aspect-oriented programming. In Spring, it leverages AspectJ to do the aspecting. It is byte code modification, which is runtime interweaving. Now, this is a very important concept to remember because if you are compiling two native executables, you cannot do runtime interweaving. It does not work because you have a native execution, not byte code. So the way that Spring does aspects are contradictory to native compilations. So if you are using GraalVM, do not use aspects,
>
> **[4:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=277)** they won't work. In Spring, they're based on a dynamic proxy. And again, you cannot use them with native code for the reasons I just mentioned, because it is runtime interweaving. Now, there are several parts of a Spring aspect, and we need a little bit of terminology to level set on this before we jump in. A join point is the spot in the execution of code where crosscutting concerns can be applied. This is your code that is targeted by an aspect. A pointcut is the selection criteria used to select the join point to apply that cross-cutting concern. Advice is the code that is applied to the join point when selected by the pointcut. It is the code that applies the logic to solve the cross-cutting concern. And an aspect is the entire package. So with that, let's jump in to aspect-oriented programming.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is called (1)
> **Env Vars:** pii (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Define aspect-oriented programming (AOP) pointcuts](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=0)** - [Instructor] Point cuts are the way a method or class is selected for the execution of an aspect, and the selection has a syntax all of its own. So let's talk a little bit about the pointcut syntax. There's a designator, and then we start with the return, package, class, method, and then argument. So, r is our return type, p is the package, c is the class, m is the method, and then we have the arg or arguments that we use. So when we are writing a point cut, we actually specify one or more of these using things like stars when they don't matter. So if we wanted any return type out of any package for any class named fu, and any method on that, we would do something like * * fu * and then have the argument section be whatever it needs to be. This is how you designate a pointcut. Now, there are several designators that we use. The first one is execution, and this is an expression for matching method execution. Pretty straightforward. The next is within, so this is an expression for matching within certain types. Then there is target, which is an expression for matching a specific type. And then there's my favorite, which is @annotation. This is an expression for matching a specific annotation.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=95)** So let's jump in and take a look at how this works. So I want you to go ahead and pull down the exercise files at this point, if you've been following along, because I've actually added a couple of dependencies and a properties file, and I want to walk through those real quick. So, I added two dependencies: an aspectjweaver, and then a SLF4J instance. I've also provided some properties for log4J, to be used when we are doing a logging. So, with that said, we're going to start and create a package called aspect.
>
> **[2:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=135)** Within aspect we are going to create a new annotation, and an annotation is an interface but we're going to create an annotation, and we're going to call it Loggable. So, the syntax, if you don't have the way to create an annotation the way I did is just public @interface Loggable. Now, to that, we're going to add a couple of annotations, the first one is @Target, and we're going to set the target to be an ElementType of METHOD. And then we're going to set our @Retention, and we're going to have a retention policy of RUNTIME. And that's all there is for our annotation. So now let's create a new class, and we're going to call this LoggingAspect. Now, because we want Spring to grab it we're going to add onto it @Component, and then we are going to set an @Aspect. Now, to this class we're going to create a method, and it's going to be a simple void method called executeLogging, it's going to take no parameter.
>
> **[3:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=214)** It actually takes no parameters so I'm just going to simply put a comment in here that says //do noting. Now, we're going to annotate this method with @Pointcut. So we are now going to specify our point cut, and the pointcut that we are going to provide is @annotation. So this is our execution, it is on an annotation. And to that we are going to say Loggable. So now this point cut will target anytime we use the Loggable annotation. So now we need to go to our application config, and there's an annotation that we need to provide to this class. And what we are going to do is @EnableAspectJAutoProxy. This turns on aspecting. Now, at this point, we're going to run our application just to make sure that everything is working. And indeed, it is. No changes are present, which is what we would expect. When we come back we're going to start implementing this behavior.

> [!info]- Semantic Content
>
> **Definitions:** is an  (5)
> **Env Vars:** slf4j (1), method (1), runtime (1)
> **Code Identifiers:** log4j (1), executelogging (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Implement AOP advice: Before](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=0)** - [Instructor] Now that we have a pointcut in our framework to execute against, let's create our before advice to execute before a join point. So the first thing I want you to do is go src/main/[[Java]] in our aspect and open up the LoggingAspect. We need to create a private static final Logger, grab one from org.slf4j, we will call this LOGGER, we get it from the LoggerFactory and we will simply pass in our LoggingAspect.class.
>
> **[0:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=42)** Now, we're going to do an @Before and we will pass it "executeLogging()". Make sure you put in the parentheses 'cause, remember, the method and the arguments matter with this. Now we would do a public void logMethodCall, (keyboard keys clacking) it will have a JoinPoint. (keyboard keys clacking) And now we can go about implementing our method. So the first thing we're going to do is we're going to build up a StringBuilder called message_=_new StringBuilder, (keyboard keys clacking) and we will simply do a Method=. (keyboard keys clacking) Now, we need to get the method name. We can do that from the join point, so we'll do a message.append, we'll go to our joinPoint and we will get our signature, and then we will get the name. This is the method name. So now that we have that, let's go get the arguments for our method. So we're going to create an object array called args, and that's going to be our joinPoint.getArgs. Now, if null does not equal our args, and our args.length is greater than zero, so we have arguments defined...
>
> **[2:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=137)** All right, we will do a message.append, we are going to append a space pipe space args=[ space.
>
> **[2:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=153)** This way we can have a little bit of structure to our arguments. Now we're going to do an Arrays asList, we will pass at args, we can then do a forEach on that, grabbing the arg itself, and we will open up a Lambda. Within the Lambda we will do a message.append, the arg, and then we will append a space pipe space.
>
> **[3:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=191)** Now, at the end we will simply do a message.append and we will send in a closed bracket. (keyboard keys clacking) Now we can go in and do our logger, and we'll do this as an info message. We will do message.toString, and I'm going to do a replace on this and I'm going to replace a pipe space bracket with a bracket, that way I get rid of that trailing pipe. Now let's go to our service package and open up the greeting service. We will simply annotate the getGreeting method with @Loggable. Now we'll run our application. What you will see is we start spitting out log messages to this method when it is called, because we specified this as an at before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** joinpoint (2), executelogging (1), logmethodcall (1), getargs (1), aslist (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Env Vars:** logger (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Implement AOP advice: After](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=0)** - [Instructor] We have seen executions of advice that occur before the join point. Now, let's look at an execution that occurs after the join point. So I want you to open up the LoggingAspect and we're actually going to modify the existing method. So the first thing that we're going to do is change the before to after. And you'll notice here in my auto complete that there's AfterReturning and AfterThrowing. You actually need to address both of those in most situations. But in this case, we're just going to do AfterReturning. We can leave the point cut the way it is, but we actually have to specify it as the point cut, because we need to specify our returning. And we're going to simply call this returnValue. In our method signature, we need to have an object for our return value. Now we will leave all of the method to this point here alone. So right after we do the final appending of the message, I'm actually going to take and set a string called messagestring equal to
>
> **[1:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=78)** what we currently have in the builder. This way I don't lose what we've already done. Now, what we're going to do before we actually do the logging, is we're going to drop in and say if returnValue is an instance of, and we will do a collection. So if it is a collection, I want to do a message.append, returning: and then append.
>
> **[2:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=120)** I'm going to do a couple layers here and do a collection, returnValue.size
>
> **[2:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=135)** .append instances,
>
> **[2:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=145)** otherwise, which is going to be the case that we're going to see now. We will simply do message.append returning and we will append returnValue.to string. Now, we should be able to keep our replace in here, and now if we run this, you will see that we actually are returning the data that we expected to return because that's what we've told it to do. Go ahead and output the return value as part of our log message. So this is why you might do something after, because now you not only have a handle to the method signature, you also have a handle to the return. The next step is let's wrap this with both a before and after, so we can actually do some behavior during our advice.

> [!info]- Semantic Content
>
> **Code Identifiers:** returnvalue (4)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Implement AOP advice: Around](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=0)** - [Instructor] We have seen the before and after advice, neither of which is really as full featured as we may like it to be. So now we're going to take a look at the advice that I use most often, and that is the around advice. So let's go back to our LoggingAspect class, and let's start by changing our annotation this time to @Around. Now when you do the around, there's a few things that you have to change. The first thing that we're going to do is we're going to remove the returning statement. We now need to return an object. We need to change our joinPoint to what's called a ProceedingJoinPoint, and we will get rid of our returnValue. Now everything started to go red and that's totally fine. All right, so the first thing that I want to do is I'm going to set a long value to be startTime, and we're going to get that from System.currentTime in milliseconds. We will then do an Object returnValue equals joinPoint.proceed. So what we've done is we've started a timer, then we've called our joinPoint and said proceed. You will see, however,
>
> **[1:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=92)** that we now have an unhandled exception. So let's go ahead and add throwable to our method signature, because this can throw an exception like any method can. So now we will go through and after we get the name of our method, we're going to actually print out the time before we do everything else. So let's go ahead and do that. Now we come back to the advice, so we will do a totalTime equals System.currentTime in milliseconds minus startTime. Now that we have the time, let's go after we specify the name and we will simply do a message.append totalTime, put space in there, and then we will output our totalTime. And then we will append milliseconds with a space. Now, there's one more thing that we need to do. We changed our method signature to return an object. The object came from the Proceeding joinPoint. So we simply need to return our returnValue. This way, the execution can continue after the advice is run. So let's go ahead and run this now, and you will see we are getting totalTime. Now because it's running on my machine, everything's coming in with zero milliseconds and that's fine. We could have broken it down further possibly,
>
> **[3:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=185)** but the point is, is it's calculating a time. It just happens to be happening instantaneously. If we wanted to, we could put in a wait and let's go ahead and do that to show you that it is indeed working. So after we come back, we will simply do a Thread.sleep. We'll pass in five milliseconds. And now when we run this, you'll see we're getting six milliseconds and that time should continue between five and six milliseconds depending on how we're breaking. But we've now paused it because we told it to, but that time calculation still continues. So we've gone in, we've executed the method, we then go in, we execute the method, we come back, we pause, we do the [[Representational State Transfer (REST)|rest]] of our logging, and then we return that value, which continues execution on the main thread. This is how you do around. This is my preferred way of doing aspecting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** joinpoint (4), totaltime (4), returnvalue (3), starttime (2), currenttime (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Building your own aspect](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=0)** (bright electronic music)
>
> **[0:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=6)** - [Instructor] So now you get to go create your own aspect as part of a challenge. Here's the instructions that I'd like you to follow. I want you to create a counter. You are going to count method calls as part of this aspect. You'll report on them by method name. You will apply that counter at the method level, and you'll apply this to any number of methods you pick. So, each time a method is called, you will count it, you'll apply it wherever you want, you will report them by method name, and you apply the counter at the method level. The [[Representational State Transfer (REST)|rest]] is up to you. Have fun doing this. I will be back with my solution to this Challenge Exercise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Building your own aspect](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=0)** (bright electronic music)
>
> **[0:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=6)** - [Instructor] Now that you've had your chance, it's time for me to show you my solution to this Challenge Exercise. I'm going to start with the interface that I created called Countable. Looks very much like our loggable interface from before. I then created an aspect where the point cut triggers on that annotation. Part of that is I also created a map for my countingMap. I then went in and created my advice, and I did this as a before advice, and I simply look and see if the map contains my method. If it does, I increment it, if it does not, I set it to one. At the end, I output all of those values. I then went to each of my service methods and added the @Countable interface to each of the service methods. Now, when I run my application, you will see that I get a cascading out of all of my counts, and then when I go to the next round, it goes up where appropriate, and that will continue through the operation. Now, that's how I solved this. You could have done this several different ways, and you probably have a more efficient way of doing it. This was simply to show what we're trying to do, and it works as expected.

> [!info]- Semantic Content
>
> **Code Identifiers:** countingmap (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=0)** - [Instructor] Now that we have gone through the framework, we are ready for some next steps. But before we get there, let's take a look at where we've been in this course. So as a review, we introduced the concept of inversion of control and the IoC container within Spring, we discussed configuring that IoC with JavaConfig. We then talked about component scanning with a little bit of a discussion of auto-configuration. We then fundamentally discussed the Spring lifecycle. This is probably the most important topic in this course in my opinion. We spent a lot of time talking about how Spring actually operates at startup, use, and destruction. We then walked through aspecting, which has actually been removed from the certification exam. But it's a very important skill to have despite the fact that it doesn't work with GraalVM. So what is next, you might ask? Of course, certification would be a great option. This course along with my course, Learning Spring With [[Spring Boot]] 3 or Spring Essential Training, either of which mixed with this course will provide you all of the material that you need to be successful with a little bit of practice for the Spring certification exam. Obviously, we've touched on aspecting. It's something I find very important. Spend a little time. Look at a professional example
>
> **[1:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=92)** of aspecting that you could use in your day-to-day work. Take a look at the lifecycle, see if there is any place in your system that any of these use cases of modifying the lifecycle through the use of interfaces could be beneficial to you and your organization. And continue learning. Even if you don't have professional examples of aspecting or lifecycle use cases, you can always use CodeKatas to create instances of these in your [[GitHub]] repo to practice these skills and get better at them. I'd like to end this course like I end all my courses, by simply saying thank you. I understand that your time is valuable, and the fact that you've chosen to use your time to work with me and to learn this material is not lost on me. So thank you for that. My commitment to you does not end with this course. I encourage you to follow me on Twitter, now X, GitHub, StackOverflow, where my handle on all of those is @fpmoles. If you have questions about this or any of my courses on [[LinkedIn]] Learning, leverage the question and answer section for that course. I respond to them all the time. And of course you can reach out to me on these methods. That being said, thank you for your time. I hope you have found [[Spring Framework]] In-Depth to be very valuable, and look forward to seeing you on the next course. Continue learning because we should never stop learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Spring Boot]] (1), [[LinkedIn]] (1), [[Spring Framework]] (1)
> **Tools:** github (2)
> **CLI Commands:** find (1)
> **Cross-References:** we discussed (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Frank P Moley III]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/spring-framework-in-depth-5945181)

## Skills Covered

- Spring Framework

## Path Context

### In [[Building Your Skills in Spring Development]]
← [[Spring with GraphQL]] | **3 of 4** | [[Advanced Spring- Effective Integration Testing with Spring Boot]] →

## Appears In

- [[Building Your Skills in Spring Development]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Spring- Application Events]] — Spring Framework
- [[Advanced Spring- Spring Boot Actuator]] — Spring Framework
- [[Performance Tuning in Spring Apps]] — Spring Framework
- [[Spring with GraphQL]] — Spring Framework
- [[Spring 6 Design Patterns]] — Spring Framework

---

[↑ Back to top](#)