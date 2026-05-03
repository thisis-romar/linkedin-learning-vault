---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-design-patterns-part-1-14140825
url: "https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825"
duration_minutes: 128
duration: 2h 8m
level: Intermediate
updated: 10/15/2020
learners: 32598
skills:
  - Software Design Patterns
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/csharp-design-patterns-2314072"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGABZchVc3mTw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1602606441011?e=2147483647&amp;v=beta&amp;t=xgSclet3dNidpbvP1V3N9s8QZgtVE39X_sfqUtP32VA"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started as a C- Developer]]'
prev_courses:
  - '[[C- Interfaces and Generics]]'
next_courses:
  - '[[C- Design Patterns Part 2]]'
path_nav: '[{"path":"Getting Started as a C- Developer","position":7,"total":9,"prev":"C- Interfaces and Generics","next":"C- Design Patterns Part 2"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/software-design-patterns
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Design%20Patterns%20Part%201.md)

![C#: Design Patterns Part 1](https://media.licdn.com/dms/image/v2/C4E0DAQGABZchVc3mTw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1602606441011?e=2147483647&amp;v=beta&amp;t=xgSclet3dNidpbvP1V3N9s8QZgtVE39X_sfqUtP32VA)

# C#: Design Patterns Part 1

> Design patterns are an important part of programming. Rather than programming solutions to every issue from scratch, developers can implement these patterns that solve common problems. In this course, instructor Richard Goforth explains the purpose and effective use of key design patterns in C#. Richard begins by discussing why design patterns make sense, what they are, and how they are grouped an

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825) | 2h 8m | Intermediate | 33K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Object-oriented design patterns in C#](#object-oriented-design-patterns-in-c)
  - [What you should know](#what-you-should-know)
  - [Review of terms](#review-of-terms)
  - [Using the exercise files and installing .NET SDK](#using-the-exercise-files-and-installing-net-sdk)
- [**1. Defining Software Design Patterns**](#1-defining-software-design-patterns) (9 videos)
  - [Object-oriented programming](#object-oriented-programming)
  - [What isn't OOP for design patterns](#what-isnt-oop-for-design-patterns)
  - [C#, OOP, and design patterns](#c-oop-and-design-patterns)
  - [What are design patterns?](#what-are-design-patterns)
  - [Why do you need design patterns?](#why-do-you-need-design-patterns)
  - [A short history of design patterns](#a-short-history-of-design-patterns)
  - [Categories of design patterns](#categories-of-design-patterns)
  - [Challenge: Design patterns outside of software](#challenge-design-patterns-outside-of-software)
  - [Solution: Design patterns outside of software](#solution-design-patterns-outside-of-software)
- [**2. Get Started with Design Patterns**](#2-get-started-with-design-patterns) (5 videos)
  - [Using software design patterns](#using-software-design-patterns)
  - [Software design pattern drawbacks](#software-design-pattern-drawbacks)
  - [Overview of the creational patterns for C#](#overview-of-the-creational-patterns-for-c)
  - [Overview of the structural patterns for C#](#overview-of-the-structural-patterns-for-c)
  - [Overview of the behavioral patterns for C#](#overview-of-the-behavioral-patterns-for-c)
- [**3. The Iterator Pattern**](#3-the-iterator-pattern) (5 videos)
  - [Iterator pattern definition](#iterator-pattern-definition)
  - [Explicit iterator implementation in C# for generated data](#explicit-iterator-implementation-in-c-for-generated-data)
  - [Combining iterators in C# with LINQ](#combining-iterators-in-c-with-linq)
  - [Challenge: Simultaneous iterators](#challenge-simultaneous-iterators)
  - [Solution: Simultaneous iterators](#solution-simultaneous-iterators)
- [**4. The Factory Method Pattern**](#4-the-factory-method-pattern) (5 videos)
  - [Factory Method pattern definition](#factory-method-pattern-definition)
  - [Factory Method pattern to choose the implementation of an action dynamically](#factory-method-pattern-to-choose-the-implementation-of-an-action-dynamically)
  - [Factory Method design pattern for unit testing](#factory-method-design-pattern-for-unit-testing)
  - [Challenge: Factory Method with dependency injection](#challenge-factory-method-with-dependency-injection)
  - [Solution: Factory Method with dependency injection](#solution-factory-method-with-dependency-injection)
- [**5. The Adapter Pattern**](#5-the-adapter-pattern) (5 videos)
  - [Adapter pattern definition](#adapter-pattern-definition)
  - [Adapter in C#: Adapt FileStream to ILogger](#adapter-in-c-adapt-filestream-to-ilogger)
  - [Adapter pattern for ViewModel mapping](#adapter-pattern-for-viewmodel-mapping)
  - [Challenge: Class adapter vs. object adapter](#challenge-class-adapter-vs-object-adapter)
  - [Solution: Class adapter vs. object adapter](#solution-class-adapter-vs-object-adapter)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Object-oriented design patterns in C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/object-oriented-design-patterns-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/object-oriented-design-patterns-in-c-sharp?u=76281980&t=0)** - [Instructor] [[Software Design Patterns]] are a major key to taking your [[Software Development]] to the next level. I'm Rich Goforth, a senior software architect and consultant designing and developing web, mobile, and server side applications with and without dot net for approximately 13.73 years at the time of this recording. In this course, we're going to talk about why [[Design Patterns]] sense, what they are, and how they came to be so important. Then we'll cover an overview of all the patterns from the gang of four and how they are applied in C sharp and dot net. We will deeply discuss the iterator factory method and adapter patterns. We'll apply each pattern once, in a simple standalone scenario and again in the context of a larger enterprise like MVC web app to get multiple realistic views of the pattern inaction. This isn't just about learning specific design patterns, but learning how to learn and apply design patterns in your applications of any type. Join me on my [[LinkedIn]] learning course through the ins and outs of design patterns in C sharp.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (4), [[Software Design Patterns]] (1), [[Software Development]] (1), [[LinkedIn]] (1)
> **Env Vars:** mvc (1)
> **Versions:** 13.73 (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you should have some significant experience in application programming. This isn't meant to be an intro course and assumes some basic experience with real-world applications. We're going to illustrate things in C# with .NET Core. You don't need to have extensive knowledge of C#, but you should know the basic syntax. Our more realistic sample application, we'll be using ASP NET Core MVC as well as entity framework core. Experience there will help you understand what's going on in the app that we're modifying. We'll also be making a lot of use of [[Language Integrated Query (LINQ)|LINQ]], and knowing the basics of LINQ will be helpful, but not strictly necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Language Integrated Query (LINQ)|Linq]] (2)
> **Env Vars:** net (2), linq (2), asp (1), mvc (1)
> **Speakers:** - [instructor] (1)

#### [Review of terms](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/review-of-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/review-of-terms?u=76281980&t=0)** - [Instructor] There are some terms and concepts that I want to cover before we get started to ensure that we're all starting on the same page. Even if you're familiar with these, it will be worth understanding how I'm using some of these common terms in this particular course. When we're talking about [[Software Design]], we often hear about design principles and [[Design Patterns]]. Design principles are general high level guidelines. They support better design for flexibility and maintainability. SOLID is often cited as a great starting point for understanding object oriented design principles. There is also DRY. Don't repeat yourself and YAGNI, you ain't going to need it. Don't add layers of architecture or functionality that only might be necessary in the future. There's lots of acronyms for these things as it makes it easy to remember them. And this certainly isn't a complete list of software design principles. If you're not familiar with these principles, it is worth spending some time studying them. As we move through the course, you'll be able to see how our pattern implementations often fulfill these design principles. In cooking terms, you could think of design principles as the ingredients and flavors that compliment one another, or that dessert should come at the end of the meal. Design patterns are things
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/review-of-terms?u=76281980&t=92)** that are common among several recipes, like how to grease a pan or mixing the dry ingredients before adding the wet ingredients. Design patterns are not as prescriptive as a recipe. They're not meant to be followed exactly, but combined in new ways to get the desired architectural outcome. An interface is a description of the services that a class provides, like the menu at a restaurant. It is what's available when using a particular class. I'm using a lot of food analogies. I might need to stop for lunch. All classes have an interface, whether they are specified and separated out or not. Separating out an interface allows you to think about what that class should be doing and how it interacts with the application around it. You don't need to do it all the time, but it often helps apply the design principles that we just mentioned. In object oriented programming, the difference between the type of an object and the instance of the object is significant. It is the difference between the description or even the drawings of a real thing, and the thing itself. The plans to build a bed and the bed that I can actually sleep on. There's also the difference between a class and a type that's a little bit more technical. Classes are the full description of an object
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/review-of-terms?u=76281980&t=187)** that can be created. A type is an interface that the class fulfills. Often class and type are interchangeable, but a single class can be many different types at the same time. Types can be composed into classes. As an example, a modern cell phone has a lot of functionality. It has the type of phone so that I know I can send and receive calls. It also has the type of music player and the type of entertainment device. The class that composes all these types is smartphone. This is a fundamental concept that we'll run across, as we talk about some specific design patterns and what it means to implement them. I'm going to be using the terms concrete and abstract. Some to talk about classes and objects. An abstract class is one that has some functionality, but that functionality is not complete without a class that inherits from it, implementing it. A concrete class is one that can actually be instantiated, constructed and used. Now we have some common language to help us talk about design patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (5), [[Software Design]] (2)
> **Env Vars:** solid (1), dry (1), yagni (1)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files and installing .NET SDK](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/using-the-exercise-files-and-installing-dot-net-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/using-the-exercise-files-and-installing-dot-net-sdk?u=76281980&t=0)** - [Instructor] I'm going to be using .NET Core with VS Code in this course to illustrate the use of [[Design Patterns]] in C Sharp. If you want to follow along the most closely, install VS Code from here. You can also use the [[Windows]] or Mac version of Visual Studio if you prefer. If you don't have the .NET Core 3.1 SDK, get that installed from here. We've created a [[GitHub]] repository for you to access the course materials. You can use [[Git]] to clone the repo or download the repo as a ZIP file. You can drop down here to select a branch. There are branches for each video. The branches ending in B correspond to the beginning state of that video. All those ending in E represent the end state for that video. During this course, I've placed the repo folder in my Home directory for simplicity, but you can place the course files wherever you like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (1), [[Windows]] (1), [[GitHub]] (1), [[Git]] (1)
> **Env Vars:** net (2), sdk (1), zip (1)
> **Tools:** vs code (2), visual studio (1), github (1)
> **Exercise Files:** clone the repo (1), download the (1), zip file (1)
> **CLI Commands:** git (1)
> **Versions:** 3.1 (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Defining Software Design Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Object-oriented programming](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/object-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/object-oriented-programming?u=76281980&t=0)** - [Instructor] This isn't a course about OOP but to get to [[Design Patterns]] for C#, we have to start with object oriented programming. In object oriented programming, everything is a thing, an object is created or instantiated and has a lifetime. OOP is a structured organization of properties and methods. Alan Kay, one of the pioneers of OO design has said that he regretted the term object being so prevalent. The real point is messaging how information goes from place to place and is stored. OOP is a set of concepts that are very much about how and where data and actions come together and organizational strategy that makes it easier to build and maintain functionality over the long term. I'm going to slide quickly through some core concepts that make up OO programming. It's not what the course is about but a quick refresher isn't going to hurt anyone. Encapsulation, don't share what doesn't need to be shared. The concept of an interface is important here. Whether or not you have an explicit interface, a class has a practical interface, the properties and methods that are available outside of the class, what pops up in your IntelliSense window. Encapsulation means contemplating
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/object-oriented-programming?u=76281980&t=96)** what the interface actually needs to be and keeping that interface as simple as possible. Don't expose anything that doesn't need to be exposed. Abstraction is next. Abstraction layers are really important. I don't need to know how the machine code works to build a mobile application. I can run an application in [[JavaScript]] that runs different machine code on any number of different processor architectures that run JavaScript. The lower layers are abstracted away so that I don't have to worry about process architectures when writing a web app. Smart encapsulation enables abstraction. I don't have to know how something is done, I just need to know what is being done when I make a call. If I say message sender.send message, I don't care if it's SMS or email or carrier pigeon, just that the message is sent. The more details that the caller has to interact with, the more the implementation is being built into the interaction. Violating abstraction and encapsulation makes for brittle code that is hard to change and easy to break. Inheritance means that I can extend existing code, add functionality or restrictions to its execution.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/object-oriented-programming?u=76281980&t=191)** Understanding where code is extensible is vital when working with existing frameworks or libraries. This is the same for an individual class. Inheritance means that I can create something new with the starting point of something that already exists without changing it. This is an excellent way to reuse code without breaking code that already depends on it. Finally, there's polymorphism. Extended objects can be treated as the thing they are extending. There's a logical path here from inheritance. Don't pretend that you're extending something if you're actually changing it. The power of typed exceptions in C# means that no matter what type of exception it is, it has a message and I can display that message. If some exceptions don't have a message, I can't have code that treats all exceptions the same way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Design Patterns]] (1)
> **Definitions:** is a  (3), means that (3), is an  (1)
> **Env Vars:** oop (3), sms (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [What isn't OOP for design patterns](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/what-isn-t-oop-for-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/what-isn-t-oop-for-design-patterns?u=76281980&t=0)** - [Instructor] The [[Design Patterns]] we're discussing are based on object oriented programming, and don't apply the same way to non-object oriented programming. Trying to force OOP design patterns, in the following situations could be problematic. Procedural programming is just a list of instructions, a to do list. This is the basis of all scripting languages, as well as a lot of other languages that have been retrofitted with object oriented concepts like C for example. C-sharp has procedural elements as it finds a lot of its origin in the C language. It just means to execute instructions in an order, you still reuse code, you can still call sub routines from multiple places. Procedural programming can certainly coexist with object oriented programming in many cases but it's important not to confuse the concepts. [[Functional Programming]] is based around actions instead of objects. Functions, it is a fairly different way of thinking from OOP and has several other courses devoted to it alone. Rather than operating on objects that can have various states, functional programming focuses on composing functions to achieve results. There are a lot of benefits to this around testability,
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/what-isn-t-oop-for-design-patterns?u=76281980&t=96)** the ability to prove a program is correct, preventing no pointer exceptions, and a myriad of other things that are well outside the scope of this course. Just as thinking functionally is different than thinking in objects, functional programming design patterns are completely different from object oriented design patterns. The last one I wanted to cover was fake OOP. Collections of methods with class names. A class name util, isn't really a class and when you instantiate it, it isn't really an object. It is from the language perspective but not from the conceptual perspective. Just because you create a new utility, doesn't mean that you're using OOP. Code that looks like objects is not necessarily adhering to the object oriented principles, we just talked through. These principles are not here to make life painful or tough for developers, but rather to make it easy to write as little as possible for readable, understandable and maintainable code. Creating a smart set of objects with good abstractions and flexibility is not easy. It takes practice and experience. Learning design patterns will improve your ability to build good OO designs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (5), [[Functional Programming]] (3)
> **Env Vars:** oop (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [C#, OOP, and design patterns](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/c-sharp-oop-and-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/c-sharp-oop-and-design-patterns?u=76281980&t=0)** - [Instructor] OOP in itself is kind of a design pattern in many senses, but specifically, [[Object-Oriented Programming (OOP)|object-oriented programming]] is the environment for which most of our standard [[Design Patterns]] are created. Without the basis of OOP, many of these patterns don't make sense. Object-oriented programming provides maintainability and reusability that saves time and effort. C-Sharp is not a purely object-oriented language. It has value types that are not objects in the same sense as everything else, and it has significant functional style capabilities that have been added to the framework. Features like link, fluent syntax and immutable types, just to name a few. A lot of C-Sharp's features have been written with the history of these design patterns well understood. Many of the common core of design patterns are built into the language and libraries of C-Sharp. So it's important to understand those and recognize them, using them appropriately. Before we get more into C-Sharp's specific uses of design patterns, we need to talk a little more about what those design patterns actually are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (5), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2)
> **Env Vars:** oop (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [What are design patterns?](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/what-are-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/what-are-design-patterns?u=76281980&t=0)** - [[Design Patterns]] are at the core, a reusable solution framework to recurring problem. Christopher Alexander is a building architect and probably the reason that people like me often call ourselves software architects. He defined the notion of a design pattern catalog in the 1970s. Software engineering has taken the term and run with it, as design patterns in software have proven very useful, not just for building software but helping making it more understandable and therefore more maintainable over time. Design patterns are a way to understand recurring problems and the types of solutions effective for that problem. It turns out that just like building places for people to live and work, the same issues, keep coming up. In software, these problems are related to storing, passing and modifying information in some way. You might even call this computing. The book, "Design Patterns: Elements of Reusable Object-Oriented Software" is the first widely accepted codification of design patterns in software. This set of design patterns became the basis of what we know as design patterns today. A series of patterns in different categories
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/what-are-design-patterns?u=76281980&t=94)** with different situations benefits and drawbacks for each one. These patterns are not just things you should do but things you should do in specific situations or contexts. There is a time and place for these patterns as well as a time and place that these patterns are not useful. There are even places that these patterns can work against you. This book, doesn't just talk about specific patterns, it also puts forth a pattern language, a framework for talking about design patterns. The patterns are described in a consistent way, organized and ordered for consumption. This concept is from the book, "A Pattern Language" we just mentioned. Design patterns are a way to communicate ideas about [[Software Design]]. And part of this is having a format that the patterns are presented in. Patterns in the "Gang of Four" book we just mentioned, are described with a name usually an analogy that makes it easy to identify and discuss and intent to describe what it does, motivation, applicability, a structure diagram so that we have a picture to look at, the participating classes and objects and how those participants collaborate,
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/what-are-design-patterns?u=76281980&t=188)** the consequences or trade offs that result from the pattern, implementation techniques, as sample code and a real world implementation example or case study. Finally, some related patterns are described. This is a powerful and exhaustive text format for patterns. Other authors have had similar pattern formats at varying levels of details. Versions of each of these areas will be covered as we go through patterns in this course. But the video based format we're using to describe patterns is inherently more example driven. Design patterns are separate from an implementation. They don't describe the exact code to write but we do want to look at some specific implementations to help make the concept clear. Patterns are a guide, not just at the level of, if you see a nail, use a hammer, or if you see a screw use a screwdriver, but rather if you're building a deck, screw type fasteners are better than nail type fasteners because as the deck ages, the screws will do a better job of keeping the wood together. Design patterns are a tool in your toolbox for designing good software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (11), [[Software Design]] (1)
> **Definitions:** is a  (3)
> **Analogies:** just like (1), picture (1)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Tools:** notion (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - design (1)

#### [Why do you need design patterns?](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/why-do-you-need-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/why-do-you-need-design-patterns?u=76281980&t=0)** - [Instructor] Before we spend time learning [[Design Patterns]], we need to spend some time on why it's worthwhile. Just like learning grammar for your native language in school, you may feel like you know about design patterns, having seen them in a few places and having a general idea of what they are. But without understanding the where and why of that grammar, you're more likely to make mistakes and use something improperly or in a way that's confusing. Learning some basic design patterns will give you a strong start in understanding other patterns. You'll have some more clarity around when and how they're most useful. It will help you see when patterns are being used and how to apply a pattern more effectively. We can think about learning patterns in the context of something as ubiquitous as the invention of the wheel. Wheels work on carts, scooters, bicycles, motorbikes, cars, and massive dirt-moving machines. The first wheels were crude and simple by today's standards. Over time, materials, manufacturing, and designs improved to make wheels more effective, faster, easier to replace, better for specific situations. What are some design patterns around the wheel? The shape obviously is a good start, but what are the easiest ways to get the round shape?
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/why-do-you-need-design-patterns?u=76281980&t=97)** How durable will the wheel be? How much weight does it have to support? If you need a wheel for a specific purpose, learning about the history of the wheel in similar situations, what materials have been used, what designs have been tried is valuable. Rely on the experience, the success and failure of others, to move more quickly and achieve a better result. There are a lot of other patterns in and around wheels that you can learn from to get the best result for a new situation, things like the hub, the axle, the differential. Your specific application, in software or with a wheel, might be different from anything that already exists, but if you look for patterns and places that are similar in one way or the other, you can take the existing knowledge in that area and improve on it. There are layers of patterns, patterns around concepts like terrain or speed, but also around details like the ease of replacement. The right solution for your situation will often combine a lot of different types of patterns for the set of requirements. We learn patterns in software so that we can recognize the situations to which a pattern belongs and the solutions that can be brought together for a good, if not optimal result. Humans are generally good at pattern matching,
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/why-do-you-need-design-patterns?u=76281980&t=193)** knowing what is coming up next in a series, understanding behaviors in a new system. If I click this, then that happens. If I click that, then this happens. Learning how and why a specific pattern fits in a given situation, environment, requirement is fundamental to effective [[Software Design]] with patterns. The established practice of patterns will create a good or good enough way to do it that is well understood by others. It is going to be really inefficient if an auto mechanic has to have a completely different set of tools for every wheel that rolls into the shop. Using standard patterns means that other developers can come to an existing application with the right set of tools to fix or extend it. Doing something in a completely novel and interesting way may be groundbreaking, but if no one can follow along, the value is limited. I want to show others how to do something in the most effective way and to share that knowledge with those who come after me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (4), [[Software Design]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** coming up (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [A short history of design patterns](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/a-short-history-of-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/a-short-history-of-design-patterns?u=76281980&t=0)** - [Instructor] Let's cover how [[Design Patterns]] came about to better understand where they come from. As I mentioned in talking about what [[Software Design Patterns]] are, the history really traces back to Christopher Alexander's work in architecture around design patterns in building. The idea of taking identified patterns, codifying them with the recurring problems they solve and sharing those was not completely new, but the industry-wide focus on a specific text centered on the reuse of those patterns gave rise to the use of design patterns in a new way for several industries. Certainly patterns were already being used in [[Software Design]]. Some of those patterns took the form of languages like Lisp and Smalltalk. Even OOP itself is a design pattern in that wide sense. However, a big part of this concept by Christopher Alexander was a unified collection of patterns that could be shared and widely accepted and distributed. In 1990 a conference session towards an architecture handbook brought two of the eventual gang of four together on a panel as the idea of writing the standard architecture handbook for software came together. At the same OOP research conference the next year in 1991 the other two authors joined up.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/a-short-history-of-design-patterns?u=76281980&t=100)** Continuing to work together at the time of the conference in 1994, the gang of four had completed the original book, Design Patterns: Elements of Reusable Object Oriented Software. It was immediately popular and won several awards over the next few years. It is still in print, even with the rise of digital media and the constant changing of technologies, we find most of the principles of programming it contains are still valuable. The patterns in the book have been extended by several other publications by various authors. Though none have been as ubiquitous as the original several have come close. You can find the Portland Pattern Repository and the first Wiki here. You heard that correctly. Recording and sharing software design patterns was the reason for the creation of the first ever Wiki in 1995. Wikipedia, for more general knowledge, came later. In 1997, Kent Beck added Smalltalk best practice patterns. He was a big part of the Portland Pattern Repository. In 2002 Martin Fowler published Enterprise Design Patterns and followed it up with several other publications. He has a catalog of patterns available here. There are a number of other authors and works that have influenced and improved software design patterns,
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/a-short-history-of-design-patterns?u=76281980&t=194)** but if we go any further I won't have time to talk about implementing anything, so we'll move on for now. The formalization and cataloging of software patterns has not moved forward a lot in the last 20 years, but because patterns abstracted out languages and technologies, they still have a great deal of value for us to learn and improve. Most recently many patterns have come to be a part of the language design in C#. The .NET framework libraries often use iterators, proxies, builders, decorators, and more to implement various pieces of functionality. Because .NET Core is open source, we can see how these implementations are done and how to use them as direct examples for our work. Just like using design patterns to better understand recurring problems, we can use these existing solutions in the framework to gain skill and understanding becoming better at the craft of software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (6), [[Software Design Patterns]] (3), [[Software Design]] (1)
> **Env Vars:** oop (2), net (2)
> **CLI Commands:** find (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Categories of design patterns](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/categories-of-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/categories-of-design-patterns?u=76281980&t=0)** - [Instructor] Now that we know a bit more about the history of patterns, we can talk about how we should organize them. There is more than one way to group patterns but let's start with the categories based around the purpose of the pattern. Creational patterns deal with how and when objects are instantiated. Creational patterns can be related to how the object instantiation is deferred to a subclass, the Factory. Or how an interface is passed in and it's later decided exactly what should be created. The abstract factory is a class instantiated all at once or over several operations like the Builder. Structural patterns define how classes and objects are assembled. Creating a new interface from an existing interface, the Adapter. Or bringing several interfaces together in a hierarchical structure like the Composite. Things like adding new functionality to an object without a new subclass, or just hiding an interface behind a simpler interface for a specific purpose like the Façade, are all structural concepts. Behavioral patterns define how interactions are handled between classes or objects. You could say, who is responsible for what? Things like accessing a set of elements sequentially
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/categories-of-design-patterns?u=76281980&t=95)** without knowing what they are, the Iterator. Or creating an object to encapsulate how other objects interact, the Mediator. Even how multiple objects can be notified and updated from a single source, the Observer. These relationships between objects define the behavioral purpose. Another purpose is concurrency. The original Gang of Four book does not cover any patterns with this purpose, but later works and online publications have. I have it here for completeness because it's different enough to be its own category but we won't be covering anything in this category for this course. Another way that we can organize [[Design Patterns]] is around the scope that they reference. Is the pattern for classes or for objects? The patterns that are scoped to class, deal with the design and relationships in types and classes where object-scoped patterns deal with the relationships and structures among instantiated objects. There are other organizational options for these design patterns such as mapping one pattern's relationship to another. This kind of organization is more complex to look at, but can allow a deeper analysis of how these patterns can come together.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/categories-of-design-patterns?u=76281980&t=189)** Here is a little slice of what a relational map of patterns can look like. This is taken directly from the O-O programming book. You can see in this diagram some examples of relationships among patterns. This can help find good patterns sets and interactions when designing a piece of software. Some larger patterns, like MVC, are a combination of several different patterns. It is a great example of a pattern set. The View and Model use the observer pattern between them. Nesting views inside of other views is usually an implementation of the composite pattern. The way that the View works with the Controller to choose the correct code to execute can often be described by the strategy pattern. Often, MVC uses a factory pattern to instantiate a Controller. These patterns are all working together. Some patterns make the most sense in the context of other patterns. Now that we have a sense of what patterns are, why they're useful and where they come from, we can get into how to apply them. But first, let's think a little more deeply about design patterns in general in our first challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** mvc (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Design patterns outside of software](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-design-patterns-outside-of-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-design-patterns-outside-of-software?u=76281980&t=0)** - [Instructor] We want to go a little further in thinking about what [[Design Patterns]] are, why they're useful and how to think about them but outside of software, to get the bigger picture. The challenge is to take a general subject and answer questions around patterns related to it. The goal isn't to get perfect or really detailed answers just to spend a bit more time thinking about it. As I go through these questions, I'm going to give an example from window construction. What is the pattern? I'll start by narrowing this down to [[Windows]] for residential housing. What problem does it solve? Seeing outside, ventilation, safety, how easy it is to manufacture. How has this pattern codify? How is it shared? Building codes for safety, standardization for common installation, seeing existing windows on other houses. How does the application of the pattern change or evolve? In this case, new technology is created and implemented that improves the window. First, they were just coverable holes and then glass made the window a little bit better and then double pane glass and safety glass, manufacturing standardization. As new things are introduced, others see this improvement, copy it and build on it.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-design-patterns-outside-of-software?u=76281980&t=92)** Finally, how can the pattern be broken down into smaller pieces? In the case of the window, you could send a brick through it, but that's not the pattern. There are patterns in window locks so that we have some consistency in how they're used. There's patterns in installation and patterns in how materials are used. Answer these same questions in a couple of different areas. I encourage you to pause and write out some of these answers. Get them down for yourself before moving on. This kind of thinking about patterns, will help you use [[Software Design Patterns]] in the future. You can try these particular subjects. In the case of vehicles, specify to the shape of a passenger vehicle. Maybe take the case of clothes and narrow it down to shirts. You should also try and think of design patterns outside of these that I've mentioned and answer the questions for those.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (2), [[Windows]] (2), [[Software Design Patterns]] (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Design patterns outside of software](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-design-patterns-outside-of-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-design-patterns-outside-of-software?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-design-patterns-outside-of-software?u=76281980&t=5)** - [Narrator] Here's my solutions. I don't expect yours to be the same. Remember the goal is to think about [[Design Patterns]], not specifically to answer this exact questions. You still might be correct, even with a completely different set of answers here. In the case of the vehicle, I took the shape and configuration of passenger vehicles. It solves the problem of getting passengers comfortably, from one place to another. It's written down shared, with National Vehicle Safety Standards, seeing other vehicles, knowing that drivers and passengers should be able to easily get to the features that they're used to. How does it change? There's cleaner energy sources, improved comfort entertainment, the efficiency of the travel or the usage of space. How can I unbreak this pattern down into some smaller pieces? Take economy cars, or buses, or luxury cars, and see how the pattern changes there. In the case of clothing, I took shirts for humans. It solves the problem of covering the top half of someone. Keeping them comfortable in varies environments, and aesthetics. It shared with fashions, or sewing patterns, or mass manufacturing. The materials for a shirt are always improving. How durable it is or how expensive it is, caters to different markets. You could break this down further
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-design-patterns-outside-of-software?u=76281980&t=97)** with men's dress shirts, athletic shirts, shirts that draws attention to you. This concepts at the general level, help us think about, specific patterns, and the details around a pattern choice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 2. Get Started with Design Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Using software design patterns](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/using-software-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/using-software-design-patterns?u=76281980&t=0)** - [Instructor] You see something once and it's new. The second time, it's a coincidence. After that, it's a pattern. How do we recognize patterns and use them? When coding, only in the very edges of what is possible do you find new problems. Most of the issues we encounter have been solved before, and it's a question of the correct set of search terms to find the appropriate solution. The problem solving comes as part of applying that solution to a more specific scenario. Remember that [[Design Patterns]] are about recurring problems. Patterns are not created in a vacuum. They are only design patterns because the problem they solve has needed to be solved repeatedly. Design patterns are records of previously encountered architectural problems. The first step to recognizing the scenarios for these patterns is to learn them, to understand the why and the when. If you're someone early in your career, this gives you the chance to have seen a usage of a pattern before you need it, making it easier to apply the knowledge in the future. As you gain experience, reviewing patterns allows you to see them in the light of experience and understand the patterns and their applications more deeply. To use a design pattern, you first have to understand the general purpose of it. We'll overview the Gang of Four patterns
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/using-software-design-patterns?u=76281980&t=94)** later in this chapter. The next step is to find previous implementations of the pattern and learn from them. Design patterns are big enough part of the history of building software that we can find lots of existing examples in real situations. With the prevalence of [[Open-Source Software]], find code on [[GitHub]] or other public places that can show you how someone else implemented a pattern. Finally, try it out. Learning from small examples is valuable to get started, but trying out a pattern in your real scenario is where you can really begin to see the value or the consequences of it. Do an architectural proof of concept for a pattern to see if it will add value or improve your solution in the long term. When you do architect code with a pattern in mind, write a recognizable version of that pattern, spend the time thinking about naming. It's one of the best ways to make readable code. Don't name every factory you create factory. In some situations, it can be useful, but not all the time. Finding the balance may not be obvious at first, but don't be afraid to rename as you go to make your code as understandable as possible. Future you will constantly thank past you for the effort.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/using-software-design-patterns?u=76281980&t=189)** We're going to be doing all these things as part of the patterns that we cover, but we won't be covering all the patterns that are out there. Rather than just focusing on the specific patterns that we cover, focus on how we analyze an examine the pattern so that you can use that to open up new patterns we haven't covered. Finally, there's no substitute for using the pattern for real. The more you use it, the more you'll see how it operates and where it will be useful in the future. But spending the time learning it now will give you the best possible headstart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (4), [[Open-Source Software]] (1), [[GitHub]] (1)
> **CLI Commands:** find (5), make (2)
> **Cross-References:** later in (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Software design pattern drawbacks](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/software-design-pattern-drawbacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/software-design-pattern-drawbacks?u=76281980&t=0)** - [Instructor] Using a design pattern is applying a tried solution to a recurring problem. As part of that solution, there are sometimes drawbacks. Patterns are not free. They're not usually the easiest way to get something done fast. You can get a program out that does something with very little testing, flexibility, and maintainability very quickly, but it will fall apart fast. When you do that, you're pushing the cost forward. It's technical debt, debt that comes from design, technology choices, or lack of testing. Don't save a little time now that's going to cost a lot later. When you go to add new functionality to an application, you might find that it's more difficult than it would otherwise be if you had made different decisions so far. You may have decided on a free UI library, but it's going to take so long to implement features that are built into a paid library, the project costs more overall. By the time you realize the issue, it would cost even more to replace the UI code you already have. You might have decided on a [[NoSQL]] database but later needed to add complex relationships to your data that require more work in code to implement. It's the same with [[Design Patterns]]. The places where the design is flexible and inflexible
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/software-design-pattern-drawbacks?u=76281980&t=94)** are an important part of the pattern itself. Design patterns are not always the answer. More specifically, complex design patterns, or sets of patterns, are not often the right choice to a problem. I don't need the strategy pattern if there's only ever one algorithm to execute. Sure, the code you're writing is going to be more flexible in the future, but you have to weigh that flexibility against the extra layers and effort required to implement a pattern. Empty layers of indirection make adding functionality in the application harder, debugging harder, and generally create worse code all around. Next, study the pattern consequences. The singleton pattern is valuable in some scenarios but can also incite people to use it as a dumping ground for data or cause concurrent access issues. These kinds of consequences are important to consider as a part of your choice. Don't create patterns on top of patterns that already exist for you. We've mentioned how languages and frameworks have implemented a lot of design patterns. Part of learning patterns here is to understand where those patterns already exist so that we don't create our own lesser implementations of those patterns when C# [or.NET](https://or.NET) may already have a built-in way to use that pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (4), [[NoSQL]] (1)
> **CLI Commands:** find (1), make (1)
> **URLs:** [or.net](https://or.net) (1)
> **Env Vars:** net (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Overview of the creational patterns for C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-creational-patterns-for-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-creational-patterns-for-c-sharp?u=76281980&t=0)** - [Instructor] The list of patterns we're covering in depth in this course seems short. But as we work on understanding these patterns and common usages, you'll be able to expand your ability, not just to recognize and implement these patterns, but to do so for other [[Design Patterns]] as well. We want to learn how to acquire design patterns for our toolbox. To do this, we'll start with a quick summary overview of all the gang of four patterns, to know where to research for specific situations. The factory method separates the concrete object that is created from the consumer who requested that object. The actual creation of the object can be deferred until the code is actually running, rather than the object being specified at compile time. Let's use a logger as a quick example. Code requests an object with the interface of logger. And a service provider builds and returns a concrete logger based on dynamic configuration or situations. The logger factory can return an email logger, or a console logger, or a database logger. The requesting code doesn't need to know anything about what kind of logger is being returned. This allows for decoupled code that's easier to maintain and test.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-creational-patterns-for-c-sharp?u=76281980&t=93)** The abstract factory is a next level factory, the interface for a factory, so that the correct factory can be provided for in a dynamic situation. This allows for the creation of families of concrete objects, rather than just individual [[Microsoft Products|products]] of a factory. The consumer of the object doesn't need to know the details of what's required for a particular object or its dependent objects. IHTTPClientFactory in .NET Core is a great example here. When you use IHTTPClientFactory, you can configure the specific subtype of HTTP client you need with an interface. But you can also configure for the default client or a generated client. The factory class deals with returning the concrete subclass, and also handles the lifetime of the dependent HTTP message handler that the client depends on. The builder pattern separates constructing an object from the object itself. When normally constructing objects, a simple constructor method on the object is enough. The builder pattern means that a different object is responsible for that construction. This creates flexibility. It allows for the encapsulation of initialization code, as well as allowing the creation of an object
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-creational-patterns-for-c-sharp?u=76281980&t=188)** to change independently from the object itself. The .NET framework has several good examples of the builder: the StringBuilder which allows for more complex string creation without altering the string class itself. The ASP NET Core ApplicationBuilder, which allows the initialization of the main ASP NET Core application object as a composition of middleware and services that the application doesn't need all the details of to be created. There's also the EF CoreModelBuilder. It separates the configuration of how the data model should interact with the relational database from the data model itself. The prototype pattern specifies a kind of object to create from an instance that's copied. Prototype doesn't require inheritance like a factory does, but allows the flexibility of creating objects dynamically. The prototype is an instance rather than a type. This is useful when a piece of the construction process is significantly more expensive than creating a copy, or when large parts of the object remain the same from instance to instance. This is useful when a piece of the construction process is significantly more expensive than creating a copy, or when large parts of the object remain the same
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-creational-patterns-for-c-sharp?u=76281980&t=283)** from instance to instance. In .NET, the concrete header types in [System.Net](https://System.Net).Http.Headers use the prototype pattern to allow for header sets to be easily created from an existing set, but separate objects for each call. The last creational pattern is the singleton. It's probably one of the most used, as well as one of the most dangerous of the gang of four patterns. Instead of any number of instances of an object, there is only one instance. This allows for global variables in application lifetime states. However, things like concurrent access and a lack of clarity when items in a singleton are being modified can create unstable and bug-prone applications. Singletons can be used with other patterns for things like regulating access to limited resources, managing things like database connection pools. You can create singletons from a [[Dependency Injection]] framework, but the service provider itself is a singleton. All these patterns are focused on the creation and lifetime of object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (2), [[Microsoft Products|Products]] (1), [[Dependency Injection]] (1)
> **Env Vars:** net (5), http (2), asp (2)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **Prerequisites:** configure (2), initialization (2)
> **URLs:** [system.net](https://system.net) (1)
> **Speakers:** - [instructor] (1)

#### [Overview of the structural patterns for C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-structural-patterns-for-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-structural-patterns-for-c-sharp?u=76281980&t=0)** - [Instructor] Let's move on to the structural patterns. The first is the adapter. It converts one interface into another. It lets classes expecting different interfaces work together just like an adapter to that old projector from your new laptop. Just because I have a new laptop doesn't mean that I need to replace the projector. The adapter can be used at the class level adapting types, but it can also be used at the object level where the adapter contains the object that it's adapting. A common use case for the adapter is a data mapper, like creating view models or command models from a shared or generalized data model. We'll explore that later. The bridge pattern allows an abstraction to change independently from a concrete implementation. It's like the adapter, but rather than being focused on bringing existing classes to a place where they can interoperate, it allows for a future state where an abstract class can use an implementation that is decoupled from it. It's a way to [[Jetpack Compose|compose]] objects without adding more inheritance, or if the class implementing an abstraction is likely to change, but the abstraction isn't. The composite pattern lets you treat a set of objects in the same way that a single object is treated. As we've mentioned, MVC views use a composite pattern.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-structural-patterns-for-c-sharp?u=76281980&t=97)** In [ASP.NET](https://ASP.NET) Core MVC, any view can be treated as a single view, but can also be composed of any number of sub views that in turn can have their own sub views. It allows views and sets of views to be treated in the same way. The decorator pattern lets you attach additional functionality to an existing object without necessarily affecting other objects of the same type. This is a way to change the functionality of an object without needing a subclass of it. It can make it easier to follow the single responsibility design principle. A decorated class will have the same interface as the wrapped class it's decorating. The I/O Stream, MemoryStream, FileStream in C# all use the same interface, but add additional functionality under that same interface. The facade pattern makes a complex interface simpler by reducing it in some way. This can be done by bringing calls together or removing external system dependencies in the interface so that the consuming object doesn't need to know as much about the system that it's calling into. Several more complicated interfaces can be combined into a single facade interface, and .NETSystem.Environment is a solid example.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-structural-patterns-for-c-sharp?u=76281980&t=193)** It brings together information about the operating system, the working directory, the CPU, et cetera, into a single place that represents the whole environment the application is running under. Flyweight. This structure is about saving memory usage when there's a large number of similar objects with a significant amount of data. The flyweight is the object that stores its own data and is a way to access some external data as its own. An example in C# is using string interning if you're going to have a lot of copies of the same string. Rather than creating memory space for every single copy of the string, the string is stored in a separate memory space and can be referenced from there by multiple objects. A proxy provides a placeholder for another object and controls access to it. This can be used for something like concurrency on a Singleton or wrapping data access in a role permissions check. It can also be used for controlling access to a remote system. The EF Core data context is a proxy for database access, adding functionality around things like caching and lazy loading. These are our patterns focused on how objects are brought together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (1), [[ASP.NET Core]] (1)
> **Env Vars:** mvc (2), asp (1), net (1), cpu (1)
> **Definitions:** is a  (5)
> **Analogies:** just like (1), it's like (1)
> **CLI Commands:** make (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [instructor] (1)

#### [Overview of the behavioral patterns for C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-behavioral-patterns-for-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-behavioral-patterns-for-c-sharp?u=76281980&t=0)** - [Instructor] Now, we can talk about patterns with the focus of how classes and objects communicate with one another. The interpreter pattern is based around building a context specific language and being able to break expressions down into sub expressions allowing the sub expressions to be treated and the results combined. In C#, [[Language Integrated Query (LINQ)|LINQ]] uses expressions and expression trees that exemplify the interpreter pattern. The template method pattern defines part of an operation at one level, but then lets subclasses define some section or part of that operation. In C#, you can see this in the IComparable interface. When you implement Icomparable, you can use methods like array.sort on that object. This provides the part of the algorithm that decides if the specific object should be ordered before or after another object of the same type. The sort method is defined elsewhere, but the comparison part is left up to the code that's specific to the object in the array. Chain of responsibility. When an action needs to be dealt with allow any number of objects in an order to handle that request until the handling is completed. This is the way that exceptions bubble up in .net. The exception is passed up the stack
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-behavioral-patterns-for-c-sharp?u=76281980&t=95)** until it's handled in a try catch block. Another great example here is the [ASP.NET](https://ASP.NET) Core middleware structure. As a web request comes in, each piece of middleware decides if there are any actions to take and then decides if they need to pass the request to the next layer or not. Within the middleware, you can see the pattern again in MBC [[Routing]]. The command pattern is to think of a request or command in terms of its own object. By thinking of a business level action as an object in its own right, work and data structure related to that object can be encapsulated from the actual action that it represents. EventArgs in C# are a good example here. The object encapsulates all the information related to an action so that it can be handled by any code that is interested in that action. We're going to cover the iterator in detail in the next chapter. This pattern is a way to sequentially walk through a set of like objects without needing to know what type they are. The iterator pattern is what allows the foreach loop in C#. The visitor pattern is an operation that happens on each element of a set. This adds an operation to an object
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-behavioral-patterns-for-c-sharp?u=76281980&t=190)** without altering the object. It's closely related to the iterator pattern as the iterator pattern makes the visitor nearly trivial to implement. If we go back to the foreach loop in C#, the body of the foreach loop is the visitor that's named in this pattern. For a more in depth example, you can look at the app we named ExpressionVisitor in LINQ. A mediator is an object that encapsulates how a given set of objects interacts with one another. This means that those individual objects that are being mediated don't have to know anything about one another. They only have to know about the mediator reducing the class coupling. A memento is an object that allows another object to go back to the way it was. It's a way of storing state for an object. Serialization of an object fills this role in some ways as the serialized objects, memento, is a string. However, objects could be designed poorly, so that serialization doesn't actually represent a memento if some part of their state is stored privately. The observer pattern is one of the most useful and widely used [[Design Patterns]]. It's a one-to-many relationship where objects can subscribe to something
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-behavioral-patterns-for-c-sharp?u=76281980&t=284)** and be notified when it changes. All events and event handling in C# use the observer pattern. It allows decoupling the observer objects from the object being observed. The object being listened to doesn't need to know anything about who is listening to it. INotifyPropertyChanged and ObservableCollection in .NET allow for things like two way property binding between a model and a view. The state pattern is to allow an object to change the way it behaves based on its current state. This separates the state of the object from the object itself. An object using this pattern doesn't need to be altered when new states are added. The states themselves are defined and can change independently of the object. This would reduce the required changes to an object as additional logic is added over time. Finally, we have the strategy pattern. By taking a family of [[Algorithms]] or actions and grouping them in a similarly typed object, it's possible to switch out the action taken within an object dynamically. In .NET Core, the easiest example is the cryptographic libraries. When encrypting or decrypting data, the encryption algorithm can be switched out. As new algorithms are added,
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/overview-of-the-behavioral-patterns-for-c-sharp?u=76281980&t=378)** the core cryptographic code doesn't need to change. This overall pattern reference is a kind of high level map to design patterns and how they relate to C#. You can come back to these at any time if you need a refresher. Don't worry about memorizing all of this now. There was a lot to get out of the way, but now we're ready to get into our first pattern with some real depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Language Integrated Query (LINQ)|Linq]] (2), [[Design Patterns]] (2), [[Algorithms]] (2), [[ASP.NET Core]] (1), [[Routing]] (1)
> **Env Vars:** net (3), linq (2), asp (1), mbc (1)
> **Definitions:** is a  (3), is an  (3), means that (1)
> **Cross-References:** go back to (2), in the next (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### 3. The Iterator Pattern

[↑ Back to Table of Contents](#table-of-contents)

#### [Iterator pattern definition](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/iterator-pattern-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/iterator-pattern-definition?u=76281980&t=0)** - [Instructor[To iterate is to move continuously forward. The iterator pattern is also known by the names cursor or enumerator. It was in use long before it was documented and codified as a [[Software Design]] pattern. Iterators operate on an aggregate object, a collection of some sort. Most commonly, this is a list, but it could be a tree or any other set of like items. The goal of the iterator is to separate moving through that set of items from the set of items itself. An iterator allows access to elements in a collection without knowing the type, structure, or end. Iterator provides the ability to go to the next item in a sequence and access that item. The diagram is straightforward. A collection provides a way to get an iterator, and that iterator allows you to get the current item, move to the next item, or start over. The iterator allows you to keep the collection interface cleaner, and prevent changing the list type to add a new way to move through it. You don't have to anticipate the type of iterator you'll need. It also allows you to access items without making the storage mechanism public.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/iterator-pattern-definition?u=76281980&t=95)** It allows you to use the same interface to access any type of collection. Because the iterator is its own object, you can have more than one iterator active at a time. The most common iterator in C# is the IEnumerable and the IEnumerator interfaces, which allow the foreach loop to work. Arrays and lists in C# implement IEnumerable. They provide the method that returns an enumerator. These interfaces can use generics to define the type, but they don't have to. A foreach loop is actually calling for the enumerator, executing the code for an item, and then calling MoveNext on the enumerator until there are no more items. It compiles to a while loop like this. Regular for loops don't use the enumerator. They're operating based on the single index variable, rather than the enumerated items. This is more efficient than using the iterator. Though the .NET compiler has some good optimizations that usually make that difference negligible. For loops, however, do require that you know the size or the end of the collection, and have some index into that collection. A foreach loop does not. There are several choices to make
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/iterator-pattern-definition?u=76281980&t=189)** when implementing the iterator pattern. Here are a few of them to think about. The first is an internal or external iterator. Internal iterator does its own iteration with code provided to it, where an external iterator is moved forward by the code that's using the iterator. The external iterator is much more common. The next thing to think about is how safe is the iterator. How does it handle the collection changing while it's being traversed? Foreach loops error out if you remove an item from the collection while iterating through it. Another choice is how much do you want the iterator to do? Does it need to be able to go backward instead of just forward? Does it need to skip certain items? The iterator pattern is everywhere, and now we have a bigger picture of its importance, usage, and value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1), [[Software Design]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** net (1)
> **UI Navigation:** go to (1)
> **Analogies:** picture (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor (1)

#### [Explicit iterator implementation in C# for generated data](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/explicit-iterator-implementation-in-c-sharp-for-generated-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/explicit-iterator-implementation-in-c-sharp-for-generated-data?u=76281980&t=0)** - Now let's implement a simple iterator in a C Sharp console app with the IEnumerable and IEnumerator interfaces. We'll start with a new empty console project named Iterator, then I'll open that project. I'll close the welcome window and open the program file. If you get this dialogue say yes. We're going to create the iterator by implementing the interfaces we just mentioned. So we'll start by using system collections and using system collections generic. To illustrate the iterator pattern, we're going to create an iterator for the number of days in each month. This will allow us to display or count the number of days in each month with a foreach loop. We don't need to know how many months are in a year or how many years we're counting like we would if we did this in a for loop. We'll only need to know that we have a collection to operate on. I'm going to create several classes in this single file for the simplicity of the illustration, but I recommend splitting classes into their own files for anything real. To start, we'll create a type that we can iterate through. I'm going to create a month with days.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/explicit-iterator-implementation-in-c-sharp-for-generated-data?u=76281980&t=99)** It'll represent the month within a given year and the number of days in that month. Now, let's create an enumerator to move through a collection of this new object. When we click here and implement the interface, we can see that we need a current item. There are two here for the typed version of the interface in the untyped version. There's a move next that returns a Boolean for if the enumeration is complete and a reset to return the collection to its beginning. Let's add some private counters to keep track of the year and month. We'll start the year at one, the month starts at zero because move next is called once before returning the first item to find out if the collection is empty. For our current item, we'll return a new month with days. The date will combine the year formatted to four digits with the month. The days we'll get from the date time built in function, days in month for the corresponding year and month. The untyped version of the enumerator can just return the typed version. Dispose would allow us to clean up any resources or events
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/explicit-iterator-implementation-in-c-sharp-for-generated-data?u=76281980&t=196)** the enumerator might need but we don't have any for this simple implementation so we can leave this empty. Move next will increment the month, and if the month is past 12, reset it to one and increment the year. I'll end the enumerator after four years by returning false when the year reaches five, so we won't have to wade through all the possible years. Finally, we'll add reset, setting the month and the year. Now let's create a collection type representing a collection of our month with days. The class will be days and month collection and it will be an IEnumerable of our same type.
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/explicit-iterator-implementation-in-c-sharp-for-generated-data?u=76281980&t=262)** We'll use a suggestion to implement this interface. Normally this collection object would be a data structure that actually maintained a collection but since our collection is coming from this default date time implementation and is generated on the fly, we can just return our enumerator. This method get enumerator is an example of the factory method pattern. The iterator is being created by the call to this get method on the collection. The untyped version can again, just return our typed version. We've implemented the iterator pattern. Let's see it in action. We'll scroll back up to the main method. I'll create the collection and use a simple foreach loop to iterate through the collection.
>
> **[5:27](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/explicit-iterator-implementation-in-c-sharp-for-generated-data?u=76281980&t=327)** I'll fix the capitalization here. I'll write out the date and the days to the console, days in, month with days. We'll use the date, a dash and the days. The code in this loop is going to run as each item is enumerated. It doesn't have to wait for all the items to be ready to start working. I'll put a break point here and down here in move next. When we run the program, we can see that move next is called first and if we continue, we can see the console statement is called. As the foreach loop happens, move next is called and then the right statement and as we go, we can see this written out to the debug console. I'll remove the break points and the application complete. We can see the days in each of these months and here in the year four in the month of February, we can see the first leap year. We can ignore the fact that these dates would not have been used at the time. The iterator pattern separated, moving through a collection of items from the actual collection which in this case didn't even exist as data but was generated on the fly. It also keeps track of where we are
>
> **[7:01](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/explicit-iterator-implementation-in-c-sharp-for-generated-data?u=76281980&t=421)** in the enumeration and is deeply supported by C Sharp.

> [!info]- Semantic Content
>
> **Definitions:** is called (4), is an  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** open the (1)
> **Speakers:** - now (1)

#### [Combining iterators in C# with LINQ](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/combining-iterators-in-c-sharp-with-linq?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/combining-iterators-in-c-sharp-with-linq?u=76281980&t=0)** - [Instructor] Iterators are pretty common in a real application, but you may not realize how common, or some of the details of using them in a more realistic C-sharp application. I've opened the HPlusSports folder within the [[GitHub]] repo in VS Code. We have HPlusSports , an over-architected application for what it does, because it's meant to represent a more complicated enterprise-style corporate sales system. Let's talk about some of the different iterators in the application and add a new one to expand the functionality of our order list. Let's open up the order service in the core project. To get the list of orders with customers, we're calling this method here. It's returning a list from this call To List Async, in the order controller, it's using that list under the web project and controllers. Let's say the business users have decided they don't want to see canceled orders in this list, so let's remove the canceled orders. I'll create a temporary variable to store my orders from the service. Most collection types like list, dictionary, or array
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/combining-iterators-in-c-sharp-with-linq?u=76281980&t=96)** implement an IEnumerable, just like we did for our calendar sample. So we can save for each. If an order status is canceled, we'll remove it from the list. If we run now, we'll get an exception. When I select the order list I can see collection was modified and the enumeration operation may not execute. Let's look at it with the enumerator directly. I'll comment out my loop for a moment and say VAR enumerator, and get the enumerator for the orders list. We'll remove the first item, then call enumerator.movenext. When we run, we'll get the same error. The call to move next is actually checking to see that the collection has not been modified. Let's remove this enumerator code and go back to our For Each loop. What if I add a To List here?
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/combining-iterators-in-c-sharp-with-linq?u=76281980&t=189)** The execution completed successfully. What changed? The To List call is actually enumerating the orders list completely and creating a new list. If the enumeration or the memory size of the list was significant, that can be a big problem. In this case, the resource difference is negligible, but in a large code base, especially if this becomes a pattern for people to just throw a To List on there and see if it works now, you can end up with a lot of unexpected memory and resource issues. The enumerator that the For Each loop is executing is actually the enumerator for the copy of the list we created here. This allows items to be removed from the original list since it's no longer being iterated through when the For Each code executes. So how can we do this better? Link in C-sharp is a powerful way to build actions based on the eye innumerable interface, link extension methods allow chaining actions sequentially. If I look at this collection returned from the order service, I can open the link method where and if I look at the signature I can see that it takes an IEnumerable
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/combining-iterators-in-c-sharp-with-linq?u=76281980&t=283)** and returns IEnumerable. I can pass a function call to return true if the items should be returned as part of iterating through the result. Let's remove this loop and set this down here to the VM directly. I can't directly convert an IEnumerable to an I list because a list has more functionality than an IEnumerable. If I call two lists here, I'm not any better off than a list copy in the For Each loop. But if I'm not doing any list-based operations with the view model, I can change the type in the view model to use IEnumerable instead of list as well, let's do that now and run the application. It looks good. Now we're just enumerating through the one list returned from the service in memory, and we understand a bit more about how the iterator pattern works in C-sharp.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **Tools:** github (1), vs code (1)
> **UI Navigation:** select the (1), open the (1)
> **Env Vars:** var (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### [Challenge: Simultaneous iterators](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-simultaneous-iterators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-simultaneous-iterators?u=76281980&t=0)** - [Instructor] It's time for another challenge. Our new requirement is to add how many other orders that a customer has made and when. For each row that we want to display, we need to add the list of dates for previous orders by that customer. We'll need to iterate inside our views iterator to get the list of dates for previous orders. Now, we could combine a where clause and then select those items in link, but the goal is to practice using an iterator, and to do this in one step instead of two. Admittedly, this is a little contrived, and I probably would do this more simply in a real application. But the idea is to use the innumerable once within a single method you create that returns the items matching and expression. Add a new column to the view, previous orders. Display the list of dates for the previous orders for the same customer in that row. As a bonus, create it as a generic method for any innumerable and any selection expression.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Simultaneous iterators](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-simultaneous-iterators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-simultaneous-iterators?u=76281980&t=0)** - [Instructor] There are a number of ways to solve this. I went with the most generic and reusable way that I could think of, but it may not be the best choice for every situation. First, in the core project, I added an extension. This method takes an enumerable to iterate through, a filter expression to reduce what returns, and a function to transform the input type. In this case, to select the date field that I'm looking for. It returns an enumerable of whatever result type that returns from that expression. The logic is simple. It iterates through a list. If the expression is true, run the transformation action that was specified. There is a bit of iterator magic here in the yield return. This is what's making this method return an enumerable. Yield means return control back to the caller. Whatever code is using this enumeration will execute the code that it has planned. And the next execution of this loop won't run until move next, or the next cycle through a for each loop each loop is called. Let's look at how I use this new method in web and the order view index.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-simultaneous-iterators?u=76281980&t=97)** First, I added a using statement, here on line two so that I could use the method. I added a new column to the view, here on line 12. Then I called my new method on the models orders. We're already on a for each loop, as you can see here on line 19, and we're iterating through it. When I call the filtered select, getEnumerator in the for each loop of the extension method is being called behind the scenes. So I'm actually getting a new iterator on the same collection that I'm iterating through. The first expression here on lines 25 and 26 is, if the customer ID is the same and the order is before the current date, the second expression on line 27 is returning a string to display in this column. String.join, on line 23, is using the enumerable return from the new generic method to put new lines in between each item that's returned. This call to join is going to pass execution back and forth between our new method, getting the items for display and adding them to that string. When we run this, we can see our new dates have been added.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-simultaneous-iterators?u=76281980&t=195)** I'm going to create a couple more orders for the same person. And we can see the set of previous orders is increasing as we go. We were able to add a generic method that creates a pass through iterator and combines the where and select into a single operation. This made it simple to get and display a list of dates in the view, since links where and select are already doing this. My solution isn't actually much more effective than using where and select together, but it does illustrate how, when, and why iterators can be powerful in C Sharp.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **Code Identifiers:** getenumerator (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. The Factory Method Pattern

[↑ Back to Table of Contents](#table-of-contents)

#### [Factory Method pattern definition](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-definition?u=76281980&t=0)** - A factory, the place where a specific type of object is produced, the definition may seem obvious, but the clarity of the term that the pattern is named after is an important part of using [[Design Patterns]]. A factory method is constructing a concrete object of any type, that implements a specified interface from a method in another concrete type. This allows the use of an object without knowing the details of what it is, just knowing what it does. It goes on to decouple, a consumer of an interface from the implementation of that interface. This allows, the use of an object without knowing the details of what it is, just knowing what it does. It decouples a consumer of an interface from the implementation of that interface. It also makes it possible to defer the creation of that object so that the type of returned object can depend on the running applications context. The factory method is another one of the most commonly used design patterns, due to its significant value in a wide array of situations. It can also be known as VirtualConstructor rather than just using the normal constructor for an object. You're creating another version of it somewhere else that performs the same task, but has different information. Here is a simplified diagram for the factory method pattern.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-definition?u=76281980&t=99)** There's some sort of consumer that's using the factory generated object. The product implements the interface Iproduct, but it could be of any concrete type. The consumer doesn't have to know. The creator is whatever class is actually generating the object. This contains the factory method, Create Product is that method in this case. If you remember, I mentioned that Enumerable from C-sharp fits into this pattern. The Foreach loop is the consumer, the Collection is the Creator and the Product Creation is the GetEnumerator method. The product is the Enumerator itself. The consumer of the factory is decoupled from the type of the product produced. The consumer code should only need to change if the interface of the product changes, the implementation and type of the product can change freely from the consumer. The objects creation can depend on dynamic data, either from the user or from the application. This allows more flexibility in the applications, object design. We don't to define the return type at compile time. You can return subclasses of the requested object interface in the case of our enumerable, that meant that we can return the Enumerable
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-definition?u=76281980&t=193)** without a type, but we can also return the generically typed Enumerable that gives the consumer code type checking based on the type we requested the enumerator for. All these things come together to allow for [[Dependency Injection]]. The service provider is a singleton that has factory methods to return the types we request when constructing a class. Specifically in dot net core, we can use the built-in dependency injection classes. DI enables inversion of control. One of the solid design principles. It provides things like better [[Unit Testing]] and can reduce the number of changes required when code that is depended on changes. There are some choices and some flexibility in how you implement the factory method pattern. First, the creator can be abstract or concrete. If it's abstract, it must be some class to be instantiated, but the consumer only needs to know about the abstract type and not the concrete type. You can also make choices on the kinds of parameters that are provided to the factory method, the return type can depend on these parameters. And like we just saw, the generic type in the factory method in IEnumerable allows us to return specific types
>
> **[4:49](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-definition?u=76281980&t=289)** of enumerable to the client without having to create subclasses for returning strings or orders and so on. All right, that gives us a foothold into the factory method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (2), [[Dependency Injection]] (2), [[Unit Testing]] (1)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **CLI Commands:** make (1)
> **Speakers:** - a (1)

#### [Factory Method pattern to choose the implementation of an action dynamically](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-to-choose-the-implementation-of-an-action-dynamically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-to-choose-the-implementation-of-an-action-dynamically?u=76281980&t=0)** - [Instructor] We've already used a simple factory method as part of the iterator. But let's create another sample usage of it to get more perspective on other situations for the factory method. I've created another new console project. You can do that or start with the project from [[GitHub]]. It's in the factory folder. Again, I'll be putting everything in the same file to keep the overall picture simple. But don't do this outside of demo land. Let's imagine an application that needs to let users know that some event has happened. Say, for example, their order has been shipped. I don't want to actually email users while I'm debugging the application and I know that future versions of the application are going to need new ways to notify a user. So I'm going to start by encapsulating the notify user functionality with an IUserNotifier interface. It does one thing, notify a user. We'll have it take a user ID. Let's quickly implement this interface a couple of times. Once for an email notifier and once with a test notifier that wouldn't actually send an email. Now, let's add the creator object. I'm going to call it NotificationServiceProvider. It will have the factory method
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-to-choose-the-implementation-of-an-action-dynamically?u=76281980&t=95)** that returns an IUserNotifier. I'm going to use the compiler directive here to choose the type to return.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-to-choose-the-implementation-of-an-action-dynamically?u=76281980&t=113)** And do some formatting. Using the compiler directive makes sense for our demo but it isn't a good practice in real applications. You can't use the debug build for tracking down issues in the code that's only called for in a release build. This decision point represents a choice based on an environment variable or some other configuration value. Maybe it's a user lookup that checks to see if the user is a test user or if the user wanted email notifications versus text notification. Now we can create a shipping service that's going to use the NotificationServiceProvider. And has a public constructor to set that provider. Among other code that would be in the shipping service, we will have a ShipItem method. There'll be some code to actually ship the item and then a call to the serviceProvider to get a UserNotifier and then notify the user. We'll say the user ID was one. Now, back up in the main method, we'll create our NotificationServiceProvider that's the creator of our pattern and we'll create a shippingService with that NotificationServiceProvider. Then we can call ShipItem. I'll save and run this in the terminal window. The application built with debug,
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-pattern-to-choose-the-implementation-of-an-action-dynamically?u=76281980&t=208)** so we can see that the shippingService called the test version when we shipped the item. If we run again and release, we can see that it notified the user by email. What we have done is use the factory method to provide an object encapsulating an action that the code needed to perform. The code to decide the type of notification, as well as the implementation of the notification is completely separate from the shipping code, which only needs to know from a business perspective that users need to be notified. Changes are insulated from one another and adding a new notification won't affect the shipping code as it would if the type of notifier was created directly by the shipping class. This code is going to be more maintainable with a clear separation of concerns in the long run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **Code Identifiers:** shippingservice (2), serviceprovider (1)
> **Analogies:** picture (1), imagine (1), for example (1)
> **Tools:** github (1), terminal (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Factory Method design pattern for unit testing](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-design-pattern-for-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-design-pattern-for-unit-testing?u=76281980&t=0)** - [Instructor] Now, we'll go back to the HPlusSports application, to look [at.net](https://at.net) cores built in [[Dependency Injection]] framework. How it can use the factory method pattern, and how we can use that, to improve our unit tests. We'll start in startup CS, for the really short version of how this app is already using dependency injection. A service collection is being built with the builder pattern to create a service provider. That service provider, is going to create the controllers and their dependencies when routed to, by MVC. In the configure services method, we're registering how those dependencies, should be created. If I go to definition for Dell configure services, I'm adding the DB context and the repositories to that service collection that can start up. I can look at configure services from the core DLL. Here we're registering the service types, order and sales person. This is the configuration that returns the service we expect when instantiating a new controller class. It's isolating the dependencies and their types from their interfaces. It means that objects don't have to manually create their own dependencies when they're instantiated.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-design-pattern-for-unit-testing?u=76281980&t=93)** If we navigate to sales person service, it's constructor requires that repositories we just saw, were added to that service collection. We have to implement these dependencies to unit test our application. But we want to isolate our code from implementation changes in those dependencies and keep them decoupled. Let's go to the sales person service tests. In the HPlusSports core test project. We can see that this first test, is directly creating the sales person repository mock and the sales group repository mock. If we can change this test, to use dependency injection and have the test code, reference the interfaces instead of the concrete mock classes, it will be better decoupled from our test implementation. To do that, we'll add a service provider to the test class.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-design-pattern-for-unit-testing?u=76281980&t=158)** I'll use the suggestion, to add the dependency injection library from [[Microsoft]]. Remember this service provider is actually an example of the Singleton pattern. Now we'll create a constructor for our test class. And build a service provider with a service collection. We're going to add the service definitions just as they are in the startup for the application. Except that we're going to register our mock versions of those repositories. That don't depend on entity framework. Now we can also register the sales person service that we're using.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-design-pattern-for-unit-testing?u=76281980&t=216)** And build our service provider. This is using the builder pattern. But let's get back to focusing on how we're using the factory pattern. Instead of directly creating the new sales person repository mock. We can use the service provider and the factory method, get service and pass it the type we're looking for. We can do the same for the sales group repo.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-design-pattern-for-unit-testing?u=76281980&t=257)** We can also go down here to where we were creating the salesperson service manually and use the service provider again. This may not seem, like a significant improvement at first, but it means that we don't have to update a set of tests that all instantiate a sales person service. If we add additional dependencies to the service that don't affect this test outcome. We only have to add the dependencies once as new tests are added to the salesperson service. Tests that break less are executed more. Saving time and effort while still providing confidence in the existing code. If we save and run the test from the console,
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/factory-method-design-pattern-for-unit-testing?u=76281980&t=309)** we can see that the tests still succeeds and we have a much more robust test for future updates to the application. This test class was originally created to illustrate the difference between creating your own mock and using the MOQ framework for mocks. As a bonus example of the factory method the MLQ framework, is using a generic factory method named Mock here on lines, 47 and 48. That allows you to build and return a mock of the expected type. We've now seen how to use the factory method get service provided [by.net](https://by.net) cores, built in dependency injection framework, to improve our unit tests and their future flexibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (5), [[Microsoft]] (1)
> **Env Vars:** mvc (1), dll (1), moq (1), mlq (1)
> **UI Navigation:** go to (2), navigate to (1)
> **Prerequisites:** configure (3)
> **URLs:** [at.net](https://at.net) (1), [by.net](https://by.net) (1)
> **Definitions:** means that (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Factory Method with dependency injection](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-factory-method-with-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-factory-method-with-dependency-injection?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-factory-method-with-dependency-injection?u=76281980&t=5)** - [Instructor] For the next challenge, let's bring our example code into HPlusSports. It's possible that you need more flexibility when creating a class for a particular type from the [[Dependency Injection]] framework, like creating the user notifier based on application configuration. For this purpose, there's an overload method. When registering a type with the service provider, it has an option for you to provide your own factory method for a specific type. The challenge is to combine the user notifier that we created with our HPlusSports application to notify a user when an order is created for them. Use the factory method overload to return the proper user notifier. As a bonus, instead of using the compiler directives, use .NET Core's IConfiguration to be able to configure the returns type based on a value in app settings. You should be able to do all of this in the core project without making changes anywhere else in the application, except to add a value to the app settings if you choose to do that. The notifier implementation can still just use the console to indicate what would be happening in the body of the notifier. We don't actually need to send any emails out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Injection]] (1)
> **Env Vars:** net (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Factory Method with dependency injection](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-factory-method-with-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-factory-method-with-dependency-injection?u=76281980&t=0)** - [Instructor] How did you do? Were you able to create a factory method to run with a notification service was requested. For my solution, here in the Core project, I added the IUserNotifier that we used before, as well as the Email and TestUserNotifiers. I added some extra new lines, to help them show up in the debug log. In the OrderService, I added the IUserNotifier field, and added it to the constructor, all the way down here in the order method, on line 62, I called NotifyUser after the order, save changes is complete. Now, we'll look at where we created the factory method in Configure.cs. I add the UserNotifier to the ServiceCollection, and use the overload, that takes a function whose input is the ServiceProvider, and output is the requested type. The configuration access service, IConfiguration, is added to the ServiceProvider by default, and we can use it to read values in appsettings. I use GetService for the Iconfiguration, and get this new value, UseTestUserNotifier, I added to appsettings. In the Web project, in the appsettings file,
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-factory-method-with-dependency-injection?u=76281980&t=94)** you can see this on line 11. Back in the configuration method, I return the type based on this value. This is actually an example of using the factory method, GetService. In a factory method for the UserNotifier, that's called from the factory method, that's used behind the scenes, when the OrderService is instantiated, it's a bit crazy. If I run the application, and make an order, I can go back to my Debug Console,
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-factory-method-with-dependency-injection?u=76281980&t=136)** and I can see that it's Pretending to Notify User 100. I'll go back to the appsettings, and change this to false, and save the file. I don't even need to restart the application, because the application is actually watching the appsettings file. If I create another new order, when I scroll down in the Debug Console now, I'll see that it Notified User 100 by Email, the factory method allow the application, to return the right type in a dynamic situation. This [[Design Patterns]] at several different levels, is providing flexibility for the application, to create the needed type right when it's needed based on information from various places. The code is decoupled, and insulated from changes independent code, it's also easy to test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. The Adapter Pattern

[↑ Back to Table of Contents](#table-of-contents)

#### [Adapter pattern definition](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-definition?u=76281980&t=0)** - [Instructor] We all usually have adapters around to fit this peripheral into that laptop. If you do much travel internationally, you probably have an array of fancy wall power outlet adapters. The wall plug adapter is a great visual for the adapter pattern. The shape of the plug is the interface and to get power, you need to wrap your interface with the expected interface. This is the adapter pattern. It's also known as the wrapper pattern. Get one interface to look like another interface to be able to act as that interface. This allows classes to interact that were not originally intended to. There are two types of the adapter pattern, one that adapts at the class level. The other one does so at the object level, which are the two scopes that we mentioned for design pattern categorization. Let's look at this simple diagram for the class adapter. It uses multiple inheritance to make the adaption possible. It is an adaptee. The adapter inherits the interface that it presents to the consumer, but it also extends the class that it's being adapted to. It is the adaptee but it also implements the interface that the consumer expects. This allows the adapter to be able to override methods on the adaptee if it needs to.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-definition?u=76281980&t=93)** On the other side, this pattern doesn't work for adapting a class as well as subclasses of that class at the same time. Let's compare this to the object version of the adapter. The adapter has a copy of the object being adapted to rather than extending the adaptee. Both of these adapters wrap the adaptee. One by sub classing it, the other by encapsulating the adaptee as an internal object. The object version is said to be using composition while the class version uses inheritance. The object version is more common and can be used to adapt multiple classes to a single interface. The adapter allows you to use an interface in a new way without needing to change that interface. It can also be used to isolate changes in a system. The adapter can absorb the changes of the consumer or the class being adapted, reducing the effect of a change on the system as a whole. We can see the adapter class for things like wrapping system-level calls in C-Sharp. Since .NET Core is multi-platform, each platform or operating system functions are wrapped in a common interface for C-Sharp. File access code on macOS is different
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-definition?u=76281980&t=189)** from file access on [[Windows]], but the same code in .NET Core is used to read and write from the local file system. The runtime abstracts away the system level functions, adapting it and wrapping it into a common interface. You can also see the adapter .NET service references if you've used those before. The generated service reference class for say an old SOAP API are an adapter in their own right. In EF Core database interfaces can vary significantly, but are adapted to the same database context interface. The adapters for each database are stored in their own NuGet packages. However, in this case, the adaption isn't perfect. There are some actions and types in link to sequel that you can do for one database but not for another. The first implementation choice we've already mentioned adapting at the class level or the object level. The next is how detailed does your adapter need to be? How much code and logic should the adapter itself be doing? An adapter might need a lot of code to adapt two really different interfaces. How much logic goes in the adapter and how much can be handled outside of it.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-definition?u=76281980&t=283)** Also related to this is how big or complicated of an interface the adaptor presents to the consumer. A simpler interface will always be more maintainable. Another choice is if the adapter needs to work with multiple consumers, this can add some complexity to what the adapter does as it has to implement multiple interfaces. It may be better to have multiple simpler adapters. If you do choose this, it allows you to have multiple different views into the same actions. Now we've got a good overview of the adapter academically.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Env Vars:** net (3), soap (1), api (1)
> **Definitions:** is a  (1), known as (1), is an  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** macos (1)
> **Cross-References:** we mentioned (1)
> **Analogies:** compare this to (1)
> **Speakers:** - [instructor] (1)

#### [Adapter in C#: Adapt FileStream to ILogger](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-in-c-sharp-adapt-filestream-to-ilogger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-in-c-sharp-adapt-filestream-to-ilogger?u=76281980&t=0)** - [Instructor] Let's build a simple adapter example. I want to use [[Microsoft]]'s logger to log directly to a file. This functionality is not actually built into the logger for a myriad of good reasons that we don't need to get into now, Microsoft's ILogger interface is how I want my application to be able to log to disk. In the future, my code won't need to change if I want to use the built in configurable logging to write to another source. Since I know that I want to write to a file for now, I'm going to adapt file system access to the logging interface. We'll start with another new console app. I've named it adapter. I'll start by opening the terminal and adding the Microsoft logging instructions. This is going to give us the ILogger interface and the Microsoft logging extensions. Then I'll get that out of the way. In the program, we'll start with a couple using statements. The logging extensions, and system dot text to write to the file. Let's create the adapter, I'll call it file logger. We're using the class adapter.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-in-c-sharp-adapt-filestream-to-ilogger?u=76281980&t=93)** So we will extend the file stream found in [system.io](https://system.io). The file logger is a file stream. Now we're going to implement the ILogger interface. It has a generic type we'll represent with t. Now I'll click there and click the suggestion to implement the interface. The next thing that we need to add is a constructor for the file stream part of our adapter. We'll take in the file path and create the file stream with that path. As well as the file mode append, since it's a logger. We're not worried about the logging scopes now, we would have to implement this, if this were an actual file logger, instead of an adapter demo, in a similar way, is enabled can just return true. For the actual call to log, we'll start by creating a byte array of our input value.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-in-c-sharp-adapt-filestream-to-ilogger?u=76281980&t=170)** We'll use the UTF-8 encoding and get the bytes from the string that was passed in. Finally, we'll add a new line at the end of the message. Since this logger is also a file stream, write is an available method. So we'll just write out that message. Then we can call flash on the file stream to ensure the message is sent to disk for every message that's logged. Because we're extending the file stream, it's possible for this file logger to override any of these methods that are built into file stream, if that was necessary for the adaption. It also gives us access to protected members of the class. Alright, let's test it out. In the main method, we'll create a logger from our file logger, with the type of program since that's the type we're calling it from. We'll call the file log dot text. Then we can use the Microsoft extension method log debug to write a message. I'll save the program and open back up the terminal and run the application. You can see the log dot text file appeared and it has our log message. If we run again, the application writes another log message to the same file.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-in-c-sharp-adapt-filestream-to-ilogger?u=76281980&t=265)** We can now use the file stream like it was an ILogger. We are ignoring a lot of functionality that would be required to put this in service in a real application, but it shows how we can use the class adapter pattern to add a new interface to an existing type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (5)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** terminal (2)
> **URLs:** [system.io](https://system.io) (1)
> **Env Vars:** utf (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Adapter pattern for ViewModel mapping](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-for-viewmodel-mapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-for-viewmodel-mapping?u=76281980&t=0)** - [Instructor] Let's add an adapter to further the improvement of our HPlusSports application. We'll start by looking at the order index view. Web, views, order, index. You can see online one that it's using an order list ViewModel. If we open the ViewModels folder and look at that, we can see it's a list of order which is our shared type. If we go back again to the view, we can see that for each column here, we're doing some sort of adapting from the shared type to something we can display. Mostly it's string formatting. For example, we're combining the first name and last name. We'll want to encapsulate all of this logic in a ViewModel that will adapt our shared object to the view. We'll create the new ViewModel in the ViewModel folder and call it OrderItemViewModel. We'll use the system collections to iterate through our list. We'll use the core project for the filter select we created before. And we'll use the shared models for the order type. I'll put this in our namespace and define the class. Now we can create this OrderListItemViewModel
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-for-viewmodel-mapping?u=76281980&t=98)** with the object adapter pattern from a shared model of the order to this ViewModel. To do that we'll add the private object of the order type. Now, we can add public properties that present to the view, the customer ID, the customer name, the TotalDue,
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-for-viewmodel-mapping?u=76281980&t=128)** we're doing all the formatting that we were doing in the view here in the ViewModel. The status, the OrderDate, and then a property
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-for-viewmodel-mapping?u=76281980&t=142)** for a previous order dates. We'll populate that in a constructor. Let's go back up here and create the constructor. Since we need the collection for our enumeration to populate the previous order dates we'll start by taking in an innumerable of the order, which is the whole order list. Then we'll take in the individual order that this view model is adapting. I'll name it adaptee to make it more clear. we'll set our local order as the adaptee, and then we'll set our previous order dates. I'll pull this from our index. Copy that and paste it here. Instead of Model.Orders, it'll just be the local orders. Now we can save this and in our OrderListViewModel, instead use our new OrderItemViewModel. Now, we can go to the view and clean it up. It's going to be a lot simpler since we've moved all the logic to our ViewModel. The customer ID is single and the customer name is also a single property. We can remove all of this code
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/adapter-pattern-for-viewmodel-mapping?u=76281980&t=238)** and just put Order.PreviousOrderDates. The TotalDue and OrderDate, no longer need their formatting. Now we need to update the controller. Here, instead of just returning the order object we'll use a select and return our new ViewModel. We'll do the same thing here for the customer specific version of the list page. First, I'll create the temporary variable and move our service selection there, then do the same select. when we save and run, we'll select the orders and we can see that our page still populates. So we haven't broken anything. Now, if the shared type changes our view will not necessarily be broken as it doesn't rely on the shared model directly anymore. We also have a place to encapsulate view formatting and display logic, all with very little additional code. We've used the object adapter pattern to adapt the shared order class to the view specific class.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (1), go to (1), select the (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Class adapter vs. object adapter](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-class-adapter-vs-object-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/challenge-class-adapter-vs-object-adapter?u=76281980&t=0)** - [Instructor] Now that we've seen both the class and object variants of the adapter pattern, we can compare them in one more way. The challenge is to convert the H+ Sport's order item view model we've just created from using the object adapter pattern to using the class adapter pattern. Once you do this, think about how this changes the way that the adaption happens and what additional flexibility or inflexibility you now have in the applications architecture. What would it mean if the whole application use this pattern for view models? What's easier or more complicated with the class adapter pattern over the object adapter pattern?

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Class adapter vs. object adapter](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-class-adapter-vs-object-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-class-adapter-vs-object-adapter?u=76281980&t=0)** - [Instructor] Were you able to change the adapter pattern we were using in the view model? The class adapter, wasn't the best tool for the job here but it was worth trying out so that we can understand why. In the order item view model, I removed the private order and instead extended the order class. This allowed the removal of properties that we didn't modify down here on lines 31 through 34 but it meant that I had to override the total due and the order date properties since we want to present string versions of those properties. Rather than referencing the order in these properties we can use the orders properties directly except where we need to use the base, like we're doing here for the total due and the order date. However, the view model is now really muddied up the display properties with the original orders properties. So back up here, you can see I've created the interface I order item view model. This will keep the view from accidentally referencing order properties that it shouldn't have access to in the order list view model. In the I innumerable, I changed it to use the interface
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-class-adapter-vs-object-adapter?u=76281980&t=96)** for order item view model instead of the concrete class. Alright, back to the view model. We can see that it's a subtype of order but we still need to map the order itself to our view model. You can cast a subtype up to its parent type, but you can't cast down to a child type. It wouldn't make sense for the order service to create and return a view model type. But if you were retrieving data from a web service, you could create the view model type when deserializing the data, saving this step of field mapping on lines 11 through 21. All the correct fields will always be available since the order item view model is in order but it will require extra work when new properties are added. You could use a package like AutoMapper or a trick like serializing and deserializing the order to the new type to remove this mapping section, but if you can design so that you don't need a workaround, you probably should. The additional steps required in this view model creation and requiring some acrobatics around the type names is a good illustration of why we say favor composition over inheritance. This illustrates some of the benefits and drawbacks for which adapter pattern to choose
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/solution-class-adapter-vs-object-adapter?u=76281980&t=191)** and even whether an adapter pattern is the best choice for view model mapping. Thinking about [[Software Architecture]] in this way and creating a POC to illustrate it is a great way to find out what will and won't work as you expand your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Architecture]] (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **Env Vars:** poc (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/next-steps?u=76281980&t=0)** - [Richard] Congratulations, you've made it to the end. I understand that you may have been promised cake. Please see your manager in that regard. In this course we learn what [[Design Patterns]] are, how they're used in C#, why they're useful and how we can use them in C# to make our architectures better. But where should you go from here? Consider reading the original "Gang of Four Patterns" book to get really deep details. The examples in C++ may not be the easiest to read and some of the issues mentioned are not the problem that they used to be due to improvements in language design, but overall, the book has held up amazingly well over the years, which is one of the reasons this course even exists. Another great read on design patterns can be found here by Martin Fowler. He talks about what a pattern is and some of the [[Forms]] of patterns in a lot of detail. Another book I recommend is his "Patterns of Enterprise Application Architecture" which can be found here. Next, consider keeping up with the changes to the C# language and look at the .net source code, which can be found here. You can investigate the code to see how patterns are being used throughout .net and C#. To get a different view of applying patterns with a larger focus on architecture,
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-design-patterns-part-1-14140825/next-steps?u=76281980&t=96)** check out my application architecture with EF core course. To use these patterns in a Blazor web app, check out my course to get started on Blazor. Thanks and take it easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (2), [[Forms]] (1)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [richard] (1)


## Instructor

- [[Richard Goforth]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/csharp-design-patterns-2314072)

## Skills Covered

- Software Design Patterns
- C#

## Path Context

### In [[Getting Started as a C- Developer]]
← [[C- Interfaces and Generics]] | **7 of 9** | [[C- Design Patterns Part 2]] →

## Appears In

- [[Getting Started as a C- Developer]]

## Related Courses

_Courses sharing skills:_

- [[C- Design Patterns Part 2]] — C#, Software Design Patterns
- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[JavaScript- Patterns]] — Software Design Patterns
- [[C++ Design Patterns- Structural]] — Software Design Patterns

---

[↑ Back to top](#)