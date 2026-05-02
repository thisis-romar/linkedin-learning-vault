---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: c-sharp-essential-training-1-types-and-control-flow
url: "https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow"
level: Beginner
updated: 12/12/2023
learners: 230531
skills:
  - Control Flow
  - C#
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHrULBndWclgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702408532921?e=2147483647&amp;v=beta&amp;t=gw_wwiJC83BwTC2GOWAnwJSGoF20lpXPKgqT1bBomXU"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Foundations- From Basics to Building Blocks]]'
  - '[[Getting Started as a C- Developer]]'
next_courses:
  - '[[C- Essential Training 2- Generics, Collections, and LINQ]]'
  - '[[C- Essential Training 2- Generics, Collections, and LINQ]]'
path_nav: '[{"path":"C- Foundations- From Basics to Building Blocks","position":1,"total":5,"prev":null,"next":"C- Essential Training 2- Generics, Collections, and LINQ"},{"path":"Getting Started as a C- Developer","position":1,"total":9,"prev":null,"next":"C- Essential Training 2- Generics, Collections, and LINQ"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - skill/control-flow
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C%20Sharp%20Essential%20Training%201%20Types%20And%20Control%20Flow.md)

![C Sharp Essential Training 1 Types And Control Flow](https://media.licdn.com/dms/image/v2/D560DAQHrULBndWclgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702408532921?e=2147483647&amp;v=beta&amp;t=gw_wwiJC83BwTC2GOWAnwJSGoF20lpXPKgqT1bBomXU)

# C Sharp Essential Training 1 Types And Control Flow

> Do you need to learn the essentials of C#? This two-part series shows you through all the basics. In this course, part one of the series, instructor Matt Milner shows you classes, structs, variables, and much more. Matt begins by placing C# in context with .NET, MSIL, and the Base Class Library. He walks you through understanding and working with classes, structs, and records. Then Matt shows you 

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow) | Beginner | 231K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Explore the essentials](#explore-the-essentials)
  - [What you should know](#what-you-should-know)
  - [CoderPad tour](#coderpad-tour)
- [**1. C# in Context of .NET**](#1-c-in-context-of-net) (5 videos)
  - [C# compiles to MSIL](#c-compiles-to-msil)
  - [.NET runtime is responsible for running MSIL](#net-runtime-is-responsible-for-running-msil)
  - [The base class library](#the-base-class-library)
  - [NuGet packages](#nuget-packages)
  - [Compiling C# to a library or executable](#compiling-c-to-a-library-or-executable)
- [**2. Working with Classes, Structs, and Records**](#2-working-with-classes-structs-and-records) (9 videos)
  - [Understanding classes, structs, and records](#understanding-classes-structs-and-records)
  - [Defining constructors](#defining-constructors)
  - [Object initialization](#object-initialization)
  - [Initialize only properties](#initialize-only-properties)
  - [Cloning and copying objects](#cloning-and-copying-objects)
  - [Equality comparisons](#equality-comparisons)
  - [Defining abstract classes](#defining-abstract-classes)
  - [Creating static classes](#creating-static-classes)
  - [Solution: Expressing equality](#solution-expressing-equality)
- [**3. Organizing C# Code**](#3-organizing-c-code) (4 videos)
  - [Using namespaces to organize code](#using-namespaces-to-organize-code)
  - [Referencing .NET assemblies](#referencing-net-assemblies)
  - [Applying access modifiers](#applying-access-modifiers)
  - [Aliasing namespaces for clarity](#aliasing-namespaces-for-clarity)
- [**4. Variables Revisited**](#4-variables-revisited) (5 videos)
  - [Declaring variables using types](#declaring-variables-using-types)
  - [Using the var keyword](#using-the-var-keyword)
  - [Working with anonymous types](#working-with-anonymous-types)
  - [Using dynamic variables](#using-dynamic-variables)
  - [Solution: Dynamic keyword](#solution-dynamic-keyword)
- [**5. Working with Enums and Nullables**](#5-working-with-enums-and-nullables) (9 videos)
  - [Defining enums](#defining-enums)
  - [Enabling multiple enum values](#enabling-multiple-enum-values)
  - [Testing enum values](#testing-enum-values)
  - [Understanding nullable types](#understanding-nullable-types)
  - [Using nullable types](#using-nullable-types)
  - [Working with null objects](#working-with-null-objects)
  - [Understanding nullable reference types](#understanding-nullable-reference-types)
  - [Working with nullable reference types](#working-with-nullable-reference-types)
  - [Solution: Enum Flags](#solution-enum-flags)
- [**6. Using Patterns in Control Flow**](#6-using-patterns-in-control-flow) (8 videos)
  - [If and switch revisited](#if-and-switch-revisited)
  - [Switch statement vs. switch expression](#switch-statement-vs-switch-expression)
  - [Using the is expression](#using-the-is-expression)
  - [Introduction to patterns](#introduction-to-patterns)
  - [Constant, relational, and logical patterns](#constant-relational-and-logical-patterns)
  - [Property pattern](#property-pattern)
  - [Guard conditions](#guard-conditions)
  - [Solution: Switch expression using patterns](#solution-switch-expression-using-patterns)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learn more and build something](#learn-more-and-build-something)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore the essentials](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/explore-the-essentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/explore-the-essentials?u=76281980&t=0)** - [Matt] C Sharp is one of the most popular programming languages in use and continues to make programming easier and more fun with each new version.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/explore-the-essentials?u=76281980&t=9)** In this course, we'll take a close look at defining and using types and fundamental [[Control Flow]] constructs with C Sharp.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/explore-the-essentials?u=76281980&t=16)** I'm Matt Milner and I've been programming with C Sharp for 20 years.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/explore-the-essentials?u=76281980&t=20)** I continue using C Sharp because I love how the language has evolved and the improvements I've seen to make programming easier.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/explore-the-essentials?u=76281980&t=27)** So, please join me as we explore the essentials of C Sharp types and control flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (2)
> **CLI Commands:** make (2)
> **Speakers:** - [matt] (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=0)** - [Instructor] Let's talk about what you need to know to get started with C# Essential Training.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=5)** You should have some basic programming knowledge already.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=8)** So either familiarity with another programming language or just general basic programming knowledge.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=15)** Ideally you'll have the C# basics covered and a great way to do that is by watching the learning C# course here on [[LinkedIn]] Learning.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=23)** I'm going to assume that you have that basic level of understanding as we begin this course.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=29)** All of the examples that I'll be showing use Visual Studio 2022 Community Edition with .NET 6 and C# 10 running on [[Windows]].
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=40)** I'll point out features that are new in these versions in case you're using a previous version.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=45)** It is possible to use Visual Studio 2022 for Mac.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=49)** It's in preview at the time of the recording or Visual Studio Code on Windows or Mac, but the experience won't be exactly the same.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=58)** So you should be very comfortable with those tools if you choose to use them instead of Visual Studio 2022 for Windows.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=66)** You can download the exercise files for this course to follow along.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=71)** Once you download and unzip the archive, you'll find a layout similar to this, where you have a folder for each chapter, and if we go into a particular chapter, each of the movies will have its own folder here, and within you'll find a begin and end folder.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=87)** Each of these has a LinkedIn.Essentials folder with the solution inside.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=92)** Begin directory will have the state of the solution as we start the video and the end directory will have the corresponding state of the solution once the video's complete.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=102)** Feel free to start with the begin and follow along, and you have the end there to compare when you're done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[LinkedIn]] (2)
> **Tools:** visual studio (4)
> **CLI Commands:** find (2), unzip (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Env Vars:** net (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [CoderPad tour](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the courses table of contents.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=7)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=14)** These challenges are hosted by Coder Pad and they appear in the same area of the course page where you watch the courses videos.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=21)** We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=29)** The code Challenge has four areas: instructions in the top left, a code editor for your answer in the top right, another code editor where you can see how your code is used in the bottom right and a console for output in the bottom left.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=43)** You can use these drag handles to change the amount of space that each of these has as it works for you to be able to expand the areas you need to focus on.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=54)** You can also get more horizontal space for the code editors by collapsing the courses table of contents on the left.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=61)** Each challenge has instructions that include a description of the challenge and the challenges desired results, parameters, or values that'll be passed into your code, and they may have to be of a particular data type.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=74)** The return value also has to be of a particular type, and you'll also see that noted in the instructions.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=80)** The constraints section has useful information about the parameters that'll be passed in.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=85)** The examples show different parameter values and what result would be returned for each of those test cases.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=91)** Create your answer in the top right code editor.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=94)** There may be examples or options in the comments here, generally some guidance that you can use around what you need to do in addition to the instructions.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=104)** And when you're ready, you can click test my code to see if you've got the correct answer.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=110)** If your code isn't successful, you can ask for help.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=113)** I can change these values to true for show expected result and show hints.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=120)** Now, if I test my code, you see I didn't get the correct answer this time.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=125)** Time for another try.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=127)** We see the help down at the bottom.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=129)** The expected result is 19, and the hint tells us we can either iterate through the array to do our own calculation or use a [[Language Integrated Query (LINQ)|LINQ]] method.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=138)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=144)** If anything's too long to fit, you can scroll sideways to see all the text.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=148)** When you finish each code challenge, return to the courses table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Language Integrated Query (LINQ)|Linq]] (1)
> **Env Vars:** linq (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. C# in Context of .NET

[↑ Back to Table of Contents](#table-of-contents)

#### [C# compiles to MSIL](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=0)** - [Instructor] When learning a new programming language, I know I understand it better when I also learn the context in which it executes.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=7)** For C#, that means understanding that code written in C# compiles to MSIL, or [[Microsoft]] Intermediate Language.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=16)** C# is one of several .NET languages that all compile to MSIL.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=21)** F# is a [[Functional Programming]] language, and Visual Basic .NET are two other languages, supported by Microsoft, with their own compilers that each know how to take those source files in their particular programming language and compile it to Microsoft Intermediate Language.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=39)** One of the benefits of this is that the C# language can evolve independent of the runtime.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=46)** So back with the .NET Runtime 4, .NET Framework 4 from years ago, we had a variety of different versions of C# that all were able to compile down to MSIL that could run on that one common runtime, and that gives the language flexibility to grow and change independent of the runtime.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=67)** These days, for example with .NET 6, released in the fall of 2021, you'll see that C# tends to release with .NET with new versions of the compiler.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=79)** As an example, we look at this simple hello world application written in C# and compile it into an executable.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=86)** So on the bottom pane or window, I've got a person class, and in the top, a simple hello world, where I create that person and write a message out.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=96)** We can open that in a tool called ILDASM or IL Disassembler, that allows us to see from a compiled .NET executable or library, what the intermediate language is.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=107)** So I can browse into [[LinkedIn]] Essentials here, to my person class, and we can see all those properties, things like first name, age, last name, have get methods and set methods.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=120)** So if I go to the get last name, for example, I can now see what the MSIL looks like.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=126)** And in this case, we can see that line that starts with IL and four zeros, it's loading an argument.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=133)** And the next it's going to load a field.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=135)** And for that, we've got the person, last name, k, underscore, underscore, backing field.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=141)** That's the auto implemented field for our property definition, because our property simply identified the get and set, didn't put any particular code or expressions there so that was created for us automatically.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=157)** Likewise, if we go to the set last name.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=161)** We can see that we have a method on the first line there called set last name, takes in a string of value.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=167)** And then as you go down, you can see on aisle 0002 there, that it sets a field.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=172)** So now it's setting that backing field with the value that was passed in.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=179)** Likewise, we can go down to the program, find our static void main.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=183)** Now we can see all of those string literals like Matt and Milner.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=188)** We're going to load string command, on the actual message, the hello from, the format there.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=194)** And then that last one, we've got a call to our system console right line with the string.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=202)** So all of that C# that we wrote all compiled down to this MSIL that can now get executed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (3), [[Functional Programming]] (1), [[LinkedIn]] (1)
> **Env Vars:** net (7), msil (5), ildasm (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [.NET runtime is responsible for running MSIL](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=0)** - [Instructor] Once C# or other .NET languages have been compiled to MSIL they need to be executed.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=6)** The .NET runtime is responsible for executing that intermediate language or those .NET executables.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=13)** The runtime itself can be installed on a server or workstation, separate from the SDK.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=19)** So you don't need to have a developer setup.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=21)** You can simply install the runtime and then your application, compiled MSIL, can run on that platform.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=29)** There've been a variety of versions of the .NET runtime over the years, the most recent versions were started with .NET core are cross-platform, so they can run on [[Windows]], or [[Linux]], or Mac OS.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=41)** That means with C#, you can write your applications and you can target a variety of platforms, not just desktop or Windows, but also mobile platforms.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=51)** Another feature of the more recent .NET versions is that the runtime can be deployed with your application, eliminating the need for a separate installation of the runtime.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=61)** This is especially useful when deploying multiple applications to the same server, where you might have different runtimes targeted by your application.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=70)** So you can see here, an application, separate runtime on Windows.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=75)** You can also bundle that runtime in with your application to run on Linux, or Windows, or another platform, simplifying deployment, and simplifying the management of those dependencies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Linux]] (2)
> **Env Vars:** net (6), msil (2), sdk (1)
> **Prerequisites:** setup (1), install (1)
> **Speakers:** - [instructor] (1)

#### [The base class library](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=0)** - [Instructor] When writing applications in C#, or really any language, there are common pieces of functionality that are often provided in a [[Software Development]] kit or SDK.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=10)** And because C# is one of several .net languages, that common functionality is provided to all of them in the Base Class Library or BCL.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=19)** The BCL contains types for the most basic of functions, such as string manipulation, mathematical functions, and working with dates, but it also contains more complex functionality around working with files, network streams, or data access.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=34)** Application developers will typically build their own reusable libraries on top of the BCL and use these libraries in their applications as well.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=43)** So you'll see a combination of direct calls from the application down to Base Class Library types, as well as leveraging custom libraries that allow for reuse, and definition of common business objects, for example.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=58)** The Base Class Library used to be the primary library used by all applications and little else was needed, or even available.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=67)** These days, open source libraries, including those built by [[Microsoft]], are available to use along with the Base Class Library to build applications.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=76)** So it's very common, in fact, many of the project templates from Microsoft will create an application and you will start with the Base Class Library as well as these Third-party Libraries added into your application to provide that functionality.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=94)** And next, I want to talk about where you get all of those Third-party Libraries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Software Development]] (1)
> **Env Vars:** bcl (3), sdk (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [NuGet packages](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=0)** - [Man] While the BCL provides a lot of functionality through the various types it contains.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=5)** There are more specialized areas of development that it doesn't address.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=8)** Since .NET code is easily shared in the form of assemblies, or DLLs, many developers have created open source libraries to provide that additional functionality.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=19)** You can plug these into your application, just like your own libraries and leverage the logic or the rules or the functionality they provide.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=28)** Once a library is created, you need a way to distribute it to others.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=32)** This could be as simple as providing the assembly as a download on your website.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=36)** This decentralized approach though is neither efficient, nor secure, and it doesn't address many of the issues that crop up when creating libraries.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=45)** For example, a library can be built to target different versions of .NET.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=51)** So how do you properly distribute the various versions and make it simple for developers to know which to use and how to install it?
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=59)** How do you provide some assurance that the library is from a trusted developer and does what it says it will?
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=65)** That's where [NuGet.org](https://NuGet.org) and the NuGet package manager come into the picture.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=70)** [NuGet.org](https://NuGet.org) is a repository for libraries that provides infrastructure, versioning, library, and developer information.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=78)** A library is packaged with [[Metadata]] and published to NuGet where other developers can download and install it.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=85)** The NuGet package manager is a tool used by developers, both to create these packages and to install them in a project.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=93)** Visual Studio natively supports NuGet for both creating and consuming these packages.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=101)** I won't cover how to build NuGet packages in this course.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=103)** That's something you can find in other courses here on [[LinkedIn]] Learning.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=107)** Most developers tend to be on the consuming side of packages, installing them into their projects for use.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=113)** When you use the NuGet package manager and you install a library, it's automatically installed into your project and ready for you to use.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=120)** In addition, you can easily update packages to a new version or uninstall them if you decide not to use them.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=127)** One of the benefits of using NuGet over simpler methods of distribution is that a package can be much more than a DLL.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=134)** Here you can see a NuGet package expanded to the file system.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=137)** There are several files and folders here.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=140)** If we open this up, this metadata file with Notepad, you can see it's very simple.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=146)** It lists a version, a source, and importantly, the content hash.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=149)** So that we could validate that what we downloaded matched what was published on the server.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=155)** And if we go into the lib folder, you can see we have a number of different folders based on the targeted framework.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=161)** All the way back to .NET 2, 3, 5, and 4.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=165)** This library, Newtonsoft. [[JSON]], also known as [JSON.NET](https://JSON.NET), has been around for a long time.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=171)** And if we go into .NET Standard 2.0, there's the DLL and some XML documentation.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=177)** So you can see, this can get very complicated if we were trying to manage this on our own on individual servers.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=183)** Having a central place to go and download these packages, have this functionality to manage different target frameworks and the security and the versions is extremely helpful.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=193)** The NuGet package models' become mature and popular enough that [[Microsoft]] now ships many of their libraries through this platform.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=200)** Everything from data access libraries to the libraries that make up the [[[ASP.NET]]](https://ASP.NET) web programming framework are now packaged and distributed using NuGet.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=210)** This enables faster, more focused updates to the libraries rather than big bang approaches of an entire new framework every year or two.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=218)** Individual libraries can also be updated independent of the other libraries.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=223)** You can see here on their profile page on [NuGet.org](https://NuGet.org), they have over 6,000 packages and that's 113 billion total downloads of all those packages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[JSON]] (2), [[LinkedIn]] (1), [[Microsoft]] (1), [[ASP.NET]] (1)
> **Env Vars:** net (6), dll (2), json (2), bcl (1), xml (1)
> **URLs:** [nuget.org](https://nuget.org) (3), [json.net](https://json.net) (1), [asp.net](https://asp.net) (1)
> **Prerequisites:** install (4)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** just like (1), for example (1), picture (1)
> **Versions:** 2.0 (1)

#### [Compiling C# to a library or executable](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=0)** - [Matt] We're going to be focused on writing C# in this course, but I first want to touch on using the compiler to get your code to a runnable state.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=8)** We'll start here with this C# class file, we've got the Person class identified in this person.cs file.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=16)** And I've also got a Command Prompt open.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=18)** So, I'm in that same folder.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=20)** If I do a dir, you can see there's my person.cs in there and I'm going to use the C# compiler, so csc, and I'll just pass that person.cs in, I'll tell it I want the output file to be called personlibrary.dll, and then I want to tell it the target, and so the target is library, and I'm telling the compiler build this into a library or a DLL, as opposed to an executable that could run.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=48)** Compiler runs against that file and our parameters and we get an output.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=53)** So, if we look there, we've got our personlibrary.dll down near the bottom.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=59)** If I go back into that Ildasm, okay, and we can pop that open, and see there's our library, and we've got our Person class just like we did before with our properties, fields, all defined for us, that same MSIL that we saw before.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=77)** We'll clear that again.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=80)** Remember, we also have this program.cs, our hello world that we did before that uses that Person.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=86)** So, now we've got two source files and we've got a program that we want to run or an executable.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=93)** So, we'll go back here and pass in person.cs and program.cs.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=98)** Now the out I'll say hello.exe.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=102)** And for the target, I can say winexe or just exe.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=108)** And here, you can see we've got a small problem, now we are getting a compiler error and it's telling us the name console doesn't exist in the current context, so there's clearly something a little different between what we're doing here and what we did previously with Visual Studio.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=122)** Let's just go back here and I'll come and put a System.Console.WriteLine.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=128)** We'll save that.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=131)** We'll come run that compiler again.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=134)** Now the compiler's happy, we should have output, which means we should be able to run hello.exe.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=141)** And you can see we get our output, "Hello from Matt Milner," me, "to you!"
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=147)** Now, the compiler has a lot of advanced options for building your source files.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=151)** Those are just the basics.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=153)** And that's really all I want to show you right now because Visual Studio, that we'll be using to write our code, or other integrated development environments are going to run the compiler for you in the background.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=164)** There's properties you can set on your project to help control that if you need to.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=169)** But now that you know the compiler runs behind the scenes, you've got that understanding, if something goes wrong, where the source might be.

> [!info]- Semantic Content
>
> **Tools:** visual studio (2), command prompt (1)
> **Env Vars:** dll (1), msil (1)
> **Analogies:** just like (1)
> **Speakers:** - [matt] (1)


### 2. Working with Classes, Structs, and Records

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding classes, structs, and records](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=0)** - [Lecturer] When working in a typed language like C# where your variables have types, you're going to spend a lot of time creating and defining those types.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=9)** So that's where we'll start here with the different ways you can define a type.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=14)** That includes classes, struct, and records.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=17)** Before I do a couple things here, I have all of these different types in one code file which isn't how you'd normally do that.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=25)** I'm just doing it here to make it easy for us to see them all together.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=28)** The other is you'll notice down here on line 12, I've got some squigglies under last name and on line 15 under first name.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=36)** If I look at that, it's going to tell me that a non-nullable property must contain a non-null value when I exit a constructor.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=44)** Now this is Visual Studio 2022 using .NET 6 and C# 10.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=51)** And this is different if you're using a previous version.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=54)** So this is a change that now enforces or provides some warnings around nullable reference types.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=62)** We're going to talk about those a bit later.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=64)** So for now I'm going to right click and edit my project file.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=67)** I'm just going to come in here where it says nullable and I'm going to disable that.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=72)** I can save that file, close it, and then those things will go away and it'll stop warning me about that.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=81)** So I'm back now to the behavior you'd see before using Visual Studio 2022, before .NET 6, in case you're using something that's a little bit older.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=91)** And I'll try and show you throughout the course things that have changed, the various versions of C#, and other tools that we use.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=100)** What we've got here, starting on line three, is a standard interface for an IPerson.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=106)** It's got four properties on it, first name, last name, ID, and age.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=111)** And those are using the auto-implemented property syntax, which means we'll have that backing field created for us.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=118)** I'm going to use that interface.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=120)** We'll start by looking at classes.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=123)** When you define something as a class, you're defining it as a reference type, meaning that a variable that points to an instance of this class is pointing at a reference or is a reference to that instance.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=136)** So classes, as we can see, can implement an interface, the IPerson.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=140)** I can also add other properties as I've done here, starting on line 18, to that class.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=146)** So if I'm treating it as an IPerson, that's my variable type.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=150)** Then I have access to those four properties from the interface.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=153)** But if I'm working with it as an employee class, then I also have the additional properties there.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=160)** And you can see starting on line 23, I have a manager class that derives from employee and can implement zero or more interfaces.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=169)** I can only have one base class, but any number of interfaces.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=174)** Those are reference types and those are probably the most common type used to date with C#.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=180)** We also have structs or value types.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=184)** I've defined a struct here called age.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=187)** It's got properties, the date of birth and years old.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=191)** And the difference here is this is a value type.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=193)** Meaning if I have a reference, I have a reference to the actual object.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=197)** And we'll see shortly, as we get into the ways that these different types behave, how that plays out when we're using variables, when we're copying, or passing things to and from methods.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=209)** You can see on line 35, structs can also implement interfaces.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=213)** So they can have properties, they can have methods much like a class.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=220)** And then in C# 9, [[Microsoft]] introduced the notion of a record.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=225)** So here I have a record called customer that implements IPerson.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=229)** Looks very much like a class, and in fact, behaves in many ways like a class, but records are really intended for scenarios where you want to have immutable objects.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=240)** They don't have to be immutable or unchangeable, but they can.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=244)** And they're useful in scenarios where you're using it as maybe a data object.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=248)** So you're passing it between service layers or between application layers, and it's primarily about creating an object with state and passing it around.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=258)** You can see on line 51, records can have inheritance in this case.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=263)** So I have a premiere customer that derives from customer and it adds the notion of a customer level.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=269)** With C# 10, it was released in the fall of 2021 with .NET 6, we also have the notion of a record struct.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=279)** So here we have an order that has an order ID and an order date, and that is going to have the behaviors of a value type, like a struct, but also the behaviors and the capabilities of a record.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=292)** Now, if I come down to the recurring order and I try and derive from, say, order, because I want to just add some functionality to that, you'll start to see that it says the type order in the interface list is not an interface.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=307)** Well, that's because that's how value types work.
>
> **[5:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=310)** If I come back up to my vendor contact, for example, or my age, let's say, I want to do a new struct, say public struct, biological age.
>
> **[5:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=322)** People like to talk about their biological age being different from their chronological age.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=326)** And I'll say I want to derive from age.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=331)** We're going to get that same warning because this is how value types work.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=335)** They can implement interfaces, but they can't have a base class.
>
> **[5:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=339)** They derive from value type.
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=341)** We'll just say, struct cannot inherit from base struct.
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=349)** Just so we keep that in there and I'll comment this out.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=353)** So we've got it there.
>
> **[5:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=355)** So when we're using structs or when we're using records structs, those same behaviors apply.
>
> **[6:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=363)** What you might infer from that is that what this really means is we have record class.
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=370)** So again, in C# 9, that's all that's available is record class.
>
> **[6:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=376)** In C# 10, you have both.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=378)** And so you can specify, or if you leave out the second piece, then it defaults and assumes you have a class or reference type.
>
> **[6:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=388)** Those are the basics of the three different ways you can define types, classes, structs, and records.
>
> **[6:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=394)** And we'll see as we go forward, the different ways that they behave, so you can make decisions about what's the right way to define your type.
>
> **[6:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=403)** Like I said, class has been most common up to this point.
>
> **[6:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=406)** Record being newer is fast gaining a lot of traction with folks building [[Microservices]], building multi-layered applications, and using it for those immutable objects that they need to pass around.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Microservices]] (1)
> **Tools:** notion (3), visual studio (2)
> **Definitions:** is a  (4)
> **Env Vars:** net (3)
> **CLI Commands:** make (2)
> **Warnings:** warning (2)
> **Analogies:** for example (1)
> **Speakers:** - [lecturer] (1)

#### [Defining constructors](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=0)** - [Instructor] With our types to find, we can start thinking about, how other developers or ourselves, are going to construct instances of these types.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=8)** So we can start defining constructors for our classes.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=12)** Go into my Employee class here, we use the little keyboard shortcut, typing ctor and Tab twice.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=19)** Now I have a public Employee, then I'll just add two parameters here.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=25)** String firstName, string lastName, and then inside of the constructor and set the properties.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=32)** So LastName equals lastName, and FirstName equals firstName.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=39)** And of course confirmation, that C-sharp is case sensitive.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=42)** We've got a property name, it's different from our parameter name, simply by the first letter.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=47)** And that now allows me to create an employee, passing in the firstName and lastName, and initializing the object with that state.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=56)** I may have caught down here on line 28 though, that my Manager class, which derives from Employee is now giving me a red squiggly, which will turn into a compiler error, that says there's no argument given that corresponds, to the required formal parameter firstName.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=70)** Essentially, what this is telling me is, before I was using default constructors, with empty parameter lists, but I don't see that here.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=79)** So if I create a Manager, how will I create the underlying employee?
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=85)** The one way to fix that, would be to come up here, use that ctor again.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=90)** Now I have Employee default constructor, in addition to the constructor that I've created.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=98)** And now the compiler's happy, because I can create a Manager, with no constructor or the default constructor, and it can then rely, on the default constructor of the Employee.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=109)** Another way we could fix that, just comment this out for now is, I could come down to the Manager.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=116)** I can add a default constructor, and I can add those same parameters here, or I can indicate that I want to go to the base, and I want to put some values into those parameters.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=133)** These aren't very useful parameters, so it fixes the compiler issue.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=139)** But as we all know, that doesn't mean our application works, it just means it compiles.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=144)** So this is one way to do that, using the base method, to call down into the constructor, for the base class and pass in those parameters.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=154)** And likely what you do is something like this, you'd copy, firstName and lastName.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=161)** You'd use those as parameters here.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=163)** And then when you call the base, now you can pass those in like so.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=170)** So now we've got something that would actually work, would create us a Manager, and on the base class, the Employee would properly, set the first and lastName for us.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=184)** I'm going to pop out to our program.cs here.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=188)** Let's add that into a new horizontal group.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=191)** Let's get both of these on the screen at one time, go back up.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=196)** So we got our employee.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=199)** So if I want to create that Employee, new Employee, I've got the empty constructor, and that all seems to work until we pause, and the compiler catches up and says, wait a minute, there is no default constructor.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=217)** Once you've identified a custom constructor, the compiler doesn't automatically create, that default or empty constructor for you.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=225)** So this is invalid.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=226)** So now I need to say, firstName and lastName in my constructor.
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=236)** And then I can do a Console.WriteLine.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=239)** I can say something like From I can do e.FirstName, hello world, right.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=250)** Now I can use that object that I've created, and work through it.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=256)** I can also change this to a Manager.
>
> **[4:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=260)** As a Manager derives from Employee.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=263)** So I now have an Employee variable that points to a Manager.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=266)** I've got the same constructor type to find out my Manager, the firstName and lastName.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=271)** So we're all good there.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=272)** And being able to create that instance, treat it like an Employee.
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=276)** So if we use our IntelliSense, we'll see we've got StartDate and ShiftStartTime, and all the Employee properties, but we don't have the Manager properties because again, the variable is of type Employee, that's how we're treating that variable.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=297)** One last bit here, let's go back up to our Employee.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=300)** We've got a number of different things here, that we can provide.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=305)** So if we want to set that ID, so maybe we'll do a new System.Random.
>
> **[5:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=310)** We can pass in some values here, if we want to.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=313)** We can see in the IntelliSense, we can pass in a seed value.
>
> **[5:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=318)** We'll just end that and we'll do Next.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=321)** And we're going to pass in then a range.
>
> **[5:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=324)** So we'll say one to 10, to set that ID.
>
> **[5:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=328)** So because we're in the constructor, we can initialize any of the state.
>
> **[5:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=331)** We don't have to just initialize what was passed in.
>
> **[5:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=334)** What if we wanted to let somebody come in, and pass the employee ID?
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=338)** So we could say int empID and then down here, when we take the ID, we could pass that in.
>
> **[5:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=346)** So that's pretty standard, but I want to make the employee ID optional.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=353)** So I could just put a default value there.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=356)** Notice we're still happy down here, when we're creating the Manager, I change this back to an Employee.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=362)** So he's in the Employee constructor directly there.
>
> **[6:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=365)** You can see it's happy, but if I want to come in and pass that integer, I can pass in that employee ID as well.
>
> **[6:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=375)** And you might be thinking, well, can I do something like this?
>
> **[6:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=380)** new System.Random.Next let's say one to 10, put that in there.
>
> **[6:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=387)** Let's get this all down on the next line so we can see it.
>
> **[6:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=392)** I see we get a compiler error, that says the default parameter, must be a compile time constant.
>
> **[6:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=398)** So we can't create this random and pass it in there.
>
> **[6:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=403)** but we can make that optional, so you can pass it in if you want.
>
> **[6:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=407)** But if you don't, we've got a default value for it.
>
> **[6:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=410)** We can do the same thing, for firstName or lastName as well.
>
> **[6:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=414)** So we've got constructors, we've got base class constructors.
>
> **[6:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=417)** We can call into from the derive types.
>
> **[6:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=419)** And we have optional parameters, that we can use inside those constructors, as we initiate the objects.

