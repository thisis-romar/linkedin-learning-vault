---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-plus-plus-design-patterns-behavioral
url: "https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral"
duration_minutes: 209
duration: 3h 29m
level: Intermediate
updated: 6/9/2021
learners: 29992
skills:
  - Software Design Patterns
  - C++
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF-T1GpCdCroQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622849290891?e=2147483647&amp;v=beta&amp;t=XPPas-HZ6qijtjMWsh3ZmwdAnBOCra5dMGd9zPyoPgw"
linkedin_topic: DevOps
learning_paths:
  - '[[Master C++]]'
prev_courses:
  - '[[Test-Driven Development in C++]]'
next_courses:
  - '[[C++ Design Patterns- Creational]]'
path_nav: '[{"path":"Master C++","position":4,"total":6,"prev":"Test-Driven Development in C++","next":"C++ Design Patterns- Creational"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/software-design-patterns
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C%2B%2B%20Design%20Patterns-%20Behavioral.md)

![C++ Design Patterns: Behavioral](https://media.licdn.com/dms/image/v2/C560DAQF-T1GpCdCroQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622849290891?e=2147483647&amp;v=beta&amp;t=XPPas-HZ6qijtjMWsh3ZmwdAnBOCra5dMGd9zPyoPgw)

# C++ Design Patterns: Behavioral

> Programmers spend much of their time solving problems, yet they may wind up solving the same problems over and over again. In C++, design patterns can help programmers save their valuable time with classes of programming problems that have similar solutions. Once developers learn these patterns, they can write software more efficiently and make more deliberate software designs. In this course, ins

> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral) | 3h 29m | Intermediate | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Behavioral patterns improve software design](#behavioral-patterns-improve-software-design)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Design Patterns**](#1-introduction-to-design-patterns) (1 videos)
  - [What are design patterns?](#what-are-design-patterns)
- [**2. Behavioral Patterns Group 1**](#2-behavioral-patterns-group-1) (15 videos)
  - [The Chain of Responsibility pattern](#the-chain-of-responsibility-pattern)
  - [Implementing the Chain of Responsibility pattern](#implementing-the-chain-of-responsibility-pattern)
  - [Create Chain of Responsibility handlers](#create-chain-of-responsibility-handlers)
  - [The Command pattern](#the-command-pattern)
  - [Implementing the Command pattern](#implementing-the-command-pattern)
  - [Increasing code reuse with commands](#increasing-code-reuse-with-commands)
  - [The Mediator pattern](#the-mediator-pattern)
  - [Implementing the Mediator pattern](#implementing-the-mediator-pattern)
  - [Using the Mediator from inside other classes](#using-the-mediator-from-inside-other-classes)
  - [The Observer pattern](#the-observer-pattern)
  - [Creating publishers](#creating-publishers)
  - [Creating subscribers](#creating-subscribers)
  - [Project: Create a group-chat program](#project-create-a-group-chat-program)
  - [Challenge: Apply the Command pattern](#challenge-apply-the-command-pattern)
  - [Solution: Apply the Command pattern](#solution-apply-the-command-pattern)
- [**3. Behavioral Patterns Group 2: Strategies, States, and Interpretations**](#3-behavioral-patterns-group-2-strategies-states-and-interpretations) (18 videos)
  - [The Interpreter pattern](#the-interpreter-pattern)
  - [Implementing the Interpreter pattern](#implementing-the-interpreter-pattern)
  - [Applying the Interpreter pattern](#applying-the-interpreter-pattern)
  - [The State pattern](#the-state-pattern)
  - [Implementing the State pattern](#implementing-the-state-pattern)
  - [Applying the State pattern](#applying-the-state-pattern)
  - [The Strategy pattern](#the-strategy-pattern)
  - [Creating strategies](#creating-strategies)
  - [Rewriting classes to use strategies](#rewriting-classes-to-use-strategies)
  - [The Template Method pattern](#the-template-method-pattern)
  - [Creating template methods](#creating-template-methods)
  - [Modifying templates using subclasses](#modifying-templates-using-subclasses)
  - [The Visitor pattern](#the-visitor-pattern)
  - [Implementing visitors](#implementing-visitors)
  - [Allowing classes to accept visitors](#allowing-classes-to-accept-visitors)
  - [Project: Create a greeting-card generator program](#project-create-a-greeting-card-generator-program)
  - [Challenge: Modifying the card generator](#challenge-modifying-the-card-generator)
  - [Solution: Modifying the card generator](#solution-modifying-the-card-generator)
- [**4. Behavioral Patterns Group 3**](#4-behavioral-patterns-group-3) (12 videos)
  - [The Iterator pattern](#the-iterator-pattern)
  - [Implementing the Iterator pattern](#implementing-the-iterator-pattern)
  - [Using iterators](#using-iterators)
  - [The Memento pattern](#the-memento-pattern)
  - [Creating a Memento class](#creating-a-memento-class)
  - [Using Memento classes](#using-memento-classes)
  - [The Null Object pattern](#the-null-object-pattern)
  - [Creating Null Object classes](#creating-null-object-classes)
  - [Setting null objects as the default](#setting-null-objects-as-the-default)
  - [Project: Create an instant replay program](#project-create-an-instant-replay-program)
  - [Challenge: Apply the Null Object pattern](#challenge-apply-the-null-object-pattern)
  - [Solution: Apply the Null Object pattern](#solution-apply-the-null-object-pattern)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Behavioral patterns improve software design
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=0)** - [Shaun] It's been said that object oriented programming without a basic knowledge of design patterns is like having a fully stocked refrigerator but no idea how to cook.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=8)** The basic raw materials are there, right?
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=10)** Concepts like classes, interfaces, inheritance, polymorphism, et cetera.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=15)** But when you try to actually combine them into a useful hole, the result is, more often than not, a mess.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=21)** In this course, I'll show you how to improve your programming skills by learning 12 incredibly useful behavioral design patterns.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=28)** As the course progresses, you'll gain an in-depth knowledge of how each of these patterns works.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=33)** You'll learn the benefits and drawbacks of each one.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=35)** And finally, you'll get hands-on experience with them through a variety of real world examples.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=41)** I'm Shaun Wassell.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=43)** While I've been working with these design patterns for quite a while now, I remember when I first learned them, how much of a struggle it was at first to apply them effectively.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=51)** And that's why I made this course, to help you learn and master these patterns as quickly as possible so that you can take your programming skills to the next level.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/behavioral-patterns-improve-software-design?u=76281980&t=59)** And with all that said, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming]] (3), [[Design Patterns]] (3), next (1)
> **Speakers:** - [shaun] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course there were a few things that it would be helpful for you to know.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=5)** First of all it would be very helpful to have a basic knowledge of C++ and ideally also a basic knowledge of how object-oriented programming in C++ works.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=14)** If you haven't already worked with these things I'd highly recommend you take a look at one of the C++ essentials courses in our library first and then come back to this one.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=22)** Since we won't be covering any of the very basics of either C++plus plus or object-oriented programming in this course.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=28)** It would also be helpful for you to have some experience with representing object-oriented hierarchies using Unified Modeling Language or UML as it's usually called.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=37)** UML isn't very complicated to learn and chances are that you'll be fine in this course even without any prior knowledge of it.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=43)** But if you find yourself needing a brief primer feel free to check out one of our object-oriented programming basics courses in the library.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=51)** I also highly recommend that you follow along with me as I write code but at the same time have included the start and finish state for all the code that I write in this course in the exercise files for your reference.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=63)** So, basically this course is intended for C++ developers who want to learn the ins and outs of design patterns and how they can help us write better more maintainable code.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-you-should-know?u=76281980&t=72)** If that sounds like something you're interested in then you've definitely come to the right place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (3), [[Design Patterns]] (1)
> **Env Vars:** uml (2)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Design Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### What are design patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=0)** - [Instructor] So the first question that you probably have, which we've already touched on briefly in the intro for this course, is what exactly are design patterns and why should we use them?
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=10)** Well, the answer to this question is that design patterns are solutions to some very common problems that we run into in object-oriented programming.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=18)** You may have noticed that when using an object-oriented approach to many programming problems, there are certain harmful patterns, or anti-patterns, as they're commonly called, that tend to pop up in our code.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=29)** These anti-patterns tend to occur fairly regularly and they can get out of hand very quickly and negatively influence the rest of our code base if we're not careful.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=38)** So design patterns then are the positive analogs to each of these anti-patterns.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=43)** Think about it like this.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=44)** In real life, when you're confronted with some sort of situation, let's say the person in front of you in line at the grocery store drops a $20 bill and neither they nor anyone else around you notices.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=55)** In situations like these, there are two main ways to respond.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=58)** One, you let the person know they dropped the money, or two, you wait for them to leave and pocket the money yourself.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=64)** Now I hope that in that situation your natural instinct would be to do the right thing and let the person in front of you know they dropped the $20 bill.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=72)** But regardless, in a similar way, with programming problems that we're confronted with, there are a right way and a wrong way to go about solving them, right?
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=81)** The wrong way here would be the anti-pattern that I referred to before, and the right way would be to use the correct design pattern that we'll learn about in this course.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=90)** Of course, unlike general philosophies for how to interact with other humans, most of us didn't grow up learning about programming design patterns and that's the gap that this course will aim to fill.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=101)** So then, design patterns are specific organizational strategies we can use in our programs to ensure that our code remains easy to modify and maintain for the foreseeable future.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=112)** In this course, we're going to learn about 12 so-called behavioral design patterns, that is, design patterns that deal mainly with how the classes we write in our code bases interact with each other.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/what-are-design-patterns?u=76281980&t=122)** These patterns will help us maximize the effectiveness of the classes we write and avoid polluting our code bases with code that isn't maintainable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (7), [[Programming]] (3), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Speakers:** - [instructor] (1)


### 2. Behavioral Patterns Group 1

[↑ Back to Table of Contents](#table-of-contents)

#### The Chain of Responsibility pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=0)** - OK, let's take a look at our very first pattern, which is The Chain of Responsibility Pattern.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=5)** The situation where this pattern can help us, will usually look something like this.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=10)** Let's say that you're building an application.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=11)** And somewhere in that application, you have several different pieces of criteria that are checked sequentially.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=16)** So as an example, your application might need to implement different levels of permissions.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=20)** So it might need to check up a user's authenticated and then check if they're a paid user, and then check if their plan includes the page they're trying to access.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=28)** And so on.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=29)** Or as another example, you might need to validate a string that the user has input.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=33)** If that string is a password, right, you'd need to check if the passwords long enough, if the password includes a number, letter, and symbol, then it would need to check if the password is one that the users used before.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=43)** So on, so forth, right.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=45)** Now, in both those cases, the naive approached implementation would be to use a series of nested if statements, to make sure that requests are handled correctly.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=53)** So you'd start off by checking if the length of a string is less than six, then you'd move on and check to see if the password contains a capital letter, to see if it contains a lowercase letter, see if it contains a symbol, so on and so forth.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=65)** Now this series of if statements works, but it's definitely not ideal.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=71)** You see the main problem here is reusability.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=73)** If you wanted to implement a similar scenario, but with a slightly different series of checks.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=78)** So for example, if you wanted to validate an email instead of a password, what you'd have to do, is you'd have to simply copy and paste any of the relevant checks into whatever new piece of code you're writing.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=90)** And copying and pasting, as we all know, is usually not the best sign.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=94)** So here's the basic idea, of The Chain of Responsibility Pattern.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=98)** Instead of having a big cluster of sequential if-then statements that you have to copy bits and pieces have to replicate functionality in different pieces of your application.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=107)** What if we express this situation as a chain of objects?
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=112)** Right? So each of these objects would only worry about one particular situation.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=116)** And if the object can handle that situation, for example, if the password isn't long enough, it'll simply handle it accordingly, right?
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=124)** Maybe by displaying an error message or returning an error message, something like that.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=129)** Otherwise, it will simply pass the situation on to the next item in the chain.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=133)** We'll see what this looks like, very shortly in code.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=137)** So first though, let's take a look at what this situation would look like in UML.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=142)** All right, well, it's generally going to look something like this.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=145)** First part is that we create a Handler Interface and Handler doesn't actually have to be the name of the Interface, but you know, we're just going to call it that here.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=154)** And, this Handler Interface is going to have two methods.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=157)** The first method is going to be for setting the next Handler that the current Handler will pass the situation on to if it can handle it.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=165)** And the second method, will be a method for actually handling it situation.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=170)** So once we have that interface, the next thing we're going to do, is we're going to create concrete classes that actually implement this interface.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=178)** From password examples I gave earlier, we might have a password too short Handler, a password characters Handler, a password already used Handler.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=187)** And so on. Each of which is going to check to see if it can handle the given situation.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=191)** And if not, it'll simply call the Handle method of whatever the next handler in line is.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=198)** And once we've created that handler interface and the implementations of it, the client code is where we'll actually set up the chain of these handlers, right?
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=206)** We'll create each of them.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=207)** And then we'll arrange them in a chain by calling Set Next on each of them.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=212)** And finally, when a situation comes along, we'll simply call the Handle method on the first Handler in the chain.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=219)** And if that handler doesn't have anything to say about the situation, it'll call Handle on the next Handler in the chain.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=224)** And so on, until one of the handlers either can handle the situation or until there are no more handlers in the chain.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-chain-of-responsibility-pattern?u=76281980&t=233)** So those are the basics of The Chain of Responsibility Pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (6), application (4), express (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** uml (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - ok (1)

#### Implementing the Chain of Responsibility pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=0)** - [Instructor] Now that we've learned the basics of the chain of responsibility pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=4)** Let's take a look at a concrete example of what this pattern might look like in code.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=8)** So I mentioned previously that the chain of responsibility pattern could be used to implement string validation.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=14)** And that's the example we're going to be looking at here.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=16)** More specifically, let's say that a user is trying to create an account for our application and we therefore have three strings we need to validate, right.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=24)** The first one is the user's name.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=26)** The second is their email address.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=28)** And the third is their password.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=30)** Each of these strings is going to have a different set of criteria, obviously that it's required to meet.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=35)** So for the email address, for example.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=37)** We're obviously going to need to make sure that what the user has entered is actually an email address.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=42)** And for the password we'll need to make sure that it's the right length, that the user hasn't entered it before, et cetera.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=49)** And these are in addition to any conditions that are shared between each of the strings.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=53)** In our case here the only thing we'll be checking to make sure that the strings aren't empty, right.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=58)** So in other words, we'll want to make sure that the user has actually entered a value.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=63)** So let's take a look at what this might look like in code.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=66)** And since I'm on a Mac, I'm going to be using X code here.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=68)** But if you're on Windows, feel free to use Visual Studio or whatever your preferred editor is.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=75)** And if you're on a Mac, the steps for setting up this project are going to be a little different.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=80)** So the first thing you're going to want to do is go to file new and click on workspace here.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=86)** We're going to create a new workspace basically for each of the examples we make.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=90)** I've just found that it's easier to keep everything organized and separate that way.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=94)** So, let's just call this one chain of responsibility and we'll click on save.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=104)** And that should create our new workspace for us.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=107)** Now if you want to add the exercise files that I've provided for this course to this workspace, the way you're going to do that is you're going to right click over in this pane here and go to add files to chain of responsibility.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=121)** And then you're going to find wherever you put the exercise files.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=123)** And that'll basically open it up here.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=126)** And then you'll just have to drag those into the actual project.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=130)** Okay.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=131)** So, we have the workspace I'll set up.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=133)** The next thing we have to do is actually create a project inside the workspace.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=137)** That's just the way that X code organizes things.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=140)** So, let's go again to file new and project.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=146)** And that's going to bring up this little window here.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=148)** We're going to go to Mac OS.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=150)** Click on command line tool, go to next.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=154)** And we're just going to give it the same name that we gave our workspace.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=158)** We're just going to call it chain of responsibility.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=161)** Okay.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=162)** And for the language we're going to want to select C++.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=167)** And for the organization identifier just put in whatever you want there.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=170)** It's not really that important.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=173)** All right.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=174)** So once we input those things we're going to click on next and it's going to ask us where we want to actually save this.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=181)** All right, so for me that's just going to be in here.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=184)** I'm going to create a new folder that'll call C++ behavioral.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=192)** Click on create.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=195)** And you're going to want to select this chain of responsibility workspace in this ad to drop down and that'll set it for both add to and group.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=205)** All right.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=206)** So once you've done that click on create.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=209)** And that should create your project for us.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=212)** And you'll see that you now have this main.CPP file which contains some basic starter code.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=218)** Okay, so the first thing we're going to do is define the actual handler interface, which we're going to call string validator.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=225)** So we'll say, class string validator.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=229)** And then we're going to define some public methods here.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=231)** We're going to define a virtual distractor just because of how we're going to be extending this class.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=236)** So we'll say virtual string validator like that.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=242)** We're going to define a virtual method called set next here.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=245)** That will allow us to set the next handler in the chain.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=248)** And that's going to return a string validator and I'll show you why that is a little later on.
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=253)** And we're going to call it set next.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=256)** And they'll say string validator and we're going to pass a pointer to the next validator in the chain.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=262)** And this is going to be just a pure virtual method right now.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=265)** And the last thing here is we're going to give it a method called validate.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=268)** This is going to be the method that we actually call that starts off the validation chain.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=274)** And for that we're going to say virtual string validate.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=279)** And this is going to take the string that we want to validate as an argument.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=284)** And the idea here is that this method is going to return some sort of error message or a message saying success depending on how the validation went.
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=294)** So now that we've got our string validator which is the main interface for all of our handlers.
>
> **[5:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=300)** The next thing we're going to do is define a base validator that contains all the logic that our handlers are going to have in common.
>
> **[5:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=307)** So we're going to call this base validator.
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=309)** And we'll say class base validator.
>
> **[5:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=314)** Is going to implement our string validator.
>
> **[5:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=317)** And we're going to give it a protected property and that property is going to be called next.
>
> **[5:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=323)** And that will basically point to the next validator in the chain.
>
> **[5:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=328)** And that will be a no pointer to begin with.
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=331)** And after that, it'll have a few public methods.
>
> **[5:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=333)** The first one is just going to be a virtual distractor.
>
> **[5:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=337)** And this one is just going to delete the next one in the chain.
>
> **[5:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=341)** That'll make it a lot easier to clean up our chain at the end of our program.
>
> **[5:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=346)** And next up we're going to define the set next method.
>
> **[5:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=349)** So we'll say string validator, set next.
>
> **[5:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=352)** And again, that's going to take a string validator pointer as an argument.
>
> **[5:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=357)** Which we'll call next validator.
>
> **[6:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=360)** It's going to be an override.
>
> **[6:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=362)** And what it'll do is this is going to set next equal to next validator.
>
> **[6:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=369)** And it's going to return the next validator in the chain.
>
> **[6:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=373)** Again, I'll show you why this is later on.
>
> **[6:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=376)** Okay, so that's our set next method.
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=377)** After that we're going to define a generic version of our validate method.
>
> **[6:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=382)** This is just going to contain the logic that all of our handlers are going to have in common for the validation.
>
> **[6:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=388)** Here's what it's going to look like.
>
> **[6:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=389)** We're going to say virtual string validate.
>
> **[6:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=396)** It's going to take a string as an argument called test string.
>
> **[6:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=400)** And what it's going to do, it's going to be an override too, by the way.
>
> **[6:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=406)** What it's going to do is it's going to check if there's a next validator in the chain.
>
> **[6:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=412)** And if there is what it's going to do is simply return this next validate called on the same string.
>
> **[7:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=420)** All right, so this will basically pass the responsibility to the next handler in the chain.
>
> **[7:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=425)** And as you'll see our sub-classes of this base validator are going to call this base validate method.
>
> **[7:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=433)** Okay.
>
> **[7:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=434)** And otherwise, if there isn't a next one, that means we've reached the end of the chain and we should return a message indicating the validation was successful.
>
> **[7:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-chain-of-responsibility-pattern?u=76281980&t=443)** So we're just going to say return success like that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (23), application (1), [[Windows]] (1), generic (1)
> **UI Navigation:** click on (6), go to (4)
> **CLI Commands:** make (6), find (1)
> **Exercise Files:** exercise files (2), starter code (1)
> **Tools:** visual studio (1), command line (1)
> **Definitions:** in other words (1), is a  (1)
> **Prerequisites:** required to (1), set up (1)
> **File Paths:** main.cpp (1)

#### Create Chain of Responsibility handlers
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=0)** - [Instructor] All right, so that's our base validator.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=2)** The next thing we're going to do is start implementing actual handlers, right, concrete handlers that we're going to use.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=8)** And the first one we're going to create, we're only going to manually create one and then what I'm going to do is actually have you copy and paste the rest of them since it takes quite a while to actually write these things out.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=19)** And the first one we're going to create is a not empty validator.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=22)** This is basically going to make sure that the string that the user has entered, right, in our scenario is not empty.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=30)** So we'll call it class NotEmptyValidator, it's going extend our base validator class that we just created.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=42)** And for the public methods here, we're going to create a constructor, not that we really needed to do that but just for the heck of it, and then after that, we're going to say string validate, and this is where we're going to write the actual validation logic.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=62)** Okay, so the sole responsibility of our NotEmptyValidator here is to check and see if a string is empty, and if not then it's going to simply pass the responsibility on to whatever the next handler in the chain is.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=75)** So what we're going to do just for a little bit of visibility, is we're just going to print out something to the console that says, "checking if empty," this will help us see how it's actually working behind the scenes when we run our code.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=89)** And then we're going to check if the string is empty.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=91)** So we're going to say, if testString.empty, then what we want to do is return an error string indicating what's wrong with our test string.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=101)** So we're going to say return, please enter a value, all right?
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=108)** And otherwise, right, if this if-statement doesn't execute, then that means that are not empty validator, doesn't need to worry about this situation anymore, it can simply pass responsibility down the chain.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=120)** And the way we're going to do that since we've implemented this base validator class is by saying return base validator, and we're going to call our base validators validate method on the testString, which again, we'll take care of passing that on to the next one in the chain for us.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=141)** Okay, so that's what our validators are all going to look like basically.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=145)** And again, I mentioned that typing these things out takes quite a long time.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=149)** There are about three more that I wanted to add.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=153)** So what I'm going to have you do is just copy and paste those from the exercise files, from the end state of the exercise files, you're going to copy length validator, alright, you're going to put that under NotEmptyValidator that's going to look like this, it basically just make sure that a string is longer than a certain length.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=173)** After that you're going to copy and paste the rejects validator, what that does is make sure that a string matches a certain regular expression, right?
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=182)** So it makes sure that it's an email or something.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=185)** So we're going to paste that under the length validator.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=189)** And when you do that, you're going to have to go up to the top and include rejects, okay, that will give us the functions that we need to use here.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=202)** There we go.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=204)** And after that, you're going to copy and paste both the history validator and to the function above it, which is called in array.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=214)** And what the history validator does is it allows us to specify what the previous entries for that string have been, right?
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=222)** So if we're checking for passwords that would allow us to check if a user has used that password before, and this little inner a helper function that we defined it just checks to see if a given value is in a vector of strings, right?
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=238)** Which we called an array here.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=240)** Maybe not the best name, but it works.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=244)** So those are our four validators, right?
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=246)** We have are not empty validator, our length validator, our rejects validator and our history validator.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=252)** So the way we're going to assemble them is going to be like this.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=255)** And again, I'm going to have you copy and paste these from the exercise files since it's quite a bit to type out and I'll explain it afterward.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=262)** So what you're going to do is copy and paste the contents of main inside of the exercise files.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=269)** There we go.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=271)** And what's going on here is we're creating a new base validator called email validator, and this is going to serve as sort of the starting validator for our chain.
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=280)** It's not really going to do anything, it's more just for kind of the naming semantics here.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=286)** So we're creating our email validator chain and what we're doing then is we're setting the next ones in the chain to check, first of all, if it's not empty, and second of all if it matches the email regular expression which you don't have to know by heart, is that thing right here, all right?
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=305)** So once we've created our chain which only uses two of the validators we saw earlier, we're going to check the emails by calling email validator.validate on several different strings, right?
>
> **[5:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=317)** So we're calling it an empty string for calling it on a string that is not actually an email address and finally, we're calling it on something that is an email address.
>
> **[5:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=328)** Okay so let's run this code and see what happens.
>
> **[5:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=335)** And there we go.
>
> **[5:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=336)** So we see what's happening is when the input is empty, we see that we get this string printed out, checking if empty, that is from our not empty validator and we see the value that it returns, which says please enter a value, okay?
>
> **[5:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=350)** So in other words, it only got to the not empty validator, in the chain and that returned a string, right?
>
> **[5:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=357)** So that said, okay, I'll handle that and return something so we didn't need to further in the chain.
>
> **[6:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=363)** With the second one here, what we did as we passed in a string that was not actually an email address, and so we see that it checks if empty, right, it's not empty.
>
> **[6:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=372)** So it passes that on to the next handler in the chain that says check rejects match.
>
> **[6:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=378)** And that one actually catches it this time and return a string that says the value entered does not match the proper format for an email address.
>
> **[6:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=387)** And last but not least, we pass in an actual email address, we see that it checks if it's empty, it checks if it matches the regular expression, and last but not least it returns success, since none of the other handlers could handle it, right?
>
> **[6:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=402)** So that's how it works.
>
> **[6:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=403)** And one last thing that I wanted to point out is the reason up here in our validator that we had set next returning a string validate or pointer is so that we could do this cool sort of chaining thing here when we're creating our chain of responsibility, right?
>
> **[6:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=419)** So we can say email validator set next, set next.
>
> **[7:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=422)** If we wanted to add more to the chain we could just continue saying set next, set next, et cetera.
>
> **[7:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=427)** Okay, so this was how we checked an email, and my challenge for you now, which you can just do on your own time is to incorporate the other two validators that we defined, right, the history validator and the length validator to create a password validator chain, just like our email validator chain that we create here.
>
> **[7:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/create-chain-of-responsibility-handlers?u=76281980&t=446)** So again, feel free to do that on your own time but this here is basically demonstrated how we can implement the chain of responsibility pattern in C++.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (10), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (1), means that (1), is called (1), is an  (1), in other words (1)
> **Exercise Files:** exercise files (4)
> **CLI Commands:** make (3)
> **Code Identifiers:** teststring (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### The Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=0)** - [Instructor] Okay, it's time for our second design pattern which is called the command pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=4)** The command pattern can help us greatly reduce coupling between different classes in our application as well as make certain pieces of functionality much more reusable as we'll see.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=15)** And it does this by expressing the different events that can occur in our application as their own classes.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=21)** And we'll look at the details of this shortly.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=23)** So in order to get a better idea of how the command pattern works, let's take a look at an example where this pattern might be helpful.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=31)** So in most applications that we write any changes that we want to make usually take place by one piece of code directly calling another piece of code.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=41)** So as an example let's say that we're building a drawing application of some sort, and that this application has a clear canvas button that deletes all the lines, colors, et cetera, from the screen.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=52)** Now this clear canvas button would probably perform its action by having a reference to the editor and making a direct call to the editor's editor.clearAll method or whatever we choose to call it.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=63)** And that might call something like strokes equals empty array, something like that right?
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=69)** However we choose to actually store the actual shapes in our editor.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=74)** And this way of organizing things works but it's not really the best way of doing things.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=79)** The main problem with this kind of setup is that it couples pieces of our code together pretty uncomfortably, right?
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=86)** It forms tight coupling between different pieces of code since our buttons know about our canvas.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=92)** So what is the command pattern then and how can it help us with the problem that I just outlined?
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=97)** Well the basic idea of the pattern is this.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=100)** Instead of the changes in our programs taking place as concrete method calls, we express each change as its own command object with an execute method and member variables that contain all the parameters for the command.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=113)** So in the case of our drawing application that we just looked at, we might have a draw a line command, a change color command a delete object command and so on right?
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=122)** So you might be wondering what all that is going to look like in UML.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=127)** Generally it'll look something like this.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=129)** We're going to create a command interface with an execute method as I said that all its subclasses have to implement for themselves.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=137)** And once we've done that for each event that needs to occur in our application, right, for example, a user clicking on the clear all button in the painting application we mentioned earlier.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=147)** We create a class that implements this command interface.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=151)** And notice here that the commands subclasses can also contain any parameters that they need as member variables.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=157)** So for example, a draw line command would probably contain the coordinates that define the starting and ending point of the line.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=164)** So these classes will also generally contain references to any other objects that they need to execute.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=171)** And I've called this target here in the UML.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=174)** In the case of our drawing application this would probably be the drawing editor canvas, whatever you want to call it.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=180)** So once we gave our command interface and the appropriate implementations, these implementations are then used by other parts of our application instead of directly calling methods on some other class.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=193)** And what this does is it reduces coupling between our classes and it really increases the reusability of the different pieces of functionality in our application.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=202)** So for example where our clear canvas button would normally have directly called canvas.clearAll, what we would do is we would instead give our button a command member variable that would contain the command that should be executed when the button is clicked.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=218)** And as I mentioned before the command is what's going to contain the reference to the canvas and what ultimately is going to call canvas.clearAll or whatever our method is.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=229)** We'll see what this all looks like very shortly when we go through a coding example.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-command-pattern?u=76281980&t=232)** And that's the basic structure of the pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (10), [[Forms]] (1), express (1)
> **Code Identifiers:** clearall (3)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Env Vars:** uml (2)
> **Cross-References:** we mentioned (1)
> **Definitions:** is called (1)
> **Prerequisites:** setup (1)

