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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/explore-the-essentials?u=76281980&t=0)** - [Matt] C Sharp is one of the most popular programming languages in use and continues to make programming easier and more fun with each new version. In this course, we'll take a close look at defining and using types and fundamental [[Control Flow]] constructs with C Sharp. I'm Matt Milner and I've been programming with C Sharp for 20 years. I continue using C Sharp because I love how the language has evolved and the improvements I've seen to make programming easier. So, please join me as we explore the essentials of C Sharp types and control flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Control Flow]] (2)
> **CLI Commands:** make (2)
> **Speakers:** - [matt] (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=0)** - [Instructor] Let's talk about what you need to know to get started with C# Essential Training. You should have some basic programming knowledge already. So either familiarity with another programming language or just general basic programming knowledge. Ideally you'll have the C# basics covered and a great way to do that is by watching the learning C# course here on [[LinkedIn]] Learning. I'm going to assume that you have that basic level of understanding as we begin this course. All of the examples that I'll be showing use Visual Studio 2022 Community Edition with .NET 6 and C# 10 running on [[Windows]]. I'll point out features that are new in these versions in case you're using a previous version. It is possible to use Visual Studio 2022 for Mac. It's in preview at the time of the recording or Visual Studio Code on Windows or Mac, but the experience won't be exactly the same. So you should be very comfortable with those tools if you choose to use them instead of Visual Studio 2022 for Windows. You can download the exercise files for this course to follow along. Once you download and unzip the archive, you'll find a layout similar to this, where you have a folder for each chapter, and if we go into a particular chapter, each of the movies will have its own folder here, and within you'll find a begin and end folder. Each of these has a LinkedIn.Essentials folder with the solution inside. Begin directory will have the state of the solution
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/what-you-should-know?u=76281980&t=95)** as we start the video and the end directory will have the corresponding state of the solution once the video's complete. Feel free to start with the begin and follow along, and you have the end there to compare when you're done.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the courses table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by Coder Pad and they appear in the same area of the course page where you watch the courses videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code Challenge has four areas: instructions in the top left, a code editor for your answer in the top right, another code editor where you can see how your code is used in the bottom right and a console for output in the bottom left. You can use these drag handles to change the amount of space that each of these has as it works for you to be able to expand the areas you need to focus on. You can also get more horizontal space for the code editors by collapsing the courses table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenges desired results, parameters, or values that'll be passed into your code, and they may have to be of a particular data type. The return value also has to be of a particular type, and you'll also see that noted in the instructions. The constraints section has useful information about the parameters that'll be passed in. The examples show different parameter values and what result would be returned for each of those test cases. Create your answer in the top right code editor.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/coderpad-tour?u=76281980&t=94)** There may be examples or options in the comments here, generally some guidance that you can use around what you need to do in addition to the instructions. And when you're ready, you can click test my code to see if you've got the correct answer. If your code isn't successful, you can ask for help. I can change these values to true for show expected result and show hints. Now, if I test my code, you see I didn't get the correct answer this time. Time for another try. We see the help down at the bottom. The expected result is 19, and the hint tells us we can either iterate through the array to do our own calculation or use a [[Language Integrated Query (LINQ)|LINQ]] method. Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If anything's too long to fit, you can scroll sideways to see all the text. When you finish each code challenge, return to the courses table of contents, and click the next video to see my solution.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=0)** - [Instructor] When learning a new programming language, I know I understand it better when I also learn the context in which it executes. For C#, that means understanding that code written in C# compiles to MSIL, or [[Microsoft]] Intermediate Language. C# is one of several .NET languages that all compile to MSIL. F# is a [[Functional Programming]] language, and Visual Basic .NET are two other languages, supported by Microsoft, with their own compilers that each know how to take those source files in their particular programming language and compile it to Microsoft Intermediate Language. One of the benefits of this is that the C# language can evolve independent of the runtime. So back with the .NET Runtime 4, .NET Framework 4 from years ago, we had a variety of different versions of C# that all were able to compile down to MSIL that could run on that one common runtime, and that gives the language flexibility to grow and change independent of the runtime. These days, for example with .NET 6, released in the fall of 2021, you'll see that C# tends to release with .NET with new versions of the compiler. As an example, we look at this simple hello world application written in C# and compile it into an executable. So on the bottom pane or window, I've got a person class, and in the top, a simple hello world, where I create that person and write a message out.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=96)** We can open that in a tool called ILDASM or IL Disassembler, that allows us to see from a compiled .NET executable or library, what the intermediate language is. So I can browse into [[LinkedIn]] Essentials here, to my person class, and we can see all those properties, things like first name, age, last name, have get methods and set methods. So if I go to the get last name, for example, I can now see what the MSIL looks like. And in this case, we can see that line that starts with IL and four zeros, it's loading an argument. And the next it's going to load a field. And for that, we've got the person, last name, k, underscore, underscore, backing field. That's the auto implemented field for our property definition, because our property simply identified the get and set, didn't put any particular code or expressions there so that was created for us automatically. Likewise, if we go to the set last name. We can see that we have a method on the first line there called set last name, takes in a string of value. And then as you go down, you can see on aisle 0002 there, that it sets a field. So now it's setting that backing field with the value that was passed in. Likewise, we can go down to the program, find our static void main. Now we can see all of those string literals like Matt and Milner.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/c-sharp-compiles-to-msil?u=76281980&t=188)** We're going to load string command, on the actual message, the hello from, the format there. And then that last one, we've got a call to our system console right line with the string. So all of that C# that we wrote all compiled down to this MSIL that can now get executed.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/dot-net-runtime-is-responsible-for-running-msil?u=76281980&t=0)** - [Instructor] Once C# or other .NET languages have been compiled to MSIL they need to be executed. The .NET runtime is responsible for executing that intermediate language or those .NET executables. The runtime itself can be installed on a server or workstation, separate from the SDK. So you don't need to have a developer setup. You can simply install the runtime and then your application, compiled MSIL, can run on that platform. There've been a variety of versions of the .NET runtime over the years, the most recent versions were started with .NET core are cross-platform, so they can run on [[Windows]], or [[Linux]], or Mac OS. That means with C#, you can write your applications and you can target a variety of platforms, not just desktop or Windows, but also mobile platforms. Another feature of the more recent .NET versions is that the runtime can be deployed with your application, eliminating the need for a separate installation of the runtime. This is especially useful when deploying multiple applications to the same server, where you might have different runtimes targeted by your application. So you can see here, an application, separate runtime on Windows. You can also bundle that runtime in with your application to run on Linux, or Windows, or another platform, simplifying deployment, and simplifying the management of those dependencies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Linux]] (2)
> **Env Vars:** net (6), msil (2), sdk (1)
> **Prerequisites:** setup (1), install (1)
> **Speakers:** - [instructor] (1)

