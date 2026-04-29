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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Spring%20Framework%20in%20Depth.md)

![Spring Framework in Depth](https://media.licdn.com/dms/image/v2/D4D0DAQHQkdsXWP-ZQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731028968463?e=2147483647&amp;v=beta&amp;t=-mjsjugJVQVObGKGZsHfNt1Pxh2dERYzXZ-sAX5je0o)

# Spring Framework in Depth

> Spring is an application framework and inversion-of-control (IOC) container for the Java platform. The framework's core features can be used by any Java application and are ideal for enterprise and internet-based app development. Get a comprehensive overview of Spring in this intermediate-level course with software architect Frank Moley. Frank develops applications and web services with Spring, an

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413) | 1h 55m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Spring Overview]]** (2 videos)
- **[[#2. Configuring the ApplicationContext]]** (7 videos)
- **[[#3. Component Scanning]]** (3 videos)
- **[[#4. The Bean Lifecycle]]** (10 videos)
- **[[#5. Aspect-Oriented Programming]]** (7 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Building blocks of Spring
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/building-blocks-of-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/building-blocks-of-spring?u=76281980&t=0)** - [Frank] Fully harnessing the power of the Spring Framework makes you more effective as a developer in the framework.
>
> **[0:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/building-blocks-of-spring?u=76281980&t=8)** Learn to debug, extend, and maximize its value.
>
> **[0:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/building-blocks-of-spring?u=76281980&t=13)** In this course, you can learn the full utilization of the framework itself.
>
> **[0:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/building-blocks-of-spring?u=76281980&t=19)** Hi, I'm Frank Moley.
>
> **[0:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/building-blocks-of-spring?u=76281980&t=21)** I'm a developer, architect, teacher, and perpetual student, working primarily in distributed systems for over 25 years, many of those years utilizing the Spring Framework.
>
> **[0:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/building-blocks-of-spring?u=76281980&t=35)** Join me in this course, Spring Framework in Depth.

> [!info]- Semantic Content
>
> **Speakers:** - [frank] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we kick off our learning of the Spring framework in depth, there are a few key things you need to know, and have set up on your machine.
>
> **[0:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=10)** The Spring framework itself is written in Java, and was designed for the JVM.
>
> **[0:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=16)** We will be using Java as our development language for this course.
>
> **[0:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=20)** We specifically will be using Java 17.
>
> **[0:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=24)** You need to have the JDK installed for development in Java, not a JRE.
>
> **[0:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=30)** Make sure your installation on your machine is a JDK.
>
> **[0:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=35)** It can be any JDK implementation as long as it is a JDK.
>
> **[0:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=41)** Each provider has really good instructions for various operating systems when it comes to that installation.
>
> **[0:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=50)** You'll need basic knowledge of the Java language.
>
> **[0:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=53)** I won't be using any of the more advanced language constructs, but you need to be able to understand the Java code quickly to be successful.
>
> **[1:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=62)** I am not focusing any time there in this course.
>
> **[1:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=68)** You should have an IDE that you are comfortable with.
>
> **[1:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=72)** I am going to be using IntelliJ Ultimate Edition for my development.
>
> **[1:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=76)** I use these tools every day, so I am most comfortable with them.
>
> **[1:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=81)** You definitely don't need to use a paid IDE to be successful in this course.
>
> **[1:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=87)** Many of the actions that I will use in my IDE exist in other IDs natively or through plugins.
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=94)** The key here is to understand, and use the IDE that is most comfortable to you in order to develop in Java.
>
> **[1:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=105)** We will also be using Maven for dependency management, but we won't really focus on it at all.
>
> **[1:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=112)** Just ensure you either have Maven installed on your machine or know how to use the embedded wrappers to mimic what I will be doing.
>
> **[2:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=122)** Apache provides excellent documentation for each operating system on how to install Maven itself.
>
> **[2:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=129)** If you would like to dig in deeper to Maven, I have a course here in the library on learning Maven.
>
> **[2:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=137)** There's a little prerequisite knowledge you will need to be successful in this course.
>
> **[2:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=142)** The first is just some basic spring knowledge.
>
> **[2:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=146)** You don't need to be an expert, but some understanding of the framework, and its utilization will help you grasp the deeper concepts of how the framework itself operates.
>
> **[2:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=160)** I have a course on LinkedIn Learning called Learning Spring with Spring Boot 3.
>
> **[2:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=165)** That should give you a good jumpstart.
>
> **[2:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=169)** As previously mentioned, you should know Java.
>
> **[2:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=173)** Now, Spring can be used with other JVM languages like Kotlin for instance, but we are going to use Java in this course.
>
> **[3:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=182)** If you need a refresher on that, there are several good courses in the LinkedIn Learning Library on learning Java.
>
> **[3:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=191)** You should also understand the basics of Maven, just so you can grasp the dependency management we will be leveraging with our work.
>
> **[3:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=201)** If you want to a refresher on Maven, as I previously mentioned, I have a course on the topic in the LinkedIn Learning Library.
>
> **[3:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=209)** Finally, we'll be talking about aspecting, and aspect-oriented programming.
>
> **[3:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=215)** It would be good for you to understand the conceptual levels of a AOP before we get too deep into how the framework itself operates as it is critical to the operation of Spring in some aspects.
>
> **[3:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/what-you-should-know?u=76281980&t=231)** So it's worth a little bit of time right now to go read up about aspecting, and Aspect Oriented Programming before you continue to the next video.

> [!info]- Semantic Content
>
> **Env Vars:** jdk (4), ide (4), jvm (2), jre (1), aop (1)
> **Prerequisites:** set up (1), you need to have (1), you'll need (1), install (1), prerequisite (1)
> **CLI Commands:** make (1), apache (1)
> **Code Keywords:** finally, (1), continue (1)
> **Definitions:** is a  (2)
> **Versions:** java 17 (1)
> **Cross-References:** next video (1)
> **Tools:** intellij (1)


### 1. Spring Overview

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to Spring
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=0)** - [Instructor] As we dig into the Spring Framework in depth, it is important to level set on exactly what Spring is and why it has become the most popular framework for the JDK.
>
> **[0:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=12)** Spring is a framework that provides the plumbing for an application, so you as the developer can focus on business processes or user needs instead of the underlying needs of the application.
>
> **[0:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=27)** Spring is an open-source project backed by Broadcom.
>
> **[0:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=30)** The power of Spring really starts with this community.
>
> **[0:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=34)** The core committers are all fantastic developers and the community only makes them better.
>
> **[0:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=41)** They're all very active in answering questions responding to bugs and sharing their opinions on how to use Spring in the most effective manner.
>
> **[0:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=50)** Spring was and still is to a large part, still focused on enterprise abstractions.
>
> **[0:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=58)** It is really the bread and butter of its operational usage.
>
> **[1:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=61)** However, Spring is fully capable of supporting internet-focused applications.
>
> **[1:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=67)** With the advent of microservices architectures where Java is the language of choice, Spring really shines with Spring Boot and embedded application servers.
>
> **[1:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=79)** Spring is really lightweight.
>
> **[1:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=81)** I know many users of other frameworks will laugh at that comment, but if you look at the feature sets Spring provides and the way the projects are broken apart to optimize workflows, it really is a lightweight framework.
>
> **[1:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=96)** Consider especially traditional Jakarta EE implementations, formerly Java Enterprise Edition, the Spring packaging and abstractions are much smaller.
>
> **[1:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=109)** Spring is also very unobtrusive.
>
> **[1:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=112)** If you build your applications using best practices and current recommended strategies, you can dramatically reduce your dependence on imports from the Spring catalog.
>
> **[2:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=125)** Through the use of abstractions of facades, you can actually keep your business logic completely intact while not requiring any Spring imports in those class files.
>
> **[2:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=139)** So let's spend a moment and talk about the most popular use cases for Spring, and that is starting with the enterprise itself.
>
> **[2:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=148)** With Spring, especially Spring Boot, there is no need for heavy application servers.
>
> **[2:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=154)** Even if you don't use Spring Boot, Tomcat is sufficient to run your packaged WAR file.
>
> **[2:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=161)** However, most users today are building executable JARs with the app server embedded in it.
>
> **[2:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=169)** Spring achieves much of this by abstracting from the heavy enterprise system APIs that come with Jakarta EE.
>
> **[2:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=178)** That doesn't mean you don't still have access to technologies like JMS.
>
> **[3:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=183)** You just abstract them away from the application server.
>
> **[3:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=187)** By leveraging this in your ecosystem, your code is simpler, but so is your operational burden.
>
> **[3:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=195)** By leveraging dedicated systems instead of large application server implementations, you make your code easier to distribute and scale as well.
>
> **[3:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=208)** I have mentioned business logic a lot already and it is a key win for Spring.
>
> **[3:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=214)** Think of how complex and repetitive it is to set up a JDBC connection, build a query, and execute it, and then read the results into an object all while shutting down the results set and the connection.
>
> **[3:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=230)** Now repeat that for every database query in your application.
>
> **[3:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=235)** Then expand that by every other common system that you use.
>
> **[4:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=240)** This literature code with copy and paste that is error prone at best.
>
> **[4:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=245)** With Spring, that all just goes away.
>
> **[4:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=249)** The framework handles it for you, so your code is just the business logic.
>
> **[4:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=254)** And ultimately that is really what you care about.
>
> **[4:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=259)** Another big benefit of Spring is the dependency injection aspect of the framework.
>
> **[4:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=265)** Spring manages all of your runtime dependencies by allowing the framework to maintain these objects, you don't have to deal with the creation and maintenance of these objects.
>
> **[4:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=276)** This greatly decreases the complexity of your code, which of course improves your maintainability.
>
> **[4:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=284)** It also helps you avoid some of the most common issues around memory management that can creep into Java-based applications even with its automatic garbage collection.
>
> **[4:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=296)** With Spring, you create these objects once.
>
> **[4:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=299)** This is done either through configuration of the application context or through formal object creation and configuration with JavaConfig.
>
> **[5:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=309)** At the point the object is configured, it is maintained by the application context until the application closes.
>
> **[5:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=317)** This is a technique that does take some getting used to as with any dependency injection-based framework.
>
> **[5:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-spring?u=76281980&t=324)** But we are going to spend some time talking about it in much detail later.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** jdk (1), war (1), jms (1), jdbc (1)
> **Code Keywords:** let (1), abstract (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The inversion of control (IoC) container
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=0)** - [Instructor] The inversion of control pattern is fundamental to the operation of the Spring framework.
>
> **[0:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=5)** It is critical for users of the framework to understand not only the benefits of inversion control, and dependency injection in general, but also to understand the consequences of using this pattern.
>
> **[0:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=20)** Inversion of control adds a new dimension to how you write your code.
>
> **[0:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=25)** The container itself maintains all of the classes, including the dependency classes.
>
> **[0:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=32)** This is the critical aspect of IOC.
>
> **[0:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=35)** While the container handles the maintenance of these objects, your business logic code doesn't have to.
>
> **[0:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=43)** Objects are injected at runtime, usually during a startup operation.
>
> **[0:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=48)** This allows the container to maintain the objects and hand them as dependencies to other objects throughout the runtime.
>
> **[0:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=57)** An object that accepts these dependencies usually does so through construction of the object itself or through setter methods.
>
> **[1:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=65)** This is a topic that can cause some discussion, but the rule of thumb is this, if your class cannot operate without the dependency, it should be injected via constructor injection.
>
> **[1:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=80)** If however, your class can treat the dependency as optional or can accept multiple, but variable concrete implementations of the dependency, then and only then can it be injected via setter injection.
>
> **[1:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=96)** So let's take a look at a traditional dependency management graph so we can visualize the difference, especially with some kind of complexity.
>
> **[1:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=105)** So we're going to start our example with a class called Main.
>
> **[1:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=109)** Now, in the construction of Main, you have two dependent classes.
>
> **[1:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=113)** So you need to construct those while you're constructing Main.
>
> **[1:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=117)** However, in constructing one of those dependent classes, you need another class.
>
> **[2:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=124)** So you need to construct it as well in Main.
>
> **[2:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=127)** And that class finally, has two dependent classes.
>
> **[2:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=131)** So once again, you need to construct those as well, and you're going to do it in Main.
>
> **[2:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=136)** So now we're four layers deep of object construction just to create a single class.
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=143)** This level of complexity exists in many Java programs.
>
> **[2:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=147)** In fact, it exists in many object-oriented languages in general.
>
> **[2:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=153)** For the IOC container model, we will use the same dependency graph.
>
> **[2:38](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=158)** In this case, we start with our IOC container and our main class.
>
> **[2:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=164)** Now, the IOC container manages every object in our graph.
>
> **[2:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=169)** So Main has two dependencies like before, but instead of Main having to construct them, it takes them as constructor arguments and the IOC container handles that injection at object creation for Main.
>
> **[3:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=185)** Now, when the IOC created our dependent classes, that had a dependency as well.
>
> **[3:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=191)** It once again handled the injection via constructor argument and hands the object its dependency.
>
> **[3:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=199)** And once again, we have a dependent class that has two dependencies of its own.
>
> **[3:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=204)** Once again, the IOC container handles injecting them through constructor arguments.
>
> **[3:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=211)** Now, you may immediately see that we have an order in which our dependencies must be created to make this model work.
>
> **[3:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=221)** With Spring, we don't have to worry about that.
>
> **[3:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=224)** As you will see in this course, the framework handles all of that for us.
>
> **[3:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=230)** What you will see is that this complexity actually becomes a simplification because we only do this once and order doesn't matter.
>
> **[3:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=239)** No matter how many times the dependency is used, the container handles it for us.
>
> **[4:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=246)** So let's take a little time and talk about why this is so important of a topic when dealing with complex applications.
>
> **[4:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=254)** Inversion of control and dependency injection in general, reduce the noise in your code.
>
> **[4:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=261)** If you have a class that is used in several places in your application, this becomes even more clear.
>
> **[4:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=268)** You can focus on your code and the business logic you need to implement, not constructing and managing dependencies.
>
> **[4:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=277)** By removing construction of objects within your code, you reduce coupling.
>
> **[4:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=282)** You simply consume the objects and become less coupled to their object creation.
>
> **[4:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=289)** This becomes even better if you code to interfaces, but more on that in a little bit.
>
> **[4:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=295)** Dependency injection and inversion of control also reduce the bugs that arrived during object creation.
>
> **[5:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=302)** We all know how repetitive behavior in code is handled, copy and paste.
>
> **[5:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=307)** If a bug exists, you have now copied it into two places.
>
> **[5:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=311)** If you modify that behavior in one spot and don't do it in another, you still have the bug.
>
> **[5:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=319)** By allowing the IOC to handle construction, you can focus on the API contract of your dependencies.
>
> **[5:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=326)** This allows interfaces to be dependencies instead of the concrete objects.
>
> **[5:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container?u=76281980&t=333)** Again, this allows you to have cleaner code that is less coupled to your dependent objects.

> [!info]- Semantic Content
>
> **Env Vars:** ioc (8), api (1)
> **Code Keywords:** class. (3), let (2), this, (1), finally, (1), case, (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)


### 2. Configuring the ApplicationContext

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to the ApplicationContext
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=0)** - [Instructor] The Application Context and more specifically, the BeanFactory is one of the most important components of the Spring Framework.
>
> **[0:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=8)** As we dig in deeper to the Framework as a whole, we need to fully understand the application context and the role it plays during runtime of our applications.
>
> **[0:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=19)** The first thing that we need to discuss is the purpose of the application context.
>
> **[0:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=24)** The application context acts as the heart of the SpringApplication.
>
> **[0:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=29)** This is the central element that you deal with from the Spring Framework when developing an application.
>
> **[0:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=35)** As previously mentioned, your classes should seldom, if ever, have imports from the Spring Framework, except in the few cases of annotations.
>
> **[0:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=45)** However, the application context and the entry point of your application is an exception.
>
> **[0:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=53)** The application context encapsulates the BeanFactory.
>
> **[0:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=56)** The BeanFactory, as we will discuss, is the IoC container itself.
>
> **[1:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=61)** The application context encapsulates it to provide a user access to the BeanFactory under very controlled situations.
>
> **[1:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=70)** As such, it provides metadata for bean creation.
>
> **[1:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=75)** We will talk a lot about bean configuration, but no matter the mechanism that you use to configure your beans, the application context serves to take that configuration and to allow the framework to use it to build the IoC container itself.
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=93)** It also ensures that your beans are created in appropriate order as we saw previously.
>
> **[1:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=99)** This can be a concern when a central object manages all of the dependencies in an application.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=107)** It must be done in proper order to ensure dependencies are available when needed for the construction of objects.
>
> **[1:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=115)** Spring handles that through mechanisms within the BeanFactory and ultimately the application context.
>
> **[2:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=123)** As mentioned, the BeanFactory provides for the inversion of control container.
>
> **[2:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=128)** This provides all the facilities for injection of beans at startup and runtime.
>
> **[2:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=134)** While most beans are singletons and injected at startup, there are other types of beans that get handled slightly differently, however.
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=143)** All of the injection is handled by the BeanFactory.
>
> **[2:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=147)** Most of the developers interaction with Spring is actually configuring the IoC container.
>
> **[2:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=154)** We do use abstractions provided by Spring, but they are just pre-configured facades on top of repetitive processes for the most part.
>
> **[2:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=165)** Really using Spring is more about configuration, at least at its core.
>
> **[2:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=172)** The BeanFactory maintains a handle to all singleton beans in the application.
>
> **[2:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=177)** Now, what this means is that beans of type singleton will always be referenced in the BeanFactory.
>
> **[3:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=184)** Even if a class goes out of scope in the main runtime, the BeanFactory will always have a handle to it.
>
> **[3:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=192)** This also means that the instance object is injected everywhere it is used, so you need to keep that in account when storing state in these objects.
>
> **[3:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=202)** Attributes for these classes must be handled carefully.
>
> **[3:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=207)** Beans that aren't singletons are handled differently, and we'll talk about those a little later on.
>
> **[3:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=214)** Multiple application contexts can bring a little bit more challenge to your application and we need to at least mention that they're there.
>
> **[3:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=222)** A spring application can have more than one application context.
>
> **[3:46](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=226)** It will always have at least one, but in certain situations there can exist multiple.
>
> **[3:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=233)** Web containers, for instance, always have multiple application contexts in play.
>
> **[3:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=239)** The parent context can interact with the child context, but the other is not usually possible.
>
> **[4:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=247)** This makes sense if you think about OOP in general because there is always a parent context and the rest are children, much like a dependency graph for your business objects.
>
> **[4:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=257)** We aren't going to go into too much depth here on multiple application contexts, however.
>
> **[4:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext?u=76281980&t=262)** Because most often it is the framework that is controlling these cases.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), means that (1)
> **Env Vars:** oop (1)
> **Cross-References:** as we saw (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Configuration of Spring with Java
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=0)** - [Instructor] We're going to start our journey of configuring Spring with JavaConfig.
>
> **[0:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=5)** While it is not the first way introduced to configure, it is the most common type of configuration method in use today.
>
> **[0:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=14)** XML is still valid but not often used and has been removed from the examples and generally not favored anymore.
>
> **[0:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=23)** Sometimes no matter what you do, you need to type the config for Spring applications, and JavaConfig should be your first choice because of its benefits.
>
> **[0:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=34)** First off, it provides natural language syntax.
>
> **[0:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=37)** There is no other language schema or structure to consider, you just use Java.
>
> **[0:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=43)** It also provides compile time checking of object creation and syntax because it's the native language.
>
> **[0:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=51)** This compile time checking is very welcome, especially if you have used XML syntax where you would have to run the application to test the actual configuration.
>
> **[1:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=63)** Because it is Java, it integrates better in most cases with your IDE.
>
> **[1:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=68)** This is less critical with more modern plugins for your IDE of course, but it does offer nice syntax highlighting and auto completion in most IDEs.
>
> **[1:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=79)** So let's take a look at this in real life.
>
> **[1:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=84)** In the IDE, load the simple program that I have created for you from the exercise files, this is an overly complex implementation of a Hello World program.
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=93)** So we can show Spring, it's not a real application.
>
> **[1:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=97)** Go ahead and run the main method in source main Java, the application class, and you'll simply see that it is going to output Hello Frank.
>
> **[1:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=109)** And it's going to do the same every five seconds until it does the fifth time.
>
> **[1:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=115)** So while that is running, I'm going to go ahead and open up the palm file for my application and we're going to add a few things.
>
> **[2:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=124)** The first thing that I like to do is add a property and that property is going to be Spring.version and we are going to use 6.1.13 that is the most current as of the time of creation of this course.
>
> **[2:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=140)** We're then going to add a dependency section and the first dependency that we are going to add is Spring core.
>
> **[2:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=147)** Now Spring core comes from org.Spring framework and we will simply pass in Spring.version.
>
> **[2:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=157)** Now we're going to add another dependency and that is going to be Spring.context once again from org.Spring framework.
>
> **[2:46](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=166)** And once again, we will do Spring.version as the property.
>
> **[2:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=171)** So I'm going to go ahead and let Maven run and it will download these dependencies for us.
>
> **[2:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=177)** Now that that is done, I want to go the root package that I have and we are going to create a new Java class and we are going to call this application config.
>
> **[3:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=187)** Now to our application config class.
>
> **[3:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=190)** Here we are going to start with an at value and we'll talk more about what this is later, but we're simply going to pass it a string of Hello and it will be a private string called "Greeting".
>
> **[3:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=205)** Now we are going to create a bean and this is how you do JavaConfig.
>
> **[3:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=210)** I'm going to create a time service and I will simply call this time service.
>
> **[3:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=217)** And in there I am simply going to return a new time service with a Boolean of true to say that it is 24.
>
> **[3:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=229)** We're going to do the same with an at being annotation again.
>
> **[3:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=233)** And now I'm going to create an output service and we will simply call this output service and we are going to pass to it a greeting service called greeting service and a time service, as you might imagine called Time Service.
>
> **[4:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=253)** And then we will simply return a new output service passing it, both the greeting service and the time service.
>
> **[4:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=266)** And now we are going to do an at bean public greeting service.
>
> **[4:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=275)** We will call it, as you might imagine, greeting service.
>
> **[4:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=279)** And we will simply return a new greeting service, passing it our greeting.
>
> **[4:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=287)** There we go.
>
> **[4:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=287)** So we've actually now run the configuration that we need for Spring.
>
> **[4:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=292)** So let's go back to our application class.
>
> **[4:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=295)** So the first thing that I want to do here is I want to delete everything above the for loop.
>
> **[5:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=300)** And we're going to start by getting an instance of an application context.
>
> **[5:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=307)** Now, this is an interface, we will call it context.
>
> **[5:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=310)** And we are going to create an annotation config application context.
>
> **[5:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=315)** This is one of the many flavors that we get and we will simply pass it the class that we just created.
>
> **[5:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=324)** Now we are going to simply get a handle to the output service from the context and we will get a bean.
>
> **[5:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=334)** Now, there are many ways to get a bean, but one of the ways is to simply pass it, the class that I want to get.
>
> **[5:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=341)** We're not going to get it by name, we're going to get it by class, and at this point we actually can run our application.
>
> **[5:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=347)** So we haven't created anything in our main method here, other than the output service, and we didn't really create it.
>
> **[5:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=355)** We got it from the context that we have.
>
> **[5:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=357)** So let's run this and I want you to notice the output difference.
>
> **[6:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=363)** None. And that's intentional.
>
> **[6:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=366)** Spring is running, it's handling all of the injection, it's handling all of the object creation, but your application still behaves the exact same way.
>
> **[6:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java?u=76281980&t=377)** That is the power of Spring from the very beginning.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (4), class, (2), class. (2), private (1)
> **Env Vars:** ide (3), xml (2)
> **Definitions:** is an  (2)
> **Analogies:** imagine (2)
> **Versions:** 6.1.13 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)

