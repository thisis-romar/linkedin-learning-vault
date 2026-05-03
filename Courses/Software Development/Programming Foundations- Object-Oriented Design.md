---
type: course
cssclasses:
  - lle-course
slug: programming-foundations-object-oriented-design-3
url: "https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3"
duration_minutes: 221
duration: 3h 41m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF2DX4_GzNtiw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567115269548?e=2147483647&amp;v=beta&amp;t=g5LmcVPdzhfW9lqHFYmnAiAN2xMN4TIjV779tiJVtb0"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a Programmer- Foundations]]'
  - '[[Career Essentials in Software Development by Microsoft and LinkedIn]]'
prev_courses:
  - '[[Programming Foundations- Beyond the Fundamentals]]'
  - '[[Programming Foundations- Beyond the Fundamentals]]'
next_courses:
  - '[[Programming Foundations- Algorithms]]'
  - null
path_nav: '[{"path":"Become a Programmer- Foundations","position":3,"total":12,"prev":"Programming Foundations- Beyond the Fundamentals","next":"Programming Foundations- Algorithms"},{"path":"Career Essentials in Software Development by Microsoft and LinkedIn","position":4,"total":4,"prev":"Programming Foundations- Beyond the Fundamentals","next":null}]'
path_count: 2
tags:
  - course
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations-%20Object-Oriented%20Design.md)