> [!info]- Semantic Content
>
> **Code Identifiers:** firstname (8), lastname (8), empid (1)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Object initialization](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=0)** - [Instructor] Well, you may quickly find, if you're not already familiar with it from your programming experience, is that defining constructors that meet everyone's need can be kind of challenging.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=10)** You add the parameters you think people will use, but it's not exactly what they want.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=15)** Rather than creating 10 or 15 different constructor options we can use these default parameters and really if we're going to do this correctly we should probably make this the employee ID property on our employee instead of the ID and we'll just fix that while we're here.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=32)** But we've got all these other properties, so we've got age, we've got the employee ID, start date, shift start time, all these different pieces.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=40)** So one of the things we can use in C# is called the object initialization.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=45)** So rather than do the employee this way, I can come in and I can use curly braces rather than parentheses and now I can put the property name in.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=57)** So I can say first name equals Matt, last name equals Milner.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=64)** And I can specify any of the properties that I could set on this object right here in this initializer.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=71)** So you can do that employee ID, let's say it's 75 maybe we have that on hand.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=76)** Maybe the start date equals new date only, and we can pass in this year, say they started in January,
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=91)** another closing curly brace and I've initialized that object but it's given me an error.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=99)** And again, it's that one that's basically saying, well, look, I see, you're trying to initialize all these things but that means I need a default constructor.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=107)** That's why I commented this out, come back and uncomment it so we have our default constructor and that gives you a little clue about what's happening here.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=116)** When we use the curly braces and we do the object initialization, the default constructor is going to get called and we're then going to initialize or set all these other properties.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=127)** So this is a shorthand syntax for us, makes it easy for us to create this all in one go.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=132)** It's very similar to creating the employee and then individually calling all of the property set methods on it.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=139)** This is an example.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=140)** Let's come in here then and in the default constructor, we will set the ID equal to let's say five.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=147)** And we come back out here let's go ahead and we'll say from that first name, employee ID and so we'll do e-ID.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=161)** I probably shouldn't call it employee ID, that's confusing we'll just call it ID is hello world.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=166)** Now, if we run this, it'll compile, it'll build our executable and run our console application.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=177)** You can see from Matt ID five, hello world.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=180)** So the default constructor gets called and then our object initialization kicks in down here to set those other properties.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=190)** You can mix and match the constructors and the initialization.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=195)** So based on what we saw, this is the equivalent.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=199)** We could also come in here and do Matt, Milner, 75 that's our constructor that takes those three items.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=209)** We can get rid of this, but we can still initialize the start date with the initialization syntax.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=215)** So you get the benefit of simplified constructor that maybe gets you most of the things you want to set and the initialization syntax that allows you to set those additional properties all in one go there.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=230)** We've been working with our employee, which of course is a class and a reference type, what about an age?
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=237)** What if we come into the age and we specify our default constructor, we get a little bit of a warning that says, this is okay you can create a default constructor but because this is a value type, you're going to have to assign a value to age birth date and age years old inside of here.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=258)** So if we want to do that, we're going to have to come in here and say, all right, I want a date time, DOB, and I want an int years and now I can come down I can say birthdate equal DOB and I can say years old equal years and that makes it happy.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=282)** 'Cause again, it's a value type once we get it created, we have a variable then we're going to want to hold that value and so when it gets created, we have to initialize those properties.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=297)** Now for records, same thing we can come in, get to define our constructor,
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=308)** nothing changed there, that's just like our default.
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=311)** We could do the same thing that we did up top with our string.
>
> **[5:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=315)** We'll just do first name here just to make it easy.
>
> **[5:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=318)** (keyboard clacking) You can see we've got that initialization syntax works there.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=326)** And it's our premier customer that derives again, same issue because these are record classes it now no longer has a default constructor in that base class to call when we create a premier customer.
>
> **[5:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=340)** So now that we've gotten rid of the auto created constructor put in a custom constructor, we have to put that back in in order for our derived classes or derived record classes to be happy.
>
> **[5:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=354)** Construction and initialization, you can use them independently or use them together to create and initialize those objects so they're ready for you to use.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (8)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** dob (2)
> **Analogies:** similar to (1), just like (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Initialize only properties](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=0)** - [Instructor] We've talked about different ways to initialize your objects.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=4)** We want to go back to our properties here.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=6)** As we get into a pattern much like you see here, where I have just an auto implemented property with a get and a set.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=14)** There are different options for what you do there.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=17)** If we look at our PremiereCustomer, you can see I have a CustomerLevel and I have a get, but I also have an init, meaning this can only be set with the value changed when initialized, what that looks like is if I come down here, we try and create one of these.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=37)** So I'll do PremiereCustomer = new PremiereCustomer(), and I've got only an empty constructor I can do FirstName = "New Customer".
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=55)** And now if I try and do pcust CustomerLevel = two, say that's going to give me a value.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=63)** I'm immediately getting compiler warnings that say that's an init only property.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=68)** You can only set that during initialization.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=73)** So what does that mean?
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=74)** Well, I could just come in here and do a constructor that takes a byte and that byte's going to be my level so I could do byte level and then I could set the CustomerLevel = level end there.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=89)** And now when I create that PremiereCustomer, and pass in the two, that's happy and we could even do a WriteLine so we could say the pcust FirstName has level
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=109)** oops, missed our double quotes there.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=114)** I got a little carried away.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=115)** So we've got pcust FirstName has level pcust CustomerLevel
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=124)** we've got that.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=126)** Now again, if we run that with Control + F5, skip the debugger to speed it up.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=134)** You can see we've got New Customer has level two.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=138)** So that's one way to do it is to create the constructor.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=141)** The other of course would be to continue to have a default constructor again I've gotten rid of the default, by creating custom one.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=150)** So I'll put the default back in and I could change this now to use those new CustomerLevel = two.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=160)** And again, that makes it happy because I'm initializing the object and I'm setting that value.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=167)** I'm just going to take that and copy it.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=169)** And we'll put another one up here just so we can see both we'll comment that one out for reference.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=180)** To init only allows us to do that.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=182)** Now another option, let's go up here back to our Employee, for example, and I showed you the init on Records, because as I mentioned, they're often used as immutable objects, and that's a way to do that.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=195)** If you set your properties as init only then you allow for that sort of a pattern where when you create the object, that's when you can set the state.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=205)** And then after that, you can't change it.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=208)** So we look at our Manager, we've got this constructor here, let's put a method on here.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=213)** I'm just going to see public void SetReports.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=216)** It's going to take an int numberOfReports, and then I can come in and I can set NumberOfDirectReports = numberOfReports.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=230)** Now in and of itself, this isn't very interesting, one of the things we can do is change that to a private set.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=239)** So now I come out here into our program.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=244)** I say I want to create a Manager = new Manager got first name and last name, we give them something very original, like manager boss.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=256)** Now, if I try to set the NumberOfDirectReports, say they've got seven, I get an error.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=264)** I can't use it because it's private.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=267)** That means it can only be set from within that class.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=272)** What I can do is I can call that method.
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=276)** I can say SetReports, pass the seven and that's happy.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=284)** So you can control the access or the accessibility of the get and set or use the init to change which pieces of your code have the ability to modify that state in your objects.