#### Work with the environment
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=0)** - [Instructor] Most applications cannot be deployed to just one data center anymore, and robust configuration patterns are needed to support this.
>
> **[0:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=9)** The use of environment variables is one of the most common ways of injecting data into a running application, to Flex, by data center or environment.
>
> **[0:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=18)** Spring provides an environment abstraction that allows you to build applications that Flex configuration based on environment variables.
>
> **[0:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=28)** The environment is populated by default with all of the environment variables of the runtime of the application.
>
> **[0:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=37)** The environment is also populated, and can be supplemented by properties via runtime arguments or files, among other things.
>
> **[0:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=47)** This allows you to provide a set of default configuration that can be overridden at runtime.
>
> **[0:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=54)** There's a detailed hierarchy in the Spring documentation on the order in which these values, when they share a key, will be overridden.
>
> **[1:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=64)** This is a very powerful construct, especially in the cloud native world that I use a lot.
>
> **[1:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=70)** It is also useful in traditional applications when dealing with multiple environments.
>
> **[1:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=76)** You can use a mixture of properties and environment variables to manipulate the configuration as you migrate from environment to environment, or from data center to data center.
>
> **[1:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=87)** This is how I manage things like URLs of other services, log levels, and various other runtime configurations.
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=94)** So let's take a look at this in practice.
>
> **[1:38](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=98)** The first thing that I want you to do is to open up the service, and the output service specifically, and we are going to add a new attribute.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=107)** So we will call this String name.
>
> **[1:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=111)** Now, because it is final, we need to add it to our constructor.
>
> **[1:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=118)** And we will simply set this.name = name.
>
> **[2:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=123)** We can then remove it from the generate output method as a parameter.
>
> **[2:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=130)** And with that, this class is ready.
>
> **[2:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=133)** So let's prepare our application a little bit more by creating a new file in our resources directory.
>
> **[2:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=140)** And we will call this application.properties.
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=143)** And this is, by convention, the name of your properties file.
>
> **[2:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=146)** So we're going to create two new properties.
>
> **[2:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=148)** The first one will be app.name, and I'm simply going to pass in Frank.
>
> **[2:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=153)** And the next one will be app.greeting, and I will pass in Hello.
>
> **[2:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=161)** So now that that's ready, let's go to our application config.
>
> **[2:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=165)** And the first thing that we are going to do is we are going to annotate this class with a property source.
>
> **[2:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=171)** We will look on our class path for a file called application.properties.
>
> **[2:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=178)** Now, we can go to our hard-coded @Value statement, and we can convert that to be ${app.greeting}.
>
> **[3:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=193)** But, we also need a name.
>
> **[3:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=195)** So we're going to do the same thing with @Value.
>
> **[3:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=199)** Do "${app.name}", and this will be a private String called name.
>
> **[3:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=212)** And now down in our output service, we can simply pass the name.
>
> **[3:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=217)** Now let's go to our application class, and we will simply remove the string parameter to the method where we no longer need it.
>
> **[3:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=228)** So now if we run our application, we should expect to see everything behaving the same.
>
> **[3:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=234)** So we're injecting this right now from our properties file.
>
> **[3:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=238)** Now, as I mentioned, there is a hierarchy to the waythat this works.
>
> **[4:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=243)** So I'm going to go in and I'm going to edit my run configuration.
>
> **[4:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=247)** This is the configuration my IDE is passing to the running application.
>
> **[4:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=253)** There's a couple different ways that you can do this.
>
> **[4:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=256)** You can set up VM arguments, so I can simply pass in a D, and we'll pass in a greeting here, so app.greeting, and we're going to set that equal to Howdy.
>
> **[4:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=269)** And the other way is through environment variables.
>
> **[4:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=272)** Now, when you're dealing with environment variables, there's a pattern we can use.
>
> **[4:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=277)** So we're going to do APP_NAME, in all caps, and we will set that equal to Partner.
>
> **[4:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=285)** So now if I run this, you will see that we've actually converted both of those.
>
> **[4:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=293)** The VM argument and the environment override the property that we have set in the properties file.
>
> **[4:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=299)** So we're now passing in Howdy Partner from a mixture of VM arguments as well as environment variables.
>
> **[5:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment?u=76281980&t=307)** But the important thing on that environment variable is by capitalizing it and replacing the dot with underscore, you have a pattern that leverages how we normally deal with environment variables against our Spring application, where we normally do the dot convention in application.properties files.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (4), this. (3), private (1), class, (1)
> **UI Navigation:** go to (3)
> **Env Vars:** ide (1), app_name (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Profiles
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=0)** - [Instructor] We talked about using environment variables for flexing by environment.
>
> **[0:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=4)** Sometimes there is a desire to change behavior based on pre-configured profiles.
>
> **[0:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=11)** A case for this that I have used are injecting mocking behavior in a QA environment.
>
> **[0:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=17)** Let's take a look at this in action in Spring.
>
> **[0:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=21)** The first thing I want you to do is open up your application.config.
>
> **[0:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=27)** And on the TimeService, we are going to mark @Profile ("!dev").
>
> **[0:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=45)** And now, we are going to add another bean.
>
> **[0:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=52)** And we're going to say at @Profile("dev").
>
> **[0:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=59)** And then we will do a public TimeService.
>
> **[1:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=72)** And we'll return a new TimeService with this time it being false.
>
> **[1:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=84)** Now, the way that I'm going to do this is I'm actually going to create some configuration specifically for this.
>
> **[1:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=89)** So I'm going to start with my initial configuration.
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=93)** I'm going to get rid of the greeting changes that we made before.
>
> **[1:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=101)** So we're going to start there.
>
> **[1:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=103)** And I'm going to set a VM argument of -Dspring.profiles.active=prod.
>
> **[1:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=116)** And I'm going to name this one Prod.
>
> **[2:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=122)** Now I'm going to duplicate this one, and we will call this one Dev.
>
> **[2:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=128)** And now, I'm going to set spring.profiles.active=dev.
>
> **[2:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=133)** And we will Apply.
>
> **[2:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=136)** So now, let's go ahead and run our Dev profile.
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=143)** You'll see that we are getting the time output in 12-hour format.
>
> **[2:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=150)** Go ahead and stop that.
>
> **[2:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=151)** And now I'm going to run that Prod configuration.
>
> **[2:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=155)** And now we're getting it in 24-hour format, simply by passing in that profile behavior.
>
> **[2:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=164)** Now, I did use a little bit of Spring Expression Language with the !dev, we'll talk a little bit more about that later.
>
> **[2:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=171)** But it's important to note that you can do this in a single configuration file, like we've done here.
>
> **[2:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=179)** You can actually set a profile for an entire configuration file.
>
> **[3:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=184)** So you could build a configuration file for each of your environment profiles that you want to apply.
>
> **[3:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=191)** Again, I use this a lot of times when mocking behavior for QA environments or when mocking things in tests, it gives you a nice way you can set your profile.
>
> **[3:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=203)** Metrics are another good use of this where you don't want to admit metrics to your expensive metrics collection system when you're running things locally, but you need it to work in your environments.
>
> **[3:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles?u=76281980&t=215)** Again, the ideas are vast, but this is how you deal with profiles in a Spring application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), public (1), this. (1)
> **File Paths:** application.config (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Spring Expression Language
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=0)** - [Instructor] Sometimes declaring multiple beans to express profiles isn't ideal.
>
> **[0:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=5)** In addition, sometimes you want to load different files from the class path based on some value or environment variable.
>
> **[0:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=13)** Enter into the picture Spring Expression Language.
>
> **[0:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=17)** SpEL gives you the ability to use expressions in your configuration.
>
> **[0:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=22)** We've already done this, but I want to get a little bit more deep into it.
>
> **[0:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=26)** So let's take a look at a simple case in action.
>
> **[0:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=31)** Let's go back to our ApplicationConfig class, and let's actually remove our profile statements and our entire 12 TimeService.
>
> **[0:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=48)** We'll create an @Value, and we're going to do a little bit more complex behavior here.
>
> **[0:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=54)** So what we're going to do, we're going to start with a double quote.
>
> **[0:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=57)** We're going to do a pound statement.
>
> **[0:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=59)** Now, the pound says, "Go look at the Spring Expression Language and run it."
>
> **[1:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=66)** And we're going to do it by creating a new Boolean.
>
> **[1:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=70)** And the boolean is going to be environment{'spring.profiles.active'},
>
> **[1:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=90)** does not equal 'dev'.
>
> **[1:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=100)** And then we need to close this out.
>
> **[1:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=105)** We will do a private boolean is24, and now we need to actually use this.
>
> **[1:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=114)** So we will simply pass in is24 to our TimeService.
>
> **[2:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=122)** And remove our unused import.
>
> **[2:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=125)** We will run Prod once again.
>
> **[2:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=130)** You'll see that we have time in a 24-hour format.
>
> **[2:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=136)** And we will run Dev.
>
> **[2:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=140)** And we have it in a 12-hour format.
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=143)** So, while we achieve the same thing, we remove the profile from the actual bean definition.
>
> **[2:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=151)** So now we are back to one bean of type TimeService, no matter what.
>
> **[2:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=156)** And we've used a much more complicated way to get that we are in dev or not, but we did this to show you what you can do with Spring Expression Language.
>
> **[2:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=167)** The sky is the limit here with what you can do as far as the configuration and the way that you can manipulate it to set a value.
>
> **[2:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=176)** Of course, it doesn't have to be a boolean, you could get a string, you could get a number.
>
> **[3:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language?u=76281980&t=180)** Anything you can do in Java, you can do in Spring Expression Language, for the most part, and it gives you just another layer of flexibility when configuring your application context.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), class, (1), private (1), this. (1)
> **Cross-References:** go back to (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Bean scopes
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=0)** - [Instructor] There is a concept in Spring of bean scopes that is very important to understand.
>
> **[0:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=5)** While they aren't used that often in normal practice, it is important to understand them so that you can use them when needed.
>
> **[0:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=14)** The most common bean scope is a singleton scope.
>
> **[0:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=18)** The singleton is the default scope of all beings defined for the application context.
>
> **[0:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=24)** If you do not specify a scope, you get a singleton.
>
> **[0:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=28)** You get one instance of the object per context definition.
>
> **[0:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=33)** Now, you can declare two beans of the same type in a context, but you have to do some work to get them injected properly, and most often this becomes very cumbersome and isn't recommended.
>
> **[0:46](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=46)** One thing to be aware of, as we previously mentioned, you need to be careful with state.
>
> **[0:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=52)** Because you have one and only one instance of the class, all state essentially becomes static on that class.
>
> **[1:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=62)** I have run into issues with this very thing more than once, especially early in my Spring career.
>
> **[1:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=69)** Keep in mind how state impacts behavior of methods as some other thread may change your data.
>
> **[1:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=77)** Now, I mentioned that you have to treat it like it's static.
>
> **[1:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=80)** It is not static but its behavior is such that it behaves the same way, and I want to make that very clear.
>
> **[1:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=89)** A prototype scope is the next one that we're going to discuss.
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=93)** A prototype bean is one that you get a new instance every time it is referenced.
>
> **[1:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=99)** This means that once the instance is no longer needed or referenced, it becomes available for garbage collection.
>
> **[1:46](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=106)** A definition of the prototype or it's metadata is stored in the IoC container.
>
> **[1:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=112)** When an instance is needed, it is created based on the definition within the IoC and Spring hands the instance over and then releases the handle.
>
> **[2:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=123)** A prototype bean is never stored as an instantiated object in the IoC container itself.
>
> **[2:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=131)** These bean types can be very useful for transient data or interface types that can flex based on application state, which is how I have used them exclusively.
>
> **[2:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=144)** Session beans are very similar to prototype bean.
>
> **[2:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=147)** They apply to web environments only, as you might guess by the name.
>
> **[2:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=153)** You get one instance of the bean per user session.
>
> **[2:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=157)** This allows you to keep session data separate from other sessions when needed.
>
> **[2:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=163)** Like a prototype bean, the definition is stored in the IoC container, but the instance itself is never stored.
>
> **[2:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=172)** The final scope that we will talk about is request-scoped beans, which are very similar to session- and prototype-scoped beans.
>
> **[3:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=181)** Once again, these only apply to web environments.
>
> **[3:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=184)** Again, you might guess that from the name.
>
> **[3:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=187)** You get one instance of the bean per request into the application.
>
> **[3:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes?u=76281980&t=194)** The definition is stored in the IoC container, but again, the instance is not and will be available for garbage collection once the request is done.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3), class, (1), class. (1), interface (1)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** be aware (1), be careful (1), keep in mind (1)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Proxies
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=0)** - [Instructor] The final topic in this chapter that we need to discuss is proxies.
>
> **[0:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=4)** Proxies are essentially aspected behavior that is applied to your classes by the framework under various conditions.
>
> **[0:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=14)** In Spring, everything is a proxy, and this comes with some considerations.
>
> **[0:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=21)** This behavior was added in Spring 4.0.
>
> **[0:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=24)** All of your classes that are managed by the IOC get wrapped with at least one proxy.
>
> **[0:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=32)** Proxies are used to add behavior to your class.
>
> **[0:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=36)** Many of the proxies have specific purposes that enable you to write cleaner code.
>
> **[0:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=43)** Spring uses both JDK and CGLib proxies in its operation.
>
> **[0:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=51)** I mentioned a moment ago that there are some considerations when using proxies.
>
> **[0:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=56)** First and foremost, and one that will cause a defect at least once for you if you don't remember this, is that proxies can only apply their behavior when the call goes through the proxy.
>
> **[1:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=71)** Private methods don't get exposed via the proxy, so they cannot have behavior added to them.
>
> **[1:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=78)** In fact, for the same reason, internal calls don't have proxy behavior.
>
> **[1:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=84)** This lack of behavior, as mentioned, can be a source of bugs.
>
> **[1:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=88)** One way that I have experienced this was in transactional rollbacks.
>
> **[1:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=93)** When I've written some JDBC template code using transactions, internal calls burnt me because the rollback on exception wasn't handled because it wasn't part of the proxy, yet the transactional behavior was within the proxy.
>
> **[1:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies?u=76281980&t=110)** So keep this in mind if you are making calls from a method in a class to another method in a class that you have to be very careful that the proxy behavior you expect most likely isn't going to be there.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (1), this, (1), private (1)
> **Env Vars:** ioc (1), jdk (1), jdbc (1)
> **Versions:** 4.0 (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Component Scanning

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The component scan
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=0)** - [Instructor] If you've ever used Spring Boot, the auto configuration is partially achieved through component scanning mixed with conditional configurations.
>
> **[0:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=8)** In fact, for many classes, external configuration isn't needed as component scanning can solve the configuration for you.
>
> **[0:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=17)** The root annotation that is used for component scanning is @component.
>
> **[0:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=22)** This annotation indicates that the class should be loaded into the bean factory, and configured using annotations, and inspections of the class itself.
>
> **[0:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=33)** Component is the root annotation, but there are several stereotypes of this annotation that can be used as well.
>
> **[0:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=39)** Often you will want to use these stereotypes like @service, so you can write your own aspects to add behavior to your classes based on the type.
>
> **[0:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=48)** We'll go through an example of that later on.
>
> **[0:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=51)** Component scanning scans a base package, and that packages sub packages, and loads configuration automatically for each bean it finds.
>
> **[1:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=61)** It uses other annotations to direct the IOC container to build the dependency graph.
>
> **[1:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=68)** Dependency Injection is achieved as mentioned through component scanning.
>
> **[1:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=73)** It is achieved mainly through the annotation, autowired.
>
> **[1:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=77)** This instructs the IOC container to inject a beam into the needed value at that point.
>
> **[1:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=83)** The Spring designers are very specific about how you should use autowiring.
>
> **[1:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=89)** While you can put it on a class attribute, you should only set it on methods.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=95)** If a dependency is required, it should be set on the constructor.
>
> **[1:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=99)** If the dependency isn't, it should be on a setter, but never on the attribute, even though it's allowed.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=107)** Attribute settings should only be used for tests.
>
> **[1:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=111)** If you have more than one being of the same type, you can use the qualifier annotation to inject a specific version by name, but I will urge some caution here.
>
> **[2:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=122)** This can be very difficult to manage in your application, and you'll often find it isn't worth the effort.
>
> **[2:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=128)** Instead, you should look at a factory, inject the factory, and let it make the decision on which implementation to provide.
>
> **[2:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=137)** If you have properties or constants that need to be injected, you can use the add value annotation to instruct the IOC container to put a value into a variable for use elsewhere, and we've already done that through our examples to date.
>
> **[2:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=153)** To start the component scanning engine, you need to prime the pump, so to speak.
>
> **[2:38](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=158)** You will need some form of Java or XML configuration to start component scanning on your own.
>
> **[2:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=165)** If you are using Spring Boot, you are getting auto configuration through this method by a special annotation.
>
> **[2:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=172)** The base package is defined in this configuration.
>
> **[2:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan?u=76281980&t=177)** Scanning occurs during startup, and we will go through that lifecycle in the next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** ioc (3), xml (1)
> **Code Keywords:** type. (1), type, (1), let (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** in the next (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Implementing component scanning
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=0)** - [Instructor] So now that we've spent some initial time learning about component scanning, let's put it into practice in our application, and replace our Java config with component scanning.
>
> **[0:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=11)** All right, the first thing that I want you to do is open up source main Java, the service package, and let's start with the greeting service class.
>
> **[0:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=20)** In here, we will start by annotating this with at service, which is a stereotype of at component.
>
> **[0:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=27)** And now, on our string greeting, we are going to inject a value here.
>
> **[0:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=33)** And the value, as you might guess, is going to come from our configuration property.
>
> **[0:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=41)** So we're going to go to app dot greeting, and now we can remove from the constructor, the greeting.
>
> **[0:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=54)** Now we're going to go ahead and remove the final here, and then we will remove the setter in the constructor.
>
> **[1:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=64)** And we are now done with that class.
>
> **[1:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=67)** So now, let's go to the output service class, and we're going to do a very similar thing.
>
> **[1:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=73)** We're going to go to our name, and we are going to set an at value on it.
>
> **[1:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=79)** We will do dollar sign, curly brace, app dot name.
>
> **[1:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=84)** We will once again add "at service" to our output service.
>
> **[1:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=91)** We will remove the name from our constructor, and we will remove the final.
>
> **[1:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=103)** Now you'll notice that I'm not auto wiring my constructor.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=107)** We used to have to do that, but we don't have to anymore with Spring.
>
> **[1:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=110)** If there is one and only one constructor, it will use it.
>
> **[1:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=114)** Now if you have multiple constructors, you do need to tell the framework which one to use, but this is not the case for us.
>
> **[2:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=121)** So we are good without auto wiring our constructor.
>
> **[2:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=125)** So now let's go to the time service class, and once again, we will do an at service annotation on it.
>
> **[2:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=132)** We will set our Boolean with an at value, and the at value here will be very much the same that we did before.
>
> **[2:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=142)** So we will do pound curly brace, new Boolean, open parentheses, environment, bracket, single tick, spring dot profiles, active, close our bracket, does not equal single tick dev, end our parentheses, and end our bracket.
>
> **[3:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=181)** Now we remove from our constructor, our Boolean, and we will simply replace this with super, which though it is not necessary, I like to use super because I am a little bit old school.
>
> **[3:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=196)** Feel free to delete that if you don't want to.
>
> **[3:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=199)** So with that, we have our classes now set up.
>
> **[3:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=202)** So let's go to our app config.
>
> **[3:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=205)** So the first thing that we need to do here is, we need to do at component scan, and we need to set our base package, and we will set it equal to com dot Frank Moley, dot LIL, dot FID, which is our current package.
>
> **[3:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=223)** Technically, you don't need that because it will scan its own package and anything below it.
>
> **[3:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=228)** I like to go ahead and specify it.
>
> **[3:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=230)** It just makes me feel a little bit better.
>
> **[3:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=232)** And we will simply delete all of our (indistinct).
>
> **[3:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=237)** Go ahead and remove the unused imports.
>
> **[4:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=245)** Now I need to do is run our application.
>
> **[4:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning?u=76281980&t=248)** So we'll go ahead and run Prod, and you will see that everything is working as we would expect, and it's doing so because even though we've removed the manual configuration with Java config, component scanning has taken over, has grabbed all of our service classes, all of our values, injected the values into those service classes, and dropped all of that into the IOC container for the application to use.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), class. (2), class, (2), super (2), delete (2)
> **UI Navigation:** go to (5)
> **Env Vars:** lil (1), fid (1), ioc (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Lifecycle methods
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=0)** - [Instructor] Sometimes you have behavior that you need to perform within a class that requires the dependency injection to be completed, but this behavior needs to be done before the application is ready to use or right before it's destroyed.
>
> **[0:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=15)** Enter into the picture lifecycle methods/ While Spring is starting up, and the next chapter is going to be entirely focused on this behavior, the system is actually not usable, and at the same time occurring during shutdown.
>
> **[0:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=32)** Spring proxies are not always available during object instantiation or destruction.
>
> **[0:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=37)** In fact, usually they're not available at all.
>
> **[0:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=40)** This means that not everything is available during the construction of an application that you may need to use behavior wise, and it's important to know this.
>
> **[0:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=51)** This will also apply during the destruction phase as you have no control over the order of garbage collection, and you need a way to do some work before spring goes out of scope.
>
> **[1:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=62)** One thing to note is that these lifecycle methods utilize JSR-250 annotations, and are not Spring specific.
>
> **[1:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=72)** Post-construction, as the name implies, is a method that should be executed after construction of the object.
>
> **[1:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=79)** Again in the Spring world this allows us to construct the object as part of the IOC lifecycle, but then do some work using Spring, and all of the proxies that come with it.
>
> **[1:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=92)** The annotation on this method is at post construct.
>
> **[1:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=96)** It takes no parameters as the framework itself runs this method.
>
> **[1:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=101)** One use that I have had for this is warming in memory caches of data.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=107)** I used to work on a system that needed to make a web service call as well as a database call to store some data in memory.
>
> **[1:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=114)** This was a perfect use case because both of these constructs leveraged Spring abstractions and I couldn't do them in the actual constructor because spring wasn't available.
>
> **[2:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=127)** This method is technically called after all property setting is completed.
>
> **[2:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=132)** We will talk about this more in the lifecycle chapter, but it is important to know that you can also use your optional dependencies for your class in these post construct methods.
>
> **[2:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=147)** Now, I'm including a very simple code snippet here for you to view because we're not actually going to build a post-construct, but this is an important enough topic that you need to know how to do it, and it's very simple.
>
> **[2:38](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=158)** Annotate with that post-construct.
>
> **[2:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=160)** It's a public void method, we usually use init by convention, and then any initialization work that you need to do after the object is constructed, and when spring is almost completely done.
>
> **[2:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=173)** In fact, you can use all of the Spring constructs that you want to in this init method, but it's the application is into the use phase, and that's the most important part here.
>
> **[3:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=184)** Now pre-destroy, as the name implies, is the method that is executed before the class itself is marked for garbage collection.
>
> **[3:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=193)** The annotation is at pre-destroy.
>
> **[3:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=195)** This is very useful when you need to capture some state before the application closes in a backing database among other use cases.
>
> **[3:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=205)** Again, it is a method that takes no parameters.
>
> **[3:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=209)** This is executed when the application context itself closes again before garbage collection takes place.
>
> **[3:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=217)** In fact, Spring still has a handle to everything in the IOC, and technically Spring is still running when this method is executed, but it's part of the close operation of the application context.
>
> **[3:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=231)** Now, once again, I provided a quick code snippet because we're not going to be implementing it in this course, but it is important that you've seen it.
>
> **[3:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=239)** So it's at pre-destroy.
>
> **[4:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=241)** We do public void destroy by convention, and then we do any of the work.
>
> **[4:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=246)** Again, we have full access to Spring, and all of the proxies in this pre-destroy method, we just don't get to call it when we want.
>
> **[4:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods?u=76281980&t=255)** It is called by application context close in that process.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1), is an  (1), is called (1)
> **Code Keywords:** public (2), this. (1)
> **Env Vars:** ioc (2), jsr (1)
> **CLI Commands:** make (1)
> **Cross-References:** next chapter (1)
> **Analogies:** picture (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### 4. The Bean Lifecycle

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why the lifecycle is so important
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=0)** - [Instructor] The lifecycle of the Spring application explains the various states your application goes through while being managed by the Spring framework.
>
> **[0:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=9)** It is critical for Spring developers to fully understand this lifecycle.
>
> **[0:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=15)** So let's talk about why the knowledge of the framework is so critical for a highly effective Spring developer.
>
> **[0:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=22)** Knowledge of the lifecycle increases overall knowledge of Spring.
>
> **[0:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=27)** As you learn how the parts fit together in the lifecycle, you will gain understanding in how to use the framework in the way the designers intended it to be used.
>
> **[0:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=40)** It also improves extensibility of the framework itself.
>
> **[0:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=45)** You will learn how to write custom processors that interact with Beans or the BeanFactory at appropriate times in the lifecycle to add behavior to your application or individual classes.
>
> **[0:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=59)** It can also aid in troubleshooting by providing a baseline for debugging application issues.
>
> **[1:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=65)** Because everything in Spring is a proxy, debugging stepwise can be very challenging.
>
> **[1:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=73)** However, knowledge of the lifecycle can help you better determine where to break your code and where to investigate for issues.
>
> **[1:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=84)** Another aspect of learning about the details of the framework like Spring is it enhances your professional development, something all developers should reach for.
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=94)** As engineers, we don't spend enough time understanding the details of our craft as a whole in my opinion.
>
> **[1:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=102)** Learning is the key to that, hence, why you are here.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=107)** This level of understanding of any framework, especially Spring, provides deeper knowledge of the tools we use, which of course, makes us more capable when using these tools.
>
> **[2:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=120)** It also allows us to have more educated discussions with our peers about the tools.
>
> **[2:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=126)** It can also allow us to have discussions that can be fruitful with the entire community, not just the peers at our company.
>
> **[2:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=136)** Finally, it can help us make better architectural decisions.
>
> **[2:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=141)** I have used my knowledge of Spring and proxies to design toolkits that allowed us to inject desired behavior, like encryption, audit logging, and various other crosscutting concerns, on applications I have been involved with because I understood the lifecycle.
>
> **[2:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=161)** Spring is open-source software.
>
> **[2:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=163)** And as such, it needs a community.
>
> **[2:46](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=166)** Knowledge of the framework allows for much better interactions with the community.
>
> **[2:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=172)** This can come from simple tasks, like filing more detailed bug reports.
>
> **[2:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=177)** It can also come into play with detailed discussions around best practices, speaking at conferences, and other educational discussions.
>
> **[3:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=186)** This knowledge can also help you be an open-source developer and contribute to the framework.
>
> **[3:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=193)** Spring, as most open-source software projects, is driven by the community.
>
> **[3:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=199)** There is usually a corporate backer on big frameworks like Spring, but that doesn't mean that they ignore their roots.
>
> **[3:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=207)** Contributing in open-source is your way of helping the next generation, as well as the current generation, of developers.
>
> **[3:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important?u=76281980&t=215)** Knowledge of the lifecycle and the framework as a whole can make this a shorter journey from problem to solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), for. (1), finally, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The overall picture
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=0)** - [Instructor] So let's dig into the lifecycle as a whole by starting with an overview.
>
> **[0:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=5)** There are three primary phases of the lifecycle, and we are going to spend most of the time talking about the first.
>
> **[0:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=12)** The initialization phase is the most complex, and quite frankly, the most interesting of the lifecycle.
>
> **[0:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=20)** While in reality, it is one of the shortest phases in chronological time of the three, it is really where we can impact the behavior of our application the most.
>
> **[0:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=32)** The next phase is the use phase.
>
> **[0:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=34)** The largest majority of time is actually spent in this phase, but most of the interaction with the Spring framework here is behind the scenes.
>
> **[0:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=44)** You may be using abstractions from Spring, but during the use phase, most of the work by the framework is through proxies applied during the initialization phase.
>
> **[0:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=55)** The final phase is the destruction phase, which occurs when the application context starts to close or when its close method is triggered.
>
> **[1:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=66)** As we begin to dig into the initialization phase, let's give a high level overview.
>
> **[1:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=72)** The initialization phase begins when the application context itself is created.
>
> **[1:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=77)** This can be done as in our example manually, or via a runtime like an application server.
>
> **[1:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=85)** It is further broken down into two parts.
>
> **[1:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=88)** The setup of the bean factory via its initialization is the first part.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=95)** The second is the bean initialization and instantiation phase where your bean objects are actually created and ultimately managed by the framework.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture?u=76281980&t=107)** This is a high level overview of the initialization phase, and we will talk about each individual stage as we go through the rest of this chapter.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (7), setup (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The init phase: Loading bean definitions
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=0)** - [Instructor] The first step of initialization is the loading of bean definitions.
>
> **[0:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=5)** In our original overview, this is where we are at in the initialization phase.
>
> **[0:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=13)** There are several sources of our bean definitions.
>
> **[0:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=16)** While we're talking about the lifecycle from a traditional flow, there is some slight variance here on how each of these gets loaded.
>
> **[0:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=26)** JavaConfig is the first that we will talk about.
>
> **[0:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=28)** This is the most different of the loading of bean definitions because the objects are constructed as part of reading the definitions, so keep that in mind as we go through the rest of this chapter.
>
> **[0:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=40)** This configuration strategy impacts how many of these beans can be initialized.
>
> **[0:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=47)** XML configuration is still valid for configuring the application context.
>
> **[0:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=52)** Though it isn't preferred anymore, it is still being used in many applications.
>
> **[0:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=59)** The XML file or files are read to prime the bean definitions.
>
> **[1:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=64)** The final way we will talk about, and we've already seen, is component scanning and ultimately auto-configuration is driven by Spring Boot.
>
> **[1:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=74)** This works very much the same way as XML config, except that there is not an XML definition.
>
> **[1:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=80)** Instead, you're relying on the components and the annotation of them to be loaded into the BeanFactory instead of defining them in an XML document or doing the actual object construction in JavaConfig.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=95)** So let's talk about how we prime the factory.
>
> **[1:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=99)** The bean definitions are loaded into the BeanFactory from all sources.
>
> **[1:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=103)** In fact, a given application can have all three sources as the source of the BeanFactory definitions.
>
> **[1:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=111)** ID is used to create the index for the factory, not name.
>
> **[1:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=117)** That is really, really important to remember, that ID is what you use.
>
> **[2:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=121)** Even though you can reference them by things like class from the BeanFactory, the ID is the most important aspect when looking at how they get indexed.
>
> **[2:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=132)** The BeanFactory only contains references at this point, and that's another important thing to remember.
>
> **[2:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=140)** At this point, we have nothing more than references.
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=143)** We don't actually have objects, so the BeanFactory, we know all of the classes, but we haven't created anything.
>
> **[2:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=151)** We just have those references.
>
> **[2:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=156)** Now, this phase is complete when the following conditions are met.
>
> **[2:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=161)** All beans have been loaded into the BeanFactory.
>
> **[2:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=164)** Again, references, but they've all been loaded into the BeanFactory.
>
> **[2:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=170)** Beans are just metadata.
>
> **[2:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=172)** I can't say this enough because it is very important to remember.
>
> **[2:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=176)** If you're debugging a problem at this point in time, there are no objects.
>
> **[3:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=181)** There are only references and the metadata associated with them that makes up the definition of the bean in the BeanFactory, and no object instantiation of your code has occurred at this point yet.
>
> **[3:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=196)** You can't use anything.
>
> **[3:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=197)** Nothing's been created and we definitely aren't at the point where Spring is ready to let your application run.
>
> **[3:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions?u=76281980&t=204)** That is the initial part of the phase around the BeanFactory.

