---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: c-sharp-essential-training-2-generics-collections-and-linq
url: "https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq"
duration_minutes: 195
duration: 3h 15m
level: Beginner
updated: 12/8/2023
learners: 45099
skills:
  - Language Integrated Query (LINQ)
  - C#
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEEIn0Zoh7ySw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702331417325?e=2147483647&amp;v=beta&amp;t=jEEKVyoa5ZugROjjzkNxq7pRCCia5ocmVs57mFMJfoE"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Foundations- From Basics to Building Blocks]]'
  - '[[Getting Started as a C- Developer]]'
prev_courses:
  - '[[C Sharp Essential Training 1 Types And Control Flow]]'
  - '[[C Sharp Essential Training 1 Types And Control Flow]]'
next_courses:
  - '[[Debugging in C-]]'
  - '[[C- and .NET Essential Training]]'
path_nav: '[{"path":"C- Foundations- From Basics to Building Blocks","position":2,"total":5,"prev":"C Sharp Essential Training 1 Types And Control Flow","next":"Debugging in C-"},{"path":"Getting Started as a C- Developer","position":2,"total":9,"prev":"C Sharp Essential Training 1 Types And Control Flow","next":"C- and .NET Essential Training"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - skill/language-integrated-query-linq
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Essential%20Training%202-%20Generics%2C%20Collections%2C%20and%20LINQ.md)

![C# Essential Training 2: Generics, Collections, and LINQ](https://media.licdn.com/dms/image/v2/D560DAQEEIn0Zoh7ySw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702331417325?e=2147483647&amp;v=beta&amp;t=jEEKVyoa5ZugROjjzkNxq7pRCCia5ocmVs57mFMJfoE)

# C# Essential Training 2: Generics, Collections, and LINQ

> As one of the most popular programming languages, C# continues to make programming easier and more fun with each new version. In this course, instructor Matt Milner digs deeper into essential features of C#, such as generic types, collections, handling exceptions, asynchronous programming with tasks, and more. Matt begins with helping you understand and work with generic types, then moves on to un

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq) | 3h 15m | Beginner | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Essentials deep dive](#essentials-deep-dive)
  - [What you should know](#what-you-should-know)
  - [CoderPad tour](#coderpad-tour)
- [**1. Generics**](#1-generics) (5 videos)
  - [Understanding generics](#understanding-generics)
  - [Working with generics](#working-with-generics)
  - [Defining generic types and methods](#defining-generic-types-and-methods)
  - [Generic constraints](#generic-constraints)
  - [Solution: Generic type with constraints](#solution-generic-type-with-constraints)
- [**2. Working with Collections**](#2-working-with-collections) (6 videos)
  - [Understanding collection types in the BCL](#understanding-collection-types-in-the-bcl)
  - [Choosing the right collection type](#choosing-the-right-collection-type)
  - [Working with collections](#working-with-collections)
  - [Working with keyed collections](#working-with-keyed-collections)
  - [Understanding concurrent collections](#understanding-concurrent-collections)
  - [Solution: Choose the right collection](#solution-choose-the-right-collection)
- [**3. Exception Handling**](#3-exception-handling) (6 videos)
  - [Basics of try-catch-finally](#basics-of-try-catch-finally)
  - [Exception filtering by type with catch](#exception-filtering-by-type-with-catch)
  - [Exception filtering with when](#exception-filtering-with-when)
  - [Throwing and rethrowing exceptions](#throwing-and-rethrowing-exceptions)
  - [Creating custom exceptions](#creating-custom-exceptions)
  - [Solution: Multiple exception types](#solution-multiple-exception-types)
- [**4. Programming Threads with async and await**](#4-programming-threads-with-async-and-await) (5 videos)
  - [Threading basics](#threading-basics)
  - [Basics of using async and await](#basics-of-using-async-and-await)
  - [Task management](#task-management)
  - [Handling errors when using await](#handling-errors-when-using-await)
  - [Solution: Task management](#solution-task-management)
- [**5. Delegates and Events**](#5-delegates-and-events) (7 videos)
  - [Understanding delegates](#understanding-delegates)
  - [Understanding events](#understanding-events)
  - [Common delegates with Action<T> and Func<T>](#common-delegates-with-actiont-and-funct)
  - [Understanding lambda expressions](#understanding-lambda-expressions)
  - [Expressions as delegates](#expressions-as-delegates)
  - [Other uses for expressions](#other-uses-for-expressions)
  - [Solution: Delegate using Func<T>](#solution-delegate-using-funct)
- [**6. Extension Methods**](#6-extension-methods) (5 videos)
  - [The case for extension methods](#the-case-for-extension-methods)
  - [Writing an extension method](#writing-an-extension-method)
  - [Using an extension method](#using-an-extension-method)
  - [Common extension methods on collections](#common-extension-methods-on-collections)
  - [Solution: Extension method](#solution-extension-method)
- [**7. Language Integrated Query (LINQ)**](#7-language-integrated-query-linq) (5 videos)
  - [Understand the purpose of LINQ](#understand-the-purpose-of-linq)
  - [Querying collections with LINQ](#querying-collections-with-linq)
  - [Filtering and ordering queries](#filtering-and-ordering-queries)
  - [Other sources for LINQ](#other-sources-for-linq)
  - [Solution: LINQ query to filter and sort](#solution-linq-query-to-filter-and-sort)
- [**Conclusion**](#conclusion) (1 videos)
  - [Build something and continue learning](#build-something-and-continue-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Essentials deep dive](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/essentials-deep-dive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/essentials-deep-dive?u=76281980&t=0)** - [Instructor] C# is one of the most popular programming languages in use and continues to make programming easier and more fun with each new version.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/essentials-deep-dive?u=76281980&t=9)** In this course, we'll dig deeper into some essential features of C#, like generic types, lambda expressions, [[Language Integrated Query (LINQ)|language integrated query]], and more.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/essentials-deep-dive?u=76281980&t=19)** I'm Matt Milner, and I've been programming with C# for 20 years.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/essentials-deep-dive?u=76281980&t=23)** I continue using C# because I love how the language has evolved in the improvements I've seen to make programming easier.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/essentials-deep-dive?u=76281980&t=31)** So please join me as we explore more of the essential parts of C#.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Language Integrated Query (LINQ)|Language integrated query]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=0)** - [Instructor] As we get started to explore part two of C Sharp Essential Training, there are a couple things that you should know.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=7)** First, I'm expecting that you've got some knowledge of programming languages in general.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=11)** Maybe you've used another programming language, or you've tried them out, or you've got some basic programming knowledge.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=18)** Also, as this is a part two, I'm assuming at you've watched or know the content of C Sharp Essential Training one, and the Learning C Sharp course on [[LinkedIn]] Learning, which was a prerequisite for that course.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=31)** All of that's really going to help in this course for you to make sense of what we're talking about and really get the most out of it.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=39)** In this course, I'm going to use Visual Studio 2022 on [[Windows]].
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=44)** I'm going to be using C# 10 and .NET 6.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=48)** If you're following along, the easiest way to do that is by using this setup.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=53)** So if you have Visual Studio 2022 Community edition, that should be fine, and you'll get C Sharp 10 and .NET 6 with that.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=63)** If you want to do something else, for example if you're on a Mac, there are some other options.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=68)** Visual Studio for Mac 2022 is in preview at the time of this recording, but you should be able to follow along in there for the core C Sharp work that we're doing here.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=79)** You could also use Visual Studio Code, which has support for C Sharp and the ability to work with the .NET 6 compiler and C Sharp 10.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=88)** That said, I'd really only recommend this approach if you're very familiar with those tools already, or if you don't have another option because you are on Mac OS, you don't have the ability to use a Windows machine and the full Visual Studio.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=101)** But again, I'll be doing things on Windows.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=104)** It'd be very similar to what you'd do in Visual Studio for Mac, with some slight UI differences.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/what-you-should-know?u=76281980&t=110)** In Visual Studio Code, the C Sharp itself, the editor will be very similar, but there'll be some shortcuts I take and things like that that will be different.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[LinkedIn]] (1)
> **Tools:** visual studio (7)
> **Env Vars:** net (3)
> **Analogies:** for example (1), similar to (1)
> **Prerequisites:** prerequisite (1), setup (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [CoderPad tour](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=7)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=15)** These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=22)** We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=30)** The code challenge has four areas: instructions in the top left, a code editor for your answer in the top right, another code editor where you can see how your code is used in the bottom right and a console for output in the bottom left.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=44)** You can use these drag handles to change the amount of space that each of these has as it works for you to be able to expand the areas you need to focus on.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=55)** You can also get more horizontal space for the code editors by collapsing the course's table of contents on the left.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=62)** Each challenge has instructions that include a description of the challenge and the challenge's desired results, parameters, or values that'll be passed into your code, and they may have to be of a particular data type.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=75)** The return value also has to be of a particular type, and you'll also see that noted in the instructions.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=81)** The constraint section has useful information about the parameters.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=86)** The constraint section has useful information about the parameters that'll be passed in.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=90)** The examples show different parameter values and what result would be returned for each of those test cases.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=98)** Create your answer in the top right code editor.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=101)** There may be examples or options in the comments here, generally some guidance that you can use around what you need to do in addition to the instructions.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=111)** And when you're ready, you can click test my code to see if you've got the correct answer.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=117)** If your code isn't successful, you can ask for help.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=121)** I can change these values to true or show expected result and show hints.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=128)** Now, if I test my code, you see I didn't get the correct answer this time.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=134)** Time for another try. We see the help down at the bottom.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=139)** The expected result is 19, and the hint tells us we can either iterate through the array to do our own calculation or use a link method.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=148)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=153)** If anything's too long to fit, you can scroll sideways to see all the text.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/coderpad-tour?u=76281980&t=158)** When you finish each code challenge, return to the course's table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Generics

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding generics](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=0)** - [Instructor] In C# Essentials part one, we talked a lot about defining types.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=5)** We defined those types with very specific plans in mind for how they'd be used.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=11)** To start part two, I want to talk about generics 'cause this is a natural extension of defining types, but it allows 'em to be more flexible.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=20)** Let's look at an example to help you understand why generics are important and why they were introduced into the C# language.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=27)** Say I've got this method here called swap, and what I want to be able to do is have two objects or two references or variables and I want to swap them.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=37)** Pretty simple, nothing too complicated there.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=39)** So I take the second object, I assign it to a variable called temp, and now I point second at first and I point first at temp.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=48)** As we're getting started, you may find some problems with this already and hopefully we'll come to that.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=53)** Let's say I just want to try this with some simple types.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=55)** I'll say x=5 and y=7 and those are just integers.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=61)** And then I want to do Console.WriteLine.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=64)** So I might use my string interpolation and I can say x, and I'll put x there and y and we'll put y there.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=74)** So we want to put out those values.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=75)** And in between then I want to call swap.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=78)** Then I want to just pass not x and 5 but x and y into that method.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=84)** This seems like it should work.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=85)** So if x is 5 and y is 7.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=88)** When we swap these and write it out, it should say x is 7 and y is 5, but it doesn't.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=95)** Now if you watched C# Essentials Part One, you know why.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=100)** 'Cause these are value types.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=101)** And so when they go into this method and come back out of this method, they have different scope.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=107)** We're actually copying values in there.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=110)** Ah, you're thinking, let's use some reference types.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=113)** Great.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=114)** I have a person class that I've defined over here in my library.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=118)** That library is referenced by my [[LinkedIn]] essentials program.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=122)** And it's just a simple class called Person, first and last name and age and an ID.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=129)** And of course you can grab these files from the exercise files and follow along.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=134)** Now I've got some reference types.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=136)** I should be able to come down and call swap on those.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=140)** So I'll do Swap(p1,p2) and I want to swap those references.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=145)** And now I can do a Console.WriteLine.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=149)** And now I can do something like this or I'll say Person 1 and we'll do P1.FirstName.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=159)** We'll just leave it at that.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=160)** So if we swap these, we should then see that first name is going to be Amanda because we're swapping those two around.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=172)** We'll run that again.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=175)** Notice again we get person one is Matt.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=179)** Why is that?
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=180)** Same reason we saw before with the value types.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=183)** So again, you're thinking, well we'll add ref here 'cause this is going to allow us not to just change the parts of the object, but actually change what they point to.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=193)** And of course we have to go back to the swap, we'll say ref here as well.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=202)** And now we start running into some problems.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=203)** We've got red squigglies.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=205)** And if I go highlight that, it's going to tell me that it can't convert this from a ref of person to a ref of object.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=213)** And the reason is a ref of object is very vague.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=217)** That's kind of what we want here.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=218)** We want this to be something that can point to anything, but that means I could pass in this person, but I could change it in the method to be an array or a date time or any other kind of object.
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=232)** And so the compiler's not going to allow me to do that.
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=236)** So we're a little bit foiled in our goal here.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=238)** And this isn't actually the most ideal way to do this either.
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=242)** Even with our first example of swapping x and y, the problem was we're taking integers and we're treating them as objects.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=251)** Now, C# allows you to do that, but it involves what's called boxing and unboxing and value type in state times can be treated as an object.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=261)** That's a core principle of the language.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=263)** But because they're treated differently in how the memory is allocated, it's an expensive operation.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=269)** And this is where generics come in.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=271)** What we want to be able to do is provide this swap method, allowed to use it with any type, but we don't want to use something like object.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=280)** So what we can do is specify in our method this definition of a generic parameter called T, and that's a type parameter.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=292)** So we're saying when you call the swap method, you're going to have to provide a type.
>
> **[4:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=296)** And now instead of object, we'll put T here.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=303)** And then inside the method, we don't want to treat it as an object here.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=307)** Again, we want to set that as T.
>
> **[5:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=310)** So let's go back up here to our person and we're just going to put that type, the person type in there and pass those in and write that out.
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=320)** Now for this swap, we could come in and do an int and now we can come in and say ref.
>
> **[5:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=328)** And that's actually going to allow us from the compiler's perspective to do that.
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=333)** So we'd expect if we swap the people, is that P1.FirstName should now be Amanda, which was P2's first name, and x should be seven and y should be five.
>
> **[5:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=344)** So we should see person one, Amanda, print out.
>
> **[5:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=346)** And then we should see x is seven, y is five.
>
> **[5:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=350)** And that's in fact what we get.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=353)** So that one little change, just being able to specify dynamically the type for our method has made it much simpler for us to create a useful utility method or some sort of functionality.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=367)** And then when we compile, it's the calling code that provides that type.
>
> **[6:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=371)** So it's still going to get compiled in as that type.
>
> **[6:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=374)** And we do know the type at compile time, so it can do all sorts of checks and other things that we would expect in our application.
>
> **[6:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-generics?u=76281980&t=383)** So these generic types as we'll see can be used not only on methods, but on interface definitions or class definitions as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Working with generics](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=0)** - [Instructor] When you're working with C sharp and generic types, you're going to either be working with an actual generic type, meaning a class, a record that has type parameters, or a generic method.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=13)** So a generic method might be something like we've seen.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=16)** I'm just going to piece in a little bit of code here.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=20)** So this is just a string that represents some [[JSON]], some [[JavaScript]] object notation.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=25)** Pretty common format these days for serializing objects and it just indicates that we've got an ID property, first name, last name, and age, which should look familiar.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=35)** That's what our person class looks like.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=38)** So now we might do something like VAR PJ, or person from JSON equal system.text.json and we want to use what's called the JSON serializer that's going to allow us to serialize and deserialize objects and you'll notice the first option is a deserialized method that returns an object, but I know that the JSON I have represents a person, be deserialized into a person, it's going to choose the generic method and I can see here then that it has a type parameter, it just says T value and I can also see that the return type is a knowable T value.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=79)** So in here, I could say I want this to be person and then I'm going to pass it the JSON person text, and I should now have a person object that's been deserialized from that text.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=92)** We could do something like this.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=94)** We write out to the console, say JSON person, and then we can do PJ and I'll use this because it is a nullable person, so that helps me make sure that I avoid any null references.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=109)** I'll do first name, then I can come across and say is, and then we could do PJ question mark.age Got an extra semi colon there.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=124)** So that's a generic method, where you're going to give the type of the method and that's generally going to map onto one or more parameters, or the return type or both.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=136)** We'll run this quick and we should see that JSON person come out as our output at the beginning and there we see JSON person, Matt is 50 and if we look again, that's what we had in our text.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=149)** Our JSON, first name was Matt, age was 50.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=153)** In C Sharp Essentials Part One, we actually worked with a generic type, albeit a little bit indirectly.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=160)** We worked with nullable value types like this.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=164)** What that shortcut was really referencing was a nullable of T int.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=171)** So we can write it like this.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=174)** That's a generic type.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=175)** What does that mean?
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=176)** Well, if we look at X now, we can see that there are properties on there called value and it has a return type of int 'cause that's the generic type parameter we provided.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=188)** If we look at [[Git]] value or default, that's going to return an int.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=193)** Again, because of the type parameter that we provided.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=196)** It may be that what it's going to provide is zero because that's the default for an int, or it's going to provide us with that value.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=205)** Likewise, we take this now and we do a nullable of date time.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=212)** We'll call it maybe date, and we'll be explicit.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=216)** We'll set it to null for now.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=218)** Now if we look at maybe date, the value again is date time.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=224)** So it's still a nullable, but it's got a type parameter that is going to be used throughout that class, the nullable class, in order to represent return values of parameters of properties and methods.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=238)** So our value has the date time.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=241)** Again, if we went to the git value or default, the return type is going to be a date time, but it may be a valid date time, or in our case, it's going to be the default.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=251)** So let's go ahead and do git value or default.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=256)** We can write that out and we'll see if we run this, what do we get?
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=268)** We got a build error there.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=272)** Oh, didn't like my X.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=274)** We'll call that A, 'cause I already have X down below.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=280)** There's a JSON person, and there's our default value of the date.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=285)** We said git value or default.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=286)** Default is January 1st, 0001 at 12:00 AM.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-generics?u=76281980&t=292)** So when you're using generic types, you're going to provide one or more of these generic parameters and that's going to influence parameter types, return types in that class or for that method, depending on the scope at which you're using the generic declaration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (11), [[Git]] (4), [[JavaScript]] (1)
> **Env Vars:** json (10), var (1)
> **CLI Commands:** git (4), make (1)
> **Definitions:** is a  (3)
> **File Paths:** system.text.json (1)
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)

#### [Defining generic types and methods](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=0)** - [Instructor] We've seen how to use generics.
>
> **[0:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=2)** Let's look at how to define them.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=4)** I'm going to right click on my library here and add a new item.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=7)** I'm going to choose interface.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=10)** I'm going to call it I Mapper.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=12)** This is something I've used recently in some client scenarios where I needed to map multiple types.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=20)** We're going to make this public instead of internal, and I'm going to define this interface with generic types, so I'm going to say S and T.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=34)** And what that means is, I've got two different generic type parameters, and then I can define a method inside of this particular interface.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=44)** So I could say I'm going to return a T.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=47)** I'm going to call it map, and then the method is going to take an S, and that's going to be the source.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=55)** So this interface says give me two types, and I've used S and T here for source and target, the source type and the target type, and that's something you'll want to do when you define generics, is come up with good values for those type parameters, and maybe simple letters like this, or for example, you might use T key to indicate that the type is for the key.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=76)** So now we've got an interface.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=78)** Let's go create a new class.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=80)** So we've got our person.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=82)** We'll go add a new class, and we're going to call that customer.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=87)** That'll be our customer class, and we're going to map from a customer to a person.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=93)** So I'm just going to cut this, and we'll just paste the customer in.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=98)** So it's very similar to person, it has an ID and a first and last name, but it has a create date instead of having an age.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=106)** So we'll save that.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=108)** We'll go create another class, and this one's going to be our actual mapper.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=113)** So I'm going to call this my customer to person mapper We'll put that in there.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=121)** Again, we're going to make that public, 'cause we're going to want to use it, and I'm going to implement the I mapper, and now for those types, the source is going to be customer and the target is going to be person.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=138)** And if I go over this, it's going to tell me I'm not implementing that method, so we'll go ahead and implement the interface, and notice the method that gets generated.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=150)** It's a public method called map that takes in a customer and returns a person.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=157)** So we could simply come in here, return new person, we'll use the object initialization.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=164)** We can say the ID equals source.id.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=169)** That will be the same.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=170)** We can say the first name equals source.FirstName, last name equals source.LastName, and we have the age, which is an int, and so that's just going to end up being zero, 'cause we don't have a value for it here, but we could go in and put a default value there or provide some other value.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=190)** So a very simple example, you'll notice I defined a type, in this case, an interface.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=196)** Could be a class as well, just like that, with two different types, and then I've implemented that here because I'm having a concrete implementation of that interface.
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=207)** We'll go into our program.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=208)** Let's go ahead and we'll just get rid of all the bits that we've had so far.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=215)** We'll go back and we'll use our essentials two library.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=221)** Get that back in, and now we can do a new customer.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=227)** Again, we can have an ID.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=229)** We'll say that's seven.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=230)** First name equals customer, last name equals first,
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=239)** just to be a little confusing, and then the create date equals new date only.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=245)** We can specify that a number of different ways.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=248)** We're going to go ahead and do option.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=251)** That allows us to do year, month, and day.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=253)** So let's do 2022.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=257)** Let's say it's January 17th.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=261)** And now that's our creation.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=263)** Got my semicolon in the wrong spot there.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=266)** We've got our customer.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=267)** Now we can create our mapper.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=271)** We've got our customer person mapper.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=274)** We could do mapper.Map, and now we can pass in the source, which is that customer.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=280)** And what we'll get out, then, is a person.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=285)** Of course, we could write that out.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=288)** p.FirstName so we can see what happens there.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=292)** Notice that at this point, I really don't see any of the generics.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=295)** I've got a class customer to person mapper.
>
> **[4:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=298)** It's got methods on it.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=300)** It's very strongly typed, as I would want so that I can use these very specific types.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=307)** It's that interface that's very flexible for me now.
>
> **[5:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=310)** I can create another class that's a different kind of mapper, still implements this interface, but the types can be different.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=319)** So we'll run this quick, make sure that everything builds and we get the expected outcome when we map our customer to a person, and there we go.
>
> **[5:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=328)** We've got the first name mapped onto the person, comes across as customer.
>
> **[5:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=336)** Now, as we've seen, we've got those types that can have a generic.
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=341)** You also have methods.
>
> **[5:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=344)** So we can add a method here, and you can see how we can combine these type parameters.
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=349)** I want to say I've got a public method that's going to return a type, T, called map of T.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=356)** That's how you generally refer to these generics.
>
> **[5:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=358)** So you're going to be able to provide the output type.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=362)** In addition, you're going to need to provide me the mapper.
>
> **[6:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=365)** I'm going to say provide me a mapper, and remember, it was source and target, and the source type is going to be customer, because I'm mapping from within this customer class.
>
> **[6:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=375)** It's going to be a set source, and then the target is going to be that type, T.
>
> **[6:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=380)** What we've got is a method called map of T that will return an instance of type T as long as you give me an I mapper that has a source of customer and a return type of T.
>
> **[6:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=391)** So I'm going to call this mapper.
>
> **[6:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=393)** Come down here, and we can simply say return mapper.Map, and we're going to pass in this, the customer.
>
> **[6:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=402)** So with that mapper, because it's an I mapper of customer T, is going to be able to return a T.
>
> **[6:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=407)** We go back out to our program here.
>
> **[6:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=410)** We can go right here where we used our mapper before.
>
> **[6:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=412)** Instead of calling the mapper directly, I can use the customer.Map method.
>
> **[6:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=417)** I'm going to map to a person, and then I'm going to pass an I mapper of person to customer.
>
> **[7:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=424)** So I can pass that in there.
>
> **[7:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=426)** And again, we can run this, and we should get the same output we got before, which is customer.
>
> **[7:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/defining-generic-types-and-methods?u=76281980&t=432)** So that's an example of a generic method where you specify that type, and I also want to point out that you can pass those type parameters to additional generics as well as use very specific values, like the customer that we did here.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), similar to (1), just like (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Generic constraints](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=0)** - [Instructor] I want to look at another concept around generics, which is the notion of constraints.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=5)** So I'll right click over here, and we'll add a class.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=9)** I'm going to call this Sorter.cs.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=13)** So the idea is that I want to create a class that's going to allow me to sort something.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=18)** Maybe I'll do a sorter of T, and I want to be able to then sort a set of items that are of type T.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=27)** So I create a method, say public void sort.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=33)** We've already got the type up there in the class definition, so now I can just say it's an array of T called items, and now I can start implementing my sort.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=46)** The problem is, I don't really know what T is, and I don't know if I can compare them.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=51)** For example, I could look at it and say, if I would say items, we'll assume that there's more than one for now, bad practice in our index.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=63)** And we'll say, well, if that's greater than the other... But the problem is since we don't know what T stands for at this point, we can't really identify a comparison, because we don't know if the type supports the comparison operators.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=81)** What we need to be able to do is indicate that type T has to follow some rules in order for us to be able to use it in our class.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=90)** So we follow that class definition with a where, T, and then colon.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=96)** Now I can say things like I want to make sure it's a class or it's a struct if you want to do that.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=103)** I can say that it derives from a particular type, or in my case, I want to know that it implements a particular interface, I comparable of T, meaning if you want me to sort a person class, if that's the T you're going to pass in, then that class needs to implement I comparable of person.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=122)** You can additionally indicate that something supports being created or constructed with an empty constructor, so if you need to create instances within one of your methods, you can stipulate that that's one of the rules that that type has to implement.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=138)** With that in place, our sort implementation becomes a little easier.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=142)** 'cause you can now implement a for.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=144)** I can say for I equals zero, I is less than items.Length.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=150)** And actually, I'm going to set I equal to one.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=152)** I want to start with the second item.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=154)** I'll assume we've got some items here.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=156)** We should do some error checking or bounds checking.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=159)** Then I can say if items I dot compare to, we're using that I comparable now, items I minus one, and we could say if that's less than zero, that means we know that this particular item at the second index is less than the item before it, and we want to swap those.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=186)** We might do something like this.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=188)** We'll say swap, pass the array, and we'll pass I into I minus one, and we'll swap the positions of those two things.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=199)** So we could come in here, add a little swap method similar to what we did before.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=203)** So I've got swap array of T called items and the two indexes.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=208)** I'm just going to swap those items out.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=210)** By using this constraint, the compiler knows that whatever T stands for, whatever that type is that gets used, it's going to be able to support this compare to method because it has to have I comparable of T.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=226)** So we can go back over to our customer now.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=228)** We can say that it's going to implement I comparable of customer, so that if we want to create now a sorter for customers, we can do that.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=241)** Implement the interface here for the compare.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=244)** And again, I'll just paste in a little bit of code so you don't have to watch me type that one.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=249)** Let's say if the ID of the other item is equal, we'll return zero.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=253)** That's what the I comparable definition would indicate, zero is equality.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=258)** If the other ID is greater than this, that means we're smaller, and so we're going to return a negative one.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=265)** Otherwise, we'll return one.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=267)** So when we compare customers, we're essentially just comparing the IDs.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=271)** Whatever your class definition is, whatever it means to compare two things to indicate if one is greater than the other, that's the logic that you'd put in here.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=281)** So now we have an I comparable and we have our sorter.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=285)** That's a generic class that requires an I comparable.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=288)** We can come back out here, we could create another customer.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=295)** We'll pass that in.
>
> **[4:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=296)** We could say, well, that's got a lower ID of three.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=299)** We'll call that customer two, and we'll just change the last name to second, and then we want to be able to create an array of those items, and we want to pass it to the sorter.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=313)** So let's create the sorter.
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=316)** So now it's a new sorter of customer.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=321)** Get that on the screen a little better there.
>
> **[5:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=324)** And we need an array of customers, so let's say customers equals new customer array, And we'll just put C and C2 in there.
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=333)** We've got our two instances, and now we can sort that.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=338)** sorter.Sort.
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=341)** We can pass in customers, and it should sort that array of customers for us, so we can do a for each, for each customer in customers, and then we can write something out here.
>
> **[5:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=358)** And then we'll do the customer ID and then we can just do a colon maybe, and we'll do the customer last name.
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=370)** Go ahead and run that, and while it's building up.
>
> **[6:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=372)** So now we have our sorter of T, which we've identified as a sorter of customer.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=378)** We've got array of customers.
>
> **[6:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=380)** Customer C has an ID of seven, and C2 has an ID of three, so they're not currently in low to high order.
>
> **[6:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=388)** We execute our sorter, we loop through, and now we can see those items have been sorted.
>
> **[6:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=393)** Three and seven are now the indexes as they are in order in the array.
>
> **[6:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=400)** Not the most efficient sort algorithm.
>
> **[6:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=401)** That's not really the focus here.
>
> **[6:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=403)** I just want to show you how to use these generic definitions to make more flexible classes and to use the constraints on these generic types to make sure you can operate on the instances of those types to fulfill your class's purpose.
>
> **[7:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/generic-constraints?u=76281980&t=422)** And we'll look at generics a bit more throughout the class, especially as we talk about collections up next.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** stands for (2)
> **Analogies:** for example (1), similar to (1)
> **Tools:** notion (1)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Generic type with constraints](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=0)** - [Instructor] In this example, we're supposed to write a method that is a generic method, and it has constraints.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=7)** So, we're going to change this findLargest.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=9)** I'm going to say it's a findLargest of T, and then I'm going to ask for a t solver as the second parameter.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=20)** And what I want to be able to do is simply use that solver, and just like above, I want to say solve numbers.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=30)** But if we look, we'll say T doesn't have a definition for that.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=35)** So that's where we come in with a constraint.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=38)** We say where T isolver.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=44)** That means where T implements the isolver interface like we've defined up above here.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=52)** So, we still have some squigglies here, but if we test our code.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=56)** You can see we've got the right answer here.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=60)** Now that solver is able to take in our array of integers, and solve the problem for us by finding the largest value.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=69)** So, it's that constraint that tells this, it's a constraint that tells the compiler whatever comes in for this type T, it's going to implement isolver.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=79)** That way we know it has the solve method that takes in the array of numbers and returns that int.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=86)** So, in our test code down below, we're able to call that.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-generic-type-with-constraints?u=76281980&t=90)** So, if we change this, make this 23, just a double check, test our code, we still get the right answer.