![Programming Foundations: Object-Oriented Design](https://media.licdn.com/dms/image/v2/C4E0DAQF2DX4_GzNtiw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567115269548?e=2147483647&amp;v=beta&amp;t=g5LmcVPdzhfW9lqHFYmnAiAN2xMN4TIjV779tiJVtb0)

# Programming Foundations: Object-Oriented Design

> All good software starts with a great design. Object-oriented design helps developers plan applications before they write a single line of code, and break down ideas into reusable and maintainable components. This course focuses on the foundational concepts, teaching them in a fun, interactive way to help you quickly develop your skills. Tag team Olivia and Barron Stone introduce you to the concep

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3) | 3h 41m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learn object-oriented design principles](#learn-object-oriented-design-principles)
  - [What you should know](#what-you-should-know)
- [**1. Object-Oriented Fundamentals**](#1-object-oriented-fundamentals) (9 videos)
  - [Object-oriented thinking](#object-oriented-thinking)
  - [Objects](#objects)
  - [Classes](#classes)
  - [Abstraction](#abstraction)
  - [Encapsulation](#encapsulation)
  - [Inheritance](#inheritance)
  - [Polymorphism](#polymorphism)
  - [Analysis, design, and programming](#analysis-design-and-programming)
  - [Unified modeling language (UML)](#unified-modeling-language-uml)
- [**2. Requirements**](#2-requirements) (4 videos)
  - [Defining requirements](#defining-requirements)
  - [FURPS+ requirements](#furps-requirements)
  - [Challenge: Jukebox requirements](#challenge-jukebox-requirements)
  - [Solution: Jukebox requirements](#solution-jukebox-requirements)
- [**3. Use Cases and User Stories**](#3-use-cases-and-user-stories) (7 videos)
  - [Use cases](#use-cases)
  - [Identifying the actors](#identifying-the-actors)
  - [Identifying the scenarios](#identifying-the-scenarios)
  - [Diagramming use cases](#diagramming-use-cases)
  - [User stories](#user-stories)
  - [Challenge: Jukebox use cases](#challenge-jukebox-use-cases)
  - [Solution: Jukebox use cases](#solution-jukebox-use-cases)
- [**4. Domain Modeling**](#4-domain-modeling) (6 videos)
  - [Identifying the objects](#identifying-the-objects)
  - [Identifying class relationships](#identifying-class-relationships)
  - [Identifying class responsibilities](#identifying-class-responsibilities)
  - [CRC cards](#crc-cards)
  - [Challenge: Jukebox conceptual model](#challenge-jukebox-conceptual-model)
  - [Solution: Jukebox conceptual model](#solution-jukebox-conceptual-model)
- [**5. Class Diagrams**](#5-class-diagrams) (8 videos)
  - [Creating class diagrams: Attributes](#creating-class-diagrams-attributes)
  - [Creating class diagrams: Behaviors](#creating-class-diagrams-behaviors)
  - [Converting class diagrams into code](#converting-class-diagrams-into-code)
  - [Instantiating classes](#instantiating-classes)
  - [Class with multiple constructors](#class-with-multiple-constructors)
  - [Static attributes and methods](#static-attributes-and-methods)
  - [Challenge: Jukebox class diagrams](#challenge-jukebox-class-diagrams)
  - [Solution: Jukebox class diagrams](#solution-jukebox-class-diagrams)
- [**6. Inheritance and Composition**](#6-inheritance-and-composition) (8 videos)
  - [Identifying inheritance situations](#identifying-inheritance-situations)
  - [Using inheritance](#using-inheritance)
  - [Abstract and concrete classes](#abstract-and-concrete-classes)
  - [Interfaces](#interfaces)
  - [Aggregation](#aggregation)
  - [Composition](#composition)
  - [Challenge: Jukebox class relationships](#challenge-jukebox-class-relationships)
  - [Solution: Jukebox class relationships](#solution-jukebox-class-relationships)
- [**7. Software Development**](#7-software-development) (4 videos)
  - [OOP support in different languages](#oop-support-in-different-languages)
  - [General development principles](#general-development-principles)
  - [Software testing](#software-testing)
  - [Design patterns](#design-patterns)
- [**Glossaries**](#glossaries) (0 videos)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn object-oriented design principles](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/learn-object-oriented-design-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/learn-object-oriented-design-principles?u=76281980&t=0)** (keyboard clicking)
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/learn-object-oriented-design-principles?u=76281980&t=3)** - As someone who loves writing code, as soon as I get a new idea for an application, I jump right to programming.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/learn-object-oriented-design-principles?u=76281980&t=11)** - And as someone who manages [[Software Development]] teams, I know that's the last thing you should be doing. Good software starts with the design, so you can avoid wasting time going down the wrong path. I'm Olivia Stone.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/learn-object-oriented-design-principles?u=76281980&t=24)** - And I'm Barron Stone. In this course, we'll introduce you to the fundamentals of object oriented analysis and design.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/learn-object-oriented-design-principles?u=76281980&t=30)** - It's what you should be doing to plan your program before writing a single line of code. Object oriented programming languages have become the standard for everything from [[Web Development]] to running desktop applications. With proper design, they enable you to create applications that are flexible, maintainable, and extensible.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/learn-object-oriented-design-principles?u=76281980&t=49)** - [Barron] We'll start with the foundational concepts and terminology you need to discuss object oriented development. From there, we'll walk through a process to take your ideas for an application, something you'd write on the back of a napkin, and understand how to break it apart into the right pieces so you know exactly what code to write.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/learn-object-oriented-design-principles?u=76281980&t=67)** - Now, we won't be writing code in this course because during the design process, we don't need to. Instead, we'll use basic components of the Unified Modeling Language, or UML, to diagram visual models of our object oriented systems. It's how you can articulate your ideas to collaborate with others.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/learn-object-oriented-design-principles?u=76281980&t=85)** - So let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Web Development]] (1)
> **Speakers:** - and (2), - as (1), - it (1), - [barron] (1), - now (1)
> **Env Vars:** uml (1)
> **Non-Speech:** (keyboard clicking) (1)

#### [What you should know](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/what-you-should-know?u=76281980&t=0)** - Although we won't be writing code in this course, we will explore a few short examples of code in several different languages. So you should have at least a basic understanding of programming. The fundamentals like variables and functions, loops and conditions.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/what-you-should-know?u=76281980&t=15)** - If you're already working with an object-oriented language, you've probably encountered some of the core concepts like classes and objects, but you may not be using them to their full extent, or are struggling to maintain a growing application.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/what-you-should-know?u=76281980&t=29)** - Or you might be a seasoned programmer with years of experience in non object-oriented languages. I first learned programming with straight C and I understand that it can be difficult to make the jump to an object-oriented mindset. If any of that describes you, this is the perfect course to begin thinking in object-oriented ways. To unlock what your language can really do.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/what-you-should-know?u=76281980&t=51)** - This course is about the object-oriented design process. Not programming, so our tools, we've pencil and paper, index cards, and whiteboards, not a code editor or IDE. Now there's no one right way to go about this. Object-oriented design is not a formal process. It's set of ideas and techniques to incorporate into your own process. It'll allow you to build better and more complex applications.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/what-you-should-know?u=76281980&t=77)** - We've included several challenge problems throughout this course, and even if you don't have time to sit down and create your own formal solution to them, we strongly encourage you to at least think about each of the challenges and watch our solutions to really get the most out of this course.

> [!info]- Semantic Content
>
> **Speakers:** - although (1), - if (1), - or (1), - this (1), - we (1)
> **CLI Commands:** make (1)
> **Env Vars:** ide (1)


### 1. Object-Oriented Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Object-oriented thinking](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/object-oriented-thinking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/object-oriented-thinking?u=76281980&t=0)** - Many of today's most popular programming languages are object oriented, but that's not the only way to program. To understand when and why using object oriented languages can be beneficial, it helps to compare it with a common alternative. Procedural programming languages like plain C. In procedural code, the program is written as a long series of operations to execute. Now, some of that might be organized into named functions or sub-routines to make the code modular and maintainable, but the end goal is really just to get from Point A to Point B to complete some task. It's a straight forward approach that I like to relate to writing a recipe for a cookbook. The program or recipe to say, bake a cake, would list the sequence of steps you need to follow. Mix the ingredients together, pour them into a cake pan, and put it in the oven. Just execute those steps in that order and voila, a cake. I've found that new programmers have a tendency to write code in this procedural manner because it's easy to think of simple programs in terms of sequential steps.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/object-oriented-thinking?u=76281980&t=69)** - Right, and to approach that same task of baking a cake in an object oriented manner rather than describing a sequence of steps, I'll describe each of the objects in my kitchen, the pan, the oven, and the mixer, and what each one can do. So, instead of writing a single large program, my object oriented code is split apart into several self contained objects. Almost like several mini programs where each object contains its own data and logic to describe how it behaves and interacts with other objects. The idea here is that we can talk about and use these programmed objects similar to objects in the real world. The mixer can mix ingredients together. I can pour the mix into the pan and the oven can bake whatever I give it. The end result of Barron's procedural approach and my object oriented approach is the same. We both made a cake, but the way we thought about the problem and organized our code was very different.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/object-oriented-thinking?u=76281980&t=129)** - Now, neither of these two approaches is better than the other all of the time. Each has its own advantages and disadvantages that apply to different situations.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/object-oriented-thinking?u=76281980&t=140)** - One of the main advantages of using an object oriented approach is code re-usability. If we want to make something other than a cake, perhaps muffins, I've already created the functionality to mix and bake things in the mixer and the oven. So I can reuse those objects. I'll need to define one new object to make my muffins, a muffin tray, but I can base the muffin tray on the cake pan object that I already have because they have a lot in common, holding ingredients that go into the oven. Realize that object oriented programming is not itself a language. Object orientation is referred to as a programming paradigm. A set of ideas that's supported by many languages.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/object-oriented-thinking?u=76281980&t=183)** - And there are other programming paradigms beyond just procedural and object orientation. If you take a computer science course, you might encounter logic programming languages, like Prolog. Or [[Functional Programming]] languages, like Haskell. However, those both tend to live in very specialized environments. For the practical, pragmatic world of creating web applications, mobile apps, desktop applications, or [[Game Development]], you'll almost certainly be using object oriented programming languages. In fact, all of the top high demand languages today are object oriented. Now, many of those languages support multiple paradigms. Meaning you can use them to write code in an object oriented way or in a procedural way. Your choice. When I was first learning object oriented programming in college with [[Java]], I found that most of the small classroom programs I had to write, would have been way quicker and easier to hack together using a procedural approach. The amount of object oriented code I had to write to get things working often felt bloated and way beyond the scope of those projects. And you may find yourself feeling the same way as you're learning, just keep in mind we use small, simple examples to learn but the real value of object orientation will appear as your projects grow in scale and require changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (1), [[Game Development]] (1), [[Java]] (1)
> **Speakers:** - many (1), - right (1), - now (1), - one (1), - and (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)

#### [Objects](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=0)** - The idea behind object-oriented computing is that it makes thinking about and discussing programming similar to thinking about the real world. So to ask what's an object in a computer program, start by asking, what's an object in the real world?
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=17)** - So is this cookie an object?
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=20)** - Sure.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=21)** - What about this mug?
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=22)** - Absolutely. These are both objects, they're things.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=25)** - What about this mug? Are these two mugs the same object?
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=29)** - No, although they're similar mugs, they're not the same mug. These are separate objects, each with its own existence. It's own identity that's independent of all other objects. Every object has characteristics, inherent properties that describe its current state. For example, a mug can be full, empty, or somewhere in between. Filling one mug with coffee does not mean all of the mugs in the world get filled. The current state of this mug being full is independent of this other empty mug because they're separate objects.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=64)** - But there's more to a mug on whether it's empty or full. What about its size? Wait, or color?
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=70)** - Well, most objects will have multiple attributes. Some of those attributes like color and size will remain constant. Whereas other attributes like whether it's full or empty are likely to change over the mug's lifetime.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=85)** - I usually use the term properties to describe those things.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=88)** - Sure. Attributes or properties, characteristics, states, fields, variables, those are all related terms that you'll often hear programmers use interchangeably. Their exact meaning may differ slightly depending on the situation and specific context through language but for this course, I'll stick with using the term attributes.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=109)** - But I still prefer properties. Okay, so it's easy to think of the mug as an object since it's a single thing. But what about something complex like my cellphone which has hundreds of components and electronic parts?
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=123)** - Well, being an object has nothing to do with complexity. And it's possible for one object to contain other objects. I can talk about your phone as a thing in the real world so I can think of it as a computing object with attributes like color, size, and weight. In addition to that, your cellphone has behaviors. It can ring, and it can send text messages.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=146)** - But the mug can't ring or text. So those behaviors are specific to my cellphone object.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=151)** - Right, and I wouldn't try to use your cellphone to hold coffee. Identity, attributes, and behaviors. Those are the three things that describe objects in an [[Object-Oriented Programming (OOP)|object-oriented programming]] language. Every object in a computer program is self-contained so it has its own identity separate from other objects, its own attributes to describe its current state and its own behaviors, the things it can do.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=178)** - These examples you've used, mugs, cookies, cellphones, they're all things that we can see and touch. But software often describes things that don't have a tangible representation. So can objects in a program represent more than physical things?
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=193)** - Good point. In programming, the idea of an object extends further to describe non-tangible things too. Like a date, a timer, or a bank account. You can't touch and hold a bank account in real life but it's still a well-defined idea that meets the definition of an object. It has identity, one bank account is separate from another bank account. It has attributes like an account number and a balance. And it has behaviors, you can deposit to a bank account and withdraw from it. One of the challenges of object-oriented design is figuring out if something in your application should be represented as an object. That's easy when your application needs something like a mug, a person, or a document. But what if you're building an event management application? Would an event be an object? Well, just ask yourself, is it a noun? Nouns aren't just physical things, but also people, places, and ideas or concepts. As a simple test, if you were talking about it in a conversation, could you put the [[Microsoft Word|word]] the in front of it? The mug, the person, the document. Sure, but also, the bank account, the time, the event. Those work too, those could be objects. However, you would not say the ringing or the texting. Those are verbs that describe the behaviors of an object, not the object itself.
>
> **[4:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/objects?u=76281980&t=285)** We need to identify those verbs as well because a program without any behaviors isn't very useful. But as the name object-oriented implies, when it comes to structuring an object-oriented program, we tend to focus on the nouns first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Microsoft Word|Word]] (1)
> **Speakers:** - but (3), - sure (2), - what (2), - well (2), - the (1)
> **Analogies:** similar to (1), for example (1), think of it as (1)

#### [Classes](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/classes?u=76281980&t=0)** - Objects don't just magically appear in a program. We have to create them, and we do so from classes. A class is the detailed description, the definition, the template of what an object will be. but it isn't the object itself. Once we've written a class and defined it, we can use it to create as many objects based on that class as we want. Different classes let us create different types of objects.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/classes?u=76281980&t=27)** - Classes are like our collection of cookie cutters. This particular cutter would be the class to create circular cookies. It defines how the cookie will look. But the cutter itself is not a cookie. And we only need this one cutter to create a tray full of round cookies, each a separate object ready for the oven.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/classes?u=76281980&t=45)** - Remember that the class always comes first. You can't make round cookies without the circular cutter. Now, there are three components that make up a class in [[Object-Oriented Programming (OOP)|object-oriented programming]]. Each class has a name, literally what is it? For example, a round cookie. A class can have attributes to describe that object, such as weight, color and whether or not the cookie has icing. And it can have behaviors, the things that object can do, like decorate or consume. Now you might encounter other, somewhat interchangeable, terms for these words. Instead of name, you might see type, because each class creates objects of a particular type. And as we talked about earlier, you might also see attributes referred to as properties, or more generically as data. And behaviors are also referred to as operations. When we actually write those behaviors as code, they're typically called a method. A method is a block of code or procedure that can be called to perform some action, and it may return a value.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/classes?u=76281980&t=112)** - What you just described is the textbook definition of a function. Code that performs some action and returns a value. What's the difference between methods and functions?
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/classes?u=76281980&t=122)** - Well, methods are basically functions with the key difference that methods are defined as part of a class. So they're included in any object in that class. And, since methods exist as part of an object, they can only access data that is known to that object. These concepts of classes and objects can be a bit confusing at first, so let's look at an example using our round cookie class. You'll often see a diagram that looks something like this to sketch out a class, with the name on top, attributes in the middle, and behaviors on the bottom. And we'll look at these diagrams in more detail later. Although the class says that each round cookie will have a size, a color, and possibly icing, it doesn't specify the actual values for size, color, and icing. It's just providing a definition. But, after defining the class, I can create objects based on it through a process called instantiation. And it's called that because each object I create is an instance of that particular class. I've create two instances here for me and Olivia, but there's really no limit to the number I can create. Now, each of the instances, each object has its own identity, independent from other objects. Its own data. The class says that each round cookie has a color, but the individual objects say that my cookie is red and Olivia's cookie, which doesn't have icing, is brown.
>
> **[3:31](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/classes?u=76281980&t=211)** - I think my cookie needs to be a little bit more colorful, so I'm going to put some blue icing on it.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/classes?u=76281980&t=216)** - And since that decorate method only affects the attributes of that instance, my cookie stays red. So, to create objects, I need the class first. And if I haven't defined the class myself, someone else needs to have already defined it for me. Fortunately, most object-oriented languages come with a collection of predefined classes. So you can start creating objects right away. Basic useful things like strings, dates, and arrays are often included as provided classes, so you don't have to begin each program by defining the same common classes over and over again. These classes are defined and then gathered together into frameworks or libraries. In [[Java]], you have the Java Class Library with about 6,000 classes available to you. And the .NET Framework for C# and [VB.net](https://VB.net) has even more than that. C++ has the C++ Standard Library, and Ruby also calls its default library The Standard Library, as does [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Python (Programming Language)|Python]] (1)
> **Speakers:** - objects (1), - classes (1), - remember (1), - what (1), - well (1)
> **CLI Commands:** make (2), ruby (1), python (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), such as (1)
> **URLs:** [vb.net](https://vb.net) (1)
> **Env Vars:** net (1)
> **Cross-References:** we talked about (1)

#### [Abstraction](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/abstraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/abstraction?u=76281980&t=0)** - There are four fundamental ideas in [[Object-Oriented Programming (OOP)|object-oriented programming]] to keep in mind when creating classes. And they have the wonderful names Abstraction. Polymorphism. Inheritance. And Encapsulation. And one way I like to remember these terms is with the delicious acronym A-P-I-E. A pie! Now, these four words can sound intimidating, but you probably do most of them already in daily thought and conversation, even if you don't use these fancy academic terms to describe them. Let me prove that with the first one: Abstraction. If I say, 'person' you know what I mean. I didn't specify who I was thinking of. I didn't even describe the person. Male or female. Tall or short. You might have imagined someone in particular. That's OK. But I don't have to get that specific because you understand the idea of a person. You've known and encountered enough real people to abstract the idea of what a person means. Abstraction means we focus on the essential qualities of something rather than one specific example. By using abstraction, we automatically discard what's unimportant or irrelevant. Your mental model of a person might have a name, a gender, and a height, but it probably doesn't have flavor or icing. Those are things that make sense if I was describing a cookie, but they're irrelevant to the idea of a person. Abstraction means the idea or concept of a person
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/abstraction?u=76281980&t=94)** is completely separate from any specific instance. It's what we do all of the time in conversation. And it's at the heart of object-oriented programming because it's what we're doing when we make a class. I don't create separate classes for each person I need to define in my program. I just focus on the essential qualities of the idea I care about and I write one person class. I'll focus on things like: each person has a name, a height, and a gender. And because I always want to discard what's unimportant, it's never just, what does a person class look like? It's, what should a person class look like for this application? Under these circumstances, at this time. Focusing always on just the essentials. So it might be true that every person has a height, but if my application doesn't care about that piece of information, then I don't need that attribute defined in my class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2)
> **CLI Commands:** make (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - there (1)

#### [Encapsulation](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=0)** - The idea of encapsulation is about containing the elements of an object. Not just to keep them together, but to also protect them.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=9)** - Ow!
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=11)** - We bundle an object's attributes or data along with the methods that operate on that data within the sane unit or the same class. One reason for doing that is to restrict access to some of the object's components.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=23)** - Like how you're restricting me from taking a cookie?
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=26)** - No, you can have a cookie, but you'll have to use my method to get to it. My cookie jar class has an attribute that represents the number of cookies in the jar. When I create an instance of my cookie jar, I don't want you or any other part of my application to be able to reach in and directly change the number of cookies.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=46)** - Oh, come on. You can trust me.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=49)** - It's not only about trust. If I let you directly change things, like the number, you might unknowingly change it to something invalid, like a negative one. That value doesn't make sense for the number of cookies and might cause my program to crash. Another reason to restrict access is that, well, maybe I want to limit the number of cookies you can have.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=70)** - Whoa. No. I don't like the sound of that. So what do I have to do to get a cookie?
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=76)** - Well, to control access to that attribute, I'll hide it so it's only accessible from inside the cookie jar object itself. Then, I'll add a method called 'request cookie' that can be accessed from other parts of the application. When you use the 'request cookie' method, you'll get a cookie, and the method will modify the number of cookies attribute accordingly. One of the principles of encapsulation is that an object should not make anything about itself available except what is absolutely necessary for other parts of the application to work. This is a concept referred to as 'black boxing'. I'm closing off the inner workings of the cookie jar and only revealing specific inputs and outputs. You don't need to know how the 'request cookie' method is implemented under the hood to use it.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=125)** - But I'm an engineer. I need to know how everything works.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=130)** - Do you know how your phone works?
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=132)** - Well, sure. I just punch the number into the keypad and it makes a call.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=137)** - Do you know how it works internally?
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=139)** - Well, you see-
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=140)** - It doesn't matter. If you get a new cellphone, the inner workings can be completely different. But it has the same buttons to press. So you can still use it. One of the main benefits with object orientation is that it allows us to more safely change the way the object works without changing the [[Representational State Transfer (REST)|rest]] of the application. Perhaps, when I first wrote my cookie jar class, I represented the total number of cookies as a single value. Then, later on, I decide to use three separate values to keep track of each type of cookie individually. Since I hid those attributes, I don't have to worry about breaking the other 20 parts of my application that have been using the 'request cookie' method to grab cookies. I'll just need to modify the 'request cookie' method and the class to handle the change.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=188)** - Well, if you're the person writing these classes, why would you want to hide your own code? Why keep secrets from yourself?
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=195)** - It's not about being secretive. It's about reducing dependencies between different parts of the application. The change in one place won't cause a domino effect and require multiple changes elsewhere.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=207)** - Then how much should you hide?
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/encapsulation?u=76281980&t=209)** - Well, different languages have different levels of support for hiding properties and methods. But the general rule is to encapsulate as much as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Speakers:** - well (5), - it (3), - do (2), - the (1), - ow (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Best Practices:** general rule (1)

#### [Inheritance](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/inheritance?u=76281980&t=0)** When I need to create a new class it may not always be necessary to build it from scratch. If my program has an existing class that's similar to what I need, then I can use inheritance to base my new class on that existing one. Inheritance enables a new class to receive or inherit the attributes and methods of existing classes using the same implementation which is a great form of code reuse. Let's say for example I want to model the characters present in a bakery. I might start by defining a class for customers, which has attributes for the customer's name, phone number, email address, and a customer ID number. Additionally I give that customer class a method to update their contact information, and a method to purchase items. The bakery also has employees so I create an employee class with attributes for the employee's name, phone number, email address, and employee ID number. The employee can update their contact information, get promoted, or retire. Now, looking at these two classes side by side, you might have noticed that they have quite a few similarities. Employee's and customer's both have a name, phone number, email address, and a method to update their contact information. Which are things that are common to all people. So rather then defining those attributes separately in each class, I can create a person class with all of those common attributes and methods. And then base the customer and employee classes on it.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/inheritance?u=76281980&t=95)** The phrase to use here is customer inherits from person. Which means the new customer class automatically gets everything in the person class. All of it's attributes and behavior's without having to write any extra code. From there, I can add any additional attributes, and methods that are unique to customer's and employee's. By convention if I'm drawing a class diagram with inheritance I'll use this style of an arrow to show the relationship between these two classes, and indicate it's direction. The term that's most commonly used for this relationship is that the person class is the super class, and the new customer and employee classes are subclasses of it. You'll also hear these described as the parent class, and the child class, which is typically used when there's only a single level of inheritance, or the base class and the derived class. Which better captures the concept of inheritance that's multiple levels deep. That said there's no limit to the number of child classes I can create based off of a single parent. If I later realize my shop needs another class for the courier that delivers packages, that's easy to add. I'll just create the courier as a subclass of person, and give it a unique method to deliver packages. In addition to benefiting from code reuse, the great thing about inheritance is that if I make a change in a super class, it will automatically filter down and effect all of the subclasses. So when I realized I should have been keeping track
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/inheritance?u=76281980&t=190)** of each person's email address all along, because it's the twenty first century, I only need to add that attribute to the person class, and then the customer, employee, and courier classes will all get the email attributes too. Changing code in one place is much easier then having to change it in three. Now a few languages like [[Python (Programming Language)|Python]], and C++, allow you to inherit from more then one super class. Bringing in attributes and behaviors from multiple other classes. However, multiple inheritance can get confusing so it's much more common to see single inheritance where a subclass only inherits from one parent or superclass. Languages like [[Java]], C#, [[Swift (Programming Language)|Swift]], and Ruby enforce single inheritance with classes and that's what we'll be using in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Java]] (1), [[Swift (Programming Language)|Swift]] (1)
> **CLI Commands:** make (1), python (1), ruby (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Polymorphism](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=0)** - Our fourth and final object-oriented concept is polymorphism which is a complicated sounding [[Microsoft Word|word]] that simply means having many [[Forms]]. And appropriately enough, there are multiple forms of polymorphism. One form, called dynamic or run-time polymorphism, allows us to access methods using the same interface on different types of objects that may implement those methods in different ways. Think of this basic coffee maker as a class with a method to brew coffee. The input parameters for that brew method are a scoop of ground coffee beans and water. I wait a bit for it to brew and the output is a fresh cup of hot coffee.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=45)** - I prefer to use a different type of coffee maker. A French press. My French press also has a brew method with the exact same inputs and outputs as Baron's basic coffee maker. I input a scoop of ground coffee and some water. Then after a little while, I press down the plunger and the output is a fresh cup of hot coffee.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=69)** - Now, although these two coffee makers have the exact same type of inputs and outputs, the way that they brew is very different. My coffee maker uses a filter whereas Olivia's French press strains the coffee with a metal screen.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=84)** - And although the outputs we received are the same type of object, a cup of coffee, their attributes may have some different values. When it comes to taste, my French press coffee is better.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=95)** - Now, when it comes to actually implementing this type of polymorphism in code, there are several ways it could be done. Olivia's fancy FrenchPress could inherit all of the attributes and methods from my BasicCoffeeMaker. But then, it replaces the brew method it inherited from the BasicCoffeeMaker through a process called overriding. That allows the FrenchPress to redefine its own unique version of the brew method.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=120)** - Or perhaps both of these coffee makers inherit from the same abstract class with an abstract brew method.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=126)** - Or they both agree to implement the same interface. Inheritance, abstract classes, and interfaces are all possible implementations of polymorphism that we'll cover later on. The benefit of dynamic polymorphism here is that it enables me to use any form of coffee maker as long as it has a brew method that takes coffee grounds and water as inputs and returns a cup of coffee.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=150)** - Even a really fancy coffee maker like this one?
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=152)** - Well, I've never seen one of those before, but if it has that brew method, I can use it. The other common form of polymorphism is called static or compile-time polymorphism. And it uses a feature of many [[Object-Oriented Programming (OOP)|object-oriented programming]] languages called method overloading, not to be confused with method overriding. Overloading allows you to implement multiple methods within a class that have the same name, but a different set of input parameters. If I give the brew method of the French press, coffee and water as input arguments, I'll get back a cup of coffee. But if I change the type of inputs, from coffee and water to tea leaves and water, that's a different set of parameters so the French press will execute a different version of the brew method that gives me back a cup of hot tea. Brew with coffee and water and brew with tea and water are two different methods with two different signatures. And the FrenchPress will automatically execute the appropriate one depending on what you give it.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=215)** - [Olivia] You can also have variations of the method with different numbers of input parameters. I could implement a version of the brew method that takes three inputs, coffee and tea, and water.
>
> **[3:46](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=226)** - You could do that, but I'm not sure you'd want to drink what you get out. In most cases, those overloaded methods will provide different, but very similar functionality. So those are the different forms of polymorphism. Defining different classes that can be used with the same interface.
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/polymorphism?u=76281980&t=243)** - Or overloading a method from the same class that can take different sets of parameters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3), [[Microsoft Word|Word]] (1)
> **CLI Commands:** brew (15)
> **Speakers:** - or (3), - now (2), - our (1), - i (1), - and (1)
> **Definitions:** is a  (3), is called (1)

#### [Analysis, design, and programming](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/analysis-design-and-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/analysis-design-and-programming?u=76281980&t=0)** - When you see the words object-oriented, there's usually another [[Microsoft Word|word]] right beside it, object oriented programming, object oriented design, or object oriented analysis. These are all connected and refer to the idea that to develop any piece of software, you need to do three things, understand your problem, plan your solution, and finally, build it, or rather, analysis, design, and programming. Although they're listed as two separate steps, analysis and design are usually talked about together because they encompass everything that should happen before you write a single line of code. Analysis answers the question what do you need to do? What's the problem you're trying to solve? And design figures out how you're going to do it. In this course, we'll go through an entire object oriented analysis and design process to produce the deliverables, the conceptual design that you, or maybe a separate team of programmers, can take and use to build a solution.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/analysis-design-and-programming?u=76281980&t=60)** - Conceptual is the key word here. We won't be writing any code.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/analysis-design-and-programming?u=76281980&t=64)** - What about drawing diagrams?
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/analysis-design-and-programming?u=76281980&t=66)** - Sure.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/analysis-design-and-programming?u=76281980&t=67)** - Sketches on a whiteboard?
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/analysis-design-and-programming?u=76281980&t=68)** - Those are great.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/analysis-design-and-programming?u=76281980&t=69)** - Written descriptions?
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/analysis-design-and-programming?u=76281980&t=70)** - Absolutely, but no code. Now, there are lots of formal methodologies with their own unique name and conventions, but the ideas are all fairly similar. For this course, we'll follow a typical five-step approach. Start by gathering requirements to figure out what our application needs to do. Really flesh out the problem you're trying to solve. After that, describe the application. Build a narrative in plain, conversational language for how people will use it. Step three involves identifying the most important objects, which is the starting point for identifying actual classes. Once those objects have been identified, formally describe the interactions between them, understanding each object's responsibilities, the behaviors they need to have, and when they interact with other objects. And finally, create a class diagram, which serves as the main output from the five-step process. The class diagram is a visual representation of the classes in the application, and creating it is where the object oriented principles like inheritance and polymorphism really come into play. We'll be diving into each of these steps in more detail, and we'll cover different techniques that you can use for each one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Speakers:** - when (1), - conceptual (1), - what (1), - sure (1), - sketches (1)
> **Definitions:** is a  (1)

#### [Unified modeling language (UML)](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/unified-modeling-language-uml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/unified-modeling-language-uml?u=76281980&t=0)** - Throughout this course, we'll be using a few common [[Diagramming]] techniques for drawing classes and their interactions. These diagrams are from something called UML or the Unified Modeling Language. UML is not a programming language. It's a graphical notation for drawing diagrams to visualize object oriented systems. For example, The class diagram gives a very simple graphical representation of a class. It has three sections; the name of the class, its attributes or fields and its behaviors or methods. It allows me to quickly sketch out an idea that's readable and understandable regardless of which programming language I'll be using. UML includes over a dozen different types of structural and behavioral diagrams. Now you should never be asking the question where can I write some sequence diagrams? Instead, you should simply realize that one would come in handy when thinking about or discussing a situation that isn't clear. For this course, we'll only be using a few of the most common types of diagrams including class diagrams and use case diagrams which portray a users interaction with the program. UML is not the goal here and knowing more UML will not necessarily make you a better object oriented developer. In fact, knowing a little UML may actually be more useful than knowing a lot of UML because knowing a lot of UML can lead to an over emphasis on the diagrams themselves.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/unified-modeling-language-uml?u=76281980&t=95)** These diagrams should be a quick, useful communication tool. A support system for your brain, not the other way around. I'm a big fan of doing my diagramming work on paper or a whiteboard at least in the initial stages of a project. With that said as a project matures and grows in size, it can be useful to capture those UML diagrams in an electronic format to facilitate sharing amongst team members. There are a lot of tools to choose from here with commercial and open sourse options across every platform. Their capabilities range from simple drawing tools to help you build diagrams, to more advanced tools that can generate code from UML class diagrams. I'm not going to make any particular recommendations here. The single best source for finding out about available UML tools is actually the Wikipedia page List of Unified Modeling Language tools which will allow you to compare tools to see whether or not they're open source, which platforms they run on and the different languages they can generate code for. If you decide that you want to dive deeper into UML then I highly recommend UML Distilled by Martin Fowler. It's a great book, short book, all the UML that 99.9% of developers on the planet would ever need to know.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Diagramming]] (2)
> **Env Vars:** uml (14)
> **CLI Commands:** make (2)
> **Versions:** 99.9 (1)
> **Analogies:** for example (1)
> **Best Practices:** you should never (1)
> **Speakers:** - throughout (1)


### 2. Requirements

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining requirements](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=1)** - The first step to any design process is to gather your requirements. Figure out what your application or product needs to do. What's the problem you're trying to solve? Why are you building the application in the first place? At the core what are the application's functional requirements? Literally, what does it need to do? What are the necessary features and capabilities? In addition to those, there may also be non-functional requirements that place constraints on how the application should function. For example, an application that handles [[Banking]] transactions, or one that stores health care data, will likely have to comply with certain regulations. There could be performance requirements such as response time, or how many users can be supported simultaneously. Support requirements, if there's an issue with the application at two A.M. on a Sunday morning, what needs to happen? And security can be considered as either a non-functional or functional requirement depending on the application. From my own experiences, one industry that loves to write laws of detailed requirements is the aerospace industry.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=69)** - If you're going to put something into space, you need a solid set of requirements to make sure it works right the first time.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=75)** - So, as a pair of daring aerospace engineers, let's write some requirements together.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=80)** - We've been tasked to create a space microwave to go onboard our lunar space ship. So the astronauts can have nice warm meals on their way to the moon. Like many projects, creating a space microwave will involve both software and [[Hardware]] elements but the process of writing requirements is a general skill that applies to all types of projects.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=101)** - Normally if you're developing an application for a customer or client, you'll want to get as much information to understand the problem they want to solve. Now that client may have only a vague idea of what they need or they think they know exactly what they need, and try to hand you a finished set of requirements. As the developer, always take the time to understand why the client wants to do something to make sure you can give them what they really need.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=128)** - Well, that sounds really wise, Olivia, but I'm the master of microwave meals, so I'm pretty sure I know all the bells and whistles our space microwave needs.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=137)** - Bern, I trust you have amazing ideas, but a common trap many developers fall into is having a dozen semi formed ideas about the cool features their app could have, versus nailing down what it really needs to do. If you're the driving force behind an app, and it's your idea, it's easy to think that you've thought through it all. You already know what you want, and you skip this step. Let's focus together, be specific, and write things down.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=165)** - Fear not, I'm two steps ahead of you. To write the functional requirements, I use the phrase, the system must, or the application must, to describe what it must do. So, the system must heat food in space packages, allow the user to set a time for the food to be ready, notify the user when their food is ready, via space pager, of course, and the system must set the cooking time based on the food it's given. These requirements can be short and simple statements, or they could be something more complicated, as long as it's specific.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=204)** - Those look pretty good, except for this fifth one. That the application must inherit food types from the abstract super class. Scratch that from the list. What we're doing here, defining requirements, has nothing to do with object orientation. The requirements shouldn't contain words like inheritance, or abstraction, or even class, or object. Those are details that we'll get to later. So, have you thought about non-functional requirements yet?
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=231)** - Of course, they're on the back. Since these describe required characteristics of the application, rather than features, I phrased the non-functional requirements to describe how the application should be. They describe the ilities, like maintainability, reliability, usability, and availability.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=253)** - [Female Developer] So our system should be available 24/7?
>
> **[4:16](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=256)** - Astronauts are always hungry.
>
> **[4:18](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=258)** - It should be usable while wearing work gloves. And it should be compatible with [[Windows]], Mac, Linx, hold on a second. That last requirement is a bit excessive. Does a microwave really need to be compatible with all those platforms?
>
> **[4:31](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=271)** - Well, not yet, but including that requirement to make sure it's ready for everything.
>
> **[4:38](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/defining-requirements?u=76281980&t=278)** - And that's a common mistake. You don't need to be exhaustive and have answers for everything up front. On the first pass, only focus on capturing the absolute minimum set of requirements. Not the things are optional, or nice to have, or your dream features. Just the bare necessities, your minimum viable product. If the first pass at requirements isn't perfect, that's okay, you can update the requirements later if needed. The goal at this point is to get something written down and that could be as simple as bullet point son paper.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1), [[Hardware]] (1), [[Windows]] (1)
> **Speakers:** - well (2), - the (1), - if (1), - so (1), - we (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)
> **Warnings:** common mistake (1)

#### [FURPS+ requirements](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/furps-plus-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/furps-plus-requirements?u=76281980&t=0)** - [Instructor] One commonly used model for classifying software quality attributes is the acronym FURPS which stands for functionality, usability, reliability, performance and supportability. FURPS serves as a checklist of several key qualities to consider when determining requirements. Functionality refers to the capabilities and features of the app. This is a core of what the customer wants. Usability affects the person who will be using the program. Is it easy on the eyes? Is it intuitive to use? Is the documentation accurate and complete? To define reliability requirements, you'll need to know how much system downtime is acceptable. If the failures are predictable and how the system can be recovered. Performance requirements dictate the application's response time through put. And they put limits on the system resources it can use. In supportability. Make sure the application can be tested, extended, serviced and installed and configured. Now in addition to those five categories there is an extension to the FURPS model called FURPS plus which add four more categories. Design addresses constraints on how the software must be built because the app requires certain things such as a relational database. Implementation. Does it have to be written in a certain language? Are there standards or methodologies that need to be followed?
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/furps-plus-requirements?u=76281980&t=92)** The interface typically refers not to the user interface but to an external system that needs to be interfaced with. And finally, physical requirements. Actual physical constraints related to the [[Hardware]] the application will be deployed on. Keep in mind that the purpose of FURPS plus is to prompt you to think about certain key requirement areas. But not all of these will be relevant to every project. As you go through the list, it's perfectly acceptable to have not applicable or to be determined for some of these categories. Now, [[Requirements Analysis]] is an entire discipline that goes way beyond what we covered in this course. If you need to dive deeper, there are lots of great books on the subject that provide formal processes that you can follow. Software Requirements by Karl Wiegers and Mastering the Requirements Process by Suzanne and James Robertson are great references. If you need to elicit requirements from a customer, particularly in an area you're not familiar with, these are great books and provide some good structures for doing so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Requirements Analysis]] (1)
> **Env Vars:** furps (5)
> **Definitions:** is an  (2), stands for (1), refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** we covered (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)

#### [Challenge: Jukebox requirements](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-requirements?u=76281980&t=0)** - All right folks, it's time for a challenge to practice defining requirements. Our astronauts need some music for their long journey to the moon. So we need your help to design a juke box for our moon shuttle.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-requirements?u=76281980&t=11)** - Now astronauts don't carry money with them, so this juke box will be free to use.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-requirements?u=76281980&t=16)** - But we don't want to let just one person pick all the music and drive the others crazy, like our last road trip together.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-requirements?u=76281980&t=24)** - I can't help it, I love disco.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-requirements?u=76281980&t=27)** - [Female Scientist]The juke box should let a user select an album from the available music library, and then choose individual songs from that album to be played. And as an extra precaution, if one astronaut adds more than three songs in a row to the play queue, and another astronaut wants to play a song, they'll jump ahead in line. Now, your goal for this challenge is to write a set of requirements to design the juke box. Try to come up with at least three functional and three non-functional requirements. But you can certainly write more for extra practice. If you find yourself struggling with where to start on this challenge, use the attributes of FURPS+ to inspire possible requirements.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-requirements?u=76281980&t=68)** - Now we've intentionally left the details somewhat vague here, because this challenge is about the process of thinking through a new, often half-formed idea to discover and actually write down requirements. There's no one correct answer to this challenge, so take some time to think it through, and when you're done, be sure to watch our solution video to see how we approached the problem.

> [!info]- Semantic Content
>
> **Speakers:** - now (2), - all (1), - but (1), - i (1), - [female (1)
> **CLI Commands:** find (1)
> **Env Vars:** furps (1)

#### [Solution: Jukebox requirements](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-requirements?u=76281980&t=4)** - To work our way towards a solution for the challenge of defining jukebox requirements, we'll use the FIRBS acronym as a guide. "F" stands for Functionality. So, we'll start with functional requirements, the things the system must do. Some of the core functions of a jukebox, or pretty much any music player, include maintaining a music library of albums and songs, allowing users to browse those albums and songs, and, in our case, allowing users to select individual songs, and preventing them from playing full albums. They will also need to maintain a queue of songs to play.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-requirements?u=76281980&t=41)** - Let's not forget, the most important functionality. The jukebox needs to actually play music. It'd be a pretty lousy jukebox, otherwise. You know, in addition to letting the user browse by album, I think we should include a button that they can click to sort the songs by artist.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-requirements?u=76281980&t=58)** - That's a good idea, but it should be phrased differently as a requirement. Saying that the system must have a button that the user can click to sort by artist, is too implementation-focused. A better way to capture that requirement, would be to say, the system must allow the user to sort by artist, because it leaves the implementation open ended. Now, for a few more functional requirements that are more specific to our scenario. Our jukebox will need to identify individual users, and track the number of plays per user, to prevent one astronaut from hogging the controls. Notice that we haven't specified how the system will identify the users. The requirement just states that it must do it.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-requirements?u=76281980&t=104)** - There are several ways we could accomplish that task. Maybe, we give each user a unique ID to type in before they use the system, or we could use a fingerprint reader, or perhaps a smart camera to identify the user's face. At this point, we're not committed to a specific way of accomplishing the identification requirement. So, we'll save those implementation details for a later stage in the design process. Now, let's move on to the nonfunctional requirements, things the system should be. These are where the remainder of the FIRBS attributes will likely contribute. In regards to its usability, the system should be intuitive to use while the astronauts are floating around in space. Maybe that means it'll have really big buttons or voice commands. We don't know, yet. Thinking about reliability, astronauts could need tunes at anytime. So, we'll want the jukebox to be available for them all day, everyday, 24/7.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-requirements?u=76281980&t=161)** - Our jukebox shouldn't require so much power to operate. That impacts other critical systems aboard the spacecraft. So, a good performance requirement would be for the system to be low-power.
>
> **[2:52](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-requirements?u=76281980&t=172)** - And, we'll certainly need to define a threshold for what low-power actually means.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-requirements?u=76281980&t=177)** - And finally, to address supportability. I think the jukebox should have an updatable music library, so that astronauts can have some modern song choices. Now, the informal requirements we came up with here are, by no means, a complete set. They're just starting points. If you create your own list of requirements, it might have a lot in common with ours, or it can be wildly different. There's no one right answer, here. The goal is to get comfortable thinking about and writing down requirements.

> [!info]- Semantic Content
>
> **Speakers:** - and (2), - to (1), - let (1), - that (1), - there (1)
> **Env Vars:** firbs (2)
> **Definitions:** stands for (1)


### 3. Use Cases and User Stories

[↑ Back to Table of Contents](#table-of-contents)

#### [Use cases](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=1)** - After hashing out the feature focused requirements that say what the system or application must do, it's time to shift focus towards the user and how they accomplish a particular goal, and one way to capture that is as a use case. There isn't a single right way to write use cases, and they could be written at several levels of formality. But at the very least, a use case needs three essential things: a title that describes a goal, the person who will interact with the application to achieve that goal, referred to as a primary actor, and the execution flow, or steps needed to accomplish the goal, the success scenario here. The title for a use case should be a short phrase with an active verb that describes a goal.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=46)** - Well, as an astronaut, my first goal would be to heat up a delicious meal package.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=52)** - A title for that use case could simply be Heat Meal.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=56)** - What if I want to set a timer to heat that meal package later so it'll be ready when I return from my space walk?
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=62)** - I'd call that Heat Delayed Meal. We want to keep titles short and simple. Both of those examples could be separate use cases, separate distinct goals for the application. Now, in regards to the actor, the reason that we say actor rather than generic user is because we often need to identify exactly who is having this interaction. It could be a user, but it could also be someone more specific, customer, employee, or administrator.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=90)** - So the actors are all of the humans that could interact with and use the program.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=94)** - Not just humans, any external entity that acts on the system is an actor, including other computer systems. Now, the real meat of each use case lies in the scenario, the details for accomplishing the goal. One way to write the scenario is as a single paragraph, like this one for the Heat Meal use case. It starts with the astronaut inserting the meal package, the system identifying the package, heating it up for the correct amount of time, notifying the astronaut that it's ready via space pager, and finally, the astronaut returning to remove the hot meal package. The aim is to write this so it's short and succinct, using everyday, non-technical language so it can be understood by a typical user of the application. Another way to format this scenario is as a numbered list of individual steps. So, step one, the astronaut inserts the meal package. Step two, the system identifies the type of meal, and so on. There's not a hard and fast way to write these. I can use different phrasing or different levels of detail. Really, it's whatever makes sense for the situation.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=164)** - That example describes a normal successful scenario where everything works as expected, but I know if something can go wrong, it will. So how do you capture that in a use case?
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=176)** - Well, use cases are typically written to describe successful operations. But depending on the situation, you can also add extensions or steps for alternative flows, for what happens when things go wrong, like when the system can't identify the meal package, or it has trouble accessing the space pager system. And if it's more useful, you can add other specific details about the scenario. One common example would be a precondition that must be true to begin the use case. Here, to heat a meal, our precondition would be that an astronaut has identified at least one package to cook. That's the only way this use case makes sense. Now, you can take it all the way to what's called a fully dressed use case by adding even more fields for post-conditions, secondary actors, stakeholders, and so on. These often exist as a PDF or [[Microsoft Word|Word]] template that you can fill in.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=231)** - That just went from simple to complicated real quick.
>
> **[3:54](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=234)** - And that's something to watch out for. Formality often sounds like a good idea, but requiring that level of detail can kill progress. If you're managing a large, formal project with team members spread across the globe, then maybe you need fully dressed use cases. But for most projects, it's much better to have a set of readable, casual use cases than a collection of super formal, multi-page templates that never get completed.
>
> **[4:21](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=261)** - It sounds like you could easily get bogged down writing use cases.
>
> **[4:25](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/use-cases?u=76281980&t=265)** - As a rule of thumb, you shouldn't spend more than a few days working on use cases in any iteration of a project. Get 'em done so you can move forward onto the next phase. You may have to make some assumptions if you don't have all the information at this point, and that's okay. The use cases may evolve or change. If you're interested in diving deeper into the world of use cases, Alistair Cockburn's Writing Effective Use Cases is the book on the subject, with terrific examples, common mistakes to watch out for, and discussions on writing style.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Speakers:** - well (2), - that (2), - after (1), - a (1), - what (1)
> **Warnings:** watch out (2)
> **CLI Commands:** make (1)
> **Env Vars:** pdf (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Best Practices:** rule of thumb (1)

#### [Identifying the actors](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=1)** - Before you dive headfirst into writing use cases, it's good to spend a few minutes brainstorming possible actors. You're looking for anything that lives outside of your application, but interacts with it to accomplish some goal.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=14)** - Sometimes identifying the actors is straightforward. If we were building a simple single player video game, then there could be just one actor, the player.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=24)** - However, something like the space microwave that we're designing could have multiple people interacting with it to accomplish different goals. Thinking about their different job titles or departments can also prompt ideas for use case scenarios. As we're brainstorming, we'll use stick figures to represent each of the possible human actors for our application.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=45)** - [Man] Well, the spaceship will have several astronauts on board that need to use the space microwave to eat, the mission commander, the pilot, and the flight engineer, and back on Earth, Mission Control will want to monitor the status of the equipment, and I'm sure the astronauts will have nutritionists keeping an eye on what they eat.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=65)** - Now, in addition to identifying people, you should also ask does the application need to interact with other computer systems or other organizations? Those external systems are considered actors too.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=77)** - Since we have a requirement to notify astronauts when their meal is ready via space pager, the microwave will need to interface with some sort of space pager system. But we don't know what that system will be yet, or what the interface to it will even look like.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=92)** - And that's okay. For now, all we're doing is identifying actors as a starting point, which should be painless and straightforward. We can represent that external pager service, whatever it ends up being, as a box over on the right side. I will draw a line to show that it interfaces with our system. As we get further along in the implementation details, we may learn that this one box should actually be several different external systems that the microwave needs to interface with. And if so, we'll just update our collection of actors and use cases accordingly. Now, looking at our list, most of the human actors we've identified are all based on roles or job titles. But keep in mind that the same person with the same role and job title could actually be different actors at different times. The focus should really be on the goal that the actor wants to accomplish, and how we define those actors can vary depending on the use case. For example, in a use case for heating meals, I would expect all of the different astronauts on the spaceship to use the system in the same way, to prepare a package of food. And the people back on Earth, Mission Control and the nutritionist, are simply monitoring that activity. In this scenario, there isn't a difference between the on-board astronauts. They all have the same goal. So this situation really comes down to somebody preparing a meal, and someone monitoring it. So, it might make sense to phrase the actors for this use case as the cook and the monitor, not a job title or a specific role,
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=185)** but a perfectly acceptable name for the actors who take part in this particular use case.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=191)** - Hold on a sec. Use cases always have a single primary actor and possibly one or more secondary actors, if required, so who's the primary here? The cook or the monitor?
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-actors?u=76281980&t=203)** - Well, when writing use cases, the primary actors aren't necessarily the most important actor in the scenario. They're just the one who initiated it, so in this situation the primary actor would be the cook, and the monitors would be the secondary actors.