#### [The base class library](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=0)** - [Instructor] When writing applications in C#, or really any language, there are common pieces of functionality that are often provided in a [[Software Development]] kit or SDK. And because C# is one of several .net languages, that common functionality is provided to all of them in the Base Class Library or BCL. The BCL contains types for the most basic of functions, such as string manipulation, mathematical functions, and working with dates, but it also contains more complex functionality around working with files, network streams, or data access. Application developers will typically build their own reusable libraries on top of the BCL and use these libraries in their applications as well. So you'll see a combination of direct calls from the application down to Base Class Library types, as well as leveraging custom libraries that allow for reuse, and definition of common business objects, for example. The Base Class Library used to be the primary library used by all applications and little else was needed, or even available. These days, open source libraries, including those built by [[Microsoft]], are available to use along with the Base Class Library to build applications. So it's very common, in fact, many of the project templates from Microsoft will create an application and you will start with the Base Class Library as well as these Third-party Libraries added into your application to provide that functionality. And next, I want to talk about where you get
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/the-base-class-library?u=76281980&t=97)** all of those Third-party Libraries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Software Development]] (1)
> **Env Vars:** bcl (3), sdk (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [NuGet packages](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=0)** - [Man] While the BCL provides a lot of functionality through the various types it contains. There are more specialized areas of development that it doesn't address. Since .NET code is easily shared in the form of assemblies, or DLLs, many developers have created open source libraries to provide that additional functionality. You can plug these into your application, just like your own libraries and leverage the logic or the rules or the functionality they provide. Once a library is created, you need a way to distribute it to others. This could be as simple as providing the assembly as a download on your website. This decentralized approach though is neither efficient, nor secure, and it doesn't address many of the issues that crop up when creating libraries. For example, a library can be built to target different versions of .NET. So how do you properly distribute the various versions and make it simple for developers to know which to use and how to install it? How do you provide some assurance that the library is from a trusted developer and does what it says it will? That's where [NuGet.org](https://NuGet.org) and the NuGet package manager come into the picture. [NuGet.org](https://NuGet.org) is a repository for libraries that provides infrastructure, versioning, library, and developer information. A library is packaged with [[Metadata]] and published to NuGet where other developers can download and install it. The NuGet package manager is a tool used by developers, both to create these packages and to install them in a project. Visual Studio natively supports NuGet for both creating
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=98)** and consuming these packages. I won't cover how to build NuGet packages in this course. That's something you can find in other courses here on [[LinkedIn]] Learning. Most developers tend to be on the consuming side of packages, installing them into their projects for use. When you use the NuGet package manager and you install a library, it's automatically installed into your project and ready for you to use. In addition, you can easily update packages to a new version or uninstall them if you decide not to use them. One of the benefits of using NuGet over simpler methods of distribution is that a package can be much more than a DLL. Here you can see a NuGet package expanded to the file system. There are several files and folders here. If we open this up, this metadata file with Notepad, you can see it's very simple. It lists a version, a source, and importantly, the content hash. So that we could validate that what we downloaded matched what was published on the server. And if we go into the lib folder, you can see we have a number of different folders based on the targeted framework. All the way back to .NET 2, 3, 5, and 4. This library, Newtonsoft. [[JSON]], also known as [JSON.NET](https://JSON.NET), has been around for a long time. And if we go into .NET Standard 2.0, there's the DLL and some XML documentation. So you can see, this can get very complicated if we were trying to manage this on our own on individual servers. Having a central place to go and download these packages, have this functionality to manage different target frameworks and the security
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/nuget-packages?u=76281980&t=190)** and the versions is extremely helpful. The NuGet package models' become mature and popular enough that [[Microsoft]] now ships many of their libraries through this platform. Everything from data access libraries to the libraries that make up the [ASP.NET](https://ASP.NET) web programming framework are now packaged and distributed using NuGet. This enables faster, more focused updates to the libraries rather than big bang approaches of an entire new framework every year or two. Individual libraries can also be updated independent of the other libraries. You can see here on their profile page on [NuGet.org](https://NuGet.org), they have over 6,000 packages and that's 113 billion total downloads of all those packages.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=0)** - [Matt] We're going to be focused on writing C# in this course, but I first want to touch on using the compiler to get your code to a runnable state. We'll start here with this C# class file, we've got the Person class identified in this person.cs file. And I've also got a Command Prompt open. So, I'm in that same folder. If I do a dir, you can see there's my person.cs in there and I'm going to use the C# compiler, so csc, and I'll just pass that person.cs in, I'll tell it I want the output file to be called personlibrary.dll, and then I want to tell it the target, and so the target is library, and I'm telling the compiler build this into a library or a DLL, as opposed to an executable that could run. Compiler runs against that file and our parameters and we get an output. So, if we look there, we've got our personlibrary.dll down near the bottom. If I go back into that Ildasm, okay, and we can pop that open, and see there's our library, and we've got our Person class just like we did before with our properties, fields, all defined for us, that same MSIL that we saw before. We'll clear that again. Remember, we also have this program.cs, our hello world that we did before that uses that Person. So, now we've got two source files and we've got a program that we want to run or an executable.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/compiling-c-sharp-to-a-library-or-executable?u=76281980&t=93)** So, we'll go back here and pass in person.cs and program.cs. Now the out I'll say hello.exe. And for the target, I can say winexe or just exe. And here, you can see we've got a small problem, now we are getting a compiler error and it's telling us the name console doesn't exist in the current context, so there's clearly something a little different between what we're doing here and what we did previously with Visual Studio. Let's just go back here and I'll come and put a System.Console.WriteLine. We'll save that. We'll come run that compiler again. Now the compiler's happy, we should have output, which means we should be able to run hello.exe. And you can see we get our output, "Hello from Matt Milner," me, "to you!" Now, the compiler has a lot of advanced options for building your source files. Those are just the basics. And that's really all I want to show you right now because Visual Studio, that we'll be using to write our code, or other integrated development environments are going to run the compiler for you in the background. There's properties you can set on your project to help control that if you need to. But now that you know the compiler runs behind the scenes, you've got that understanding, if something goes wrong, where the source might be.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=0)** - [Lecturer] When working in a typed language like C# where your variables have types, you're going to spend a lot of time creating and defining those types. So that's where we'll start here with the different ways you can define a type. That includes classes, struct, and records. Before I do a couple things here, I have all of these different types in one code file which isn't how you'd normally do that. I'm just doing it here to make it easy for us to see them all together. The other is you'll notice down here on line 12, I've got some squigglies under last name and on line 15 under first name. If I look at that, it's going to tell me that a non-nullable property must contain a non-null value when I exit a constructor. Now this is Visual Studio 2022 using .NET 6 and C# 10. And this is different if you're using a previous version. So this is a change that now enforces or provides some warnings around nullable reference types. We're going to talk about those a bit later. So for now I'm going to right click and edit my project file. I'm just going to come in here where it says nullable and I'm going to disable that. I can save that file, close it, and then those things will go away and it'll stop warning me about that. So I'm back now to the behavior you'd see before using Visual Studio 2022, before .NET 6, in case you're using something that's a little bit older. And I'll try and show you throughout the course
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=94)** things that have changed, the various versions of C#, and other tools that we use. What we've got here, starting on line three, is a standard interface for an IPerson. It's got four properties on it, first name, last name, ID, and age. And those are using the auto-implemented property syntax, which means we'll have that backing field created for us. I'm going to use that interface. We'll start by looking at classes. When you define something as a class, you're defining it as a reference type, meaning that a variable that points to an instance of this class is pointing at a reference or is a reference to that instance. So classes, as we can see, can implement an interface, the IPerson. I can also add other properties as I've done here, starting on line 18, to that class. So if I'm treating it as an IPerson, that's my variable type. Then I have access to those four properties from the interface. But if I'm working with it as an employee class, then I also have the additional properties there. And you can see starting on line 23, I have a manager class that derives from employee and can implement zero or more interfaces. I can only have one base class, but any number of interfaces. Those are reference types and those are probably the most common type used to date with C#. We also have structs or value types. I've defined a struct here called age.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=187)** It's got properties, the date of birth and years old. And the difference here is this is a value type. Meaning if I have a reference, I have a reference to the actual object. And we'll see shortly, as we get into the ways that these different types behave, how that plays out when we're using variables, when we're copying, or passing things to and from methods. You can see on line 35, structs can also implement interfaces. So they can have properties, they can have methods much like a class. And then in C# 9, [[Microsoft]] introduced the notion of a record. So here I have a record called customer that implements IPerson. Looks very much like a class, and in fact, behaves in many ways like a class, but records are really intended for scenarios where you want to have immutable objects. They don't have to be immutable or unchangeable, but they can. And they're useful in scenarios where you're using it as maybe a data object. So you're passing it between service layers or between application layers, and it's primarily about creating an object with state and passing it around. You can see on line 51, records can have inheritance in this case. So I have a premiere customer that derives from customer and it adds the notion of a customer level. With C# 10, it was released in the fall of 2021 with .NET 6, we also have the notion of a record struct. So here we have an order
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=282)** that has an order ID and an order date, and that is going to have the behaviors of a value type, like a struct, but also the behaviors and the capabilities of a record. Now, if I come down to the recurring order and I try and derive from, say, order, because I want to just add some functionality to that, you'll start to see that it says the type order in the interface list is not an interface. Well, that's because that's how value types work. If I come back up to my vendor contact, for example, or my age, let's say, I want to do a new struct, say public struct, biological age. People like to talk about their biological age being different from their chronological age. And I'll say I want to derive from age. We're going to get that same warning because this is how value types work. They can implement interfaces, but they can't have a base class. They derive from value type. We'll just say, struct cannot inherit from base struct. Just so we keep that in there and I'll comment this out. So we've got it there. So when we're using structs or when we're using records structs, those same behaviors apply. What you might infer from that is that what this really means is we have record class. So again, in C# 9, that's all that's available is record class.
>
> **[6:16](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-classes-structs-and-records?u=76281980&t=376)** In C# 10, you have both. And so you can specify, or if you leave out the second piece, then it defaults and assumes you have a class or reference type. Those are the basics of the three different ways you can define types, classes, structs, and records. And we'll see as we go forward, the different ways that they behave, so you can make decisions about what's the right way to define your type. Like I said, class has been most common up to this point. Record being newer is fast gaining a lot of traction with folks building [[Microservices]], building multi-layered applications, and using it for those immutable objects that they need to pass around.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=0)** - [Instructor] With our types to find, we can start thinking about, how other developers or ourselves, are going to construct instances of these types. So we can start defining constructors for our classes. Go into my Employee class here, we use the little keyboard shortcut, typing ctor and Tab twice. Now I have a public Employee, then I'll just add two parameters here. String firstName, string lastName, and then inside of the constructor and set the properties. So LastName equals lastName, and FirstName equals firstName. And of course confirmation, that C-sharp is case sensitive. We've got a property name, it's different from our parameter name, simply by the first letter. And that now allows me to create an employee, passing in the firstName and lastName, and initializing the object with that state. I may have caught down here on line 28 though, that my Manager class, which derives from Employee is now giving me a red squiggly, which will turn into a compiler error, that says there's no argument given that corresponds, to the required formal parameter firstName. Essentially, what this is telling me is, before I was using default constructors, with empty parameter lists, but I don't see that here. So if I create a Manager, how will I create the underlying employee? The one way to fix that, would be to come up here, use that ctor again. Now I have Employee default constructor, in addition to the constructor that I've created.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=98)** And now the compiler's happy, because I can create a Manager, with no constructor or the default constructor, and it can then rely, on the default constructor of the Employee. Another way we could fix that, just comment this out for now is, I could come down to the Manager. I can add a default constructor, and I can add those same parameters here, or I can indicate that I want to go to the base, and I want to put some values into those parameters. These aren't very useful parameters, so it fixes the compiler issue. But as we all know, that doesn't mean our application works, it just means it compiles. So this is one way to do that, using the base method, to call down into the constructor, for the base class and pass in those parameters. And likely what you do is something like this, you'd copy, firstName and lastName. You'd use those as parameters here. And then when you call the base, now you can pass those in like so. So now we've got something that would actually work, would create us a Manager, and on the base class, the Employee would properly, set the first and lastName for us. I'm going to pop out to our program.cs here. Let's add that into a new horizontal group.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=191)** Let's get both of these on the screen at one time, go back up. So we got our employee. So if I want to create that Employee, new Employee, I've got the empty constructor, and that all seems to work until we pause, and the compiler catches up and says, wait a minute, there is no default constructor. Once you've identified a custom constructor, the compiler doesn't automatically create, that default or empty constructor for you. So this is invalid. So now I need to say, firstName and lastName in my constructor. And then I can do a Console.WriteLine. I can say something like From I can do e.FirstName, hello world, right. Now I can use that object that I've created, and work through it. I can also change this to a Manager. As a Manager derives from Employee. So I now have an Employee variable that points to a Manager. I've got the same constructor type to find out my Manager, the firstName and lastName. So we're all good there. And being able to create that instance, treat it like an Employee. So if we use our IntelliSense, we'll see we've got StartDate and ShiftStartTime, and all the Employee properties,
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=286)** but we don't have the Manager properties because again, the variable is of type Employee, that's how we're treating that variable. One last bit here, let's go back up to our Employee. We've got a number of different things here, that we can provide. So if we want to set that ID, so maybe we'll do a new System.Random. We can pass in some values here, if we want to. We can see in the IntelliSense, we can pass in a seed value. We'll just end that and we'll do Next. And we're going to pass in then a range. So we'll say one to 10, to set that ID. So because we're in the constructor, we can initialize any of the state. We don't have to just initialize what was passed in. What if we wanted to let somebody come in, and pass the employee ID? So we could say int empID and then down here, when we take the ID, we could pass that in. So that's pretty standard, but I want to make the employee ID optional. So I could just put a default value there. Notice we're still happy down here, when we're creating the Manager, I change this back to an Employee. So he's in the Employee constructor directly there. You can see it's happy, but if I want to come in and pass that integer, I can pass in that employee ID as well. And you might be thinking, well, can I do something like this? new System.Random.Next
>
> **[6:25](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-constructors?u=76281980&t=385)** let's say one to 10, put that in there. Let's get this all down on the next line so we can see it. I see we get a compiler error, that says the default parameter, must be a compile time constant. So we can't create this random and pass it in there. but we can make that optional, so you can pass it in if you want. But if you don't, we've got a default value for it. We can do the same thing, for firstName or lastName as well. So we've got constructors, we've got base class constructors. We can call into from the derive types. And we have optional parameters, that we can use inside those constructors, as we initiate the objects.