> [!info]- Semantic Content
>
> **Code Identifiers:** numberofreports (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Cloning and copying objects](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=0)** - Let's look at how these different types work.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=3)** So reference types or classes, structs, value types, and then the records.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=9)** Got a method here, just back out of my program.cs, called classes, and I'm going to create an employee, I'm going to initialize it.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=17)** So I've got a name.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=18)** Notice the age here, got a birth date back in 1971, means 50 years old with an ID of one, and then here's where we start working with those reference types.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=29)** So on line 22, I define another variable called other and I set it equal to me.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=37)** Then I change the first name and the age on the other variable.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=42)** Now what's going to get written out here on line 27.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=45)** If I read out me.FirstName and age years old, as well as other first name and age years old.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=54)** So think about what's the original variable me and what's happened now that I have another reference, this other that points to it.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=63)** So let's run that quick.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=65)** Let's see if he got it right.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=66)** Let's look at the first couple lines here.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=68)** It says Bizarro Matt is 39, but Bizarro Matt is 39.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=75)** So because it's a reference type, this other variable that we created is still pointing at the same memory.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=81)** It's still pointing at the same object as me.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=84)** So when I make changes to it, like the first name and the age, I'm changing one single object, even though me and other, both point to it.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=92)** So that's a reference type.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=95)** Now, probably given this next bit away.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=98)** The other thing we're going to do then is pass this reference type into a method and manipulate it in there.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=104)** So I have this method called ChangeName.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=107)** I'm going to call that passing in other, that second reference, and then afterwards, I'm going to print out first name, last name and how many years old.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=117)** So in the change name I pass in the person, I change the last name, and then I write out in the method what their first and last name is.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=127)** So I'm making a change to the object itself and then on line 41, I'm actually going to change the reference, I'm going to change what person points to.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=136)** So now I'm saying person is a new manager, manager Milner with a different birth date, making them 31 years old and I'm going to write out again in the method.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=147)** So we're going to see what is the person in the method, and then what is the person after the method gets executed?
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=156)** So again, if we look here and say, we got going into the method, it's Bizarro Matt 39, and then in the method, it's Bizarro Matt unknown.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=166)** So we've changed that last name.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=168)** As you can see there on line 38 in the background, then we changed the reference in the method.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=173)** So now person is this new manager that now prints out manager.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=178)** Coming back out of the method, we're printing out what that other variable points to.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=183)** Notice it is Bizarro Matt unknown, still 39.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=187)** So now we've come back out of the method and everything's back where it was.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=192)** So when we passed that reference type in by default, the two things to recognize are that last name changed inside the method, but it was still changed when we came out of the method.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=203)** So that person that we passed in, that reference to an object was able to be manipulated, The last name was manipulated.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=211)** when we changed the reference, however, of person to a manager that didn't persist outside the method, that's only local to the method.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=224)** Now, if we wanted to change that, we can come up here, We can put the ref keyword in front of there, and we do it on the method as well.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=233)** And now we're indicating that we want to change that behavior, that if the reference changes, we want to change the object It's pointing to.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=247)** got another place where we're using that.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=249)** So I'm just going to comment that out for now, so that we'll get this working and we'll come back to that.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=255)** So now we run it, Bizarre Matt going in.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=259)** Inside the method, again, it's Bizarro Matt unknown, after the change in the method it's manager and then when we come back out, we still have manager Milner is 31.
>
> **[4:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=275)** So by using a ref keyword, we've set on passing new reference type.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=278)** If you change the reference in the method, that's going to persist outside of the method.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=283)** I'm allowing you to change that.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=285)** Without it you can only change the object this reference points too, but not the actual reference.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=292)** To do this, we'll copy, we'll put a comment there, and then we'll paste.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=300)** So we've got a working copy here, did the same thing up here, copy, paste and then we'll get rid of the ref and that'll fix us up for the next bit here.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=313)** So that is classes or reference types.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=317)** What about our structs?
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=320)** Well, let's collapse, and collapse this, so we can go to our structs.
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=325)** Here I'm going to create an age, again, this one's 50 years old.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=329)** I'm going to set another variable called anotherAge equal to that, and then I'm going to change anotherAge, so the YearsOld is 39, and I'm going to write out the two, just like I did before so we can see what happens.
>
> **[5:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=345)** So we look at that my age is 50, but I changed it to 39.
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=349)** All right.
>
> **[5:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=350)** So I've got myAge YearsOld and another.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=353)** That's different from what would happen with the reference time.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=356)** So anotherAge, even though we set it equal to myAge, they don't point to the same objects.
>
> **[6:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=361)** It's got a new object that when we changed it, does not impact the myAge and that's a value type.
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=370)** Likewise, if we go in and call a method here, this AgeBackwords, look at that, going to just take the startingAge and the number of YearsOld, you can see we can change that by just doing a little math and we'll write out the age and the method and then we'll write out the age up here as well.
>
> **[6:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=389)** So we started at 50, went to 39 in the method we're 34, but when we come back out, we're back to 39.
>
> **[6:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=396)** So we're getting copies when we do assignment.
>
> **[6:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=400)** So anotherAge = myAge on line 57 is a copy, and when we pass it into the method, we get a copy that's local to the method as well, but the changes don't persist outside the method, and so you might want to come in here and do something like ref anotherAge, and then you come back here and do ref, and you can see that behavior is probably what you'd expect from what saw with the reference types.
>
> **[7:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=428)** Now we're not passing in a copy, we're passing in the actual object into the method, so when it gets manipulated inside and comes back out it persists, and then finally with records, they're going to work a lot like the structs or the class, depending on how you define them.
>
> **[7:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=446)** Was it a record class or a record struct?
>
> **[7:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=448)** In terms of these value type versus reference type pieces.
>
> **[7:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=452)** What I do want to show you here is when we have a record and we want to create another record from it, we use this with construct.
>
> **[7:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=462)** So on line 82 I'm saying, PremiereCustomer pc2 = pc, try to find above, with, and then I include changes to that.
>
> **[7:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=473)** So I'm changing the customer level and the last name for the records.
>
> **[7:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=478)** Otherwise they're going to work just like we saw.
>
> **[8:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=482)** We can catch that to a person here in order to get that output.
>
> **[8:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=486)** If I go up here and undo Records and we'll leave Structs.
>
> **[8:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=497)** So we can see that in the background.
>
> **[8:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=500)** Customer one has a level of 1, customer two has a level of 2.
>
> **[8:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=503)** Again, it was a copy.
>
> **[8:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=506)** We're creating the second one with the state of the first one, plus some modifications, and then we do the changes inside the change name, is customer unknown, after make the reference change its manager, and when we come back out, it's still customer unknown.
>
> **[8:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=521)** So we haven't done it by ref in this case, we didn't use that ref keyword on the parameters, so the state can get changed, but the reference does not, hopefully that helps make some sense of that whole reference type versus value type.
>
> **[8:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=536)** You can see why generally people use classes to define things.
>
> **[9:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=540)** Structs are very specialized for certain things that you want, and records, again, now have the flexibility to behave either as a value type or a reference type.
>
> **[9:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=552)** But we also have some specific behavior for records, like this width keyword to help us copy one to another, with small modifications to state.
>
> **[9:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=563)** So the original object doesn't change and the new object has most of the state or some of the state, plus any changes we make.

> [!info]- Semantic Content
>
> **Code Identifiers:** anotherage (5), myage (4), startingage (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (2)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)

#### [Equality comparisons](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=0)** - [Instructor] As we look at equality and comparing objects, I'm going to simplify the types that we're going to work with here.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=6)** I've created three different implementations of a point.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=10)** I've got one, that's a class here.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=11)** The CPoint has an X and a Y property.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=14)** I've got an SPoint for the struct again, X and a Y property.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=19)** And then I've got a record point.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=21)** And notice here, I'm using a shortened syntax for defining a record and almost looks like a constructor, but I'm creating a record called RPoint and it's going to have properties, int X and int Y as well as a constructor that looks like the signature that takes in the int X and Y.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=40)** So with those three types, we switch over to the program.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=45)** You can see I've got classes, structs and records.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=50)** For each, I'm going to create a point with a value, and then I'm going to assign that point to another variable.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=57)** So you can see on line 11 and 12 here, create an instance of a class point p one, and then assign that to p two.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=64)** And then I compare the equality on line 14.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=68)** Then I'll create a third point with the same state or same values for its properties as the first one and then we'll compare one to three.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=78)** So we do that for the structs.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=79)** We do that for the records as well.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=83)** And you'll notice in the structs I've have commented out these WriteLines.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=87)** And if I come back in and put them back, I get the red squiggly, the compiler error that tells me this operator, the two equal signs can't be applied to the structs.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=99)** So by default, we don't have that equality comparison.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=103)** Now, if I switch back over here to my types, show you another piece of functionality, I'm actually going to define what that operator should do or how it should behave for my type.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=116)** So now I've got a public static pool operator and then the actual operator, and I've done both feet equality and the inequality here.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=125)** So we get two points passed in.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=127)** I'm going to go ahead and check that X equals X and Y equals Y on those two.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=133)** And for the inequality, that one or the other is not the same.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=139)** What we'll see for the records and classes is the default behavior of that equality operator.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=145)** And for the structs, we'll see what we would expect with our quality operator.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=150)** And it would be the same if we came in here and did p one equals p two.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=158)** So that works on our value type as well.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=160)** And that would do our value comparison.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=163)** So we're just providing that operator overload or operator syntax to allow us to use this syntax, to check the comparison.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=172)** So if we try this now again, each follows the same pattern, classes, structs and records.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=177)** We have a point, we assign new variable to that same point.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=180)** We check the equality and then we create a new variable with the same state as that first.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=188)** Control + F5 here to run this without debugging.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=192)** And we'll see for classes P1 equals P2 is true.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=197)** P1 equals P3 is false.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=200)** So we see the nature of equality comparisons by default for a class is to compare the references.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=206)** P1 and P1 point to the same object, therefore, they are equal.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=212)** P1 and P3 despite having the same state, the X and the Y are the same, they don't point to the same object so it's false.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=219)** For structs p one p two equal p one p3 also equal because they have the same state.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=226)** And for the records, we see that same output records follow that value equality by default.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=233)** So their operator for the equality check or inequality check is value-based not reference-based.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=241)** One last thing we could change just to check that is we could take p two, and we could say X equals 10.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=250)** We'll run that again, and you'll notice p one and p two are still true because they still point to the same object.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=259)** And if I checked p1.X, it would now be 10.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=263)** We've changed the same object, so they both still point to the same object that reference check is true.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=269)** And of course the second piece p one and p three is still false.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=274)** So that gives you a little bit of understanding of how the equality works.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=278)** For reference types it's reference equality.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=281)** For value types, structs and records, it's a value equality.
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=287)** And as you saw, we can change that behavior.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=290)** So here I created operators for my point, my struct, to support the equality and inequality operators.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=299)** You could do the same thing on a class.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=301)** You could implement that logic and make it work the way you want it to work.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=305)** You can override the dot equals method.
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=308)** And in fact, I'm getting a little squiggly here telling me I probably should override the dot equals method for my struct to make sure the behaviors the same as what happens if I use the operators.
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=320)** So you have the ability to change that default behavior, but it's important to understand what it means when you're comparing one object to another.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** as you saw (1)
> **Speakers:** - [instructor] (1)