> [!info]- Semantic Content
>
> **Code Identifiers:** findlargest (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 2. Working with Collections

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding collection types in the BCL](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=0)** - [Instructor] Now that we understand generics, I want to look at a particular part of the base class library that you're going to use regularly in your C programming.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=9)** And we're going to see that it's a good use case or candidate for using generics later on.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=14)** I'm going to clear out my Program.cshere just a little bit and I'll paste in a little code.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=20)** So you can see I've got an array of strings with a couple of names in it.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=25)** And then I'm just doing a Console.WriteLine and I'm writing those names out.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=29)** So it's going to write out hello, Matt Milner.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=32)** And that's fine and arrays are a great way to manage collections of items or manage more than one instance of a type.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=41)** So we've been focusing on creating types, whether they're generic or our interfaces, our classes, structs and records.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=47)** But now we're going to work with multiple instances and we need a way to do that.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=52)** And again, arrays are fine, you've probably used them if you've done programming in other languages.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=57)** Got this concept of zero-based indexing where we can index through each of those in order to get particular items or set their values.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=65)** However, collections are going to make working with multiple items a lot easier for us.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=71)** So we're going to start where most people would start and that is we'll create a al variable here.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=78)** We're going to say new System.Collections.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=81)** And this is where most people would get in and say, "Great, this is where I go when I want to create collections."
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=87)** ArrayList looks pretty interesting.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=89)** Let's create a new ArrayList.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=91)** When we created our string array up top, we gave it a capacity.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=95)** I can do the same thing with ArrayList and now I've got a class and I could go add items to it.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=101)** So I could take that and I can now add, and if I wanted to, I could add in say the [[Microsoft Word|word]] First so we can see that we've got a particular item in there.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=111)** If you notice, looking at the signature of Add, it takes an object.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=116)** So we can pass any type in here.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=117)** We can use an ArrayList to manage any type.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=120)** Let's take a closer look at ArrayList. I'm going to use F12.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=125)** We can use right click and go to definition.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=128)** You'll see that the ArrayList implements three very important interfaces when we're working with collections.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=135)** We'll start with IEnumerable.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=138)** So again, you can right click, go to definition, or you can press F12.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=143)** You can see that the IEnumerable interface has one method on it, GetEnumerator.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=148)** And that enumerator, if we go there, is going to give us the current item.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=153)** It's going to allow us to move next or reset, essentially to enumerate through the items in this collection.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=160)** We go back, go back two, we can see ICollection.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=166)** And if we go look at that, notice that ICollection also extends or inherits IEnumerable.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=172)** So if your class, your collection implements ICollection, you can also enumerate through it using that interface and collection simply gives us a notion of a count, how many items are in there, the ability to copy it to an array, and some notion of synchronized access.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=189)** We'll get into that a bit later.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=192)** And most importantly, IList.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=195)** This is the interface that you're going to use most often with your collections, and you'll see that it also extends that ICollection and IEnumerable interface.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=204)** And we've got add, insert, remove logic here.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=208)** We've got a contains check to see if something's in there.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=211)** And we have indexing just like an array where we can go in and access items at a particular index.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=217)** So this really gives us that list functionality.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=221)** What you'll notice though is my string array up above had a size of two.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=226)** And you've probably run into this if you've done any programming where if you go above or below that index, you're going to get an error.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=233)** With the ArrayList however, I can go in and say I want to add a range.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=238)** I could say I want to do a new string array.
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=242)** I could come in here and do second, third, and even fourth.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=249)** So now I'm going to add all these items to that ArrayList.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=253)** Now, the initial capacity I set was two, but the ArrayList, unlike an array, can actually expand to handle more items.
>
> **[4:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=260)** Obviously, we'd want to provide initial capacity that is close to what we're going to use.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=265)** So all the space gets allocated, but we're not constrained like we are with arrays and we don't have to do that allocation ourself.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=272)** Now let's use some of those interfaces.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=274)** So for the ICollection, we could come in and say collection size is, and we can use that al.count.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=283)** So that's that ICollection.
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=287)** We can also get an indexed item.
>
> **[4:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=289)** So we could say indexed item from collection, and we can do two here.
>
> **[4:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=296)** So we're saying that's where we're going to get that value.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=300)** And I'll use a different model for the string formatting here where I just put the index of the parameter in those curly braces and I'll say al two.
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=311)** So we're going to get that item.
>
> **[5:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=312)** So using that IList interface, we can index into that collection and get a specific item.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=319)** And then we could do something like this.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=321)** We'll say all items in the list and now we can do a foreach.
>
> **[5:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=327)** So that foreach, say var item in in our collection is our ArrayList.
>
> **[5:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=334)** And now I can just iterate over and pass that out.
>
> **[5:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=340)** And this is that IEnumerable.
>
> **[5:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=342)** The foreach is going to enumerate over those items in the collection and write them out.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=348)** So we run this, we should get first our output from the string array.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=353)** It says hello.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=356)** Then we see the collection size is four.
>
> **[5:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=359)** So we started with that first string.
>
> **[6:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=360)** We added a range of three and it expanded from its initial capacity of two to four.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=367)** We were able to get the indexed item.
>
> **[6:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=368)** You can see that zero-based indexing means that's the string third.
>
> **[6:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=372)** And then for all items in the list, we iterate through and we get first, second, third, fourth.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=378)** And so that gives you a general sense of the notion of collections that you can use in C# from that base class library.
>
> **[6:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=387)** But I want to caution and we'll talk about this next, that the System.Collections namespace isn't necessarily the best place to start.
>
> **[6:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-collection-types-in-the-bcl?u=76281980&t=395)** You've got some hints of this from our earlier conversations around generics and of course, what we've seen here where everything is an object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Tools:** notion (3)
> **Env Vars:** f12 (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Warnings:** caution (1)

#### [Choosing the right collection type](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=0)** - [Instructor] The ArrayList is a great improvement over a basic array.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=3)** It's a little easier to work with.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=5)** We can do a number of different things 'cause it implements those three key interfaces.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=9)** But I've added this CollectionSamples file into the library project.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=15)** So if you're following along in the exercise files, you want to grab them for this particular movie 'cause I've got this new class in here.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=22)** Or you can type it out.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=24)** And it's just a static class with some static methods, an example we learned about in C# Essentials 1, and I've got two methods in here.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=32)** I've got one called Queue, and one called Stack just to show you the different collection types are available for different types of collection management.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=42)** You can see with a Queue, we can enqueue multiple items, as I've done on line eight and nine.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=48)** And then I can dequeue items, I can pull them out of there.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=53)** And I can then write out that value, as I've done line 14 through 18.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=59)** Notice on line 17, I'm actually checking that the queue has something to dequeue.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=65)** I'm using that ICollection interface to let me know is there anything else that I should pull out of here.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=72)** And if not, then I'm going to break.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=74)** 'Cause if I call dequeue and there's nothing there, I'm going to get an error.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=78)** The Stack works a little differently.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=80)** So a Queue is first in, first out.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=82)** So I've got first item, second item.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=84)** When I dequeue, I should see first item, second item.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=88)** The Stack is last in, first out.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=91)** So I'm going to push things onto the Stack.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=93)** So I'm going to push first item, and then on top of that I'm going to push second item.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=97)** And so if I go through these with that same kind of while logic, popping instead of dequeueing, then it's going to pop the top item.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=104)** So I should see second item, first item.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=107)** So if we go back to our program out here, we can use that CollectionSamples, I can call Queue, that's going to run that method.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=117)** Call that again with Stack.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=119)** And I can even throw a return in here just so we don't see the other bits of code we've got from our previous examples.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=126)** And so the Queue, again, first in, first out.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=129)** We should see first item, second item.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=131)** Whereas the Stack, we see second item, first item.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=135)** Now if we look here, what's something that stands out to you?
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=140)** If you were listening in the last movie, I talked about the System.Collections namespace.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=146)** And you can see that when we pop items off the Stack or when we dequeue from the Queue, I'm having to cast that result to a string.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=154)** And that's because, again, these are based on the notion of objects from the early days of .NET.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=162)** We have these original .NET collection types in that System.Collections.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=165)** So we have the Stack and Queue for that last in, first out, or first in, first out, ordered in certain removal type operations.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=174)** Got our ArrayList for simple collections of objects.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=177)** Works like an array, but dynamically expands and gives us more capabilities.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=182)** Got a HashTable for using a hash of a key to look things up.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=187)** Got DictionaryBase, which allows us to have a variety of different implementations for a dictionary.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=192)** Again, a key value sort of storage.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=194)** SortedList and a NameValueCollection, where we can have a name that has one or more values.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=200)** But as I mentioned, all of these older types, these were around from the original .NET from early 2000s, almost 20 years ago, are obsolete.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=210)** You can still use them, but instead, you're going to want to use the generic collection types because they're going to give you better performance, they're going to be easier to work with in a typed fashion.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=221)** So instead of just a Stack, we'd use a Stack of T.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=225)** Instead of a list in the ArrayList, we use a list of T.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=229)** It's probably one of the most common collection types that I use.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=233)** Instead of a HashTable, you got a dictionary.
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=236)** And here we see multiple generic types provided.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=239)** What type is the key, and what type is the value?
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=242)** Same thing with DictionaryBase or SortedList.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=245)** We have generic versions of SortedLists, SortedDictionary.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=249)** Now the NameValueCollection, 'cause that was all strings, is still valid.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=252)** It's used throughout the framework for things like HTTP cookies, for example, where you have a given name and you can have one or more values associated with that name.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=263)** As you can see, there are a number of different collection types, each with different semantics for how you use them.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=270)** Again, the list is one I use most often 'cause I often just need to manage a collection of items, with dictionary probably being the second most used for me.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=280)** But you may have [[Programming Concepts]] in your applications where the Stack and Queue are really relevant.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=286)** If we come back in here, I'm just going to change this.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=288)** And instead of System.Collections, I'm going to do generic.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=292)** And now I've got a Stack, and I'm going to change it to a Stack of string.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=299)** So it's a Stack of T providing it a string.
>
> **[5:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=302)** Now I can get rid of this cast because if I look at pop, it's going to return a string.
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=311)** Now, strings are pretty easy to move back and forth from objects, so it's not quite as exciting.
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=316)** Could easily have been one of our person or our customer classes we've been working with as well that we could push or pop on here.
>
> **[5:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=324)** So it shows you just how easy it is to use those generic types.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=329)** But it gives me a much cleaner interface, gives me better performance because I'm not having to convert or cast between these items.
>
> **[5:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=337)** And, of course, we run that and we should get the same output we had before.
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/choosing-the-right-collection-type?u=76281980&t=341)** We could go through and change the Queue to a generic Queue of T, but I'll leave that to you to try on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming Concepts]] (1)
> **Env Vars:** net (3), http (1)
> **Cross-References:** go back to (1), in the last (1)
> **Tools:** notion (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Working with collections](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=0)** - [Instructor] I want to talk about some of the different ways you'll use these Collection classes as you write your programs in C Sharp.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=7)** If you're following along with the exercise files, you want to grab the ones from the Begin folder for this section, as I've added some things here to our CollectionSamples class.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=18)** Remember, it's a static class.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=20)** So I've added a static field called customers of type List of T or List of Customer, and I have a static constructor here on line 42.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=31)** So I'm initializing that customer list into a new instance and then I'm going to iterate through from one to 11 and I'm just going to add a new customer for each index of i.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=45)** So the first name will just be whatever i is, we'll write it as a string.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=49)** Last name will always be customer.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=51)** And then we'll create a date, slightly dynamic.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=54)** It'll always be October of 2021, but will have the day be whatever that index is at the time.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=61)** So now we've got a list of customers, what can we do with that?
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=65)** Well, in this indexing method, it's just a driver for some of these examples.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=69)** You can see that I can use the indexing just like I would an array on line 60 to grab a particular customer out of that list.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=78)** So even though it's a generic list instead of an array, I still get that same easy syntax to grab a very specific item based on position.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=87)** So we'll find that and we'll write out to the console, Hey, I found this customer with this particular ID at this index.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=95)** So it says index two.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=97)** Next on line 64, I'm going to use something that's a little more advanced, which is the Contains method.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=105)** So I check, does customers contain a particular customer?
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=110)** And in this case, I'm using that variable customerThree.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=114)** That's the item I just pulled out of the collection.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=116)** So we would expect that that does in fact come back as a true.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=121)** That means our string does contain, will be does and we'll write out customers does contain this customer.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=128)** So before we move on, let's run those two.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=131)** I'm just going to run this real quick.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=132)** We're going to have a little extra content on our screen here that we'll get to, but we can see Found customer 3 at index 2.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=143)** So that indexing piece that we just saw, and then Customers does contain this customer.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=148)** Now, as a follow-up, I've got a couple of extra challenges you can try here.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=153)** What do you think happens if you create a new customer object with the same property values?
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=160)** So it's got the same id, first name, last name, and the create date.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=165)** If you ask, does the collection contain that item, what's it going to say?
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=170)** If you add the item and check it, what will happen?
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=174)** And then again, on line 67, same thing, you want to create a customer object, but what if customer isn't a class or a reference type as we've got here?
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=184)** What if it's a record type or a struct?
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=188)** What happens there?
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=190)** Just a couple of things for you to try out to understand how the collections might be behave differently with different types.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=197)** You can go back to C Sharp Essentials Part One if you need a refresher on some of the differences between those reference types and value types or records.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=208)** And finally here, we've got a predicate to find an item in the collection.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=213)** So this is another great feature of the List beyond just holding those items and being able to either index or walk through them.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=221)** We saw, we could see if a collection contains something, but we can also find a particular item or find the first item that matches.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=231)** So we use a customers.Find, and this takes what's referred to as a predicate, which is essentially a method that returns a Boolean value.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=240)** So you can see down on line 83, I've defined a method called Customers Match.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=245)** It takes a customer and it returns a Boolean.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=248)** Now, my instance, I'm simply doing a check to say, is this the customer with ID seven?
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=254)** Does this customer object that you're passing me have an idea of seven?
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=258)** If so, I'll return true, otherwise this would return false.
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=262)** So when we call customers.Find, it's going to look at the customers and it will take the customers then, call this method.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=271)** As soon as it gets a true, it's going to give us back that object.
>
> **[4:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=275)** And so we should be able to look and see that we do get customerSeven.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=280)** Again, we run that.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=281)** We can see that was our third line there where it says, Found customer 7.
>
> **[4:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=289)** Another follow-up option for you here, you can change what this CustomerIsMatch does.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=294)** Maybe see what happens if you match on last name.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=297)** All of these items have a last name of customer.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=301)** Which one's going to get returned, if any of them.
>
> **[5:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=304)** So those are a couple of different ways you can work with that List of T and a number of other collections.
>
> **[5:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=310)** And you want to find objects, you can also insert, you can remove, you can find the index of items.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=317)** So instead of finding the actual item, you could find out that a particular item is at index three if you wanted to.
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=325)** And then the last bit here is this notion of iterating over the collection or working with the collection as a whole.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=331)** And so there's a couple of handy methods on the list.
>
> **[5:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=334)** You'll see on line 92, you have the option to reverse the list.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=338)** Now, this doesn't have anything to do with sorting or looking at the objects in a particular way.
>
> **[5:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=343)** It simply takes them in the order they are and it reverses that.
>
> **[5:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=347)** So we've got our one through 10.
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=349)** When we reverse, we should now be 10 through one.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=353)** And then I want to show you two different ways to work with that IEnumerable.
>
> **[5:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=357)** You can see on line 94, I can explicitly get the enumerator for that collection.
>
> **[6:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=364)** And on line 95, I can call MoveNext on the enumerator.
>
> **[6:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=369)** And if that returns true, that means it was able to move to the next item.
>
> **[6:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=373)** So I go in there on line 97, I can get the current item from the enumerator, which is going to be my customer and I can write that out.
>
> **[6:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=382)** So this gives you very explicit control over that and a very manual process to move through.
>
> **[6:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=388)** On line 105, you can see the much simpler option.
>
> **[6:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=391)** If you just want to iterate through them and do something, you can use the foreach.
>
> **[6:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=396)** So we do foreach customer in customers.
>
> **[6:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=399)** And then we can write out that value.
>
> **[6:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=402)** You can work on that customer object.
>
> **[6:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=404)** This is a lot simpler, but essentially is doing the same thing as what you see above.
>
> **[6:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=410)** And just for fun, on line 102 and between those two things, I called customers.Sort.
>
> **[6:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=416)** Now, in our case, Customer, if you remember, implements IComparable of Customer.
>
> **[7:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=423)** I've simplified the implementation of the CompareTo method here since we were just comparing IDs, but this is what's going to get used then if we call Sort.
>
> **[7:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=433)** So it's going to sort that based on the IComparable that we've got set up.
>
> **[7:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=437)** So we go back out to our program, you can see we're running the indexing here.
>
> **[7:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=441)** Go ahead and comment that out and just run the Iterating.
>
> **[7:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=450)** I'm going to go back to our samples that we reverse the order.
>
> **[7:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=455)** And then we use that enumerator to walk through.
>
> **[7:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=457)** You can see we do have them in reverse order, 10, 9, 8, all the way down to one.
>
> **[7:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=462)** And then, we sort using the IComparable that sorts on ID.
>
> **[7:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=467)** So when we use the foreach, they come out one through 10.
>
> **[7:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=471)** Hopefully that gives you a sense of how flexible these collections are and some of the great features that have been added on top of the concept of just a basic array.
>
> **[8:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-collections?u=76281980&t=480)** So this notion of being able to work at various points, be able to find items, add items at different points, iterate over the items in those collections makes them a critical piece of most C Sharp applications that you'll write.