> [!info]- Semantic Content
>
> **Code Identifiers:** firstname (8), lastname (8), empid (1)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Object initialization](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=0)** - [Instructor] Well, you may quickly find, if you're not already familiar with it from your programming experience, is that defining constructors that meet everyone's need can be kind of challenging. You add the parameters you think people will use, but it's not exactly what they want. Rather than creating 10 or 15 different constructor options we can use these default parameters and really if we're going to do this correctly we should probably make this the employee ID property on our employee instead of the ID and we'll just fix that while we're here. But we've got all these other properties, so we've got age, we've got the employee ID, start date, shift start time, all these different pieces. So one of the things we can use in C# is called the object initialization. So rather than do the employee this way, I can come in and I can use curly braces rather than parentheses and now I can put the property name in. So I can say first name equals Matt, last name equals Milner. And I can specify any of the properties that I could set on this object right here in this initializer. So you can do that employee ID, let's say it's 75 maybe we have that on hand. Maybe the start date equals new date only, and we can pass in this year, say they started in January,
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=91)** another closing curly brace and I've initialized that object but it's given me an error. And again, it's that one that's basically saying, well, look, I see, you're trying to initialize all these things but that means I need a default constructor. That's why I commented this out, come back and uncomment it so we have our default constructor and that gives you a little clue about what's happening here. When we use the curly braces and we do the object initialization, the default constructor is going to get called and we're then going to initialize or set all these other properties. So this is a shorthand syntax for us, makes it easy for us to create this all in one go. It's very similar to creating the employee and then individually calling all of the property set methods on it. This is an example. Let's come in here then and in the default constructor, we will set the ID equal to let's say five. And we come back out here let's go ahead and we'll say from that first name, employee ID and so we'll do e-ID. I probably shouldn't call it employee ID, that's confusing we'll just call it ID is hello world. Now, if we run this, it'll compile, it'll build our executable and run our console application. You can see from Matt ID five, hello world. So the default constructor gets called and then our object initialization kicks in down here
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=186)** to set those other properties. You can mix and match the constructors and the initialization. So based on what we saw, this is the equivalent. We could also come in here and do Matt, Milner, 75 that's our constructor that takes those three items. We can get rid of this, but we can still initialize the start date with the initialization syntax. So you get the benefit of simplified constructor that maybe gets you most of the things you want to set and the initialization syntax that allows you to set those additional properties all in one go there. We've been working with our employee, which of course is a class and a reference type, what about an age? What if we come into the age and we specify our default constructor, we get a little bit of a warning that says, this is okay you can create a default constructor but because this is a value type, you're going to have to assign a value to age birth date and age years old inside of here. So if we want to do that, we're going to have to come in here and say, all right, I want a date time, DOB, and I want an int years and now I can come down I can say birthdate equal DOB and I can say years old equal years and that makes it happy.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=282)** 'Cause again, it's a value type once we get it created, we have a variable then we're going to want to hold that value and so when it gets created, we have to initialize those properties. Now for records, same thing we can come in, get to define our constructor,
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/object-initialization?u=76281980&t=308)** nothing changed there, that's just like our default. We could do the same thing that we did up top with our string. We'll just do first name here just to make it easy. (keyboard clacking) You can see we've got that initialization syntax works there. And it's our premier customer that derives again, same issue because these are record classes it now no longer has a default constructor in that base class to call when we create a premier customer. So now that we've gotten rid of the auto created constructor put in a custom constructor, we have to put that back in in order for our derived classes or derived record classes to be happy. Construction and initialization, you can use them independently or use them together to create and initialize those objects so they're ready for you to use.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=0)** - [Instructor] We've talked about different ways to initialize your objects. We want to go back to our properties here. As we get into a pattern much like you see here, where I have just an auto implemented property with a get and a set. There are different options for what you do there. If we look at our PremiereCustomer, you can see I have a CustomerLevel and I have a get, but I also have an init, meaning this can only be set with the value changed when initialized, what that looks like is if I come down here, we try and create one of these. So I'll do PremiereCustomer = new PremiereCustomer(), and I've got only an empty constructor I can do FirstName = "New Customer". And now if I try and do pcust CustomerLevel = two, say that's going to give me a value. I'm immediately getting compiler warnings that say that's an init only property. You can only set that during initialization. So what does that mean? Well, I could just come in here and do a constructor that takes a byte and that byte's going to be my level so I could do byte level and then I could set the CustomerLevel = level end there. And now when I create that PremiereCustomer, and pass in the two,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=95)** that's happy and we could even do a WriteLine so we could say the pcust FirstName has level
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=109)** oops, missed our double quotes there. I got a little carried away. So we've got pcust FirstName has level pcust CustomerLevel
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=124)** we've got that. Now again, if we run that with Control + F5, skip the debugger to speed it up. You can see we've got New Customer has level two. So that's one way to do it is to create the constructor. The other of course would be to continue to have a default constructor again I've gotten rid of the default, by creating custom one. So I'll put the default back in and I could change this now to use those new CustomerLevel = two. And again, that makes it happy because I'm initializing the object and I'm setting that value. I'm just going to take that and copy it. And we'll put another one up here just so we can see both we'll comment that one out for reference. To init only allows us to do that. Now another option, let's go up here back to our Employee, for example, and I showed you the init on Records, because as I mentioned, they're often used as immutable objects, and that's a way to do that. If you set your properties as init only then you allow for that sort of a pattern where when you create the object, that's when you can set the state. And then after that, you can't change it. So we look at our Manager, we've got this constructor here, let's put a method on here. I'm just going to see public void SetReports. It's going to take an int numberOfReports,
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/initialize-only-properties?u=76281980&t=223)** and then I can come in and I can set NumberOfDirectReports = numberOfReports. Now in and of itself, this isn't very interesting, one of the things we can do is change that to a private set. So now I come out here into our program. I say I want to create a Manager = new Manager got first name and last name, we give them something very original, like manager boss. Now, if I try to set the NumberOfDirectReports, say they've got seven, I get an error. I can't use it because it's private. That means it can only be set from within that class. What I can do is I can call that method. I can say SetReports, pass the seven and that's happy. So you can control the access or the accessibility of the get and set or use the init to change which pieces of your code have the ability to modify that state in your objects.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=0)** - Let's look at how these different types work. So reference types or classes, structs, value types, and then the records. Got a method here, just back out of my program.cs, called classes, and I'm going to create an employee, I'm going to initialize it. So I've got a name. Notice the age here, got a birth date back in 1971, means 50 years old with an ID of one, and then here's where we start working with those reference types. So on line 22, I define another variable called other and I set it equal to me. Then I change the first name and the age on the other variable. Now what's going to get written out here on line 27. If I read out me.FirstName and age years old, as well as other first name and age years old. So think about what's the original variable me and what's happened now that I have another reference, this other that points to it. So let's run that quick. Let's see if he got it right. Let's look at the first couple lines here. It says Bizarro Matt is 39, but Bizarro Matt is 39. So because it's a reference type, this other variable that we created is still pointing at the same memory. It's still pointing at the same object as me. So when I make changes to it, like the first name and the age, I'm changing one single object, even though me and other, both point to it.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=92)** So that's a reference type. Now, probably given this next bit away. The other thing we're going to do then is pass this reference type into a method and manipulate it in there. So I have this method called ChangeName. I'm going to call that passing in other, that second reference, and then afterwards, I'm going to print out first name, last name and how many years old. So in the change name I pass in the person, I change the last name, and then I write out in the method what their first and last name is. So I'm making a change to the object itself and then on line 41, I'm actually going to change the reference, I'm going to change what person points to. So now I'm saying person is a new manager, manager Milner with a different birth date, making them 31 years old and I'm going to write out again in the method. So we're going to see what is the person in the method, and then what is the person after the method gets executed? So again, if we look here and say, we got going into the method, it's Bizarro Matt 39, and then in the method, it's Bizarro Matt unknown. So we've changed that last name. As you can see there on line 38 in the background, then we changed the reference in the method. So now person is this new manager that now prints out manager. Coming back out of the method, we're printing out what that other variable points to. Notice it is Bizarro Matt unknown, still 39.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=187)** So now we've come back out of the method and everything's back where it was. So when we passed that reference type in by default, the two things to recognize are that last name changed inside the method, but it was still changed when we came out of the method. So that person that we passed in, that reference to an object was able to be manipulated, The last name was manipulated. when we changed the reference, however, of person to a manager that didn't persist outside the method, that's only local to the method. Now, if we wanted to change that, we can come up here, We can put the ref keyword in front of there, and we do it on the method as well. And now we're indicating that we want to change that behavior, that if the reference changes, we want to change the object It's pointing to. got another place where we're using that. So I'm just going to comment that out for now, so that we'll get this working and we'll come back to that. So now we run it, Bizarre Matt going in. Inside the method, again, it's Bizarro Matt unknown, after the change in the method it's manager and then when we come back out, we still have manager Milner is 31. So by using a ref keyword, we've set on passing new reference type. If you change the reference in the method,
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=282)** that's going to persist outside of the method. I'm allowing you to change that. Without it you can only change the object this reference points too, but not the actual reference. To do this, we'll copy, we'll put a comment there, and then we'll paste. So we've got a working copy here, did the same thing up here, copy, paste and then we'll get rid of the ref and that'll fix us up for the next bit here. So that is classes or reference types. What about our structs? Well, let's collapse, and collapse this, so we can go to our structs. Here I'm going to create an age, again, this one's 50 years old. I'm going to set another variable called anotherAge equal to that, and then I'm going to change anotherAge, so the YearsOld is 39, and I'm going to write out the two, just like I did before so we can see what happens. So we look at that my age is 50, but I changed it to 39. All right. So I've got myAge YearsOld and another. That's different from what would happen with the reference time. So anotherAge, even though we set it equal to myAge, they don't point to the same objects. It's got a new object that when we changed it, does not impact the myAge and that's a value type. Likewise, if we go in and call a method here, this AgeBackwords,
>
> **[6:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=374)** look at that, going to just take the startingAge and the number of YearsOld, you can see we can change that by just doing a little math and we'll write out the age and the method and then we'll write out the age up here as well. So we started at 50, went to 39 in the method we're 34, but when we come back out, we're back to 39. So we're getting copies when we do assignment. So anotherAge = myAge on line 57 is a copy, and when we pass it into the method, we get a copy that's local to the method as well, but the changes don't persist outside the method, and so you might want to come in here and do something like ref anotherAge, and then you come back here and do ref, and you can see that behavior is probably what you'd expect from what saw with the reference types. Now we're not passing in a copy, we're passing in the actual object into the method, so when it gets manipulated inside and comes back out it persists, and then finally with records, they're going to work a lot like the structs or the class, depending on how you define them. Was it a record class or a record struct? In terms of these value type versus reference type pieces. What I do want to show you here is when we have a record and we want to create another record from it, we use this with construct. So on line 82 I'm saying, PremiereCustomer pc2 = pc, try to find above,
>
> **[7:49](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/cloning-and-copying-objects?u=76281980&t=469)** with, and then I include changes to that. So I'm changing the customer level and the last name for the records. Otherwise they're going to work just like we saw. We can catch that to a person here in order to get that output. If I go up here and undo Records and we'll leave Structs. So we can see that in the background. Customer one has a level of 1, customer two has a level of 2. Again, it was a copy. We're creating the second one with the state of the first one, plus some modifications, and then we do the changes inside the change name, is customer unknown, after make the reference change its manager, and when we come back out, it's still customer unknown. So we haven't done it by ref in this case, we didn't use that ref keyword on the parameters, so the state can get changed, but the reference does not, hopefully that helps make some sense of that whole reference type versus value type. You can see why generally people use classes to define things. Structs are very specialized for certain things that you want, and records, again, now have the flexibility to behave either as a value type or a reference type. But we also have some specific behavior for records, like this width keyword to help us copy one to another, with small modifications to state.
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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=0)** - [Instructor] As we look at equality and comparing objects, I'm going to simplify the types that we're going to work with here. I've created three different implementations of a point. I've got one, that's a class here. The CPoint has an X and a Y property. I've got an SPoint for the struct again, X and a Y property. And then I've got a record point. And notice here, I'm using a shortened syntax for defining a record and almost looks like a constructor, but I'm creating a record called RPoint and it's going to have properties, int X and int Y as well as a constructor that looks like the signature that takes in the int X and Y. So with those three types, we switch over to the program. You can see I've got classes, structs and records. For each, I'm going to create a point with a value, and then I'm going to assign that point to another variable. So you can see on line 11 and 12 here, create an instance of a class point p one, and then assign that to p two. And then I compare the equality on line 14. Then I'll create a third point with the same state or same values for its properties as the first one and then we'll compare one to three. So we do that for the structs. We do that for the records as well. And you'll notice in the structs I've have commented out these WriteLines. And if I come back in and put them back, I get the red squiggly,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=93)** the compiler error that tells me this operator, the two equal signs can't be applied to the structs. So by default, we don't have that equality comparison. Now, if I switch back over here to my types, show you another piece of functionality, I'm actually going to define what that operator should do or how it should behave for my type. So now I've got a public static pool operator and then the actual operator, and I've done both feet equality and the inequality here. So we get two points passed in. I'm going to go ahead and check that X equals X and Y equals Y on those two. And for the inequality, that one or the other is not the same. What we'll see for the records and classes is the default behavior of that equality operator. And for the structs, we'll see what we would expect with our quality operator. And it would be the same if we came in here and did p one equals p two. So that works on our value type as well. And that would do our value comparison. So we're just providing that operator overload or operator syntax to allow us to use this syntax, to check the comparison. So if we try this now again, each follows the same pattern, classes, structs and records. We have a point, we assign new variable to that same point. We check the equality and then we create a new variable with the same state as that first.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=188)** Control + F5 here to run this without debugging. And we'll see for classes P1 equals P2 is true. P1 equals P3 is false. So we see the nature of equality comparisons by default for a class is to compare the references. P1 and P1 point to the same object, therefore, they are equal. P1 and P3 despite having the same state, the X and the Y are the same, they don't point to the same object so it's false. For structs p one p two equal p one p3 also equal because they have the same state. And for the records, we see that same output records follow that value equality by default. So their operator for the equality check or inequality check is value-based not reference-based. One last thing we could change just to check that is we could take p two, and we could say X equals 10. We'll run that again, and you'll notice p one and p two are still true because they still point to the same object. And if I checked p1.X, it would now be 10. We've changed the same object, so they both still point to the same object that reference check is true. And of course the second piece p one and p three is still false. So that gives you a little bit of understanding of how the equality works. For reference types it's reference equality. For value types, structs and records,
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/equality-comparisons?u=76281980&t=284)** it's a value equality. And as you saw, we can change that behavior. So here I created operators for my point, my struct, to support the equality and inequality operators. You could do the same thing on a class. You could implement that logic and make it work the way you want it to work. You can override the dot equals method. And in fact, I'm getting a little squiggly here telling me I probably should override the dot equals method for my struct to make sure the behaviors the same as what happens if I use the operators. So you have the ability to change that default behavior, but it's important to understand what it means when you're comparing one object to another.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** as you saw (1)
> **Speakers:** - [instructor] (1)