#### [Defining abstract classes](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=0)** - [Instructor] We've seen how to create types and even some derivation and interface implementation.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=6)** I want to shift to talk about abstract classes.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=9)** So I've still got my IPerson interface here, but I've simplified it, with just first name and last name.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=15)** And I've got an abstract class called Employee.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=18)** Because it's abstract, I can't create an instance of the Employee class, but I'm defining it as a base class for others to implement.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=28)** So we've got our properties from the interface.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=30)** We've got a StartDate that's a property.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=32)** And then we get into the abstract part here.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=35)** Now I have properties and I have methods.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=39)** And if you recall, when we do properties that get and set, though, we often just simplify them like I've done here, actually result in methods.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=47)** We have a get EndDate and a set EndDate method.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=50)** So those, just like regular methods, can be marked as either virtual or abstract.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=56)** Now abstract, as we see here for the ProcessPayroll method on line 24 means that this class, the base class does not define an implementation, but it requires that any derived class does provide that implementation.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=72)** So ProcessPayroll is a method that any class that derives from Employee will have to implement.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=79)** Then we have the Terminate method, which is a virtual method.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=83)** It does have an implementation here.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=85)** That's a default implementation from the base class.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=89)** And because it's virtual, that means that a derived class can either override that or can create a new instance.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=98)** Then we'll see the difference with those two.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=100)** And finally, I've just got IsActive as a regular method on here.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=104)** It's not marked as virtual or abstract, which means I can't override it, but I do have some other options.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=111)** We look at a derived class, like ShiftWorker here.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=114)** So we've added a ShiftStartTime property, and then I have an override of the EmployeeId property.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=123)** It's very simple implementation, just returns one in the get, but because EmployeeId was marked as abstract, I have to provide an implementation of that property.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=134)** The ProcessPayroll, remember, was also abstract, so I have to create an implementation of ProcessPayroll with the same return type, parameters, and I use the override modifier here to indicate that I'm overriding that from the base class.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=149)** And you'll notice then the IsActive is just that regular method in the base class, and so I've put the new modifier on it because I can't not put a modifier on it, or I have a problem because the base class has an IsActive method, and this while it's just a warning is telling me, "You're kind of hiding that, you want to be a little more explicit and say, you're defining a new implementation of that method."
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=180)** I could, in here, called out into the base class because that methods available in the base class, it's accessible to me here, but I'm saying I want to create a new implementation if I have a ShiftWorker.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=191)** So let's go look at the ShiftWorker in action here.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=195)** Important note on line 4, my variable is an Employee.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=200)** The object is a ShiftWorker, and we're going to change that up in a bit, but that's important, so I have a ShiftWorker with a name, StartDate and ShiftStartTime.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=211)** And then I'm going to call those methods.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=213)** ProcessPayroll, Terminate, IsActive, so we can see the output.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=218)** Remember ProcessPayroll was the abstract method that has to be implemented.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=223)** Terminate was virtual, we didn't implement it in the ShiftWorker.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=227)** And then the IsActive was a regular method that we did provide a new implementation in ShiftWorker.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=234)** So if we run that, we'll see the output, let me see the ShiftWorker payroll, that's what we would expect.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=243)** But then when we call Terminate, Employee terminated.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=246)** Again, we didn't provide an override for that, so it's just using the implementation from the base class.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=252)** Where it gets a little interesting is when we call IsActive, it's calling the Employee implementation of IsActive, not the ShiftWorker, and that's because that variable is of type Employee.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=266)** If I copy this and I make the variable also a ShiftWorker that changes things a bit, we still get the payroll from the derived class.
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=276)** We still get the termination from the base class because we don't have an implementation in the derived class.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=282)** But now because the variable is the derived class, we see that implementation gets called with our new implementation in that class.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=293)** I'm going to go ahead and comment this out just to make it a little easier for us to follow along.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=300)** We'll uncomment this, we're going to work with a Manager.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=303)** So if we go look at the Manager type here that also derives from Employee.
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=308)** Notice again, we've got the override for the EmployeeId because that was abstract, slightly different implementation.
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=316)** So maybe we have different systems where we load these objects from and how we get an ID.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=321)** And then I have an override again for ProcessPayroll, which I must because it's abstract.
>
> **[5:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=327)** And here I've chosen to override the Terminate.
>
> **[5:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=330)** But now I should see the Terminate operation get called at the Manager level and notice it also on line 75 calls down to the base.
>
> **[5:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=340)** So if we terminate a Manager, we would expect to see Manager terminated and then Employee terminated.
>
> **[5:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=347)** The pattern back over here is the same.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=348)** We create a Manager, we're going to call those three methods.
>
> **[5:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=352)** Notice again, the variable on line 20 is of type Employee.
>
> **[5:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=359)** So now we call the payroll, we see Manager payroll.
>
> **[6:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=363)** Great. That was our abstract method that we implemented.
>
> **[6:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=366)** When we call Terminate, even though the variable is in Employee, we see that the Manager implementation of Terminate gets called, it calls down to the base class.
>
> **[6:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=377)** So in this case, because we overrode that, it doesn't matter that the variable is an Employee.
>
> **[6:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=383)** So that's the difference between override and new.
>
> **[6:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=387)** When we override that base implementation, we're going to see, even when the variables of type Employee or the base class, you see the derived class implementation when the actual object is that derived class.
>
> **[6:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=402)** And we didn't replace the IsActive, so that of course is coming from the base.
>
> **[6:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=408)** Let me just change this to reiterate that behavior.
>
> **[6:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=413)** We'll change the Terminate now to new.
>
> **[6:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=415)** And again, because we're using an Employee variable when we use that new, instead of override, now when we terminate, it's simply the Employee terminated, we don't get the Manager implementation of that method.
>
> **[7:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=432)** Now, if we change this to Manager, we would because now the variables of type Manager, the new method, or the new definition of that gets called.
>
> **[7:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=445)** So those are the basics of using an abstract base class.
>
> **[7:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=450)** We can look back up at our Employee, again, we've got virtual and abstract, which are slightly different ways to define methods.
>
> **[7:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=458)** Either they must or can be implemented in the derived classes.
>
> **[7:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=463)** And those again, can be applied to our properties because those are going to map down to get and set methods where applicable.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (2), is an  (2)
> **CLI Commands:** make (2)
> **Warnings:** warning (1), important note (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Creating static classes](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=0)** - [Narrator] One last type I'd like to talk about is the notion of a static class.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=6)** We've had instance classes with instant state.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=8)** We can also have static classes.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=10)** I come out here and add a class.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=14)** I'm going to call it Constance.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=19)** Let's see, yes.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=21)** We've got a bunch of stuff here that will clean up a little bit, and I'm not going to make that internal, but I am going to make it static.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=32)** What's special about a static class.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=35)** Well, I'm really defining a class that I'm going to be able to use without creating an instance of it.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=40)** In fact, I try and put a constructor on here.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=44)** I'm going to get a warning telling me I can't create instances of a static class.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=49)** What I can do is make a static constructor.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=54)** And what that means is, when this is first used, when it's first initialized, this constructor would get called.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=60)** Notice, there's no public private accessories on it.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=64)** It's going to get called.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=65)** You can use static constructors on instance classes.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=69)** So if you want to have some constructor logic that happens and set some static state, you can use this on regular classes as well.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=78)** So maybe I have a static field or static state that I want to initialize here.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=84)** So I might say private static string, connectionString, as an example, maybe you've got something there.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=94)** And so you want to initialize that once and have it available.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=97)** I might be able to do connectionString=Server=that whole bit.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=104)** And maybe you're loading this from config or you're otherwise getting this and setting it up once.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=109)** You want to do that.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=110)** And then for the life of the application, you want to have that constant or that static value set.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=117)** Another common place where you may use a static class is for actual constants, like my class name implies here.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=125)** So perhaps you're going to use it for a configuration key.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=128)** So you might say something like public static string might do the config, and that might be something like SERVER_NAME= .
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=138)** And then you could set up whatever that configuration key is.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=142)** So maybe it's TargetServer and you're going to load the value from there.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=146)** So the static value is the key that you're going to look up.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=150)** It's static, it's available now as a string, the other thing you can add is readonly.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=155)** It really just means that we're going to identify this as having to be initialized when we construct this.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=162)** You'd also, instead of static, you can say const string, maybe we'll do a different one, which is something like database name.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=172)** And so what's the key for that in our config DatabaseName.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=179)** Both of these will work.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=180)** Because it's a constant, it's treated a little differently.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=183)** This is something that's going to get optimized by the compiler, may actually impact other libraries if they use this.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=190)** So use const sparingly for things that you know, actually aren't going to change.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=195)** Whereas you can use the read only static for things that are primarily going to stay the same, but may change over time.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=202)** And of course, for helper methods, you can use statics.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=205)** So you have a static class.
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=207)** We can't put instance methods on here.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=209)** So if I tried to come in here and say public int GetRating, something like that, I put an implementation on here, return 5.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=221)** That's going to give me a warning saying you can't have an instance method like this on a static class, but I can't have a static.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=231)** So maybe I'll make this a static method.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=233)** It's going to return me a DateTime and I'll have it called GetDateTimeFromDateOnly.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=243)** And then it'll take a (DateOnly) as a parameter, the input.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=249)** And now I can return something like a new DateTime, and I'll use that input year, input month and input day to get me the values I want in return that object.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=263)** We go out to our program here to use that static class, Constants. you'll notice got some IntelliSense here with the stars.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=273)** We look, I have the CONFIG_DB_NAME and the config server name.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=278)** The little icons or glyphs are slightly different 'cause one was a constant, one's a static field.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=283)** And I have my GetDateTime from DateOnly, and My Property.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=288)** So without having to create an instance of this, I could go in and get the Config.dbname.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=294)** That's going to be a string.
>
> **[4:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=296)** So string db= Constants.CONFIG_DB_NAME.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=301)** These aren't the only ways that you can use static classes, but these are some common patterns that you'll see that make static classes useful or these static values, constant values, as well as static methods that you can use simply in your applications.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Env Vars:** config_db_name (2), server_name (1)
> **Code Identifiers:** connectionstring (2)
> **Warnings:** warning (2)
> **Tools:** notion (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Expressing equality](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=0)** - [Instructor] Hopefully you didn't spend too much time on this one, because what we want to do is change our type definition in order to allow it to be compared or check the equality by value.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=12)** And we can do that by changing from a class to a record type.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=16)** If I go down now and test my code, even though we've got some red squigglies, we should be fine.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=21)** And we get a true.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=23)** Now, one of the other things you may have tried is to change, not to a record, but a struct.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=28)** And if you tried that, you probably saw something along these lines, saying the operator cannot be applied to operands of type, answer and answer.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=37)** If you're doing those structs, then you can override that equality.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=41)** But the simplest way is for us to use the record type that is compared by value.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=48)** So when we create A and B, our variables down here, and they're two different answer instances, they're compared based on the values of their properties, name, age, hire date, and not whether the two variables, A and B, point to the same instance, as they would with a class.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 3. Organizing C# Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Using namespaces to organize code](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=0)** - [Instructor] Now that we've started creating types and using types, it's important to understand how namespace has come into play.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=8)** All .NET types, belong to some sort of namespace.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=11)** If you take a look here at our Constants.cs file at the top... I'll just collapse my class definition here.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=18)** You can see that we have a namespace [[LinkedIn]].Essentials wrapping that class definition.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=25)** And this is the traditional way that you would define the namespace that your types are contained in.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=32)** In the middle file are defining types where we have our person, and our employee and manager.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=37)** Notice at the top, we have namespace, LinkedIn.Essentials, and a semi-colon.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=42)** So, the real difference here is the first example of top.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=45)** You wrap the classes or types within the namespace.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=49)** And in the second in the middle, you simply declare the namespace at the top with the semi-colon.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=55)** That one, as you can see from the comment is new in C# 10.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=59)** And it essentially came about because most people define one type per file.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=65)** And even if they don't, all the types in a given file are probably in the same namespace.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=70)** That's part one, we've declared the namespace that our type belongs to, but the other piece, and we've skipped over this a bit in our earlier examples shows up in the bottom pane in our Program.cs.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=84)** Here, I've got on line two, a namespace declaration saying I'm using the LinkedIn.Essentials namespace.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=92)** What that means is bring that into scope and any types that are defined in that namespace should be available without having to be fully qualified.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=102)** So, our constants that we used before on line four shows up and works just fine.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=107)** Now, if I comment this out, we'll get an error.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=112)** And we saw this in an earlier example, when we were using the command line compiler.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=116)** We got an error that it couldn't find system.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=118)** So here it's saying, well, I don't know what Constants is, it's not currently in scope.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=124)** But I can copy LinkedIn.Essentials here, paste that at the beginning, get rid of the semi-colon, and do a dot and now it's happy.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=136)** And this shows that the type name is actually made up of both the namespace and the type name.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=143)** So, you can think of this as the fully qualified type name for our constants type, the LinkedIn.Essentials.Constants.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=152)** If we go down to the Program.cs, and I try and do a Console write line.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=157)** They all write out that DB string there.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=160)** This is where we saw that problem before, because Console is actually in the system namespace.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=167)** Normally, I would have to do something like this.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=171)** Let me see, we don't have any problem with that.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=173)** In fact, they can also come down and use System.Console.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=179)** It does tell me then by dimming or graying out line three, that I don't need that using statement because I'm fully qualifying it.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=187)** What's happening here, again is something new in C# 10, and .NET 6 where we have namespaces that are automatically in scope.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=195)** So, there are default namespaces defined and they'll vary based on whether you're building a Console application or a web application, but you can get a reference to all of those different namespaces that are included by default when you compile using visual studio for example, in the project system.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=215)** The key thing to understand is that in order to use a type, you either have to use a fully qualified name like I'm doing on line five in the bottom, or you have to include the namespace with the using statement, and then you can use the type names themselves.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=230)** And the whole point of namespaces is to help make type names unique so that my person class or my employee class doesn't clash with an employee class in a library that I'm using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (5)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** net (2)
> **Tools:** command line (1), visual studio (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Referencing .NET assemblies](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=0)** - [Instructor] This notion of namespaces and fully qualified type names is hopefully easy to grasp now in this single application, but let's make it a little more complicated by going to our solution and to choose to add a new project.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=14)** I'm going to add a library project here.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=17)** So it's going to be a DLL that we have as part of our solution.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=22)** It's going to be a library for our types.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=25)** So we'll call this [[LinkedIn]].Essentials.Types.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=34)** And we'll add that in choosing to use the dotnet 6.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=41)** And now that we've got that project, let's go ahead and bring these types down here.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=45)** So I'll drag the defining types and the constants over there, we'll clean up the default class one.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=57)** And then we'll remove those both from this project or from the application itself.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=65)** So now we've got our program.cs.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=67)** That's in our little console application and notice we're starting to get an error here saying I don't understand this LinkedIn.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=75)** Even if I go up here and I uncomment the using again, it says, I don't know about this LinkedIn.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=83)** It turns out that namespaces aren't enough in order for me to use that namespace, I have to reference the assembly that contains it.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=94)** The simplest way to do that in this scenario is to go right click on my project.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=99)** I can add a project reference and then it'll show me my projects and I can select that particular project.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=107)** You'll notice I have other options here.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=109)** I can go browse around for assemblies or those DLLs that are round and even go back and find some old COM objects that are available.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=119)** Shared projects is another type of project.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=121)** But for our example, we'll use this one right here.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=125)** And now it's saying great, now I understand the LinkedIn essentials.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=131)** I'm having a little problem with the constants and we're going to talk about that shortly, but now I understand the namespace.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=139)** Again, it's grayed out on line two because I'm using a fully qualified name here.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=144)** If I get rid of that, now my LinkedIn essentials, still grayed out because of this problem.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=151)** So let's say we come in and we do something like this employee e equals new manager.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=158)** We can do e.FirstName equals hello, and then we could write out our e.FirstName.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=170)** These types, turns out are all available from that referenced assembly.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=175)** I can see the employee, the manager type.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=177)** I have access to all of those because that namespace is now in scope and I've added a reference to the assembly.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=185)** With the Csharp Compiler, we looked at doing that on the command line, you can add references in.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=190)** So what you're essentially saying is compile these Csharp source files, but know that there are some types I'm using that are in these referenced assemblies and the compiler then knows where to go and look for those to understand how to compile your code.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=205)** Another common way that you're going to add a reference is you're going to use NuGet, as I mentioned before.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=211)** So if I come to the project, go to manage NuGet packages.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=215)** And again, these are things you can do on the command line, or you can do them in your IDE.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=221)** So maybe I'll choose [[JSON]] here and I'll get the very popular Newtonsoft.Json.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=228)** And I'll choose to install that so now I'm installing a NuGet package.
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=232)** And what that means is it's going out to [nuget.org](https://nuget.org), downloading the package file with all the [[Metadata]], all the versions we saw, it's installing it into my program here.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=243)** I've got a particular version installed.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=246)** And then if we go to the project and expand its dependencies, so we have a packages node, and there's that Newtonsoft.Json.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=254)** If we go to the projects node, we'll see our project.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=257)** We can see the different references that we have.
>
> **[4:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=260)** And now, I could do using Newtonsoft.Json to bring that namespace in.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=268)** I'm not currently using any of the types there.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=271)** And so it doesn't necessarily need that using statement.
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=276)** So I could do a JsonSerializer.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=280)** Let's say I want a new JsonSerializer and then I could say s.Serialize and it wants a writer and an object, or I could go out and get a text writer.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=292)** So we can go and say, let's write out to Console.Out and let's pass our employee.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=303)** Then we can run that and see that we're now using a package from NuGet that's added as a reference to our project.
>
> **[5:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=312)** So we've been able to pull in the namespaces and use those types as well.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=317)** On the first two lines, you can see the JSON representation of my employee was written out.
>
> **[5:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=322)** And then right after that, on the end of the second line is the hello, which was the first name that we set.
>
> **[5:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=327)** You can add references to other projects in your solution to other DLLs that have been built and delivered to you in some fashion, maybe from another team, or you can use the package model through NuGet in order to grab those packages, download and install them and automatically get that reference added.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (5), [[JSON]] (5), [[Metadata]] (1)
> **CLI Commands:** node (2), make (1), dotnet (1), find (1)
> **Env Vars:** json (2), dll (1), com (1), ide (1)
> **UI Navigation:** go to (3), click on (1)
> **File Paths:** newtonsoft.json (3)
> **Tools:** command line (2), notion (1)
> **Prerequisites:** install (2)
> **URLs:** [nuget.org](https://nuget.org) (1)

#### [Applying access modifiers](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=0)** - [Instructor] Remember that when I tried to use that constants from my [[LinkedIn]] essentials, I don't have any properties there.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=9)** If I look at the error from the compiler, it says it's inaccessible due to its protection level.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=15)** In addition to the namespace being in scope, the reference being there, I also have to make sure that the accessibility that I've defined opens up my type to all the users I want or locks it down to those that I don't.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=31)** We were able to use employee and manager, so you can see there's a difference here.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=35)** I have a static class constants.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=37)** We open our other classes.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=39)** Notice these, including the interface, all have public as the access modifier at the beginning, meaning that they're accessible within this library, to derived classes, and even outside this library.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=51)** Public essentially opens it up to anything that has a reference and has the namespace and scope.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=56)** Constants, on the other hand, has no access modifier, and so for a class or record or a struct, the default is internal.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=63)** That means that it's accessible within this set of compiled together files or within my assembly.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=69)** So I should be able to go into my defining types, go into a method here, maybe the is active, and I could go use the constants.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=78)** You can see there's all the different properties there, so maybe I want to get the config server name from that, and I can use a string server equals because I want to use that here in my code for some reason.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=91)** Being internal, constants is unavailable to all the different types inside this library that we're building.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=98)** If I go back, you can see I have the private static string connection string.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=103)** That's private, which means it's only available within this static class, so if I come back out here now and I try and use the Constants.ConnectionString, it's not there.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=117)** We could try typing it out.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=122)** It's got a lowercase C, that's why I'm getting that error, but we'll see if we type it right, it will say that it doesn't exist or it'll give me the error that says that it's inaccessible.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=134)** Private then means it's accessible within that type itself.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=141)** So we've got public, accessible to all, private, accessible just within that scope or within that type, and then internal, meaning available within our library, and the other one you'll commonly see is protected.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=155)** So maybe for this public bool is active, we'll change this to protected, and what that means is, it's accessible from this type or derived types.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=167)** So if I go back out to my program here, we'll save everything to pick that up.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=172)** I've got the employee that we've defined.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=175)** Let's go ahead and see if we can call is active.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=180)** Nope, we get an error.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=182)** Again, it's inaccessible.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=184)** We're in a different library.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=185)** We can't use it here, but we can, if we go to the defining types, 'cause it's defined in our employee class, we can use the new down here in is active, or we can, because we're in a derived class, we can say base is active.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=204)** Protected items can be accessed from those derived types.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=209)** There are some other combinations you can use, such as protected internal, which is really about combining those two things, so derived classes or internal types, so anything within the assembly, for example, or derived classes within the assembly or from another assembly that maybe references and uses your class as a base class.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=230)** And private protected, that gives you both private, so within the class, as well as protected in classes that derive within your same assembly.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=243)** This lets you control the accessibility of those methods and properties on your types to lock down the state or the functionality to only those types that should be able to use it.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=256)** We'll go out here to our program and fix that, so everything continues to be happy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Aliasing namespaces for clarity](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=0)** - [Instructor] I mentioned that one of the purposes of namespaces is so our types don't clash.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=5)** Let's go over to our [[LinkedIn]] essentials types.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=8)** I'm going to add a new class, going to call it manager.cs, Notice that by default, I get a bunch of using statements up at the top.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=19)** They all gray out cause we're not using them.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=21)** And then I get an internal class, so let's make it public called Manager.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=27)** And it's in the LinkedIn essentials types namespace.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=32)** Our other manager class over here is in the LinkedIn.essentials namespace.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=38)** So if I go to program and I say, I want to create a new manager, by default because I have the LinkedIn essentials namespace here, it's perfectly happy.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=48)** What if I'm also using the LinkedIn essentials types namespace?
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=55)** Now I have a problem because manager isn't clear.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=59)** Is it the types.manager or is it the essentials.manager?
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=64)** I could fully qualify that.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=65)** So I could maybe copy this here and I could bring it down and paste it.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=71)** And now it's clear. Now I've given a fully qualified name.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=75)** This is a very simple file though, as you start using this if you're creating class, or you're creating something where you're using multiple types from these namespaces, it can get very verbose.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=86)** So one of the things we can do is alias our namespaces.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=88)** So we can say maybe LE equals LinkedIn.essentials and LET equals LinkedIn essentials types.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=97)** And now if I want to use that manager, I can see LE.manager.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=103)** Notice employee is now giving me an error because it doesn't know what namespace, so I have to give it the LE there.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=112)** So it's a combination here.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=113)** I'm still fully qualifying the type name, but I'm doing it with the alias so I can be less verbose.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=119)** You may see this in existing code bases if you're not using it yourself.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=123)** So I want you to understand that those aliases defined up at the top simply give you a shortcut to fully qualify your type name further down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (7)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Variables Revisited