> [!info]- Semantic Content
>
> **Speakers:** - before (1), - sometimes (1), - however (1), - [man] (1), - now (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### [Identifying the scenarios](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=1)** - When writing use case scenarios describe a goal that an actor can accomplish in a single encounter and stay focused on the user's intention, what they really want to accomplish.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=11)** - So, something like turning on the microwave.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=14)** - Well, at first, turn on microwave might sound like a good use case. After all, it has an active verb phrase and it could have multiple steps and conditions. But if we emphasize the user's intent, their goal, their goal isn't to turn on the microwave. The reason they want to turn it on is to do something. So what is that something?
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=35)** - Well, they probably just want to cook a meal.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=38)** - Bingo! Cook meal, generate reports, change settings, order supplies. These are user focused goals. Each with several steps that can be accomplished in one encounter. Turning on the microwave might be a part of one of these use cases, but it's not a use case by itself. On the other side of the spectrum, a goal on the level of feed entire crew or execute mission might be too broad. Those would involve multiple encounters with whatever application is being used.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=67)** - But I've seen some pretty broad use cases from developers.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=71)** - True, some people define these broader and smaller use cases as a way of tying things together. But at least initially, you want to focus on the use cases that capture the user's true goal. Emphasizing the goal of one encounter. Now a simple casual use case can have multiple scenarios. You should focus on the main successful scenario, the sunny day use case when everything goes right, but when necessary you can describe the alternate paths or extensions.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=99)** - Like, when the microwave can't identify the meal packet that's put in it.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=104)** - Yep.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=105)** - Or when the astronaut tries to shove too many meal packets in all at once.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=109)** - Bingo!
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=109)** - Like when a random cosmic ray strikes the microwave and heats the food packages too fast and they all explode.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=116)** - Too far. You're not trying to envision all the bizarrely, unlikely, but technically possible events. Just focus on the typical situation that would occur, what you'd want to do with those situations. Now you could write these as paragraphs or numbered steps. The goal is readability and ease of creation over formality. When you're writing, use an active voice. Omit needless words and needless detail. It's very common to see sentences phrased like, "the system is provided" "with the meal package by the astronaut," but you could just as easily say, "astronaut inserts meal package." Active voice, easy to read, short and concise. Another common thing you may see, particularly from programmers, is too much detail or the start of describing the implementation. So, "the system connects to the external pager system" "over HTTPS and uses [[JSON]] to format the text message" "to be transmitted, then waits for" "a delegated callback response." The goal here isn't to write pseudo-code. That's way too much. For a use case, "system sends pager message," would be perfectly fine. Another thing that's tempting to describe, but doesn't belong in use cases, is the user interface. You should describe the scenario without using words like screen, click, button, select. None of that. There's no, "User pressed the start button." Focus on the intention, the layout of the user interface will follow the function of the application and what it needs to do.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=209)** - After you've come up with your first set of use cases, how do you know if you've missed anything?
>
> **[3:34](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-scenarios?u=76281980&t=214)** - Well, you can never know for sure, but questions that may prompt a new goal or actor are: Who does [[System Administration]]? If this is a system that needs to be started and stopped, or backed up on weekends, or have software updates applied, who does that and how do they interact with the application? Who manages users and security? Particularly if you have role based actors. What happens if the system fails? Well, the person who reacts to this may not be a classic user, they're certainly an actor. And is anyone looking at [[Performance Metrics]] or system activity logs? These questions will often prompt a couple of fairly obvious actors for the application, particularly if it's being developed for internal use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[System Administration]] (1), [[Performance Metrics]] (1)
> **Speakers:** - well (3), - bingo (2), - like (2), - when (1), - so (1)
> **Env Vars:** https (1), json (1)
> **Definitions:** is a  (1)

