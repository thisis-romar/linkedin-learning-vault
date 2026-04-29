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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Spring%206%20Design%20Patterns.md)

![Spring 6 Design Patterns](https://media.licdn.com/dms/image/v2/D560DAQFQGdUkZfO8Sw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721237079626?e=2147483647&amp;v=beta&amp;t=5bFB8l8VgY96VOcp-GZE8Vfc02dvwRodZtp70LUU00k)

# Spring 6 Design Patterns

> Design patterns empower developers to be as effective as possible as they build software using known patterns for solving programs. Frameworks like Spring can make using these patterns even more powerful. In this course, software developer and architect Frank Moley highlights the most prevalent design patterns used by and in the Spring Framework. Learn about the core patterns in play, as well as h

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns) | Intermediate | 39K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. Design Patterns and Spring]]** (4 videos)
- **[[#3. 2. Creation Patterns in Spring]]** (8 videos)
- **[[#4. 3. Structural Patterns in Spring]]** (5 videos)
- **[[#5. 4. Operational Patterns in Spring]]** (5 videos)
- **[[#6. 5. Other Framework Patterns in Spring]]** (4 videos)
- **[[#7. Conclusion]]** (1 videos)

### 1. Introduction

#### Solving problems with patterns in Spring
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980&t=0)** - [Frank] When solving problems in software, we often encounter the same problems over and over again.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980&t=6)** As an industry, with lots of help from the gang of four, we have been provided with a lot of patterns of problems, and their solutions.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980&t=15)** These design patterns are critical to improving your efficiency as a developer.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980&t=21)** In this course, we will look at several of these design patterns, their importance, and how and when to use them.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980&t=30)** Hi, my name is Frank Moley.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980&t=32)** I'm a Software Architect and Developer, focusing mainly on distributed systems and their platforms.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-design-patterns/solving-problems-with-patterns-in-spring?u=76281980&t=38)** Join me in this course to make you a more efficient developer, and learn about Spring Design Patterns.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [frank] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=0)** - [Instructor] In order to be successful in this course, there are a few things that you need to know.
>
> **[0:05](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=5)** This course is based on the spring framework for Java.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=9)** It will translate well to Kotlin, if you are using it however.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=13)** Since this is based on Java, you should have a solid knowledge of Java as a language.
>
> **[0:20](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=20)** We'll be using JDK 17 for this course.
>
> **[0:24](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=24)** You should have a JDK installed, not just a JRE.
>
> **[0:28](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=28)** So, make sure that you do have indeed the JDK installed.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=32)** As far as Java goes, we won't be going too deep into the language, especially the newer features.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=38)** So, a good baseline knowledge of Java is sufficient, but it is needed.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=43)** But don't worry if you're only using, say, Java 8, for instance.
>
> **[0:49](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=49)** For work, you'll be fine with that baseline.
>
> **[0:52](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=52)** This is a course based on Spring, but we aren't going to be going too deep into the framework itself.
>
> **[0:59](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=59)** You should have a basic understanding of Spring.
>
> **[1:02](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=62)** If you need to build some understanding or just want to brush up, consider taking my course here in the library learning Spring with Spring Boot 3.
>
> **[1:14](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=74)** The design patterns we will discuss are based on object-oriented programming.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=79)** You should have a strong background in OOP concepts.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=84)** Knowing basic design patterns is very helpful as well, but not a requirement, because we're going to introduce them to you, but you will get a little bit of a headstart, if you've already at least seen them, use them, or heard about them.
>
> **[1:38](https://www.linkedin.com/learning/spring-6-design-patterns/what-you-need-to-know?u=76281980&t=98)** Now, that we've got the base figured out, let's jump into the design patterns.

> [!info]- Semantic Content
>
> **Env Vars:** jdk (3), jre (1), oop (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Versions:** java 8 (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Creating a skeleton project
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=0)** - [Instructor] So now we're going to create a quick skeleton project to be used throughout this course.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=6)** The first thing I'd like you to do is to navigate to start.[spring.io](https://spring.io).
>
> **[0:10](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=10)** Now, there's several ways to do this.
>
> **[0:12](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=12)** Many modern IDEs have a plugin you can use, but I'm going to walk you through the web way here real quick.
>
> **[0:18](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=18)** Select Maven.
>
> **[0:20](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=20)** Select Java as your language.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=21)** Use the latest version of Spring Boot.
>
> **[0:24](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=24)** This course was designed for 3.3.0, but there's nothing that really should change with what we're going to do.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=30)** Set your group to com.lil, or anything else that you want to use.
>
> **[0:35](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=35)** We'll create an artifact.
>
> **[0:37](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=37)** We will simply call this spring-demo.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=42)** Go ahead and select Jar.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=43)** And make sure that Java 17 is your version.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=47)** We're going to add one dependency, and we'll add some more later if we need them.
>
> **[0:51](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=51)** But for now, that's it.
>
> **[0:53](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=53)** Go ahead and click Generate.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=55)** Now, this is going to create a skeleton project, and it's going to actually put this into your Downloads directory.
>
> **[1:03](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=63)** So now I'm going to jump into my terminal.
>
> **[1:05](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=65)** And right now, I am in my working directory where I'm going to put this project.
>
> **[1:10](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=70)** And I'm going to simply do an unzip from my Downloads, the spring-demo.zip -d ./, and that will download that into my current directory.
>
> **[1:26](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=86)** So now if I do an ls -la, you'll see that I have that project there.
>
> **[1:31](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=91)** So let me do a command to open up my IDE.
>
> **[1:39](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=99)** You'll see that I have my IDE open, and if I open up the project, you'll see that I have several folders here.
>
> **[1:46](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=106)** I have Maven installed.
>
> **[1:48](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=108)** So I'm going to go ahead and delete some of these files.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=114)** And I also have a gitignore at my root, so I will delete that as well.
>
> **[2:01](https://www.linkedin.com/learning/spring-6-design-patterns/creating-a-skeleton-project?u=76281980&t=121)** And you now have a skeleton project up and running that we can use throughout this course.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), this. (1), let (1)
> **CLI Commands:** make (1), unzip (1), ls (1)
> **Env Vars:** ide (2)
> **Versions:** 3.3.0 (1), java 17 (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Design Patterns and Spring

#### What design patterns are
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980&t=0)** - [Instructor] This course is about the design patterns 2 for the spring framework. 3 But using design patterns has an implied understanding 4 of what design patterns actually are, 5 and why we care about them. 6 So let's level set on this knowledge for now. 7 Let's talk about design levels from a very high level 8 concept to begin with. 9 They essentially are best-practice solutions 10 for common problems. 11 Seldom in software do we truly have a unique problem. 12 As such, we can utilize design patterns 13 to handle these common problems. 14 They are primarily presented in both the original inception 15 and in this course from an object oriented 16 programming perspective. 17 Design patterns do exist outside of OOP 18 and often look similar where there is crossover. 19
>
> **[0:51](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980&t=51)** But we will focus on the OOP perspective. 20 Most often, they're presented as the problem, 21 then the solution and application 22 or implementation of the pattern to solve the problem. 23 Many of the patterns also prescribe how 24 and when to use them, again, 25 as part of solving the common problem. 26 So you may be asking yourself, Frank, 27 why do we care about these? 28 Well, you should definitely care, 29 and I'm going to give you a few reasons 30 why I believe this to be true. 31 First, and probably most importantly, is the ability 32 to provide common solutions to common problems. 33 Why recreate the wheel? 34 It works as it is. 35 Now, you may have some innovative idea to improve it, 36
>
> **[1:41](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980&t=101)** but very few of us do so 37 and just use the same wheel like humanity 38 has since its invention. 39 These design patterns are very similar in concept. 40 Additionally, once you learn the patterns, 41 you can use them over and over again. 42 Honestly, if you learn how to do something 43 properly to begin with, 44 your ability to use it and actually save time 45 and energy becomes very real and tangible. 46 You also aren't experimenting with routine work. 47 These implementations are proven many times over, 48 so you can just simply leverage them 49 and save your experimentation and innovation 50 for areas that are much more appropriate to your business. 51 And while some people don't care 52
>
> **[2:30](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980&t=150)** what others in the industry do, 53 I believe having a watchful eye to what the industry does 54 and taking the best parts from it to improve your quality 55 and efficiency are worth the effort. 56 And design patterns are a clear winner here. 57 So we talked about why you should care. 58 Let's focus a little bit on the value it has to you 59 as a developer and your company. 60 These patterns are trusted and well-tested. 61 This makes not only the delivery of the solution easier, 62 but also the general care and feeding. 63 That is to say, testing and maintaining it much easier. 64 Because you don't have to recreate the solution 65 to the problems over and over again, 66
>
> **[3:18](https://www.linkedin.com/learning/spring-6-design-patterns/what-design-patterns-are?u=76281980&t=198)** you get to market faster, which is generally accepted 67 as a best strategy for delivering features. 68 Because you use common patterns, 69 it's actually easier to explain your code 70 to other developers. 71 And it's easier for you to read 72 and understand your code later on, 73 which really helps when you need to add features 74 or find a bug somewhere, 75 because we all know those are going to come.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** oop (2)
> **CLI Commands:** find (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### Gang of Four
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=0)** - [Instructor] Out of respect for their work and because no design pattern conversation can be had without talking about them, we need to pay a little time to talk about the Gang of Four.
>
> **[0:11](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=11)** So let's start by talking about who they were.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=13)** Erich, Richard, Ralph, and John are the Gang of Four.
>
> **[0:18](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=18)** They were computer scientists and authors, and they wrote the probably most quintessential book that we need to know about.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=26)** And that was "Design Patterns: Elements of Reusable Object-Oriented Software".
>
> **[0:33](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=33)** In my opinion, this is the book that changed OOP and really defined everything that we take for granted about it.
>
> **[0:41](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=41)** It introduces object-oriented programming.
>
> **[0:44](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=44)** Both the good and the best part is they also talked about the bad.
>
> **[0:49](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=49)** They focused on common OOP concerns, many of which we take for granted today.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=57)** Some of these things like programming to an interface instead of an implementation, or composition of objects over inheritance of objects, and use of generics and parameterized types are all things that they talked about in this book.
>
> **[1:13](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=73)** These design patterns, however, filled most of the content of that book.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=79)** And of course, that's what brings us to this course.
>
> **[1:23](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=83)** Now, they broke their patterns up, and the first breakup that they did were what they called the creational patterns.
>
> **[1:29](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=89)** And these were so-called creation, because they create objects on your behalf.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=95)** The abstract factory and the factory are probably the two most common patterns that anybody thinks about when it comes to design patterns, and those are creational patterns.
>
> **[1:46](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=106)** In addition, the builder patterns, something that we see quite often, not only in Spring, but in other aspects of Java, again, is a creational pattern.
>
> **[1:56](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=116)** And then the singleton and prototype patterns.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=118)** Again, throughout Spring, we will talk about that these exist.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=122)** These are also creational patterns.
>
> **[2:05](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=125)** Now, there are several behavioral patterns that they also talked about.
>
> **[2:09](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=129)** These behavioral patterns focus on inter-object communication.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=135)** Things like the command, interpreter, mediator, iterator, and observer patterns are all behavioral patterns.
>
> **[2:23](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=143)** In additionally, things like the chain of responsibilities and visitor patterns, things that you may have heard about, very common things that we see within the software development environment, and things like memento, state, strategy, and template.
>
> **[2:38](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=158)** And if you've ever used Spring, templates should start ringing a bell, because we use the template pattern all over the place in Spring, and we're going to talk about that in this course.
>
> **[2:49](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=169)** There's also some structural patterns that exist within this book.
>
> **[2:53](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=173)** These focus on object composition and the interfaces around those.
>
> **[2:59](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=179)** So things like the adapter pattern, the bridge pattern, the composite pattern are structural patterns that we see throughout many aspects of software development, including Spring.
>
> **[3:10](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=190)** The decorator pattern, often called the annotation pattern today, but the decorator pattern is definitely a structural pattern as well as the flyweight pattern.
>
> **[3:20](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=200)** The facade and proxy.
>
> **[3:21](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=201)** And proxy is another one of those that is all over the place in Spring, and we'll talk about that.
>
> **[3:26](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=206)** But facades we use quite a bit when we are doing surface abstraction.
>
> **[3:30](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=210)** Again, part of these structural patterns.
>
> **[3:34](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=214)** So I've sort of bridged the gap a little bit about what the relationship is with these design patterns to Spring, but let's talk just a touch more.
>
> **[3:43](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=223)** Spring itself inherently uses many of these classic patterns in order to do its job.
>
> **[3:52](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=232)** Spring also provides native support for using some of these in your code, and we're going to talk about those throughout this course.
>
> **[4:01](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=241)** Probably doesn't need to be said, but I'm going to say it anyway.
>
> **[4:04](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=244)** And that is that Java is an object-oriented language, and since Java is an object-oriented language, these design patterns apply to Java.
>
> **[4:14](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=254)** The framework was built on Java, therefore, these patterns apply to Spring, as well.
>
> **[4:20](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=260)** So this is sort of the juxtaposition that the rest of this course is going to come from.
>
> **[4:25](https://www.linkedin.com/learning/spring-6-design-patterns/gang-of-four?u=76281980&t=265)** We've got design patterns, we've got Spring, how do they interact, how the Spring use them, and how do we build on these to build better software.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1), abstract (1), from. (1)
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** oop (2)
> **Exercise Files:** template (2)
> **Speakers:** - [instructor] (1)

#### The patterns of the Spring framework
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=0)** - [Instructor] So, of course this is a course on the design patterns of the Spring framework, so I want to briefly run through the patterns that we're really going to focus on throughout this course.
>
> **[0:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=10)** But before we do that, we want to briefly talk about the patterns of the framework, but don't worry too much about understanding them now, as I'm going to run through each of them in much more detail.
>
> **[0:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=22)** But for now, just some quick points.
>
> **[0:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=24)** That being said, Spring itself is based on, designed using, and encapsulates some very common design patterns.
>
> **[0:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=33)** Design patterns are so ingrained in the framework itself that almost everything you do using the framework is consuming one or more design patterns.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=42)** In addition, the framework itself works using those patterns and supports your use of design patterns throughout.
>
> **[0:51](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=51)** The inversion of control pattern is central to Spring.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=55)** As Clark W. Griswold says in "Christmas Vacation," "That's the big one," because everything you do with Spring is impacted by the IoC container.
>
> **[1:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=65)** The entire runtime of the framework is based on inversion of control.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=72)** Some of the benefits we get from this includes improved testability, decreased coupling, and enforcing coding to an interface when it makes sense.
>
> **[1:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=83)** The next big one that comes to mind is the proxy pattern.
>
> **[1:27](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=87)** Since Spring 4.0, every object managed by Spring is proxy.
>
> **[1:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=92)** This brings some major caveats to the operation of Spring, which we will talk about, but it also allows addition of behaviors that we leverage throughout the framework, and this is really where its power comes from.
>
> **[1:47](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=107)** Now, the factory pattern is the most known design pattern that exists.
>
> **[1:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=112)** In fact, the IoC container itself is a factory in Spring.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=118)** This is heavily leveraged at startup, as well as runtime operations of Spring.
>
> **[2:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=124)** But, there is first class support in a couple different ways for using factories in your code with the IoC container itself.
>
> **[2:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=134)** Now, the singleton and prototype patterns exist throughout Spring because most of your objects configured for Spring leverage one of these two patterns.
>
> **[2:25](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=145)** The singleton is the most popular in the default behavior, but it is not a traditional singleton implementation.
>
> **[2:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=153)** It does work the same when it is used in conjunction with the IoC container, and we'll talk about that a little bit more.
>
> **[2:40](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=160)** As I alluded to before, if you've used Spring, the template pattern is something you've seen a lot.
>
> **[2:46](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=166)** It's often used with remote calls.
>
> **[2:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=168)** In fact, this is how we do remote calls, things like JDBC template, Rest template, and many others are using the template pattern.
>
> **[2:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=177)** It's also implemented by third parties with their Spring libraries to remove boilerplate code for using their tooling.
>
> **[3:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=185)** Again, a very important aspect of Spring is removing the boilerplate.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=189)** So when you take that, mix it with a pattern designed to do that, you've now got to a recipe for success.
>
> **[3:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=196)** And the model view controller pattern, or MVC.
>
> **[3:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=200)** The entire web framework is based on this.
>
> **[3:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=204)** Both traditional web pages, as well as restful services all rely on the MVC when contained within Spring.
>
> **[3:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=212)** Now, this is not a classic pattern, but it is very, very important in Spring as well as all different view technologies, things like Web, Rest, et cetera.
>
> **[3:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=223)** MVC just makes sense.
>
> **[3:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-patterns-of-the-spring-framework?u=76281980&t=225)** So with that quick rundown, we're getting ready to jump into our first pattern in-depth.

