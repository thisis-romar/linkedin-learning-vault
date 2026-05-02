---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: asynchronous-programming-in-c-sharp
url: "https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp"
duration_minutes: 60
duration: 1h
level: Advanced
updated: 8/4/2023
learners: 45099
skills:
  - C#
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHOVzhhX-Hnzw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691013027545?e=2147483647&amp;v=beta&amp;t=-SY2yhceanWM4BElINp4e7qXKCvoNenyD2wr-nTxmos"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Excellence- Architecting High-Performance Solutions]]'
prev_courses:
  - '[[Advanced C- Object-Oriented Programming]]'
next_courses:
  - '[[C- Framework Design]]'
path_nav: '[{"path":"C- Excellence- Architecting High-Performance Solutions","position":5,"total":6,"prev":"Advanced C- Object-Oriented Programming","next":"C- Framework Design"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Asynchronous%20Programming%20in%20C-.md)

![Asynchronous Programming in C#](https://media.licdn.com/dms/image/v2/D560DAQHOVzhhX-Hnzw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691013027545?e=2147483647&amp;v=beta&amp;t=-SY2yhceanWM4BElINp4e7qXKCvoNenyD2wr-nTxmos)

# Asynchronous Programming in C#

> If you’re looking to incorporate asynchronous programming into your applications, this course was designed for you. Join instructor Brice Wilson as he covers the fundamentals of asynchronous programming in the C# programming language using the task-based asynchronous pattern (TAP). Explore the Task and Task classes and how to use them to perform asynchronous work. Brice shows you the ins and outs 

> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp) | 1h | Advanced | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Create happier users with asynchronous C#](#create-happier-users-with-asynchronous-c)
  - [What you should know](#what-you-should-know)
- [**1. Understanding Asynchronous Programming**](#1-understanding-asynchronous-programming) (3 videos)
  - [What is asynchronous programming?](#what-is-asynchronous-programming)
  - [When and why to write asynchronous code](#when-and-why-to-write-asynchronous-code)
  - [Patterns for asynchronous programming in C#](#patterns-for-asynchronous-programming-in-c)
- [**2. Working with Tasks**](#2-working-with-tasks) (6 videos)
  - [Creating and executing tasks](#creating-and-executing-tasks)
  - [Waiting for tasks to complete](#waiting-for-tasks-to-complete)
  - [Using continuations](#using-continuations)
  - [Updating the user interface](#updating-the-user-interface)
  - [Challenge: Create and continue a task](#challenge-create-and-continue-a-task)
  - [Solution: Create and continue a task](#solution-create-and-continue-a-task)
- [**3. Using async and await**](#3-using-async-and-await) (5 videos)
  - [Benefits of using async and await](#benefits-of-using-async-and-await)
  - [Awaiting a task](#awaiting-a-task)
  - [Handling exceptions](#handling-exceptions)
  - [Challenge: Await HTTP requests](#challenge-await-http-requests)
  - [Solution: Await HTTP requests](#solution-await-http-requests)
- [**4. Task Cancellation and Progress Monitoring**](#4-task-cancellation-and-progress-monitoring) (5 videos)
  - [Using cancellation tokens](#using-cancellation-tokens)
  - [Implementing timeout cancellations](#implementing-timeout-cancellations)
  - [Reporting task progress](#reporting-task-progress)
  - [Challenge: Cancel a slow HTTP request](#challenge-cancel-a-slow-http-request)
  - [Solution: Cancel a slow HTTP request](#solution-cancel-a-slow-http-request)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Create happier users with asynchronous C#
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/create-happier-users-with-asynchronous-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/create-happier-users-with-asynchronous-c-sharp?u=76281980&t=0)** - Asynchronous programming is important for just about every software developer.
>
> **[0:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/create-happier-users-with-asynchronous-c-sharp?u=76281980&t=5)** These days, most computers have multicore processors.
>
> **[0:09](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/create-happier-users-with-asynchronous-c-sharp?u=76281980&t=9)** When that's combined with increasingly sophisticated user interfaces, developers have both a need, and the hardware capability for asynchronous programming.
>
> **[0:18](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/create-happier-users-with-asynchronous-c-sharp?u=76281980&t=18)** Mastering asynchronous techniques will help you build applications that take full advantage of modern hardware, perform well, and are more responsive to your users.
>
> **[0:28](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/create-happier-users-with-asynchronous-c-sharp?u=76281980&t=28)** Hi, I'm Brice Wilson, and I've been developing software for over 25 years.
>
> **[0:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/create-happier-users-with-asynchronous-c-sharp?u=76281980&t=34)** In this course, you'll learn asynchronous C# techniques that will help you create great .NET applications that are performant and keep your users happy and productive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming]] (2), [[Hardware]] (2)
> **Env Vars:** net (1)
> **Speakers:** - asynchronous (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-you-should-know?u=76281980&t=0)** - [Instructor] Here's what you should know to get the most out of this course.
>
> **[0:03](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-you-should-know?u=76281980&t=3)** This is not a beginner course so I'm going to assume you already have at least an introductory knowledge of C#.
>
> **[0:10](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-you-should-know?u=76281980&t=10)** Just the basics, really.
>
> **[0:11](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-you-should-know?u=76281980&t=11)** Things like declaring variables, writing functions, loops, and using basic programming constructs that exist in just about every language.
>
> **[0:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-you-should-know?u=76281980&t=19)** I'll be writing small programs and running them with the .NET CLI, so some basic experience with it would also be helpful, but not really required.
>
> **[0:29](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-you-should-know?u=76281980&t=29)** As long as you have the .NET SDK installed on your computer, you should be able to follow along even if you've never used the .NET CLI.
>
> **[0:37](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-you-should-know?u=76281980&t=37)** If you're ready to get started with asynchronous programming in C#, keep watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming]] (2), [[CLI]] (2)
> **Env Vars:** net (3), cli (2), sdk (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding Asynchronous Programming

[↑ Back to Table of Contents](#table-of-contents)

#### What is asynchronous programming?
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=0)** - These days, just about every computer you buy has multiple CPU processing cores and can perform several operations at the same time.
>
> **[0:09](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=9)** Additional capabilities are great but to actually take advantage of these capabilities, we programmers have to write our code a bit differently.
>
> **[0:17](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=17)** Asynchronous programming is a technique that lets you offload long running operations to background threads so that the main thread of your application remains available to respond to new input from your user.
>
> **[0:30](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=30)** The result is an application that makes more efficient use of the available hardware and is more responsive to your users.
>
> **[0:38](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=38)** When a user starts your application, an application process begins running on their computer.
>
> **[0:43](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=43)** In most cases, that process will initially contain a single thread of execution that will create the user interface, respond to user input, and perform other work required of the application.
>
> **[0:55](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=55)** In some applications, only utilizing a single thread may be all you need.
>
> **[1:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=60)** However, if your application starts to perform tasks that take a bit longer to execute, like reading the contents of a file or making an HTTP request, then there can be negative effects on the overall user experience.
>
> **[1:13](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=73)** While the UI thread is busy processing those longer running tasks, it blocks any new input from your user.
>
> **[1:20](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=80)** To the user, your application may appear frozen or locked up until the other task completes.
>
> **[1:25](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=85)** This can be a frustrating experience for your users and it also doesn't take advantage of the hardware resources available on modern computers.
>
> **[1:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=94)** When you write asynchronous code, you're able to send those long-running tasks to separate threads.
>
> **[1:40](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=100)** Since the main user interface thread isn't busy performing that work, it can always be available to respond to new user events.
>
> **[1:48](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=108)** When the worker threads are done, they can report their changes back to the main thread so the interface can be updated with their results.
>
> **[1:56](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=116)** The concept behind asynchronous programming is fairly straightforward, but recognizing when to use these techniques and actually implementing them in code has traditionally been difficult.
>
> **[2:06](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/what-is-asynchronous-programming?u=76281980&t=126)** In the remainder of this chapter and course, I'll show you how to do those things using modern C# language features that make asynchronous programming much more accessible than it used to be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (7), [[Programming]] (3), [[Hardware]] (2), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** cpu (1), http (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - these (1)

#### When and why to write asynchronous code
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=1)** - Understanding when and why to write asynchronous code is as important as understanding the programming language syntax required to implement it.
>
> **[0:09](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=9)** Not all scenarios will receive any measurable benefit from an asynchronous solution.
>
> **[0:13](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=13)** And given the additional complexity of writing and maintaining asynchronous code, you might as well stick with a synchronous version in those cases.
>
> **[0:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=21)** There are two primary situations when you should consider an asynchronous solution.
>
> **[0:27](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=27)** IO bound operations involve some form of relatively slow input or output.
>
> **[0:32](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=32)** This could be reading and writing data to and from a text file.
>
> **[0:35](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=35)** Making an API call to a web service or querying a database.
>
> **[0:40](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=40)** CPU bound operations involve intensive processing.
>
> **[0:44](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=44)** This could include iterating over very large data sets or performing lots of complex mathematical calculations.
>
> **[0:51](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=51)** If run on your program's main UI thread both of these could block input from your user while the operations are running.
>
> **[0:58](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=58)** This can be frustrating and confusing to your users.
>
> **[1:02](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=62)** Using asynchronous code to move those types of operations to a background thread keeps your app responsive and your users happy.
>
> **[1:10](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/when-and-why-to-write-asynchronous-code?u=76281980&t=70)** The benefits are well worth the small increase in code complexity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Programming]] (1), api (1), web (1), database (1)
> **Env Vars:** api (1), cpu (1)
> **Prerequisites:** required to (1)
> **Speakers:** - understanding (1)

#### Patterns for asynchronous programming in C#
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=1)** - The C# programming language was created around the year 2000.
>
> **[0:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=5)** Rarely do technology survive and thrive that long without their creators being willing to evolve them and focus on continuous improvement.
>
> **[0:14](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=14)** The patterns used for asynchronous programming in C# have evolved a lot over the years.
>
> **[0:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=19)** In this course, I'm only going to focus on the pattern currently recommended by Microsoft, but I want you to be aware that other older patterns do exist, because you will likely encounter them in older books, blog posts, and other training materials.
>
> **[0:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=34)** The first I'll mention is the Event-Based Asynchronous Pattern.
>
> **[0:38](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=38)** As the name suggests, this pattern makes use of event handler delegates and types derived from EventArg to manage the asynchronous processes.
>
> **[0:47](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=47)** You can usually spot this pattern based on the method names used.
>
> **[0:50](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=50)** They employ a common set of suffixes such as Async, completed, and AsyncCancel.
>
> **[0:56](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=56)** Microsoft no longer recommends this pattern for new development.
>
> **[1:01](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=61)** Another older pattern you may run across is known as the asynchronous programming model.
>
> **[1:06](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=66)** It uses an interface named IAsyncResult and requires so-called begin and end methods.
>
> **[1:13](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=73)** Those are methods that perform different parts of the asynchronous work and are prefixed with the words begin and end.
>
> **[1:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=79)** For example, BeginWrite and EndWrite.
>
> **[1:22](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=82)** Microsoft also no longer recommends this pattern.
>
> **[1:25](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=85)** The current recommendation is to follow the much more developer friendly task-based asynchronous pattern.
>
> **[1:32](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=92)** It gets its name from the task class that functions as an abstraction of an asynchronous operation.
>
> **[1:38](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=98)** There's also the related task of T type for those operations that will return a result.
>
> **[1:44](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=104)** You can manage asynchronous operations using task alone, but you can also use the Async and await keywords to write much more readable asynchronous code that more closely resembles synchronous code.
>
> **[1:57](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/patterns-for-asynchronous-programming-in-c-sharp?u=76281980&t=117)** The task-based asynchronous pattern is the one currently recommended by Microsoft and the one I'll focus on in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Programming]] (3)
> **Analogies:** such as (1), for example (1)
> **Best Practices:** recommended (2)
> **Definitions:** known as (1)
> **Warnings:** be aware (1)
> **Speakers:** - the (1)


### 2. Working with Tasks

[↑ Back to Table of Contents](#table-of-contents)

#### Creating and executing tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=0)** - [Instructor] Task or the foundation for asynchronous programming in modern C#.
>
> **[0:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=5)** Learning how to create and execute them is the first step to building fast and responsive apps.
>
> **[0:11](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=11)** We'll start with some simple synchronous code, and then show you how you can quickly create a new task to run the code asynchronously.
>
> **[0:18](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=18)** I've got a few lines of code already in place here, that will just help us keep track of when different lines are executing, and make it clear when they're running asynchronously.
>
> **[0:28](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=28)** These Console.WriteLine calls will just let us know when the program starts running, and when it's ready to receive some user input.
>
> **[0:35](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=35)** At the end, I've got a call to Console.Readline that could receive some input from the user, but will also make sure our console app doesn't shut down before we're done observing the output.
>
> **[0:47](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=47)** I'm going to wrap our synchronous code inside a new function named ProcessData.
>
> **[0:58](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=58)** I'll output another message to the console, so we know when the processing has begun.
>
> **[1:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=68)** I'm not going to do any real work here, instead I'll just simulate some long-running data processing by calling Thread.Sleep.
>
> **[1:20](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=80)** At the end I'll add one more Console.WriteLine call, just to let us know when the processing is completed.
>
> **[1:31](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=91)** This will block the thread it's running on for a fixed number of milliseconds, I'm passing 3000 which will block the thread for three seconds.
>
> **[1:40](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=100)** Okay, I'll now come down a few lines and call the function right after the program starts running.
>
> **[1:50](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=110)** Let's run this and see what it looks like so far.
>
> **[1:53](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=113)** I'll open the terminal built into Visual Studio Code and start the program with the command dotnet run.
>
> **[2:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=125)** Remember, there's nothing asynchronous about the code at this point.
>
> **[2:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=128)** The call to Thread.Sleep actually blocks the main thread.
>
> **[2:13](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=133)** You can see that only after the fake processing is complete is the program ready for user input.
>
> **[2:18](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=138)** I'll just hit enter to stop the program and then go back to the code.
>
> **[2:23](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=143)** Let's now use a task to execute the process data function asynchronously.
>
> **[2:29](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=149)** The simplest way to do that is to replace the current function with a call to Task.Run.
>
> **[2:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=159)** The task will offload the function to a different thread and allow the code to resume execution immediately.
>
> **[2:46](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=166)** I pass the name of the function to the run method.
>
> **[2:53](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=173)** I'll go back to the terminal and run the code again.
>
> **[3:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=180)** This time, you can see that right after the program starts it's ready for user input.
>
> **[3:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=185)** The data processing is happening on another thread, and the messages about it show up later.
>
> **[3:11](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=191)** That one simple call made our user interface much more responsive.
>
> **[3:16](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=196)** Using the static run method on the task class is the easiest and most common way to create and start a task, but you can also use one of the task instructors to instantiate a new instance.
>
> **[3:29](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=209)** I'll comment out the call to Task.Run and declare a new variable named DataTask.
>
> **[3:38](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=218)** There are several constructor overloads on the task class, but I'll use the one that takes an action method as a parameter.
>
> **[3:45](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=225)** I've passed it the process data function.
>
> **[3:48](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=228)** So far, I've only created the new task.
>
> **[3:51](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=231)** Using this technique, I have to start it manually, using the start method.
>
> **[4:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=240)** Using this approach is a good idea if you need to conditionally start a task, I'll again go run this in the terminal, and show you that we get the same results.
>
> **[4:11](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/creating-and-executing-tasks?u=76281980&t=251)** As you've seen, executing some otherwise synchronous work asynchronously, can be as easy as encapsulating the synchronous work in a task instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Programming]] (1), hit (1)
> **CLI Commands:** make (2), dotnet (1), go run (1)
> **Tools:** terminal (3), visual studio (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Waiting for tasks to complete
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=0)** - [Instructor] Once you've created and started a task, your next logical question is probably: How do I know when it's done and how do I access any result it produced?
>
> **[0:10](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=10)** There are a number of ways to answer both of those questions and I'll gradually show you several of them.
>
> **[0:16](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=16)** One way to know when a task is done is just to wait on it.
>
> **[0:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=19)** The static run method I've already shown you returns a task instance.
>
> **[0:24](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=24)** Task objects have a method on them named Wait.
>
> **[0:28](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=28)** Let's imagine that before this call to Console.WriteLine, I call that method on my dataTask object.
>
> **[0:35](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=35)** This probably looks like a natural thing to do.
>
> **[0:38](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=38)** Unfortunately, calling the Wait method is a blocking operation.
>
> **[0:43](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=43)** Our application won't report that it's ready for user input until the asynchronous work is complete.
>
> **[0:49](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=49)** Calling Wait like this immediately after starting a task negates the asynchronous benefits of even using a task and effectively makes this code synchronous.
>
> **[1:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=60)** We'll see better ways to know when a task is done shortly.
>
> **[1:03](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=63)** But because you will certainly encounter the Wait method, I want you to be aware of the implications of using it.
>
> **[1:10](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=70)** If I were ever going to consider using it at all, I would only do so after also running other code that can execute independently of the asynchronous work.
>
> **[1:20](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=80)** Only when you can't proceed without the completed task should you call Wait.
>
> **[1:26](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=86)** You're more likely to need to wait on a task to finish if it's going to return some results you need.
>
> **[1:31](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=91)** When you want to execute a task that returns a value, you use the generic version of the task class that takes a single type parameter.
>
> **[1:40](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=100)** That's the type of the value the asynchronous work will return.
>
> **[1:44](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=104)** Here I'm using task.Run to execute a method named RetrieveData.
>
> **[1:49](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=109)** Calling task.Run returns a task instance and we can tell RetrieveData returns a string because string is the type parameter for the return task.
>
> **[2:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=120)** When you're ready to process the return string, it will be tempting to use the tantalizingly named Result property that exists on the task.
>
> **[2:09](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=129)** That sounds like exactly what you want, right?
>
> **[2:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=132)** It will in fact deliver the result of the asynchronous work.
>
> **[2:16](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=136)** However, just like calling the Wait method, it will also block your application at that point if the task is not yet complete.
>
> **[2:25](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=145)** In most cases, this will not be the best way to obtain the result you want.
>
> **[2:30](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=150)** I'm again pointing this out because you will certainly run across it while using task, and I don't want you to use it and lose all the asynchronous advantages you thought your task was providing.
>
> **[2:42](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=162)** Let's look at a quick example using the Result property after making an HTTP request.
>
> **[2:48](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=168)** You can certainly create your own task as you've already seen me do.
>
> **[2:52](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=172)** However, I think more often you'll use tasks that are just returned from .NET API methods you're using.
>
> **[2:59](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=179)** So this will also be an example of that.
>
> **[3:01](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=181)** I'm starting with the same couple of WriteLine calls you've already seen that will just help us see when the program is running and when it's ready for user input.
>
> **[3:10](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=190)** Between those two, I'm first going to create a new HttpClient instance,
>
> **[3:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=201)** I'll then call the GetAsync method that exists on HTTP clients and request the LinkedIn learning homepage.
>
> **[3:33](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=213)** Notice that if I hover over the call to GetAsync, we can see that it returns a task with a generic type parameter of type HTTP response message.
>
> **[3:46](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=226)** Because I ultimately need that return value, I'll capture the returned task in a variable.
>
> **[4:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=240)** I'll now reference the Result property on the task to wait on the actual HTTP response.
>
> **[4:09](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=249)** Just so I can confirm we got it, I'll print out the status code on the response.
>
> **[4:22](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=262)** Let's see what this looks like when I run it in my terminal.
>
> **[4:29](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=269)** The program is executing and then there's a pause while we wait on the task to complete.
>
> **[4:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=274)** The status code is printed to the screen and only then is the program ready for user input.
>
> **[4:41](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=281)** Using the Result property did return the result, but it blocked other code from executing while we waited on the task to complete.
>
> **[4:49](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=289)** Our asynchronous code was effectively executing synchronously.
>
> **[4:53](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/waiting-for-tasks-to-complete?u=76281980&t=293)** You obviously want to avoid this and continuations will help you do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), generic (2), next (1), api (1), [[LinkedIn]] (1)
> **Env Vars:** http (4), net (1), api (1)
> **Analogies:** imagine (1), just like (1)
> **Code Identifiers:** datatask (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Using continuations
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=0)** - [Instructor] Continuations are tasks that are invoked by other tasks.
>
> **[0:04](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=4)** They perform much the same role as a callback function in other asynchronous programming models.
>
> **[0:10](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=10)** They start when an antecedent or previous task completes.
>
> **[0:14](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=14)** If the asynchronous work performed by the task returns some data, you can use the continuation to receive and process that data without blocking your user interface.
>
> **[0:25](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=25)** Continuations are very flexible and may be associated with one or multiple antecedents.
>
> **[0:32](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=32)** For instance, you could configure a continuation to begin after a single task completes, but if you have several tasks executing at the same time, you could configure a single continuation to begin only after all of the tasks are complete or just after any one of them finishes.
>
> **[0:50](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=50)** You can exert even more granular control over the execution of a continuation with the task continuation options enum.
>
> **[0:59](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=59)** It includes lots of additional options such as only executing a continuation if the original task was canceled or if it threw an exception.
>
> **[1:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=68)** Let's look at the code for a basic continuation.
>
> **[1:11](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=71)** The most common continuation executes a new task to process the result of a newly completed task.
>
> **[1:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=79)** Here I'm creating a new task that will execute the retrieve data function.
>
> **[1:24](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=84)** I add a continuation to the data task by calling the continue with method that exists on all task instances.
>
> **[1:32](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=92)** The continue with method has quite a few overloads but this one takes a delegate as a parameter.
>
> **[1:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=99)** The completed task is passed to the delegate and can be used to retrieve any results it produced.
>
> **[1:45](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=105)** I've named that delegate parameter completed task but note that it's just the completed data task.
>
> **[1:52](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=112)** The delegate can be used to access and process data returned by the task.
>
> **[1:57](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=117)** Notice that I'm using the result property I warned you about earlier, because the task is already completed, accessing the result property here is non-blocking.
>
> **[2:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=128)** Once I have that result, I can do whatever I need with it.
>
> **[2:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=132)** Most importantly, the original task and the continuation which is also a task, execute asynchronously so our user interface will stay responsive.
>
> **[2:22](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=142)** The continuation is created with the default options but I could use the task continuation options enum to more precisely control how it's created.
>
> **[2:33](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=153)** Here, I'm using the not on canceled option which means the continuation will only execute if the antecedent task is not canceled before it completes.
>
> **[2:43](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=163)** Let's now add a continuation to the demo code from the previous movie.
>
> **[2:48](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=168)** In the previous demo, I showed you this code that uses the built-in HTTP client class to request a URL.
>
> **[2:55](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=175)** The call to get async returns a task and I immediately reference the result property on that task to access the HTTP response.
>
> **[3:06](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=186)** Let me quickly run it.
>
> **[3:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=192)** The problem is that accessing the result property like this is a blocking operation and reduces the responsiveness of the user interface.
>
> **[3:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=201)** I'm now going to fix that by converting this code to use a continuation.
>
> **[3:28](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=208)** After the call to get async, I'll call the continue with method on the return task.
>
> **[3:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=219)** The method will accept a delegate that will be passed the completed task as a parameter.
>
> **[3:45](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=225)** I'll name that task HTTP task.
>
> **[3:52](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=232)** Since the continuation is also a task that will be executed asynchronously, I can process the results of the completed task here without blocking the rest of the application.
>
> **[4:03](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=243)** I'll just move the two lines I already had that access and print out the result inside the body of the delegate.
>
> **[4:14](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=254)** I now just need to rename the task variable to HTTP task.
>
> **[4:22](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=262)** I'll go back to the terminal and run it again.
>
> **[4:31](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-continuations?u=76281980&t=271)** Notice that this time the user interface is immediately responsive and the result of the HTTP request is printed out without blocking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Programming]] (1), [[Representational State Transfer (REST)|Rest]] (1), application (1)
> **Env Vars:** http (5), url (1)
> **Analogies:** for instance (1), such as (1)
> **Prerequisites:** configure (2)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### Updating the user interface
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/updating-the-user-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/updating-the-user-interface?u=76281980&t=0)** - [Instructor] The examples I've shown you so far use console applications, which avoids a problem you may run into if using a graphical user interface framework like WPF or Windows Forms.
>
> **[0:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/updating-the-user-interface?u=76281980&t=12)** When you use one of those frameworks, the UI elements get created by a single UI thread that starts when your program starts.
>
> **[0:20](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/updating-the-user-interface?u=76281980&t=20)** The problem with this is that all updates to those UI elements must be performed from the thread that created them.
>
> **[0:28](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/updating-the-user-interface?u=76281980&t=28)** So if you perform some long-running calculation using a task on a background thread and want to present the results in a text box, for instance, you'll have to pass those results back to the main UI thread and have it update the text box.
>
> **[0:43](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/updating-the-user-interface?u=76281980&t=43)** You can certainly do this, but it's more code you have to write and different UI technologies have different techniques to switch to the UI thread.
>
> **[0:52](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/updating-the-user-interface?u=76281980&t=52)** Rather than show you lots of different ways to do that using the classes and methods I've shown you so far, I'm going to wait until the next chapter and show you how the async and await keywords make UI updates much easier and will accommodate the vast majority of use cases where you need to update the UI from a background thread.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Forms]] (1), next (1)
> **CLI Commands:** make (1)
> **Env Vars:** wpf (1)
> **Cross-References:** next chapter (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create and continue a task
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980&t=0)** (upbeat funky music)
>
> **[0:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980&t=5)** - [Instructor] In this challenge, you'll get a chance to practice creating and executing a task on a background thread and using a continuation to process the results produced by the task.
>
> **[0:17](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980&t=17)** The first step is to write a function to perform some calculations.
>
> **[0:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980&t=21)** I want you to write a function that will calculate all the factors of a given positive integer.
>
> **[0:27](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980&t=27)** There are probably several ways to do this but I'll be using the modulo operator in a simple loop.
>
> **[0:33](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980&t=33)** Next, I want you to execute your new function with a task on a background thread.
>
> **[0:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980&t=39)** When your task is complete use a continuation to log the results to the console.
>
> **[0:45](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980&t=45)** You could also add a couple of additional log statements just so you can see you're not blocking the main thread if you like.
>
> **[0:51](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-create-and-continue-a-task?u=76281980&t=51)** I'll present my solution in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat funky music) (1)

#### Solution: Create and continue a task
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=0)** - [Instructor] The first step to solving this challenge is to write a function to calculate factors for a given number.
>
> **[0:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=12)** I'll create a new function named CalculateFactors that returns a list of integers and takes a single integer as a parameter.
>
> **[0:24](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=24)** In the body of the function, I'll first instantiate a new list of integers to store the factors I find.
>
> **[0:36](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=36)** I'll then use a basic for loop from one to the number passed in as a parameter.
>
> **[0:49](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=49)** Each time through the loop, I'll use the modulo operator to see if dividing our number by the loop variable produces a zero remainder.
>
> **[0:58](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=58)** If it does, then it's a factor and I'll add it to the list.
>
> **[1:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=65)** At the end of the function, I'll just return the list.
>
> **[1:14](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=74)** Let's now execute the function with a task on a background thread.
>
> **[1:20](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=80)** I'll first add a call to Console.WriteLine just so we know when the program is starting.
>
> **[1:30](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=90)** I'll then declare a new variable to store the integer I'll pass to the function.
>
> **[1:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=99)** I'm going to execute the function with a call to task.run, but I want to capture the task instance that returns.
>
> **[1:47](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=107)** It will be a task with a generic type parameter of list of int.
>
> **[1:57](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=117)** I'll pass task.run an anonymous method that just calls my CalculateFactors function and passes it my number_to_calculate variable.
>
> **[2:15](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=135)** I want to use a continuation to process the results so I'll call the ContinueWith method on the return task.
>
> **[2:24](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=144)** The function passed to it will be passed the completed task.
>
> **[2:30](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=150)** Inside that function, I'll write a foreach loop to print out all of the integers stored in the result property of the task.
>
> **[2:46](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=166)** Remember that accessing the result property here is a non-blocking operation since we know the task has already completed.
>
> **[2:54](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=174)** At the end here, I'll just add another Console.WriteLine call to report that the program is ready for user input and a call to Console.ReadLine to wait for that input and keep our program running.
>
> **[3:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=192)** I'll try it out in the terminal with the command dotnet run.
>
> **[3:18](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-create-and-continue-a-task?u=76281980&t=198)** After a few seconds, we see that the factors are printed to the screen after we get the message that our program is ready for input, so we know our task was non-blocking and executing on a background thread.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** generic (1)
> **CLI Commands:** find (1), dotnet (1)
> **Code Identifiers:** number_to_calculate (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Using async and await

[↑ Back to Table of Contents](#table-of-contents)

#### Benefits of using async and await
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=0)** - [Instructor] So far, we've explored writing asynchronous code with task and continuations.
>
> **[0:06](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=6)** Those are foundational techniques that are important to understand before attempting to use the "async" and "await" keywords.
>
> **[0:14](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=14)** This function is designed to retrieve and process some data asynchronously.
>
> **[0:18](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=18)** We use the async keyword to let the C compiler know that this function will perform some asynchronous work.
>
> **[0:26](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=26)** That work will be executed by a task and we put the await keyword in front of the code that returns the task.
>
> **[0:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=34)** The function will pause at this point waiting for the task to complete.
>
> **[0:38](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=38)** While it's waiting, execution will be passed back to the calling thread so that the application is not blocked while the asynchronous work is performed.
>
> **[0:48](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=48)** There are several nice benefits you get when using the async and await keywords.
>
> **[0:53](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=53)** First, you'll write less code, and perhaps more importantly, the code you write will be easier to read.
>
> **[1:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=60)** The async and await keywords lets you write asynchronous code that reads more like synchronous code.
>
> **[1:07](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=67)** You don't use continuations implemented as anonymous callback functions.
>
> **[1:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=72)** The code simply pauses at the await keyword and resumes execution when the asynchronous work is complete.
>
> **[1:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=79)** At that point, you also have access to the results returned from it and can use them as you would in synchronous code.
>
> **[1:26](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=86)** Another benefit to using async/await is how you handle asynchronous exceptions.
>
> **[1:32](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=92)** They're returned with the task performing the asynchronous work.
>
> **[1:36](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=96)** This makes them easier to capture and access which means you can more easily take the most appropriate action to handle them.
>
> **[1:44](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=104)** UI updates are also easier with async/await, since when a function resumes after being paused with the await keyword, it will resume in the same context that called the function.
>
> **[1:56](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=116)** What this means in practice is that if you call an async function from your application's UI thread, the code that executes after the call to await will also execute on the UI thread.
>
> **[2:09](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=129)** That means you can directly reference UI elements and update them, perhaps with the results returned from the asynchronous work.
>
> **[2:17](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/benefits-of-using-async-and-await?u=76281980&t=137)** All of these benefits have made the async and await keywords the most common way to implement asynchronous code in modern C# applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), data (1)
> **Speakers:** - [instructor] (1)

#### Awaiting a task
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=0)** - [Instructor] Let's now rewrite some code I wrote earlier with a task and a continuation to use the async and await keywords instead.
>
> **[0:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=8)** This code makes an asynchronous request for a webpage, and when the asynchronous work is complete, prints out the HTTP StatusCode.
>
> **[0:17](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=17)** I'm going to start writing this function by creating a new function to perform the asynchronous work.
>
> **[0:24](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=24)** The async keyword is used as a modifier on function declarations.
>
> **[0:29](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=29)** Async functions have three possible return types, void, task or task of t result.
>
> **[0:37](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=37)** Void should only be used for event handlers.
>
> **[0:40](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=40)** Task of t result is for asynchronous work that will return a value.
>
> **[0:44](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=44)** The work I do here isn't going to return a value so I'll just have the function return a task.
>
> **[0:53](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=53)** I'll name the function PrintStatusCodeAsync.
>
> **[1:01](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=61)** Adding async to the end of the function name isn't required but it's a common convention that I encourage you to follow.
>
> **[1:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=68)** Inside the function, I want to do the same work I did before but with a different syntax.
>
> **[1:14](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=74)** I'll first cut and paste these two lines that create a new HTTP client and make a request to [linkedinlearning.com](https://linkedinlearning.com).
>
> **[1:24](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=84)** The call to get async is asynchronous and returns a task.
>
> **[1:29](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=89)** We used a continuation to process the completed task before, but because the function returns a task, we can also use the await keyword in front of it to effectively pause execution for this function while the asynchronous work is performed.
>
> **[1:45](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=105)** While this function is paused, waiting on the task to complete, execution will continue on the thread that called this function.
>
> **[1:52](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=112)** When the task finally completes, the value returned by the task will be assigned to the variable here rather than the task itself.
>
> **[2:01](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=121)** For that reason, I'm going to change the name of the variable to response rather than response task.
>
> **[2:10](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=130)** When the task is complete, and we've captured that response variable, this function will resume execution in the same context in which it was started.
>
> **[2:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=139)** That effectively means that if this function was called from the main UI thread for instance, then it will resume execution in that UI context and have access to all of the UI controls in your application so that you can easily update them with the results returned from the asynchronous work.
>
> **[2:38](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=158)** I'll cut and paste the call to Console.WriteLine I used before to print out the HTTP StatusCode.
>
> **[2:50](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=170)** To use the new function, I'll just replace what remains of the previous asynchronous code with a call to the new function.
>
> **[3:02](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=182)** I'll now run the program in my terminal with the command dotnet run.
>
> **[3:10](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=190)** Once the output appears, you can see that the asynchronous code didn't block our main thread and the program was ready for user input while the request was being made for the webpage.
>
> **[3:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=201)** Once the request completed, it printed the OK status to the screen.
>
> **[3:26](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=206)** This is the same result we got in the earlier version of this code that just used a task and continuation to accomplish the same thing.
>
> **[3:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=214)** However, I personally think this code is much easier to read.
>
> **[3:38](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/awaiting-a-task?u=76281980&t=218)** It reads much more like synchronous code and there's also less of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1)
> **Env Vars:** http (3)
> **CLI Commands:** make (1), dotnet (1)
> **URLs:** [linkedinlearning.com](https://linkedinlearning.com) (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Handling exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/handling-exceptions?u=76281980)

#### Challenge: Await HTTP requests
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-await-http-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-await-http-requests?u=76281980&t=0)** - [Instructor] In this challenge, you'll write some code that uses the Async and Await keywords to request the contents of a URL, similar to what you saw me do in the demos.
>
> **[0:15](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-await-http-requests?u=76281980&t=15)** The first step is to write an Async function that will accept a URL as a string parameter.
>
> **[0:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-await-http-requests?u=76281980&t=21)** You'll then use that URL with the GetStringAsync function on the HttpClient class to retrieve the contents of the URL and print them out to the screen once the task returned from GetStringAsync is complete.
>
> **[0:36](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-await-http-requests?u=76281980&t=36)** After writing the function, add some code to Program.cs to call your new function.
>
> **[0:42](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-await-http-requests?u=76281980&t=42)** You want to observe that it doesn't block your main thread while requesting the URL, so add some output before and after the function call so you can see when the different parts are running and ready for user input.
>
> **[0:55](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-await-http-requests?u=76281980&t=55)** Finally, use the .NET CLI to run your program and verify that your Async function doesn't block the main program thread.
>
> **[1:03](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-await-http-requests?u=76281980&t=63)** In the next movie, I'll present my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), next (1)
> **Env Vars:** url (5), net (1), cli (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Await HTTP requests
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=0)** - [Instructor] The first step to solving the challenge is to write an async function, that starts with the async keyword.
>
> **[0:14](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=14)** Async function should either return a task or a task of T, where T is the return type of the asynchronous work.
>
> **[0:23](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=23)** Our work won't have a return value so the function will just return a task.
>
> **[0:29](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=29)** I'll name the function PrintWebpageContents and have it accept a URL as a string parameter.
>
> **[0:41](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=41)** Inside the function, I'll declare a variable to store a new HTTP client instance.
>
> **[0:49](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=49)** I'll then use it to call the GetStringAsync instance method, passing it the URL passed into our function.
>
> **[1:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=60)** GetStringAsync is asynchronous and returns a task, so I'll make sure to include the await keyword in front of the call.
>
> **[1:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=68)** I'll also store the results, a string representation of the webpage, in a variable.
>
> **[1:14](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=74)** Once the task is complete I'll print that string to the console.
>
> **[1:22](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=82)** I'll now write a few lines to call the new function.
>
> **[1:26](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=86)** Just so we can see when the program starts running I'll add some initial output to the console.
>
> **[1:33](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=93)** (keyboard clicks) I'll then call our new function passing it the URL for LinkedIn Learning.
>
> **[1:41](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=101)** I'll capture the return task in a variable.
>
> **[1:45](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=105)** (keyboard clicks) Finally, as you've seen me do before, I'll output some text so we know the program is ready for user input.
>
> **[1:56](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=116)** This will just help us confirm our function is running on a background thread and not blocking the main UI thread.
>
> **[2:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=125)** A call to Console.ReadLine will keep the program open so we can observe all of the output.
>
> **[2:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=132)** I'll now open the terminal built into VS code and run the program with the command dotnet run.
>
> **[2:22](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=142)** After a few seconds, we see that the program is running and ready for input before the contents of the webpage starts scrolling past.
>
> **[2:30](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-await-http-requests?u=76281980&t=150)** Based on the order of that output, we know we did successfully download the contents of the page on a background thread without blocking the user interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Env Vars:** url (3), http (1)
> **CLI Commands:** make (1), dotnet (1)
> **Tools:** terminal (1), vs code (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** download the (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 4. Task Cancellation and Progress Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### Using cancellation tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=0)** - [Instructor] The ability to implement cancellation of a task is optional but included with most asynchronous methods.
>
> **[0:07](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=7)** Cancellation is managed by the cancellation token source class.
>
> **[0:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=12)** It provides a cancellation token via its token property that can be passed as a parameter to asynchronous methods that support cancellation.
>
> **[0:22](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=22)** There are a couple of different ways and scenarios to request the cancellation of an asynchronous task.
>
> **[0:28](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=28)** The first is to call the cancel method on the cancellation token source that created the token.
>
> **[0:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=34)** That request will be sent to the async methods that received the related token.
>
> **[0:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=39)** If the cancellation is successful, the task return from the async method will be in the canceled state and code waiting on its completion will receive an operation canceled exception.
>
> **[0:51](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=51)** The cancel method is helpful when you want to allow your users to initiate cancellation.
>
> **[0:57](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=57)** Another common scenario is to cancel a task if it hasn't completed in a certain amount of time.
>
> **[1:03](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=63)** For that, you can use the cancel after method on a cancellation token source.
>
> **[1:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=68)** It accepts either a time span or an integer representing the number of milliseconds to wait before cancellation should be initiated.
>
> **[1:15](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=75)** Cancellation is optional, so just remember to check the documentation for async methods you plan to use.
>
> **[1:22](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/using-cancellation-tokens?u=76281980&t=82)** Those that support cancellation usually have an overload that accepts a cancellation token as the last parameter.

> [!info]- Semantic Content
>
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Implementing timeout cancellations
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=0)** - In this lesson, I want to show you an example of using the cancellation token source class, and cancellation tokens, to implement timeout cancellations for asynchronous methods.
>
> **[0:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=12)** I've already got some code in place here that will asynchronously read the contents of a text file before printing it to the screen.
>
> **[0:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=19)** I've hard coded the name of the file I'm going to read here on line three.
>
> **[0:23](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=23)** Below that, I declare a byte array that will hold the contents of the file.
>
> **[0:28](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=28)** I then use a try catch block to create a new file stream and read the data.
>
> **[0:33](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=33)** The asynchronous work begins on line 11, when I call the "read async" method that exists on file stream instances.
>
> **[0:41](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=41)** I'm currently passing it three parameters that basically instruct the method to read the entire file into the "contents" bite array.
>
> **[0:50](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=50)** There's no code to implement cancellation here yet.
>
> **[0:53](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=53)** Notice that I'm also awaiting the completion of the "read async" method, and then writing the contents of the file to the screen.
>
> **[1:01](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=61)** In the catch block at the bottom, I'm just catching all exceptions, and then printing the type of the exception to the screen.
>
> **[1:09](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=69)** There's nothing wrong with this code as it is, but let's imagine we're worried about the read operation taking too long, so we want it to time out after a fixed amount of time.
>
> **[1:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=79)** The first thing I need to do is create a new cancellation token source instance.
>
> **[1:25](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=85)** I'll do that near the top of the code before the try block.
>
> **[1:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=94)** I want to cancel the operation if it hasn't completed in 500 milliseconds, so I'll call the cancel after method on our new cancellation token source instance and pass it 500.
>
> **[1:47](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=107)** I now need to pass the token associated with this source to the asynchronous method.
>
> **[1:53](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=113)** There's an overload of the "read async" method that accepts a cancellation token as the final parameter.
>
> **[1:59](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=119)** I pass the token using the token property of the cancellation token source instance.
>
> **[2:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=128)** One important thing to note about the cancellation token source class, is that it implements the I disposable interface, so we either need to wrap it in a "using" block, or make sure we explicitly call its dispose method.
>
> **[2:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=141)** I'm going to add a "finally" block at the end of the code and call the dispose method in there.
>
> **[2:30](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=150)** With that in place, we're ready to try it out.
>
> **[2:33](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=153)** I'll open the terminal in VS Code and start it with the command "dotnet run."
>
> **[2:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=159)** After a few seconds, we see the single line of text from the file printed to the screen, and the program ends with no errors.
>
> **[2:46](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=166)** This is a tiny text file on my local drive, so 500 milliseconds is more than enough time for the "Read Async" method to do its work before cancellation is initiated.
>
> **[2:57](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=177)** Let's tweak the code, just so I can show you how the cancellation would behave.
>
> **[3:02](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=182)** Instead of 500 milliseconds, I'm going to change the code to cancel the read after only one millisecond.
>
> **[3:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=188)** I'm also going to read a file on a much slower USB drive.
>
> **[3:17](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=197)** I'll go back to the terminal and start the program again.
>
> **[3:24](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=204)** This time it wasn't able to read the file before the cancellation, and instead of seeing the contents of the file, we see that an operation canceled exception was thrown.
>
> **[3:33](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=213)** There are lots of variables that affect how long it will take to open and read a file on your computer.
>
> **[3:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=219)** The time needed will vary by machine and the contents of the file.
>
> **[3:43](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=223)** The ability to cancel asynchronous tasks with timeouts, or at the request of users, can be a nice addition to your applications, and doesn't require much extra code.
>
> **[3:54](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/implementing-timeout-cancellations?u=76281980&t=234)** So I hope you'll give it a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1), data (1)
> **Tools:** terminal (2), vs code (1)
> **CLI Commands:** make (1), dotnet (1)
> **Env Vars:** usb (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)

#### Reporting task progress
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=0)** - [Instructor] Even though you may asynchronously execute long running tasks, leaving your users free to do other things in your app, they may still like to see how the long running task is progressing.
>
> **[0:11](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=11)** The .net framework provides an interface specifically designed to help you do that.
>
> **[0:16](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=16)** The Iprogress of T interface contains a single method named report.
>
> **[0:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=21)** To use it, you pass an object that implements the interface to your asynchronous method.
>
> **[0:27](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=27)** Inside the method, you call report when you want to communicate a progress update back to the calling code.
>
> **[0:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=34)** The T, generic type parameter, represents the type that contains the progress data passed back to the caller.
>
> **[0:41](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=41)** It can be a simple built-in type like a string or integer or a custom type you've created to store precisely what you want the caller to know about the task progress.
>
> **[0:51](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=51)** You're free to create your own custom implementation of the IProgress interface, but there's one already included in the .net framework named Progress of T.
>
> **[1:01](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=61)** If you use the Progress of T implementation, there are a couple of different ways you can handle the progress updates.
>
> **[1:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=68)** The class exposes a progress changed event that will be raised with each progress update sent from the asynchronous code.
>
> **[1:15](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=75)** You can register event handlers for that event just as you would with any other event.
>
> **[1:20](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=80)** The other option is to pass a delegate to the progress class constructor.
>
> **[1:25](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=85)** The delegate will be passed one parameter which will be the progress data sent from the asynchronous code.
>
> **[1:32](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=92)** The delegate effectively acts like an event handler, and you can use it to present the progress update to your user.
>
> **[1:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=99)** Let me show you an example of how it all works.
>
> **[1:42](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=102)** I've got an async method here at the top of my code file named ProcessData that I'll use to simulate some asynchronous data processing.
>
> **[1:51](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=111)** It takes an array of strings representing departments as a parameter, loops over them and simulate some data processing with this call to task.delay, which will delay the function by one second for each department.
>
> **[2:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=125)** A little further down in the code, I declare an array with four different names and then pass it to the asynchronous function.
>
> **[2:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=132)** I then output that the program is ready for user input before awaiting the task returned from the function.
>
> **[2:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=139)** I'll quickly open the VS code terminal and show you how this currently works.
>
> **[2:26](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=146)** We get notified that the program is ready for user input but then we wait several seconds with no update before being told that the processing is done.
>
> **[2:35](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=155)** It would be much nicer to get some progress updates about that processing rather than wondering what's happening during that time.
>
> **[2:43](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=163)** To add progress reporting to this code, we need to make some changes to the asynchronous function as well as the code that calls it.
>
> **[2:50](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=170)** I'll start with the changes to the function.
>
> **[2:53](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=173)** I first need update it to accept a parameter that implements the Iprogress interface.
>
> **[2:59](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=179)** Probably my favorite thing about how you report progress is how flexible it is.
>
> **[3:04](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=184)** The generic type parameter I use with the interface is the type that will contain the progress data communicated back to the calling code.
>
> **[3:13](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=193)** I could create any type I want to pass any data I need.
>
> **[3:16](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=196)** I'm going to keep things simple for now and just use an integer.
>
> **[3:22](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=202)** I'll name the parameter progress.
>
> **[3:27](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=207)** I want to report the number of departments that have been processed.
>
> **[3:31](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=211)** To make that a little easier, I'm going to convert this for each loop to a for loop, and I'll use my counter variable I as the data I'm reporting.
>
> **[3:43](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=223)** Before the simulated processing, I'll call the report method on the progress object and pass it the current value I.
>
> **[3:52](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=232)** That's all I need to do inside the function.
>
> **[3:55](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=235)** In the calling code, I need to create an object that implements the IProgress interface.
>
> **[4:01](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=241)** If I needed to, I could create my own implementation, but the built-in progress class will meet my needs here.
>
> **[4:07](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=247)** Its constructor accepts a delegate that will receive the progress data as a parameter and execute each time a progress report is sent.
>
> **[4:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=261)** My delegate will receive an integer as a parameter, and I'll just print out a message that includes that value.
>
> **[4:30](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=270)** I now need to pass this progress reporter variable as the second parameter to my process data function.
>
> **[4:41](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=281)** That takes care of the calling code, so let's now go run it again in the terminal.
>
> **[4:49](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=289)** This time instead of several seconds with nothing happening, we have nice progress reports letting us know how many departments have been processed.
>
> **[4:57](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=297)** This is a basic implementation and just the beginning of what's possible when implementing progress reporting, so give it a try.
>
> **[5:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/reporting-task-progress?u=76281980&t=305)** I think you'll find that your users appreciate knowing how the app is running and when that task they kicked off might be done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), generic (2)
> **CLI Commands:** make (2), go run (1), find (1)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Cancel a slow HTTP request
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=5)** - [Instructor] In this challenge, you'll write an async function that makes an HTTP request but will time out with a cancellation token if the request takes too long to complete.
>
> **[0:15](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=15)** The first step is to write an async function that will accept a URL as a string parameter.
>
> **[0:21](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=21)** You'll then use that URL with the GetStringAsync function on the HttpClient class to retrieve the contents of the URL and print them out to the screen once the task returned from GetStringAsync is complete.
>
> **[0:36](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=36)** If this sounds familiar, it's because this was also the first step in the challenge from the previous chapter.
>
> **[0:42](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=42)** If you completed that challenge, you can use your code from it as a starting point to complete this one.
>
> **[0:48](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=48)** There's an overload of the GetStringAsync method that accepts a string URL for the first parameter and a cancellation token for the second.
>
> **[0:57](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=57)** That's the one you want to use for this challenge.
>
> **[1:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=60)** Configure the cancellation token to cancel the HTTP request if it's not complete within five seconds.
>
> **[1:08](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=68)** Also, make sure to use try-catch finally blocks to make the request and handle the exception thrown as a result of a cancellation.
>
> **[1:16](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=76)** Finally, call your function inside Program.cs and use the .NET CLI to run your program.
>
> **[1:23](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=83)** Hopefully, most websites will return successfully in less than five seconds.
>
> **[1:28](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=88)** So if you want to observe a cancellation, feel free to experiment with different cancellation times.
>
> **[1:33](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/challenge-cancel-a-slow-http-request?u=76281980&t=93)** In the next movie, I'll present my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), next (1)
> **Env Vars:** url (4), http (2), net (1), cli (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous chapter (1), in the next (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Cancel a slow HTTP request
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=5)** - [Instructor] The solution to the challenge really begins with the code you hopefully wrote for the challenge in the previous chapter.
>
> **[0:12](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=12)** I'll briefly walk you through this in case you need a quick refresher on it.
>
> **[0:15](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=15)** At the top, I wrote an async function named PrintWebpageContents that accepts a URL as a string parameter.
>
> **[0:23](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=23)** I declared the function with the async keyword and specified that it will return a task.
>
> **[0:29](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=29)** Inside the function, I create a new HttpClient instance and then call the GetStringAsync method on it, passing it the url parameter.
>
> **[0:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=39)** I await the results of that asynchronous function and capture the webpage contents in a variable that I then output to the screen.
>
> **[0:47](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=47)** A little further down, I wrote a few lines to call the function, passing it the URL for the LinkedIn Learning website.
>
> **[0:55](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=55)** The part of this challenge you didn't do in the earlier one is adding a CancellationToken to cancel the request if it takes too long.
>
> **[1:03](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=63)** Let's now write the additional code to implement that.
>
> **[1:06](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=66)** At the top of the function body, I'll declare a new CancellationTokenSource variable and assign it a new CancellationTokenSource instance.
>
> **[1:19](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=79)** Immediately after that, I'll call the CancelAfter instance method on the variable, and pass it 5000, the number of milliseconds that should trigger the cancellation.
>
> **[1:31](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=91)** I can then use the CancellationTokenSource to pass a CancellationToken to the GetStringAsync method below.
>
> **[1:40](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=100)** Remember I mentioned that there's an overload of it that takes a CancellationToken as a second parameter.
>
> **[1:46](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=106)** I'll pass it here by referencing the Token property on the CancellationTokenSource variable.
>
> **[1:53](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=113)** Now, in order to properly handle the exception that will be thrown as a result of a cancellation, I need to wrap this code in try-catch blocks.
>
> **[2:11](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=131)** The canceled task will throw an OperationCanceledException, so I'm going to explicitly catch that type and then output a message to the console that the operation timed out, and include the text of the message property on the exception.
>
> **[2:32](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=152)** We're almost done, but there's one more important piece I need to add.
>
> **[2:36](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=156)** Remember that CancellationTokenSource implements IDisposable, so I need to make sure I call its Dispose method.
>
> **[2:44](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=164)** I'll do that inside a finally block at the end.
>
> **[2:51](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=171)** We can use the code at the bottom to call the function just as it is, so let's run this and see how it behaves.
>
> **[2:58](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=178)** In the VS Code terminal, I'll start it with the command dotnet run.
>
> **[3:04](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=184)** After a few seconds it starts to run, and we can tell the request completed before the five-second timeout, because we can see the contents of the webpage start to scroll past.
>
> **[3:15](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=195)** Just so I can observe a cancellation, I'll go back to the code, and this time have it time out after 500 milliseconds instead of 5,000.
>
> **[3:24](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=204)** I'll start the program again.
>
> **[3:31](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/solution-cancel-a-slow-http-request?u=76281980&t=211)** After a few seconds, you can see that the cancellation did happen and we got the message from our catch block that the operation was canceled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** make (1), dotnet (1)
> **Env Vars:** url (2)
> **Cross-References:** previous chapter (1), go back to (1)
> **Tools:** vs code (1), terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=0)** - [Narrator] Congratulations on finishing the course.
>
> **[0:03](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=3)** You've developed some new C# muscles.
>
> **[0:06](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=6)** To maintain and grow those muscles, you must continue exercising them.
>
> **[0:10](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=10)** That can take the form of additional learning as well as practice on your own applications.
>
> **[0:15](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=15)** I've got a few suggestions to help you in each of those areas.
>
> **[0:18](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=18)** There are lots of great C# courses on LinkedIn Learning to help you with asynchronous programming and other advanced topics.
>
> **[0:25](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=25)** C# Advanced Practices includes topics on task and asynchronous programming as well as LINQ, entity framework and multi-threading.
>
> **[0:34](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=34)** Advanced C#: Thread-Safe Data with Concurrent Collections covers many important multi-threading topics with an obvious focus on concurrent collections.
>
> **[0:44](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=44)** Lastly, Advanced C# Language Features doesn't cover asynchronous programming, but does dive deep into other advanced features of the language that will certainly help you continue to grow your skills.
>
> **[0:56](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=56)** Continuing to learn new things is great, but one of the best ways to retain that new knowledge is to put them into practice.
>
> **[1:03](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=63)** Always be on the lookout for opportunities to practice your new skills.
>
> **[1:07](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=67)** I explained earlier that there are lots of programming scenarios that might benefit from asynchronous execution.
>
> **[1:14](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=74)** Particularly look for I/O bound and CPU bound tasks.
>
> **[1:18](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=78)** This is probably easiest to do when working on a new application or a new feature in an existing application, but refactoring existing code is another great way to practice your new skills.
>
> **[1:30](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=90)** You presumably already have a correct implementation of the requirements and can just focus on improving the code using asynchronous techniques.
>
> **[1:39](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=99)** I hope you've enjoyed the course and are eager to start using your new asynchronous C# skills.
>
> **[1:44](https://www.linkedin.com/learning/asynchronous-programming-in-c-sharp/next-steps?u=76281980&t=104)** Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming]] (4), concurrent (2), application (2), [[LinkedIn]] (1), [[Language Integrated Query (LINQ)|Linq]] (1)
> **Env Vars:** linq (1), cpu (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Brice Wilson]]

## Skills Covered

- C#

## Path Context

### In [[C- Excellence- Architecting High-Performance Solutions]]
← [[Advanced C- Object-Oriented Programming]] | **5 of 6** | [[C- Framework Design]] →

## Appears In

- [[C- Excellence- Architecting High-Performance Solutions]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#

---

[↑ Back to top](#)