#### [Diagramming use cases](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/diagramming-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/diagramming-use-cases?u=76281980&t=1)** - The use case diagram is another diagram that comes from UML, but the name can be a bit misleading. It sounds like a diagram of a use case, but in actuality, it's a diagram of several use cases and multiple actors at the same time. It shows the relationship between the actors and the different use cases in which they're involved. Now, this is not a substitution for written use cases. We definitely still need those. Use case diagrams and written use cases are two distinct [[Microsoft Products|products]] that show different perspectives and compliment one another.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/diagramming-use-cases?u=76281980&t=33)** - We've finished brainstorming the actors and wrote a few casual use cases, so I think we're ready to draw our first use case diagram.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/diagramming-use-cases?u=76281980&t=41)** - Agreed. And since I can't draw while I'm talking, I'm giving you the markers. Start by listing out the use cases. Heat meal, generate reports, change settings. These aren't in any particular order, and I'm not trying to be exhaustive, just listing a few use cases that make sense. For the actors, let's say they're all role based. And for now, we're keeping it simple with just an astronaut and their nutritionist back on earth. And since those are all human actors, we'll represent them as stick figures. Stick figures are perfect cause they're easy. Easy on paper, easy on the white board. This doesn't need to look impressive. And just as we show actors with stick figures, draw elipses around the use case titles to make it obvious they're self contained use cases and not just a piece of text. Now draw a box around all the use cases to represent the boundaries of the system. Anything inside of the box is part of the application we're trying to write. And everything that's not, is outside. Next, draw a line between any of the actors and the use cases they will interact with. An astronaut can heat up a meal, so draw a line from the astronaut to that use case. The astronaut might want to generate a report to see what they've been eating, and their nutritionist will want to do the same. And finally, the nutritionist may want to tweak the microwave cook settings to make sure the astronauts are getting the best meals possible. These lines don't need arrows
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/diagramming-use-cases?u=76281980&t=134)** because they're not about direction. They're merely saying which actors use which use case. Now, part of the use case to heat a meal needs to interface with a separate external space pager system to notify the astronaut when their food is ready. We could use a stick figure, but since it's a nonhuman actor, I prefer to use a box instead. Draw it over on the right side and write the [[Microsoft Word|word]] actor with two angle quotes to make it obvious what it is. And finally, connect the line between the external system and the heat meal use case that interacts with it. It's common to put the primary actors on the left hand side, those are the ones that initiate any of the use cases, and the secondary actors on the right hand side, the actors that take more of a reactive role, but even then, that's not a hard and fast rule. Also, this diagram is not referring to a specific sequence that the use cases need to be executed in, so there's no order that they need to be listed. It's meant to be a simple overview of the relationships between multiple use cases and multiple actors at the same time, without the details of each particular written use case. It can be useful as a communication tool, even with business users, because it's not particularly technical. It can be helpful to figure out if something is missing from the picture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (4)
> **Speakers:** - the (1), - we (1), - agreed (1)
> **Env Vars:** uml (1)
> **Analogies:** picture (1)

#### [User stories](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980&t=1)** - User stories are another written format for describing parts of an application, but they're shorter and simpler than a use case. A user story still describes a single small scenario from a user's perspective, focusing on their goal, what they want to do and why rather than focusing on the system. But unlike a use case, which can be several pages, a user story is typically written as just one, perhaps two, sentences and they're very commonly written on index cards because that forces us to keep them short and sweet. Even though they're concise, user stories generally follow a format that looks something like this. As a, type of user or role, I want, here you describe the goal, so that, the reason or the benefit. The final part, the so that, is optional, but it's very useful to provide context on how this application will be used.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980&t=57)** - Here's one for you. As an astronaut, I want to heat up my food so that I can eat a warm meal.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980&t=64)** - Great! It focuses on one specific goal of one specific user for a particular reason. The idea is that you can quickly brainstorm a lot of user stories, even unique ones.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980&t=75)** - How' about, as a nutritionist I want to see what astronauts eat so that I can monitor their diet.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980&t=82)** - Perfect! Let's make the nutritionist's job easier. Just as when writing use cases, the focus is on intent and should not include descriptions of the user interface.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980&t=93)** - So, "As an astronaut, I want to press a button" "to delay when my food gets cooked," "so that it will be ready later," would be a bad user story?
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980&t=103)** - Right. Leave the user interface out of it. It would be better to say, "As an astronaut, I want to schedule when" "to heat my food, so it will be ready later." That leaves flexibility for how we implement it. Also, avoid detailing alternate paths or exceptions, or listing any technical information in user stories. These are intended to be quick, readable summaries of a specific goal and why the user wants it. They can be done very early on, often right at the start of a project and they serve as a placeholder for deeper conversations that you need to have.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980&t=140)** - These user stories sound an awful lot like they're just short use cases.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/user-stories?u=76281980&t=144)** - It can seem like that at first, but use cases and user stories really are very different things. The most obvious difference is the format, but they also serve different purposes. A user story acts as a placeholder for a conversation, a reminder that we need to get deeper into the details of something. A use case on the other hand, can be regarded as a record of a conversation that has already happened detailing the steps of how a particular goal may or may not be achieved. Now certain [[Software Development]] methodologies may favor one of these over the other, but use cases and user stories are not the direct competitors. Nor are they necessarily a replacement for writing functional requirements. These are all different tools in your toolbox. Depending on the development methodology you're using, you're likely to use some combination of requirements, use cases, and user stories, but not necessarily all three. And the order in which you create them can vary. However you do it, describing your system in plain language is incredibly useful to identify why we're building this application and those descriptions serve as input for the next stages of the analysis and design process. If you want to learn more about the concise user story format, check out Mike Cohn's book, User Stories Applied for [[Agile Software Development]]. It's a book you're likely to see recommended if you use a process like [[Scrum]] or Extreme Programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Agile Software Development]] (1), [[Scrum]] (1)
> **Speakers:** - user (1), - here (1), - great (1), - how (1), - perfect (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** you need to have (1)

#### [Challenge: Jukebox use cases](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-use-cases?u=76281980&t=0)** - It's time for another challenge. This time you'll be writing use cases and user stories to help design a jukebox to go onto a spaceship so astronauts can listen to music on their way to the moon. This is an extension of the previous challenge problem where we defined requirements for the space jukebox. If you completed that challenge, then you can use the requirements that you defined as a basis for this challenge problem. Otherwise, feel free to build on our partial set of requirements shown here. Your goal for this challenge is to write at least two use cases and two user stories for the jukebox. But, if you're feeling inspired, you can certainly write more for extra practice. I'll leave the format and level of detail for the use cases up to you. You can write the scenarios as a paragraph or a list of steps. Either one is fine. This is an open-ended challenge with a wide range of possible solutions so take some time to think it through. And, when you're done, be sure to watch our solution video to see how we approached the problem.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2)
> **Speakers:** - it (1)

#### [Solution: Jukebox use cases](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-use-cases?u=76281980&t=3)** - To develop our use cases and user stories for the jukebox challenge, we decided to start with the most common thing you can do with the jukebox.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-use-cases?u=76281980&t=11)** - Play a song.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-use-cases?u=76281980&t=12)** - The primary actor here will be the user, and I decided to format the scenario for this use case as a paragraph. So the system identifies the user. The user browses the library of available albums. They select an album, then browse the songs on that album, and then finally the user selects a song and the jukebox plays it. This may seem like an obvious sequence of events, but taking the time to actually put it down in writing now will make later parts of the design process a lot easier.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-use-cases?u=76281980&t=43)** - For the next use case, let's look at a slightly more complicated scenario, selecting multiple songs to play. I prefer to format my use cases as a list of steps. The first four steps of this use case will have a lot in common with Olivia's use case to play a single song. The system identifies the user, the user browses the available albums and songs, selects a song, and then the system begins playing it. After that, though, this use case introduces some new events. The user continues browsing and selects a second song. The system adds that second song to a play queue, and then plays it after the first song is over. This use case introduces the concept of a play queue that wasn't present in the first one.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-use-cases?u=76281980&t=89)** - [Olivia] Now for some user stories. If Baron has gone and filled up the play queue with his music, then as a user, I want my song to be added to the front of the long play queue so that I don't have to wait hours to hear it.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-use-cases?u=76281980&t=105)** - And from a usability standpoint, as a user, I want to be identified without having to touch anything so I can use my hands to do other things. Coming up with user stories is usually a lot quicker than writing use cases, so it's easy to keep pumping them out. As a user, I want to sort and browse songs by artist, so that I can listen to every song by ABBA.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-use-cases?u=76281980&t=128)** - That will drive the other astronauts crazy, so as the spaceship's commander, I want the ability to cancel other users' selections so I don't have to listen to disco all the way to the moon. (snapping) Now, the prior set of requirements we came up with for the space jukebox didn't mention anything about a commander or administrator, but based on that last user story, I think that's something we'll need to include. And that's one of the reasons why just the process of writing use cases and user stories is valuable. It can help uncover new requirements.

> [!info]- Semantic Content
>
> **Speakers:** - to (1), - play (1), - the (1), - for (1), - [olivia] (1)
> **CLI Commands:** make (1)
> **Env Vars:** abba (1)
> **Cross-References:** coming up (1)


### 4. Domain Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [Identifying the objects](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=0)** - After defining requirements and writing some use cases or user stories we start to transition from analysis, understanding the problem we're trying to solve, to design, how we're going to organize our solution. And I think a good context for explaining that is the design of a video game. Olivia and I are game developers and I have a brand new idea for a game. Get this. You're a spaceship and you shoot missiles at asteroids that are trying to crash into you.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=30)** - That feels oddly familiar. What if instead, you're the asteroid and you smash into the spaceships that are trying to blow you up?
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=40)** - That is genius! That's why I married you.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=43)** - Good, 'cuz I've already done the analysis and written up the use cases.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=48)** - Well, with the analysis done, our next step is to create a conceptual model. That may sound complex, but a conceptual model simply identifies the most important objects in the application and the relationship between them. Now, I'm using the [[Microsoft Word|word]], object, loosely here. We're not worried about software objects quite yet, but more generically, what are the things in the application that we need to be aware of. Not everything we pick here will become a class, but a lot of them will.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=77)** - [Olivia] To identify objects, we'll go through all of our use cases and user stories and any other written requirements to pick out all of the nouns.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=85)** - That's one benefit of actually writing out all those descriptions.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=89)** - I'll start with this use case that describes the player's asteroid dodging a missile from one of the spaceships by simply highlighting and underlying all of the nouns. The system spawns enemy spaceship in play area. Spaceship flies towards player asteroid and fires missile at it. Player steers asteroid in direction to avoid missile path. Missile flies past player asteroid and disappears offscreen. As I'm gathering a list of potential nouns, I fight the urge to analyze or judge the words. I don't worry if there's a better word to use or if, perhaps, we used a different noun to describe it elsewhere.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=129)** - And if you miss one, don't worry! It happens. Now, we can take a first pass through our list and find if there are any obvious duplicates.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=138)** - [Olivia] Well in this use case, the word, it, refers to the asteroid. So that's an easy one to remove.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=144)** - [Programmer] You'll often find yourself combining some of these or even splitting them up. Picking out the nouns is merely a starting point and you'll find that sometimes attributes start to announce themselves.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=155)** - [Olivia] The word, offscreen, is really part of the concept of area. So, offscreen might be an attribute of an area class depending on how things get organized, but we're not focused on showing that kind of data now. So I'll remove it. Now, to me, the noun, direction, feels questionable here. Direction is where something goes, but should it really be an object?
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-the-objects?u=76281980&t=177)** - At this point, if you're in doubt, keep it. We could implement the asteroid's direction as an attribute with simple values to represent its velocity in each axis, and in that case we wouldn't need a separate class for direction. On the other hand, if that direction of travel might need to be translated between different coordinate systems, then encapsulating that behavior in a direction class could be useful. We aren't that far into the design process, so we don't know yet. Let's keep it, because we can always make changes later. One last item to remove. Even though, system, was used as a noun, let's remove it here and we'll explain the reason why a little later on. So, that leaves us with a handful of nouns from this one casual use case. These are just the names of potential objects and by simply drawing a box around each of those objects we have the beginning of a conceptual model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4)
> **Speakers:** - that (3), - [olivia] (3), - after (1), - good (1), - well (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** refers to (1)
> **Warnings:** be aware (1)

#### [Identifying class relationships](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-relationships?u=76281980&t=0)** - Once we have the potential objects picked out for our conceptional model, it's useful to indicate the main relationships or associations between those concepts by drawing lines between the boxes. And since I drew the last diagram, it's your turn to take the marker.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-relationships?u=76281980&t=16)** - Fine.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-relationships?u=76281980&t=18)** - Many of these relationships will be obvious but we can always reference our written use cases and user stories if needed. I know that the idea or concept of a player has some kind of relationship or interaction with the astroid. So draw a line between those boxes. The astroid exists within the area. So that's another relationship. And the spaceship and missile also exist within the area. There's a relationship between the spaceship and the missile. As well as the missile and the path it follows. And though I'm not completely convinced this should be an object, the astroid and spaceship both travel in a direction. Now, optionally, it may be useful to add a short note to actually describe the relationship. It could be something as simple as the [[Microsoft Word|word]] uses, as in the spaceship uses the missile. Or even better, spaceship fires missile. Because that's more specific. So rather than saying the player uses the astroid, we could say the player steers the astroid. The area also contains spaceships, and the missile follows a path. Finally, we can add some optional symbols to describe a bit more about those relationships. For example, the game area can contain multiple spaceships, and we can describe that using
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-relationships?u=76281980&t=112)** the UML notation for multiplicity, representing one or more of something. This additional notation isn't necessary but it can be useful. The key question should be is it interesting or important enough to need to be put on the diagram. Now it may seem like there are a lot of interesting details missing from here, and there's no way we could start writing code based on this diagram but that's okay. This is just a conceptional model to use for communication and to prompt ideas. The benefit of detailing these relationships is that it makes it easier to realize which objects interact with each other, meaning which objects have behaviors that affect other objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Speakers:** - once (1), - fine (1), - many (1)
> **Env Vars:** uml (1)
> **Analogies:** for example (1)