#### [Defining abstract classes](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=0)** - [Instructor] We've seen how to create types and even some derivation and interface implementation. I want to shift to talk about abstract classes. So I've still got my IPerson interface here, but I've simplified it, with just first name and last name. And I've got an abstract class called Employee. Because it's abstract, I can't create an instance of the Employee class, but I'm defining it as a base class for others to implement. So we've got our properties from the interface. We've got a StartDate that's a property. And then we get into the abstract part here. Now I have properties and I have methods. And if you recall, when we do properties that get and set, though, we often just simplify them like I've done here, actually result in methods. We have a get EndDate and a set EndDate method. So those, just like regular methods, can be marked as either virtual or abstract. Now abstract, as we see here for the ProcessPayroll method on line 24 means that this class, the base class does not define an implementation, but it requires that any derived class does provide that implementation. So ProcessPayroll is a method that any class that derives from Employee will have to implement. Then we have the Terminate method, which is a virtual method. It does have an implementation here. That's a default implementation from the base class. And because it's virtual, that means that a derived class
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=92)** can either override that or can create a new instance. Then we'll see the difference with those two. And finally, I've just got IsActive as a regular method on here. It's not marked as virtual or abstract, which means I can't override it, but I do have some other options. We look at a derived class, like ShiftWorker here. So we've added a ShiftStartTime property, and then I have an override of the EmployeeId property. It's very simple implementation, just returns one in the get, but because EmployeeId was marked as abstract, I have to provide an implementation of that property. The ProcessPayroll, remember, was also abstract, so I have to create an implementation of ProcessPayroll with the same return type, parameters, and I use the override modifier here to indicate that I'm overriding that from the base class. And you'll notice then the IsActive is just that regular method in the base class, and so I've put the new modifier on it because I can't not put a modifier on it, or I have a problem because the base class has an IsActive method, and this while it's just a warning is telling me, "You're kind of hiding that, you want to be a little more explicit and say, you're defining a new implementation of that method." I could, in here, called out into the base class because that methods available in the base class,
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=185)** it's accessible to me here, but I'm saying I want to create a new implementation if I have a ShiftWorker. So let's go look at the ShiftWorker in action here. Important note on line 4, my variable is an Employee. The object is a ShiftWorker, and we're going to change that up in a bit, but that's important, so I have a ShiftWorker with a name, StartDate and ShiftStartTime. And then I'm going to call those methods. ProcessPayroll, Terminate, IsActive, so we can see the output. Remember ProcessPayroll was the abstract method that has to be implemented. Terminate was virtual, we didn't implement it in the ShiftWorker. And then the IsActive was a regular method that we did provide a new implementation in ShiftWorker. So if we run that, we'll see the output, let me see the ShiftWorker payroll, that's what we would expect. But then when we call Terminate, Employee terminated. Again, we didn't provide an override for that, so it's just using the implementation from the base class. Where it gets a little interesting is when we call IsActive, it's calling the Employee implementation of IsActive, not the ShiftWorker, and that's because that variable is of type Employee. If I copy this and I make the variable also a ShiftWorker that changes things a bit, we still get the payroll from the derived class. We still get the termination from the base class
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=279)** because we don't have an implementation in the derived class. But now because the variable is the derived class, we see that implementation gets called with our new implementation in that class. I'm going to go ahead and comment this out just to make it a little easier for us to follow along. We'll uncomment this, we're going to work with a Manager. So if we go look at the Manager type here that also derives from Employee. Notice again, we've got the override for the EmployeeId because that was abstract, slightly different implementation. So maybe we have different systems where we load these objects from and how we get an ID. And then I have an override again for ProcessPayroll, which I must because it's abstract. And here I've chosen to override the Terminate. But now I should see the Terminate operation get called at the Manager level and notice it also on line 75 calls down to the base. So if we terminate a Manager, we would expect to see Manager terminated and then Employee terminated. The pattern back over here is the same. We create a Manager, we're going to call those three methods. Notice again, the variable on line 20 is of type Employee. So now we call the payroll, we see Manager payroll. Great. That was our abstract method that we implemented. When we call Terminate, even though the variable is in Employee, we see that the Manager implementation
>
> **[6:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=373)** of Terminate gets called, it calls down to the base class. So in this case, because we overrode that, it doesn't matter that the variable is an Employee. So that's the difference between override and new. When we override that base implementation, we're going to see, even when the variables of type Employee or the base class, you see the derived class implementation when the actual object is that derived class. And we didn't replace the IsActive, so that of course is coming from the base. Let me just change this to reiterate that behavior. We'll change the Terminate now to new. And again, because we're using an Employee variable when we use that new, instead of override, now when we terminate, it's simply the Employee terminated, we don't get the Manager implementation of that method. Now, if we change this to Manager, we would because now the variables of type Manager, the new method, or the new definition of that gets called. So those are the basics of using an abstract base class. We can look back up at our Employee, again, we've got virtual and abstract, which are slightly different ways to define methods. Either they must or can be implemented in the derived classes. And those again, can be applied to our properties
>
> **[7:46](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-abstract-classes?u=76281980&t=466)** because those are going to map down to get and set methods where applicable.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=0)** - [Narrator] One last type I'd like to talk about is the notion of a static class. We've had instance classes with instant state. We can also have static classes. I come out here and add a class. I'm going to call it Constance. Let's see, yes. We've got a bunch of stuff here that will clean up a little bit, and I'm not going to make that internal, but I am going to make it static. What's special about a static class. Well, I'm really defining a class that I'm going to be able to use without creating an instance of it. In fact, I try and put a constructor on here. I'm going to get a warning telling me I can't create instances of a static class. What I can do is make a static constructor. And what that means is, when this is first used, when it's first initialized, this constructor would get called. Notice, there's no public private accessories on it. It's going to get called. You can use static constructors on instance classes. So if you want to have some constructor logic that happens and set some static state, you can use this on regular classes as well. So maybe I have a static field or static state that I want to initialize here. So I might say private static string, connectionString, as an example, maybe you've got something there.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=94)** And so you want to initialize that once and have it available. I might be able to do connectionString=Server=that whole bit. And maybe you're loading this from config or you're otherwise getting this and setting it up once. You want to do that. And then for the life of the application, you want to have that constant or that static value set. Another common place where you may use a static class is for actual constants, like my class name implies here. So perhaps you're going to use it for a configuration key. So you might say something like public static string might do the config, and that might be something like SERVER_NAME= . And then you could set up whatever that configuration key is. So maybe it's TargetServer and you're going to load the value from there. So the static value is the key that you're going to look up. It's static, it's available now as a string, the other thing you can add is readonly. It really just means that we're going to identify this as having to be initialized when we construct this. You'd also, instead of static, you can say const string, maybe we'll do a different one, which is something like database name. And so what's the key for that in our config DatabaseName. Both of these will work. Because it's a constant, it's treated a little differently. This is something that's going to get optimized by the compiler,
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=186)** may actually impact other libraries if they use this. So use const sparingly for things that you know, actually aren't going to change. Whereas you can use the read only static for things that are primarily going to stay the same, but may change over time. And of course, for helper methods, you can use statics. So you have a static class. We can't put instance methods on here. So if I tried to come in here and say public int GetRating, something like that, I put an implementation on here, return 5. That's going to give me a warning saying you can't have an instance method like this on a static class, but I can't have a static. So maybe I'll make this a static method. It's going to return me a DateTime and I'll have it called GetDateTimeFromDateOnly. And then it'll take a (DateOnly) as a parameter, the input. And now I can return something like a new DateTime, and I'll use that input year, input month and input day to get me the values I want in return that object. We go out to our program here to use that static class, Constants. you'll notice got some IntelliSense here with the stars. We look, I have the CONFIG_DB_NAME and the config server name.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/creating-static-classes?u=76281980&t=278)** The little icons or glyphs are slightly different 'cause one was a constant, one's a static field. And I have my GetDateTime from DateOnly, and My Property. So without having to create an instance of this, I could go in and get the Config.dbname. That's going to be a string. So string db= Constants.CONFIG_DB_NAME. These aren't the only ways that you can use static classes, but these are some common patterns that you'll see that make static classes useful or these static values, constant values, as well as static methods that you can use simply in your applications.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-expressing-equality?u=76281980&t=0)** - [Instructor] Hopefully you didn't spend too much time on this one, because what we want to do is change our type definition in order to allow it to be compared or check the equality by value. And we can do that by changing from a class to a record type. If I go down now and test my code, even though we've got some red squigglies, we should be fine. And we get a true. Now, one of the other things you may have tried is to change, not to a record, but a struct. And if you tried that, you probably saw something along these lines, saying the operator cannot be applied to operands of type, answer and answer. If you're doing those structs, then you can override that equality. But the simplest way is for us to use the record type that is compared by value. So when we create A and B, our variables down here, and they're two different answer instances, they're compared based on the values of their properties, name, age, hire date, and not whether the two variables, A and B, point to the same instance, as they would with a class.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 3. Organizing C# Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Using namespaces to organize code](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=0)** - [Instructor] Now that we've started creating types and using types, it's important to understand how namespace has come into play. All .NET types, belong to some sort of namespace. If you take a look here at our Constants.cs file at the top... I'll just collapse my class definition here. You can see that we have a namespace [[LinkedIn]].Essentials wrapping that class definition. And this is the traditional way that you would define the namespace that your types are contained in. In the middle file are defining types where we have our person, and our employee and manager. Notice at the top, we have namespace, LinkedIn.Essentials, and a semi-colon. So, the real difference here is the first example of top. You wrap the classes or types within the namespace. And in the second in the middle, you simply declare the namespace at the top with the semi-colon. That one, as you can see from the comment is new in C# 10. And it essentially came about because most people define one type per file. And even if they don't, all the types in a given file are probably in the same namespace. That's part one, we've declared the namespace that our type belongs to, but the other piece, and we've skipped over this a bit in our earlier examples shows up in the bottom pane in our Program.cs. Here, I've got on line two, a namespace declaration saying I'm using the LinkedIn.Essentials namespace. What that means is bring that into scope and any types
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=96)** that are defined in that namespace should be available without having to be fully qualified. So, our constants that we used before on line four shows up and works just fine. Now, if I comment this out, we'll get an error. And we saw this in an earlier example, when we were using the command line compiler. We got an error that it couldn't find system. So here it's saying, well, I don't know what Constants is, it's not currently in scope. But I can copy LinkedIn.Essentials here, paste that at the beginning, get rid of the semi-colon, and do a dot and now it's happy. And this shows that the type name is actually made up of both the namespace and the type name. So, you can think of this as the fully qualified type name for our constants type, the LinkedIn.Essentials.Constants. If we go down to the Program.cs, and I try and do a Console write line. They all write out that DB string there. This is where we saw that problem before, because Console is actually in the system namespace. Normally, I would have to do something like this. Let me see, we don't have any problem with that. In fact, they can also come down and use System.Console. It does tell me then by dimming or graying out line three, that I don't need that using statement because I'm fully qualifying it. What's happening here, again is something new
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-namespaces-to-organize-code?u=76281980&t=189)** in C# 10, and .NET 6 where we have namespaces that are automatically in scope. So, there are default namespaces defined and they'll vary based on whether you're building a Console application or a web application, but you can get a reference to all of those different namespaces that are included by default when you compile using visual studio for example, in the project system. The key thing to understand is that in order to use a type, you either have to use a fully qualified name like I'm doing on line five in the bottom, or you have to include the namespace with the using statement, and then you can use the type names themselves. And the whole point of namespaces is to help make type names unique so that my person class or my employee class doesn't clash with an employee class in a library that I'm using.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=0)** - [Instructor] This notion of namespaces and fully qualified type names is hopefully easy to grasp now in this single application, but let's make it a little more complicated by going to our solution and to choose to add a new project. I'm going to add a library project here. So it's going to be a DLL that we have as part of our solution. It's going to be a library for our types. So we'll call this [[LinkedIn]].Essentials.Types.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=34)** And we'll add that in choosing to use the dotnet 6. And now that we've got that project, let's go ahead and bring these types down here. So I'll drag the defining types and the constants over there, we'll clean up the default class one. And then we'll remove those both from this project or from the application itself. So now we've got our program.cs. That's in our little console application and notice we're starting to get an error here saying I don't understand this LinkedIn. Even if I go up here and I uncomment the using again, it says, I don't know about this LinkedIn. It turns out that namespaces aren't enough in order for me to use that namespace, I have to reference the assembly that contains it. The simplest way to do that in this scenario is to go right click on my project. I can add a project reference and then it'll show me my projects and I can select that particular project. You'll notice I have other options here. I can go browse around for assemblies or those DLLs that are round and even go back and find some old COM objects that are available. Shared projects is another type of project. But for our example, we'll use this one right here. And now it's saying great,
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=127)** now I understand the LinkedIn essentials. I'm having a little problem with the constants and we're going to talk about that shortly, but now I understand the namespace. Again, it's grayed out on line two because I'm using a fully qualified name here. If I get rid of that, now my LinkedIn essentials, still grayed out because of this problem. So let's say we come in and we do something like this employee e equals new manager. We can do e.FirstName equals hello, and then we could write out our e.FirstName. These types, turns out are all available from that referenced assembly. I can see the employee, the manager type. I have access to all of those because that namespace is now in scope and I've added a reference to the assembly. With the Csharp Compiler, we looked at doing that on the command line, you can add references in. So what you're essentially saying is compile these Csharp source files, but know that there are some types I'm using that are in these referenced assemblies and the compiler then knows where to go and look for those to understand how to compile your code. Another common way that you're going to add a reference is you're going to use NuGet, as I mentioned before. So if I come to the project, go to manage NuGet packages. And again, these are things you can do on the command line, or you can do them in your IDE.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=221)** So maybe I'll choose [[JSON]] here and I'll get the very popular Newtonsoft.Json. And I'll choose to install that so now I'm installing a NuGet package. And what that means is it's going out to [nuget.org](https://nuget.org), downloading the package file with all the [[Metadata]], all the versions we saw, it's installing it into my program here. I've got a particular version installed. And then if we go to the project and expand its dependencies, so we have a packages node, and there's that Newtonsoft.Json. If we go to the projects node, we'll see our project. We can see the different references that we have. And now, I could do using Newtonsoft.Json to bring that namespace in. I'm not currently using any of the types there. And so it doesn't necessarily need that using statement. So I could do a JsonSerializer. Let's say I want a new JsonSerializer and then I could say s.Serialize and it wants a writer and an object, or I could go out and get a text writer. So we can go and say, let's write out to Console.Out and let's pass our employee. Then we can run that and see that we're now using a package from NuGet that's added as a reference to our project. So we've been able to pull in the namespaces
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/referencing-dot-net-assemblies?u=76281980&t=314)** and use those types as well. On the first two lines, you can see the JSON representation of my employee was written out. And then right after that, on the end of the second line is the hello, which was the first name that we set. You can add references to other projects in your solution to other DLLs that have been built and delivered to you in some fashion, maybe from another team, or you can use the package model through NuGet in order to grab those packages, download and install them and automatically get that reference added.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=0)** - [Instructor] Remember that when I tried to use that constants from my [[LinkedIn]] essentials, I don't have any properties there. If I look at the error from the compiler, it says it's inaccessible due to its protection level. In addition to the namespace being in scope, the reference being there, I also have to make sure that the accessibility that I've defined opens up my type to all the users I want or locks it down to those that I don't. We were able to use employee and manager, so you can see there's a difference here. I have a static class constants. We open our other classes. Notice these, including the interface, all have public as the access modifier at the beginning, meaning that they're accessible within this library, to derived classes, and even outside this library. Public essentially opens it up to anything that has a reference and has the namespace and scope. Constants, on the other hand, has no access modifier, and so for a class or record or a struct, the default is internal. That means that it's accessible within this set of compiled together files or within my assembly. So I should be able to go into my defining types, go into a method here, maybe the is active, and I could go use the constants. You can see there's all the different properties there, so maybe I want to get the config server name from that, and I can use a string server equals because I want to use that here in my code for some reason. Being internal, constants is unavailable
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=93)** to all the different types inside this library that we're building. If I go back, you can see I have the private static string connection string. That's private, which means it's only available within this static class, so if I come back out here now and I try and use the Constants.ConnectionString, it's not there. We could try typing it out. It's got a lowercase C, that's why I'm getting that error, but we'll see if we type it right, it will say that it doesn't exist or it'll give me the error that says that it's inaccessible. Private then means it's accessible within that type itself. So we've got public, accessible to all, private, accessible just within that scope or within that type, and then internal, meaning available within our library, and the other one you'll commonly see is protected. So maybe for this public bool is active, we'll change this to protected, and what that means is, it's accessible from this type or derived types. So if I go back out to my program here, we'll save everything to pick that up. I've got the employee that we've defined. Let's go ahead and see if we can call is active. Nope, we get an error. Again, it's inaccessible. We're in a different library.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/applying-access-modifiers?u=76281980&t=185)** We can't use it here, but we can, if we go to the defining types, 'cause it's defined in our employee class, we can use the new down here in is active, or we can, because we're in a derived class, we can say base is active. Protected items can be accessed from those derived types. There are some other combinations you can use, such as protected internal, which is really about combining those two things, so derived classes or internal types, so anything within the assembly, for example, or derived classes within the assembly or from another assembly that maybe references and uses your class as a base class. And private protected, that gives you both private, so within the class, as well as protected in classes that derive within your same assembly. This lets you control the accessibility of those methods and properties on your types to lock down the state or the functionality to only those types that should be able to use it. We'll go out here to our program and fix that, so everything continues to be happy.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=0)** - [Instructor] I mentioned that one of the purposes of namespaces is so our types don't clash. Let's go over to our [[LinkedIn]] essentials types. I'm going to add a new class, going to call it manager.cs, Notice that by default, I get a bunch of using statements up at the top. They all gray out cause we're not using them. And then I get an internal class, so let's make it public called Manager. And it's in the LinkedIn essentials types namespace. Our other manager class over here is in the LinkedIn.essentials namespace. So if I go to program and I say, I want to create a new manager, by default because I have the LinkedIn essentials namespace here, it's perfectly happy. What if I'm also using the LinkedIn essentials types namespace? Now I have a problem because manager isn't clear. Is it the types.manager or is it the essentials.manager? I could fully qualify that. So I could maybe copy this here and I could bring it down and paste it. And now it's clear. Now I've given a fully qualified name. This is a very simple file though, as you start using this if you're creating class, or you're creating something where you're using multiple types from these namespaces, it can get very verbose. So one of the things we can do is alias our namespaces. So we can say maybe LE equals LinkedIn.essentials and LET equals LinkedIn essentials types.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/aliasing-namespaces-for-clarity?u=76281980&t=97)** And now if I want to use that manager, I can see LE.manager. Notice employee is now giving me an error because it doesn't know what namespace, so I have to give it the LE there. So it's a combination here. I'm still fully qualifying the type name, but I'm doing it with the alias so I can be less verbose. You may see this in existing code bases if you're not using it yourself. So I want you to understand that those aliases defined up at the top simply give you a shortcut to fully qualify your type name further down.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=0)** - [Illustrator] You're already familiar with the concept of declaring variables. Let's clean this up a little bit from our last examples, get rid of some of these name spaces that we don't need, and in fact we can get rid of the alias now because we're going to change this to a shift worker. So we have an employee variable that points to a shift worker. So E first name, so all happy, if I come in here and I look at the options, I can see things like end date, last name, start date, all those employee properties. If we bring up our defining types and I'll just put it in a separate group here, you'll notice our shift worker has a property called shift start time. If I try and use that variable, you going to see that I get a error because employee doesn't contain the definition. And we've seen this before in our examples, it's the type of the variable that dictates what the compiler expects or thinks is available. If I make this variable a shift worker, now that's going to be happy. It's a time only so I can do a new time only. I can say that they start at 8:30, that's their shift time. Likewise, if I change this to the interface, I person, that still works for shift worker,
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/declaring-variables-using-types?u=76281980&t=92)** and first name is still there because that's part of the I person definition, but I can't then set the shift start time if I use that object as an I person. I could cast to a shift worker like so, I can say start time that around. So I can cast E to a shift worker and get shift start time accessible because now I'm telling the compiler, treat this E as a shift worker. As you can see the type of the variable become very important to the compiler because that's declaring what the type is as we're working with it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Ports:** :30 (1)
> **Speakers:** - [illustrator] (1)