#### Implementing the Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=0)** - [Instructor] Okay. So now that we've learned the basics of the command pattern, let's take a look at a concrete example of what this pattern might look like in code.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=7)** The example we're going to be looking at here is the idea that I mentioned previously of using the command pattern to make buttons in an interface reusable.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=15)** Let's see what that looks like.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=17)** So, first of all, if you take a look at the starting state of the exercise files which is what we have here, you're going to see that we have a piece of code without the command pattern.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=26)** More specifically, what we have is, we have this button class here and in order to create different buttons that do different things, we've created subclasses of that button class.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=36)** Each of which does its own very specific thing and contains all of its own logic.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=42)** And the problem with this is that if we wanted to duplicate the functionality of one of these buttons, say the triangle button, we'd have to simply copy and paste all of this code into a new subclass.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=54)** And additionally, the other problem is that each of these buttons contains its own reference to the canvas, which means that we're pretty much limited to using these buttons in this exact situation, right?
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=67)** In an application with a canvas.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=70)** So let's see how we can prevent these things using the command pattern.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=73)** The first thing we're going to do is create a basic command interface.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=77)** So we'll do that up at the top here.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=80)** We're going to say, "class," "Command," "public."
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=85)** And then we're going to say, "virtual."
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=88)** And we're just going to create a virtual destructor here for the way that we're going to be extending this class.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=93)** And then we're going to define a virtual method called execute, which will actually perform whatever logic we want the command to perform.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=103)** All right, you'll see what this looks like shortly.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=105)** So now that we've created our command interface here, the next thing we're going to do is create a different action for each of the actions that our buttons are currently performing, right?
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=115)** Say, adding a shape or clearing the canvas.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=119)** And here's what those are going to look like.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=120)** We're going to say, "class" and we're going to define an add shape command class And this is going to implement the command interface we just defined.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=132)** And what this command is going to do is, it's going to have a string with the name of the shape we want to add.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=139)** And it's also going to contain a reference to the canvas.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=142)** So you see that it's going to be our commands instead of our buttons themselves that will contain references to the canvas or whatever other classes are in the environment that these buttons are in.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=155)** So now that we've defined those member variables, the next thing we're going to do is define some public methods.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=161)** We're going to define the constructor, add shape command.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=166)** It's going to take a string reference as an argument and it's going to take a canvas pointer as its other argument.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=175)** Okay. And then we're just going to say, "shapeName," "shapeName," and "canvas," "canvas."
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=184)** Okay. So next up, we're going to implement the execute method that we defined on our interface and what that's going to look like for our add shape command is we're just going to call, "canvas addShape" with the shape name that we passed to the constructor of our add shape command class.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=204)** Okay. So that's the add shape command to the only other command that we're going to define here is going to be the clear canvas command.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=211)** All right. So we're going to say, "class ClearCommand," and we'll say, "public Command."
>
> **[3:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=220)** it's going to have a pointer to the canvas that it's going to make the changes to.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=226)** It's going to have a constructor which is just going to take the canvas pointer and set it.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=233)** So, "canvas," "canvas."
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=236)** And then for the execute method, what we're going to do is simply call, "canvas," "clearAll."
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-command-pattern?u=76281980&t=245)** Okay. So it's our clear command and add shape command that are actually performing these actions, again, instead of the buttons that we've defined.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), application (1)
> **Code Identifiers:** shapename (2), addshape (1), clearall (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Increasing code reuse with commands
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=0)** - So now that we've got the two commands for our application, what we're going to do is delete our button subclasses and convert our button class.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=8)** Right, our button superclass here, over to use the command interface.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=13)** All right, so let's delete our add triangle button, add square button, all of these other button subclasses.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=23)** Okay, and we're going to change our button superclass here a little bit.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=28)** First of all, we're going to add a command pointer as a member variable to our button.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=33)** So we're going to say command command.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=37)** This is going to be the command that the button will actually perform.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=40)** And then we're going to create a constructor that will actually set this member variable.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=44)** We're going to say button, command, command, and set that member variable, like this command command.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=55)** Okay, and then we can remove this virtual destructor and we can also remove the virtual from this click method and implement it, right, since we'll only need one button class from now on.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=68)** Now, all this click method is going to do is simply call the execute method of our command, and it'll basically let the command take everything from there, right, it'll let it execute all of its logic.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=81)** And that should be all the modifications we need to make for now. So what we're going to do is we're going to copy and paste the test code over from the end state of the example code, right? It's just a bunch of stuff that we don't really want to have to type out right now.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=93)** And that's going to look like what we see here.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=97)** Okay, so we're going to copy and paste over the contents of the main function, as well as the vector-to-string helper function that you'll find right above it.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=107)** That basically just makes it easier to see the results.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=110)** So once we've done that, if you look at what's going on in the code here, we're basically creating a new canvas, and then we're creating our add triangle, add square button, and clear buttons.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=122)** And the way we're doing that is those are all instances of the single button class in our application now, and we're simply passing a different command to each of those buttons we're creating, right?
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=133)** So our add triangle button is simply an instance of the button class with an add shape command passed to it in the constructor, right?
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=142)** And likewise for our add square button and clear button.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=146)** So if we run our application now, we should see that it works and let's see what the output looks like.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=153)** So we're going to see that as we go through and simulate clicks on our buttons, those actually add shapes to the canvas just like we'd expect. And the beauty of this again, is that our buttons no longer have to know about the canvas, right? If you look up at where we define the buttons you'll see that it's only the commands themselves that have any knowledge of the canvas.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=174)** And what this means is that we could use our buttons in a wide variety of applications, not just ones with that same canvas class.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=182)** And we could also reuse the functionality of different commands if we needed to, right?
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=187)** So if we needed to have say a button and also some kind of drop down menu item that performed the same command, we could simply create a single command and assign that to both of those interface elements.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=203)** So that's what the command pattern looks like in C++.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/increasing-code-reuse-with-commands?u=76281980&t=205)** Hopefully you see the benefits there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3)
> **CLI Commands:** make (1), find (1)
> **Analogies:** just like (1)
> **Speakers:** - so (1)

#### The Mediator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=0)** - [Instructor] Okay, let's take a look at our next design pattern, which is called the mediator pattern.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=5)** The mediator pattern is generally used when we have a number of classes that are all interdependent on one another in complex ways.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=13)** When this happens, it can very often lead to complex and tightly coupled code, and using the mediator pattern can help us simplify and keep better track of our dependencies, as well as reduce this tight coupling.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=26)** So let's take a look at an example of this.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=28)** Let's say that you're creating an onboarding flow for new users of an application.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=32)** Now, as most good onboarding flows do, yours needs to take into account the user's previous answers and adjust what they see accordingly.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=41)** So for example, if the user enters that they're currently employed, maybe this is a piece of tax software or something, what you'll need to do then is show them the appropriate interface elements for entering their employment data.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=54)** And if they entered that they're married, let's say, you'll then need to display the correct elements so that they can enter their spouse's information as well.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=61)** Now, the difficulty here comes about because you generally end up relying on the elements themselves to handle all these dependencies and corresponding logic.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=70)** And what this means is that the marital status text box, in this case, would have to directly know about the spouse info form and likewise with the employment information and any other piece of the onboarding flow that relies on some other part of the interface for its behavior.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=85)** Now, what this leads to is almost always a very complex web of dependencies that all but destroys the reusability of any individual element.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=94)** Since ultimately all of the elements become tightly coupled to all the other elements in the interface.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=100)** In other words, none of the classes that you use to define your interface will be directly reusable without bringing all the other classes along with it.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=110)** And note that even though I'm using just a user interface as an example here, this is also true for non-visual things.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=116)** Basically any other group of classes where there's a tight web of dependencies in between them.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=122)** So that's the problem.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=124)** Here's how the mediator pattern goes about solving it.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=127)** What the mediator pattern does is, instead of having all of the classes depend randomly on other classes, as in the onboarding example we just talked about, what we do is we define all of the relationships between these different classes in a single, what we call mediator class.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=144)** And the idea then is that whenever some event occurs in one of the classes or elements, instead of directly calling one of the other classes and having a reference to that class, it's simply notifies the mediator class which takes care of making any necessary changes.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=162)** That might sound a little bit confusing.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=164)** We'll see exactly what this looks like in the UML diagram and in the code.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=168)** So let's take a look at the UML diagram first.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=172)** The first thing we generally do is we create a mediator interface, which contains a single method.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=178)** And this is usually called something like notify or mediate.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=182)** And this is the method that the different classes that the mediator is mediating between are going to call in order to let the mediator know that some change has been made or some event has occurred.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=193)** And what we do once we've created this interface is we usually create a concrete version of the mediator.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=200)** This will generally take the form of some sort of container or user interface, something like that.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=206)** And this concrete mediator will usually contain all of the classes that it mediates between as member variables.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=214)** So if we have a user data form and employment data form and a spouse data form, the container, the mediator for those elements is going to contain an instance of each one of those as a member variable.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=226)** And again, whatever one of these mediated classes needs to let the media to know something's up, it's just going to call the mediator's mediate method usually passing some sort of arguments.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=235)** We'll see what this looks like very shortly.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=238)** And inside that mediate method, the mediator will then use this information to make whatever changes are necessary and manage the relationships between all of the classes that it's mediating.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-mediator-pattern?u=76281980&t=250)** And those are the basics of the mediator pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), web (2), next (1), application (1)
> **Definitions:** is called (1), is a  (1), in other words (1)
> **Env Vars:** uml (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Implementing the Mediator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=0)** - [Announcer] Now that we've learned about the basics of the Mediator pattern, let's take a look at a concrete example of what this pattern might look like in code.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=8)** The example we're going to be looking at here is the idea that I mentioned previously, using the Mediator pattern to reduce the dependencies between different pieces of something like a user interface.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=19)** All right, so let's take a look at that.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=21)** First of all, the starter code for this video, which you can get in the exercise files, if you take a look at that, you'll see that we have this interface element parent class that really just provides some basic functionality for keeping track of whether or not a given element is hidden, okay?
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=38)** And other than that, we have several subclasses of this interface element class, we've got a button element, we've got a text box, we've got a check box, we've got a submit button, we've got a name text box.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=48)** Now the main problem here, as I mentioned earlier, is that these bottom level interface elements, like this NameTextBox for example, all know about each other which means that they're tightly coupled and therefore, not at all reusable.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=61)** So in other words, most of these classes, if we wanted to reuse them in a different context with a different set of other classes, what we have to do is simply copy and paste the logic from inside them and create new subclasses with different dependencies, right?
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=77)** Like if we wanted to reuse this NameTextBox in a situation where there is no submitButton, we'd have to actually create a separate subclass for that situation.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=86)** So let's take a look at how to improve this situation using the Mediator pattern that we talked about.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=91)** The first thing we're going to do is up here at the top, we're going to define a Mediator interface, that's just going to look like this, we're going to say class Mediator, public, we're going to have a virtual void method called mediate and it's going to take a string reference as an argument, right, and we'll just call this event, you'll see why in a minute, and this is just going to be a peer virtual method.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=119)** So that's the Mediator interface, now concrete implementations of this Mediator interface will more often than not, take the form of some sort of container or manager, right?
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=130)** In our case, our concrete implementation here is going to be the user interface that contains all of these different interface elements.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=139)** So why don't we create that down at the bottom here.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=143)** We're going to call this class UserInterface and it's going to implement the Mediator interface.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=151)** And just as a side note here, we are calling this UserInterface, but that is not the interface as in like an object oriented interface, okay?
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=159)** Just wanted to make sure that was clear.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=163)** So this user interface is going to have private member variables for each of the different elements that are going to be in the user interface.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=169)** So we're going to have a TextBox, right, we're going to call that nameTextBox.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=177)** We're going to have a CheckBox, called isMarried checkbox, and note here that this Mediator set up is going to allow us to remove the specific subclasses, right, like nameTextBox and isMarried checkbox, those kind of things, you'll see exactly how that works in just a minute as well.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=195)** We're going to have the spouses name text box, so we're going to say TextBox, spousesNameTextbox and we're going to have a ButtonElement called submitButton.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=211)** Okay, so the next thing we're going to do is define some of the methods for this user interface class.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=216)** First one's going to be the constructor, called the UserInterface.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=222)** We're just going to initialize each of these here.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=225)** We're going to say nameTextBox equals new TextBox and we're going to pass in the name and whether or not this is visible here.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=234)** So we're going to say TextBox, we're going to call this Name textbox and we're going to pass true for is visible.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=244)** Next up we have the isMarried checkbox.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=246)** We're going to say equals new CheckBox.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=249)** This is going to be the isMarried checkbox, and we're going to pass true for visible as well.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=258)** Then we're going to have the spouses name TextBox and that's going to be a new TextBox here, which we'll call Spouses name textbox and that is not going to be visible at the beginning, right, because we're not going to want to show that remember until this isMarried checkbox is checked, right, and then we're also going to have the submit button, which is going to be a new ButtonElement called Submit button and the initial visibility for this one is going to be false, okay?
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=296)** Oops, I misspelled user interface there.
>
> **[5:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=301)** And buttonElement here is still just an abstract class, we'll come back to that in a minute and fix that.
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=310)** The other thing we have to do in our user interface is in the destructor, we have to actually delete these elements, so we're going to say userInterface, delete nameTextBox, delete isMarriedCheckBox, delete spousesNameTextBox and delete submitButton.
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=331)** And then we come to the really interesting part of the Mediator pattern, which is the mediate method.
>
> **[5:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=337)** This is the method that contains the actual logic on how the different pieces of our interface are going to relate to each other, okay?
>
> **[5:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=345)** So basically, what we're going to do is we're going to move all the logic that was contained in the specific subclasses into this mediate method.
>
> **[5:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=353)** So we're going to say void mediate and it's going to take a string reference as an argument.
>
> **[6:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=361)** It's going to be marked as override.
>
> **[6:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=364)** And inside here, why don't we start off by printing a message that says something like Mediating event, just to see what event it is that our Mediator is currently dealing with, all right, that'll be more for our own visibility then for anything else.
>
> **[6:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=384)** And after that, here's where we get to the logic, okay?
>
> **[6:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=389)** Basically, what we're going to do is we're going to have each of our elements call our Mediator whenever something happens with a string specifying what exactly it was that occurred, all right?
>
> **[6:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=402)** Now, we're just using a string in this case, note that you could incorporate the command pattern into this as well if you wanted to, instead of just using a string.
>
> **[6:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=411)** So basically what's going to happen is, for example, when the isMarried checkbox is clicked, our Mediator is going to get called with the event string that's something like isMarriedCheckBox is checked or something like that.
>
> **[7:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=424)** We'll implement that in the checkbox and text box and button element classes in just a minute here, but first let's just define the logic.
>
> **[7:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=435)** So we're basically just going to be checking here what the event string is.
>
> **[7:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=441)** Right, so we're going to say, if the event is that the name text box is empty, which is one of the cases that the name text box itself is currently handling, then what we're going to do is we're going to hide the submit button.
>
> **[7:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=457)** So we're going to say, submitButton, setVisibility to false, all right, so that's one situation that our Mediator is going to handle.
>
> **[7:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=467)** Then we're going to say else if event equals and we'll have another events that's name text box is not empty.
>
> **[7:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=477)** In that case, we would want to set the visibility of the submit button to true.
>
> **[8:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=484)** And so on, so forth for all of the other pieces of logic in our application, which I'm actually just going to copy and paste for the sake of time here from the finished state of the code.
>
> **[8:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=497)** So let's just, there we go.
>
> **[8:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=500)** All right, so we have the is married checkbox is checked, we're setting the visibility to true, if it's unchecked, we're setting it to false, and so on, so forth.
>
> **[8:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=508)** And if the submit button's clicked, we're going to print submitted.
>
> **[8:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=512)** We're probably going to want to have one last thing here just in case we get an event that we don't know how to handle, where we'll say something like, Unrecognized event, okay?
>
> **[8:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-mediator-pattern?u=76281980&t=526)** And we're also going to copy and paste from the finished code just because it's a lot of repetitive typing, methods for getting the different elements so that we can do things like click on them, that kind of thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), application (1)
> **Code Identifiers:** ismarried (6), submitbutton (4), nametextbox (4), spousesnametextbox (2), ismarriedcheckbox (2)
> **UI Navigation:** checkbox (10), click on (1)
> **Exercise Files:** starter code (1), exercise files (1)
> **Definitions:** means that (1), in other words (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)