> [!info]- Semantic Content
>
> **CLI Commands:** find (10)
> **Code Identifiers:** customerthree (1), customerseven (1)
> **Cross-References:** go back to (2)
> **Tools:** notion (2)
> **Definitions:** is a  (1), essentially is (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)

#### [Working with keyed collections](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=0)** - [Instructor] We're back in our collection samples file here, but I have updated it with some code.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=5)** So you may want to go to the begin directory for this particular movie, and load that up if you want to follow along.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=11)** I've added this dictionary method.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=14)** I'm going to show you how to work with those generic dictionaries.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=17)** You can see here on line 115, I've created a generic dictionary where the key type is string, and the value type is person.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=25)** Meaning the key, what we're going to use to uniquely identify this item, and look it up or index it is a string, and what we're going to get back or put into this dictionary as a person.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=36)** So the dictionary gives us this really great way to store a set of items, but to have that unique key to go, and work with that specific item.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=46)** So we don't need to know it's position in there, we don't need to go find it.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=50)** We can directly access it by that key.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=53)** And then on the next few lines, I'm just adding two new person objects.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=57)** So I've added a person for me, person for Larry Lawnmower, and I've given each of 'em a key with just the letter that I'm using in my alliterative names here.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=69)** Now, quick question, is this a good key?
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=72)** No, it's not.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=73)** It's a terrible key because it's not very unique.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=77)** M is one of 26 letters in the US alphabet, and that's not going to give me the uniqueness I need.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=84)** So we're just using this for examples here, but you're going to want that key to be unique to that item.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=90)** That might mean it's not a string, maybe it's a unique identifier, maybe it's an integer, or another numeric type.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=97)** You can define your dictionary then with that key type.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=101)** Now, a couple things we can do now that we have this dictionary with a couple of items in it.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=105)** One, we can use the ContainsKey method on that dictionary to find out if that item already exists, specifically an item with that key.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=115)** We aren't really looking at the item itself or the value, we're just doing the key 'cause that's going to be the quicker lookup.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=122)** That's what everything's going to be indexed on.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=124)** So we can find out if that collection contains the key, and then we could safely go and access that particular item.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=132)** So you can see on line 138, I'm going to use the result of that ContainsKey, my keyFound variable.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=139)** And if that's true, now, I know it's safe to go in, use that key to index into the dictionary, and get out a person and I'll write out the first, and last name.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=149)** If I don't check that, if I try and index in, and the key doesn't exist, I'm going to get an exception indicating exactly that.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=157)** Here's a follow-up that you can do if you want to try this out on your own.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=160)** Line 143, there's a TryGetValue method on the dictionary.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=165)** It's going to allow you to provide a key, it's going to give you back a Boolean value indicating whether it was able to get the item, and it's going to use an Out parameter.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=174)** So that's a another good way for you to be able to safely try to get a value based on the key, and already have a true, false value letting you know whether it succeeded.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=186)** And finally, for the dictionary on line 145, you can see I'm going to do a foreach over my dictionary.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=194)** Now, in this case, that's going to use the i enumerable, and the enumerator to allow me to walk over that.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=200)** And because that's a var, we don't necessarily know the type.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=203)** I like to use var when I'm working with collections and enumerating.
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=207)** So I can mouse over like this, and I can see that the type of that item is a key value pair of type, string and person.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=216)** That means I'm going to get a class, or an object that has a property called Key, that's a string and a property called Value, that's a person.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=227)** And I'm going to be able to work with that in my iteration.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=230)** So now, I can write out the item.Key, which is going to be that string.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=234)** And then the item.Value.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=235)** Since it's a person, I know it's going to have a first name, and a last name property on it that I can access.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=243)** So let's go run this dictionary code.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=244)** We've got our two people added in there.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=247)** We're going to check for that M key.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=249)** And then if we find it, we'll write out that person.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=252)** And then we're going to iterate through both items in the dictionary.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=256)** So back on my program CS, you can see I'm just calling collection samples dictionary.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=265)** For our first line, person with key M is Matt.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=268)** So it found that person, it was able to validate that that key did exist and then index in and get that.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=274)** And then we iterated over and we got the key, and value for each of those items.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=282)** Now, if I try to, say, take this l, and I want to add a new person, we'll call it Leticia, and we'll just change the ID to three.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=299)** Because I've already used that key, I'm going to run into some problems here.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=303)** I'm going to start this again, we'll run it, you can see, "An item with the same key has already been added."
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=309)** So dictionaries require that that key be unique.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=314)** So here's another item for you, we'll put it in here.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=319)** So I'll follow up, use the TryAdd method to try to add this person, and see what kind of success you have using that as a safe way to try and add something, and get back a Boolean value indicating whether you're able to add it or not.
>
> **[5:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=340)** And lastly, I just want to quickly go over the NameValueCollection, because we have seen how we can use the dictionary with a unique key, but I've also mentioned that the NameValueCollection allows you to use the same key for multiple items.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=356)** So if I go out to my program CS here, we'll uncomment and we'll comment.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=362)** So we're going to be running the name values real quickly, we'll see we've got Matt and Leticia.
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=370)** Those are the two that I've added there.
>
> **[6:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=372)** But let's say we want to bring Larry back in, so we want to items.Add, want to use that same name, a l.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=378)** But now, the value's going to be Larry.
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=381)** What's going to happen here?
>
> **[6:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=382)** This isn't a dictionary, it's the NameValueCollection.
>
> **[6:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=386)** So for each of these items then in all keys, notice on 166, I'm iterating through the keys.
>
> **[6:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=394)** And then on 168, I'm actually indexing into the NameValueCollection based on the key.
>
> **[6:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=401)** So it's slightly different, we don't have the key value here.
>
> **[6:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=404)** We have all the keys and we can access those values.
>
> **[6:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=408)** But I'm simply going to iterate the keys and then index.
>
> **[6:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=412)** And notice that for that key, l, we get both Leticia and Larry as values for that.
>
> **[7:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/working-with-keyed-collections?u=76281980&t=420)** So the NameValueCollection's really handy as it provides a different semantic for working with this, where one key or one name is able to have more than one value.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), go run (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** keyfound (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Understanding concurrent collections](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-concurrent-collections?u=76281980)

> [!transcript]- Transcript
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-concurrent-collections?u=76281980&t=223)** if you're switching from, say a list of person to a concurrent bag of person.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-concurrent-collections?u=76281980&t=228)** Keep that in mind as well as you choose those collection types.

#### [Solution: Choose the right collection](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=0)** - [Instructor] In this challenge, you're supposed to find the right collection type to give you the behavior where we add a number of items to our collection or our answer class.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=10)** Then we're going to retrieve an item, and it should be the first item that we added.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=16)** So I'm going to add a private static queue of product here.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=25)** I'm going to call this my list equals new queue of product.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=30)** Now we got to make sure that we come up here to the using statements and we add system.collections.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=36)** Oops, system.collections.generic so that we have those generic collections, like queue, in scope.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=45)** So we can add it in.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=46)** So now I can say, I've got my list, and I can enqueue that product, and then when we go to retrieve, I can come in and use the queue then again in a list and I could just dequeue, like this, and return that, but what's the problem with that?
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=66)** The problem with that is what if the queue is empty?
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=69)** So, I want to say product P equals null.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=73)** And now we can say if, then we could do list.trydequeue out P.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=81)** So if we get that, now we can return P, and then we can come down here and say return null.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=91)** So that way we don't get an exception trying to read off of the queue when there's nothing there.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=98)** On our example, we're going to add two [[Microsoft Products|products]] in here, the widget and the gizmo, and then we're going to go through and add all those from the array and then call retrieve.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=111)** Great, we got the product back.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=113)** It was the the right product.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=114)** We did a comparison in there to make sure that we've got the right item from the array.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=120)** So the queue was the right choice here.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-choose-the-right-collection?u=76281980&t=122)** If you'd used a stack, you would have a first in last out model, which is not what the goal was.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. Exception Handling