> [!info]- Semantic Content
>
> **Exercise Files:** template (4), boilerplate (2)
> **Env Vars:** mvc (3), jdbc (1)
> **Code Keywords:** interface (1), from. (1), this. (1)
> **Definitions:** is a  (2)
> **Versions:** 4.0 (1)
> **Speakers:** - [instructor] (1)

#### Inversion of control: The core pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=0)** - [Instructor] So now it's time to dig into our first major pattern, and this is the heartbeat of the Spring Framework as a whole: inversion of control.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=9)** So what is inversion of control?
>
> **[0:12](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=12)** First and foremost, this is not a Gang of Four design pattern.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=17)** It is, however, a very useful pattern, obviously, because Spring used it.
>
> **[0:22](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=22)** It's an architectural pattern for relegating control of dependencies to the container instead of relying on the developer doing it themselves.
>
> **[0:34](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=34)** This is a very important consideration in the way that Spring works, as well as the way that the pattern operates.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=42)** Oftentimes, you'll hear this sort of behavior called dependency injection, but the reality is dependency injection is one flavor of IoC, not necessarily the other way around.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=55)** So let's talk for a minute about how it actually works, you have a central container, and that central container, in this case, the BeanFactory constructs and maintains all object references throughout the lifecycle of the application.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=72)** It then hands those to other objects configured by the container when needed.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=79)** Most of the time, this occurs at startup, but it can occur at runtime as well.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=84)** This provides centralized control and management specifically around object references and object lifecycle throughout the lifecycle of the application.
>
> **[1:36](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=96)** So let's talk a little bit deeper about IoC in Spring.
>
> **[1:40](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=100)** Spring itself manages all of your dependencies.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=105)** In fact, you should never allow Spring to manage a dependency that you then create through a new command.
>
> **[1:53](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=113)** The reason for that is once you do new, you no longer are in IoC and Spring is no longer managing your dependency, which can lead to problems.
>
> **[2:04](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=124)** Objects that are created by the container are injected at runtime, not compile time.
>
> **[2:11](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=131)** Now, what that means is you build a reference to the interface and interact with it, but you don't actually create or construct that object in your code.
>
> **[2:23](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=143)** You do it through the IoC configuration.
>
> **[2:26](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=146)** An object accepts the dependencies for construction instead of you actually constructing them.
>
> **[2:34](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=154)** By doing that, the actual handle to the creation is maintained by the IoC container.
>
> **[2:41](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=161)** Again, in this case, the BeanFactory.
>
> **[2:44](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=164)** So there are some real tangible benefits of IoC.
>
> **[2:49](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=169)** First of all, it reduces noise in your code.
>
> **[2:53](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=173)** You no longer have new commands scattered throughout your code as you are creating new instances of objects only to have to pass them around from class to class.
>
> **[3:04](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=184)** This in turn reduces the object coupling.
>
> **[3:07](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=187)** You start coding to interfaces instead of concrete implementations of the object because you never created outside the IoC, therefore, you're coding to its interface.
>
> **[3:19](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=199)** This also reduces the defects that arise from incorrect construction.
>
> **[3:25](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=205)** Think about how many times you may have copy and pasted the construction of an object only to find out that in this new use case, something has to be a little bit different.
>
> **[3:35](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=215)** But more importantly, we don't have to deal with memory problems that can arise even though Java people will tell you doesn't have pointers, it clearly does.
>
> **[3:45](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=225)** We have a null pointer exception.
>
> **[3:47](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=227)** You can get in trouble in your code in these call by reference situations.
>
> **[3:52](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=232)** Therefore, by allowing the IoC to handle the construction and pass that object handle to your use case, you kind of reduce those defects that can arise from this incorrect construction.
>
> **[4:05](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=245)** Now, what we actually work with is not the BeanFactory in Spring.
>
> **[4:10](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=250)** We work with the ApplicationContext, which is something that extends the BeanFactory interface.
>
> **[4:17](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=257)** But the Spring ApplicationContext and ultimately the BeanFactory underneath it is the IoC container.
>
> **[4:25](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=265)** We as developers will only work with the ApplicationContext, however, as a wrapper to the IoC container.
>
> **[4:32](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=272)** Now, another pattern in play, and I've talked about it a couple times here, is the factory pattern, but we're going to talk about that later, and that specifically is around the BeanFactory.
>
> **[4:42](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=282)** Just know that when we talk about IoC and we're talking about the ApplicationContext, we can be talking about it in two flavors.
>
> **[4:49](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=289)** We can be talking about it from the IoC context like we are now, or we can talk about it from the fact that it's a factory.
>
> **[4:57](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=297)** It is a BeanFactory that we're going to talk about here in a little bit.
>
> **[5:01](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=301)** But nonetheless, at the end of the day, the IoC, though it's run by a factory, is all about inversion of control and that really is the power of Spring as a framework as a whole, as well as your interaction with it as a developer.
>
> **[5:15](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=315)** Now, all of this is handled through configuration.
>
> **[5:19](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=319)** Configuration comes in many forms, it can come in auto config, it can come in component scanning, it can come in java config, and in some older legacy code, it can actually still come from XML config.
>
> **[5:31](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=331)** XML is still supported even though it's not advised.
>
> **[5:35](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=335)** But all of this configuration is how we impact the BeanFactory and the IoC container and tell it how to manage the dependencies and ultimately the injections of those dependencies into our beans that we are working with in our code.
>
> **[5:53](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=353)** Now I've thrown quite a bit at you and it's really a deep concept.
>
> **[5:56](https://www.linkedin.com/learning/spring-6-design-patterns/inversion-of-control-the-core-pattern?u=76281980&t=356)** I'm going to encourage you, if you feel even a touch lost at this point, to go check out my course [[Spring Framework in Depth]], where we get really deep into how this ApplicationContext works and what it means to actually be part of it in a Spring lifecycle.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), interface (3), let (2), pass (2), new, (1)
> **Env Vars:** xml (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Creation Patterns in Spring

#### The factory pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=0)** - [Instructor] Now, we will discuss possibly the most well-known pattern that exists throughout all of design patterns.
>
> **[0:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=7)** And that is the factory pattern.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=9)** Let's start by talking about where it is used within the spring framework.
>
> **[0:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=14)** We just alluded to the fact that the BeanFactory, the core of the IOC container is ultimately a factory.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=21)** It serves concrete classes constructed at startup to other objects created at startup or during runtime as part of the inversion control process.
>
> **[0:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=33)** The factory being interface is a generic or templated interface that is used to encapsulate object construction logic when that logic has special considerations or is non-static.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=47)** Otherwise, you could just use a factory method, a little bit more on that later.
>
> **[0:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=52)** But there's a couple different ways that factory manifests itself within spring.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=57)** The factory pattern and its adjacent factory being interface are leveraged heavily by the framework, as I alluded to, just the IOC container itself leverages it.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=69)** So, let's talk about the actual pattern.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=71)** Now, we're not going to go so deep into the pattern that you fully understand it, but I do want to talk at a nutshell level what the pattern entails.
>
> **[1:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=80)** A factory allows construction of similar classes of different types using a factory method.
>
> **[1:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=89)** The method call creates the object for you and ultimately serves it back to you when you call this factory method.
>
> **[1:39](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=99)** Constructed objects are from classes that share an interface or parent class.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=105)** So, we have the pets, we've got dogs and cats, they share a common pet interface, and the factory can serve either canine or feline to us because they have that common lineage.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=118)** So, what are the problems that we're trying to solve with the factory method?
>
> **[2:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=123)** First of all, it allows you to not worry about class construction in more than one place.
>
> **[2:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=129)** If I have to create a dog and create a cat, and then create another dog, I've got to think about that logic, and it may get scattered throughout my code, which tends to increase the risk of errors.
>
> **[2:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=141)** By using a factory, we can encapsulate that construction and simply say, "Give me a dog, give me a cat," and it will do that knowing that it shares a pet.
>
> **[2:31](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=151)** And as a matter of fact, as we're going to talk about here in a bit, we actually can reference all of that abstractly.
>
> **[2:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=157)** It also allows you to leverage the interface for repetitive operations.
>
> **[2:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=163)** Again, back to our dog and cat scenario.
>
> **[2:46](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=166)** When we code this, we may actually code to the PET interface and allow the factory to just serve the appropriate concrete implementation.
>
> **[2:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=175)** A week later, we may decide that we want birds in our factory, and by doing this, we don't have to change because we've coded to the interface, we only encapsulate the factory method to service a bird.
>
> **[3:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=190)** Now, this lack of object construction not only cleans up the code, but as I alluded to, it makes copy and paste errors less likely, because I don't have this construction littered throughout my code base, instead it's encapsulated in one spot.
>
> **[3:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=206)** Outside of spring, there is a distinct strategy that we often use to create factories.
>
> **[3:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=212)** The first, and this is very important, you will always do better if you code to an interface, otherwise, what's really the purpose of the factory other than encapsulation, you're kind of missing a lot of the value if you're coding to concrete implementations.
>
> **[3:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=228)** You create that common interface.
>
> **[3:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=232)** You then create one or more classes that gives instances of the interface, and I say one or more because there is an abstract pattern with this.
>
> **[4:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=242)** The implementation of the concrete classes from the interface will then allow us to serve them out of the factory.
>
> **[4:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=250)** So, we still need the concrete classes and they simply implement the interface.
>
> **[4:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=256)** Now, I alluded to this abstract factory pattern, and this is really a level of advancement that we see on the factory pattern as a whole.
>
> **[4:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=264)** This kind of takes that pattern one step further and makes your code even more abstracted in a way that you're dealing with interfaces.
>
> **[4:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=273)** It really becomes a factory of factories!
>
> **[4:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=277)** It adds this level of abstraction that becomes powerful if you have a bunch of types that also themselves have a bunch of types, because now I can say, "Give me a pet," and it will know, not only do I want a canine, but I want a Labrador as we traverse that inheritance layer.
>
> **[4:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-factory-pattern?u=76281980&t=295)** Now, that's all we're going to talk about with the factory pattern, but let's jump into how we would do this in spring outside of the raw Java use case.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (13), let (3), this, (2), abstract (2), static (1)
> **CLI Commands:** cat (3)
> **Env Vars:** ioc (2), pet (1)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### Factory pattern in action
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=0)** - [Instructor] So now it's time to take a look at the factory pattern in action from a spring application.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=6)** I want you to navigate to your IDE and open up your project and source main Java and we're going to create a little bit of scaffolding before we get into this.
>
> **[0:14](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=14)** So let's create a new package called Controller.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=19)** And in our controller we'll create a new Java class called AppController.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=26)** We will simply annotate our app controller with rest controller.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=30)** And that's all we need for the moment.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=32)** There will be more later.
>
> **[0:34](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=34)** So now let's create a new package called Factory.
>
> **[0:39](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=39)** And in our factory we will create a new interface called Pet.
>
> **[0:45](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=45)** Now we're going to throw a couple methods on here.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=47)** So we will do a void on set name.
>
> **[0:51](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=51)** It will take a string called name.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=54)** We will do a string on getname.
>
> **[1:00](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=60)** We will do a Boolean on ishungry and we will do a void for a method called feed.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=69)** And finally we will do a string on getType.
>
> **[1:15](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=75)** That is the interface that we will use for our factory.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=78)** So now let's go create a concrete class and we will create a concrete class called Dog.
>
> **[1:23](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=83)** This will implement our pet interface.
>
> **[1:28](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=88)** Let's go ahead and set those methods up.
>
> **[1:32](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=92)** Now we need to maintain a little bit of state in our class.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=95)** We'll have a private string called name and a private Boolean called hungry.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=105)** Set name will be this.name = name, Getname will return this.name isHungry will return simply hungry.
>
> **[1:59](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=119)** Feed will set hungry = to false and get type will return capitalized Dog.
>
> **[2:08](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=128)** Now we do need one more piece here.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=130)** We need to go ahead and put a constructor on this.
>
> **[2:14](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=134)** The constructor will set hungry = to true and that's our concrete class.
>
> **[2:21](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=141)** So let's go ahead and create our factory.
>
> **[2:24](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=144)** So we create a Java class and this Java class should be named PetFactory.
>
> **[2:29](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=149)** You generally use the interface name as your factory name.
>
> **[2:33](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=153)** This will allow spring to component skin this class and actually load it into the application context.
>
> **[2:40](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=160)** We need a method that will return a pet called createpet and it will take a string of animal type.
>
> **[2:52](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=172)** Now most likely you're going to do this with an enumeration, but for right now this is just fine.
>
> **[2:57](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=177)** All right, so if not string utils has length on animal type.
>
> **[3:06](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=186)** So if we don't have any length, we will simply throw a new unsupported operation exception that says animal type must be specified.
>
> **[3:19](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=199)** And then we are going to do a switch statement on that animal Type.toLowerCase.
>
> **[3:27](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=207)** We will do a case for dog and in this case we will return a new dog.
>
> **[3:37](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=217)** And then we will put in a default case that in this time we'll throw a new unsupported operation exception, which says unknown animal type.
>
> **[3:49](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=229)** Alright, we now have our factory done.
>
> **[3:51](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=231)** Spring will use the Create Pet method as the factory method itself.
>
> **[3:56](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=236)** So now let's go and actually go back to our controller and we're going to expose this so we can test it.
>
> **[4:04](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=244)** So we'll do a post mapping on adoptpet/type/name.
>
> **[4:17](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=257)** And this is a public pet.
>
> **[4:21](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=261)** We'll call this method adoptPet.
>
> **[4:24](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=264)** It has a path variable of String type and a path variable of String name.
>
> **[4:35](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=275)** I missed a curly brace, so let me go fix that.
>
> **[4:39](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=279)** So now before we implement this, we actually need to have an instance of our pet factory.
>
> **[4:43](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=283)** So we will do a private final Petfactory called Pet Factory.
>
> **[4:49](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=289)** We'll go ahead and add that to a constructor so it can be injected in.
>
> **[4:54](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=294)** And now for our method implementation.
>
> **[4:56](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=296)** So we will create an instance of a pet and this will come from the petfactory.create pet.
>
> **[5:02](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=302)** So we now are going to call this directly as a factory method.
>
> **[5:08](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=308)** We will do a pet.set name = to our name value.
>
> **[5:17](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=317)** We'll do a pet.feed and we will return our pet.
>
> **[5:23](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=323)** Now let's go ahead and run our application.
>
> **[5:27](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=327)** And I'm going to pop up in a terminal window here directly in my IDE.
>
> **[5:31](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=331)** Now I have a tool called HTT pi.
>
> **[5:34](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=334)** You can definitely do this with Curl or you can actually do it in your web browser if you want.
>
> **[5:39](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=339)** But what I'm going to do is I'm going to do a post on HTTP using that HTT pipe tool, local host 8080/adoptPet.
>
> **[5:52](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=352)** It will be a dog rover.
>
> **[5:55](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=355)** And what happens now is we have returned an instance from our API of a pet who is no longer hungry because we fed them.
>
> **[6:04](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=364)** It is a dog whose name is Rover, and that was using the factory pattern.
>
> **[6:09](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=369)** So of course if we would've have a cat, we would do a cat concrete implementation added to our factory method.
>
> **[6:15](https://www.linkedin.com/learning/spring-6-design-patterns/factory-pattern-in-action?u=76281980&t=375)** And we are now good to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (4), interface (4), type. (4), throw (3)
> **Env Vars:** ide (2), htt (2), http (1), api (1)
> **Code Identifiers:** adoptpet (2), gettype (1), ishungry (1), tolowercase (1)
> **CLI Commands:** cat (2), curl (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)

#### The builder pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=0)** - [Instructor] Now we're going to talk about one of my favorite patterns, the builder pattern.
>
> **[0:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=4)** It's because I love to chain methods, and that's what we get to do with the builder pattern itself.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=9)** Let's talk a little bit about where it's used in Spring first.
>
> **[0:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=12)** So it's used in various places throughout the framework.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=15)** ResultActions is one that I use often, and it's part of the MockMvc framework that you can use when you're testing your REST endpoints.
>
> **[0:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=24)** That result action is a builder implementation.
>
> **[0:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=28)** As a point of note, Lombok also has an @Builder annotation.
>
> **[0:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=33)** Now, this isn't really Spring, but it really tends to be embraced, especially by those of you that use Lombok.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=38)** So if you didn't know it existed, now you do, and it's an easy way to implement a builder if you are also using Lombok.
>
> **[0:46](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=46)** Let's talk about the pattern a little bit in a nutshell.
>
> **[0:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=50)** So each method returns the object reference it's called from.
>
> **[0:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=56)** The build method returns the fully constructed object.
>
> **[1:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=61)** Functionality can be combined into one class, but usually it's not done that way since it often requires static.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=69)** So we actually build two classes.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=71)** One is the concrete implementation.
>
> **[1:13](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=73)** One is the builder.
>
> **[1:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=74)** We leverage the builder, and we can never construct the concrete class, the initial class outside of that builder pattern.
>
> **[1:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=83)** That tends to be the safest way to do this, and that's part of the reason we want to do it.
>
> **[1:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=88)** So now let's talk about those problem statements.
>
> **[1:31](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=91)** This is very useful when object creation has many parameters.
>
> **[1:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=97)** It becomes increasingly more useful when some of those parameters or all of them are actually optional.
>
> **[1:44](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=104)** So we would have to call a bunch of setter methods after we created the object but not all of them.
>
> **[1:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=110)** You now start to see some value from this builder because you could just chain the calls and get an object out of it.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=118)** It can make your code easier to read because of reduced lines for construction when compared with setters.
>
> **[2:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=125)** However, chaining methods can also be harder for some people to read who aren't used to it.
>
> **[2:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=132)** So take into account the rest of your engineering team.
>
> **[2:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=136)** I alluded to this already, but part of this ability of having optionals and requireds and having all of this encapsulated in a builder is it provides a level of safety that we don't see with just raw object creation.
>
> **[2:30](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=150)** So how do we go about actually building a builder?
>
> **[2:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=155)** We start with the base class, and this base class usually, if not always, has an all args constructor.
>
> **[2:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=163)** We then create a builder class with attribute and setter for each argument of the base class.
>
> **[2:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=172)** Each setter, however, returns a handle to the builder that it is called from, not the class being constructed.
>
> **[3:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=181)** Then you create a build method that ultimately will construct and return that base class.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern?u=76281980&t=189)** So let's jump in and take a look at how that operates.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class, (3), class. (2), from. (1), static (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Env Vars:** rest (1)
> **Speakers:** - [instructor] (1)