#### Using the Mediator from inside other classes
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=0)** - [Instructor] Okay, so now that we've moved the logic for our different interfaced elements into the mediator, what we can do is we can delete all these specific subclasses, right?
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=10)** So we can delete spouses name text box, name text box, submit button, et cetera, so that we're only left with these button text box and checkbox elements.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=21)** And the next thing we're going to do is we're going to have all of our interface elements have a reference to the mediator that they're currently contained inside of.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=31)** All right, so that's going to look like this.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=32)** We're going to add it to the interface element superclass here.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=36)** So we're going to say, mediator, mediator.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=40)** We're going to add that to the constructor, mediator, mediator, mediator, mediator.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=52)** And the mediator is protected so the subclasses will have access to it.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=56)** So now we just need to add the mediator to all of the constructors for these other classes as well.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=64)** I'm just going to copy and paste it to make it easier.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=74)** Mediator, add the mediator here.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=81)** And we're going to add the mediator to where we call the interface element constructor as well.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=93)** And there we go.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=94)** And now that we've added the mediator to all of these elements, we need to actually have the mediator pass a reference to itself, to the constructors here.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=101)** So we just need to add this as the final argument to all of these, these, these, these, and these.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=113)** And then we need to make all of these elements actually call the mediator with a given event string when something happens.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=123)** So for our button element, for example, what that's going to look like is we're going to implement this click method here.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=130)** And we're just going to say, when it's clicked we want mediator, mediate and call that with the name of the element plus the string clicked.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=142)** So if our name is submit button, for example, it's going to call our mediator with the event string submit button clicked.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=150)** Okay, we need to do the same thing for our text box.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=153)** Our text box, the only events that that's going to care about is whether or not it's empty.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=157)** So what we're going to do is inside this change text method, we're going to check to see if the new value is empty.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=167)** We're going to say ifnewvalue.empty
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=176)** we're going to call the mediator's mediate method with the name plus empty.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=182)** So, here's married checkbox .
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=184)** Empty for example, otherwise, if it's not empty we're going to call the mediate method with an event string saying name plus not empty.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=195)** And note that this string thing is just one way of doing it.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=198)** It's probably not the best way of doing it, you might want to have an E-number or something.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=202)** If you were going to really do this in a bigger program to avoid typos.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=206)** But for our case here, it's going to work just fine.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=209)** Okay, and last but not least we're going to have our checkbox, for which we're basically going to do the same thing as up here.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=218)** We're just going to copy that if statement.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=223)** And paste it here, and we're going to say, if is checked.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=229)** We're going to change this to is checked.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=233)** Otherwise we're going to change this to is unchecked.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=238)** Okay, and that should be all we need to do.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=239)** The last thing that we're going to do here is, let's write the client code for using this mediator.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=247)** All we're going to have to do for this one, is we're going to say, user interface, UI equals new user interface.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=258)** And we'll delete that down here at the end.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=260)** And I accidentally deleted the return zero thing.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=264)** And then what we're going to do is we're going to print out a description of all the elements.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=268)** Remember that this interface element thing has a get description method that we can call that simply tells us whether or not any of the elements is visible.
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=275)** That'll just show us the results of the actions we're going to take here.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=281)** So we're just going to say interface element create an array of interface elements here.
>
> **[4:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=287)** And we're going to use the methods that we created earlier to get references to the get name text box the get is married checkbox, get spouse's name text box and the get submit button.
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=305)** Okay.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=308)** And then we're just going to print out all of these, we're going to say for{auto element in elements} we're going to say, see out element, get description with a new line.
>
> **[5:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=323)** Okay.
>
> **[5:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=324)** So that'll print out the initial state of all our elements.
>
> **[5:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=327)** If we run this now, we'll see that it starts off our name text boxes visible, are is married check boxes visible.
>
> **[5:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=334)** And our spouse's name text box and submit button are not visible because of the state of these other two elements.
>
> **[5:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=341)** So the next thing we're going to do is we're going to check that is married checkbox.
>
> **[5:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=347)** So we're going to say UI get is married checkbox, set is checked to true.
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=356)** And then we're going to print out all our elements again.
>
> **[6:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=362)** So we might want to add another new line here just to keep them separate.
>
> **[6:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=365)** So if we run this again now, we'll see that after checking the is married checkbox our spouse's name text box is now visible.
>
> **[6:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=375)** And if we were to change the text in the name text box, which I'll just leave as something for you to do, and print out all our stuff again, we would see that the submit button would become visible as well.
>
> **[6:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=384)** So again, the point of all of this is that the mediator pattern allows us to put all of the dependencies, put all of the logic of how different pieces of something like an interface work together into a single class so that the elements themselves, the classes themselves don't actually have to know about the other ones.
>
> **[6:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-the-mediator-from-inside-other-classes?u=76281980&t=406)** So that really goes a long way toward decoupling our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2)
> **UI Navigation:** checkbox (7)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### The Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=0)** - [Instructor] Okay, onto our next design pattern.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=2)** The pattern we're going to be looking at here is called the observer pattern.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=6)** Now you may have already heard of or even used this pattern before.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=10)** It's used to help control the flow of events in our program in such a way that only the parts of our code that care about certain events are notified of their occurrence.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=20)** So let's look at a situation where the observer pattern could be useful to us.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=23)** Let's say that we're building a chat application or some other similar program, now obviously, when one user sends a message, only a very small subset of the users of our application should actually receive that message.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=36)** Now the problem is that without this pattern, right, without the observer pattern, the only options for us to implement this sort of behavior would be: A, for our user objects to keep checking back periodically to see if anything has changed, or B: For the event to notify all of the objects in our program and let them decide whether or not they care about it.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=58)** Now obviously, neither of these is ideal.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=60)** So here's the basic idea of the observer pattern.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=63)** In the observer pattern, we represent our program as a series of different publishers and subscribers, and the way it works is that a subscriber can then subscribe to any publisher, and while the subscriber is subscribed to that publisher, it'll be notified of every event that is published by that publisher, right?
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=83)** So in the case of our group chat application, that would mean that users could subscribe to or unsubscribe from the messages of a given person or group by joining or leaving that group, and while they're a member of that group, they'll see all the messages sent by other group members.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=100)** So that might sound a little confusing.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=101)** It's actually much simpler than it first appears.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=105)** So let's take a look at what the UML looks like.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=108)** So the first thing we're going to have is a subscriber interface with some sort of method, it's usually called notify, and this method will generally take some sort of information as an argument.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=119)** In the case of our group messaging app, for example, that might just be a message object containing the text, time and center information for the new message that was just posted in the group, and what we then do is we extend this interface for every class that needs to listen to events from some publisher of the application.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-observer-pattern?u=76281980&t=138)** Right, so we might have a chat group user and maybe a chat group admin, both of which would receive notifications from that group when they're subscribed to it, and the last thing we do is we create different publisher objects, and we generally won't need to create an interface here, although, there are cases where that might be helpful, and the thing publishers have in common is that they all have a subscribe and unsubscribe method that subscriber objects can call to start or stop listening to events that the publisher publishes, and we'll see what this looks like in more detail in the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (4), next (1)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** uml (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Creating publishers
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=0)** - [Instructor] Okay, now that we've learned the basics of the observer pattern, we're going to take a look at an example of what this pattern is going to look like in code.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=7)** And for the example we're going to be looking at here, we're going to be creating users and chat groups and allowing users to subscribe and unsubscribe from different chat groups using the observer pattern.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=20)** So this should all be pretty straightforward, here's what it's going to look like.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=23)** We're going to start off by defining our subscriber and publisher interfaces.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=29)** And those are going to look like this.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=31)** We're going to start off with our publisher, we're going to say class publisher.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=37)** And our publisher interface is going to contain the two main methods that we talked about previously, which are subscribe and unsubscribe which allows subscribers to control what messages they receive from what publishers.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=51)** So the first one is going to be a pure virtual subscribe method.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=56)** So we're going to say virtual void subscribe, and it's going to take a pointer to a subscriber.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=62)** Now we haven't defined the subscriber interface yet, but we will do that shortly.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=67)** And, this method of course, is going to add the subscriber to the publishers list of subscribers.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=76)** And we're also going to have an unsubscribed methods, so we can just copy paste that, like that, and that will unsubscribe this subscriber from his publisher.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=87)** And we're going to add one last method to this, and that method is going to be called publish, this is just what we're going to be using in our client code to actually tell our publisher to publish some sort of message.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=101)** So we're going to say virtual avoid publish, and we're going to pass a string reference, that is going to be the message we want to send to all of the subscribers for this publisher.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=115)** All right, so that's our publisher interface, the next thing we're going to define is the subscriber interface.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=120)** So let's say class subscriber, and this subscriber interface is going to have two main methods, the first one is going to be a notify method that the publisher can call to tell it that there's been some kind of update, right?
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=136)** Or some new message.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=137)** And the second one is going to be just a basic method for getting the name of the subscriber.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=143)** I'll show you why we need to do that shortly.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=146)** So let's define our virtual void notify method.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=152)** This method is going to take the publishers name as an argument, and it's also going to take the message as an argument that the publisher is publishing, okay?
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=167)** And that's going to be a pure virtual method.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=170)** And the second one here, it's going to return a string and it's going to be called getName.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=178)** Okay, so now that we have our subscriber and publisher interfaces, we now just need to define our chat group class and a chat user class that can subscribe to it.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=189)** Here's what those two are going to look like.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=192)** We'll start off with our chat group class.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=194)** We're going to say class chat group, and that's going to implement our publisher interface.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=204)** And this is going to have two member variables, one is going to be the name of the group, right?
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=210)** So we'll say groupName, and the other one is going to be a vector containing pointers to all of the subscribers that are currently subscribed to this chat group, all right?
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=222)** So it's going to be a vector of subscribers.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=227)** We'll call that subscribers.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=231)** And one thing to note here is that if we were going to make several different kinds of groups in our program, we'd probably just want to have one sort of base group class that contained all of the logic for dealing with subscribers and publishing things, but since we're only creating one chat group class here, we're not going to bother with that extra layer of class hierarchy.
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=253)** All right, so the public methods for this chat group now are going to be the constructor to which we're just going to pass the name, and that's just going to set the groupName to name.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=267)** Oops, and it looks like we also have to include vector up at the top here.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=274)** And then we're going to implement the three methods that we define in our publisher interface up here, I'm just going to copy and paste those.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=282)** The first ones subscribe is going to look like this, what we're going to do is we're just going to say this subscribers.push_back, and we're just going to add that subscriber pointer to our subscribers vector of our chat group, all right?
>
> **[5:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=300)** This is how our chat group is keeping track of all of its subscribers.
>
> **[5:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=304)** So that's the subscribed method, pretty straightforward.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=308)** The unsubscribed method is going to be a little trickier, what it's going to look like is this.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=313)** We're going to use the vectors erase methods, so we're going to save subscribers.erase, and we're basically just going to tell it standard remove_if, and we're going to tell it to remove it if the name of the subscriber that was passed as an argument is equal to the name of the subscriber that we're currently looking at in this vector.
>
> **[5:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=336)** Now you may notice that that would remove two subscribers if they both had the same name, right?
>
> **[5:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=340)** If their name was both Bob, for example, and that's just something that we're going to have to deal with for now.
>
> **[5:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=345)** If we were going to do this normally, we'd probably want to have our subscribers each have a unique ID of some sort and then maybe change this method to get unique ID, something like that.
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=356)** But anyway, we're just going to use the name for now, so we're going to say standard remove_if, and we're going to say subscribers.begin, subscribers.end, and we're going to use the square brackets here and say subscriber, subscriber s and we're going to say return subscriber getName is equal to subscriber getName.
>
> **[6:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=391)** Then we just need to add one more argument here, which is subscribers.end.
>
> **[6:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=397)** Okay.
>
> **[6:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=398)** There we go.
>
> **[6:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=400)** All right, and once again, all we're doing here is we're just removing all of these subscribers from our subscribers vector here, whose name matches the subscriber that was passed in through the argument.
>
> **[6:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=412)** Oops, and it looks like I put the parentheses in the wrong place.
>
> **[6:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=415)** There we go.
>
> **[6:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=417)** All right, so that is the unsubscribed method, the last method of our chat group that we're going to implement here is the publish method.
>
> **[7:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=424)** Oh, and one more thing is that we need to remove virtual for all of these and add override, forgot about that when I copied and pasted it.
>
> **[7:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=433)** Override, override, override.
>
> **[7:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=439)** And for publish, all we're going to do is loop through all of our subscribers and call subscriber notify, okay?
>
> **[7:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-publishers?u=76281980&t=447)** So we're going to say for subscriber in subscribers, what we're going to do is simply say subscriber, notify, and pass the groupName and the message to that subscriber.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Code Identifiers:** getname (3), groupname (3), remove_if (2), push_back (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Creating subscribers
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=0)** - [Instructor] So that is our ChatGroup class.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=2)** The last class that we have to define here before we can write our Client Code is the ChatUser class.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=7)** This is going to be pretty straight forward.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=8)** We're just going to say class ChatUser which implements the subscriber interface.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=17)** We're going to give it a member variable called username, and then we're going to define its public methods.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=23)** We're going to give it a constructor that allows us to define this username.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=29)** So that's going to look like this.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=33)** Username, username.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=39)** And after that, we're going to implement the notify and to getName methods.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=45)** Okay. So we're going to say, first, void notify, and that's going to take the publisher name and the message that's being published.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=54)** So that here's what that'll look like here.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=58)** PublisherName and string message.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=65)** And what that's going to do, for now we'll just have our chat users simply print out the publisherName and the message to show that everything's working.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=74)** So we're going to say, see out userName, and we'll say received a new message from publisherName.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=89)** And then we'll print the message as well as a new line.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=95)** And that's all we're going to do for notify.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=97)** Obviously in a more complex application, you'd be doing something a little bit more involved here, but, you know, just to demonstrate this pattern, that's where we're going to stop.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=106)** And now we just need to define the getName method that we defined in our interface.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=112)** Oops! And let's mark this as override as well.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=115)** There we go. All Right.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=116)** And we're going to say, string getName, and we're just going to simply return the userName.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=129)** Like that.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=130)** Okay. So now that we have our ChatGroup and ChatUser classes defined, let's write some client code that demonstrates how we would actually use these things.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=139)** So we start off by creating our users.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=142)** We're going to say ChatUser, user1, and we'll say new ChatUser.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=149)** Give our user a name.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=150)** We'll call this user Jim.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=152)** And we'll do the same for a few more ChatUsers.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=157)** All right. So we'll have user2, user3.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=160)** We'll call user2, Barb, and we'll call user3 three, Hannah, or something like that.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=168)** You can pick whatever names you want.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=170)** That's not important.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=171)** So now that we have our three users, we're going to create some chat groups.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=175)** We'll just create two basic chat groups.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=177)** We'll call them group1, it was a new ChatGroup.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=184)** Let's say this ChatGroup is the gardening group.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=187)** Something like that. Okay.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=189)** Gardening group and we'll have another group that's something like, we'll call it group2, and we'll make this group the dog-lovers group.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=200)** Why not?
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=202)** Okay. And now what we need to do, is just have some of these users subscribe to some of these ChatGroups. Okay.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=212)** So what we're going to do, is we just need to say group1 subscribe and pass user1,, and we'll pass user2 to it as well.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=224)** Let's say group1 subscribed user2, and we'll do the same thing for group2.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=231)** We'll say group2 subscribe and we'll have user2 and user3 subscribed to it.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=241)** And then we just need to delete all of these things down at the bottom here.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=246)** Delete all our users.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=250)** User2 and three, and we'll delete our groups as well.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=261)** So if we run our code now... So it looks like I missed something I just need to add equals zero here.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=270)** I forgot to add that.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=272)** Hopefully you caught that.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=274)** Oh, and one last thing I almost forgot, we need to actually publish some messages to our groups.
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=280)** So let's say group1 publish, and we'll say something like, special sale on gardening supplies, right?
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=290)** The usual things you get in chat groups.
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=296)** And we'll say group2 publish, we'll say something like, "It's national dog day, everyone."
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=306)** Perfect. All right.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=308)** So let's run our code.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=313)** And we will see that when we run our code, each of our subscribers prints out the messages they received.
>
> **[5:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=318)** So Jim and Barb both received messages from the gardening group, and Barb and Hannah received messages from the dog-lovers group.
>
> **[5:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=325)** So that is the observer pattern.
>
> **[5:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-subscribers?u=76281980&t=327)** And the beauty of this again, is that it allows us to really control the communication between different classes in our program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1)
> **Code Identifiers:** getname (3), publishername (2), username (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Project: Create a group-chat program
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=0)** - [Instructor] Okay, so far, we've seen four design patterns as well as some individual examples of each one.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=5)** And what we're going to do now is take a look at an example that combines some of these patterns.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=10)** Now, we won't be doing all of them here since that would take us a good bit of time to write a program that would be large enough to need it.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=17)** What we're actually going to do is start off mixing two of the design patterns together, and then we're going to incorporate the third pattern in a challenge and solution video.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=26)** So the program we're going to be writing here is an extension of the chat group application that we saw in our observer pattern example, and we're going to start off by mixing this example together with the chain of responsibility example that we saw earlier as well.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=41)** The end result is going to be a chat group program that validates messages and sends those messages to the subscribers of different groups using the chain of responsibility.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=51)** So here is what this is going to look like.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=53)** We're going to start off by copying and pasting the code that we wrote in the observer pattern example.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=59)** All right, so just all the classes, no need for the client code here, and we're going to paste that into our main file in our new project here, so we have our subscriber publisher chat group and chat user, and we're pretty much going to leave this exactly the way we wrote it, no changes here yet.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=82)** The next thing we're going to do is we're going to copy and paste our code from our chain of responsibility examples.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=88)** And you can find both of these by the way in the starter code for the exercise files.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=94)** And for this one, we're just going to copy the length validator the not empty validator, the base validator and the string validator, and we're going to copy those into our new project here, all right.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=107)** And the first thing we're going to do here is we're going to change the name of string validator to handler, since this interface is going to be doing more than just validating strings, as you'll see, and to change that name, we're just going to do find and replace never going to change StringValidator, we're going to change the name of that to Handler.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=125)** Make it more generic.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=127)** So we'll replace all the occurrences of that looks like those are all correct, and we're also going to change the name of BaseValidator to BaseHandler, all right so let's replace that as well, BaseValidator, change that to BaseHandler.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=147)** All right so we're going to replace that and there we go.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=153)** And one last name change I'm going to make is we're going to change validate here, the name of this method, we're going to change that to handle.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=163)** All right, so replace, replace, replace replace, replace, replace, replace and that's it.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=170)** Okay, so the next thing we're going to do is our handlers handle method, in addition to taking a string is also going to take a chat group.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=181)** And what this allows us to do is it allow our handlers have access to a chat group, right?
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=187)** So our handlers will be able to do things like post messages in the chat, that kind of thing.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=193)** You'll see what I mean soon.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=197)** So we're going to do the same things here, we're going to add ChatGroup, group and PassGroup here,
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=210)** we're going to add ChatGroup group and pass it here.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=218)** And the same thing in our length validator ChatGroup group, and pass it here.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=227)** Okay, and once we've done that the next thing we're going to do is add another handler for our chain of responsibility and the job of this handler is going to be to simply publish a message to the given group if the responsibility is passed to it all right?
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=241)** So this is going to be at the end of the chain when we actually assemble our responsibility chain.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=247)** All right, so we're going to call this class PostmessageHandler, all right and it too is going to extend the BaseHandler, and here's what it's handle method is going to look like.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=261)** We're going to say handle, ChatGroup, group and string like this, and we'll call our string message here since this is going to be a string that the user wants to post to the group, and what this is going to do now is it's just going to call group publish with that string, and it's going to return a string, right?
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=286)** Since this handle method is still expecting us to return some sort of string, it's going to return the string that says message sent, right?
>
> **[4:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=297)** So that's all pretty straight forward.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=299)** The next thing we have to do now that we have our post message handler defined, is we're going to assemble our handler chain.
>
> **[5:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=307)** So the test code for this is going to look very similar to our chat group test codes.
>
> **[5:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=312)** So let's just copy and paste some of that over to here.
>
> **[5:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=319)** And there are going to be a few differences.
>
> **[5:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=320)** The first difference is that instead of just directly calling group publish, we're going to actually construct a chain here, all right so we're going to say, Handler sendMessageChain is what we'll call it, and we'll just create a new BaseHandler which doesn't do anything, this is kind of a nicer way to work with our chain, and then we're going to say, sendMessagChain, and we're going to say setNext, and we're going to set the first handler in the chain to a Not EmptyValidator, and then we're going to set the next one in the chain to a LengthValidator, and we'll just say our messages have to be longer than two characters although generally that's not a restriction that you see in chat apps.
>
> **[6:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=370)** And the last thing we're going to do is set the final handler to this post message handler.
>
> **[6:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=375)** And remember that if control gets to this post message handler, it will simply post the specified message to the specified group okay?
>
> **[6:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=386)** So we have our send message chain, the next thing I'm going to do is copy and paste some of the tests code from the finished state of this video, and we'll just make that a lot easier for us.
>
> **[6:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=397)** And the last thing we have to do is delete our send message chain at the end of all of this and we should be good now.
>
> **[6:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=404)** So let's run our code and see what happens.
>
> **[6:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=412)** And we'll see that as we try and send these four different messages to different groups, we're going to see that some of the handlers are going to print things out, right?
>
> **[6:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=418)** So it's checking if it's empty, and what we get back is please enter a value, right?
>
> **[7:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=423)** That's when we try and post an empty message, when we try and send a message, that's too short we get the string back saying please enter a value longer than two, and when we send valid messages, we're going to see that it goes all the way through the chain.
>
> **[7:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=434)** And then we're going to see that the actual chat users that belong to that group log out that they received the message in question.
>
> **[7:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-group-chat-program?u=76281980&t=443)** All right and that is an example of how we could combine the observer pattern, and the chain of responsibility pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (6), [[Design Patterns]] (2), application (1), generic (1)
> **CLI Commands:** make (3), find (2)
> **Code Identifiers:** sendmessagechain (1), sendmessagchain (1), setnext (1)
> **Definitions:** is an  (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Apply the Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=5)** - [Instructor] Okay, now that we've seen an example of how the observer and chain of responsibility pattern can fit together.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=10)** It's time for a challenge.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=12)** Your challenge is going to be to incorporate the command pattern into the code that we wrote previously.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=18)** So to be more specific, you may have noticed that all our handlers know about the chat group class which creates some unnecessary coupling between those two classes.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=27)** In order to reduce this coupling, what we can do is we can modify our handlers so that instead of taking a chat group and a string as arguments, they actually take a command as an argument.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=39)** All right.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=40)** So we'll be replacing these two things with a single command.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=44)** And this command then is what will actually contain the reference to the chat group as well as the string that the user wants to post there.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=52)** So this challenge should take you about 10 to 15 minutes.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-command-pattern?u=76281980&t=55)** Once you've finished it, feel free to move on to the next video where I'll show you how I would go about solving this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Speakers:** - [instructor] (1)

