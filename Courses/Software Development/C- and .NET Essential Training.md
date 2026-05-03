---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-and-dot-net-essential-training
url: "https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training"
duration_minutes: 142
duration: 2h 22m
level: Intermediate
updated: 8/16/2024
learners: 45099
skills:
  - .NET Framework
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-dot-net-programming-2453257"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFHiX0T9gzFUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724260774336?e=2147483647&amp;v=beta&amp;t=5ILnAHWlvAeRyOXdtf4IeK8ZFRINR4StZgvSvaxDXZc"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started as an ASP.NET Core Developer]]'
  - '[[Getting Started as a C- Developer]]'
prev_courses:
  - '[[Learning Asp Dot Net Core Mvc Razor Pages Web Apis Other Foundations]]'
  - '[[C- Essential Training 2- Generics, Collections, and LINQ]]'
next_courses:
  - '[[ASP.NET Core- Razor Pages]]'
  - '[[C Sharp Algorithms]]'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":2,"total":9,"prev":"Learning Asp Dot Net Core Mvc Razor Pages Web Apis Other Foundations","next":"ASP.NET Core- Razor Pages"},{"path":"Getting Started as a C- Developer","position":3,"total":9,"prev":"C- Essential Training 2- Generics, Collections, and LINQ","next":"C Sharp Algorithms"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - topic/software-development
  - skill/-net-framework
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20and%20.NET%20Essential%20Training.md)