#### The builder pattern in action
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=0)** - [Instructor] So as I said, the builder pattern is one of my favorites of all of them to use just because I like the elegance around it.
>
> **[0:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=7)** And I'm going to show you the way that I learned how to create a builder, and then you can see one possible way.
>
> **[0:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=12)** The thing about a builder is there's probably three or four different ways that you can actually implement this.
>
> **[0:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=18)** Again, this is the way that I learned and that's what I'm going to show you.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=21)** So I want you to navigate over to your IDE and in your base package, let's create a new one called "builder."
>
> **[0:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=29)** And in here, we're going to create a new Java class, and that Java class is going to be called "Contact."
>
> **[0:36](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=36)** Now, one of the beautiful parts about the builder is we can actually make the object that we build immutable, and that's what we're going to do.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=43)** So we're going to create a private string, first name, last name, and email address.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=55)** Now, we're going to create a private constructor on our contact, and it's going to take all of our attributes.
>
> **[1:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=65)** And now, our email address.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=69)** Now, you'll notice that we've got some notes here, and that's because I can actually make these final.
>
> **[1:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=76)** Again, contributing to the fact that this becomes immutable.
>
> **[1:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=83)** Now, we're going to go ahead and generate the getters on all of these real quick.
>
> **[1:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=89)** And now, within this class, we will create a public static class, called "Contact Builder."
>
> **[1:39](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=99)** And just like we have up here, we are going to create some attributes.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=105)** So private string, first name, private string, last name.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=118)** Now, we're also going to create a private constructor on this to create our contact builder.
>
> **[2:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=128)** Now, to this, we will add a public static contact builder get instance,
>
> **[2:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=140)** and this will return a new contact builder.
>
> **[2:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=148)** Now, we will go ahead and generate our setters for this class, but there's a caveat to the way that we do this.
>
> **[2:36](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=156)** We're going to replace the void with an instance of the contact builder itself.
>
> **[2:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=162)** So we're going to actually now return a handle to the contact builder as a return to each of our setters.
>
> **[2:53](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=173)** This will allow us to chain these as we use them.
>
> **[2:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=177)** So now, that we've returned the handle on all of our setters, now it's time to do our final, which is going to do a public contact, and traditionally you just call this method "build."
>
> **[3:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=191)** And what this will do is this will return a new contact where we pass in "this.firstname," "this.lastname," and then "this.emailaddress."
>
> **[3:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=206)** And our builder is actually done.
>
> **[3:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=208)** So let's jump over into our controller so we can actually use this.
>
> **[3:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=212)** So we will do a post mapping on contact, and this will be a public contact.
>
> **[3:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=225)** Create contact.
>
> **[3:46](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=226)** And this is going to take a request param that has required set to false for a string of first name.
>
> **[3:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=237)** And I'm going to copy this part and paste it to do last name.
>
> **[4:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=247)** And then, we're going to do it one more time with a string for email address.
>
> **[4:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=256)** And... Need to put the type of this.
>
> **[4:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=262)** And to make this a little easier to read, I'm going to go ahead and carry that over.
>
> **[4:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=266)** So now what we will do is we will do a return, contactbuilder.gitinstance.setfirstname,
>
> **[4:40](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=280)** and that will be from the first name value, "set last name," from the last name value, and then "set email address" from the email address value.
>
> **[4:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=292)** Now, of course, at this point, we will build it.
>
> **[4:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=299)** This is a little bit trivial because you would never really do it in this way.
>
> **[5:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=303)** I'm just using this as an illustrative purpose of how you might go about the builder and how it might be used.
>
> **[5:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=309)** In the real world, this would be something you would just do a instance of the contact, you would create it, and pass no values in where they apply.
>
> **[5:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=317)** Again, this is just for illustration purposes.
>
> **[5:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=319)** But let's go ahead and run this so that you can see it actually in action.
>
> **[5:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=324)** And if you want to walk through it, you definitely can debug as you're doing that.
>
> **[5:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=328)** So now, we're going to do an HTTP using our HTTPie application.
>
> **[5:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=332)** We will do a post to 8080/contact, and I will simply say "lastname==Moley," and indeed it built that object and then returned it afterwards.
>
> **[5:44](https://www.linkedin.com/learning/spring-6-design-patterns/the-builder-pattern-in-action?u=76281980&t=344)** Again, a little bit of a trivial example, but you've now seen how to use this to do a builder pattern in a way that it is immutable and private so that there is no way to create this object, this contact object, outside of the builder itself.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (7), private (6), class, (4), public (4), let (3)
> **CLI Commands:** make (3)
> **Env Vars:** ide (1), http (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### The singleton pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=0)** - [Presenter] Now the singleton pattern is the next pattern that we are going to discuss, and there's a big deviation in the singleton pattern in Java and the singleton pattern in Spring, and that's because of the way that the IOC container manages all of its dependencies.
>
> **[0:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=14)** And we're going to talk about those differences.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=17)** So first of all, how is the singleton in general used in Spring?
>
> **[0:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=21)** The reality is, is that every bean, by default, is a singleton.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=26)** And that's something you really have to understand when you're dealing with state on the objects that you define as bean because they are singletons.
>
> **[0:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=35)** Now, again, as I alluded to, this is not a classic singleton.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=38)** However, within the context of the IOC, these beans behave the exact same as a singleton.
>
> **[0:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=45)** Again, refer back to what I just said about being cautious of state on these beans because you will have concurrent threads possibly using them.
>
> **[0:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=56)** And that brings us to our thread safety.
>
> **[0:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=59)** Beans involved in the IOC container must be written in a way to be thread safe or you will run into issues.
>
> **[1:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=67)** And that thread safety does exist across all singletons, which is why a Spring singleton bean needs to be treated as though it's a traditional Java singleton.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=78)** So let's talk about the pattern itself in a nutshell.
>
> **[1:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=81)** So the class itself stores a reference to itself, and that is how you maintain the singleton apparatus again, in the traditional Java world.
>
> **[1:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=92)** The constructor is treated as private.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=95)** There is no way to get to construct the object outside of a getInstance method that is static.
>
> **[1:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=102)** And that getInstance method returns a reference of self.instance, or if it's not constructed, it will construct one again in a thread safe manner.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=114)** And there's a lot of argument on how much locking around that instance is sufficient in order to be thread safe.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=122)** But there generally is a rule of thumb, a strategy that we can use in Java to ensure that this singleton is as thread safe as we need to be.
>
> **[2:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=131)** Again, all of this kind of goes out the window when you're talking about this from a Spring perspective.
>
> **[2:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=136)** So there is a big difference and it is worth really digging into and understanding.
>
> **[2:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=142)** New itself is never called on the class outside of the, again, instance method, again, because that constructor is private.
>
> **[2:31](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=151)** So when would we want to use a singleton?
>
> **[2:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=155)** Anytime you have expensive object creation, think about a handle to a database.
>
> **[2:41](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=161)** There's a lot of overhead that goes into creating that connection.
>
> **[2:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=165)** And many times that connection can be shared, especially with a pooled situation across all of your use cases in your application.
>
> **[2:53](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=173)** So many times, things like this become singletons and all of the state is handled in a thread-safe manner.
>
> **[3:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=182)** You also want to do it when you need to control concurrency associated with the shared resources.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=189)** In storing static state for multiple parts of the application, this state itself has to be maintained in a thread safe way, but you don't want to have multiple instances of that state.
>
> **[3:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=202)** Otherwise, it is not truly static because each of those objects maintains a handle to its own individual state.
>
> **[3:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=209)** So these are times when a singleton really adds value.
>
> **[3:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=214)** So let's talk about how we would create this in the Java world.
>
> **[3:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=218)** In the Java world, you create your class and then you create a private constructor on it.
>
> **[3:44](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=224)** You then create an instance handle as an attribute of the class.
>
> **[3:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=230)** You then create a static getInstance method that synchronizes on the object to reduce your thread safety risks.
>
> **[3:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=239)** Then you check if the instance is null.
>
> **[4:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=242)** If it is null, you create an instance.
>
> **[4:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern?u=76281980&t=245)** If it isn't null, you simply return the instance.