#### [Using the var keyword](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-var-keyword?u=76281980&t=0)** - [Instructor] In other courses or other places in examples, you may have seen something like this, Var x = 10 or var y = "some string". This is known as an implicit variable declaration. We're saying we have this variable X or Y. We're going to set a value in there and at compile time, figure out what the type should be. If I hover over the X, you can see that the tool tip tells me it's an int. It's implicitly typed that based on the number 10 here. If I changed this to 10.0, x is now going to look like a double. So it's inferring that type. Likewise, Y of course is going to be a string. But you can do this with a little less implicit understanding by the compiler. For example, I can simply say var e = new ShiftWorker. Most of the time we think of this as just a simplification of our code. We're declaring this e instead of as a ShiftWorker or an employee just as a var. And that means it's going to take on the type that we have there. So it's often just seen as a shorthand, so we don't have to type out the classes. However, as we'll see, using var in this way with implicit typing, isn't just useful for simplification of our code, but it also becomes required in cases where we don't necessarily have a type name.

> [!info]- Semantic Content
>
> **Versions:** 10.0 (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Working with anonymous types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=0)** - [Narrator] Let's get rid of our ShiftWorker here, and I'm going to create a new object. Let's say FirstName equals Matt. We'll do LastName equals Milner. Now, what's missing from this declaration? Well, the first is, we don't have a type name there. I'm saying that this is a new object with the initialization syntax, but haven't actually defined a type name. And this is where that var variable becomes very important because e now is an anonymous type. You can see that on there, the anonymous type, it says that it's new and it just has a string FirstName, LastName. So I couldn't actually declare a type there, I had to use var. FirstName as we see in the synonymous type, it's actually not assignable, it's read only. So we'll go ahead just get rid of that. Of course we can't now cast this to a ShiftWorker because it's not, it's an anonymous type that has these two properties. We'll get rid of that as well. But what we can do is access those variables so I can write Console WriteLine, e FirstName, I have e.LastName. All of those properties that we've declared there are available on this object. You'll see anonymous types get used in a number of different scenarios in C-sharp sometimes with [asp.net](https://asp.net) web pages,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-anonymous-types?u=76281980&t=93)** other cases where we used [[Language Integrated Query (LINQ)|language integrated query]] to project or create new object types on the fly with some state. And in those cases that var keyword is critical because we don't know that type ahead of time by name. We will know what the structure looks like and how to use it, as we've seen here. These anonymous types don't have to be simple like this, they don't have to just have simple properties. You can add this kid's array in here and just put the comma on the right spot. You can see I've added a property called kids, set it up to be a new string array and initialized it with two values. And now I can go in, I've got access to kids, go in and get zero or one in this case, or either of those kids and access those. So maybe string, kid one, do something like that. You can nest structures in there if you want to create an object with a hierarchy inside of there. So anonymous types are very powerful in creating that entire hierarchy, not just a simple type with properties.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=0)** - [Illustrator] Well, Var gives you that flexibility to use the anonymous types, where we know a particular structure. I want to go to another type of variable declaration. Say a dynamic D equals new ShiftWorker, we'll go ahead and create that, we'll initialize it. So we'll do FirstName equal Dynamic. I'm going to make it a Dynamic Worker. So LastName equals Worker. Now, if I go to D dot nothing happens, that's because well Var inferred the type from that statement, a dynamic object doesn't assume any particular type. So I can come in and I can use, D dot FirstName here. I can use D kids here. You'll notice I don't have kids defined on this particular ShiftWorker type, but the compilers not complaining about that. Because my D variable is dynamic. And essentially what that allows me to do, is tell the compiler I know what I'm doing. Don't check any of the things I'm doing with his D variable at compile time. Don't make sure it has a property, or method that I'm calling at compile time, We'll figure that out at runtime. And this is a little bit of a Shift from the typed nature of C Sharp, but it does come in very handy in certain situations.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-dynamic-variables?u=76281980&t=94)** If you know the type, or you know that at least it's going to have certain properties or variables on it, you can use dynamic, and then invoke those operations. So if I try and run this now, go Control + F5, and run that without debugging. We should get an exception when I try and access the kids. There it is, ShiftWorker does not contain a definition for kids. Let's comment that out again, I'm still using the dynamic, but I'm accessing D dot FirstName in my right line. And that should be a valid property for that object. There we go, FirstName was dynamic, and that's what we wrote out. This is different from an interface, or a base class, or something else, where we quote unquote know the types, because we've declared them. Here, we're saying that we know the types at runtime, but not necessarily at compile time. And I use this often, if I have to load types dynamically, for example, if a type is defined in a config file, and I need to create an instance of it, I know it has certain properties or methods, I can use a dynamic variable, and invoke those methods in my code. You won't see dynamics show up quite as often as you will Var. Var is very prevalent. But it's another useful tool to have in your toolbox, if you're working with types, where you know they should have members, but you don't have the type definition handy.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-dynamic-keyword?u=76281980&t=0)** - [Instructor] In order to return a value, we want to be able to use that answerGenerator that gets passed into us, that's the object that has the method. So we want to be able to simply call that, answerGenerator.GenerateAnswer. We want to pass in the number and that is really the solution. But we can't do that right now because the answerGenerator is an object and the object doesn't have a definition for GenerateAnswer. We can change the type parameter here to say this is a dynamic, essentially that gives us the ability to say, I know this object coming in has some particular properties or methods, and I want it to be dynamic so that I can invoke those. And this tells the compiler, go ahead and let me put this in, GenerateAnswer, even though you're not sure that exists. And at runtime, we'll find out if that method exists. So now we've got the expected result, our code returned 98, which is apparently what we should get when we pass seven into this object and generate an answer. I can come down here and change this, something else like 18, and test again. We get a different result. But because our logic stayed the same, and we're still using the right dynamic keyword and the right operation to generate that answer, it matches what was expected.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=0)** - [Instructor] One of the other common types were used is an enum or an enumerated type. I'm just going to clean up a little of our code here, and we'll look at an example, go down below our existing code. From the framework, I can use a var day equals day of week, but with the dot you notice that I have a finite set of options here for the day of week. And this is where enums really makes sense, where you have a constrained set of values and you want to make it easier for people to select them. So I could come in and say Monday or my day and now if I look at day, it's got a number of different properties, all coming from the System.Enum type. So if we wrote out, day we see that there, so we're going to see console right up above is going to say dynamic from our dynamic object and then we'll see what Monday looks like. You can see, we get a string value there for Monday, but if I have over day, just as day of week. If I have over a day a week, Monday, it says one and day of week is an enum, so let's go create our own, you know, rather than have you watch me type, I'm going to just piece this in, we're going to call this ShiftDays. So what we're going to do is use something similar to the day of the week to identify what days someone can work as a ShiftWorker and I'll explain a little bit later why we're not just using day of week. So for our enum,
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=94)** we have all the days of the week and notice that I've assigned a value to them, if I don't, they just get automatically assigned increasing values under the covers based on the base data type. Now for this ShiftDays, I can back out and we'll create a ShiftDay equals ShiftDays. Again, it looks very similar, I have those options. I can say Monday, now there's a couple of things I could do with that again I can just do the console.Writeline of my ShiftDay and see what that looks like. Let's actually change this, so it's different from our previous value. I'll run that, looks very similar, except now we get Tuesday of course, instead of Monday. But the other thing I can do, is I can cash this to an int because the base type for an enum, if we don't provide one, is int. So now I should get the value of that. So I got a four, which if you look in the bottom pane here, that's what Tuesday has as its underlying value as for. You'll notice, I didn't number these sequentially, they do go in order as we go up, but they are also doing so in a way that allows me to have multiple values represented. So Sunday and Monday together could equal three. This is really useful if you're taking these enum values and you're saving them in a database for example, or saving them in some sort of data store
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/defining-enums?u=76281980&t=188)** and you want to be able to represent multiple values at once. Let's go back up to our ShiftWorker here, I'm actually going to take that dynamic out of there and we're going to create that ShiftWorker and we'll clean up this kid's comment here. As none of that have the ShiftWorker, I want to add a property called ShiftDays, cause I want to set that, so come down and do the prop. Let's say it's ShiftDays, days available. So these are the days that this particular worker is available to work during the week. Now I can take that worker, days available equal ShiftDays and we'll say Wednesday, I'm going to drop down here and instead of putting out the first name, I'll do days available and I'm also going to come down and just so we get a cleaner look in our console, we'll comment out those other right lines that we had there. So now if we do that great, we get Wednesday and now we start to see why we're going to create our own enumerated type, other than just learning about how to create them because the day of week, the enumerated type only allows a single value. We're going to want to be able to assign shifts for multiple days or show availability on multiple days of the week. So we're going to extend our enumerated type in order to enable us to do that. And moreso look shortly at how to compare a variable with the different enumerated types.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Enabling multiple enum values](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=0)** - [Instructor] If we try to take our type an add by using a Bitwise operator like the or, let's say Thursday. What we'd like is for our days available when we represent it or say D days available here in our console right line to show Wednesday and Thursday. We're combining those two values. If we do this, we run it, you'll see we get 24, which is Thursday plus Wednesday. It is 16 plus 8, and that is the integer value, but that's not really what we want. Certainly we could store it in the database that way, that's why we numbered them this way. But we don't really want that. What we want to be able to do is treat them a little more like Bitwise operators with flags. So we can add an attribute called flags to our enum. And that essentially tells the compiler to treat it a little bit differently and that this particular enum can have multiple values in it. So simply by adding that flags attribute, if I run it now, we see we get Wednesday, Thursday. That's what we would expect in our numerated type. That flags attribute along with the way we've numbered these really enables us to have this kind of combination of values that we can store in a variable. Now the other thing we could do is come in here and we could actually have this derived from short. And I just show you that, because again, if we're talking about storing this in a data store somewhere, maybe you have requirements around your data store
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=93)** as to what types you can use. You want to use the smallest type available. So we might use a short instead of a full-blown in, because we're not going to have really high values here. The other thing is you start to look at this pattern of Sunday and Monday being one and two, those two together would be three. Likewise, we see Tuesday as four. If we had Tuesday, Monday and Sunday, that would be seven. So this is why we get this numbering pattern. But what's Saturday plus Sunday? Well, that's 65 and that's the weekend. So we could do something like this. And we can add all these things up, but I can tell you that weekdays is 63, because it will become right before 64. And these are now valid values within there. In fact, if we came up here and we said, Hey, you know what? This is Saturday and Sunday. Those are going to be valid values. Those would add up to 65. So if we run that, we can see that we get weekend. If we leave that out, we're going to be back to where we were before. We run this again, we're going to get Sunday and Saturday. Because we have the flags, we see that. But if we didn't have the flags, we'd get a 65 here. So we've added these values in 'cause we understand how the numbers add up and what they represent. So we can identify different way
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/enabling-multiple-enum-values?u=76281980&t=187)** to name that collection of values. So we've got a set of values. We can assign multiple days to our shift worker that they're available. We could mix and match those things. We could even come in and say, we want to do weekdays and weekends. We've got somebody who's available all the time. They're ready to work. And what will you expect to come out? Should be all of those different items; Monday, Tuesday, Wednesday, Thursday, Friday, and weekend. Interesting to know we've got all of those weekdays. If I come in here and I just end with weekdays, that comes out as weekdays. So the value underneath that, that 63 can be represented by the weekdays enum, or it can be represented by all of the collection of items that make up that value. And either is valid, it's still going to be 63 at the end of the day.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Testing enum values](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=0)** - Once you've got some enumerated values, you're going to need to be able to test them. You're going to want to check whether days available, for example includes, Monday. So one way to do that is we can look at, let's say available Monday equals, and then we're going to use the D days available. That's our variable that holds that type. And because we're using the flags, we can choose Hasflag, Monday. Now we could do something like this, where we write out available Mondays, and then we'll put the variable in there. Then that is going to allow us to check, does it have that particular flag? So run that, available Mondays, true. That works great, if we have a flag. Another way we can compare these is using Bitwise operators. So let's say available Saturdays, and now we'll go in and we'll say, we've got D days available. We're going to Bitwise and that with shift days, Saturday, and then we'll check, does that equal shift days, Saturday. So that's how we'll get that value. And then we've already got our days available down here. Let's go write this again, we'll say, available Saturday. And we'll put that variable in there Saturdays. Add our last closing quote there. And we'll write that out.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=95)** And because we've got the shift days, weekdays up top there, that should be false. So we can say Mondays is true, Saturdays is false. If we were to go up here and shift say, yup, they're actually available only on the weekend they should flip-flop. So available Monday is false and available Saturdays is true. There are a couple other handy methods on the system enum type. So we can drop down here a little bit. We'll add these in. So for example, we could get the shift names and we could do system.enum.GetNames and then we can pass in the types we'll have to say type of, just pass the type name, shift days. And that then is going to get us a list which is going to be an array of strings. So now we could go to write that out. We can use the string.join method tell it to join this set of strings with a comma, shift names. And now we should see all the available options there for the shifts. So they're on the fourth line. You can see we've got all of our available options from Sunday through to weekday, Saturday and weekend. And that's pretty handy. If you need take that enum and display it, for example, where you want to create a dropdown or a selection for somebody to be able to see, these are all the values that are available here.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/testing-enum-values?u=76281980&t=189)** You also get a list of values. So we could say shift values, and now we're going to have to cast this to an array of short. System enum, get values. The we'll pass the type of shift days. That's going to give us now an array of shorts, and then we can do the same thing we did up there. So we can do string.Join, pass the comma, and here we'll do this shift values. Now one closing parenthesis. And now you see we get one to four all the way up through, not only the values for the days, but the other pieces of our enumeration, the weekdays and the weekend values as well. Again, very handy to get the names, to get the values in order to populate choices, usually in a user interface. We also saw how to do the comparisons then, especially if we've got multiple values where we can come in and check what somebody selected or what a value is against some known quantities.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **UI Navigation:** go to (1), dropdown (1)
> **Speakers:** - once (1)