[↑ Back to Table of Contents](#table-of-contents)

#### [Basics of try-catch-finally](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=0)** - [Instructor] I want to start talking about exception handling, dealing with those cases where something goes wrong.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=5)** You're following along with the exercise files in chapter three, 01, Begin.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=11)** You're going to find that LinkedInEssentials2 solution and I've added a few things to it.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=17)** So if we go over here and look, you'll see over in the library, I've got an Employee class that's a simple record type of employee with an Id, FirstName and LastName.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=28)** I've got a [[JSON]] file in the [[LinkedIn]].Essentials2, the main program that just has some [[JavaScript]] Object Notation, or JSON, of an employee.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=38)** It's got that Id, FirstName and LastName.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=41)** And in the Program.cs, I'm going to call out to ExceptionSamples.BasicExceptions, which is a new class, ExceptionSamples that I've added, and a method that wraps up this example.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=53)** What we're going to do is take that JSON file, try and read it in and deserialize it into an employee.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=59)** And you've seen bits and pieces of this before.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=61)** So I've got two different paths, a wrongPath and a rightPath.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=66)** The rightPath is how we're going to get to that matt.json file under our project.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=71)** And the wrongPath is just the file name, which would throw an exception.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=75)** So here on line 13, that's where I'm going to choose to either use the rightPath or the wrongPath.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=81)** I'm going to use a fileStream that I declare on line 14 and I'm going to write out the current directory.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=86)** That's just so you can understand why the path I use for the rightPath is the correct path.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=93)** And then we're going to go into the basics of the try catch.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=96)** And you may have seen this in other languages, so I just want to make sure you understand the fundamentals and then we'll get into more specific examples and some of the intricacies in later videos.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=108)** We wrap the code that might throw an exception in a try block.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=113)** So I start my try block on line 16 and 17.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=116)** Everything between that closing bracket on line 23 is what I'm trying.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=121)** So if an exception happens there, I want to catch it.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=125)** You can see that I'm opening a file, that can cause problems.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=128)** I'm deserializing an employee from the file contents or that stream, that could cause an exception.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=135)** And then I'm writing out that employee to the console, which hopefully won't cause an exception, but certainly could.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=143)** And here that record type's built-in ability to have a toString that writes out its properties comes in handy as we write that out to the console.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=152)** Line 24, you see we have a catch.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=154)** So after a try, we have a catch.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=157)** We define the type of exception that we want to catch.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=160)** In this case, we're going to use the base System.Exception and then I use ex as the variable name for that exception so that I can use it inside the catch block.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=169)** Here I'm writing it out to the console, just writing the message.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=173)** Often you'd use a logging framework to log this out to a permanent store or some sort of system where you would alert somebody that there was a problem.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=181)** And then we have the finally block and this is code that's going to run regardless of whether there's an exception.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=188)** So if we have no exceptions, we'll do everything in the try block, and then the finally.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=194)** And we have an exception, we'll do everything we can in the try block until the exception happens.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=199)** Then we'll execute the catch block and then we'll execute the finally.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=203)** And so I need to make sure that file that I opened up gets cleaned up.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=208)** I want to make sure that I close that and I do that by calling dispose on that fileStream.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=213)** So let's go ahead and run this.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=215)** We're currently using the rightPath.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=217)** So you can see on the second line, it says Employee read from file.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=221)** We get the information from that JSON file and that current directory, you'll notice at the end, in addition to the path of the project is a \bin\Debug\net6.0.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=233)** That's where our code is currently running and that's why if we just use the file name, it doesn't work.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=240)** So if we switch this to the wrongPath here, now we should see an exception happen.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=246)** We should write out the exception, but we're also going to close up that file.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=252)** So current directory prints, our standard exception is caught, so it could not find the file.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=258)** You can see why because it is looking in that bin\Debug\net6.0 for matt.json.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=264)** One other important concept I want to point out here.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=267)** I'm using this fileStream and I'm managing it, but it's very important that I clean it up.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=272)** And so I've followed this pattern of making sure in the finally that I call dispose.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=278)** fileStreams, like lots of classes in .NET, especially those that access external resources, network connections, [[SQL]] database connections, for example, implement something called the IDisposable interface.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=292)** And that means they have this dispose method to clean up whatever resources they might have.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=297)** Often that might be something outside of .NET, like a file handle.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=301)** So one of the things I can do is I can comment this out, I'm going to say using var fileStream and then I'm going to close that up and now I'm going to use curly brackets and I'm going to come down to the end of my try block and I'm going to close that out.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=326)** What that means is I can actually comment out this cleanup because the using statement understands IDisposable.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=335)** And what it says is for this block, so from lines 19 to 24, I'm going to have this fileStream, but regardless of how I exit, if there's an exception or if I just fall through the [[Control Flow]], I want to make sure to dispose of whatever the object is that I've declared in this using statement.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=353)** So that fileStream has to be something that implements IDisposable.
>
> **[5:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=358)** So again, we can run this, we'll get our standard exception, we'll get the same kind of cleanup as we would've with the manual process I used before.
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-try-catch-finally?u=76281980&t=370)** And we'll set this back to the rightPath so we end with code that works and we're able to read that employee from the JSON file and write it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (7), [[LinkedIn]] (1), [[JavaScript]] (1), [[SQL]] (1), [[Control Flow]] (1)
> **Code Identifiers:** rightpath (6), filestream (6), wrongpath (4), tostring (1), filestreams (1)
> **Env Vars:** json (5), net (2), sql (1)
> **CLI Commands:** make (4), find (2)
> **File Paths:** matt.json (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Exception filtering by type with catch](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=0)** - [Instructor] We have some basics down.
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=1)** We're catching an exception if it occurs and we're logging it.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=5)** But as I said, there's a couple different problems we might run into.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=9)** One is file-based issue, trying to open that file and read it.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=13)** And the other is with the [[JSON]] serialization.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=16)** So just catching an exception while it will handle all of those, doesn't really tell us what the specific problem is.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=22)** So one thing you might try and do is come down and catch an IO exception like this.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=30)** And what we're going to see is that we're going to get a red squiggly telling us there's a problem.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=35)** And what it's telling us is, these catch blocks are in order, they're going to be applied in order, and that first one is going to match everything.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=44)** So this guy will never get hit.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=46)** Let's take it, put it up here, and now the more specific exception comes first.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=53)** So if it's an IO exception, we'll do this logic.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=56)** If it's not, but it is a regular exception, then we'll do that.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=60)** So we can do something like this, we can say we've got a IO exception, and then we'll put that message in there.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=70)** So we'll do ioex.Message and now we've got an IO exception.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=76)** Likewise, we can put another one in here and add another catch block for a JSON exception.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=83)** So we've got that.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=85)** We can add our curly braces and now we can write out JSON exception.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=91)** And then we've got our jsoex.message to write that out.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=100)** So if we change this back to the wrong path you remember, that should give us a problem with the file and that should be an IO exception.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=108)** So let's give it a try and see what happens.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=112)** There's our current directory, and sure enough, there's our IO exception, could not find the file and then it gives us the path.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=119)** Now if we have a problem with the JSON, for example, let's say instead of a string here, I try and put a number and then we go back to our samples and we use the right path.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=132)** So we're going to have the path to the file, correct, but the file has a problem.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=137)** Now we get our JSON exception.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=139)** JSON value could not be converted to a string and it gives us the information about that particular exception.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=147)** You can provide as many catch statements as you want.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=150)** Again, you want to go from more specific to less specific.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=156)** So for example, I could even add a file not found exception, and that is going to be the more specific IO exception.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=167)** It actually derives from IO exception.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=170)** So we'll just say file not found in that case.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=172)** Now to get the file not found, I have to go back and use the wrong path again.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=176)** Keep switching that back and forth.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=179)** And now we just see file not found.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=181)** So we're not getting the generic IO exception, we're getting the specific file not found exception.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=188)** Again, if we go to the definition for that, you can see it does derive from that IO exception, but it's more specific and therefore matches first.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=197)** So depending on what you're trying to do, how specific you want to get with your logging or your error handling, you can identify these catch statements for the different kinds or different types of exceptions and handle them differently.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=210)** One last note here, you'll see that for the file not found exception, I get a little green squiggly and that's because I'm not actually using that variable name, that fnfex.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=220)** So I can just get rid of that.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=223)** I can tell it just catch this exception type.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=225)** I don't need a variable to hold the exception, I still want to run that particular exception handler for the type.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-by-type-with-catch?u=76281980&t=233)** So if you're not going to use that variable, if you're not going to do something with the actual exception, you can simply catch on the type and leave that out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (6)
> **Env Vars:** json (6)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Exception filtering with when](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=0)** - [Instructor] It's great when you've got a specific exception you can catch that's very focused, like a FileNotFoundException.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=6)** That's a derived type of an IOException that tells you exactly what went wrong.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=10)** But sometimes, the exceptions are more general, like a [[JSON]] exception.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=14)** There's a number of reasons that there might be a problem with our JSON.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=18)** So let me go back up here, make sure we're using the right path 'cause we're going to have a problem with our JSON, not our file location.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=26)** And you remember, I left this with this 809 for my FirstName.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=31)** So let's go back here.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=32)** We've got a breakpoint set in our catch block here.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=36)** So let's run this in the debugger.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=38)** You can see we hit a breakpoint, our JSON exception.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=42)** If I mouse over or look down in the locals window, I can see a message that says, "The JSON value could not be converted."
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=50)** So that tells us we've got a problem there with a cast or a conversion.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=54)** So I'm going to add a filter here.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=56)** I'm going to say when.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=58)** Then I'm going to put some parentheses, jsoex.Message.Contains, I'll say "converted".
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=70)** Then I'm going to use a string comparison.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=72)** I'm going to use the OrdinalIgnoreCase.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=75)** So, basically saying, ignore the case in there.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=78)** I don't care if the capitalization matches.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=81)** I'm really just looking for converted, and I'm not going to worry about specific language here.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=86)** And so now, my catch is very specific.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=90)** I want a JSON exception where that message has the [[Microsoft Word|word]] "converted" in it.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=95)** So I'm really looking for that particular problem that we just saw.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=100)** So we should still hit that exception.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=103)** Let's just run it and see.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=105)** Yeah, we get JSON exception.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=107)** JSON value could not be converted.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=109)** That's the exception message. Exactly what we wanted.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=112)** Now, if I go break my JSON a different way.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=115)** Let's say I have a string in there that's right.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=118)** But, as is usually the problem, I leave out a comma.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=123)** Something simple that always seems to give us big headaches.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=127)** So what would we expect to see here?
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=129)** Well, I can tell you that the error message we're going to get does not say anything about converting a type.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=135)** So let's just run it.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=138)** And notice we get a Standard exception caught.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=140)** And that means we went into this exception block on line 38.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=145)** It didn't catch a JSON exception.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=148)** And you could see the error message there as it says, the quotation mark's invalid after a value.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=153)** It's looking for some other syntax.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=156)** So because we filtered with that when clause, that particular kind of JSON exception didn't get handled by this catch block, but it did still get caught by the exception block.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=168)** So here's a to-do for you.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=174)** Add a catch block with a when statement to catch problems with syntax.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=187)** Missing comma, for example.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=189)** So that'll give you something to try out for yourself.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/exception-filtering-with-when?u=76281980&t=193)** So you're going to catch a JSON exception, but you're going to need a when block to make sure that you either specifically call out something about that kind of exception, or you make it somehow different from the one block that we have here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (12), [[Microsoft Word|Word]] (1)
> **Env Vars:** json (12)
> **CLI Commands:** make (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Throwing and rethrowing exceptions](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=0)** - [Instructor] We've looked at catching exceptions, but now I want to take a look at throwing exceptions.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=5)** When you get into a situation in your code where there's a problem, you may need to report that up through the application code as an exception.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=15)** So I'm going to add a method, here, to our Exception samples class called throw exceptions.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=20)** Notice it's going to take a knowable bool called shouldThrow.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=25)** And in this case, on line 59, I'm going to check if shouldThrow has a value.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=29)** If it doesn't, I want to throw an exception.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=32)** Now, I could just throw an ArgumentException, but that isn't quite as descriptive and I would have to provide a message and tell you what the problem was.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=41)** If I throw an ArgumentNullException, I get that more specific example.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=45)** I'd simply need to provide the name of the parameter or argument to provide enough context for that exception to make sense.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=54)** Now, if shouldThrow does have a value and that value's true, I'm going to throw an exception just as an example of how you do that.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=64)** And you'll notice I've called out here that while I'm throwing a new System.Exception, you really shouldn't do that.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=69)** It's not very descriptive, it's very, very general, and we'll see, next, how to create your own exceptions to be more descriptive.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=78)** But this will get the job done for now in order to throw an exception from this method.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=84)** And then finally, if our shouldThrow.Value is false, then we're just going to write out "No exceptions being thrown here."
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=91)** Save that, go back out to our program, and now I want to add some code here to call that method.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=99)** So we'll paste that in.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=100)** So we're going to use our try catch.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=102)** I'm going to try the throw exceptions, and then we'll catch an exception and write it out.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=108)** Now, let's start with null here.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=110)** So we can just pass null.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=112)** Remember, if it's nullable, we should then see an ArgumentNullException.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=117)** And since we're catching it, we're going to simply write out all the information about that exception.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=122)** Before we do that, we're going to comment out our old BasicExceptions, here, and now we'll run that.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=130)** You can see at the top we get a System.ArgumentNnullException.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=134)** That's our Console.WriteLine, there, telling us that value cannot be null as the predefined message in that ArgumentNullException, and that it includes the parameter that we passed in, shouldThrow.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=147)** Notice on line three at the end, there, it's telling us this exception happened, in ExceptionSamples.cs on line 61.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=156)** And then two lines down we see program.cs:line 17.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=160)** That's where we caught that exception.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=164)** Let's keep that in mind, it's going to be important later on.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=168)** Let's try again.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=169)** If we pass in true, now we're passing this in and we should be throwing our system exception.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=177)** So we've caught that, we're writing it out, was told to throw this.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=181)** Again, we see on line three ExceptionSamples:line 67.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=186)** And again, then on line five we see the program.cs:line 17, where we've now caught that particular exception.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=194)** This's known as the stack trace.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=196)** It tells us the various pieces of our application where this exception has been handled.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=202)** So as you get deeper into a program, these stack traces can get pretty detailed and very deep, but you can see where did the exception start and where did it propagate up through the application code to finally get handled?
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=217)** In our case, on line 17 of our program.cs.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=221)** We've thrown and now caught exceptions.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=224)** And one of the things you can do when you catch an exception is instead of writing it out I could throw that exception.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=233)** And there's two ways you can do this.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=234)** I'm going to start with just the throw keyword and I'm not going to pass at anything.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=239)** And what that's telling the system to do is rethrow this exception ex as it was, with its state.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=248)** So the high-level application is going to handle this or catch it.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=253)** So now you can see on our first line we have Unhandled exception.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=258)** That's something we didn't catch, we didn't write, but the application domain in which our code is running caught this unhandled exception, it's logging it out.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=267)** We can see that's our system exception.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=269)** And again, we see line 67 and we see program.cs:line 17, just like we did before.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=277)** So we didn't handle it, we didn't write it out, but all that stack trace information was captured.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=283)** Now, what you'll sometimes see is this.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=286)** Somebody will say, "Well, I caught this exception, I'm going to throw this exception again."
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=291)** And let's see the subtle difference when we do that.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=294)** There's a lot less detail.
>
> **[4:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=296)** Still an unhandled exception.
>
> **[4:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=298)** We still see the message, "System.Exception: I was told to throw this!"
>
> **[5:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=302)** But notice what we get for a stack trace.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=305)** We simply see program.cs:line 21.
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=309)** What's line 21?
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=311)** That's where we threw that exception.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=314)** So by including it, we've lost the stack trace.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=317)** We've kind of started over and said, "Here's the level at which you're going to get the detail," or "Here's the point at which the detail will start."
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=325)** So I generally don't use that.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=326)** You may have some use cases where you do provide that.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=331)** I'm going to go ahead and just comment it out so you can see it, there.
>
> **[5:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=334)** But generally, if you want to rethread an exception, you would use the throw without that.
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=341)** Now, you can do both.
>
> **[5:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=343)** You don't have to just throw or log or handle the exception.
>
> **[5:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/throwing-and-rethrowing-exceptions?u=76281980&t=347)** We could still log this exception to our logging framework or something else and then throw it, because we want code upstream to be able to deal with it if it impacts that part of the program.

> [!info]- Semantic Content
>
> **Code Identifiers:** shouldthrow (5)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Creating custom exceptions](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=0)** - [Instructor] If we go back to our exceptions samples here, remember I said not to throw this general exception, we want to be more explicit.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=8)** We want to provide more information when we throw errors, so I'm going to come out here and I'm going to right click on our library project.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=18)** I'm going to choose to add a class.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=24)** In this case, I'll just call it an invalid option exception.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=37)** Mark that public and we'll derive from exception to our system exception and then let's give it a constructor.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=45)** So I'm going to type CTOR and tab twice and we'll say that it takes a string called message and we're simply going to go to the base and pass that message.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=58)** So our constructor itself is pretty simple.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=63)** Save that.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=64)** I'm going to come back to my exception samples and let's take this and now we'll change this to our invalid option exception.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=79)** I was told to throw this and let's see what happens.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=83)** We run this.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=84)** So this is if we get this true passed in.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=87)** If we come back out to the program, we are passing true.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=90)** We're going to write that.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=95)** So we can see, essentials library invalid option exception.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=99)** I was told to throw this.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=101)** We've got our right line, which is that first big block, the first six lines up there and then the unhandled exception, 'cause we threw it, it's getting written out again.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=113)** So that seemed to work.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=115)** We have the invalid option exception, worked just like the exception, but it's a little bit more explicit.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=121)** However, you are going to likely run into problems with this definition in certain scenarios when you try to use this exception class.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=130)** So we're going to want to do a couple things.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=131)** We're going to want to mark this as serializable, meaning this particular class can be serialized by the .net framework.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=140)** If it needs to take the class instance and write it over a network, write it out to a file.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=146)** So that's one piece.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=148)** We're also going to want to have some additional constructors.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=152)** So we'll want a blank constructor and we're going to want to pass down to the base in there and then we want another one that takes both a message and an inner exception.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=164)** So we'll do our trick there for CTOR.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=167)** We're going to take our existing bit up here, just to make it simpler, then we're going to add to that and say exception, inner exception and we'll pass that in as well.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=187)** So now we can take a message as well as an inner exception.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=190)** So for example, I catch an exception and now I want to throw a new exception, but I want to hold onto the context of that one so I can wrap it together.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=201)** So I'll show you how we do that when we're done here and the last one to follow these best practices for the serializable and this one we can actually make protected.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=214)** We've got our invalid option exception and here we want to take a serialization info.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=224)** Now that's not coming up right now because we need to add system runtime serialization up at the top.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=233)** So using statements, I'm going to add that in here.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=235)** Just take control period to get those options.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=238)** So we'll call that info.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=241)** Then I'm going to take a streaming context and just call that context and then we'll go to our base.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=251)** We'll do info and context.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=259)** Oh, looks like I've got one too many parentheses on there, so we can clean this up a little bit.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=265)** Of course, you can add logic into these constructors if you want to, but this gives us the base construct for this exception.
>
> **[4:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=275)** So again, this is for certain scenarios, something you'll need in terms of this bottom one especially for serializable and the serializable attribute and then the others are really to give you more options for creating this exception and by you, I generally mean yourself, but also other developers that are going to use your code.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=294)** If they need to throw this exception, they can throw it with a message, they can throw it with a message and the inner exception.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=301)** So we'll save that.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=305)** We'll come back out to program.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=306)** Remember when we caught the exception, we were throwing it.
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=311)** One of the other things you can do instead of throw ex is you can throw a new, we could say application exception.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=321)** So we can add something like this, app exception, but notice that inner exception and here we can pass in, that would be our invalid option exception.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=331)** So we're creating an exception, but we're providing the context of the exception that we caught.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=338)** So let's see how that all looks when we run it.
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=341)** There you see at the top, our right line.
>
> **[5:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=343)** So again, we still have our essentials two invalid option exception, that really doesn't change.
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=349)** It's when we get to the unhandled exception on line seven, where it says system application exception, app exception, that's what we we put there.
>
> **[5:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=358)** Then inside of that, we can see the inner exception, that invalid option exception, I was told to throw this and all of the details that go along with that.
>
> **[6:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=368)** So we've seen two key things there.
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=370)** One is if you're writing your own exception class, yes, you derive from exception, probably an empty constructor, these other two with a string message or message and inner exception and then add that constructor with the serialization info in the streaming context, as well as the serializable attribute in order to make this something that can be serialized and we looked at how you can throw an exception and wrap another exception that you've caught inside of that as the inner exception, so you get more context and again, you don't lose that stack trace, but your exception in this case should provide additional context, or should be providing additional ability for the calling code to catch a very specific exception and in this case,
>
> **[6:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/creating-custom-exceptions?u=76281980&t=416)** you don't lose all the context of the original problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** ctor (2)
> **Cross-References:** go back to (1), coming up (1)
> **Analogies:** just like (1), for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Multiple exception types](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=0)** - [Instructor] In this challenge, we're supposed to be able to handle multiple kinds of exceptions that might come back when we call the FindLargest method here.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=10)** So let's go ahead and start.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=12)** I'm going to say int result = zero for now, and then I'm going to go ahead and return the result at the end.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=22)** And now, instead of returning here, I'm going to add a try.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=27)** I'll say, try to call the solve and get me that number.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=33)** Instead of returning it, we'll say result equals.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=36)** Now I want to be able to catch different exceptions.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=39)** So if I come in here, I can catch an index out of range exception, and then I can handle that particular exception, but I can also add an additional catch statement.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=54)** And the other type we're supposed to catch is a null reference exception.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=60)** So I can add that in as well.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=63)** And we can add as many of these as we want, generally going from more specific to generic.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=68)** And then, we're supposed to throw this exception inside of another exception.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=75)** So for the index out of range, I should throw a new application exception and I'm going to give it the text.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=83)** We'll say error in computing.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=87)** And then I'm going to pass in that inner exception.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=93)** That then is going to be part of the call stack that goes up.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=96)** I want to copy that, we'll paste it down here.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=101)** And instead of an application exception, if we caught the null reference exception, then we're supposed to return an argument null exception.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=111)** And here we'll pass the NRE up.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=115)** So we're going to try to call this FindLargest.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=117)** We know it could throw either of these exceptions, so we're going to catch both of them because we might want to do something different depending on the exception.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=125)** We might want to retry in some cases.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=127)** So in our code down here, you can see we've got a series of numbers.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=132)** I've also got a try catch in the calling code because it's expecting some sort of exception.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=139)** So we'll try to get the result, we're going to catch the exception, and that's your result that goes into the test.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=145)** So we got the expected result.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=147)** It was an argument null exception, or error in computing, and we have the inner exception is that system null reference exception.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=155)** We can try again 'cause we have random results for this.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=160)** In this case, system application exception is what we returned because the method threw an index out of range exception.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=167)** So we've caught both kinds of exceptions.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=169)** We've handled them differently, although in this case pretty much similarly.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-multiple-exception-types?u=76281980&t=174)** We've been able to have logic for dealing with different kinds of problems in our code.