> [!info]- Semantic Content
>
> **Code Keywords:** static (4), private (3), let (2), default, (1), self (1)
> **Code Identifiers:** getinstance (3)
> **Env Vars:** ioc (3)
> **Definitions:** is a  (3)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [presenter] (1)

#### The singleton pattern in action
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=0)** - [Instructor] So, now I'm going to show you the singleton pattern in action, and we're actually going to do this a little bit different.
>
> **[0:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=5)** We're going to do it from the traditional Java way, as well as the Spring way.
>
> **[0:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=10)** So, I want you to navigate over to your IDE and in your base package, once again, we will create a new package, and we will call this one singleton.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=21)** And let's create a new Java class, and we will simply call this SingletonA.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=26)** Now, to this we will add a private static instance of SingletonA called instance.
>
> **[0:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=35)** And then we will do a private constructor on it, and we'll simply call super.
>
> **[0:44](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=44)** And now we'll do a public static method that returns an instance of SingletonA called getInstance.
>
> **[0:53](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=53)** And now we're going to do a little bit of locking.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=55)** So, if null equals instance, we will now do a synchronized on SingletonA.class.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=69)** And then once again we're going to do a null check.
>
> **[1:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=74)** This will allow us to maintain some level of thread safety.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=78)** Now, some IDEs like IntelliJ are going to give you a warning that you're doing double locking, which is technically dangerous.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=84)** I've never had an issue doing this, but there are several ways to roll this out in modern Java.
>
> **[1:30](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=90)** This does work, however, just fine.
>
> **[1:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=92)** So, in this case we will do instance equals new SingletonA.
>
> **[1:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=98)** And then after this if statement we will return our instance.
>
> **[1:44](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=104)** Now, let me show you how to do this in the Spring way.
>
> **[1:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=108)** So, we're going to create a new class called SingletonB, and all we're going to do is we're going to mark this with that component.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=114)** That way it gets auto-scanned by the framework and gets loaded into the application context.
>
> **[2:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=121)** Now, keep in mind, this still needs to be maintained with some level of thread safety because this now is a singleton in Spring, and I'm going to prove to you that it is.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=130)** So, let's jump over to our test package and go to our default test.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=135)** The first thing we're going to do is we're going to autowire an instance of SingletonB called singletonB1.
>
> **[2:25](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=145)** And then we're going to do the same thing, but create an instance called B2.
>
> **[2:30](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=150)** So, now let's do our @Test method, and we will simply do a public void testSingleton.
>
> **[2:39](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=159)** So, now let's do an instance of SingletonA called singletonA1 equals SingletonA.getInstance.
>
> **[2:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=170)** We're going to do it again, but instead we will call it A2.
>
> **[2:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=175)** Now, we're doing this for demo purposes.
>
> **[2:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=178)** If I were doing this for real I would not be autowiring instances into a class, and I definitely would not be testing more than one thing in a test method.
>
> **[3:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=187)** But for demo purposes this is just fine.
>
> **[3:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=190)** So, let's bring up our Assertions library from Jupiter, and we're first going to say that we are NotNull.
>
> **[3:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=197)** And we're going to test A1, and then we will do the same but we will test B1.
>
> **[3:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=206)** Now, this just says that they've been created.
>
> **[3:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=209)** We're now going to do another assertion to assert that they are the same, but what we are going to test first of all is singletonA1 and singletonA2.
>
> **[3:41](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=221)** And the assertSame method determines that they are the same object, they're the same memory location, and that's what we're looking for.
>
> **[3:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=230)** A singleton should be treated as the exact same if it is done properly.
>
> **[3:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=235)** You don't get a new instance.
>
> **[3:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=237)** So, now all we need to do is actually run our tests.
>
> **[4:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=241)** So, we'll go ahead and run the tests, and I'm expecting to see two pass.
>
> **[4:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=246)** The first one loads the context.
>
> **[4:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=249)** The second one will actually test the singleton, and let's take a look at that.
>
> **[4:13](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=253)** You'll see that it did test, it passed.
>
> **[4:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=255)** So, we now have created a singleton in the pure Java way, and then through Spring we did the same thing.
>
> **[4:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=263)** We got two handles to that object, that singleton object, and then we proved that both of those were the same.
>
> **[4:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-singleton-pattern-in-action?u=76281980&t=269)** And that is the purpose of the singleton.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class, (2), private (2), static (2), public (2)
> **Code Identifiers:** getinstance (2), singletona1 (2), singletonb1 (1), testsingleton (1), singletona2 (1)
> **Warnings:** warning (1), keep in mind (1)
> **Env Vars:** ide (1)
> **Tools:** intellij (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The prototype pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=0)** - [Instructor] The last creation pattern that we're going to talk about is the prototype pattern.
>
> **[0:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=5)** So prototypes are used in Spring in several ways.
>
> **[0:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=8)** Beans, specifically, have to be marked as prototype because when they are, they are treated as such.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=15)** So as opposed to a singleton, marking them as a prototype makes them a prototype bean.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=21)** However, it acts very much the same way that a singleton did in our last example, where the Java format was a little bit different than Spring.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=30)** In this case, it's the exact same in Spring that they are different in the way that they work in native Java versus Spring itself.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=38)** So in Spring, the bean configuration is used as the prototype.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=43)** You don't actually create an instance of it.
>
> **[0:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=45)** It is used as the template, so to speak, or the prototype for how to build the instance.
>
> **[0:53](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=53)** New instances are created, not cloned, and in the traditional Java world, you would clone them when they are needed by the runtime.
>
> **[1:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=62)** So let's talk about the pattern a little bit more from a nutshell perspective.
>
> **[1:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=67)** A class is created in a prototypical manner.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=71)** Again, there's a template, there is a structure, and that is used to create an instance of the class.
>
> **[1:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=77)** The instances cloned at runtime to give new instances that are not the prototype, but act the same and have the same state.
>
> **[1:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=88)** So let's talk through that a little bit.
>
> **[1:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=89)** What you do in the Java world is you clone an instance of an object.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=94)** Therefore, it has the exact same state as that which you clone from.
>
> **[1:39](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=99)** But it is itself a new instance, and that's what the prototype is giving you.
>
> **[1:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=103)** And in Java, this is usually done with the cloneable interface.
>
> **[1:47](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=107)** Now, remember, everything in Spring is a little bit different, as I just said.
>
> **[1:51](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=111)** In Spring, we don't have to go through all of this to get a prototype itself.
>
> **[1:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=116)** Prototypes are typically, in fact, I've never seen them any other way, they're typically deep clones of the object to maintain safety.
>
> **[2:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=124)** And that's an important thing to remember when you're doing a clone that has nested objects underneath it.
>
> **[2:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=129)** Those must also be cloneable.
>
> **[2:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=132)** So why would we do this?
>
> **[2:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=134)** The biggest reason is when object creation is expensive, but the wrapper needs to be unique, meaning that there is state, but that state needs to be uniquely maintained.
>
> **[2:25](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=145)** It's useful for the objects that must act thread safe, but need to store state that is not itself thread safe.
>
> **[2:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=153)** That way, we get different instances of the state and we don't have to worry about them being thread safe, but they must act such to the outside world.
>
> **[2:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=162)** This also provides cost savings on object creation.
>
> **[2:46](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=166)** Again, these tend to be things that are expensive that we want to use the prototype for.
>
> **[2:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=172)** So how would we go about creating these?
>
> **[2:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=175)** You create an abstract base class that implements cloneable.
>
> **[2:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=179)** You then extend that class with your prototypes themselves, and then you override the clone method to provide class-specific behavior.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=189)** Now, be sure to clone sensitive sub-objects to prevent these threading issues.
>
> **[3:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=195)** Again, this creation strategy is the Java instance.
>
> **[3:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-prototype-pattern?u=76281980&t=198)** When we are in Spring, we don't have to go through all of this, and I'm going to show you that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), class. (1), from. (1), interface (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Prototype pattern in action
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=0)** - [Narrator] So now we're going to look at the prototype in action, but we're going to do so only from the Spring perspective, not throughout Java, because quite honestly, creating a prototype is a little bit of work in Java.
>
> **[0:10](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=10)** And the purpose of this course is design patterns in Spring.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=13)** So we're just going to focus on that example.
>
> **[0:16](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=16)** So I want you to jump into your IDE, and in your base package, create a new package called Prototype.
>
> **[0:25](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=25)** And the first thing that we are going to do is create a new Java class called Prototype.
>
> **[0:31](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=31)** We will mark this as that component.
>
> **[0:33](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=33)** And then we are going to add a scope.
>
> **[0:35](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=35)** And the scope that we are going to add is Prototype.
>
> **[0:40](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=40)** And we will now create a new class called NotPrototype.
>
> **[0:46](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=46)** And on here we will just do @component.
>
> **[0:49](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=49)** So now let's jump into our test.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=54)** We're going to do some auto wiring here again.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=57)** Prototype A called protoA, and we will do prototype again called protoB, and we will do an autowired on NotPrototype called notProtoA.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=78)** And one more we will do autowired on NotPrototype, notProtoB.
>
> **[1:29](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=89)** All right, so now let's do our test.
>
> **[1:31](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=91)** So public void testPrototype, and we will go back to our assertions library, and let's do the assertSame on the NotPrototypes.
>
> **[1:50](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=110)** Now these are singletons.
>
> **[1:51](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=111)** We've seen this before in the previous set of videos.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=114)** Therefore this should be true.
>
> **[1:56](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=116)** There should be no question, because these are NotPrototypes.
>
> **[1:59](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=119)** Therefore, they should be the exact same instance, because they are singletons.
>
> **[2:04](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=124)** However, we need to also now prove that they are not the same when dealing with the prototype objects themselves.
>
> **[2:13](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=133)** So we will simply do a test that those are not the same.
>
> **[2:17](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=137)** So we'll go ahead and run our test suite, and we should get three passes when we do this.
>
> **[2:23](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=143)** And indeed, we have three passes.
>
> **[2:26](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=146)** The reason that this happened is because we marked that scope as prototype.
>
> **[2:30](https://www.linkedin.com/learning/spring-6-design-patterns/prototype-pattern-in-action?u=76281980&t=150)** Spring uses it as a template to create an instance when you need it, not necessarily serving it directly from the BeanFactory, instead just the definition of it from configuration.

> [!info]- Semantic Content
>
> **Code Identifiers:** protoa (1), protob (1), notprotoa (1), notprotob (1), testprototype (1)
> **Code Keywords:** let (3), public (1), this. (1)
> **Env Vars:** ide (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 4. 3. Structural Patterns in Spring

#### The adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=0)** - [Instructor] So the next pattern that we're going to talk about is the adapter pattern.
>
> **[0:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=4)** Within Spring we see adapter used mainly within Spring Integration when dealing with channel adapters for communication with different systems.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=13)** And this is a great example of when the adapter pattern can be used because you're treating different things the same.
>
> **[0:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=20)** So it's used in internal operations of AspectJ as well, and it is used during load.
>
> **[0:27](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=27)** So let's talk about the pattern a little bit within a nutshell.
>
> **[0:31](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=31)** So, two different interfaces share a common operation.
>
> **[0:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=35)** Again, thinking back to the channel conversation of Spring Integration, it's exactly what we're trying to do.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=42)** We want to treat two different things the same because they share that common operation.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=47)** So an adapter is nothing more than a wrapper class that is created that holds an instance of one interface, but implements the other.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=57)** That way we can treat them the same.
>
> **[1:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=60)** The shared operation of the wrapper interface is implemented to call the shared operation of the wrapped interface.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=69)** Let's talk about why we would do this.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=71)** One of the most common reasons is you have legacy or third party code that you need to fit into your existing code base using existing patterns within your code.
>
> **[1:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=83)** The shared functionality on disparate objects to reduce code and reduce code complexity by adapting them to behave the same you can treat them the same within your code, even though they're fundamentally very different.
>
> **[1:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=98)** Coding the interfaces in routine workflows is very common, and leveraging adapters reduces the code while improving readability by treating those different types the same.
>
> **[1:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=110)** So how would one go about creating them?
>
> **[1:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=112)** It's actually relatively straightforward.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=114)** So you start with two interfaces that share a common method.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=118)** You implement both of them with concrete classes.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=122)** However, you then create a wrapper class that extends one of those concrete implementations, but has an instance handle of the other.
>
> **[2:13](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern?u=76281980&t=133)** The implementation in the adapter calls the instances method that looks the same that shared method across disparate interfaces.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (2), implements (1), this. (1), extends (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The adapter pattern in action
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=0)** - [Instructor] So now it's time to take a look at an adapter in action.
>
> **[0:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=4)** So, let's go back to our base class, and let's create a new package called adapter.
>
> **[0:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=12)** And the first thing we're going to do is we're going to create a new interface.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=15)** We will simply call this Apple.
>
> **[0:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=18)** Now, Apple's going to have two methods.
>
> **[0:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=20)** The first one is going to be getVariety, which returns a string, and the second method will be simply a void method called eat.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=32)** Now, let's create another interface, this time called Orange.
>
> **[0:39](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=39)** And Orange is going to have a method called getVariety that returns a string.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=47)** It's going to have a void called eat, a void method called peel, and then a void method called juice.
>
> **[1:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=60)** Now we are going to create a new Java class, and this one will be called AppleAdapter.
>
> **[1:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=68)** Now, our AppleAdapter will implement the Apple interface, however, it will also have an instance of Orange on it.
>
> **[1:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=81)** Let's go ahead and create our constructor that takes our Orange object, and then we will implement our methods, and get variety.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=94)** We'll return this.orange.getVariety, and our eat method, we'll simply call orange.peel, and then orange.eat.
>
> **[1:51](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=111)** So, you can kind of think about this logically.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=114)** An apple, you can just take it and eat it.
>
> **[1:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=116)** An orange, however, you have to peel first before you can eat it, and this is an example of why the adapter is so good.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=122)** We can change behavior even though we're calling the same method.
>
> **[2:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=126)** So now, let's go ahead and finish up our adapter situation.
>
> **[2:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=129)** We are going to create a new Java class, and this one will be called MoroOrange.
>
> **[2:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=136)** And as you might've guessed, this is going to implement our Orange interface.
>
> **[2:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=142)** Let's go ahead and implement our methods on it, and we will return a Moro Blood Orange.
>
> **[2:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=154)** On the eat, we will simply say System.out.printline.
>
> **[2:41](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=161)** Moro gets enjoyed, and we will do a System.out.printline on the peel method that says Moro gets peeled.
>
> **[2:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=178)** And we'll go ahead and add a System.out.printline, Moro gets juiced.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=189)** Now, let's jump down into our test, and we will simply do an @Test method, public void testAdapter.
>
> **[3:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=204)** Orange orange equals new MoroOrange, and then Apple apple equals new AppleAdapter that passes the Orange interface that happens to be an instance of the Moro Orange.
>
> **[3:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=223)** And now, we'll do a System.out.printline on apple.getVariety, and we will do an apple.eat.
>
> **[3:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=236)** Let's go ahead and just run this test.
>
> **[4:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=245)** And we'll go ahead and bring that up, and you'll see, as we did that, we created our Moro Blood Orange.
>
> **[4:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=252)** That was the variety of it.
>
> **[4:13](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=253)** When we called eat, it got peeled, and then enjoyed.
>
> **[4:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=257)** That's the power of the adapter in action.
>
> **[4:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-adapter-pattern-in-action?u=76281980&t=260)** We treated it like an apple, even though it was an orange.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), interface (5), class, (3), this. (1), public (1)
> **Code Identifiers:** getvariety (4), testadapter (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### The decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=0)** - [Instructor] So now it's time for the Decorator pattern.
>
> **[0:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=3)** The Decorator is used quite a bit within Spring because the framework itself uses decorators, especially around things like component scanning.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=13)** Injecting decorated objects is difficult, however, in Spring, because of how bean references work.
>
> **[0:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=20)** The use of qualifier annotation becomes required because Spring only allows you to have instances of a class once unless you qualify it and then inject it.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=32)** So let's talk a little bit about the pattern in a nutshell.
>
> **[0:36](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=36)** So what it's used for is to add responsibilities to an object dynamically at runtime.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=42)** It's promoting composition instead of inheritance, because by decorating an object, you are adding or composing properties to it instead of inheriting from something.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=55)** An inherited base class composes new behavior and responsibilities by becoming additive, otherwise known as decorated.
>
> **[1:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=66)** This allows an object to be open for extension and closed for modification while still adding responsibilities.
>
> **[1:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=74)** Think about that, open for extension, but closed for modification.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=78)** Yet I can still decorate it to add those responsibilities.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=84)** So why would we do this?
>
> **[1:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=86)** Again, you want to promote composition over inheritance.
>
> **[1:30](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=90)** That's a pretty standard practice in object-oriented programming.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=94)** This gives you a way to do that cleanly.
>
> **[1:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=97)** It also allows you to add behavior to your code without modifying the code.
>
> **[1:44](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=104)** And in doing so, it allows you to support non-breaking changes.
>
> **[1:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=108)** I don't have to modify the class itself, so everyone who consumes it doesn't have to deal with the changes.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=114)** But I can decorate it to add behavior that I need.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=118)** It can also be used to remove behavior through encapsulation via that decoration.
>
> **[2:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=126)** So now let's talk about how you would create a decorator in Java.
>
> **[2:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=131)** You start with a base abstract class.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=135)** You then build the Decorator abstract class, extending the base class itself.
>
> **[2:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=141)** You then build decorators that extend the Decorator abstract class.
>
> **[2:27](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern?u=76281980&t=147)** Those decorators then maintain an instance of the base abstract class with constructor injection, and you can now use those decorators throughout your code base.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (4), let (2), class. (2), class, (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### The decorator pattern in action
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=0)** - [Instructor] So now let's take a look at our decorator pattern in action.
>
> **[0:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=4)** I want you to navigate to your IDE and go to your base class, and once again, we will create a new package called Decorator.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=13)** In that package, let's create a new Java class and we will call this Pizza.
>
> **[0:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=20)** We are going to make this class abstract.
>
> **[0:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=24)** We will have a protected_String called description, and then we will do a public_String.getDescription that returns this.description.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=42)** We would do a public abstract BigDecimal called getCost and that's all we need on that.
>
> **[0:51](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=51)** So now let's create a new class.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=55)** This one will be called ThickCrustPizza.
>
> **[1:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=60)** This is going to extend our Pizza abstract class.
>
> **[1:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=66)** We will put a constructor on it.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=72)** We will call super and we will do this.description = "Thick Crust Pizza."
>
> **[1:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=83)** So now we need to implement our method of getCost.
>
> **[1:27](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=87)** We will simply return bigDecimal.valueOf and we will pass in 15.00.
>
> **[1:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=98)** Now let's go and create our decorator and our decorator will be called PizzaIngredient, and this once again will be an abstract class and it is going to extend Pizza as well.
>
> **[1:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=116)** And it will have a public abstract String getDescription
>
> **[2:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=128)** and one more, we will call this one Pepperoni.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=135)** And this is a concrete class and it will extend Pizza ingredient.
>
> **[2:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=142)** Let's go ahead and put a constructor on there that takes a pizza.
>
> **[2:31](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=151)** We will call super and this.pizza = pizza.
>
> **[2:39](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=159)** Of course, we need to have a private handle to our Pizza.
>
> **[2:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=168)** Now let's go ahead and implement our methods.
>
> **[2:53](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=173)** We will return this.pizza.getDescription +,
>
> **[3:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=183)** and we will simply add + pepperoni.
>
> **[3:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=191)** And now on our getCost method, we will do bigDecimal.valueOf.
>
> **[3:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=200)** We will add $1.50 for the pepperoni.
>
> **[3:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=206)** .add and then this.pizza.getCost.
>
> **[3:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=213)** All right, we have everything set up to actually do our test, so let's go to our test package and we will simply add another test, and that test will be public void.
>
> **[3:47](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=227)** Technically we don't need the public.
>
> **[3:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=230)** Old habits die hard, so we will test our Decorator.
>
> **[3:54](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=234)** All right, so Pizza pizza = new ThickCrustPizza
>
> **[4:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=244)** and we'll simply do a print line on these to do our pizza.getCost
>
> **[4:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=257)** and our pizza.getDescription.
>
> **[4:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=262)** And now we will do a pepperoniPizza
>
> **[4:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=272)** and we will pass it our pizza object itself.
>
> **[4:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=278)** And then once again, we can do our system.out.println on pepperoniPizza.getCost.
>
> **[4:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=295)** pepperoniPizza.getDescription.
>
> **[4:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=299)** Now here's where we start to actually see the power of this.
>
> **[5:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=302)** So now we're going to create another instance of pepperoni and we're going to call this one doublePepperoniPizza, and that's going to be a new pepperoni.
>
> **[5:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=314)** But instead of passing it a pizza, we're going to pass it our pepperoniPizza.
>
> **[5:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=319)** So now as we go through and do the work on this, you will see that it's going to actually decorate it.
>
> **[5:27](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=327)** So system.printout.println, our doublePepperoniPizza.getCost, and system.out.println, our doublePepperoniPizza.getDescription.
>
> **[5:46](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=346)** So now let's go ahead and just run this Decorator test in isolation, and let's take a look at the output.
>
> **[5:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=356)** So our first one was our thick crust pizza.
>
> **[5:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=357)** It cost us $15.
>
> **[5:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=359)** We then decorated it with pepperoni.
>
> **[6:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=361)** It now costs 16.50 and you see it as a thick crust pizza plus pepperoni.
>
> **[6:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=367)** Then we decorated it with yet another pepperoni.
>
> **[6:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=370)** It now became an $18 pizza of type Thick Crust Pizza with pepperoni and pepperoni yet again.
>
> **[6:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-decorator-pattern-in-action?u=76281980&t=377)** We've now decorated our object and that is the Decorator pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (6), abstract (5), public (4), pass (3)
> **Code Identifiers:** getcost (7), getdescription (6), pepperonipizza (4), doublepepperonipizza (3), bigdecimal (2)
> **Versions:** 15.00 (1), 1.50 (1), 16.50 (1)
> **UI Navigation:** go to (2), navigate to (1)
> **CLI Commands:** make (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### The proxy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=1)** - [Frank] If you've ever used Spring since 4.0, you've been using The Proxy Pattern and you may not have even known it.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=6)** So let's talk a little bit about The Proxy Pattern itself.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=9)** As I alluded to, every bean that you create gets a proxy around it since Spring 4.
>
> **[0:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=16)** Additional proxies are added usually through annotations during the operation of Spring, and this is how we add behavior to things outside of the beans that we create.
>
> **[0:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=28)** Creating proxy in Spring usually revolves around aspect-oriented programming.
>
> **[0:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=34)** Now, if you're doing native compilation with GraalVM, you can't really use aspect-oriented programming, so you're losing some of the behavior that we used to have.
>
> **[0:44](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=44)** However, if you're still targeting traditional deployments, you can still use aspect-oriented programming, therefore you can create proxies at will.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=54)** If you want to learn a little bit more about aspect-oriented programming, check out my course, "Spring: Framework in Depth" to give you more details as well as the way that proxies are handled.
>
> **[1:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=65)** Let's talk about the pattern itself in a nutshell.
>
> **[1:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=68)** So the purpose of it is to use an intermediate object in place of a real one, and we do that to not only protect the real object, but also add value to it.
>
> **[1:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=81)** The intermediary controls the instantiation and access to the real object.
>
> **[1:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=88)** That intermediate can add behavior to it, but you must understand what is going on, and this can get you in trouble with things like at transactional, because when you are wrapping an object, you now lose the ability to go through that intermediary when you call a method from within another method of that class.
>
> **[1:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=110)** So you must understand what's going on in order to leverage that proxy behavior.
>
> **[1:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=116)** So why would we do this?
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=118)** Usually it's around expensive operations needed to be protected and only called when needed.
>
> **[2:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=124)** A great example is the transactional annotation that we have in Spring.
>
> **[2:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=128)** It adds transactional behavior.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=130)** Setting up transactions tends to be more expensive than not using them with database operations.
>
> **[2:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=138)** The behavior needs to be added to a method when it is called in a specific situations.
>
> **[2:25](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=145)** This is really important, because we don't always need that behavior added.
>
> **[2:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=149)** So when we do, the proxy can help us get there with little to no code.
>
> **[2:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=155)** And remote object access is another time that we tend to use proxies, again, from a protection perspective.
>
> **[2:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=162)** So let's talk about how we create a proxy.
>
> **[2:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=165)** You start with an interface, you then create a real object to extend that interface.
>
> **[2:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=172)** You then create a proxy object to extend the interface, and you keep a handle on the concrete implementation of the real object.
>
> **[3:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=183)** You then create the object, add behavior, and any other protections that are needed.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=189)** Now, from an implementation perspective, when doing spring development, seldom if ever would you use a raw Java proxy.
>
> **[3:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=197)** With Spring, you would leverage AOP as I stated before.
>
> **[3:21](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=201)** Again, the caveat being if you're doing raw VM and native development, you're not going to really be able to use aspect oriented programming because of the way that it traditionally works.
>
> **[3:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=213)** Some common examples are @Transactional, @Cacheable, and there are many, many others.
>
> **[3:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=218)** They tend to always be annotations that you add to a class within the Spring framework.
>
> **[3:44](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=224)** Now, because you don't normally do this, and you only do it through aspect-oriented programming, we're not going to actually walk through the implementation.
>
> **[3:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=232)** I do have an example of doing aspect oriented programming in the course I mentioned, "Spring: Framework in Depth," but I'll leave that to you if you choose to go that route.
>
> **[4:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-proxy-pattern?u=76281980&t=242)** The really important thing here is to know that proxies exist within Spring and they add behavior, and you must understand that layered approach when you are calling methods from within a class.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3), class. (2), protected (1), this, (1)
> **Env Vars:** aop (1)
> **Versions:** 4.0 (1)
> **Definitions:** is called (1)
> **Warnings:** caveat (1)
> **Speakers:** - [frank] (1)