> [!info]- Semantic Content
>
> **Env Vars:** xml (5)
> **Code Keywords:** let (2)
> **Prerequisites:** initialization (2)
> **Speakers:** - [instructor] (1)

#### Init: Bean factory post-processing
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=0)** - [Instructor] We're now going to take a look at the final step of loading of the bean definitions into the factory, and this is the post-processing of bean definitions.
>
> **[0:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=10)** So here's where we're at in the overall view.
>
> **[0:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=13)** Again, we have all of the bean definitions loaded, and now we are in the post-process step.
>
> **[0:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=19)** So BeanFactory post-processors.
>
> **[0:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=22)** The important thing to note here is that anything acting at this phase works on the entire BeanFactory, not individual beans, but on the entire factory itself.
>
> **[0:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=34)** At this point, you can modify or transform any bean in the factory prior to its instantiation.
>
> **[0:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=43)** The most common example that you may encounter, and we've actually already used it through an annotation, is the PropertySourcesPlaceholderConfigurer.
>
> **[0:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=53)** During this portion, we load the properties into the context and then can apply them to the definitions of the beans, because at this point, those objects haven't been created, but we need to have that metadata in order to create the beans in a later step.
>
> **[1:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=72)** So BeanFactoryPostProcessors have a very valid purpose.
>
> **[1:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=77)** This is the first extension point in the lifecycle that you, as a developer, can impact the lifecycle.
>
> **[1:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=86)** This allows you to write custom components to impact the entirety of the BeanFactory if you choose to do so.
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=94)** It's important to note here that this is not a very common place to extend.
>
> **[1:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=99)** You can definitely do it, but usually, the work that most developers do don't need to impact the entire BeanFactory.
>
> **[1:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=108)** So you normally just use them, you don't actually write them.
>
> **[1:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=112)** But nothing says that you can't.
>
> **[1:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=114)** If you have some very specific need, you can definitely write your own BeanFactoryPostProcessor, and it will be executed at this point in time.
>
> **[2:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=123)** But as I said, it's very common to use existing ones, things like registering scope or properties like we've previously seen.
>
> **[2:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=131)** So let's talk a little bit about BeanFactoryPostProcessors if you are using Java config.
>
> **[2:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=137)** If you do this and you want to have your own BeanFactoryPostProcessor, the bean definition itself must be static.
>
> **[2:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=145)** This removes the side effects of dynamic instances.
>
> **[2:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=148)** So let's walk through this a little bit.
>
> **[2:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=150)** You're going to manipulate every bean in the BeanFactory through a bean that must be in the BeanFactory itself.
>
> **[2:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=159)** You can see how you can start to get dynamic instance effects because of this.
>
> **[2:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=165)** Therefore, by making these methods static in your Java config, it puts it into a state where you cannot manipulate the data, because it's existing once in the entire JVM.
>
> **[3:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=180)** Now, when this phase is completed, the BeanFactory is completely loaded, not only loaded, but ready for the next step with all references.
>
> **[3:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=192)** All of the beans in the factory have been completely configured at this point.
>
> **[3:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=199)** All system level work is completed in spring at this point.
>
> **[3:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=204)** Everything downstream becomes individual beams, and the framework itself, which is now up and running, will do all of that work in proper order.
>
> **[3:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=214)** So the BeanFactory itself is loaded.
>
> **[3:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing?u=76281980&t=216)** It's set up in a way that it can now be instantiated each individual component, and spring is ready to now dig in and let its container orchestration start to do its work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), static (2), this. (1)
> **Env Vars:** jvm (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Init: Bean instantiation
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=0)** - [Instructor] So now we're going to start looking at actions that are taken on each individual bean in the factory with the instantiation phase.
>
> **[0:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=10)** This is the high level overview of the initialization phase that we've seen several times now.
>
> **[0:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=15)** And in this case, we're talking about the instantiation of the beans.
>
> **[0:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=19)** We're going to actually go create some stuff now.
>
> **[0:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=22)** And of course, creating things in an object-oriented language means construction.
>
> **[0:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=27)** So beans are instantiated in the factory using their constructors.
>
> **[0:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=33)** Now remember.
>
> **[0:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=34)** When there is only one constructor that can constructors used.
>
> **[0:38](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=38)** When there are multiple ones, Spring has to know which one to use.
>
> **[0:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=42)** So you must have autowired one for Spring to know which constructor to use.
>
> **[0:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=47)** Otherwise, you're going to run into issues.
>
> **[0:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=50)** The important thing to note here is that part of the BeanFactory post-processing is determined the order that construction must occur in order to satisfy the dependencies of each class.
>
> **[1:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=63)** So the order is done correctly without any interaction by you.
>
> **[1:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=67)** Spring simply figures out the graph and determines the order it needs to create them because of course, dependencies must be created before they can be injected into another constructor.
>
> **[1:20](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=80)** The handle to the class instance remains in the BeanFactory for the lifecycle of the application, unless those beans are not singletons.
>
> **[1:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=90)** And if they are not singletons, they actually don't get constructed here unless they need to be used.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=95)** They may simply wait in the factory unconstructed until they become a dependency, but the handle remains in the BeanFactory and will remain there for the entire lifecycle of the application.
>
> **[1:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=110)** Now there is a concept of eager loading versus lazy loading of beans.
>
> **[1:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=116)** By default, all beans are instantiated eagerly.
>
> **[2:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=122)** To truly be lazy, there can be nothing that depends on them.
>
> **[2:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=128)** So if you want a bean to be annotated in a way that it is lazily instantiated, it cannot be a dependency for any other bean.
>
> **[2:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=139)** But even if a bean is specified as lazy, Spring and the ApplicationContext reserves the right to ignore it for any reason.
>
> **[2:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=151)** So you may specify something as lazy, it may not be a dependency, but there is a chance that it will still be created at this portion, even though you've told the framework not to.
>
> **[2:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=164)** So when this phase is complete, a bean pointer is still referenced in the BeanFactory.
>
> **[2:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=170)** That doesn't change.
>
> **[2:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=173)** Every object in the BeanFactory has now been constructed, but none of them are available for use yet by the Spring Framework.
>
> **[3:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation?u=76281980&t=185)** Anything that you did during construction cannot rely on Spring, which is why we talked about those lifecycle methods because none of this, including the framework itself, are available for use by your application at this point in time.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), class. (1), default, (1), this, (1)
> **Definitions:** is a  (2)
> **Cross-References:** we talked about (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Init: Setters
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=0)** - [Instructor] After objects are constructed, we can now call the setters on them, and this is what the Spring framework does next.
>
> **[0:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=8)** So back to our overview of where we are.
>
> **[0:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=11)** We have created the bean factory, we've instantiated all of the beans in that factory, and now when appropriate, we are going to call the setters.
>
> **[0:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=21)** Now this is a post-initialization dependency.
>
> **[0:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=25)** After all the beans have been instantiated, the setters are called when appropriate.
>
> **[0:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=32)** And I say that because if you remember JavaConfig, we don't rely on the setters.
>
> **[0:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=37)** They're actually been configured.
>
> **[0:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=39)** So autowiring occurs at this point for anything that is not constructor-based.
>
> **[0:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=45)** If it is an attribute that you have gone against what the community says to do and autowired it, this is when it will occur.
>
> **[0:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=54)** Again, JavaConfig behaves differently because we don't rely on the setters.
>
> **[0:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=58)** You create the object in the bean definition.
>
> **[1:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=61)** So this phase does not apply for anything handled by JavaConfig.
>
> **[1:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=67)** Now when this phase is complete, the beans have been fully initialized, and all of their dependencies have been injected in either through the constructor or through the setters, or again, in JavaConfig, we kind of merge at the end of this because we're now back to the same point.
>
> **[1:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=84)** All initial dependencies have been injected into every bean.
>
> **[1:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=89)** However, the beans are still not ready for use because at this point, Spring is not done.
>
> **[1:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=97)** We still have a little bit more work to do, but again, it's important to know at this point, though this phase is different, everything converges at this point.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters?u=76281980&t=107)** And from here on out, all of it behaves the same.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Init: Bean post-processing
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=0)** - [Instructor] In the IoC, we have fully baked objects that are almost ready for use.
>
> **[0:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=5)** We now enter the bean post-processing section of the lifecycle, which is three distinct steps, but we're going to discuss them as one because they act in the same way.
>
> **[0:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=17)** So once again, back to our map, we have built a bean factory.
>
> **[0:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=21)** We've instantiated the beans.
>
> **[0:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=23)** If we are not in JavaConfig, we've called the setters.
>
> **[0:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=26)** At this point, no matter the config type, everything is the same.
>
> **[0:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=29)** We are now going to run our bean post-processors.
>
> **[0:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=34)** So what is bean post-processing?
>
> **[0:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=37)** This is the final point of configuration manipulation that can be done in a Spring-based application.
>
> **[0:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=45)** Each bean may have additional behaviors added at this point.
>
> **[0:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=50)** Now, there are two types of extensible and generic processing that we can apply here.
>
> **[0:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=56)** We have the before and the after of the initializer.
>
> **[1:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=62)** So let's first talk about the initializer, which is the middle of these three steps.
>
> **[1:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=69)** Again, the initializer is the second BeanPostProcessor action.
>
> **[1:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=74)** This is a very special case and we don't actually interact in this case on paper.
>
> **[1:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=81)** This is where all of the PostConstruct methods that we talked about before get called, which should tell you that at this point, Spring is actually ready to be used.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=95)** The framework provides many of these, even though you may not need them, but because the framework provides them, you get them.
>
> **[1:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=104)** But any PostConstruct method that you create will be called during this step.
>
> **[1:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=111)** Now, there is a BeanPostProcessor interface that we use to interact with the other two steps.
>
> **[1:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=118)** This allows you to inject common behavior to a class of beings or to an individual bean.
>
> **[2:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=126)** It still operates at the individual bean level, but because you can apply it to a class, it will do them in order.
>
> **[2:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=135)** There are two types, as you might imagine, because there are two other steps here, there is the before and the after.
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=143)** And those reference those PostConstruct methods, as well as the other things that happen during the initialization.
>
> **[2:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=150)** The framework leverages lots of these.
>
> **[2:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=152)** In fact, one of them is how proxies get added to all of our beans before the initializer.
>
> **[2:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=161)** Now when this phase is complete, the beans have been instantiated and initialized.
>
> **[2:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=170)** The dependencies have all been created and injected as appropriate.
>
> **[2:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing?u=76281980&t=175)** The beans are finally ready for use, which means your application at the end of this phase will enter into the use phase, and we'll talk about that.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (1), let (1), interface (1), class, (1)
> **Definitions:** is a  (2)
> **Cross-References:** we talked about (1)
> **Analogies:** imagine (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Init: Differences based on configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=0)** - [Instructor] I've alluded to the fact earlier that there are some differences in the initialization phase based on the configuration types, and I want to spend a little bit more time talking about them because I believe that they are extremely important for you to understand.
>
> **[0:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=14)** What we're specifically talking about in our overview is the instantiate bean and the setters being called.
>
> **[0:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=22)** So, as we've talked about almost ad nauseum, Java Config has one of the biggest differences.
>
> **[0:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=28)** The initialization and setters are merged because they call the method annotated with @Bean.
>
> **[0:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=36)** These @Bean annotation methods are executed in proper order, but they are executed as you write them in code.
>
> **[0:46](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=46)** Therefore, there is no need to call a setter or anything like that.
>
> **[0:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=51)** Now, let's talk about some of the ways that auto-configuration is just a touch different.
>
> **[0:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=56)** The instantiation of all of the beans occurs as normal, and it's all of the beans that were scanned based on @Component or any of its stereotypes.
>
> **[1:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=69)** Autowired constructors, when you have more than one, are the ones that we use.
>
> **[1:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=74)** When you only have one, that is the one that will be used, which makes sense because you can't construct an object in Java without the constructor.
>
> **[1:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=85)** Now, during setter injection, autowired setters, as well as the fields that you shouldn't be using but are available for use, they happen during this part of the lifecycle when the setters are called.
>
> **[1:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=100)** Now, XML configuration works very much the same way, but it is a little bit different because of the naming.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=107)** So, instantiation of all beans and constructor arg injection happens during the instantiation phase.
>
> **[1:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=115)** And that makes sense because, again, you cannot construct an object in Java without its constructor.
>
> **[2:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=121)** So those constructor args that you put in your XML are driven at this point.
>
> **[2:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=127)** What makes sense if you think about it, but it's just a little bit different terminology, is the setters being called are actually driven by the property injection.
>
> **[2:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=138)** So in XML, we call them properties, but really they are just setters being called.
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=143)** So that happens during that phase of the lifecycle when the setter injection occurs.
>
> **[2:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=148)** So, again, none of this should be new at this point, but this terminology is just a little bit different and it's worth at least repeating to make sure that you fully understand the differences.
>
> **[2:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration?u=76281980&t=159)** Because if you work with Spring long enough, you will deal with all of these types of configuration.