> [!info]- Semantic Content
>
> **Env Vars:** nre (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Programming Threads with async and await

[↑ Back to Table of Contents](#table-of-contents)

#### [Threading basics](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=0)** - [Instructor] Next, I want to take a look at threading.
>
> **[0:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=2)** Now, we're not going to get too deep into threading, it's a fairly advanced concept, but I do want to talk about some basic language constructs that make working with multi-threaded applications or APIs a lot simpler.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=16)** If we start by looking at some basics around threading.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=20)** And you may be familiar with this if you've used multi-threaded programming in other languages.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=25)** The idea is that when we run an application, we have this main application thread and that's going to sequentially execute the commands in our program.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=35)** But sometimes we need to do something like access a file, and that can be a long operation.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=41)** If it's a large file and we need to read it or write to it, then we may want to do that on another thread.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=48)** And what that allows us to do is move that into a separate area of execution where that doesn't block the application itself.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=57)** Now, this is really useful if you're writing, say, a desktop application, and that main thread happens to be controlling the user interface.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=64)** You don't want to have some operation that makes it freeze up while you wait for that file to be read.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=71)** Similarly, network access maybe something else that you would put on a different thread.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=76)** Anything dealing with IO where you're reading or writing to some sort of stream, or if you've got really intensive computations that might chew up a lot of processor time.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=88)** So you can see we spin off or create these additional threads.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=93)** And then when that work is done, we need to join back into the main application thread.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=98)** And all of this can get fairly complicated depending on the programming interface you're using or the programming language.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=105)** One of the things that I love about C# is how much easier it's made working with these kinds of APIs.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=112)** And you're going to see that they're very standard in C# 10.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=117)** If we go back to our example code here, I have added some things.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=120)** So you'll want to grab the exercise files from the begin folder.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=125)** And you'll see I've added this item over here called thread samples.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=129)** So we've got some items in there.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=131)** I'm going to go back out here before I forget.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=134)** We'll comment out our exception code from before and then I'll do thread samples, Simple Thread so that when we run this, we'll execute my code here.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=146)** And I should point out, I've also fixed the Matt dot Jason file.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=151)** We're going to use this in these examples.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=153)** And so if you've pulled that across and you manipulated it to cause errors by taking that comma out or changing the value, you'll want to fix that.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=164)** If we look at the thread samples then, what I've got is a method called Simple Thread.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=169)** That's the one we're calling from our main program.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=172)** And I'm simply going to change the color of the console text, write out the thread ID by using thread, current thread, managed thread ID.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=181)** Just so we can see visually that we're running on different threads.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=185)** And then I'll reset the color.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=188)** On line 18, I create a new thread and I'm passing it a method called Do File Work.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=194)** Essentially telling it, here's the chunk of work I want you to go do on this new thread.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=200)** On line 20, I tell it to start.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=203)** Go create that thread now physically on the system and do the work in that method I gave you.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=210)** While that's happening, I'm going to do a console right line here saying there's work happening in the main thread.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=216)** And then I'm going to call thread join on line 22.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=220)** So I'm saying I am waiting then for that work that's happening on the thread to complete, and that's going to be where I block.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=229)** So we'll wait. Now we've done other work in our main thread, now we're ready to pull back in the work from the additional thread that's doing our file work.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=239)** So what's the file work doing?
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=240)** Well, this should look mostly familiar.
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=242)** We're going out to that [[JSON]] file.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=245)** We're going to read the text and then we're going to deserialize it into an employee and we'll write that out.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=251)** Notice, on line 33, I'm using a method on the file class called Read All Text.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=258)** Now our file's very small, that's going to be pretty quick, but if we were reading a large file, this is a potentially blocking operation in that, IO category.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=270)** We're going to read from that file stream and it may take a while and it may block this thread.
>
> **[4:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=275)** So that's why we want to spin this off onto this other thread.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=281)** So we'll call the Simple Thread method.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=283)** It's going to create a new thread, run that code to read from the file and create our object, and we'll see what the results look like.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=293)** We have our main thread ID.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=295)** Its ID is one.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=297)** Notice then that we have work happening in the main thread.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=299)** So that's now printed after we started the thread.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=303)** Then we see the file access thread ID, that's a seven, and we get the output that's happening inside of that thread with the employee's been read from the file.
>
> **[5:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=315)** We can make this even more clear.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=317)** We could come add another one here.
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=320)** Say something like after all done.
>
> **[5:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=324)** And we can see that that goes back then to that initial method, that Simple Thread method after the thread has completed.
>
> **[5:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=332)** And we can continue executing our main application logic.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=335)** And that's the basic idea behind Threads, here fairly simple to create a new one, start it, then when I know I want to be done I can join, and do other work after the fact.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=348)** But it's that join that can get a little complicated and managing what happens after the threat is done.
>
> **[5:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/threading-basics?u=76281980&t=355)** So we'll see some additional ways that the language makes this even easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Env Vars:** json (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Basics of using async and await](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=0)** - [Instructor] With those threads, you can get some great benefits of being able to manage those and start up all that asynchronous work.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=8)** But it is a bit of a struggle sometimes to manage all the threads as you get more and more of them.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=14)** So there's also always been an asynchronous programming model in .net.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=19)** And I'm going to write a little pseudo code here just so you can see the old model, which will help you understand why the new model, the task-based programming with a weight and async, is a little bit better.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=31)** Now in the old model, if we look at, for example, line 34, up there where we said we were going to do a File.ReadAllText, that's something that can take a while and we might want to do that asynchronously.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=43)** And so the old model, you would do something like File.BeginReadAllText, and then you'd need to provide the path just like we did, so the parameters, but you'd also give a callback.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=56)** So we might do FinishReadAllText or something like that.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=61)** You'd be able to name it, and you could have an object or something like that that would state that you were going to then pass into the callback.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=70)** And then, you'd have your method, so FinishReadAllText down here, that's your callback, and that would then take in probably that state, often had what was called an IAsyncResult that would let you know the result of the operation, and you would then implement that method, and that's where you would do the work.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=94)** So here's where you would handle the file contents, for example.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=101)** This was great in the sense that it gave you that asynchronous model.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=104)** So I could start this work, please go read all that text, and then I could move on with my program, and then when all of that work was done, I'd get a call back, so I would have this asynchronous model.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=116)** where the problems came in is that with this model, you often ended up chaining lots of these calls together.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=123)** So you might open the file and then you might read the file and in fact, you might be reading from a streams, you might be reading bytes over and over and over, and you'd have all these callbacks and all this state that you were passing forward.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=138)** Now all that again is a setup for what we have now.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=141)** I'm going to paste in some new methods to replace the ones we had.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=146)** So you'll see I have, instead of simple thread, a new method on line 41 called SimpleThreadAsync.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=152)** And if you look at the method signature, you'll see not only is the name different, but I have a new keyword, async, and the return type, instead of void, is task.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=163)** This is the task-based programming model.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=166)** And using that task is going to allow me to do a number of different things.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=171)** I've also added on line 52 a method called DoFileWorkAsync that similarly, has the async keyword and returns a task.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=180)** If we start back at our SimpleThreadAsync here, you'll notice on line 47, I'm going to call that DoFileWorkAsync, but now I'm using another keyword, which is await.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=191)** And what that says is I want you to go start up this work, whatever's happening in DoFileWorkAsync, you're going to give me back a task, that's the return type, and I'm going to await that task to complete.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=205)** So this is essentially similar to that callback, but here is the callback code.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=213)** So rather than having to write a whole different method, rather than having to separate that out, chain those things together, we can have our callbacks here.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=221)** And in fact, then I could await some other work, meaning I can chain those callbacks together in what looks like a very linear fashion, was very easy to read code.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=233)** Looking at DoFileWorkAsync, again, it has the async keyword, and it returns a task.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=239)** Notice on line 60, now I'm reading that [[JSON]] by doing File.ReadAllTextAsync, and I'm awaiting that operation.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=250)** So a couple key things here, one is ReadAllTextAsync, just like I said, DoFileWorkAsync.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=257)** It's a very common pattern to put the async on the end of your method name to indicate that it's asynchronous or returns that task, and I'm also getting back a return value.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=270)** So I'm awaiting that, but I'm going to put the result into my employee JSON, notice it's a knowable string.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=278)** That's because if we look at ReadAllTextAsync, it is an async method that returns a task of string or a task of T, a generic that we learned about.
>
> **[4:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=289)** That means it's a task, so I can await it, but it's also going to return me a string.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=294)** So after I've awaited, I'm going to get that string.
>
> **[4:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=298)** And again, this greatly simplifies that model, where now I'm not passing around some generic state object or looking at an IAsyncResult, I'm just getting the string from the operation that I wanted to call.
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=311)** In order to use the await keyword, you have to be inside an asynchronous operation.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=317)** So that means your operation signature has to have that async keyword.
>
> **[5:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=322)** Also, in order to await an operation, it has to return a task.
>
> **[5:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=327)** So those are two key things to keep in mind as you look at this.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=331)** So if we go back out to our program, we can come in here and do our thread samples.
>
> **[5:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=339)** We can do SimpleThreadAsync and notice I get a little green underline telling me it's not an error, but I've got some information for you.
>
> **[5:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=347)** And if we look, it's going to tell me that that is an asynchronous operation, and you're not awaiting it.
>
> **[5:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=354)** That's kind of like saying thread start and then wandering off.
>
> **[5:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=358)** We're kicking off some asynchronous work, but we're not waiting for it to finish.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=362)** And in the case of our program here, the next thing we're going to do is exit, because that's our last line of code.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=367)** So we absolutely want to put our await there, so that we wait for that operation to complete before we continue on.
>
> **[6:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=376)** I'm going to go ahead and run that.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=378)** There are certainly scenarios where you might want to run an asynchronous operation and not await it.
>
> **[6:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=384)** It's not as common, but if you want to start that work, and you're not worried about waiting for it.
>
> **[6:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=389)** You can see both outputs here now from our simple thread and our SimpleThreadAsync, both start on the main thread ID.
>
> **[6:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=397)** Notice that in the first instance, the FileAccessThread had an ID of eight, whereas in the second, the FileAccessThread is still one.
>
> **[6:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=407)** And I'll go back to the code in a second and show you why, but we're still getting the same output, we're still getting that same work happening in that main thread.
>
> **[6:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=418)** Looking back at the code, you can see, there's that work happening in main thread.
>
> **[7:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=422)** That was after all the work happened in our DoFileWorkAsync.
>
> **[7:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=426)** So we awaited it once it was done, that was our callback essentially.
>
> **[7:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=430)** That's where we went in and did some more work after that work finished.
>
> **[7:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=435)** If you look down on line 56, that's where, in our DoFileWorkAsync, we're writing out the thread ID, notice that this is different from our first example.
>
> **[7:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=445)** In our first example, we created a new thread and started it.
>
> **[7:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=448)** That's why we got a new thread ID in that operation.
>
> **[7:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=452)** We haven't done that here.
>
> **[7:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=453)** We've just invoked an asynchronous operation, and while it was starting these first four lines of code, everything was synchronous.
>
> **[7:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=462)** We set the foreground color, we did a write line, we reset the color, we set a string variable.
>
> **[7:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=467)** Then, only on line 60, did we actually start some asynchronous work.
>
> **[7:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=471)** So at no point did we start up a new thread as we began this work, that's why we have the same thread ID, but there may be a thread that gets fired up in our ReadAllTextAsync behind the scenes for us, and we're awaiting that asynchronous work.
>
> **[8:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=486)** If we go back and compare this with our thread start, when we use the await, it's similar to doing something like this.
>
> **[8:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=493)** We take the thread, join, cut and paste, we're saying go start that work and then wait for it to finish, and that's essentially what's happening when we do the await, so it's a little bit different.
>
> **[8:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=506)** We're not starting up a thread and then being able to do a lot of work while that thread is happening, we're actually awaiting it, but it does give us that very succinct model for handling the callbacks when the work is done.
>
> **[8:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/basics-of-using-async-and-await?u=76281980&t=520)** And next, we'll see an option if you want to start up multiple pieces of work and wait for them all to be done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Analogies:** for example (2), just like (2), similar to (2), kind of like (1)
> **Definitions:** is a  (3), is an  (2)
> **Env Vars:** json (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)

#### [Task management](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=0)** - [Instructor] As we've looked at these two models where we specifically create a thread and start and join and then also, when we come down here and used the async and await keywords, you may have asked yourself, how can I get something in between?
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=15)** I like this async await.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=17)** It's very simple, gives me a very simple model without all those callbacks and I don't have to manage the thread, but I would like to queue up multiple pieces of work.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=26)** Let's look at how we can use tasks to do that kind of work.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=31)** We'll take our do file work async here.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=34)** I'm just going to create a parameter, we'll call it employee name, and then instead of my name, we're just going to use that employee name here.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=44)** I'll put the dollar sign here to get us the string interpolation.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=49)** So now we can actually parameterize this and we can say, I want to do this work on a particular file.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=56)** We'll copy and then paste our file here.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=63)** Rename that.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=69)** We'll call it Felicia.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=72)** Open it up, and then we'll just change the name.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=77)** So let's call this Felicia Employee, and we'll change the employee number here as well, so we'll say she was employee 327, and we'll save that.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=89)** Now we should be able to call the do file work async with either Matt or Felicia.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=96)** So we could come in here, and we've got one with Matt.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=100)** Then we can copy that, and we can call it with Felicia.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=109)** Now, the problem is, if we do this await, what's going to happen?
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=114)** We're using that callback model, which means we'll do the one with Matt, then we'll wait here.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=119)** After that's done, we'll do the work for the Felicia file, and that's not really what we want.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=124)** In this case, we actually want both of those things to go off and start, and when they're both done, we want to go on.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=130)** So instead of await here, we can have a task.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=134)** Remember, that function returns a task.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=139)** Await is just a nice way for us to say, I know I'm getting back a task.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=144)** I want to wait for that task.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=146)** So we're going to do the same thing here.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=150)** Now we're going to create our task variables, so we've got that information, and now, essentially, we want to be able to await both of those things.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=161)** So we can say I want to await Task.WhenAll, and then I can pass in those two operations or those two tasks.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=173)** Now, if you go look at task, we've used when all.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=176)** You can also use wait all, which is more of a blocking call.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=179)** We've got the await there.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=181)** You've got the ability to run them, you've got a variety of different options for managing tasks, but for our purposes, we're just going to focus on this notion that we can get back a task from an async operation rather than awaiting it, and we can then manage those tasks by waiting for all of them.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=200)** So I've got this code now we're writing out with our simple thread async.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=205)** We're going to have two different tasks for Matt and Felicia, and we're going to have, after they're done, this console write line work happening in the main thread.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=215)** So let's move this up here and see what happens.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=225)** We'll go ahead and run.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=227)** So you can see we've got, in our second part there, that second yellow line, the main thread ID, file access thread one, and then notice we have employee read from file employee, and that's the Matt file, and then the next line is work happening in the main thread.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=245)** So that shows us that these tasks are off and running, and they're happening asynchronously.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=253)** So we're able to start those.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=255)** They started running.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=256)** We're still back in our main thread here doing our console write line, and then we wait for all of them, and we could then go on and do other code that applies once they're done.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=268)** We've achieved our goal.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=270)** We've created two different tasks, we've started them both, and we've been able to wait for both to finish and in between while they're running, we have other code that can be executing on our main thread.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=282)** As you look at the output here, you may be wondering, why is it in the first example, when we created the thread and did start and join, we have a thread ID of one, and then in the file access, we had a thread ID seven, but if I look down to the second part where we use the async, everything says thread ID one?
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=301)** Well, that's the difference of how deep we're going and how much we're managing this.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=306)** Note when we created a thread, we literally created that thread and everything in the do file work is running on that thread.
>
> **[5:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=315)** That's why we see that different thread ID, 'cause we very specifically created it.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=321)** If you look here, remember, we're awaiting a method.
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=325)** We're awaiting that do file work async, and that starts processing, and while it does, it's still on the main thread.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=335)** So our file access thread here, we haven't really created a thread for this to work on.
>
> **[5:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=340)** It's when we get to line 73 and we do an async operation that under the covers, another thread will be created if needed, and we're not writing that out, so we don't see that that thread is being created in the background.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/task-management?u=76281980&t=356)** Using tasks, then, gives you a little more control and allows you to have multiple pieces of work that you can then start and wait on in whatever fashion makes sense to you, if it's one of them completing, if it's all of them completing, before you move on on that main thread.