### 5. 4. Operational Patterns in Spring

#### The repository pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=0)** - [Presenter] The next pattern that we're going to talk about is the repository pattern.
>
> **[0:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=4)** Now, within Spring, it is primarily an aspect of Spring data.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=9)** In fact, most of Spring data is based in some way, shape, or form on the repository pattern outside of standard JDBC.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=17)** Spring JDBC can be used to also create repository actions, however, usually you just use something like Spring Data JPA or use Spring Data Mongo, depending on your database technology.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=30)** The repository RestResource adds a RESTful web service on top of a raw repository, making it even easier to expose data services when there is no domain based data action.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=43)** So let's talk about the pattern in a nutshell.
>
> **[0:46](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=46)** First of all, this is not a Gang of Four pattern, but it was introduced in, "Domain-Driven Design," by Eric Evans.
>
> **[0:53](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=53)** Simple operations of an entity or business object without knowledge of other entities, as you would traditionally see with the DAO.
>
> **[1:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=63)** This allows us to go to the database, get an entity, and only work with that entity instead of dealing with joins.
>
> **[1:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=70)** Under the abstraction, the data access operations are hidden from the end user.
>
> **[1:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=76)** In fact, with Spring data, you don't even have to implement anything in order to do this, all of the access operations are hidden.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=84)** So why would we do this?
>
> **[1:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=86)** The primary reason we would do this is the databases have often become the bottleneck, especially with dealing with Join Syntax.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=95)** Preventing your data access logic from leaking into your business logic, or even worse into your presentation logic, is another reason that you would use this pattern.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=105)** This provides you a layer of abstraction to hide those internals and keep them well encapsulated.
>
> **[1:53](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=113)** You can also focus on a single business object at a time, and by doing so, you actually reduce the complexity of the code and you handle it all in a very heads up way in your code instead of passing it from layer to layer to layer, often transacting across a database.
>
> **[2:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=134)** And when you have stored procedures involved, it's even worse.
>
> **[2:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=138)** So how do we do this?
>
> **[2:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=139)** In Spring, you simply start with the repository interface, or you create your own interface using generics.
>
> **[2:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=148)** You then define the common data access methods that you will need outside of those standard given to you by the repository interface.
>
> **[2:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=158)** You then apply your business object to a repository instance and leverage the data access logic all underneath the hood.
>
> **[2:46](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=166)** In fact, it's based on the name of your method, there is no implementation.
>
> **[2:51](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern?u=76281980&t=171)** The nice thing about the Spring data repository is when you do have special logic that you need to apply, you can still do so, and the repository interface will graciously get out of your way.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (1), this, (1)
> **Env Vars:** jdbc (2), jpa (1), dao (1)
> **CLI Commands:** mongo (1)
> **UI Navigation:** go to (1)
> **Warnings:** heads up (1)
> **Speakers:** - [presenter] (1)

