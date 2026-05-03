---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: spring-6-design-patterns
url: "https://www.linkedin.com/learning/spring-6-design-patterns"
level: Intermediate
updated: 7/29/2024
learners: 38941
skills:
  - Software Design Patterns
  - Spring Framework
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFQGdUkZfO8Sw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721237079626?e=2147483647&amp;v=beta&amp;t=5bFB8l8VgY96VOcp-GZE8Vfc02dvwRodZtp70LUU00k"
linkedin_topic: Software Development
learning_paths:
  - '[[Building Your Skills in Spring Development]]'
next_courses:
  - '[[Spring with GraphQL]]'
path_nav: '[{"path":"Building Your Skills in Spring Development","position":1,"total":4,"prev":null,"next":"Spring with GraphQL"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/software-design-patterns
  - skill/spring-framework
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Spring%206%20Design%20Patterns.md)

![Spring 6 Design Patterns](https://media.licdn.com/dms/image/v2/D560DAQFQGdUkZfO8Sw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721237079626?e=2147483647&amp;v=beta&amp;t=5bFB8l8VgY96VOcp-GZE8Vfc02dvwRodZtp70LUU00k)

# Spring 6 Design Patterns

> Design patterns empower developers to be as effective as possible as they build software using known patterns for solving programs. Frameworks like Spring can make using these patterns even more powerful. In this course, software developer and architect Frank Moley highlights the most prevalent design patterns used by and in the Spring Framework. Learn about the core patterns in play, as well as h

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns) | Intermediate | 39K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Solving problems with patterns in Spring](#solving-problems-with-patterns-in-spring)
  - [What you need to know](#what-you-need-to-know)
  - [Creating a skeleton project](#creating-a-skeleton-project)
- [**1. Design Patterns and Spring**](#1-design-patterns-and-spring) (4 videos)
  - [What design patterns are](#what-design-patterns-are)
  - [Gang of Four](#gang-of-four)
  - [The patterns of the Spring framework](#the-patterns-of-the-spring-framework)
  - [Inversion of control: The core pattern](#inversion-of-control-the-core-pattern)
- [**2. Creation Patterns in Spring**](#2-creation-patterns-in-spring) (8 videos)
  - [The factory pattern](#the-factory-pattern)
  - [Factory pattern in action](#factory-pattern-in-action)
  - [The builder pattern](#the-builder-pattern)
  - [The builder pattern in action](#the-builder-pattern-in-action)
  - [The singleton pattern](#the-singleton-pattern)
  - [The singleton pattern in action](#the-singleton-pattern-in-action)
  - [The prototype pattern](#the-prototype-pattern)
  - [Prototype pattern in action](#prototype-pattern-in-action)
- [**3. Structural Patterns in Spring**](#3-structural-patterns-in-spring) (5 videos)
  - [The adapter pattern](#the-adapter-pattern)
  - [The adapter pattern in action](#the-adapter-pattern-in-action)
  - [The decorator pattern](#the-decorator-pattern)
  - [The decorator pattern in action](#the-decorator-pattern-in-action)
  - [The proxy pattern](#the-proxy-pattern)
- [**4. Operational Patterns in Spring**](#4-operational-patterns-in-spring) (5 videos)
  - [The repository pattern](#the-repository-pattern)
  - [The repository pattern in action](#the-repository-pattern-in-action)
  - [The template pattern](#the-template-pattern)
  - [The model-view-controller pattern (MVC)](#the-model-view-controller-pattern-mvc)
  - [The MVC and template patterns in action](#the-mvc-and-template-patterns-in-action)
- [**5. Other Framework Patterns in Spring**](#5-other-framework-patterns-in-spring) (4 videos)
  - [The observer pattern](#the-observer-pattern)
  - [The command pattern](#the-command-pattern)
  - [The mediator pattern](#the-mediator-pattern)
  - [The interpreter pattern](#the-interpreter-pattern)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Solving problems with patterns in Spring](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980&t=0)** - [Frank] When solving problems in software, we often encounter the same problems over and over again. As an industry, with lots of help from the gang of four, we have been provided with a lot of patterns of problems, and their solutions. These [[Design Patterns]] are critical to improving your efficiency as a developer. In this course, we will look at several of these design patterns, their importance, and how and when to use them. Hi, my name is Frank Moley. I'm a Software Architect and Developer, focusing mainly on distributed systems and their platforms. Join me in this course to make you a more efficient developer, and learn about Spring Design Patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (3)
> **CLI Commands:** make (1)
> **Speakers:** - [frank] (1)

#### [What you need to know](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=0)** - [Instructor] In order to be successful in this course, there are a few things that you need to know. This course is based on the [[Spring Framework]] for [[Java]]. It will translate well to [[Kotlin]], if you are using it however. Since this is based on Java, you should have a solid knowledge of Java as a language. We'll be using JDK 17 for this course. You should have a JDK installed, not just a JRE. So, make sure that you do have indeed the JDK installed. As far as Java goes, we won't be going too deep into the language, especially the newer features. So, a good baseline knowledge of Java is sufficient, but it is needed. But don't worry if you're only using, say, Java 8, for instance. For work, you'll be fine with that baseline. This is a course based on Spring, but we aren't going to be going too deep into the framework itself. You should have a basic understanding of Spring. If you need to build some understanding or just want to brush up, consider taking my course here in the library learning Spring with [[Spring Boot]] 3. The [[Design Patterns]] we will discuss are based on [[Object-Oriented Programming (OOP)|object-oriented programming]]. You should have a strong background in OOP concepts. Knowing basic design patterns is very helpful as well, but not a requirement, because we're going to introduce them to you, but you will get a little bit of a headstart,
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=94)** if you've already at least seen them, use them, or heard about them. Now, that we've got the base figured out, let's jump into the design patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Design Patterns]] (3), [[Spring Framework]] (1), [[Kotlin]] (1), [[Spring Boot]] (1)
> **Env Vars:** jdk (3), jre (1), oop (1)
> **CLI Commands:** make (1)
> **Versions:** java 8 (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Creating a skeleton project](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=0)** - [Instructor] So now we're going to create a quick skeleton project to be used throughout this course. The first thing I'd like you to do is to navigate to start.[spring.io](https://spring.io). Now, there's several ways to do this. Many modern IDEs have a plugin you can use, but I'm going to walk you through the web way here real quick. Select Maven. Select [[Java]] as your language. Use the latest version of [[Spring Boot]]. This course was designed for 3.3.0, but there's nothing that really should change with what we're going to do. Set your group to com.lil, or anything else that you want to use. We'll create an artifact. We will simply call this spring-demo. Go ahead and select Jar. And make sure that Java 17 is your version. We're going to add one dependency, and we'll add some more later if we need them. But for now, that's it. Go ahead and click Generate. Now, this is going to create a skeleton project, and it's going to actually put this into your Downloads directory. So now I'm going to jump into my terminal. And right now, I am in my working directory where I'm going to put this project. And I'm going to simply do an unzip from my Downloads, the spring-demo.zip -d ./, and that will download that into my current directory. So now if I do an ls -la, you'll see that I have that project there. So let me do
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=95)** a command to open up my IDE. You'll see that I have my IDE open, and if I open up the project, you'll see that I have several folders here. I have Maven installed. So I'm going to go ahead and delete some of these files. And I also have a gitignore at my root, so I will delete that as well. And you now have a skeleton project up and running that we can use throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Spring Boot]] (1)
> **CLI Commands:** make (1), unzip (1), ls (1)
> **Env Vars:** ide (2)
> **Versions:** 3.3.0 (1), java 17 (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)


### 1. Design Patterns and Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [What design patterns are](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980&t=0)** - [Instructor] This course is about the [[Design Patterns]] 2 for the [[Spring Framework]]. 3 But using design patterns has an implied understanding 4 of what design patterns actually are, 5 and why we care about them. 6 So let's level set on this knowledge for now. 7 Let's talk about design levels from a very high level 8 concept to begin with. 9 They essentially are best-practice solutions 10 for common problems. 11 Seldom in software do we truly have a unique problem. 12 As such, we can utilize design patterns 13 to handle these common problems. 14 They are primarily presented in both the original inception 15 and in this course from an object oriented 16 programming perspective. 17 Design patterns do exist outside of OOP 18 and often look similar where there is crossover. 19 But we will focus on the OOP perspective. 20 Most often, they're presented as the problem, 21 then the solution and application 22 or implementation of the pattern to solve the problem. 23 Many of the patterns also prescribe how 24 and when to use them, again, 25 as part of solving the common problem. 26 So you may be asking yourself, Frank, 27 why do we care about these? 28 Well, you should definitely care, 29 and I'm going to give you a few reasons 30 why I believe this to be true. 31 First, and probably most importantly, is the ability 32 to provide common solutions to common problems. 33 Why recreate the wheel? 34
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980&t=95)** It works as it is. 35 Now, you may have some innovative idea to improve it, 36 but very few of us do so 37 and just use the same wheel like humanity 38 has since its invention. 39 These design patterns are very similar in concept. 40 Additionally, once you learn the patterns, 41 you can use them over and over again. 42 Honestly, if you learn how to do something 43 properly to begin with, 44 your ability to use it and actually save time 45 and energy becomes very real and tangible. 46 You also aren't experimenting with routine work. 47 These implementations are proven many times over, 48 so you can just simply leverage them 49 and save your experimentation and innovation 50 for areas that are much more appropriate to your business. 51 And while some people don't care 52 what others in the industry do, 53 I believe having a watchful eye to what the industry does 54 and taking the best parts from it to improve your quality 55 and efficiency are worth the effort. 56 And design patterns are a clear winner here. 57 So we talked about why you should care. 58 Let's focus a little bit on the value it has to you 59 as a developer and your company. 60 These patterns are trusted and well-tested. 61 This makes not only the delivery of the solution easier, 62 but also the general care and feeding. 63
>
> **[3:08](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980&t=188)** That is to say, testing and maintaining it much easier. 64 Because you don't have to recreate the solution 65 to the problems over and over again, 66 you get to market faster, which is generally accepted 67 as a best strategy for delivering features. 68 Because you use common patterns, 69 it's actually easier to explain your code 70 to other developers. 71 And it's easier for you to read 72 and understand your code later on, 73 which really helps when you need to add features 74 or find a bug somewhere, 75 because we all know those are going to come.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (7), [[Spring Framework]] (1)
> **Env Vars:** oop (2)
> **CLI Commands:** find (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### [Gang of Four](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=0)** - [Instructor] Out of respect for their work and because no design pattern conversation can be had without talking about them, we need to pay a little time to talk about the Gang of Four. So let's start by talking about who they were. Erich, Richard, Ralph, and [[John the Ripper|John]] are the Gang of Four. They were computer scientists and authors, and they wrote the probably most quintessential book that we need to know about. And that was "[[Design Patterns]]: Elements of Reusable Object-Oriented Software". In my opinion, this is the book that changed OOP and really defined everything that we take for granted about it. It introduces [[Object-Oriented Programming (OOP)|object-oriented programming]]. Both the good and the best part is they also talked about the bad. They focused on common OOP concerns, many of which we take for granted today. Some of these things like programming to an interface instead of an implementation, or composition of objects over inheritance of objects, and use of generics and parameterized types are all things that they talked about in this book. These design patterns, however, filled most of the content of that book. And of course, that's what brings us to this course. Now, they broke their patterns up, and the first breakup that they did were what they called the creational patterns. And these were so-called creation, because they create objects on your behalf.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=95)** The abstract factory and the factory are probably the two most common patterns that anybody thinks about when it comes to design patterns, and those are creational patterns. In addition, the builder patterns, something that we see quite often, not only in Spring, but in other aspects of [[Java]], again, is a creational pattern. And then the singleton and prototype patterns. Again, throughout Spring, we will talk about that these exist. These are also creational patterns. Now, there are several behavioral patterns that they also talked about. These behavioral patterns focus on inter-object communication. Things like the command, interpreter, mediator, iterator, and observer patterns are all behavioral patterns. In additionally, things like the chain of responsibilities and visitor patterns, things that you may have heard about, very common things that we see within the [[Software Development]] environment, and things like memento, state, strategy, and template. And if you've ever used Spring, templates should start ringing a bell, because we use the template pattern all over the place in Spring, and we're going to talk about that in this course. There's also some structural patterns that exist within this book. These focus on object composition and the interfaces around those. So things like the adapter pattern, the bridge pattern, the composite pattern are structural patterns that we see throughout many aspects of software development, including Spring.
>
> **[3:10](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=190)** The decorator pattern, often called the annotation pattern today, but the decorator pattern is definitely a structural pattern as well as the flyweight pattern. The facade and proxy. And proxy is another one of those that is all over the place in Spring, and we'll talk about that. But facades we use quite a bit when we are doing surface abstraction. Again, part of these structural patterns. So I've sort of bridged the gap a little bit about what the relationship is with these design patterns to Spring, but let's talk just a touch more. Spring itself inherently uses many of these classic patterns in order to do its job. Spring also provides native support for using some of these in your code, and we're going to talk about those throughout this course. Probably doesn't need to be said, but I'm going to say it anyway. And that is that Java is an object-oriented language, and since Java is an object-oriented language, these design patterns apply to Java. The framework was built on Java, therefore, these patterns apply to Spring, as well. So this is sort of the juxtaposition that the [[Representational State Transfer (REST)|rest]] of this course is going to come from. We've got design patterns, we've got Spring, how do they interact, how the Spring use them, and how do we build on these to build better software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (6), [[Java]] (5), [[Software Development]] (2), [[John the Ripper|John]] (1), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** oop (2)
> **Exercise Files:** template (2)
> **Speakers:** - [instructor] (1)

#### [The patterns of the Spring framework](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=0)** - [Instructor] So, of course this is a course on the [[Design Patterns]] of the [[Spring Framework]], so I want to briefly run through the patterns that we're really going to focus on throughout this course. But before we do that, we want to briefly talk about the patterns of the framework, but don't worry too much about understanding them now, as I'm going to run through each of them in much more detail. But for now, just some quick points. That being said, Spring itself is based on, designed using, and encapsulates some very common design patterns. Design patterns are so ingrained in the framework itself that almost everything you do using the framework is consuming one or more design patterns. In addition, the framework itself works using those patterns and supports your use of design patterns throughout. The inversion of control pattern is central to Spring. As Clark W. Griswold says in "Christmas Vacation," "That's the big one," because everything you do with Spring is impacted by the IoC container. The entire runtime of the framework is based on inversion of control. Some of the benefits we get from this includes improved testability, decreased coupling, and enforcing coding to an interface when it makes sense. The next big one that comes to mind is the proxy pattern. Since Spring 4.0, every object managed by Spring is proxy. This brings some major caveats to the operation of Spring,
>
> **[1:36](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=96)** which we will talk about, but it also allows addition of behaviors that we leverage throughout the framework, and this is really where its power comes from. Now, the factory pattern is the most known design pattern that exists. In fact, the IoC container itself is a factory in Spring. This is heavily leveraged at startup, as well as runtime operations of Spring. But, there is first class support in a couple different ways for using factories in your code with the IoC container itself. Now, the singleton and prototype patterns exist throughout Spring because most of your objects configured for Spring leverage one of these two patterns. The singleton is the most popular in the default behavior, but it is not a traditional singleton implementation. It does work the same when it is used in conjunction with the IoC container, and we'll talk about that a little bit more. As I alluded to before, if you've used Spring, the template pattern is something you've seen a lot. It's often used with remote calls. In fact, this is how we do remote calls, things like [[Java Database Connectivity (JDBC)|JDBC]] template, [[Representational State Transfer (REST)|Rest]] template, and many others are using the template pattern. It's also implemented by third parties with their Spring libraries to remove boilerplate code for using their tooling. Again, a very important aspect of Spring is removing the boilerplate.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=189)** So when you take that, mix it with a pattern designed to do that, you've now got to a recipe for success. And the model view controller pattern, or MVC. The entire web framework is based on this. Both traditional web pages, as well as restful services all rely on the MVC when contained within Spring. Now, this is not a classic pattern, but it is very, very important in Spring as well as all different view technologies, things like Web, Rest, et cetera. MVC just makes sense. So with that quick rundown, we're getting ready to jump into our first pattern in-depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (5), [[Representational State Transfer (REST)|Rest]] (2), [[Spring Framework]] (1), [[Java Database Connectivity (JDBC)|Jdbc]] (1)
> **Exercise Files:** template (4), boilerplate (2)
> **Env Vars:** mvc (3), jdbc (1)
> **Definitions:** is a  (2)
> **Versions:** 4.0 (1)
> **Speakers:** - [instructor] (1)

#### [Inversion of control: The core pattern](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=0)** - [Instructor] So now it's time to dig into our first major pattern, and this is the heartbeat of the [[Spring Framework]] as a whole: inversion of control. So what is inversion of control? First and foremost, this is not a Gang of Four design pattern. It is, however, a very useful pattern, obviously, because Spring used it. It's an architectural pattern for relegating control of dependencies to the container instead of relying on the developer doing it themselves. This is a very important consideration in the way that Spring works, as well as the way that the pattern operates. Oftentimes, you'll hear this sort of behavior called [[Dependency Injection]], but the reality is dependency injection is one flavor of IoC, not necessarily the other way around. So let's talk for a minute about how it actually works, you have a central container, and that central container, in this case, the BeanFactory constructs and maintains all object references throughout the lifecycle of the application. It then hands those to other objects configured by the container when needed. Most of the time, this occurs at startup, but it can occur at runtime as well. This provides centralized control and management specifically around object references and object lifecycle
>
> **[1:33](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=93)** throughout the lifecycle of the application. So let's talk a little bit deeper about IoC in Spring. Spring itself manages all of your dependencies. In fact, you should never allow Spring to manage a dependency that you then create through a new command. The reason for that is once you do new, you no longer are in IoC and Spring is no longer managing your dependency, which can lead to problems. Objects that are created by the container are injected at runtime, not compile time. Now, what that means is you build a reference to the interface and interact with it, but you don't actually create or construct that object in your code. You do it through the IoC configuration. An object accepts the dependencies for construction instead of you actually constructing them. By doing that, the actual handle to the creation is maintained by the IoC container. Again, in this case, the BeanFactory. So there are some real tangible benefits of IoC. First of all, it reduces noise in your code. You no longer have new commands scattered throughout your code as you are creating new instances of objects only to have to pass them around from class to class. This in turn reduces the object coupling.
>
> **[3:07](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=187)** You start coding to interfaces instead of concrete implementations of the object because you never created outside the IoC, therefore, you're coding to its interface. This also reduces the defects that arise from incorrect construction. Think about how many times you may have copy and pasted the construction of an object only to find out that in this new use case, something has to be a little bit different. But more importantly, we don't have to deal with memory problems that can arise even though [[Java]] people will tell you doesn't have pointers, it clearly does. We have a null pointer exception. You can get in trouble in your code in these call by reference situations. Therefore, by allowing the IoC to handle the construction and pass that object handle to your use case, you kind of reduce those defects that can arise from this incorrect construction. Now, what we actually work with is not the BeanFactory in Spring. We work with the ApplicationContext, which is something that extends the BeanFactory interface. But the Spring ApplicationContext and ultimately the BeanFactory underneath it is the IoC container. We as developers will only work with the ApplicationContext, however, as a wrapper to the IoC container. Now, another pattern in play, and I've talked about it a couple times here, is the factory pattern, but we're going to talk about that later,
>
> **[4:39](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=279)** and that specifically is around the BeanFactory. Just know that when we talk about IoC and we're talking about the ApplicationContext, we can be talking about it in two flavors. We can be talking about it from the IoC context like we are now, or we can talk about it from the fact that it's a factory. It is a BeanFactory that we're going to talk about here in a little bit. But nonetheless, at the end of the day, the IoC, though it's run by a factory, is all about inversion of control and that really is the power of Spring as a framework as a whole, as well as your interaction with it as a developer. Now, all of this is handled through configuration. Configuration comes in many [[Forms]], it can come in auto config, it can come in component scanning, it can come in java config, and in some older legacy code, it can actually still come from XML config. XML is still supported even though it's not advised. But all of this configuration is how we impact the BeanFactory and the IoC container and tell it how to manage the dependencies and ultimately the injections of those dependencies into our beans that we are working with in our code. Now I've thrown quite a bit at you and it's really a deep concept. I'm going to encourage you, if you feel even a touch lost at this point, to go check out my course [[Spring Framework in Depth]], where we get really deep into how this ApplicationContext works and what it means to actually be part of it in a Spring lifecycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (2), [[Dependency Injection]] (2), [[Java]] (2), [[Forms]] (1)
> **Env Vars:** xml (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)


### 2. Creation Patterns in Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [The factory pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=0)** - [Instructor] Now, we will discuss possibly the most well-known pattern that exists throughout all of [[Design Patterns]]. And that is the factory pattern. Let's start by talking about where it is used within the [[Spring Framework]]. We just alluded to the fact that the BeanFactory, the core of the IOC container is ultimately a factory. It serves concrete classes constructed at startup to other objects created at startup or during runtime as part of the inversion control process. The factory being interface is a generic or templated interface that is used to encapsulate object construction logic when that logic has special considerations or is non-static. Otherwise, you could just use a factory method, a little bit more on that later. But there's a couple different ways that factory manifests itself within spring. The factory pattern and its adjacent factory being interface are leveraged heavily by the framework, as I alluded to, just the IOC container itself leverages it. So, let's talk about the actual pattern. Now, we're not going to go so deep into the pattern that you fully understand it, but I do want to talk at a nutshell level what the pattern entails. A factory allows construction of similar classes of different types using a factory method. The method call creates the object for you and ultimately serves it back to you
>
> **[1:36](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=96)** when you call this factory method. Constructed objects are from classes that share an interface or parent class. So, we have the pets, we've got dogs and cats, they share a common pet interface, and the factory can serve either canine or feline to us because they have that common lineage. So, what are the problems that we're trying to solve with the factory method? First of all, it allows you to not worry about class construction in more than one place. If I have to create a dog and create a cat, and then create another dog, I've got to think about that logic, and it may get scattered throughout my code, which tends to increase the risk of errors. By using a factory, we can encapsulate that construction and simply say, "Give me a dog, give me a cat," and it will do that knowing that it shares a pet. And as a matter of fact, as we're going to talk about here in a bit, we actually can reference all of that abstractly. It also allows you to leverage the interface for repetitive operations. Again, back to our dog and cat scenario. When we code this, we may actually code to the PET interface and allow the factory to just serve the appropriate concrete implementation. A week later, we may decide that we want birds in our factory, and by doing this, we don't have to change because we've coded to the interface, we only encapsulate the factory method to service a bird. Now, this lack of object construction
>
> **[3:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=192)** not only cleans up the code, but as I alluded to, it makes copy and paste errors less likely, because I don't have this construction littered throughout my code base, instead it's encapsulated in one spot. Outside of spring, there is a distinct strategy that we often use to create factories. The first, and this is very important, you will always do better if you code to an interface, otherwise, what's really the purpose of the factory other than encapsulation, you're kind of missing a lot of the value if you're coding to concrete implementations. You create that common interface. You then create one or more classes that gives instances of the interface, and I say one or more because there is an abstract pattern with this. The implementation of the concrete classes from the interface will then allow us to serve them out of the factory. So, we still need the concrete classes and they simply implement the interface. Now, I alluded to this abstract factory pattern, and this is really a level of advancement that we see on the factory pattern as a whole. This kind of takes that pattern one step further and makes your code even more abstracted in a way that you're dealing with interfaces. It really becomes a factory of factories! It adds this level of abstraction that becomes powerful if you have a bunch of types that also themselves have a bunch of types,
>
> **[4:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=285)** because now I can say, "Give me a pet," and it will know, not only do I want a canine, but I want a Labrador as we traverse that inheritance layer. Now, that's all we're going to talk about with the factory pattern, but let's jump into how we would do this in spring outside of the raw [[Java]] use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (1), [[Spring Framework]] (1), [[Java]] (1)
> **CLI Commands:** cat (3)
> **Env Vars:** ioc (2), pet (1)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Factory pattern in action](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=0)** - [Instructor] So now it's time to take a look at the factory pattern in action from a spring application. I want you to navigate to your IDE and open up your project and source main [[Java]] and we're going to create a little bit of scaffolding before we get into this. So let's create a new package called Controller. And in our controller we'll create a new Java class called AppController. We will simply annotate our app controller with [[Representational State Transfer (REST)|rest]] controller. And that's all we need for the moment. There will be more later. So now let's create a new package called Factory. And in our factory we will create a new interface called Pet. Now we're going to throw a couple methods on here. So we will do a void on set name. It will take a string called name. We will do a string on getname. We will do a Boolean on ishungry and we will do a void for a method called feed. And finally we will do a string on getType. That is the interface that we will use for our factory. So now let's go create a concrete class and we will create a concrete class called Dog. This will implement our pet interface. Let's go ahead and set those methods up. Now we need to maintain a little bit of state in our class.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=95)** We'll have a private string called name and a private Boolean called hungry. Set name will be this.name = name, Getname will return this.name isHungry will return simply hungry. Feed will set hungry = to false and get type will return capitalized Dog. Now we do need one more piece here. We need to go ahead and put a constructor on this. The constructor will set hungry = to true and that's our concrete class. So let's go ahead and create our factory. So we create a Java class and this Java class should be named PetFactory. You generally use the interface name as your factory name. This will allow spring to component skin this class and actually load it into the application context. We need a method that will return a pet called createpet and it will take a string of animal type. Now most likely you're going to do this with an enumeration, but for right now this is just fine. All right, so if not string utils has length on animal type. So if we don't have any length, we will simply throw a new
>
> **[3:11](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=191)** unsupported operation exception that says animal type must be specified. And then we are going to do a switch statement on that animal Type.toLowerCase. We will do a case for dog and in this case we will return a new dog. And then we will put in a default case that in this time we'll throw a new unsupported operation exception, which says unknown animal type. Alright, we now have our factory done. Spring will use the Create Pet method as the factory method itself. So now let's go and actually go back to our controller and we're going to expose this so we can test it. So we'll do a post mapping on adoptpet/type/name.
>
> **[4:17](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=257)** And this is a public pet. We'll call this method adoptPet. It has a path variable of String type and a path variable of String name. I missed a curly brace, so let me go fix that. So now before we implement this, we actually need to have an instance of our pet factory. So we will do a private final Petfactory called Pet Factory. We'll go ahead and add that to a constructor so it can be injected in. And now for our method implementation. So we will create an instance of a pet and this will come from the petfactory.create pet. So we now are going to call this directly as a factory method. We will do a pet.set name = to our name value.
>
> **[5:17](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=317)** We'll do a pet.feed and we will return our pet. Now let's go ahead and run our application. And I'm going to pop up in a terminal window here directly in my IDE. Now I have a tool called HTT pi. You can definitely do this with Curl or you can actually do it in your web browser if you want. But what I'm going to do is I'm going to do a post on HTTP using that HTT pipe tool, local host 8080/adoptPet. It will be a dog rover. And what happens now is we have returned an instance from our API of a pet who is no longer hungry because we fed them. It is a dog whose name is Rover, and that was using the factory pattern. So of course if we would've have a cat, we would do a cat concrete implementation added to our factory method. And we are now good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** ide (2), htt (2), http (1), api (1)
> **Code Identifiers:** adoptpet (2), gettype (1), ishungry (1), tolowercase (1)
> **CLI Commands:** cat (2), curl (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)

#### [The builder pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=0)** - [Instructor] Now we're going to talk about one of my favorite patterns, the builder pattern. It's because I love to chain methods, and that's what we get to do with the builder pattern itself. Let's talk a little bit about where it's used in Spring first. So it's used in various places throughout the framework. ResultActions is one that I use often, and it's part of the MockMvc framework that you can use when you're testing your [[Representational State Transfer (REST)|REST]] endpoints. That result action is a builder implementation. As a point of note, Lombok also has an @Builder annotation. Now, this isn't really Spring, but it really tends to be embraced, especially by those of you that use Lombok. So if you didn't know it existed, now you do, and it's an easy way to implement a builder if you are also using Lombok. Let's talk about the pattern a little bit in a nutshell. So each method returns the object reference it's called from. The build method returns the fully constructed object. Functionality can be combined into one class, but usually it's not done that way since it often requires static. So we actually build two classes. One is the concrete implementation. One is the builder. We leverage the builder, and we can never construct the concrete class, the initial class outside of that builder pattern. That tends to be the safest way to do this, and that's part of the reason we want to do it. So now let's talk about those problem statements. This is very useful
>
> **[1:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=93)** when object creation has many parameters. It becomes increasingly more useful when some of those parameters or all of them are actually optional. So we would have to call a bunch of setter methods after we created the object but not all of them. You now start to see some value from this builder because you could just chain the calls and get an object out of it. It can make your code easier to read because of reduced lines for construction when compared with setters. However, chaining methods can also be harder for some people to read who aren't used to it. So take into account the rest of your engineering team. I alluded to this already, but part of this ability of having optionals and requireds and having all of this encapsulated in a builder is it provides a level of safety that we don't see with just raw object creation. So how do we go about actually building a builder? We start with the base class, and this base class usually, if not always, has an all args constructor. We then create a builder class with attribute and setter for each argument of the base class. Each setter, however, returns a handle to the builder that it is called from, not the class being constructed. Then you create a build method that ultimately will construct and return that base class.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=189)** So let's jump in and take a look at how that operates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Env Vars:** rest (1)
> **Speakers:** - [instructor] (1)

#### [The builder pattern in action](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=0)** - [Instructor] So as I said, the builder pattern is one of my favorites of all of them to use just because I like the elegance around it. And I'm going to show you the way that I learned how to create a builder, and then you can see one possible way. The thing about a builder is there's probably three or four different ways that you can actually implement this. Again, this is the way that I learned and that's what I'm going to show you. So I want you to navigate over to your IDE and in your base package, let's create a new one called "builder." And in here, we're going to create a new [[Java]] class, and that Java class is going to be called "Contact." Now, one of the beautiful parts about the builder is we can actually make the object that we build immutable, and that's what we're going to do. So we're going to create a private string, first name, last name, and email address. Now, we're going to create a private constructor on our contact, and it's going to take all of our attributes. And now, our email address. Now, you'll notice that we've got some notes here, and that's because I can actually make these final. Again, contributing to the fact that this becomes immutable. Now, we're going to go ahead and generate the getters on all of these real quick. And now, within this class, we will create a public static class,
>
> **[1:36](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=96)** called "Contact Builder." And just like we have up here, we are going to create some attributes. So private string, first name, private string, last name.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=118)** Now, we're also going to create a private constructor on this to create our contact builder. Now, to this, we will add a public static contact builder get instance,
>
> **[2:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=140)** and this will return a new contact builder. Now, we will go ahead and generate our setters for this class, but there's a caveat to the way that we do this. We're going to replace the void with an instance of the contact builder itself. So we're going to actually now return a handle to the contact builder as a return to each of our setters. This will allow us to chain these as we use them. So now, that we've returned the handle on all of our setters, now it's time to do our final, which is going to do a public contact, and traditionally you just call this method "build." And what this will do is this will return a new contact where we pass in "this.firstname," "this.lastname," and then "this.emailaddress." And our builder is actually done. So let's jump over into our controller so we can actually use this. So we will do a post mapping on contact, and this will be a public contact. Create contact. And this is going to take a request param that has required set to false for a string of first name.
>
> **[3:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=237)** And I'm going to copy this part and paste it to do last name. And then, we're going to do it one more time with a string for email address. And... Need to put the type of this. And to make this a little easier to read, I'm going to go ahead and carry that over. So now what we will do is we will do a return, contactbuilder.gitinstance.setfirstname,
>
> **[4:40](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=280)** and that will be from the first name value, "set last name," from the last name value, and then "set email address" from the email address value. Now, of course, at this point, we will build it. This is a little bit trivial because you would never really do it in this way. I'm just using this as an illustrative purpose of how you might go about the builder and how it might be used. In the real world, this would be something you would just do a instance of the contact, you would create it, and pass no values in where they apply. Again, this is just for illustration purposes. But let's go ahead and run this so that you can see it actually in action. And if you want to walk through it, you definitely can debug as you're doing that. So now, we're going to do an HTTP using our HTTPie application. We will do a post to 8080/contact, and I will simply say "lastname==Moley," and indeed it built that object and then returned it afterwards. Again, a little bit of a trivial example, but you've now seen how to use this to do a builder pattern in a way that it is immutable and private so that there is no way to create this object, this contact object, outside of the builder itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **CLI Commands:** make (3)
> **Env Vars:** ide (1), http (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [The singleton pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=0)** - [Presenter] Now the singleton pattern is the next pattern that we are going to discuss, and there's a big deviation in the singleton pattern in [[Java]] and the singleton pattern in Spring, and that's because of the way that the IOC container manages all of its dependencies. And we're going to talk about those differences. So first of all, how is the singleton in general used in Spring? The reality is, is that every bean, by default, is a singleton. And that's something you really have to understand when you're dealing with state on the objects that you define as bean because they are singletons. Now, again, as I alluded to, this is not a classic singleton. However, within the context of the IOC, these beans behave the exact same as a singleton. Again, refer back to what I just said about being cautious of state on these beans because you will have concurrent threads possibly using them. And that brings us to our thread safety. Beans involved in the IOC container must be written in a way to be thread safe or you will run into issues. And that thread safety does exist across all singletons, which is why a Spring singleton bean needs to be treated as though it's a traditional Java singleton. So let's talk about the pattern itself in a nutshell. So the class itself stores a reference to itself, and that is how you maintain the singleton apparatus again, in the traditional Java world. The constructor is treated as private.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=95)** There is no way to get to construct the object outside of a getInstance method that is static. And that getInstance method returns a reference of self.instance, or if it's not constructed, it will construct one again in a thread safe manner. And there's a lot of argument on how much locking around that instance is sufficient in order to be thread safe. But there generally is a rule of thumb, a strategy that we can use in Java to ensure that this singleton is as thread safe as we need to be. Again, all of this kind of goes out the window when you're talking about this from a Spring perspective. So there is a big difference and it is worth really digging into and understanding. New itself is never called on the class outside of the, again, instance method, again, because that constructor is private. So when would we want to use a singleton? Anytime you have expensive object creation, think about a handle to a database. There's a lot of overhead that goes into creating that connection. And many times that connection can be shared, especially with a pooled situation across all of your use cases in your application. So many times, things like this become singletons and all of the state is handled in a thread-safe manner. You also want to do it when you need to control concurrency associated with the shared resources.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=189)** In storing static state for multiple parts of the application, this state itself has to be maintained in a thread safe way, but you don't want to have multiple instances of that state. Otherwise, it is not truly static because each of those objects maintains a handle to its own individual state. So these are times when a singleton really adds value. So let's talk about how we would create this in the Java world. In the Java world, you create your class and then you create a private constructor on it. You then create an instance handle as an attribute of the class. You then create a static getInstance method that synchronizes on the object to reduce your thread safety risks. Then you check if the instance is null. If it is null, you create an instance. If it isn't null, you simply return the instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6)
> **Code Identifiers:** getinstance (3)
> **Env Vars:** ioc (3)
> **Definitions:** is a  (3)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [presenter] (1)

#### [The singleton pattern in action](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=0)** - [Instructor] So, now I'm going to show you the singleton pattern in action, and we're actually going to do this a little bit different. We're going to do it from the traditional [[Java]] way, as well as the Spring way. So, I want you to navigate over to your IDE and in your base package, once again, we will create a new package, and we will call this one singleton. And let's create a new Java class, and we will simply call this SingletonA. Now, to this we will add a private static instance of SingletonA called instance. And then we will do a private constructor on it, and we'll simply call super. And now we'll do a public static method that returns an instance of SingletonA called getInstance. And now we're going to do a little bit of locking. So, if null equals instance, we will now do a synchronized on SingletonA.class. And then once again we're going to do a null check. This will allow us to maintain some level of thread safety. Now, some IDEs like IntelliJ are going to give you a warning that you're doing double locking, which is technically dangerous. I've never had an issue doing this, but there are several ways to roll this out in modern Java. This does work, however, just fine. So, in this case we will do instance equals new SingletonA.
>
> **[1:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=98)** And then after this if statement we will return our instance. Now, let me show you how to do this in the Spring way. So, we're going to create a new class called SingletonB, and all we're going to do is we're going to mark this with that component. That way it gets auto-scanned by the framework and gets loaded into the application context. Now, keep in mind, this still needs to be maintained with some level of thread safety because this now is a singleton in Spring, and I'm going to prove to you that it is. So, let's jump over to our test package and go to our default test. The first thing we're going to do is we're going to autowire an instance of SingletonB called singletonB1. And then we're going to do the same thing, but create an instance called B2. So, now let's do our @Test method, and we will simply do a public void testSingleton. So, now let's do an instance of SingletonA called singletonA1 equals SingletonA.getInstance. We're going to do it again, but instead we will call it A2. Now, we're doing this for demo purposes. If I were doing this for real I would not be autowiring instances into a class, and I definitely would not be testing more than one thing in a test method. But for demo purposes this is just fine. So, let's bring up our Assertions library from Jupiter,
>
> **[3:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=194)** and we're first going to say that we are NotNull. And we're going to test A1, and then we will do the same but we will test B1. Now, this just says that they've been created. We're now going to do another assertion to assert that they are the same, but what we are going to test first of all is singletonA1 and singletonA2. And the assertSame method determines that they are the same object, they're the same memory location, and that's what we're looking for. A singleton should be treated as the exact same if it is done properly. You don't get a new instance. So, now all we need to do is actually run our tests. So, we'll go ahead and run the tests, and I'm expecting to see two pass. The first one loads the context. The second one will actually test the singleton, and let's take a look at that. You'll see that it did test, it passed. So, we now have created a singleton in the pure Java way, and then through Spring we did the same thing. We got two handles to that object, that singleton object, and then we proved that both of those were the same. And that is the purpose of the singleton.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4)
> **Code Identifiers:** getinstance (2), singletona1 (2), singletonb1 (1), testsingleton (1), singletona2 (1)
> **Warnings:** warning (1), keep in mind (1)
> **Env Vars:** ide (1)
> **Tools:** intellij (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The prototype pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=0)** - [Instructor] The last creation pattern that we're going to talk about is the prototype pattern. So prototypes are used in Spring in several ways. Beans, specifically, have to be marked as prototype because when they are, they are treated as such. So as opposed to a singleton, marking them as a prototype makes them a prototype bean. However, it acts very much the same way that a singleton did in our last example, where the [[Java]] format was a little bit different than Spring. In this case, it's the exact same in Spring that they are different in the way that they work in native Java versus Spring itself. So in Spring, the bean configuration is used as the prototype. You don't actually create an instance of it. It is used as the template, so to speak, or the prototype for how to build the instance. New instances are created, not cloned, and in the traditional Java world, you would clone them when they are needed by the runtime. So let's talk about the pattern a little bit more from a nutshell perspective. A class is created in a prototypical manner. Again, there's a template, there is a structure, and that is used to create an instance of the class. The instances cloned at runtime to give new instances that are not the prototype, but act the same and have the same state. So let's talk through that a little bit. What you do in the Java world is you clone an instance of an object.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=94)** Therefore, it has the exact same state as that which you clone from. But it is itself a new instance, and that's what the prototype is giving you. And in Java, this is usually done with the cloneable interface. Now, remember, everything in Spring is a little bit different, as I just said. In Spring, we don't have to go through all of this to get a prototype itself. Prototypes are typically, in fact, I've never seen them any other way, they're typically deep clones of the object to maintain safety. And that's an important thing to remember when you're doing a clone that has nested objects underneath it. Those must also be cloneable. So why would we do this? The biggest reason is when object creation is expensive, but the wrapper needs to be unique, meaning that there is state, but that state needs to be uniquely maintained. It's useful for the objects that must act thread safe, but need to store state that is not itself thread safe. That way, we get different instances of the state and we don't have to worry about them being thread safe, but they must act such to the outside world. This also provides cost savings on object creation. Again, these tend to be things that are expensive that we want to use the prototype for. So how would we go about creating these? You create an abstract base class that implements cloneable. You then extend that class with your prototypes themselves, and then you override the clone method to provide class-specific behavior.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=189)** Now, be sure to clone sensitive sub-objects to prevent these threading issues. Again, this creation strategy is the Java instance. When we are in Spring, we don't have to go through all of this, and I'm going to show you that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Prototype pattern in action](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=0)** - [Narrator] So now we're going to look at the prototype in action, but we're going to do so only from the Spring perspective, not throughout [[Java]], because quite honestly, creating a prototype is a little bit of work in Java. And the purpose of this course is [[Design Patterns]] in Spring. So we're just going to focus on that example. So I want you to jump into your IDE, and in your base package, create a new package called Prototype. And the first thing that we are going to do is create a new Java class called Prototype. We will mark this as that component. And then we are going to add a scope. And the scope that we are going to add is Prototype. And we will now create a new class called NotPrototype. And on here we will just do @component. So now let's jump into our test. We're going to do some auto wiring here again. Prototype A called protoA, and we will do prototype again called protoB, and we will do an autowired on NotPrototype called notProtoA. And one more we will do autowired on NotPrototype, notProtoB.
>
> **[1:29](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=89)** All right, so now let's do our test. So public void testPrototype, and we will go back to our assertions library, and let's do the assertSame on the NotPrototypes. Now these are singletons. We've seen this before in the previous set of videos. Therefore this should be true. There should be no question, because these are NotPrototypes. Therefore, they should be the exact same instance, because they are singletons. However, we need to also now prove that they are not the same when dealing with the prototype objects themselves. So we will simply do a test that those are not the same. So we'll go ahead and run our test suite, and we should get three passes when we do this. And indeed, we have three passes. The reason that this happened is because we marked that scope as prototype. Spring uses it as a template to create an instance when you need it, not necessarily serving it directly from the BeanFactory, instead just the definition of it from configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Design Patterns]] (1)
> **Code Identifiers:** protoa (1), protob (1), notprotoa (1), notprotob (1), testprototype (1)
> **Env Vars:** ide (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 3. Structural Patterns in Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [The adapter pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=0)** - [Instructor] So the next pattern that we're going to talk about is the adapter pattern. Within Spring we see adapter used mainly within Spring Integration when dealing with channel adapters for communication with different systems. And this is a great example of when the adapter pattern can be used because you're treating different things the same. So it's used in internal operations of AspectJ as well, and it is used during load. So let's talk about the pattern a little bit within a nutshell. So, two different interfaces share a common operation. Again, thinking back to the channel conversation of Spring Integration, it's exactly what we're trying to do. We want to treat two different things the same because they share that common operation. So an adapter is nothing more than a wrapper class that is created that holds an instance of one interface, but implements the other. That way we can treat them the same. The shared operation of the wrapper interface is implemented to call the shared operation of the wrapped interface. Let's talk about why we would do this. One of the most common reasons is you have legacy or third party code that you need to fit into your existing code base using existing patterns within your code. The shared functionality on disparate objects to reduce code and reduce code complexity by adapting them to behave the same you can treat them the same within your code,
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=94)** even though they're fundamentally very different. Coding the interfaces in routine workflows is very common, and leveraging adapters reduces the code while improving readability by treating those different types the same. So how would one go about creating them? It's actually relatively straightforward. So you start with two interfaces that share a common method. You implement both of them with concrete classes. However, you then create a wrapper class that extends one of those concrete implementations, but has an instance handle of the other. The implementation in the adapter calls the instances method that looks the same that shared method across disparate interfaces.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The adapter pattern in action](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=0)** - [Instructor] So now it's time to take a look at an adapter in action. So, let's go back to our base class, and let's create a new package called adapter. And the first thing we're going to do is we're going to create a new interface. We will simply call this Apple. Now, Apple's going to have two methods. The first one is going to be getVariety, which returns a string, and the second method will be simply a void method called eat. Now, let's create another interface, this time called Orange. And Orange is going to have a method called getVariety that returns a string. It's going to have a void called eat, a void method called peel, and then a void method called juice. Now we are going to create a new [[Java]] class, and this one will be called AppleAdapter. Now, our AppleAdapter will implement the Apple interface, however, it will also have an instance of Orange on it. Let's go ahead and create our constructor that takes our Orange object, and then we will implement our methods, and get variety.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=94)** We'll return this.orange.getVariety, and our eat method, we'll simply call orange.peel, and then orange.eat. So, you can kind of think about this logically. An apple, you can just take it and eat it. An orange, however, you have to peel first before you can eat it, and this is an example of why the adapter is so good. We can change behavior even though we're calling the same method. So now, let's go ahead and finish up our adapter situation. We are going to create a new Java class, and this one will be called MoroOrange. And as you might've guessed, this is going to implement our Orange interface. Let's go ahead and implement our methods on it, and we will return a Moro Blood Orange. On the eat, we will simply say System.out.printline. Moro gets enjoyed, and we will do a System.out.printline on the peel method that says Moro gets peeled. And we'll go ahead and add a System.out.printline, Moro gets juiced. Now, let's jump down into our test,
>
> **[3:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=195)** and we will simply do an @Test method, public void testAdapter. Orange orange equals new MoroOrange, and then Apple apple equals new AppleAdapter that passes the Orange interface that happens to be an instance of the Moro Orange. And now, we'll do a System.out.printline on apple.getVariety, and we will do an apple.eat. Let's go ahead and just run this test.
>
> **[4:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=245)** And we'll go ahead and bring that up, and you'll see, as we did that, we created our Moro Blood Orange. That was the variety of it. When we called eat, it got peeled, and then enjoyed. That's the power of the adapter in action. We treated it like an apple, even though it was an orange.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Code Identifiers:** getvariety (4), testadapter (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [The decorator pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=0)** - [Instructor] So now it's time for the Decorator pattern. The Decorator is used quite a bit within Spring because the framework itself uses decorators, especially around things like component scanning. Injecting decorated objects is difficult, however, in Spring, because of how bean references work. The use of qualifier annotation becomes required because Spring only allows you to have instances of a class once unless you qualify it and then inject it. So let's talk a little bit about the pattern in a nutshell. So what it's used for is to add responsibilities to an object dynamically at runtime. It's promoting composition instead of inheritance, because by decorating an object, you are adding or composing properties to it instead of inheriting from something. An inherited base class composes new behavior and responsibilities by becoming additive, otherwise known as decorated. This allows an object to be open for extension and closed for modification while still adding responsibilities. Think about that, open for extension, but closed for modification. Yet I can still decorate it to add those responsibilities. So why would we do this? Again, you want to promote composition over inheritance. That's a pretty standard practice in [[Object-Oriented Programming (OOP)|object-oriented programming]].
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=94)** This gives you a way to do that cleanly. It also allows you to add behavior to your code without modifying the code. And in doing so, it allows you to support non-breaking changes. I don't have to modify the class itself, so everyone who consumes it doesn't have to deal with the changes. But I can decorate it to add behavior that I need. It can also be used to remove behavior through encapsulation via that decoration. So now let's talk about how you would create a decorator in [[Java]]. You start with a base abstract class. You then build the Decorator abstract class, extending the base class itself. You then build decorators that extend the Decorator abstract class. Those decorators then maintain an instance of the base abstract class with constructor injection, and you can now use those decorators throughout your code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Java]] (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [The decorator pattern in action](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=0)** - [Instructor] So now let's take a look at our decorator pattern in action. I want you to navigate to your IDE and go to your base class, and once again, we will create a new package called Decorator. In that package, let's create a new [[Java]] class and we will call this Pizza. We are going to make this class abstract. We will have a protected_String called description, and then we will do a public_String.getDescription that returns this.description. We would do a public abstract BigDecimal called getCost and that's all we need on that. So now let's create a new class. This one will be called ThickCrustPizza. This is going to extend our Pizza abstract class. We will put a constructor on it. We will call super and we will do this.description = "Thick Crust Pizza."
>
> **[1:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=83)** So now we need to implement our method of getCost. We will simply return bigDecimal.valueOf and we will pass in 15.00. Now let's go and create our decorator and our decorator will be called PizzaIngredient, and this once again will be an abstract class and it is going to extend Pizza as well. And it will have a public abstract String getDescription
>
> **[2:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=128)** and one more, we will call this one Pepperoni. And this is a concrete class and it will extend Pizza ingredient. Let's go ahead and put a constructor on there that takes a pizza. We will call super and this.pizza = pizza. Of course, we need to have a private handle to our Pizza.
>
> **[2:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=168)** Now let's go ahead and implement our methods. We will return this.pizza.getDescription +,
>
> **[3:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=183)** and we will simply add + pepperoni.
>
> **[3:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=191)** And now on our getCost method, we will do bigDecimal.valueOf. We will add $1.50 for the pepperoni. .add and then this.pizza.getCost. All right, we have everything set up to actually do our test, so let's go to our test package and we will simply add another test, and that test will be public void. Technically we don't need the public. Old habits die hard, so we will test our Decorator. All right, so Pizza pizza = new ThickCrustPizza
>
> **[4:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=244)** and we'll simply do a print line on these to do our pizza.getCost
>
> **[4:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=257)** and our pizza.getDescription. And now we will do a pepperoniPizza
>
> **[4:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=272)** and we will pass it our pizza object itself. And then once again, we can do our system.out.println on pepperoniPizza.getCost.
>
> **[4:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=295)** pepperoniPizza.getDescription. Now here's where we start to actually see the power of this. So now we're going to create another instance of pepperoni and we're going to call this one doublePepperoniPizza, and that's going to be a new pepperoni. But instead of passing it a pizza, we're going to pass it our pepperoniPizza. So now as we go through and do the work on this, you will see that it's going to actually decorate it. So system.printout.println, our doublePepperoniPizza.getCost, and system.out.println, our doublePepperoniPizza.getDescription. So now let's go ahead and just run this Decorator test in isolation, and let's take a look at the output. So our first one was our thick crust pizza. It cost us $15. We then decorated it with pepperoni. It now costs 16.50 and you see it as a thick crust pizza plus pepperoni. Then we decorated it with yet another pepperoni. It now became an $18 pizza of type Thick Crust Pizza with pepperoni and pepperoni yet again. We've now decorated our object and that is the Decorator pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** getcost (7), getdescription (6), pepperonipizza (4), doublepepperonipizza (3), bigdecimal (2)
> **Versions:** 15.00 (1), 1.50 (1), 16.50 (1)
> **UI Navigation:** go to (2), navigate to (1)
> **CLI Commands:** make (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### [The proxy pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=1)** - [Frank] If you've ever used Spring since 4.0, you've been using The Proxy Pattern and you may not have even known it. So let's talk a little bit about The Proxy Pattern itself. As I alluded to, every bean that you create gets a proxy around it since Spring 4. Additional proxies are added usually through annotations during the operation of Spring, and this is how we add behavior to things outside of the beans that we create. Creating proxy in Spring usually revolves around aspect-oriented programming. Now, if you're doing native compilation with GraalVM, you can't really use aspect-oriented programming, so you're losing some of the behavior that we used to have. However, if you're still targeting traditional deployments, you can still use aspect-oriented programming, therefore you can create proxies at will. If you want to learn a little bit more about aspect-oriented programming, check out my course, "Spring: Framework in Depth" to give you more details as well as the way that proxies are handled. Let's talk about the pattern itself in a nutshell. So the purpose of it is to use an intermediate object in place of a real one, and we do that to not only protect the real object, but also add value to it. The intermediary controls the instantiation and access to the real object. That intermediate can add behavior to it, but you must understand what is going on,
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=94)** and this can get you in trouble with things like at transactional, because when you are wrapping an object, you now lose the ability to go through that intermediary when you call a method from within another method of that class. So you must understand what's going on in order to leverage that proxy behavior. So why would we do this? Usually it's around expensive operations needed to be protected and only called when needed. A great example is the transactional annotation that we have in Spring. It adds transactional behavior. Setting up transactions tends to be more expensive than not using them with database operations. The behavior needs to be added to a method when it is called in a specific situations. This is really important, because we don't always need that behavior added. So when we do, the proxy can help us get there with little to no code. And remote object access is another time that we tend to use proxies, again, from a protection perspective. So let's talk about how we create a proxy. You start with an interface, you then create a real object to extend that interface. You then create a proxy object to extend the interface, and you keep a handle on the concrete implementation of the real object. You then create the object, add behavior, and any other protections that are needed.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=189)** Now, from an implementation perspective, when doing spring development, seldom if ever would you use a raw [[Java]] proxy. With Spring, you would leverage AOP as I stated before. Again, the caveat being if you're doing raw VM and native development, you're not going to really be able to use aspect oriented programming because of the way that it traditionally works. Some common examples are @Transactional, @Cacheable, and there are many, many others. They tend to always be annotations that you add to a class within the [[Spring Framework]]. Now, because you don't normally do this, and you only do it through aspect-oriented programming, we're not going to actually walk through the implementation. I do have an example of doing aspect oriented programming in the course I mentioned, "Spring: Framework in Depth," but I'll leave that to you if you choose to go that route. The really important thing here is to know that proxies exist within Spring and they add behavior, and you must understand that layered approach when you are calling methods from within a class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Spring Framework]] (1)
> **Env Vars:** aop (1)
> **Versions:** 4.0 (1)
> **Definitions:** is called (1)
> **Warnings:** caveat (1)
> **Speakers:** - [frank] (1)


### 4. Operational Patterns in Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [The repository pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=0)** - [Presenter] The next pattern that we're going to talk about is the repository pattern. Now, within Spring, it is primarily an aspect of [[Spring Data]]. In fact, most of Spring data is based in some way, shape, or form on the repository pattern outside of standard [[Java Database Connectivity (JDBC)|JDBC]]. Spring JDBC can be used to also create repository actions, however, usually you just use something like Spring Data JPA or use Spring Data Mongo, depending on your database technology. The repository RestResource adds a RESTful web service on top of a raw repository, making it even easier to expose data services when there is no domain based data action. So let's talk about the pattern in a nutshell. First of all, this is not a Gang of Four pattern, but it was introduced in, "Domain-Driven Design," by Eric Evans. Simple operations of an entity or business object without knowledge of other entities, as you would traditionally see with the DAO. This allows us to go to the database, get an entity, and only work with that entity instead of dealing with joins. Under the abstraction, the data access operations are hidden from the end user. In fact, with Spring data, you don't even have to implement anything in order to do this, all of the access operations are hidden. So why would we do this? The primary reason we would do this is the [[Databases]] have often become the bottleneck, especially with dealing with Join Syntax.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=95)** Preventing your data access logic from leaking into your business logic, or even worse into your presentation logic, is another reason that you would use this pattern. This provides you a layer of abstraction to hide those internals and keep them well encapsulated. You can also focus on a single business object at a time, and by doing so, you actually reduce the complexity of the code and you handle it all in a very heads up way in your code instead of passing it from layer to layer to layer, often transacting across a database. And when you have stored procedures involved, it's even worse. So how do we do this? In Spring, you simply start with the repository interface, or you create your own interface using generics. You then define the common data access methods that you will need outside of those standard given to you by the repository interface. You then apply your business object to a repository instance and leverage the data access logic all underneath the hood. In fact, it's based on the name of your method, there is no implementation. The nice thing about the Spring data repository is when you do have special logic that you need to apply, you can still do so, and the repository interface will graciously get out of your way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Data]] (6), [[Java Database Connectivity (JDBC)|Jdbc]] (2), [[Databases]] (1)
> **Env Vars:** jdbc (2), jpa (1), dao (1)
> **CLI Commands:** mongo (1)
> **UI Navigation:** go to (1)
> **Warnings:** heads up (1)
> **Speakers:** - [presenter] (1)

#### [The repository pattern in action](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=0)** - [Instructor] So now it's time to take a look at the repository pattern in action in a [[Spring Boot]] application. The first thing that I want you to do is to go to the data folder in the exercise files and pull out the schema and the data dot [[SQL]] file. And you are going to copy those into source main resources. Now that those are there, let's open up the palm file and we're going to add a couple dependencies. Now, it's important to note, I'm not going to give a deep dive here into [[Spring Data]], but it is something that you can get from my Learning Spring with Spring Boot 3 course, as well as several others of mine here on the [[LinkedIn]] Learning Library. So we're going to go ahead and add Spring Boot Starter JPA, and we're also going to add the H2 database. Go ahead and run Maven to get what you need from your Maven repository. All right, the next thing that we need to do is go to our application dot properties file, and we need to set a property for Spring JPA, hibernate DDL auto and set it equal to none. This will allow our schemas to take over instead of the repository entities that we will create. So now let's create a new package in our base package and we will simply call this repository. And within there we will create a new [[Java]] class and the Java class will be called President, Entity. All right, so let's annotate this with
>
> **[1:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=97)** that entity from Jakarta dot Persistence. And we will put a table value in here with a name equals to president. And now we are going to do an at ID, an at generated value, and at column with a name equal to president ID. And then we'll do a private long ID and we're going to repeat this for the [[Representational State Transfer (REST)|rest]] of our entity. Now if you want to see what we're doing, you can open up the schema dot SQL file and you'll see the definition of what we are doing.
>
> **[2:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=140)** So now that we've entered all of our attributes, let's go ahead and generate a getter and setter for everything. And just for simplicity, we will also generate a two string method. All right, now that our entity is done, we will now go define our repository. So to do that, we'll create a new interface called President Repository. This extends the CRUD repository. Now there's several you can use. We're going to use the CRUD repository right now. And it is a generic, so it takes a president entity and a big L long. And we're going to add one method to this. So president entity find by email address, and you simply pass it an email address. So now let's take a look at how we are going to test this. We're going to go ahead and open up our test class here, and we will auto wire in an instance of our president repository. And now we will create a test.
>
> **[3:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=230)** And in our test, we will simply do a system dot out, dot print line, this dot president repository, dot find by ID, and we will simply pass it a one. And now we can run just this test and you'll see it actually returned a value from our database. Now we've used an embedded database. We've done a very simple method, but this is really how easy it is to use the repository to get access to data with doing very little coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[SQL]] (2), [[Java]] (2), [[Spring Data]] (1), [[LinkedIn]] (1)
> **Env Vars:** sql (2), jpa (2), crud (2), ddl (1)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The template pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=0)** - [Instructor] The next pattern that we're going to talk about is the template pattern. Within Spring, templates are used quite a bit. They're used primarily for remote system calls within Spring. It provides for common behavior that spans across concrete implementations, usually again, of remote calls. They share similar behavior across remote calls, as well through the way that the templates themselves are structured. Some common examples are [[Java Database Connectivity (JDBC)|JDBC]] template, JMS template, [[Representational State Transfer (REST)|Rest]] template, and many, many more. So, let's talk about the pattern a little bit in a nutshell. The idea behind a template is common boilerplate operations are hidden in a base class. Common flows are captured in overarching [[Algorithms]] with abstract or default methods for the variant code that is not common among the different versions of the template. Concrete implementations handle those variant code and extend the base class. So, what's the problem here that we're trying to solve with the template pattern? Often, common code paths lead to code replication. Templates on the other hand, encourage the DRY principle or don't repeat yourself, and encourage reuse. Oftentimes as well, these complicated code paths that are repetitive are error prone, and this error prone code can be solved once and then reused over and over again. Common task semantics can be templatized
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=94)** to reduce the cost of implementing new versions of them. This is really powerful when you look at JDBC template, where you have to go and create a connection, get a [[Cursor]], execute your operations, and then close that connection. So, how do you go about creating templates within Spring? You would create a base abstract class. The good thing, most of these have been done for you. You then define a template method and implement the algorithm, extracting the shared code paths into abstract methods. You usually will mark your template as final. Then, you create a concrete implementation that implement the abstract methods from the base class. Again, it's important to note that Spring pretty much provides the large majority of these that you will use. So, very seldom do you create your own templates, but it is really good to understand how they operate, as well as how they were originally created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java Database Connectivity (JDBC)|Jdbc]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Algorithms]] (1)
> **Exercise Files:** template (10), boilerplate (1)
> **Env Vars:** jdbc (2), jms (1), dry (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [The model-view-controller pattern (MVC)](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=0)** - [Instructor] The next pattern that we're going to talk about is the Model-View-Controller pattern, also known as MVC. Within Spring, this is the core pattern for all Spring web activity. It's used as well for RESTful web services. It's used for traditional [[HTML]] pages, and really, if you think about these two, they're really the exact same. A RESTful web service simply takes data and converts it into a [[JSON]] view. A traditional HTML page does the same thing. It takes HTML markup, merges it with data as appropriate and displays it as text. That's where we get into the fact that MVC is more than just web pages from a Spring perspective. Let's talk a little bit about this pattern in a nutshell. The key value here is that responsibilities are broken into three distinct components. You have the model that delivers the data to the view. You have the view that renders the experience to the consumer, whether that's an HTML template or a JSON or an XML document. Then you have a controller that populates the model, selects the view, and merges them together through some kind of a template engine or a marshaller. So why do we do this? Primarily, it improves developer efficiencies by separating responsibilities. Many times, the people creating the HTML are not of the same skillset
>
> **[1:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=93)** as the developers doing the services to render the data. As such, we can actually break this work up and let them each work in their own area. This also allows for dynamic and multiple view selections within the same controller using the same model and a view can be modified without modification to the business logic. So if you think about this, as you build out a layered approach, your data axis can be handled in an encapsulated way, your business logic can be handled in an encapsulated way, and ultimately your view can be handled in an encapsulated way. And by using the MVC pattern at the presentation layer, we can separate those concerns and keep them well encapsulated so the data doesn't leak across those boundaries, nut more importantly, so the business logic or the logic of that layer doesn't leak into adjacent layers. And the model ultimately returns raw data unformatted for future consumption. It doesn't matter what the view technology is, the model is the same. In fact, you can leverage this in the way you build your controllers themselves. So how do we go about creating these? So first of all, if we're going to do HTML, we need an engine to engage the template. So we need to pick Timely, for FreeMarker, whatever templating language we're going to use, we need to bring an engine into the picture. Then, you go and you create your view.
>
> **[3:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=187)** Usually this is spected from a UX team when we're dealing with HTML, or it's defined by an API spec if we're doing RESTful web services. Then you create the model. What is the data that you need to populate that view? Then you create a controller. That controller's responsible for calling all of the underlying business services to populate the model and return it with either the view name or a marshaller when it's in web service world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[JSON]] (2)
> **Env Vars:** html (7), mvc (3), json (2), xml (1), api (1)
> **Exercise Files:** template (3)
> **Documentation:** spec (1)
> **Definitions:** known as (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [The MVC and template patterns in action](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=0)** - [Instructor] So now we're going to take a look at both the MVC and template patterns in action from a very simplistic perspective. Once again, I would encourage you if you want to get deeper, go check out my course, "Learning Spring with [[Spring Boot]] 3". All right, the first thing that we are going to do is we're going to go into our actual application class and we are going to do an at bean annotation and it will be an instance of RestTemplate that we will create. And we simply are going to return a new one so that we can inject it into our controller. Let's go into our app controller and we'll go ahead and reuse what already exists. The first thing that I want to do is add a private final president repository instance to this and we will add that to our constructor. And now we are going to add an instance of RestTemplate. And once again, we will inject that into our constructor so that spring can handle the dependencies. So let's go down here and let's create a couple methods. So the first one we're going to do is we're going to do a [[Git]] mapping and that git mapping is going to respond at president/id. So now let's go do the method signature. So it's going to be a public president entity, find president by ID, and it has a path variable
>
> **[1:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=98)** of type long called ID. And we simply will return this.presidentrepository .findbyid, passing at the ID and then doing a git on that. Now what this is doing is it's going to return a president and because by default we get a [[JSON]] mapper, it's going to convert that into a JSON document. So let's go ahead and do another git mapping. And this time we are going to do this on presidentcontact/id, and we will once again do a public method. This time it will be a contact getPresidentContactbyid
>
> **[2:25](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=145)** and we will pass an A path variable of type long that is an id. Now we will do a president entity. Now to do our president this time, we're going to use the RestTemplate and we are going to call getforentity. We are going to do that at [http://localhost](http://localhost) 8080/presidents/id.
>
> **[3:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=183)** It will return a presidententity.class. We will pass it the id and then we will get the body of it. So now we will return a contact builder.getinstance .setfirstname equal to the president.getfirstname .setlastname equal to the president.getlastname .setemailaddress equal to our president.getemailaddress, and then we will ultimately call build on that. So now that that's all said and done, let's go ahead and run our application. Now I'm going to go ahead and pop up in a terminal. I'm going to do an HTTP on 8080/presidentcontact/15.
>
> **[4:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=249)** Now, what's actually gone on here in this method, we called into this function, which used a RestTemplate to call another web service that we were also exposing, a little bit overkill, but it's for demo purposes. It then used the builder pattern to build a contact, which it ultimately returned. And all of this was wrapped in JSON because that was the view technology chosen because this is a RestController.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (4), [[JSON]] (3), [[Spring Boot]] (1)
> **CLI Commands:** git (4), find (1)
> **Env Vars:** json (3), mvc (1), http (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** getpresidentcontactbyid (1)
> **URLs:** [http://localhost](http://localhost) (1)
> **Tools:** terminal (1)
> **Exercise Files:** template (1)


### 5. Other Framework Patterns in Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [The observer pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=0)** - [Instructor] So we're going to talk about a few more patterns within the [[Spring Framework]] just because you should know that they exist and that they're used by the framework itself. The first of those is the observer pattern. Within Spring, the application listener interface observes the application context for changes. Part of the core IOC container. JMS message listener can be looked at as an observer of some sort. Let's talk a little bit about the pattern in a nutshell, an object called a subject maintains a list of observers. Notification is sent to observer when state change occurs within that subject, the observer or observers can act on notifications if it applies to them or simply ignore it. So why do we want to do this? First of all, it reduces coupling in code paths, especially in one to many dependency situations where you have one action triggering multiple things. Objects state changes can have downstream effects that need to be decoupled from the main flow. This is really important when you're dealing with large scale systems. You also may have a need to dynamically register those downstream observers in a way that the code path itself doesn't change, but new observers can come online or take themselves offline.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=95)** So how do you go about creating these? First of all, you need to create the interface for the observer. You then create a subject interface, and it needs to have two primary methods. One is for registering, and one is for unregistering. Those take an observer object, and then you also need to have a notify function that can be part of several different paths. Sometimes it's as simple as just a method to notify. Then you implement interfaces in concrete classes as needed. So each observer type is simply an implementation of that interface for the different business logic that needs to occur. Then you leverage observable or observer in jave.util and you're good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (1)
> **Env Vars:** ioc (1), jms (1)
> **Speakers:** - [instructor] (1)

#### [The command pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=0)** - The next pattern that we're going to talk about is the command pattern. In spring, things like runnable instances usually implement the command pattern. The abstract command controller in MVC is another example of the command pattern. So what is this command pattern? It provides an abstraction layer on request processing scenarios. Process calling action gets a common interface instead of the underlying implementations. This allows implementations to be changed without the calling code making any changes. So what does this really mean? It means we have some function that is going to get executed, and then it executes this command that the underlying implementations respond to in the appropriate way. This provides a structured processing layer without having to have a lot of code coupling and a lot of code in your main path. So what's the problem statement? The biggest one is to reduce coupling during these command type scenarios. I have something that happens and it needs to trigger something based on some code rule. This allows behavior also to be added without modifying the calling code because we simply can add more command responses when that command exists. So your mainline code generates the command and nothing else has to change. We don't have to start branching our logic in the main path. It also allows multiple implementations
>
> **[1:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=93)** of the command to exist without modifications to the caller. Again, you simply add to the command stack when the command is generated, any of those implementations or all of them can be triggered. So how do you go about doing this? First of all, you create your command interface. Then you have an execute method on that as well as a revert method. You create command implementations that act on specific objects within your system. Then you create a calling method that uses that command interface, and that's about it. It's a pretty straightforward pattern, but it does what it's supposed to do. You have a command, you have a response, you have a command, you have two responses. You have a command, you have 10 responses. It doesn't matter, because you simply add another implementation to that command stack.

> [!info]- Semantic Content
>
> **Env Vars:** mvc (1)
> **Speakers:** - the (1)

#### [The mediator pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=0)** - [Instructor] The next pattern we're going to talk about is the Mediator pattern. Within Spring, the Dispatcher serverlet used by Spring MVC is a mediator. It's often used as well when setting state of various components at once. So I need to set the state of multiple things with one operation. I can use a mediator to do that. So what does this pattern look like in a nutshell? The mediator provides encapsulation on one or more objects' behavior. Communication channels, therefore, flow through the mediator, who then allows its mediated classes to do work. It's another concept of one pathway through your code, and then fanning out as needed. Mediated classes do not communicate with each other, only the mediator, reducing the overall coupling of the system, but having them follow a common pathway. This is really important because you don't want them interacting with each other and modifying state. You want the mediator to handle all communication through it. Sure, you could look at it as a potential bottleneck, but the reality is by building this encapsulation, you're reducing the complexity and allowing the code to actually be readable, maintainable, and ultimately, more performant. So what's the problem that we're dealing with? It basically reduces the exponential growth, or the potential for exponential growth of inter-object communication.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=94)** Think of the spiderweb. When you have 10 objects, all of which communicate with each other from some activity. By using the mediator, we can control that flow and reduce the net. It also reduces tight coupling between these interacting objects. If all 10 of those objects communicate with each other and they all have interfaces that they're implementing, and they all have consumption of those interfaces, that spiderweb becomes a coupled mess. The mediator reduces that coupling. They all code to an interface. The mediator handles it from there. This makes interaction flows between objects, not only more resistant to change, but also cleaner and easier to read and easier to interact with. So how do you go about creating a mediator when you have these scenarios? You start with the mediated interface. Those are the things that are actually being mediated by the mediator. Then you create the mediator interface with a registration method for the mediated objects, as well as all of the structured commands that you need to mediate. Then, you create concrete implementations for all of this. And in your structured commands, you mediate behavior to all of the mediated objects as appropriate. So all of the complexity lives in one place
>
> **[3:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=187)** and all of the communication channels live within that mediator.

> [!info]- Semantic Content
>
> **Env Vars:** mvc (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The interpreter pattern](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=0)** - [Presenter] The final pattern that we're going to talk about is the interpreter pattern. Its use in Spring is relatively limited, but very powerful, and that's with the Spring Expression Language. The interpreter pattern is a relatively straightforward one. The use cases are limited, but often it's within user input that we find these use cases. The idea here is that input must be parsed and converted into specific commands or functions. The expressions are deemed terminal or non-terminal to determine if there is any future parsing. So what's the problem statement? We have a way that we need to take user input in a variety of formats and interpret it into some sort of a machine function. This prevents the ultimate commands from becoming littered with expression, determining logic. We want the commands to be simple, we want the code to be simple, and we put all of the complexity into this interpreter. Context-aware interpreters can mix and match to call an end result based on the situation. So how do you go about creating these? You create an interface for an expression, then you create concrete expressions to evaluation. Then you create terminal and non-terminal implementations of expression interfaces. Finally, you create a parser
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=94)** that allows expression logic and ultimately calls the end result. Now, that looks relatively straightforward, but believe me, doing linguistic processing at this level, even with a strong DSL, does take a lot of work. This is not a pattern to be taken lightly, but it is a pattern that you should have in your tool belt if you ever do need it. And hey, we see it all the time, with Spring Expression Language, it's a very powerful tool added into the [[Spring Framework]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (1)
> **Tools:** terminal (4)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** dsl (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=0)** - [Instructor] So now that we've talked about a wide variety of patterns within the [[Spring Framework]], you may be asking yourself what is next? But before we get there, let's recap what we just did. So we learned about general [[Design Patterns]] and the Gang of Four. We really focused on the major patterns within the Spring framework itself. We learned about the patterns and how to implement the ones most commonly used, both within and outside the framework, with a bias towards the way that they're used within Spring. Then we discussed why to use them, as well as how. Now the first thing that I would suggest to do next is study the patterns. I presented you just a small subset of the global design patterns, the ones really focused within Spring, but there are so many more, both at the code level and at the systems level, so you really want to spend some time and study them. You really want to focus your time and your energy on the most common ones for your business domain. I recommend the use of what I call kata exercises. This is where you build a very simple piece of code to exercise these methods in your brain. Just like with karate, the more you do it, the more you understand. It doesn't matter how trivial the kata is, what is important is that you are using repetition to reinforce using the pattern to solve a real problem. Then learn how to use those patterns when writing code in Spring.
>
> **[1:36](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=96)** What you will find is each of these becomes a tool in your tool belt that you can use when a problem arises. You really want to focus on reducing the complexity in the code base using patterns. Once you have them in your tool belt, you'll start seeing them in code reviews, you'll start seeing them in refactoring sessions, and ways to improve your overall code. It's really important to note that we really only touched on the surface. This is a very small subset of the overall patterns as I mentioned before. Study as many as you can outside of this list. These really are invaluable tools. Learn the most common ones in your area of focus. They do exist everywhere, but there are ones that each business domain tends to focus on having the most value out of because your business domain and business logic goes so close together. And again, leverage those kata exercises. Now I want to end by saying thank you. It's not lost on me the fact that you have spent your time with me learning this behavior and it's not something I take very lightly. My responsibility and my commitment to you does not end with this course. I often am engaged on Twitter, or [[GitHub]], or Stack Overflow, or [[LinkedIn]] Learning through the question and answer sessions and will be here to help you on your journey of learning to become a better developer. So thank you so much for your time and I look forward to seeing you in our next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Framework]] (2), [[Design Patterns]] (2), [[GitHub]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** we discussed (1)
> **Documentation:** stack overflow (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available

## Skills Covered

- Software Design Patterns
- Spring Framework

## Path Context

### In [[Building Your Skills in Spring Development]]
**1 of 4** | [[Spring with GraphQL]] →

## Appears In

- [[Building Your Skills in Spring Development]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Spring- Application Events]] — Spring Framework
- [[Advanced Spring- Spring Boot Actuator]] — Spring Framework
- [[Performance Tuning in Spring Apps]] — Spring Framework
- [[JavaScript- Patterns]] — Software Design Patterns
- [[C++ Design Patterns- Structural]] — Software Design Patterns

---

[↑ Back to top](#)