![C# and .NET Essential Training](https://media.licdn.com/dms/image/v2/D4E0DAQFHiX0T9gzFUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724260774336?e=2147483647&amp;v=beta&amp;t=5ILnAHWlvAeRyOXdtf4IeK8ZFRINR4StZgvSvaxDXZc)

# C# and .NET Essential Training

> Microsoft .NET is a modern, cross-platform framework for developing applications for the web, desktop, and mobile devices. This course gives an introduction to some of the features of .NET that makes building applications easier, more performant, and more productive. Veteran technologist Joe Marini demonstrates how to use built-in capabilities of .NET such as string processing, data collection typ

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training) | 2h 22m | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [.NET: The everywhere framework](#net-the-everywhere-framework)
  - [What you should know](#what-you-should-know)
  - [Installing .NET](#installing-net)
  - [Exercise Files](#exercise-files)
  - [Tour of CoderPad](#tour-of-coderpad)
- [**1. Overview of .NET**](#1-overview-of-net) (4 videos)
  - [What is .NET?](#what-is-net)
  - [Building a console application](#building-a-console-application)
  - [Basic .NET data types](#basic-net-data-types)
  - [.NET garbage collection](#net-garbage-collection)
- [**2. Working with Strings**](#2-working-with-strings) (5 videos)
  - [String interpolation](#string-interpolation)
  - [String formatting](#string-formatting)
  - [String manipulation](#string-manipulation)
  - [String searching](#string-searching)
  - [Solution: Strings](#solution-strings)
- [**3. Using Numbers and Dates**](#3-using-numbers-and-dates) (6 videos)
  - [Parsing numbers](#parsing-numbers)
  - [Formatting numerical data](#formatting-numerical-data)
  - [Using the DateTime class](#using-the-datetime-class)
  - [Formatting dates and times](#formatting-dates-and-times)
  - [Parsing dates](#parsing-dates)
  - [CoderPad Solution: How many days?](#coderpad-solution-how-many-days)
- [**4. Working with Files**](#4-working-with-files) (6 videos)
  - [Creating files](#creating-files)
  - [Reading and writing files](#reading-and-writing-files)
  - [Inspecting file information](#inspecting-file-information)
  - [Working with directories](#working-with-directories)
  - [Challenge: Files and directories](#challenge-files-and-directories)
  - [Solution: Files and directories](#solution-files-and-directories)
- [**5. Regular Expressions**](#5-regular-expressions) (5 videos)
  - [RegEx and .NET](#regex-and-net)
  - [Finding and matching content](#finding-and-matching-content)
  - [Replacing content](#replacing-content)
  - [Using RegEx timeouts](#using-regex-timeouts)
  - [Solution: Regular expressions](#solution-regular-expressions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [.NET: The everywhere framework](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/dot-net-the-everywhere-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/dot-net-the-everywhere-framework?u=76281980&t=0)** - [Joe] The .NET platform has come a long way over the past 20 years since it was first introduced. What started out as a runtime for desktop apps on [[Windows]] has become a cross-platform multiple form factor framework that gives developers the ability to create apps that run almost anywhere while sharing the same core sets of capabilities and features. Hi, I'm Joe Marini, and I've been developing software for some of the biggest companies in Silicon Valley for more than 30 years. In this course we'll learn about some of the features that .NET provides that can be used in any application that targets the platform. We'll see how to work with strings, create, write and read information from files and directories, work with application data like numbers and dates, and even process information using regular expressions. The .NET framework is everywhere today, which means that your apps can be everywhere, too. Let's get started learning about the .NET framework using C#.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Env Vars:** net (4)
> **Definitions:** means that (1)
> **Speakers:** - [joe] (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we begin the course, there are some concepts that you should already be familiar with. In this course, I'm going to be introducing the .NET platform and some of the features it provides for building cross-platform applications, and I'll be using the C Sharp programming language along with the Visual Studio Code developer tool from [[Microsoft]]. You can use regular Visual Studio as well if you're on [[Windows]], but as of the recording of this course, Visual Studio 2022 on the Mac doesn't yet fully support .NET 6. So to make things easy, I'll just use VS Code along with the command line for this course, so you could follow along easily whether you're on Mac, Windows, or [[Linux]]. You don't need to have any prior experience with .NET, but this is not the place to start if you don't have any programming experience. To take this course, you should at least have some knowledge of the basics of programming, such as what variables are, and how to use functions and so on. If you need to brush up on your basic programming knowledge, then consider taking [[Programming Foundations]]: Fundamentals, or [[Programming Foundations- Object-Oriented Design]] first. I'm also going to assume that you at least have some basic experience with C Sharp. Even though this is an introductory course to .NET, again, this is not the place to start if you don't already know some C Sharp. If you need to get up to speed with C Sharp, then consider taking the Learning C Sharp course. And finally, since we're going to be using Visual Studio Code in this course, you might want to consider watching some of the great Visual Studio Code related courses, if you need to familiarize yourself with this tool
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/what-you-should-know?u=76281980&t=94)** such as Visual Studio Essential Training. When you feel comfortable with each of these subjects, you're ready to proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Programming Foundations]] (2), [[Microsoft]] (1), [[Linux]] (1)
> **Tools:** visual studio (6), vs code (1), command line (1)
> **Env Vars:** net (4)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Installing .NET](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/installing-dot-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/installing-dot-net?u=76281980&t=0)** - If you're installing .NET on [[Windows]] or Mac then you have a couple of options open to you. This page in the [[Microsoft]] documentation provides all the instructions needed to get .NET installed on your computer. For Mac and Windows. The easiest way is probably to just install Visual Studio which will take care of the process for you. If you're using a different editor, such as VS Code then you might need to install .NET separately. So let's begin by checking to see if your system already has .NET installed. On your computer, whether it's Mac, Windows, or [[Linux]], open a terminal window and then enter the command dotnet--version. And you can see that when I run this command I have .NET six on my computer as the current version of .NET. Now, if you didn't get a result that looks like this or if you got an error message then you'll need to install the .NET Framework. If you already have .NET installed, then make sure the current version is six because the exercises in this course are built to work with version six of .NET. Now different .NET versions can be installed side by side with each other, and you can check to see which SDKs you have by typing dotnet--list-sdks. And when I run this, you can see that I have both five and six and 3.1 installed and multiple versions of each. So if you want to install .NET manually then let's go back to that link. So here on this page, right?
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/installing-dot-net?u=76281980&t=92)** You can click on the appropriate link for your machine. So we have Install on Windows, right? Install on MacOs. You can also install on Linux and Linux is a little more complex cause you have to choose the operating system flavor that you're using on Linux. But, so for example let's go back to the Windows link, right? And I'll go ahead and click on the Download .NET button. And that takes me to this download page where I can download these supported versions. So I'll click on .NET six and then I can download the appropriate link for my machine. So, click on the appropriate link for your machine download the installer and then run it. And then after the installer completes go back to the terminal window and run those steps again, to make sure that the installation process completed correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Linux]] (4), [[Microsoft]] (1)
> **Env Vars:** net (13)
> **Prerequisites:** install (7), you'll need (1)
> **CLI Commands:** dotnet (2), make (2)
> **Tools:** terminal (2), visual studio (1), vs code (1)
> **UI Navigation:** click on (4)
> **Cross-References:** go back to (3)
> **Exercise Files:** download the (2)

#### [Exercise Files](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/exercise-files?u=76281980&t=0)** - [Instructor] I've provided exercise files for this course, which you can find in the [[GitHub]] Repository located at this link. So go ahead and navigate to this link in your browser and then either clone this repository or download it to your computer, and then place the exercise files somewhere on your computer where they are easy to access. I've also provided both finished and starting point versions of the exercise files. So the Finished folder contains all the finished examples and the Start folder contains the starting point for the code that I'm going to use in each exercise to build towards the finished point. So you can see here on my computer, I've put them here on the desktop, but that's not required. You could put them anywhere on your computer that's easy to access. So once you've got the exercise files downloaded and placed where you want them on your computer, then you are ready to proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **Exercise Files:** exercise files (4)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Tour of CoderPad](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/tour-of-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has four areas. In the top left, you will find the instructions for completing the challenge, a code editor for you to create your answer in the top right, another code editor where you can see how your code is being used in the bottom right and a console for output in the bottom left. You can use these drag handles to allocate screen space as you like, and you can see that I can resize each of these quadrants as I like. And to get even more horizontal space for your code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenge's parameters and desired result. Depending on the challenge, you will see some additional information in the instructions, such as an explanation of the parameters that your code will be given, along with some examples of what the expected output might look like, and you might even see a little hint down here
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/tour-of-coderpad?u=76281980&t=95)** in the lower left. You will create your answer in the top right code editor. There are comments in the starting code showing you where to put your solution, and then you will click on test my code, you'll see a message indicating whether your code returned a successful result. So I'm going to go ahead and demo the existing state of this editor with the obvious wrong answer in there and when I click on test my code, you can see that it runs my code. And over here in the console output, we can see that, oh, well that's not the expected result. My code returned zero. So obviously that's wrong. The show expected result and show hints variables determine whether you see the expected result and any hints. So we can change them to a value of true to control the output. I'm going to change each of these to true, because I need some extra help. Alright, so then I'll click on test my code again. Alright, and now we can see that I got the error message, because again, my answer's wrong. It shows what my code returned, but now you can also see down here in the lower left that the expected result is being shown to me and there's a little hint that tells me where I should look further if I want to create the right answer. So regardless of whether your answer is successful, you will see messages in the console output
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/tour-of-coderpad?u=76281980&t=189)** to the lower left. Alright, so let's go ahead and change this code to put in the right answer. Alright, and I've got to use system link for this. Okay, when I do that, yeah, that error message goes away. And you can see down here that the code, this is the test code, this shows me how my solution is being tested. So let's go ahead and just click on things now that I've changed the code to the right answer, when I click on test my code. Alright, you can see that now I'm getting the right answer. And in this particular challenge, not all challenges will do this, but in this particular challenge, I can actually edit the sample code to see if my code is working correctly. So I'll make the proper answer 25. I'll change that one to one. I'll make that one a six. Alright, so now when I run this again, the largest number should be 25. And sure enough, we can see that that's now correct. If any messages are too long to fit into the console area, you can scroll sideways to see all of the text. Now, when you finished each code challenge, return to the course's table of contents and click the next video to see my solution so you can compare it with your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **UI Navigation:** click on (6)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** next video (1)
> **Exercise Files:** sample code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Overview of .NET

[↑ Back to Table of Contents](#table-of-contents)

#### [What is .NET?](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/what-is-dot-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/what-is-dot-net?u=76281980&t=0)** - [Instructor] So what exactly is .NET? .NET is a free, open source developer platform that runs on multiple different operating systems. It was first launched in 2001, and originally, it ran only on [[Windows]], but has since been expanded to Mac, [[Linux]], iOS, [[Android]], gaming systems like Xbox, and even the cloud. The .NET platform can be programmed with a variety of languages, including C#, Visual Basic, F#, and of course the most popular open source ones, like [[Python (Programming Language)|Python]], [[PHP]], and C++. .NET presents a modern programming architecture that handles many of the more mundane programming tasks automatically for the developer, such as managing program memory. Conceptually, you can think of .NET as being a runtime layer between your apps and the operating systems and form factors that they run on. .NET provides a full set of services that apps need in order to complete their tasks and get their work done, as well as support for .NET enabled languages, like we saw previously, and the CLR, or the common language runtime, which enables the cross-platform abilities of the .NET platform. And as I mentioned, you can build many different kinds of apps with it, from desktop and mobile to web and cloud-based services. Now, obviously this is a lot more than can fit in just one course. For this course, we're going to be focusing on using C# and working with some of the common services provided by .NET. To keep things simple, we'll be building desktop console applications
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/what-is-dot-net?u=76281980&t=94)** that run in the terminal, but you can of course, use all of the concepts presented in this course in other types of applications as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1), [[Android]] (1), [[Python (Programming Language)|Python]] (1), [[PHP]] (1)
> **Env Vars:** net (9), php (1), clr (1)
> **CLI Commands:** python (1), php (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** ios (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Building a console application](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/building-a-console-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/building-a-console-application?u=76281980&t=0)** - [Instructor] In this course, I'll be demonstrating some of the more commonly used features of the .NET platform. In order to keep the focus on the platform features, I'll be using a console application as the vehicle for each chapter of the course. A console app is one of the simplest program types that you can build with .NET. These apps run in the system's terminal program and they work across Mac, [[Windows]] and [[Linux]]. So let's try first creating a console application. So here in VS Code, I'm going to open up the MyConsoleApp folder here in the Start folder of the Exercise Files. And I'm going to do this in the built in terminal. So I'm going to right click and choose open in integrated terminal. Now, if you're a not using VS Code, then you can just do this in the terminal app on your computer. Just open up your terminal program and go into this directory and follow along with me. So to create a new console app, I am going to use the .NET command and I'm going to type dot net new and then console. And I can specify parameters such as the app name by using the -n flag, and then I can name it something like ConsoleApp. If I don't use this flag, then the name of the directory will be used instead. So I'm just going to go ahead and omit that. And I can also specify the .NET framework using the -f flag. So I can use -f to specify, for example, .NET 6.0. Now, this course uses .NET 6. So if you have multiple versions of the framework installed, you might want to use this flag
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/building-a-console-application?u=76281980&t=95)** to ensure that .NET 6 is going to be used, and of course, make sure you have it installed first. So when I execute this, .NET will go off and think for a few moments, and it's doing its job. So now you can see that in the folder, the project file was created as well as a new source file for the application. So when we open the source file, we can see that there's some default code that simply writes the message, hello world, to the console. Now the console object is one of the built-in classes that .NET provides, and it allows me to read and write content to and from the terminal. Now .NET classes such as this are usually imported into the program with a using statement. And I would use something like this, I'd say, using system, because that's where the console is kept, but starting with .NET 6, some of the more common libraries are automatically included for you and they are located at this link. So let's go ahead and take a look at this link in the docs. And if you scroll down, I'll click on implicit using directive, and you can see here that these name spaces, these code libraries are automatically included for you when you create a new project in .NET. So you don't have to explicitly include these anymore. In previous versions of .NET, you did, but these are now automatically included. So let's go back to the code. So back here in the code, let's close this terminal for a second
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/building-a-console-application?u=76281980&t=188)** and let's go ahead and remove the using statement. So let's update this code a little bit to have it ask for our name and echo it back to the terminal. So I'm going to declare a string variable that's going to have the response and I'm going to use my Console.WriteLine to ask, what's your name, and then I'll assign the response to Console.ReadLine.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/building-a-console-application?u=76281980&t=218)** So it's going to read the input and then I'll write Console.WriteLine, and then I'm going to write, enjoy the course, comma, and then I'm going to put a little dollar sign at the start of this string, outside the quotes. And this is a feature in .NET called string interpolation which we will see a little bit later in the course, but it allows me to directly include variables in my output strings inside curly braces. So I'm just going to write at the response in here. Okay, so let's try this out. Once again, I'm going to open this up in my terminal and I'll type dotnet run to run the application. And when the program runs, you can see there's the output. Says, hello world. And then, what's your name? I'm going to write my name, Joe. And it says, enjoy the course, Joe. All right. So let's use another built-in class to get information about the platform that the app is running on, because .NET is after all cross platform. So for example, once again, I don't have to include any library to use this. I can make an operating system variable called thisOS and I'll assign that to the environment object's OSVersion property. And then I'll just simply write that out.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/building-a-console-application?u=76281980&t=306)** And I'll write out thisOS.Platform. And I'll also write out thisOS.VersionString.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/building-a-console-application?u=76281980&t=321)** All right, so let's save that and now let's run the code again. So I'll just do dotnet run again. And once again, I'll enter my name. And there's the result along with the platform information. So I'm running on Win 32 NT, and this is of course, [[Microsoft]] Windows NT, version 10, blah, blah, blah, blah, blah. Okay? So console applications provide a nice way of trying out different ideas in .NET without having to create a complex user interface, which is why I'll be using this approach in the [[Representational State Transfer (REST)|rest]] of the course to show the features, but again, all the features I'll be covering can be used in almost any type of .NET app that you build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Linux]] (1), [[Microsoft]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** net (17)
> **Tools:** terminal (9), vs code (2)
> **CLI Commands:** make (2), dotnet (2)
> **Analogies:** such as (2), for example (2)
> **Code Identifiers:** thisos (3)
> **UI Navigation:** open the (1), scroll down (1), click on (1)
> **Versions:** 6.0 (1), version 10 (1)

#### [Basic .NET data types](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/basic-dot-net-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/basic-dot-net-data-types?u=76281980&t=0)** - [Instructor] Before we start working with the .NET SDK, it's important to understand the basic data types that are supported by the platform and the difference between value types and reference types. .NET supports several built-in types. The integral numeric types include bytes, integers and long integers. Next are the floating point number types, such as float, double and decimal. The character type consists of a single text character. Boolean can be either true or false. And there are some built-in reference types as well, such as the string, which is a sequence of characters, and the object type, which represents a complex object in memory. Now, this is not an exhaustive list of all the detailed data types in .NET, but it represents most of the types that you will usually work with. And as I mentioned, there are both value types and reference types. Value types directly contain the value that they represent. And examples of value types include the built-in number types, and booleans and characters, and so on, and even some complex types like enumerations and structs. When a value type is used as a function argument, a copy of the value is passed to the function. And we'll see why this is important. Reference types are a little bit different. They contain a reference to the value they represent. And what this means is that two different variables can refer to the same value in memory. And some examples of these types are strings,
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/basic-dot-net-data-types?u=76281980&t=96)** objects and records. So let's open our exercise code and take a look at some example. So here in VS Code, in the Start folder, we'll go to Overview and DataTypes. And let's open the program file. Right. So here I have some code that declares a variety of variable types, right? This integers, characters, floats, decimal, and so on. And notice that I use the characters f and m for the literal float and decimal values. You can also use the default keyword to assign whatever the default value is for that particular data type. So for example, the default value for an integer is zero. And for a boolean, it's false, and so on. So let's go ahead and run what we have so far. So I'm going to go ahead and open this up in my terminal. All right. And type dotnet run. All right. And when the program runs, you can see that the WriteLine function has executed, and the various data of types are written out here, right? So here's my integer. Here's my, let's see, here's my boolean. Oh, no, b's another integer, right? I've got my boolean, the character and then the float and the decimal. So .NET also provides some implicit type conversions when you operate on some data types. So for example,
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/basic-dot-net-data-types?u=76281980&t=190)** let's add the character and the integer together. All right. So I'm going to Console dot WriteLine. And I'm going to have c plus a. So let's go ahead and run this. So back to the terminal, and we'll run this again. And you can see that when I run this, the result right here is 66, integer 66, right? Because the character gets converted to an integer value to complete this expression. So if I wanted to get a character as a result, I can use what's called casting to convert the value to another data type. So let's go ahead and try that. So what I'll do is inside my expression here, I'll have c plus a. And I'm going to put that in my interpolated string right there. All right. And what I'm going to do is I'm going to cast this to a character. All right. So c plus a will execute. And then that gets cast to a character. And then that will be written to the strings. Let's try running this again. Right? And now you can see that in addition to the 66, I now have a letter B, because 65 is the numerical value of the uppercase A, so a plus 1 is now going to give me a B, which is a 66. And this implicit type conversion works across many different data types. So let's go ahead and make a couple of copies of this.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/basic-dot-net-data-types?u=76281980&t=286)** So let's try adding the floating point number, which is f, right? That's this guy right here, f. And we'll add that to the integer. And we'll also add the floating point number and the character. Okay. Let's go ahead and run that again. And ensure enough, you know, you can see the result is pretty much what you'd expect. So the floating point number, we can see here, it's 123 point 45. You add the integer one to that, you get 124. And of course, the character value, which is the A, if you add 65 to this, then you get the value that you would expect. So, I'm sorry, 64, what I mean by that. Let's go ahead and close this. So if I scroll down a little bit, you can see two [[Data Structures]], right? One is a struct definition, and one is a class definition, which is a reference type. So the struct, remember, is a value type, and classes are reference types. So let's scroll back up. And let's create an instance of the struct and assign some values. So I'll declare my s value. I'll call it s1. And then s1 dot a is going to be five, and s1 dot b is going to be false. All right. And let's also comment out the previous examples, so we don't have to worry about seeing those. All right. So here I have a function
>
> **[6:19](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/basic-dot-net-data-types?u=76281980&t=379)** that takes the struct as an argument and then operates on the members of the struct. So next, I'll uncomment these lines of code right here. And you can see that these lines of code output the values of the struct members, both before and after the function is called. And inside the function, the struct members are operated on and written to the terminal, right? And notice that inside the function, the members of the struct are modified. So let's go ahead and run this. So back to my terminal. And we'll run this. And when the code runs, you can see that the original values here. So there's five, and there's false. And then inside the function, it gets set to 10 and true. But then outside the function, it's back to being their original values. And this is because structs are value types. And when the function is called with the struct, the function receives a copy of the struct. So the original is unchanged outside of the function. So now let's try the same thing with a class object. So what I'm going to do is create an instance of MyClass.
>
> **[7:45](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/basic-dot-net-data-types?u=76281980&t=465)** And we'll set those properties. So. Oops, that's what I meant to do. Okay. And, oh, that's not a semicolon. That should be a comma. All right, there we go. Okay. So I've created a new instance of MyClass. And now similar to the previous example, let's uncomment these lines of code, which do pretty much the same thing as operating on the struct. So let's go ahead and run code again. And we'll dotnet run. And you can see that the original values here are five and false, right? And then inside the function, they get changed to 10 and true. And then outside the function, so when the function completes right here, okay? So the function has completed, and we write out the values again. Now they've been changed, right? In the struct case, they weren't. In the class case, they are. So the reason for this is because objects are reference types, and any changes to the object that is being referred to by the argument to the function, those changes take effect outside the function. And this is an important thing to keep in mind as you're building your .NET applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Definitions:** is a  (6), is called (2), is an  (1)
> **Env Vars:** net (5), sdk (1)
> **Tools:** terminal (4), vs code (1)
> **Analogies:** such as (2), for example (2), similar to (1)
> **CLI Commands:** dotnet (2), make (1)
> **UI Navigation:** go to (1), open the (1), scroll down (1)
> **Warnings:** keep in mind (1)

#### [.NET garbage collection](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/dot-net-garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/dot-net-garbage-collection?u=76281980&t=0)** - [Instructor] The .NET platform uses what's called a Managed Memory Model similar to other platforms like [[Java]]. In other words, the platform takes care of managing the blocks of memory that your program creates and reclaiming them when they are no longer in use. The garbage collection also works to make sure that when your program allocates memory for use that memory is created efficiently within the managed heap for your program. The heap is an area of system memory reserved for your program where your program's objects are kept safe from other programs and processes. So all of this happens automatically. This frees the developer from having to manually keep track of allocations and then remembering to dispose of each one. So, there are a few exceptions to this process and usually these are associated with operating system resources, like files and network connections that your program needs to explicitly clean up on its own. So, the garbage collector knows how to dispose of the managed object that refers to one of these resources but it doesn't have enough information to manage the resource itself. But for the most part, your program can rely on the garbage collector to efficiently manage memory for your app. So, let's take a look at how this works conceptually. So let's imagine that this box represents your program's memory and as your program executes, it's going to create objects in memory, right represented by these boxes. Now, over time, some of these objects will no longer be needed, at which point the garbage collector marks them as being ready for collection.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/dot-net-garbage-collection?u=76281980&t=93)** Then the collector will reclaim these objects and make the memory available for use by other parts of your program. So let's see this in action in a real program. So, here in Visual Studio Code I've got my sample program open and I have a local function called do big operation or it's called, here it is, it's do some big operation and it allocates a one megabyte array of bites. And I'm going to use the garbage collector's get total memory function which is this function right here, let me collapse that down so we can see more, so this get total memory function right here shows me how much memory my app is using. So the GC object right here is part of the system namespace, and since this is .NET 6, I don't need to explicitly include that name space in order to use it. The [[Representational State Transfer (REST)|rest]] of my code is going to write out the amount of memory being used when it starts, and then I'm going to call this function, right, called do some big operation and we'll see how much memory gets used up and then after that function completes, I'm going to explicitly call the garbage collector to force a garbage collection, so I'm going to write GC.collect. Now, to be perfectly clear, your application will probably never need to do this. This function is provided mainly for testing purposes, all right, the garbage collector collects memory whenever it needs to, so you'll never have to actually call this function, this is only for demonstration purposes.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/dot-net-garbage-collection?u=76281980&t=189)** So, let's go ahead and run the program, going to open up my terminal and I'm going to write dotnet run. Okay, so you can see that when the program starts, it says that the allocated memory is 67,552 bytes, all right, so I'll hit the return key and then after I do that giant allocation, which is right here, this megabyte, you can see that now the allocated memory is, what is that? That's 1.1 megabytes it looks like, so, that memory usage jumps because of the big allocation and when the function completes, this local variable right here called myArray goes out of scope and it's no longer used by the program. So, the garbage collector notices this and so when I hit return again, you can see that after the GC.collect function gets called, the garbage collector reclaims all that memory. And you can see that the memory usage drops back down again. Now it doesn't go back all the way to the original value because other parts of the .NET framework have been invoked and are now in use, but it's by a significant amount. So, here's where it started, here's that big allocation, and then after I call collect, we go back down to 100K. So, again, I want to just point out, your program will never need to manually collect the memory using the garbage collector command, this all happens automatically, this is just a demonstration, but this illustrates how the memory is automatically managed for your app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2), dotnet (1)
> **Env Vars:** net (3)
> **Definitions:** in other words (1), is an  (1), refers to (1)
> **Tools:** visual studio (1), terminal (1)
> **Analogies:** similar to (1), imagine (1)
> **Code Identifiers:** myarray (1)
> **Versions:** 1.1 (1)


### 2. Working with Strings

[↑ Back to Table of Contents](#table-of-contents)

#### [String interpolation](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-interpolation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-interpolation?u=76281980&t=0)** - [Tutor] Just about every program has to work with string data, and usually in multiple ways. In this chapter we're going to take a look at some of the features that .NET provides for working with strings. And we're going to start with string interpolation. So here in my editor, I'm going to open up the interpolation folder and the sample code here. It's a fairly common practice to use strings to present information, whether it's to the program's users or for the developer in the form of debugging information and string interpolation is a feature that dramatically improves the way that program data is inserted and formatted into strings. So here in my code, I have a few sample variables with some sample data, and this line of code here shows how variable values are inserted into strings using the older placeholder method. So basically the indexes inside these braces are replaced with the variables that follow the string. So a, will be inserted into index zero b, into one and so on. So if I run this code, let's go ahead open the terminal. So if I run this as is, you can see that in the output string, the three variables are all in the output. But this process is much easier and more intuitive with string interpolation, which works like this. So I go back to the code.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-interpolation?u=76281980&t=96)** What I'm going to do is write the same string. So I'm going to put a console.writeline call in here, and I'm going to have the values are, let me put a little semicolon there. So if I put a dollar sign in front of the string outside the quotes, this tells the .NET compiler that this is an interpolated string. And then I can just use the names of the variables inside the string itself. So I can have a in that brace And c, all right. So let's run this, and you'll see that the results are the same. You can see that the strings are pretty much the same. Oh, I put an extra comma in this one. So let's just go ahead and fix that, run it again. And now you can see that the strings are the same. But now, the code is much easier to read and understand. And what's even better about this approach is that you can use expressions within the strings. So for example, I can use a math expression. So let me put an interpolated string here. I can have something like a plus b divided by b is, and then I can have that expression in here. So I'll just take this expression and copy it and put it inside the curly braces. All right, in fact I can even call functions
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-interpolation?u=76281980&t=193)** on an object that's inside the curly braces. So for example, I can do... So I can say c in upper case is, and then inside the curly braces, right? I can write c.ToUpper, so I can call a string function on the string object. And in fact, you can even embed complex objects into a string. So date and time information will be covered in a separate chapter, but just bear with me as I do this. I'm going to create a DateTime variable named Now, and set it to the Now property. And then I'm going to embed this into a string and say today is, and then just put that inside the curly braces. All right, so let's go ahead and run this updated code. And you can see that here, we've evaluated the expression inside the string. Here, we called a function on the string object and we did that inside the expression as well. And then we embedded this complex DateTime object inside of a string, and you can see the output there. So I'll be using this feature throughout the [[Representational State Transfer (REST)|rest]] of the course. So I suggest taking a few minutes here at the end of the video to play around with the feature and try out some of your own ideas to see how it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** net (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** sample code (1)

#### [String formatting](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-formatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-formatting?u=76281980&t=0)** - In the previous video, we saw how to use interpolation to insert data into strings. And now we're going to see how to exert finer grain control over the formatting of the data. So as we've already seen there are a couple of ways to insert data into strings. There's the old school way of using indexes along with the names of the variables, and then there's the interpolation method where you just use the name of the variable inside the curly braces and you put a dollar sign at the outside start of the string. There are some optional parameters that you can supply as part of the string to control the formatting. And I've highlighted them here in the square brackets. The alignment value can be either a positive or negative number and is used to determine the character width of the field when the data is formatted. If the number is positive, then the field is right aligned. And if it's negative, then the field is left aligned. And we'll see an example of that in a moment. The format in precision fields determine how the data is formatted and is used for data such as numerical values or other complex data like dates and times. And I'll cover those fields more in depth in the chapter on numbers and dates. So let's open the example code in the editor and take a look at how these work. So here in my editor, I'll open up the formatting example onto the start folder. So I have two variables, one's a float and one's an integer. And I want to format these into a string with the float being left aligned and the integer being right aligned. So first I'll write a header using the index method. So I'll give the float value a width of 15
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-formatting?u=76281980&t=95)** and make that value negative to left align it. And then the integer will have a width of 10 and be right aligned. So let's go ahead and put this in here. So I'm going to console our right line and I'm going to use the index method. So it's going to be variable zero, and it's going to align minus 15. And then index one, and that's going to be width of 10, and those are going to be the strings Float Val and Int Val. So now let's format the data, okay. So what I'm going to do is copy and paste this line and I'm going to replace these two with the actual values. So f1 and i1. Okay, so let's go ahead and run this.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-formatting?u=76281980&t=161)** All right. And when I run this, you can see that the float value and int value are on the same line and each one has its character width of the field, right? And then the float value was specified as minus 15 so it's left aligned, whereas the integer value is specified as positive 10 so that value is right aligned here. So just for good measure, let's do the same thing but with interpolation this time. So I'll copy and paste these. And what I'll do is instead of having these indexes, what I'll do is have a dollar sign there and this will be f1 and this will be i1.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-formatting?u=76281980&t=219)** All right, let's go ahead and run this again. And you can see, I get the same result. So that's a brief introduction to basic string formatting with spacing and alignment, but there's a lot more that we can do to format our data values. And we'll get to those later in the course when we take a look at working with numbers and dates.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1), later in (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### [String manipulation](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-manipulation?u=76281980&t=0)** - [Instructor] In this example, we'll take a look at how to manipulate string content. And we'll be using these sample strings that I defined here in my code. If we open up the code file, you'll see that I have some strings here at the top of the source code in the Manipulation folder. So let's go ahead and get started. So remember that strings are sequences of characters, and we can obtain information, such as the length of a string, using the length property. So let's go ahead and try that first. So we'll write out str1 dot Length. Or we can access individual characters using bracket notation to index into the string. So for example, I can access the 14th character in str1. And remember this is a zero-based index, so 14 actually gives me the 15th character. And in fact, we can iterate over the content of a string just like we can with any other sequence or collection of data. So for example, I can use a foreach loop. I can iterate over each character in string one. And I will just simply write out each one. I'm going to just Write, not WriteLine, 'cause I don't want any character turn. So I'll write out each character. And I'll do this until we get to a character that is a b. And if we reach a b, then that's when I'll simply write out a blank line. And then we'll break the loop.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-manipulation?u=76281980&t=95)** So let's go ahead and run what we have and see what we've got so far for results. Let's get some more room here. And we'll run this.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-manipulation?u=76281980&t=115)** Okay. And you can see that when the code runs, so the length of the string is 44, and the character at index 14, which is the 15th character, is the letter n. And you can see that we were iterating over the string until the first b was reached. We got to the quick b, and then the loop stopped. All right. So far we can manipulate strings pretty easily. Let's try a few more operations. I'll make this a little bit smaller. So let's go ahead and comment out some of these previous examples, so we don't clutter the output with them. All right. So let's try string concatenation. The Concat function can be used to concatenate strings together, which is the process of building a string out of smaller strings. So I'll set my outstr result here equal to. And I'm going to call Concat directly on the string class itself. And I'm going to concatenate the strs object, which if we look back up here in the code, we'll see that strs is this array of these four strings. So this will build one string out of those four strings. Then we can also use the Join function to join strings together with a separator in between them. So let's try that as well. So I'll write outstr. And once again, the Join function is a static class member. So I will join these strings with a period in between them. And we'll do that on the strs array.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-manipulation?u=76281980&t=211)** And then we'll print that out. All right. And then we'll do one more example. We'll call String dot Join. And in this case, instead of a single character, we'll use a string. So I'll put three dashes in between each one of those individual strings in the strs array. And then we'll just write that out again. All right. So let's go ahead and run this again. And sure enough, we can see that the four strings were concatenate together with a period in between each one. That's this example here. And then once again, we did it with a string in between each one. And that's this example right here. All right. Let's keep on going. So we'll comment out the Concat and Join examples. There we go. All right. So there are also different ways of comparing strings to each other. If you're just looking for a straight ahead boolean, true, false, equality result, then you can use the Equals function on the string instance that you want to compare. So for example, I'll define a boolean result called isEqual. And I'll set that to str2. And I'm going to call the Equals function on it to compare it to str3. And then I'll just simply write out whether or not that's the truth. So let's put that in a string there.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-manipulation?u=76281980&t=306)** And I'll write out isEqual. All right. And if we scroll back up, let's get a quick look. So here is str2, and here is str3. And we can see that in str3 we have some capital, uppercase words, and in str2, we don't. So that should provide a false result, right? Let's also try using the Compare function. So the Compare function is called directly on the string class and performs what's called an ordinal comparison of two strings, and it returns an integer. So I'm going to define an integer result. And I'm going to call String dot Compare. And I'll compare str2 with This is a string. And then we'll just print the result out out. All right. So the reason why you use the Compare function, which returns an integer number, is because it's usually used to facilitate sorting. So for example, if the result is less than zero, then that means that the string that you're comparing on comes before the one you're comparing to in the sort order. If the answer is zero, then the second and first strings are at the same position. In other words, they're pretty much equal. And if the result is greater than zero, then the first string comes after the second string in the sort order. So if you're trying to determine sort orders of strings, then the Compare functions is what you want to use. So let's go ahead and save. And let's just go ahead and fire this back up again.
>
> **[6:38](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-manipulation?u=76281980&t=398)** So we'll dotnet run. All right. So we're going to run our updated code. And you can see that str2 and str3 are not equal, because remember, there's a case difference there. And you can see that in this particular case, using the Compare function, we have a result of zero, because those two strings are essentially the same. All right, let's try one more thing. Let's try using the Replace function. So once again, let's comment out the previous code. So we're going to use the Replace function to try replacing content that's in the string. And once again, I'll declare my result called outstr. And we'll have str1. I'm going to call the Replace function. So the content that's going to be replaced is, we're going to look for the [[Microsoft Word|word]] fox, and we'll replace it with the word cat. So let's scroll back up again. And you'll see that in str1, we have the lowercase word fox. So this should replace with the lowercase word cat. And remember strings are immutable, so this won't actually do an inline replacement. We actually have to take the result of this function and store it in a string variable. So we'll do that. And then we'll print out the result. So let's go ahead and run this. And we run. Sure enough, you can see that the word fox has been replaced by the string cat in the result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5)
> **Definitions:** is a  (4), is called (1), means that (1), in other words (1)
> **Analogies:** for example (4), such as (1), just like (1)
> **CLI Commands:** cat (3), make (1), dotnet (1)
> **Code Identifiers:** isequal (2)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [String searching](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-searching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-searching?u=76281980&t=0)** - [Instructor] All right, let's finish up this chapter by looking at some of the .NET APIs for searching string content. So I'll open up my program file here in my editor. And once again, I have a test string that I'm going to use to try out some of the string searching functions. And I'll start by using one of the most common ones which is the Contains function. All right. Let's console that WriteLine. And what I'm going to write out is teststr and I'm going to call the Contains function on it to see if it contains the [[Microsoft Word|word]] "fox." All right now, by default, the Contains function takes the casing of the letters into account. So you can see that this is lowercase "fox" and this is an uppercase "Fox." So this would normally return false, but we can specify that it should ignore the letter case with an instance of the stringComparison class. So let me add that for comparison. You can see the two side by side. So I'll call Contains again and this time we'll look for the string "fox," but as an argument to the Contains function, I'm going to call StringComparison.CurrentCultureIgnoreCase.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-searching?u=76281980&t=85)** And in fact, we can also try another example before we run that one, you can use these StartsWith and EndsWith functions to see if a string starts or EndsWith a particular string. So for example, I can see if teststr StartsWith The string "the" and I can also check to see if teststr EndsWith the word "dog."
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-searching?u=76281980&t=120)** And just like the Contains example, we can specify that case should be ignored. So let's try this example again, I'll just go ahead and copy and paste this. And once again, I'll copy StringComparison and paste that in, and then we'll do the same thing with this example.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-searching?u=76281980&t=158)** There we go. Okay. So let's go ahead and give that a try. Open this in the terminal and let's run this.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-searching?u=76281980&t=177)** So we can see that we've got a few results here. So sure enough, the Contains function when called with lower case "fox" produces false. Why? Because the case matters, but you can see when I'm telling the Contains function to ignore the case, then the result is true. And similarly with StartsWith and EndsWith, we can see that the word "the" is capitalized and "dog" is capitalized. So these two examples produce false. When I tell it to ignore the case, they both produce true. All right, let's try a few more. Let's go ahead and comment these out. The Indexof and last Indexof functions are used to return the actual character indexes of the substrings to search for and they will return minus one if the substring isn't found. So this isn't just a Boolean yes or no. You know, the string contains the substring. We can actually see in the string where it occurs. So let's go ahead and try this out. So let's search teststr for the Indexof and we'll look for the lowercase word, "the" and then we can do the same thing with last Indexof. Right, last Indexof just simply searches from the end of the string back towards the front. So Indexof begins at the start of the string. Last Indexof starts at the end of the string. And as you've probably guessed, we can specify that case should be ignored. So let's try that one out and I'll try that with the Indexof version. So let's go ahead and copy that.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-searching?u=76281980&t=273)** And I'll just copy this code right here and paste that in. All right. So let's go ahead and try that. And oh, whoops. Looks like I made a mistake. Yep, that should be a comma. There we go. All right. So sure enough, we can see that Indexof the word "the" is at index 31, right? Because that's the lowercase version. So we can see that there's an uppercase version here but it's searching for the lowercase version in this case. But when I say, "Hey, go ahead and ignore the case." Then it finds the capitalized version at the start of the string. And sure enough, last index, that's going to start from the end here and search back in this way. So it finds this one first, which is also at index 31. Let's go ahead and comment these out. So for the last example, let's look at how you can determine if a string is empty or null, or just has whitespace in it. And we'll use these three strings right here to do it. So what we're going to do is write out string dot and we'll call IsNullOrEmpty, and we'll call that on str1 and we can see that str1 is null so that should return true. For the second example, we'll do the same thing on str3 and we can see that that is String.Empty.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/string-searching?u=76281980&t=367)** So that should also return true. And then for the third example, we'll call IsNull or WhiteSpace and we'll call that on str2 and we can see that str2 is just a bunch of spaces. So that should also return true. All right, so let's go ahead and run this one more time and sure enough those are the results that we see. All right, so there's plenty more to learn about String Handling and .NET. So before moving to the next chapter, I'd suggest taking a look at some of the functions we didn't get a chance to investigate and try running some of your own ideas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5)
> **Env Vars:** net (2)
> **Analogies:** for example (1), just like (1)
> **Code Identifiers:** stringcomparison (1)
> **Cross-References:** next chapter (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Strings](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-strings?u=76281980&t=0)** - [Instructor] Okay, let's take a look at my solution to this challenge. For this challenge, we needed to create two functions. The first function takes a DateTime object and formats it as a year, month and day, each separated by two dashes, and the second takes an array of strings, joins them together into one string, separated by periods, and then converts it to all uppercase. So my FormatDateTime function uses string interpolation to access the fields of the DateTime object, and inserts them into the results string in the required order, with each field separated by two dashes. So that part of the challenge was pretty straightforward. The FormatJoinStrings function uses the join method on the string class to join all of the strings together using a period as the separator character, and the join method returns a new string, which is then converted to uppercase using the ToUpper function, which is also a method in the string class. So let's go ahead and test the code out. All right, and you can see that I'm returning the result, the correct result in each case. Let's try changing our sample code. So I'll change this to May 29th, and I'll just change some of these strings.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-strings?u=76281980&t=100)** So we'll call that String1, and we'll call this guy String2. And let's go ahead and test my code again. And once again, it looks like we're getting the correct result. Okay, so how does this compare to your solution? Take a few minutes and compare my code to yours, and see where there's similarities and where there's some differences.

> [!info]- Semantic Content
>
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)


### 3. Using Numbers and Dates

[↑ Back to Table of Contents](#table-of-contents)

#### [Parsing numbers](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-numbers?u=76281980&t=0)** - [Instructor] Working with numbers and dates are very common scenarios in programming and in this chapter, we're going to look at some of the ways that .NET makes this much easier. We're going to start by looking at how to use .NET to parse numbers from strings, and I'm sure you can imagine that there are lots of different scenarios where this kind of conversion needs to be performed, such as when the user enters a string of data into a form or some other type of user input. So here in my VS Code editor, in the ParseNumbers folder, in the Start folder. I'm going to open up my code and here in my code for this exercise, I have an array of strings that represent different number types, right? So I have an integer, some floating points, right? I've got scientific notation number here, and you can see that some of them have white space in the strings, right? So there's some spaces here and so on. So each of the basic data types in .NET has a parse method associated with it, which can be used to take a string and convert it into that data type. So what we're going to do is use this for-loop to try and parse each of these numbers. The parse method throws an exception if it's unable to parse the string. So we need to enclose it in a try-catch block. So I'll write my try code here and inside the try, I'll use my testFloat variable, which I have right here, and I'm going to write float.Parse, and it's going to take the string, all right? So we're going to loop over each string in this array,
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-numbers?u=76281980&t=94)** and we're going to try to parse each one of these. So we'll try to parse it as a float, and then we will write that out and once again, I'm going to use is my string interpolation to do this. So I'll write that the parsed number is. All right, TestFloat, and then we'll do the same thing with testint, and I'll do int.Parse on this one, and we'll take the string and once again, we will write it out, that the parsed number is. In this case, it's going to be testint, and then, of course, I need to catch any exception that happens. So I'll put my catch block in here, and if the number can't be parsed, it's going to throw a format exception, and I'll just simply write out that we could not parse the string, whatever the string was, and we'll print out whatever the exception message is.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-numbers?u=76281980&t=172)** So let's go ahead and run what we have. So let's open up in the terminal, and we will .NET, run this, and you can see that each
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-numbers?u=76281980&t=189)** of the numbers can be successfully parsed as in a float but not as an integer, right? So the one worked in both cases. The 1.5 is a floating point number but could not parse this as an integer, right? 100 is clearly an integer, and then the 5e + 04 scientific notation could be parsed as a float, but it could not be parsed as an integer. Now, sometimes you don't care what the exception is and having to catch exceptions all the time can be a bit cumbersome. So there's also a simpler tri-parse method which just returns a boolean true or false, based upon whether the parse succeeds or fails. So let's go ahead and close this, and let's try the tri-parse method. So what I'm going to do is I have a boolean variable here named result, and what I'll do is write result, and I'll assign that to the result of the tri-parse method. Now, this doesn't throw an exception. It just simply returns true or false. So I'll try parsing NumStrs, and we'll start with zero. Now, because the tri-parse method returns a boolean, I have to use a C# out variable to get the result back. All right, so in this case, the return of the function's going to be in this parameter right here, and then I'll just simply write out whether or not this failed, and I'll write result and then inside single quotes,
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-numbers?u=76281980&t=288)** I'll put 'NumStrs, subzero' and a little colon and then the result which will be in testint, and then I'll just do this a few times. So I'll copy this and we'll paste it, and this time we'll do NumStrs one, and what we'll do now is we'll try to parse the float instead. So this will be testFloat, and that means this will be testFloat as well, and that will also be NumStrs one, and then let's pace this a couple more times. All right, so we'll do NumStrs two and three and in this case, this will be an integer again, and then the last one will also be a float. So I'll just copy and paste testFloat there, and that's going to be a float parse. So we'll change that to float. All right, so now we have code that's going to use tri-parse for each one of the numbers in this array, rather than trying to catch exceptions, and let's go ahead and comment out the previous exercise, so we don't have to worry about seeing it. Let's do a Control + / there that comments out the code. So now we have just our last example here. So let's go ahead and run this again. Let's open up this in our terminal, and let's run this
>
> **[6:26](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-numbers?u=76281980&t=386)** and sure enough, you can see that they all succeed, right? So we were able to parse the integers, and we were able to parse the floats. So let's try changing one to a situation that we know is going to fail, right? Like the first integer one. So let's go ahead and try and parse the first integer, or let's see. Actually, where is it? It's not the first integer. It's the 1.45. So let's try to parse the 1.45 number as an int.
>
> **[6:59](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-numbers?u=76281980&t=419)** All right, now, we know that's going to fail. So let's go ahead and run this again and sure enough, you can see that now the result is false for a tri-parse when we try to parse this floating point number as an integer. So by using the parse and tri-parse methods, you can easily convert string data into basic built-in data types.

> [!info]- Semantic Content
>
> **Code Identifiers:** testfloat (4)
> **Env Vars:** net (4)
> **Versions:** 1.45 (2), 1.5 (1)
> **Tools:** terminal (2), vs code (1)
> **Analogies:** imagine (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Formatting numerical data](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-numerical-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-numerical-data?u=76281980&t=0)** - [Instructor] Earlier in the course, we saw some examples of how to control the way that data was formatted into strings. And remember that I showed this diagram of how to use formatting codes in string interpolation. Now, at the time, I only focused on alignment and spacing and now we're going to see how to use the other fields in the format string. So when working with numerical data, the format specifier can be used to indicate how a number should be displayed. And some of the format codes are listed here. Now, this isn't a full list, but it's the most common ones. And you can see that there are options, such as number and decimal and percent and currency, and there's some others as well. The precision field indicates what numerical precision should be used in the formatting. So let's take a look at some examples. So here in my code for this example, I'm going to open up the format numbers folder, and open up my code. And here at the top, I have some variables that represent different types of numbers. I've got integers and doubles and some decimal data here. So let's add some code that use some of the formatting types. And you can see I've put the formatting types here in the comment, so you can keep track as we write the code. So I'm going to use my Console and I'm going to write out the data, and I'll use string interpolation for this. So let's start by outputting value one, which is an integer in different ways. So
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-numerical-data?u=76281980&t=91)** I'll have val1 and first, we'll use the D format for decimal. And then I'll copy this a few times. So after D, let's try N for general number, and then let's try F for floating point, and then let's try G for general. And that should be good for value one. Then let's try the same thing with value two, which is a decimal. So for value two, we'll use E for exponential, and then we'll leave leave N and F alone. And then for the last one, we'll also leave G alone. Okay, so let's run this initial set of code. Let me scroll up a little bit here. And we'll run this in our Terminal. All right, and in the output, right, you can see here's the first line, this is the integer, and you can see that it was output in different ways, based upon the formatting code. So here's the decimal number and then here's the general number format. And you can see that a comma was included for the thousands marker. And then the fixed-point. And since I didn't specify a precision, it just uses two decimal digits as a precision. And then the last is the G, or the general format. And for an integer, that's just the integer by itself. Then for the decimal, right, we have the exponential output right here, sometimes called scientific notation. The general number format,
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-numerical-data?u=76281980&t=184)** there is again that comma for thousands. The fixed-point format doesn't include the comma. And then finally, the general number format includes the entire number. Now, of course this example doesn't specify any numerical precision, but we can easily fix that. So let's go back up to the code, let's copy this line, and let's paste it down here, and let's make some modifications. So for the first one, I'll specify six digits of precision. And then for the N, I'll use two; for F, I'll use one; and for G, I'll use three. So let's save. And now, let's run this again. All right, so in the updated code you can see that, for the six digits of precision, the number got padded by two leading zeros. Here, I've got two decimal digits of precision now, which is the same as the default. In the fixed-point example, I now only have one digit of precision after the decimal. And then finally, for the G, I have 1.23E to the +03, so it used scientific notation when I specified precision there. Now we've seen how to use both precision and formatting. For the last example, let's combine the formatting codes and the precision with the alignment and spacing syntax that we learned earlier. So let me close this. And if we scroll back up, you can see that I've got some fake sales data up here. So here's some quarters and some sales and percentage of international sales in the mixture, right?
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-numerical-data?u=76281980&t=278)** So we can format this information. Let's scroll down and let's uncomment these lines, so I'll use Ctrl + / to do that. And then, let's comment out the previous examples. All right. So let's just run what we have before we add any formatting. So let's go back to the Terminal and let's run this again. So when I run this, right, you can see now that the sales information gets output to the Terminal, but it's not lined up very well and the data's not formatted great, right? We'd like to see these as percentages. This should be money, right? And so on. So let's go ahead and put the formatting information into the output. So for the quarter headers, I'm going to specify 12 spaces. And let me just condense this down. Here we go. So let's put in spacing here for each of these sales quarters headers. Okay, so that should work well. And then, for the actual sales numbers, let's specify again, we'll specify 12 spaces, and then we want this to be currency, so I'm going to use C0, 'cause I don't want any decimal points. So spacing and then comma and then C0. And I'll just keep doing that down the line. And then one more time, 12:C0.
>
> **[6:16](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-numerical-data?u=76281980&t=376)** All right, so now we have the sales set up, and then for the last thing we're going to do is, we want these numbers to be percentages. So once again, I'll use comma 12, and now, I'll specify P for percentage and I'll just try a couple of different values here. So I'll use P0 for this one, and for this one, I'll also use P0. For this one, I'll specify 12 spaces and then P1, just for some variety. And then on the last one, I'll do 12 spaces and P2. So now, we have our data nice and formatted. So let's go down to the Terminal and run this again. And now you can see that the data is formatted. So here, we have have nice spacing and alignment. So we've got 12 spaces between the headers. Now we can see that the sales data is formatted as currency and then the international sales percentages are formatted as percentage numbers. Now, of course, there's much more to learn about this subject, so I would suggest taking a look at the .net documentation. And you can find the documentation on standard numeric formatting strings here at this link. So I would suggest maybe taking a few minutes and trying out some of the features that we didn't get a chance to address in this example.

> [!info]- Semantic Content
>
> **Tools:** terminal (4)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** earlier in (1), go back to (1)
> **UI Navigation:** scroll up (1), scroll down (1)
> **Definitions:** is an  (1), is a  (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### [Using the DateTime class](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-the-datetime-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-the-datetime-class?u=76281980&t=0)** - Now that we've learned a little bit about working with numbers dotnet, let's turn our attention to dates and times. The date time class is the basic data type for working with dates and times. And since it is one of the default name spaces, I don't need to do anything to include it in my program. So let's open up the sample code in the date time class folder. And like I said, I can start working with it, I don't have to do anything special to include it because it's one of the implicit using statements that gets created for me. So to get the current date and time, we can access the now static property of the date time class. So I can create a variable name now, and I'll just set it to date time .now, and let's go ahead and print that out. If you're only interested in the date and you don't care about the time you can use the today property.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-the-datetime-class?u=76281980&t=58)** And this just gets you the date with the time component set to midnight. So let's go ahead and print that out as well. And in addition to the date time class, there are two classes that represent just dates and just times, and these are new in .NET six, they're called date only and time only. So I can create a date only object, and I can create this from a date time. So I'll just use date time .now again, and I can make a time only one as well.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-the-datetime-class?u=76281980&t=99)** And let's print those out as well. And we'll copy and paste that. So let's run what we have so far. Open this in the terminal and let's dotnet run.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-the-datetime-class?u=76281980&t=123)** And the output is pretty much what you'd expect right? So here is the date time .now. So that's the full date and time, here is just the date time .today, with the component time set to midnight and then the date only, and the time only. So once we have these objects constructed, we can use their methods and properties to manipulate their data. So let's minimize this a little bit. So let's go ahead and write out. We can access say for example the day of week on today's date. And we can also, if I copy and paste that, we can access the day of year, and there are also methods to change the date and time values. So for example, I can update the now variable by calling add days and I'll add five days. All right, let's copy and paste this a couple times. So I'll add hours, and we'll add nine hours, and then we'll add months, and we'll add one month. All right, and then let's write that out one more time. So now let's comment out some of the previous code, so we don't clutter the output. I'm going to comment that line and that line. And then let's also comment this here, all right. So let's dotnet run again.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-the-datetime-class?u=76281980&t=222)** And now we can see the day of the week property right here it's a Saturday, and then the day of the year. And then I've added five days, nine hours, and one month to my now variable, which updates it to this date and time which we can see is sometime in the evening in April. So what's really nice about date time is that you can use instances of the object in comparisons and math operations. The .NET framework provides a time span class that represents a duration of time. So when you perform an operation on two date times, you'll get a time span back. So let's scroll down a little bit, and let's consider these two date times here. One that represents April Fool's day, and one that represents New Year's Day. So let's go ahead and comment out the previous examples.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-the-datetime-class?u=76281980&t=278)** All right, so I've got two date times, and I can create a time span by subtracting New Year's from April Fool's day. So I'll make a new time span and I'll call that interval. And what I'll do is I'll have April Fool's minus New Year's. And then we'll just simply print that out. and I can perform operations using standard operators. So for example, I can print out whether or not,
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-the-datetime-class?u=76281980&t=316)** New Year's is less than April Fool's. And then let's just try the same thing with greater than,
>
> **[5:30](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-the-datetime-class?u=76281980&t=330)** so I can do, you know, mathematical comparisons. All right, so we've commented out the previous examples and let's now run the updated code. So I'll bring this up a little bit. All right, and let's run. And you can see that the difference between April Fool's and New Year's is 90 days, and we can also see that New Year's is less than April Fool's, because it comes before that date, and New Year's greater than April Fool's is false. So we've only just scratched the surface of the date time class here. So if you want to take some time to maybe look at the docs and experiment with some of the methods we didn't try then feel free to take a few minutes here to do so.

> [!info]- Semantic Content
>
> **CLI Commands:** dotnet (3), make (2)
> **Analogies:** for example (3)
> **Env Vars:** net (2)
> **Documentation:** the docs (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - now (1)

#### [Formatting dates and times](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-dates-and-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-dates-and-times?u=76281980&t=0)** - [Instructor] Just as we saw with numerical data earlier, there are plenty of ways to format date and time information. In this example, we'll see how to use .NET formatting strings to control how dates and times are formatted. The .NET documentation at this link describes the various ways that dates and times can be formatted. And I'll return to this in a moment. First, I want to just give a brief demonstration of how formatting works. So let's jump over to VS Code. And what I'm going to do is open up in my Format Dates folder the program. So here in my program code, I have a date-time that represents April Fool's Day. So let's try a couple of different ways to format the date. Now there's a couple of different ways to do this. For simplicity, I'm just going to use the same string interpolation technique that I've been using during the course. So let's try both the short and full date formats. So I'm going to write out April Fools, and then I'm going to use a colon for the formatting string. And we've seen this before. And I'm going to use a lowercase D. And then, I'll simply copy this and then use an uppercase D. And this will give me the short date versus the full date. So let's go ahead and run this and see what happens. So I'll open this in the terminal. All right. And let's run this. And so the result shows the short date format
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-dates-and-times?u=76281980&t=96)** for the little D and the full date format for the uppercase D. Okay, so now let's jump back to the docs for a moment. So if we scroll down a little bit, this table shows the various formatting codes that you can use to control how dates and times are formatted. Now, there's quite a lot of these, as you can see, and we're not going to get a chance to try all of these. But I suggest you take some time at the end of the exercise to experiment with some of them on your own. All right, so let's go back to the code. Let's try a few more, and we'll start with the full date and short time and the full date with the long time. So I'll simply write out April Fools with the lowercase F, and copy and paste that, and we'll do the uppercase F. And then let's try the general date and time. And this is going to require the lowercase G and the uppercase G. So let's go ahead and run our updated code. Let me make some more room here in the terminal. Oh, whoops. Got to make sure that I close off my formatting strings, which I didn't do. So these guys each need closing curly braces. It's a common mistake. All right, so let's try that again.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-dates-and-times?u=76281980&t=194)** I'll bring this down a little bit. So you can see the results of each. So here's the original output that we had. And now here's the date with the short time and the full time. And you can see that the difference is basically the seconds. And then here's the short date with the short time and the full time. So you can also format a date-time by using a specific culture. So let's try formatting the date-time using the German locale. And to do that, first I'll just scroll back up here, and I'll need to include the System.Globalization namespace because that's where I get access to different cultures from. And what I need to do now is scroll back down. And what I'm going to do is write out my interpolated string. But what I'm going to do, actually I'm not going to use an interpolated string for this one. I'm going to use the ToString example. So I'll write out April Fools and I'll call the ToString function, and I'll use the lowercase D for the format. And what I'm going to do here is create a CultureInfo object, and I'm going to do it using a CreateSpecificCulture. And in the call to CreateSpecificCulture, I'll specify de-DE, and that's for Deutsch, which is German, right? So let's comment out some of the previous examples. So I'll just go ahead and select all of these guys up here, and comment those out.
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-dates-and-times?u=76281980&t=291)** And let's scroll back down a little bit. Okay. So now let's run the updated code. And now you can see that the date has been formatted the way that it would be in Germany, right? So here, the day comes first, then the month, and then the year, and it's separated by periods, not slashes like we have in the US. But of course, you're not just stuck with the default formatting characters. You can specify your own custom formats pretty easily. So let's try a few of those options. Let's go ahead and comment this out. All right, let's go ahead and try some of our own formatting. So in this case, I'm going to format April Fools, and I'm going to use four lowercase Ds, followed by a comma, then four uppercase Ms followed by a lowercase D, and then one, two, three, four Ys. So this will give me the long format with the full day and full month name. And then I can try something similar. What I'll do is I'll paste this and instead of four Ds, I'll use three Ds. And what I'm going to do is specify hours, followed by minutes and seconds, and then two Ts. This will give me the short day with the time. And then let's try one more. This time I'll just simply have no Ds, three Ms, and a lowercase D, and four Ys.
>
> **[6:29](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/formatting-dates-and-times?u=76281980&t=389)** So let's go ahead and run this, and then I'll explain what's going on here. So you can see that this format here gives me the full day, the full month, and then the day and the year. Then here I have the short day name, which is three Ds. So that gives me the abbreviation with the time. And then finally, I just have the abbreviated month with the day and the year. And so, once again, if you go back and look at that table in the docs, you'll see how to use these formatting characters to create your own date and time formats. .NET gives you a lot of control over how dates and times are formatted. So I would suggest taking some time here to familiarize yourself with the codes in the docs, and then try some of the ones we didn't get to in this exercise.

> [!info]- Semantic Content
>
> **Env Vars:** net (3)
> **Documentation:** the docs (3)
> **Tools:** terminal (2), vs code (1)
> **CLI Commands:** make (2)
> **Cross-References:** as we saw (1), go back to (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### [Parsing dates](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-dates?u=76281980&t=0)** - [Instructor] Earlier in the chapter, we saw how to parse strings into numerical data. The .net daytime class also makes it pretty easy to create daytime objects by parsing them from raw text. And if you've ever worked with dates and times you probably have encountered a scenario where you had to take some raw text and create an instance of a class from it. So let's open our code in the parse dates folder. Here in my code, similar to the numbers example we saw earlier I have an array of strings that represent various different [[Forms]] of dates and times, and in some cases, both a date and a time. So once again, let use a loop to try and parse each of these strings into a date-time object. And just like with numbers, there's a parse method that throws an exception, but for the sake of brevity I'm just going to use the try parse function that returns a boolean indicating whether the parse succeeded. So what I'm going to write here in my I code is if, and we'll call the DateTime. All right, not sure why that's giving me a problem, but let's just call DateTime. So we'll call the tri parse function. And each time through this loop this datestr variable will be one of the strings in this array. So we'll try parsing datestr. And I have to use an out parameter here to get my result back.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-dates?u=76281980&t=96)** So if that succeeds then we were able to parse the date stir into a native object. So what I'm going to do is write out to the console that datestr and we'll use the spacing that we learned about earlier in the formatting section. And I'll write gets parsed as and then we'll just simply put the result in there. All right, so that's, if it succeeds and if it doesn't succeed then I'm going to print out that we could not parse datestr.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/parsing-dates?u=76281980&t=136)** So before we run this code let's take a look at the strings that we're going to test. So the first four examples are pretty straightforward. There's no really ambiguity in these. They're pretty straight ahead dates and times. The next three are a little harder. This one just gives a month and a year. The next one appears to be a month and a day with a time. And the last one has an apostrophe before the year. So these are a little bit more ambiguous and hard. These should be easy to parse. So let's go ahead and open up our terminal in this folder. All right. And let's go ahead and run this. And in the output, you can see that they all get successfully parsed except for the last one, because the apostrophe is not a standard way of expressing a year in shorthand. But here you can see that this texturing got parsed correctly as the date and time. So did this one. All right, so you can see that they're all getting successfully parsed as native date, time objects, except for the last one because that apostrophe is causing a problem. So just like working with numbers you can use the parse and try parse methods with dates and times to instantiate more complex objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Analogies:** just like (2), similar to (1)
> **Cross-References:** earlier in (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [CoderPad Solution: How many days?](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/coderpad-solution-how-many-days?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/coderpad-solution-how-many-days?u=76281980&t=0)** - [Instructor] For this challenge, we needed to calculate the number of days between today and a given date, either in the future or the past. So, we have a list of test dates here that we'll test our code against, and we needed to return a positive integer for a date in the future, a negative integer for a date that has already gone by, and zero for today. And if we're given an invalid date, then we need to return int.MaxValue. Now, it's important to note that the answers you will see here in my video are going to be different than the ones you see in your result, because there's a very good chance that you are taking this course on a different day than the one that I recorded it on. So, let's take a look at how my code works. So my CalcHowManyDays function takes the string argument with the test date in it, and then uses the TryParse function to parse the string into a valid DateTime object. The parsedDate variable is used to hold the result of the TryParse function to convert the test date into a date time. And if the conversion is successful, then I compare that date with today, which is stored in the today variable. And then, I create a TimeSpan by subtracting the parsed date from today. And that will give me the positive, negative,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/coderpad-solution-how-many-days?u=76281980&t=93)** or zero value that I need to calculate. If the program wasn't able to parse the date, then it returns int.MaxValue. So, let's go ahead and run this against the testing dates that we have down here in our list. And sure enough, we can see that this is the list of correct answers and it looks like that's right. So let's go ahead and add today's date to this list, and that's going to be July 8th, 2024. So let's test this again, and that should be, the last value should be a zero now. And sure enough, it is. And once again, we got the right answer. All right, so take a few moments and compare my code to yours and see what the similarities and differences are.

> [!info]- Semantic Content
>
> **Code Identifiers:** parseddate (1)
> **Speakers:** - [instructor] (1)


### 4. Working with Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating files](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/creating-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/creating-files?u=76281980&t=0)** - Even in our current modern era of programming with all kinds of web services and [[Representational State Transfer (REST)|REST]] APIs, many applications still need to work with files. In this chapter we're going to learn about some of the basic dot net features for working with files. Creating them, reading and writing data. Getting information about files and working with directories. Let's get started with creating a file and to keep things simple, I'm going to focus on working with text files. So let's open up our program code, here in the Start File for CreateFiles. So to create a text-based file, we use appropriately enough the Create text method on the file class. And I'm going to do this with the C sharp using construct like this. I'm going to write Using. (keyboard tapping) And then I'm going to declare a Streamwriter object. That's going to get the result of a call (keyboard tapping) to the file dot. (keyboard tapping) Command visual studio, (keyboard tapping) dot create text function. And I'm going to create a text file with this name. So, we'll call that Filename. (keyboard tapping) And then inside this using construct, I'll tell the streamwriter to write a line to the file called This is a text file. So, this construct right here. The using construct, automatically disposes of the output stream and the associated file reference when this Using context block completes.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/creating-files?u=76281980&t=95)** So Files are one of those operating system resources that the garbage collector can automatically close for us. So we need to make sure that we don't leave open file references laying around. And this type of construct, the using construct makes that pretty easy. So, when the file is created it returns a streamwriter object which we can use to write output into the Filestream. So let's go ahead and save and run this. So I'll open this up in my terminal... (keyboard tapping) And let's dot net run. Alright, and it looks like it ran successfully. So, let me open my Explorer back up here and sure enough you can see that the text file is created right here. And when I click on it, you can see the content. Alright, so the Create text method will overwrite any content that is in the existing file. So, it would be nice if we had a way to check to see if the file existed before we tried to do that. And the Exists method, let's us do just that. So let's first... I'm going to make this a little bit smaller. Let's go ahead and comment out this previous example. So, let's write a more robust example now. And we'll add some code that only creates the file, if it doesn't exist and deletes it a otherwise. So first I'll add a console dot writeline that determines if the file exists and that's going to be the file name. And if the file exists, (keyboard tapping) then I'm going to call the Delete function on it.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/creating-files?u=76281980&t=194)** (keyboard tapping) And you can see that these are all static class method functions here being called directly on the file class. So, if it doesn't already exist, then I'm going to go ahead and use this construct one more time. So, let me copy that and paste it in here. And let's go ahead and uncomment it. (keyboard tapping) And let's Tab that in. There we go. And then finally. (keyboard tapping) I'll copy and paste this console writeline one more time. Alright. So the updated code now checks to see if the file name exists. So first we'll write out to the console whether it exists or not, and then we'll check to see if it exists and if it does, we'll delete it. If it doesn't, then we'll create it. And then we'll output to the console one more time. What the result of the exists function is. So let's go ahead and run the example one more time. And when I run it, if you pay attention over here you can see that the little example file that we had created has now disappeared because it's been deleted. And you can see that the output of the first Exists and the second Exists calls are true and false. Now let's run it again. And now we have the opposite. We have false because it didn't exist. And true because now it does. And sure enough now you can see that it's back. Alright. So in the rest of the chapter, we'll see how to read and write information and how to work with directories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **CLI Commands:** make (2)
> **Tools:** visual studio (1), terminal (1)
> **Env Vars:** rest (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - even (1)

#### [Reading and writing files](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/reading-and-writing-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/reading-and-writing-files?u=76281980&t=0)** - In order for files to be useful, they have to contain some content. And for that to happen, we need to be able to read and write that content. So let's open the program code, for the Read Write Files example. And again, I'm going to be working on text content here to keep things simple. So for the first example, let's use the WriteAllText Function, to write content into a given file. So I will call the File.WriteAllText function, give that a file name and write, "This is a text file." So this function overwrites the existing content of a file. So be careful how you use it. And similarly, the ReadAlLText Function, reads the entire content of a text file into memories. Let's do that next. So I'll make a string to hold my content, and then we'll ReadAllText of that file name.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/reading-and-writing-files?u=76281980&t=68)** And then we'll just print out that text. All right. So now we have code that creates a file and reads the file. So we were going to write the content and read the content. So let's go ahead and run that. So I'll open my terminal, and let's go ahead and run. And sure enough you can see that when I run that the content gets written out, and then read back in and written to the console. So we can see that it's pretty easy to write and then read information to, and from the file. But it's not often practical to have to write all the content to a file at once. Sometimes writing data takes place over the course of a program. So we need a way to add data to the content that a file already has. And to do that we can use, for example the AppendAllText Function, which appends the text to the end of the file. So let's try that next. So I'm going to call the File.AppendAllText function. And once again I'll use the file name, and I'll write "This text gets appended to the file."
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/reading-and-writing-files?u=76281980&t=145)** And of course we can also use a stream writer, to write individual lines of text. And I'll use the same using construct we saw earlier. So I will create a stream writer, and I'll call file. In this case just the AppendText Function. So the AppendText function opens the file for appending content to it rather than just overwriting what's already there. And I'll AppendText to my file name here, and then I'll just write some lines. So we'll write a line called "Line 1"; and then we'll make a few more of those. So we'll write "Line 2"; and "Line 3"; Okay, so let's go ahead and delete the file that we created in the first go around. So let's get rid of this guy. All right. Off we go. Okay, so let's run this example again. All right. And then when it completes you can see the output there and I'll click on this in the editor and you can see the content. Use the content that gets written when the file is created with WriteAllText. This is the line that gets appended with AppendAllText, and then we have the individual lines written out with the stream writer.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1), click on (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - in (1)

#### [Inspecting file information](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/inspecting-file-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/inspecting-file-information?u=76281980&t=0)** - [Instructor] In addition to working with the contents of files, it is also usually necessary to get information about the files themselves. And this includes basic information such as the size of the file, and when it was created, when it was last updated, what the name of the file is, and so on. Now there are a few different ways to do this, so let's open the program code in the Fileinfo folder and try a few of these out. Now I already have some code to make sure that the example file exists before we try to operate on it. So, first, we can use the functions that are provided directly on the file class itself. So, for example, we can use the File.GetCreationTime function on our filename. And let's make a copy of that line. We can also use the GetLastWriteTime, and let's also call GetLastAccessTime. We can also set file attributes. So, for example, whether a file is hidden or read-only, and we can do that by calling File.SetAttributes.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/inspecting-file-information?u=76281980&t=79)** And on the filename, I'm going to use the FileAttributes class and use the ReadOnly enum to set the file to be read-only. And then we will go ahead and write out the File.GetAttributes call for the file name. So let's take a quick recap here. So given our newly created file, we'll get its CreationTime, LastWriteTime, and LastAccessTime. And since this all happened simultaneously, these dates and times should all be the same. Then we will set the attribute of the file to be ReadOnly, and then we'll print out the result of the GetAttributes call. So let's open this in the terminal. All right, and let's run this,
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/inspecting-file-information?u=76281980&t=139)** and, sure enough, we can see here are the results of the various time calls. And you can see that they're all the same date and time because all three of those operations happened pretty much right next to each other. We can also see that, sure enough, the file has been set to ReadOnly, and that's the result of this GetAttributes call. So we can also use what's called a FileInfo class to get the properties of a file all at once. So let's go ahead and comment out the previous example. And what I'm going to do is use a FileInfo object and this might throw an exception, so I'm going to use a Try catch block. And I'm going to create a FileInfo structure called fi, and I'm going to create a new one of those using the path to the filename that I've got. And then I'll simply write out some various attributes. So, for example, I'll write out the fi.Length property, and, while we're at it, let's go ahead and print out the name of the directory that it's in, and let's also print out the IsReadOnly attribute. And then, of course, I have to catch that Exception.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/inspecting-file-information?u=76281980&t=217)** And if that happens then we'll simply just print out that an exception happened, which I don't anticipate happening, but it might. All right, so let's go ahead and save that, and let's make sure the previous example is commented. Yes, it is. All right, so we already have our file created, let's go ahead and run this updated code. And when I do that, we can see here in the results that the length of the file is 22 bytes, this is the name of the directory that the file is contained within, and, sure enough, we can see that the IsReadOnly property is set to true. Now what's interesting about file information is that it can be changed by your program. So, for example, I can actually change the creation time of a file by doing something like this. I'm going to create a DateTime variable and I'm going to set that to be a DateTime in the past. I'll choose 2020 and July 1st. So to change the time all I have to do is call File.SetCreationTime, and you can see that I can set a lot of different attributes, I can set the AccessTime, I can set the WriteTime. I'm going to call SetCreationTime on the filename with the date and time that I just created. All right, and then let's go ahead and write that out to the console. We'll call GetCreationTime. Okay, so let's go ahead and comment out
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/inspecting-file-information?u=76281980&t=313)** this previous example right here. All right, and now let's run the updated code. Whoops, looks like I had a little bit of a, oh, yes, it's ReadOnly, so let's go ahead and change that, we don't want that to be ReadOnly. So let's just go ahead and create the file again. Let's go ahead and get rid of that guy. All right, let's try running this one more time. And now you can see, that even though the file gets created right now, by calling the SetCreationTime function I'm able to set the CreationTime to sometime in the past. And, of course, you can use information like this in a variety of ways. You can calculate directory sizes, and you can sort file information for display, and the list goes on. So I would suggest taking a look at some of the other file properties available and trying some of your own experiments here.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), such as (1)
> **CLI Commands:** make (3)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Working with directories](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/working-with-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/working-with-directories?u=76281980&t=0)** - [Instructor] Directories are very similar to files in that they can be created and deleted and they have their own sets of information about them, but they don't directly contain data the same way that files do. Directories are mainly an organizational mechanism. They give us ways of organizing collections of files and other directories. So in this example, we'll take a look at some of the features that make working with directories easier. So first, just like with files, creating and deleting directories is pretty simple. So let's open up the code here in the Directories folder. And what I'm going to do is write if not directory dot exists, and you can see that I have a variable here named dirname which is going to be my test directory name. So if that doesn't already exist, then let's create it. We'll call Directory.CreateDirectory and if it does exist, then let's delete it.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/working-with-directories?u=76281980&t=66)** So let's go ahead and run this, open this up in my terminal.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/working-with-directories?u=76281980&t=77)** And sure enough, when the code runs, you can see that this little tester over here got created in the sidebar. Let's go ahead and run this again and now watch and see how it goes away. That's 'cause it got deleted. All right. So it's pretty easy to create and delete directories. So let's comment out this example and try a few more. All right. So we can easily get the path for the current working directory, which is usually the directory that the app is running in by using the get current directory call. So I'll make a string variable called curpath and then I'll call directory dot, get current directory. And then we'll just print that out. Current directory is, and we'll write out curpath and then just like with files, we can get information about a directory. And in the previous example, you saw me do this with a file info structure. Well, there's also a directory info structure so I'll make a new one of those and I'll pass in the path of the current working directory. And then let's just go ahead and print out some information about this directory. So for example, we can print out the directory's name and we can print out the parent directory that contains this one. And let's also print out the creation time. Well, you get the idea, right?
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/working-with-directories?u=76281980&t=171)** There's a whole bunch of properties here. Okay, let's go ahead and give that a try. So let's run this. And we can see that the current directory is and here is the path to my exercise file start files and directories, right? The parent directory name is directories which we can see that that's true right here. We can also see the creation time. There's the creation time right there. That's current. All right. So it looks so far so good. So since, as directories are used to contain and organize other files and directories, one of the more common operations involving them is to enumerate their contents. And there are several different functions you can use to do this. So let's go ahead and comment out. Let's see, we'll comment out this. And then we'll comment out that example right there. So the enumerate directories function will list all the directories that are contained within a given directory and skip all the files. And to do that, I'm going to make a list. That's going to hold a bunch of strings and I'm going to call that thedirs and that's going to be a new list of string. And let me collapse this down to get some more room. So I'm going to make a new string list and that's going to hold the result of calling directory dot enumerate directories. And of course I'm going to enumerate the directories in the current working directory path.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/working-with-directories?u=76281980&t=266)** And then for each string in that list
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/working-with-directories?u=76281980&t=276)** I'm going to write out that directory name and then let me un-comment this line here and this line here to give us some nice headers. Similarly, there's a function called enumerate files and that lists just the files and skips the directories. And it's the same format. So I'm just going to copy this code right here and paste it in here. And instead of calling enumerate directories I'm going to call enumerate files and I'll un-comment these two lines. And then the last function that you can call if you really want to work with both directories and files you can use the enumerate file system entries function. So once again, let's go ahead and do that. And that is enumerate file system entries. So now what we have is code that is going to loop over all the directories, just the directories, by the way and then just the files and then everything. Okay, so let's go ahead and run our updated code and oh, whoops. Yep, don't need to re-declare thedirs. That's a common mistake. So let's go ahead and take out the redecoration because we've already got it.
>
> **[6:12](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/working-with-directories?u=76281980&t=372)** All right, there we go. Let's save. All right. Let's run one more time. And if we take a look at the output, so when we enumerate just the directories, right, we have bin and obj and those are generated by VS code when the app is compiled. Then we have just the files, right? So there's the project and the program codes that worked and then we have all the directory contents. So we have the directories and the files themselves.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Analogies:** just like (2), similar to (1), for example (1)
> **Tools:** terminal (1), vs code (1)
> **UI Navigation:** in the sidebar (1)
> **Exercise Files:** exercise file (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Files and directories](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/challenge-files-and-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/challenge-files-and-directories?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/challenge-files-and-directories?u=76281980&t=5)** - All right. It's time for another programming challenge. In this challenge, we're going to use what we've learned about files and directories to create a program that summarizes the contents of a folder. So let's take a look at the folder and here in the start folder under files I'll open up the challenge folder and there's a folder in here called file collection. And you can see that in here is a collection of different kinds of [[Microsoft Office]] files. We've got [[Microsoft Excel|Excel]] files and [[Microsoft Word|Word]] and [[Microsoft PowerPoint|PowerPoint]] files. And the program that you're going to create for this challenge will scan this folder and produce a summarized report of the folder contents. So let me run my finished version to show you what the output will look like. And that is in the finished folder. So here's my challenge folder and here's the same collection in the finished example. So I'm going to open this up in my terminal. What I'm going to do is [write.net](https://write.net) run. All right. So that's going to run. All right. So when I run my code, you can see that what happened was this file right here called results.txt was created. And let me go ahead and close this down. So when I open this file up, you can see that the contents of this file counts all of the files in the folder that are [[Microsoft Office|Office]] files as well as the count of each file type. So there's 12 total, four Excel, five Word and three PowerPoints.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/challenge-files-and-directories?u=76281980&t=99)** And it also summarizes the total size of all the files in bites, along with the total number of bites for each file type and notice how the numbers are formatted using commas. So your code will look for these three types of Office files and produce this summarized report and it should ignore any file that is not an Office file. So for example, if I go back to that folder if I make a new file in here called, you know, test.txt and then I go back to my terminal and I run this again. So in this case, you can see that when I click on results.txt, the results are the same. So this non-Office file got ignored. So go ahead and try that challenge. And then I'll review the code to my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (4), [[Microsoft Excel|Excel]] (2), [[Microsoft Word|Word]] (2), [[Microsoft Office]] (1), [[Microsoft PowerPoint|Powerpoint]] (1)
> **File Paths:** results.txt (2), test.txt (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **CLI Commands:** make (1)
> **URLs:** [write.net](https://write.net) (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Solution: Files and directories](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-files-and-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-files-and-directories?u=76281980&t=0)** - [Instructor] Okay, let's review my solution to this challenge and you can compare it to yours along the way. So in my code, I start with a couple of string contents that contain the name of the folder that's going to be scanned along with name of the results file that's going to be created. These are followed by the variables I'm going to use to build the information that we need to summarize things like the number of each file type, the total file count, total number of bytes, and so on. This function is [[Microsoft Office|office]] file, determines if a given name is an office file. Now it's a very simplistic test that just looks at the suffix of the file name to see if it ends in a known file extension for office files. Next, we get into the main algorithm for the program. So I create a DirectoryInfo object for the folder that we're going to scan. Then, the code uses the enumerate files function to iterate over each file in the directory. And each time the function will return a FileInfo object that contains information about that particular file. The program passes that file name to the IsOfficeFile function. And if it returns true, then we increase the total file count along with the total file size, using the length property of the file info to get the number of bytes for that file. The process is then repeated
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-files-and-directories?u=76281980&t=95)** based on what type of office file this is. And in each case the code counts that particular type and size. So when the loop completes the code calls the CreateText function to create the results file and then each piece of data is written out. And for the numbers, notice that I'm using the string formatting syntax that we learned about earlier in the course to format each these numbers as a regular number with zero precision which will give me the commas for the thousand separators. And yeah, that's pretty much it. So take a few moments here to compare your code with mine and think about ways you might extend it. So, for example, how would you change the code to count the total number of both office and non-office files and add the total bytes of all the files to the results but keeping just the office file count the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (7)
> **Cross-References:** earlier in (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Regular Expressions

[↑ Back to Table of Contents](#table-of-contents)

#### [RegEx and .NET](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/regex-and-dot-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/regex-and-dot-net?u=76281980&t=0)** - [Instructor] You've probably heard the old joke about the programmer who had a problem and decided to solve it with regular expressions and then ended up with two problems. Well, there's a grain of truth in that, but regular expressions definitely have their place in any programmer's toolbox and .NET of course has great support for working with them. In this chapter we're going to see how to define and execute regular expressions, both for finding and replacing content within strings of data. The focus of this chapter is going to be on how to use regular expressions in .NET and not really so much on what they are or how to create regexes in the first place. If you're not already familiar with regular expressions and how they work or how to define them, then it's probably worth your time to learn more about them in the regular expressions essential training course. We'll start by looking at the functions that are used to find text patterns in strings and these are the IsMatch, Match and Matches functions. Next, will examine the replace function which is used to replace Match content within a text string, as the name of the function implies. And we'll also take a look at how to use timeout values to help protect your program against rogue regexes that can hang your app or cause a denial of service attack.

> [!info]- Semantic Content
>
> **Env Vars:** net (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Finding and matching content](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/finding-and-matching-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/finding-and-matching-content?u=76281980&t=0)** - [Instructor] All right. Let's start by using regular expressions to find content within strings. So I'm going to open the code for the Finding example here in my Start folder. And since regular expressions are not one of the default name spaces included in every project, I have to explicitly include the regular expressions one here at the top of the file. So you see that I'm using the System.Text.RegularExpressions namespace. I also have two strings which are pretty similar to each other that we'll be using to exercise the Regex APIs. So for the first example, let's use the IsMatch method. This function returns true or false depending on whether the text being examined fits the given regular expression pattern. So I'm going to create an expression that looks for uppercase characters followed by non-white space characters. So I'll call that CapWords. And I will create a new Regex. And I'm going to use the @ symbol outside the string, which means, "Hey, .NET this is a literal string content." So if you ever see something like a back slash inside the string, I'm not escaping something that's a real backslash in there, and that's how you should treat it. So I'm going to look for a regular expression where any characters in the range of A to Z are followed by a non-white space [[Microsoft Word|word]] character, one or more of those. And again, I'm not going to get deep into how regular expressions are built.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/finding-and-matching-content?u=76281980&t=93)** If you don't understand this syntax, then you should go watch the regular expressions essential training course. All right, so then let's test this on each string. So let's go ahead and Console.WriteLine, and I'm going to write CapWords.IsMatch. And the IsMatch function, I'm going to pass in teststr1, and then let's do the same thing for teststr2. So the first ring has capital letters in it, while the second one and does not. So we should see the true result for the first string and false for the second. So let's go ahead and open up our integrated terminal.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/finding-and-matching-content?u=76281980&t=144)** All right, and let's go ahead and run this. And sure enough, we get true and false. We can all also use the Regex options object to affect how the matching is performed. So for example, we can use the ignore case option to ignore the casing. So let's try that out. I'm going to create a Regex called NoCase. And that's going to be a new Regex. And I'm going to look for the literal string fox, and I'm going to specify RegexOptions.IgnoreCase. And then once again, let's go ahead and run this. So I'll call NoCase.IsMatch, and we'll call that on teststr1, which we know, for example, if we scroll back up, we can see that teststr1 has a capital fox in here. But I'm looking for a lower case, and I'm telling the system to ignore the case. So let's go ahead and run this. And sure enough we get a true result. So we can see that the case is successfully being ignored. If we need to get more information about the actual pattern matching, we can use the match and matches functions. So the match function returns one result at a time and you can iterate over each match individually. So let's see how that works.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/finding-and-matching-content?u=76281980&t=238)** And before we do that, let's go ahead and let's comment out some of these guys so we don't clutter the output, all right. So let's use the match function. So what I'm going to do is create a variable named Match. Well named m, of type Match. And I'm going to call CapWords. Oh, actually, you know what? I mistakenly commented that out. So let me go comment that back in. We actually want to keep the CapWords on. All right, there we go. So on CapWords, I'm going to call the match function and I'll pass test stir one to match. Then I'm going to have a while loop. And while the success property of the match variable is true, I'm going to write out m.value
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/finding-and-matching-content?u=76281980&t=299)** found at position m.index, and I'll put the value inside single quote so we can distinguish it in the output. And then I'll write m equals m dot, I'm going to call the NextMatch function. So what this is doing is iterating over each of the individual matches that the pattern runs up against in the string, okay. So let's go ahead and run this again, and I'll make the turn a little bit smaller. And so when I run the code, you can see that I can inspect each matching instance along with the index in the string of each one of the found matches. So, remember if we scroll back up. So the IsMatch function basically told me whether or not there were capital words in the string, but the Match data is showing me what the actual matches are. So each of the three capitalized words have been found and I'm able to iterate over each one of them. The matches method does pretty much the same thing except that it returns all the matches at once. So let's do the same thing with matches. And matches will in a match collection, so I'll name that mc, and I'll call CapWords.Matches. And once again I'll call that on teststr1, and then I will write out that we found mc.Count matches.
>
> **[6:45](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/finding-and-matching-content?u=76281980&t=405)** And then I'll have a foreach Match match in mc,
>
> **[6:55](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/finding-and-matching-content?u=76281980&t=415)** So we'll loop over all of the matches in the match collection. And we'll just write each one of these out. What I'll do is I'll have match.Value found at position match.Index. So let's go ahead and comment this one back out, and let's go ahead and save. And now let's run the updated code. And you can see that the result is the same as the previous one, right? So here's the previous result. Let me scroll up. So there's the previous result, and there's the new result. So match and matches depends on whether you want to iterate over individual matches one at a time or get all the matches at once. So, that pretty much covers the basics for the matching functions. I would suggest taking a few minutes to try some experiments here to get a better feel for how the matching functions work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** open the (1), scroll up (1)
> **Env Vars:** net (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Replacing content](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/replacing-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/replacing-content?u=76281980&t=0)** - [Instructor] All right, so now that we've seen in a previous video how to perform basic searching and matching with Regex patterns, let's try something a little more complex. In this example, we'll take a look at how to use Regex patterns not just to find content, but also replace it. So let's open up the code for the example here in my replacing folder. So I have the same text string as in the previous example. And once again I have an expression that matches capitalized words. So first let's use the replace function to replace capital words with some asterisks. All right, so here's what we're going to do. I'm going to write string result is equal to, and I'm going to call cap words and on the cap words Regex I'm going to call the replace function, and I'm going to replace the content in teststr1 with three asterisks. So basically, each one of these capitalized words should be replaced by three asterisk characters. And then I'll actually just write out teststr1, so we can see the original. And then I'll write out the result, so we can compare it side by side. So let's save, and let's open this up in our terminal, and let's run this. So here's the original string, and we can see that in the replaced version of the string the capital words have all been replaced by the three stars.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/replacing-content?u=76281980&t=96)** So, that's pretty straightforward. But what's really cool about the dotnet implementation is that we can create a function that generates the replacement text on the fly, according to some logic. So for example, let's imagine that we wanted to generate an uppercase version of whatever the matched string was. So to do this we create a function that takes a match object as an argument, and returns a string as a result. So I'll have a function called MakeUpper that takes a match as an argument. So then let's fill in the logic. So I'll have a string s which is going to hold the intermediate result and I'll call m.ToString. So we're going to convert the match to a string, and then we'll return s.ToUpper. So that will return the uppercase version of the matched string. But remember, we're doing this in logic on the fly, so we can customize this even further. So for example, suppose we only wanted to upper case the matches after the beginning of the string. So in other words, if the first match starts the sentence, then let's skip it. So to do this, we just need to see if the index of the match is zero, and then return the original string. So here I'll write if m dot index is zero,
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/replacing-content?u=76281980&t=184)** then just return s. And then to use this function we supply it as an argument to the replace function. So I'm going to make a variable called upperstr, and I'll call the cap words, Regex with the replace function, and I'll replace the content in teststr1 with a new match evaluator. And the match evaluator is going to be my MakeUpper function. And then one more time, let's just go ahead and print out the original string followed by the result, which is upperstr. And then let's go comment out the previous example, so we don't have to see it in the output. Okay, so let's go ahead and run this. And you can see here is the original string, and you can see that only of the capital words after the start have been converted to all uppercase and the [[Microsoft Word|word]] the at the start of the sentence is left untouched. So you can see that using dotnet Regexes can make replacing content really simple and very customized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** dotnet (2), make (2), find (1)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Using RegEx timeouts](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-regex-timeouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-regex-timeouts?u=76281980&t=0)** - [Instructor] One of the things you need to be really careful about when working with regular expressions is that they can be an unexpected source of potential security issues or other program problems. So for example, if your program works with text that comes from outside your app or outside your organization, then it's not that hard to create a text string that can hang your program resulting in a type of denial of service attack. So one way to help guard against this is by using timeouts to make sure that your Regexes don't hang the program. So let's see how to do this. Right here in my example code, in the timeouts folder I have an example string of content, right? It's this long string of A characters, and you can see that I'm also including the regular expressions, name space, along with the system diagnostics name space. The diagnostics name space gives me access to this stopwatch class, so I can see how long it takes to execute code. So here's where things get tricky. I'm going to design a regular expression that looks like this, right? Let's see, it's got a group of one or more A characters followed by one or more A characters and then that group is repeated, followed by the letter B. Now I'm not going to dive deep into the details here but this is a very poorly constructed regular expression, because it results in a huge of what's called "backtracking" in the regular expression processor and that backtracking can take a very long time to execute. So my code uses the matches function
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-regex-timeouts?u=76281980&t=97)** to execute the Regex right? So let's go ahead and just run what we have and when I do this, you can see that we need to wait for a little bit and then we see that because there's no matches, right? There's no letter B at the end of the string. So this isn't going to find anything. The problem is the program has to process all these matches to find that out, right? So you can see that it says, found zero matches in, you know, a little over 0.01 seconds of time and this happens with a relatively short string of input. I mean, you can imagine if this was a long string, this would take a long time to run. So to guard against this kind of situation I'm going to define a timeout value and in this case, 1000 milliseconds, right? Or one second. So I'll make an integer called "max Regex time" and I'll make that 1000 and then I need to create a time span that represents that value. So I'll create a time span called "timeout" and that will be a time span dot from milliseconds and I'll pass in max Regex time. So now I have a one second time out. So now we need to add that time out to the function call where I execute the regular expression and the different execution functions like match and matches and replace and so on, they all have a version that takes a time out
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-regex-timeouts?u=76281980&t=191)** as one of the parameters. So here, where I have my matches call on the string. When I create the new Regex, I'm going to pass in the timeout as an argument. After this Regex options of none property that I've got set here. So if the execution time of the Regex exceeds the specified time span, then it's going to throw a Regex match timeout exception which I need to catch. So let me catch that down here. That's going to be a Regex match timeout exception and I'm going to write line, "the Regex took too long to execute"
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/using-regex-timeouts?u=76281980&t=243)** and I'll put in the the match timeout value from the exception. Okay, so now let's run the example again and oh, whoops, I just misspelled it. It's got to be a lowercase timeout. All right, let's try it again and you can see that because the regular expression took too long to execute, right? It went past my 1000 millisecond timeout value. You can see that I'm getting this exception. The Regex took too long to execute. So using timeouts is considered a best practice when working with regular expressions in dot net and as you can see, they are really easy to, to implement.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Analogies:** for example (1), imagine (1)
> **Versions:** 0.01 (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Regular expressions](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-regular-expressions-24349885?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-regular-expressions-24349885?u=76281980&t=0)** - [Instructor] For this challenge, we needed to transpose a date using regular expressions. So in my solution, if we look over here in the answer panel, I defined a helper function named ReverseDateFormat that takes a single string argument, and we'll come back to this function in a few moments. So my ReverseDate function takes the input string and makes sure that it is a valid date before trying to reverse the format by using the TryParse function. So if the date is valid, then I pass the string to my ReverseDateFormat function. And for invalidates, I return an empty string, which, again, was part of the challenge requirements. And we are going to test our code against these strings down here. So let's go examine how that ReverseDateFormat function works. So following a defined best practice, I specify a timeout value for my regular expression. And then I'm going to use the static Replace function on the Regex class to execute the regular expression that I want to use to transpose the date on my sourceDate input string. So the expression that I'm using, which is defined right here, contains three grouping constructs. So the first grouping construct captures the month,
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-regular-expressions-24349885?u=76281980&t=98)** which can be either one or two digits, and I give it the name of mon so I can refer to it later. The next group pattern is the same for the day value. So the day value can be either one or two digits, and I name it day, again, so I can refer to it later. And then the year group allows either two or four digits. And notice also that the expression is looking for the / characters that separate each value in the sourceDate. In the replacement string, which is this argument here, I simply use each of the group names and put them in the order that I want them to appear in the output, which, in this case, is separated by dash characters, which was part of the challenge requirements. And of course, you can see I'm using the timeout value to make sure that my expression completes within a certain time span. If it doesn't, it will raise this exception and I just return the original string back to the caller. And that was a personal choice that I made. So let's go ahead and try out our code on each of these test strings. And you can see down here, the way that my function is being called to test it is going to be an index into these test strings. So let's just try each one of them in succession. So the first one is going to be 12/25 of 2030. So that should give us 2030-25-12. Oh no, that should give us 2030- then the month,
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/solution-regular-expressions-24349885?u=76281980&t=195)** which is 12, then -25. So let's try that and see if that's correct. And sure enough, it is. 2030-12-25. So year, month and day when it was given month, day, and year with slashes. All right, let's keep on going. Let's try the next one. So that's New Year's Day of 2020. All right, that seems to work. Okay, last time I checked, Juneuary was not a valid month, so let's see what happens there. All right, we get the empty string, which is what we expected. All right, here's another date. This one has a trailing, or I mean, a leading zero for the month. So let's see if that one works. All right, that seems to be working as well. And then let's do the last one where we have a single digit, month, a two-digit day, and a two-digit year. All right, let's try that one out. And it seems to be working fine. All right, so that's my solution to the challenge. Take a look at it and compare it to your own code.

> [!info]- Semantic Content
>
> **Code Identifiers:** sourcedate (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-and-dot-net-essential-training/next-steps?u=76281980&t=0)** - [Joe] All right, well, that brings us to the end of the course. Congratulations on completing the course and I hope you enjoyed learning along with me about the .NET platform and some of the more common features you can use when building your .NET apps, regardless of whether they run on the client or in the browser or even in the cloud. The .NET platform continues to evolve and grow, and there are plenty of other great courses here in the library to check out as you continue to learn about .NET development. I'm looking forward to seeing you again in another one of my courses soon. Until then, happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** net (4)
> **Speakers:** - [joe] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-dot-net-programming-2453257)

## Skills Covered

- .NET Framework
- C#

## Path Context

### In [[Getting Started as an ASP.NET Core Developer]]
← [[Learning Asp Dot Net Core Mvc Razor Pages Web Apis Other Foundations]] | **2 of 9** | [[ASP.NET Core- Razor Pages]] →

### In [[Getting Started as a C- Developer]]
← [[C- Essential Training 2- Generics, Collections, and LINQ]] | **3 of 9** | [[C Sharp Algorithms]] →

## Appears In

- [[Getting Started as an ASP.NET Core Developer]]
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