#### [Identifying class responsibilities](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980&t=0)** - We need to figure out the responsibilities for our conceptual objects to really identify what are, and what are not classes that we'll need to create, and just as we started by picking out nouns in our written description to create a list of potential objects we can go back to the use cases and user stories to look for verbs, and verb phrases to identify responsibilities.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980&t=23)** - Looking at our use case for dodging a missile, we have phrases related to the space ship like spawns enemy spaceship, flies towards player, and fires missile, the player steers asteroid to avoid missile, and the missile flies past player and disappears offscreen. Now not all of these will necessarily become behaviors, some might need to be combined, some might need to be split apart, and some may not be needed at all or will be replaced by something else. But they're a good starting point and will often prompt other discussions.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980&t=59)** - Something that isn't always obvious, is where these responsibilities belong. Particularly if they affect different objects. Since our use case here has an active perspective, it's oriented around what initiates a behavior not necessarily whose responsibility it is to perform that behavior. When asking the question of where should a behavior live, or whose responsibility is it? Remember that an object should be responsible for itself.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980&t=89)** - So for example, the idea of steering the asteroid, it's pretty obvious what that means and that it's going to be initiated by the player. But, even though it's the player that wants to steer the asteroid, I shouldn't write code in the player class to directly change the inner state of an asteroid object. The player should really ask that of the asteroid object. The player should tell the asteroid where it wants to go but the asteroid is responsible for actually changing its state to move there.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980&t=118)** - Figuring out whose job it is to do all of these things can be tricky, so let's take a pass through the list of verb phrases from our use case, and make an initial attempt at distributing them amongst the conceptual objects. Starting with the phrase, spawn enemy spaceship. Although the game system will initiate that happening the spaceship object should be responsible for creating itself and establishing its location within the play area, the next phrase, flies towards player is an action for that spaceship and I'm going to rephrase that to simply move. Next on the list, a spaceship initiates firing a missile but a missile object should be responsible for spawning itself, knowing where it's going and what it's doing, and when it comes to the player steering the asteroid, the asteroid should handle moving itself. Now the next one is a bit tricky, avoid missile path, what that really means is we need to detect if and when a missile collides with the asteroid so we could give that responsibility of detecting a collision with the asteroid to the missile. But we could also put the responsibility of detecting collisions onto the asteroid. Either way could work and at this point it may not be clear which is better or if it even matters. For now I'll leave the responsibility to detect collisions with the asteroid because I'll need to know when it collides with other things like a spaceship for other use cases. Now, for the last two items on the list,
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980&t=212)** flies past player can be simplified to moving the missile and for the missile to disappear when it goes offscreen it will need to detect when it goes out of bounds. There are always multiple successful ways to implement ideas in object oriented programming, and even this simple model could have been arranged in several different ways.
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980&t=232)** - You gave a couple responsibilities to the asteroid, the spaceship and the missile, but the player didn't get any shouldn't the player get some responsibilities? 'Cause you know, they're playing the game?
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980&t=243)** - Not necessarily, keep in mind that this isn't showing who initiates these actions but where the responsibility lies in performing them. The player is still going to cause things to happen by requesting behaviors of other objects. It's a common mistake for new developers to give way too much behavior to a single actor such as the player because the player's what drives the encounter. In object oriented design, an object that knows too much or does too much is often called a god object.
>
> **[4:34](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-class-responsibilities?u=76281980&t=274)** - Along those lines, an issue that often comes up is creating a system object and putting a huge amount of responsibility in it. It happens when people see phrases like system spawns spaceship and system detects missile collision. Recognize the phrases like system reduces player life counter really means that some part of the system reduces the life counter. Some part of the system spawns a new player asteroid. So while there's often a built-in system or application object included in many object oriented programming languages. If your own design contains a central system or master object, that's filled with lots of unrelated behaviors, and just seems to exist to control everything else around it? That's a clue that you're still thinking like a procedural programmer. Responsibilities should be distributed between your objects not stored in one master object an object should be responsible for itself, as much as possible. That'll make maintaining and updating the application much easier in the future.

> [!info]- Semantic Content
>
> **Speakers:** - we (1), - looking (1), - something (1), - so (1), - figuring (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), such as (1)
> **Warnings:** keep in mind (1), common mistake (1)
> **Cross-References:** go back to (1)

#### [CRC cards](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/crc-cards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/crc-cards?u=76281980&t=0)** - [Man] One technique that can be useful during this stage of Object Oriented Design are CRC cards. Which stands for: Class, Responsibility, Collaboration. CRC cards contain the same information as the Conceptual Object Diagram, just in a different format. They're drawn on index cards, and they're meant to be simple. Easy to create, hand around, discuss, spread out on a conference table, and you dispose of it if you make a mistake, or change your mind. Each CRC cards represents one class, and it has three sections. The first C is the name of the class at the top, which is usually underlined. The R is the Responsibilities of the class, the things that it needs to take care of. And the second C is for the Collaborators, the other classes it interacts with. CRC cards typically use this format with the responsibilities taking up the left two-thirds of the card, and the collaborators on what's remaining to the right. You may also hear these referred to as CRH cards for: Component, Responsibilities, and Helper. Those are effectively the same thing, just using different terms. Start creating these cards by using the nouns, and your use case and user story descriptions, to help identify potential classes, and the verbs, and verb phrases, to help identify responsibilities.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/crc-cards?u=76281980&t=83)** - [Woman] So a card to represent our Missile class could have things like: Fly through space, Destroy asteroid, and Disappear offscreen, as responsibilities. I'm not worried about the official method names here, I'm just using whatever phrases makes sense to say what this class needs to do. We can refine these later. Some will be combined and some will split apart. If it's obvious which of the other classes will be Collaborators. Meaning what other classes will interact with this one, then I can write those too. I know this Missile class will interact with the spaceship that fires it, the play area it flies through, and the asteroid it blows up. So I'll add those to the right hand side.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/crc-cards?u=76281980&t=120)** - [Man] One of the great things about CRC cards is that when you physically start to do this, and start creating a pile of cards, most people naturally find themselves moving related cards together. And that helps a lot in figuring out the natural collaborators, and the way these objects interact. And that's one reason you shouldn't jump to using an electronic tool for doing this, because there's a lot of value in the physicality of moving things around.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/crc-cards?u=76281980&t=145)** - [Woman] Using physical cards also enforces a constraint. You can keep adding more and more index cards to your collection, but, if you need more than one CRC card for a single class, that's a clue that you may need to redesign that class, because, you're trying to give it too much responsibility. Whether you choose to use CRC cards, or a Conceptual Diagram, or some other method of your own. You should finish this phase of the object oriented design process, with at least the names and core responsibilities for the first set of classes you intend to code.

> [!info]- Semantic Content
>
> **Env Vars:** crc (7), crh (1)
> **Speakers:** - [man] (2), - [woman] (2)
> **CLI Commands:** make (1), find (1)
> **Definitions:** stands for (1)

#### [Challenge: Jukebox conceptual model](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-conceptual-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-conceptual-model?u=76281980&t=0)** (techno music chord)
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-conceptual-model?u=76281980&t=0)** - It's time for another challenge. This is an extension of the previous two challenges
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-conceptual-model?u=76281980&t=3)** - It's time for another challenge. This is an extension of the previous to define requirements and write use cases and user stories two challenges to define requirements, for a spaceship jukebox to let astronauts listen to music and write use cases and user stories for a spaceship jukebox on their way to the moon. to let astronauts listen to music Your goal for this challenge on their way to the moon. is to create a conceptual model of that jukebox. Your goal for this challenge is to create a conceptual model of that jukebox. You should start by identifying nouns and verb phrases You should start by identifying nouns from the use cases and user stories and verb phrases from the use cases to identify potential objects and responsibilities. and user stories to identify potential Then determine where those responsibilities should reside objects and responsibilities. Then, determine where those responsibilities and the relationship between the objects. should reside and the relationship I'll leave the format of the solution up to you. between the objects. You can draw a conceptual model diagram I'll leave the format of the solution up to you. with boxes and lines, You can draw a conceptual model diagram or if you prefer, write out a stack of CRC cards, with boxes and lines, or, if you prefer, or some combination of those two methods. write out a stack of CRC cards, or some combination of those two methods Any format is fine, as long as you capture the potential objects, Any format is fine as long as you capture their responsibilities, and their relationships. the potential objects, their responsibilities, If you completed the previous challenges, and their relationships. you can use the use cases If you completed the previous challenges, and user stories you created for those you can use the use cases and user stories as a starting point for this challenge. you created for those as a starting point There are a lot of possible solutions to this challenge, for this challenge. Otherwise, feel free to use argues cases so take some time to think it through, and when you're done, and user stories, which we've included for reference be sure to watch our solution video to see how we approach the problem. There are a lot of possible solutions to this challenge, so take some time to think it through. And when you're done, be sure to watch our solution video to see how we approached the problem.

> [!info]- Semantic Content
>
> **Env Vars:** crc (2)
> **Definitions:** is an  (2)
> **Speakers:** - it (2)
> **Non-Speech:** (techno music chord) (1)

#### [Solution: Jukebox conceptual model](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=0)** (high chiming tones)
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=3)** - The first step towards building our conceptual model for the Space Jukebox Challenge is to identify the objects. By finding the nouns and the use cases and user stories. So, in this particular use case, for playing multiple songs, we have nouns like system, user, library, album, list, song, and queue. Now, I'm not putting too much thought into what each of those really mean yet, I'm just practicing my grammar skills by picking out the nouns. I'll do the same process with one of our user stories which contains nouns like commander, ability, user, selection, disco, and the moon. We should go through the same process with the [[Representational State Transfer (REST)|rest]] of our use cases and user stories, but for simplicity, we'll stick with just those two for now. That gives us a list of possible objects that we can begin cleaning up. We want to avoid having a master system object in our conceptual model, so I'll remove that from the list. The words disco and moon were colorful language from the user story but aren't really relevant to the functionality of the jukebox, so I'll cut those too. I don't think the [[Microsoft Word|word]] ability belongs here as an object because what it's referring to is a behavior which we'll capture separately. And I think the concept of a user's selection is captured by the song they select. The word list in this context is really just an album which is a list of songs. So that duplicate can go as well. And for one last minor adjustment,
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=97)** I'll change the term commander to the more common administrator, or admin, role because that's what it really means in this scenario. That leaves us with our initial set of six objects. The user, library, album, song, queue, and admin.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=115)** - While Barron was busy looking for objects, I turned my attention towards the responsibilities. I looked at the same use case as Barron, except instead of picking out nouns, I picked out verb phrases, identifies user, browses library, selects an album, and so on. There were two of these phrases that I decided I did not need to keep. Continues browsing is basically just repeating a behavior that was captured in the previous verb phrases, browses library and browses list of songs. And the same goes for the phrase selects a second song. That's just another instance of user selects a song, so I'll go ahead and cut that out. Jumping over to the user story, I found two verb phrases, cancel other user selections and listen to disco. I definitely want the jukebox to include the ability to cancel bad song choices. But listening to disco is a more specific variation of the previous responsibility to play a selected song, so it can go away. That leaves us with a list of nine verb phrases which I've reworded slightly to better stand out of context. Now, we have the fun task of determining the responsibilities that each of these verb phrases actually represent and where they belong.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=194)** - I've created index cards for each of our six objects and taped them to our whiteboard.
>
> **[3:18](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=198)** - Great, so the first verb phrase on our list is browse library of albums.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=205)** - Well, the user will initiate that action with the library so draw a line between those two objects and label that relationship as the user browses the music library. There's also a relationship between the library and album objects because a library contains multiple albums. If we wanted to make these into formal CRC cards, we would write the collaborators on the right side of the card, but since we've drawn those lines to represent the same thing, we'll leave those off the cards. This is sort of a hybrid approach. So those are the relationships for the music library, but for the user to browse it, the library's going to need to display the album. That's one responsibility down, only eight more to go.
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=251)** - I've gone ahead and added the rest of the responsibilities and relationships to our conceptual model.
>
> **[4:16](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=256)** - Thanks.
>
> **[4:16](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=256)** - [Woman] The phrase, browse songs and album, turned into a responsibility for an album object to display songs. The album also got the responsibility to select a song, and above that, the library got the responsibility to select an album. The song object itself is responsible for actually playing the song, and the rest of the responsibilities fell under the queue. The phrase add song to queue became simply add song. When it comes to playing the next song in the queue, the queue is only responsible for getting the next song because the song object itself has the play responsibility. Canceling a song in the queue turned into the queue's responsibility to remove a song. And finally we give the responsibility to identify the user to the queue as well.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=304)** - [Barron] Now, it was a bit tricky figuring out where to place the responsibility of identifying the user. And I'll admit, I was tempted to create a new system object for it.
>
> **[5:14](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=314)** - [Woman] But we took a step back and asked, which object or objects care about knowing the users identity, and our answer was.
>
> **[5:22](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=322)** - [Both] The queue.
>
> **[5:23](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=323)** - The queue needs to know which user added each song to the playlist so it can reorder songs appropriately.
>
> **[5:30](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-conceptual-model?u=76281980&t=330)** - Depending on how the jukebox actually ends up implementing the process of determining the user's ID, we may need to add more objects to this conceptual model. But for now, keeping the responsibility to identify the user here reminds us that it's something the queue needs to know.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Microsoft Word|Word]] (2)
> **Speakers:** - the (2), - i (2), - [woman] (2), - while (1), - great (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Env Vars:** crc (1)


### 5. Class Diagrams

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating class diagrams: Attributes](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-attributes?u=76281980&t=0)** - All of our previous work, writing requirements and use cases and building a conceptual model, was to figure out our first set of classes, so now it's time to create a proper class diagram to visually represent them. And this is where specific object-oriented principles, like inheritance and polymorphism, can start coming into play. The most common format to use is the UML class diagram. These can get pretty advanced, but for this course, we'll stick with using just the most common aspects. Each class should have a name written in the singular form, not plural, and the standard is to use an uppercase first letter, so things like Asteroid, Missile, Spaceship. Now, you won't know all of the attributes yet, because the focus so far has been on class responsibilities and behaviors, but start by writing down any obvious ones, and you can always add more later. Use whatever naming convention is typical for your programming language. I'm using the common camel case format here, which starts with a lowercase first letter and then uses uppercase for additional words. While it's common to just write the attribute names, you can also suggest a data type using a colon. So colon String for callSign, I want each of the enemy spaceships to have a unique name, colon Boolean for the shieldActive flag, colon Integer, and colon Coordinate. I can also describe a default value, using an equal sign after the data type.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-attributes?u=76281980&t=95)** Not all attributes need that, just where it's relevant and important. As you're initially creating class diagrams, don't get hung up on knowing the exact data types to use. Should shieldStrength be a 16-bit integer or a 32-bit integer, or even 64? We'll get to those details later, during implementation. But for now, the diagram makes it clear that we need some sort of integer. Along the same lines, coordinates for the position attribute could be implemented several different ways. It could be split into two separate attributes for the x-coordinate and the y-coordinate. Or it could use a more complex data type, like a tuple or an array to store a pair of values. Or I might create my own custom class for coordinates. Again, details that we'll need to work out later.

> [!info]- Semantic Content
>
> **Code Identifiers:** callsign (1), shieldactive (1), shieldstrength (1)
> **Env Vars:** uml (1)
> **Speakers:** - all (1)