#### [Understanding nullable types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=0)** - [Instructor] We've looked at various ways to define types. (indistinct) classes, structs and records. One of the things that many of them have in common, is that the variables can be null, meaning that they point to nothing. We look at this example, the string input is a variable, but it doesn't point to an actual string. The pointer in this case is null. If we have an int, it's a little bit different. With string for example, I could say if input does not equal null, and then I could write this out and I could say string is... I could even then put the string, so we can put here the input. And of course we put our placeholder in the string format there. But if I come down and try and do the same thing with the int, so I'll say if definiteInt, is not equal null, maybe I want to write out the value there of that. So I can just do, something like this and I can put the variable in there. And I'm getting some warnings here because, that definite int is a value type. Why does that matter? Well, it's important in programming to be able to represent a null value, think of an integer for example, that's age. So maybe I have here, an int, age. And I can set it to zero and that's okay. But what if somebody is filling out a form,
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=94)** somebody's creating input for me and they don't provide an age. Sometimes I want to know that they haven't provided a value as opposed to getting the default value, which is zero or for a string, maybe an empty string. Null has very real context and connotation in certain scenarios. So what can I do to fix that? I can't change the behavior of int, but what I can do, so I can come up here, put a little question mark at the end of int age. And now, it says that age is zero. That's great, but I could also say that age is null. That question mark makes that int nullable. That means that it can have a value of null. Another way to write that is, nullable int, call that age2. We'll say that's null. Generics is topic for another course, but that nullable of int is a generic. It means that it is a nullable value and underneath it is an integer. If I come down here now and I say, if age, does not equal null, I can put the age here. I can even say age is and put that out. And that all works now because that int question mark or that nullable int age can be null. So I can do that comparison to check whether or not it has a value assigned. So our reference types have always been able
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-types?u=76281980&t=187)** to point to nothing or be null for the variables, but for value types, maybe use this nullable pattern and this nullable type in order to allow them to have a null value as that's not part of the value type or struct by its nature.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), means that (2), is an  (1)
> **Analogies:** for example (2)
> **Code Identifiers:** definiteint (1)
> **Speakers:** - [instructor] (1)

#### [Using nullable types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=0)** - [Instructor] Because we're working with a nullable of a type that nullable actually has some additional properties that we can use. So I can look at age, I can choose to check if it has a value and that's going to be a Boolean property that indicates whether or not this nullable actually has an underlying value. If so, then I could copy this, for example. I could come down here and paste and now I could use age.value. And that is whatever that underlying type is. In this case, it's an Int. If I had a nullable of a date time, value would be of the type date time. And so before I access the value property, I want to check the HasValue property. If HasValue is false, and I try to access value, I'm going to get an exception. HasValue is true, I know that I'm free to access the value property to get the underlying value. What's happening on line 15 is that the nullable type actually defines explicit and implicit conversion operators so that it can convert from a nullable of Int for example, to an Int or a nullable date time to a date time, so that we can do those sorts of comparisons between nullable value types and non nullable value types or constants even. Another way to look at that as I have the age, I might say age equals 17,
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-nullable-types?u=76281980&t=92)** My age is a nullable Int, but because we have that explicit and implicit conversion, I can give it a literal value of 17 and set that. I don't have to specify age.value equals 17. And in fact, that'll get me in trouble because that is a read-only property. The intent of these overloads and this behavior is to make a nullable value type like this behave as much like a reference type as we'd expect so that we can check for a null. So that we can assign values and read values. But there are cases where we're going to use that HasValue and the value property to very explicitly check and retrieve values.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Working with null objects](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=0)** - [Instructor] There are a couple of really useful operators when you're working with nullable types, whether they're reference types or value types. I'm just going to clean up a little bit here, get some things out of the way. Let's say we've got our definiteInt up here, and that, remember, is an integer. So if I try and set that equal to age, let's just pretend we're going to end that statement. It doesn't like that, because age could be null, and definiteInt has to be an int. So we can't do an assignment here. It doesn't automatically, for example, convert age to zero. But what we could do, is we can say, well, if age is null, then I want to assign 17 into definiteInt. So these two question marks together, the null coalescing, evaluates the left side. It says, are you null? In this case, if age is null, it says, well, what's on the right side? 17? Okay. That's the result of this expression. So definiteInt would be 17. We can take this, copy it, put it up here, and instead of age, we'll put definiteInt there. Let's just comment this for now. And we'll run that, and we should see that age is 17. Now if age isn't null, for example, if I came in here and said, age equals 12, well then, definiteInt should be equal to 12 because age is not null. Age is 12.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=94)** So that's one handy one. Another handy operator is the null coalescing assignment, or this two question marks and an equal sign. This expression works by evaluating, again, the left side, the age. And if it's null, then it assigns the value on the right side. So if age is null, it should get set to 12. We should see 12 all over again, not much different than what we had before, when we already assigned it. But if I'd set age equal to five, now, on line 10, age is not null. So it shouldn't get assigned 12. It's already got a value, it should keep that value. And our definiteInt should also end up being five, because age itself is not null. So it shouldn't get the value of 17 applied to definiteInt. And we run that and see that, age in fact is five. Those two operators really help you in working with these null values, providing actual values if you have a null in that variable, or assigning to that variable, a particular value, if it's null. And these can replace the longer, but also useful, syntax, where it might say something like, definiteInt equals, and then we could do age does not equal null. In that case, we want to use age dot value. Otherwise we want to use 17. This is a different way to write these kinds of expressions, where we have a condition that age does not equal null.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-null-objects?u=76281980&t=190)** Question mark, if the condition is true, what's the value, colon, if the condition is false, what's the value. You can see that line 11 is much more terse and concise, and a little bit easier to follow in a lot of cases.