[↑ Back to Table of Contents](#table-of-contents)

#### [Declaring variables using types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=0)** - [Illustrator] You're already familiar with the concept of declaring variables.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=4)** Let's clean this up a little bit from our last examples, get rid of some of these name spaces that we don't need, and in fact we can get rid of the alias now because we're going to change this to a shift worker.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=20)** So we have an employee variable that points to a shift worker.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=25)** So E first name, so all happy, if I come in here and I look at the options, I can see things like end date, last name, start date, all those employee properties.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=38)** If we bring up our defining types and I'll just put it in a separate group here, you'll notice our shift worker has a property called shift start time.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=49)** If I try and use that variable, you going to see that I get a error because employee doesn't contain the definition.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=58)** And we've seen this before in our examples, it's the type of the variable that dictates what the compiler expects or thinks is available.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=68)** If I make this variable a shift worker, now that's going to be happy.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=75)** It's a time only so I can do a new time only.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=79)** I can say that they start at 8:30, that's their shift time.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=87)** Likewise, if I change this to the interface, I person, that still works for shift worker, and first name is still there because that's part of the I person definition, but I can't then set the shift start time if I use that object as an I person.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=104)** I could cast to a shift worker like so, I can say start time that around.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=116)** So I can cast E to a shift worker and get shift start time accessible because now I'm telling the compiler, treat this E as a shift worker.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=127)** As you can see the type of the variable become very important to the compiler because that's declaring what the type is as we're working with it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Ports:** :30 (1)
> **Speakers:** - [illustrator] (1)

#### [Using the var keyword](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=0)** - [Instructor] In other courses or other places in examples, you may have seen something like this, Var x = 10 or var y = "some string".
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=13)** This is known as an implicit variable declaration.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=16)** We're saying we have this variable X or Y.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=19)** We're going to set a value in there and at compile time, figure out what the type should be.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=25)** If I hover over the X, you can see that the tool tip tells me it's an int.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=30)** It's implicitly typed that based on the number 10 here.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=33)** If I changed this to 10.0, x is now going to look like a double.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=39)** So it's inferring that type.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=42)** Likewise, Y of course is going to be a string.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=45)** But you can do this with a little less implicit understanding by the compiler.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=51)** For example, I can simply say var e = new ShiftWorker.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=57)** Most of the time we think of this as just a simplification of our code.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=61)** We're declaring this e instead of as a ShiftWorker or an employee just as a var.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=67)** And that means it's going to take on the type that we have there.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=71)** So it's often just seen as a shorthand, so we don't have to type out the classes.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=76)** However, as we'll see, using var in this way with implicit typing, isn't just useful for simplification of our code, but it also becomes required in cases where we don't necessarily have a type name.