#### [Creating class diagrams: Behaviors](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-behaviors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-behaviors?u=76281980&t=0)** - When it comes to adding behaviors to our class diagram, we should have a good idea of what to write here from creating our conceptional object model and CRC cards. I'll use the same camel case format as the attribute names. But since these represent operations, they're usually named as short verb phrases; getShieldStrength, reduceShield, and simply move. It's common practice to name methods that modify and retrieve attributes as get instant operations rather than things like change or retrieve. And some languages will even automatically generate getter and setter methods for you. Since these will eventually turn into code, we'll add parenthesis containing any parameters. For example, the reduceShield method takes an integer as it's input parameter. On the other side, I could also add a return type by putting a colon after the parenthesis followed by the return type I'm expecting back from the operation.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-behaviors?u=76281980&t=61)** - Now these classes may have a lot of functionality internally, but the focus here is on public visibility. What are the operations that other objects need to know about? And this is in line with the principle of encapsulation. To hide as much of the implementation as possible, and only share what's absolutely necessary to expose to other classes. You'll commonly see plus and minus signs before the attributes and methods in UML class diagrams. Which is referred to as controlling visibility. Minus indicates that a member should be private to the class, meaning it's not directly accessible by other objects, and plus means the member should be public. So, we've made the shieldStrength attribute private here but we'll allow other objects to retrieve it using the public getShieldStrength method which returns in integer value. We want the setPosition method to only be used internally by other methods in this object, such as the move method, so we decided to keep it private. The rule here is to leave as many attributes and methods private as possible, and only make something public if you know another object will need to use it.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-behaviors?u=76281980&t=133)** - You know, these class diagram aren't that hard to create. And it seems like we could've saved a lot of time if we just jumped straight to trying out classes.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-behaviors?u=76281980&t=142)** - We could do that but what often happens when people jump straight to object creation, is they focus on the data. They decide they need a space ship object but the way they start to build the spaceship is to have a call sign, size, shape, color, mass, thrust, position, velocity, shield strength, the obvious attributes.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-behaviors?u=76281980&t=161)** - So what are the behaviors?
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/creating-class-diagrams-behaviors?u=76281980&t=163)** - That's the problem. It might be true that these objects need those attributes, but it's the wrong initial focus. If you find yourself defining classes that are strangely devoid of any behavior, you might want to revisit those responsibilities. Do a little work with the requirements, written descriptions, and the conceptional model, or CRC cards. Your focus should really be on what object do rather than just viewing them as [[Data Structures]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Code Identifiers:** getshieldstrength (2), reduceshield (2), shieldstrength (1), setposition (1)
> **Speakers:** - when (1), - now (1), - you (1), - we (1), - so (1)
> **Env Vars:** crc (2), uml (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (1), such as (1)

#### [Converting class diagrams into code](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/converting-class-diagrams-into-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/converting-class-diagrams-into-code?u=76281980&t=1)** - Olivia, so far we've looked at all the ideas and concepts of object orientation, but at the end of the day all of this design work we're doing will need to be converted into a programming language. So, can we start looking at code yet?
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/converting-class-diagrams-into-code?u=76281980&t=15)** - Yes, Barron. It's code time.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/converting-class-diagrams-into-code?u=76281980&t=18)** - Finally! There are lots of different object oriented languages to choose from and each has their own unique way of doing things. So we want to show you that the high level concepts we've been discussing here work across languages, even though the implementation details, like syntax, will be different. To demonstrate that, I've simplified the spaceship class to only have two attributes, a public call sign, which is a string and a private integer to represent its shield strength. And it has two methods that are both public, fire missile, which returns a string and reduce shield, which returns nothing or at least that's what this class diagram says, but it does take an integer as input. So, to turn this into [[Java]] code, we would use the words, public class spaceship, to actually create the class with opening and closing curly braces to wrap its contents. The first section containing instance variables is labeled with two forward slashes that represent the comment and these are variables that belong to an instance of this class. Meaning that, every spaceship object we instantiate from this class will have its own copy of these variables. We've used the Java keywords, public and private, to set the visibility levels of those variables to match the UML diagram.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/converting-class-diagrams-into-code?u=76281980&t=99)** - If you're unfamiliar with Java or other curly braced formatted languages, don't worry about the syntax here. We're showing you this to get a sense of the kind of key words languages could use, how variables are named, and methods and so on. And to give you a sense of how similar many of these languages can be. In fact, if we take that spaceship class at the same level of complexity and convert it into C#, it would look identical to Java. Java and C# are very similar and they implement a lot of these ideas the same way. We have the two instance variables and two methods. One called fire missile, that returns a string and one called reduce shield that takes an integer called, amount, and returns void, meaning that it returns nothing. [[Swift (Programming Language)|Swift]] is another curly braced formatted language, but it has some differences from Java and C#. The syntax for declaring instance variables uses the keyword, var, and it specifies a type at the end of the statement. We've also followed the naming convention of adding an underscore to the front of the shield strength variable to indicate that it's private. The symbols and syntax differ, but it has the same basic elements as its C# counterpart.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/converting-class-diagrams-into-code?u=76281980&t=175)** - If we make the jump to my favorite language, [[Python (Programming Language)|Python]], we drop the curly braces because Python uses line spacing to indicate separate sections of code. Another noticeable difference with Python is that our two instance variables are declared inside of a special method called, init, which gets called when we create an instance of this class. Variables declared outside of that method will have a different scope, which we'll get to a bit later. Finally, Python doesn't really differentiate between public and private variables. It puts trust in the hands of the programmer not to do anything foolish. So we've added an underscore to the shield strength variable name to indicate that it should be treated as if it were private. And for one last example, Ruby, which also leaves out the curly braces and has a simple syntax because, like Python, Ruby is a dynamic language. Meaning that it does not require as much information regarding variable types or return types. The at symbol in front of the variable names, call sign and shield strength, indicate that they're instance variables and Ruby's naming convention for variables uses an underscore between words rather than an uppercase letter. Now, there are many more languages than we covered here and some have substantially different implementations of these ideas, such as [[JavaScript]] or Lua or Go. Those don't even have official classes, but the generic object oriented concepts that we're exploring here still apply.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Python (Programming Language)|Python]] (5), [[Swift (Programming Language)|Swift]] (1), [[JavaScript]] (1)
> **CLI Commands:** python (5), ruby (3), make (1)
> **Speakers:** - if (2), - olivia (1), - yes (1), - finally (1)
> **Definitions:** is a  (2)
> **Env Vars:** uml (1)
> **Cross-References:** we covered (1)
> **Analogies:** such as (1)

#### [Instantiating classes](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/instantiating-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/instantiating-classes?u=76281980&t=1)** - When we write the class for a spaceship in our video game, we're creating the blueprint to build the spaceship. Now, the blueprint itself isn't a usable object, but from that class, we can instantiate or create one or more instances of that type of spaceship object. And to do that, many object-oriented languages use the keyword new. In [[Java]], we'd say Spaceship then the variable name myShip equals new Spaceship with open and close parenthesis. And that instantiation line would be identical in C#. C++ looks very similar to Java and C# except it's using the asterisk to indicate a pointer. Don't get caught up in syntax here, these are just some examples to show how languages differ. Ruby is unique in that it puts the keyword new after the class name. But not all languages use new. In [[Python (Programming Language)|Python]], it's simply myShip equals Spaceship, and [[Swift (Programming Language)|Swift]] uses the keyword let to assign the newly instantiated Spaceship to the variable named myShip. When we use one of these instantiation statements, shown here in a typical Java or C# format, in the background, the computer will allocate a section of memory to hold the new object, including space for each of the variables in it. It initializes those variables to some value, returns a reference to that object in memory, and that gets assigned to a variable named myShip
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/instantiating-classes?u=76281980&t=95)** so we can begin using it. Now, you should always consider what the internal state of an object will be immediately after you instantiate it. Our simplified Spaceship class defines two attributes, callSign as a string and shieldStrength as an integer, and when the object is created, they'll be given some default values. In Java, the default value for a string is Null and the default value for an integer is zero. If we don't take those default values into consideration and our program tries to use them, that could lead to some undesired behaviors, and that's dangerous. Now, we could go and set those values immediately after we create the object but it would be better if we created the object in a meaningful state to begin with. To do that, we'll use what's called the constructor. It's a special method that gets called when the object is instantiated to help configure it. We can use the constructor method to make sure that any variables belonging to the object are set to the values we want when the object is created. In Java or C#, you create a constructor by simply defining a new method in the class with the same name as the class itself. So, the constructor for the Spaceship class will be a method named Spaceship. However, unlike other methods, the constructor does not have a return type because you never call it yourself. It gets called when you use the keyword new to instantiate a new object. Inside the constructor, we set the initial state
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/instantiating-classes?u=76281980&t=188)** that we want these instance variables to have. We'll set the callSign to be The nameless ship and give it a shieldStrength of 100. Now, when we use that same line of code to instantiate the object, it will be initialized with those specific values that we want instead of the default values of Null and zero. In a UML class diagram, this type of basic constructor method that doesn't take any arguments is represented as a method with the same name as the class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5), [[Python (Programming Language)|Python]] (1), [[Swift (Programming Language)|Swift]] (1)
> **Code Identifiers:** myship (4), callsign (2), shieldstrength (2)
> **CLI Commands:** ruby (1), python (1), make (1)
> **Env Vars:** uml (1)
> **Analogies:** similar to (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** configure (1)
> **Speakers:** - when (1)

#### [Class with multiple constructors](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/class-with-multiple-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/class-with-multiple-constructors?u=76281980&t=0)** - We've defined a constructor to instantiate our spaceship object, and it sets the callsign attribute to a value of the nameless ship. But, what if I don't want all of the ships we instantiate to have a callsign of the nameless ship? That'd get confusing.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/class-with-multiple-constructors?u=76281980&t=16)** - Well, most languages will let us create multiple constructor methods through a process called overloading, which allows a class to have more than one method with the same name, but different sets of input parameters. To do that in [[Java]], we'll create a second method in this spaceship class, also called spaceship, but this one takes a parameter. Just a string, which I've called name and that gets assigned to the callsign variable. Now when we instantiate a spaceship object, we have two ways of doing it. We can use the [[Microsoft Word|word]] new with no parameters, like before, which will call the first constructor method to give us the nameless ship, or, we can use the word new, along with a string parameter. When we include the string parameter, it's going to call the overloaded constructor, which sets those attributes to different values. Overloading multiple constructors gives us flexibility to pass in information when actually creating the object. And in UML, that would be represented with something like this. We have two methods, with the same name as the class, one with a parameter and one without. This is a very simple example, but constructors become crucial when you have more complex objects. It's often very important to make sure objects aren't instantiated in an invalid state, particularly when one object needs to contain other objects and often has to create them as part of that instantiation process.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/class-with-multiple-constructors?u=76281980&t=107)** - Now constructors give birth to an object, but on the other end of an object's lifetime, is the idea of a destructor. The destructor is a method that gets called when an object is no longer needed and is being disposed of. Languages that use garbage collection use something called a finalizer, rather than a destructor, but the concept is the same. It's a place to put some code that will automatically be called when the object is destroyed. Destructors are typically used if you have an object that's holding a resource. Say it has a document open on the file system or it's connected to a database, and you need to make sure that the object releases its connection to that resource, before it's destroyed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Java]] (1)
> **Speakers:** - we (1), - well (1), - now (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Env Vars:** uml (1)

#### [Static attributes and methods](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=1)** - When we instantiate a bunch of enemy spaceships for our game, we'll want each of those spaceship objects to keep track of its own remaining shield strength independent of the others. That way, if the player's asteroid smashes into one of the ships, it'll reduce its shield strength, while the other ships remain unaffected. We've accomplished that by storing the ship's shield strength as an instance variable, which means each instance of the spaceship class will have its own separate copy.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=31)** - What do you think about adding a different difficulty setting to our game? We could scale the toughness of all the ships, making their shields easier or harder to destroy.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=41)** - Sounds good to me.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=42)** - But unlike shield strength, the spaceships' toughness value should not vary from ship to ship. If the player decides to increase or decrease the game's difficulty, then all of the ships should increase or decrease their toughness the same amount.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=58)** - Well, if we create toughness as another instance variable, that would require us to individually update each of the spaceships any time there's a change to keep them all synchronized. We could do it that way, but it's not very efficient, especially as the number of spaceships grows. The smarter route would be to create a static variable, which is a variable that's shared across all objects in the same class. This is also referred to as a class level or shared variable. Those terms mean the same thing. Now, with a static variable, there's only one copy of toughness to update. If one spaceship changes that shared toughness value, it changes for all of them.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=100)** - Isn't that just a global variable? I've always been told to avoid using global variables.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=105)** - Sort of, it's global amongst the spaceships but not the [[Representational State Transfer (REST)|rest]] of the program. We didn't just toss it into some global dumping ground for variables. That's not good programming. But we do want all of the spaceships to have the same toughness, so it's shared within the class, but still encapsulated.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=123)** - Static seems like a bad name for it, because to me, static means unchanging.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=129)** - Well, it is unchanging in the number of copies of a static variable never changes. There will only be one. As for the number of instance level variables, that can vary from run to run, depending on how many objects the program creates that time around. As a basic example of how this is handled in code, if we're using a language like C Sharp or [[Java]], we would include the [[Microsoft Word|word]] static in the line that declares the variable. Of course, other languages handle it differently. [[Python (Programming Language)|Python]] doesn't use the static keyword. Instead, variables that are declared within a class, but outside of a method, are considered static or class variables, and in Ruby, class variables are declared using two @ symbols instead of just one @ symbol for instance variables. When it comes to accessing instance level variables, we use the name of the object to get to them. So to access the call sign of the spaceship object named Ship One, we would use ship1.callSign. But if we want to access a static variable, we need to use the class name, not a particular instance name. So spaceship.toughness. Even if you haven't instantiated any objects of this class yet, you can still use any variables defined as static. So we could set the toughness for the entire spaceship class before instantiating any spaceship objects.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/static-attributes-and-methods?u=76281980&t=215)** - Now, in addition to static variables, we can also create static methods that exist at the class level. Like when creating static variables, in Java or C Sharp we simply add the keyword static to a method declaration to indicate that it's a static method, and there's only one of it. Since static methods exist at the class level, they can only access static variables. They can't touch instance variables, and static methods are always called using the class name, not the name of an instance. In UML diagrams, static members of a class are typically denoted with an underline, so here toughness is a static attribute, and increase difficulty is a static method or behavior.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1), [[Python (Programming Language)|Python]] (1)
> **Speakers:** - well (2), - when (1), - what (1), - sounds (1), - but (1)
> **Definitions:** is a  (3), defined as (1)
> **CLI Commands:** python (1), ruby (1)
> **Code Identifiers:** callsign (1)
> **Env Vars:** uml (1)
> **Analogies:** for instance (1)

#### [Challenge: Jukebox class diagrams](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-class-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-class-diagrams?u=76281980&t=3)** - It's challenge time again. This challenge builds on the previous one, which involved creating the conceptual model of a spaceship jukebox for astronauts to listen to music. For this challenge, I want you to create a UML class diagram, based on that conceptual model of a jukebox. If you've been following along and creating your own solutions for the challenges thus far, then I encourage you to continue using your own conceptual model or CRC cards for this. Otherwise, feel free to use the conceptual model we created in the previous challenge and solution videos, which is shown here. It contains six objects, the user, library, album, song, cue, and admin. The corresponding responsibilities are listed under the object's name and the interesting relationships and collaborations between objects, are represented with lines. To create the UML class diagrams, you'll need to think about the attributes and methods each class will need to accomplish its responsibilities. You'll likely need to make some assumptions along the way, and that's great practice. We've intentionally kept these challenges open-ended. There are lots of possible solutions here, so take some time to think it through, and when you're done, watch our solution video to see how we approached this problem.

> [!info]- Semantic Content
>
> **Env Vars:** uml (2), crc (1)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - it (1)

#### [Solution: Jukebox class diagrams](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-diagrams?u=76281980&t=3)** - Let's take a look at our solution and how we converted our conceptual model into a class diagram for a spaceship jukebox. There wasn't an obvious place to start here so we arbitrarily decided to begin with the song class because, well, songs are pretty essential to a jukebox. In regards to attributes, at a minimum, each song should have a title, so the user knows which song they're choosing and it should have an artist because one of our requirements was being able to sort songs by artist. Both of those attributes could be represented as strings and we decided to keep them private to the class. That means we should include a public get method for other objects to retrieve the song's title and artist. Finally, the song isn't very useful if it can't be played. So, we included a play method. Now, how that song actually gets played, is it on a record, a cd, an mp3 stored in a database? It doesn't matter here, they will all get handled under the hood in the implementation of the song class. Other objects only need to know that all song objects have a play method they can call.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-diagrams?u=76281980&t=73)** - The next class we focused on was the album, which is a collection of songs. And, according to our conceptual model, an album is responsible for displaying the songs in it and selecting a song. To do that, we gave the album class two attributes, a list of strings representing the titles of the songs and a list containing the song objects themselves that belong on that album. To browse a song on an album, a user can call the getTitles method, which returns a list of strings with the song titles. And, once the user has chosen a song, they can pass the title to the getSong method to retrieve the actual song object. Now, there are lots of other ways you could handle the responsibilities of displaying and selecting songs. We just chose to go that route.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-diagrams?u=76281980&t=119)** - We decided to store titles in a list of strings. But, would it make more sense to store them in an array, instead?
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-diagrams?u=76281980&t=127)** - Whether we stored those in a list or an array or some other type of structure, it's really an implementation detail that will be influenced by the programming language we use.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-diagrams?u=76281980&t=137)** - For the UML diagram, all we really want to show is that we're storing a collection of one or more strings and a collection of one or more songs. So, using the multiplicity element here is a better way to represent that. Moving on, the library is a collection of albums in the same way that an album is a collection of songs. With similar responsibilities to display and select. So, to create the library class diagram, we basically copied the class diagram for an album and replaced the [[Microsoft Word|word]] song with the word album. Again, this is a simple implementation and it'll accomplish the library's responsibilities.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-diagrams?u=76281980&t=174)** - Now, turning our attention to the queue class, a queue is effectively a collection of songs much like an album. But, the queue has a very different set of responsibilities so we can't simply copy the album class like we did for the library. The queue's first responsibility of adding songs to the queue translates into a method simply called addSong, which takes a song object as input and it adds that song to an internal list of songs to play. Since the song class holds the responsibility of actually playing a song, we handled the queue's second responsibility, to play the next song, by giving it a getNextSong method that returns the next song object in the queue. And from there, you can call that song's own play method. The third responsibility, to let the administrator cancel songs in the queue, simply became a removeSong method.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-diagrams?u=76281980&t=229)** - Now the queue's final responsibility, to identify the user that's adding songs to the queue, is a bit trickier. The first thing that it implies is that the user class has some way of being identified. So, to keep our example simple, we created the user class with a private string attribute representing its id and a public getId method to retrieve it. The queue will need that id string whenever a user adds a song to the queue. So we modified the addSong function to include a second string parameter to take in the user's id. Just because a queue class has a responsibility to identify the user, doesn't necessarily mean it needs a separate method to accomplish that.
>
> **[4:31](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-diagrams?u=76281980&t=271)** - And for the final admin class, our conceptual model doesn't have much information so we made a few assumptions. We assumed that an administrator would have their own unique id similar to a user. So we gave the admin class the corresponding attribute and method. We also assumed that the admin would have some additional capabilities over a regular user so we gave the admin a method to create new users and a method to manage the queue. So, that's it, the first round of class diagrams we came up with. And that's just one of an infinite number of ways to approach this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Speakers:** - now (2), - let (1), - the (1), - we (1), - whether (1)
> **Code Identifiers:** addsong (2), gettitles (1), getsong (1), getnextsong (1), removesong (1)
> **Definitions:** is a  (6)
> **CLI Commands:** cd (1), make (1)
> **Env Vars:** uml (1)
> **Analogies:** similar to (1)