#### The repository pattern in action
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=0)** - [Instructor] So now it's time to take a look at the repository pattern in action in a Spring Boot application.
>
> **[0:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=5)** The first thing that I want you to do is to go to the data folder in the exercise files and pull out the schema and the data dot SQL file.
>
> **[0:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=14)** And you are going to copy those into source main resources.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=19)** Now that those are there, let's open up the palm file and we're going to add a couple dependencies.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=26)** Now, it's important to note, I'm not going to give a deep dive here into Spring Data, but it is something that you can get from my Learning Spring with Spring Boot 3 course, as well as several others of mine here on the LinkedIn Learning Library.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=42)** So we're going to go ahead and add Spring Boot Starter JPA, and we're also going to add the H2 database.
>
> **[0:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=52)** Go ahead and run Maven to get what you need from your Maven repository.
>
> **[0:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=59)** All right, the next thing that we need to do is go to our application dot properties file, and we need to set a property for Spring JPA, hibernate DDL auto and set it equal to none.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=71)** This will allow our schemas to take over instead of the repository entities that we will create.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=78)** So now let's create a new package in our base package and we will simply call this repository.
>
> **[1:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=86)** And within there we will create a new Java class and the Java class will be called President, Entity.
>
> **[1:36](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=96)** All right, so let's annotate this with that entity from Jakarta dot Persistence.
>
> **[1:40](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=100)** And we will put a table value in here with a name equals to president.
>
> **[1:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=108)** And now we are going to do an at ID, an at generated value, and at column with a name equal to president ID.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=122)** And then we'll do a private long ID and we're going to repeat this for the rest of our entity.
>
> **[2:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=128)** Now if you want to see what we're doing, you can open up the schema dot SQL file and you'll see the definition of what we are doing.
>
> **[2:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=140)** So now that we've entered all of our attributes, let's go ahead and generate a getter and setter for everything.
>
> **[2:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=148)** And just for simplicity, we will also generate a two string method.
>
> **[2:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=158)** All right, now that our entity is done, we will now go define our repository.
>
> **[2:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=162)** So to do that, we'll create a new interface called President Repository.
>
> **[2:51](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=171)** This extends the CRUD repository.
>
> **[2:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=175)** Now there's several you can use.
>
> **[2:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=176)** We're going to use the CRUD repository right now.
>
> **[2:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=179)** And it is a generic, so it takes a president entity and a big L long.
>
> **[3:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=185)** And we're going to add one method to this.
>
> **[3:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=186)** So president entity find by email address, and you simply pass it an email address.
>
> **[3:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=199)** So now let's take a look at how we are going to test this.
>
> **[3:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=203)** We're going to go ahead and open up our test class here, and we will auto wire in an instance of our president repository.
>
> **[3:41](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=221)** And now we will create a test.
>
> **[3:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=230)** And in our test, we will simply do a system dot out, dot print line, this dot president repository, dot find by ID, and we will simply pass it a one.
>
> **[4:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=245)** And now we can run just this test and you'll see it actually returned a value from our database.
>
> **[4:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=255)** Now we've used an embedded database.
>
> **[4:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-repository-pattern-in-action?u=76281980&t=258)** We've done a very simple method, but this is really how easy it is to use the repository to get access to data with doing very little coding.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2), pass (2), private (1), interface (1)
> **Env Vars:** sql (2), jpa (2), crud (2), ddl (1)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The template pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=0)** - [Instructor] The next pattern that we're going to talk about is the template pattern.
>
> **[0:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=3)** Within Spring, templates are used quite a bit.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=6)** They're used primarily for remote system calls within Spring.
>
> **[0:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=10)** It provides for common behavior that spans across concrete implementations, usually again, of remote calls.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=19)** They share similar behavior across remote calls, as well through the way that the templates themselves are structured.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=26)** Some common examples are JDBC template, JMS template, Rest template, and many, many more.
>
> **[0:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=33)** So, let's talk about the pattern a little bit in a nutshell.
>
> **[0:36](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=36)** The idea behind a template is common boilerplate operations are hidden in a base class.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=42)** Common flows are captured in overarching algorithms with abstract or default methods for the variant code that is not common among the different versions of the template.
>
> **[0:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=56)** Concrete implementations handle those variant code and extend the base class.
>
> **[1:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=63)** So, what's the problem here that we're trying to solve with the template pattern?
>
> **[1:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=67)** Often, common code paths lead to code replication.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=71)** Templates on the other hand, encourage the DRY principle or don't repeat yourself, and encourage reuse.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=79)** Oftentimes as well, these complicated code paths that are repetitive are error prone, and this error prone code can be solved once and then reused over and over again.
>
> **[1:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=92)** Common task semantics can be templatized to reduce the cost of implementing new versions of them.
>
> **[1:40](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=100)** This is really powerful when you look at JDBC template, where you have to go and create a connection, get a cursor, execute your operations, and then close that connection.
>
> **[1:51](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=111)** So, how do you go about creating templates within Spring?
>
> **[1:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=115)** You would create a base abstract class.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=118)** The good thing, most of these have been done for you.
>
> **[2:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=121)** You then define a template method and implement the algorithm, extracting the shared code paths into abstract methods.
>
> **[2:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=131)** You usually will mark your template as final.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=135)** Then, you create a concrete implementation that implement the abstract methods from the base class.
>
> **[2:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=142)** Again, it's important to note that Spring pretty much provides the large majority of these that you will use.
>
> **[2:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-template-pattern?u=76281980&t=149)** So, very seldom do you create your own templates, but it is really good to understand how they operate, as well as how they were originally created.