> [!info]- Semantic Content
>
> **Code Identifiers:** definiteint (9)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Understanding nullable reference types](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=0)** - [Narrator] We've done a few things here with some nullable types. Let's look at a common problem that we run into in programming. And that is the no reference exception. Got a method here I just pasted in called pad and trim. I've used it a lot lately to pad and trim strings for file output. So I've got a string input, a final length that I want the string to be and a pad character. So I might be adding zeros to the end of something or the beginning. I might be adding spaces. I need the string to be a certain length, and I'm going to fill out the empty space with a particular character. So I return, I just take that string input. I trim it, so I get rid of all the space. And then in this case, I'm going to pad the left. I'm going to say how long I want it to be and what that pad character is. So we can come up here. I can tell I want to write out pad and trim and take my input variable from above. Maybe I want it to be 15 characters and I want to make it filled with zeros. But if we look, our input is null. We haven't actually assigned a string into that input value. The compiler seems happy if I do a whole BB here to build. My build succeeds, I'm going to go to run it. Now I get an exception. Unhandled exception, system no reference is very common in all programming, but also in C sharp. And that's because my input object can be null, and I didn't check it.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=94)** There are a number of things I could do. I could come in and say, if input does not equal null, I could do an Ells and return an empty string. The other thing I can do is come in and use this conditional null access operator, which says if input is null, then don't call trim. Or if the result of trim is null, don't call pad left. So I won't be accessing that object if it's null. So what happens if we write that out? Well, that works, but I'm essentially getting back null from that pad and trim. And that's not really what I want. I didn't pat it out with those 15 characters. That's an example of reference types or nullable types being a problem, creating that reference exception. I'm going to go back to something we looked at very early on in the course, I'm going to my project and edit the project file. I came in early on and I disabled this nullable types. I mentioned that in C sharp 10, dot net six, the behavior for reference types has changed. So I'm going to change that to enable. And we'll see what that does to our program. This is a set of features known as nullable reference types, which maybe doesn't make a lot of sense since they were always nullable, but it allows us to treat reference types much like we treated our value types up there where we were very explicit in saying it was nullable. Now we start to get some warnings here
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/understanding-nullable-reference-types?u=76281980&t=187)** and the pad and trim, if we look at the input, it says the input may be null here. Looking at our code, the compiler has used some static analysis, and that's one of the components of nullable reference types to figure out that this is probably, or maybe null here. I don't see anything that has assigned a value to the input. Likewise, as we get down to the bottom, it's indicating that it's possible you're going to return null here. The return type of this method is a string. But if input is null, we're not going to call trim. We're just going to return the input, which is null. Notice if I run my application now, I still get age is five. I'm not getting the exception, but I am still getting empty output. That pad and trim return null and the right line then put out nothing. This change hasn't changed that runtime behavior necessarily, input is still null, and I'm still getting some warnings there, but it works because I put in the null checks and it's okay to pass null to console right line. And this is where the nullable reference types come in, where it's essentially about helping you avoid those null reference exceptions.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=0)** - [Instructor] As we work with these nullable reference types, let's start here at the top of the file and work our way down applying the different features that comprise that nullable reference type. So I'm getting a warning here because, string in this context now that I've made that project level change, isn't nullable. It's like an int or a date time of value type, but it still behaves as a reference type. I can use that same syntax, putting a question mark at the end just like I did for the value types, to indicate that this is a nullable reference type. So again, it's all about providing that compiler help. We see that now it's okay to assign null there. If we go down to the next place for our string that we're having a problem is line 16 where that input could be null. One of the things we can do is go to our method now and apply an attribute that says allow null, that's not in scope in the namespace here but if I hit control + period there, using system diagnostics code analysis, so add that up here on line three, and now that I've said that string input can be null, line 17 is happy. It's no longer a problem that that input might be null there. We still have a problem however, that we might return null and that's what it's complaining about here. Well now that we know input might be null, we can say, if input equals null, then let's return, take string empty, and we'll pad that so we use the length, and the pad character,
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=96)** basically we'll just return the empty string padded out to the length that we want, you can put that there, and now I can get rid of these question marks because I know, input isn't null in this L statement. And now all of my strings are happy, if I hit control + F5, I'm passing in null, and so I get 15 zeros padded out there. That hit our line 22, input is null and gave us back an empty string padded out. If I change this to, something, and we run it again, now it's an actual value, it's not null, so it's able to do the trim, and the pad, and it padded out with those six zeros at the beginning. What you're seeing is the static analysis that again was enabled when we changed that project property, or when you start a new dotnet six project with C-sharp 10, you're going to see those kinds of warnings letting you know that things may be null, or that you're working with a nullable reference type or not, and there are a variety of things you can do. Line five we saw we can declare something as nullable, line 20, got the attributes like the allow null here, to tell the compiler that we understand what we're working with, that we're okay with it being null that we're going to handle that, or not. There's a whole variety of these attributes you can use on your parameters, on your return types to help the compiler understand how you're going to work
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/working-with-nullable-reference-types?u=76281980&t=191)** with something that is a nullable reference type or a not nullable reference type. Remember our types from earlier, and we saw early on we were getting some of these green squigglies when we have those nullable types on, we need to find properties again those are now non nullable strings and so it's telling me I need to specify a value for example, but I can make these nullable, and of course I'd want to do that up here in the interface as well, and that gets me back to the previous behavior where a string can be null, and the compiler's okay with that. It's not going to give me those warnings or, look for that and flag that in my application. The other way to handle that is to make sure that your constructors for your types, initialize anything that is a non nullable reference type or value type.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-enum-flags?u=76281980&t=0)** - [Instructor] We start with our days of the week enum, which has INT as a base type. And the test then is going to check whether or not, if we take two days, Monday and Friday, and combine them together, using the bitwise operator there, we get the result. So if we just test by default, you'll see our code returned Friday. It only returned one of those values. So the key thing we need to add is the Flags attribute, but that didn't quite fix it. Though the Flags is one piece of the answer, we do need to say, I can represent multiple values here, but the other thing we want to do is give these particular enums values. So I want to make them use values that allow me to combine them. So you'll notice I'm not just incrementing by one here, I'm essentially doubling them, and that allows me to combine them. So I know, for example, that if I take something like Sunday and Monday and add them together, that gives me a value of three, that doesn't conflict with anything else that I have here. So now if we try this, we get the correct solution because now when we combine Monday and Friday, under the covers they're integers. So Monday's two, Friday's 32, when we combine them then, we get 34, which doesn't conflict with anything else. So we've got both those pieces.
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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=0)** - [Instructor] As we start to look at [[Control Flow]] in our applications, I want to go back and quickly revisit something you're probably familiar with the if statement and the switch statement. With if, as you probably know, you have the if statement like on line 22 here, where we do some sort of logical operation and a quality check or comparison check. And of course we can have the else. I've left the curly braces out, but of course we can add those in here. I want to put that there, it's generally a good idea. If we have a single line, it's okay. But otherwise putting these in tends to make things a little cleaner and it makes sure that you correctly scope that statement. Now, the other thing we can do with the if else is we can actually add an else if. Then I can use input does not equal null, and I can use a larger expression or a logical expression or an and in. May also input .length then is less than or equal to the length that was parsed in. So remember this is our pad and trim function means if you give me a 12 character input, but you told me to pad it to 10, well, that doesn't really work. So now I know that the input isn't null and the length is good, so that all works. And then of course I can put the else on here as well, and then I could return a value or in this case, I know it's not null, cause that would have been an if statement.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=94)** And I know that the length isn't less than or equal, which means it's probably greater than. Maybe I'll throw an argument exception. For a new argument exception, I'll say input is longer than requested length. Will give then an indication of why that's a problem. That's the if statement, fairly common, used in a lot of different languages. We are going to see some ways that we can liven that up a little bit, but we can also use this switch statement. So, if I come in here and maybe I'm going to switch on the pad character. Now the switch, as you probably know, is based on simple types up through C-sharp six. So we can use constant values like a chart, like an int or string. So I could say case, and here I'm going to use a chart. So I might say if it's a space and then I'll use this colon, and then I can execute some set of statements in this case branch. Now, if I do a return, we'll just take the value here, copy it, paste it, will return that same thing. That's happy. Now what if the character though is a zero for example, maybe I want to then return, we can copy that and paste, but we'll change it this time.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=185)** Also we want to pad right. There are certain characters we want to pad right. We also have the default. So that's, if it doesn't match one of these cases up here, then what do we do? So here I might have a whole statement that says no match found for pad character, and we could throw an exception, but for now I want to use the break just to show that for each of these statements, need to have something that executes me out of that switch. That could be a return, that could be a throw of an exception, or that can be the break. But what if, for example, I wanted zeros or nines. Well, now I can add another case here and put that through and that lets it fall through. So if it's a zero, it's going to have no statement in there. It's going to fall through to the case nine. And so either of those would end up with a pad right. Likewise, it could come up here and say, well, if the case is the pipe character, I'll put that here. And so these things can fall through essentially giving me an or. It's either a space or a pipe, do this. If it's a zero nine, do this. If it's none of those things or the default, then we execute our default and write that out. So in our case, when we used this before, we had a length of 15, we did a pad character of zero and we have something which is nine characters. So we run this.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/if-and-switch-revisited?u=76281980&t=281)** I should see the ages five that's from before, and then our something got padded out with zeros. Wasn't null, the length was under 15 and that pad character was a zero so we did a pad right. We padded it out to the right to 15 characters. Again, probably nothing new here. What I want to show is this is the basic behavior of if and switch statements. And the switch used to be tied to these constant values or enems that we see here. But as we're going to see, we're going to have different options now with the more recent versions of C-sharp in order to have more dynamic switch logic and do some different tests in our if statements.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=0)** - [Instructor] Starting on line 28, we've used a switch statement, which has the switch key [[Microsoft Word|word]]. And then the item we're evaluating in this case padChar, and then the curly braces wherein we define our case statements, the different branches. And in each case, we can have any number of different steps here that we can execute. In contrast, we also have the switch expression that was introduced in C-sharp eight. I'm going to add a new method here, and I'm going to say that it's going to return a shift days. Let's say, get shift days. And that's going to take in a day of the week. We'll call that day. And I'm going to use an expression body method definition. So you can see we have that coming across here. And now, we'll just say day switch. And now, I can have an expression inside of here. So it's slightly different in that we're declaring first, the item we're evaluating the day, and then the switch statement. And now, we're going to have a series of expressions. For example, a day equals day of the week Monday, then we might want to return shift days Monday. Put a comma, we could go down here. Now, much like the switch statement, I don't really need this. This is more of an if expression. I can just say day of the week Monday. Remember, we're evaluating that day. So if we do day of week, Tuesday, same thing.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=98)** You start to see how this works. We've got the expression on the left that we want to use as our comparison. And then on the right is the value that this expression is going to return. So we'll just change this to Wednesday, fix all these up.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=124)** Each of these lines then is an expression separated by the comma that's going to be a value that can get returned. And so it's a very simple statement. It's a very simple syntax for returning a value based on that switch. So not using this just yet, but let's go ahead and come up here and we'll do a VAR shift day equal, and then let's call get shift days and we'll pass in date time now dot day of week.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=162)** And then, we can write out the shift day. That's going to go out. Take the day of the week for today. Today happens to be a weekday, Tuesday where I am. And so when we write that out, we should get Tuesday because it's now converted to our enum from the system enum. Now, we can see on line three we've got Tuesday. Now, we're getting some warnings here. And that's because while I have defined a different expression for each of these days of the week, Monday through Sunday, remember that enum is based on a value type and I could pass something else in there. So instead of this day of the week, maybe I'm going to pass in something like casting day of the week, 17. Well, what's that going to get me? Day of the week is based on a number. So if I pass that in, I get an exception. In this case, C-sharp 10, it's a switch expression exception saying that I went through the whole list and didn't find that item. So what we'll do is we'll just put an underbar here. This is equivalent or default. And then we can throw our own exception. So we can throw a new argument exception. We'll say invalid day of week supplied. Let's save that, run it again. Ah, now, we get our exception. So we know that we are handling that.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/switch-statement-vs-switch-expression?u=76281980&t=253)** We could choose to do something a little less invasive than an exception. We could default to something else. We could handle it in another way. In this case, we can see that the branching works, that the underscore then is our default. And in this case, we threw our own custom exception. Now, I'm using that switch as the body of my method here. So I'm switching on day, that's an expression. It's returning a value. I could use that in line and a method. I don't have to use it as the full body of the method. This is just an example of one way you can use that switch expression. Create a simplified method implementation.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=0)** - We go back down here, notice we did some checks around inputs being null or not null. There're other kinds of checks that we might want to do against say the type. So we're looking at the type and whether or not it's null, but we might want to do something like this. I'm going to paste a couple items in here. Line 62 and 63, I'm defining a shift worker and a manager, but notice that the variable type I'm creating is an I person. I'm saying I have a shift worker that implements I person. So my variable SW is an I person. Likewise, my MGR or manager variable is an I person. And I have a get person details method that takes an I person. In earlier versions of C-sharp, you might do something like you see here on line 68, where you would use the as keyword in order to essentially cast an object. On the left, I'm saying I have a nullable shift worker. Remember our nullable reference types now. So this is a nullable reference type. My shift worker equals P the I person that was passed in as a shift worker. If the I person that was passed in is a shift worker, then we should get a value SWV should be a value. And we can then come down here and say, well, if SWV doesn't equal, null, then we're safe to go in and return first name, last name, start date. Then go ahead and just returned string dot empty here
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=93)** to make it happy, in the case where we don't get a value. So if we key in, we did a console write line. We could go get person details on the shift worker, and we could do the same thing for the manager. And we should see those results. While we're here. Let's go ahead and go back up. We're just going to comment out our other rights, so that we can actually see just that one.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=133)** So we run it and we get a line there. Shift worker with the date, and then for the manager, because it's not a shift worker, it doesn't print anything. We get string dot empty. In the more recent versions of C-sharp, we can clean this up a little bit. For one, we can use the is operator or is not. So we can say, if it is not null, great, now we know we can go in and we can test that. That's okay, but that's not exactly what we want. We can do one better. Let's go comment this out. And now we'll say if P is shift worker,
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=177)** and we'll add this SWV. And this shows two different things. One, the P is shift worker could be used alone. That would say true or false. It is a shift worker that is essentially taking the statement above where we did the as expression, and then checked if it wasn't null. This is telling us yes, it is a shift worker. Now you can see, we don't have on line 73 an actual variable for this. That is a shift worker. We still just have P. And so that's where, when we add this bit, it's also a declaration. This is a shorthand way of replacing what was line 70 and 71. Saying if P is a shift worker and it's not null, then assign it to SWV. So we run that again. Let me see we get the same results, for the shift worker. Everything works. If it's a manager, then it isn't a shift worker. And so we don't fall into this if statement. We could, of course come in and do else if P is manager, MGR.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/using-the-is-expression?u=76281980&t=250)** Then we could return something like, we'll take that same bit up there, put it down here, but we'll use the manager instead of the SWV, do first name, last name. And we'll say reports because for the manager, we've got a different property we can use, which is the number of direct reports. And so you can start to see why we might use this, because we have the interface, but for a specific implementation type, we might want to access it as that implementation type, and not just as the interface. So now if we run, now, we get two different outputs, for the shift worker, we get the name and date, and for the manager, we get the name, and the number of direct reports. We have as, and we have is. The, as takes that variable, P tries to make it a shift worker and either returns that as a shift worker or as null. So that is helpful in and of itself. We take the, is, which can give us the basic tests or the is plus the declaration here, which can test and then give us a variable of the type we want in order to work with it.