### 6. Inheritance and Composition

[↑ Back to Table of Contents](#table-of-contents)

#### [Identifying inheritance situations](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=0)** - Inheritance is one of the four key concepts of object orientation. It allows one or more classes to inherit the attributes and methods of another class, referred to as the parent or superclass. The inheriting subclasses or child classes automatically have all of the attributes and methods of their parent class. And they can have their own unique attributes and methods in addition to those. The advantages of code reuse and code maintenance make inheritance a really powerful tool if you can recognize when to use it.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=34)** - Hey, Baron. I've been designing different types of space ships for a video game. I've got a star fighter that can shoot missiles at a player. - Mm-hmm.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=42)** - And a cargo shuttle that carries, well, cargo. If the player asteroid's smashes into the cargo shuttle, it acts like a pinata that drops power ups into space.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=50)** - Ha, cool. Well I sense there's some sort of relationship going on here, and the best way to identify if it's inheritance, is with two simple words, is a. Inheritance describes an is a relationship between objects. Now that's not some technical term. It's just plain language, how you would talk about things in the real world. So I could say that a star fighter is a spaceship, or a cargo shuttle is a spaceship. Both of those make sense. But saying that a cargo shuttle is a star fighter does not. Those two things have a different relationship with each other, not inheritance.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=90)** - I find that using the phrase is a kind of, or is a type of, is sometimes easier to use than is a. So a star fighter is a kind of spaceship, or a cargo shuttle is a type of spaceship.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=105)** - Sure, those are just slightly different phrases that mean the same thing. Even saying that something is kind of like something else, could be an indicator for inheritance. These help us identify when they're might be some shared attributes between objects, and if we think about it, we can save some time and avoid reinventing the wheel.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=123)** - Where some people hit their first problem identifying inheritance, is when they start [[Sketching]] out classes, picking the nouns from the written descriptions. As they scan those objects, they can tell that there's some sort of relationship between cargo and cargo shuttle. But is that an inheritance relationship? This is where the question comes in. Could you say that cargo is a cargo shuttle?
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=147)** - [Man] Well no, and I wouldn't say that a cargo shuttle is cargo either, so there might be some relationship there, cargo shuttles might have cargo, but that's a different relationship than inheritance. Since I could say that a cargo shuttle is a spaceship, and a star fighter is a spaceship, that's a clue that I might be able to share some behavior in that area. If I put those two classes next to each other, it's easy to see that they have several attributes and methods in common. The star fighter and cargo shuttle both have attributes for shield active, shield strength, and position, as well as methods called set shield and move. So I'll strip out those common elements and put them into a super class called spaceship, that star fighter and cargo shuttle sub classes will inherit from. That's indicated in UML diagrams with an open arrow that look like a wedge. The star fighter's method to fire missiles and the cargo shuttle's method to drop cargo remain in their respective sub classes, because those behaviors are unique to each one. From here, we can easily define more types of spaceships, like a warp cruiser, that can automatically inherit all of the elements of the space ship super class. Now there may be times when some of those inherited methods don't quite work for a specific subclass. Maybe our warp cruiser moves differently than a generic spaceship, because after all, it travels at warp speed, and many languages will allow a subclass to replace the implementation of an inherited method
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=242)** through a process called overriding. So the warp cruiser class could override just the move method to use it's own unique version of it. Inheritance can also extend multiple levels deep. If there are going to be other types of vehicles in our game, than we might create a higher level vehicle class for spaceship to inherit from. The is a relationship still holds true here. A warp cruiser is a spaceship, and a spaceship is a vehicle.
>
> **[4:31](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/identifying-inheritance-situations?u=76281980&t=271)** - Now, a [[Microsoft Word|word]] of warning. It's common for new object orientated developers to overemphasize inheritance. And to come up with class diagrams with five levels of inheritance for everything. Don't go looking for inheritance, because inheritance usually announces itself. If you find yourself creating one or two class diagrams without any inheritance, don't worry. It's perfectly fine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sketching]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** cargo (19), make (2), find (2)
> **Definitions:** is a  (14)
> **Speakers:** - inheritance (1), - hey (1), - and (1), - ha (1), - i (1)
> **Env Vars:** uml (1)
> **Analogies:** kind of like (1)
> **Warnings:** warning (1)

#### [Using inheritance](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/using-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/using-inheritance?u=76281980&t=0)** - [Instructor] I want to show you a few examples of how inheritance is implemented across several different languages to help you recognize inheritance when you see it in code. But don't worry about memorizing syntax here, this is just an overview. If I wanted to find a new class called CargoShuttle that inherits from an existing Spaceship class, in [[Java]] I would use the keyword extend followed by the name of the class I wanted to inherit from. So CargoShuttle extends Spaceship. In c#, I would use a colon, which is a fairly common way to indicate that CargoShuttle inherits from Spaceship. C++ and [[Swift (Programming Language)|Swift]] both use a similar type of colon notation as well. Now [[Python (Programming Language)|Python]] is a bit different. Python puts the super class that the new subclass will inherit from in parentheses. And Ruby has its own way of saying that CargoShuttle inherits from Spaceship using the less than symbol. As you can see here, this basic idea of inheritance is really just a minor syntax change between languages. Now when it comes to the details of overriding, that is allowing the subclass to replace the implementation of a method from the superclass. The details are a bit too specific to each language to be useful here. Some languages require keywords, others don't. Some languages require keywords in both the superclass and subclass and so on. For details on overriding, you'll need to refer to your chosen language. That said, when common need is for code within the subclass,
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/using-inheritance?u=76281980&t=94)** the new child class, to call a method that was originally defined in the superclass, its parent, and the [[Microsoft Word|word]] you'll see for that is super. From within one of the methods of our CargoShuttle class, if I want to execute the setShield method that's defined in its superclass Spaceship, using Java I would call super dot and then the method name, so super.setShield. Dot net languages like c# tend to use the word base instead of super because they use the terms base class and derived class rather than superclass and subclass. But the idea behind it is the same. Swift uses the word super, as does Python and Ruby. That's the most common way of doing it. However, c++ is a bit different because c++ allows for multiple inheritance, which means I could be inheriting from multiple classes. So I can't simply say super and know that it will automatically go to the right superclass. In c++ I have to use the official name of whatever superclass I am referring to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Word|Word]] (3), [[Java]] (2), [[Swift (Programming Language)|Swift]] (2)
> **CLI Commands:** python (3), ruby (2), find (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** setshield (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Abstract and concrete classes](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/abstract-and-concrete-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/abstract-and-concrete-classes?u=76281980&t=0)** - We've defined several different types of spaceships for our game. The starfighter, the cargo shuttle
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/abstract-and-concrete-classes?u=76281980&t=6)** - and the warp cruiser. Weeeee.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/abstract-and-concrete-classes?u=76281980&t=10)** - And all three of those inherit from the same common superclass called spaceship. We'll use those three subclasses to instantiate objects for each specific type of ship but we'll never actually need to instantiate the generic concept of a spaceship. In this case, spaceship can be defined as an abstract class because it exists purely for the sake of being inherited by other classes to provide some shared behavior but an abstract class itself can never be instantiated because it contains at least one abstract method which is a method that's declared with a method signature but not actually implemented in the abstract class. That's deferred to any subclasses that inherit from the abstract class. They're responsible for actually implementing the abstract methods. In uml diagrams we identify spaceship as an abstract class by using italicized font. Now, not every method in an abstract class has to be abstract. The abstract class can have a mix of abstract methods and methods that it actually implements. If all three of our ship types have shields that work the exact same way, rather than making them each implement the same set shield method, we'll implement it once in the spaceship class and they'll all inherit it. But, if each type of ship moves in a different way then each subclass will need to implement its own unique move method. So, we'll declare an abstract move method in our spaceship class. Again, italics are used to indicate
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/abstract-and-concrete-classes?u=76281980&t=106)** that it's abstract and that abstract method serves as a sort of placeholder for each of the subclasses to let them know that they'll need to individually implement it And of course, each of the subclasses are free to implement any additional methods that are unique to them. Some languages like [[Java]] or C sharp let you explicitly mark a class as abstract when declaring it which prevents the language from allowing that class to be instantiated. You must inherit from it with another subclass, implement the abstract methods in that subclass and then you can use that subclass to actually instantiate an object. In Java, you can also mark classes as final which has the opposite effect of abstract. A final class is meant to be instantiated and cannot be extended or inherited from. This is often referred to as a concrete class because it implements any missing functionality from the abstract class. Now, not all languages have official keywords to identify abstract and concrete classes and you can treat a class as if it were abstract simply by omission, just don't create an object from it. In fact, we could write our Java code without ever formally marking classes as abstract and it would work just fine. The benefit of including keywords like abstract and final is to communicate your intentions for a class to other programmers. It let's them know whether or not a class was designed with inheritance in mind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3)
> **Speakers:** - and (2), - we (1)
> **CLI Commands:** cargo (1)
> **Definitions:** defined as (1)

#### [Interfaces](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/interfaces?u=76281980&t=0)** - Interfaces are another common form of abstraction that's supported by many object-oriented languages. An interface is a programming structure that declares a set of methods for a class to implement, but the interface itself doesn't contain any functionality. There's no implemented code or behavior. It's just a collection of method signatures to specify a service. For example, in [[Java]] an interface would be written like this, using the [[Microsoft Word|word]] interface instead of class. This interface is named Moveable and it declares one method called move. But that method doesn't have a body. Again, you're not allowed to put any functionality inside an interface. When we defined a new class and choose to implement a specific interface, it's like signing a contract, promising that the new class we're defining will implement all of the methods in that interface. But, we're free to implement the inner workings of those methods however we want as long as the method names, inputs, and outputs match the interface. For example, if we define an Asteroid class that implements the Moveable interface, then Asteroid is required to implement the actual code for the move method.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/interfaces?u=76281980&t=72)** - You know, it sounds to me like interfaces are just an extreme version of abstract classes where none of the methods are implemented and everything's abstract.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/interfaces?u=76281980&t=82)** - Interfaces and abstract classes can seem similar at first. But they serve different purposes. Interfaces are used to represent a capability that a class implements. Whereas and abstract class represents a type that another class can inherit from. Consider the abstract Spaceship class that our CargoShuttle class inherits from. It represents a type of object with an is a relationship for inheritance. The CargoShuttle is a Spaceship. Now, let's look at the Asteroid class next to it. Side-by-side it's obvious that Spaceships and Asteroids both have a move method.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/interfaces?u=76281980&t=119)** - [Man] But Asteroids and Spaceships are completely different things. The only thing they have in common is that they both move around in space.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/interfaces?u=76281980&t=126)** - [Woman] Right, it would not make sense for Asteroid to inherit from Spaceship. An Asteroid isn't a type of Spaceship. However, moving is a capability they both share. So they could both implement a common interface for Movable objects. In UML, we represent an interface using a box that looks similar to a class. But we include a tag with double angle quotes to indicate that it's an interface. And, for classes that implement this interface, we use the same arrow as inheritance, but with a dashed line instead of a solid line to indicate that it's implementing an interface rather than inheriting from a class. Now while most languages only allow a class to inherit from one other class, interfaces don't have that restriction. A class can implement multiple interfaces. In our video game, the spaceships and asteroids will both need to be drawn on the screen at some point. In addition to the Movable interface, we can create a second interface that they both implement called Drawable. Now, we don't need to know how the Spaceship and Asteroid's draw method works under the hood. It's just a black box. We just know that for any object, even types of objects that we've never encountered before, as long as it implements the Drawable interface, it will have a draw method that we can call. An example of when this would be useful is if we have a list or collection storing all of the objects in our game. To update the display, we can iterate through each of the potentially unknown objects in that list and simply check if it supports the Drawable interface. So we'll call its draw method to update it on the screen.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/interfaces?u=76281980&t=221)** - That sure is handy.
>
> **[3:42](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/interfaces?u=76281980&t=222)** - That's why many developers favor using interfaces to provide a formal list of methods to support. In fact, there's a well known saying that good developers program to an interface not to an implementation because it's a developer's choice how to implement those methods rather than being provided with that code. If your chosen language supports interfaces, then I highly recommend becoming familiar with how they're implemented in that language because interfaces are often a more future friendly way of programming than using inheritance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Microsoft Word|Word]] (1)
> **Speakers:** - interfaces (2), - that (2), - you (1), - [man] (1), - [woman] (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), it's like (1), similar to (1)
> **CLI Commands:** make (1)
> **Env Vars:** uml (1)

#### [Aggregation](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980&t=0)** - Inheritance is just one type of relationship that can exist between objects. The concept of aggregation is another type of object relationship in which one object is built of other objects.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980&t=12)** - Like this fleet of spaceships. We can think of a fleet as an object that contains a bunch of individual spaceship objects.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980&t=19)** - [Male Instructor] Aggregation is often referred to as a has a relationship, as opposed to the is a relationship of inheritance. I wouldn't say that the fleet is a spaceship, but I could say that the fleet has a spaceship.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980&t=32)** - Only one ship? Well, that's a puny little fleet.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980&t=35)** - Well, in this context, has a can implicitly suggest has many. So a fleet has many spaceships.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980&t=43)** - That's more like it.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980&t=44)** - What we're exploring here is that a has a relationship is different from the is a relationship of inheritance. In UML diagrams, we can represent the has a relationship for aggregation with an unfilled diamond. So the diagram here represents a fleet object that contains a collection of spaceship objects. Spaceship refers to an abstract class, so the fleet might contain a variety of different concrete spaceship classes. As with other diagrams, we can optionally indicate multiplicity with an asterisk to say that one fleet can have anywhere from zero to many spaceships. Now, although aggregation is commonly used, it may not always be worth showing on a diagram, because the object lifetimes of those spaceships are not tied to each other or the existence of the fleet.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980&t=91)** - So what happens when we end the fleet? Do the ships go away?
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/aggregation?u=76281980&t=94)** - In the case of aggregation, no. The spaceships each exist independently of the fleet, so destroying the fleet is like breaking up a band. The individual ships can continue to exist and do their own thing. So perhaps a better phrase for an aggregation relationship than has a is uses a, or uses many. The fleet uses many spaceships, and if the fleet ceases to fly together, the individual spaceships will continue to exist on their own.

> [!info]- Semantic Content
>
> **Speakers:** - inheritance (1), - like (1), - [male (1), - only (1), - well (1)
> **Definitions:** is a  (3), refers to (1)
> **Env Vars:** uml (1)

#### [Composition](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/composition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/composition?u=76281980&t=0)** - A more specific form of aggregation is something called composition. Like aggregation, composition is based around a has-a relationship between objects but it specifically implies ownership. I might say that a spaceship has an engine, but more accurately, I should that the spaceship owns the engine. Composition implies ownership and an engine has no meaning or purpose in the system without a spaceship.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/composition?u=76281980&t=27)** - It's like attaching the object to one of these model ships. The spaceship has a shield and, since it's a star fighter, it has a weapon. Or I should say, it owns a weapon.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/composition?u=76281980&t=37)** - Right. The space ship is composed of several different objects that each have their own attributes and behaviors. But a key difference between composition and aggregation is that in a composition situation, if the owning object is destroyed by, say, an asteroid ...
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/composition?u=76281980&t=53)** - Or an Olivia.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/composition?u=76281980&t=56)** - The contained objects are destroyed, too. The ships engine, its shield, its weapons, those are all gone. Now, although aggregation may not always be worth showing in a UML diagram, composition often can be and it's represented with a filled-in diamond. If the lifetime of an object is dependent on another object's existence, that's usually worth showing, if for nothing more than to prompt the idea that, when you're defining the owning class, you may need to write constructor and destructor methods to take care of creating and deleting those internal objects. As with aggregation we can use multiplicity symbols to indicate that a spaceship is composed of one or more engines. And we can show other objects that the spaceship has as well, giving it a shield and possibly some weapons, too.

> [!info]- Semantic Content
>
> **Speakers:** - a (1), - it (1), - right (1), - or (1), - the (1)
> **Env Vars:** uml (1)
> **Analogies:** it's like (1)

