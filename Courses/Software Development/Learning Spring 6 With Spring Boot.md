---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-spring-6-with-spring-boot-3
url: "https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3"
level: Beginner
updated: 11/27/2023
learners: 16434
skills:
  - Spring Framework
  - Spring Boot
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-spring-6-with-spring-boot-3-4465325"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHIALbX3heJRg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1700601834997?e=2147483647&amp;v=beta&amp;t=64gJyb_H4q1NbA2LIqRsHPV1ourvE4rZDOSszv9EMMY"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started In Spring Development]]'
  - '[[Getting Started as a Java Developer]]'
prev_courses:
  - null
  - '[[Java Essential Training- Objects and APIs]]'
next_courses:
  - '[[Creating Spring Boot Microservices]]'
  - '[[Learning JDBC]]'
path_nav: '[{"path":"Getting Started In Spring Development","position":1,"total":5,"prev":null,"next":"Creating Spring Boot Microservices"},{"path":"Getting Started as a Java Developer","position":3,"total":10,"prev":"Java Essential Training- Objects and APIs","next":"Learning JDBC"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/web-development
  - topic/data-science
  - skill/spring-framework
  - skill/spring-boot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20Spring%206%20With%20Spring%20Boot.md)

![Learning Spring 6 With Spring Boot](https://media.licdn.com/dms/image/v2/D560DAQHIALbX3heJRg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1700601834997?e=2147483647&amp;v=beta&amp;t=64gJyb_H4q1NbA2LIqRsHPV1ourvE4rZDOSszv9EMMY)

# Learning Spring 6 With Spring Boot

> Spring is the hugely popular framework for developing Java applications in the enterprise space. In this course, discover how to leverage Spring Boot 3, which takes an opinionated view of the latest version of the platform: Spring 6.Follow along with Frank Moley as he gives you an overview of how to use Spring Boot 3 to develop a practical, enterprise-style web application quickly and efficiently.

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3) | Beginner | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn the premier framework for the JVM](#learn-the-premier-framework-for-the-jvm)
  - [What you should know](#what-you-should-know)
  - [Run PostgreSQL](#run-postgresql)
- [**1. Getting Started with Spring Boot**](#1-getting-started-with-spring-boot) (5 videos)
  - [Introduction to Spring](#introduction-to-spring)
  - [Introduction to Spring Boot](#introduction-to-spring-boot)
  - [Create a project](#create-a-project)
  - [Examine a Spring Boot skeleton project](#examine-a-spring-boot-skeleton-project)
  - [Annotations everywhere](#annotations-everywhere)
- [**2. Data Access in Spring**](#2-data-access-in-spring) (6 videos)
  - [Welcome to Spring Data](#welcome-to-spring-data)
  - [Embedded databases with Spring Boot](#embedded-databases-with-spring-boot)
  - [Repositories with Spring Data](#repositories-with-spring-data)
  - [Use a remote database](#use-a-remote-database)
  - [Challenge: Data access](#challenge-data-access)
  - [Solution: Data access](#solution-data-access)
- [**3. Service Tier**](#3-service-tier) (3 videos)
  - [Understand dependency injection](#understand-dependency-injection)
  - [Build a service abstraction](#build-a-service-abstraction)
  - [Develop a service object with Spring](#develop-a-service-object-with-spring)
- [**4. Web Pages with Spring**](#4-web-pages-with-spring) (5 videos)
  - [Introduction to the controller](#introduction-to-the-controller)
  - [Build your first controller](#build-your-first-controller)
  - [Thymeleaf as a rendering engine](#thymeleaf-as-a-rendering-engine)
  - [Challenge: Create a web page](#challenge-create-a-web-page)
  - [Solution: Create a web page](#solution-create-a-web-page)
- [**5. Exposing RESTful Endpoints**](#5-exposing-restful-endpoints) (4 videos)
  - [Understanding RestController](#understanding-restcontroller)
  - [Expose a service layer through REST](#expose-a-service-layer-through-rest)
  - [Challenge: RESTful endpoints](#challenge-restful-endpoints)
  - [Solution: RESTful endpoints](#solution-restful-endpoints)
- [**6. Additional Topics with Spring Boot**](#6-additional-topics-with-spring-boot) (3 videos)
  - [Test Spring Boot applications](#test-spring-boot-applications)
  - [Spring Security basics](#spring-security-basics)
  - [Other topics](#other-topics)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn the premier framework for the JVM](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/learn-the-premier-framework-for-the-jvm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/learn-the-premier-framework-for-the-jvm?u=76281980&t=0)** - [Frank] Spring is by far the most powerful and popular framework for the [[Java]] Virtual Machine today. As a Java developer or aspiring one, it is a framework that you must know as a professional developer. In this course, we will start from the beginning, leveraging [[Spring Boot]] to learn the basics of using the [[Spring Framework]]. Hi, my name is Frank Moley. I'm an architect, developer, engineering leader, teacher, and perpetual student with over 25 years of experience writing software, much of that spent in the JVM. Join me on this journey of learning Spring with Spring Boot 3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Spring Boot]] (2), [[Spring Framework]] (1)
> **Env Vars:** jvm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [frank] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to be successful in this course, there are a few things that you need to know and have installed on your machine. This is a course on Spring. And with Spring, you can use several JVM languages. We, however, are going to stick with [[Java]] as the primary development language. You'll need a JDK installed on your machine. [[Spring Boot]] 3.0 leverages [[Spring Framework]] 6, which requires at least Java 17. Now, I will be leveraging Java 20 as the latest LTS version of Java that is available today. You will need basic Java knowledge in this course. If you don't feel comfortable with the basic Java constructs, I suggest you stop right here and take a look at one of the core Java courses in the library, like learning Java or Java essential training. I also recommend using an installed version of Maven. This is purely optional as Spring Boot ships with wrapper scripts for Maven, and most IDEs have built-in Maven tool sets. But I find that having Maven installed makes some commands easier to execute. Apache provides good installation instructions based on your OS if you choose to do this. We will be using both an embedded database and an external database. For the external database, we will be using [[PostgreSQL|Postgres]]. Now, you can do what I will be doing, and that is leveraging Docker to run the database.
>
> **[1:34](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/what-you-should-know?u=76281980&t=94)** This is by far the cleanest way to do this on your local development machine, as you can simply remove the image when you're done. However, Docker can be challenging for some. And I am going to provide you some basic instructions, but if it seems too much, you may just consider another option. One of those options, if you don't want to leverage Docker, is to install the database locally following the instructions from [[PostgreSQL]]. You can also just leverage the H2 embedded database for all of the exercises and just go through the remote database examples, but not execute on them. This will at least give you a running system without installing anything. But you will miss out on some of the connection details to using a remote database. You should be able to pick them up, however, just by following through the video, if you don't want to use Postgres. Now, there are a couple other tools that I will be leveraging in this course. IDEs are a very important tool for developers. And they're also a very personal choice. Now, I will be using IntelliJ Ultimate Edition because I use JetBrains tools every single day, meaning that these are the tools I use, and they're the most comfortable for me. You should not focus on using the tool that I use. You should focus on the tool that you are familiar with. Every shortcut that I use in my IDE is available in every other modern Java-focused IDE,
>
> **[3:10](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/what-you-should-know?u=76281980&t=190)** either through a plugin or natively. So you're not missing out on anything. When I use a shortcut, you just got to figure out which one it is for you in your IDE. I will be using a command line tool called HTTPie. This is a tool that execute web requests from the command line. Now, you can use this tool, and it's very easy to install in any operating system, or you can use a tool like Curl, or if you really want, you can just use a web browser. If you do the web browser, however, I would suggest that you install a plugin to format that [[JSON]]. Speaking of web browser, you will need one. Of course, you get one with your OS. But I will be using it to not only hit webpages, but also to statically load templates for visualization. So you will want to make sure that you have a modern one, capable of everything that is offered in the latest [[JavaScript]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (10), [[Spring Boot]] (2), [[PostgreSQL|Postgres]] (2), [[Spring Framework]] (1), [[PostgreSQL]] (1)
> **CLI Commands:** docker (3), find (1), apache (1), curl (1), make (1)
> **Env Vars:** ide (3), jvm (1), jdk (1), lts (1), json (1)
> **Prerequisites:** install (3), you'll need (1)
> **Versions:** 3.0 (1), java 17 (1), java 20 (1)
> **Tools:** command line (2), intellij (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Run PostgreSQL](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/run-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/run-postgresql?u=76281980&t=0)** - [Instructor] I'm going to walk through how to set up and use [[PostgreSQL]] for this course based on Docker. If you are running an embedded version of PostgreSQL, you only need to apply the provided files via the PostgreSQL console. So pick up there, and I'll give you a heads up. In the exercise files from any chapter, there is a bin directory. In that directory is a [[PostgreSQL|Postgres]] directory, and in there is a simple script called start_postgres.sh. Now, this script is [[Linux]]-based. So if you are using [[Windows]], you will need to adjust the file paths on both lines five and seven to make them Windows compatible. Now go ahead and run this script in the terminal. This script does assume the Docker is running, so if it isn't running on your machine, you need to do that first. So I'm going to pop open a terminal window and I am going to simply execute from within this directory, start_postgres and let it run. Now I do need to mention that this assumes the Docker's running, so if it isn't running on your machine, you need to do that first. Oh, and one more thing I should mention real quick. This script uses the default PostgreSQL ports. If you are using Docker for this course, but have Postgres installed, you will need to modify the port that you expose, and then remember to use that later on in the course when we define the database. But again, we've got it running
>
> **[1:32](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/run-postgresql?u=76281980&t=92)** and we can validate that it is running by typing docker ps. And you'll see that we have a PG Docker image running. Now we need to now access the PSQL terminal. So in order to executive this, we're going to do a docker exec -it, and then the name is pg-docker, and we will simply go to bin bash. So now we have a bash terminal up and running that is actually in the image that is running in Docker. Now at this point, if you are using local installed Postgres, you can follow the [[Representational State Transfer (REST)|rest]] of the steps. For simplicity, we're just going to copy and paste, but of course, you could pass the file to PSQL. But that is something you can do if you choose. So let's go ahead and open up the PSQL terminal. So psql -d local. And we will use the Postgres user. Now, I didn't have to provide a password because it's available in this image as an environment variable. Normally you would have to do that when you connect to Postgres. But nonetheless, here it is. We are in the database called Local. So in that same directory, I have a schema.[[SQL]] file. I want you to simply copy this file and paste it into the terminal and allow it to run. And then I want you to do the same for the data files. So copy it, paste it into the terminal, and everything has been inserted. So we could do a select star from lil.rooms, and you'll see that we get some data back out,
>
> **[3:09](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/run-postgresql?u=76281980&t=189)** which is what we would expect because we've just inserted them. Now this database is up and running. I suggest you leave it running for the remainder of the course if you are going to use it. If not, you'll have to remember to start it up before we get to those chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (5), [[PostgreSQL]] (4), [[Windows]] (2), [[Linux]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** docker (9), psql (4), make (1)
> **Tools:** terminal (7), bash (2)
> **Env Vars:** psql (3)
> **Definitions:** is a  (3)
> **File Paths:** start_postgres.sh (1), schema.sql (1)
> **Code Identifiers:** start_postgres (2)
> **Best Practices:** remember to (2)


### 1. Getting Started with Spring Boot

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Spring](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-spring?u=76281980&t=0)** - [Instructor] The [[Spring Framework]] is by far the most popular framework for the JVM today, and for good reason. The simplicity of use, the power for developers, and the community are a big part of the reason for its success. The Spring Framework is based on some key components, as well as [[Design Patterns]]. At its core, it is a framework for providing comprehensive infrastructural support for developing JVM based applications. There are many built-in abstractions for just about every situation you may encounter in the enterprise world. Essentially, Spring provides the plumbing, as well as the scaffolding, so you can focus primarily on your business logic. It does this by relying on OOP best practices and using those to define the abstractions in the framework. All of this is based on the dry principles or don't repeat yourself. Much of the plumbing and abstraction is to remove the repeated code of many enterprise and internet software routines. Before we get much deeper into the framework, I want to level set on some of the definitions that we will use and how they apply to the Spring world since their use can be confusing to some people because they're disambiguous with other uses within [[Java]].
>
> **[1:35](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-spring?u=76281980&t=95)** A POJO or Plain Old Java Object is a Java class in the purest sense. It contains both attributes and methods for working with the class. Java Beans from the EJB world are objects with only gitters and setters for the attributes. Spring beans however, are POJOs configured in the application context. We will explain the application context later on in the course, but this definition of Spring Bean and POJO verse a Java Bean is a major point of confusion. So I want to make this very, very clear. DTOs or data transfer objects are nothing more than Java Beans that are used to move state between logical layers of code. So let's talk a little bit more about what makes Spring simple to use. One cannot give enough credit to the Spring source documentation. One of the biggest complaints I have had in my career about using different [[Forms]] of technology is that the developer documentation is not clear, not concise or not complete, but that isn't the case with Spring. Use cases, examples, and general patterns are clearly documented on their website. The framework builds its constructs off of common patterns, things like the template pattern that they use.
>
> **[3:10](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-spring?u=76281980&t=190)** This allows for an easier learning curve when picking up new pieces of their stack. This of course, speeds up adoption of the framework to say the least. One of the early complaints of Spring was configuration was done via XML. The use of XML is no longer required and hasn't been for a while, but to configuration of the container itself is still required. Most of Spring is configured via annotation based component scanning or the use of Java itself. When you add [[Spring Boot]] to the mix, you get auto configuration as well, making it even easier. Inversion of control is a primary focus on how the framework itself works. Now, we just discussed briefly configuration of a Spring application. What we are actually configuring is the inversion of control container, which is the most central component of a running Spring application. Now, we're going to discuss IoC in some depth, but for now, just understand that this is what configuration is building. Inversion of control is one of those OOP patterns that is part of the framework, and Spring leverages it to its core. Inversion of control provides the mechanism of [[Dependency Injection]], allowing a shift in object creation and management from traditional applications.
>
> **[4:44](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-spring?u=76281980&t=284)** The application context wraps the BeanFactory. That BeanFactory ultimately is the inversion of control container, which serves beans to the runtime of the application. As briefly mentioned, Spring Boot provides auto configuration of the BeanFactory based on the presence or absence of classes among other conditionals. This greatly improves the speed of [[Application Development]]. Now, we are going to go into a lot of depth on this, but for a real deep dive into how Spring works, I suggest you check out my course, [[Spring Framework in Depth]] here on the [[LinkedIn]] Learning Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7), [[Spring Framework]] (3), [[Spring Boot]] (2), [[Design Patterns]] (1), [[Forms]] (1)
> **Env Vars:** jvm (2), oop (2), pojo (2), xml (2), ejb (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to Spring Boot](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-spring-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-spring-boot?u=76281980&t=0)** - [Instructor] Let's spend a few moments and talk about [[Spring Boot]], what it is, and why it makes for a great platform for not only building applications, but also for learning Spring. The benefits of Spring Boot for development have taken the Spring world by storm since it was first introduced in a fully functioning application, wrapped in a 140 character Tweet. As this Tweet by Rob Winch introduced, Spring Boot supports rapid development of fully functioning applications with minimal effort. Much of the pain of using raw Spring to build a functioning web application was abstracted through auto-configuration. Its uses extend beyond web applications, however, and can be used for many modern application needs. These needs include cloud-native [[Application Development]], but also traditional enterprise application development. Much of the speed comes from auto-configuration of not only the Spring constructs, but also the embedded offerings of things like [[Databases]] and servlet containers. So let's discuss these component offerings from Spring Boot a touch more. The embedded servlet containers offered a rapid shift from traditional [[Web Application Development]] in [[Java]]. We used to build war files and run them in a web server. This meant the running process was the application server that usually ran multiple web applications,
>
> **[1:33](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-spring-boot?u=76281980&t=93)** making operations much harder. The auto-configuration of the application context removed the need to configure every single aspect of the running application. We used to spend a lot of time configuring everything just to make a basic "Hello, World!" type application run. Now we do none of that. We also used to have to spend a lot of time mapping servlets to get the web application up and running. Again, we get this out of the box. We can also leverage, and will in this course embed a database with no configuration thanks to the auto-configuration based on classes present on the class path. You also get automatic controller mappings for common paths, allowing you to serve webpages with no configuration. You may wonder why we are using this as a learning platform since it removes a lot of the complexity, and that is the primary reason. Everything that we just discussed, we would have to set up on your machine just to get to the point of learning Spring. By leveraging Spring Boot, it will just work and we can focus on Spring itself and not the ecosystem as a whole. And in my opinion, that makes this the ideal way to learn the basics of Spring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (5), [[Application Development]] (2), [[Databases]] (1), [[Web Application Development]] (1), [[Java]] (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Create a project](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/create-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/create-a-project?u=76281980&t=0)** - [Instructor] So, let's get started by building the project that we will use throughout this course. I want you to navigate to your web browser and go to start.[spring.io](https://spring.io), and this is the Spring Initializr page. This is what we will use to build a Spring application. Now, there are several ways to create a new [[Spring Boot]] project. Usually, I use the built-in function of my IDE, but for the purposes of this course, let's stick with the web console. Now we need to make some selections. Let's start by picking Maven as our project type. Of course, you can use [[Gradle]] if you prefer. I'm going to use Maven. That's what I prefer, that's what I use, and that's what we talked about having installed. Now we're going to use [[Java]]. Again, you have several options here under the language. I'm also going to pick 3.1.3, I'm also going to pick 3.1.3, which is the default. That is the latest version today. What I suggest you do is if a new version has come out is to go ahead and use that version. Just note, the way Spring operates, sometimes things get deprecated within a minor release, so you may need to adjust in the future if you're not using 3.1.3. Now we need to put in a group, and this is a Maven group, so I'm going to use a strategy that makes sense for me. So com.frankmoley.lil will be my group. The artifact name that I am going to choose here is landon-hotel.
>
> **[1:33](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/create-a-project?u=76281980&t=93)** is landon-hotel. And if we scroll down here, I don't need to worry about the description. I do want to package this as a JAR file, and I want to pick Java 20. Now, in the Dependencies section, we're only going to pick one for now. When you're doing this in the real world, you're most likely going to pick every single dependency that you may need as you're moving forward. But for now, I'm just going to pick web. So pick Spring Web. And at that point, we are good to go. Now, while we are just picking Spring Web right now, I encourage you to pause this video and take a look at the available dependencies by clicking that Add Dependencies again. Think of some of the technologies that you have used or have heard of, or maybe use that has some creative trigger in your mind for a future learning in Spring. Now, when you're done looking, come back, and we'll finish the [[Representational State Transfer (REST)|rest]] of this project's skeleton. All right, now that you've taken a look at all those dependencies, let's go ahead and click Generate. Now, what this has done is generate a ZIP file that has downloaded onto your machine. What I'm going to ask you to do is to unpack that ZIP file and put it into a working directory that you can then use in the next video to open up with your IDE. And that's really the power of generating a project through that is you're going to get a fully baked Spring Boot file,
>
> **[3:06](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/create-a-project?u=76281980&t=186)** which we will see by simply entering a few values and clicking generate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Java]] (2), [[Gradle]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** ide (2), zip (2), jar (1)
> **Versions:** 3.1.3 (3), java 20 (1)
> **UI Navigation:** navigate to (1), go to (1), scroll down (1)
> **Cross-References:** we talked about (1), in the next (1)
> **Exercise Files:** zip file (2)
> **CLI Commands:** make (1)
> **URLs:** [spring.io](https://spring.io) (1)

#### [Examine a Spring Boot skeleton project](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/examine-a-spring-boot-skeleton-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/examine-a-spring-boot-skeleton-project?u=76281980&t=0)** - [Instructor] Let's take a look at what you get with the [[Spring Boot]] Skeleton project. I assume you've opened it up in your IDE. If not, do that and let's jump on over to that IDE. So the first thing that I'm going to do is I'm going to delete some of the files that I don't like to include because I don't use them. So I haven't installed Maven package, therefore I don't need the .mvn directory, or the two Maven command files. Those are something I just don't need. If you don't have Maven installed or your IDE doesn't provide them, go ahead and leave them, but I'm going to delete them for my own purposes. I also don't need this low level gitignore or the help.md, because both of those I get with either the parent and the help I don't need. So let's delete those. Now, the IML file, that is a artifact of my ID, we're going to ahead and leave that. Let's take a look at this palm.xml file, If we look at the palm.xml, you will see that many of the things that we specified In Spring Initializer are now visible here. So we have the name of our project here on line 15, and we've got our group on line 12. We have the Spring Boot version that we picked on line nine, and the [[Java]] version that we picked on line 18. We also have in our dependency section, starting on line 20, we've got our Spring Boot Starter Web. That's the only one that we selected. You will notice however,
>
> **[1:32](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/examine-a-spring-boot-skeleton-project?u=76281980&t=92)** that we also get a tested dependency that is part of Spring, we get that for free. And we have the Spring Boot Maven plugin, which allows it to build the executable jar that we are going to rely on to run our application. Let's go ahead and open up src main, we will start in Java. We have a root package, and this root package is important because this is where component scanning starts. And within there we have a Landon Hotel application. Now we're going to talk about some of this later, but what you will notice is, is that it is annotated with @SpringBootApplication and it has a method on line nine, the main method in there is a function call to SpringApplication.run. This triggers the cascade of component scanning and auto-configuration that we will leverage. This becomes the main entry point for your application, evident by the fact that it is a main method. Now in the resources directory, we get a couple folders. So we have a static folder and we have a templates folder, both of them are empty, but we also have an application.properties file. In our application.properties file, you will see there is nothing defined yet, but this is something we will use later on in the course. For right now, in our static directory, let's create a new [[HTML]] file and we will simply call it index.html. And within here, let's just type a title of Landon Hotel, and in our body we will simply put h1, Hello,
>
> **[3:10](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/examine-a-spring-boot-skeleton-project?u=76281980&t=190)** and we'll get to that in a minute. In our test directory, you will see we have a default test, and this simply tests that the context loads, and that's what you get for Spring Boot. You've got a very simple project, but here's the power of this. I'm going to go ahead and run this, and what I am running is that main method. So my ID picks up that this is Spring Boot, sets a run configuration up, I'm going to go ahead and run that. You can do the same in your IDE by simply running the main method, or you can do a Maven compile and then run that Java jar. The documentation for that is available on the Spring website. But for now, let's go ahead and run this. You'll see that it's going to start up, and what I want to do is jump over into my web browser and simply navigate to localhost:8080. You'll see we have now served that static page from the application. So with doing very little more than creating a simple skeleton in the embedded jar. So think about that for a minute. We did nothing but create a starter at start.[spring.io](https://spring.io), generated the project, added in an HTML file and ran it, and we have a fully functioning web application, not just a web server, a fully functional web application. Sure, we're not using all the details yet, that will come, but we got all of that with a simple download of the skeleton and the addition of that HTML file. That's a pretty powerful proposition
>
> **[4:44](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/examine-a-spring-boot-skeleton-project?u=76281980&t=284)** for doing nothing but running an application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (6), [[HTML]] (4), [[Java]] (3)
> **Env Vars:** ide (4), html (3), iml (1)
> **File Paths:** palm.xml (2), help.md (1), index.html (1)
> **Definitions:** is a  (3)
> **URLs:** [localhost:8080](https://localhost:8080) (1), [spring.io](https://spring.io) (1)
> **CLI Commands:** mvn (1)
> **Ports:** :8080 (1)
> **Documentation:** the documentation (1)

#### [Annotations everywhere](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/annotations-everywhere?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/annotations-everywhere?u=76281980&t=0)** - [Instructor] [[Spring Boot]] is driven by auto-configuration and component scanning. Annotations drive the component scanning. Let's start our discussion by clarifying what annotations are. Annotations are natively supported by [[Java]] itself. They, essentially, are [[Metadata]] for your code. Often they're used for compiler or runtime instructions, and Spring is no exception. They can also be a great leverage point for pointcuts in aspected code, something we won't spend time on in this course, but are a great skill to have, and if you want to learn about aspecting, check out my course "Spring: Framework in Depth." The inversion of control container, something, again, we're going to go into in a lot of depth in a bit, is driven by configuration. Spring used to be entirely configured by XML. And while support for this still exists, it has been considered deprecated for most use cases. The replacement for XML is the use of Java configuration. Beans destined for the BeanFactory, which is the central component of the IoC container, can be defined with functions annotated with @Bean. These Beans can be served to any class in your application. The functions themselves are pure Java and they exist in an @Configuration, or, in this case, an @SpringBoot, annotated class. Component scanning is the easiest method
>
> **[1:34](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/annotations-everywhere?u=76281980&t=94)** of configuration today. Through this method, annotations are added to classes, attributes, and methods that allow the framework to define a Bean for use in the application. Indeed, Java configuration is driven by component scanning of the annotated class and then the methods within it. Auto-configuration is an aspect of Spring Boot where Beans are added to the BeanFactory based on annotations and conditions. This is the power of Spring Boot because it allows default Bean creation based on the presence or absence of classes in the class path or already in the BeanFactory. Auto-configuration is a powerful, but graceful set of operations. Bootstrapping an application with @SpringBootApplication or annotating a config class with @EnableAutoConfiguration turns on auto-configuration once that class' component is scanned. The IoC container configuration through auto-configuration is driven entirely by the classes included on the class path via the dependency jars included in the project, as well as conditions. With auto-configuration, it isn't a take it or leave it proposition. You don't have to enable every aspect of auto-config and can turn off certain parts of the framework's behavior
>
> **[3:09](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/annotations-everywhere?u=76281980&t=189)** around auto-configuration strategy. Exclusions provide this customized behavior. Spring gives you common properties to specific data points. These common properties give you exposure to the most common overrides without actually having to override the auto-configuration behavior itself. And we are going to leverage this quite a bit as we're setting up our application because we need to specify values and don't want to accept the defaults. If the properties are not sufficient for your needs, Spring's auto-configuration operations will stop trying to configure a Bean if you have already defined that Bean in your configuration or in components that are annotated. This really is a core tenet of all of Spring. Do the default automatically, but ultimately the developer controls everything in the end and Spring gracefully steps aside if you do something that it was going to try to do through its convention. Now outside of configuration and other potential uses, behavior can be added to configured Beans specifically through the proxy pattern. Beans in the BeanFactory are proxied by Spring, Spring adds various types of behavior based on the class
>
> **[4:45](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/annotations-everywhere?u=76281980&t=285)** that is being proxied and any annotations on it. Much of that behavior is driven by annotations provided by the [[Spring Framework]] itself. In fact, 99% of it is, unless you configure it to have specific proxies added. You can add behavior as well through the use of aspecting, and annotations are a very easy extension point to trigger those aspects on. Granted, there are many other ways to trigger aspecting besides annotations. It just happens to be my favorite place based on similar use cases. And important thing to note here about proxied code is that the order of calling methods matter. If you call a method internally, the proxy behavior isn't applied. This can be very confusing when debugging at first, but it's important to remember that any time you are expecting proxied behavior, things like transactions, this is the case where most new developers that I've worked with are actually impacted by this situation, it is around transactions, what you should do is you should avoid class-level internal method calls to keep the behavior going. Let me expand out on that just a little bit. So we have a class that has a method getX and getY. If from external to that class you call getX, you will get the proxy behavior. If you call getY, you will get the proxy behavior.
>
> **[6:20](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/annotations-everywhere?u=76281980&t=380)** However, if you call getX and within the getX method, it calls getY, you will not have the proxied behavior around that getY method call. Now hopefully, this diagram here explains it, but give it a chance. Go create a class, throw an exception within one of those methods that would break a transaction, and you can see how this breaks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Spring Boot]] (3), [[Metadata]] (1), [[Spring Framework]] (1)
> **Code Identifiers:** getx (4), gety (4)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** xml (2)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)


### 2. Data Access in Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to Spring Data](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/welcome-to-spring-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/welcome-to-spring-data?u=76281980&t=0)** - [Instructor] Now we can start just about anywhere in the stack for our journey to learn about Spring using [[Spring Boot]]. But the database is my favorite, so we'll go ahead and start there. With the [[Spring Framework]], there are a series of top level projects that provide a robust set of implementations. [[Spring Data]] is one such project that provides data access. It provides a common set of interfaces that can be used across many different data sources from traditional RDBMS to [[NoSQL]], and some database adjacent technologies like [[Redis]], Memcached and search engines. Spring Data follows a common naming convention. Some of these patterns in Spring Data like [[Java Database Connectivity (JDBC)|JDBC]] template follow a pattern across the entire platform. Others like repository are used across all of Spring Data. Within the repositories, naming is also at play when building dynamic queries based on method naming something we will look at here in a little bit. Spring Data also provides aspected behavior around transaction management that can be used to build transactions that span single or multiple methods. In addition, Spring Data provides data to object mapping through either the repository pattern with an ORM or through data mappers when using JDBC template. There are a lot of benefits of Spring Data, but I want to talk about a couple of them. Removing a boilerplate code is probably one of the biggest benefits that you'll get with Spring Sata.
>
> **[1:33](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/welcome-to-spring-data?u=76281980&t=93)** If you are comfortable with ORMs, you can change what would take many lines of code, including several repetitive lines for every single method into nothing more than an interface definition at most. If you don't like ORMs and use JDBC template, you still save a lot of repetitive code on building the connection, committing, and then tearing down what has happened for every database call. Spring Data also allows you to swap out data sources very easily. I've used this a lot when building proof of concept code locally with H2 and then converting it to use [[PostgreSQL|Postgres]] or some other production database with no real code changes. In addition, because of the similarities across the framework, switching from relational to NoSQL is generally pretty clean and easy. All of this has one key benefit and it's one that is shared across the entire framework. Spring Data allows you to focus on your business logic and not so much on the scaffolding or plumbing code. That has nothing to do with the business needs and everything to do with just using the technology. So before we get into real code, let's talk about the key components of spring data. The repository interface gives you an extension point for your own database objects utilizing the repository design pattern. This is by far the easiest way to get data to
>
> **[3:07](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/welcome-to-spring-data?u=76281980&t=187)** and from a database of any programming language or framework that I have used, and it is actually being mimicked in other frameworks both within the JVM and external to it. The JDBC template gives you an easy way to execute raw JDBC queries without a lot of overhead dealing with connections. This template pattern is used across spring, but with [[Databases]], it gives you a way to not use an ORM, but to get a huge benefit from reduction of repetitive code. The entity object is part of Jakarta EE from the JPA specification. Spring uses it in the same way that you would use it with JPA, whether you are consuming a relational database or not. The DataSource is a [[Java]] construct that represents a unique connection pattern to a database. You can have multiple data sources in a single spring application, but it does require a touch more effort, because of the bean rules around having a certain number of items in the bean factory that implement a class. Spring Data doesn't just provide a set of common methods with the repository interface, it gives you dynamically generated queries. The interface method names follow a convention to create queries, findAllBy and then some value. And that value has to exist on the entity itself. findBy, which will get a single instance, again, based on that same pattern of the name,
>
> **[4:42](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/welcome-to-spring-data?u=76281980&t=282)** or represented by the ellipsis here being a attribute on the entity. findBy blank And blank. Same idea, but now you have multiple values coming in. There's also, or in that use case, this strategy is very well-documented and you can see it at the link presented here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (11), [[Java Database Connectivity (JDBC)|Jdbc]] (5), [[NoSQL]] (2), [[Spring Boot]] (1), [[Spring Framework]] (1)
> **Env Vars:** jdbc (5), orm (2), jpa (2), rdbms (1), jvm (1)
> **Exercise Files:** template (5), boilerplate (1)
> **Code Identifiers:** findby (2), findallby (1)
> **Documentation:** specification (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Embedded databases with Spring Boot](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/embedded-databases-with-spring-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/embedded-databases-with-spring-boot?u=76281980&t=0)** - [Instructor] Spring provides an easy way to use embedded [[Databases]], and [[Spring Boot]] makes it even easier by auto configuring not only the database, but leveraging a convention-based approach to apply schema and data to that database. Once you go ahead and jump into your IDE, and in your project, open up the palm file. Scroll down here to the dependency section and let's add a few dependencies. So the first dependency that we are going to add is spring-boot-starter-data-jpa. That comes from org.springframework.boot. And because we have a parent palm, we don't need to provide a version number. The next one that we are going to add is h2, which is the h2 database from com.h2database. Again, don't need a version number because this is included in the parent palm. And the final one that we're going to add is projectlombok so that we can make easier use of our entities without having to go in and add getters and setters. All right, I'm going to let Maven refresh and bring those dependencies onto my machine. And now in the bin directory, there is an h2 directory, and in there is a data and a schema.[[SQL]] file. I'm going to copy those files, and I'm going to paste them into source, main, resources just at the root there. So now that those have been added, we need to do one other thing, and that is to open up our application.properties file, and we're going to put in a spring.jpa.hibernate.ddl-auto
>
> **[1:38](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/embedded-databases-with-spring-boot?u=76281980&t=98)** and set it equal to none. Now what happens at this point is when we start up our application, it will run the schema file and then the data file, those are by convention of that name, and it will apply that schema to the embedded database. By putting in this hibernate.ddl-auto property, we are saying hibernate, don't create the schema on our behalf. We will do them for you. So now if we simply start up our application, you won't be able to see the data yet. But I do want to point out something in the logs that I think will make this very, very clear. So you will see here the third line of the log that we are bootstrapping [[Spring Data]] JPA in DEFAULT mode. So if you scroll down through the log some more, you'll see that a connection was created to the database here in the Hikari pool, and that hibernate has been provided. Until we actually go do some execution with that data, we're not going to be able to see that the data was created. Until we actually go do some execution with that data, we're not going to be able to see that the data was created, but I promise you it has been, and you will see that here in future videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Spring Boot]] (1), [[SQL]] (1), [[Spring Data]] (1)
> **Env Vars:** ide (1), jpa (1), default (1)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (2)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** schema.sql (1)
> **Speakers:** - [instructor] (1)

#### [Repositories with Spring Data](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/repositories-with-spring-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/repositories-with-spring-data?u=76281980&t=0)** - [Narrator] So now that we have the embedded database set up, let's do a little data access and I can prove to you that that data was loaded as we get through this video. All right, the first thing that I want you to do is I want you to load up in source main resources, go ahead and load that schema.[[SQL]] file. This is going to give us a template that we are going to use in order to build our object. So now in source main [[Java]] in our root package, let's create a new package and we will call it data.entity. And within there we are going to create a new Java Class called Room. Now we need to annotate this with @Entity. And then we are going to do an @Table with a name equal to rooms. Go ahead and import that from Jakarta Persistence. Now what you will notice is is I named the table Rooms and it serves a room object. So now let's go ahead and define that room object. So the first thing we need to do is do an @Id and we will do a private long. We will simply call it id. Let's put a column name on this and the name of our column is room_id. And then we are also going to put a generated value with a strategy of Auto. And now if we go back and look, we've got a couple more values.
>
> **[1:32](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/repositories-with-spring-data?u=76281980&t=92)** I'm going to go ahead and copy these to make this easier and then we will remove them. So we will do @Column(name="name"), private String name, @Column(name="room_number"), private String,
>
> **[1:59](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/repositories-with-spring-data?u=76281980&t=119)** roomNumber, and then finally @Column(name="bed_info"), private String bedInfo. Now in order to get access to our attributes, we are going to use the @[[Data Annotation]] from Lombok. We're also going to go ahead and add a toString so that we can see the results here in a moment. Now the next thing that we need to do is we are going to create another package off the root called data.repository. And I like to keep everything broken up like this. We're going to create a Java interface called RoomRepository. This is going to extend our JpaRepository and that requires two elements. So we will pass in a Room and a Long for the ID type. Now I want to show you real quick a very fun feature of [[Spring Data]]. I'm going to create a method here. So Optional<Room> findByroomNumberIgnoreCase,
>
> **[3:17](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/repositories-with-spring-data?u=76281980&t=197)** and that will pass in a String of roomNumber. Now you'll see back on this element here we have a attribute called roomNumber. That's what this is going to leverage and this needs to be optional. Sorry about that. Now since we've created this single method, I want you to take a look at the entity itself and imagine what other methods you may want to create in a fully-functioning application. How would you get all rooms with two queen beds or all the rooms of a certain name? This will give you an idea not only of how these methods can be created, but the power of dynamic queries. Of course, you may need to add indices in the real world to match these queries, but now is a great time to read the doc on this at the link below. Now we've got one more thing to do here and we are going to throw this away in a little bit, but for right now let's create a class called CLRunner at the root package. We'll annotate this with @Component and we will extend the CommandLineRunner from org.springframework.boot. That is going to require us to implement a run method. So now that that is run, we are going to leverage our repository. So let's do a private final RoomRepository.
>
> **[4:54](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/repositories-with-spring-data?u=76281980&t=294)** Go ahead and add that to a constructor. Now what this does is it's going to require that Spring has a room repository that it can inject into our class and we're going to talk more about [[Dependency Injection]] in a bit, but I don't want to confuse you with what I'm doing by just ignoring it. So we're going to do a couple things here. So we're going to do a list of rooms called rooms and that is going to come from the roomRepository.findAll. We are also going to do an Optional<Room>
>
> **[5:34](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/repositories-with-spring-data?u=76281980&t=334)** findByRoomNumberIgnoreCase. Now if we go look at our data.sql file, you will see that we have several room names here. So we're going to go use the room number of P1 to pull this up. So in quotes, just to show you that the IgnoreCase works, I'm going to do lowercase p1. So now let's do a System.out.printline on our room. And I want to do a rooms.forEach and we will simply do a System.out::printline. And now if I run our application, need to make that implements, not extend. Sorry about that. Now if we go ahead and run our application, what I want to show you is our first optional room came across and I didn't unpackage that optional, so that's why you see it as an optional. That was based on that query. But we also got all of this data as we did the find all. That came from the embedded database. We have not set up a connection to [[PostgreSQL|Postgres]]. There is no other place that that could have come from. But with that, that is the simplest way to create a repository to access your data with Spring Data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[SQL]] (2), [[Spring Data]] (2), [[Data Annotation]] (1), [[Dependency Injection]] (1)
> **Code Identifiers:** roomnumber (3), findbyroomnumberignorecase (2), room_id (1), room_number (1), bed_info (1)
> **CLI Commands:** make (2), find (1)
> **File Paths:** schema.sql (1), data.sql (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)

#### [Use a remote database](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/use-a-remote-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/use-a-remote-database?u=76281980&t=0)** - [Instructor] Now that we have things running with an embedded database, it's time to leverage our [[PostgreSQL]] image to show you what it would be like to use a remote database, which is much more real-world for what you're going to do. Now, the key thing here is that even though [[PostgreSQL|Postgres]] is running locally, the connection string is just pointing to local host as opposed to a remote host. So it's really the same thing as configuring to any remote database. I want you to jump into your IDE, and the first place that we're going to go is our pom.xml file. Now, we are going to remove the h2database. And instead, we are going to replace it with postgresql. Again, we will let [[Spring Boot]] handle the version, and we're going to run a Maven import. Now I want you to go to src/main/resources, and open up your application.properties file. Now, we are going to leave the ddl-auto equal to none, but on top of that, we are going to put a couple of more properties. So the first one is spring.jpa.database. And we are going to set that equal to postgres. Then we are going to enter the spring.datasource.url. And if you are using an image of Docker that is not exposing normal ports, so you have it installed locally, but you decide to use Docker and you had to expose a different set of ports, here's where you're going to make that change. For everyone else, the way that you're going to do this is [[Java Database Connectivity (JDBC)|jdbc]]:postgresql://localhost,
>
> **[1:38](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/use-a-remote-database?u=76281980&t=98)** because this is running on our local host. If a database is running in the cloud or running in some remote data center, you would put that appropriate host, assuming you can resolve the DNS. Now we're going to put the port in. The default port is 5432. Then the database name. And because I am running multiple schemas with this file, and if you use my files, you have created a schema called LIL, we are going to set current schema equal to that LIL. This way, when the connection driver happens, it automatically connects to the appropriate schema. Now we're going to put a spring.datasource.username. And in our case, it's postgres. And then a spring.datasource.password. And we will set that equal to postgres as well. Now, just to make sure that everything is perfectly clear, I'm going to delete the data and the schema files from src/main/resources. So in this case, any data that we have, we are guaranteed it is coming from Postgres. We no longer have h2 configured in our Maven POM. We no longer have the data source defined as h2. And we no longer have that schema and data file. So, with that, let's go ahead and restart our application. And we've left in that runner, so you'll see we're still getting data, and the data is coming from our room controller
>
> **[3:12](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/use-a-remote-database?u=76281980&t=192)** that we set up, but this time, it's connecting to Postgres. And because we're using Postgres, if I were to add an instance of a room and then restart the application, that room would persist because that data source is remote. Whereas in the embedded world, if you add data and don't add it to the data.[[SQL]] file, it will not persist past a restart. That right there should sum up the entire beauty of [[Spring Data]] because we have now configured a different data source of a different brand, a different flavor, and we're still running the system with zero code changes. Remember, we made no code changes, we changed a few properties and we changed the POM, but no code needed to change in order to make this execute.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (7), [[PostgreSQL]] (3), [[Spring Boot]] (1), [[Java Database Connectivity (JDBC)|Jdbc]] (1), [[SQL]] (1)
> **Env Vars:** lil (2), pom (2), ide (1), dns (1)
> **CLI Commands:** make (3), docker (2)
> **File Paths:** pom.xml (1), data.sql (1)
> **UI Navigation:** go to (1)
> **Definitions:** defined as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Data access](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/challenge-data-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/challenge-data-access?u=76281980&t=0)** - [Instructor] Now, we're getting to our first challenge of the course, creating data access. So here's the steps that I want you to follow. First of all, I want you to create an entity for the Guest table. Remember, you can reference that from the schema.[[SQL]] file. And if you deleted it like I did, you still have it in the BIN directory. And if not, you can go back to one of the previous exercise files and get that schema. So you're going to create an entity for Guest. You're going to do the same for the Reservation table. You're going to create a JPA repository that maps to that Guest table and a JPA repository for the Reservation table. In addition, on the Reservation repository, I want you to create a method to Get All by the column called RES_DATE. So whatever you call that entity, you're going to do a Get All based on that. So have fun with this one, play around with it, and I will be back with my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** jpa (2), sql (1), bin (1), res_date (1)
> **File Paths:** schema.sql (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Data access](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/solution-data-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/solution-data-access?u=76281980&t=0)** - [Instructor] Now it's time for my solution to this challenge. In data.entity package, I created a class called Guest. I annotated it just like we did for the room, putting in all of the appropriate values. I did the same on Reservation. One thing to note that for res_date, I called it reservationDate. That way I had a very clear delineation in [[Java]] what that field was. Everything else should look the exact same. So then in our Guest Repository, it's simply an empty interface that extends JPA repository. And on the Reservation Repository, I did pretty much the same thing, only I added the find all by reservation date using a java.[[SQL]].Date. Which is something I didn't mention on Reservation is that the date here that I used is java.sql, because this is coming straight from a database and that is the appropriate way to do that. I also then modified our CL Runner to be able to print all on all of the data. So if I run this application, you will see if we scroll to the top here of the output that I have my guests, and I list all of them. And then I get here into my rooms, which we saw before, we list all of them. And then my reservations, in this case I only have one reservation in the system on August 28th, 2023. We'll need to remember that for later on in the course,
>
> **[1:33](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/solution-data-access?u=76281980&t=93)** but for right now, that's how I solved this system. So if yours is not doing the same thing or you need to make some tweaks, go ahead and revisit those and then we'll continue on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[SQL]] (2)
> **File Paths:** java.sql (2)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** res_date (1), reservationdate (1)
> **Env Vars:** jpa (1)
> **Cross-References:** next video (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)


### 3. Service Tier

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand dependency injection](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/understand-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/understand-dependency-injection?u=76281980&t=0)** - [Instructor] As discussed several times, Inversion of Control is a central theme for Spring, and we are now going to discuss this [[Dependency Injection]] pattern and see how it works. Let's first talk about why we use Inversion of Control, and more specifically, why Spring does. Inversion of Control and all Dependency Injection patterns allow you to focus on contracts of your code and not necessarily the implementations. By allowing the container to handle the injection, you are coding to an interface or contract, not an implementation since you don't know at code time which implementation will be injected. Your code becomes focused purely on the business. The construction and management of objects is removed from your code itself. This makes it cleaner as well as easier to read and less cluttered with boilerplate code. Often, you will need to build intermediate abstractions in your code to handle aggregation logic. By leveraging IoC, you again focus on the business needs of these abstractions and not the cascading of construction that has to happen when you manage all of those in code, sometimes across multiple levels. And as I stated, this all leaves your code cleaner, which makes it more readable and more maintainable. Now for how Spring leverages IoC, and you, as the developer, interact with it. let's spend a little bit more time on this. The IoC container is configured by the developer
>
> **[1:36](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/understand-dependency-injection?u=76281980&t=96)** in one of the ways previously mentioned. With [[Spring Boot]], much of this configuration is based on dependencies brought onto the clause path. Spring maintains the handles to the objects constructed at startup. Those objects in the BeanFactory are maintained by a handle, and that's all Spring interacts with it. You never maintain the handle to the constructed object. You simply have a handle to whatever the container injects in. Speaking of injections, Spring serves these singletons, and that's a very important thing to note. These are singletons by default, the singleton classes during construction or via setter injection. Now, usually a rule of thumb is you use constructor injection when it's required, setter injection when it's optional or there's multiple potential values, and you should never use field-level injection in production code. It's fine to use it in tests, but in production code, and this is from the Spring contributors, you should be using constructor injection or setter injection. Ultimately, Spring maintains the entire lifecycle of these classes, now called beans in the [[Spring Framework]]. The developer only accesses the application context, which is the wrapper for the BeanFactory. And many times, we don't even deal with the application context, we just let the container handle it. We used to have to manually deal with the application context in order to configure it, but all of that is gone with Spring Boot.
>
> **[3:10](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/understand-dependency-injection?u=76281980&t=190)** Very seldom do I touch the application context unless I'm doing something a little bit more out of the ordinary where I need to get access to it, and that is very few and far between. Now, I want to walk through a visual model of how IoC works in a high-level conceptual model. So the IoC starts up when your application starts up, in this case, when that main method is called and the Spring Boot Runner is executed. That IoC container will go through a process of determining which classes it needs to scan and which classes it needs to bring into a BeanFactory. It also, during this process, determines the order in which it has to construct these items. It then goes through and constructs them. Now there's a lot of detail about how it constructs these items and how it happens, and all of that is available in my course, [[Spring Framework in Depth]]. But for now, just know that the container itself not only manages the order of construction, but it ensures that all of those beans are constructed appropriately. The injections are handled appropriately, and it will fail if there are circular dependencies. So when it knows that, in this case, Class A is consumed by Class B, it will construct Class A first, then Class B, and inject Class A in during construction, assuming you're using constructor-level injection. And at a high level, that's how IoC works.
>
> **[4:44](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/understand-dependency-injection?u=76281980&t=284)** And these classes will be available for the entire lifetime of the application with default configuration. There are other ways to configure this. We're not going to get into those right now, but there are other ways to not have singletons that are always available by the IoC. So don't think that that's a hard and fast rule.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[Dependency Injection]] (2), [[Spring Framework]] (2)
> **Definitions:** is a  (1), is called (1)
> **Best Practices:** rule of thumb (1), you should never (1)
> **Prerequisites:** configure (2)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)

#### [Build a service abstraction](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/build-a-service-abstraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/build-a-service-abstraction?u=76281980&t=0)** - [Instructor] So you may be tempted to simply expose your repositories through a web interface, through restful web services, or a web application, but there are many times where you need to build intermediate service abstractions, and I want to discuss those for a bit. But before we do that, let's talk about specifically why we build them in our application, and then we'll get into what they are. So, encapsulation is a behavior that software engineers often deploy to hide lower layers of code. Oftentimes, you don't want those higher layers of code consuming lower layers directly, and there's a myriad of reasons. Some of them are personal, some of them are for business continuity. Another place that I like to use service abstractions is when I'm consuming third-party APIs. By using your own encapsulation, you can isolate the [[Representational State Transfer (REST)|rest]] of your system from API changes by that third party. As a matter of fact, I seldom call third party APIs directly. I always wrap them in some sort of an encapsulation layer to protect the rest of my application. One of the most powerful ways to use service abstractions is when you need to simplify complexity. Oftentimes, you'll have some set of complex business rules that you don't want to recreate or expose. By building a service abstraction, it allows you to simplify your API and simplify that complexity for other developers on your team so that they don't have to go through the pain
>
> **[1:32](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/build-a-service-abstraction?u=76281980&t=92)** of figuring out what you've already done. Service abstractions also give you a way via isolation to swap out implementations at runtime. Hiding your factory behind the service abstraction not only simplifies the implementation, but gives you a lot of power to swap out as needed without impacting code. And think for a minute. When we changed our database, we didn't have to change any code. That would be the same if you have service abstractions built. You could change an underlying implementation and never have to swap out anything in your code while you're swapping those implementations. Now, usually, you tend to follow a very simple set of steps with Spring to implement a service. Now, these are just from empirical evidence. These are not a hard and fast rule, but I do want to kind of go through the steps that I usually walk through. So the first is I define the interface, and I always work from a contract-first perspective. So whether I'm using a [[Java]] interface or a Java class, I build the stub of that, the method signatures before I do anything else. Usually I actually get those code reviewed. I then actually go and create the API. So when I'm doing an interface, I create the class. If I'm not doing this, I tend to skip this step, but I do want to call out that I tend to stub it, and I stub it returning default data, or dummy data, because this allows me then to write my test
>
> **[3:04](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/build-a-service-abstraction?u=76281980&t=184)** before I do the implementation. I then look at all of the dependencies I'm going to need and I set that up on the constructor of that implementation. I then do any annotation or configuring that I need to do. Again, getting to the point where I can start to test this before I write any code. I then code the implementation. Now, this is not a course on [[Test-Driven Development]] or any of that, but when I talk about coding and implementation, I'm actually talking about coding the tests and the code itself to pass those tests. By having a contract well-defined, it makes this a cleaner set of processes. Now, before we get into actually coding one of these, I want you to take a moment and think about service abstractions that you might consider in your own domains, or maybe one that you can think that we're going to go build next based on what you've seen in our repositories. This is a very important way to start thinking about abstractions because spring is all about injection. And if you can inject these abstractions in, it makes your code easier to use. So take a moment, think about that, ad when you're done, go ahead and grab onto the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Java]] (2), [[Test-Driven Development]] (1)
> **Env Vars:** api (3)
> **Definitions:** is a  (2)
> **CLI Commands:** go build (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Develop a service object with Spring](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=0)** - [Instructor] So now let's go develop a service abstraction to aggregate our reservations with room and guests. Think about, for a moment, a hotel system showing all of the rooms and whether they're occupied or whether they're vacant on any given day. That's what we're going to go build. So go ahead and jump on over into your IDE, and the first thing that I want to do is go to src/main/[[Java]] into our base package, and I want to create a new package called service. Within there, I am going to create a new Java class. We're going to call this room reservation service. Now, before we code this, we need to actually go build a model that we're going to use, so I'm going to create another package called model underneath service, and within there, I will create a new class, and we are going to call this a room reservation. We will annotate this with a getter, a setter, and a to string, and we're going to put a few values in here, so private long roomId, private string roomName,
>
> **[1:16](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=76)** private string roomNumber, private long guestId, private string firstName, private string lastName,
>
> **[1:32](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=92)** private long reservationId, and private string reservationDate. And we're using a string here on purpose 'cause it's easier to render, it's easier for us to control. So if you look, we have some data from our room, some data from our guests, and some data from our reservation. So let's jump back over to the room reservation service. The first thing I want to do is annotate this with at service. Now, this is a stereotype of component, and it will allow the component scanning of this to occur, which is good, because we're going to need some injections here. The first one is a private guest repository. We'll call it just that, and let me put final on there as well. Put the room repository on here and our reservation repository. Now I'm going to generate a constructor using all of my fields, and then I'm going to create a method called get room reservations for date,
>
> **[2:48](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=168)** and this will take a string of reservation date, and you'll notice it returns a list of our models, so a list of room reservations. So with that, let's set our Java date equal to null. This is going to be a java.[[SQL]].Date. So if string utils is not empty on reservation date,
>
> **[3:19](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=199)** date equals Date.valueOf, and because of the way that we're going to control this, we can just simply assume it's going to come in the proper format, and we'll handle that upstream to ensure that it always comes in as year, year, year, month, month, day, day. So if that doesn't happen, we are simply going to set our date equal to a new date, and we're going to just simply use Java.util.Date,
>
> **[3:52](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=232)** a new instance of that dot get time. Basically, we will set the day to today if one is not passed in. All right, now for some coding work. So we're going to create a map of long room reservation, and we will simply call this room reservations, and we will use a new hash map for that. Now, let's go get our list of rooms, because we always need to display all of the rooms, regardless of whether they're vacant or not. So let's start there. So we will get a list of rooms from this.roomRepository.findAll. So we now have all of the rooms. Now, what we're going to do with these rooms is we're going to do a for each on them and we will put a lambda in here. So for each room, we are going to create a new room reservation,
>
> **[4:56](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=296)** and then we will set on that roomReservation.setRoomId equal to room.getId. We will set the room name equal to room.getName
>
> **[5:15](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=315)** and roomReservation.setRoomNumber equal to room.getNumber,
>
> **[5:24](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=324)** and then to our room reservations, we're going to put from our roomReservation.getId and then the room reservation itself. So we've now created a map based on the room ID, and I should use room number here, not get room ID, sorry. So we've created a map of the rooms with the room reservation already built and constructed. So now that that's done, let's go get a list of our reservations. So reservation, get them all by date, and pass in that date. So we now have all of the reservations for our given dates, so if that is empty, we have nothing else to do, everything's going to be vacant. But if it's not, we've got to go do some work. So let's do a reservations.forEach, and we will simply get a reservation on the Lambda, and within here, the first thing we need to do is to now get from the map our room reservation, so roomReservations.get, and we are going to get based on the reservation.roomId.
>
> **[6:50](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=410)** So now we have a live object that we can do some work with. So let's set our roomReservation.set the reservation ID equal to the reservation.getId and the room reservation set reservation date. We will simply do the reservation.getReservationDate.toString. So now we need to do an optional guest. We will simply just call this guest, equals this.guestRepository.findById, passing it the reservation.getGuestId, and now on our room reservation, we will set the guest ID equal to guest.get.getId, the room reservation.setFirstName equal to guest.get.getFirstName, and then finally, roomReservation.setLastName equal to guest.get.getLastName. All right, now, since that was a live object, we have no reason to set it back on the map, but we can simply return our roomReservations.values.stream.toList,
>
> **[8:21](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=501)** and that will return a list at this point. So everything is good to go. Let's go to our CL runner. We'll go ahead and remove all of this, and we will simply do a room reservation list
>
> **[8:39](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=519)** equals this dot, and we need to have our room reservation service, so let's go ahead and add that real quick before I get too much further, so private final RoomReservationService. Add that to my constructor. And now back here, I can do get room reservation for date, and since we know we have something on a date of 2023-08-28,
>
> **[9:17](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring?u=76281980&t=557)** we should be able to return this. So now we can do our reservations.forEach and do a System.out print line, and now let's run our service. And if we scroll through our list here, you will see all of our rooms are empty except for room number C2, in which Judith Young is staying at at reservation ID of one. So we've now built a service abstraction to handle the complexity of getting all of our rooms on a given day and whether they're vacant or occupied.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5), [[SQL]] (1)
> **Code Identifiers:** roomreservation (5), getid (4), roomid (2), foreach (2), roomreservations (2)
> **CLI Commands:** go build (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **File Paths:** java.sql (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)


### 4. Web Pages with Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the controller](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-the-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-the-controller?u=76281980&t=0)** - [Narrator] The controller is the most central part of the web application strategy with Spring. It is ultimately responsible for responding to web requests, assembling the payload for the response, and delivering it. For webpages, as well as restful web services, Spring levels the model view controller or MVC pattern. This is the fundamental pattern for all [[Web Application Development]] within Spring, as well as many other frameworks that exist today. The model is the data that you serve from within our application. In our case, from the database. The view is the visual display that is populated. Now, usually we think purely of webpages, but I will argue that with [[Representational State Transfer (REST)|REST]], the [[JSON]] structure is the view in the same way that the [[HTML]] page is a view in a traditional web application. And if you look at the way Spring implements it, it looks very much that as the case. The controller not only responds to the web request itself, but it wires the view with the model. Now let's take a look at the typical MVC pattern whispering for web applications. So we start with a controller, and a web request comes into that controller. It then builds a model, and that model is usually assembled from various pieces of data. Sometimes a single piece, sometimes multiple, it just depends on the use case. The controller then determines what the view is, with Thymeleaf, which is what we will use.
>
> **[1:34](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-the-controller?u=76281980&t=94)** It's based on the string of the template name, with JSON and simply a response body. But nonetheless, it determines what the view is. It then sends that to a template engine that is managed by Spring, and that template engine spits out a rendered view that is then in turn returned to the original color. And that is the structure of not only MVC within Spring, but in many other frameworks, as I alluded to, this pattern is used quite often. So let's discuss a few more specific details about the Spring controller itself. Ultimately, it is a Spring bean that is component scanned because it is annotated with @Controller or a stereotype of that. An @Controller is a stereotype itself of @Component. It is then further annotated for the servlet mappings. That's the URL part that we will respond to called a request mapping. This could either be class level or method level, and any method level annotation will append the class level annotation if it exists. Now this will respond to all incoming web requests that it is configured for, and it will output a view for a template engine along with a model or raw data depending on the use case. Now it's time to discuss the final piece when building HTML based web applications, and that is the template engine. Spring supports several of these template engines
>
> **[3:06](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/introduction-to-the-controller?u=76281980&t=186)** out of the box. Thymeleaf is usually considered the most popular. It provides a DSL for HTML, leaving raw HTML documents that can be visualized without data. It also provides placeholders for the dynamic data that are replaced with the data itself during rendering. The rendering occurs in an engine that then outputs the final HTML product. An important note, because I don't believe that Spring does a really good job of making this clear. You don't have to use any of this when building a web application. Technologies like [[React.js|React]] and [[Angular]] can be used just as easily when building a full stack application. And in reality, this is the method I prefer to use today as I've learned more about React.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[JSON]] (2), [[React.js|React]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Angular]] (1)
> **Env Vars:** html (5), mvc (3), json (2), rest (1), url (1)
> **Exercise Files:** template (6)
> **Definitions:** is a  (3)
> **Warnings:** important note (1)
> **Speakers:** - [narrator] (1)

#### [Build your first controller](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/build-your-first-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/build-your-first-controller?u=76281980&t=0)** - [Instructor] Now, it's time to get back into our code and discuss building our first simple controller. So, the first thing that I want you to do is to open up source main [[Java]], and go ahead and delete the CLRunner, 'cause we no longer need that. Let's create a new package underneath the route called web.controller, and to the web.controller, we will create a new class called "WelcomeController." So now, to this class, let's do an @Controller, and an @RequestMapping, and we will simply respond @/welcome. Now we don't need any dependencies for what we are going to do, but we will set up a GetMapping, and on that GetMapping, we will set our produces flag equal to MediaType .TEXT_html_VALUE, and we will do an @ResponseBody, and we will do a public String getWelcome, and we're going to pass that a RequestParam that has a value of name and a required of false, and that will simply be a string name. Now, we are going to set our string greeting equal to "Hello", space, if StringUtils.isNotBlank,
>
> **[1:38](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/build-your-first-controller?u=76281980&t=98)** so if it's not blank, our greeting equals our greeting plus our name. Otherwise, our greeting equals greeting plus "World."
>
> **[2:01](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/build-your-first-controller?u=76281980&t=121)** And now we can simply return an h1 tag, plus our greeting, plus the closing h1 tag. Now, let's go ahead and fire this up, and jump over to our web browser. So, the first thing that I want to do is refresh on the index page to make sure that it still shows, which it does. We will also go to slash welcome, and you'll see we have "Hello World," but if we put a name, it now says "Hello Frank." So, that's the very basics of building a controller.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** getwelcome (1), isnotblank (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Thymeleaf as a rendering engine](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/thymeleaf-as-a-rendering-engine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/thymeleaf-as-a-rendering-engine?u=76281980&t=0)** - [Narrator] Now we're going to.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [Challenge: Create a web page](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/challenge-create-a-web-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/challenge-create-a-web-page?u=76281980&t=0)** - [Instructor] And now it's time for our next challenge for this course, working with controllers. So the instructions that I would like you to follow: First of all, I want you to create a page for room reservations on a given day. Add top-level nav to all pages for Occupancy. And this is really just the room list and the occupancy page itself. Call the room reservation service to get the data. Use a queryParam to pass the date. Default it to today if a data is not passed, which we've already done in the service, but it's nice to have it in the controller as well. And build a table to show the data. If the room is empty, show the [[Microsoft Word|word]] "Vacant," otherwise, show the name. And here's a bonus, a way to change the date without going to the URL bar itself. So maybe a calendar picker with some [[JavaScript]], just to give you a little idea. I'll let you have fun with this and I will be back with my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[JavaScript]] (1)
> **Code Identifiers:** queryparam (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a web page](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/solution-create-a-web-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/solution-create-a-web-page?u=76281980&t=0)** - [Instructor] Now it's time for my solution to this challenge. So the first thing that I did was on the room list, on line 22, I've added a new nav item for our slash occupancy. I then built an occupancy controller that responds at slash occupancy. And to get that occupancy, I pass in a request parem of date, which is not required. I then determine what that date needs to be. So if it is blank, I simply knew nothing. If it parses, I use that. The idea being to get a string of year, year, year, year, month, month, day, day, that can then be passed to build a [[Java]].[[SQL]] date, which is what the underlying method expects. I then set a attribute of date on the model so that I can show which date is being currently displayed, and then I set my reservations based on that method call to return occupancy. Now let's take a look at that [[HTML]] document itself. So most of it looks very much the exact same. You will see here on line 22, I set the active flag to be on the occupancy as opposed to being on the rooms nav item. And if we continue to scroll down, you will see that I actually built my container. So I put a [[JavaScript]] based date picker, so it's not within a form, it's in its own little container here on line 33.
>
> **[1:32](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/solution-create-a-web-page?u=76281980&t=92)** I created a date picker and I have a JavaScript function called handle date. I set the text of that to be equal to the date that comes in from the model. I then build a table very similar to what we did for rooms. One of the differences is on guest, I take and I put a conditional in the time leaf. So if last name does not equal null, then set the name equal to last name, first name, otherwise set it equal to vacant. And then I go down and I do my handle date function. I just inline some JavaScript here. Starting on line 52, I get a value of the picker. I split it at the T because it's going to be an ISO format. That way I get just the year, month, and day. I then pass that back to the URL, which will reload the page as a query parameter, as a search parameter in JavaScript. And that way it will reload the page, which will then trigger the controller once again. So let's go ahead and load this up. All right, so in my web browser, I've got the rooms loaded up. You'll see that I have the occupancy tag here. When I click on occupancy, you will see that I now show the date picker up at the top, and I have all of the data on today's date. Everything is vacant. However, if I set it to August 28th, when I have data, you'll see that the page loads and on the C2 room, Judith Young is staying there, which matches the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Java]] (1), [[SQL]] (1), [[HTML]] (1)
> **Env Vars:** sql (1), html (1), iso (1), url (1)
> **UI Navigation:** scroll down (1), click on (1)
> **File Paths:** java.sql (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Exposing RESTful Endpoints

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding RestController](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/understanding-restcontroller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/understanding-restcontroller?u=76281980&t=0)** - [Instructor] So now it's time to take a look at the other flavor of web applications, the one that I use more than anything else, and that is exposing data through RESTful web services. The RestController, much like the controller for what we just looked at, is the central point of activity for RESTful base web services. Spring uses controllers for RESTful web services, like I just stated. But these are RestControllers instead of just regular controllers. It's just another MVC, but the view in this case is [[JSON]], and the RestController annotation actually adds a response body to every single method. Now, once you understand the paradigm, it's really, really straightforward and I think you're going to find that when we jump in, just how easy it is to build [[Representational State Transfer (REST)|REST]] web services using Spring. Spring handles all of the JSON marshaling and unmarshaling for you. You don't have to do any of it. It's included when you download Spring Web Starter for [[Spring Boot]]. You can configure it to use XML if desired. Not sure why you would, but if you do need to use XML, you can do so. One thing to note, if you are not using Spring Boot, if you're using the raw [[Spring Framework]], all of this marshaling has to be configured because you don't get it for free through autoconfiguration. But other than that, it really is the same regardless of whether you're using Spring Boot or the raw Spring Framework.
>
> **[1:35](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/understanding-restcontroller?u=76281980&t=95)** So let's jump in and take a look at what this looks like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[JSON]] (2), [[Spring Framework]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** json (2), xml (2), mvc (1), rest (1)
> **CLI Commands:** find (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Expose a service layer through REST](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=0)** - [Instructor] So as promised, now it's time to jump in and create a restful base web service. All right, the first thing that I want you to do is to open up source main [[Java]], and underneath the base package we'll create a new package called web exception. And in there we're going to create a couple quick classes. The first one will be a bad request exception. We're going to do a response status on this of bad request. This will extend runtime exception, and I will simply override the four primary methods. And now we're going to do the same for a not found exception, a response status of not found,
>
> **[1:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=60)** extend our runtime exception and override the first four methods. Now this gives us an easy way to throw an exception in the use cases that will translate to an HTTP exception. Now let's create a new package underneath web called API. And in there we will create a Java class. And this will be called the Room API Controller. All right, let's annotate this with @RestController and @RequestMapping and we will respond at /api/rooms. Now we need to have an instance of our room repository and I will bring that into the constructor. Now let's start creating our method. So the first one is a get mapping. It will be a public list of room objects, get all rooms we don't need to pass anything in, and we simply can return this.roomRepository.findAll. Now let's do our add case, so we'll do an @PostMapping. This will be a public room. We'll call this create room, and it is going to take a response body. And that response body will be a room object. Now because I like to be very specific when I do this,
>
> **[2:39](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=159)** I'm going to return a response status of created and we will simply do this.roomRepository.save, and we will save the room and we will return this. And this needs to be a request body, not a response body. Sorry about that. And now we will do a get mapping. And the get mapping at this case will be at id in curly braces. And this will be a public room getRoom. It will take a path variable of name id, which will be a long id, and we will do an optional room equals this.roomRepository.findById, passing in the id
>
> **[3:48](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=228)** if room.isEmpty, so if our room is empty, we'll throw a new
>
> **[3:57](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=237)** not found exception, and I like to be very descriptive about what we are throwing the exception on. Otherwise, we'll return room.get And now we will do a put mapping again at slash id and this will be a public room update room. This takes both a path variable of id, which is a long, and it also takes a request body of type room.
>
> **[4:45](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=285)** Now in here I like to do a check, so if id does not equal room.getId,
>
> **[4:59](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=299)** I like to throw a new bad request exception and simply say id on path doesn't match body, otherwise I return this.roomRepository.save, and we'll save the room. And the final method is a delete method. Again, pass it the id.
>
> **[5:36](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=336)** Public void, pass it the path variable.
>
> **[5:50](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=350)** I also like to have a response status here
>
> **[5:59](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/expose-a-service-layer-through-rest?u=76281980&t=359)** of reset content, and I simply do this.roomRepository.deleteById and pass at the id. Now if I start up my application, and I'm going to jump into the terminal here and I do an http, which is my HTTPie program at local host 8080/api/rooms, you'll see, I return all of the rooms and if I go get room 28, you'll see, I just returned that. Obviously I would love for you to go in and test creating and updating and deleting, but for right now, this is sufficient to give you an idea of how easy and quick it is to create a fully functional, restful web service based on this domain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Code Identifiers:** roomrepository (5), findall (1), getroom (1), findbyid (1), isempty (1)
> **Env Vars:** api (2), http (1)
> **Definitions:** is a  (3)
> **API Endpoints:** /api/rooms (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: RESTful endpoints](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/challenge-restful-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/challenge-restful-endpoints?u=76281980&t=0)** - [Instructor] Now it's time for another challenge. This time for [[Representational State Transfer (REST)|rest]] controllers. So your instructions. You're going to create APIs for the guest domain as well as the reservation domain, and that's it. Remember, status codes matter with Rest, so make sure you're returning the proper status codes. Make sure you're handling those exception cases. If you want to on the reservation, you could expose the date as a query parameter. Might be a great way to even extend that further so you can get more data out of your API. This is just some simple ideas you can do. Of course, you can extend it however you wish, but have fun with it, play around, challenge yourself a little bit and I'll be back with my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **CLI Commands:** make (2)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: RESTful endpoints](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/solution-restful-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/solution-restful-endpoints?u=76281980&t=0)** - [Instructor] So now it's time for my solution to this challenge exercise. This was a pretty straightforward system to go build. So I built a guest API controller. Looks very, very similar to the room controller other than I'm dealing with a guest repository instead of the room repository and guest objects instead of room objects. But everything else looks basically the exact same. Now on the reservation API controller, there's a little bit of difference. Basically it looks the same except for on the get all method, I take a query parameter of date and I use that to filter based on that. So it's really the exact same, just adding that query parameter. Of course, you could add query parameters to all of the get all methods. You could build repository methods to handle all of that. But in this case, this is the only one that I've implemented. Let's go ahead and start this up and give it a very quick test. So the first thing that we're going to do is we will use HT pi and we will go to API slash guests. We get back our guests, of course we can filter it once again by a specific guest, and then if we do reservations, we get back our reservation that's in the system. And we could do the same by going to slash 1. And we could also use the query parameter if we wanted to. But nonetheless, we now have a fully functioning web service along with the web pages.
>
> **[1:35](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/solution-restful-endpoints?u=76281980&t=95)** Those are still running. And to show you that they're still running, we'll go to local host, we still get that index page, which is what we saw before. We can go to rooms and we get all of our rooms. We can also just click on occupancy and load that up. And then of course we can filter it by our date and ensure that that is all still working. And indeed it is.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (1)
> **Env Vars:** api (3)
> **CLI Commands:** go build (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Additional Topics with Spring Boot

[↑ Back to Table of Contents](#table-of-contents)

#### [Test Spring Boot applications](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/test-spring-boot-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/test-spring-boot-applications?u=76281980&t=0)** - [Instructor] The first additional topic that I want to talk about is testing [[Spring Boot]] applications. Now, this is the topic that I have an entire course on in the [[LinkedIn]] Learning Library around test driven development specifically with Spring, and I encourage you to check that out. But I want to talk high level through testing because I think it's important to include in a learning course. So the first topic is [[Unit Testing]] itself. Now, you technically don't even need to use Spring when you are doing unit testing, but if you have specific parts of the framework injected into your classes, there are mocks available for many of those that you can inject as mocks into your unit tests, much the same way that you would do mocking on any other unit test. And you basically end up using a simple strategy using the unit test framework itself. Now, when it comes to our controllers, we've got several key aspects that we can leverage with controllers to do our testing. So there is a Servlet API mocks that we can use to mock against the Servlet API itself. Now this is going to use the entirety of the framework, but does so in a way that allows you to fully test all of your request mappings. There's also a model in viewer that allows you to test webpages and assume that the model is completely populated, as well as the correct view is represented without actually having to go pull the XML from the [[HTML]] page and reading through it.
>
> **[1:32](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/test-spring-boot-applications?u=76281980&t=92)** One of my favorite tools to use is MockMvc, which I use a lot to test restful web services because I can use things like [[JSON]] parsing to go in and look for exact elements in there based on my mocking strategy. And I think it's fair to note that I often use mocks with MockMvc or with any controller test to ensure that I'm controlling the dependencies and doing true testing of the controller. Now, Spring itself has a very, very rich framework for [[Integration Testing]] and one that I highly encourage you to look at if you are doing unit testing and integration testing within your test suite and your build cycle. You can manage the spring IOC container and caching between tests using this technology. You can also use it to provide [[Dependency Injection]] of test fixture instances into your integration testing classes. And finally, you can use it to provide transaction management appropriate to integration testing such that you're not destroying an actual database. And finally, you can use it to surprise spring specific base classes that assist developers in writing integration tests. Now again, my course talks a lot about integration testing, but the documentation from Spring is probably second to none and can be used to really decide how far to take this. Now, some of the areas for integration test support
>
> **[3:07](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/test-spring-boot-applications?u=76281980&t=187)** that I like to discuss is areas like [[Java Database Connectivity (JDBC)|JDBC]]. You can use it to actually do integration testing of your JDBC without mucking with a real database. You also can test your annotations through this integration test support, and you can build specific TestContext that either mimic your parent application context or are specific to the testing being performed. This is a very powerful proposition, especially when swapping out data sources. And of course, MockMvc that we already talked about, technically is an integration test and can be used as one to test your full application suite in an integration test model. Now that's about all I want to talk about with testing, but I do encourage you to spend a lot of time looking through the documentation and reading about it because this is really a area that you can use to level up your game as a developer by building really robust unit and integration tests of your applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Integration Testing]] (6), [[Unit Testing]] (3), [[Java Database Connectivity (JDBC)|Jdbc]] (2), [[Spring Boot]] (1), [[LinkedIn]] (1)
> **Env Vars:** api (2), jdbc (2), xml (1), html (1), json (1)
> **Definitions:** is a  (2), is an  (1)
> **Documentation:** the documentation (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Spring Security basics](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/spring-security-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/spring-security-basics?u=76281980&t=0)** - [Instructor] Now, another area that I at least want to bring up in this course is [[Spring Security]]. And again, this is another topic area that I have an entire course in the [[LinkedIn]] Learning Library dedicated to Spring Security. But let's talk a little bit about what it is and why it's something you should know about going forward. So, Spring Security basics. It is a filter-based authentication and authorization framework that natively works with Spring. In fact, in my opinion, it is so well-built that you could basically turn Spring Security on with [[Spring Boot]] by simply bringing it into the class path. Now, of course, you're not going to get the full robustness of it, but it is very easy to configure with very common patterns, like OAuth 2. It also has some built-in mechanisms around exploit prevention, specifically things like CRSF and other very common exploits that happen at the web application. You're remiss if you don't at least turn it on if you are building a public web application because it really gives you a lot of very simple ways to protect your application. And finally, it has a very robust library support. Do you need LDAP for an internal application? It exists in Spring Security. As I mentioned, do you need OAuth 2? It exists in Spring Security. Do you need simple username and password embedded within your application? It exists with Spring Security. Spring Security is so well-built
>
> **[1:34](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/spring-security-basics?u=76281980&t=94)** that I have yet to find a common use case when I cannot use Spring Security in some way, shape, or form. Things like JWT fronting behind an NGINX controller, got that With Spring Security. I already talked about LDAP and integration with [[Active Directory]]. I've done that with Spring Security. So, highly encourage you to read about Spring Security, take a look at my course on Spring Security. This is a topic area that every developer should know when learning Spring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Security]] (13), [[LinkedIn]] (1), [[Spring Boot]] (1), [[Active Directory]] (1)
> **Env Vars:** ldap (2), crsf (1), jwt (1), nginx (1)
> **CLI Commands:** find (1), nginx (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Other topics](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/other-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/other-topics?u=76281980&t=0)** - [Instructor] The final area that I really want to talk about is some of the other projects within Spring, just to give you some basic exposure. Now, there is no way that I could have a course that wasn't 80 hours long to go through each and every one of these projects, and 80 hours would be a very high level coverage of it. But by doing this, we can at least talk about them, which hopefully will trigger in your brain your next steps of learning. So, let's talk about that [[Spring Framework]]. There are topic areas like Spring Expression Language, something that I talk about in my Spring: Framework in Depth course. This is a very powerful construct that gives you the ability to customize things like properties based on the environment or whatever other conditions you may come up with. AOP, again covered in Spring: Framework in Depth, is a very, very useful tool because you can build common things like loggers that attach to all of your controllers with very little effort. Transaction is something that we did not really discuss in this course other than a cursory discussion. Transaction management is something that you really should look into if you are doing relational database work. More often than not, you do not want auto commit, you want to build rollback segments in case there is an error, and transactions allow you to do that. In addition, Spring framework itself has robust support for i18n. Are you building an application that needs to live in multiple locales where simple things like date formats change and currency changes,
>
> **[1:33](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/other-topics?u=76281980&t=93)** but more importantly, things like messaging changes on the actual webpage. The i18n resource bundles allow you to build translations into your application in a very clean way. There's also full support for [[WebSocket|WebSockets]] if that's something that you need to do. Let's say you're building a messaging application or some sort of a communication platform within your internal application itself. There's also reactive web support. So, we've done traditional web where it's request response, but if you want to do reactive web where there's a pressure valve and it keeps spinning, take a look at the way reactive works with it Spring. There is JMS as well as AMQP, Kafka, and many other messaging protocols that you can use with the Spring framework, something that we do quite often when building asynchronous systems. There are task framework. If you want to make something run at a certain time of the day, or if you want a routine operation that occurs in the background, you can use tasks to do that within the Spring framework. There is full support for caching. If you tie in a memcached server or a [[Redis]] server, you can annotate things with cache annotations that will allow it to be cached in those systems or in memory with very little effort. Now, [[Spring Boot]] itself also offers some additional keys that we did not discuss in this course, but things that you may find useful. The most useful one is Actuator. Actuator gives you a [[Real-Time]] look at your application while it's running.
>
> **[3:07](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/other-topics?u=76281980&t=187)** It's used by things like metric scrapers and observability tools, and can also be used to just simply monitor your application for things like liveness and readiness if you're running in [[Kubernetes]]. There is a robust logging framework. Now, we interacted with it a little bit as we looked at the console logs as our application was starting, but with Spring Boot, you get full activity around logging, customization around what logs and what logs at certain levels, and how those logs are displayed all exist by properties within the Spring Boot framework. And one of the other tools that I like to use quite often is dev tools. Dev tools allows me to change my code. Not only do I not have to restart it, but if I'm using live reload, I can reload those webpage as I'm building them. This is a pretty powerful proposition if you are building full stack web applications, and it's something that I do use on occasion when doing that type of work. Now, briefly, I just want to discuss some of the additional projects that I have used and that I find most useful. This is not a comprehensive list, this is just some of the really high level ones that I've touched. Some of these I have courses on in the [[LinkedIn]] Learning Library. AMQP, I talked briefly about JMS, but AMQP in messaging is very powerful. When you are building distributed systems or asynchronous systems, they have full support for both producers and consumers within Spring. There is Spring Batch. If you are doing batch transactions and you want a batch runner, you can use Spring Batch to do that. In addition, there's Spring Cloud,
>
> **[4:42](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/other-topics?u=76281980&t=282)** something I have a course on here in the Library, that offers many projects from Netflix Open source as well as integrations with cloud providers like AWS, GCP, or [[Microsoft Azure|Azure]]. There's also full [[GraphQL]] support now, so if you don't want to expose [[Representational State Transfer (REST)|rest]]-based web services, but instead want to do GraphQL, you can do that. If you're building a full stack reactive application, you may choose to use GraphQL because it may be a simpler model for you. In addition, there is support in Spring Session. If you need to have session data that is stored within your application server, you can do that with Spring Session. There is also Spring Integration, which allows you to integrate with common enterprise patterns so that you can build robust systems with integrations across your entire enterprise. Again, this is not a comprehensive list, this is just a touch of some of the things that I have used and areas that you may choose to go investigate as you learn more about Spring as you dig deeper into this framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (4), [[Spring Boot]] (3), [[GraphQL]] (3), [[WebSocket|Websockets]] (1), [[Redis]] (1)
> **Env Vars:** amqp (3), jms (2), aop (1), aws (1), gcp (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** find (2), make (1), aws (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/next-steps?u=76281980&t=0)** - [Instructor] So now that this course is coming to a close, I want to talk a little bit about the next steps that you may employ in your journey through Spring, but I want to start with a quick recap of what we've done in this course. So we used [[Spring Boot]] to learn Spring, and we did so for very specific reasons that we discussed. We talked about data access. We talked about inversion of control and service abstractions. We talked about building web pages as well as web services using [[Spring Framework]], specifically in the context of Spring Boot. So what's next? I encourage you to build some small apps. What I like to do is pick a hobby, something I'm interested in, and build an app based on that hobby. Now, it may never be used, but at least I have an interest in the hobby while I'm learning the code so that I'm not trying to force myself to be interested in the topic while I'm learning, so I encourage you to build some little apps that make sense for you. I also encourage you to work through all of the projects. You can use the ones that we talked about in the previous video or anything else that exists because walking through these projects will give you ideas on ways that you can use Spring in your day-to-day work. And, of course, there's more courses. I have many courses on the Spring Framework here in the [[LinkedIn]] Learning library, as do several of my colleagues. There's also a plethora of material online that you can use to get better at Spring. And at the end of the day,
>
> **[1:32](https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/next-steps?u=76281980&t=92)** it's all about doing if you want to get better. I want to leave you with a quick thank you. I know that your time is valuable, and the fact that you have spent your time to learn Spring with me is not lost on me and the importance of that. So with that, my commitment to you does not end when you end this course. If you have questions about this course or any of my courses on LinkedIn Learning, you can definitely reach out to me @fpmoles on Twitter, [[GitHub]], or Stack Overflow. I'm very active in all of those around questions related to Spring or anything else that I make videos on in the LinkedIn Learning library. I also encourage you to ask questions specific to this course in the Q&A section on LinkedIn Learning. I regularly answer those questions, almost daily, but by asking the question there, other learners that may have a similar question can be exposed to it. And at the end of the day, it's about reaching out, not only to me but to the community itself, and find answers to your questions, suggestions for the future, or ways to get better with Spring. But, once again, thank you for your time, thank you for your energy, and I hope that this journey of learning Spring with Spring Boot has not only been worth your time but has helped you learn a new skill so that you can be a better developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (4), [[Spring Boot]] (3), [[Spring Framework]] (2), [[GitHub]] (1)
> **Cross-References:** we talked about (4), we discussed (1), previous video (1)
> **CLI Commands:** make (2), find (1)
> **Documentation:** stack overflow (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Frank P Moley III]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-spring-6-with-spring-boot-3-4465325)

## Skills Covered

- Spring Framework
- Spring Boot

## Path Context

### In [[Getting Started In Spring Development]]
**1 of 5** | [[Creating Spring Boot Microservices]] →

### In [[Getting Started as a Java Developer]]
← [[Java Essential Training- Objects and APIs]] | **3 of 10** | [[Learning JDBC]] →

## Appears In

- [[Getting Started In Spring Development]]
- [[Getting Started as a Java Developer]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Spring- Spring Boot Actuator]] — Spring Framework, Spring Boot
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Spring Boot
- [[Advanced Spring- Application Events]] — Spring Framework
- [[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing]] — Spring Boot
- [[Performance Tuning in Spring Apps]] — Spring Framework

---

[↑ Back to top](#)