> [!info]- Semantic Content
>
> **Env Vars:** xml (3)
> **Prerequisites:** initialization (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The use phase
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=0)** - [Instructor] Once all of the beans are initialized, configured, and instantiated, we enter the use phase of the lifecycle.
>
> **[0:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=8)** The use phase is a rather mundane part of our application from a Spring perspective, but it's the most intensive from your application code perspective.
>
> **[0:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=17)** Most of the time is actually spent in this phase of a running application, unless of course it's crashing all the time, but we're talking about normal operations.
>
> **[0:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=28)** The ApplicationContext via the bean factory serves proxies to the original classes into all of its injected classes.
>
> **[0:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=37)** This happens during the initialization lifecycle, but this is the operations that occur during the use phase.
>
> **[0:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=43)** Those proxies are actually what we're interacting with, ultimately getting to the underlying class through there.
>
> **[0:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=50)** The application context or the underlying bean factory specifically maintains a handle to each bean when we are in the case of a singleton.
>
> **[0:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=59)** We've talked about prototypes and how those are a little bit different, but for most beans, they are singletons, and the application context maintains that handle, and you can reference them from the application context if you want to.
>
> **[1:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=73)** Which brings us to context-aware beans.
>
> **[1:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=77)** Context-aware beans is a mechanism, it's an interface that Spring provides to give you a handle to the application context.
>
> **[1:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=86)** Now in our example, we created an instance of the application context in our main method.
>
> **[1:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=92)** That is not necessarily what we're talking about here.
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=94)** What we're talking about here is an actual interface that allows us to interact with the application context from within a class that is managed by the application context itself.
>
> **[1:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=108)** This handle allows us to reference beans in the application context and any point in time if we need to do so.
>
> **[1:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=117)** Now of course, we could just have them injected as part of the initialization routine, but there are times in specific circumstances where you need to actually go grab something out of the application context, and you can do that through this context-aware bean.
>
> **[2:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=132)** Again, this is not a very common interface to use with a few exceptions.
>
> **[2:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=138)** When you're in those exception cases, it is very nice to know that you have access to the application context if you need it.
>
> **[2:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=146)** Again, remember, usually in object-oriented languages, the parent knows about the child but not the other way around.
>
> **[2:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=152)** This is very much that situation for the most part, but when you have this interface that you implement, you actually can get access to the parent from a child, and that's sort of a unique case.
>
> **[2:43](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase?u=76281980&t=163)** Again, it's not very common, but keep this in your tool belt because there may be a time that you need to do this, especially with administration type processes where you may need to access some method of a bean based on some condition that is outside the normal flow of your application.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), case. (1), this, (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** initialization (2)
> **Speakers:** - [instructor] (1)