> [!info]- Semantic Content
>
> **Versions:** 10.0 (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Working with anonymous types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=0)** - [Narrator] Let's get rid of our ShiftWorker here, and I'm going to create a new object.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=4)** Let's say FirstName equals Matt.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=7)** We'll do LastName equals Milner.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=13)** Now, what's missing from this declaration?
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=16)** Well, the first is, we don't have a type name there.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=20)** I'm saying that this is a new object with the initialization syntax, but haven't actually defined a type name.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=29)** And this is where that var variable becomes very important because e now is an anonymous type.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=35)** You can see that on there, the anonymous type, it says that it's new and it just has a string FirstName, LastName.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=42)** So I couldn't actually declare a type there, I had to use var.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=47)** FirstName as we see in the synonymous type, it's actually not assignable, it's read only.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=55)** So we'll go ahead just get rid of that.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=59)** Of course we can't now cast this to a ShiftWorker because it's not, it's an anonymous type that has these two properties.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=67)** We'll get rid of that as well.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=69)** But what we can do is access those variables so I can write Console WriteLine, e FirstName, I have e.LastName.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=79)** All of those properties that we've declared there are available on this object.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=86)** You'll see anonymous types get used in a number of different scenarios in C-sharp sometimes with [[[ASP.NET]]](https://asp.net) web pages, other cases where we used [[Language Integrated Query (LINQ)|language integrated query]] to project or create new object types on the fly with some state.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=103)** And in those cases that var keyword is critical because we don't know that type ahead of time by name.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=109)** We will know what the structure looks like and how to use it, as we've seen here.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=114)** These anonymous types don't have to be simple like this, they don't have to just have simple properties.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=121)** You can add this kid's array in here and just put the comma on the right spot.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=127)** You can see I've added a property called kids, set it up to be a new string array and initialized it with two values.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=134)** And now I can go in, I've got access to kids, go in and get zero or one in this case, or either of those kids and access those.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=145)** So maybe string, kid one, do something like that.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=151)** You can nest structures in there if you want to create an object with a hierarchy inside of there.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=157)** So anonymous types are very powerful in creating that entire hierarchy, not just a simple type with properties.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET]] (1), [[Language Integrated Query (LINQ)|Language integrated query]] (1)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [narrator] (1)

#### [Using dynamic variables](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=0)** - [Illustrator] Well, Var gives you that flexibility to use the anonymous types, where we know a particular structure.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=7)** I want to go to another type of variable declaration.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=11)** Say a dynamic D equals new ShiftWorker, we'll go ahead and create that, we'll initialize it.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=20)** So we'll do FirstName equal Dynamic.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=23)** I'm going to make it a Dynamic Worker.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=25)** So LastName equals Worker.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=31)** Now, if I go to D dot nothing happens, that's because well Var inferred the type from that statement, a dynamic object doesn't assume any particular type.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=45)** So I can come in and I can use, D dot FirstName here.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=51)** I can use D kids here.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=55)** You'll notice I don't have kids defined on this particular ShiftWorker type, but the compilers not complaining about that.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=65)** Because my D variable is dynamic.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=69)** And essentially what that allows me to do, is tell the compiler I know what I'm doing.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=74)** Don't check any of the things I'm doing with his D variable at compile time.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=79)** Don't make sure it has a property, or method that I'm calling at compile time, We'll figure that out at runtime.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=86)** And this is a little bit of a Shift from the typed nature of C Sharp, but it does come in very handy in certain situations.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=94)** If you know the type, or you know that at least it's going to have certain properties or variables on it, you can use dynamic, and then invoke those operations.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=106)** So if I try and run this now, go Control + F5, and run that without debugging.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=112)** We should get an exception when I try and access the kids.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=115)** There it is, ShiftWorker does not contain a definition for kids.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=123)** Let's comment that out again, I'm still using the dynamic, but I'm accessing D dot FirstName in my right line.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=130)** And that should be a valid property for that object.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=135)** There we go, FirstName was dynamic, and that's what we wrote out.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=139)** This is different from an interface, or a base class, or something else, where we quote unquote know the types, because we've declared them.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=148)** Here, we're saying that we know the types at runtime, but not necessarily at compile time.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=155)** And I use this often, if I have to load types dynamically, for example, if a type is defined in a config file, and I need to create an instance of it, I know it has certain properties or methods, I can use a dynamic variable, and invoke those methods in my code.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=171)** You won't see dynamics show up quite as often as you will Var.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=174)** Var is very prevalent.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=176)** But it's another useful tool to have in your toolbox, if you're working with types, where you know they should have members, but you don't have the type definition handy.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [illustrator] (1)

#### [Solution: Dynamic keyword](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=0)** - [Instructor] In order to return a value, we want to be able to use that answerGenerator that gets passed into us, that's the object that has the method.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=8)** So we want to be able to simply call that, answerGenerator.GenerateAnswer.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=15)** We want to pass in the number and that is really the solution.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=21)** But we can't do that right now because the answerGenerator is an object and the object doesn't have a definition for GenerateAnswer.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=30)** We can change the type parameter here to say this is a dynamic, essentially that gives us the ability to say, I know this object coming in has some particular properties or methods, and I want it to be dynamic so that I can invoke those.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=48)** And this tells the compiler, go ahead and let me put this in, GenerateAnswer, even though you're not sure that exists.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=55)** And at runtime, we'll find out if that method exists.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=60)** So now we've got the expected result, our code returned 98, which is apparently what we should get when we pass seven into this object and generate an answer.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=71)** I can come down here and change this, something else like 18, and test again.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=78)** We get a different result.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=79)** But because our logic stayed the same, and we're still using the right dynamic keyword and the right operation to generate that answer, it matches what was expected.

> [!info]- Semantic Content
>
> **Code Identifiers:** answergenerator (3)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 5. Working with Enums and Nullables

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining enums](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=0)** - [Instructor] One of the other common types were used is an enum or an enumerated type.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=5)** I'm just going to clean up a little of our code here, and we'll look at an example, go down below our existing code.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=13)** From the framework, I can use a var day equals day of week, but with the dot you notice that I have a finite set of options here for the day of week.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=26)** And this is where enums really makes sense, where you have a constrained set of values and you want to make it easier for people to select them.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=34)** So I could come in and say Monday or my day and now if I look at day, it's got a number of different properties, all coming from the System.Enum type.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=46)** So if we wrote out, day we see that there, so we're going to see console right up above is going to say dynamic from our dynamic object and then we'll see what Monday looks like.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=57)** You can see, we get a string value there for Monday, but if I have over day, just as day of week.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=64)** If I have over a day a week, Monday, it says one and day of week is an enum, so let's go create our own, you know, rather than have you watch me type, I'm going to just piece this in, we're going to call this ShiftDays.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=80)** So what we're going to do is use something similar to the day of the week to identify what days someone can work as a ShiftWorker and I'll explain a little bit later why we're not just using day of week.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=92)** So for our enum, we have all the days of the week and notice that I've assigned a value to them, if I don't, they just get automatically assigned increasing values under the covers based on the base data type.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=109)** Now for this ShiftDays, I can back out and we'll create a ShiftDay equals ShiftDays.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=120)** Again, it looks very similar, I have those options.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=123)** I can say Monday, now there's a couple of things I could do with that again I can just do the console.Writeline of my ShiftDay and see what that looks like.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=133)** Let's actually change this, so it's different from our previous value.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=139)** I'll run that, looks very similar, except now we get Tuesday of course, instead of Monday.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=144)** But the other thing I can do, is I can cash this to an int because the base type for an enum, if we don't provide one, is int.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=154)** So now I should get the value of that.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=157)** So I got a four, which if you look in the bottom pane here, that's what Tuesday has as its underlying value as for.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=165)** You'll notice, I didn't number these sequentially, they do go in order as we go up, but they are also doing so in a way that allows me to have multiple values represented.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=175)** So Sunday and Monday together could equal three.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=179)** This is really useful if you're taking these enum values and you're saving them in a database for example, or saving them in some sort of data store and you want to be able to represent multiple values at once.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=192)** Let's go back up to our ShiftWorker here, I'm actually going to take that dynamic out of there and we're going to create that ShiftWorker and we'll clean up this kid's comment here.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=205)** As none of that have the ShiftWorker, I want to add a property called ShiftDays, cause I want to set that, so come down and do the prop.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=215)** Let's say it's ShiftDays, days available.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=220)** So these are the days that this particular worker is available to work during the week.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=227)** Now I can take that worker, days available equal ShiftDays and we'll say Wednesday, I'm going to drop down here and instead of putting out the first name, I'll do days available and I'm also going to come down and just so we get a cleaner look in our console, we'll comment out those other right lines that we had there.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=248)** So now if we do that great, we get Wednesday and now we start to see why we're going to create our own enumerated type, other than just learning about how to create them because the day of week, the enumerated type only allows a single value.
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=262)** We're going to want to be able to assign shifts for multiple days or show availability on multiple days of the week.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=269)** So we're going to extend our enumerated type in order to enable us to do that.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=273)** And moreso look shortly at how to compare a variable with the different enumerated types.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Enabling multiple enum values](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=0)** - [Instructor] If we try to take our type an add by using a Bitwise operator like the or, let's say Thursday.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=9)** What we'd like is for our days available when we represent it or say D days available here in our console right line to show Wednesday and Thursday.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=17)** We're combining those two values.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=20)** If we do this, we run it, you'll see we get 24, which is Thursday plus Wednesday.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=26)** It is 16 plus 8, and that is the integer value, but that's not really what we want.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=33)** Certainly we could store it in the database that way, that's why we numbered them this way.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=37)** But we don't really want that.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=39)** What we want to be able to do is treat them a little more like Bitwise operators with flags.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=45)** So we can add an attribute called flags to our enum.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=50)** And that essentially tells the compiler to treat it a little bit differently and that this particular enum can have multiple values in it.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=59)** So simply by adding that flags attribute, if I run it now, we see we get Wednesday, Thursday.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=66)** That's what we would expect in our numerated type.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=70)** That flags attribute along with the way we've numbered these really enables us to have this kind of combination of values that we can store in a variable.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=81)** Now the other thing we could do is come in here and we could actually have this derived from short.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=86)** And I just show you that, because again, if we're talking about storing this in a data store somewhere, maybe you have requirements around your data store as to what types you can use.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=95)** You want to use the smallest type available.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=97)** So we might use a short instead of a full-blown in, because we're not going to have really high values here.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=104)** The other thing is you start to look at this pattern of Sunday and Monday being one and two, those two together would be three.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=112)** Likewise, we see Tuesday as four.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=115)** If we had Tuesday, Monday and Sunday, that would be seven.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=119)** So this is why we get this numbering pattern.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=121)** But what's Saturday plus Sunday?
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=124)** Well, that's 65 and that's the weekend.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=127)** So we could do something like this.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=130)** And we can add all these things up, but I can tell you that weekdays is 63, because it will become right before 64.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=140)** And these are now valid values within there.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=143)** In fact, if we came up here and we said, Hey, you know what?
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=147)** This is Saturday and Sunday.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=151)** Those are going to be valid values.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=153)** Those would add up to 65.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=156)** So if we run that, we can see that we get weekend.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=161)** If we leave that out, we're going to be back to where we were before.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=166)** We run this again, we're going to get Sunday and Saturday.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=170)** Because we have the flags, we see that.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=173)** But if we didn't have the flags, we'd get a 65 here.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=178)** So we've added these values in 'cause we understand how the numbers add up and what they represent.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=184)** So we can identify different way to name that collection of values.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=191)** So we've got a set of values.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=193)** We can assign multiple days to our shift worker that they're available.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=197)** We could mix and match those things.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=199)** We could even come in and say, we want to do weekdays and weekends.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=203)** We've got somebody who's available all the time.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=206)** They're ready to work.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=208)** And what will you expect to come out?
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=211)** Should be all of those different items; Monday, Tuesday, Wednesday, Thursday, Friday, and weekend.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=218)** Interesting to know we've got all of those weekdays.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=220)** If I come in here and I just end with weekdays, that comes out as weekdays.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=227)** So the value underneath that, that 63 can be represented by the weekdays enum, or it can be represented by all of the collection of items that make up that value.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=239)** And either is valid, it's still going to be 63 at the end of the day.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Testing enum values](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=0)** - Once you've got some enumerated values, you're going to need to be able to test them.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=4)** You're going to want to check whether days available, for example includes, Monday.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=9)** So one way to do that is we can look at, let's say available Monday equals, and then we're going to use the D days available.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=19)** That's our variable that holds that type.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=21)** And because we're using the flags, we can choose Hasflag, Monday.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=27)** Now we could do something like this, where we write out available Mondays, and then we'll put the variable in there.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=36)** Then that is going to allow us to check, does it have that particular flag?
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=41)** So run that, available Mondays, true.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=45)** That works great, if we have a flag.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=48)** Another way we can compare these is using Bitwise operators.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=51)** So let's say available Saturdays, and now we'll go in and we'll say, we've got D days available.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=59)** We're going to Bitwise and that with shift days, Saturday, and then we'll check, does that equal shift days, Saturday.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=71)** So that's how we'll get that value.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=73)** And then we've already got our days available down here.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=76)** Let's go write this again, we'll say, available Saturday.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=84)** And we'll put that variable in there Saturdays.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=90)** Add our last closing quote there.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=93)** And we'll write that out.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=95)** And because we've got the shift days, weekdays up top there, that should be false.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=102)** So we can say Mondays is true, Saturdays is false.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=105)** If we were to go up here and shift say, yup, they're actually available only on the weekend they should flip-flop.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=113)** So available Monday is false and available Saturdays is true.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=118)** There are a couple other handy methods on the system enum type.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=121)** So we can drop down here a little bit.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=123)** We'll add these in.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=126)** So for example, we could get the shift names and we could do system.enum.GetNames and then we can pass in the types we'll have to say type of, just pass the type name, shift days.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=145)** And that then is going to get us a list which is going to be an array of strings.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=150)** So now we could go to write that out.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=152)** We can use the string.join method tell it to join this set of strings with a comma, shift names.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=165)** And now we should see all the available options there for the shifts.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=169)** So they're on the fourth line.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=171)** You can see we've got all of our available options from Sunday through to weekday, Saturday and weekend.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=177)** And that's pretty handy.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=178)** If you need take that enum and display it, for example, where you want to create a dropdown or a selection for somebody to be able to see, these are all the values that are available here.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=189)** You also get a list of values.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=191)** So we could say shift values, and now we're going to have to cast this to an array of short.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=198)** System enum, get values.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=200)** The we'll pass the type of shift days.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=205)** That's going to give us now an array of shorts, and then we can do the same thing we did up there.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=210)** So we can do string.Join, pass the comma, and here we'll do this shift values.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=217)** Now one closing parenthesis.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=220)** And now you see we get one to four all the way up through, not only the values for the days, but the other pieces of our enumeration, the weekdays and the weekend values as well.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=231)** Again, very handy to get the names, to get the values in order to populate choices, usually in a user interface.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=240)** We also saw how to do the comparisons then, especially if we've got multiple values where we can come in and check what somebody selected or what a value is against some known quantities.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **UI Navigation:** go to (1), dropdown (1)
> **Speakers:** - once (1)

#### [Understanding nullable types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=0)** - [Instructor] We've looked at various ways to define types.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=3)** (indistinct) classes, structs and records.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=6)** One of the things that many of them have in common, is that the variables can be null, meaning that they point to nothing.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=13)** We look at this example, the string input is a variable, but it doesn't point to an actual string.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=20)** The pointer in this case is null.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=23)** If we have an int, it's a little bit different.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=25)** With string for example, I could say if input does not equal null, and then I could write this out and I could say string is... I could even then put the string, so we can put here the input.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=42)** And of course we put our placeholder in the string format there. But if I come down and try and do the same thing with the int, so I'll say if definiteInt, is not equal null, maybe I want to write out the value there of that.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=60)** So I can just do, something like this and I can put the variable in there.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=66)** And I'm getting some warnings here because, that definite int is a value type.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=73)** Why does that matter?
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=74)** Well, it's important in programming to be able to represent a null value, think of an integer for example, that's age.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=82)** So maybe I have here, an int, age.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=87)** And I can set it to zero and that's okay.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=90)** But what if somebody is filling out a form, somebody's creating input for me and they don't provide an age.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=98)** Sometimes I want to know that they haven't provided a value as opposed to getting the default value, which is zero or for a string, maybe an empty string.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=108)** Null has very real context and connotation in certain scenarios.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=113)** So what can I do to fix that?
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=115)** I can't change the behavior of int, but what I can do, so I can come up here, put a little question mark at the end of int age.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=125)** And now, it says that age is zero.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=127)** That's great, but I could also say that age is null.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=133)** That question mark makes that int nullable.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=136)** That means that it can have a value of null.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=140)** Another way to write that is, nullable int, call that age2.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=147)** We'll say that's null.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=150)** Generics is topic for another course, but that nullable of int is a generic.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=155)** It means that it is a nullable value and underneath it is an integer.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=159)** If I come down here now and I say, if age, does not equal null, I can put the age here.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=167)** I can even say age is and put that out.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=172)** And that all works now because that int question mark or that nullable int age can be null.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=179)** So I can do that comparison to check whether or not it has a value assigned.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=185)** So our reference types have always been able to point to nothing or be null for the variables, but for value types, maybe use this nullable pattern and this nullable type in order to allow them to have a null value as that's not part of the value type or struct by its nature.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), means that (2), is an  (1)
> **Analogies:** for example (2)
> **Code Identifiers:** definiteint (1)
> **Speakers:** - [instructor] (1)

#### [Using nullable types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=0)** - [Instructor] Because we're working with a nullable of a type that nullable actually has some additional properties that we can use.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=8)** So I can look at age, I can choose to check if it has a value and that's going to be a Boolean property that indicates whether or not this nullable actually has an underlying value.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=21)** If so, then I could copy this, for example.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=26)** I could come down here and paste and now I could use age.value.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=30)** And that is whatever that underlying type is.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=34)** In this case, it's an Int.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=36)** If I had a nullable of a date time, value would be of the type date time.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=41)** And so before I access the value property, I want to check the HasValue property.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=47)** If HasValue is false, and I try to access value, I'm going to get an exception.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=52)** HasValue is true, I know that I'm free to access the value property to get the underlying value.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=58)** What's happening on line 15 is that the nullable type actually defines explicit and implicit conversion operators so that it can convert from a nullable of Int for example, to an Int or a nullable date time to a date time, so that we can do those sorts of comparisons between nullable value types and non nullable value types or constants even.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=85)** Another way to look at that as I have the age, I might say age equals 17, My age is a nullable Int, but because we have that explicit and implicit conversion, I can give it a literal value of 17 and set that.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=101)** I don't have to specify age.value equals 17.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=107)** And in fact, that'll get me in trouble because that is a read-only property.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=113)** The intent of these overloads and this behavior is to make a nullable value type like this behave as much like a reference type as we'd expect so that we can check for a null.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=123)** So that we can assign values and read values.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=125)** But there are cases where we're going to use that HasValue and the value property to very explicitly check and retrieve values.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Working with null objects](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=0)** - [Instructor] There are a couple of really useful operators when you're working with nullable types, whether they're reference types or value types.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=7)** I'm just going to clean up a little bit here, get some things out of the way.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=12)** Let's say we've got our definiteInt up here, and that, remember, is an integer.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=18)** So if I try and set that equal to age, let's just pretend we're going to end that statement.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=24)** It doesn't like that, because age could be null, and definiteInt has to be an int.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=31)** So we can't do an assignment here.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=33)** It doesn't automatically, for example, convert age to zero.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=36)** But what we could do, is we can say, well, if age is null, then I want to assign 17 into definiteInt.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=44)** So these two question marks together, the null coalescing, evaluates the left side.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=49)** It says, are you null?
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=51)** In this case, if age is null, it says, well, what's on the right side?
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=54)** 17? Okay.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=55)** That's the result of this expression.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=58)** So definiteInt would be 17.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=61)** We can take this, copy it, put it up here, and instead of age, we'll put definiteInt there.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=69)** Let's just comment this for now.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=72)** And we'll run that, and we should see that age is 17.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=78)** Now if age isn't null, for example, if I came in here and said, age equals 12, well then, definiteInt should be equal to 12 because age is not null.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=92)** Age is 12.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=94)** So that's one handy one.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=95)** Another handy operator is the null coalescing assignment, or this two question marks and an equal sign.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=103)** This expression works by evaluating, again, the left side, the age.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=107)** And if it's null, then it assigns the value on the right side.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=112)** So if age is null, it should get set to 12.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=115)** We should see 12 all over again, not much different than what we had before, when we already assigned it.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=121)** But if I'd set age equal to five, now, on line 10, age is not null.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=129)** So it shouldn't get assigned 12.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=130)** It's already got a value, it should keep that value.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=133)** And our definiteInt should also end up being five, because age itself is not null.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=140)** So it shouldn't get the value of 17 applied to definiteInt.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=145)** And we run that and see that, age in fact is five.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=149)** Those two operators really help you in working with these null values, providing actual values if you have a null in that variable, or assigning to that variable, a particular value, if it's null.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=162)** And these can replace the longer, but also useful, syntax, where it might say something like, definiteInt equals, and then we could do age does not equal null.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=174)** In that case, we want to use age dot value.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=179)** Otherwise we want to use 17.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=183)** This is a different way to write these kinds of expressions, where we have a condition that age does not equal null.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=190)** Question mark, if the condition is true, what's the value, colon, if the condition is false, what's the value.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=198)** You can see that line 11 is much more terse and concise, and a little bit easier to follow in a lot of cases.