#### Solution: Apply the Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=0)** - [Instructor] Okay, hopefully you've given the challenge a try.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=6)** Now, let's take a look at one possible solution for incorporating the command pattern into this code.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=13)** So the first thing that I did was to create a message command interface as well as an implementation of that interface for SendMessageCommands.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=25)** All right, so down here I said class MessageCommand.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=32)** And just like we created our command interface in the corresponding video, what I did was I just gave this a virtual destructor,
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=46)** a virtual execute method, and a virtual getMessage method, okay.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=61)** And once I defined that interface, the next thing that I did was created an implementation of that, right, called SendMessageCommand.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=69)** This command is meant to represent, of course, when a user wants to send a new message to a given chat group.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=77)** And the SendMessageCommand, which has to implement the MessageCommand, here we go, public MessageCommand.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=87)** This is going to have two member variables.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=89)** The first one is going to be ChatGroup chatGroup and the second one is going to be a string.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=96)** So the chat group is the group that whoever's trying to send this message is trying to send it to and the message is the actual text that they're trying to post to the group.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=105)** All right, so now that we have those things, we're going to define a constructor, which is just going to look like this, ChatGroup chatGroup and string message and we're going to say chatGroup chatGroup and message message.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=130)** All right, and the next thing we need to do is define the getMessage and execute methods in this class.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=137)** So we're going to start off with the getMessage method.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=141)** So we're going to say standard string getMessage and simply return the message to member variable.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=149)** And we're going to say void execute, and for that we're simply going to call chatGroup publish message.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=160)** All right, and both of these are going to be overrides.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=167)** And that's all we need to do for our SendMessageCommand class.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=171)** After that, all we had to do was change the chain of responsibility classes to use this MessageCommand interface instead of the ChatGroup and string that they'd been using before.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=182)** All right, so in our Handler, we changed this from a ChatGroup and string to a MessageCommand, say MessageCommand command and likewise with these other ones as well, change handle to MessageCommand command, pass command through.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=205)** And we're just going to have to do that for the NotEmpty and the LengthValidators as well,
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=218)** pass command, and for the LengthValidator.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=234)** And last, but not least, I forgot about this one, the PostMessageHandler is going to need to change as well.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=242)** All right, MessageCommand command, okay.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=245)** And there are a few more changes we're going to have to make.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=248)** Notably, now we're no longer just dealing with a string as an argument, but we actually have to get the message text from the command.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=256)** And the way that we're going to do that here is instead of saying teststring.empty, we're going to say command getMessage.empty.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=267)** And likewise, here we're going to say command getMessage
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=275)** and here we're going to say publish command getMessage.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=285)** All right, and then we just need to define some new messages here.
>
> **[4:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=289)** And I'm going to copy and paste those again from the final state of this code.
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=296)** All right, so we have our emptyMessage, tooShortMessage and we just need to take those now and pass them to the corresponding sendMessageChain handle method.
>
> **[5:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=306)** All right, so instead of passing a group in a string, we're going to pass the emptyMessage command.
>
> **[5:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=312)** Instead of a group in a string here, we're going to pass the tooShortMessage command.
>
> **[5:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=317)** We're going to pass the sayHelloToGroup1 command here and sayHelloToGroup2 command here.
>
> **[5:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=324)** Okay, and then we're going to delete those message pointers as well down here.
>
> **[5:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=329)** And let's run our code.
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=331)** Oops, it looks like we missed something.
>
> **[5:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=334)** Oh, actually what I did here was not the correct thing, what we want to do instead is simply call execute on this command here, right, so we don't even have to worry about the group or the actual message at all in our PostMessageHandler.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=348)** We're just going to say command execute, just like that, and return "Message Sent!"
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=356)** Okay, so now let's run our code, see if it works.
>
> **[6:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=365)** And sure enough, we're going to see that we get the same output as before except now we're using the command pattern instead of all our validators and handlers having to know about the different classes outside of their context.
>
> **[6:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=378)** And that's about it.
>
> **[6:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-command-pattern?u=76281980&t=379)** Just keep in mind that this is only one possible way of doing things so don't worry too much if your solution looked a little different than mine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2)
> **Code Identifiers:** getmessage (7), chatgroup (5), emptymessage (2), tooshortmessage (2), sendmessagechain (1)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Behavioral Patterns Group 2: Strategies, States, and Interpretations

[↑ Back to Table of Contents](#table-of-contents)

#### The Interpreter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=0)** - [Tutor] Okay, onto our next design pattern which is the Interpreter Pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=4)** Now the Interpreter Pattern is generally used in situations where either because it makes our job easier, or because it's a necessity.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=12)** We need the software, we're writing to be able to understand a language that it wouldn't normally have the capability of understanding.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=19)** Okay, so you might have a hard time coming up with examples of this, but there are actually a lot of situations where this pattern can be applied.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=26)** A few examples of this might include if our program needs to be able to understand and execute mathematical expressions, input as strings by the user, right?
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=36)** So if we're writing a calculator program for example.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=39)** It might also be used if our program needs to have some kind of capacity to understand human languages such as English or Spanish.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=46)** And this might be the case if we wanted to implement some sort of text-based interface for the user to interact with our program.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=53)** Right, so the idea there would be that they could type in something like "delete all unverified users" and our program would be able to understand that.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=61)** And just one last example of this would be if we needed to decode some kind of system such as roman numerals and parse those into machine readable numbers.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=71)** So in all those situations that we just talked about, we can generally use the Interpreter Pattern to define what's referred to as a grammar that our program can then use to transform things that it doesn't understand such as basic English expressions or roman numerals into things that it does understand.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=89)** Now you're probably wondering what on earth this pattern could look like.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=92)** Well, it's actually deceptively simple.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=96)** We generally have an Expression Interface which is then implemented by two different types of Expressions, Terminal and Non-Terminal Expressions.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=106)** And the way this works is that the logic inside these expression implementations, defines what's called a grammar for the language we're defining, and what it does is it recursively breaks down whatever expression we're trying to parse, until it reaches terminal expressions in every part.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=124)** And then what it does is it uses the non-terminal expressions to combine these terminal expressions until it reaches a final something, right?
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=132)** Whatever it is that we're trying to turn the language that we give it into.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=136)** So from the example that we see here, we might have a mathematical equation represented as a string, and we break it down into a series of expressions where the numbers are the terminal expressions and the operators are the non-terminal expressions.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=152)** Okay, and then what our expressions contain logic for doing, is using those non-terminal expressions for combining the actual terminal expressions until we get our final result.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=164)** Now this might seem pretty complex and it definitely can be depending on the language that we're trying to define, but with things like mathematical expressions the rules are generally pretty straightforward.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-interpreter-pattern?u=76281980&t=174)** And we'll see how this works in code as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Tools:** terminal (9)
> **Analogies:** such as (3), for example (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [tutor] (1)

#### Implementing the Interpreter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=0)** - [Instructor] Okay.
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=1)** So we've learned the basics now of the Interpreter pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=4)** So we're going to look at a concrete example of what this is going to look like in our code.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=8)** And for the example we're going to be looking at here, we're going to be creating a very simple program that will use the Interpreter pattern to express simple mathematical equations.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=17)** And don't worry; this is going to be pretty painless.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=19)** I promise.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=20)** So the first thing we're going to do here is create our expression interface.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=24)** This will be what we use to define the grammar that I talked about earlier.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=28)** Okay, so we're going to create a very simple interface here called Expression.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=35)** And it's going to have a single method, which is going to be a pure virtual method called Evaluate.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=42)** And we're returning an integer here because the end value of any mathematical expression is going to be a number, right?
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=49)** And we could have this be float or double as well, but just for simplicity, I'm using int.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=54)** So now that we have our expression interface, here's what we're going to do: We're going to define some subclasses that will allow us to define and evaluate mathematical expressions.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=66)** So that's going to look something like this.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=67)** We're going to say class and we're going to create an implementation of this expression interface called OperationExpression.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=76)** And we're going to say public Expression, and we're going to give this class three member variables.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=81)** The first one is going to be a string.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=83)** That's going to be the symbol of the operator expressed as a string, right?
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=86)** So that'll be a plus sign, a minus sign, multiplication sign, et cetera.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=92)** We're going to say operatorSymbol.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=95)** And then we're going to have pointers to two different expressions.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=99)** The first one is going to be called the leftHandSide, and the second one is going to be called the rightHandSide.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=108)** And the reason we've chose those names, this operation expression is going to represent an expression like this, right?
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=116)** Five plus 10, where the left-hand side is this, and the right-hand side is this.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=123)** Now, in mathematical expressions, too, the right-hand or left-hand side might itself be another expression, right?
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=130)** So you could have a plus expression that adds together five and another operation expression.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=137)** Okay.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=138)** So that's what left-hand side and right-hand side are.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=143)** You'll see how we use all of this very shortly.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=147)** So now we have to implement the constructor, which is going to look like this.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=151)** We're just going to have OperationExpression.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=154)** That's going to take a string as an argument, and two expressions as arguments, which we'll have his left-hand side and right-hand side.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=169)** And we're going to say operatorSymbol, operatorSymbol, leftHandSide, left-hand side, and rightHandSide, right-hand side.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=186)** All right.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=187)** There's our constructor.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=190)** Oops.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=191)** Mistyped that.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=193)** All right.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=194)** The only other thing we have to implement now is the evaluate method of our operation expression.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=199)** And that's going to look like this.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=200)** We're going to say int evaluate.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=205)** It's going to be an override.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=207)** And what we're basically going to do here is we're going to check to see what operation this operator symbol is.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=214)** All right, so we're going to say something like if operatorSymbol is equal to a plus sign string, in that case what we're going to do is we're going to return the left-hand side evaluated plus the right-hand side evaluated.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=234)** This might seem a little silly right now, but I'll show you how this actually works when we get to the client code.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=241)** And then we're going to say else if operatorSymbol is equal to the minus sign, what we're going to do is say return leftHandSide, evaluate minus rightHandSide, evaluate.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=262)** And if neither of those is the case, what we're going to do is we're just going to say C out, we're going to print something like Unrecognized operator.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=271)** We'll print out the operatorSymbol just so we know what it is.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=276)** And then we'll say return zero, or return negative one, or return negative 99; whatever you want to do there.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=282)** All right, so that is our operation expression.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=284)** Now we could add as many of these kinds of things as we want, right?
>
> **[4:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=288)** If we wanted to come up with our own operator symbols and have them do weird things in here, we could definitely do that.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=295)** But for now, we'll just leave it at that.
>
> **[4:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=297)** So that's our operation expression.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=299)** The other thing that we're going to define here is our number expression.
>
> **[5:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=304)** So we're going to say class NumberExpression.
>
> **[5:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=307)** The number expression will be what's called a terminal expression, whereas the operation expression will be what's called a non-terminal expression, right?
>
> **[5:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=315)** Because it continues evaluating down the sort of grammar tree, if you will.
>
> **[5:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=323)** All right, so our number expression is going to look like this.
>
> **[5:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=326)** It's going to implement our expression interface and it's going to have a single-member variable called numberString.
>
> **[5:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=334)** This will just be the number that it represents, represented as a string.
>
> **[5:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=339)** We're going to have a constructor that allows us to pass that in.
>
> **[5:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=344)** numberString, and then we'll have numberString, numberString.
>
> **[5:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=352)** Okay.
>
> **[5:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=353)** And then the evaluate method of this is going to be very simple.
>
> **[5:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=358)** All we're going to do is say return, string to integer, numberString.
>
> **[6:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=366)** Okay, so it's going to return the numerical value of whatever that number string is.
>
> **[6:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=374)** Oops, and I misspelled evaluate here.
>
> **[6:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-interpreter-pattern?u=76281980&t=375)** There we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** express (1)
> **Code Identifiers:** operatorsymbol (6), numberstring (5), lefthandside (3), righthandside (3)
> **Tools:** terminal (2)
> **Speakers:** - [instructor] (1)

#### Applying the Interpreter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=0)** - OK, so you might be wondering now, how do we actually use this Operation Expression and Number Expression classes?
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=7)** Well, here's what that's going to look like in code.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=11)** We're going to start off by defining some Number Expressions, right?
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=14)** So we might say something like Number Expression five equals new Number Expression.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=20)** Like that.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=23)** Number Expression, we'll do something like, seven equals new Number Expression seven.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=34)** And then we'll have an Operation Expression, which we'll call five plus seven, which will be an Operation Expression we'll pass in.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=47)** Plus as the Operator String.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=51)** And then for the other two arguments, the left hand side and the right-hand side, we'll pass in the two Number Expressions that we have here.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=58)** All right, so we'll have five and seven as the other two arguments.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=64)** So now what we can do, is we can print out the result of evaluating this Operation Expression by just saying, C out.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=75)** And then five plus seven is and then we're going to say five plus seven evaluate.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=88)** And we'll add a new line on there as well.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=91)** And then just for cleanup, we'll just delete those things.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=99)** Perfect.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=100)** So if we run our code now, we're going to see that a prints out five plus seven is 12.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=109)** OK.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=110)** So if we wanted to make this a little more complicated, we could in fact have, let's define ourselves another Number Expression.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=117)** All right, we'll say something like 13 equals new Number Expression 13.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=125)** And then we can define another more complex Operation Expression, that will combine say a Number Expression with an Operation Expression, let's say, right.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=135)** So we could say, we'll just call this one complexOp or something like that.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=139)** And we'll say new Operation Expression.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=142)** And for this one, we'll say minus and for the left hand side, we'll have our 13 Number Expression here.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=149)** So we'll say 13.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=151)** And for the right hand side, we'll have our other Operation Expression here.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=156)** Five plus seven.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=158)** Right, our Operation Expression doesn't care whether the left or right-hand side are Operation Expressions or Number Expressions.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=164)** It doesn't really distinguish between the two of them, which is the nice part about this pattern.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=170)** So now, if we say something like, I'll just write it out using numbers, we'll say 13 minus five plus seven equals and then we'll do complexOp, evaluate.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=191)** And if we run our code again, we're going to see that we get the final answer.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=198)** Now you might be wondering, how this sort of thing that we just did here might be useful, after all you might be thinking, we could have just executed this expression here directly in the code and that would have worked perfectly well for us.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=211)** Well, first of all, we wouldn't normally write out all these expressions manually, like we did here.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=218)** OK. For that, we usually have some sort of parser that takes a string and creates these expressions automatically.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=224)** Right, so what you would do, is you would literally pass in this as a string or you could pass in something like this as a string, if you had different expression logic and it would actually parse that into these expressions, and then it would call evaluate on the top level expression.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=240)** Hopefully that makes sense.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=242)** So, the other nice part about this is that it gives us a good deal of flexibility, since we're able to define every aspect of our grammar now.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=251)** So if we wanted to make this more of a verbal math, type grammar, for example, what we could do is we could change the plus and minus signs here, to plus and minus.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=261)** And we could actually go down here and change this to plus and minus.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=270)** And if we ran this code again, it would give us the exact same result, right?
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=275)** So this would be a good starting point for parsing more verbal math like this.
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=280)** Obviously, then we would have to go into the Number Expression and have it be able to actually parse numbers in written form.
>
> **[4:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=287)** But I'll leave that to you as an exercise.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=290)** Anyway, hopefully this has been a helpful introduction to the Interpreter pattern.
>
> **[4:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-interpreter-pattern?u=76281980&t=293)** This one is a bit trickier than the other patterns we've seen before, but it definitely has some very interesting possibilities.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** complexop (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - ok (1)