#### The destruction phase
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=0)** - [Instructor] When your application begins to shut down, hopefully on purpose, you enter the destruction phase of the lifecycle.
>
> **[0:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=8)** Now, the destruction phase is only at the end of the lifecycle, but it is an important aspect when dealing with applications, especially those targeting cloud native deployments.
>
> **[0:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=21)** It begins when close is called on an application context.
>
> **[0:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=26)** The application context interface provides a close method that must be implemented with every implementation of that interface.
>
> **[0:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=36)** At this point, any bean managed by the IOC that has a pre-destroy annotated method will have that method executed when close is called on the application context.
>
> **[0:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=52)** The beans themselves are not destroyed.
>
> **[0:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=55)** They can't be.
>
> **[0:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=56)** This is an object oriented language with a garbage collection, so you don't actually destroy anything.
>
> **[1:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=62)** Spring simply allows them to be garbage collected.
>
> **[1:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=65)** But before that, before it gets to that point, those pre-destroy methods will be called.
>
> **[1:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=72)** So spring is technically still running at this point, which means you have every access to all of the proxies, all of the interfaces that spring provides you.
>
> **[1:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=81)** The beans themselves have not been destroyed when close is called, and they're actually still managed by Spring.
>
> **[1:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=88)** Now, there are a few caveats here.
>
> **[1:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=91)** A context cannot be reused again.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=95)** Once you call close, that is a final operation from the perspective of the context.
>
> **[1:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=101)** Yes, you could reinitialize a context from the same criteria, but it is a new instance of the application context of the bean factory, so you can never reuse them.
>
> **[1:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=113)** Close is the end-state.
>
> **[1:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=115)** That is it.
>
> **[1:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=116)** Prototype beans are never impacted by an application context close because when a prototype or a session or a request bean is served to the application, Spring actually releases the handle at that point.
>
> **[2:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=133)** Remember those beans, we only keep the metadata in the IOC.
>
> **[2:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=138)** We create them as we need them, and at that point, Spring releases them so they will be garbage collected like every other object that you create outside of Spring itself.
>
> **[2:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=150)** And as I alluded to, only garbage collection can destroy a bean instance.
>
> **[2:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=157)** I know it sounds trivial to say, but many times people don't really understand how garbage collection comes into play.
>
> **[2:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=164)** So application context closed, does not destroy them.
>
> **[2:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=168)** It only marks them to be able to be destroyed, which is why it's really important that when you have state to manage on a closing of an application context, you do that in a pre-destroyed method.
>
> **[3:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase?u=76281980&t=182)** That way you are guaranteed, assuming you're not in a crash situation, that those methods will be called, and set your state in the underlying data store before those classes are marked for garbage collection.