> [!info]- Semantic Content
>
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### [Handling errors when using await](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=0)** - [Instructor] We've now seen two different ways to use the task model to do asynchronous work.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=6)** If we want to use the await, we can do that inside an async method.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=11)** So line 48, our SimpleThreadAsync is an async method.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=16)** That means we can await things in there.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=19)** Or the model we just used where we can manage the tasks ourselves and we can use the task then to wait for all of them to complete or for any of them to complete, for example.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=29)** We also talked about exceptions earlier.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=31)** And so I want to talk about those two together because when we move to this model where we manage the tasks, we can get different kinds of exceptions.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=40)** So I'm going to change down here from awaiting this to using the WaitAll and then we're going to change a couple things here to cause some errors.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=51)** So I'm going to change the name here and that means we're going to not find the right file.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=56)** And then I'm going to come in and I'm going to remove that comma.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=60)** So now that [[JSON]] file's invalid, so the code on line 54 should fail because the JSON exception's going to happen and the code on line 55's going to fail because we're not going to find that file.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=72)** But because these are tasks and they're asynchronous, they're not going to fail right away.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=77)** It's really this WaitAll on line 59 that's going to cause problems.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=82)** So let's do a try and we'll wrap the whole thing in the try and then we're going to catch, and here I'm going to catch an AggregateException and this is something that the task-based asynchronous model uses to capture all the exceptions that happen inside that asynchronous work we do.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=103)** So we'll go ahead and write out the message just for now, but we're also going to put a break point here so we can see this exception.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=112)** And the last thing I'm going to do is go out to our program and just comment out our simple thread.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=117)** So we're only running this asynchronous one and we can see it in isolation.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=121)** So again, we've got two tasks.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=122)** Each should fail for different reasons and we're doing a WaitAll here to wait for all of them to complete.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=129)** So we'll debug that with F5 or by clicking here.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=133)** You can see now we're in that aggregate exception.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=136)** And if I go into that, the message is going to be a number of things, one or more errors occurred.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=142)** But what's great about the aggregate exception is I can drill into it.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=146)** I have inner exceptions and you can see that I have the JSON exception.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=153)** I go to the inner exceptions here.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=154)** I've got a collection now of the actual exceptions with each of their stack traces.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=160)** So now I can see here this one is my JSON exception.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=164)** If I go down to the other one, I'm going to see that's the could not find file in there and we'll exit out of that.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=174)** So we wrote that exception out.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=177)** Now one of the things you can do with this aggregate exception is you can handle particular exceptions.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=185)** So if we look at the aggregate exception, we have, of course those inner exceptions, we have the ability to flatten out all of these.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=193)** So if you have a number of exceptions or multiple aggregate exceptions, you can flatten them out.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=198)** But we also have this Handle method and that takes a method essentially, we're going to talk about delegates in the next chapter, but for now it takes something that's going to take in an exception and return a Boolean.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=213)** So well let's name this inner, that makes more sense, and we're going to pass that in.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=219)** And so I'm just going to say inner is JsonException.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=223)** Now notice I don't need to put a return there 'cause it's just a single statement.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=227)** What that means is if the exception, the inner exception here, is a JSON exception, I'm returning true, that means I've handled it, but it also means I haven't handled the file-based exception.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=240)** So let's go ahead and run this now.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=245)** We still have the two different exceptions.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=248)** You're going to see now when it comes out here, the aggregate exception got rethrown.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=255)** So I go into the details.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=258)** There's my exception again, the inner exceptions.
>
> **[4:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=260)** Now the count is one and if we look we can see that is the could not find file exception.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=268)** That's our IO exception.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=270)** So we've handled the JSON exception, but since we didn't handle the other one, it continued to propagate up through the stack and it's now getting caught essentially here at the program level.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=284)** Just keep continuing and we'll get back out to our code and we'll see that gets thrown up there.
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=291)** When we use the await pattern, like we did before with the await and async, we don't worry about this as much because .NET handles for us the translation or the mapping of that exception onto the actual exception type.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=305)** So if I were to await the DoFileWorkAsync for these two, then I would see that the actual exceptions are what I'm going to try and catch in my try catch.
>
> **[5:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=315)** And in fact, that's a good thing for you to try.
>
> **[5:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=318)** So we'll do a follow up, switch back to await the two method calls and catch the appropriate exceptions.
>
> **[5:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=334)** So you can give that a try.
>
> **[5:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=336)** See what those exception types are.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=338)** If you await the DoFileWorkAsync on line 56 and 57 and you comment out the task WaitAll on 61, you're going to see slightly different behavior.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=348)** But that aggregate exception is really helpful when you're managing those tasks and you're waiting for multiple things and you have that Handle operation so that you can say some of these are okay, I've handled them, I've logged them, I've done whatever I need to do.
>
> **[6:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=364)** And if you've handled all of them, great, that's a regular catch.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/handling-errors-when-using-await?u=76281980&t=367)** If you don't handle all of them, if you return false for some reason, then you're going to get that exception propagated up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (6)
> **Env Vars:** json (6), net (1)
> **CLI Commands:** find (4)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Task management](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=0)** - [Instructor] In this challenge, we need to use tasks to make some asynchronous calls.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=5)** We see on lines 11 through 17, or 18, that our Solver class has these asynchronous MinAsync and MaxAsync operations that take an array of numbers and return a Task<int>.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=19)** So these are asynchronous functions.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=20)** Maybe we're calling out to something over the network to actually do this highly complex work, and so in our solution, we then need to be able to manage those two tasks.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=31)** So I want to say I've got a Task<int>, 'cause that's the return type, so I'm going to say tMin =, and now I'll do solver.MinAsync, pass in the numbers.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=45)** Likewise, I've got a Task<int> tMax = solver.MaxAsync, pass in the numbers.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=52)** So I have a reference to those tasks that now are off and running, so now I can choose to Task.WaitAll, and I can pass in tMin and tMax.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=65)** And when those are done, I now have the results in the Task that I can return, so I've got min and max there, so I need to say min = tMin.Result, and max = tMax.result.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=82)** And now we'll return that two-pole with the min and max.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=85)** Keep in mind, we'd want to put some exception handling around this, doing these asynchronous tasks and things kind of get lost if we don't do that exception handling, but this is the simplest example to go out and execute those.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=99)** So if we test our code, it should get five and 19, and that is in fact what we get.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=106)** So maybe we make 19 a negative 19, try it again.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=114)** We'll see that now negative 19 is the min and 17 becomes the max.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-task-management?u=76281980&t=119)** So because our function is not asynchronous, line 29, it's static, it's not asynchronous, can't use the Await keywords here, so we've used the task to get back the reference to those things and then we can wait for them to complete before we continue on.

> [!info]- Semantic Content
>
> **Code Identifiers:** tmin (3), tmax (3)
> **CLI Commands:** make (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 5. Delegates and Events

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding delegates](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=0)** - [Instructor] I'm going to go ahead and clean up our environment here a little bit.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=3)** Just leave our Program.cs.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=6)** And we're going to comment this out, because now, we're going to start talking about delegates and events and expressions, all kind of fit together.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=16)** We start with this notion that I have a method, so I have this method called WriteHello returns void, takes in a string and then it's going to do something.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=26)** A delegate, in simplest terms, is a pointer to a method or function.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=32)** So I can declare Delegate, del, equals WriteHello.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=39)** Now, I actually don't want those parentheses that were put on there automatically for me, because I'm pointing to that method.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=44)** I'm not invoking that method right there.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=47)** Now, I have this delegate del variable that can invoke that method because it points to it.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=55)** So I could do something like this.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=57)** I could say dynamic invoke, and you'll notice the signature is that it takes in an array of objects and they can all be null and it returns a nullable object.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=69)** We're just going to call that and you'll notice because WriteHello takes a string, we should pass something in there.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=76)** So I'm just going to pass in my name for right now.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=80)** We've got a method, we've simply declared a pointer to it, and then we've said, I want to invoke that.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=85)** So I'm going to Ctrl + F5 to run without debugging.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=88)** You can see we ran our WriteHello method to write out hello Matt.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=95)** I'm going to go ahead and go out to my library project here and I'm going to add a class, call it DelegateSamples, and we'll make it public and static like the other samples.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=110)** And now, what I want to do is the other side of this, I want to be able to declare a delegate.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=116)** I can actually have a type with a signature, so I can do public delegate.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=124)** The return type is void.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=126)** I'm going to give it a name.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=127)** Let's just call it Del for now, and what is the signature?
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=131)** Well, could say name, could say input.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=135)** We can call that whatever we want.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=137)** Now, notice there's no implementation here.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=139)** This is just a declaration that says a delegate called Del takes in a string and returns void.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=149)** Well, now I can use that in some work or some function.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=153)** So I could say public static void PassMeWork.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=159)** And what I want then is a Del as the parameter and we'll call it work.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=166)** What is work?
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=168)** Work now is a delegate.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=170)** So a pointer to a function that takes a string and returns void.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=175)** So I can call work.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=178)** It's got the signature, and I can say delegates.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=183)** That means I can now pass to this function my own function.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=188)** I can use it as a callback or I can use it as a completion.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=191)** There are a number of different scenarios where you want to be able to pass a method or a method implementation into another method, so that it can be invoked.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=200)** So now if we go back to our program, we're going to use this DelegateSamples and call the PassMeWork.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=208)** DelegateSamples, PassMeWork, and we can pass in WriteHello, just like that.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=220)** So what's going to happen?
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=221)** Well, our WriteHello is a method that takes a string and it writes hello, whatever that string is.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=228)** Our DelegateSamples over here is going to get passed that.
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=232)** It's going to invoke it with the [[Microsoft Word|word]] delegates.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=235)** So if we run, we should get our first one, which is hello matt.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=239)** And then we get hello delegates, because we've invoked this WriteHello method and passed it delegates.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=247)** This allows some great flexibility in being able to define and pass around these functions.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-delegates?u=76281980&t=254)** And if you're writing a library or a class, you may need to do some work, but you may also need to offload or delegate some of that work back to the caller, so that you can call back to the caller and have it apply some logic or do some work in the scope of this particular operation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** notion (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Understanding events](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=0)** - [Instructor] Another case where we want to use delegates is when we want to raise events.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=5)** And this is what's often referred to as a multicast delegate, meaning I'm going to be able to invoke a method once in my code, but it may then trigger or invoke many different delegates.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=18)** So, I'm going to come into my class and declare this event.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=22)** So, we're in a static class, so it needs to be static.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=25)** We use the keyword event, then I need the delegate.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=28)** What is the signature for this event?
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=30)** When I go and raise this event, or I call all these delegates, what is that signature?
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=36)** And here, I've used my delegate that I've defined with a string input.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=41)** Then I need a name for my event.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=43)** So, we'll just keep it simple here, something happened.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=47)** Now we have an event, what are we going to do with it?
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=50)** Well, we can invoke it or raise it.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=53)** So, I'm going to just paste this bit in here, got a method, do something.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=58)** I'm going to WriteLine, I'm about to do something, so we'll get some status there.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=62)** And then very importantly, I'm going to make sure that event isn't null.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=67)** That means that some class has registered for this event.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=71)** It said I want to have my delegate invoked when this event happens, and then I simply invoke that delegate.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=81)** So, I use the event name.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=82)** The signature is going to be whatever the delegate was that I provided as the type for that.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=88)** So, you can see here it's my Del that takes a string.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=91)** This gives us another way to let external classes or code get callbacks or get delegates invoked, but in this case, when I call something happened, it may be one, five, 10 different classes whose delegates will get invoked.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=109)** So, if we come back here, we'll see we need to go to our delegate samples.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=117)** Something happened, notice it's got a little lightning bolt there means it's an event.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=121)** And so, I can choose that and then I can plus equal, saying I want to add a delegate to that.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=129)** And in my case it's my WriteHello that I've passed in.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=135)** I'm saying here's my delegate.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=137)** I'm adding it to any other delegates that have been created for this.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=141)** So, when something happens, I want you to call that.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=144)** And then, if we use our delegate samples again, we can DoSomething.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=150)** Remember that's the method that's actually going to invoke that event or those delegates.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=156)** Then, we'll go ahead and run that.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=159)** So, we've got our hello Matt and our hello delegates from before and now we've got the, I'm about to do something.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=165)** Remember line 41 we called DoSomething.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=167)** That's the first line of code in there.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=170)** And then, we raised the event.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=171)** We invoked our delegate and so it says hello 'cause that's what our delegate does.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=177)** And then, the string that was passed to it, I did something.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=181)** Again, we go back here, there's our WriteLine and then there is a listener.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=186)** And now, we say something happened with what we want that delegate to receive as a string input.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=194)** Close that.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=195)** Another example we can use, and I want to show you another thing about events.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=199)** I used a very simple delegate there, but if we look at the console, we've been using it to WriteLine where you can see a cancel key press here.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=208)** So, we can say I want to plus equal that and we'll say something like OnCancel without the parameters.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=218)** That means we need a method called OnCancel that matches that delegate.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=223)** And the delegate for that is a console cancel event handler.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=227)** So, let's go down here and we'll add a static void OnCancel, and a common pattern for event handlers is to have an object, that's the sender.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=241)** And then, event arguments, console cancel event arguments passed in as well.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=251)** So, the sender can be null, can also be the class with the object that sent it if that's important to you, but the ARGs are often typed in order to give you control over that event or have you [[React.js|react]] to that event in a certain way.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=266)** So, for a cancel event, notice in the ARGs we have a cancel property that's a Boolean.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=273)** So, I can actually indicate if I want to allow this to cancel or if I want it to continue.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=283)** So, we can say cancel equal to true like that.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=288)** So, I've registered the cancel.
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=291)** We're going to have all this other stuff happening.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=294)** What I'm going to do is a for loop and we'll keep zero and we'll go out to say a thousand, 10,000.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=307)** And we'll just have that print out that number.
>
> **[5:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=312)** This is just so that something is happening here.
>
> **[5:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=315)** And then, I should probably tell us to hit control plus C to cancel.
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=325)** So, let's go ahead and put a break point in here so we can see it and let's debug that, but we're now setting up an event handler for the cancel.
>
> **[5:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=334)** We're going to make sure our code is going to do something for a while, so it's cancelable.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=338)** And then when we cancel, we should get this event firing our delegate.
>
> **[5:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=344)** Control C, there it is.
>
> **[5:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=346)** We've got our cancel.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=348)** Notice cancel is set to faults.
>
> **[5:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=350)** By default, we're going to set it to true and I'll hit F5 to continue.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=356)** And because I said true, it's actually going to continue through here, hit control C again.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=362)** I'm back to that.
>
> **[6:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=364)** I'll do F10 to step, come down in the immediate window and we'll say args.cancel equals false.
>
> **[6:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=374)** So, we can see that's actually false now.
>
> **[6:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=376)** Now if I continue, you'll notice it's stopped.
>
> **[6:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=380)** It's actually canceled.
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=381)** We're on our read line and then it completes.
>
> **[6:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=389)** It's a very common pattern for events to have the delegate be an event handler, which is essentially a delegate, but it follows this signature where you have the object sender and then some kind of event ARGs class or derived class that provides information about the event.
>
> **[6:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=408)** One last thing I'll mention here is that for events you should clean up those handlers.
>
> **[6:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=414)** So, for example, when I came in here, this was my callback for that event.
>
> **[6:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=418)** If I'm done listening for that event, I just needed to know about it once, in that case, then I would want to say delegate samples, and I've got that, SomethingHappened.
>
> **[7:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=430)** Now I'm going to do minus equals, WriteHello I'm removing that one handler, mine, from the list, so it doesn't left out there dangling.
>
> **[7:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=444)** I don't now have a pointer back to this method.
>
> **[7:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=447)** So, it's a good idea when you're done with those events for you to clean that up.
>
> **[7:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=451)** I'll leave it to you to do the same thing down here with the on cancel.
>
> **[7:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=457)** Thinking about what's the scenario when you would want to remove the event handler or delegate.
>
> **[7:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=467)** So, that might be testing that ARGs cancel.
>
> **[7:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=470)** That might be depending on what you're setting it to.
>
> **[7:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=472)** So, in our case we're setting it to true.
>
> **[7:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=475)** We probably don't want to cancel the event handler because we might come back in here.
>
> **[7:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-events?u=76281980&t=479)** We didn't actually cancel the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** make (2)
> **Env Vars:** f10 (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Common delegates with Action<T> and Func<T>](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=0)** - I've gone ahead and cleaned up our program CS a little bit here.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=3)** I had a lot of stuff there and it was getting a little out of sorts.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=7)** I'm going to go ahead and comment all this out right now.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=10)** So control + E + C and comment that all out just so we're not running everything.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=17)** Then I'm going to go into my delegate samples.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=20)** If we look at this delegate we declared, where we take a string input and return void, you might have thought to yourself, "Gosh, why do we have to define that?"
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=30)** It's a method signature, it takes an input and we have generics.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=35)** We learned about generics earlier.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=37)** Let's do something better.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=39)** Instead of having to always define delegates that are going to essentially be method signatures with typed parameters, it'd be great if we had something like this.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=51)** Action of T or all the way from T one to T 16.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=55)** You can have up to 16 generic parameters is a built-in delegate or method that executes has one to 16 type parameters or actually zero to 16 type parameters and is going to not return anything.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=71)** So simply by changing that to action of string my PassMeWork should work now.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=79)** I can actually get rid of my delegate definition.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=82)** Now that's going to mess up my event.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=85)** Can I change that to action of string? Sure.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=88)** That's a delegate. That's all I need there.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=91)** So we're back to my PassMeWork.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=94)** Let's go back out here, go down to the bottom and we'll call it again, delegate samples, PassMeWork.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=104)** What do we need to pass?
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=105)** We need to pass that method again so we could just pass our WriteHello.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=111)** Going to have to go up and uncomment that, but it still works the exact same way.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=118)** So control + E U uncomment that I'm going to go ahead and get rid of that event unregistration, 'cause we're not using the events right now and let's change this to say actions in action and whatever that game is.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=134)** Again, the functionality is the same, but actions are really going to help us reduce the need to declare our own delegates.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=144)** So there we go, actions and action, delegates because when we invoked PassMeWork, it invoked our delegate passing in delegates.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=154)** Actions then can have up to those 16 input parameters but they don't return anything.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=161)** Whereas we might want to have a delegate that does return something.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=166)** So we can do a static void.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=170)** We'll say pass me logic this time and now I want a func of T.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=177)** So let's say I'm going to pass in a string and it's going to return an int.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=182)** We'll call that worker. Now I can invoke that worker.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=188)** So I can say int count = worker invoke notice it takes a string and it's going to return an int.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=198)** So I'm just going to pass in "Hello World" here.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=203)** So some function that is going to be passed to me is going to give me a count based on that string.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=210)** I don't really know what the logic is.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=212)** I don't know if it's all the characters, if it's non-white space characters, I should know that.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=218)** But for now, all I know is this method takes a string and returns an int.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=222)** It might tell me how many times L happens in there.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=225)** Some we can write out.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=231)** Function returned and then we'll put in the count.
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=236)** So what's missing now is a method that takes a string and returns an int.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=240)** We've got a parameter of that type.
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=242)** We are using it in here, but we actually need to invoke and pass something in.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=248)** So let's go back out here.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=251)** So I have a static int calculate length.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=257)** It'll take a string input and we're going to return the length of input.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=263)** Now if input is null there, we could get an exception, but we'll return that length back out.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=270)** And that means that we can now do delegate samples PassMeLogic and it wants that function.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=282)** So we can say calculate length, and pass that in.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=290)** So now when we pass it work, we're passing it in action.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=294)** A method that takes parameters but doesn't have a return value.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=297)** And when we pass logic, we're passing in a function that does have a return value.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=307)** So you can see when we run that action, it again says actions in action, when we invoke and passed the function, it counted up the letters, and so the function returned 11.
>
> **[5:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=318)** Inside of our method here we were able to call back out to the caller or invoke the function past and then use the results of that inside of our application logic.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=331)** So action and function are really just helpers for delegates so that you don't have to go out and define them like we did on line 13 over and over again with different names and different names of parameters.
>
> **[5:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=345)** They're all essentially the same, methods with typed parameters.
>
> **[5:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/3055829?u=76281980&t=350)** So we get generic delegates to simplify that.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **Speakers:** - i (1)