> [!info]- Semantic Content
>
> **Exercise Files:** template (10), boilerplate (1)
> **Code Keywords:** class. (4), abstract (4), let (1)
> **Env Vars:** jdbc (2), jms (1), dry (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### The model-view-controller pattern (MVC)
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=0)** - [Instructor] The next pattern that we're going to talk about is the Model-View-Controller pattern, also known as MVC.
>
> **[0:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=5)** Within Spring, this is the core pattern for all Spring web activity.
>
> **[0:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=11)** It's used as well for RESTful web services.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=15)** It's used for traditional HTML pages, and really, if you think about these two, they're really the exact same.
>
> **[0:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=23)** A RESTful web service simply takes data and converts it into a JSON view.
>
> **[0:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=29)** A traditional HTML page does the same thing.
>
> **[0:31](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=31)** It takes HTML markup, merges it with data as appropriate and displays it as text.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=38)** That's where we get into the fact that MVC is more than just web pages from a Spring perspective.
>
> **[0:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=45)** Let's talk a little bit about this pattern in a nutshell.
>
> **[0:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=48)** The key value here is that responsibilities are broken into three distinct components.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=54)** You have the model that delivers the data to the view.
>
> **[0:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=59)** You have the view that renders the experience to the consumer, whether that's an HTML template or a JSON or an XML document.
>
> **[1:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=68)** Then you have a controller that populates the model, selects the view, and merges them together through some kind of a template engine or a marshaller.
>
> **[1:20](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=80)** So why do we do this?
>
> **[1:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=82)** Primarily, it improves developer efficiencies by separating responsibilities.
>
> **[1:27](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=87)** Many times, the people creating the HTML are not of the same skillset as the developers doing the services to render the data.
>
> **[1:36](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=96)** As such, we can actually break this work up and let them each work in their own area.
>
> **[1:42](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=102)** This also allows for dynamic and multiple view selections within the same controller using the same model and a view can be modified without modification to the business logic.
>
> **[1:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=116)** So if you think about this, as you build out a layered approach, your data axis can be handled in an encapsulated way, your business logic can be handled in an encapsulated way, and ultimately your view can be handled in an encapsulated way.
>
> **[2:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=132)** And by using the MVC pattern at the presentation layer, we can separate those concerns and keep them well encapsulated so the data doesn't leak across those boundaries, nut more importantly, so the business logic or the logic of that layer doesn't leak into adjacent layers.
>
> **[2:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=152)** And the model ultimately returns raw data unformatted for future consumption.
>
> **[2:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=158)** It doesn't matter what the view technology is, the model is the same.
>
> **[2:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=163)** In fact, you can leverage this in the way you build your controllers themselves.
>
> **[2:49](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=169)** So how do we go about creating these?
>
> **[2:51](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=171)** So first of all, if we're going to do HTML, we need an engine to engage the template.
>
> **[2:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=177)** So we need to pick Timely, for FreeMarker, whatever templating language we're going to use, we need to bring an engine into the picture.
>
> **[3:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=185)** Then, you go and you create your view.
>
> **[3:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=187)** Usually this is spected from a UX team when we're dealing with HTML, or it's defined by an API spec if we're doing RESTful web services.
>
> **[3:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=197)** Then you create the model.
>
> **[3:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=199)** What is the data that you need to populate that view?
>
> **[3:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=203)** Then you create a controller.
>
> **[3:25](https://www.linkedin.com/learning/spring-6-design-patterns/the-model-view-controller-pattern-mvc?u=76281980&t=205)** That controller's responsible for calling all of the underlying business services to populate the model and return it with either the view name or a marshaller when it's in web service world.

> [!info]- Semantic Content
>
> **Env Vars:** html (7), mvc (3), json (2), xml (1), api (1)
> **Code Keywords:** let (2), this, (1)
> **Exercise Files:** template (3)
> **Documentation:** spec (1)
> **Definitions:** known as (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### The MVC and template patterns in action
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=0)** - [Instructor] So now we're going to take a look at both the MVC and template patterns in action from a very simplistic perspective.
>
> **[0:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=7)** Once again, I would encourage you if you want to get deeper, go check out my course, "Learning Spring with Spring Boot 3".
>
> **[0:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=14)** All right, the first thing that we are going to do is we're going to go into our actual application class and we are going to do an at bean annotation and it will be an instance of RestTemplate that we will create.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=32)** And we simply are going to return a new one so that we can inject it into our controller.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=38)** Let's go into our app controller and we'll go ahead and reuse what already exists.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=43)** The first thing that I want to do is add a private final president repository instance to this and we will add that to our constructor.
>
> **[0:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=59)** And now we are going to add an instance of RestTemplate.
>
> **[1:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=66)** And once again, we will inject that into our constructor so that spring can handle the dependencies.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=72)** So let's go down here and let's create a couple methods.
>
> **[1:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=75)** So the first one we're going to do is we're going to do a git mapping and that git mapping is going to respond at president/id.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=84)** So now let's go do the method signature.
>
> **[1:26](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=86)** So it's going to be a public president entity, find president by ID, and it has a path variable of type long called ID.
>
> **[1:41](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=101)** And we simply will return this.presidentrepository .findbyid, passing at the ID and then doing a git on that.
>
> **[1:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=112)** Now what this is doing is it's going to return a president and because by default we get a JSON mapper, it's going to convert that into a JSON document.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=122)** So let's go ahead and do another git mapping.
>
> **[2:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=126)** And this time we are going to do this on presidentcontact/id, and we will once again do a public method.
>
> **[2:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=136)** This time it will be a contact getPresidentContactbyid
>
> **[2:25](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=145)** and we will pass an A path variable of type long that is an id.
>
> **[2:32](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=152)** Now we will do a president entity.
>
> **[2:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=158)** Now to do our president this time, we're going to use the RestTemplate and we are going to call getforentity.
>
> **[2:47](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=167)** We are going to do that at [http://localhost](http://localhost) 8080/presidents/id.
>
> **[3:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=183)** It will return a presidententity.class.
>
> **[3:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=188)** We will pass it the id and then we will get the body of it.
>
> **[3:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=194)** So now we will return a contact builder.getinstance .setfirstname equal to the president.getfirstname .setlastname equal to the president.getlastname .setemailaddress equal to our president.getemailaddress, and then we will ultimately call build on that.
>
> **[3:46](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=226)** So now that that's all said and done, let's go ahead and run our application.
>
> **[3:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=235)** Now I'm going to go ahead and pop up in a terminal.
>
> **[3:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=236)** I'm going to do an HTTP on 8080/presidentcontact/15.
>
> **[4:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=249)** Now, what's actually gone on here in this method, we called into this function, which used a RestTemplate to call another web service that we were also exposing, a little bit overkill, but it's for demo purposes.
>
> **[4:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=262)** It then used the builder pattern to build a contact, which it ultimately returned.
>
> **[4:27](https://www.linkedin.com/learning/spring-6-design-patterns/the-mvc-and-template-patterns-in-action?u=76281980&t=267)** And all of this was wrapped in JSON because that was the view technology chosen because this is a RestController.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (2), pass (2), private (1), this. (1)
> **CLI Commands:** git (4), find (1)
> **Env Vars:** json (3), mvc (1), http (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** getpresidentcontactbyid (1)
> **URLs:** [http://localhost](http://localhost) (1)
> **Tools:** terminal (1)
> **Exercise Files:** template (1)


### 6. 5. Other Framework Patterns in Spring

#### The observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=0)** - [Instructor] So we're going to talk about a few more patterns within the Spring framework just because you should know that they exist and that they're used by the framework itself.
>
> **[0:08](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=8)** The first of those is the observer pattern.
>
> **[0:11](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=11)** Within Spring, the application listener interface observes the application context for changes.
>
> **[0:18](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=18)** Part of the core IOC container.
>
> **[0:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=22)** JMS message listener can be looked at as an observer of some sort.
>
> **[0:28](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=28)** Let's talk a little bit about the pattern in a nutshell, an object called a subject maintains a list of observers.
>
> **[0:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=37)** Notification is sent to observer when state change occurs within that subject, the observer or observers can act on notifications if it applies to them or simply ignore it.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=54)** So why do we want to do this?
>
> **[0:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=56)** First of all, it reduces coupling in code paths, especially in one to many dependency situations where you have one action triggering multiple things.
>
> **[1:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=67)** Objects state changes can have downstream effects that need to be decoupled from the main flow.
>
> **[1:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=75)** This is really important when you're dealing with large scale systems.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=79)** You also may have a need to dynamically register those downstream observers in a way that the code path itself doesn't change, but new observers can come online or take themselves offline.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=95)** So how do you go about creating these?
>
> **[1:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=97)** First of all, you need to create the interface for the observer.
>
> **[1:41](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=101)** You then create a subject interface, and it needs to have two primary methods.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=105)** One is for registering, and one is for unregistering.
>
> **[1:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=108)** Those take an observer object, and then you also need to have a notify function that can be part of several different paths.
>
> **[1:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=117)** Sometimes it's as simple as just a method to notify.
>
> **[2:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=121)** Then you implement interfaces in concrete classes as needed.
>
> **[2:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=127)** So each observer type is simply an implementation of that interface for the different business logic that needs to occur.
>
> **[2:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-observer-pattern?u=76281980&t=136)** Then you leverage observable or observer in jave.util and you're good to go.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (1), function (1)
> **Env Vars:** ioc (1), jms (1)
> **Speakers:** - [instructor] (1)

#### The command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=0)** - The next pattern that we're going to talk about is the command pattern.
>
> **[0:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=3)** In spring, things like runnable instances usually implement the command pattern.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=9)** The abstract command controller in MVC is another example of the command pattern.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=15)** So what is this command pattern?
>
> **[0:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=17)** It provides an abstraction layer on request processing scenarios.
>
> **[0:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=23)** Process calling action gets a common interface instead of the underlying implementations.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=30)** This allows implementations to be changed without the calling code making any changes.
>
> **[0:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=35)** So what does this really mean?
>
> **[0:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=37)** It means we have some function that is going to get executed, and then it executes this command that the underlying implementations respond to in the appropriate way.
>
> **[0:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=48)** This provides a structured processing layer without having to have a lot of code coupling and a lot of code in your main path.
>
> **[0:59](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=59)** So what's the problem statement?
>
> **[1:01](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=61)** The biggest one is to reduce coupling during these command type scenarios.
>
> **[1:06](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=66)** I have something that happens and it needs to trigger something based on some code rule.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=72)** This allows behavior also to be added without modifying the calling code because we simply can add more command responses when that command exists.
>
> **[1:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=82)** So your mainline code generates the command and nothing else has to change.
>
> **[1:27](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=87)** We don't have to start branching our logic in the main path.
>
> **[1:31](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=91)** It also allows multiple implementations of the command to exist without modifications to the caller.
>
> **[1:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=97)** Again, you simply add to the command stack when the command is generated, any of those implementations or all of them can be triggered.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=105)** So how do you go about doing this?
>
> **[1:47](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=107)** First of all, you create your command interface.
>
> **[1:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=110)** Then you have an execute method on that as well as a revert method.
>
> **[1:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=117)** You create command implementations that act on specific objects within your system.
>
> **[2:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=123)** Then you create a calling method that uses that command interface, and that's about it.
>
> **[2:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=129)** It's a pretty straightforward pattern, but it does what it's supposed to do.
>
> **[2:13](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=133)** You have a command, you have a response, you have a command, you have two responses.
>
> **[2:17](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=137)** You have a command, you have 10 responses.
>
> **[2:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-command-pattern?u=76281980&t=139)** It doesn't matter, because you simply add another implementation to that command stack.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), abstract (1), function (1)
> **Env Vars:** mvc (1)
> **Speakers:** - the (1)