#### [Challenge: Jukebox class relationships](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-class-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-class-relationships?u=76281980&t=3)** - Congratulations, you've reached the fifth and final challenge of this course. It builds on the previous four challenges, to create a full class diagram for a spaceship jukebox. For this challenge, you'll be identifying the relationships between classes. If you have your own set of class diagrams from completing the previous challenges, then I encourage you to work from those. Otherwise, feel free to use our class diagrams, shown here. Your goal is to identify opportunities between the classes to implement things like inheritance, interfaces, aggregation, and or composition. And then modify your class diagrams with the appropriate UML markings to indicate those class relationships. To do that correctly, you may need to add or remove some attributes and methods from your existing classes or even create some new classes. That's all part of the challenge. There are a lot of possible solutions here, so take some time to think it through, and when you're done, watch our solution video to see how we approached this problem.

> [!info]- Semantic Content
>
> **Env Vars:** uml (1)
> **Speakers:** - congratulations (1)

#### [Solution: Jukebox class relationships](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=3)** - To solve the final challenge of identifying class relationships, we'll begin by looking for classes that have similar attributes or methods. The first thing I notice is that the User and Admin classes both have an 'id' attribute and a 'getId' method. This is a hint that there might be an opportunity for inheritance here. So, to test that idea, just ask if the phrase 'User is a Admin' makes sense.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=30)** - [Olivia] Well, a User could be an Admin. That's not always the case.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=34)** - [Man] Then how about 'Admin is a User'?
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=37)** - [Olivia] That makes more sense. An admin is a type of user with extra capabilities. So, in this case, User can act as the super class which the Admin class can inherit from. Notice we've removed the id attribute and 'getId' method for the Admin class in this diagram since they'll be inherited from the user. Using inheritance here could come in handy down the road if we decide to implement additional types of special users.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=62)** - Like a musical curator who updates the songs to keep them fresh.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=66)** - Then, that curator could automatically have the User id if it inherits from the user class.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=70)** - [Man] Great. I also noticed that the Library and Album classes have the same title and getTitles attribute and method. So this could be another inheritance opportunity.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=81)** - [Olivia] Does 'Library is an Album' make sense?
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=84)** - [Man] Uh, nope.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=86)** - [Olivia] What about 'Album is a Library'?
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=89)** - Eh, that's not any better. So there's not a straightforward way for one of these classes to inherit from the other. But, I still think there's a relationship here since a Library and an Album both represent a collection of things. So, I'll pull out those commonalities to create a new collection class and let both the Library and Album class inherit from it. Bam! Inheritance.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=112)** - You know, while that will technically work, I think you may have gone a little too far with the abstraction this time. I don't foresee us creating any other classes that will need to inherit from that particular collection class. So all you've really done is turn two classes into three which makes things unnecessarily confusing.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=131)** - But, inheritance--
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=133)** - Isn't always the right thing to do. It depends.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=137)** - Arguments like this are common when programmers work together and, as with all of our arguments, Olivia wins. We won't use inheritance there.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=145)** - [Olivia] Although I don't think we should use inheritance with the Library and Album classes, recognizing that they both represent a collection of things is useful because they suggest an aggregation relationship. The Library is an aggregation of one or more albums, and along those lines, an album is the aggregation of one or more songs.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=166)** - [Man] But the aggregations don't stop there. A queue is also an aggregation of songs, but since the play queue can be empty, it's an aggregation of zero or more songs. Putting it all together gives us our final class diagram. The output of our object-oriented design process, and it's something we can actually use to start writing code.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/solution-jukebox-class-relationships?u=76281980&t=186)** - But that doesn't mean this diagram is finished and set in stone. I'm sure as we start turning this into actual code, we'll discover new problems and have to make changes. But these diagrams give us the starting point we need to begin implementation.

> [!info]- Semantic Content
>
> **Speakers:** - [olivia] (5), - [man] (4), - but (2), - to (1), - like (1)
> **Definitions:** is a  (5), is an  (2)
> **Code Identifiers:** getid (2), gettitles (1)
> **CLI Commands:** make (2)


### 7. Software Development

[↑ Back to Table of Contents](#table-of-contents)

#### [OOP support in different languages](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/oop-support-in-different-languages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/oop-support-in-different-languages?u=76281980&t=0)** - Throughout this course, we've focussed on object-oriented design. The processes and techniques to create a system. And while everything we've covered can be applied to any object-oriented language, it's worthwhile to take a look at some of the differences between the most common ones. One of the main differences between languages is their support for inheritance. Many languages only allow single class inheritance, meaning, a derived class can only inherit from one class. However, C++ and [[Python (Programming Language)|Python]] support multiple inheritance, where derived class inherits more than one base class, although Ruby doesn't support multiple inheritance, it does have a feature called mixins that allow you to combine objects, though some people see this as more of a form of composition. And finally, [[JavaScript]], which is informal compared to other object-oriented languages. Because it doesn't even use the idea of classes, instead, JavaScript uses prototypes to define its objects, which allows it to be more dynamic. Properties can be dynamically added or removed at runtime. When defining a class hierarchy in a language, the way that calls are made to the super class, base class, or parent class varies. Many languages use a term, super. C++ uses the name of the class, followed by two colons. And since JavaScript doesn't use classes, this doesn't even apply. Most compiled languages are statically typed, meaning, the type of all variables are known at compile time. This means, as a developer, you have to specify the type of every variable you declare.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/oop-support-in-different-languages?u=76281980&t=93)** However, scripting languages, like Ruby, Python, and JavaScript, that do not get compiled, are often dynamically typed languages. So, the type of variable doesn't need to be specified. Now, while that can make development faster, and more flexible, it does make it harder to track down bugs if a variables type was misinterpreted at runtime. Because dynamic languages don't require you to specify the type of variables, it also means they don't support interfaces. C++ and Python also don't support the concept of interfaces because they allow for multiple inheritance. However, you could implement something similar using an abstract class and only abstract methods. There are plenty more object-oriented languages than what we've listed here. And there are even special variations that mix or combine some of them together. For example, Jython is a variation of Python that can run on the [[Java]] platform, and TypeScript is a variation of JavaScript that allows statically typed variables. You'll notice that different languages often use similar terminology. And they'll have different terms for similar features. Or, they'll use the same term to mean different things. Despite all these differences, all the concepts we've covered in this course apply to any object-oriented language you choose to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (5), [[Python (Programming Language)|Python]] (4), [[Java]] (1)
> **CLI Commands:** python (4), ruby (2), make (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - throughout (1)

#### [General development principles](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/general-development-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/general-development-principles?u=76281980&t=0)** - There are always multiple ways to write a piece of code to accomplish the same thing, and programmers love to argue which ways are better.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/general-development-principles?u=76281980&t=9)** - I know what's best.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/general-development-principles?u=76281980&t=11)** - However, no matter which solution you choose, there are a few general principles to keep in mind that'll make maintaining your code base easier in the long run. One set of well-known principles has the acronym SOLID, representing five separate, but interrelated principles that apply to any object oriented design, and are intended to make your software more understandable, flexible, and maintainable. For example, the single responsibility principle warns programmers to avoid creating what are called God objects, objects that do a whole lot of things that aren't related to each other. Those behaviors should be split between multiple, smaller classes, that each have one primary responsibility, one reason to exist. If any of your classes start getting too big, always consider if perhaps they should be split into two or more classes that interact with each other. Now, there's a lot more behind these SOLID principles, and they warrant an entire course of their own. So if you want to learn more about them, check out some of the courses on programming principles. Another common principle that [[Forms]] an acronym, but is much simpler to understand, is Don't Repeat Yourself or DRY. You should avoid copying and pasting large sections of code without any changes because if you realize later that you made a mistake in one of those sections, you'll have to remember all of the places you've copied it and fix those too. That's a maintenance nightmare, and the DRY principle applies to more than just software. We also want to avoid duplication in things like documentation, diagrams, and database schemas.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/general-development-principles?u=76281980&t=105)** There should only be a single source that can be referenced elsewhere. The last principle I have for you that makes an acronym is YAGNI, which stands for You Ain't Going to Need It. A common trap that many new, overzealous programmers fall into is trying to make their code too extensible, and adding hooks for every possible variation of everything they could ever possibly see. Abstraction is good, and we want to be able to extend our programs, but abstracting too much will mean more testing, more debugging, and code bloat. We don't want to waste time on things that will never be used. Now, there are plenty of tools out there that will plug right into an IDE to do what's called static analysis and highlight some of these things, duplicate code, unnecessary code, or God objects, are examples of some code smells. The code could be valid, it could compile, it could technically work for the problem we're looking to solve, but there's something that just doesn't pass the sniff test. Of course, automated tools won't find everything, and sometimes they'll flag the wrong thing, but many are configurable, and they're a useful tool to help develop a well-designed program. If you want to learn more about code smells, how to recognize them, how to fix them, I recommend checking out some of the other courses on good programming practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Env Vars:** solid (2), dry (2), yagni (1), ide (1)
> **CLI Commands:** make (3), find (1)
> **Speakers:** - there (1), - i (1), - however (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### [Software testing](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=1)** (keys clicking)
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=9)** - Done, I've created the perfect game, it's ready to be released to our customers.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=14)** - Did you test it
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=16)** - Kind of, I checked to make sure it meets all the requirements we came up with.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=20)** - But what happens if a player does something unexpected with the game? Or they use it in a way that wasn't captured in our set of requirements?
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=28)** - Why would they use a perfectly good game wrong?
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=31)** - Perhaps they misunderstood how to play it, or maybe they mistyped something, or maybe they're just mischievous and want to push the boundaries to try and break it.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=39)** - Well, if they just read the documentation I wrote, they know exactly how to use it.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=45)** - Documentation, getting starter guides, and training are all good, and can help make a basic user become a power user. The software should be easy and intuitive to use. Imagine we're building an online version of this game, and we ask them to enter their phone number when creating an account. How many digits should we allow the user to enter?
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=63)** - 10 obviously, three for the area code, seven for the [[Representational State Transfer (REST)|rest]].
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=67)** - Sure that works if we only have users in North America. But there are plenty of countries where the phone numbers aren't 10 digits, or if they are, it's not necessarily true that the first three are reserved as an area code. Now imagine that you do enter the 10 digits for your phone number, but the application refuses to accept it. It says it's an invalid input, what would you think?
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=90)** - It sounds to me like somebody else wrote a buggy piece of software.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=94)** - [Olivia] What if I told you that's because the input was expecting dashes to separate the area code from the rest of the number?
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=100)** - How was I supposed to know that?
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=102)** - See, these are some of the usability considerations you've got to keep in mind when creating software.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=107)** - Shouldn't that have been outlined as part of a use case or something?
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=111)** - Yes, some issues will come up when creating use cases, but we can never anticipate how all our users will choose to use our software. A good thing to always keep in mind is that if there's an optional field, input, or tool, there will always be a user that tries to use it in a way that we were not intending them to. Proper error messages and prompts go a long way to help guide them.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=132)** - [Male] Testing all of those scenarios sounds pretty tedious.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=136)** - It sure can be. And no one really wants to spend hours, days, or even weeks, testing the same thing over and over again. That's why creating automated unit tests and system tests as you develop your program is invaluable. Not only will it keep you from doing the same tedious tests over and over again, as things change you can more readily find out if something breaks after that change.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=159)** - That reminds me of when I've upgraded software before, and suddenly things that had been working fine, stopped working at all.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=166)** - [Olivia] It's a common complaint when users upgrade software. And it's often caused by developers refactoring between the code releases. Maybe they've discovered a better way to implement a part of the solution, or maybe refactoring was necessary to allow them to add a new feature. Whatever the case may be, refactoring is a natural part of maintaining software over time.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=187)** - Well shouldn't they have tested it to make sure everything still works the same as before?
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=191)** - They should, and having a well established automated testing system that properly mimics how users interact with the software will help with that.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/software-testing?u=76281980&t=199)** - All right, Olivia, you can get off your soap box. You've convinced me. As exciting as releasing software can be, developing and running a proper test system is just as important as developing he application itself. I guess it's time I check out some other courses on [[LinkedIn]] Learning to learn more about [[Software Testing]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[LinkedIn]] (1), [[Software Testing]] (1)
> **Speakers:** - well (2), - it (2), - [olivia] (2), - done (1), - did (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** imagine (2)
> **Warnings:** keep in mind (2)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Non-Speech:** (keys clicking) (1)

#### [Design patterns](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/design-patterns?u=76281980&t=0)** - Creating software that merely works is tough enough, but writing code that's also flexible, maintainable, and extensible, that's a real challenge. You should expect your code to undergo multiple changes throughout the development process. And even after being released, most modern applications receive updates to improve features or fix bugs. If you don't structure your code well from the beginning, making those changes can be a major burden. This is where using a design pattern can be really useful. [[Design Patterns]] are common, repeatable solutions for creating software programs. They define code architectures and best practices for solving common [[Software Design]] problems that occur again and again across all kinds of applications, from business apps to games. Now, design patterns aren't strict standards with exact lines of codes to use, rather they're templates to help structure your code in a smart way. So you'll spend less time refactoring it and more time adding new cool features. Uh-oh, here comes our boss.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/design-patterns?u=76281980&t=62)** - Hello Olivia, what's happenin'? That game you and Barron created it's not interesting enough. It needs more types of enemy spaceships to dodge. So um, yeah, I'm going to need you to go ahead and fix that ASAP. [[Quality Assurance]] is ready to begin testing. (sighing)
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/design-patterns?u=76281980&t=84)** - Well, it looks like the unnamed programmer who wrote that part of the game hard-coded exactly which ships appear and when. So now I need to track down all the places that occurs to figure out how to add different enemy spaceships that spawn in each level. My life would be a lot easier if we had used a design pattern here, such as the common factory method pattern, which could provide a structured way to instantiate different types of enemy spaceships based on the current level and difficulty setting. But sometimes you inherit bad code, so I'll make those changes. There, hope I didn't miss a level.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/design-patterns?u=76281980&t=122)** - Thanks for makin' those changes, Olivia, but uh, you missed a level. Be more attentive next time. We got feedback from the game testers. They're asking for a time travel feature to let the player rewind the game. So I'm going to need that right away. We're makin' the big game announcement next week.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/design-patterns?u=76281980&t=139)** - But that's going to be a lot of work to implement.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/design-patterns?u=76281980&t=141)** - Ah yeah, so um, I'm going to need you to go ahead and come in tomorrow, okay.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/design-patterns?u=76281980&t=148)** - Ugh, another change. Like everything in programming, there are multiple ways I could build a rewind feature. But for this new feature, it'll be helpful to reference the memento design pattern, which outlines a proven approach for restoring an object to a previous state. Now, I probably won't be able to just copy the memento design pattern straight from a book and have it work here, but the basic structure and concepts behind it will serve as a good starting point to develop my solution. Design patterns became well known from this book, Design Patterns published by a group of authors known as the Gang of Four. Their book details 23 design patterns, which are organized into three groups. Creational patterns, focused on the instantiation of objects and provide clever ways to have more flexibility in how objects are actually created. The structural patterns describe how classes are actually designed. How things like inheritance and composition and aggregation can be used to provide extra functionality. And the behavioral patterns are specifically concerned with the communication between objects as a program is running. In addition to the Gang of Four book, Head First Design Patterns is another great resource that we highly recommend, but if you prefer watching videos over reading books there are plenty of courses available in [[LinkedIn]] Learning to learn more about design patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (7), [[Software Design]] (1), [[Quality Assurance]] (1), [[LinkedIn]] (1)
> **Speakers:** - creating (1), - hello (1), - well (1), - thanks (1), - but (1)
> **CLI Commands:** make (1)
> **Env Vars:** asap (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Non-Speech:** (typing loudly) (1)


### Glossaries

[↑ Back to Table of Contents](#table-of-contents)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/next-steps?u=76281980&t=3)** - We've reached the end of this course, but there's still a ton more to learn and understand about [[Object-Oriented Programming (OOP)|object-oriented programming]], analysis, and design. Now, many people first approach object orientation as a set of absolute rules and predefined structures, but as we've explored here, it's simply an approach that brings with it a variety of tools and techniques.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/next-steps?u=76281980&t=22)** - There's no one right way to do object-oriented development, but there's certainly best practices and you have the choice of which ones are most useful for you. As you continue to learn and grow as a developer, we encourage you to revisit this content now and again. You'll find new ideas and things that'll have new meaning the second or even third time around.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/next-steps?u=76281980&t=42)** - Finally, thanks for watching. We had a ton of fun making this course and we hope you enjoyed it.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/next-steps?u=76281980&t=47)** - Happy programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Speakers:** - we (1), - there (1), - finally (1), - happy (1)
> **CLI Commands:** find (1)


## Instructor

- [[Olivia Chiu Stone]]
- [[Barron Stone]]

## Path Context

### In [[Become a Programmer- Foundations]]
← [[Programming Foundations- Beyond the Fundamentals]] | **3 of 12** | [[Programming Foundations- Algorithms]] →

### In [[Career Essentials in Software Development by Microsoft and LinkedIn]]
← [[Programming Foundations- Beyond the Fundamentals]] | **4 of 4**

## Part of

- [[Career Essentials in Software Development by Microsoft and LinkedIn]]

## Appears In

- [[Become a Programmer- Foundations]]
- [[Career Essentials in Software Development by Microsoft and LinkedIn]]

---

[↑ Back to top](#)