#### The State pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=0)** - [Instructor] Okay, the next pattern we're going to look at is called the state pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=4)** This pattern can be used when we need a readable and reusable way to change the behavior of an object that can be in different states and needs to behave differently depending on which state it's in.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=16)** As an example of this, let's imagine that you're creating a program for tracking and providing information about online orders on an eCommerce site.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=24)** Now the thing is that the information we display about each order is going to depend on the state that the order is in.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=31)** For example, is the order in transit?
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=33)** Has it been delivered yet?
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=35)** Has a return been requested on the order and so on so forth?
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=39)** So each of these situations constitutes a different possible state that a given online order can be in and the behavior of the order will therefore change depending on which of these states the order is currently in.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=53)** Now if we were to naively implement this situation, it would probably end up looking something like this.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=59)** Right, our order class would have a state member variable, most likely a string or an enum, and everywhere that some sort of behavior is expected, we'd have a big if statement or switch statement, which would look at the state member variable and change the behavior depending on what the value was, and this kind of thing works, but it's definitely not ideal.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=80)** In general, it's very hard to reuse logic in this kind of situation without simply copying and pasting the code, which as I've said before, is generally not a good sign.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=92)** So here's how the state pattern can help us in this kind of situation.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=95)** As an alternative to this gigantic if then statement in all of our functions, what we do is we actually define the specific behavior for each of the different states inside its own class, and each of these state classes then takes care of executing the state dependent logic.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=114)** So a UML diagram for this situation would look something like this.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=118)** We would simply define a state interface and this would have a number of different methods.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=123)** The exact number of methods will depend on your use case, but generally, the state interface should only contain methods that are common to all of the states, and once we have that state interface, we then represent each possible state as its own subclass of that and define the desired behavior for that state inside that subclass.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=144)** And lastly, once we've split out our different state behavior into a variety of classes, the class that needs to actually behave differently for those states in the case that we were talking about beforehand, the order class, is then going to contain an instance of one of the implementations of this state interface as a member variable, and it's going to call its methods whenever it needs to do something without actually worrying about the state that it's in.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-state-pattern?u=76281980&t=171)** Right, our order is simply going to say current state, do something or current state, do something else, and that's going to call the corresponding method on whatever the current state of the order is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Analogies:** imagine (1), for example (1)
> **Code Identifiers:** ecommerce (1)
> **Env Vars:** uml (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Implementing the State pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=0)** - Okay, so now that we've learned the basics of the state pattern, let's take a look at a concrete example of what this pattern might look like in code.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=8)** For the example we're going to be looking at here, we're going to be using the situation we discussed earlier about allowing products on an e-commerce site to be in several different states and behave differently accordingly.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=19)** So if we take a look at our starter code here, this is from the exercise files.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=24)** This is what code without the state pattern usually ends up looking like.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=29)** As you can see, we have this purchase class with a state member variable, which is just a string.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=34)** And then based off the value of that variable, it'll behave differently whenever we want to do anything in the class, right?
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=41)** Whenever we want to do something like print out a description or go to the next state or if we had more methods, we would see this exact same pattern repeated over and over again for each of them.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=52)** So let's see what this would look like if we were to use the state pattern instead to really handle the differences in logic, depending on state.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=61)** What we're going to do is we're going to start off by defining a state interface.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=64)** And that's going to look like this.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=66)** We're going to say class state And it's going to have two methods.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=72)** The first one is going to be a virtual string method called get description.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=79)** Generally our state interfaces are going to have the same methods as the class that's going to be using them.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=87)** Our purchase class has a get description method and a go to next state method.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=92)** Our purchase class has a get description and a go to next state method.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=96)** So our state interface here is going to have a get description method, and it'll have something slightly similar to the go to next state method.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=105)** It will have simply a get next state method.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=110)** You'll see how we use that later on.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=114)** And both of those are pure virtual methods.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=119)** Okay, and now that we have that state interface, the next thing we're going to do is define implementations of this interface for each of the different states that a given purchase can be in.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=130)** Our purchases here have three different states: purchased, in transit, and delivered.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=136)** We're going to create a new implementation of this state interface for each of those.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=140)** So we're going to have class, purchased state.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=145)** Public state.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=148)** We're going to have an in-transit state.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=153)** And we're going to have a delivered state.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=158)** And each of these states is going to have a pointer to whatever the next state is.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=167)** And then we're going to define the constructor here, which is going to allow us to define the next state.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=174)** So we'll say next state, next state.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=181)** And next, we're going to have our get description method, which is basically just going to return the string down here from this if statement.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=194)** All right, so what we're going to do is we're just going to copy this, put it in here and say return, will be shipping soon.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=205)** And we can add something else to there too.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=206)** We'll say something like current state: purchased.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=216)** And now that we've defined our get description method, the next thing we're going to define is just the get next state method.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=224)** We just simply going to return the next state pointer that we have here.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=229)** Just going to say return next state.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=235)** Okay.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=236)** And for our other two classes here, our in transit state and delivered state, it's going to be pretty much the same thing.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=241)** I'm going to copy and paste all of this with some slight differences.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=248)** And you're going to notice that this next state and get next state thing are going to be the same in all of these.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=254)** So what you might want to do, I'm not going to do it here, but what you might want to do is move that up into this state interface, so it would make it more of an abstract class that contains the common functionality between all these states.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=265)** But for now, we'll just leave it like it is.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=269)** So we're going to just change this now to in transit state, change this to delivered state, and we're going to change these things too.
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=283)** So we'll say in transit and copy the string from down here.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=291)** All right, and for delivered.
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=294)** There we go.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-state-pattern?u=76281980&t=298)** We'll paste that there and change this to delivered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (17), [[Microsoft Products|Products]] (1), [[E-Commerce]] (1)
> **UI Navigation:** go to (3)
> **Exercise Files:** starter code (1), exercise files (1)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Analogies:** similar to (1)
> **Speakers:** - okay (1)

#### Applying the State pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=0)** - [Narrator] Okay, so we have our three different states.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=3)** The last thing we need to do now is modify our purchase class so that it defers all of its state dependent logic to one of these three implementations.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=13)** All right, so here's what that's going to look like.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=15)** We're first going to change this from a string to a pointer, to a state.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=22)** All right, so we're going to say state, current state.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=27)** For the starting state, we're going to add another argument here.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=30)** So we'll say state, initial state and we'll say current state, initial state.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=39)** And then what we're going to do is inside our purchases get description method, for simply going to return the result of calling get description on whatever our current state is, right?
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=48)** Our purchase doesn't actually know what its current state is and it also doesn't care.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=52)** All it cares about is deferring this logic to whatever the current state is.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=57)** And the same thing here for go to next state.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=60)** What we're going to do is we're simply going to delete all these things.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=66)** We're going to say current state equals current state get next state.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=74)** And we only want to do that if the current state has a next state.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=77)** So we're probably going to want to add that onto all of these here.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=80)** Just initialize those as null pointers, forgot to do that at the beginning there.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=91)** Null pointer, all right.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=95)** So we're going to check if the current state has an next state, if it does, we're going to go to it.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=108)** Otherwise, we're going to log out something like, no more states.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=116)** Okay, and that's all we need to do for our purchase and the different state implementations.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=123)** Let's take a look now at what the client code is going to look like.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=126)** Really, it's going to be fairly simple.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=128)** We're just going to create all of the different states.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=132)** We're going to start off in reverse order.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=133)** So we're going to say delivered state, delivered state equals new delivered state.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=142)** And we'll just pass in a null pointer for that.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=146)** Then we're going to have an in-transit state which is going to look like this.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=149)** We're going to say in transit state, in transit state equals new in transit state.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=158)** And the next state for that is going to be the delivered state.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=162)** There we go, and then we're going to have our purchased state.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=166)** So purchase state, purchase state equals new purchase state.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=174)** And the next state for that is going to be the in-transit state.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=178)** And this is just one way of doing it.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=180)** Obviously there's probably easier ways to set this all up but just to make it explicit what exactly it is we're doing.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=188)** So now, now that we have those three states, all we're going to do is we're going to create a new purchase and we're going to pass in the initial state for that purchase.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=199)** So we're going to say purchase equals new purchase.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=202)** We'll call that shoes maybe, just it needs a product name argument there.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=208)** And for the initial state, we're going to pass in the purchase state.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=212)** So our purchase is going to start off in the purchased state and then what we're going to do, and you can just copy and paste this from the finished exercise files, just to test this off, we're going to go to the next state.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=226)** We're going to print the description, we're going to go to the next state.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=228)** We're going to print the description, and it looks like I missed one other thing.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=233)** We just want to print out the initial description, just so we can see how our purchase behaves in all of its different states.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=239)** And we'll also want to delete all the pointers we created here.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=244)** Delete our delivered state, delete our in transit state.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=250)** Delete our purchased state and delete our purchase.
>
> **[4:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=258)** Okay, so let's run our program and see what happens.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=263)** All right, so we see that the three different things that we're printing, even though we're calling purchase get description on all of them, it behaves differently depending on the state that are purchase currently in, right.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/applying-the-state-pattern?u=76281980&t=276)** And instead of polluting our purchase class with all of the different branching state logic, what we're doing here is we're deferring that actual logic to each of the different state implementations that we have here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (8), product (1)
> **UI Navigation:** go to (4)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### The Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=0)** - [Instructor] Okay, the next pattern we're going to look at here is called the Strategy Pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=4)** The Strategy Pattern is used to simplify our code in situations where there are several or many possible ways of performing some calculation or producing some result.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=15)** So an example of this might be if we were writing a program that had to sort a lot of different things.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=20)** Now, as many of you know, while some sorting algorithms are generally considered more efficient than others, which one computes the result the fastest can often vary depending on certain situations.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=31)** So let's say that we wanted to take that into account and have our program use a different sorting algorithm depending on certain criteria.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=39)** For example, if our array is quite small, we'd probably want to use something like insertion sort, for other situations we might want to use quick sort or radix sort and so on.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=49)** Now, even though we want to be able to use different sorting algorithms in different circumstances, we definitely don't want the implementation logic for all of these algorithms to be contained in one single place in our code wrapped in if statements that decide which one to use, right?
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=64)** As with most of the other examples that I've given so far in this course, this would not only lead to a mess, but would likely make our code very difficult to reuse without copying and pasting.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=75)** So here's the basic idea of the Strategy Pattern.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=78)** Instead of writing all the different ways of doing things in the same place with if statements, we break each different way of doing something out into a class of its own, right?
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=89)** We call these strategies.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=91)** In more concrete terms, what we're going to do is we're going to define some sort of strategy interface with a method for actually executing that strategy.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=99)** So in the case of the sorting example that I gave before, we would have some sort of sorting strategy interface with a sort method.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=107)** And what we would do then is we would have all of the different strategies for sorting separated out into their own implementations of this interface, right?
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=116)** Separated out into their own classes.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=119)** And once we have our sorting strategies, we'll then have the client code represented as its own class and this class will contain a sorting strategy as a member variable as well as a method or constructor that allows us to set whatever sorting strategy we need outside that class.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=139)** And then what happens is whenever this class needs to perform its task, right, so whenever our client needs to sort something, it'll call the sort method on its current strategy member variable.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=150)** So that's basically what the pattern looks like.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-strategy-pattern?u=76281980&t=152)** We'll see this in more detail in our coding example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), next (1)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Creating strategies
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=0)** - [Narrator] All right, so now that we've learned the basics of the strategy pattern, let's take a look at an example of what it might look like in code.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=7)** Now previously, we discussed the example of using the strategy pattern to choose between different sorting algorithms and that's absolutely possible to implement.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=15)** But for our example here, we're going to do something just a little bit simpler.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=19)** We're going to use the strategy pattern to allow us to specify different greetings for people in our program.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=25)** So let me show you what I mean by that.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=27)** If you look at the starter code for this video, which we have here, and you can find it in the exercise files, you'll see the situation that the strategy pattern is meant to help us with.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=36)** So specifically we have this person interface with a single greet method.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=42)** And then what we've had to do is define a new subclass of this interface for each different person that greets people in a different way.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=50)** Right? So we have a business person that says, "Good morning, how do you do?"
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=54)** That's how business people talk, of course.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=57)** We have a normal person that says, "Hi, how are you?"
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=59)** We have a cool person that says, "Hey, what's up?"
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=61)** That's how cool people talk, as you well know.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=64)** But then the problem is that we come to this politician class, right?
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=69)** But we see here that the politician and the business person have the same way of greeting.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=74)** And assuming that the politician and business person classes are different in some other key ways, right?
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=81)** Maybe they have different member variables and different methods, et cetera.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=84)** We really have no other choice than to just duplicate the code inside the greet method.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=91)** So how can we use the strategy pattern to fix this?
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=95)** We're going to start off by saying "class GreetingStrategy" and what we can actually do, I'm just realizing, is this person class has the exact method that we need our greeting strategy to have.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=108)** Right, so our greeting strategy is going to have a single virtual method called "greet" that different implementations of this strategy are going to implement.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=118)** So here's what I mean by that.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=119)** Instead of defining a person subclass for each of the different greetings, right?
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=124)** Instead of using subclasses to change the behavior of different people, what we're going to do instead is rename these things as strategies.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=133)** All right, so we're going to say "class FormalGreetingStrategy" and that is a subclass of our greeting strategy.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=144)** We're going to have this one be a "NormalGreetingStrategy."
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=151)** Oops, and that's going to be just "GreetingStrategy."
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=154)** And we'll have an "InformalGreetingStrategy" here.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-strategies?u=76281980&t=158)** "InformalGreetingStrategy," "GreetingStrategy."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (4), [[Algorithms]] (1)
> **Exercise Files:** starter code (1), exercise files (1)
> **CLI Commands:** find (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Rewriting classes to use strategies
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=0)** - [Instructor] And then what this allows us to do is it allows us to have a single person class.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=5)** Alright, so let's define that here.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=8)** We're going to say class person and this person class is going to have a greeting strategy as a member variable.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=17)** And what this allows us to do is use a single person class and simply pass in different greeting strategies depending on how the person is expected to behave.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=27)** Alright, so in our case here we're going to say greeting strategy, greeting strategy.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=34)** We're going to allow ourselves to pass in the greeting strategy in the constructor here.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=39)** We're going to say person greeting strategy greeting strategy and we'll say greeting strategy, greeting strategy.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=55)** Alright, so that's the constructor.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=57)** We're going to also have a destructor just because we'll want to be able to pass in sort of an anonymously defined object.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=64)** So we'll say person and we'll just have this delete the greeting strategy.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=74)** Alright.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=76)** And it's just going to give us a little warning here.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=77)** If you want to make that go away, you can just go up here and add a virtual destructor to our greeting strategy.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=88)** And then we're going to add a greet method to our person and all our person is going to do inside this method is simply call the greet method of its corresponding greeting strategy.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=101)** So it's just going to say greeting strategy, greet name.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=107)** And once we've got all of this logic setup here's what it's going to actually look like to use these classes we've created.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=116)** Alright, so we're going to create our people.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=120)** Let's say person, business person.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=124)** Going to pass in a new formal greeting strategy to the constructor.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=130)** So we can just say this, a fact, just use a reference.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=134)** I'm just going to say normal person.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=137)** And remember that we used to have to have separate subclasses for these things.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=141)** Now we're able to just create them like this all using the person class.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=147)** Alright, so normal person, we're going to give them a normal greeting strategy.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=153)** The cool person is going to have a informal greeting strategy, and, the politician, here's where the code reuse comes into place is going to reuse this formal greeting strategy.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=171)** Alright.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=174)** Okay, so now if you want to copy and paste the test code from the final state of the exercise files that's going to look like this.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=180)** If you want to type that out instead be my guest, and let's run this and see what it does.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=192)** Alright, so we're going to see that it prints out the business person says, "Good morning, Shaun, how do you do?"
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=197)** The normal person says, "Hi Shaun, how are you?"
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=199)** The cool person says, politician says, and each one behaves differently depending on the strategy that we passed in to the constructor, alright?
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=208)** So that's the powerful advantage of the strategy pattern.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=212)** If we have two different people that greet in the same way we can simply reuse the same strategy instead of having to duplicate all of that logic over again.
>
> **[3:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/rewriting-classes-to-use-strategies?u=76281980&t=220)** And obviously this is a pretty simple example of what we just saw here, but the concept here applies just the same to much more complex situations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### The Template Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=0)** - [Announcer] Okay, our next assigned pattern is called the Template Method Pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=4)** The goal of this pattern is to give us a clean way to represent processes that involve multiple steps where each of those steps can involve some sort of variation depending on the situation.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=15)** Generally you'll know that you should use this pattern when you find yourself writing a large chunk of code over and over again for several different situations where each different version of this code just has slight variations or tweaks here and there.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=29)** An example of this would be if you were writing a program that's meant to load, format and consolidate data from a variety of sources.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=38)** So you might be loading data from a JSON API, a database, text files, maybe even scraping web pages or something like that, and each of these different situations is going to involve pretty much the same steps, right?
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=50)** We're going to load the raw data, we're going to parse that data, maybe we have to format that data, we then have to filter it and finally, we store that in our database, something like that.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=62)** Now the tricky part is that each of these different situations is going to involve slight variations in each step from all the other situations, for example, during the load step, the JSON API might require us to make a network request, the database will require us to connect and query some sort of database and the text file loader will require us to open a text file, right, and so on, so forth.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=90)** Now, quite often when programmers try to implement this sort of situation, what they do is they write each situation as it's own huge lump of code.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=99)** For example, they might have one function for loading, parsing, formatting, filtering and storing the JSON data, and likewise for the database data, the text file data, the web scraping data, et cetera.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=112)** And that is where the Template Method Pattern steps in to help us out.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=116)** Basically, in order to incorporate the Template Method into our code, what we're going to have to do is break our code down into logical steps that each different situation is going to contain and then we'll express each different variation of those steps as it's own class, that'll implement some of the steps in a slightly different way.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=136)** You'll see what I mean in just a minute here.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=139)** So in UML this is going to look something like this.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=141)** We start off by creating an abstract class that has a method for each step, right?
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=147)** So in the example that I described earlier, we'd probably create an abstract data pipeline class, and the steps for that would be load, parse, format, filter and store, and obviously there might be a few others, but the point here is that these methods are logically shared by all the different variations of this process, and each of these methods can either be abstract themselves, right, where subclasses are required to override them, or they can provide some sort of default implementation that subclasses can simply keep as is.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=180)** We'll see what this looks like again when we get to the coding example.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=184)** And the last method that this data pipeline abstract class is going to contain is some sort of public method that'll take care of calling each of these different step methods in sequence, right, usually we'll call this execute or something like that.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=198)** So anyway, once we have that abstract class, what we do then is we extend that class for each different situation that requires a variation on the process that we're implementing.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=209)** Right, so these classes can then override each method that requires a variation in their particular case.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=214)** So a JSON data pipeline subclass would provide special logic for loading data from the API in it's load method, as would the file data pipeline, database data pipeline and so on, in addition to whatever other methods are required for their particular use cases.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-template-method-pattern?u=76281980&t=232)** And finally, whenever we want any of these subclasses to do it's thing, we simply call the execute method that it inherited from the abstract data pipeline class and everything will be performed just as we want it to in that order of steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), database (6), [[JSON]] (4), api (3), web (2)
> **Env Vars:** json (4), api (3), uml (1)
> **Exercise Files:** template (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (2)
> **Definitions:** is called (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [announcer] (1)

#### Creating template methods
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=0)** - Okay, now that we've learned the basics of the template method pattern, let's take a look at a concrete example of what this pattern is going to look like in our code.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=8)** For our example here, we're going to be looking at the situation of writing a program that generates greeting cards for people.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=15)** So since you're all programmers, I'm going to assume that those of you who regularly write greeting cards for friends or family members have noticed that greeting cards generally follow an extremely predictable format, right?
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=25)** You're going to have the introduction, which is something like, dear Sean, then you have the body of it, right, so that'll be something like happy birthday.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=35)** Right, blah, blah blah.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=37)** And then you'll have the sign-off, something like, you know, sincerely Sean, right.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=42)** Writing myself a birthday card.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=43)** So this is actually a very good example of a situation where we could use the template method pattern.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=50)** All right.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=51)** So let's jump right in and start off by defining a top level greeting card template class.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=57)** All right, so we're going to create a class here called greeting card template.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=64)** And this template here is going to contain the most generic implementations for each section of a greeting card, as well as logic for stringing all of these parts together.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=75)** Let me show you what I mean by that.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=77)** We're going to create, first of all, some protected methods.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=80)** These will only be accessible to subclasses of our greeting card template.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=85)** And these are going to be the different so-called template methods of our greeting card generator.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=91)** And these are going to represent the different sections of our greeting cards.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=93)** So we're going to have our first method.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=97)** These are all going to return strings, by the way.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=98)** You'll see exactly how this works in just a second.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=101)** Our first method's going to be called intro, and that's going to take a string as an argument, and that's going to be the name of the person that we're writing the card to.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=112)** Okay, so that's going to generate the intro, right, it's going to say dear so-and-so, or hey so-and-so, or hello so-and-so, whatever you want the top of the card to say.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=122)** That's going to be your intro.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=123)** And for our most generic implementation here, we're just going to say dear, and add the two string onto that.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=129)** And then end with a comma and a new line character.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=134)** All right.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=136)** So that's the intro.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=137)** The next part of our greeting card is going to be the actual body of the greeting card.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=141)** For this one we'll just call it occasion, right, it'll be where we say, you know, happy new year, happy birthday, whatever we're writing the card for.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=150)** Right, that's not going to to need to take any arguments.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=153)** And it's just going to return something in its most generic form, right, a very generic greeting card will say something like just writing to say hi.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=163)** Hope all is well with you.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=167)** All right?
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=169)** And lastly, it's going to to be a very short greeting card, we're going to end with the closing, right, so we're going to have another method called closing that contains the name of the person that the card is from.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=183)** So for that, we're going to do the exact same thing here.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=186)** We're going to have the name of the person it's from, and we're going to return something like, sincerely is a pretty generic sign-off.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=195)** We're going to have sincerely, new line, and then we're going to add the name of the person it's from, and another new line to end the card.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=204)** Okay.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=208)** So those are our three template methods of our greeting card template.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=213)** The other thing that our top level greeting card template class is going to contain is a method that we can call that will sort of tie all of these template methods together, right, whether that's calling each one of them in sequence, whether it's combining the results of all of them.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=228)** Whatever the case, we're going to create a public method.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=233)** And that method is going to be called generate.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=237)** All right, and it'll take the to and from arguments.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=240)** So we'll have a string to, and a string from.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=251)** And what this is going to do is it's going to string together the results of these three template methods.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=256)** So we're just going to say return intro, and we're going to pass the to argument through to that one.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=264)** We're going to have the occasion, and we're going to have the closing, and we're going to pass the from name through to that.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-template-methods?u=76281980&t=272)** All right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** generic (5), next (1)
> **Exercise Files:** template (12)
> **Definitions:** is a  (2)
> **Speakers:** - okay (1)