#### The mediator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=0)** - [Instructor] The next pattern we're going to talk about is the Mediator pattern.
>
> **[0:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=3)** Within Spring, the Dispatcher serverlet used by Spring MVC is a mediator.
>
> **[0:10](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=10)** It's often used as well when setting state of various components at once.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=15)** So I need to set the state of multiple things with one operation.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=19)** I can use a mediator to do that.
>
> **[0:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=22)** So what does this pattern look like in a nutshell?
>
> **[0:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=24)** The mediator provides encapsulation on one or more objects' behavior.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=30)** Communication channels, therefore, flow through the mediator, who then allows its mediated classes to do work.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=38)** It's another concept of one pathway through your code, and then fanning out as needed.
>
> **[0:45](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=45)** Mediated classes do not communicate with each other, only the mediator, reducing the overall coupling of the system, but having them follow a common pathway.
>
> **[0:58](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=58)** This is really important because you don't want them interacting with each other and modifying state.
>
> **[1:03](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=63)** You want the mediator to handle all communication through it.
>
> **[1:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=67)** Sure, you could look at it as a potential bottleneck, but the reality is by building this encapsulation, you're reducing the complexity and allowing the code to actually be readable, maintainable, and ultimately, more performant.
>
> **[1:22](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=82)** So what's the problem that we're dealing with?
>
> **[1:25](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=85)** It basically reduces the exponential growth, or the potential for exponential growth of inter-object communication.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=94)** Think of the spiderweb.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=95)** When you have 10 objects, all of which communicate with each other from some activity.
>
> **[1:41](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=101)** By using the mediator, we can control that flow and reduce the net.
>
> **[1:47](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=107)** It also reduces tight coupling between these interacting objects.
>
> **[1:52](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=112)** If all 10 of those objects communicate with each other and they all have interfaces that they're implementing, and they all have consumption of those interfaces, that spiderweb becomes a coupled mess.
>
> **[2:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=125)** The mediator reduces that coupling.
>
> **[2:07](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=127)** They all code to an interface.
>
> **[2:09](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=129)** The mediator handles it from there.
>
> **[2:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=132)** This makes interaction flows between objects, not only more resistant to change, but also cleaner and easier to read and easier to interact with.
>
> **[2:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=144)** So how do you go about creating a mediator when you have these scenarios?
>
> **[2:29](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=149)** You start with the mediated interface.
>
> **[2:33](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=153)** Those are the things that are actually being mediated by the mediator.
>
> **[2:37](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=157)** Then you create the mediator interface with a registration method for the mediated objects, as well as all of the structured commands that you need to mediate.
>
> **[2:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=170)** Then, you create concrete implementations for all of this.
>
> **[2:55](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=175)** And in your structured commands, you mediate behavior to all of the mediated objects as appropriate.
>
> **[3:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-mediator-pattern?u=76281980&t=184)** So all of the complexity lives in one place and all of the communication channels live within that mediator.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), this. (1)
> **Env Vars:** mvc (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The interpreter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=0)** - [Presenter] The final pattern that we're going to talk about is the interpreter pattern.
>
> **[0:04](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=4)** Its use in Spring is relatively limited, but very powerful, and that's with the Spring Expression Language.
>
> **[0:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=12)** The interpreter pattern is a relatively straightforward one.
>
> **[0:16](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=16)** The use cases are limited, but often it's within user input that we find these use cases.
>
> **[0:23](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=23)** The idea here is that input must be parsed and converted into specific commands or functions.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=30)** The expressions are deemed terminal or non-terminal to determine if there is any future parsing.
>
> **[0:39](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=39)** So what's the problem statement?
>
> **[0:40](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=40)** We have a way that we need to take user input in a variety of formats and interpret it into some sort of a machine function.
>
> **[0:50](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=50)** This prevents the ultimate commands from becoming littered with expression, determining logic.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=57)** We want the commands to be simple, we want the code to be simple, and we put all of the complexity into this interpreter.
>
> **[1:05](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=65)** Context-aware interpreters can mix and match to call an end result based on the situation.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=72)** So how do you go about creating these?
>
> **[1:14](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=74)** You create an interface for an expression, then you create concrete expressions to evaluation.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=84)** Then you create terminal and non-terminal implementations of expression interfaces.
>
> **[1:31](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=91)** Finally, you create a parser that allows expression logic and ultimately calls the end result.
>
> **[1:39](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=99)** Now, that looks relatively straightforward, but believe me, doing linguistic processing at this level, even with a strong DSL, does take a lot of work.
>
> **[1:48](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=108)** This is not a pattern to be taken lightly, but it is a pattern that you should have in your tool belt if you ever do need it.
>
> **[1:56](https://www.linkedin.com/learning/spring-6-design-patterns/the-interpreter-pattern?u=76281980&t=116)** And hey, we see it all the time, with Spring Expression Language, it's a very powerful tool added into the Spring framework.

> [!info]- Semantic Content
>
> **Tools:** terminal (4)
> **Code Keywords:** function (1), interface (1), finally, (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** dsl (1)
> **Speakers:** - [presenter] (1)


### 7. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=0)** - [Instructor] So now that we've talked about a wide variety of patterns within the Spring framework, you may be asking yourself what is next?
>
> **[0:07](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=7)** But before we get there, let's recap what we just did.
>
> **[0:11](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=11)** So we learned about general design patterns and the Gang of Four.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=15)** We really focused on the major patterns within the Spring framework itself.
>
> **[0:20](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=20)** We learned about the patterns and how to implement the ones most commonly used, both within and outside the framework, with a bias towards the way that they're used within Spring.
>
> **[0:34](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=34)** Then we discussed why to use them, as well as how.
>
> **[0:39](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=39)** Now the first thing that I would suggest to do next is study the patterns.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=43)** I presented you just a small subset of the global design patterns, the ones really focused within Spring, but there are so many more, both at the code level and at the systems level, so you really want to spend some time and study them.
>
> **[0:56](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=56)** You really want to focus your time and your energy on the most common ones for your business domain.
>
> **[1:03](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=63)** I recommend the use of what I call kata exercises.
>
> **[1:07](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=67)** This is where you build a very simple piece of code to exercise these methods in your brain.
>
> **[1:14](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=74)** Just like with karate, the more you do it, the more you understand.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=79)** It doesn't matter how trivial the kata is, what is important is that you are using repetition to reinforce using the pattern to solve a real problem.
>
> **[1:30](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=90)** Then learn how to use those patterns when writing code in Spring.
>
> **[1:36](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=96)** What you will find is each of these becomes a tool in your tool belt that you can use when a problem arises.
>
> **[1:43](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=103)** You really want to focus on reducing the complexity in the code base using patterns.
>
> **[1:49](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=109)** Once you have them in your tool belt, you'll start seeing them in code reviews, you'll start seeing them in refactoring sessions, and ways to improve your overall code.
>
> **[1:59](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=119)** It's really important to note that we really only touched on the surface.
>
> **[2:03](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=123)** This is a very small subset of the overall patterns as I mentioned before.
>
> **[2:08](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=128)** Study as many as you can outside of this list.
>
> **[2:13](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=133)** These really are invaluable tools.
>
> **[2:16](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=136)** Learn the most common ones in your area of focus.
>
> **[2:20](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=140)** They do exist everywhere, but there are ones that each business domain tends to focus on having the most value out of because your business domain and business logic goes so close together.
>
> **[2:32](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=152)** And again, leverage those kata exercises.
>
> **[2:36](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=156)** Now I want to end by saying thank you.
>
> **[2:39](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=159)** It's not lost on me the fact that you have spent your time with me learning this behavior and it's not something I take very lightly.
>
> **[2:47](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=167)** My responsibility and my commitment to you does not end with this course.
>
> **[2:53](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=173)** I often am engaged on Twitter, or GitHub, or Stack Overflow, or LinkedIn Learning through the question and answer sessions and will be here to help you on your journey of learning to become a better developer.
>
> **[3:06](https://www.linkedin.com/learning/spring-6-design-patterns/next-steps?u=76281980&t=186)** So thank you so much for your time and I look forward to seeing you in our next course.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
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