#### [Understanding lambda expressions](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=0)** - [Instructor] Action and Func help us not have to write the delegate declarations.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=6)** By the same token, Lambda expressions are going to help us not have to write methods.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=12)** So for those cases where, really, the implementation of that delegate is very focused, we don't need a standalone method for it, we want to be able to have a way to write a method without having to fully declare it or write that logic.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=28)** And these expressions come in two [[Forms]].
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=31)** So I'm just going to call this var T, and have a parameter list.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=36)** So string S.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=38)** I'm going to use this expression to point to the Lambda.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=42)** So now I've defined the parameters on the left, now the implementation comes on the right.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=48)** A simple expression would look like this, where I would now, write console right line, and pass the S.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=58)** I'm not returning anything, I'm not doing anything there.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=61)** I'm simply writing out I've got a statement or an expression there, and that means that I should be able to invoke that by doing something like this, hello world, because that expression is a method.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=78)** Now, another way we can write those expressions is to have the full statement there.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=83)** So can use this, I can say I'm taking in a string S, and then I'm going to use my Lambda expression symbol here.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=93)** And then I can use curly braces and I can then have multiple statements in here.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=98)** So I could write out the S.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=104)** I could also then return S.length.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=112)** So I have a full set of statements there.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=113)** This is essentially a method declaration, but I've simplified it in this particular case.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=120)** Of note, if we were going to use this expression model, or we just have the single expression, let's say I'm going to have this copy paste, I'm going to call this T two, and instead of writing it out, what I want to do is return the length like I did below because it's an expression, I don't actually need to use the return keyword.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=139)** I simply write S.length.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=141)** And that's now understood to be a value that's returned, that's providing a value.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=148)** The expression evaluates to some value, and that then is what would get returned to T two.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=155)** Those are the key things to understand about basics of the Lambda expressions.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=159)** So on line 70 and 71, you can see we have our parameter list.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=163)** In this case, we're defining the type, string.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=167)** Then we've got the operator that indicates that we're going to have an expression.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=171)** And in both these cases, line 70 and 71, we simply have an expression.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=176)** First one doesn't return anything, so it's going to simply write that out.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=180)** The second one does evaluate to a value, so this is a case where we're passing in a string and we're going to return that length and down on line 75 through 77, you can see the statement based where maybe when we have this method, an anonymous method, essentially with our Lambda expression, we don't just have one single expression to evaluate.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=202)** We've got multiple things to do.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=204)** We can use the curly braces to encapsulate everything to the right of the operator and make that essentially a method body.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understanding-lambda-expressions?u=76281980&t=212)** And again, there we can use the return if we need to provide a value back when those operations are done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Expressions as delegates](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=0)** - [Instructor] Since Lambda expressions are essentially anonymous methods, we can use them when we talk about delegates.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=8)** So we think about our PassMeWork here where we passed WriteHello, what does WriteHello do?
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=14)** Well, it takes a string and it does something.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=16)** So that means we could, instead of passing a method there, pass an expression.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=22)** We could say, "hello expression" and then we could pass in whatever that s is that comes in, and just drop this down onto another line.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=38)** Got some extra punctuation at the end there.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=43)** But not that much.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=45)** So we have PassMeWork, and instead of passing a pointer to a method, instead of passing that WriteHello, I can just pass an expression.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=53)** It says, here's your delegate.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=55)** It matches the signature because it takes a string and it does something in there.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=60)** Notice that I don't have to say string + s in parentheses, because PassMeWork has already defined that signature.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=68)** If we go back and look at that method, you'll remember that it takes an Action<string>, so it's looking for a delegate that takes a string or a method that takes a string.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=78)** We've provided one here, and we don't have to then also specify over here the string s.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=87)** That's already implied by that signature that's provided.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=92)** Likewise, for the CalculateLength, if you think about it, we could just take this expression we had down here, copy that, come up and paste it here.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=107)** Again, we have the string, but we don't have to put that there, we can get rid of it, because we know that this PassMeLogic is expecting that.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=118)** Get rid of that one extra semicolon there, and now, when we've called PassMeLogic, again, we've given it an expression.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=126)** We didn't have to have a separate method defined for that.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=131)** We can define the method in line here using the expressions.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=136)** We can get rid of CalculateLength, just comment that out.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=142)** We'll leave these other ones down here as well.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=144)** We're going to write those out.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=146)** When we run this, we should see that PassMeWork is going to run and call "hello expressions" with the s, and PassMeLogic then is going to write out whatever string gets passed to it, and it's going to return the length, which remember, we use over here to get a count.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=165)** So on line 23, we're going to be able to see that count come out because we've invoked that expression from this method.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=177)** So we've got our hello expression delegates, that's the PassMeWork getting invoked there, calling back into our Lambda expression now with the [[Microsoft Word|word]] delegates.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=187)** Then we have our hello World, that's what was called or passed into that function, when we call worker here, we're calling that expression we defined, and we first do a WriteLine, and then the function says what it returned here on line 23.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=211)** So we get all of that logic simply embedded, those anonymous methods being able to be passed as delegates because they match the signature.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=221)** Now if I did something like this, well now I no longer match the signature.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=226)** Now I have a method that takes two parameters, but PassMeLogic is expecting a method that takes one parameter.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=234)** So our expression is going to have to match that signature.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=238)** And if I look here, PassMeLogic, I can see that it takes a Func of string int, and so I know I need to pass a string, and the second one is going to be the return type, because it's not an Action, it's a Func.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=253)** We've seen this in use.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=254)** If we go back and look at our thread samples, you remember when we did our AggregateException on line 65 here, that AggregateException had a method called Handle, and it takes a function, or a Func, that takes in an exception and returns a bool.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=277)** So this was a Lambda expression that we passed in.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=281)** It takes in an exception, we named it inner, and then on the right side of the operator, we're able to use that inner, which is of type exception, in our logic.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=293)** And of course, this Lambda expression just has the expression, simply inner is JsonException.
>
> **[4:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=298)** That results in a true or false value that gets returned.
>
> **[5:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=302)** We could have also done a statement-based expression, we could have done a number of things, like write out the message from the inner one, then we could come down and return inner is JsonException, 'cause now we are inside that statement and we do need the return statement.
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=325)** We didn't go over it while we were here 'cause we hadn't touched on it yet, but I wanted to loop back here and show you this in use with a part of the framework so you can see how you can use those Lambda expressions or those anonymous methods.
>
> **[5:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=337)** I didn't have to go define a whole method here that matched the signature and figure all that out, because this logic is really only going to happen in this catch block.
>
> **[5:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/expressions-as-delegates?u=76281980&t=347)** I don't need a whole separate method for it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Speakers:** - [instructor] (1)

#### [Other uses for expressions](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=45)** and that now is a MethodBody.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=48)** So, I've provided an expression instead of the normal method for defining a method in order to provide that implementation.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=58)** Likewise, we can use that on properties.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=60)** So, maybe I've got a private string fName that we'll use for our first name.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=66)** So, if I come down here for my get, for example, I can just use the lambda operator.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=72)** I know that this is going to return a string, so I can just put fName.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=77)** That's what that's going to return.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=81)** I could use set or I could change this to init.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=84)** I can use that and now I can say fName equals value because I know that's what that operation signature for the property looks like.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=93)** It takes in a value of that type and we want to set it into that variable.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=98)** You can use it for properties, you can use it for methods and you could use it for constructors.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=104)** With the caveat being that the constructor has to take a single parameter, so you can set it in a expression.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=113)** So, we'll do a follow up here.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=114)** You create a constructor to initialize the first name.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-uses-for-expressions?u=76281980&t=127)** to set either the fName field or you can go through the first name property based on a parameter.

> [!info]- Semantic Content
>
> **Code Identifiers:** fname (4)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** caveat (1)

#### [Solution: Delegate using Func<T>](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=0)** - [Instructor] In this challenge, you're supposed to update the FindLargest method here in the Answer class in order to use a delegate to solve for the largest.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=9)** So if we look down in the test code, you can see we're going to call FindLargest, pass in the numbers, but we're also passing in a function here, this FindLargestSolver that's going to give us the largest answer.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=21)** So we need to be able to come up here and add a new parameter then.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=25)** And we're going to use the Func of TT.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=29)** So what am I going to pass in?
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=31)** An integer array.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=33)** And I'm going to get back and int. So that's my solver.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=38)** So now we'll come in and we'll just call solver and pass in the numbers.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=44)** So we're getting a delegate.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=45)** That means it is a function or it is a method that we can call.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=49)** So I'm going to invoke it.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=50)** I know it takes an array of integers and it returns an int so it matches my signature.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=56)** And that should find me the largest number.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=58)** So go ahead and give it a test, and that's what we got. 19.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=62)** So let's change this to 75 and try it again just to make sure.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=68)** Sure enough, we get 75.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/4548039?u=76281980&t=70)** So this allows us to pass in a function or a method that we can then invoke from our code here to get back the result.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 6. Extension Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [The case for extension methods](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=0)** - [Instructor] I want to talk about one of my favorite parts of C# and that's extension methods.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=4)** But first, let's talk about why we need them.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=7)** So I'm going to close up a couple of things here just to clean things up, get us back to our program, and I'm going to add a new class to our library project.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=17)** So we'll add a class.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=18)** I'm going to call that StringExtensions.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=23)** I'm going to make it public and static, just like we have the other ones so we can get at the methods easily.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=29)** And I'm going to come up here and just add to the namespace.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=32)** So I'm going to add extensions on here and I'll talk about why a little bit later, but the key thing to remember is our StringExtensions class is in the Essentials2.Library.Extensions namespace.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=46)** I often want to work with a string and grab different bits of it.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=50)** A lot of the code where I work on client applications, I need to be able to parse out specific pieces.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=56)** And the string class doesn't have a right method to grab the right most characters.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=61)** So I might do something like this, (string input) and I probably want to make that static, just like the class.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=70)** Let's say I've got the Right.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=72)** And so if(string.IsNullOrEmpty(input))
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=80)** then we're just going to return string.Empty.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=84)** So we want to make sure we handle those cases.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=87)** Otherwise, let's say we want the right X number.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=90)** So we want to add on here maybe an int for numChars.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=96)** How many characters do we want from the right end of the string?
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=100)** And now I can go in, I can do input.Substring and then I can provide a start index.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=109)** So I can take the length of the input minus the number of characters, so Length - numChars.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=119)** That gives me my starting point and I want to return that.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=125)** Now we could put some additional error checking around here, right?
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=128)** We might want to ERROR check that the length is greater than the length is greater than the numChars.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=141)** That would be a good idea.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=142)** But you get the point.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=143)** Our implementation simply allows me to get the right N or X number of characters from this input.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=151)** And so if I go to my program, we'll comment out the code that we had here back in our program cs just to clean things up.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=168)** We'll go down to the bottom and we'll add some additional code.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=170)** So that's in our Essentials2.Library.Extensions.stingExtensions.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=181)** We can choose Right, and now let's say I want to pass in something like this, ("right four") and then I want the 4 characters.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=192)** So var right = we'll grab those and then you can write out the right.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=203)** Well let's run that.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=204)** We'll see if we've got all our logic correct here.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=206)** We don't have any errors.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=209)** Great, I've now got that functionality to grab the right most N number of characters from a string.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=218)** But notice how I had to do this.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=221)** I've now got to call the right method on my StringExtensions class.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=226)** What I would love is if I had a string like this string s = "right four" then I could do s.Right.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=239)** I have a pad right.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=240)** That's not what I want.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=241)** I want to be able to grab and maybe just do those four characters.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=245)** So I want to be able to call something like that.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=248)** Keeps correcting it to PadRight 'cause that's a method that exists.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=252)** This doesn't currently exist and I don't own the string class.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=258)** That's part of the .NET Framework.
>
> **[4:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=260)** I can't go in and change the string class, wouldn't be a good idea based on how many things depend on it, but I don't have the control to do that.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=268)** And yet I really want this to appear as a function of the string.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/the-case-for-extension-methods?u=76281980&t=273)** And that is where extension methods come in and we'll see how to implement them next.

> [!info]- Semantic Content
>
> **Code Identifiers:** numchars (3), stingextensions (1)
> **CLI Commands:** make (3)
> **Env Vars:** error (1), net (1)
> **Analogies:** just like (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Writing an extension method](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980&t=0)** - [Instructor] Now I want to go change that method, in my string extensions, to be an extension method, and it couldn't be easier.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980&t=7)** I'm going to go to the method, I'm going to type this in front of the type, string, for that input, and now this is an extension method.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980&t=17)** And it extends whatever that first type is, so it extends string, in this case, 'cause that's the first parameter.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980&t=23)** Importantly, when I'm in here, notice that, as I get the input, I don't have access to any additional functionality of the string class than I would in my normal method or operation that I had here.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980&t=40)** I have all of the same access, and I have all the same methods and properties available to me.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980&t=45)** So I'm not getting internal access, I'm not changing the way that I can work with string, I'm simply changing how this method is going to be accessed on the class.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980&t=57)** So, now, same idea, we're going to get that input, we're going to check if its empty, and then we're going to get that Substring based on the length minus the number of characters.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980&t=68)** And this may not seem all that exciting or important right now, that we're able to create this method because we don't get that internal access, but we are now adding functionality to the string class for consumers.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/writing-an-extension-method?u=76281980&t=82)** It will look like a method on the string, and it will simplify the programming model.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using an extension method](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=0)** - Now that we've got our extension method, we can go out and use it.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=3)** So I can come back out here and comment this and voila, that should work.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=9)** But I'm getting that red squiggly.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=11)** It doesn't understand that that right method is part of the string.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=16)** And I'm showing you this because it's important and you're probably going to run into it.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=20)** I can't tell you how many times I've found a method, the documentation, or I've worked with a developer who's seen an example and they're looking at it and they're trying to understand it, but it just doesn't work for them because it doesn't know about this method.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=34)** And this will go back to C-Sharp Essentials Part One and the notion of namespaces.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=40)** You remember I put that type in a slightly longer namespace with the extensions name on it and I told you it would make sense later.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=48)** And hopefully now it does.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=50)** I'm going to save that, go back down to the end and now it understands the right method.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=57)** That static class that has our extension method in it has to be in scope, has to be in namespace scope.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=65)** And sometimes when people write libraries or even in the framework, those extension methods are in a slightly different namespace or they may just be in a namespace that you haven't put in scope with the using statement.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=78)** So we could change this to something like write fives just because that makes it five characters and we'll be slightly different.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=89)** And we can write this out now because that's going to return the right five characters.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=95)** So we should see four and then fives if we run this.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=101)** And there we go.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=102)** So now we've achieved what I wanted on line 91, I can now have a string variable and it has a method on it called right that will gimme the right most characters.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=113)** And I've encapsulated that logic in one place.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=117)** So now in my string extensions, if there's a problem with my logic, if I need to add additional error checking, I can do it in one place.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=125)** And I know that it will get used in all the places where my library or my class is getting used and I've fixed it for all those places.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=133)** And I'm not duplicating the same logic of checking for null, of checking length, of grabbing that sub-string based on the length minus the number of characters.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=144)** There are a number of different places in the framework where you're going to see extension methods and you're going to see how they extend different classes in the framework, but you can also use them to extend those classes yourself.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/using-an-extension-method?u=76281980&t=157)** You can create these utility methods that you can use throughout your projects.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Tools:** notion (1)
> **Speakers:** - now (1)

#### [Common extension methods on collections](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=0)** - [Instructor] One of the most common places you'll find and use extension methods is on collections.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=6)** We're going to look at, in the next chapter, [[Language Integrated Query (LINQ)|language integrated query]], and it's going to take advantage of these extension methods extensively.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=14)** If I just take a look at a list of string here, I've got all of these items.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=19)** I can look at names dot, and because the namespace is in scope, I get all sorts of different options here.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=28)** I see this AsQueryable and AsQueryable of T.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=31)** I get an Average.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=33)** I get the ability to cast, I get some ElementAt or Distinct.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=39)** So we're starting to see some things around selecting different items here.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=43)** First, we can do, well, there's a new one with C Sharp 10 called MinBy where we can get a minimum.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=52)** So let's do that.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=53)** Let's do MinBy.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=55)** What am I going to get?
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=56)** I'm going to get a string.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=57)** And it wants a function of type string.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=63)** So we're going to go in, we're going to pass it that s, we'll use our lambda, give it s.length.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=72)** So what's that going to be?
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=76)** Var shortest, equal, Shortest name.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=84)** And then we can do shortest.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=89)** So what that's doing, we look at our expression we passed in, we're saying if you give me the string, I'm going to return the length.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=96)** And then we're going to do a MinBy.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=99)** So give me a string from this list.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=101)** I want to find the minimum and I want to use this function to decide what the value is.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=107)** So let's go ahead and comment out these other steps up here and we'll run that with our collection.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=116)** We can see that the shortest name is xi, of course, it's only two letters.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=122)** That's one example.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=124)** So you'll see that these extension methods aren't on the Collection class itself.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=128)** List of T doesn't have these.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=130)** They extend it.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=131)** And I can do things like OrderBy.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=134)** And again, I'm going to pass the string in and we'll use that string .Length just 'cause it's a simple example.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=142)** And what's that going to give us?
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=144)** Well, the OrderBy is going to return another collection of those strings.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=151)** So we'll call that orderedNames.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=155)** And then we can just do a foreach name in orderedNames, and we can write out the name.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=163)** So if we've ordered those by the length, we should see those come out in order based on how short or long the names are.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=173)** So we've got the shortest name and then you can see, in fact, we did go from shortest to the longest there.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=179)** Those are just a few examples of some of the extension methods.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/common-extension-methods-on-collections?u=76281980&t=183)** And we're going to see in the next chapter when we talk about language integrated query, how we can use those to work with collections and work with a variety of different sources of information to query for values we want, for items we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Language Integrated Query (LINQ)|Language integrated query]] (2)
> **CLI Commands:** find (2)
> **Code Identifiers:** orderednames (2)
> **Cross-References:** in the next (2)
> **Speakers:** - [instructor] (1)

#### [Solution: Extension method](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=0)** - [Narrator] In this challenge, you're supposed to create an extension method that's going to allow you on an array of integers to call median, as you see in the test code, and get the median value or the middle number.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=13)** So in order to do that, one of the things we know we've got to do is have a static method and use the this keyword on the target type, in this case, an int array.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=23)** But we also have to make the class static in order for this to be an extension method.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=30)** And of course we don't have to worry about it here, but it also has to be in scope in terms of the namespace.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=37)** That is really the key to making this an extension method.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=40)** You can see the compiler is happy down there in the test code.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=43)** I'm going to go ahead and just paste an implementation in here.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=46)** Not a particularly great implementation.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=49)** It's not optimized for performance.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=51)** This is just a little fun aside from the extension methods.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=54)** I'm going to clone the array, sort the array on line 19.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=58)** And then on line 21 and 22, I'm going to figure out how many items and what's the midpoint.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=63)** And then I'm going to calculate the median.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=65)** So if it's an even number, I'm going to do one thing.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=69)** If it's an odd number, I'm just going to return the middle.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=71)** So you can see here (double)cNumbers[Mid], want that even then, I'm going to take those two middle numbers and I'm going to divide by two to get the average of those.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=80)** So again, not optimized, not really the focus here, but if we test our code, we got 13.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=87)** So five and seven are the bottom numbers, 17 and 19 are the top numbers, 13's the middle.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=92)** If we went ahead and added something in here, like let's say 16, then we should see the 16 and 13 added together get 29, and we should get the average of that, which is 14.5.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=105)** So we've made sure it's a static class and a static method.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=108)** We use the this keyword.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=110)** And then down here in our test code, we're able to just call median on that int array.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-extension-method?u=76281980&t=116)** which is not a function that is inherently or natively part of that type.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** cnumbers (1)
> **Versions:** 14.5 (1)
> **Speakers:** - [narrator] (1)


