---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: node-js-design-patterns
url: "https://www.linkedin.com/learning/node-js-design-patterns"
duration_minutes: 130
duration: 2h 10m
level: Intermediate
updated: 5/23/2024
learners: 17819
skills:
  - Software Design Patterns
  - Node.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE6vGHZnHaXzw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567116779604?e=2147483647&amp;v=beta&amp;t=m6fLqYMbRjFvaxUtfNU3aA_Ctf9qUDjiPOjwWoEvQfg"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance your Node.js Skills]]'
prev_courses:
  - '[[Node Js Security]]'
next_courses:
  - '[[Node.js- Testing and Code Quality]]'
path_nav: '[{"path":"Advance your Node.js Skills","position":2,"total":8,"prev":"Node Js Security","next":"Node.js- Testing and Code Quality"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/software-design-patterns
  - skill/node-js
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Node.js-%20Design%20Patterns.md)

![Node.js: Design Patterns](https://media.licdn.com/dms/image/v2/C4E0DAQE6vGHZnHaXzw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567116779604?e=2147483647&amp;v=beta&amp;t=m6fLqYMbRjFvaxUtfNU3aA_Ctf9qUDjiPOjwWoEvQfg)

# Node.js: Design Patterns

> Design patterns encourage programming efficiency and code reuse. Learn how to use the same design patterns used in Java and C++ programming in JavaScript. This course is a look at 13 of the most popular object-oriented design patterns as applied to Node.js. Learn essential creational and structural patterns to help solve common coding challenges, while introducing best practices that will keep sol

> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns) | 2h 10m | Intermediate | 18K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Welcome
  - What you should know
  - Using the exercise files