> [!info]- Semantic Content
>
> **Code Identifiers:** definiteint (9)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Understanding nullable reference types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=0)** - [Narrator] We've done a few things here with some nullable types.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=3)** Let's look at a common problem that we run into in programming.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=7)** And that is the no reference exception.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=10)** Got a method here I just pasted in called pad and trim.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=14)** I've used it a lot lately to pad and trim strings for file output.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=19)** So I've got a string input, a final length that I want the string to be and a pad character.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=25)** So I might be adding zeros to the end of something or the beginning.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=29)** I might be adding spaces.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=30)** I need the string to be a certain length, and I'm going to fill out the empty space with a particular character.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=36)** So I return, I just take that string input.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=39)** I trim it, so I get rid of all the space.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=41)** And then in this case, I'm going to pad the left.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=43)** I'm going to say how long I want it to be and what that pad character is.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=47)** So we can come up here.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=49)** I can tell I want to write out pad and trim and take my input variable from above.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=55)** Maybe I want it to be 15 characters and I want to make it filled with zeros.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=61)** But if we look, our input is null.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=65)** We haven't actually assigned a string into that input value.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=69)** The compiler seems happy if I do a whole BB here to build.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=74)** My build succeeds, I'm going to go to run it.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=78)** Now I get an exception.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=80)** Unhandled exception, system no reference is very common in all programming, but also in C sharp.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=88)** And that's because my input object can be null, and I didn't check it.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=94)** There are a number of things I could do.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=95)** I could come in and say, if input does not equal null, I could do an Ells and return an empty string.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=102)** The other thing I can do is come in and use this conditional null access operator, which says if input is null, then don't call trim.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=112)** Or if the result of trim is null, don't call pad left.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=116)** So I won't be accessing that object if it's null.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=119)** So what happens if we write that out?
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=122)** Well, that works, but I'm essentially getting back null from that pad and trim.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=129)** And that's not really what I want.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=130)** I didn't pat it out with those 15 characters.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=134)** That's an example of reference types or nullable types being a problem, creating that reference exception.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=142)** I'm going to go back to something we looked at very early on in the course, I'm going to my project and edit the project file.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=149)** I came in early on and I disabled this nullable types.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=154)** I mentioned that in C sharp 10, dot net six, the behavior for reference types has changed.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=161)** So I'm going to change that to enable.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=163)** And we'll see what that does to our program.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=167)** This is a set of features known as nullable reference types, which maybe doesn't make a lot of sense since they were always nullable, but it allows us to treat reference types much like we treated our value types up there where we were very explicit in saying it was nullable.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=185)** Now we start to get some warnings here and the pad and trim, if we look at the input, it says the input may be null here.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=192)** Looking at our code, the compiler has used some static analysis, and that's one of the components of nullable reference types to figure out that this is probably, or maybe null here.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=203)** I don't see anything that has assigned a value to the input.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=208)** Likewise, as we get down to the bottom, it's indicating that it's possible you're going to return null here.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=215)** The return type of this method is a string.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=218)** But if input is null, we're not going to call trim.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=222)** We're just going to return the input, which is null.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=227)** Notice if I run my application now, I still get age is five.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=231)** I'm not getting the exception, but I am still getting empty output.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=235)** That pad and trim return null and the right line then put out nothing.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=240)** This change hasn't changed that runtime behavior necessarily, input is still null, and I'm still getting some warnings there, but it works because I put in the null checks and it's okay to pass null to console right line.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=254)** And this is where the nullable reference types come in, where it's essentially about helping you avoid those null reference exceptions.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Working with nullable reference types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=0)** - [Instructor] As we work with these nullable reference types, let's start here at the top of the file and work our way down applying the different features that comprise that nullable reference type.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=10)** So I'm getting a warning here because, string in this context now that I've made that project level change, isn't nullable.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=18)** It's like an int or a date time of value type, but it still behaves as a reference type.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=24)** I can use that same syntax, putting a question mark at the end just like I did for the value types, to indicate that this is a nullable reference type.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=34)** So again, it's all about providing that compiler help.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=37)** We see that now it's okay to assign null there.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=41)** If we go down to the next place for our string that we're having a problem is line 16 where that input could be null.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=49)** One of the things we can do is go to our method now and apply an attribute that says allow null, that's not in scope in the namespace here but if I hit control + period there, using system diagnostics code analysis, so add that up here on line three, and now that I've said that string input can be null, line 17 is happy.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=72)** It's no longer a problem that that input might be null there.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=76)** We still have a problem however, that we might return null and that's what it's complaining about here.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=81)** Well now that we know input might be null, we can say, if input equals null, then let's return, take string empty, and we'll pad that so we use the length, and the pad character, basically we'll just return the empty string padded out to the length that we want, you can put that there, and now I can get rid of these question marks because I know, input isn't null in this L statement.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=110)** And now all of my strings are happy, if I hit control + F5, I'm passing in null, and so I get 15 zeros padded out there.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=121)** That hit our line 22, input is null and gave us back an empty string padded out.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=127)** If I change this to, something, and we run it again, now it's an actual value, it's not null, so it's able to do the trim, and the pad, and it padded out with those six zeros at the beginning.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=144)** What you're seeing is the static analysis that again was enabled when we changed that project property, or when you start a new dotnet six project with C-sharp 10, you're going to see those kinds of warnings letting you know that things may be null, or that you're working with a nullable reference type or not, and there are a variety of things you can do.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=165)** Line five we saw we can declare something as nullable, line 20, got the attributes like the allow null here, to tell the compiler that we understand what we're working with, that we're okay with it being null that we're going to handle that, or not.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=182)** There's a whole variety of these attributes you can use on your parameters, on your return types to help the compiler understand how you're going to work with something that is a nullable reference type or a not nullable reference type.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=197)** Remember our types from earlier, and we saw early on we were getting some of these green squigglies when we have those nullable types on, we need to find properties again those are now non nullable strings and so it's telling me I need to specify a value for example, but I can make these nullable, and of course I'd want to do that up here in the interface as well, and that gets me back to the previous behavior where a string can be null, and the compiler's okay with that.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=233)** It's not going to give me those warnings or, look for that and flag that in my application.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=238)** The other way to handle that is to make sure that your constructors for your types, initialize anything that is a non nullable reference type or value type.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), dotnet (1), find (1)
> **Definitions:** is a  (3)
> **Analogies:** it's like (1), just like (1), for example (1)
> **UI Navigation:** go to (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Enum Flags](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=0)** - [Instructor] We start with our days of the week enum, which has INT as a base type.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=5)** And the test then is going to check whether or not, if we take two days, Monday and Friday, and combine them together, using the bitwise operator there, we get the result.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=17)** So if we just test by default, you'll see our code returned Friday.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=23)** It only returned one of those values.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=25)** So the key thing we need to add is the Flags attribute, but that didn't quite fix it.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=35)** Though the Flags is one piece of the answer, we do need to say, I can represent multiple values here, but the other thing we want to do is give these particular enums values.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=46)** So I want to make them use values that allow me to combine them.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=52)** So you'll notice I'm not just incrementing by one here, I'm essentially doubling them, and that allows me to combine them.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=59)** So I know, for example, that if I take something like Sunday and Monday and add them together, that gives me a value of three, that doesn't conflict with anything else that I have here.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=71)** So now if we try this, we get the correct solution because now when we combine Monday and Friday, under the covers they're integers.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=80)** So Monday's two, Friday's 32, when we combine them then, we get 34, which doesn't conflict with anything else.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=90)** So we've got both those pieces.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=92)** We need the attribute, but also you want to provide those values in there to give it the ability to have the math work out when we combine those together.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** int (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Using Patterns in Control Flow

[↑ Back to Table of Contents](#table-of-contents)

#### [If and switch revisited](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=0)** - [Instructor] As we start to look at [[Control Flow]] in our applications, I want to go back and quickly revisit something you're probably familiar with the if statement and the switch statement.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=11)** With if, as you probably know, you have the if statement like on line 22 here, where we do some sort of logical operation and a quality check or comparison check.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=20)** And of course we can have the else.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=22)** I've left the curly braces out, but of course we can add those in here.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=26)** I want to put that there, it's generally a good idea.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=29)** If we have a single line, it's okay.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=31)** But otherwise putting these in tends to make things a little cleaner and it makes sure that you correctly scope that statement.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=39)** Now, the other thing we can do with the if else is we can actually add an else if.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=48)** Then I can use input does not equal null, and I can use a larger expression or a logical expression or an and in.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=57)** May also input .length then is less than or equal to the length that was parsed in.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=65)** So remember this is our pad and trim function means if you give me a 12 character input, but you told me to pad it to 10, well, that doesn't really work.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=76)** So now I know that the input isn't null and the length is good, so that all works.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=82)** And then of course I can put the else on here as well, and then I could return a value or in this case, I know it's not null, cause that would have been an if statement.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=94)** And I know that the length isn't less than or equal, which means it's probably greater than.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=99)** Maybe I'll throw an argument exception.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=103)** For a new argument exception, I'll say input is longer than requested length.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=112)** Will give then an indication of why that's a problem.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=117)** That's the if statement, fairly common, used in a lot of different languages.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=121)** We are going to see some ways that we can liven that up a little bit, but we can also use this switch statement.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=129)** So, if I come in here and maybe I'm going to switch on the pad character.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=135)** Now the switch, as you probably know, is based on simple types up through C-sharp six.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=142)** So we can use constant values like a chart, like an int or string.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=148)** So I could say case, and here I'm going to use a chart.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=152)** So I might say if it's a space and then I'll use this colon, and then I can execute some set of statements in this case branch.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=163)** Now, if I do a return, we'll just take the value here, copy it, paste it, will return that same thing.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=173)** That's happy.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=174)** Now what if the character though is a zero for example, maybe I want to then return, we can copy that and paste, but we'll change it this time.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=185)** Also we want to pad right.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=188)** There are certain characters we want to pad right.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=193)** We also have the default.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=194)** So that's, if it doesn't match one of these cases up here, then what do we do?
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=199)** So here I might have a whole statement that says no match found for pad character, and we could throw an exception, but for now I want to use the break just to show that for each of these statements, need to have something that executes me out of that switch.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=218)** That could be a return, that could be a throw of an exception, or that can be the break.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=224)** But what if, for example, I wanted zeros or nines.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=229)** Well, now I can add another case here and put that through and that lets it fall through.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=235)** So if it's a zero, it's going to have no statement in there.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=238)** It's going to fall through to the case nine.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=241)** And so either of those would end up with a pad right.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=244)** Likewise, it could come up here and say, well, if the case is the pipe character, I'll put that here.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=250)** And so these things can fall through essentially giving me an or.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=255)** It's either a space or a pipe, do this.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=259)** If it's a zero nine, do this.
>
> **[4:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=260)** If it's none of those things or the default, then we execute our default and write that out.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=267)** So in our case, when we used this before, we had a length of 15, we did a pad character of zero and we have something which is nine characters.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=277)** So we run this.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=281)** I should see the ages five that's from before, and then our something got padded out with zeros.
>
> **[4:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=289)** Wasn't null, the length was under 15 and that pad character was a zero so we did a pad right.
>
> **[4:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=296)** We padded it out to the right to 15 characters.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=300)** Again, probably nothing new here.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=301)** What I want to show is this is the basic behavior of if and switch statements.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=307)** And the switch used to be tied to these constant values or enems that we see here.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=313)** But as we're going to see, we're going to have different options now with the more recent versions of C-sharp in order to have more dynamic switch logic and do some different tests in our if statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Switch statement vs. switch expression](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=0)** - [Instructor] Starting on line 28, we've used a switch statement, which has the switch key [[Microsoft Word|word]].
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=6)** And then the item we're evaluating in this case padChar, and then the curly braces wherein we define our case statements, the different branches.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=16)** And in each case, we can have any number of different steps here that we can execute.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=21)** In contrast, we also have the switch expression that was introduced in C-sharp eight.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=27)** I'm going to add a new method here, and I'm going to say that it's going to return a shift days.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=32)** Let's say, get shift days.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=35)** And that's going to take in a day of the week.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=39)** We'll call that day.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=41)** And I'm going to use an expression body method definition.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=44)** So you can see we have that coming across here.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=47)** And now, we'll just say day switch.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=51)** And now, I can have an expression inside of here.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=57)** So it's slightly different in that we're declaring first, the item we're evaluating the day, and then the switch statement.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=65)** And now, we're going to have a series of expressions.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=68)** For example, a day equals day of the week Monday, then we might want to return shift days Monday.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=77)** Put a comma, we could go down here.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=80)** Now, much like the switch statement, I don't really need this.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=84)** This is more of an if expression.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=86)** I can just say day of the week Monday.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=87)** Remember, we're evaluating that day.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=90)** So if we do day of week, Tuesday, same thing.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=98)** You start to see how this works.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=100)** We've got the expression on the left that we want to use as our comparison.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=105)** And then on the right is the value that this expression is going to return.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=111)** So we'll just change this to Wednesday, fix all these up.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=124)** Each of these lines then is an expression separated by the comma that's going to be a value that can get returned.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=132)** And so it's a very simple statement.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=135)** It's a very simple syntax for returning a value based on that switch.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=142)** So not using this just yet, but let's go ahead and come up here and we'll do a VAR shift day equal, and then let's call get shift days and we'll pass in date time now dot day of week.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=162)** And then, we can write out the shift day.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=165)** That's going to go out.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=166)** Take the day of the week for today.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=169)** Today happens to be a weekday, Tuesday where I am.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=173)** And so when we write that out, we should get Tuesday because it's now converted to our enum from the system enum.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=181)** Now, we can see on line three we've got Tuesday.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=184)** Now, we're getting some warnings here.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=186)** And that's because while I have defined a different expression for each of these days of the week, Monday through Sunday, remember that enum is based on a value type and I could pass something else in there.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=201)** So instead of this day of the week, maybe I'm going to pass in something like casting day of the week, 17.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=211)** Well, what's that going to get me?
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=213)** Day of the week is based on a number.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=216)** So if I pass that in, I get an exception.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=219)** In this case, C-sharp 10, it's a switch expression exception saying that I went through the whole list and didn't find that item.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=228)** So what we'll do is we'll just put an underbar here.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=231)** This is equivalent or default.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=234)** And then we can throw our own exception.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=237)** So we can throw a new argument exception.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=241)** We'll say invalid day of week supplied.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=246)** Let's save that, run it again.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=250)** Ah, now, we get our exception.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=252)** So we know that we are handling that.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=253)** We could choose to do something a little less invasive than an exception.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=257)** We could default to something else.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=259)** We could handle it in another way.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=261)** In this case, we can see that the branching works, that the underscore then is our default.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=268)** And in this case, we threw our own custom exception.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=272)** Now, I'm using that switch as the body of my method here.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=279)** So I'm switching on day, that's an expression.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=282)** It's returning a value.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=283)** I could use that in line and a method.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=285)** I don't have to use it as the full body of the method.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=288)** This is just an example of one way you can use that switch expression.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=292)** Create a simplified method implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** padchar (1)
> **Env Vars:** var (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using the is expression](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=0)** - We go back down here, notice we did some checks around inputs being null or not null.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=8)** There're other kinds of checks that we might want to do against say the type.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=13)** So we're looking at the type and whether or not it's null, but we might want to do something like this.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=20)** I'm going to paste a couple items in here.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=23)** Line 62 and 63, I'm defining a shift worker and a manager, but notice that the variable type I'm creating is an I person.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=33)** I'm saying I have a shift worker that implements I person.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=35)** So my variable SW is an I person.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=38)** Likewise, my MGR or manager variable is an I person.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=42)** And I have a get person details method that takes an I person.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=47)** In earlier versions of C-sharp, you might do something like you see here on line 68, where you would use the as keyword in order to essentially cast an object.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=58)** On the left, I'm saying I have a nullable shift worker.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=61)** Remember our nullable reference types now.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=63)** So this is a nullable reference type.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=66)** My shift worker equals P the I person that was passed in as a shift worker.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=73)** If the I person that was passed in is a shift worker, then we should get a value SWV should be a value.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=80)** And we can then come down here and say, well, if SWV doesn't equal, null, then we're safe to go in and return first name, last name, start date.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=91)** Then go ahead and just returned string dot empty here to make it happy, in the case where we don't get a value.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=99)** So if we key in, we did a console write line.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=102)** We could go get person details on the shift worker, and we could do the same thing for the manager.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=112)** And we should see those results.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=115)** While we're here.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=116)** Let's go ahead and go back up.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=118)** We're just going to comment out our other rights, so that we can actually see just that one.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=133)** So we run it and we get a line there.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=135)** Shift worker with the date, and then for the manager, because it's not a shift worker, it doesn't print anything.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=144)** We get string dot empty.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=146)** In the more recent versions of C-sharp, we can clean this up a little bit.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=149)** For one, we can use the is operator or is not.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=154)** So we can say, if it is not null, great, now we know we can go in and we can test that.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=162)** That's okay, but that's not exactly what we want.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=165)** We can do one better.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=167)** Let's go comment this out.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=169)** And now we'll say if P is shift worker,
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=177)** and we'll add this SWV.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=181)** And this shows two different things.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=183)** One, the P is shift worker could be used alone.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=187)** That would say true or false.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=190)** It is a shift worker that is essentially taking the statement above where we did the as expression, and then checked if it wasn't null.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=198)** This is telling us yes, it is a shift worker.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=201)** Now you can see, we don't have on line 73 an actual variable for this.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=206)** That is a shift worker.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=208)** We still just have P.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=209)** And so that's where, when we add this bit, it's also a declaration.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=214)** This is a shorthand way of replacing what was line 70 and 71.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=219)** Saying if P is a shift worker and it's not null, then assign it to SWV.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=226)** So we run that again.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=229)** Let me see we get the same results, for the shift worker.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=233)** Everything works.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=234)** If it's a manager, then it isn't a shift worker.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=237)** And so we don't fall into this if statement.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=240)** We could, of course come in and do else if P is manager, MGR.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=250)** Then we could return something like, we'll take that same bit up there, put it down here, but we'll use the manager instead of the SWV, do first name, last name.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=263)** And we'll say reports because for the manager, we've got a different property we can use, which is the number of direct reports.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=273)** And so you can start to see why we might use this, because we have the interface, but for a specific implementation type, we might want to access it as that implementation type, and not just as the interface.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=286)** So now if we run, now, we get two different outputs, for the shift worker, we get the name and date, and for the manager, we get the name, and the number of direct reports.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=295)** We have as, and we have is.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=297)** The, as takes that variable, P tries to make it a shift worker and either returns that as a shift worker or as null.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=306)** So that is helpful in and of itself.
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=309)** We take the, is, which can give us the basic tests or the is plus the declaration here, which can test and then give us a variable of the type we want in order to work with it.