> [!info]- Semantic Content
>
> **Definitions:** is called (3), is an  (2), is a  (2)
> **Code Keywords:** interface (2)
> **Env Vars:** ioc (2)
> **Speakers:** - [instructor] (1)


### 5. Aspect-Oriented Programming

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Aspecting in Spring
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=0)** - [Instructor] One of the coolest features with Spring, at least in my opinion, is how easy it is to leverage aspecting to add global behavior to your application.
>
> **[0:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=11)** So what are aspects?
>
> **[0:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=13)** Aspects are nothing more than reusable blocks of code that are injected into your application, usually at runtime.
>
> **[0:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=21)** And with Spring, that is how it is done.
>
> **[0:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=24)** These blocks of code are injected, they're not written into your code.
>
> **[0:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=28)** You inject them in from another library or another class.
>
> **[0:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=33)** These are powerful tools for adding behavior outside the primary functions within Spring.
>
> **[0:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=40)** It also allows you to do something once and apply it everywhere.
>
> **[0:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=44)** This is called cross-cutting concerns.
>
> **[0:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=47)** And you now can solve them in one place and apply them to all of your applications, not just one.
>
> **[0:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=54)** But you're not doing it through a library, you're doing it through an aspect.
>
> **[0:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=59)** So there are some several common applications of aspecting, and I'm going to talk through a few of those.
>
> **[1:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=65)** One of those, and probably the one I've used most in my professional career is logging, the ability to annotate a method with standard Spring annotations and then target those annotations to perform a logging routine without actually having to write structured logging in your code, but guarantee that you get that custom logging everywhere, is a really powerful application.
>
> **[1:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=90)** Now, transaction management is another application of aspecting.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=95)** Spring actually does this through a proxy, but you can add behavior to it when you're dealing with your transactions.
>
> **[1:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=104)** Caching is another one.
>
> **[1:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=105)** Again, Spring has an annotation where a proxy takes care of this, but there are times where you may want to apply aspects to your caching routines.
>
> **[1:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=116)** And security is a big one, being able to apply specific security behavior through an aspect.
>
> **[2:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=123)** I've actually tied this into my logging aspect.
>
> **[2:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=126)** When the logging aspect tackles PII, I inject a security aspect to then go in and hash sensitive data before it actually gets written to standard out.
>
> **[2:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=137)** So why would we go about the process of doing this when there are other ways?
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=143)** So again, we're going to go back to the logging routine because this one is a really big one.
>
> **[2:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=148)** Let's say every single service method in your application has a structured log requirement from your operations team.
>
> **[2:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=157)** If you had to actually go write that every single time, you're subject to miss, you're subject to bugs, things like that, you're going to have copy and paste problems.
>
> **[2:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=167)** The list goes on and on.
>
> **[2:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=169)** If you simply apply an aspect and target some method signature or some annotation, you get the logging requirements solved in one place.
>
> **[3:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=180)** This eliminates the code duplication that will happen in the previous instance.
>
> **[3:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=185)** If you have this logging routine written once and everybody copies and pastes it, you're going to have duplication in your code, even if it's not a complete copy and paste.
>
> **[3:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=198)** You also start to deal with mixing of concerns.
>
> **[3:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=201)** What is the purpose of your method?
>
> **[3:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=203)** It's to operate some service, not to do a logging routine.
>
> **[3:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=207)** Well, now part of your code within that method has to deal with logging.
>
> **[3:32](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=212)** By applying an aspect, your code is only doing your business logic and the aspect is applying that behavior on your behalf.
>
> **[3:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=222)** It therefore allows you to maintain your application logic and not worry about these other concerns.
>
> **[3:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=230)** So let's talk a little bit about how Spring does aspecting, because it is not exclusive to Spring to use aspect-oriented programming.
>
> **[4:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=240)** In Spring, it leverages AspectJ to do the aspecting.
>
> **[4:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=246)** It is byte code modification, which is runtime interweaving.
>
> **[4:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=251)** Now, this is a very important concept to remember because if you are compiling two native executables, you cannot do runtime interweaving.
>
> **[4:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=262)** It does not work because you have a native execution, not byte code.
>
> **[4:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=267)** So the way that Spring does aspects are contradictory to native compilations.
>
> **[4:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=273)** So if you are using GraalVM, do not use aspects, they won't work.
>
> **[4:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=279)** In Spring, they're based on a dynamic proxy.
>
> **[4:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=284)** And again, you cannot use them with native code for the reasons I just mentioned, because it is runtime interweaving.
>
> **[4:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=293)** Now, there are several parts of a Spring aspect, and we need a little bit of terminology to level set on this before we jump in.
>
> **[5:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=302)** A join point is the spot in the execution of code where crosscutting concerns can be applied.
>
> **[5:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=309)** This is your code that is targeted by an aspect.
>
> **[5:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=313)** A pointcut is the selection criteria used to select the join point to apply that cross-cutting concern.
>
> **[5:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=324)** Advice is the code that is applied to the join point when selected by the pointcut.
>
> **[5:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=331)** It is the code that applies the logic to solve the cross-cutting concern.
>
> **[5:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=337)** And an aspect is the entire package.
>
> **[5:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring?u=76281980&t=340)** So with that, let's jump in to aspect-oriented programming.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class. (1), this, (1)
> **Definitions:** is a  (4), is called (1)
> **Env Vars:** pii (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Define aspect-oriented programming (AOP) pointcuts
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=0)** - [Instructor] Point cuts are the way a method or class is selected for the execution of an aspect, and the selection has a syntax all of its own.
>
> **[0:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=10)** So let's talk a little bit about the pointcut syntax.
>
> **[0:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=14)** There's a designator, and then we start with the return, package, class, method, and then argument.
>
> **[0:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=21)** So, r is our return type, p is the package, c is the class, m is the method, and then we have the arg or arguments that we use.
>
> **[0:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=34)** So when we are writing a point cut, we actually specify one or more of these using things like stars when they don't matter.
>
> **[0:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=42)** So if we wanted any return type out of any package for any class named fu, and any method on that, we would do something like * * fu * and then have the argument section be whatever it needs to be.
>
> **[0:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=58)** This is how you designate a pointcut.
>
> **[1:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=62)** Now, there are several designators that we use.
>
> **[1:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=66)** The first one is execution, and this is an expression for matching method execution.
>
> **[1:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=72)** Pretty straightforward.
>
> **[1:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=73)** The next is within, so this is an expression for matching within certain types.
>
> **[1:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=81)** Then there is target, which is an expression for matching a specific type.
>
> **[1:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=87)** And then there's my favorite, which is @annotation.
>
> **[1:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=90)** This is an expression for matching a specific annotation.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=95)** So let's jump in and take a look at how this works.
>
> **[1:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=99)** So I want you to go ahead and pull down the exercise files at this point, if you've been following along, because I've actually added a couple of dependencies and a properties file, and I want to walk through those real quick.
>
> **[1:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=111)** So, I added two dependencies: an aspectjweaver, and then a SLF4J instance.
>
> **[1:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=118)** I've also provided some properties for log4J, to be used when we are doing a logging.
>
> **[2:05](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=125)** So, with that said, we're going to start and create a package called aspect.
>
> **[2:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=135)** Within aspect we are going to create a new annotation, and an annotation is an interface but we're going to create an annotation, and we're going to call it Loggable.
>
> **[2:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=146)** So, the syntax, if you don't have the way to create an annotation the way I did is just public @interface Loggable.
>
> **[2:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=154)** Now, to that, we're going to add a couple of annotations, the first one is @Target, and we're going to set the target to be an ElementType of METHOD.
>
> **[2:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=167)** And then we're going to set our @Retention, and we're going to have a retention policy of RUNTIME.
>
> **[2:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=175)** And that's all there is for our annotation.
>
> **[2:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=179)** So now let's create a new class, and we're going to call this LoggingAspect.
>
> **[3:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=186)** Now, because we want Spring to grab it we're going to add onto it @Component, and then we are going to set an @Aspect.
>
> **[3:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=199)** Now, to this class we're going to create a method, and it's going to be a simple void method called executeLogging, it's going to take no parameter.
>
> **[3:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=214)** It actually takes no parameters so I'm just going to simply put a comment in here that says //do noting.
>
> **[3:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=219)** Now, we're going to annotate this method with @Pointcut.
>
> **[3:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=225)** So we are now going to specify our point cut, and the pointcut that we are going to provide is @annotation.
>
> **[3:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=232)** So this is our execution, it is on an annotation.
>
> **[3:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=239)** And to that we are going to say Loggable.
>
> **[4:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=242)** So now this point cut will target anytime we use the Loggable annotation.
>
> **[4:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=249)** So now we need to go to our application config, and there's an annotation that we need to provide to this class.
>
> **[4:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=256)** And what we are going to do is @EnableAspectJAutoProxy.
>
> **[4:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=262)** This turns on aspecting.
>
> **[4:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=264)** Now, at this point, we're going to run our application just to make sure that everything is working.
>
> **[4:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=270)** And indeed, it is.
>
> **[4:31](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=271)** No changes are present, which is what we would expect.
>
> **[4:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts?u=76281980&t=275)** When we come back we're going to start implementing this behavior.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class, (3), interface (2), return, (1), type, (1)
> **Definitions:** is an  (5)
> **Env Vars:** slf4j (1), method (1), runtime (1)
> **Code Identifiers:** log4j (1), executelogging (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Implement AOP advice: Before
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=0)** - [Instructor] Now that we have a pointcut in our framework to execute against, let's create our before advice to execute before a join point.
>
> **[0:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=9)** So the first thing I want you to do is go src/main/java in our aspect and open up the LoggingAspect.
>
> **[0:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=17)** We need to create a private static final Logger, grab one from org.slf4j, we will call this LOGGER, we get it from the LoggerFactory and we will simply pass in our LoggingAspect.class.
>
> **[0:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=42)** Now, we're going to do an @Before and we will pass it "executeLogging()".
>
> **[0:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=52)** Make sure you put in the parentheses 'cause, remember, the method and the arguments matter with this.
>
> **[1:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=60)** Now we would do a public void logMethodCall, (keyboard keys clacking) it will have a JoinPoint.
>
> **[1:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=69)** (keyboard keys clacking) And now we can go about implementing our method.
>
> **[1:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=73)** So the first thing we're going to do is we're going to build up a StringBuilder called message_=_new StringBuilder, (keyboard keys clacking) and we will simply do a Method=.
>
> **[1:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=90)** (keyboard keys clacking) Now, we need to get the method name.
>
> **[1:35](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=95)** We can do that from the join point, so we'll do a message.append, we'll go to our joinPoint and we will get our signature, and then we will get the name.
>
> **[1:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=107)** This is the method name.
>
> **[1:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=109)** So now that we have that, let's go get the arguments for our method.
>
> **[1:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=113)** So we're going to create an object array called args, and that's going to be our joinPoint.getArgs.
>
> **[2:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=123)** Now, if null does not equal our args, and our args.length is greater than zero, so we have arguments defined... All right, we will do a message.append, we are going to append a space pipe space args=[ space.
>
> **[2:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=153)** This way we can have a little bit of structure to our arguments.
>
> **[2:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=157)** Now we're going to do an Arrays asList, we will pass at args, we can then do a forEach on that, grabbing the arg itself, and we will open up a Lambda.
>
> **[2:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=173)** Within the Lambda we will do a message.append, the arg, and then we will append a space pipe space.
>
> **[3:11](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=191)** Now, at the end we will simply do a message.append and we will send in a closed bracket.
>
> **[3:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=201)** (keyboard keys clacking) Now we can go in and do our logger, and we'll do this as an info message.
>
> **[3:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=208)** We will do message.toString, and I'm going to do a replace on this and I'm going to replace a pipe space bracket with a bracket, that way I get rid of that trailing pipe.
>
> **[3:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=232)** Now let's go to our service package and open up the greeting service.
>
> **[3:57](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=237)** We will simply annotate the getGreeting method with @Loggable.
>
> **[4:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=242)** Now we'll run our application.
>
> **[4:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before?u=76281980&t=246)** What you will see is we start spitting out log messages to this method when it is called, because we specified this as an at before.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (3), lambda (2), private (1), static (1)
> **Code Identifiers:** joinpoint (2), executelogging (1), logmethodcall (1), getargs (1), aslist (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Env Vars:** logger (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Implement AOP advice: After
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=0)** - [Instructor] We have seen executions of advice that occur before the join point.
>
> **[0:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=4)** Now, let's look at an execution that occurs after the join point.
>
> **[0:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=9)** So I want you to open up the LoggingAspect and we're actually going to modify the existing method.
>
> **[0:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=14)** So the first thing that we're going to do is change the before to after.
>
> **[0:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=17)** And you'll notice here in my auto complete that there's AfterReturning and AfterThrowing.
>
> **[0:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=23)** You actually need to address both of those in most situations.
>
> **[0:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=27)** But in this case, we're just going to do AfterReturning.
>
> **[0:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=30)** We can leave the point cut the way it is, but we actually have to specify it as the point cut, because we need to specify our returning.
>
> **[0:40](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=40)** And we're going to simply call this returnValue.
>
> **[0:46](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=46)** In our method signature, we need to have an object for our return value.
>
> **[0:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=54)** Now we will leave all of the method to this point here alone.
>
> **[1:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=60)** So right after we do the final appending of the message, I'm actually going to take and set a string called messagestring equal to
>
> **[1:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=78)** what we currently have in the builder.
>
> **[1:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=81)** This way I don't lose what we've already done.
>
> **[1:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=85)** Now, what we're going to do before we actually do the logging, is we're going to drop in and say if returnValue is an instance of, and we will do a collection.
>
> **[1:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=101)** So if it is a collection, I want to do a message.append, returning: and then append.
>
> **[2:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=120)** I'm going to do a couple layers here and do a collection, returnValue.size
>
> **[2:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=135)** .append instances,
>
> **[2:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=145)** otherwise, which is going to be the case that we're going to see now.
>
> **[2:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=149)** We will simply do message.append returning and we will append returnValue.to string.
>
> **[2:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=165)** Now, we should be able to keep our replace in here, and now if we run this, you will see that we actually are returning the data that we expected to return because that's what we've told it to do.
>
> **[3:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=182)** Go ahead and output the return value as part of our log message.
>
> **[3:08](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=188)** So this is why you might do something after, because now you not only have a handle to the method signature, you also have a handle to the return.
>
> **[3:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after?u=76281980&t=198)** The next step is let's wrap this with both a before and after, so we can actually do some behavior during our advice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), this, (1), return. (1)
> **Code Identifiers:** returnvalue (4)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Implement AOP advice: Around
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=0)** - [Instructor] We have seen the before and after advice, neither of which is really as full featured as we may like it to be.
>
> **[0:07](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=7)** So now we're going to take a look at the advice that I use most often, and that is the around advice.
>
> **[0:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=14)** So let's go back to our LoggingAspect class, and let's start by changing our annotation this time to @Around.
>
> **[0:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=23)** Now when you do the around, there's a few things that you have to change.
>
> **[0:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=28)** The first thing that we're going to do is we're going to remove the returning statement.
>
> **[0:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=37)** We now need to return an object.
>
> **[0:41](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=41)** We need to change our joinPoint to what's called a ProceedingJoinPoint, and we will get rid of our returnValue.
>
> **[0:56](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=56)** Now everything started to go red and that's totally fine.
>
> **[1:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=61)** All right, so the first thing that I want to do is I'm going to set a long value to be startTime, and we're going to get that from System.currentTime in milliseconds.
>
> **[1:15](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=75)** We will then do an Object returnValue equals joinPoint.proceed.
>
> **[1:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=84)** So what we've done is we've started a timer, then we've called our joinPoint and said proceed.
>
> **[1:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=90)** You will see, however, that we now have an unhandled exception.
>
> **[1:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=94)** So let's go ahead and add throwable to our method signature, because this can throw an exception like any method can.
>
> **[1:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=104)** So now we will go through and after we get the name of our method, we're going to actually print out the time before we do everything else.
>
> **[1:52](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=112)** So let's go ahead and do that.
>
> **[1:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=113)** Now we come back to the advice, so we will do a totalTime equals System.currentTime in milliseconds minus startTime.
>
> **[2:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=124)** Now that we have the time, let's go after we specify the name and we will simply do a message.append totalTime, put space in there, and then we will output our totalTime.
>
> **[2:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=149)** And then we will append milliseconds with a space.
>
> **[2:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=154)** Now, there's one more thing that we need to do.
>
> **[2:36](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=156)** We changed our method signature to return an object.
>
> **[2:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=159)** The object came from the Proceeding joinPoint.
>
> **[2:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=162)** So we simply need to return our returnValue.
>
> **[2:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=167)** This way, the execution can continue after the advice is run.
>
> **[2:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=171)** So let's go ahead and run this now, and you will see we are getting totalTime.
>
> **[2:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=178)** Now because it's running on my machine, everything's coming in with zero milliseconds and that's fine.
>
> **[3:03](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=183)** We could have broken it down further possibly, but the point is, is it's calculating a time.
>
> **[3:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=189)** It just happens to be happening instantaneously.
>
> **[3:12](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=192)** If we wanted to, we could put in a wait and let's go ahead and do that to show you that it is indeed working.
>
> **[3:19](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=199)** So after we come back, we will simply do a Thread.sleep.
>
> **[3:25](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=205)** We'll pass in five milliseconds.
>
> **[3:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=207)** And now when we run this, you'll see we're getting six milliseconds and that time should continue between five and six milliseconds depending on how we're breaking.
>
> **[3:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=219)** But we've now paused it because we told it to, but that time calculation still continues.
>
> **[3:44](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=224)** So we've gone in, we've executed the method, we then go in, we execute the method, we come back, we pause, we do the rest of our logging, and then we return that value, which continues execution on the main thread.
>
> **[3:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=238)** This is how you do around.
>
> **[3:59](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around?u=76281980&t=239)** This is my preferred way of doing aspecting.

> [!info]- Semantic Content
>
> **Code Identifiers:** joinpoint (4), totaltime (4), returnvalue (3), starttime (2), currenttime (2)
> **Code Keywords:** let (7), continue (2), class, (1), throw (1), else. (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Building your own aspect
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=0)** (bright electronic music)
>
> **[0:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=6)** - [Instructor] So now you get to go create your own aspect as part of a challenge.
>
> **[0:10](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=10)** Here's the instructions that I'd like you to follow.
>
> **[0:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=14)** I want you to create a counter.
>
> **[0:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=17)** You are going to count method calls as part of this aspect.
>
> **[0:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=22)** You'll report on them by method name.
>
> **[0:27](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=27)** You will apply that counter at the method level, and you'll apply this to any number of methods you pick.
>
> **[0:34](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=34)** So, each time a method is called, you will count it, you'll apply it wherever you want, you will report them by method name, and you apply the counter at the method level.
>
> **[0:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=45)** The rest is up to you.
>
> **[0:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=48)** Have fun doing this.
>
> **[0:49](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect?u=76281980&t=49)** I will be back with my solution to this Challenge Exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### Solution: Building your own aspect
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=0)** (bright electronic music)
>
> **[0:06](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=6)** - [Instructor] Now that you've had your chance, it's time for me to show you my solution to this Challenge Exercise.
>
> **[0:13](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=13)** I'm going to start with the interface that I created called Countable.
>
> **[0:17](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=17)** Looks very much like our loggable interface from before.
>
> **[0:21](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=21)** I then created an aspect where the point cut triggers on that annotation.
>
> **[0:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=28)** Part of that is I also created a map for my countingMap.
>
> **[0:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=33)** I then went in and created my advice, and I did this as a before advice, and I simply look and see if the map contains my method.
>
> **[0:42](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=42)** If it does, I increment it, if it does not, I set it to one.
>
> **[0:47](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=47)** At the end, I output all of those values.
>
> **[0:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=51)** I then went to each of my service methods and added the @Countable interface to each of the service methods.
>
> **[1:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=60)** Now, when I run my application, you will see that I get a cascading out of all of my counts, and then when I go to the next round, it goes up where appropriate, and that will continue through the operation.
>
> **[1:16](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=76)** Now, that's how I solved this.
>
> **[1:18](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=78)** You could have done this several different ways, and you probably have a more efficient way of doing it.
>
> **[1:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect?u=76281980&t=83)** This was simply to show what we're trying to do, and it works as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), continue (1), this. (1)
> **Code Identifiers:** countingmap (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=0)** - [Instructor] Now that we have gone through the framework, we are ready for some next steps.
>
> **[0:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=4)** But before we get there, let's take a look at where we've been in this course.
>
> **[0:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=9)** So as a review, we introduced the concept of inversion of control and the IoC container within Spring, we discussed configuring that IoC with JavaConfig.
>
> **[0:22](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=22)** We then talked about component scanning with a little bit of a discussion of auto-configuration.
>
> **[0:28](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=28)** We then fundamentally discussed the Spring lifecycle.
>
> **[0:33](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=33)** This is probably the most important topic in this course in my opinion.
>
> **[0:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=37)** We spent a lot of time talking about how Spring actually operates at startup, use, and destruction.
>
> **[0:45](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=45)** We then walked through aspecting, which has actually been removed from the certification exam.
>
> **[0:51](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=51)** But it's a very important skill to have despite the fact that it doesn't work with GraalVM.
>
> **[0:58](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=58)** So what is next, you might ask?
>
> **[1:01](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=61)** Of course, certification would be a great option.
>
> **[1:04](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=64)** This course along with my course, Learning Spring With Spring Boot 3 or Spring Essential Training, either of which mixed with this course will provide you all of the material that you need to be successful with a little bit of practice for the Spring certification exam.
>
> **[1:24](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=84)** Obviously, we've touched on aspecting.
>
> **[1:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=86)** It's something I find very important.
>
> **[1:29](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=89)** Spend a little time.
>
> **[1:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=90)** Look at a professional example of aspecting that you could use in your day-to-day work.
>
> **[1:37](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=97)** Take a look at the lifecycle, see if there is any place in your system that any of these use cases of modifying the lifecycle through the use of interfaces could be beneficial to you and your organization.
>
> **[1:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=113)** And continue learning.
>
> **[1:54](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=114)** Even if you don't have professional examples of aspecting or lifecycle use cases, you can always use CodeKatas to create instances of these in your GitHub repo to practice these skills and get better at them.
>
> **[2:09](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=129)** I'd like to end this course like I end all my courses, by simply saying thank you.
>
> **[2:14](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=134)** I understand that your time is valuable, and the fact that you've chosen to use your time to work with me and to learn this material is not lost on me.
>
> **[2:23](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=143)** So thank you for that.
>
> **[2:26](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=146)** My commitment to you does not end with this course.
>
> **[2:30](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=150)** I encourage you to follow me on Twitter, now X, GitHub, StackOverflow, where my handle on all of those is @fpmoles.
>
> **[2:39](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=159)** If you have questions about this or any of my courses on LinkedIn Learning, leverage the question and answer section for that course.
>
> **[2:48](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=168)** I respond to them all the time.
>
> **[2:50](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=170)** And of course you can reach out to me on these methods.
>
> **[2:53](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=173)** That being said, thank you for your time.
>
> **[2:55](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=175)** I hope you have found Spring Framework In-Depth to be very valuable, and look forward to seeing you on the next course.
>
> **[3:02](https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps?u=76281980&t=182)** Continue learning because we should never stop learning.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), let (1)
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