### 7. Language Integrated Query (LINQ)

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the purpose of LINQ](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=0)** - [Instructor] In the previous two chapters, we've looked at expressions and extension methods.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=5)** And while they both have great usability and provide excellent features in C# on their own, they're also part of a foundation of language-integrated query or [[Language Integrated Query (LINQ)|LINQ]].
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=18)** So let's take a look.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=18)** If we comment out our names here which is just a simple collection of strings, let's add a collection of some types.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=26)** We've got our employee type here that we've used.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=30)** With the extension methods that we looked at for collections, we can do a number of different things.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=36)** For example, we could take a look at our employees and I could say I want to do employees, and I can add a Where statement on there and now we're going to have an expression.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=49)** So we've got a extension method with the Where method and we have an expression.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=55)** So now we need our expression with our input and we're saying Where, and now I'm going to return a true or false.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=62)** So I can look at this and say e.id is greater than two.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=69)** And that's going to return, if we look by mousing over, see, it's going to return what's called an IEnumerable innumerable of employee.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=76)** That's one of our collection interfaces that we can enumerate over.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=81)** If we do that, we have our filtered employees, so we're going to have some subset of that that comes back out.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=90)** So let's go ahead and we'll just comment out the last bit here.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=95)** And now because it's an innumerable, we can iterate over it, our filteredEmployees, and now we could write out because that's an employee, we've got all that information, but let's just write out the first name.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=111)** If we look at the IDs then, we should see three different employees that get returned.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=120)** Sure enough, we see Pinal, Amanda, and Xi come back when we have the ID greater than two so they all fit that clause.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=130)** And this is great and because these extension methods return an IEnumerable, we can actually chain things together.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=138)** So if I do a dot here, I'm going to see a lot of those same extension methods come back.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=145)** So I have the Where, but maybe I don't need the whole object.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=149)** I don't need everything in there.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=151)** I can use a Select and now I can do es for eselect as my parameter maybe.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=159)** I can do es.FirstName and now if we look, we're getting a IEnumerable of string.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=169)** So we're really just getting back to a collection of strings.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=172)** But we also learned in C# Essentials Part One about anonymous types.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=179)** So I could say I want to return a new, say FirstName equals.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=186)** Now I'm just using the curly braces here and LastName equals, yes, LastName.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=195)** We'll add the closing curly brace so we've now returned an anonymous type that has a first name and a last name.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=205)** So we've stripped off the ID now from our employees, but we've already filtered them.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=210)** So if we look at filtered employees, it's now an IEnumerable of that anonymous type.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=217)** It should still have a first name and a last name.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=220)** So if we run that, we really shouldn't see any difference.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=224)** Still able to use the Where extension and only return those three, and then I'm selecting or now projecting those results into an anonymous type.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=238)** And all of this is great, but what you're starting to notice probably is it's getting a little messy.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=243)** We've got these extension methods chained together, lots of expressions together.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=248)** And so the extension methods and the expressions are getting us some functionality.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=253)** But when we talk about language-integrated query, we really want the querying to be integrated into the C# language.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/understand-the-purpose-of-linq?u=76281980&t=261)** Let's take a look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Language Integrated Query (LINQ)|Linq]] (1)
> **Code Identifiers:** filteredemployees (1)
> **Env Vars:** linq (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Querying collections with LINQ](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=0)** - [Instructor] Looking at this example, we can actually rewrite this in a slightly different way.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=6)** Let's do a var, we'll just say fEmployees, equal.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=12)** Now I can use from, I can say emp in employees, so I'm now using some integrated query language.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=22)** You can see that from and in here are keywords.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=25)** I can now say where, emp, and we can do the same thing we did before.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=31)** ID is greater than two.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=36)** Select, oops, I've got to properly case the ID there.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=43)** Now we could do the same thing.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=45)** We can select a new object.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=48)** In fact, we could just copy and paste this.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=60)** So now we can simply change this to fEmployees.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=63)** We should see the same results.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=66)** If you've done any querying of [[Databases]], for example, or other systems, a lot of these keywords, a lot of this structure is very similar.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=75)** It's slightly different from, say, a [[SQL]] query where you'd start with the select first, then the from and the where.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=83)** But it's the same kind of idea.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=84)** So we set up that query context of saying, what am I querying against?
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=90)** Well, the employee's collection, and I'm going to represent each item with an emp variable, that's like the input to our expressions.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=100)** So when I say where emp.id is greater than two, you can see how that maps onto the where extension method up above where I had an input into my expression, and I then created the expression that returned a true or false.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=116)** We need to fix up our expression parameter names there for this so that it works.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=124)** We can still have the filtered employees, but we're going to walk through the fEmployees as we execute that.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=132)** You'll see we get the same output that we got before, but we have a much cleaner syntax for writing the query here.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=139)** Let's go ahead and set a break point here, and we'll try this with the debugger on.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=149)** There we go.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=149)** And we'll just hit F10, and we'll step over our debug spot here where you can use the toolbar up here.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=160)** And now if I mouse over fEmployees, or if we look at it down here in our locals window, you can see that the type is now system link innumerable where select list iterator.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=173)** It's a much longer and internal type name.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=178)** And if we expand that, you'll see that current is null.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=182)** And if you look at the results view, it says that expanding that will enumerate the I enumerable.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=188)** What that means is at this point, fEmployees hasn't been iterated through.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=193)** Of course then, we're going to do that here.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=196)** That will become important as we talk later about other places where we can apply this language-integrated query to query against different sources.
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=207)** So this is a fantastic way to work with collections of objects, be able to manipulate them to get the results that you need for your business requirements.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=218)** And it's all integrated into C#.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=220)** So this is all understood under the covers.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/querying-collections-with-linq?u=76281980&t=224)** The where, the select, all of that, is really getting converted into those extension methods that we saw back on line 103, but it's a much better way to write these queries in your C# language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[SQL]] (1)
> **Code Identifiers:** femployees (5)
> **Env Vars:** sql (1), f10 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Filtering and ordering queries](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=0)** - [Instructor] We've got a basic query here with some filtering with our wear clause and our ability to select.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=6)** We're selecting an anonymous type or projection, but we could also just select emp if we wanted to, just like that.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=15)** So we can select the object itself.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=17)** We don't have to do the projection,
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=25)** Get these cleaned back up.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=27)** Now we can also add to this.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=29)** So maybe we want the emp ID to also be less than five.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=34)** So now if we look at our employees up top there, greater than two and less than five, we should really just see Pinal and Amanda.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=42)** Could run that quick and confirm.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=44)** Yep, that's what we get.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=46)** We can also order this.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=48)** So we can say order by.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=50)** We can do emp ID descending.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=54)** So now we're still filtering.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=55)** We should still just get Pinal and Amanda, but because we're ordering by ID descending, Amanda should come first.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=63)** In fact, if we run that, that's what we see.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=68)** Another thing you can do is combine this kind of syntax with extension methods if you need to 'cause not everything is integrated into the query.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=76)** So if I wrap this whole statement in the parentheses, that gives me the item and then I could do something like this.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=85)** I could say I want to skip one item and then I want to take three items.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=95)** Skip is going to skip over the first item in the collection.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=100)** Take is going to identify a number of items we want to take out of the collection.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=106)** The where statement was filtering based on some criteria.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=109)** It was looking at the employee objects and returning of Boolean value.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=114)** This is simply looking at them in order, skipping over some and then grabbing a certain number of those.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=122)** So we're going to order by the employee ID descending.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=126)** We're going to skip over the first one and take three.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=128)** So if you look at the top there, get your guesses lined up as to what you think this should be.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=135)** And we get Amanda, Pinal and Felicia 'cause we've ordered it descending, and then we've skipped over Xi and we've taken only three.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=144)** So we get Amanda, Pinal, and Felicia.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=147)** Now, there's a lot more complex queries that you can write.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=151)** You can do joins, so you can be querying from multiple collections or multiple sources.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=155)** You can use grouping to get values that are grouped together in that projection.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=161)** I'm just showing you a sampling of what the [[Language Integrated Query (LINQ)|language integrated query]] can provide in terms of giving you this quick, easy way to query against collections in order to get out just what you need.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/filtering-and-ordering-queries?u=76281980&t=175)** I've found that I tend to use this with collections more than even some of the other sources that we'll see in the next clip.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Language Integrated Query (LINQ)|Language integrated query]] (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Other sources for LINQ](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=0)** - [Instructor] We've used [[Language Integrated Query (LINQ)|LINQ]] to work with these collections of objects, and that's great.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=5)** There are a number of other places where you're going to query data usually.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=10)** So when you're working with a database, you're probably going to use Entity Framework or another library that helps you access that.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=17)** But those tend to use collections, so the syntax and things don't look a lot differently.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=22)** I will say one thing about them, which is in your expressions, you may run into some problems where certain things, that you would normally type in here, don't work.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=32)** So for example, when we're working with our orderbuy, we're just simply saying Employee Id.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=38)** If we tried to do something like Employee Id ToString, it wouldn't necessarily work.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=44)** And the reason is that there's two different ways LINQ expressions can be interpreted.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=50)** And one, when we're working with objects here, and we create these expressions, and they get executed in C#.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=57)** Another is to take this LINQ statement, everything on line 106 to line 109, and make an expression tree.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=66)** But then a provider might translate that into something that [[Microsoft SQL Server|SQL Server]] or a database server can understand.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=73)** So you can't have, for example, method calls in here that wouldn't be understood on the server.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=78)** But all that said, another interesting place is if you're working with XML, for example, and I want to show you this primarily, because it does show the flexibility, but it also shows how things are a little bit different depending on what kinds of data you're working with.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=93)** So if we see something like var xEmployees equals, and then I'm going to use something called Xelement.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=100)** And that's not going to be in scope, I need to add the namespace.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=104)** I'll do a Control + . and I'm going to use System.Xml.Linq.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=109)** Now that's going to put, as we know, the XElement class, but also maybe extension methods and other things, into scope.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=116)** So now I can load, and I'm going to load, just like we did with our [[JSON]] files, I'm going to load an Employees.xml.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=128)** We'll put a semicolon there. Well, what the heck is that?
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=130)** I've added this into our project files.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=135)** So you'll want to look in the Begin folder, you'll see that I've added the Employees.xml there, under the [[LinkedIn]] Essentials 2 project.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=143)** And at the top we have an Employees element.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=146)** And then underneath it, we have repeating Employee elements.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=151)** And this is going to look familiar, 'cause it's just like our objects we had, just so we can see the context here of XML.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=159)** Each Employee has a FirstName element, a LastName element, and an Id element.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=165)** Otherwise, this is the same data we were working with before, but we'll see now how this looks a little bit different.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=171)** So if we want to do our expression, let's say something like xEmpLinq equals, and now we can do our from X Employee in xEmployees, but that's not really going to give us what we want, 'cause if we look at xEmployees, that is an XElement, a knowable XElement.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=193)** And we need a collection or we need a set of items that we can query over.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=197)** So I'm going to use .Descendants, if I can spell it right, and that will allow us to pass in a string.
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=207)** And say, well what name do these descendants have? Employee.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=211)** So when I load it, the top level XElement is going to be that Employees.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=216)** Now I'm saying get me all the Employee elements underneath that, and that's what I'm querying against.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=223)** And I could use the where.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=224)** So I might want to do something like xemp, notice, I have Name, Value, NodeType.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=231)** Those are the suggestions coming up on the top there.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=234)** What I'm not going to find, if I go down through this list, so I'm not going to find FirstName and LastName, because this isn't an object, it is XML.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=244)** And so it doesn't necessarily know the structure.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=247)** But I can say I want an Element, Id.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=252)** And I want to be able to do what I did before and say I want that to be greater than two.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=257)** Now when I get that element, it's a string.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=261)** Everything in that file is a string, but built into the LINQ to XML is the notion that an element can be easily cast to different types.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=272)** I happen to know that Element's an int and so I can cast it to an int, and now I can compare it to that too.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=280)** Now this is where again, we might want to use our projection to project a new object, because what we don't want is a bunch of XML.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=290)** We want to get this mapped into or projected into some objects.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=294)** So I can do FirstName equals, and then I can do xemp, Element, and I can do FirstName.
>
> **[5:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=304)** And I can do LastName equals xemp, Element, LastName.
>
> **[5:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=312)** Now those are both strings, so I don't need to do any casting or anything here.
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=316)** Those are going to come back as strings and be assumed to be strings when they come back.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=321)** And then we can do something like before, I'm just going to paste in here a foreach.
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=325)** So it'll iterate over that collection now of those anonymous types coming back.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=331)** And we can write out the FirstName value and the LastName value.
>
> **[5:37](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=337)** Now why is that happening? Why do I need that value there?
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=341)** Let's run through it and we'll take a look.
>
> **[5:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=347)** Notice I've got this FirstName, but if you look at it, it's actually the XML.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=353)** So when I got the element and I got it back as a string, it gave me the whole thing, and that's not really what I wanted.
>
> **[6:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=360)** So I used the value here.
>
> **[6:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=363)** Now we know how we could clean this up by simply coming up here and using Value.
>
> **[6:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=373)** And now what we're going to get is the actual value on there.
>
> **[6:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=379)** So we can take that off of here, 'cause it no longer makes sense.
>
> **[6:22](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=382)** The objects we get back are simply going to be strings.
>
> **[6:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=390)** Now we'll run that. We should get that same output.
>
> **[6:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=393)** Now we get the FirstName and LastName.
>
> **[6:35](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=395)** And we still see those first three lines from our previous example, but then our next three.
>
> **[6:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=400)** So we've done the filtering.
>
> **[6:42](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=402)** We've done the projection across that XML document.
>
> **[6:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=405)** So it's not quite as clean as what we were doing with objects, because with objects we know the types, we know the different properties, and what their data types are.
>
> **[6:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=414)** The XML, it's not quite as easy, but with that implicit casting of the element that we can do with the ability to get the descendants, or query down in there, you can really work with XML in a much simpler way as you're trying to query through it in your C# code.
>
> **[7:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=432)** That's one example.
>
> **[7:13](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=433)** As I said, you can use LINQ with Entity Framework.
>
> **[7:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=436)** You can use LINQ with anything really that creates those objects.
>
> **[7:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=439)** But there are special cases, like Entity Framework, where it can translate your LINQ expressions into something that an external provider, like a database, can understand to actually execute the query.
>
> **[7:31](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/other-sources-for-linq?u=76281980&t=451)** Hopefully that gets you started with LINQ in a number of different scenarios within C#, and there's a lot more that you can learn to dig into Language-Integrated Query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Language Integrated Query (LINQ)|Linq]] (9), [[Microsoft SQL Server|Sql server]] (1), [[JSON]] (1), [[LinkedIn]] (1)
> **Env Vars:** xml (9), linq (8), sql (1), json (1)
> **Analogies:** for example (3), just like (2)
> **Code Identifiers:** xemployees (3), xemplinq (1)
> **File Paths:** employees.xml (2), system.xml (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** coming up (2)

#### [Solution: LINQ query to filter and sort](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=0)** - [Instructor] In this challenge, you need to use [[Language Integrated Query (LINQ)|LINQ]] in order to take a array or collection of orders.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=6)** You see our Order record defined there on line six, and we want orders with a totals greater than 1,000, and we want to sort them by the order date.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=14)** If we go here to our implementation and replace the null, and we'll say from o in Orders, and then we put our filter on, where o.OrderTotal > 1,000.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=30)** And then, we can say, orderby o.OrderDate, select o, not zero, o.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=39)** And then, because the return type is list, we need to call ToList().
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=45)** So, give me the orders where the total's greater than 1,000 order by the date.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=50)** If we look down here in our test code, we've got eight different items there.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=55)** Got a number of different values for the order total.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=58)** It looks like we have four that are over and they have different dates, so we're going to query those and test that.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=66)** And we've got the right answer.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=68)** So, we've got the values there.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=70)** If for example, I switch this to less than 1,000, I'd be filtering those other items and we're not going to get it.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=79)** Now, another way that you can write this is to use the extension methods.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=83)** So, you can take the orders.Where, you can say o, pass that in, o.OrderTotal > 1,000.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=93)** And then, you can OrderBy, pass in o, o.orderDate, and toList().
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/solution-linq-query-to-filter-and-sort?u=76281980&t=101)** This uses extension methods whereas previously, I was using the [[Language Integrated Query (LINQ)|Language Integrated Query]] right in the C# language, but it's all based on these extension methods, so we should see success using either method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Language Integrated Query (LINQ)|Linq]] (1), [[Language Integrated Query (LINQ)|Language integrated query]] (1)
> **Code Identifiers:** orderdate (1), tolist (1)
> **Env Vars:** linq (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Build something and continue learning](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=0)** - [Matt] Thank you so much for joining me in C# Essential Training 2.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=4)** I hope you've enjoyed the learning journey and that you're excited about the applications you can write with C#.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=11)** As you look to the next steps, there's some additional C# training you could take.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=15)** We really touched on [[Language Integrated Query (LINQ)|LINQ]] at the very end, or [[Language Integrated Query (LINQ)|Language Integrated Query]], but there's so much more you can do with it, and there's more complex operations and grouping that you can do as well.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=27)** So if that's something you think you're going to use, I would recommend you go out and dive a little deeper with some of the LINQ training.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=33)** Asynchronous programming is another piece where we touched on the basics of the async/await model of tasks, but again, if you're getting into multi-threaded programming, you'll want to dig deeper into some additional courses on asynchronous programming with C# so you really grasp the fundamentals underneath that.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=54)** Additionally, just like I said at the end of C# Essentials, one, other C# language features that you can look into, and then other frameworks.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=63)** So Entity Framework is a very common framework for people to use for data access to all sorts of [[Database Systems]].
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=71)** [ASP.NET](https://ASP.NET) is a framework for building web applications.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=76)** You have Blazor for building client applications using web technologies, like [[HTML]] and [[Cascading Style Sheets (CSS)|Cascading Style Sheets]], but C# instead of [[JavaScript]].
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=88)** You have Xamarin and .NET MAUI coming out soon, all for building cross-platform applications, especially mobile applications for iOS, [[Android]], and [[Windows]] and Mac.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=100)** And you have Windows Presentation Foundation, and other UI frameworks if you're specifically targeting Windows.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=107)** So depending on the kinds of applications you want to build, any of these last four may be a good place for you to move next with your C#, and if you're going to be accessing [[Databases]] in any of those kinds of applications.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=120)** Entity Framework is [[Microsoft]]'s offering in that space that you'll want to take a look at.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=126)** Now, other than watch courses, the main thing I can recommend is that you go build something you're excited about.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=132)** When you set up some requirements for an application and what it needs to do, and then you set out to achieve that with a programming language, I found that's the best way to learn the language and to learn how to achieve the tasks that you're going to need in real programming projects.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=148)** Again, thanks so much for joining me in C# Essentials 2.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-essential-training-2-generics-collections-and-linq/build-something-and-continue-learning?u=76281980&t=152)** I hope you've got a lot out of it, and have a great time building applications with C#.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Language Integrated Query (LINQ)|Linq]] (2), [[Language Integrated Query (LINQ)|Language integrated query]] (1), [[Database Systems]] (1), [[ASP.NET]] (1)
> **Env Vars:** linq (2), net (2), asp (1), html (1), maui (1)
> **Definitions:** is a  (2)
> **CLI Commands:** go build (1)
> **Code Identifiers:** ios (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)


## Instructor

- [[Matt Milner]]

## Resources

- Exercise files available

## Skills Covered

- Language Integrated Query (LINQ)
- C#

## Path Context

### In [[C- Foundations- From Basics to Building Blocks]]
← [[C Sharp Essential Training 1 Types And Control Flow]] | **2 of 5** | [[Debugging in C-]] →

### In [[Getting Started as a C- Developer]]
← [[C Sharp Essential Training 1 Types And Control Flow]] | **2 of 9** | [[C- and .NET Essential Training]] →

## Appears In

- [[C- Foundations- From Basics to Building Blocks]]
- [[Getting Started as a C- Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#

---

[↑ Back to top](#)