> [!info]- Semantic Content
>
> **Definitions:** is a  (7), is an  (3)
> **Env Vars:** swv (5), mgr (2)
> **CLI Commands:** make (2)
> **Speakers:** - we (1)

#### [Introduction to patterns](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=0)** - [Instructor] In the next couple of videos, we're going to be focused on patterns.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=4)** Patterns are used with the is statement, the switch expression, or the switch statement.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=11)** In fact, we've already seen some.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=13)** You can see here on line 71, we have the declaration pattern where we've said p is a ShiftWorker, declare this swv as a variable of type ShiftWorker and give it the value that came in as p, but as ShiftWorker.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=29)** Likewise, when we didn't have that, this is a type pattern.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=33)** We're saying a particular variable is of a particular type.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=39)** We'll put that back in there.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=41)** When I say those patterns can be used in is statements like this or our switch expressions, that means we could rewrite this.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=49)** So remember, a switch expression is going to return a value, and here we're going to return a string in each of these cases.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=56)** So if we just said p switch and then we came down here and did that, now I can do ShiftWorker, and I can do something like this where I have an expression.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=68)** But I want that swv, I want that ShiftWorker variable.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=74)** And now I can take this, I don't need the return statement, I can just construct the string and put a comma.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=90)** I'm getting a little error, because we've already got that down here.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=93)** So let me just go ahead and comment this out so it makes it happy.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=99)** We aren't going to get that.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=99)** So now what we need is a variable, so var result = p switch.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=106)** Again, that is and an expression.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=108)** So now we can say Manager mgr and we have that, again, we can take this across, grab that value, paste that.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=122)** Now we can do our default here where we say string.Empty.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=131)** We don't need to declare anything there.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=137)** Need to add our expression there.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=139)** So now we've got a result and we can just return that result.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=146)** I wanted to use this example, because earlier I talked about that switch expression, and I wanted to show you can use it inline like this to get a single value back.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=156)** But also, I want to show you that those patterns apply in the is statement, which I'll often use in an if scenario, and they work in the switch expressions and the switch statements.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=168)** I don't have to have a constant value that I'm evaluating in my switch.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=172)** It's a type.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=173)** I'm doing an is comparison, essentially, saying this p is a ShiftWorker or is a Manager.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=179)** So I'm doing that type checking, but I'm also using that declaration pattern right now, get the variable, to use in my expression to create that return value.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=190)** We run this just like before.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=192)** We should see the similar results, nothing too exciting, but shows that our switch expression now is working just like our if statements were before.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=201)** And that's the power of patterns.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=204)** These were introduced back in C# 7.0.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=206)** And what I love about patterns is that each version of C# gets updates to the different kinds of patterns you can use, and this makes much more powerful the switch expressions and the switch statements that used to be constrained to those constant values.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=222)** You can still use those, but we've got a lot more options.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5)
> **Analogies:** just like (2)
> **Versions:** 7.0 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Constant, relational, and logical patterns](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=0)** - [Instructor] Let's go back up to our switch statement here.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=3)** And you can see as an example, we were using a constant pattern here, where we're using a constant value, in this case, chars, to do that.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=12)** What if I want to use something that's more relational?
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=15)** So maybe I want to say it's greater than lowercase a or it's less than a lowercase z.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=27)** You can see, I've got some little squigglies, some warnings and errors because I'm mixing and matching here the relational pattern with the constant pattern.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=34)** We'll get that fixed shortly.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=36)** What I really want is to mix these in a single statement and that's where a logical pattern can come in.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=43)** So I can say if it's greater than, actually what I really want is greater than or equal to a, and I want it to be less than or equal to z.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=58)** This is how you might think you would write it, but you actually want to use and in here.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=63)** So it's a little different than our normal C# syntax.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=67)** So we'll get rid of this line.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=68)** And now we're saying, "Hey, if it's a lowercase letter, "then we want to pad left."
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=72)** And in fact, we could do something like this, can still use that to fall through.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=78)** We could use a capital A and a capital Z.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=81)** So now we don't care if the character that's coming through is lowercase or uppercase, we're going to pad left.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=87)** And what do you think we'll do down here on this scenario?
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=91)** Well, greater than, or equal to zero and less than or equal to nine.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=102)** That'll go through.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=103)** Now we've got a digit from zero to nine, and we want to pad right.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=108)** We still got the default.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=109)** We can still use that.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=111)** And here you can see a mixing of a variety of those patterns then.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=115)** We had the constant pattern.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=116)** We changed it and use the relational pattern where we do the equals or greater than equals with a particular value.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=124)** And we've got logical patterns in there with and and or that we could use.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=128)** So this is our pad and trim.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=130)** You remember, we kind of cleaned up our code here, so we weren't writing that.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=134)** Let's go ahead and come back and we'll do our pad and trim here.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=139)** Where we take that input value, which is something.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=142)** We'll pad that out.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=144)** And now we get something with the zeros padded to the right.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=147)** And again, if we changed our pad character here, instead of zero, let's say we want to do Zs, now it gets padded on the left with the Zs and then our text.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=160)** You can already see this becoming a lot more expressive.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=163)** Now we could also combine this.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=165)** If we want to get everything on one line and get it really clean.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=168)** So we've got all of this statement or we're going to have this statement here.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=175)** We'll put that in, get rid of the case, and now we have an and with an or.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=181)** We use the parentheses here in order to give us some prioritization and we can combine all of that into one statement.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=187)** So much more expressive, a lot more options for the matching on those switch expressions and switch statements in our C#

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Property pattern](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=0)** - Another very useful pattern we can use is a property pattern. I'm going to create a method here.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=5)** Its going to be a static bool.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=7)** And we're going to check, "is weekend night shift".
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=11)** We're going to see for a given date and time, is this on a weekend? Friday or Saturday.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=16)** And does it happen after 3:00 PM?
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=19)** So we're going to pass in the date time, called the shift date and we'll use our expression bodied method here.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=29)** And I'm going to pass in that shift date to a switch expression.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=36)** So we'll come down here, close that out.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=38)** So we've got a method, we've got our switch expression on the shift date.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=41)** And what I want to do is look at the properties of that date.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=45)** So notice if I do curly braces here, I get all of the different properties of a date time.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=52)** So now I could do our hour:, I could say, greater than or equal to 15, so 3:00 PM.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=61)** And then I do a comma and now I have access to the properties again. So I could say day of week:, and then I can use the day of week, Monday, Friday, or day of week, Saturday in my expression.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=81)** And then I have the result that I want to pass back which is going to be true.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=86)** Do a comma, but I can use that discard here, I can just return false for the other cases.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=93)** So we'll go into a lot of different options or choices here in this particular implementation.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=98)** You can see how you can add additional lines and you can check different values of the properties, in this case, we've got a lot of different variation.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=106)** So we want to have that catch all at the end to make sure that we don't fall through and miss some.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=112)** Or we come up here, we're going to paste this in, I've got a shift date on line 35.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=116)** It's a new date time for new year's day, 2022.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=120)** And the shift starts at 1600 or 4:00 PM.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=124)** And then I'm going to do a console right line.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=126)** I'm just going to call out to my method here, to say, "is that shift data weekend night shift".
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=133)** And then I've got my ternary operator there, or I have the question mark.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=138)** So if the value on the left is true, it'll print "is".
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=141)** If it's not, it'll print "is not".
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=143)** So for that particular date and time, this should be, "True, it is a weekend night".
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=149)** We run that, you can see it on the second line there, shift is a weekend night.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=155)** Now if I changed that to say 7:00 AM, run it again, It's not a weekend night.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=164)** But its a weekend. It is a Friday or Saturday, but we're not on that night shift.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=169)** So if you change this, the day, we could change this back to 16 so now we are in the time, but the second is going to be a Sunday.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=181)** So again, it is not a weekend night in terms of our rules here.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=186)** So it's another very useful pattern where you can look at the properties of the object that you're switching on.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=192)** So whatever the target of that switch statement is, you can look at those properties and use that in order to direct the flow of execution to choose the expression that you want to return.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=204)** That said, I do want to point out one other thing back in our earlier, "Get Person Details".
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=209)** Remember we used a switch expression here to create our result and we have our shift worker, SWV.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=217)** So we've got our declaration there.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=220)** I can use the properties here, but notice that what's being suggested or offered is first name and last name only.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=227)** That's because the target of the switch is the P, which is the I person.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=233)** So even though I'm checking that it's a shift worker and I have my shift worker variable there, SWV that I can use to create the result when I'm looking at the pattern and I'm looking at the properties, it's going to be on P.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=248)** It's what are the properties on the target of that switch?
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=251)** So I just want to point that out 'cause it'd be very easy to get in that situation and get confused about why you don't have access to the properties of the shift worker in this particular example.

> [!info]- Semantic Content
>
> **Ports:** :00 (4)
> **Definitions:** is a  (4)
> **Env Vars:** swv (2)
> **CLI Commands:** make (1)
> **Speakers:** - another (1)

#### [Guard conditions](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=0)** - [Instructor] In addition to all the great patterns we've looked at, we also have something called guard conditions.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=6)** For example, with our shift worker here, we might want to indicate that, yes, we want it to be a shift worker, but we might also say "when."
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=15)** And now we have that SWV, we can look at the shift worker.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=19)** We could look at that and we could say the StartDate.year is greater than 2020.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=27)** What that does is it puts an additional constraint on this branch of our switch expression.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=33)** So in addition to this needing to be a shift worker type, the p variable coming in, being a shift worker, we also need the start date to be greater than 2020.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=42)** Now let's copy this line.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=49)** We'll paste it, and then we'll say, it's less than or equal to 2020.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=55)** And here we'll just write out a simple string.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=56)** We'll say, "older employee."
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=62)** So that might be that they're grandfathered into something, or we want to do something else.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=66)** On both cases, the p represents a shift worker, but we have some additional condition that we want to check to create our return expression.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=76)** So, up above on line 73, you remember we're writing out the person details.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=82)** We go up, we can see we've got our shift worker and their start date, they're on line 70, is July 15th, 2020.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=92)** So they should fall into the second case here, 'cause it's less than or equal to 2020.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=98)** We will quick hit Control or 5 to run that.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=103)** we can see now on the third line there, we get older employee.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=107)** So we fell into the second expression because this guard condition was met.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=112)** We just simply came up and change this to 2022.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=118)** We run it again.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=119)** Now we get on the third line, Shift Worker: 7/15/2022.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=127)** This is another example.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=128)** If we go up to our keys expression here.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=130)** Again, we've got all of these separate characters.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=134)** We could come in and add to that.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=135)** In addition to these patterns, we can say when padChar does not equal x.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=145)** So maybe for lowercase x we want to do something different here.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=150)** So let's take this whole thing.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=151)** Okay, and we'll copy it, paste it.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=157)** And we got two identical patterns with the guard, so we'll change that.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=163)** So now, we want the case to be that it's either lowercase or uppercase.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=170)** We've got one, the pad character isn't, a lowercase x.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=173)** And what is a lowercase x?
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=175)** And what it is, let's simply return string.empty,
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=184)** we'll pad left, and instead of using the pad character, we'll use the underscore just so we can see that coming through.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=193)** So up here, we'll recall this, we're passing in z, so that should, we pass it in and run it.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=200)** That works as we expected on the first line there, we get the z to pad out something.
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=207)** Now if I change that now to my lowercase x, we look at our guard conditions there, when that padChar equals lowercase x, we're going to have a different expression, we should just see 15 underscores.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=221)** And that's what we get on that first line.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=224)** So those guards can really add to the complexity of your expressions and your ability to choose the different expressions or [[Control Flow]] in your switch expressions and your switch statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (1)
> **Code Identifiers:** padchar (2)
> **Env Vars:** swv (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Switch expression using patterns](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=0)** - [Instructor] For this challenge, your goal was to find a way to create a discount level or calculate a discount level based on an order total, and we're going to try to do that using property pattern matching.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=14)** Now, one of the changes we'll make to the signature here is we're going to turn this into an expression.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=20)** So we're going to say customer order switch.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=24)** That means we're going to switch on that customer order in this expression, so now I'm going to also put a semicolon at the end there to end that statement.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=33)** And now I want to look at that object coming in, and what do I want to look at?
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=38)** I want to look at the total.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=39)** I'm going to put a colon, and then I'm going to put my expression, so I can say if it's lower than 100, then outside of the brackets, that leads to low.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=50)** Put a little comma there.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=51)** We'll look at the total again.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=53)** Now I'm going to save if it's greater than 1000.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=57)** In that case, we want that to result in high.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=61)** And then finally, we have that default or that discard now, where we can just have that render back or provide standard discount.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=71)** Total is the property on our customer order.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=74)** That's what's getting passed into our switch.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=76)** So in those curly braces is our expression that says I want to compare the total and I want to use this logical expression or test, and then here's the result.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=88)** So if we test that, we got the right answer.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=92)** Returned standard, 'cause the value that was passed in down here was between 100 and 1000.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=98)** If I add a two in here, we test again.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=102)** We got it right 'cause our calculation still works, but now the response we should have is high.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=110)** Now the other thing we could do in here is we could look at the other property, the customer tier, and we could say, if that is, for example, a P for platinum, we want to do something different as well.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=126)** So it's not just a single property that we want to pass in here.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=130)** So we could have different values, different comparisons, where those properties fit together.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn more and build something](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=0)** - [Matt] Thank you so much for joining me in this C# Essential Training Part 1.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=5)** If you're looking for what to do next to learn even more, I've got some suggestions for you.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=10)** First, you can always come over and join me for C# Essential Training Part 2 where we'll talk about [[Language Integrated Query (LINQ)|language integrated query]], generics, delegates and events, asynchronous programming, exceptions, and other topics to dive a little further into the C# language essentials.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=28)** After that, there's additional learning topics, including more C# language features or courses where you can dig deeper into those individual topics if you find one that really sparks your interest or is very applicable in your job.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=42)** You can look into some of the frameworks, like Entity framework for doing data access, [[[ASP.NET]]](https://ASP.NET) for building web applications, or you can look at Blazor, which is all about building user interfaces using [[HTML]] and CSS but programming in C#, and it can run natively in the browser with WebAssembly.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=63)** Maybe you want to look at Xamarin for using C# to write mobile applications for iOS and [[Android]] or [[Windows]] Presentation Foundation or the other Windows-based UI frameworks if you're building desktop applications solely to run on Windows.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=78)** As you can see, once you've mastered C# the language, the frameworks that allow you to take that a step further and build your applications are going to be a critical next step in your learning.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=89)** And finally, other than watching courses and trying to learn this, go out and build something.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=94)** I find that when I'm really trying to understand a particular technology, programming language, or framework, the best way is to go create an application where I have some semblance of requirements so I know what it's really like to use that tool to build an actual application.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=111)** Thanks again and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Language Integrated Query (LINQ)|Language integrated query]] (1), [[ASP.NET]] (1), [[HTML]] (1), [[Android]] (1)
> **Env Vars:** asp (1), net (1), html (1), css (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** ios (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [matt] (1)


## Resources

- Exercise files available

## Skills Covered

- Control Flow
- C#

## Path Context

### In [[C- Foundations- From Basics to Building Blocks]]
**1 of 5** | [[C- Essential Training 2- Generics, Collections, and LINQ]] →

### In [[Getting Started as a C- Developer]]
**1 of 9** | [[C- Essential Training 2- Generics, Collections, and LINQ]] →

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