> [!info]- Semantic Content
>
> **Definitions:** is a  (7), is an  (3)
> **Env Vars:** swv (5), mgr (2)
> **CLI Commands:** make (2)
> **Speakers:** - we (1)

#### [Introduction to patterns](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=0)** - [Instructor] In the next couple of videos, we're going to be focused on patterns. Patterns are used with the is statement, the switch expression, or the switch statement. In fact, we've already seen some. You can see here on line 71, we have the declaration pattern where we've said p is a ShiftWorker, declare this swv as a variable of type ShiftWorker and give it the value that came in as p, but as ShiftWorker. Likewise, when we didn't have that, this is a type pattern. We're saying a particular variable is of a particular type. We'll put that back in there. When I say those patterns can be used in is statements like this or our switch expressions, that means we could rewrite this. So remember, a switch expression is going to return a value, and here we're going to return a string in each of these cases. So if we just said p switch and then we came down here and did that, now I can do ShiftWorker, and I can do something like this where I have an expression. But I want that swv, I want that ShiftWorker variable. And now I can take this, I don't need the return statement, I can just construct the string and put a comma. I'm getting a little error, because we've already got that down here.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=93)** So let me just go ahead and comment this out so it makes it happy. We aren't going to get that. So now what we need is a variable, so var result = p switch. Again, that is and an expression. So now we can say Manager mgr and we have that, again, we can take this across, grab that value, paste that. Now we can do our default here where we say string.Empty.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=131)** We don't need to declare anything there. Need to add our expression there. So now we've got a result and we can just return that result. I wanted to use this example, because earlier I talked about that switch expression, and I wanted to show you can use it inline like this to get a single value back. But also, I want to show you that those patterns apply in the is statement, which I'll often use in an if scenario, and they work in the switch expressions and the switch statements. I don't have to have a constant value that I'm evaluating in my switch. It's a type. I'm doing an is comparison, essentially, saying this p is a ShiftWorker or is a Manager. So I'm doing that type checking, but I'm also using that declaration pattern right now, get the variable, to use in my expression to create that return value. We run this just like before. We should see the similar results, nothing too exciting, but shows that our switch expression now is working just like our if statements were before. And that's the power of patterns. These were introduced back in C# 7.0. And what I love about patterns is that each version of C# gets updates to the different kinds of patterns you can use, and this makes much more powerful the switch expressions and the switch statements that used to be constrained to those constant values. You can still use those,
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/introduction-to-patterns?u=76281980&t=223)** but we've got a lot more options.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=0)** - [Instructor] Let's go back up to our switch statement here. And you can see as an example, we were using a constant pattern here, where we're using a constant value, in this case, chars, to do that. What if I want to use something that's more relational? So maybe I want to say it's greater than lowercase a or it's less than a lowercase z. You can see, I've got some little squigglies, some warnings and errors because I'm mixing and matching here the relational pattern with the constant pattern. We'll get that fixed shortly. What I really want is to mix these in a single statement and that's where a logical pattern can come in. So I can say if it's greater than, actually what I really want is greater than or equal to a, and I want it to be less than or equal to z. This is how you might think you would write it, but you actually want to use and in here. So it's a little different than our normal C# syntax. So we'll get rid of this line. And now we're saying, "Hey, if it's a lowercase letter, "then we want to pad left." And in fact, we could do something like this, can still use that to fall through. We could use a capital A and a capital Z. So now we don't care if the character that's coming through is lowercase or uppercase, we're going to pad left. And what do you think we'll do down here on this scenario? Well, greater than, or equal to zero
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=97)** and less than or equal to nine. That'll go through. Now we've got a digit from zero to nine, and we want to pad right. We still got the default. We can still use that. And here you can see a mixing of a variety of those patterns then. We had the constant pattern. We changed it and use the relational pattern where we do the equals or greater than equals with a particular value. And we've got logical patterns in there with and and or that we could use. So this is our pad and trim. You remember, we kind of cleaned up our code here, so we weren't writing that. Let's go ahead and come back and we'll do our pad and trim here. Where we take that input value, which is something. We'll pad that out. And now we get something with the zeros padded to the right. And again, if we changed our pad character here, instead of zero, let's say we want to do Zs, now it gets padded on the left with the Zs and then our text. You can already see this becoming a lot more expressive. Now we could also combine this. If we want to get everything on one line and get it really clean. So we've got all of this statement or we're going to have this statement here. We'll put that in, get rid of the case, and now we have an and with an or. We use the parentheses here in order to give us some prioritization and we can combine all of that into one statement.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/constant-relational-and-logical-patterns?u=76281980&t=187)** So much more expressive, a lot more options for the matching on those switch expressions and switch statements in our C#

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Property pattern](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=0)** - Another very useful pattern we can use is a property pattern. I'm going to create a method here. Its going to be a static bool. And we're going to check, "is weekend night shift". We're going to see for a given date and time, is this on a weekend? Friday or Saturday. And does it happen after 3:00 PM? So we're going to pass in the date time, called the shift date and we'll use our expression bodied method here. And I'm going to pass in that shift date to a switch expression. So we'll come down here, close that out. So we've got a method, we've got our switch expression on the shift date. And what I want to do is look at the properties of that date. So notice if I do curly braces here, I get all of the different properties of a date time. So now I could do our hour:, I could say, greater than or equal to 15, so 3:00 PM. And then I do a comma and now I have access to the properties again. So I could say day of week:, and then I can use the day of week, Monday, Friday, or day of week, Saturday in my expression.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=81)** And then I have the result that I want to pass back which is going to be true. Do a comma, but I can use that discard here, I can just return false for the other cases. So we'll go into a lot of different options or choices here in this particular implementation. You can see how you can add additional lines and you can check different values of the properties, in this case, we've got a lot of different variation. So we want to have that catch all at the end to make sure that we don't fall through and miss some. Or we come up here, we're going to paste this in, I've got a shift date on line 35. It's a new date time for new year's day, 2022. And the shift starts at 1600 or 4:00 PM. And then I'm going to do a console right line. I'm just going to call out to my method here, to say, "is that shift data weekend night shift". And then I've got my ternary operator there, or I have the question mark. So if the value on the left is true, it'll print "is". If it's not, it'll print "is not". So for that particular date and time, this should be, "True, it is a weekend night". We run that, you can see it on the second line there, shift is a weekend night. Now if I changed that to say 7:00 AM, run it again, It's not a weekend night. But its a weekend. It is a Friday or Saturday, but we're not on that night shift. So if you change this, the day, we could change this back to 16 so now we are in the time,
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/property-pattern?u=76281980&t=177)** but the second is going to be a Sunday. So again, it is not a weekend night in terms of our rules here. So it's another very useful pattern where you can look at the properties of the object that you're switching on. So whatever the target of that switch statement is, you can look at those properties and use that in order to direct the flow of execution to choose the expression that you want to return. That said, I do want to point out one other thing back in our earlier, "Get Person Details". Remember we used a switch expression here to create our result and we have our shift worker, SWV. So we've got our declaration there. I can use the properties here, but notice that what's being suggested or offered is first name and last name only. That's because the target of the switch is the P, which is the I person. So even though I'm checking that it's a shift worker and I have my shift worker variable there, SWV that I can use to create the result when I'm looking at the pattern and I'm looking at the properties, it's going to be on P. It's what are the properties on the target of that switch? So I just want to point that out 'cause it'd be very easy to get in that situation and get confused about why you don't have access to the properties of the shift worker in this particular example.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=0)** - [Instructor] In addition to all the great patterns we've looked at, we also have something called guard conditions. For example, with our shift worker here, we might want to indicate that, yes, we want it to be a shift worker, but we might also say "when." And now we have that SWV, we can look at the shift worker. We could look at that and we could say the StartDate.year is greater than 2020. What that does is it puts an additional constraint on this branch of our switch expression. So in addition to this needing to be a shift worker type, the p variable coming in, being a shift worker, we also need the start date to be greater than 2020. Now let's copy this line. We'll paste it, and then we'll say, it's less than or equal to 2020. And here we'll just write out a simple string. We'll say, "older employee." So that might be that they're grandfathered into something, or we want to do something else. On both cases, the p represents a shift worker, but we have some additional condition that we want to check to create our return expression. So, up above on line 73, you remember we're writing out the person details. We go up, we can see we've got our shift worker and their start date, they're on line 70, is July 15th, 2020. So they should fall into the second case here,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=95)** 'cause it's less than or equal to 2020. We will quick hit Control or 5 to run that. we can see now on the third line there, we get older employee. So we fell into the second expression because this guard condition was met. We just simply came up and change this to 2022. We run it again. Now we get on the third line, Shift Worker: 7/15/2022.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=127)** This is another example. If we go up to our keys expression here. Again, we've got all of these separate characters. We could come in and add to that. In addition to these patterns, we can say when padChar does not equal x. So maybe for lowercase x we want to do something different here. So let's take this whole thing. Okay, and we'll copy it, paste it. And we got two identical patterns with the guard, so we'll change that. So now, we want the case to be that it's either lowercase or uppercase. We've got one, the pad character isn't, a lowercase x. And what is a lowercase x? And what it is, let's simply return string.empty,
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/guard-conditions?u=76281980&t=184)** we'll pad left, and instead of using the pad character, we'll use the underscore just so we can see that coming through. So up here, we'll recall this, we're passing in z, so that should, we pass it in and run it. That works as we expected on the first line there, we get the z to pad out something. Now if I change that now to my lowercase x, we look at our guard conditions there, when that padChar equals lowercase x, we're going to have a different expression, we should just see 15 underscores. And that's what we get on that first line. So those guards can really add to the complexity of your expressions and your ability to choose the different expressions or [[Control Flow]] in your switch expressions and your switch statements.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=0)** - [Instructor] For this challenge, your goal was to find a way to create a discount level or calculate a discount level based on an order total, and we're going to try to do that using property pattern matching. Now, one of the changes we'll make to the signature here is we're going to turn this into an expression. So we're going to say customer order switch. That means we're going to switch on that customer order in this expression, so now I'm going to also put a semicolon at the end there to end that statement. And now I want to look at that object coming in, and what do I want to look at? I want to look at the total. I'm going to put a colon, and then I'm going to put my expression, so I can say if it's lower than 100, then outside of the brackets, that leads to low. Put a little comma there. We'll look at the total again. Now I'm going to save if it's greater than 1000. In that case, we want that to result in high. And then finally, we have that default or that discard now, where we can just have that render back or provide standard discount. Total is the property on our customer order. That's what's getting passed into our switch. So in those curly braces is our expression that says I want to compare the total and I want to use this logical expression or test, and then here's the result. So if we test that, we got the right answer. Returned standard,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/solution-switch-expression-using-patterns?u=76281980&t=93)** 'cause the value that was passed in down here was between 100 and 1000. If I add a two in here, we test again. We got it right 'cause our calculation still works, but now the response we should have is high. Now the other thing we could do in here is we could look at the other property, the customer tier, and we could say, if that is, for example, a P for platinum, we want to do something different as well. So it's not just a single property that we want to pass in here. So we could have different values, different comparisons, where those properties fit together.

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
> **[0:00](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=0)** - [Matt] Thank you so much for joining me in this C# Essential Training Part 1. If you're looking for what to do next to learn even more, I've got some suggestions for you. First, you can always come over and join me for C# Essential Training Part 2 where we'll talk about [[Language Integrated Query (LINQ)|language integrated query]], generics, delegates and events, asynchronous programming, exceptions, and other topics to dive a little further into the C# language essentials. After that, there's additional learning topics, including more C# language features or courses where you can dig deeper into those individual topics if you find one that really sparks your interest or is very applicable in your job. You can look into some of the frameworks, like Entity framework for doing data access, [ASP.NET](https://ASP.NET) for building web applications, or you can look at Blazor, which is all about building user interfaces using [[HTML]] and CSS but programming in C#, and it can run natively in the browser with WebAssembly. Maybe you want to look at Xamarin for using C# to write mobile applications for iOS and [[Android]] or [[Windows]] Presentation Foundation or the other Windows-based UI frameworks if you're building desktop applications solely to run on Windows. As you can see, once you've mastered C# the language, the frameworks that allow you to take that a step further and build your applications are going to be a critical next step in your learning. And finally, other than watching courses and trying to learn this, go out and build something.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-essential-training-1-types-and-control-flow/learn-more-and-build-something?u=76281980&t=94)** I find that when I'm really trying to understand a particular technology, programming language, or framework, the best way is to go create an application where I have some semblance of requirements so I know what it's really like to use that tool to build an actual application. Thanks again and happy coding.

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