#### Modifying templates using subclasses
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=0)** - So that is our greeting card template.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=2)** The next thing we're going to do, right?
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=4)** Here's where the power of this pattern comes in in order to make modifications to the basic implementation.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=9)** For example, if we wanted to make a birthday card generator class, we only have to override the methods of this greeting card template that are going to be different.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=18)** So if we wanted to create, let's say class, and we'll say a birthday card template, and we'll make that extend the greeting card template class.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=30)** All we have to do now to change the occasion is give this class its own implementation of this occasion method.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=38)** All right?
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=39)** So we're just going to say string occasion override.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=47)** And we're going to return a different string for the occasion.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=50)** So we're going to say something like happy birthday.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=54)** Hope you have a wonderful day and lots of cake.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=61)** What a nice birthday card.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=64)** All right.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=65)** So that's our birthday card template.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=66)** Why don't we, while we're at it, just make one more class.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=69)** Let's make a New Year's card template.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=72)** I'm not sure how common New Year's cards are but while we're at it, why not?
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=77)** All right?
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=77)** So we're going to say New Year's card template.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=79)** This is going to extend the greeting card template as well, and actually we just need to label this as public, both of these.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=86)** And for this one, maybe we want to override both the intro and the occasion, right?
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=92)** So in that case what we would do is we would say string intro.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=99)** This one takes a string as an argument and maybe it will return something like the person's name, plus and maybe it just has a bunch of exclamation points after it, right?
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=110)** Very enthusiastic New Year's card.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=114)** And after that obviously, we want to change the occasion here as well.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=117)** So we could do that by defining a new occasion method.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=122)** Let's just mark these as override, right?
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=125)** So occasion override.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=128)** And for this one, we'll return something like happy New Year's, bunch of exclamation points.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=137)** See you at the gym tomorrow.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=142)** All right.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=145)** So we now have two different templates that only overrides certain methods and notice that these classes themselves, the birthday card template and the New Year's card template, don't have to override all of these methods.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=157)** And they also don't have to worry about how the methods are actually strung together either, right?
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=163)** So that's all taken care of by the generate method on this greeting card template class.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=169)** So the way we would actually use these templates that we just created would be something like this.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=175)** We're going to create a greeting card template.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=178)** We'll call it G C T.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=182)** We're going to create a birthday card template.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=184)** We'll call that birthday card template and a New Year's card template, which we'll call New Year's card template.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=195)** Perfect.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=196)** So now the next thing we're going to do is we're going to copy and paste the code from the finished exercise files, just to save time on typing.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=207)** It's just going to look like this.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=208)** And if we run our code now, we're going to see that it generates three different cards for us, each of which has some of the strings from the greeting card template class, as well as its own special overrides of those different methods.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=228)** Oops, and let's just go in and put some new lines after these, just to make it look a little better.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=237)** Here we go.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=237)** And if we run it again, we'll see that that looks really good.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=243)** And one more thing to keep in mind is that even though we just used the topic of greeting cards in this example for simplicity's sake, this kind of thing can apply to many different situations, right?
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=254)** Basically anywhere that you have a series of steps where each of the steps is a little different in certain situations, right?
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/modifying-templates-using-subclasses?u=76281980&t=262)** Just like what we had here is when you'll want to use the template method pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), power (1)
> **Exercise Files:** template (18), exercise files (1)
> **CLI Commands:** make (6)
> **Analogies:** for example (1), just like (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - so (1)

#### The Visitor pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=0)** - [Instructor] All right, our next pattern is called the Visitor pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=4)** The Visitor pattern is used when we need to add some sort of similar functionality to many different classes.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=9)** And this functionality doesn't really make sense inside the classes themselves.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=14)** An example of this might be, if we had a bunch of classes and we needed a way to save instances of each class to a database let's say.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=22)** Now the naive way to do that would be to add a writeToDatabase method to each of the classes in question.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=29)** And while this approach works, it has the tendency to really add a lot of clutter to our classes, right?
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=34)** In this situation, may be a single extra write to database method isn't so bad.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=39)** But what about if we also need to be able to export instances of this class to a text file, or to a JSON string, or some other format, right?
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=49)** Ultimately, all of these extra methods, none of which really has anything to do with the actual functioning of the classes themselves, these methods just end up adding a lot of extra code to our classes, and that's where the Visitor pattern can help us.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=63)** The basic idea of the Visitor pattern is like this.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=66)** Instead of adding logic for doing whatever it is to each of the classes themselves, we separate this functionality out into a separate class or classes that take care of it themselves.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=78)** Now, the way that this works architecturally is that we create a Visitor interface as well as classes that implement it.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=84)** This interface generally contains one method for each class that we would have had to otherwise add an ugly method to, right?
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=93)** So in the case of writing to a database, we'd have a database Visitor interface with methods that took care of the actual logic for writing given instances of different classes to a database, and likewise for exporting to a file or for exporting to JSON.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=109)** We would have a different visitor for each of those different cases.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=113)** And once we've done that, the last thing we need to do is we add a tiny trivial method to all of our original classes, right?
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=121)** And this method is usually called something like accept.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=125)** And what this method does is it just calls the corresponding method on the visitor instance that it's called with, and usually passes itself as an argument or some kind of data from itself as an argument.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=138)** We'll see what this looks like in the code in just a minute here.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=141)** So the main benefit of this pattern then is that where we would have normally had to add two, or three, or 10 different methods to all of our classes, right, write to database, export to file, export to JSON, et cetera.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=155)** We now only have to add a single accept method to all those classes, and the extraneous logic gets put into its own classes, right?
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=164)** The ExportToJSONVisitor, the WriteToDatabaseVisitor, et cetera.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-visitor-pattern?u=76281980&t=169)** And this not only keeps our classes free of extraneous methods, but it also groups together that code in a more logical way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (6), [[JSON]] (3), next (1), data (1)
> **Env Vars:** json (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** writetodatabase (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Implementing visitors
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=0)** - [Instructor] Alright, so we've seen the basics of the visitor pattern let's take a look now at a concrete example of what this pattern is going to look like in our code.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=8)** So for the example that we have here we're going to be using the situation we discussed earlier where we have several classes and I just picked several fairly random kinds of things.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=17)** A person class, we have a landmark class and we have a car class just to show that this pattern can be used even when the objects we're using it with don't really have any relationship to each other.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=28)** So let's say that we want to be able to do things to all of these classes, like write instances of them to a database or export them to a text file, that kind of stuff, right, so remember we said that the usual way that this is implemented is simply by adding a method for each of these things to the classes themselves, right, so inside person we'd have a write to database method we'd have a write to text file method blah, blah, blah and we'd have the same thing in landmark and the same thing in car as well.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=57)** And these methods can really start to clutter up our classes since they don't really have anything to do with the way these classes themselves work, right, it's more of an extraneous kind of function.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=67)** So what we can do instead is we can use the visitor pattern and here's what that's going to look like.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=74)** We're going to start off by defining a visitor interface with methods for each of the classes that we want to add a given piece of functionality to.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=84)** Alright, we'll see exactly what I mean by that in just a minute here.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=88)** So let's define our visitor interface, that's going to be called visitor And we're going to define one public method for each of the classes here.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=99)** So the first one, we're going to say virtual void and we're going to call it handle person, alright and this one is going to take the person's name and age member variables as arguments.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=110)** So we're just going to say string name and age and we're going to define this as a pure virtual method And we're going to do the same thing for landmarks and for cars so we're going to have handle landmark this is going to take the name and the city name of the landmark, name, city name, okay, it looks like I typed that in wrong let's fix that, there we go.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=143)** And lastly, we're going to have a handle car method as well so we're just going to change this to handle car change this to make and model, okay.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=155)** So that's what our visitor interface is going to look like.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=158)** Once we've defined that interface, we can now define implementations of it that will contain the actual logic.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=164)** So for writing these classes this person landmark in car class to a database that would look something like this we'd have class call it something like database visitor And we'd say that it extends the visitor class, alright.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=183)** And then we're going to define all of these methods for our database visitor class so I'm just going to copy and paste that remove virtual from these and we're going to start off with our handle person for our handle person, all we're going to do for now, right, because we don't have an actual database to write to we're just going to print out writing person to database and we'll put their name and their age in here.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=215)** Alright, name and age just like that and we'll do pretty much the same thing here for our landmark and car classes, just like that and like that.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=231)** And we'll change this to writing landmark to database say name and city name and for the car, we're going to say writing car to database and we'll say make and model.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=251)** And the point here is really just to show that we have very different functionality, well, I mean, it's not that different here but it can be as different as we need it to be for each of these methods.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-visitors?u=76281980&t=263)** So we have our database visitor class now, if we wanted to also be able to do things like write our objects here to a text file or a PDF or something like that, we could do that like this, this isn't going to be too different from the database visitor class, because again, we're not actually writing things to files or to databases, but we'll just change this now to say writing person to file, writing landmark to file, and writing car to file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (11), [[Databases]] (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (2)
> **Env Vars:** pdf (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### Allowing classes to accept visitors
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=0)** - [Instructor] And now that we have our visitor classes the way that our person and landmark and car whatever classes we have, are actually going to allow us access to their data, is by providing a single method that we can pass one of these visitor objects to.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=15)** And when we do that, these classes will call their corresponding method on the visitor.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=21)** So as an example here, the person class will provide an accept method.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=26)** Right. And that'll have a pointer to the visitor that's trying to visit, and we'll simply call visitorhandlePerson.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=37)** And we'll pass the person's name and age in.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=41)** Okay. And we'll do the exact same thing for the landmark and car classes, except, we're going to, instead of having handlePerson, we're going to say handleLandmark and that's going to have the name and cityName.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=60)** And for our car, that's going to be handleCar with the make and model.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=70)** Okay. And just to reiterate also this accept method is the only method we're ever going to have to actually add to these classes, right?
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=78)** 'Cause now that we've added it. All that we have to do if we want to add some sort of extraneous functionality, like writing to a database, writing to a text file, writing to an Excel file, whatever we want to do.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=89)** All we have to do is express that using this visitor interface. All right.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=96)** So we don't have to add hundreds of specialized functions to each of our classes to implement that kind of functionality.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=103)** So the way we're going to use these now, is like this.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=108)** We'll create a person. Person's name will be John.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=112)** 40 years old. We'll create a landmark.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=118)** Right. That'll be the Eiffel tower in Paris, and we'll create a car.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=126)** All right. So Car car, and we'll do a Chevy Camaro.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=133)** All right and now that we have those two things, we're going to create two visitors.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=136)** One is going to be a database visitor, and one's going to be a text file visitor.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=141)** So we're going to say DatabaseVisitor, and we'll just abbreviate that dbv = new DatabaseVisitor, and TextFileVisitor, we'll abbreviate that tfv, and we'll say new TextFileVisitor.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=156)** And then we just need to call, the corresponding accept method on each of these objects that we just created here.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=164)** And pass it, one of these visitors, and it'll do its thing, right?
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=167)** So person.accept, dbv, we'll write the person to a database Right, landmark.accept.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=176)** We'll write the landmark to a database if we pass the database visitor to it.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=181)** And likewise, car.accept, we'll pass the database visitor to it. All right.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=188)** And we can do the exact same thing with the text file visitor.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=191)** Right. So if we change this now to text file visitor and we just need to make sure to delete our visitors here.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=204)** Now, if we run our code.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=210)** We're going to see that everything works just like we want it to. All right.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=213)** So we're going to see writing person to database, writing landmark to database, blah, blah, blah.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=217)** And that is that. And again, the beauty of this pattern is that we can add a lot more visitor implementations if we want to, for different functionality without having to add anything to the person landmark or car classes themselves.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/allowing-classes-to-accept-visitors?u=76281980&t=231)** All we needed to do those was add this accept method and we can basically accept any visitor we want to now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), data (1), [[Microsoft Excel|Excel]] (1), express (1)
> **Code Identifiers:** visitorhandleperson (1), handleperson (1), handlelandmark (1), cityname (1), handlecar (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Project: Create a greeting-card generator program
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=0)** - [instructor] Okay so far we've seen five more design patterns as well as some individual examples of each one.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=6)** And what we're going to do now is just like in the previous chapter, we're going to take a look at an example that combines some of these patterns.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=13)** And just like last time we're not going to be combining all of them here.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=16)** Since again, that would take us a good bit of time to write a program that would be large enough to need it.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=21)** But what we're going to do is we're going to just mix two of the design patterns together and then we'll have a challenge solution video where there'll be challenged with making a few changes to the code that we ended up writing.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=33)** So the program that we're going to be writing here is going to be an extension of the greeting card generator program that we first saw in the template method pattern example.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=41)** And we're going to mix this example together with the visitor pattern that we saw earlier.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=47)** And the end result is going to be a greeting card generator program that can generate greeting cards for a number of people.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=54)** So here's what all this is going to look like.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=56)** We're going to start off by copying and pasting the code that we wrote in our template method pattern example.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=62)** All right so everything except the main function we're just going to copy.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=68)** And paste right here.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=71)** Okay so we have our greeting card template, birthday card template, new year's card template et cetera.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=77)** And then we're going to head over to our visitor pattern example, and you can find the finished states for these two pieces of code in their respective videos by the way.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=87)** And what we're going to do is we're going to copy the visitor interface that we created and we'll paste that here.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=93)** And we're also going to copy the person class and put that down here.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=101)** All right and we're just going to make a few changes here.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=103)** Really, the only change we need to make is we're just going to delete the landmark and car ones since we're not going to need those for this example.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=111)** And the next thing we're going to do here is we're going to change our greeting card template class a little bit.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=117)** So if we scroll up here, what we're going to do basically is instead of expecting the client code to pass in the, to and from strings directly, when it calls generate what we're going to do is we're going to add the visitor pattern to this greeting card template class so that it can get information from the person class directly via the visitor pattern that we saw earlier.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=141)** So what we're going to do is we're going to start off by making this greeting card template class implement the visitor interface and let's move the visitor class and stuff up to the top.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=154)** (keyboard chattering) There we go.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=159)** And the next thing we're going to do is we're going to make the greeting card template actually have the from string here as a member variable.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=168)** All right.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=169)** So when we basically create a greeting card template it'll already have the person's name that it's from As part of the class.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=177)** Okay so we're going to say string from, and then down here in public, we're going to add a constructor.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=184)** I'm going to say greeting card template.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=188)** It's going to take a string as an argument and that's going to be our from And then we're going to have to declare a destructor as well just going to say greeting card template.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=204)** (keyboard chattering) And there we go.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=208)** And the next thing we're going to do here is we're going to change this generate method.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=213)** All right.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=213)** So it's going to go from returning a string to just being a void.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=217)** All right so it's just going to do something.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=219)** We'll go back to this in the challenge and solution video how to turn it back so that it actually returns a string but for now, we're just going to make it do something.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=227)** It'll be much easier to incorporate the visitor pattern right now, if we just do it this way.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=232)** All right.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=233)** So we're going to change this method a little bit instead of just calling it generate, we're going to say generate card for, and instead of passing in to and from, or just going to pass in a person pointer.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=247)** Alright.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=249)** And what this is going to do now.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=251)** And what this is going to do now, is instead of just calling return intro occasion closing we're going to actually have our greeting card template class, visit the person class.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=261)** All right so we're going to say person except and pass this as the visitor okay.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=271)** And we're going to cut this out of here for now.
>
> **[4:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=273)** We'll actually paste it in this other method we're going to put here.
>
> **[4:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=277)** And this other method is going to be the handle person method that we have to add in order to make our greeting card template actually implement this visitor interface.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=286)** All right so we're going to say void handle person, (keyboard chattering) and here's where we're going to take the person's name and age right?
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=294)** Cause that's the signature that we're going after here.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=298)** So actually I'm just going to copy that.
>
> **[5:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=300)** Will save me a little typing.
>
> **[5:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=304)** And inside here, what we're going to do is we're simply going to print something out.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=308)** So We're just going to say, see out, and we'll say something along the lines of sending this card to, and then we'll put the person's name.
>
> **[5:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=321)** We'll put some new lines and here is where we're going to put the intro with the name, the occasion , and the closing with the from member variable that we have up at the top here.
>
> **[5:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=342)** And now that we've done all that modification to our greeting card template, right?
>
> **[5:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=346)** We've incorporated the visitor pattern into that.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=348)** One last thing we're going to do is actually create a greeting card generator class that will sort of abstract away a lot of this logic for us.
>
> **[5:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=357)** So what this is going to look like we're just going to say class greeting card generator.
>
> **[6:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=361)** (keyboard chattering) All right.
>
> **[6:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=365)** And this is going to have a template here, right?
>
> **[6:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=368)** We're going to actually be able to specify different templates.
>
> **[6:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=372)** So we're going to say greeting cards template.
>
> **[6:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=375)** We'll just call it temp.
>
> **[6:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=378)** And then we're going to have a vector of people.
>
> **[6:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=383)** And these are, are going to be the people that we want to generate greeting cards for okay.
>
> **[6:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=389)** So what we're going to do after that we're going to add a method called send greeting cards Which is basically just going to loop through all of the people in this vector here, generate a greeting card for them.
>
> **[6:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=402)** And we're just going to see this thing here, printed to the console.
>
> **[6:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=407)** All right.
>
> **[6:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=408)** And before that we just need to include vector up at the top there.
>
> **[6:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=416)** And looping through all our people is just going to look like this.
>
> **[6:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=418)** We're going to say auto person, people.
>
> **[7:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=421)** (keyboard chattering) And then we're going to say template generate card for, and just pass that person like that.
>
> **[7:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=432)** Okay.
>
> **[7:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=433)** So that's send greeting cards method.
>
> **[7:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=435)** We're going to add two more methods here.
>
> **[7:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=437)** The first one is going to be an add person method for adding people to this vector here.
>
> **[7:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=442)** We're just going to say, add person.
>
> **[7:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=444)** It's going to look like this.
>
> **[7:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=447)** And we're going to say people pushback person.
>
> **[7:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=452)** All right the other one is going to be a set template method.
>
> **[7:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=456)** And we're going to actually be able to use this to switch out the templates that our greeting card generator is using right?
>
> **[7:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=463)** So we'll be able to have one greeting card generator and we'll be able to switch out whether we want it to generate birthday cards new year's cards, whatever kind of cards it is we're trying to generate.
>
> **[7:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=474)** So this is going to take a greeting card template as an argument.
>
> **[8:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=480)** And it's basically just going to set the template to that new template there all right.
>
> **[8:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=486)** Pretty straight forward.
>
> **[8:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=490)** So now that we have that we just need to have the client code.
>
> **[8:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=494)** And just for the sake of time here I'm going to just copy and paste that test code from the finished state of the exercise files.
>
> **[8:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=502)** And I'll explain it before we go on oops and it looks like we actually forgot to do something with the birthday card and new year's card templates.
>
> **[8:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=510)** We just forgot to update the constructor.
>
> **[8:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=514)** So our birthday card template here we're just going to add a constructor.
>
> **[8:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=519)** That's going to look like this.
>
> **[8:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=520)** It just needs to take a from argument (keyboard chattering) and it will send that up to the greeting card template, (keyboard chattering) All right and the same thing for our new year's card template here oops and we're actually going to want both of these in public Almost miss that.
>
> **[9:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=544)** We're going to add public paste that there and then we'll do the same here, public paste it.
>
> **[9:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=554)** Changes to new year's card template.
>
> **[9:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=558)** Okay and that should do it.
>
> **[9:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=559)** So what we're doing here is we're basically just creating three people.
>
> **[9:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=563)** We're creating a greeting card generator.
>
> **[9:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=566)** We're adding several people to it.
>
> **[9:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=568)** And then what we're doing is we're setting the template for the generator, right?
>
> **[9:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=573)** So basically when we set its template to a birthday card template what it'll do is when we actually call generator send greeting cards, it will use that birthday card template to generate those cards.
>
> **[9:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=585)** And likewise, when we set it to a new year's card template doing it this way it's sort of a mix of the template pattern and the strategy pattern that we learned about if you want to think about it that way.
>
> **[9:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=595)** Okay so let's run this code now And we're going to see that it'll print out several different cards.
>
> **[10:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-a-greeting-card-generator-program?u=76281980&t=604)** All right so we're generating birthday cards here and regenerating new year's cards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), [[Design Patterns]] (2)
> **Exercise Files:** template (32), exercise files (1)
> **CLI Commands:** make (5), find (1)
> **Cross-References:** previous chapter (1), go back to (1)
> **Analogies:** just like (2)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Modifying the card generator
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=5)** - [Instructor] All right, now that we've seen an example of how the template method and visitor patterns can fit together.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=10)** And remember I said that this example kind of included the strategy pattern as well.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=15)** Now that we've seen all that it's time for a challenge.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=17)** Your challenge here is going to be to make a few changes to this code that we wrote previously.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=22)** More specifically, notice that the way we have our code written here, our visitor implementation, that is our greeting card template class here.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=31)** Takes care of all the card generating and sending itself inside this handle person method.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=38)** And this is fine, but it's very likely that there will be situations where instead of directly sending the card content as soon as it's generated, we'll want to actually be able to access these generated strings from elsewhere in the program.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=52)** Right?
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=53)** We'll want to be able to access the text of the cards elsewhere than just in the console.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=59)** Well, as it happens, that's more or less your challenge here.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=62)** To modify the code we wrote here so that instead of our greeting card generator class simply calling template generate card for, for all the people, it actually returns a vector containing a string for each of the birthday cards it generated.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=77)** Right?
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=78)** So we'll be doing something like this where we just create a vector of strings.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=85)** And we'll call this cards.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=87)** And each time we go through here we're going to want to push the result onto these cards.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=93)** And then finally return that from this method.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=96)** All right.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=97)** I'll remove that for now but that's the basic idea.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=99)** So this challenge should take you about 10 minutes tops.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-modifying-the-card-generator?u=76281980&t=102)** And once you've finished it, feel free to move onto the next video where I'll show you how I would go about solving this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Exercise Files:** template (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Solution: Modifying the card generator
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=0)** - [Instructor] Okay, hopefully you've given the challenge a try.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=7)** Now let's take a look at one possible solution.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=10)** The first thing I did here, was to change the return type and name of our method for generating cards.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=18)** Okay, so if we go up here to handle person, we're going to need to change this from a void method to one that returns a string, okay.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=27)** So we're going to change that to virtual standard string handle person.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=33)** All right, and the next thing we have to do is actually change the accept method as well.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=37)** So instead of just being a void method, it'll return a string as well.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=41)** This will help us sort of pass the resulting string for the greeting card up through the classes, okay?
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=49)** And we're going to change this also to return.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=52)** All right, so this is returning a string.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=54)** This is returning that string from this method.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=59)** And the next thing we're going to do here is we're going to change this handle person method.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=64)** So we're going to just change this so that it returns a string as well.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=68)** All right, so instead of writing this to C out, what we're going to to do is we're simply going to say return, intro, plus occasion, plus closing.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=81)** And after that, we're going to head down to our greeting card generator class and make a few changes here.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=87)** So, first of all instead of naming this method send greeting cards, we're going to change it to create greeting cards to make it a little more obvious that we're returning some strings.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=97)** And this is going to return a vector of strings, all right.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=105)** So just like I said in the challenge video, the next thing we're going to do here is we're going to create just an empty vector.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=114)** And we'll call that cards.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=116)** And then we're just going to push the result of calling generate card for onto this card's vector.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=122)** All right, so we're going to say cards, push back, generate card for person.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=132)** And then let's return our cards.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=136)** Now, this is still complaining because what we need to do is go back up to our greeting card template and change the return type of our generate card for method to string and actually return the result of calling person accept this, all right?
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=154)** And that should get rid of that warning.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=157)** And then again, I'm just going to copy and paste the test code from the final state of the code for this video.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=163)** And there it is.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=165)** So you can see instead of just letting our generator generate and just print them to the console, we're actually getting the result that we get from Collin Creek greeting cards and printing it out to the console ourselves, okay?
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=176)** So in other words, our client code now has access to those things.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=181)** So let's run our code.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-modifying-the-card-generator?u=76281980&t=184)** And we'll see that it prints out the greeting cards for all of our people here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3)
> **CLI Commands:** make (2)
> **Exercise Files:** template (1)
> **Definitions:** in other words (1)
> **Analogies:** just like (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Behavioral Patterns Group 3

[↑ Back to Table of Contents](#table-of-contents)

#### The Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=0)** - [Instructor] Okay, the next pattern we're going to look at is called the iterator pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=4)** The iterator pattern is a way that we can allow ourselves to work with different collection data structures in an orderly way, right.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=11)** Think of arrays, linked lists, graphs, trees and so on without caring about the underlying organization of that data.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=19)** The fact is, that different data structures can make it pretty difficult for us when all we want to do is simply iterate through all the items that they contain, right.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=28)** In other words, there are a lot of situations where we only care about getting the next or the previous item in a collection.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=35)** Now the problem is this.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=36)** Depending on the type of data structure we're using, the logic for simply getting the next or previous item in the collection can actually get quite complex.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=45)** So think about if our collection was represented using a tree structure.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=49)** In this situation, not only would there be multiple different ways of iterating through it, for example, we could use either a depth-first or a breadth-first traversal, but the logic for doing these things can also be very complex, right.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=62)** More often than not this leads us to incorporating collection specific logic into our business logic which is, generally, a pretty bad thing.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=71)** So here's the basic idea of the iterator pattern.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=74)** We abstract away the internal organization of our different data structures, and simply provide a single iterator interface that other parts of our program can use to iterate through our collections simply by calling next, without caring about the way that our collections are actually organized, right, without caring that they're a tree, or a list, or a linked list, something like that.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=98)** So here's what this'll look like in a UML diagram.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=100)** As I said, we generally start off by creating an iterator interface that the rest of the app can use to iterate through different structures, and this interface usually provides next and is finished methods, and sometimes the previous method as well, although that's usually more of a convenience than an actual necessity.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=119)** And once we have this interface the other parts of our app can then use these methods to iterate through any collection, regardless of how the collection is actually organized behind the scenes.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=131)** And the way that we do this is by creating different implementations of this iterator interface for each different method of traversal that we want for all of our various collections.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=142)** So for example, we might have a DepthFirstTreeIterator, a BreadthFirstTreeIterator, for iterating through elements of a tree, we might have a ListIterator, for iterating through a list, and so on, so forth, right.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=155)** And notice, here, that a single type of collection can have several different kinds of iterators, right, depending on, again, the order in which we want to iterate through a given collection.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=166)** And another thing to note about these iterators is that each of them keeps track of where it's currently at in iterating through the collection, and that makes it possible for us to have several different iterators that are all iterating through the same collection at the same time, but are at different spots in the collection.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=183)** And there's one last piece to this pattern, and that is that the iterators for a given collection are usually created by the collections themselves.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-iterator-pattern?u=76281980&t=191)** So our tree collection might have, you know, like getDepthFirstIterator, again, BreadthFirstIterator, it might have those methods that return those respective iterators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), data (5), business (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is called (1), is a  (1), in other words (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** getdepthfirstiterator (1)
> **Env Vars:** uml (1)
> **Speakers:** - [instructor] (1)

#### Implementing the Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=0)** - [Lecturer] Okay.
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=1)** So we've seen the basics of the iterator pattern.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=3)** Now it's time for a coding example.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=5)** For this example we're just going to use the very simple case of using iterators to allow ourselves to iterate through a series of elements in different orders.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=14)** Alright.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=15)** So let's start off here.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=18)** There's no starting code for this one, really except for just the main method.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=21)** So let's start off by defining an iterator interface.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=25)** We're going to define more of a specific iterator here.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=28)** We're going to define a number iterator.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=31)** Alright and this is going to allow us to iterate through collections of integers.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=36)** Alright.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=38)** So it's going to look like this.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=38)** It's going to have a virtual distructer to it just because of how we're going to be extending it.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=47)** We're going to add a next method to it.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=49)** Right?
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=50)** Remember that the client code will be able to call this next method to get whatever the next item is in the iteration.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=57)** And finally, we're going to add a Boolean function called is finished Which will return whether or not there are more items in the area.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=66)** Okay.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=68)** So that's our number iterator interface and note here that it would be perfectly possible to make this a generic class so that it would work with different data types.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=75)** Right?
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=77)** So we could just call it iterator in that case but just for the sake of simplicity here, we're just going to use integers.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=84)** So let's define now some concrete implementations of this number iterator interface.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=89)** Specifically, what we're going to do here is we're going to define two different iterators one for iterating through a vector of numbers forwards and one for iterating through a vector of numbers backward.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=102)** Here's what that is going to look like.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=104)** We're going to start off by defining our forwards iterator, public number iterator And we'll have a backwards iterator too.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=116)** Backwards iterator.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=119)** Public number iterator.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=122)** Add semi-colons after both of those.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=125)** And the forwards iterator is going to look like this.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=128)** We're going to have a current position member variable which keeps track of where in the iteration we currently are.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=135)** And then we're going to have a reference to a vector of integers and we'll call that numbers.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=143)** Okay.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=144)** So what we're going to do and now is implement the next in its finished methods from the number iterator interface.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=150)** And that's going to look something like this.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=152)** We're going to say int next.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=157)** And what we're going to do here is we're going to say int current equals numbers.at current position.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=168)** Alright, we're going to increment the current position.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=172)** And lastly, we're going to return the current element that we got here.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=177)** Alright.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=179)** And another thing we have to do is define a constructor here.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=183)** And the constructor is just going to take a vector reference like this called numbers.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=192)** and it's going to initialize the current position to zero and set numbers to numbers.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=204)** Oops.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=205)** So we have to include the vector here.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=207)** There we go.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=209)** Alright.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=210)** So we have our next method, which basically just steps through the vector one by one.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=215)** So the other thing that we have to define now is the is finished method.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=219)** So we'll say Boule is finished, override and we're simply going to return for this, whether or not the current position is greater than or equal to numbers.size.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=234)** And that is our forwards iterator.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=235)** So if we wanted to make a backwards iterator it's actually going to look pretty similar, but the logic is going to be slightly different for doing so.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=244)** Alright.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=245)** So really the only thing we have to change here.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=249)** Well, first of all, we need to change the constructor so that it matches the name and the other thing that we have to change, we just have to change numbers.at current position, to numbers.at numbers.size minus current position minus one.
>
> **[4:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=266)** And that will give us the element that we're looking for in a backwards fashion.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=271)** Alright.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/implementing-the-iterator-pattern?u=76281980&t=272)** So as current position is incremented we'll go backward through the vector.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (6), generic (1), data (1)
> **CLI Commands:** make (2)
> **Speakers:** - [lecturer] (1)