- [**1. Overview**](#1-overview) (3 videos)
  - What are design patterns?
  - Gang of Four: Design patterns
  - Anti-patterns
- [**2. Creational Patterns**](#2-creational-patterns) (8 videos)
  - The singleton problem
  - The Singletons pattern
  - Singletons in Node
  - The Prototype pattern
  - The prototype clone method
  - The Factory pattern
  - The Builder pattern
  - Implementing a builder
- [**3. Structural Patterns**](#3-structural-patterns) (8 videos)
  - The Adapter pattern
  - Implementing an adapter
  - The Proxy pattern
  - Implementing a proxy
  - The Composite pattern
  - Implementing composites
  - The Decorator pattern
  - Implementing decorators
- [**4. Behavioral Patterns**](#4-behavioral-patterns) (11 videos)
  - Chain of responsibility
  - Implementing the storage class
  - The Command pattern
  - Implementing commands
  - Improving the conductor
  - The Iterator pattern
  - Implementing iterators
  - The Observer pattern
  - Implementing observers
  - The Strategy pattern
  - Implementing strategies
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=0)** - [Alex] Hello, my name is Alex Banks.
>
> **[0:02](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=2)** Welcome to Node.js design patterns.
>
> **[0:04](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=4)** Design patterns are proven, tested solutions to the problems that we face every day in software development.
>
> **[0:09](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=9)** They are techniques that we can use to help us improve the way we write code, as well as the way we communicate about solutions.
>
> **[0:15](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=15)** Node.js is a runtime environment for the JavaScript language.
>
> **[0:19](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=19)** In this course, we're going to cover 13 of the 23 classic object-oriented design patterns, as defined by The Gang of Four, or the four authors who wrote the book on object-oriented design patterns.
>
> **[0:30](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=30)** Once we have a solid definition for design patterns and anti-patterns, we will begin looking at some of the most popular classic design patterns and how to implement those patterns in JavaScript.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=39)** Starting with creational patterns, we will learn techniques that we can use to help us manage the creation of objects in our ever expanding and changing software environment.
>
> **[0:48](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=48)** We will then move on to structural patterns and learn how we can effectively change our software through structural techniques.
>
> **[0:55](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=55)** I'm excited to show you how you can implement the same design patterns that engineers use in Java and C++, but this time, with the world's most popular programming language, JavaScript.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/welcome?u=76281980&t=63)** Welcome to this course, let's get started.

> [!info]- Semantic Content
>
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [alex] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=0)** - [Instructor] Design patterns are advanced techniques that help us improve the way we write code.
>
> **[0:04](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=4)** Specifically they help us write more scalable solutions by restructuring our solutions into parts that communicate with each other.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=11)** Some of these parts always stay the same while others are designed to change, grow, and expand.
>
> **[0:16](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=16)** Implementing these techniques can be tricky, so this is not a beginner course.
>
> **[0:20](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=20)** If you're brand new to programming, JavaScript, or Node.js, you may want to make sure that you've taken some time to practice writing code and building applications before starting this course.
>
> **[0:30](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=30)** This course is designed to demonstrate proven techniques that you can use to make code that you've already written better.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=35)** If you are a programmer with experience in an object-oriented language and you've dabbled with design patterns in your language, this course may be for you.
>
> **[0:43](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=43)** We use JavaScript class syntax in this course to make it easier for programmers who are transitioning from some other language to Node.js.
>
> **[0:51](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=51)** Since we use class syntax, I am expecting that you have brushed up on your ES6 and you know how to create and extend classes in JavaScript with the latest syntax.
>
> **[0:59](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=59)** It is also extremely important that we understand that JavaScript doesn't actually have classes.
>
> **[1:04](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=64)** It achieves inheritance through the prototype.
>
> **[1:07](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=67)** It's 2018 so I'm also using a lot of the latest JavaScript syntax including class syntax, object destructuring, object literal enhancement, and arrow functions.
>
> **[1:17](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=77)** Yes, tons and tons of arrow functions.
>
> **[1:20](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=80)** Finally, I'm assuming that you've taken my Node.js Essential Training class or that you know how to use Node.js.
>
> **[1:26](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=86)** At the very least that you have Node.js installed and you've previously run a script with Node.
>
> **[1:31](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=91)** If you've never used Node and you don't have it installed, take the time to take my Node.js Essentials Training course.
>
> **[1:37](https://www.linkedin.com/learning/node-js-design-patterns/what-you-should-know?u=76281980&t=97)** Otherwise, you're ready for this intermediate to advanced course on design patterns with Node.js.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9), make (3)
> **File Paths:** node.js (7)
> **Code Keywords:** finally, (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/using-the-exercise-files-24004512?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/using-the-exercise-files-24004512?u=76281980&t=0)** - [Instructor] This course has a collection of Exercise files that you can use to move through these videos.
>
> **[0:05](https://www.linkedin.com/learning/node-js-design-patterns/using-the-exercise-files-24004512?u=76281980&t=5)** Within the Exercise Files folder, you'll find a folder for each chapter.
>
> **[0:09](https://www.linkedin.com/learning/node-js-design-patterns/using-the-exercise-files-24004512?u=76281980&t=9)** Then in each of those chapters, you'll find a start and finished folder.
>
> **[0:13](https://www.linkedin.com/learning/node-js-design-patterns/using-the-exercise-files-24004512?u=76281980&t=13)** When I start the video, the files will match the start folder.
>
> **[0:15](https://www.linkedin.com/learning/node-js-design-patterns/using-the-exercise-files-24004512?u=76281980&t=15)** When I finish the video, the files will match the finished folder.
>
> **[0:19](https://www.linkedin.com/learning/node-js-design-patterns/using-the-exercise-files-24004512?u=76281980&t=19)** You can use any code editor for this class, VS Code, Sublime Text or an in-browser IDE like Reptlit.
>
> **[0:25](https://www.linkedin.com/learning/node-js-design-patterns/using-the-exercise-files-24004512?u=76281980&t=25)** Okay, that should be everything we need to get started.
>
> **[0:28](https://www.linkedin.com/learning/node-js-design-patterns/using-the-exercise-files-24004512?u=76281980&t=28)** Let's get into it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** class, (1), let (1)
> **Tools:** vs code (1), sublime (1)
> **Exercise Files:** exercise files (2)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

> [↑ Back to Table of Contents](#table-of-contents)

#### What are design patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=0)** - [Instructor] So what exactly are design patterns?
>
> **[0:03](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=3)** Well, every day that we're building software, we are usually presented with a lot of challenging problems, problems that we might have already solved.
>
> **[0:10](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=10)** When presented with re-occurring problems, we are faced with a decision.
>
> **[0:13](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=13)** Solve the problem again and again for each application where it occurs, or solve the problem once and for all with an improved solution, a pattern, a solution that you can use over and over again in any type of application where this problem occurs.
>
> **[0:27](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=27)** If you find your solution works well by proving it in various applications and situations, and you feel like you can safely use your solution a million times over, it might be time to make it official.
>
> **[0:38](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=38)** Give your solution a name.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=39)** Document your solution, evangelize it.
>
> **[0:41](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=41)** Get other developers using your solution to solve the same problem when they face it.
>
> **[0:46](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=46)** You will have just created a design pattern.
>
> **[0:49](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=49)** Design patterns are reusable, reliable solutions to problems that we face every day in software development.
>
> **[0:55](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=55)** Design patterns are named, cataloged solutions.
>
> **[0:58](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=58)** They are well-tested and reusable in many different situations.
>
> **[1:02](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=62)** They are well-documented so other developers can learn them, and they are easy to talk about with other engineers who already know them.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=68)** They make your code better and your applications less brittle.
>
> **[1:12](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=72)** It's easier to add new features or modules to applications where you use them.
>
> **[1:16](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=76)** Although some design patterns may be difficult to learn at first, they ultimately simplify your code.
>
> **[1:21](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=81)** Their aim is to present solutions for decoupling objects or modules and reducing the overall complexity of your architecture.
>
> **[1:28](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=88)** Not only will understanding design patterns make you write better code, they will make you a better programmer, because learning design patterns gives you techniques that you can use when faced with common programming problems and a knowledge base that is easy to discuss at, say, an interview.
>
> **[1:42](https://www.linkedin.com/learning/node-js-design-patterns/what-are-design-patterns?u=76281980&t=102)** As a programmer who wants to write better code and reflect on better ways of doing things, learning and using design patterns is a must.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Gang of Four: Design patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=0)** - [Instructor] Where did design patterns come from?
>
> **[0:02](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=2)** Many attribute the origin of design patterns in computer science to the book, "Elements of Reusable Object-Oriented Software".
>
> **[0:09](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=9)** This book was published in 1994.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=11)** The book had four authors, and these authors are most commonly referred to as the Gang of Four.
>
> **[0:16](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=16)** The Gang of Four found inspiration in an earlier book called, "A Pattern Language".
>
> **[0:20](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=20)** In this book, the idea of design patterns applies to construction and civic engineering.
>
> **[0:26](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=26)** The first chapter of Elements of Reusable Object-Oriented Software, defines design patterns using the words of Christopher Alexander, the author of "A Pattern Language".
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=35)** Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice.
>
> **[0:48](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=48)** Even though Christopher Alexander was referring to civic engineering, software engineering can also define patterns to describe solutions to problems that can be used a million times over.
>
> **[0:57](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=57)** The Gang of Four provided a clear definition of software design patterns, and outlined their required parts.
>
> **[1:02](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=62)** Each pattern must have a name.
>
> **[1:04](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=64)** The name describes the problem, and the solution, in only a couple of words.
>
> **[1:09](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=69)** The problem must also be clearly stated.
>
> **[1:11](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=71)** It describes when the pattern should be used as well.
>
> **[1:14](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=74)** The solution must be clearly diagrammed and documented, and all design patterns must define consequences or trade-offs, when using them.
>
> **[1:23](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=83)** The Gang of Four patterns refers to the original 23 classic software design patterns that were defined in the book.
>
> **[1:29](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=89)** These patterns were broken into three categories.
>
> **[1:31](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=91)** Creational design patterns have to do with class instantiation, the creation of object instances in our applications.
>
> **[1:38](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=98)** Structural design patterns have to do with the way objects are composed or put together.
>
> **[1:43](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=103)** Behavioral design patterns define how objects interact with one another.
>
> **[1:47](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=107)** The Gang of Four design patterns were created for object oriented programming languages, and the book included examples written in C++.
>
> **[1:54](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=114)** However, the Gang of Four patterns can be implemented in a number of software languages, included Node.js.
>
> **[1:59](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=119)** Additionally, design patterns are not just limited to object orientation.
>
> **[2:03](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=123)** In fact, JavaScript has design patterns that deal with concurrency and module structure, that were not included in the original Gang of Four design patterns.
>
> **[2:09](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=129)** This is because there are hundreds of design patterns, across many languages and programming paradigms, and new ones are being developed everyday.
>
> **[2:17](https://www.linkedin.com/learning/node-js-design-patterns/gang-of-four-design-patterns?u=76281980&t=137)** In this course, we will also explore some additional patterns that have to do with concurrency, to help us improve the structure of our Node.js applications.

> [!info]- Semantic Content
>
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Code Keywords:** module (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### Anti-patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=0)** - [Instructor] If there are good patterns in software that we should follow and include in our applications, then there also must be bad patterns that we should avoid using at all costs.
>
> **[0:08](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=8)** These negative patterns are called anti-patterns.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=11)** Anti-patterns define a bad solution, as well as how they can negatively impact your application.
>
> **[0:16](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=16)** Understanding anti-patterns can be equally as important as understanding design patterns.
>
> **[0:21](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=21)** When you see an anti-pattern in some code, we can say that that code smells, and we'll need to find a way to change it and make the code less stinky.
>
> **[0:29](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=29)** There are several anti-patterns in JavaScript that we try to avoid.
>
> **[0:32](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=32)** It's an anti-pattern in JavaScript to change or extend the prototype on an instance.
>
> **[0:36](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=36)** This code really smells and can create all sorts of havoc in our applications.
>
> **[0:41](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=41)** In Node, it's an anti-pattern to use synchronous execution after you've initialized your app.
>
> **[0:46](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=46)** JavaScript has only one thread, so we shouldn't block it.
>
> **[0:50](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=50)** This code would make our application slow for all of our connected users.
>
> **[0:54](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=54)** Or how about this code smell?
>
> **[0:55](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=55)** This is a very popular anti-pattern named callback hell.
>
> **[0:59](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=59)** We will discuss some ways around this design pattern in the last chapter of this course.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=63)** Design patterns and anti-patterns represent the do's and don'ts in the world of programming.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/anti-patterns?u=76281980&t=68)** A good code reviewer can spot code smells and anti-patterns just as quickly as they could spot good techniques in design patterns.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1), node (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Creational Patterns

> [↑ Back to Table of Contents](#table-of-contents)

#### The singleton problem
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=0)** - [Instructor] Sometimes you need to make sure that you have one and only one instance of an object.
>
> **[0:04](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=4)** This is where the singleton pattern can be useful.
>
> **[0:07](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=7)** A singleton represents a single instance of an object.
>
> **[0:09](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=9)** Only one can be created, no matter how many times the object is instantiated.
>
> **[0:13](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=13)** If there's already an instance, the singleton will create a new one.
>
> **[0:17](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=17)** Let's take a look at where creating multiple instances of one object might create problems within our application.
>
> **[0:23](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=23)** If you go to your exercise files for chapter two, lesson one, within the Start folder you will notice that there is a logger.js file.
>
> **[0:30](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=30)** Within this file, we create a class called Logger.
>
> **[0:33](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=33)** The idea is that we want our application modules to use this logger class instead of using console log directly.
>
> **[0:40](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=40)** This logger saves information about all of the logs that are sent to it and it also logs each message with a timestamp.
>
> **[0:47](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=47)** So once we create an instance of this object we can use the log method, send it a message, and it will log the timestamp and the message to the terminal as well as save information about that log.
>
> **[0:58](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=58)** We also have a store.js file.
>
> **[1:00](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=60)** Now if you look at this file we actually use the Logger.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=63)** On line one, we import the Logger class, and on line three we create a new instance called Logger so that we can actually use this class.
>
> **[1:10](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=70)** So on line 10, within the store constructor we will log a new message every time a store is created.
>
> **[1:16](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=76)** So it says New Store and it gives us the name of the store and how many items are in stock.
>
> **[1:20](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=80)** We also have a shopper.js file.
>
> **[1:22](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=82)** And if you take a look at the shopper.js file it also uses the Logger, and on line 3 it creates its own instance of the Logger.
>
> **[1:29](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=89)** So, whenever we create new shoppers on line 10 within the constructor, we will log a message to the console that says a new shopper has been created, this is their name and this is how much money they have in their account.
>
> **[1:40](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=100)** Finally, the index.js, the main entry point for our application.
>
> **[1:44](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=104)** Within our index.js, we are also using the Logger.
>
> **[1:48](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=108)** On line one we import the class, and on line five we create our third instance of the Logger.
>
> **[1:53](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=113)** Now, this file also uses the store and shopper classes and on line nine we create a new instance of a shopper and on line 10 we'll create a new instance of a store.
>
> **[2:02](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=122)** Now notice on line seven, we are sending messages to the Logger.
>
> **[2:05](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=125)** So, on line seven we're going to log the message starting app and on line 23 we're also going to log the message finished config.
>
> **[2:12](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=132)** Now down here on line 25 of this file we're using console log just to dump some debugging information.
>
> **[2:18](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=138)** So here we'll see how many messages have been saved inside of our Logger instance and on line 26 we'll actually log each of those messages by mapping the logs array.
>
> **[2:27](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=147)** So, the Logger instance stores an array called logs.
>
> **[2:30](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=150)** We're going to map over each item in that array, and we're going to log the message that's saved there to the console.
>
> **[2:36](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=156)** Let's go ahead and go out to our console and run this application.
>
> **[2:39](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=159)** So if we run node index.js, and again I am in chapter two, lesson two one within the start folder, we will notice that we see four logs.
>
> **[2:48](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=168)** So we see our main application, log, starting the app along with its timestamp.
>
> **[2:52](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=172)** We see that a new shopper has been created, a new store has been created, and then our main application has also finished running the configuration.
>
> **[3:00](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=180)** The problem is, is because we have three instances of the Logger, we're only looking at the information for the main instance.
>
> **[3:07](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=187)** So in our debugging information down here we see two logs total and those logs are only starting app and finished config.
>
> **[3:14](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=194)** Now the reason is, is whenever we looking at the current Logger instance, we're only looking at the instance that was created within our main application.
>
> **[3:22](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=202)** Not the instance that was created within the shopper and the store.
>
> **[3:25](https://www.linkedin.com/learning/node-js-design-patterns/the-singleton-problem?u=76281980&t=205)** When we have this type of a problem a singleton can really come in handy.

> [!info]- Semantic Content
>
> **File Paths:** index.js (3), shopper.js (2), logger.js (1), store.js (1)
> **Code Keywords:** let (2), class, (2), class. (1), finally, (1)
> **CLI Commands:** make (1), node (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The Singletons pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=0)** - [Instructor] In the last lesson we took a look at how creating multiple instances of the logger class can cause problems within our application.
>
> **[0:06](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=6)** In this lesson we're going to go ahead and fix those problems by implementing a singleton.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=11)** So within your exercise files, under chapter two lesson two within the start folder and the logger.js file let's go ahead and modify this file to export a singleton instead of a logger.
>
> **[0:21](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=21)** So on line 17 I'm just going to come in here and add a new class called singleton.
>
> **[0:26](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=26)** So this class is only going to allow us to create one instance of the logger.
>
> **[0:30](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=30)** Anytime we need that instance we're going to retrieve it through a get instance method.
>
> **[0:34](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=34)** So let's go ahead and add a constructor to our singleton class.
>
> **[0:37](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=37)** And what we want to do within this constructor is we want to check and see if an instance has already been created.
>
> **[0:42](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=42)** So I'm going to save the instance directly to the class.
>
> **[0:46](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=46)** So if there's not a singleton instance then we want to create one.
>
> **[0:51](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=51)** So if we don't have one then the singleton instance will equal new logger.
>
> **[0:57](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=57)** So that's our singleton.
>
> **[0:59](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=59)** And it will only allow us to create one instance whenever we instantiate this singleton class.
>
> **[1:04](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=64)** So the next thing we're going to do for a classical singleton is actually return that instance using a get instance method.
>
> **[1:10](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=70)** And what we can do within this method is return our singleton.instance.
>
> **[1:16](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=76)** There we go.
>
> **[1:17](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=77)** So this class only allows us to instantiate one logger and then using the get instance method we can return that logger to any file that wants to use it.
>
> **[1:25](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=85)** So let's go ahead and go into our store.
>
> **[1:27](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=87)** We need to modify line three, where we create a new instance of our logger class to have a .getInstance chained on that call.
>
> **[1:35](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=95)** So this will return our single instance.
>
> **[1:37](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=97)** And then within the shopper js we need to do the same thing also on line three .getInstance.
>
> **[1:42](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=102)** And now both the store and the shopper should be using the same single instance of the logger.
>
> **[1:46](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=106)** Within the index.js file we'll also chain on a .getInstance and now all three of these files should be using the exact same instance of the logger.
>
> **[1:54](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=114)** So we can check this by going to run our application.
>
> **[1:57](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=117)** So let's go out to the terminal and node index.js.
>
> **[2:01](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=121)** And now we see the same output.
>
> **[2:03](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=123)** We see four logs starting the app coming from our index file.
>
> **[2:06](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=126)** New shopper coming from the shopper file.
>
> **[2:09](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=129)** New store coming from the store file.
>
> **[2:11](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=131)** And then finished config coming from the index.
>
> **[2:13](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=133)** And we also see the correct amount of logs within our logger instance.
>
> **[2:17](https://www.linkedin.com/learning/node-js-design-patterns/the-singletons-pattern?u=76281980&t=137)** So it says that we have four logs total and it shows us that all four of these logs have made it even though we're using the logger throughout multiple files.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class. (3)
> **File Paths:** index.js (2), logger.js (1)
> **Code Identifiers:** getinstance (3)
> **CLI Commands:** node (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Singletons in Node
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=0)** - [Instructor] In the last lesson we solved the problem of creating multiple instances of the logger class throughout our application by creating a singleton class and then exporting that class to make sure that we only use one instance of the logger.
>
> **[0:12](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=12)** Implementing the get instance method in a singleton class is pretty typical for an object oriented programming language.
>
> **[0:18](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=18)** It's just fine to implement the singleton this way within Node JS.
>
> **[0:21](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=21)** It's also nice because it tells other developers that the logger is a singleton.
>
> **[0:24](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=24)** However, there is a easier and more typical solution for singletons in Node JS, and that's simply to export the instance from the Node JS module.
>
> **[0:33](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=33)** So, within our exercise files under chapter two, lesson three, I'm going to come into my logger.js file and just implement the singleton an easier way by removing the class.
>
> **[0:44](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=44)** Or the need to export a single class and now on line 19 where I export this module, I'm going to just go ahead and export a new instance of the logger.
>
> **[0:54](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=54)** The idea here is that when we run this file it will run once, create the new instance of the logger, and save it in the cache.
>
> **[1:01](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=61)** That means that Node JS will automatically handle exporting the same instance of the logger to every other module that wants to consume it.
>
> **[1:07](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=67)** So, let's just go ahead and modify our store.js file.
>
> **[1:10](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=70)** We are going to get rid of line three where we create the instance of the logger here because we're going to import it directly from our logger module.
>
> **[1:18](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=78)** So, I'll go ahead and give that a lowercase L so that it matches our logger on line 10.
>
> **[1:22](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=82)** Same thing within our shopper.js file.
>
> **[1:24](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=84)** Let's get rid of the caw, to new logger, and go ahead and give that a little lowercase L and we will get that instance from our logger module.
>
> **[1:33](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=93)** And then finally the same thing with the index, I'm going to go ahead and import a lowercase logger.
>
> **[1:38](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=98)** So, we are importing the instance and then I am getting rid of the line where we created the new logger instance.
>
> **[1:45](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=105)** So, I go ahead and save this and we should have the exact same results without the need to create an extra class.
>
> **[1:51](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=111)** So, let's go ahead and test this out.
>
> **[1:53](https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?u=76281980&t=113)** I'll come over to the terminal, node index.js, and we see that we have the exact same results, we're using one logger instance, we're saving all of the logs, no matter whether they were logged from shopper, store, or our main application.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), let (3), class. (2)
> **CLI Commands:** node (5), make (1)
> **File Paths:** logger.js (1), store.js (1), shopper.js (1), index.js (1)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### The Prototype pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=0)** - [Teacher] When I was growing up, I noticed that the layout of our house was very similar to the layout of several of my friend's houses.
>
> **[0:06](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=6)** They were the same size, they had the exact same floor plan and they were all made of the same materials.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=11)** We essentially lived in the same house, but each house had customizations that made it different.
>
> **[0:16](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=16)** It seemed like whatever company that built these houses had a pattern they can follow to make them more efficient by using the same materials and blueprints.
>
> **[0:23](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=23)** Each house was essentially a clone or a copy of a master design.
>
> **[0:27](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=27)** Sometimes we face the same challenge in software development.
>
> **[0:30](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=30)** We might spend a lot of time creating and setting up objects that are essentially the same.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=35)** Let's take a look at the index.js file found in the start folder of our exercise files under chapter two, lesson four.
>
> **[0:42](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=42)** We'll notice that we are using a shopper class to create two instances of shoppers.
>
> **[0:47](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=47)** On line three, we create a shopper named Alex and on line 10, we create a shopper named Eve.
>
> **[0:52](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=52)** Both of these shoppers actually have essentially the same list, so the process of setting up each shopper requires that we duplicate the same code.
>
> **[1:00](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=60)** Both Eve and Alex have a camping knife, a tent, a backpack and a map.
>
> **[1:04](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=64)** So what we can do is we can save time and reduce redundancy by implementing the prototype pattern.
>
> **[1:09](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=69)** So to do so, I'm actually going to copy everything from line seven to line one.
>
> **[1:14](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=74)** So we're going to copy the setup of the shopper Alex and then I'm going to create a new file called scout_prototype.js.
>
> **[1:22](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=82)** We'll go ahead and paste this information here.
>
> **[1:24](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=84)** So in the scout prototype, we will create a new shopper called a scout and we will add all of these items to the scout's list.
>
> **[1:33](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=93)** We'll also remove the scout's name because we're going to use this instance of this object to create multiple scouts.
>
> **[1:39](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=99)** So the last thing that I want to go ahead and do here is export our scout object.
>
> **[1:44](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=104)** So now we have an object that we set up that has a camping knife, tent, backpack and map already in their shopping list.
>
> **[1:51](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=111)** Let's go back to the index.js and use this item to improve our code.
>
> **[1:55](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=115)** So instead of importing a shopper, we're going to import the scout prototype, prototype.
>
> **[2:00](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=120)** And now instead of creating Alex using the shopper, what we're going to do is use the scout prototype.
>
> **[2:06](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=126)** And by using the scout prototype's clone method, we create an exact clone of the scout prototype in its current state.
>
> **[2:13](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=133)** That means that Alex already has all of these items on their shopping list.
>
> **[2:17](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=137)** And I can simply add a slingshot to my shopping list.
>
> **[2:20](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=140)** Now I do have to give this instance a name, so we'll say Alex.name equals Alex Banks and we want to do the same thing for Eve, so I'm going to go ahead and copy our scout_prototype.clone call and set Eve using that call too.
>
> **[2:33](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=153)** So, the instance of Eve will again be the scout prototype at it's current state, so we'll go ahead and get rid of that list because Eve will automatically have it and the name Eve Porcello.
>
> **[2:46](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=166)** So you can see that we've improved our code, we've eliminated the redundancy.
>
> **[2:50](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=170)** If we had very complicated objects to set up this could save us a lot of time.
>
> **[2:54](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=174)** Now unfortunately we aren't ready to run this code yet because we haven't implemented the clone method.
>
> **[3:00](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-pattern?u=76281980&t=180)** In the next lesson, we're going to go ahead and add the clone method to our shopper class, so that we can use the prototype pattern to speed up the way that we create instances of shopper objects.

> [!info]- Semantic Content
>
> **File Paths:** index.js (2), scout_prototype.js (1)
> **Code Keywords:** let (2), class, (1)
> **Prerequisites:** set up (2), setup (1)
> **Code Identifiers:** scout_prototype (2)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)

#### The prototype clone method
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=0)** - [Instructor] In the last lesson we demonstrated how we can improve our code for setting up multiple types of shoppers that essentially have the same shopping lists by using the prototype pattern.
>
> **[0:10](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=10)** To do so we created a scout prototype.
>
> **[0:12](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=12)** And then we will clone the scout prototype whenever it is we want to create new shoppers that have the same list that a scout would have.
>
> **[0:19](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=19)** In this lesson we actually have to make this code work by adding a clone method to our shopper class.
>
> **[0:24](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=24)** So within our exercise files under chapter two lesson five I'm going to go into shopper.js file and I'm going to go ahead and add our clone method so that we can implement the prototype pattern.
>
> **[0:38](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=38)** So go ahead and say clone.
>
> **[0:40](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=40)** So the first thing I want to do is I want to copy the copy the object structure.
>
> **[0:44](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=44)** And in java script the structure of this object contains the methods add items to lists, a getter for shopping lists, getters and setters for the name value, as well as a constructor.
>
> **[0:54](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=54)** So what we're going to go ahead and do is copy all of the prototype methods that we see here on the screen, the getters and setters for name, the getter for the shopping list and the add item to list, simply by grabbing the current prototype for the current instance.
>
> **[1:07](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=67)** So I'm going to say, var proto = object getPrototypeof (this).
>
> **[1:14](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=74)** And this will actually give me the prototype of the current shopper object which is our name, getters and setters for name, shopping list and add item to list.
>
> **[1:23](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=83)** And now I'm going to create a new object cloned = object.create proto.
>
> **[1:29](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=89)** So using the object.create we will create a new object on the fly and add the current prototype of the current instance to that object.
>
> **[1:37](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=97)** Now that gives us the methods of the current object but we also want to clone any current values.
>
> **[1:43](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=103)** So we want to make sure the current shopping list and the current name is also cloned by creating copies of those values.
>
> **[1:49](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=109)** So our cloned object will have a ._name of this._name.
>
> **[1:55](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=115)** So whatever this object is currently named will be our cloned name.
>
> **[1:58](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=118)** Our clone shopping list is also going to equal an array.
>
> **[2:02](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=122)** So what we want to do is make a copy of the array.
>
> **[2:05](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=125)** And I'm going to do so by setting the shopping list to a new array to square brackets.
>
> **[2:09](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=129)** Now using the spread operator I can copy all of the values from this _shopping list into our cloned shopping list.
>
> **[2:18](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=138)** And the last thing that we want to do is we're going to return the cloned object.
>
> **[2:22](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=142)** So there we go.
>
> **[2:23](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=143)** Adding that clone method to the shopper class will allow us to use the prototype pattern when we create new shoppers off of the scout prototype.
>
> **[2:33](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=153)** Let's go ahead and give it a shot.
>
> **[2:34](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=154)** So I'll go over here to the terminal and I will type node index.js and we can see that we have two instances of shopper objects that both were created using the scout prototype.
>
> **[2:46](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=166)** So they both have camping knife, tent, backpack and map.
>
> **[2:49](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=169)** All of that set up was obtained through the scout prototype.
>
> **[2:53](https://www.linkedin.com/learning/node-js-design-patterns/the-prototype-clone-method?u=76281980&t=173)** So that's where all of the items were added and now we can create as many shoppers that are going to go on this camping trip as we like using the scout prototype clone method.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (1), var (1), this) (1), this. (1), let (1)
> **CLI Commands:** make (3), node (1)
> **File Paths:** shopper.js (1), index.js (1)
> **Code Identifiers:** getprototypeof (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### The Factory pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=0)** - In the real world, factories create products.
>
> **[0:03](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=3)** An auto factory creates cars, a phone factory creates phones, and a chemical factory would create chemicals.
>
> **[0:08](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=8)** Each of these factories create many variations of their product.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=11)** The auto factory can create cars, trucks, SUVS, all different types of vehicles.
>
> **[0:16](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=16)** If we want a truck, the factory will build it for us.
>
> **[0:19](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=19)** In JavaScript, we also have different types of objects that we may need to instantiate.
>
> **[0:23](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=23)** We can improve our code by encapsulating all of the constructors into a single module and creating a function that will will create the objects for us.
>
> **[0:31](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=31)** This design pattern is called the factory method and the gang of four defined it as "define an interface for creating an object, but let subclasses decide which class to instantiate.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=39)** Factory Method lets a class defer instantiation to subclasses.
>
> **[0:44](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=44)** Let's take a look at how all of this works within JavaScript.
>
> **[0:47](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=47)** Within our exercise files, under chapter 2, chapter 2 lesson 6, inside of the start folder, I'm looking at the index.js file.
>
> **[0:54](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=54)** Now this would represent main client application and within this file I'm using two classes directly, the shopper and the employee.
>
> **[1:02](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=62)** On line 4 and 5, we're creating a couple user instances, one of them is a shopper and the other one is an employee.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=68)** Now using these constructors directly within my client is okay, but problems may start to emerge as my application expands.
>
> **[1:16](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=76)** Let's say I come up with even more types of users: distributors, drivers, managers, developers.
>
> **[1:22](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=82)** Now keeping track of all the constructors required to create all of these different object types can become a little bit chaotic, so that's where the factory method can help us out.
>
> **[1:31](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=91)** Instead of using these classes directly within our client application, we're going to use a factory method instead, so I can import something called the user factory.
>
> **[1:40](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=100)** And instead of using the instances to create instances of my users, I'll actually let the factory decide which type of user to create.
>
> **[1:47](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=107)** So this one will create Alex Banks, and this one will create Eve Porcello, who is an employee.
>
> **[1:53](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=113)** I'll also want to let the factory method know that this is an employee.
>
> **[1:57](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=117)** So, by sending a few arguments to this one method, we will get it to return the right type of instance.
>
> **[2:03](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=123)** Let's go ahead and add the factory method to our code.
>
> **[2:06](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=126)** So I'm going to come over to the start folder and add a new file and this is our user factory.js.
>
> **[2:12](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=132)** And now within our user factory, this is where we will actually use all of the classes required to create objects.
>
> **[2:18](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=138)** So we need an employee and we also need a shopper, those are the two types that we have now.
>
> **[2:24](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=144)** And we're also going to create a user factory function and we'll use an arrow function to do that and we'll make sure that this module exports our user factory.
>
> **[2:33](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=153)** Great, so now we have a function that we can use to create object instances for us.
>
> **[2:38](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=158)** Now this function's going to take in some arguments, specifically the name of the user to create, how much money they have, what type of user we're supposed to be creating, and optionally an employer, if they are an employee.
>
> **[2:49](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=169)** And we'll use this information to decide which type of object to return.
>
> **[2:53](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=173)** So if type is equal to employee, then we'll return a new employee, with the name, money, and employer that was passed to our method.
>
> **[3:01](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=181)** Otherwise, we'll just return a new shopper with the name and the money that was passed to this method.
>
> **[3:08](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=188)** Great, now we have a factory method that can create employees or shoppers.
>
> **[3:11](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=191)** Let's go ahead and see if it works.
>
> **[3:13](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=193)** I'm going to go into the terminal and run our index.js and we can see that we've created Alex Banks with some money.
>
> **[3:21](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=201)** but Alex Banks is just a shopper, so he's not employed.
>
> **[3:24](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=204)** And we also have Eve Porcello and Eve has some money as well and she is employed.
>
> **[3:29](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=209)** The employer is this and that and we can go back to our client file.
>
> **[3:33](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=213)** Because Eve is employed, we have a slightly different type of object, we can give Eve a pay day.
>
> **[3:39](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=219)** So we'll add 100 to Eve's money using the payday method.
>
> **[3:43](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=223)** We can come back out here to the terminal and run our application again.
>
> **[3:46](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=226)** And we can see here that Eve now has 200 dollars and is still employed.
>
> **[3:51](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=231)** So the benefit of using the factory method is it encapsulates everything that we need to create users within one method.
>
> **[3:57](https://www.linkedin.com/learning/node-js-design-patterns/the-factory-pattern?u=76281980&t=237)** Later on, if we expand, we can actually create different types of users from this same method, so if the need to create a distributor came along - Now I currently do not have a distributor class that we can use, but this is an example of how the factory method can be beneficial to helping our applications as they grow and change.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (5), module (2), interface (1), return. (1)
> **Definitions:** is an  (4), is called (1), is a  (1)
> **File Paths:** index.js (2), factory.js (1)
> **Tools:** terminal (2)
> **Prerequisites:** required to (2)
> **CLI Commands:** make (1)
> **Env Vars:** suvs (1)
> **Cross-References:** go back to (1)

#### The Builder pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=0)** - [Narrator] If you are in the market for a house, you could buy a standard house that was assembled at a factory.
>
> **[0:05](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=5)** However, if you want choices, if you want customization, if you don't want a standard house that was assembled at a factory, then you'll need to hire a contractor or a builder.
>
> **[0:14](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=14)** The home builder may have different questions for you.
>
> **[0:16](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=16)** How many bedrooms would you like? How many bathrooms?
>
> **[0:19](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=19)** Do you want a garage? What materials should we use?
>
> **[0:22](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=22)** You get a custom house by answering the builder's questions.
>
> **[0:26](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=26)** And software, the builder pattern serves much the same purpose.
>
> **[0:29](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=29)** You can use it when you want to customize instances of the objects that you will create.
>
> **[0:33](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=33)** Specifically, the builder pattern is used when you need to break down the construction of a complex object into separate concerns.
>
> **[0:40](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=40)** The gang of four define the intent of the builder pattern as separating the construction of a complex object from its representation so the same construction process can create different representations.
>
> **[0:51](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=51)** The builder pattern is a solution to specific kind of problem, a specific kind of anti-pattern named a telescoping constructor.
>
> **[0:58](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=58)** So let's take a look at how we can implement the builder pattern in JavaScript.
>
> **[1:01](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=61)** So I'm looking at my exercise files under chapter two, lesson seven within the start folder.
>
> **[1:06](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=66)** My main client for the application is our index.js file.
>
> **[1:10](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=70)** And if I look at this file, we can see that we're using this person class to construct two different types of people, employees and shoppers.
>
> **[1:17](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=77)** This is fine, but the issue is that we're sending all of these arguments to the constructor to create the variations of these people.
>
> **[1:24](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=84)** As a developer, I have no idea what sue, true, true, 60 means when we create Sue on line four.
>
> **[1:31](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=91)** In order to understand what those arguments mean, I might have to go look at the person class itself.
>
> **[1:36](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=96)** And here we can see that we have a constructor that takes in many different arguments.
>
> **[1:40](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=100)** So by sending true as the second argument, Sue is an employee, and by sending true as the third argument, we're sending Sue as manager.
>
> **[1:47](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=107)** We have hours, money, and shopping list optionally after that.
>
> **[1:50](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=110)** So this problem here is an anti-pattern called the telescoping constructor.
>
> **[1:55](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=115)** And the issue is, is whenever we have a constructor that has too many arguments, it can become confusing to understand what those arguments are later in our code. So, let's take a look at how the builder pattern can solve this problem.
>
> **[2:07](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=127)** Instead of using a person class directly, we're going to create a class called the person builder.
>
> **[2:12](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=132)** And the person builder is going to be used to create instances of objects.
>
> **[2:15](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=135)** So let's take a look at how we would create Sue with the person builder.
>
> **[2:19](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=139)** So we'll create a new instance of Sue, and instead of using the person, we're going to use the person builder.
>
> **[2:25](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=145)** We'll pass the name to the builder and now that true means that Sue is an employee.
>
> **[2:31](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=151)** So instead of adding a true, I'm actually going to call make employee on the builder.
>
> **[2:36](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=156)** And the second true means that Sue is a manager.
>
> **[2:38](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=158)** So we'll just call make manager on the builder.
>
> **[2:41](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=161)** And the 60 is the 60 hours a week that Sue is expected to work.
>
> **[2:45](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=165)** And now we'll do a dot build chained onto that and we'll create a new instance of Sue.
>
> **[2:51](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=171)** So we can see here that using a builder makes far more sense to developers.
>
> **[2:55](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=175)** I can see that Sue is an employee, that she's a manager with 60 hours a week, and we have an instance of a person that was created using the builder.
>
> **[3:02](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=182)** I'm going to go ahead and modify the rest of this code to use the person builder, so we'll also have Bill, and Phil, and instead of having these extra arguments here, we'll just go ahead and chain the stuff on, so Bill is an employee as well, and Bill is going to be a part time employee and also we will build that instance using the builder.
>
> **[3:23](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=203)** And Phil is also an employee.
>
> **[3:25](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=205)** So we can also use our person builder to create instances of shoppers too.
>
> **[3:29](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=209)** I'm going to go ahead and create Charles side by side so that we can see how we can improve the construction of this instance with a builder.
>
> **[3:36](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=216)** So Charles is going to equal a new person builder, and instead of sending false and false, because Charles is not an employee or a manager, we'll just skip all of that.
>
> **[3:45](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=225)** We'll give Charles some money 'cause he's a shopper and we'll also give Charles a list.
>
> **[3:51](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=231)** And the list that Charles gets is right here, this array of jeans and sunglasses.
>
> **[3:55](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=235)** But now we know specifically that's a shopping list for Charles.
>
> **[3:58](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=238)** Finally, we have to add the build right here on the end.
>
> **[4:02](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=242)** Now this is becoming too much code to fit on one line, that's fine, we can actually add these chain functions onto their own line.
>
> **[4:10](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=250)** And again, we actually get to see that we have to find Charles in a more declarative manner So this makes more sense when we're instigating Charles using the builder than it does on line 14.
>
> **[4:20](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=260)** So we'll get rid of that and then we'll also use the person builder for Tabbitha.
>
> **[4:24](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=264)** And Tabbitha will also have money.
>
> **[4:27](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=267)** Yeah, we'll give Tabbitha 1,000. Great.
>
> **[4:30](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=270)** So this is how we can use a builder to improve our code.
>
> **[4:34](https://www.linkedin.com/learning/node-js-design-patterns/the-builder-pattern?u=76281980&t=274)** In the next lesson, we're actually going to implement a person builder class.

> [!info]- Semantic Content
>
> **Definitions:** is an  (5), is a  (2), means that (2)
> **Code Keywords:** let (3), pass (1), finally, (1), class. (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** later in (1), in the next (1)
> **File Paths:** index.js (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Implementing a builder
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=0)** - [Instructor] In the last lesson, we took a look at how using a builder can improve our code by eliminating the telescoping constructor anti-pattern.
>
> **[0:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=8)** In this lesson, we're actually going to construct the person builder class.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=11)** So I'm currently within the exercise files under chapter two, chapter two lesson eight, and inside of the start folder I'm going to create a new file called PersonBuilder.
>
> **[0:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=20)** And inside of this file we still want to construct people using the person class, so I'm going to include that class.
>
> **[0:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=27)** So what we're going to do here is we're going to create a class called PersonBuilder, and we're going to make sure that we export this class.
>
> **[0:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=34)** All right.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=35)** So before we create the person builder, we actually have to modify the person class to use our builder.
>
> **[0:41](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=41)** So I'm going to go into the person class, and what we're going to do here is, instead of having a bunch of arguments be sent to the constructor, we're going to send the constructor one object, and that object we're going to call the builder.
>
> **[0:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=52)** So when creating an instance of a person, we will send the constructor the builder object, and that's where these arguments are going to be defined.
>
> **[0:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=58)** So we'll get the name from the builder.name.
>
> **[1:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=62)** We'll get whether they're an employee from the builder.isEmployee.
>
> **[1:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=66)** Builder.isManager.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=68)** The builder will have the hours.
>
> **[1:10](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=70)** And if the builder doesn't have the hours, I'm going to optionally put a zero there.
>
> **[1:13](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=73)** The builder will have the money.
>
> **[1:15](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=75)** And again, if we don't send the money, we'll do an optional zero for money.
>
> **[1:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=79)** And again, we'll do the same thing for shopping list.
>
> **[1:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=81)** So we'll get the shopping list from the builder.
>
> **[1:24](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=84)** Or we'll just make it an empty array.
>
> **[1:26](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=86)** Great.
>
> **[1:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=87)** So we solved the telescoping constructor problem within our class itself.
>
> **[1:30](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=90)** Let's go ahead and construct the builder so that our code will work.
>
> **[1:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=94)** So within the person builder, this is a class, so we're going to go ahead and define the constructor.
>
> **[1:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=99)** Now when we use the person builder the constructor takes in the name of the person that we're building.
>
> **[1:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=104)** And what we're going to do is we're going to say this instance is .name is equal to the name that was sent to the constructor.
>
> **[1:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=110)** Now that's the only argument that we're going to set up in the constructor.
>
> **[1:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=113)** Every other modification of the person is going to come through methods.
>
> **[1:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=117)** So if we want to make the person an employee, we're going to invoke this makeEmployee method.
>
> **[2:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=123)** And what we'll do is we'll take this instance of the person and we'll go ahead and say that they are an employee.
>
> **[2:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=128)** And this is really key to allowing for the chaining.
>
> **[2:11](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=131)** We need to return this instance.
>
> **[2:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=134)** So we've modified the current instance, but we also need to return it so that we can chain on and add other functions when we're building the object.
>
> **[2:22](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=142)** If we actually look at the index.js file, we can see that we have chained on makeEmployee, .makePartTime, .build.
>
> **[2:29](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=149)** And that only works because we're returning this.
>
> **[2:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=152)** So the next method that we're going to add is makeManager.
>
> **[2:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=155)** And this method will take in in hours.
>
> **[2:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=158)** We'll make it set to 40, even though we create Sue with 60 hours, so we were able to pass that variable there.
>
> **[2:43](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=163)** And I can say that this instance is a manager as well as this instance has hours that were sent to this function.
>
> **[2:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=172)** And we also need to return this.
>
> **[2:54](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=174)** Great.
>
> **[2:54](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=174)** So now we've added the makeManager method.
>
> **[2:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=177)** Let me try this again.
>
> **[2:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=177)** Let's go ahead and add the makePartTime and makePartTime will also have an hours.
>
> **[3:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=183)** We'll set part time hours to 20.
>
> **[3:05](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=185)** And when we have a part time employee that will only affect the hours.
>
> **[3:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=188)** And again, we're going to return this.
>
> **[3:10](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=190)** And we also need to add a couple more things, withMoney, and we will expect the money is sent to this method.
>
> **[3:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=198)** So we can set this.money to the money that is sent to this method.
>
> **[3:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=203)** And again we need to return this.
>
> **[3:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=205)** And we need to do the same thing with the shopping list, withList.
>
> **[3:28](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=208)** And we'll set the list to be an empty array.
>
> **[3:31](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=211)** And this.shoppingList will equal the list that was sent to this method.
>
> **[3:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=214)** And return this.
>
> **[3:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=215)** So basically we've created all of these builder methods that are used to create a person.
>
> **[3:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=220)** The only one that we haven't created is the one that we chain onto the end of every builder call, which is the build method.
>
> **[3:47](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=227)** Now the build method is expected to actually return a new instance of the person object.
>
> **[3:51](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=231)** So let's go ahead and add that method.
>
> **[3:54](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=234)** So whenever we build, what we're going to do is this object is the builder.
>
> **[3:59](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=239)** So if we take a look at the person.js file, all we need to do is send the builder object to the constructor for the person instance.
>
> **[4:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=246)** So all I need to do inside of this build method is return a new instance of a person.
>
> **[4:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=252)** And I can send all of the arguments at once, just by sending this builder instance.
>
> **[4:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=257)** Great.
>
> **[4:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=257)** So now we've constructed our person builder.
>
> **[4:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=259)** Let's go ahead and see if our person builder works.
>
> **[4:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=261)** One thing that I'm going to do is go into the index.js and just do some console logs.
>
> **[4:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=267)** So Charles.toString, and we'll also go ahead and log sue.toString.
>
> **[4:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=275)** There we go.
>
> **[4:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=276)** And then I will go into the terminal, and we can check to see if this runs by running our index.js file.
>
> **[4:42](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=282)** Woops, and it looks like we have a problem.
>
> **[4:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=284)** And it looks like we have a problem where I've created Sue, I did not spell manager correctly.
>
> **[4:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=289)** M-A-N-A-G-E-R.
>
> **[4:51](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=291)** So I can make that correction, save the file.
>
> **[4:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=293)** Let's go ahead and try this again.
>
> **[4:55](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=295)** I will clear the screen.
>
> **[4:56](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=296)** Node index.js.
>
> **[4:59](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=299)** And here we see that we've created two instances of people.
>
> **[5:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=302)** The first instance, Sue, is an employee, is a manager, has 60 hours a week.
>
> **[5:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=306)** Unfortunately Sue doesn't have any money right now.
>
> **[5:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=308)** So the second instance that we've created is Charles.
>
> **[5:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=312)** Charles doesn't work.
>
> **[5:13](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=313)** Charles has 500 dollars and he needs to buy jeans and sunglasses.
>
> **[5:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-builder?u=76281980&t=317)** So this is an example of how we can implement the builder pattern and improve our code by using it.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (7), let (6), class. (3), class, (3), pass (1)
> **Code Identifiers:** makeparttime (3), makeemployee (2), makemanager (2), tostring (2), isemployee (1)
> **CLI Commands:** make (5), node (1)
> **File Paths:** index.js (4), person.js (1)
> **Definitions:** is a  (3), is an  (2)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)


### 3. Structural Patterns

> [↑ Back to Table of Contents](#table-of-contents)

#### The Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=0)** - [Instructor] We're going to take a look at the adapter by looking at a real world analogy, a skateboard.
>
> **[0:04](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=4)** A skateboard is a wooden board with wheels.
>
> **[0:07](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=7)** There's a grippy surface that you stand on, but you're not attached to it.
>
> **[0:10](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=10)** If you're good at skateboarding, you might know how to do an ollie or a kick-flip.
>
> **[0:14](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=14)** These are tricks where you jump in the air with your board and hope to land on it.
>
> **[0:18](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=18)** Let's say you wanted to transfer your skateboarding skills to a different surface, other than concrete.
>
> **[0:22](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=22)** Let's say you wanted to skateboard on snow.
>
> **[0:25](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=25)** You're probably thinking you'll need a snowboard.
>
> **[0:27](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=27)** But are they really the same?
>
> **[0:29](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=29)** You can't kick-flip a snowboard, because you're always attached to it.
>
> **[0:32](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=32)** There's no grippy surface that you stand on.
>
> **[0:34](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=34)** Recently a new snow sport has popped up called snow skating.
>
> **[0:38](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=38)** A snow skateboard is a wooden board with a grippy surface that you stand on, but instead of wheels, its trucks are mounted on skis.
>
> **[0:45](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=45)** If you already know how to skate, you can immediately apply those skills to a snow skate.
>
> **[0:49](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=49)** You can kick-flip a snow skate because you're not attached to it.
>
> **[0:52](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=52)** A snow skate is simply a skateboard that's been adapted to ride on snow instead of concrete.
>
> **[0:57](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=57)** To the user, the board works and feels the same.
>
> **[1:00](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=60)** They can use it the way they already use a skateboard.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=63)** In software, an adapter serves the same purpose.
>
> **[1:05](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=65)** It's when you take an object, keep its interface, but adapt it to a new environment or solution.
>
> **[1:10](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=70)** Adapters make incompatible classes become compatible.
>
> **[1:14](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=74)** The Gang of Four defines the intent of an adapter as converting the interface of a class into another interface that clients expect.
>
> **[1:21](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=81)** Adapters lets classes work together that couldn't otherwise because of incompatible interfaces.
>
> **[1:27](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=87)** Let's take a look at this example with some JavaScript.
>
> **[1:29](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=89)** I'm inside of the exercise files under Chapter Three, Lesson One within the start folder.
>
> **[1:35](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=95)** One problem that you might have is you might already have some code that is designed to work in a particular environment, or with a particular tool, but you want the exact same code to work in a different environment or with another object to accomplish the same task.
>
> **[1:48](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=108)** Maybe you have some JavaScript written by web developers that is designed to run in the browser, but you want the exact same code to work in a Node.js environment.
>
> **[1:55](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=115)** In the index.js file found in the start folder, there's an example of some JavaScript that saves and reads data from local storage, a browser API that is not available in Node.
>
> **[2:05](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=125)** If I go to the console and run this file, you'll see that I get an error, local storage is not defined.
>
> **[2:11](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=131)** That's because there is no local storage API within Node.js.
>
> **[2:14](https://www.linkedin.com/learning/node-js-design-patterns/the-adapter-pattern?u=76281980&t=134)** In the next lesson, we will build an adapter that will allow this code to run in a Node.js environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3)
> **CLI Commands:** node (4), make (1)
> **File Paths:** node.js (3), index.js (1)
> **Env Vars:** api (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### Implementing an adapter
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=0)** - [Instructor] In the last lesson, we defined the adapter pattern and we looked at a case in JavaScript where an adapter might be helpful.
>
> **[0:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=6)** Here we have some code inside of the index.js file inside of our exercise files under chapter three lesson two within the start folder that uses the local storage API.
>
> **[0:15](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=15)** This API is only available in the browser, and it's not available in node JS.
>
> **[0:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=20)** But we can use this exact same code if we create an adapter for this API.
>
> **[0:24](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=24)** So what we're going to do is require a new file that will create called localStorage.
>
> **[0:30](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=30)** And what we want to do with our local storage file is create the exact same interface that the browser API has for local storage.
>
> **[0:37](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=37)** So let's go ahead and create a brand new file.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=39)** And within our local storage file, we're going to create a class called localStorage.
>
> **[0:43](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=43)** We're going to make sure we export a new instance of localStorage.
>
> **[0:48](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=48)** So what we need to do in this class is we need to provide the same interface that we have in the browser local storage.
>
> **[0:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=53)** Or at least the same interface that we're using within this file.
>
> **[0:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=57)** So that includes a length getter, a get item method, a set item method, and a clear method.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=63)** So we will have get length, get item, and getItem we will have the key of the item that we are going to get.
>
> **[1:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=69)** SetItem, set item we will have a key and a value for the item that we want to set and clear.
>
> **[1:15](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=75)** So we have the same interface inside of our local storage object.
>
> **[1:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=79)** Now the reason it's an adapter is because we need to adapt this interface to a local environment.
>
> **[1:24](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=84)** Instead of saving the data within the local storage API of the browser, we're actually just going to save this data to a JSON document.
>
> **[1:31](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=91)** So the first thing that I'm going to do is I'm going to import some variables from the file system.
>
> **[1:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=95)** So we're going to be creating a new JSON file.
>
> **[1:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=98)** We want to import the writeFile.
>
> **[1:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=100)** We're also going to import existsSync and readFileSync and unlink, and these are all the methods that we're going to need from the file system in order to create our local storage JSON file and save it, read from it, and remove it.
>
> **[1:56](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=116)** So now let's go ahead and make our adapter work.
>
> **[1:59](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=119)** Let's make our adapter save and read data from a local JSON file.
>
> **[2:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=122)** So I'm going to go ahead and add a constructor.
>
> **[2:04](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=124)** And what we want to do is we want to have this.items equal an object.
>
> **[2:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=129)** So our local storage class will actually save all of the items locally in memory under this.items.
>
> **[2:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=136)** That means whenever we want to retrieve an item, we can simply return this.items, and we'll get the key.
>
> **[2:22](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=142)** So that will return the value for any item that we have saved under the current key.
>
> **[2:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=147)** If we want to get the number of items that we have we can simply return a call to object.keys this.items.
>
> **[2:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=153)** Now object keys will give me an array of all of the keys that we have saved under this.items.
>
> **[2:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=158)** So I will just go ahead and return a length of that and that will give me the number of items that I have saved inside of this local storage object.
>
> **[2:45](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=165)** Now the other thing that we want to do is we want to set the item.
>
> **[2:48](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=168)** So setting the item is going to consist of setting the item locally.
>
> **[2:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=172)** So we'll take this.items and we'll set its key equal to the value that's sent to this function.
>
> **[2:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=177)** But we also want to make this data persist.
>
> **[2:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=178)** So we need to call writeFile.
>
> **[3:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=180)** And we're going to make it persist as localStorage.json, and the data that we're going to write to this File is JSON.stringify this.items.
>
> **[3:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=188)** So we'll take that value and turn it into a JSON string and then write it to the file.
>
> **[3:13](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=193)** And then if we have any errors I'll go ahead and handle them here.
>
> **[3:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=196)** So if there is an error I will go ahead and just throw it to the console.
>
> **[3:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=201)** So now we're setting items by saving them to a local storage, JSON file.
>
> **[3:24](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=204)** What we want to do is if that file exists, load those items.
>
> **[3:28](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=208)** And we can do that synchronously within the constructor because our local storage object is only going to instantiated once when our application loads.
>
> **[3:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=215)** So what I'm going to do is within the constructor when we instantiate this object, I'm going to go ahead and check to see if we already have our file.
>
> **[3:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=224)** I can use the existsSync method of the file system to check for localStorage.json.
>
> **[3:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=229)** So if we have a localStorage.json file I'll go ahead and log to the console that we have it and that we're loading data.
>
> **[3:56](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=236)** And what we're going to do is go ahead and load that data from the file using the readFileSync method, and we will read localStorage.json.
>
> **[4:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=246)** That will give us the text.
>
> **[4:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=248)** And then we will set this.items to JSON.pars, the text that we're reading from the file.
>
> **[4:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=254)** And then otherwise if the file doesn't exist, then this.items is just going to be an empty object.
>
> **[4:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=261)** Great, so if we have a localStorage.json file when we create this object we will load the data from that file.
>
> **[4:26](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=266)** The last thing that we want to do, is if we invoke the clear method is remove the JSON file.
>
> **[4:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=272)** So I can go ahead and do so by saying this.items equals an empty object again.
>
> **[4:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=276)** That's clearing any keys that we have saved there.
>
> **[4:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=278)** So we can use the unlink method, localStorage.json, and once we're done with that we'll just go ahead and write a message to the console, localStorage file removed.
>
> **[4:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=290)** So what we've done here is we've created an adapter for local storage.
>
> **[4:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=293)** It's an object that we can use in the node JS environment that works just like the browser local storage API.
>
> **[4:59](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=299)** Let's go ahead and try it out.
>
> **[5:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=301)** So let's take a look at this file.
>
> **[5:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=303)** What's going to happen is, the very first time we run this file, we shouldn't have any items in local storage.
>
> **[5:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=308)** So the length of our local storage should be empty.
>
> **[5:10](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=310)** We should also have an undefined user ID.
>
> **[5:13](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=313)** On line nine when we check for the user ID, if we don't find one that's when we're actually going to save some data to our file.
>
> **[5:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=319)** Let's go out to the terminal and run this.
>
> **[5:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=321)** Node index.js, and we can see that we have 0 items saved in local storage, that a user ID is undefined, so we're setting the user ID and token.
>
> **[5:30](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=330)** So we've just invoked lines 10, 11, and 12, which if we look in our start folder, you'll notice you now have a localStorage.json file.
>
> **[5:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=338)** When we called set item, we created a new file, and in this file we wrote to it a sample token and sample user ID.
>
> **[5:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=344)** So if I were to run this client code again, we have local storage.
>
> **[5:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=349)** We'll have two items saved into it and a user ID will be found.
>
> **[5:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=352)** Let's go ahead and take a look.
>
> **[5:54](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=354)** So now we loaded the items from local storage.
>
> **[5:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=357)** We had two items saved.
>
> **[5:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=358)** The user ID is 12345, and because we have a user ID, we're going to go ahead and clear the user ID and remove the local storage file.
>
> **[6:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=366)** So that's our else block down here, lines 14, 15, and 16.
>
> **[6:10](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=370)** We'll also notice that we no longer have a localStorage.json file because we invoked localStorage.clear on line 16.
>
> **[6:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-an-adapter?u=76281980&t=376)** So this is how an adapter can be useful to adapt an object to a different environment or another object.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (11), let (7), interface (5), require (1), function (1)
> **Code Identifiers:** localstorage (13), writefile (2), existssync (2), readfilesync (2), getitem (1)
> **Env Vars:** json (9), api (6)
> **File Paths:** localstorage.json (8), index.js (2)
> **CLI Commands:** make (5), node (3), find (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)

#### The Proxy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=0)** - [Narrator] A proxy is an object that controls access to another object.
>
> **[0:04](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=4)** For example, it is possible to call your top executive, the CEO of your company, directly and make an appointment with them.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=11)** However, the CEO is very busy and in order for them to function efficiently, you would call their assistant and make an appointment with them instead.
>
> **[0:18](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=18)** The assistant controls access to the CEO.
>
> **[0:21](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=21)** You can think of them as the proxy for the CEO.
>
> **[0:24](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=24)** They queue up appointments, prevent unnecessary appointments, and they even keep track of who met with the CEO.
>
> **[0:29](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=29)** There are a number of reasons to use a proxy, but the main motivation from the design pattern has to do with expensive objects.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=35)** Instead of working directly with an object that requires a lot of resources, you can work with a proxy, an object that has the exact same interface, but the proxy can delay instantiation of an expensive object and control requests made to that object.
>
> **[0:48](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=48)** The gang of four defines the intent of a proxy as providing a surrogate or placeholder for another object to control access to it.
>
> **[0:56](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=56)** In addition to managing expensive objects, proxies can be used to manage a remote resource, provide data validation of input, provide security, cache data, even log actions.
>
> **[1:07](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=67)** Just like the adapter pattern, a proxy must provide the same interface as the subject.
>
> **[1:12](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=72)** The client would call the same methods on the proxy that they would call on the original object.
>
> **[1:17](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=77)** Let's create a proxy that will control access to the file system.
>
> **[1:21](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=81)** So within the exercise files, under chapter three lesson three within the start folder, we have an index.js file that is reading two files and writing the results to the console.
>
> **[1:31](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=91)** So what this file actually does is it links to both a text and a markdown file and then it reads both of those files.
>
> **[1:37](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=97)** So we set up the paths to those files on line four and five, we have a generic call back function for the result.
>
> **[1:43](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=103)** Then we'll check and see if we have an error, but if we don't have an error it will go ahead and log the contents of the files that we're reading on line 16.
>
> **[1:50](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=110)** Line 20 and 21 we're reading both the text and markdown files.
>
> **[1:53](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=113)** So let's go over to the terminal and takes a look at what this looks like.
>
> **[1:56](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=116)** Node index.js.
>
> **[1:58](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=118)** So our current code can read both files.
>
> **[2:01](https://www.linkedin.com/learning/node-js-design-patterns/the-proxy-pattern?u=76281980&t=121)** In the next lesson, we're going to go ahead and create a file system proxy that will prevent us from being able to read any files with a text extension.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), interface (2), let (2)
> **Env Vars:** ceo (5)
> **CLI Commands:** make (2), node (1)
> **File Paths:** index.js (2)
> **Analogies:** for example (1), just like (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)

#### Implementing a proxy
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=0)** - [Instructor] In the last lesson, we defined the proxy pattern, as well as we introduced some code where we might be able to use a proxy.
>
> **[0:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=6)** So, currently we're looking at the files within our exercise files, under chapter three, lesson four, within the start folder, and we're taking a look at the index.js file, which is allowing us to read both text and Markdown files.
>
> **[0:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=17)** Now, a proxy is an object that controls access to another object.
>
> **[0:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=21)** There are a number of wonderful things that you can do with a proxy, and one of those is restricting access to the actual object.
>
> **[0:26](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=26)** So that's what we're going to do.
>
> **[0:28](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=28)** We're going to create a file system proxy that only allows us to read Markdown files, it won't let us read any files of any other types.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=35)** So, when we create our proxy, what I'm going to do inside of the index.js file, is use it.
>
> **[0:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=40)** So, we're going to create something called a FS_Proxy, and now I'm going to go ahead and use the FS_Proxy from my file system, so the file system is going to be FS_Proxy, and then I'm going to go ahead and send the real file system.
>
> **[0:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=58)** So go ahead and require this fs again, and delete this code.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=63)** So, now our file system is going to go through a proxy object that will control access to it.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=68)** And what we want to do is code this proxy class so that we can prevent reading any files that aren't Markdowns.
>
> **[1:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=76)** So, I'm going to come into the folder here and create a new file called FS_Proxy, and we're going to use this file to prevent access to the readFile method for anything that's not a Markdown file, so anything that doesn't have a md extension.
>
> **[1:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=92)** So just like an adapter, a proxy implements the same interface as the subject.
>
> **[1:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=96)** So I'll go ahead and have class FS_Proxy, and we'll make sure that we return this class, and we are going to be overwriting readFile, so we want to make sure that we have the same interface.
>
> **[1:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=110)** The readFile method takes in a path, a format, and it has a callback method.
>
> **[1:56](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=116)** So we want to make sure that the interface for our readFile method is just like we use it on line 22, we send in a path, a file format and a callback function.
>
> **[2:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=126)** Now, one of the other things to remember when creating proxy files, is they should match the full interface of your object.
>
> **[2:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=132)** For brevity, we're only going to implement readFile, but we should have writeFile, appendFile, and all of the methods of the file object when implementing a proxy.
>
> **[2:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=143)** One solution for this is we can simply clone all of the methods and overwrite the ones that we want to use.
>
> **[2:28](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=148)** But we want to make sure that we have the exact same interface as the real file system, so that we don't have any errors in our client code.
>
> **[2:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=155)** So, for brevity, we're only going to deal with the readFile method at this time.
>
> **[2:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=159)** So, when we invoke the FS_Proxy, we're going to have a little constructor that saves the subject, we'll say FS_subject, so that's the real file system, and this proxy controls access to the real file system, so we'll just save that within this class as FS.
>
> **[2:56](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=176)** So the next thing that we want to do is actually write the code that prevents us from reading files that aren't Markdown files.
>
> **[3:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=182)** So, in here all I need to do within the read file, is check the path.
>
> **[3:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=186)** If our path doesn't contain, so if it doesn't match this regular expression that we're about to create, where the file extension at the end is Markdown, or it's capital Markdown, do case sensitive, so if we don't have a .md extension at the end, then what we're going to do is return our callback, but we're going to send a new error in it.
>
> **[3:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=207)** So, if the file doesn't have an extension, we're just going to return the callback immediately with a new error that we've created here in this proxy.
>
> **[3:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=214)** Now, if it does have a Markdown extension, we won't hit this return call on line 10, which means we will execute code after that, so this is where we want to use the actual file system to invoke the readFile.
>
> **[3:46](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=226)** So we're protecting access to the real readFile function within our proxy, but we have a Markdown file at this point, so we will read from that path, format, and instead of using that callback we're going to go ahead and use our own callback here, and this will give us the error in the data of the file that we just read, where we'll call it contents, just to keep it all matched up.
>
> **[4:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=249)** So if we have an error reading the actual file that was sent to us, we'll go ahead and throw that error to the console, and then we also need to make sure we return so we will send that error to the callback.
>
> **[4:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=259)** Now, if we don't have an error reading this file, then this file has successfully been read.
>
> **[4:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=263)** So we can also return callback null, so we don't send an error, and then the contents.
>
> **[4:29](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=269)** So now we've created an FS_Proxy that controls access to the readFile method, and it will only let us read Markdown files.
>
> **[4:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=276)** Let's go ahead and give it a shot.
>
> **[4:37](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=277)** So, we'll go to our code and type node index.js, and it looks like we forgot to use the new keyword when invoking the proxy, let me go ahead and add that there to line four.
>
> **[4:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=290)** So, we'll go ahead and clear this and try it again, and notice we see a little ding, and it says, Can only read Markdown files, so we're throwing an error and exiting the program.
>
> **[4:59](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=299)** Whenever we get a result on line 11, if there is an error, we're console logging a little ding.
>
> **[5:04](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=304)** So that's how the 'boomp' happens, and then we are actually putting the error out there.
>
> **[5:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=308)** And we can see that the error that we're seeing is the one that we've created, Can only read Markdown files.
>
> **[5:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=314)** Additionally, we call process.exit on line 14.
>
> **[5:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=317)** Now let's not try to read the text file.
>
> **[5:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=318)** I'm going to go ahead and comment this line out.
>
> **[5:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=320)** I'll even comment out the file path to the text file.
>
> **[5:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=323)** Let's just try to read the Markdown file this time and see if it works.
>
> **[5:26](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=326)** Here we see that we are allowed to read the Markdown file, that doesn't cause any sort of an error.
>
> **[5:31](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=331)** So the real key here is that our proxy object works just like the file system object.
>
> **[5:37](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=337)** It has the same interface, we have a readFile method.
>
> **[5:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-a-proxy?u=76281980&t=340)** The difference is, is the proxy object controls access to the real file system, and will only let us read files when we have a Markdown file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), interface (6), function (2), require (1), delete (1)
> **Code Identifiers:** readfile (10), writefile (1), appendfile (1)
> **CLI Commands:** make (5), node (1)
> **File Paths:** index.js (3)
> **Analogies:** just like (3)
> **Definitions:** is an  (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)