#### Using iterators
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=0)** - [Narrator] So that's our backwards iterator.
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=1)** Pretty simple.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=3)** Now the last thing we're going to do is define A class that will actually create these iterators for us.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=9)** So we'll call that class number collection, right, and it's just going to have a vector of integers called numbers.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=22)** And it's going to have a few methods the first one is going to be the constructor that we'll use to create a new number collection.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=29)** That's going to look like this and that's going to initialize numbers to numbers.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=41)** And the next thing we're going to do is define some methods for creating forwards and backwards iterators from this number collection.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=49)** That's going to look something like this.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=50)** We're going to say number iterator.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=54)** We'll call this one, get forwards iterator.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=58)** We'll say return new forwards iterator.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=64)** And we'll pass our numbers as an argument there.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=67)** And the other thing is we're going to return a backwards iterator and we'll call this, get backwards iterator.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=75)** And we're going to return a new backwards iterator from that with numbers as an argument.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=86)** Okay, and that's all we need to do to use these classes now.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=90)** What this is going to look like is we're going to start off by creating our vector of numbers.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=98)** All right, we'll just use one, two, three, four, five, six, seven for that.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=103)** And under that, we're going to create a new number collection.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=107)** We'll call it NC and we're going to pass our numbers vector to that as an argument.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=113)** And next step, we're going to create our forwards and backwards iterators.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=118)** So we're going to say number iterator we'll call this fi equals nc.getforwardsiterator and we'll create a backwards iterator by saying number iterator.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=134)** We'll call it BI for backwards iterator and we'll say nc.getbackwardsiterator.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=141)** And now that we have those what I'm going to do is just copy and paste the test code from the finished state of the exercise files.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=151)** So all that's going to do is just loop through the vectors, print out what they contain, et cetera.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=159)** And then at the bottom here, what we're going to do is just delete our iterators that we created so delete fi, delete bi.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=169)** All right, and let's run our code.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=174)** Oops it looks like I forgot an equal zero somewhere.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=179)** There we go.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=181)** That needs to say equal zero.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=184)** That should say it equals zero.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=186)** Let's try it again.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=189)** And there we go.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=192)** So we see that the output here is exactly what we'd expect except now the logic for actually iterating through the collections in different ways is contained inside its own class.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=204)** Right? Because normally what we would have had to do if we wanted to iterate through our numbers collection here would be to actually have the current position variable here as well as all that logic contained in the client code which can get very messy as you might I'd imagine.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=222)** And the same thing that we did for the forward iterator and the backwards iterator would be true if we wanted to create another iterator for doing something like iterating through our elements in a random order.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-iterators?u=76281980&t=232)** And that might be a fun sort of challenge project for you to work on in your own time if you're interested.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), bi (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### The Memento pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=0)** - [Instructor] Okay.
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=1)** It's time to take a look at our next pattern which is called the memento pattern.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=5)** The memento pattern is used when we need a way to prevent most parts of our program from modifying some saved object until we say so.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=12)** As an example of this, earlier in the course when we looked at the command pattern, we used the example of a hypothetical drawing program.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=21)** Now, if we wanted to give users the ability to undo their actions in a program like this, what we'd need is some way of freeze-drying the different states that the canvas had been in, in order to allow us to restore those states.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=33)** And we'd want to prevent other objects in the program from tampering with these saved states, right?
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=39)** Think about how frustrating it would be if you clicked Undo and the state that it went back to was a little different from the one you actually had before.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=47)** So the memento pattern is used as a way to temporarily freeze data in our programs and then unfreeze it later on when we need to actually use it again.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=57)** Essentially what the memento pattern does is it makes sure that certain pieces of data in our programs are only modified when they're supposed to be modified.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=67)** So that's the basic goal of the pattern.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=69)** Here's a more concrete description of how this pattern works using a UML diagram.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=75)** First of all, we're going to create a memento interface that acts as a sort of snapshot, right?
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=80)** This interface allows other parts of the program to get basic information about the snapshot.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=85)** Such as a name and a time for the snapshot.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=88)** Although these things aren't even a necessity.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=91)** But what the memento interface does not allow is for any other part of the program to make changes to the data it contains.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=100)** So once we have this memento interface, the client code then needs to know how to save or freeze data into a memento.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=108)** As well as how to unfreeze the data that it contains.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=111)** So if we're implementing a drawing program, whenever some sort of change is made to the canvas, right?
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=116)** If the user draws a shape, for example, the program will generally freeze the previous state of the canvas into a memento object, right?
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=124)** This will usually be done with some sort of create memento method or save method.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=130)** And then if the user wanted to undo that action, what the program would do would be to unfreeze that memento and restore the previous state to the canvas, right?
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=139)** Where you could actually change it again.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=141)** And this would be done here using some sort of restore state method of our canvas state class which we would then pass a memento as an argument.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=151)** And lastly, the rest of the program, the history mechanism, for example, would only interact with these canvas state mementos through the memento interface we created.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=162)** Right?
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-memento-pattern?u=76281980&t=163)** So it wouldn't be able to make any kind of changes to those snapshots that we've taken of our state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), next (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (2)
> **Env Vars:** uml (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Creating a Memento class
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=0)** - Now that we've learned the basics of the memento pattern.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=2)** Let's take a look at an example of what this pattern is going to look like in code.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=6)** For this, we're going to be looking at the example that I mentioned earlier of implementing undo functionality for a certain theoretical drawing program, using the memento pattern to save the canvases state at different points in time.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=21)** So here's what this is going to look like.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=22)** For our starter code, we just have a basic canvas class that keeps track of the different shapes we've added.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=28)** This is pretty much the same starting code we used for our command pattern example back near the beginning of the course.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=35)** What we're going to do now is we're going to start off by creating a canvas memento class.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=41)** And the memento class is going to look like this.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=45)** We're going to say class canvas memento.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=50)** And then we're going to designate this canvas class as a friend class.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=54)** That means that only the canvas class will have access to the private members of our canvas memento class.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=62)** And you'll see why that's important in just a minute here.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=65)** So we're going to say friend class canvas.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=70)** And that means we're going to have to forward declare canvas up here.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=73)** So we'll say class Canvas, there we go.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=76)** OK and, the next thing we're going to do is give this a constant vector of strings, which is going to contain the shapes, right?
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=83)** And we designate this as constant so that nobody can actually change it, right?
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=88)** That's kind of the purpose of a memento, is that we don't want there to be any way for classes other than the one that actually works with these things, to be able to modify it.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=98)** And that shapes is a private variable, which means that only the canvas class now will have access to it.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=105)** So for public, all we need to do now is to find a constructor.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=109)** We're going to say, vector string.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=113)** I'm going to call it shapes.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=114)** And that's going to initialize shapes as shapes.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=119)** Oops and we should call this canvas memento, shouldn't we?
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=125)** And one more thing.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-a-memento-class?u=76281980&t=126)** There we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** find (1)
> **Exercise Files:** starter code (1)
> **Speakers:** - now (1)