#### The Composite pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=0)** - [Instructor] Sometimes, we want to perform the same operation on an individual element as we would a group of elements.
>
> **[0:06](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=6)** Consider the grape..
>
> **[0:07](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=7)** I could tell you to eat a grape, and you'd know what to do with it.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=11)** I could also tell you to eat these grapes, and so long as your hungry for grapes, you would then eat them all, one by one.
>
> **[0:17](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=17)** In this example, the eat method can be used on a single grape, or a group of grapes.
>
> **[0:21](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=21)** It will handle both cases accordingly.
>
> **[0:23](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=23)** Composites work with trees, and when it comes to programming, trees are everywhere.
>
> **[0:28](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=28)** One of the most common trees that we interact with is the file system, and the file system directories can be used to group files in other directories.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=35)** The nodes that contain groups of other nodes are referred to as branches, and the file system, a file folder, represents a branch.
>
> **[0:42](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=42)** If we traverse the tree, we will eventually end up with nodes that do not contain or group other nodes.
>
> **[0:47](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=47)** These nodes are referred to as leaves, and in the file system, each file would represent a leaf.
>
> **[0:52](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=52)** A composite is a leaf, or a branch, and the composite's design pattern allows you to organize your objects in a way that treats leaves and branches uniformly.
>
> **[1:00](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=60)** The Gang of Four define the intent of the composite pattern as composing objects into tree structures to represent part-whole hierarchies.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=68)** Composite lets clients treat individual objects and compositions of objects uniformly.
>
> **[1:13](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=73)** And that's exactly what we find in our exercise files under Chapter 3, Lesson 5.
>
> **[1:17](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=77)** You will notice that there's a catalog item class.
>
> **[1:20](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=80)** A catalog item has a name and a price, it has a getter that returns the price for the catalog item, and it also has a print method that will print a name and the price to the console.
>
> **[1:29](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=89)** Let's consider using this catalog item.
>
> **[1:32](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=92)** If you look at the index.js file, you will see that we create three instances of catalog items.
>
> **[1:37](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=97)** All of them are shoes..
>
> **[1:39](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=99)** So, we have boots, sneakers and flip flops, and they each have a name and price.
>
> **[1:43](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=103)** I could log the total for any of these instances, and on line 7, we go ahead and log the boots total to the console.
>
> **[1:49](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=109)** I can also invoke the print method on either of these items, and we can take a look at this by going to the console and running our index.js file.
>
> **[1:58](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=118)** And we can see the total for the boots, as well as the print method working on leather boots and kicks.
>
> **[2:03](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=123)** So, the idea behind composites, is we have a single item..
>
> **[2:07](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=127)** A catalog item, in this case, would represent a leaf.
>
> **[2:09](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=129)** We want to create a class that could represent the branch, like catalog group.
>
> **[2:14](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=134)** So, let's say that we had a catalog group class, and we could create a new catalog group, like group shoes.
>
> **[2:22](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=142)** And we'll give the shoes group the name Shoes and Such, and we want to pass in an array of items that are contained in this catalog group, so we'll have boots, sneakers and flip flops.
>
> **[2:33](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=153)** Great..
>
> **[2:34](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=154)** So, now that I've created a catalog group..
>
> **[2:35](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=155)** In order to work with composites, this group needs to implement the same interface as the catalog item, or the leaf.
>
> **[2:42](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=162)** So, that means that we should be able to log the total for the whole group.
>
> **[2:47](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=167)** And, just like we can log the total for an item, we use the exact same interface to do that.
>
> **[2:52](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=172)** That also means that we should be able to print the details for the entire group.
>
> **[2:57](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=177)** Now, just adding the same interface to the catalog group does not make a composite.
>
> **[3:02](https://www.linkedin.com/learning/node-js-design-patterns/the-composite-pattern?u=76281980&t=182)** In the next lesson, we're going to go ahead and implement the catalog group, and we can see how we can arrange our catalog into a tree, where we can use the total, and the print method, recursively.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (2), class. (1), case, (1), class, (1)
> **Definitions:** means that (2), is a  (1)
> **File Paths:** index.js (2)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Implementing composites
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=0)** - [Instructor] In the last lesson, we defined the composite design pattern, and we took a look at a place where it might be useful, a catalog.
>
> **[0:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=6)** So I'm under the exercise files for chapter three, lesson six, and we're looking at our start folder.
>
> **[0:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=12)** So these files, we created a few catalog items, and in the last lesson we also created a catalog group.
>
> **[0:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=18)** We didn't actually program the catalog group class, so let's go ahead and do that.
>
> **[0:22](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=22)** Let's go to our start folder, and create a new file, and we'll call it catalog group.
>
> **[0:26](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=26)** And, inside of our catalog group file, what we want to do is make sure that our class for our catalog group, which will represent our branch, implements the same interface that our class for the catalog item would implement, so we want to make sure that we have a total, getter, so our catalog group will allow us to get a total, and a print method, so we can also print all of the details for our catalog group.
>
> **[0:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=49)** And we'll go ahead and export our class.
>
> **[0:51](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=51)** And if we look at our index.js file, when we create a new catalog group, we're expecting the name of the catalog group, as well as a list of catalog items, or other catalog groups.
>
> **[1:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=62)** So let's go ahead and add the constructor, so we'll add a name, and we will set this instance's name, based on the value that is sent to the constructor.
>
> **[1:11](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=71)** Now, the second value that we're sending here is an array, in this case it's just of boots, sneakers and flip flops, but the key to this is that this array can be catalog items, or other catalog groups.
>
> **[1:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=83)** So we're going to refer to this value as composites.
>
> **[1:26](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=86)** These are our composites, and we will also set a composites value on the instance.
>
> **[1:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=93)** Now, when we want the total cost of an entire catalog group, we will loop through our composites, using the reduce method to tally the total.
>
> **[1:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=100)** So, let's go ahead and return, this.composites.reduce.
>
> **[1:45](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=105)** So the reduce method is going to be used to reduce the entire array to a single numeric value, the total of all of the values, that are stored within this array.
>
> **[1:54](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=114)** So, the second argument of the reduce method is going to be our starting total, which is zero, and then, the first argument is a function, which takes in the total, as well as the next item.
>
> **[2:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=126)** And what we're going to do is we're going to take that total, and we're going to add it to the next item's total.
>
> **[2:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=132)** And this method will actually loop through all of our composites, using the total field, and it will tally them up, it will add each value to the total, and we should return one number, which will be the total for the entire group.
>
> **[2:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=145)** Let's go ahead and implement the print method.
>
> **[2:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=147)** Now, the same idea is true for the print method.
>
> **[2:29](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=149)** In a group, we want to print all of the items that are saved under our composites.
>
> **[2:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=154)** So the first thing we're going to do is just log the name of the group.
>
> **[2:37](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=157)** We'll do a little new line, and then this.name, and we'll also convert it to uppercase, so that we can see that pretty clearly, and now, we also want to make sure that we print every item, or other catalog group that's saved in our composites.
>
> **[2:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=173)** So, we'll add this.composites, for each to loop through all of 'em, and we will invoke the print on the item.
>
> **[3:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=182)** And again, this print method can be for an individual item, or an entire group, we are treating both of these types uniformly.
>
> **[3:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=189)** So let's go ahead and save this, and see if our index file where we created our group shoes works.
>
> **[3:15](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=195)** We can go out to the console, we can go out to our terminal and node index.js, and we can see that we are printing our catalog group.
>
> **[3:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=203)** So shoes and such, the print method is working, and we see leather boots, kicks, and California work boots are saved in that group.
>
> **[3:30](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=210)** So let's go ahead and enhance our client code a little more.
>
> **[3:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=212)** The idea behind catalogs is because we are treating both items and groups uniformly, this will allow us to compose tree structures.
>
> **[3:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=219)** So before I create an entire catalog, I want to create another group.
>
> **[3:43](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=223)** I'm going to create a group for food, and this will be a new catalog group, and we will call this group, food for while you try on clothes, so this store has some food for while you are trying on your clothes.
>
> **[3:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=237)** So we'll go ahead and do a new catalog item, and we could just add these items directly to the array that we're sending to the catalog group constructor, so the first item I'm going to add is a new catalog item called milkshake, and we'll make sure that's 5.99, and then we'll also add another catalog item for some fries, and we will make those 3.99.
>
> **[4:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=258)** Additionally, I'm going to create just a random item, like a key chain, so this is something that you could sell at the counter of a store, but I just want one item on its own, so we can compose a tree.
>
> **[4:30](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=270)** So additionally I'm going to create a one-off item, like a key chain, that we can just add to our catalog, without having to add it to a group.
>
> **[4:37](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=277)** The next thing I'm going to go ahead and do is just remove all of the printing that we've currently been doing to the console, and I'm going to go ahead and create my entire catalog.
>
> **[4:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=284)** Now, the catalog itself is also a catalog group, so it's a branch, this is just the root branch, and we will name the entire catalog for this store Clothes and Food.
>
> **[4:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=293)** And, this is the real fun part, when we add the composites, they can be catalog items, but they can also be catalog groups.
>
> **[5:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=302)** So here, our entire catalog consists of a key chain, a group of shoes that has three shoes, and a group of food that has two food items.
>
> **[5:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=309)** So let's go ahead and check our catalog's price, so we'll go ahead and log the catalog price, just by getting the total, and let's go ahead and print our catalog.
>
> **[5:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=319)** And we should print the entire catalog, and see the entire tree.
>
> **[5:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=323)** So, I'll go ahead and clear this out.
>
> **[5:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=325)** Node index.js, and now we can see that the total for all of the items in our catalog is 150 dollars and 94 cents, and then, when we print the catalog, we notice that our catalog is called Clothes and Food, we print the key chain item, and then we print the entire group, shoes and such, so we see the name for the shoes and such, and we print all of the items in that group, and then we come back out and print the other entire group for food for while you try on clothes.
>
> **[5:51](https://www.linkedin.com/learning/node-js-design-patterns/implementing-composites?u=76281980&t=351)** So the neat thing about composites, is it allows us to compose trees, where we treat the branches and the leaves of the tree, in a uniform manner.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (3), class, (1), implements (1), interface (1)
> **CLI Commands:** make (5), node (2)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **File Paths:** index.js (3)
> **Versions:** 5.99 (1), 3.99 (1)
> **Cross-References:** in the last (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)

#### The Decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=0)** - [Instructor] A decorator is a design pattern that allows us to dynamically attach additional properties and methods to existing objects.
>
> **[0:07](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=7)** For example, let's say you wanted to build a camper van.
>
> **[0:10](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=10)** You could start from scratch and design a brand new camper van, and then build it so that you could live in it.
>
> **[0:15](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=15)** Or you could simply start with a plain old work van and add the features that you need to the already existing vehicle.
>
> **[0:22](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=22)** With this approach you don't have to worry about building an engine, axles, or van body.
>
> **[0:26](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=26)** You already have all that.
>
> **[0:27](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=27)** All you need to worry about is modifying the van so that it has a bed, a sink, and a stove.
>
> **[0:32](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=32)** Sometimes in our applications we already have the base objects that we need.
>
> **[0:36](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=36)** We can decorate these objects with additional methods and properties to create many custom variations of the same object.
>
> **[0:43](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=43)** The Gang of Four defines the intent of the decorator pattern to attach additional responsibilities to an object dynamically.
>
> **[0:49](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=49)** Decorators provide a flexible alternative to sub classing for extending functionality.
>
> **[0:54](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=54)** Let's take a look at an example where a decorator might come in handy.
>
> **[0:57](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=57)** Under our exercise files, in chapter three, lesson seven, in the start folder, you will notice that we have a shopper.js class.
>
> **[1:05](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=65)** Now for this example, the shopper.js is really unimportant.
>
> **[1:09](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=69)** It's important to know that a shopper has an account, and that they can purchase items.
>
> **[1:13](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=73)** If they have enough money in their account, then the items that they purchase will be saved to an array called items.
>
> **[1:19](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=79)** They can also print their status which will let us know how much money they have in the account, as well as what items the shopper has purchased.
>
> **[1:26](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=86)** We also have an inventory item.
>
> **[1:28](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=88)** So the inventory item just has a name and a price and a print method that prints the name of the item alongside of the price.
>
> **[1:35](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=95)** If we look at our index.js file, we can see how these objects will interact with one another.
>
> **[1:39](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=99)** We create a new shopper on line four, Alex with a hundred dollars, and we create a couple inventory items on line six and seven, a walkman and a necklace.
>
> **[1:48](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=108)** So, Alex can purchase a necklace and Alex can purchase walkman.
>
> **[1:53](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=113)** So when we print the status, Alex will have a necklace and a walkman and the funds should be subtracted from Alex's account.
>
> **[1:59](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=119)** So let's go over to our terminal and run this.
>
> **[2:02](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=122)** Index.js.
>
> **[2:03](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=123)** And we can see that we've purchased the necklace, we've purchased the walkman, and I now have two items.
>
> **[2:08](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=128)** I also only have 60 dollars left in my account.
>
> **[2:11](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=131)** So, so far we haven't used the decorator design pattern.
>
> **[2:13](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=133)** The decorator design pattern is going to come into play if we want variations on our inventory item.
>
> **[2:20](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=140)** For example, let's say we wanted a golden inventory item or a diamond inventory item.
>
> **[2:25](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=145)** So we can create those classes as well.
>
> **[2:27](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=147)** And I'm going to do it in the same file so we will just dis-structure our new inventory item decorators.
>
> **[2:34](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=154)** There we go.
>
> **[2:35](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=155)** So, we're going to import the inventory item, the golden inventory item in the diamond inventory item all from the same file.
>
> **[2:43](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=163)** So the idea here is that we can dynamically take a regular necklace and make it out of gold.
>
> **[2:48](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=168)** So I can say var gold necklace, which will be a brand new instance, is going to equal a new golden inventory item, and I'm going to send it the regular item.
>
> **[3:00](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=180)** So the item that we're actually going to start with.
>
> **[3:02](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=182)** Our base item is a necklace.
>
> **[3:04](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=184)** Our upgrade is the golden necklace.
>
> **[3:06](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=186)** Now the neat thing about inventory items is we can actually apply multiple modifications to them.
>
> **[3:11](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=191)** So I can create a diamond, gold necklace and we can create that using the new diamond inventory item and we can also add the gold necklace.
>
> **[3:24](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=204)** So in order to create a diamond and gold necklace, we will start with the base gold necklace, which is going to start with the base necklace class.
>
> **[3:33](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=213)** So the key here is that we are doing all of this dynamically.
>
> **[3:36](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=216)** We can also create a diamond walkman.
>
> **[3:39](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=219)** New diamond inventory item.
>
> **[3:42](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=222)** And we will use the base walkman instance, and we will just make sure that we add a new variation to that, the diamond walkman.
>
> **[3:50](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=230)** So here's an example of how we would use decorators to enhance already existing object instances.
>
> **[3:56](https://www.linkedin.com/learning/node-js-design-patterns/the-decorator-pattern?u=76281980&t=236)** In the next lesson, let's go ahead and implement the golden inventory item and the diamond inventory item classes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), class. (2), this. (1), var (1)
> **File Paths:** shopper.js (2), index.js (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)

#### Implementing decorators
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=0)** - [Instructor] In the last lesson, we defined the decorator pattern, as well as added a couple of decorator classes to some existing code.
>
> **[0:07](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=7)** I'm looking at the exercise files found under Chapter Three, Lesson Eight, within the Start folder.
>
> **[0:13](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=13)** We added the GoldenInventoryItem and DiamondInventoryItem to this index.js file, and we also created golden necklaces, A Diamond Gold Necklace, and a Diamond Walkman.
>
> **[0:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=25)** In this lesson, we need to actually write the code for the GoldenInventoryItem and DiamondInventoryItem decorator classes.
>
> **[0:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=32)** So let's go ahead and open up our inventory item file.
>
> **[0:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=36)** So we'll go ahead and add the decorators right here, next to the InventoryItem.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=39)** So I'm going to go ahead and add a class GoldenInventoryItem, and a class for DiamondInventoryItem, and we're just going to export all three of these things together within the same object, so I'll make sure that I export my GoldenInventoryItem class and DiamondInventoryItem class, right in my module exports.
>
> **[1:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=60)** And that's because we are actually pulling all of these three items from the same InventoryItem module.
>
> **[1:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=66)** So for GoldenInventoryItem, what we want to do is give it a constructor, and the constructor takes in the baseItem.
>
> **[1:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=74)** And what we're going to do is we're going to add to the existing baseItem.
>
> **[1:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=77)** So the golden item's name will have "Golden" in it.
>
> **[1:22](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=82)** So we'll take the baseItem name, and we'll extend it by adding the word Golden in front of it.
>
> **[1:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=87)** We'll also take the price of the item, so whatever the baseItem price is, we'll just add 1000 to that.
>
> **[1:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=94)** So we are extending the baseItem.
>
> **[1:37](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=97)** It costs a little more, and the description has changed.
>
> **[1:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=100)** Let's do the same thing with the DiamondInventoryItem.
>
> **[1:42](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=102)** So we'll create a constructor, so again we're taking in the baseItem and we want to decorate it, so this.name is going to equal Diamond, and the DiamondInventoryItem will also affect the price, so this.price is also going to be another 1000 plus baseItem price.
>
> **[2:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=120)** Now, decorators do not have to match the exact same interface, they don't have to have the exact same fields and methods that our baseItem has.
>
> **[2:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=129)** We can actually add more functionality.
>
> **[2:11](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=131)** For instance, the Diamond can cut glass.
>
> **[2:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=134)** So this.cutsGlass is equal to true.
>
> **[2:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=138)** We can also overwrite or modify any of the methods.
>
> **[2:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=140)** So when we print the diamond, we'll do something a little different, we'll go ahead and console log this.name costs a lot of money.
>
> **[2:30](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=150)** So these items are decorators.
>
> **[2:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=152)** They take in a base item, or a base class, and they extend its functionality.
>
> **[2:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=156)** In this case, we add some more to the price.
>
> **[2:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=158)** We change the description of the item.
>
> **[2:41](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=161)** And in the case of the DiamondInventoryItem, we've overwritten the print method.
>
> **[2:46](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=166)** So now let's go into our index.js file, and let's see what happens if Alex purchases a Diamond Gold Necklace, and Alex purchases a Diamond Walkman.
>
> **[2:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=177)** So we'll go ahead and save that, and then come out to our terminal and run our application, node index.js.
>
> **[3:05](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=185)** And we see that we cannot afford a Diamond Gold Necklace, and we cannot afford a Diamond Walkman, so I haven't purchased any items.
>
> **[3:11](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=191)** What we're going to have to do is give Alex some money so that he can make these purchases.
>
> **[3:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=194)** Let's give Alex $3000 dollars.
>
> **[3:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=197)** So we've changed the value that we sent to the Shopper constructor on line eight, and then we're going to come out here in the terminal and run our application again.
>
> **[3:26](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=206)** And when we do so, we can see that we're purchasing the Golden Necklace and we cannot afford the Diamond Walkman, because the Diamond Walkman's very expensive, we actually have to give Alex $4000 dollars to be able to afford that, so I'll change that value one more time, clear this, and then node our index.js.
>
> **[3:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=224)** And there we go, so Alex can finally afford both the Diamond Golden Necklace and the Diamond Walkman.
>
> **[3:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=230)** So you can see that I've purchased two items.
>
> **[3:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=232)** And, we extended the base inventory item.
>
> **[3:55](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=235)** The base item was called the Necklace.
>
> **[3:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=237)** Well, we took the Necklace and made it a Golden Necklace, added 1000 to its cost, and then we took the Necklace and made it a Diamond Golden Necklace and added another $1000 dollars to the cost.
>
> **[4:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=246)** And the Diamond Walkman also adds $1000 dollars to the walkman cost, as well as it adds the word Diamond in front of it.
>
> **[4:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=252)** Let's go ahead and print our walkman, and see what we get with that.
>
> **[4:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-decorators?u=76281980&t=256)** So I've added a call to the print method on the Diamond Walkman, and then when we run that, we see that the Diamond Walkman costs a lot of money.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (4), class, (2), module (2), interface (1)
> **Code Identifiers:** baseitem (8), cutsglass (1)
> **File Paths:** index.js (4)
> **CLI Commands:** make (2), node (2)
> **Tools:** terminal (2)
> **Cross-References:** in the last (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)


### 4. Behavioral Patterns

> [↑ Back to Table of Contents](#table-of-contents)

#### Chain of responsibility
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=0)** - [Instructor] Think about ordering a sandwich from your favorite sub shop.
>
> **[0:03](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=3)** The first thing that you might be asked to select is the bread.
>
> **[0:06](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=6)** Then you might have to select the meat.
>
> **[0:08](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=8)** Followed by the cheeses.
>
> **[0:10](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=10)** Followed by the vegetables.
>
> **[0:11](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=11)** And finally to the condiments.
>
> **[0:13](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=13)** You're sandwich gets made on an assembly line.
>
> **[0:15](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=15)** The steps that go into making that sandwich are ordered.
>
> **[0:18](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=18)** And you can claim the sandwich at any point in the process.
>
> **[0:21](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=21)** If you only want meats and cheeses, then the sandwich doesn't need to complete the rest of the steps on line.
>
> **[0:26](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=26)** You can just take it and eat it.
>
> **[0:27](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=27)** This analogy is similar to the Chain of Responsibility design pattern.
>
> **[0:31](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=31)** This pattern allows us to chain together objects to handle a request.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=35)** A request is sent to an object to handle it and then that handler could process the request and return a result, or it could pass the request on to the next handler.
>
> **[0:44](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=44)** Which could return a result or pass the request on to the next handler.
>
> **[0:48](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=48)** All the way down the chain until you get to the last handler, which will always return some sort of result.
>
> **[0:54](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=54)** The Gang of Four defines the intent of the Chain of Responsibility as, avoid coupling the sender of a request and its receiver by giving more than one object a chance to handle the request.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=63)** Chain the receiving objects and pass the request along the chain until an object handles it.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=68)** Let's take a look at some code that we can help improve off the Chain of Responsibility design pattern.
>
> **[1:13](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=73)** I'm looking at our exercise files in Chapter four.
>
> **[1:15](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=75)** Chapter four, lesson one.
>
> **[1:17](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=77)** And within the start folder we already have some files.
>
> **[1:20](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=80)** So take a look at the index.js file.
>
> **[1:22](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=82)** So we are using the Store and we are pulling our inventory data from an adjacent document.
>
> **[1:26](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=86)** On line four, when we instantiate a ski shop, we send it the inventory that's on the floor at the store.
>
> **[1:31](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=91)** So we can search for an item like ski hats.
>
> **[1:34](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=94)** If I come over here to the terminal to run this, node index.js, we can see that we find that item and that we have 15 of 'em.
>
> **[1:41](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=101)** The inventory is actually coming from the inventory json data document.
>
> **[1:45](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=105)** And you can see that we have more options than just the floor.
>
> **[1:48](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=108)** We have the floor, the back room, a local store, and the warehouse.
>
> **[1:52](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=112)** So if a user wants to find an inventory item, we should actually search all of these places.
>
> **[1:57](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=117)** For instance, if I change our index to search for ski poles and then run the application, I get an undefined.
>
> **[2:04](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=124)** Meaning we can't find ski poles on the floor, but we haven't searched the other locations.
>
> **[2:09](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=129)** We can modify the Store to use the Chain of Responsibility design pattern to improve the Store's find method.
>
> **[2:14](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=134)** Let's go ahead and take a look at how that would work.
>
> **[2:17](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=137)** First, in the index.js, we need to send the entire inventory catalog to the store, not just the items on the floor.
>
> **[2:25](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=145)** And now, we're sending the entire catalog of inventory that's available to the ski store to the actual Store instance.
>
> **[2:34](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=154)** In the Store, I'm going to import a new class called Storage.
>
> **[2:38](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=158)** So now in the Store's constructor, as opposed to just setting up an inventory for the store, we are going to set up several storage locations using our new objects.
>
> **[2:46](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=166)** We'll have the floor, and we'll pass it the inventory that is found on the floor.
>
> **[2:52](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=172)** We're also going to have a back room, and we'll pass it the inventory for the back room.
>
> **[3:00](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=180)** That's all lower case.
>
> **[3:02](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=182)** We also have a local store that we can search if we cannot find you're item on the floor or in the back room.
>
> **[3:12](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=192)** And then finally, we have a warehouse.
>
> **[3:15](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=195)** Which is the last location we will search for an item and if we can't find the item there, then the store simply doesn't carry it.
>
> **[3:23](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=203)** Now the thing about getting inventory items from a local store or a warehouse, is that might take some time.
>
> **[3:29](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=209)** So I'm going to add another argument here, which is the time and days it might take your inventory item to reach our store if it's found in another store.
>
> **[3:36](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=216)** That will only take one day to get it here from a local store.
>
> **[3:39](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=219)** We're going to assume that it will take five days to get it to this store from the warehouse if we happen to find the item there.
>
> **[3:44](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=224)** So now we'll set this storage, the storage for this store, to the floor.
>
> **[3:50](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=230)** So that's the first place we're going to look for items.
>
> **[3:52](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=232)** And then I can take the floor and call set next and set the next place to look for items, which would be the back room.
>
> **[4:00](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=240)** And I can take the back room and call set next, which will be the next place we'll look for items, which will be the local store.
>
> **[4:07](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=247)** And the local store we can set next on this object to look in the warehouse.
>
> **[4:13](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=253)** And the next thing that we want to do is modify the find method.
>
> **[4:16](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=256)** So instead of returning an item from this store's inventory, what we're going to try to do is find that item in storage.
>
> **[4:21](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=261)** So we will return this.storage.find item name.
>
> **[4:28](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=268)** Great, so this is how we can use the Chain of Responsibility design pattern.
>
> **[4:32](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=272)** The first request will be piped through several storage objects until the inventory item is found.
>
> **[4:36](https://www.linkedin.com/learning/node-js-design-patterns/chain-of-responsibility?u=76281980&t=276)** In the next lesson, we'll go ahead and implement the code that's necessary for the storage class.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (2), this, (1), case. (1), finally, (1)
> **CLI Commands:** find (10), node (1)
> **File Paths:** index.js (3)
> **Analogies:** similar to (1), for instance (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)

#### Implementing the storage class
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=0)** - [Instructor] In the last lesson, we added code to the store to use a storage class that implements the chain of responsibility design pattern.
>
> **[0:07](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=7)** In this lesson, we'll code the storage class so that we can search for inventory items in multiple locations.
>
> **[0:13](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=13)** I'm inside of the exercise files for chapter four, chapter four lesson two, and I'm inside of the start folder.
>
> **[0:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=19)** Within this folder I'm going to go ahead and add a new file called storage.js.
>
> **[0:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=23)** And in our storage file I'm going to go ahead and create a new class, storage, and we'll go ahead and give it a constructor.
>
> **[0:30](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=30)** And this class will take in the name of the storage location and also the inventory for that location.
>
> **[0:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=36)** And then finally we also are taking in a delivery time.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=39)** And I am going to default the delivery time to zero and the inventory to an empty array in case those values are not sent.
>
> **[0:47](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=47)** Those this.name is going to equal our name, this.inventory is going to equal our inventory, and this.deliverytime will equal the delivery time.
>
> **[0:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=57)** And then finally we're going to set up another variable.
>
> **[1:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=61)** And the next variable that we're going to set up is this.next.
>
> **[1:04](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=64)** So this is going to point to the next storage location that we should search if the inventory isn't found in the current one.
>
> **[1:10](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=70)** Right now I'm going to set this to null, because we don't have a next value.
>
> **[1:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=74)** So now I'm going to add a set next method to my storage class, and the set next is going to expect another storage class.
>
> **[1:22](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=82)** So this.next is going to be equal to the storage object that was sent to the set next method.
>
> **[1:29](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=89)** And then finally we're going to need to implement a fine.
>
> **[1:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=92)** And we're looking for items in the inventory by name.
>
> **[1:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=96)** So what I'm going to do to find inventory items is I'm going to create a new method called look in local inventory.
>
> **[1:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=104)** And for look in local inventory we're going to find the item much like we were looking for the item in the store.
>
> **[1:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=109)** That's by locating the index of the item, if we have one, by taking this.inventory, which remember, inventory consists of arrays of items, so we have a name and a quantity on those items.
>
> **[2:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=121)** So we're going to take this.inventory and we're going to map it, we're going to create a new array of just the item name.
>
> **[2:07](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=127)** So this will give me an array of all of the item names, all of the string names that are found in this location's inventory.
>
> **[2:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=134)** And then I can use the index of to just grab the one that matches our item.
>
> **[2:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=139)** And what I'm going to go ahead and do is now use the index to return the item.
>
> **[2:24](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=144)** So if we have an item it will get returned from the look in local inventory.
>
> **[2:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=147)** If we don't have the item we will return it undefined from look in local inventory.
>
> **[2:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=152)** So the next thing we're going to do is we're going to modify our find method to first look in the local inventory.
>
> **[2:37](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=157)** So I'm going to create a variable called found, and to find the item I'm going to look in our local inventory.
>
> **[2:43](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=163)** And I'll just pass at the item name that's sent to this storage's find method.
>
> **[2:48](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=168)** So if we find the item, what we're going to want to do is return it.
>
> **[2:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=172)** Otherwise we're going to want to look in the next location.
>
> **[2:55](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=175)** So if we do have an item that we found in the local inventory, let's just go ahead and return it.
>
> **[3:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=180)** So name and quantity are the main data points for the item, but the nice thing about he storage object is we can also add some information about where we found the item, like it's location.
>
> **[3:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=189)** And we found the item in this.name, so this storage location is where the item was found.
>
> **[3:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=194)** We can also add how long it will take the item to get there, so delivery time.
>
> **[3:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=198)** And we'll do a little if statement for this, so if this.deliverytime is equal to zero then we will go ahead and return the string now.
>
> **[3:28](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=208)** So meaning, if there's no days for delivery time, we can tell the customer that they can get the item now.
>
> **[3:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=213)** Otherwise what we're going to go ahead and do is return this.deliverytime, and I will go ahead and add to this string days.
>
> **[3:42](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=222)** So now we're sending the delivery time as a string, and the delivery time is either going to be now or a certain number of days.
>
> **[3:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=229)** Now here's the thing.
>
> **[3:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=230)** If we don't find an item in the local inventory for this storage object, then we want to look into the next inventory if there is one.
>
> **[3:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=238)** So what we're going to go ahead and do is actually add an else if here.
>
> **[4:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=242)** And if this storage object has a next object, then we want to make sure we look there.
>
> **[4:07](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=247)** So I'm going to go ahead and return this.next.find item name.
>
> **[4:11](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=251)** Now if this storage object doesn't have a next item and we haven't found the item itself, what we want to do is return a string saying that we don't carry this item.
>
> **[4:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=260)** Because we cannot find it in any of the storage locations at this point.
>
> **[4:24](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=264)** So this is our storage object, and remember, the store chains together the storage objects using the set next methods.
>
> **[4:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=272)** So line eight to 11, we create new storage locations, and then lines 13 through 15, we chain those storage locations together.
>
> **[4:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=280)** So finding an item will start with the current store's find method, but it will look through all of these storage locations.
>
> **[4:46](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=286)** Let's take a look at our index.js file.
>
> **[4:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=289)** So now, if we're looking for the item ski poles, which previously returned an undefined in the last lesson, let's go ahead and see if we can find it.
>
> **[4:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=297)** Node index.js.
>
> **[4:59](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=299)** And it looks like we cannot find our storage constructor, so I think I made my favorite mistake to make all the time, which is forgetting to export storage from the storage.js module.
>
> **[5:10](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=310)** So I'm going to go ahead and export that, and then we can try our code again.
>
> **[5:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=314)** Clear out the screen and then node index.js.
>
> **[5:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=317)** And it looks like we found our ski poles.
>
> **[5:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=319)** Where did we find them?
>
> **[5:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=320)** In the store's backroom.
>
> **[5:22](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=322)** When can we have these ski poles? Now.
>
> **[5:24](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=324)** So let's go ahead and search for another item inside of our index.js.
>
> **[5:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=327)** We can do our previous search for ski hats.
>
> **[5:30](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=330)** And we can come out and run the file.
>
> **[5:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=333)** And we can see that we have 15 ski hats on the store floor.
>
> **[5:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=336)** We can also get those items now.
>
> **[5:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=338)** Let's search for something that's not within this store.
>
> **[5:41](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=341)** So I'm going to go ahead and search for wax, and if we look at the inventory we can see that we don't have ski wax in the floor or in the backroom, but we do have some in the local store.
>
> **[5:51](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=351)** So let's see what our results return.
>
> **[5:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=353)** And we can see that we have found it in the local store and it will take one day to get here.
>
> **[5:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=358)** Finally, let's search for something that we only have in the warehouse, which is powder skis.
>
> **[6:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=363)** And if we go search for powder skis and run our application, we can see that we have 10 powder skis, but they're located in the warehouse so it will take them five days to get here.
>
> **[6:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-the-storage-class?u=76281980&t=372)** So all of this is possible because the store itself implements storage, and the storage object implements the chain of responsibility design pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (11), let (7), implements (3), class, (2), class. (1)
> **CLI Commands:** find (13), make (2), node (2)
> **File Paths:** index.js (4), storage.js (2)
> **Cross-References:** in the last (2), in the next (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### The Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=0)** - [Instructor] With the command pattern, commands are objects that contain all of the data necessary to execute a specific action on the client.
>
> **[0:07](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=7)** Think about boxes of furniture that need to be assembled.
>
> **[0:10](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=10)** Each box contains all of the parts necessary along with the instructions on how to assemble that piece of furniture.
>
> **[0:15](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=15)** A professional installer can open a box, follow the instructions and use the materials to assemble the furniture.
>
> **[0:22](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=22)** The installer doesn't need to know how to build each piece of furniture.
>
> **[0:26](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=26)** It doesn't matter to them because the instructions of how to build the furniture come with the box.
>
> **[0:30](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=30)** The installer can open a box, follow the instructions and assemble the furniture; and then they can move on to the next box.
>
> **[0:38](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=38)** In this analogy I like to think of each furniture package as a command.
>
> **[0:41](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=41)** They are all different, they contain different parts and different instructions.
>
> **[0:45](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=45)** The installer can execute a command.
>
> **[0:48](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=48)** They can follow the instructions, use the materials and complete the task.
>
> **[0:52](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=52)** The Gang of Four defines the intent of the command pattern as encapsulating a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
>
> **[1:04](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=64)** Let's take a look at some code where we can incorporate a command pattern.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=68)** So I'm inside of our Exercise Files folder, under Chapter 4, Chapter four, Lesson three, and within the Start folder you can see that we already have quite a bit of code.
>
> **[1:16](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=76)** So let's go ahead and run this code just to see what's happening and come over to the terminal, node index.js from this location.
>
> **[1:23](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=83)** And you can see we have a little application here that's prompting the user to enter a couple commands.
>
> **[1:27](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=87)** We can enter an Exit command and its says To Do, actually exit the application.
>
> **[1:32](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=92)** We can also enter this Create command.
>
> **[1:34](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=94)** So we can create a file like hello.txt Hello World.
>
> **[1:39](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=99)** So what we want this command to allow us to do is create a new text file called hello.txt and add Hello World to the contents of that text file.
>
> **[1:47](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=107)** And again, you'll see it says To Do, create text file hello.txt and the file contents, Hello World.
>
> **[1:53](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=113)** So if I go ahead and exit out of this with Ctrl-C I'll go ahead and clear the terminal for later.
>
> **[1:58](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=118)** We can come back over to the code and let's briefly talk about what's happening.
>
> **[2:02](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=122)** So we're building the prompt using the create interface method from read line.
>
> **[2:06](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=126)** And our process standard input and process standard output is going to be our interface.
>
> **[2:11](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=131)** And on line eight we are adding our first prompt.
>
> **[2:13](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=133)** Whenever the user enters any text we go ahead and handle it with this line event.
>
> **[2:18](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=138)** So the input comes in as their text.
>
> **[2:20](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=140)** And lines 12-14 are just a matter of parsing that text to find the command and the actual file name or a file text that would go into that command.
>
> **[2:29](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=149)** And then, finally, we have a switch statement where we are ready to run our commands.
>
> **[2:32](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=152)** So if we run an Exit, we've left ourselves a little to do for adding an Exit command; and if we run a Create, we've left ourselves a little to do for running a Create command.
>
> **[2:41](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=161)** So we've already parsed the file name and the text that would go into the file that needs to be created for you.
>
> **[2:45](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=165)** And then finally, if you don't run either of these commands, we're just letting you know that we don't know what you're trying to do.
>
> **[2:50](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=170)** The command text that you've sent is not found.
>
> **[2:53](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=173)** So what we're going to do is we're actually going to run these commands using the command pattern.
>
> **[2:57](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=177)** So let's take a look at what that might look like by adding the code to this file.
>
> **[3:02](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=182)** So I'm going to go ahead and go to the top.
>
> **[3:03](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=183)** The first thing that I need to bring in is something to run the command.
>
> **[3:07](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=187)** I'm going to call that the Conductor.
>
> **[3:09](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=189)** And we are going to go ahead and pull in the Conductor from the conductor.js file.
>
> **[3:15](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=195)** And then I'm going to go ahead and pull in a few commands.
>
> **[3:17](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=197)** I'm just going to put all of the commands in the same file so I can de-structure them.
>
> **[3:21](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=201)** I'm going to pull out the Exit command and I'm going to go ahead and pull out the Create command.
>
> **[3:26](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=206)** So these are the two things that we need to be able to do, exit the application and create a new file.
>
> **[3:31](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=211)** So we will package everything that we need to execute these commands into the command classes themselves.
>
> **[3:37](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=217)** So everything we need to run an Exit will be found in the Exit command, and everything we need to create a new file is found in the Create command.
>
> **[3:44](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=224)** And we will put both of these in a file called commands.js.
>
> **[3:48](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=228)** So using these commands will look a little something like this.
>
> **[3:51](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=231)** We can come down here for the Exit command and we can just tell the Conductor to run a new Exit command.
>
> **[3:58](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=238)** And this should cause us to actually exit the application.
>
> **[4:02](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=242)** We can also come down here to the Create command and we can tell the Conductor to run a new Create command.
>
> **[4:09](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=249)** And here's the neat thing, the Create command is going to create a file so the file name should be sent to it's constructor.
>
> **[4:16](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=256)** That's the file name we want to create and the text should also be sent to the constructor because that represents the contents that we want to create within that file.
>
> **[4:24](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=264)** So, in this example of what we just typed, we can see how we can use the command pattern.
>
> **[4:30](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=270)** One of the best things about this pattern is that it is completely extensible.
>
> **[4:33](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=273)** If we have a need for new commands, we can simply create a new command objects and run them with the conductor.
>
> **[4:39](https://www.linkedin.com/learning/node-js-design-patterns/the-command-pattern?u=76281980&t=279)** In the next lesson, we will write the code for each command class, along with the conductor, so that this application will work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (2), finally, (2), switch (1), this. (1)
> **File Paths:** hello.txt (3), index.js (1), conductor.js (1), commands.js (1)
> **CLI Commands:** node (1), find (1)
> **Tools:** terminal (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Implementing commands
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=0)** - [Instructor] In the last lesson we introduced the command pattern and we saw how we can incorporate that pattern into an already existing node app that implemented a read line interface.
>
> **[0:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=9)** In this lesson, we're going to implement the conductor that we're importing, as well as each command class that we're importing online, too.
>
> **[0:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=16)** So I'm in the exercise files, under chapter four lesson four, within the start folder.
>
> **[0:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=21)** And I'm going to go ahead and create a new file called commands.js.
>
> **[0:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=25)** And I'm going to go ahead and put all of my command classes within this file.
>
> **[0:28](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=28)** So we're going to need to create a class for the exit command and we're also going to need to create one for create command.
>
> **[0:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=36)** And then I'm just going to make sure that I export both of these.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=39)** Great, so now we have both classes and we're ready to export them.
>
> **[0:42](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=42)** Let's go ahead and write the code for our exit command.
>
> **[0:45](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=45)** So I'm going to write a getter to get the name of this command.
>
> **[0:48](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=48)** So we'll just go ahead and return a string.
>
> **[0:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=50)** This is an exit command, and we'll go ahead and add a bye to that.
>
> **[0:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=53)** Now each command must implement an execute method, and that's where we're actually going to write the code to execute this command.
>
> **[1:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=60)** So let's go ahead and execute.
>
> **[1:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=62)** And for the exit command we're just going to go ahead and exit.
>
> **[1:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=66)** And we'll go ahead and process.exit 0.
>
> **[1:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=69)** So great, that's our exit command.
>
> **[1:11](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=71)** Now before we actually write the code for the create command, let's go ahead and create the conductor and test our exit command.
>
> **[1:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=76)** So I'm going to go ahead and add a new file.
>
> **[1:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=79)** Conductor.js.
>
> **[1:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=81)** And within the conductor we'll create a new class called conductor, and we'll make sure we export that class.
>
> **[1:28](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=88)** And we'll make this a node js singleton, so we will export one instance of the conductor from this module.
>
> **[1:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=95)** So we're going to make sure that we only have one conductor by exporting one instance of the conductor versus exporting the entire conductor class.
>
> **[1:43](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=103)** So I'm going to go ahead and have a run method for the conductor.
>
> **[1:46](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=106)** And the run method is going to expect a command.
>
> **[1:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=110)** And then I'm just going to go ahead and log some information to the console, about which command we're actually running.
>
> **[1:55](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=115)** And we will send the command name.
>
> **[1:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=117)** And now we will actually execute command by invoking the execute method.
>
> **[2:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=121)** So this is why each command needs an execute method.
>
> **[2:04](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=124)** This is how we actually run the command.
>
> **[2:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=126)** Let's go ahead and test it out.
>
> **[2:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=128)** So I'm coming over to my terminal, and I will node index.js.
>
> **[2:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=132)** And if we type exit, the conductor should run our exit command.
>
> **[2:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=136)** And it does.
>
> **[2:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=136)** And we can see the message executing command, exit, bye.
>
> **[2:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=140)** So the first thing that we want to do is we need to require a few things.
>
> **[2:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=143)** If we're going to create a new file we need the right file method from the file system.
>
> **[2:29](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=149)** I'm also going to use the path module, so we need the path as well.
>
> **[2:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=153)** Now in the create command object itself we're going to go ahead and add the constructor.
>
> **[2:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=158)** Everything we need to create a file is being passed to this constructor already.
>
> **[2:41](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=161)** So I'm going to go ahead and grab the file name and the text for the file within the constructor, and we'll set up some variables.
>
> **[2:48](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=168)** This.fileName is going to be equal to the file name.
>
> **[2:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=172)** This.body will be equal to the file text.
>
> **[2:56](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=176)** And let's also set up a full path.
>
> **[2:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=178)** This.fullPath is going to equal path.join.
>
> **[3:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=181)** So we're going to take the current directory and we are going to add file name to it, creating the full path.
>
> **[3:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=188)** Great, so that's everything that we need to create a brand new file.
>
> **[3:11](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=191)** So I'm going to go ahead and also create a getter for the name, so that we know what command this is, and we're going to go ahead and return a create this.fileName.
>
> **[3:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=203)** So we know that this command is to create the specific file that we're creating with this instance of the create command.
>
> **[3:30](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=210)** So the next thing that we need is an execute method.
>
> **[3:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=212)** And this is where we're actually going to create the file.
>
> **[3:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=215)** So I'll go ahead and call it writeFile, and we'll go ahead and say this.fullPath.
>
> **[3:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=220)** So that's the file that we're going to create.
>
> **[3:41](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=221)** This.body, that's what we're going to write to the file.
>
> **[3:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=224)** And then we need to have a callback function here.
>
> **[3:45](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=225)** I'm not ready to code this callback function yet.
>
> **[3:48](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=228)** We're going to do it in a later lesson.
>
> **[3:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=229)** So what I'm going to put is just a placeholder function.
>
> **[3:51](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=231)** It's a dummy function that I like to use.
>
> **[3:54](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=234)** So f arrow f.
>
> **[3:55](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=235)** All this function means is that it's just a function that returns whatever argument is sent to it, which is typically undefined.
>
> **[4:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=241)** So it's just a placeholder function.
>
> **[4:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=243)** So let's go ahead and save this and then see if our create command works.
>
> **[4:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=246)** So I come back out to the terminal.
>
> **[4:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=248)** Okay, now I will run the application.
>
> **[4:10](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=250)** Node.index.js, and let's go ahead and try to create a file called hello.txt and we'll add Hello World to that file.
>
> **[4:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=259)** Ad it says executing command create hello.txt.
>
> **[4:22](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=262)** So it seems to have executed our command.
>
> **[4:24](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=264)** Let's try it one more time.
>
> **[4:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=265)** Create hi.txt, and we'll do Hi World in that one with one exclamation point.
>
> **[4:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=272)** And it says that we've also executed that command.
>
> **[4:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=274)** So if we go ahead and take a look at our file folder, we should see two text files.
>
> **[4:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=278)** We have one, hello text and one hi text.
>
> **[4:41](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=281)** So this is using the command pattern.
>
> **[4:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=284)** Everything that we need to create a file, encapsulate it inside of this create command that we coded inside of the commands.js module.
>
> **[4:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-commands?u=76281980&t=292)** In the next lesson we're going to go ahead and improve our conductor class to see the full power that you can get out of using the command pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (7), this. (6), module (3), class. (2)
> **File Paths:** commands.js (2), hello.txt (2), conductor.js (1), index.js (1), node.index.js (1)
> **CLI Commands:** node (4), make (4)
> **Code Identifiers:** filename (2), fullpath (2), writefile (1)
> **Cross-References:** in the last (1), in the next (1)
> **Tools:** terminal (2)
> **Definitions:** is an  (2)
> **Prerequisites:** set up (2)

#### Improving the conductor
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=0)** - [Instructor] In the last two lessons we introduced the command pattern and we even coded a few command objects.
>
> **[0:05](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=5)** We also coded a conductor.
>
> **[0:07](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=7)** And the conductor, at present, has a run method to run any of our command objects.
>
> **[0:12](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=12)** So in this lesson, we're actually going to show the power of the command pattern, by improving the conductor.
>
> **[0:17](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=17)** Now I'm inside my exercise files for chapter four, chapter four lesson five, which contains the files that we left off with in the last lesson.
>
> **[0:24](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=24)** Now since all of the commands are run through the conductor, we can actually do a bunch of awesome stuff with the conductor.
>
> **[0:29](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=29)** We can cue up commands, we can actually make sure that only a certain amount of commands are running each time, and another thing we can do is implement the history of all of the commands that we've run.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=39)** Let's go ahead and do that.
>
> **[0:40](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=40)** I'm going to go ahead and add a constructor to my conductor and we're going to add this.history as a field of the conductor.
>
> **[0:48](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=48)** So we now have an array that we can save the commands.
>
> **[0:50](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=50)** I'm going to go ahead and simply add a this.history.push command, to push the command into this array, right after we execute the command on line nine.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=63)** So once we've run a command, we'll put it into the history array.
>
> **[1:05](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=65)** This will allow me to print the history by adding a print history method and I can say this.history for each.
>
> **[1:15](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=75)** So for each command that we have in history, we can console.log that command's name.
>
> **[1:21](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=81)** And this will print a history of all of the commands that we've run in the terminal.
>
> **[1:26](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=86)** I'm actually not done with printing the history, there's some other cool stuff we can do.
>
> **[1:30](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=90)** If we have a history, we can actually undo and redo that history as well.
>
> **[1:35](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=95)** I'm going to go ahead and add another array for any commands that we might want to undo.
>
> **[1:39](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=99)** We're going to save them in this array, undone.
>
> **[1:42](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=102)** So this is going to be a list of undone commands.
>
> **[1:45](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=105)** So the conductor, we should be able to add an undo method.
>
> **[1:48](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=108)** And what I want to do inside of my undo method here, is I'm going to create a variable for the command that we're going to undo and I can grab that from history.
>
> **[1:58](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=118)** This.history.pop, we'll go ahead and pull out the last command and then, so long as the command implements an undo interface, we should be able to undo it.
>
> **[2:08](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=128)** So we're going to make that a requirement for any undoable commands, I'm not actually going to do a check for that for brevity.
>
> **[2:13](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=133)** But let's just call command undo.
>
> **[2:15](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=135)** And then we'll go ahead and add this command to the undone array.
>
> **[2:19](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=139)** So when we undo a command, we pull it from history, we invoke undo, and then we add it to the undone array.
>
> **[2:26](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=146)** So let me go into my commands.js and the exit command we cannot undo.
>
> **[2:30](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=150)** When we actually execute an exit, we leave the application.
>
> **[2:33](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=153)** But we can undo the create command, and we want to require that we actually have an undo method.
>
> **[2:39](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=159)** Since when we call undo with the conductor, our command needs to implement an undo method.
>
> **[2:45](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=165)** So in order to undo a create file, we need to delete the file.
>
> **[2:49](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=169)** So I'm going to come up here to line one and I'm also going to import the unlink method from the file system.
>
> **[2:54](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=174)** This method can be used to remove a file.
>
> **[2:57](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=177)** So coming back down here to undo, I'm simply going to run an unlink and this.fullpath and I'm also going to add another dummy function here, just a placeholder for the callback.
>
> **[3:08](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=188)** Again we're going to handle these callback functions in a later lesson.
>
> **[3:12](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=192)** So we'll go ahead and save our commands.js.
>
> **[3:14](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=194)** And let's go over to the conductor and do one more task.
>
> **[3:18](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=198)** Let's go ahead and implement a redo as well.
>
> **[3:21](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=201)** So under the undo, I'm going to implement a redo method.
>
> **[3:23](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=203)** And the redo is going to be, pretty much, the opposite of the undo.
>
> **[3:26](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=206)** We're going to grab the command from this.undone.
>
> **[3:29](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=209)** So if we want to do a redo, we have to grab whatever command was last undone.
>
> **[3:34](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=214)** And then we're going to go ahead and re-execute the command.
>
> **[3:37](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=217)** So that is redoing a command.
>
> **[3:39](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=219)** And since we've executed this command again, we want to say this.history.push command, because we've redone it.
>
> **[3:48](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=228)** Now the last thing we need to do is just add some logs, so that our users know that we're undoing and redoing commands, so we will add a console.log here and call it undo and then we'll put the command itself, command.name so we know that we're doing that.
>
> **[4:03](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=243)** And I'll go ahead and copy this console log and also add it to line 27, right after we pop the command from the undone array and we'll say redo.
>
> **[4:11](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=251)** So if our conductor keeps track of the commands that we've run, as well as the commands that we've undone, we can easily implement undo and redo functionality.
>
> **[4:20](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=260)** So let's go over to the index.js and we have a few more actions that users can take, so on line 10, I want to notify them that they can also check their history by typing history.
>
> **[4:31](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=271)** They can undo an event by typing undo, or they can redo by typing redo.
>
> **[4:37](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=277)** So we're letting our users know what is available to them through this interface and then we need to add these events too.
>
> **[4:42](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=282)** So for history, when our users type that, we're simply going to use the conductor.print history method.
>
> **[4:50](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=290)** Then we'll simply use the undo method on the conductor.
>
> **[4:54](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=294)** And the same thing for redo, so if we need to redo any undone commands, we can go ahead and say conductor redo.
>
> **[5:02](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=302)** There we go.
>
> **[5:04](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=304)** So now we've added some new functionality by adding those methods to our conductor and then running them when the user requests that command.
>
> **[5:10](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=310)** So let's go back over to our terminal and run this application.
>
> **[5:14](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=314)** And we'll create a few files.
>
> **[5:16](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=316)** So I'll go ahead and create a helloworld.txt hello world and we'll create a hiworld.txt hi world
>
> **[5:31](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=331)** and let's create one more.
>
> **[5:32](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=332)** We'll create yoworld.txt and we'll say yo world.
>
> **[5:37](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=337)** Now if I wanted to see what commands I've executed, I can type history and we can see that we've created hello world, we've created hi world, and we've created yo world.
>
> **[5:46](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=346)** In fact, if we come over to our files, we should see hi world, hello world, and yo world are now newly created text files within the start folder.
>
> **[5:55](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=355)** So let's go ahead and see what happens when we undo.
>
> **[5:57](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=357)** If I call undo, it says undoing create yo world.
>
> **[6:01](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=361)** I go back over to the folder, yo world has been removed, we don't see it anymore.
>
> **[6:06](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=366)** So I'll go ahead and undo again.
>
> **[6:07](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=367)** So now we've undone creating hi world.
>
> **[6:09](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=369)** Go over to the folder, we no longer see a hi world.
>
> **[6:12](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=372)** If I want to redo a command, I can simply type redo.
>
> **[6:15](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=375)** And now we have redone creating hi world, it's back in the folder and we can go as far as to redo one more time, to redo creating yo world back inside of the folder.
>
> **[6:25](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=385)** So as we can see, the command pattern is pretty powerful.
>
> **[6:28](https://www.linkedin.com/learning/node-js-design-patterns/improving-the-conductor?u=76281980&t=388)** If we take a look at the conductor, the conductor can save a history of the commands, as well as easily let us undo or redo commands through this one class.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (7), interface (2), implements (1), require (1)
> **File Paths:** commands.js (2), index.js (1), helloworld.txt (1), hiworld.txt (1), yoworld.txt (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (2)
> **Tools:** terminal (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### The Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=0)** - [Instructor] The iterator is a very common design pattern.
>
> **[0:03](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=3)** It gives us a uniform interface for interacting with lists, collections, arrays, or any type of aggregate object.
>
> **[0:09](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=9)** Iterators are designed to work with collections of data.
>
> **[0:12](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=12)** They give us a clear way to access the first data record, and then they give us a way to iterate through the rest of the rows within our data set.
>
> **[0:19](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=19)** It doesn't matter what type of data you're working with, iterators give us a clear way to iterate through any collection.
>
> **[0:25](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=25)** The Gang of Four defines the intent of the iterator as providing a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
>
> **[0:34](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=34)** Let's take a look at some code.
>
> **[0:36](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=36)** Within the exercise files, under chapter four, lesson six within the start folder, we have a couple of files already set up.
>
> **[0:42](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=42)** We have an inventoryitem.js, which has the class definition for an inventory item.
>
> **[0:47](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=47)** Inventory items just have a name and a price, and they also have a writeline method that will write that name and price to standard output.
>
> **[0:55](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=55)** We also have an index.js file, and before we look at the code of this, let's just go ahead and run it so that we can see what it does.
>
> **[1:01](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=61)** So if I run this file, node index.js, you can see that was see a message that says press any direction key.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=68)** Now as I press the arrow keys, we get to see what the last arrow key that I pressed was.
>
> **[1:13](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=73)** Notice that we're not doing this with console.log.
>
> **[1:15](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=75)** We're actually overwriting the last thing that we've written to the console, so that might be left or right or up or down.
>
> **[1:22](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=82)** Let's go ahead and stop this application and come back to the code.
>
> **[1:26](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=86)** So within the index.js, we do include the inventory item class, and we also set up an array of inventory items on line eight.
>
> **[1:33](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=93)** We'll come back to that in a minute.
>
> **[1:34](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=94)** Also on lines three and four, we set up standard input to listen for key press events through readline.
>
> **[1:41](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=101)** If we go down to line 19, we can see where we actually handle a key press event, and lines 21 and 22 clear the line and move the cursor to zero so that we can replace the text that was printed to the last line.
>
> **[1:51](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=111)** We're also checking the key.name in a switch statement and each of these cases respond to a specific arrow key.
>
> **[1:58](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=118)** So right now, all we're doing is writing right, left, down, or up to standard output.
>
> **[2:03](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=123)** What we want to do is when the user presses right, we want them to iterate to the next inventory item within this array.
>
> **[2:10](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=130)** If the user presses left, we want them to iterate to the previous item.
>
> **[2:13](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=133)** And up should take us to the first item of the array, and down should take us to the last item.
>
> **[2:18](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=138)** Now clearly, we know how to work with arrays well enough to actually just handle this directly in the handler.
>
> **[2:23](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=143)** We could save the current index to a variable and then use that to iterate through the array.
>
> **[2:28](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=148)** However, an iterator provides a uniform interface for iterating through any collection, so what we're going to do is we are going to create an iterator that we can use with this array of inventory items.
>
> **[2:39](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=159)** Let's take a look at what I mean by adding some code to this file.
>
> **[2:43](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=163)** So what we're going to do is we're going to create iterator class, and I'm going to import it here.
>
> **[2:48](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=168)** And then, instead of saving inventory to an array, we are actually going to make this an instance of our iterator class.
>
> **[2:55](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=175)** And now the iterator is going to give us a way to iterate through this array without having to worry about the mechanics of dealing with an array.
>
> **[3:02](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=182)** So let's go down to where we press the right key, and instead of pressing the right key, what we're going to do is type inventory.next.
>
> **[3:10](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=190)** The idea here is that inventory.next will return one instance of an inventory item, the next one that we're supposed to be looking at.
>
> **[3:18](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=198)** I'm going to go ahead and just chain on the writeLn, call to this next.
>
> **[3:23](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=203)** Because we have an inventory item, we can use its writeline method to go ahead and write the name and price of that item.
>
> **[3:29](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=209)** I'll go ahead and copy this line because when the user presses the left key, we'll do something pretty similar.
>
> **[3:35](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=215)** Instead of calling inventory.next, we'll just call inventory.prev.
>
> **[3:38](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=218)** This will give us the previous inventory item.
>
> **[3:40](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=220)** We're going to do the same thing for the down case, so whenever the user presses the down arrow, I will get the last inventory item, and whenever the user presses the up arrow, I will go ahead and get the first inventory item.
>
> **[3:55](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=235)** So this is how iterators are designed to make managing your collection, any collection, less complicated.
>
> **[4:00](https://www.linkedin.com/learning/node-js-design-patterns/the-iterator-pattern?u=76281980&t=240)** In the next lesson, we will implement the iterator class and make this application work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (2), class, (2), this, (1), switch (1)
> **File Paths:** index.js (3), inventoryitem.js (1)
> **CLI Commands:** make (3), node (1)
> **Prerequisites:** set up (3)
> **Code Identifiers:** writeln (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Implementing iterators
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=0)** - [Instructor] In the last lesson we introduced the iterator pattern and modified our code to use the pattern.
>
> **[0:05](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=5)** In this lesson, we're going to build the iterator class and make our application work.
>
> **[0:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=9)** So inside of the exercise files for Chapter Four, Chapter Four Lesson 7 and within the start folder I'm going to go ahead and create a new file that we're going to call iterator.js.
>
> **[0:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=19)** And for the iterator, I'm just going to create a class called Iterator and I'm going to make sure I export that class and I will come up within the class and then give it a constructor and when we create a new instance of the iterator, we need to collect an array.
>
> **[0:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=33)** I'm just going to call those Items and we will go ahead and add that to our constructor arguments.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=39)** We'll also default it as an empty array, so if we accidentally do not provide anything, we will have an empty iterator.
>
> **[0:45](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=45)** Now, the methods that we need to add to this are first, last, next and prev.
>
> **[0:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=53)** So the methods that we use for iterating to an object.
>
> **[0:56](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=56)** It's also a good idea with iterators to implement a hasNext or a function that will let us know if there's another record or if we're on the last one.
>
> **[1:04](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=64)** And also something that will give us the current.
>
> **[1:07](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=67)** And in case we don't want the next or the previous item but we just want to take a look at the current item again, we can access it through the current method.
>
> **[1:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=74)** So what we need to do is handle the mechanics of the array within this class, which means we need to save an index.
>
> **[1:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=80)** So I'm going to set the index to zero for the first item within the array and then I'm also going to save the item after this dot items.
>
> **[1:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=87)** So when we create a new iterator, the index to start off is zero and this dot items represents the items.
>
> **[1:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=94)** So if we want to get the current item and being that our current index is zero, all we have to do is come within this current method and return this dot items this dot index.
>
> **[1:46](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=106)** If we want to get the first item all we have to do is return this dot items zero.
>
> **[1:54](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=114)** Now, we could return this dot items zero but JavaScript actually provides us with a pretty cool way of doing this.
>
> **[1:59](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=119)** So I can actually destructure the first item from an array simply by surrounding that variable in brackets and now I can save this dot items and it will always give me the first item.
>
> **[2:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=129)** So I'll go ahead and put that out there instead of using the zero.
>
> **[2:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=132)** And the reason that I want to do that... So in order to get the last item I'm going to do something similar.
>
> **[2:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=137)** I'm going to destructure the first item from an array but the array that I'm going to destructure the first item from is going to be this dot items dot reverse.
>
> **[2:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=147)** Now, the problem with reverse is is if I actually run reverse on this dot items, it will change their order.
>
> **[2:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=153)** So I'm going to actually quickly use the spread operator to create a copy of this array.
>
> **[2:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=158)** So now I'm creating a copy of the items array, reversing it and then grabbing the first item from that array.
>
> **[2:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=164)** That is actually our last item.
>
> **[2:46](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=166)** So if we grab the first item from the reverse array, that's going to be our last item.
>
> **[2:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=169)** So I'm going to go ahead and change that to last and then return the last item.
>
> **[2:55](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=175)** Now let's check to see if we have a next item based upon the location of our current index.
>
> **[3:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=180)** So I'm going to return this dot index less than this dot items dot length minus one.
>
> **[3:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=188)** And now our hasNext will return a true if there is a next record, or a false if we're currently on the last record in the array.
>
> **[3:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=194)** Finally, we can come down here and code our next.
>
> **[3:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=197)** So what we're going to do is make sure that we have a next.
>
> **[3:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=200)** So if this dot hasNext exists then we will go ahead and say this dot index, we can increment it by one.
>
> **[3:29](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=209)** And then I'm going to return this dot current.
>
> **[3:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=212)** So we're going to increment the index by one and then return the current item based upon that index.
>
> **[3:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=218)** That will be our next record.
>
> **[3:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=220)** And then previous is going to be just a reverse of the same thing, so we're going to check the current index if this dot index is not equal to zero then we're just going to decrement the index.
>
> **[3:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=232)** This dot index minus equals one and then we will return this dot current.
>
> **[3:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=238)** So there is our iterator.
>
> **[3:59](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=239)** This class handles all of the mechanics for dealing with the array and now all we have to do is send an array to this class and we can access the next record, the previous record, the current record, the first record, the last record and we can also check to see if it even has a next record.
>
> **[4:15](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=255)** Let's go ahead and give this a shot.
>
> **[4:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=256)** Let me come over to the terminal and now I will type node index dot js and it looks like I need to spell require correctly.
>
> **[4:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=265)** So let me come in here into index file and where I include the iterator I forgot to spell require.
>
> **[4:31](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=271)** So let's go ahead and try this again.
>
> **[4:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=273)** I'll clear that message, node index dot js.
>
> **[4:37](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=277)** Now with the application running we can see that pressing the right arrow will iterate forward to the array.
>
> **[4:42](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=282)** Pressing the back arrow will iterate backwards to the array.
>
> **[4:45](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=285)** And then pressing the up arrow will take us to the first record and pressing the down arrow will take us to the last record.
>
> **[4:51](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=291)** So that's the point of an iterator.
>
> **[4:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-iterators?u=76281980&t=292)** I can now use this iterator class to iterate to any array without worrying about the mechanics of dealing with that array.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), require (2), function (1), class, (1), this. (1)
> **CLI Commands:** make (3), node (2)
> **Code Identifiers:** hasnext (3)
> **File Paths:** iterator.js (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### The Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=0)** - [Instructor] The most common analogy for the observer design pattern is a newspaper subscription.
>
> **[0:05](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=5)** Households can subscribe to particular newspapers.
>
> **[0:08](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=8)** When a new paper is printed the news organization delivers that paper to all of its subscribers.
>
> **[0:14](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=14)** The observer design pattern implements a similar approach.
>
> **[0:17](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=17)** Objects, called observers, can watch other objects for state changes.
>
> **[0:21](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=21)** These objects that can broadcast changes are known as observables.
>
> **[0:25](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=25)** In this example, a stoplight is an observable object.
>
> **[0:29](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=29)** Other objects can subscribe to the stoplight and watch it for state changes.
>
> **[0:33](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=33)** For example, a bike, a car, a bus.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=35)** They're all different types of objects, but they can all watch the stoplight object for changes and respond accordingly.
>
> **[0:41](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=41)** When the state of the stoplight changes, say from red to green, it can notify every object that has subscribed to it of this state change.
>
> **[0:48](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=48)** The key is that each observer object implements a method that the observable can invoke when there is a change.
>
> **[0:54](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=54)** In this case it's the notify method.
>
> **[0:57](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=57)** Observers are a very common design pattern, and they are extremely important to wrangling the asynchronous nature of node JS.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=63)** The Gang of Four defines the intent of the observer pattern as, "Defining a one-to-many dependency between objects "so that when one object changes state, "all of its dependents are notified "and updated automatically."
>
> **[1:15](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=75)** Let's take a look at some code.
>
> **[1:17](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=77)** So I'm inside our exercise files in our exercise files under chapter 4, under chapter 4 lesson 8 within the start folder.
>
> **[1:24](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=84)** We already have some objects created.
>
> **[1:26](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=86)** We have a simple shopper class, that just saves the name of each shopper.
>
> **[1:30](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=90)** We also have a mall class.
>
> **[1:32](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=92)** It saves an array of sales.
>
> **[1:34](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=94)** So the idea is we want the mall to keep track of any stores that have ongoing sales.
>
> **[1:39](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=99)** That means that our store class can announce sales.
>
> **[1:42](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=102)** So on line seven we have a method for announcing the sale.
>
> **[1:46](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=106)** Now right now, all the store does when it announces a sale is log that information to the console.
>
> **[1:52](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=112)** If you take a look at the index.js file, you'll notice that we've created two instances of stores, Cats & Things and Ins and Outs; and four instances of shoppers, Alex, Eve, Sharon, and Mike; and one instance of the mall, the Valley Mall.
>
> **[2:06](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=126)** Now observers is really concerned about how all of these objects communicate with one another.
>
> **[2:11](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=131)** Alex, Eve, Sharon, Mike and the Valley Mall need to listen for new sales at Cats & Things and Ins and Outs.
>
> **[2:18](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=138)** Let's go ahead and add some code to implement the observer pattern.
>
> **[2:21](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=141)** So I'm going to take the store Cats & Things and I'm going to subscribe a few observers.
>
> **[2:26](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=146)** So we'll subscribe Alex and I will go ahead and copy this line and paste it a few more times.
>
> **[2:32](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=152)** And we'll also subscribe Eve and Mike.
>
> **[2:36](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=156)** Now, when we subscribe an object to Cats & Things, that means that that object can listen for the announcement of new sales.
>
> **[2:44](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=164)** Now Cats & Things isn't concerned with the type of object that can listen for sales.
>
> **[2:49](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=169)** Shoppers can listen for sales.
>
> **[2:50](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=170)** But the mall can also listen for sales.
>
> **[2:52](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=172)** So we will also subscribe the Valley Mall as an observer to Cats & Things.
>
> **[2:57](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=177)** Let's go ahead and add some subscriptions to Ins and Outs.
>
> **[3:01](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=181)** Ins and Outs can subscribe Sharon, and we also want Ins and Outs to subscribe the Valley Mall.
>
> **[3:08](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=188)** So the idea is that the mall is going to listen to any new sale announcement, so that it can keep track of it.
>
> **[3:15](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=195)** We should see what sales are going on by logging the Valley Mall sales field, and that should be the array of ongoing sales.
>
> **[3:24](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=204)** The idea here is that the observer objects, the shoppers and the mall, will listen for state changes on the observables, Cats & Things and Ins and Outs.
>
> **[3:32](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=212)** So what this means is, if we come up here above where we're listing the sales, and declare a few sales, so we can give Cats & Things a sale of 20% off everything or Ins and Outs a sale of 50% off everything.
>
> **[3:49](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=229)** All of our observers should have been notified of these sales.
>
> **[3:52](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=232)** That means Alex, Eve, Mike should be notified of the Cats & Things sale, Sharon should be notified of the Ins and Outs sale, and the Valley Mall should be keeping track of all of the sales.
>
> **[4:02](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=242)** We want to run this code and have the observers be notified of any new sales that occur at the mall.
>
> **[4:08](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=248)** Now before we can do that we must add the code to the observable object, the store, and the observers, the mall and the shopper.
>
> **[4:14](https://www.linkedin.com/learning/node-js-design-patterns/the-observer-pattern?u=76281980&t=254)** In the next lesson we will actually implement the observable design pattern by coding these objects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), implements (2), class, (1), class. (1)
> **Definitions:** is a  (2), means that (2), known as (1), is an  (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** index.js (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)

#### Implementing observers
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=0)** - [Instructor] In the last lesson, we introduced the observer design pattern.
>
> **[0:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=3)** We also showed how we could implement the observer design pattern and have observer objects like shoppers and malls listen to observable objects like the store.
>
> **[0:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=12)** In this lesson, we're actually going to write the code to make the observer design pattern work in our example.
>
> **[0:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=17)** So, I'm in the exercise files under chapter four, under chapter four lesson nine within the star folder, and we can see that we have the changes that we just made to our index.js file.
>
> **[0:28](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=28)** So, let's go ahead and first make the changes that we need to make to the observers, so I'll start with the shopper.
>
> **[0:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=33)** And in order for this to work, the shopper's going to have to implement a method that the store can call.
>
> **[0:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=38)** So, we'll call notify, and it will give us the store name and the discount.
>
> **[0:43](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=43)** So, whenever a shopper has been notified of a sale, we'll just go ahead and log that information to the console.
>
> **[0:49](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=49)** So, we will go ahead and add this.name, the shopper, there is a sale at store name, there is a sale at store name, and then we'll go ahead and say what the discount is.
>
> **[1:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=62)** Discount percent off everything.
>
> **[1:05](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=65)** There we go.
>
> **[1:07](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=67)** So, now, when the shopper's notified, it can respond with this notify method.
>
> **[1:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=72)** Let's go ahead and add a notify method to the mall.
>
> **[1:15](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=75)** So, the mall's notified method will get invoked by the observable, but it will also do something different.
>
> **[1:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=81)** The mall's notified method is going to take the store name and the discount, and is going to go ahead and add it to the array of current sales.
>
> **[1:29](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=89)** So, the mall is keeping track of any ongoing sales as the stores announce those sales.
>
> **[1:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=95)** So, now, we have to modify the store.js.
>
> **[1:37](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=97)** So, the store is the observable object.
>
> **[1:41](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=101)** It's the object that is to announce sales.
>
> **[1:43](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=103)** Let's start by modifying the constructor to save an array of subscribers.
>
> **[1:48](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=108)** Let's go ahead and add a subscribe method to the store, and we'll go ahead and add our observer to our array of subscribers.
>
> **[1:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=118)** Now, whenever we have a sale, we don't want to just log it to the console.
>
> **[2:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=122)** We want to notify every subscriber of a sale, so we can do so by saying this.subscribers.forEach so we can iterate through every subscriber.
>
> **[2:11](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=131)** And then, each observer will be notified.
>
> **[2:15](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=135)** So, this.name is the name of the current store.
>
> **[2:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=137)** We're going to send that as the first argument to the notify method, and then the discount is the second argument.
>
> **[2:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=143)** There we go.
>
> **[2:24](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=144)** Let's go ahead and see if this works.
>
> **[2:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=145)** So, I'm going to come to the terminal, and I will type node index.js.
>
> **[2:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=153)** We've announced two sales.
>
> **[2:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=154)** So, Alex, Eve, and Mike have heard about the sale at Cats & Things because they're listening for any sales at that store, whereas Sharon heard about the sale from Ins and Outs.
>
> **[2:42](https://www.linkedin.com/learning/node-js-design-patterns/implementing-observers?u=76281980&t=162)** Our mall is saving both sales because it's listening to both stores.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (3)
> **CLI Commands:** make (3), node (1)
> **File Paths:** index.js (2), store.js (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** foreach (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)

#### The Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=0)** - [Instructor] One of the most powerful and most dynamic design patterns is the strategy.
>
> **[0:05](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=5)** The strategy pattern let's you create multiple algorithms for a specific task and then dynamically decide upon which algorithm to use at run time.
>
> **[0:12](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=12)** An example of a common place that the strategy pattern is used is with payment processing.
>
> **[0:17](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=17)** We could build a shopping cart and checkout process that only let's users make purchases via a credit card.
>
> **[0:22](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=22)** In this case the checkout process would always use the same algorithm, the credit card payment.
>
> **[0:28](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=28)** We could also modify the checkout process to implement a strategy.
>
> **[0:31](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=31)** This means that we decouple how to handle payments from the process itself.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=35)** Now we can add different strategies for handling payments.
>
> **[0:39](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=39)** We could add a credit card strategy and a PayPal strategy and then let the user decide which one to use dynamically at run time.
>
> **[0:45](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=45)** The cool thing about strategies is that we can add new strategies as the need occurs and our application grows without ever having to touch the checkout process directly.
>
> **[0:54](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=54)** We simply create a new payment strategy.
>
> **[0:57](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=57)** For instance later on we can add a bitcoin payment strategy to the checkout process without ever having to change the code in the checkout process directly.
>
> **[1:05](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=65)** The Gang of Four defines a strategy as a family of algorithms, encapsulate each one, and make them interchangeable.
>
> **[1:11](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=71)** Strategy let's the algorithm vary independently from the clients that use it.
>
> **[1:16](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=76)** Let's take a look at our exercise files chapter four lesson 10 and within our files you'll see the logger.js that contains the logger class that we created earlier in this course.
>
> **[1:25](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=85)** Take a look at our logger class.
>
> **[1:28](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=88)** Every time we log a message it writes the message to the console along with the timestamp of when the log occurred.
>
> **[1:34](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=94)** This is hard coded directly into the log method of the logger.
>
> **[1:38](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=98)** What if I wanted to only log the message itself or write the logs to a file instead of the console.
>
> **[1:44](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=104)** What if I didn't want to record any logs at all.
>
> **[1:46](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=106)** The logger in it's current state does not give me any options.
>
> **[1:50](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=110)** I want the logger to be able to implement different strategies, different ways of dealing with logging.
>
> **[1:55](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=115)** I also want to be able to change the strategy dynamically at run time and have the logger handle my log messages differently upon my request.
>
> **[2:03](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=123)** Let's take a look at what the strategy pattern might look like if we were to use it.
>
> **[2:07](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=127)** Inside of the index.js file you can see that we are using the logger here and we have a couple logs, we're logging hello world, hi world, and yo world.
>
> **[2:16](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=136)** So right now if we go ahead and run this application.
>
> **[2:19](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=139)** So if I come to the terminal and type node index.js we see hello world, hi world, and yo world produced by the logger with the timestamp to the console.
>
> **[2:29](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=149)** I want the logger to be able to implement different strategies, different ways for dealing with logging.
>
> **[2:34](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=154)** I also want to be able to change the strategy dynamically at run time and have the logger handle my log messages differently.
>
> **[2:40](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=160)** The strategy pattern would allow us to change the logging strategy dynamically, perhaps based off of a user preference, environment, or input.
>
> **[2:47](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=167)** We can do so by adding a method called change strategy to the class that implements the strategy pattern.
>
> **[2:53](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=173)** So I'm going to go ahead and grab logger.change strategy.
>
> **[2:57](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=177)** We could for instance change the way the logger handles the logs, we could have them write to file by using the to file strategy.
>
> **[3:05](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=185)** So at this point after line seven any other logs that we create would be logged to the file instead of to the console.
>
> **[3:12](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=192)** If we can change the strategy at run time this also means that we can set the strategy with a configuration file.
>
> **[3:18](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=198)** So if we wanted to we could go over to our start folders and add a new file and we'll call it config.json and within one configuration file we can decide how the logger should log at run time without having to touch any of the code base.
>
> **[3:32](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=212)** I can add a logs node to this file, which we would assume would give us configuration information on how the logger should work and I'll also add a strategy field.
>
> **[3:40](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=220)** Let's say we didn't want to see the date and timestamp whenever we have a log.
>
> **[3:44](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=224)** We can add a log strategy for that called no date.
>
> **[3:47](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=227)** So this in theory would start off our application by using the log strategy called no date and if we take a look at that logs three, four, and five from our index.js would be logged without the date to the console.
>
> **[3:59](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=239)** On line seven we change the strategy dynamically as our application is running to file.
>
> **[4:04](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=244)** So logs nine, 10, and 11 can be logged to file.
>
> **[4:08](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=248)** This is a pretty powerful pattern.
>
> **[4:10](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=250)** In the next lesson we will get under the hood of the logger.js to implement the strategy pattern.
>
> **[4:15](https://www.linkedin.com/learning/node-js-design-patterns/the-strategy-pattern?u=76281980&t=255)** We'll also make sure that we have a two file strategy for adding the logs to a file and a no date strategy for taking the date timestamp away from the logs when we present them to the user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class. (1), implements (1)
> **File Paths:** index.js (3), logger.js (2), config.json (1)
> **CLI Commands:** make (3), node (2)
> **Definitions:** means that (2), is a  (1)
> **Cross-References:** earlier in (1), in the next (1)
> **Analogies:** for instance (2)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)

#### Implementing strategies
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=0)** - [Narrator] In the last lesson we introduced the strategy design pattern and discovered how we could work with it.
>
> **[0:05](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=5)** In this lesson we're going to implement the pattern by creating several log strategies in a single class.
>
> **[0:10](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=10)** So, the first thing we want to do is encapsulate all of our strategies, all of our algorithms in a single class in a single file.
>
> **[0:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=17)** So I'm going to go over here to the start folder.
>
> **[0:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=18)** We are in the exercise files for chapter four, chapter four lesson 11 and within that start folder we have the index code that we changed to use the change strategy on line seven as well as the config.json file where we are able to set the strategy before the application gets started.
>
> **[0:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=35)** So let's go ahead and add another file to this called log strategy.js and what we want to do in this file is create a class that we call log strategy and we're never going to instantiate any objects with this class.
>
> **[0:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=50)** What we're going to do is just save several static methods to this class and each static method that we add to this class will be a different strategy.
>
> **[0:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=57)** So let's go ahead and add a static no date.
>
> **[1:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=61)** That's one of the strategies that we have to handle.
>
> **[1:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=63)** We also need a static to file.
>
> **[1:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=66)** So one of the strategies that we have to handle.
>
> **[1:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=68)** We should also have the logger work as it currently does, so just a static to console.
>
> **[1:13](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=73)** We'll call the current way the logger works to console and then it's also a good idea to add a none meaning no strategy.
>
> **[1:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=81)** So if we were to set the strategy to none we wouldn't see any logs at all.
>
> **[1:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=85)** So these are the four strategies that we're going to start with.
>
> **[1:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=87)** So let's just go ahead and code them.
>
> **[1:29](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=89)** I'm going to go ahead and include the path and the file system, append file to append our log file, so if we want to use that.
>
> **[1:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=99)** So we'll grab that method from the file system and we'll just go ahead and do this top down.
>
> **[1:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=104)** So we will start with the no date strategy.
>
> **[1:46](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=106)** So each of these strategy functions need to receive the payload of data, the information that we should actually be logging.
>
> **[1:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=112)** That consists of a time stamp and a message.
>
> **[1:55](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=115)** So for the no date log strategy to work all we're going to go ahead and do is log the message without the time stamp.
>
> **[2:02](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=122)** Let's go ahead and handle the to file strategy.
>
> **[2:05](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=125)** So again each of these strategies are going to get time stamp and message and for the to file as opposed to using the console log what we're going to do is we will create a variable for the file name of where we're going to add the logs.
>
> **[2:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=138)** So we'll do it in this directory.
>
> **[2:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=139)** So I'll use a path.join underscore underscore dir name and we will also use logs.txt.
>
> **[2:25](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=145)** So we'll go ahead and put all of our logs inside of the logs.txt file found in this directory and then we can go ahead and call append file and we'll give them the file name which is actually the full file path and now the code that we want to add to this file.
>
> **[2:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=160)** So we want to add the time stamp, a little dash, along with the message, and a new line so that each log appears on its own line.
>
> **[2:51](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=171)** So once we're done appending that file we can see if we have any errors that occur during the append file process and we'll go ahead and handle those.
>
> **[2:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=178)** So if there was an error with this log file we'll just let our user know about it.
>
> **[3:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=183)** Error writing to file, and then I'll also go ahead and throw the error itself to the console using console.error.
>
> **[3:12](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=192)** Great, so that handles our to file strategy.
>
> **[3:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=194)** We also need to handle our basic strategy, the one that the logger currently uses, the to console.
>
> **[3:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=200)** So we are just going to go ahead and log with to console the time stamp and the message.
>
> **[3:26](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=206)** Time stamp dash message.
>
> **[3:29](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=209)** Great, so now we have created three log strategies and it's time to incorporate these log strategies into our logger.
>
> **[3:36](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=216)** So let's go over to the logger.js file and from this file what we're going to do is we're not going to actually console log directly.
>
> **[3:44](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=224)** We want to use a strategy.
>
> **[3:46](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=226)** So here on line 14 within the log method I'm going to say this.strategy.
>
> **[3:51](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=231)** So the strategy's going to become a function that will represent one of those four log strategies.
>
> **[3:57](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=237)** So we want to make sure that we send the time stamp in the message to whatever the strategy method is.
>
> **[4:03](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=243)** And then when we actually create a new instance of the logger I can set the strategy.
>
> **[4:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=248)** This.strategy, we will start out with, we better import our log strategies.
>
> **[4:15](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=255)** Require log strategy and now I can use them.
>
> **[4:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=259)** So inside of the constructor I'm going to go ahead and set the first log strategy to no date, or actually, for the fun of it we'll set it to what it currently is, so we'll set the first log strategy as log strategy to console.
>
> **[4:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=274)** So that means that this.strategy is going to reference or point to the log strategy to console method, meaning that whenever we actually do a log the logger will log the message and the time stamp to the console.
>
> **[4:47](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=287)** So we also have to implement a change strategy or a method that allows us to dynamically change the logging strategy.
>
> **[4:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=293)** So I'll do change strategy and we want to get a new strategy as the argument that we send to the change strategy function and then we're going to say this.strategy is equal to the log strategy and we will use the new strategy that we would like to change it to.
>
> **[5:09](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=309)** Great, so that's how we can change the logging strategy to a different strategy at run time.
>
> **[5:14](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=314)** Let's go ahead and take a look at our application.
>
> **[5:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=316)** Let's go to the terminal and try to run it.
>
> **[5:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=318)** Node index.js, and we can see that we have three logs.
>
> **[5:22](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=322)** That's good.
>
> **[5:23](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=323)** If we look at index.js we do have three logs and all three of these logs are supposed to be using the console strategy and if we look at that we have the time stamp in the log actually showing up in the console but look at this.
>
> **[5:35](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=335)** We changed the strategy on line seven and we have three more logs.
>
> **[5:39](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=339)** So they went into the file because at line seven we changed the strategy and now all of our logs after line seven are going to be logged to the file.
>
> **[5:48](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=348)** Something else that we need to do is we need to make sure that when we start our application we're not setting the log strategy based on to console on line seven.
>
> **[5:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=358)** We actually want to pull that information from the configuration file.
>
> **[6:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=361)** So inside of the logger I'm also going to import the config and from the configuration file when we actually use the constructor we'll also set the log strategy.
>
> **[6:10](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=370)** So we'll add strategy, so we can send the log strategy to the constructor and we might as well default this to what we currently want to use which is to console.
>
> **[6:19](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=379)** So that's what we're currently using as the strategy and I'm going to go ahead and add the brackets so we can use the string to select the appropriate field.
>
> **[6:27](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=387)** So now if you create this logger without sending it any sort of a strategy we're going to log to the console.
>
> **[6:34](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=394)** But what I'm going to do since I have the config coming in here is I'm going to come down to where we instantiate the logger right before we export it here on line 27 and I'm going to say config.logs.strategy.
>
> **[6:46](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=406)** So we send the logging strategy from the configuration file to the new logger.
>
> **[6:50](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=410)** If we look at the configuration file that strategy is no date.
>
> **[6:53](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=413)** So if I come over to the terminal and run the file this time we actually see the first three logs now with the no date strategy.
>
> **[7:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=421)** So we're just seeing the message, we're not seeing the time stamp, and we can see that we also are still logging to the console.
>
> **[7:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=428)** So because we ran this file twice we have written an additional set of logs to the console because in our index.js nine, 10, 11, and 12 does so.
>
> **[7:16](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=436)** Now what I love about the log strategy pattern is it's built to grow.
>
> **[7:20](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=440)** So if we wanted to add additional strategies to our application later we could do so without ever having to touch the logger.js file.
>
> **[7:28](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=448)** So I'm going to go into the log strategy and we're going to create one more strategy really quickly and this strategy is going to be called to Morse Code and to Morse Code is going to take in a time stamp and a message and we want to log this message to Morse Code.
>
> **[7:43](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=463)** So we're going to rely on NPM to do so.
>
> **[7:45](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=465)** I'm going to come over here to my terminal and we will NPM install a NPM called Morse.
>
> **[7:52](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=472)** We can actually use this Morse package to convert text to Morse Code.
>
> **[7:55](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=475)** If you don't have a package JSON as I don't 'cause we're just doing a quick sample here you might see this error.
>
> **[8:00](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=480)** That's not a problem.
>
> **[8:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=481)** When I did the NPM install it looks like we picked up our Morse and its dependencies and I've placed them in the node modules folder.
>
> **[8:08](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=488)** So what I'm going to do is I'm going to make sure we include Morse 'cause we're going to use that and for our to Morse Code log what we're going to do is get the Morse Code.
>
> **[8:17](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=497)** So Morse.encode is the NPM method that we can use for that.
>
> **[8:21](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=501)** We'll pass it the message and then now that we have the Morse Coded version of the message I can go ahead and add a console.log Morse Code, there we go, and this is neat.
>
> **[8:32](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=512)** I should be able to come into my configuration JSON file and change the strategy to Morse Code.
>
> **[8:38](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=518)** That's the name of the strategy.
>
> **[8:40](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=520)** Now when we run this application we should see the very first three logs logging to Morse and then I'm going to go ahead and change the strategy for the second three logs to none or no strategy and just to make sure we see that work I'll go ahead and also delete the logs.txt file.
>
> **[8:56](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=536)** All right, let's go ahead and give it a shot.
>
> **[8:58](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=538)** Coming over the terminal, clear out this stuff.
>
> **[9:01](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=541)** Node index.js, and now we can see our log messages as Morse Code.
>
> **[9:06](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=546)** Because we set the log strategy to none for the second set of logs that means we shouldn't see a file or we shouldn't be using that to file log strategy.
>
> **[9:15](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=555)** So we're able to set the log strategy to whatever we want.
>
> **[9:18](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=558)** We can set up a default strategy in the config JSON document, and we can load that when we start our application or we can even change our strategy dynamically at run time allowing us to change the logging strategy based off of user input or some sort of data parameter.
>
> **[9:33](https://www.linkedin.com/learning/node-js-design-patterns/implementing-strategies?u=76281980&t=573)** So, that's the strategy pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), static (5), this. (5), class. (2), function (2)
> **CLI Commands:** npm (5), make (4), node (3)
> **File Paths:** index.js (4), logs.txt (3), logger.js (2), config.json (1), strategy.js (1)
> **Env Vars:** npm (5), json (3)
> **Tools:** terminal (4)
> **Prerequisites:** install (2), set up (1)
> **UI Navigation:** go to (1), select the (1)
> **Cross-References:** in the last (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=0)** - [Alex] Thank you for joining me for Node.js design patterns.
>
> **[0:03](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=3)** I really hope you can use this knowledge to improve the way you architect your applications.
>
> **[0:07](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=7)** If you want to get better with JavaScript and are interested in learning more techniques and design patterns as they relate to the JavaScript language, I'd recommend checking out organizing JavaScript functionality with Kyle Simpson.
>
> **[0:18](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=18)** If you want to learn more, in general, about design patterns, Elizabeth Robson and Eric Freeman have a great course called foundations of programming design patterns.
>
> **[0:27](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=27)** This course will reinforce what you've learned here.
>
> **[0:29](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=29)** Additionally, you can see how some of the patterns that you've learned here, are implemented in Java.
>
> **[0:33](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=33)** Electron is an awesome tool for building cross platform applications with Node.js.
>
> **[0:38](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=38)** You can use your current skills with Node.js and your improved code techniques that you've picked up in this class, to build desktop applications.
>
> **[0:45](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=45)** Electron is really fun to use and Ray Villalobos has a course called Electron: building cross platform desktop applications, that I'd recommend checking out.
>
> **[0:52](https://www.linkedin.com/learning/node-js-design-patterns/next-steps?u=76281980&t=52)** Again, thank you for taking this course and I wish you the best of luck on all of your coding adventures.

> [!info]- Semantic Content
>
> **File Paths:** node.js (3)
> **CLI Commands:** node (3)
> **Code Keywords:** class, (1)
> **Definitions:** is an  (1)
> **Speakers:** - [alex] (1)


## Instructor

- [[Alex Banks]]

## Resources

- Exercise files available

## Skills Covered

- Software Design Patterns
- Node.js

## Path Context

### In [[Advance your Node.js Skills]]
← [[Node Js Security]] | **2 of 8** | [[Node.js- Testing and Code Quality]] →

## Appears In

- [[Advance your Node.js Skills]]

## Related Courses

_Courses sharing skills:_

- [[JavaScript- Patterns]] — Software Design Patterns
- [[C++ Design Patterns- Structural]] — Software Design Patterns
- [[Spring 6 Design Patterns]] — Software Design Patterns
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js

---

[↑ Back to top](#)