#### Using Memento classes
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=0)** - [Instructor] So that's our canvas memento.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=2)** Pretty straightforward.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=3)** So the only other thing we have to do now to implement undo functionality in our canvas, is add a vector of CanvasMementos to our Canvas class, as well as an undo method that will use the mementos to restore the old state to the canvas.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=19)** Here's what I mean by that.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=21)** We're going to first add a vector here of CanvasMemento pointers of CanvasMemento pointers and we're going to call that oldStates, and then inside our addShape method, we're going to actually incorporate this Memento thing here by saying oldStates.push_back.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=43)** by saying oldStates.push_back.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=46)** We're going to add a new element to our oldStates, and we're going to create a new CanvasMemento with the shapes that are currently in the Canvas' shapes member variable here.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=58)** All right, and now that we've done that, we're going to add an undo method to our Canvas.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=64)** We're going to say void undo, We're going to say void undo, and we'll say CanvasMemento previousState = oldStates .back.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=73)** and we'll say CanvasMemento previousState = oldStates .back.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=79)** We're going to say oldStates.pop_back We're going to say oldStates.pop_back to delete that state that we just undid, and then we're going to say shapes = previousState.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=91)** Oops, that should be previousState, not previousStates.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=95)** We're going to say previousState, shapes, and then we're going to say delete previousState.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=103)** Okay.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=104)** So what we're doing here is we're just looking one back in the CanvasMemento vector that we have here, and using that memento to restore the old state and using that memento to restore the old state to our canvas.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=116)** Okay, and one more thing that we're going to do here, is we're going to add a destructor that will just delete all of the old states when our Canvas is deleted.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=128)** We're going to say destructor Canvas, and then inside here, we're going to just loop through all of our pointers.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=137)** I'm going to say auto p oldStates.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=138)** I'm going to say auto p oldStates.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=142)** Delete P and then we'll call oldStates.clear as well.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=143)** Delete P and then we'll call oldStates.clear as well.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=149)** All right, so now we move on to the client code, and for the client code, I highly recommend that you just copy and paste that from the finished state of the exercise files, because it's a little bit lengthy, and we're going to paste it here and it'll look just like that, and let's remove this "Hello, World" thing as well, and let's run our program and see what it does.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=175)** Okay, so we see that our program works just like we'd expect it to, right?
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=180)** We add a bunch of shapes. We print out all the shapes.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=184)** We call canvas undo, which goes back one step, right?
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/using-memento-classes?u=76281980&t=187)** So that's what we're seeing here, and then we print it out, and then we add some more shapes and call undo, and we see the result of those actions here, and once again, the importance of this memento pattern is that it just gives us a nice, secure way to store the old states and data to store the old states and data that we don't want to be modified.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **Code Identifiers:** oldstates (12), previousstate (6), push_back (2), pop_back (2), addshape (1)
> **Analogies:** just like (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### The Null Object pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=0)** - [Instructor] Okay, let's move on to the final behavioral design pattern of this course, the Null Object pattern.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=7)** The Null Object pattern is used when we need to define some sort of default behavior for an object so that other objects can interact with it without worrying about whether it exists or not.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=18)** Okay, so let's imagine for a minute that we're writing some sort of class that implements some sort of process, right?
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=24)** And we want to allow whatever code is using this class to write the progress of this process to a variety of different places, right?
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=33)** So maybe we want to write the results to the console, maybe we want to write it to a file, to an API, or so on.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=41)** Or if they didn't care about the results, they could simply specify no logger at all.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=47)** So at this point, the program would probably look something like this.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=49)** We might have a Logger interface with a log method that our code could call to write some result to whatever the client's chosen destination is.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=58)** And what we do then is we'd have a number of subclasses that would implement this interface, right?
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=63)** So we might have a ConsoleLogger class, a FileLogger, an APILogger class, et cetera.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=69)** So far so good, right?
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=70)** The client code can simply provide an instance of any of these classes depending on where it wants the results to be logged to.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=78)** The issue here though is that as we stated before there's a possibility that the user might not want to specify any logger here at all, which would mean that the logger would be NULL.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=88)** And what this means is that everywhere we want to call logger write, we'd have to wrap it in an if statement and check to make sure that logger isn't NULL, which obviously is a bit of a drag.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=99)** So in general, this situation occurs whenever it's possible that an object doesn't exist, right?
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=105)** If we're expecting that the object might be NULL, this logic generally makes its way into the rest of our logic for interacting with that object.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=113)** And the result of this is that you have at least one, you know, if object check somewhere in each piece of code that interacts with it.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=121)** So that's the issue.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=122)** Here's the basic idea of the Null Object pattern.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=126)** Basically, instead of having null checks all over our client code, what we do is we define what's called a Null Object, which provides the same methods and so on, but essentially does nothing, or implements some sort of safe default behavior.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=142)** So in the case of our Logger example, what we do is we would define a NullLogger, which would simply do nothing when it's write method or log method, or whatever we end up calling it was called.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/the-null-object-pattern?u=76281980&t=152)** And this would allow the client code to interact with it like normal without worrying about whether the object is actually there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** null (3), api (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Creating Null Object classes
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=0)** - [Instructor] All right, now that we've learned the basics of the null object pattern, let's take a look at an example of what this pattern might look like in code.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=7)** For this we're going to use the example I talked about earlier of allowing the client code to specify different ways of logging data.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=15)** So if we look at the starter code for this video, we're going to see that we have this lager interface here, as well as these different implementations of it, and then we have this SomeTask class, right?
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=25)** Very creative name, that in theory would perform some sort of work and write the progress of that work to whatever type of logger the user specifies when they create the task.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=37)** Now, the problem here is that the user might not want to specify any logger, so they just call the default constructor of our SomeTask class, which would mean that the logger would be a no pointer.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=49)** And we therefore have to check for this whenever we call our loggers log method as you can see here.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=55)** All right, and this isn't too bad but it is a bit of a pain.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=58)** So what we can do instead, using the null object pattern, is we can define a null logger that simply does nothing, right?
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=67)** We have our console logger that logs to a console.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=69)** We have our file logger, we have our API logger.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=72)** We're going to just define a null logger that does nothing.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=78)** And here's what this null longer is going to look like.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=81)** It's actually going to be very simple, we're just going to define a log method.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=86)** It's going to look exactly like the other methods on our other logs, except for the body, the body of this method is just going to be empty, okay?
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=100)** So basically, just to find something that we can call that doesn't really do anything in this case.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/creating-null-object-classes?u=76281980&t=106)** There will be cases where you'll want your null class to actually do something, we'll see some examples of that shortly, but in this case, it's simply does nothing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), api (1)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Exercise Files:** starter code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Setting null objects as the default
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=1)** So now that we have our NullLogger, what we need to do is modify our SomeTask to make the NullLogger the default value for this logger member variable.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=10)** All right, so all we really need to do here is create a SomeTask constructor with no arguments, and inside here we're just going to say logger equals new NullLogger.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=25)** All right.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=27)** And now that we have that, we don't have to actually check if our logger exists every time, because it will always exist provided that the client code doesn't do something like pass in a null pointer for the logger.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=39)** All right.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=41)** So we're just going to remove our if statements and save it.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=49)** And for our clients code what we're going to do is just create different loggers.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=53)** So we're going to say SomeTask, task one.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=57)** And for this one, we're just going to pass a ConsoleLogger .
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=61)** All right, we're going to have SomeTask, we'll call this task two.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=66)** And to this one, we'll pass a new file logger.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=70)** And our FileLogger class expects us to pass in a file name here.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=73)** So we'll just say something like logs.txt, and then we'll have our SomeTask task three, which we'll use an API logger, and it'll send it to something like logging [site.com/api/logs](https://site.com/api/logs) something like that.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=92)** Normally this would be where we put the address of our REST API.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=97)** And last but not least, we're going to define a task without a logger which will be task four.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=103)** And for this one we'll simply define it like that.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=109)** So now if we call task.execute on all of these.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=113)** Right?
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=114)** So if we say task1.execute, task2.execute, task3.execute, and task4.execute, and run our code,
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=132)** we're going to see that we get stuff logged out to the console.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=136)** Well, all of these are logged out to the console.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=138)** Although in the real world we'd have our FileLogger actually write this stuff to a file instead of the console, but just for the sake of demonstration, this is what I did.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=147)** So we see that the ConsoleLogger is working, the FileLogger is working.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=151)** The API log is working.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=152)** Oops, we didn't delete this hello world thing here.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=157)** And we don't see anything printed out for the NullLogger because that's exactly the point.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=162)** All right.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=163)** So that's how the Null pattern works.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=165)** We're going to see another example of this shortly, just of how the null object pattern works in a different context.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=173)** And in that case, this methods will actually do something without doing something.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/setting-null-objects-as-the-default?u=76281980&t=177)** You'll see what I mean when we get there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (4), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (3), rest (1)
> **File Paths:** logs.txt (1)
> **CLI Commands:** make (1)
> **URLs:** [site.com](https://site.com) (1)
> **API Endpoints:** /api/logs (1)
> **Speakers:** - [instructor] (1)

#### Project: Create an instant replay program
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=0)** - [Instructor] Okay, well, we just learned about three more design patterns and we also saw some individual examples of each of them.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=6)** What we're going to do now, just like in the other sections, is take a look at an example that combines some of them.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=12)** And we're not going to be doing all of them here, again, since that would take us a lot of time in order to actually come to the point where our program would be the size that needs it, but what we're going to do is we're going to start off, again, mixing two of the design patterns together, and then we're going to incorporate the third pattern in a challenge solution video.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=30)** So the program we're going to be writing here is going to be an extension of the drawing program that we saw when we talked about the memento pattern.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=38)** And we're going to start off by mixing this example together with the iterator pattern that we saw.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=43)** And the end result is going to be a program that will allow users to do a sort of instant replay of the changes that have been made to a given canvas in our drawing program.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=53)** So in other words, we stored up the history of a canvas.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=56)** Wouldn't it be nice if we could use that and actually just have a feature in our program where we could watch those shapes being drawn over again?
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=64)** So that's the idea anyway, let's see how to implement that here.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=68)** So we're going to start off actually by copying and pasting a lot of this code from our memento pattern example, and you can find this in the finished exercise files for that video if you don't have it on hand.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=82)** We're going to copy that and paste it here.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=84)** And now that we have that, we're going to make a few changes to this code.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=87)** The first thing we're going to do is we're going to add a canvas iterator interface.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=93)** So here's what that's going to look like.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=96)** Just up at the top here, we're going to say class CanvasIterator.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=102)** And it's going to have a few public methods.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=104)** The first one is just going to be a virtual destructor that we're going to need because of how we're going to be extending this class.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=113)** And then we're going to have a next method and an isFinished method, just like we saw in the examples we looked at with the iterator pattern.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=121)** So we're going to say virtual and this is actually going to return a canvas memento and this pattern is going to be called next.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=133)** Here we go.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=134)** And we're going to have a virtual boolean isFinished.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=140)** We got to move the declaration for CanvasMemento up above that.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=148)** So now that we have our canvas iterator interface, let's define an implementation of that and we'll call it forward iterator.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=155)** So we're going to say class ForwardsIterator public CanvasIterator, and what we're going to be using this class for is for allowing ourselves to replay the changes that a user has made to a given canvas.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=170)** And to save ourselves a little bit of time, what we're going to do is go over to the finished code from the iterator pattern, which you can find in the exercise files.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=177)** And we're just going to copy the logic from our ForwardsIterator there.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=182)** We're going to have to make a few changes to it, but this is the basic logic that we're going to be using here.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=187)** Just the same.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=188)** So the first change is that instead of having a vector of integers, this is going to be a vector of canvas memento pointers, and we'll call this history.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=200)** And likewise, oops, it looks like I called it ForwardsIterator, so let's change that to ForwardsIterator.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=206)** And then we need to change this int here to a canvas memento pointer as well, change that named history, and change this to history, history.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=219)** And then to make it match the interface here, we're going to change it from int next to CanvasMemento pointer next.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=228)** We're going to change this to history and we're going to change this to history as well.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=235)** Okay.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=237)** And this just needs to be a canvas memento pointer as well.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=242)** And the next thing we're going to do is this: our canvas class is currently taking care of all of its own history management, so what we're going to do actually is we're going to break this history, tracking out into its own class.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=255)** And what this will allow us to do is to sort of take the history from one canvas and plug it into another class.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=262)** And as you'll see that'll allow us to create the canvas replay class that we're talking about.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=267)** So here's what this is going to look like.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=270)** We're going to create a new class called history, and this is just going to be an interface.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=276)** And it's going to have two methods.
>
> **[4:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=277)** One is going to be a virtual void called addState, that'll just allow us to push whatever changes we've made to a canvas into this history here, and this is going to take CanvasMemento called newState.
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=294)** And under this, we're going to have a virtual CanvasMemento method called undo.
>
> **[5:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=302)** What this is going to do is it's going to return a canvas memento representing the previous state of the canvas.
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=310)** So we have our history interface.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=311)** Now let's create an implementation of it.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=313)** This implementation is going to be called canvas history, so class CanvasHistory, I'll say public History.
>
> **[5:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=322)** And this is going to contain a vector of canvas mementos, which is going to be the old states that we've saved to the history, so we'll say oldStates like that.
>
> **[5:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=334)** And then, for the public methods, the first one we're going to define is just a destructor for deleting all of the old states when the program is over or when the canvas history is destroyed.
>
> **[5:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=344)** So we're going to say CanvasHistory, then we're going to loop through all the pointers in our states and delete them, and then we'll call oldStates clear, and that's our destructor.
>
> **[6:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=360)** Next step, we have our addState method, which is going to look like this: CanvasMemento newState, I'm going to say override, and all we're going to do in here is just say oldStates.push newState.
>
> **[6:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=381)** And then for the undo method, we're going to say CanvasMemento undo override, and we're going to push the old states back.
>
> **[6:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=388)** So we're going to say oldStates.pop back.
>
> **[6:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=391)** We're going to get the last state in our vector, which will be the previous state of the canvas.
>
> **[6:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=398)** So we're going to say CanvasMemento previousState equals oldStates.back, and then we're just going to simply return that previous state.
>
> **[6:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=414)** And the last thing we're going to do is define a method called get forward iterator.
>
> **[6:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=419)** So we'll say ForwardIterator, getForwardIterator, and we'll say return new ForwardIterator oldStates.
>
> **[7:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=434)** Oh, that should be ForwardsIterator and ForwardsIterator.
>
> **[7:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=440)** And now that we've implemented this canvas history, what we're going to do next is we're going to revector our canvas class to actually use this history class instead of its inbuilt history class that it already has.
>
> **[7:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=453)** So what we're going to do, we're going to remove our oldStates thing here and replace that with a history pointer.
>
> **[7:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=460)** And then for our constructor, what we're going to allow ourselves to do is pass a history instance into this class.
>
> **[7:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=468)** So we're going to say history history, and we can remove this destructor here, since we don't have our old states to delete here, we're doing that in our history class up above.
>
> **[8:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=482)** And then for our add shape method, we're going to do something a little different.
>
> **[8:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=486)** We're going to push the new shape onto our shapes vector, and then after that, we're going to say history addState, and we're going to add a new canvas memento to that, containing the current state of our canvas.
>
> **[8:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=502)** And then here for our previous state, instead of saying oldStates.back, we're going to say history undo like that, We don't have to worry about our old states here, either, and we're just going to set the shapes to the shapes of the previous state.
>
> **[8:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=518)** And we're actually going to remove this previous state thing since we don't actually need to delete it ourselves.
>
> **[8:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=524)** And for clear all, we want to actually do the same thing as we did in addShape, after we clear our shapes, we're going to call history addState with the new state, and we'll leave getShapes as is.
>
> **[9:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=541)** Now that we've revectored our canvas class, the last thing we're going to do is we're actually going to create this canvas replay class that will be responsible for replaying the history of another class.
>
> **[9:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=554)** So as it happens because of the work we've done with all our other classes, this is actually going to be very simple.
>
> **[9:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=559)** Here's what it's going to look like.
>
> **[9:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=560)** We're going to say class, we'll call this ReplayCanvas.
>
> **[9:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=567)** It's going to have a vector of strings just like a normal canvas called shapes.
>
> **[9:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=572)** It's going to have a forward iterator called historyIterator.
>
> **[9:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=579)** It's going to have a constructor that allows us to pass the history from another canvas into it.
>
> **[9:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=584)** So we're going to say CanvasHistory history, and what we're going to do is we're going to get the iterator from this canvas history and set it on our member variable here.
>
> **[9:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=595)** So we're going to say historyIterator equals history getForwardsIterator.
>
> **[10:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=604)** After that, we're going to say void replay.
>
> **[10:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=607)** This will be the method that we call to actually trigger the canvas replay.
>
> **[10:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=612)** And all this is going to do is just say, so while historyIterator is finished, we're going to get a pointer to the next state.
>
> **[10:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=625)** So CanvasMemento nextState equals historyIterator next,
>
> **[10:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=634)** we're going to say shapes equals nextState shapes.
>
> **[10:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=638)** We're going to print out the shapes, so we'll say, cout and something like the shapes are now, and then we'll loop through all our shapes and print those out.
>
> **[10:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=650)** So we'll say auto shape shapes cout, and we'll just print the shape, as well as a comma after that.
>
> **[11:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=663)** And then we'll print a new line just to keep things cleaner.
>
> **[11:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=669)** So that's our replay method.
>
> **[11:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=670)** And we're going to have to add this replay canvas class as a friend class to our canvas memento.
>
> **[11:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=677)** So we're going to say friend class ReplayCanvas, we're going to have to just add a forward declaration for replay canvas up here, and a semicolon after our class, and then for the client code, I'm just going to copy and paste that as I've usually done from the finished state of the exercise files for this video.
>
> **[11:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=699)** Feel free to do the same.
>
> **[11:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=701)** And it's going to look like this.
>
> **[11:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=702)** We're going to create a new canvas history.
>
> **[11:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=705)** We're going to create a new canvas with that history, right?
>
> **[11:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=708)** We pass that into the constructor.
>
> **[11:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=710)** And then we're going to add a few shapes to the canvas.
>
> **[11:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=713)** We're going to watch the replay.
>
> **[11:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=715)** We're going to create a replay canvas with the same history that we passed to our canvas here.
>
> **[12:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=721)** And then we're going to call replay canvas replay.
>
> **[12:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=723)** And that should print out each of the individual states from our canvas.
>
> **[12:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=728)** So let's run this code and see what happens.
>
> **[12:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=735)** Okay, so there we have it.
>
> **[12:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=736)** We see watching replay, we see the shapes are now rhombus, shapes are now rhombus, triangle, rhombus, triangle, square, rhombus, triangle, square, circle.
>
> **[12:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=744)** So it's stepping through each state in the history of our canvas.
>
> **[12:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=750)** So hopefully you've enjoyed this example.
>
> **[12:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/project-create-an-instant-replay-program?u=76281980&t=751)** Again, it combined the iterator pattern with the memento pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (9), [[Design Patterns]] (2), feature (1), management (1)
> **Code Identifiers:** oldstates (8), addstate (4), historyiterator (4), newstate (3), isfinished (2)
> **CLI Commands:** make (3), find (2)
> **Exercise Files:** exercise files (3)
> **Analogies:** just like (3)
> **Cross-References:** we talked about (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Apply the Null Object pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=0)** - [Instructor] Okay, so now that we've seen an example of how the iterator and momento patterns can fit together, it's time for a challenge.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=12)** Your challenge is going to be to incorporate the null object pattern into this code alongside the other patterns.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=18)** Basically, what we want to do is allow the client code to pass in a null object version of this history interface that we created here and pass that into our canvas class in such a way that it doesn't actually do anything, but it also doesn't disturb the normal functioning of our canvas class, right?
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=35)** We should still be able to call all of our methods and it should still work without causing any errors or anything like that.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=42)** Now the main rule here is that you're not allowed to modify any of the existing classes that we have here.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=47)** You're only allowed to modify the client code and add another null class, right?
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=53)** So it's going to look something like this.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=54)** We'll just say class, null history, public history.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=61)** You're only allowed to edit this class.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=63)** So this challenge should take you about 10 to 15 minutes.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/challenge-apply-the-null-object-pattern?u=76281980&t=66)** Once you've finished it, feel free to move on to the next video where I'll show you how I would go about solving this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Apply the Null Object pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=0)** - [Instructor] Okay, hopefully you've given the challenge a try.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=7)** Now let's take a look at one possible solution.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=10)** So basically what I did here with the null history, was based on the idea that in order for a null history to really be believable and not disturb the normal functioning of the canvas, it has to store some sort of canvas memento so that when we call history undo in our canvas, nothing will actually happen, right?
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=30)** So if our null history thing just returned a null pointer for this, that would definitely disturb the normal functioning of our canvas.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=38)** Let me show you what I mean by that.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=40)** Basically, in order to make the null history thing work, what I did was I gave it a canvas memento member variable called state.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=48)** And basically what this null history class is going to do, is when the canvas class calls add state, it's simply going to set whatever canvas memento we pass there to this member variable, and whenever we call undo, it's just going to return this member variable.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=67)** That might not make complete sense yet, so let me show you what that's going to look like.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=70)** First, let's have our constructor, and inside our constructor we're actually going to set the initial value of this state to just an empty canvas memento.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=82)** Just like that.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=85)** And then for our add state method, that's going to look something like this.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=89)** It's going to take a canvas memento pointer as an argument, new state, and it's simply going to set this state variable to that new state, all right?
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=98)** So state equals new state.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=101)** And then for our undo method, we're going to say canvas memento, undo.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=108)** And we're going to say return state, like that, all right?
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=112)** So we're simply just going to return whatever the last state was that the canvas added to our history.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=119)** And that's really all we need to do to implement a null history in this state, since from the point of view of the canvas, this null history will actually do nothing, all right?
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=128)** So let's go down and do the client code here, and we're just going to change this canvas history thing to null history.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=141)** Null history.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=142)** And we're passing that into the canvas, so the canvas is now using this null history as its history.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=148)** All right?
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=149)** And we're adding some shapes here.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=151)** And instead of doing the replay, what I'm going to do again is just copy and paste the finished state of the code from this video.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=160)** And that's going to look like this.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=163)** So basically what we're doing here is we're just printing out all the shapes, we're trying to call canvas undo, and we're printing out the shapes again to see what happens there, all right?
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=174)** So if we run our code, we're going to see that after adding all our shapes here, we have them all inside the canvas, we're trying to call canvas undo, and we see that after we've called that, we still have the same shapes.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=191)** So essentially this null history from the point of view of our canvas is doing nothing.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=196)** And one last thing I want to point out here is that the null object pattern doesn't necessarily mean that the class actually does nothing as we've seen here, right?
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=204)** We've seen an example with our logger, where the null object class is literally just going to have an implementation of a method with nobody whatsoever, but that's not always the case, right?
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/solution-apply-the-null-object-pattern?u=76281980&t=214)** As we've seen here, sometimes we have to put a little bit of thought into our null objects to make it look like they're doing nothing, when actually they're doing a little bit of something behind the scenes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=0)** - [Shaun] Well, we've come to the end of this course and we've covered quite a few topics.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=4)** We covered the 12 different behavioral design patterns in C++.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=8)** We learned how to apply each of them and we saw several examples that incorporated these patterns.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=14)** So, now that you've completed this course you might be wondering where to go next?
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=18)** Well, there are several things that I would recommend for you.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=21)** First and foremost, I'd recommend that you immediately start practicing everything you've learned here in your own day-to-day programming.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=28)** This will allow you to apply your knowledge to solve your own problems which, obviously, is a very important thing.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=34)** And besides that there are also other courses in the library that would complement this one nicely.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=38)** In particular, Emma Chu Stone's course on creational design patterns in C++ would be a fantastic next step for you to expand your object oriented programming skills, if you haven't seen it already.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=50)** Another possible next step too, if you're looking for a good book on the topic would be a book called Design Patterns: Elements of Reusable Object-Oriented Software.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=59)** This book is where most of the design patterns that we've learned about in this course originated.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=63)** So, if you want an even more thorough treatment of this topic, be sure to check that book out.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=68)** Well, thank you so much for watching.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=70)** If you want to get in touch with me, please don't hesitate to connect with me on LinkedIn.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=73)** I'm on LinkedIn quite often and would love to hear any questions or comments from you.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=78)** Or if you just want to say hi, that's okay too.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-behavioral/next-steps?u=76281980&t=80)** Well, thanks again, and I hope you enjoyed the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (4), next (3), [[Programming]] (2), [[LinkedIn]] (2)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Speakers:** - [shaun] (1)


## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available

## Skills Covered

- Software Design Patterns
- C++

## Path Context

### In [[Master C++]]
← [[Test-Driven Development in C++]] | **4 of 6** | [[C++ Design Patterns- Creational]] →

## Appears In

- [[Master C++]]

## Related Courses

_Courses sharing skills:_

- [[C++ Design Patterns- Structural]] — Software Design Patterns, C++
- [[Nail Your C++ Interview]] — C++
- [[Web Servers and APIs using C++]] — C++
- [[Learning C++]] — C++
- [[Introducing Functional Programming in C++]] — C++

---

[↑ Back to top](#)