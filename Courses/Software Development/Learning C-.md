---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-c-sharp-8581491
url: "https://www.linkedin.com/learning/learning-c-sharp-8581491"
duration_minutes: 174
duration: 2h 54m
level: Beginner
updated: 9/14/2023
learners: 53067
skills:
  - C#
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHyukppmcS41g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694721037740?e=2147483647&amp;v=beta&amp;t=lYMcOW-aab-eECYL0l_1ssUd1KkAJuO037RYI7LpvVQ"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a Software Developer]]'
  - '[[Software Development Fundamentals]]'
prev_courses:
  - '[[Learning Java 11]]'
  - '[[HTML Essential Training]]'
next_courses:
  - '[[Learning SQL Programming]]'
  - '[[C Sharp Algorithms]]'
path_nav: '[{"path":"Become a Software Developer","position":10,"total":12,"prev":"Learning Java 11","next":"Learning SQL Programming"},{"path":"Software Development Fundamentals","position":6,"total":10,"prev":"HTML Essential Training","next":"C Sharp Algorithms"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20C-.md)

![Learning C#](https://media.licdn.com/dms/image/v2/D560DAQHyukppmcS41g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694721037740?e=2147483647&amp;v=beta&amp;t=lYMcOW-aab-eECYL0l_1ssUd1KkAJuO037RYI7LpvVQ)

# Learning C#

> The C# language got its start on Windows, but today you can find it almost everywhere. Whether it’s running on the cloud, to desktops with MacOS and Linux, to mobile operating systems like Android and iOS, C# has grown into a mature, powerful language for almost any programming purpose. In this course, Joe Marini dives into the fundamentals of C#, starting with a basic overview of language constru

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-c-sharp-8581491) | 2h 54m | Beginner | 53K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [An introduction to learning C#](#an-introduction-to-learning-c)
  - [What you should know](#what-you-should-know)
  - [Setting up your environment](#setting-up-your-environment)
  - [How to run the examples](#how-to-run-the-examples)
  - [CoderPad Challenges](#coderpad-challenges)
- [**1. Overview of C#**](#1-overview-of-c) (4 videos)
  - [Hello World C#](#hello-world-c)
  - [Variables and data types](#variables-and-data-types)
  - [Operators](#operators)
  - [Writing C# comments](#writing-c-comments)
- [**2. C# Program Flow**](#2-c-program-flow) (6 videos)
  - [Conditionals with "if"](#conditionals-with-if)
  - [Conditionals with "switch"](#conditionals-with-switch)
  - [For loops](#for-loops)
  - [While loops](#while-loops)
  - [Using break and continue](#using-break-and-continue)
  - [Exceptions](#exceptions)
- [**3. C# Strings**](#3-c-strings) (6 videos)
  - [String operations](#string-operations)
  - [String formatting](#string-formatting)
  - [String interpolation](#string-interpolation)
  - [Using StringBuilder](#using-stringbuilder)
  - [String parsing](#string-parsing)
  - [Solution: Count the data types](#solution-count-the-data-types)
- [**4. C# Functions**](#4-c-functions) (5 videos)
  - [Function basics](#function-basics)
  - [Named and default parameters](#named-and-default-parameters)
  - [Reference and out parameters](#reference-and-out-parameters)
  - [Returning multiple values](#returning-multiple-values)
  - [Solution: Palindrome](#solution-palindrome)
- [**5. Object-Oriented C#**](#5-object-oriented-c) (6 videos)
  - [Defining C# classes](#defining-c-classes)
  - [Access modifiers](#access-modifiers)
  - [Defining properties](#defining-properties)
  - [Inheritance](#inheritance)
  - [String representation](#string-representation)
  - [Solution: Bank](#solution-bank)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [An introduction to learning C#](https://www.linkedin.com/learning/learning-c-sharp-8581491/an-introduction-to-learning-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/an-introduction-to-learning-c-sharp?u=76281980&t=0)** - I've been programming for many years now and I always seem to come back to C#.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/an-introduction-to-learning-c-sharp?u=76281980&t=4)** It has a rich history and expressive syntax and a very powerful and capable standard library in the .NET runtime.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/an-introduction-to-learning-c-sharp?u=76281980&t=12)** Hi, I'm Joe Marini, and I've been building software for some of the best known companies in Silicon Valley for more than 30 years.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/an-introduction-to-learning-c-sharp?u=76281980&t=18)** In this course, we're going to get an introduction to the C# programming language, from the basics such as data types and program flow control, to more advanced concepts, like working with string data and building classes using object oriented programming techniques.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/an-introduction-to-learning-c-sharp?u=76281980&t=33)** The C# language has somehow found a way to combine power, simplicity, and expressiveness into a language that can do just about everything.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/an-introduction-to-learning-c-sharp?u=76281980&t=42)** So come join me in my course and see for yourself how easy it is to get started learning C#.

> [!info]- Semantic Content
>
> **Env Vars:** net (1)
> **Analogies:** such as (1)
> **Speakers:** - i (1)

#### [What you should know](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=0)** - [Instructor] There are some concepts that you should already be familiar with before you start this course.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=4)** So let's take a few moments and review what basic knowledge you should already have.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=9)** First, this course is not intended for people with no programming experience.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=14)** I'm going to assume that you have some basic foundational knowledge of programming.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=18)** Now you don't need to be an expert, but I do expect that you are familiar with basic concepts, like functions and variables and other core parts of programming.
>
> **[0:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=27)** And because C# is a fully object-oriented language, you should also be familiar with [[Object-Oriented Programming (OOP)|object-oriented programming]] concepts, like classes and inheritance.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=37)** Now, if you need to get to speed with these areas, then I suggest starting with a couple of other courses before you take this one, such as "[[Programming Foundations]]: Fundamentals" and "[[Programming Foundations- Object-Oriented Design]]."
>
> **[0:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=50)** Both of these courses will give you a great introduction to programming and you'll get a lot more out of this course as a result.
>
> **[0:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=57)** You should also be familiar with using a text editor or an integrated development environment, as well as the terminal or command line program on your computer.
>
> **[1:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=67)** I'm going to be using Visual Studio Code in this course, and if you want to use it along with me then you can download it from this link.
>
> **[1:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=74)** It's not required.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=75)** You can technically use whatever editor you like best, but I happen to really like VS Code, so I'm going to be using it.
>
> **[1:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=82)** Okay, so that's pretty much it for the prerequisites for this course.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/what-you-should-know?u=76281980&t=86)** Once you're comfortable with these subjects, then you are ready to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming Foundations]] (2), [[Programming Concepts]] (1)
> **Tools:** terminal (1), command line (1), visual studio (1), vs code (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Setting up your environment](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=0)** - [Narrator] Before we get started, you'll need to have at least the .NET Core development environment installed on your computer.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=6)** And if you don't already have .NET installed then in your browser go to .net.[[[Microsoft]].com](https://microsoft.com) and then click on the download button.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=15)** Now, if this screen looks a little bit different when you visit then you can always just do a web search for .NET install and then just go from there.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=24)** It should be one of the first two, if not the third entry.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=28)** So let's go back to the installation.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=29)** I'll click on download and let's see scroll down a little bit.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=34)** So you want to make sure that you download the SDK version of .NET so that you can both build and run your apps.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=41)** So don't just download the runtime version of .NET You need the SDK.
>
> **[0:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=46)** So for [[Windows]] what you're going to download is the .NET SDK and .NET 5.0 is the most current one right now .NET Core and .NET framework are sort of the older legacy ones .NET Framework goes Windows only.
>
> **[1:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=60)** .NET Core is cross-platform, but it's older now.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=62)** So make sure it's at least .NET 5.0 And when you get here it might be a little bit later version, but that's at least the base number of the version that you want.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=71)** And again, don't choose runtime.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=72)** You want the .NET SDK.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=75)** If you're on [[Linux]], again you'll only have the choice of .NET 5.0 or older, choose at least .NET 5.0 and then choose [Install.NET](https://Install.NET) and then on Mac, choose download .NET SDK.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=90)** And alternatively, if you're using a Windows or a Mac you can choose to download the full visual studio IDE itself, the commercial version.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=99)** And that of course will also install the runtime and SDKs that you need.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=104)** So once you've downloaded and run the .NET installer, what we're going to do is open up a terminal window.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=111)** And again, this will work on any computer you have.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=114)** This will work on Windows, Mac or Linux.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=117)** So open a terminal window after you've run the installer or gone through the install process for your OS and type .NET--version.
>
> **[2:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=126)** This should give you the version number of the .NET that's on your computer.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=130)** So you can see here, I'm running 5.0.103 and that number might be bigger for you, that's fine.
>
> **[2:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=136)** So if running this command results in an error then something went wrong with the .NET installation and you'll need to try it again.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=144)** Now because we're going to be using the terminal to run our examples in this course, you don't need to install the full visual studio if you don't want to.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=153)** I'm just going to be using visual studio code the free lighter version of the IDE and actually technically you can use whatever code editor that you want.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=164)** So if you want to use visual studio code as well then you can download it from code.[visualstudio.com](https://visualstudio.com).
>
> **[2:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/setting-up-your-environment?u=76281980&t=170)** So once you have .NET and your favorite editor installed then you are ready to proceed with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Linux]] (2), [[Microsoft]] (1)
> **Env Vars:** net (22), sdk (5), ide (2)
> **Tools:** visual studio (4), terminal (3)
> **Prerequisites:** install (5), you'll need (2)
> **Versions:** 5.0 (4), 5.0.103 (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1), [install.net](https://install.net) (1), [visualstudio.com](https://visualstudio.com) (1)
> **Exercise Files:** download the (3)

#### [How to run the examples](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=0)** - [Instructor] So now that we've installed and tested the dot net SDK, let's see how to run the examples in this course.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=7)** Now all of the examples in this course are built as command line or console programs.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=12)** This makes it easy to run them from your computer's terminal program.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=16)** And since I'm on [[Windows]], I'm going to open up my command prompt program, which you see here.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=21)** But if you're on a Mac or [[Linux]] computer, then use the terminal program for that operating system.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=26)** So what we're going to do is run one of the finished example files.
>
> **[0:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=30)** And if we look inside the exercise files folder, which I've put here on my desktop, you can see that there's a folder for finished and start examples.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=40)** And if I look inside the finished folder, you'll see that there are sub folders that correspond to each chapter in this course.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=47)** And there's also a folder for the starting points as well.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=50)** So what I'm going to do is I'm going to close this and then I'm going to go into the folder for the examples.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=58)** So that's on my desktop and that's going to be in exercise, let's make sure.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=64)** Yep, so let's go into the exercise files and we'll go into finished.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=72)** And then inside the finished examples I'm going to go into the overview folder and then into the hello world folder.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=81)** And I'm going to type dir to show you the folder contents.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=84)** So there's two files in here.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=86)** There's the hello world dot CS proj.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=88)** This is the project file.
>
> **[1:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=90)** And then program dot CS.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=92)** That's where our code is.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=93)** So all I need to do to run each example is just type the [command.net](https://command.net) run when I'm in the folder at the top level of the project.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=102)** So I'm going to go ahead and do that.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=104)** And when I do .net run it's going to compile and build the program.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=110)** And we can see here that after a few moments .net has built the app and then there's some output display down here.
>
> **[1:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=116)** It says, hello world, what is your name?
>
> **[1:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=118)** And I'm going to type in Joe.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=121)** And then you can see the output of our first hello world program.
>
> **[2:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=124)** And we'll get into that when we start the course in the next chapter, but for now just want to show you how to run these examples.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=130)** Now I'm going to be using visual studio code for this course, which actually has a terminal program built in.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=137)** It's one of the reasons why I like it.
>
> **[2:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=138)** So if you're also using VS code then you can run the examples that way.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=143)** So let me show you that.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=145)** All right, so here in VS code, I'm going to start by opening up the exercise files folder, and that is on my desktop.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=153)** So I'll choose that and select it.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=158)** And then, once the application starts, I'll close the welcome window, and then I'll navigate into the finished overview hello world folder.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=168)** And you can see here's the project and here's the code.
>
> **[2:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=170)** All right, so then what I'm going to do is I'm going to right click on the hello world folder and I'm going to choose open in integrated terminal.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=179)** And you can see that when I do that this terminal window opens down here in my editor and puts me right into that folder automatically.
>
> **[3:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=188)** So I don't have to do all this like changing directories in the command line and all that stuff.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=192)** So now I can just type .net run again.
>
> **[3:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=198)** And you can see that the application runs just the way it did in the other terminal.
>
> **[3:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=202)** So once again, I'll type in my name and you can see that the program runs.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=207)** So either way it works fine.
>
> **[3:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=208)** If you want to run it in VS code, that's great.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=211)** If you want to run it in your own terminal program, that's great too.
>
> **[3:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/how-to-run-the-examples?u=76281980&t=215)** It's all up to you how you want to run the examples on your machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1)
> **Tools:** terminal (7), vs code (3), command line (2), command prompt (1), visual studio (1)
> **Exercise Files:** exercise files (3)
> **CLI Commands:** make (1)
> **URLs:** [command.net](https://command.net) (1)
> **Env Vars:** sdk (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [CoderPad Challenges](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=7)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=16)** These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=23)** We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=31)** The code challenge has four areas: there's the instructions in the top left, a code editor for your answer in the top right, another code editor where you can see how your code is used in the bottom right, and a console for output in the bottom left.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=47)** You can use these drag handles to allocate space as you like and to get even more horizontal space for the code editors you can collapse the course's table of contents on the left.
>
> **[1:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=61)** Each challenge has instructions that include a description of the challenge and the challenge's parameters and desired result.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=69)** And depending on the challenge, you will see some additional information in the instructions, such as an explanation of the parameters that your code will be given along with some examples of what the expected output might look like.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=81)** And there might even be a hint or two.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=83)** Create your answer in the top right code editor.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=87)** And there are comments in the starting code showing you where to put your solution.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=92)** So you can see it says right here, "Your code goes here."
>
> **[1:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=95)** When you click on "Test my code" you'll see a message indicating whether your code returned a correct result.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=101)** So in this case, I know that the right way of finding the largest number in an array is to use the numbers.Max function.
>
> **[1:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=109)** So I'll click on "Test my code."
>
> **[1:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=112)** And sure enough, if I scroll up here in the Console output you can see that I got the right answer.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=117)** Now, if your code isn't successful, you can ask for help.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=122)** Let's comment this back out again and let's return the wrong answer and you can see that there's the wrong answer.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=130)** What I can do is change these values to true to get the expected output and a hint.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=141)** So if I run this again, you can see that that's not correct.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=144)** It says, hey look, here's the expected result.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=147)** And a hint, you know, "Have you tried "using the Max method?"
>
> **[2:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=150)** Right?
>
> **[2:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=152)** The code editor in the lower right shows you how your solution is used.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=156)** You can change that code to experiment with different test cases.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=161)** So let's go ahead and put the right answer back in and I'm going to change the 19 to 25.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=168)** Click on "Test my code" and sure enough you can see that I got the right answer again.
>
> **[2:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=173)** Regardless of whether your answer is successful, you'll see messages in the Console output in the lower left.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=179)** If any messages are too long to fit in that area, you can always scroll sideways to see all the text.
>
> **[3:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/coderpad-challenges-22853406?u=76281980&t=185)** When you finished each code challenge, return to the course's table of contents and then click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **UI Navigation:** click on (4), scroll up (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Overview of C#

[↑ Back to Table of Contents](#table-of-contents)

#### [Hello World C#](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=0)** - [Instructor] It's a bit of a tradition in the [[Software Development]] world, to start off learning a new language by writing a hello world program.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=7)** So let's do that for our first example.
>
> **[0:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=10)** I'm going to auto-generate a C# console program, which is a program that, as we've already seen, uses the terminal, or console as its main user interface.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=21)** So here in my terminal, I'm going to go into the start folder in my exercise files.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=29)** And then into overview and then into hello world.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=34)** And we'll see what's in here.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=36)** So right now there's just a little read me file in here that explains what this folder is.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=40)** So I'm going to create a new console app by running this command, I'm going to type dot net, new console, hit return, we can see the dot net is doing its thing, and after a few moments, we can see that it's succeeded, so now we have our new programs, let's do dir again, and now you can see that we have this hello world, dot CS project file, we have an empty object folder, and we have our program dot CS file.
>
> **[1:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=68)** And that's where our code is going to go, so let's go open the code in our editor.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=72)** So I'm going to jump over to Visual Studio Code, and then in start, overview, hello world, I'm going to click on program dot CS.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=81)** And when I open the program dot CS file, you can see that there's a few lines of code that were auto-generated by .NET.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=88)** So at the top of the file is this using systems statement, which indicates that our program will be using code that is in the .NET system namespace, and we'll get into that a little bit more later.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=100)** So speaking of namespaces, we can see that's on the next line here, this is namespace, hello world.
>
> **[1:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=107)** So namespaces help organize programs, and prevent names that are in your code from colliding with names that are in other third party libraries that you might include later, or in .NET itself.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=120)** Next is the class program definition.
>
> **[2:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=124)** So C#, and .NET as a whole, is an object oriented language, and all of your code is organized into classes.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=132)** And we'll learn more about how to work with classes and other object oriented C# features later in the course, for now, you don't need to focus too much on the details of the program structure here.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=144)** So the program class is where we put our main function, which is next, right here on line seven.
>
> **[2:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=150)** So each C# console program has an entry point and that entry point is named main, so when .NET starts up the program, it's going to look for the main entry point and it's going to begin the program there.
>
> **[2:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=163)** So this function has no return value and that's what the void [[Microsoft Word|word]] here means.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=168)** And again, we'll learn more about functions a little bit later, and this array of strings are whatever the command line arguments that the app was started with.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=179)** But again, you can just ignore all that for now.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=182)** And then finally, we get to the first line of actual code.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=186)** The console object represents a terminal and it's contained within the system namespace.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=194)** And then right line is a function, or method, on the console object and it prints a string to the console, and then the line of code ends with a semi-colon which completes the statement.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=207)** Now this is not optional, in C# you have to have semi-colons some languages like [[JavaScript]] don't require it, [[Python (Programming Language)|Python]], you don't use them, in C# you do.
>
> **[3:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=215)** So let's run what we already have, and to do that I'm going to type the command in the directory where my program is.
>
> **[3:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=222)** Now remember, I can do that either by starting up the integrated terminal here, or by hopping back to my terminal.
>
> **[3:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=229)** And what I'm going to do is just type dot net run, And so .NET will build the application, compile the code, build the executable and there you can see the output, it says hello world.
>
> **[4:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=240)** All right, so that worked just fine.
>
> **[4:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=242)** So we're going to be using the terminal a lot in this course, so let's try something else before we move on, let's have the program ask the user for their name and then print hello, along with their name.
>
> **[4:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=255)** So let's go back to the code.
>
> **[4:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=257)** So first I'll add another call to console write line, so I'll call console dot write line, and I'll type, what is your name?
>
> **[4:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=267)** In double quotes, and I got that semi-colon.
>
> **[4:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=271)** Then I'll add a line of code that creates a string variable, and we'll learn more about variables later, but for now just follow along with me.
>
> **[4:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=279)** So I'll write string, str equals, and then I'm going to call console dot read line, and that will let the user type in a line of text.
>
> **[4:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=289)** So where write line outputs a line of text, read line lets the user type in some text, followed by the carriage return or the enter key.
>
> **[4:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=295)** And then finally we'll print hello one more time, along with the user's name.
>
> **[5:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=300)** So I'm going to go ahead and copy this line, and paste it down here.
>
> **[5:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=305)** And I'm going to write, why hello there, a space,
>
> **[5:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=315)** and then plus str, which is the string variable that we just had the user enter.
>
> **[5:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=321)** All right, so I'm going to go ahead and save, and now let's go back to the terminal, and in the terminal we'll run this again.
>
> **[5:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=328)** And so it's going to rebuild my changes, so now here's the output, we can see hello world, what is your name?
>
> **[5:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=333)** And I'll type in Joe.
>
> **[5:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=335)** And it says, why hello there, Joe.
>
> **[5:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=337)** All right, so we have our first program running, and we have it both inputting and outputting some content, but let's do one more thing, let's go back to the code.
>
> **[5:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=346)** Now you might be saying to yourself, wow, that sure is a lot of boiler plate code just to do something basic.
>
> **[5:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=352)** And you know what, you're absolutely right.
>
> **[5:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=354)** So starting with C# nine, [[Microsoft]] gives you the option to drastically simplify this by getting rid of a lot of the namespace boiler plate and just using what are called top level statements.
>
> **[6:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=365)** So I'm going to get rid of all this extra code, everything above the console write lines and read lines, so I'm going to delete all these curly braces, and then I'm going to indent each of these lines back to the beginning, and then just remove everything except for the statements.
>
> **[6:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=381)** We don't have anything else, except for just the codes, I going to save this and now let's run this again.
>
> **[6:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=387)** So we'll do dot net, run, and after few moments of compilation, okay, then we see again the same results.
>
> **[6:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=391)** So I'll type in Joe again and I get the same output.
>
> **[6:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=394)** So if you're just building a simple application, you can actually get rid of a lot of that boiler plate.
>
> **[6:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/hello-world-c-sharp?u=76281980&t=399)** Now we won't be doing this very much in the [[Representational State Transfer (REST)|rest]] of the course, but I just wanted to demonstrate that it's possible to build simple programs without a whole lot of the extra code that .NET auto-generates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Microsoft Word|Word]] (1), [[JavaScript]] (1), [[Python (Programming Language)|Python]] (1), [[Microsoft]] (1)
> **Tools:** terminal (8), visual studio (1), command line (1)
> **Env Vars:** net (7)
> **Cross-References:** go back to (3), later in (1)
> **Definitions:** is a  (3), is an  (1)
> **UI Navigation:** open the (2), click on (1)
> **CLI Commands:** python (1)
> **Exercise Files:** exercise files (1)

#### [Variables and data types](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=0)** - [Instructor] So now that we've built our first simple program, let's learn a little more about the different types of data that C# works with, along with how to declare and use variables.
>
> **[0:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=10)** So I'm going to open up my code in the Start folder.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=14)** I'm going to go into the Overview, and VarsAndData.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=18)** And I'll open up the Program.cs file.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=21)** So here in the code, you can see that I've already declared several different variables of different types.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=26)** So if you're used to working with other languages like [[JavaScript]] or maybe [[Python (Programming Language)|Python]], than this might look a little different, since in those languages you just create a variable and then assign a value.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=37)** So here in C#, we actually specify the type of variable.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=42)** And this helps to cut down on programming errors.
>
> **[0:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=46)** So each of these types represents a basic data type in C#.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=50)** So we have integer numbers, which are numbers with no decimal point.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=54)** Floating point numbers, which have a decimal point, and the little letter "f" at the end.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=59)** And then there's decimal, which is another kind of floating point number.
>
> **[1:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=63)** And that's also got a decimal point, with a little letter "m" at the end.
>
> **[1:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=67)** Then we have Boolean types, which can be true or false.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=70)** And we have character types, which are a single character inside single quotes.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=75)** And we also have strings.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=77)** So strings are just a collection of characters inside of double quotes, here.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=81)** So we have the string type, the variable name, and then the letters inside the double quotes.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=87)** So C# however, does also let us use the var keyword to declare variables like in JavaScript.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=95)** And the compiler will just figure out what kind of data type it is and assign it behind the scenes.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=101)** So here I've got x and z being declared by the var keyword, and in these two cases, the compiler will figure out that it's an integer and a string.
>
> **[1:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=112)** So we can also create arrays, which are lists of values, by using the square bracket notation.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=118)** So if I wanted to make an array of five integers, I could write something like this.
>
> **[2:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=123)** I'd write int, for integers, and then two square brackets to indicate that it's an array.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=128)** And I'd give it a name.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=129)** In this case, I'll just call it "vals".
>
> **[2:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=132)** And then I would say new int, and then in this case, I would declare how many I want.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=137)** So I would make an array of 5 integers.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=140)** And what's cool about this, is that if I already know what the initial values are going to be, then I can enclose those values in curly braces to assign them right away.
>
> **[2:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=149)** So I can do the same thing with strings, right?
>
> **[2:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=151)** So I can make an array of strings, and I'll call that "strs".
>
> **[2:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=155)** And then I'll just simply assign them inside these curly braces.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=158)** And I'll call it "one", "two", and "three".
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=164)** Can't forget the semi-colon.
>
> **[2:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=166)** So let's try printing out some of the values that we've declared.
>
> **[2:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=170)** So what I'm going to do is call Console.WriteLine(), and then inside this string, I'm going to use what's called a formatting string.
>
> **[3:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=181)** Now, we're going to cover format strings a little later in the course, but for now, you can just think of each of each of these little curly braces in here as an index number and a placeholder for the variable values.
>
> **[3:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=195)** So I'm going to have {0}, {1}, {2}, {3}, {4}, {5},
>
> **[3:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=204)** and I'm going to separate each one with commas, {6}, and then {7}.
>
> **[3:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=209)** And then outside of the quotes, I'm going to have my variables.
>
> **[3:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=213)** And each one of these variables is going to fill in one of these little index variables, inside the braces.
>
> **[3:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=217)** So we'll have i, my integer, c, I've got my Boolean, my str, my floating point number, my decimal number, and then we'll put in x and z as well, those two vars that we used.
>
> **[3:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=232)** So I'm going to go ahead and save this.
>
> **[3:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=234)** And let's run what we have.
>
> **[3:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=237)** And remember, I can use the terminal, but I'm in VSCode so I'm going to go ahead and use the built in terminal.
>
> **[4:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=242)** So I'll right click, choose Open in Integrated Terminal, and I'll type dotnet run.
>
> **[4:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=249)** And after it gets built, we can see here in the output we've got our variables, right?
>
> **[4:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=255)** We've got 10, the character, then we've got the Boolean, the string, and all the different variable values.
>
> **[4:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=262)** So there's a few more important concepts to understand.
>
> **[4:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=266)** So let's close this, and let's go back to the code.
>
> **[4:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=271)** So the first is the null values.
>
> **[4:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=273)** So null means that the variable has no value.
>
> **[4:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=277)** So if I declare just a base object variable, and call it "obj", and assign it to null, then when I try to print this... I'm just going to try to print out obj.
>
> **[4:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=291)** So let's save that, and let's comment out our previous WriteLine.
>
> **[4:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=295)** So let's get our terminal back, and that's CTRL + ` to get the terminal back again.
>
> **[5:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=300)** So I'm going to type dotnet run again.
>
> **[5:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=302)** And when I do that, you can see that there's just a blank line right here.
>
> **[5:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=307)** Nothing got printed out, because there is no value there.
>
> **[5:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=310)** And then let's go talk about one other important concept, which is conversions.
>
> **[5:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=316)** So you can convert between data types.
>
> **[5:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=320)** Some of them implicitly.
>
> **[5:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=321)** So for example, if I have a variable declared using the long type, which is a very large integer, I'll call that "bignum".
>
> **[5:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=331)** I can write bignum is equal to i.
>
> **[5:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=335)** And if we scroll back up, we'll see that i, remember, is an integer value.
>
> **[5:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=340)** So it's declared as an int, not a long, but since they're both integer types, I can implicitly convert between the i, the integer, and the long.
>
> **[5:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=351)** Now other types of data have to be explicitly converted.
>
> **[5:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=355)** So if I have a float variable, let's call float and we'll call it "i_to_f".
>
> **[6:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=365)** I can assign i to this, but in order to do that, I have to put the [[Microsoft Word|word]] "float" inside parentheses in order to convert it explicitly into a floating point number.
>
> **[6:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=377)** And so that it's clear in the code of what I'm doing.
>
> **[6:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=380)** And I'll go ahead and print that out.
>
> **[6:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=383)** And we'll print out inside the curly braces with a zero, i_to_f.
>
> **[6:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=391)** And then similarly, I can cast a float to an integer.
>
> **[6:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=394)** So I'll make an int, and I'll call it "f_to_i".
>
> **[6:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=398)** And I'll do the same trick, I'll cast it to an integer.
>
> **[6:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=402)** So I'm going to take my floating point number, strip off the decimal, and let's go ahead and print that one out as well.
>
> **[6:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=414)** f_to_i.
>
> **[6:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=417)** So let's comment out our previous examples.
>
> **[7:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=421)** So, comment out that one there.
>
> **[7:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=424)** And we'll save, and then down here in the console, we'll run it again.
>
> **[7:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=430)** And we'll get some warnings, because we're now not using some of those variables.
>
> **[7:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=433)** But you can see that in the first case, I get 10.
>
> **[7:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=436)** And there's no decimal point, because it happens to be a round number.
>
> **[7:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=438)** And in the second case, I converted my floating point number, which is we scroll back up, we'll see was 2.0.
>
> **[7:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=446)** And you can see that it got converted to an integer type.
>
> **[7:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=449)** Okay, so that's just a really quick overview of the different data types that we have in C#.
>
> **[7:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/variables-and-data-types?u=76281980&t=456)** And in a separate video, we're going to learn how to perform operations on these types of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Python (Programming Language)|Python]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (4), dotnet (2), python (1)
> **Tools:** terminal (5)
> **Code Identifiers:** i_to_f (2), f_to_i (2)
> **Definitions:** means that (1), is a  (1), is an  (1)
> **Cross-References:** later in (1), go back to (1)
> **Env Vars:** ctrl (1)
> **Versions:** 2.0 (1)

#### [Operators](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=0)** - [Instructor] So far, we've seen how to declare variables and we've learned about some basic data types in C-sharp along with some basic C-sharp statements in tax.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=9)** So now let's take a look at some of the common operators that your program uses to operate on data.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=14)** So here in the start folder, in the overview and operators folder, I'm going to click on the program file, and let's have some more room there.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=23)** So I've already created a few variables here.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=26)** So I've got some integers and a couple strings and we'll use these to try out some operations.
>
> **[0:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=32)** So as you might expect, the basic math operators like addition, subtraction, and so on are available.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=38)** So let's try those out first.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=40)** I'm going to print the results of a math statement.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=44)** So I'll just do X divided by Y times X.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=49)** And in fact, you could even do some operations like addition for example, on strings.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=55)** So I'll do the same thing (keyboard typing) What I'm going to to write here is A plus B and you can see that a is A string and B is a string.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=64)** So when you do this on two strings you're basically just concatenating them together.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=69)** And there are some shorthand ways of doing math operations.
>
> **[1:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=74)** So for example, if all I want to do is either add one or subtract one from an integer, I can use the plus plus to increment or minus minus to decrement a number.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=86)** And so let's go ahead and print those out as well.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=89)** (keyboard typing) X, Okay.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=94)** (keyboard typing) Making that Y.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=100)** All right.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=102)** And I can also use some shorthand for the math operators.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=106)** So for example, instead of writing out this entire expression, A equals A plus B I can shorten that to A plus equals B and let's go ahead and print that out.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=118)** (keyboard typing) So let's run what we have so far.
>
> **[2:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=123)** So we're going to do a couple of math operations and some shorthand and then a little shorthand assignment operator right here.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=132)** So I'll save that and right click on this folder, open integrated terminal.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=137)** And again, you can use the regular terminal if you want to, then I'll type .net run.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=143)** So .net it's going to go ahead and build the code and in the terminal, we can see the result.
>
> **[2:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=148)** So here's the result of the math.
>
> **[2:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=150)** So here's X divided by Y times X and then here's the two strings being added together and then four X plus plus and Y minus minus we've got 11 and four now.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=162)** And for A plus equals B, when we print out A we can see that A has now been increased to B both strings.
>
> **[2:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=170)** Okay, let's take a look at another kind of operator.
>
> **[2:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=172)** We're going to look at logical operators.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=175)** So let's go ahead and hide the terminal.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=179)** And what I'm going to do is comment out these Console.WriteLines.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=182)** So you can do multiple comments by doing control slash on a selection or command slash if you're on the Mac.
>
> **[3:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=190)** Some I'm just going to go ahead and comment these out so that we minimize our output, comment that one as well.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=196)** I'm going to leave X plus plus and Y minus minus though, I'm going to keep those.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=200)** So let's try some logical operators.
>
> **[3:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=202)** Logical operators are used when your program needs to make decisions, which we'll learn about later or check certain conditions.
>
> **[3:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=209)** So these operators produce Boolean results of either true or false.
>
> **[3:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=215)** So for example, I can use the double ampersand operator to perform a logical and operation.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=221)** So I'm going to print out X is greater than Y and then and Y greater than equal to five.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=231)** So this expression will be true if X is greater than Y and Y is greater than or equal to five.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=239)** And then similarly, the, or operator is two vertical bars.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=244)** And so I'm going to go ahead and make a copy of this statement and I'll just change this to two vertical bars.
>
> **[4:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=250)** So now I have X is greater than Y or Y is greater than, or equal to five.
>
> **[4:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=256)** Let's go ahead and run the updated code.
>
> **[4:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=258)** So we'll get our terminal back and we will .net run and we're not using some variables so we get some mornings.
>
> **[4:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=267)** But you can see that the results are false and true.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=270)** The first result is false because while X is greater than Y, Y is not greater than or equal to five, right?
>
> **[4:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=277)** Because when we had this minus minus statement in here so that brings it down to four from its initial value of five.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=283)** So the first one was false.
>
> **[4:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=285)** The second one however, is true because X is greater than Y, or Y is greater than equal to five.
>
> **[4:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=292)** So this condition is true if only one of these other sub conditions is true.
>
> **[4:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=296)** And since this one does satisfy that condition we can see that the output is true.
>
> **[5:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=302)** So there are two more operators to check out and they are both of a form of what's called the no coalescing operator.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=311)** So let's go ahead one more time and let's close that window and we'll comment these guys out, and I will uncomment this string variable.
>
> **[5:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=321)** So the first example is the double question mark operator string that down.
>
> **[5:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=326)** So the double question mark operator uses the left operand if it's not null, or the right one, if it is.
>
> **[5:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=334)** Again, let's assume I have this string variable whose value is set to null.
>
> **[5:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=339)** And remember we learned earlier that null just means it has no value.
>
> **[5:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=343)** So I can write a shorthand operation like this.
>
> **[5:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=347)** I can write Console.WriteLine, and what I'm going to do is write str and then double question marks, and then another string called unknown string.
>
> **[6:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=360)** So what's going to happen is this expression is going to be evaluated.
>
> **[6:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=365)** And the string that gets passed to write line is going to be str if it's not null, or this string, if it is null.
>
> **[6:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=373)** And since str is currently null, we should see this in the output.
>
> **[6:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=378)** So the other operator that we're going to look at is called the double question mark equals operator, which performs an assignment if the value is null.
>
> **[6:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=387)** It doesn't just check for null, it actually performs the assignment.
>
> **[6:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=390)** So for example, instead of writing out this long if statement, which we'll learn about ifs in a little bit.
>
> **[6:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=395)** But instead of writing out this long form of checking to see if a variable is null and then assigning a value if it is, what I can do instead is something like this.
>
> **[6:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=405)** I can write str, double question mark equals new string.
>
> **[6:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=412)** So if str is null, then this value will be assigned.
>
> **[6:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=418)** Otherwise this won't happen and it'll just keep whatever value it currently is.
>
> **[7:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=423)** It'll just be left alone.
>
> **[7:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=424)** So let's go ahead and try these two out.
>
> **[7:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=427)** And I'm actually going to print (keyboard typing) that string before I forget.
>
> **[7:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=433)** Okay, so let's save, and let's get our terminal back.
>
> **[7:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=440)** And let's .net run one more time.
>
> **[7:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=443)** So we can see that the output of the first expression was unknown string because str was null.
>
> **[7:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=449)** And then the second example we have str double question mark equals new string.
>
> **[7:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=454)** So because str was null, this assignment did take place.
>
> **[7:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=459)** Now, if I go back and change this to something else, let's make it hello.
>
> **[7:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=464)** And then let's run this again.
>
> **[7:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=468)** See, now you'll see that we get hello in both cases because in this case, str got selected 'cause it's not null.
>
> **[7:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=474)** And then this assignment didn't happen because again, the value is not null.
>
> **[7:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=478)** Okay, so that's enough about operators to move along to the [[Representational State Transfer (REST)|rest]] of the chorus.
>
> **[8:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/operators?u=76281980&t=482)** But if you feel like maybe you need some more practice then I suggest spending a few minutes here experimenting and trying out different combination of operators to see how they work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** terminal (6)
> **Analogies:** for example (5)
> **Non-Speech:** (keyboard typing) (5)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2)
> **Speakers:** - [instructor] (1)

#### [Writing C# comments](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=0)** - [Narrator] I'm a big believer in commenting code, to make it easier to understand and work on in the future.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=6)** After you have it looked at it in a while or if someone else is going to be reading your code.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=11)** The C sharp language provides a few different ways of commenting your code.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=14)** And we're going to take a moment in this example to see how they work.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=18)** So here in our folder, for the start in the comments folder, let's open up the program file.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=25)** So there's a few different ways you can comment your code.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=28)** Single line comments, are written with two forward slashes at the beginning of the line.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=34)** And I can write, for example, single line comments start with two slashes, and you can have as many of these as you want.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=48)** So single line comments are usually good for simple comments throughout a source file.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=53)** And usually you'll see one, to maybe three or four of these together.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=59)** If you find yourself writing comments that span more than a few lines, then you can opt to use multi line comments.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=66)** So multi line comments start with a forward slash and then an asterisk or a star character, and then continue over multiple lines until another asterisk and a slash.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=78)** So for example, multiple line comments start with a slash and a star, and can continue for several lines, until a closing star, and, oh oops, yeah okay.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=98)** And, slash are encountered.
>
> **[1:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=103)** So we take another asterisk then a slash.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=106)** And you can see that that closes off the comment.
>
> **[1:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=109)** And either one of these work well for writing comments throughout the source code.
>
> **[1:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=113)** So now there is one other comment type that I want to show, and it's a very useful one.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=117)** It's called the XML Documentation Comment.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=120)** So dotnet defines a way of creating comments with embedded XML content in them, that can be used to automatically generate documentation directly from your source code.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=131)** And these comments start with three forward slashes, and then have XML for the content.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=137)** And you can see I've already started a few of these here.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=140)** So for example, I can summarize what this function does by writing three forward slashes, and then an XML tag named summary.
>
> **[2:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=148)** And then I can provide some texts, you know.
>
> **[2:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=150)** This is the main sample application function, and then three more slashes, and then I can close the XML tag.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=161)** I can also provide information about the functions parameters by using the param tag.
>
> **[2:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=167)** And then the name attribute I can set to the name of the parameter, which in this case has args.
>
> **[2:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=172)** And I can have more than one of these, depending on how many arguments I have.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=175)** So I can say that this is an, array of string arguments from the command line, and then close off that param tag.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=189)** And I can indicate, for example, what the return value of the function is.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=193)** In this case, there isn't one, but I can use the returns, tag to say, there's no return value.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=204)** And then close the returns tag.
>
> **[3:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=206)** So there's about 20 or so of these tags that you can use in these comments, and you can even make up your own.
>
> **[3:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=213)** So I'm not going to go through all of them.
>
> **[3:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=215)** You can learn more about the tags that are recommended for developers to use.
>
> **[3:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=219)** And let's go over to the browser for a moment.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=221)** So at this link, you can learn more about these tags and it also references some of the applications that can use these tags to generate documentation.
>
> **[3:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=230)** And you can see that if I scroll down on the side here, there's a whole bunch of tags that explain different parts of the XML docs that you can use.
>
> **[4:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=240)** So here's the returns tag that we used earlier.
>
> **[4:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=242)** Here's the param tag that we used.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=244)** So this is just to give you a sense of kinds of tags you might see in a file might look like.
>
> **[4:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=250)** Let's go ahead and use the build process to actually create the documentation that these tags will generate.
>
> **[4:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=257)** So back here in the code, there's a couple of ways to do this.
>
> **[4:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=261)** And there are dedicated tools that you can use that will process these comments.
>
> **[4:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=265)** But one of the easiest ways to do this is to just simply modify the CS project file, to indicate that you want the documentation to be created.
>
> **[4:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=273)** So let's go back to the folder and open up the comments that see as project file.
>
> **[4:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=278)** And what I'm going to do is add two lines of XML code to the project.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=283)** The first is the line that tells the C Sharp compiler to generate the documentation from the comments.
>
> **[4:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=290)** And that is called Generate Documentation File.
>
> **[4:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=295)** And that's going to be a value of true.
>
> **[4:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=298)** And then I can close that off.
>
> **[5:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=300)** And then the second line specifies the name of the output file to generate.
>
> **[5:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=306)** And you can specify where this goes in your project hierarchy and the folders and stuff.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=311)** Just to be simple I'm going to specify that as the Documentation File.
>
> **[5:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=319)** And that's going to be called, Comments.XNL.
>
> **[5:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=326)** So now I've modified the project file to indicate that we want the documentation and what the output documentation files should be.
>
> **[5:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=333)** So now I'll just go ahead and open up the terminal in the location of our project.
>
> **[5:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=338)** So I'll right, click here and open in integrated terminal.
>
> **[5:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=342)** And then I'll just simply call dotnet build.
>
> **[5:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=346)** And if I did that, and it run, the application would actually run, but I'm going to use the build process to build the finished executable, and as a side effect it will generate the documentation for me.
>
> **[5:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=357)** So when I type enter, the documentation, so first the build happens and then you can see that a new file here, comments .XML has appeared in my folder structure.
>
> **[6:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=369)** So let's go ahead and open that.
>
> **[6:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=373)** And you can see that the extracted comments from my source code, are now part of my Automatically Generated Documentation.
>
> **[6:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=383)** So here is the text that came before the tags.
>
> **[6:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=388)** Here's my summary tag, here's my parameter tag.
>
> **[6:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=391)** And then here's the returns tag.
>
> **[6:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=393)** Now you can use this to generate documentation for a very large project.
>
> **[6:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=398)** So as you're working in your code if you're writing these comments then when you're done and ready to generate the docs, it's just a simple command line operation, that you can do this.
>
> **[6:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/writing-c-sharp-comments?u=76281980&t=407)** So comments are a really great way to make your application easier, to understand as well as documents and C-sharp gives you several useful options that you should really take advantage of in your work.

> [!info]- Semantic Content
>
> **Env Vars:** xml (8), xnl (1)
> **Documentation:** the documentation (7), the docs (1)
> **CLI Commands:** make (3), dotnet (2), find (1)
> **Tools:** command line (2), terminal (2)
> **Analogies:** for example (4)
> **Exercise Files:** source code (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)


### 2. C# Program Flow

[↑ Back to Table of Contents](#table-of-contents)

#### [Conditionals with "if"](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=0)** - [Instructor] Now, that we've learned some of the basics of C-sharp, we're going to learn, in this chapter, about the different ways that C-sharp lets you control the flow of your program.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=9)** And this includes things like making decisions, based on data or handling error conditions or how to perform repetitive operations.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=18)** So, let's start by looking at how to perform basic logical decisions.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=22)** So, here in my Start folder, in Program Flow, I'm going to open up the Conditional If example and I'll click on Program.cs.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=31)** Programs have to make decisions all the time.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=34)** So, does a bank customer have enough money in their account to make a withdrawal, for example, or did an airline customer enter the right reservation code to check-in for their flight.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=44)** In C-sharp, there are two main ways to perform a logical decision.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=48)** The first is the if statement.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=51)** So let's collapse that down a little bit here.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=54)** So, here in my code, I have an integer with a value of 50.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=58)** So, to create an if statement to check this value, what I would do is I would write something like this.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=64)** If theVal, and then to check for equality, I use two equal signs.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=70)** So, if theVal double equals 50 inside the curly braces for the code that we want to run, I'm going to write Console.WriteLine, theVal is 50.
>
> **[1:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=85)** I can also attach an optional else condition that executes if this conditional test evaluates to false.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=94)** So it's optional.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=95)** I don't have to put this, but I can write else.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=100)** And in this case, we'll just simply WriteLine that theVal is something else.
>
> **[1:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=109)** So, let's go ahead and try to run this.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=111)** And so, we'll go ahead and right click and bring this up in our Integrated Terminal.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=120)** And I'll go ahead and dotnet.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=122)** Oops, put that down here, dotnet run.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=128)** And we can see that the statement says theVal is 50.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=132)** And if I change it to something else, like 51 and then run again.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=137)** Now we can see that theVal is something else.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=140)** So you can chain multiple if statements together, using else if, like this.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=145)** So, what I'm going to do is in between this if and the else, I'll put in else, and then if and then I'll say else if and then inside my parentheses, I'll write theVal is greater than or equal to 51 and theVal is less than or equal to 60.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=168)** Then I'm going to Console.WriteLine, theVal is between 51 and 60.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=182)** So, now let's run this again.
>
> **[3:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=187)** And now we can see that theVal is between 51 and 60 because I've set it to 51.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=192)** So, there is no practical limit on the number of else if conditions.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=196)** But once you get past a certain number, like four, maybe five conditions, the code can get a little hard to read, and it might be better to consider using the switch statement, which is something that we'll examine in a separate video.
>
> **[3:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=210)** The if else statement can also be shortened by using something called the ternary operator.
>
> **[3:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=216)** So, let's just close the terminal for a second.
>
> **[3:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=219)** If you consider a simple if else construct like this one where I have if theVal is less than 50 else it prints this, otherwise it prints something else, I can easily condense this down, using what's called the ternary operator, and it looks something like this.
>
> **[3:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=236)** First, I'm going to write my Console.WriteLine statement.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=244)** Then I'm going to write the condition which is the check that we have for theVal.
>
> **[4:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=250)** So I'll write theVal is less than 50.
>
> **[4:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=253)** Then I'll write the code for the true condition which is the question mark followed by theVal is small.
>
> **[4:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=264)** And then the code for the false condition, which comes after a colon, in which case, I'll write theVal is large.
>
> **[4:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=272)** So now the string that's going to be passed into the WriteLine function is going to be gated on this condition right here.
>
> **[4:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=281)** So, if theVal is less than 50 then this expression is going to evaluate to theVal is small.
>
> **[4:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=287)** Otherwise, it's going to use theVal is large.
>
> **[4:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=290)** So this is an easy way to condense down, a larger statement like this into a smaller statement.
>
> **[4:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=297)** So let's go ahead and save and let's bring our terminal back.
>
> **[5:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=302)** It's in the View menu.
>
> **[5:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=305)** And we'll try running this again.
>
> **[5:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=308)** And now you can see that the output says theVal is large because it is greater than 50.
>
> **[5:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=314)** So, this string is not being chosen.
>
> **[5:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=316)** It's the second one.
>
> **[5:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=317)** So, that's a quick overview of the conditional if statements and the ternary operator.
>
> **[5:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=323)** But we're not done.
>
> **[5:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-if?u=76281980&t=323)** There are other ways to make conditional decisions, and we'll learn about that in a separate video.

> [!info]- Semantic Content
>
> **Code Identifiers:** theval (19)
> **CLI Commands:** make (3), dotnet (2)
> **Tools:** terminal (3)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Conditionals with "switch"](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=0)** - [Instructor] We've already seen how the if-else statement can be used to make logical decisions and execute different code paths based on the result.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=7)** The switch statement is another way of making decisions and is usually used when the number of decisions gets to the point where an if-else constructs would be just too cumbersome to write and read.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=19)** So let's open the code for this example.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=22)** So we have our same variable, theVal from our if-else example, and we're going to take a look at the switch statement.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=29)** So the switch statement has a basic form that looks like this.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=33)** I'm going to write switch, and then some parentheses and then the curly braces.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=38)** So inside the parentheses is the expression whose value that you want to test.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=43)** And so I'm going to use this integer variable that we used for the if-else example.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=47)** So I'm going to switch on theVal.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=51)** And then to handle each of the decision branches, you define individual case labels inside the switch statement.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=58)** So for example, I'll have case 50, in which case I would write Console.WriteLine theVal is 50.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=75)** And then I would have a break statement.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=77)** And I can have as many of these case labels as I need.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=80)** So I can add another one.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=83)** So I'll just copy this.
>
> **[1:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=85)** And we need the break statement to finish off each one of these cases.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=91)** So in this case, I'll change that to 51.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=94)** So in case the value is 50, then this code will execute.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=98)** And then the break statement here will cause the entire switch statement to end, so that none of the other cases will execute.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=104)** I can also group multiple case labels together like this.
>
> **[1:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=108)** So if I want it to have the same code handle case 52, whoops, and case 53, and case 54, then I could write Console.WriteLine theVal is between 52 and 54.
>
> **[2:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=134)** And of course I have to have a break after that.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=137)** I can also define a default label, like this.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=143)** And the default label is sort of like the catch-all else statement.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=147)** So this indicates what to do when none of the other case labels match the expression.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=153)** So in this case, I'll just WriteLine theVal is something else.
>
> **[2:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=163)** And then once again, I'll have the break.
>
> **[2:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=165)** So let's go ahead and try this out.
>
> **[2:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=167)** So I'm going to save.
>
> **[2:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=170)** And we'll open this up in the terminal.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=174)** And we'll run this.
>
> **[2:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=178)** And you can see that the output says theVal is 50.
>
> **[3:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=181)** So that's the case 50 label right here that's getting executed.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=186)** So now let's change the value to 53.
>
> **[3:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=190)** All right and then let's run again.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=193)** And now you can see that the multiple case label code is being executed.
>
> **[3:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=199)** And then finally let's make it 60.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=204)** All right, and then let's run it one more time.
>
> **[3:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=208)** And now you can see that it says that the value is something else.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=211)** And remember that was the code in our default label here.
>
> **[3:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=216)** Now, in this example, I'm using an integer value for the switch expression up here.
>
> **[3:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=222)** So this happens to be an integer, but as of C# seven, you can use any non null expression.
>
> **[3:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=230)** So this value can be a string.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=231)** It can be a character, a boolean, an enumeration value.
>
> **[3:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=235)** You're not just limited to integers.
>
> **[3:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=237)** Let me hide this.
>
> **[3:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=238)** So generally speaking, if-else is used for maybe three or four different condition tests, maybe five, just to keep the readability simple.
>
> **[4:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/conditionals-with-switch?u=76281980&t=246)** And if you have more than that, then you might want to consider using the switch statement instead which makes code much more readable when you have multiple decision points in one area of the code.

> [!info]- Semantic Content
>
> **Code Identifiers:** theval (6)
> **CLI Commands:** make (2)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [For loops](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=0)** - Many different kinds of programs often have a need to execute statements multiple times.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=5)** So for example, a program that reads the rows of a spreadsheet needs to read each row until there aren't any more rows.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=13)** And a testing program that asks multiple choice questions needs to be able to run through all of its questions before it can complete.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=21)** So in this video, we're going to take a look at how to build these loops using C-sharp.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=26)** One way to build a loop in C-sharp is to use the for loop construct.
>
> **[0:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=30)** These kinds of loops usually execute a specific number of times.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=36)** So here in our example code in the for loops folder, I'm going to click on the program file.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=44)** So to create a for loop, you use the four keyword.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=48)** And what we're going to do is create a loop.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=50)** It's going to execute a certain number of commands.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=54)** So I'll write four and then inside these parentheses, we're going to specify how the loop should execute.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=62)** So for loops usually have a control variable that keeps track of the number of times that it's run.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=69)** Sometimes called the iteration count, right?
>
> **[1:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=72)** So we're going to just keep track of the number of iterations that the loop has had.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=76)** So we need to initialize that and I'm just going to declare the variable right here.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=80)** I'm going to say int i is equal to zero and we're going to separate that by a semi-colon.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=86)** So then we have what's called the loop condition.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=89)** If this condition is true, then the loop will keep going.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=93)** Now I have a variable here named myVal and it's set to 15.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=98)** So I can check to see if the I variable is less than myVal.
>
> **[1:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=103)** So as long as I is less than myVal, again a semi-colon, this loop is going to continue to execute.
>
> **[1:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=112)** And then we have the increments statement.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=115)** This is where we increment the control variable.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=118)** In this case, I'm going to just add one and I'm going to use the shorthand way of incrementing i each time through the loop.
>
> **[2:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=125)** And then we have our curly braces, which is the code that we're going to execute the number of times.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=131)** And I'm just going to simply print out the loop variable.
>
> **[2:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=135)** So I'm going to console dot write line and I'm going to say I is currently.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=141)** And then we're going to use our little trick to put that in the index there and then comma I so this loop is going to execute from zero up to... Now remember I has to be less than myVal, not less than or equal to, so it's going to execute until I gets to 14.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=158)** And it's going to print out this statement each time through the loop.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=161)** So let's go ahead and try that out.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=164)** Let's bring this up in our terminal and whoops, there we go.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=171)** Dot net run.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=175)** And you can see that in the output here we have the output of the loop.
>
> **[3:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=181)** So the loop executes 15 times with I going from zero all the way up to 14.
>
> **[3:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=190)** So that's the basic of a for loop.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=193)** There's a second kind of for loop.
>
> **[3:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=195)** It's called a for each ind loop.
>
> **[3:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=198)** And this loop is usually used to iterate over sequences of values.
>
> **[3:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=203)** So let's go ahead and close our terminal.
>
> **[3:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=206)** And what I'm going to do is comment out this code here.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=211)** And again, I'll use my control slash to do that.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=214)** You can see I have another variable that is an array of integers.
>
> **[3:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=219)** Now, suppose I needed to process each of these integers in order.
>
> **[3:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=222)** To do that, I can use a for each loop.
>
> **[3:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=226)** So I'll write for each and then inside the parentheses int I in and then the name of the array.
>
> **[3:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=235)** So that's nums and then I'll have my curly braces.
>
> **[4:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=240)** So this for loop construct basically says, hey I'm going to iterate over all the elements of this array.
>
> **[4:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=247)** And each time inside the loop the variable is going to be named I.
>
> **[4:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=251)** So once again, we'll just simply print each number.
>
> **[4:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=254)** So console dot write line.
>
> **[4:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=258)** I is currently... I.
>
> **[4:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=264)** So let's go back to our terminal and now let's try that.
>
> **[4:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=273)** And you can see that now we've iterated over each one of the numbers in the array.
>
> **[4:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=278)** So we have three and then 14, 15, 92 and six.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=283)** So remember strings are also sequences.
>
> **[4:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=287)** So if I wanted to count the number of times that the letter O appears in this string, I can do that pretty easily.
>
> **[4:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=295)** So once again, let's close our terminal and I'll go ahead and comment this out.
>
> **[5:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=303)** So we want to do here is declare a variable.
>
> **[5:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=306)** Our count is equal to zero and then I'm going to write for each char C in str.
>
> **[5:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=315)** So now, instead of looking at integers in that integer array, I'm going to look at each one of the characters in this string.
>
> **[5:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=323)** So for each character C in str I'm going to check and use my if statement to see if C is equal to the letter O and if it is I'm going to increment count, I say count plus plus and then when I'm done with this loop, I'll simply console dot write line counted.
>
> **[5:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=342)** And then we use a little placeholder O characters and that's going to be count.
>
> **[5:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=350)** So let's bring our terminal back up.
>
> **[5:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=354)** Let's run this one more time.
>
> **[6:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=360)** And you can see that we counted four O characters in the string.
>
> **[6:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=365)** So for loops are typically used to execute a set of statements a specific number of times.
>
> **[6:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=370)** You know how many numbers there are in the array.
>
> **[6:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=372)** You know how many numbers, how many characters there are in a string and so on, but there are going to be times when you want a loop to just keep running until a certain condition is met.
>
> **[6:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/for-loops?u=76281980&t=383)** And we'll see how to do that in a separate video.

> [!info]- Semantic Content
>
> **Tools:** terminal (5)
> **Code Identifiers:** myval (4)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - many (1)

#### [While loops](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=0)** - In a previous video, we learned about four loops which are usually used to execute a set of program statements for a set number of times.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=9)** In this video we'll take a look at While loops, which are often used to execute statements for as long as a particular condition exists.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=17)** So let's take a look at a simple example.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=19)** So here in my While loops folder, I'll open up the code.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=26)** So here in my code I have a string variable that I initialize to an empty string and I'm going to create a While loop using the while keyword.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=37)** So I'm going to do that here and I'm going to write while, and then some parentheses and then the curly braces for my code.
>
> **[0:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=45)** So inside the parentheses I need to define the logical expression that's going to be evaluated each time through the loop.
>
> **[0:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=52)** So I'm going to have this loop execute while the input Str variable is not equal to the [[Microsoft Word|word]] exit.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=59)** So I'm going to write while input Str is not equal to exit then I want to do something.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=70)** So for the loop content what I'm going to do is read a string from the user and print it out to the console.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=76)** So I'll write input Str equals and I'll call the Read Line function and then I'll just print it back out You entered and then that's going to be input Str So this loop will run until the user enters the word exit.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=100)** So let's go ahead and give this a try.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=102)** I'm going to save this and then I'll open up my integrated terminal and let's try this dot net run.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=115)** All right.
>
> **[1:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=116)** So let's go ahead and enter some text, I'll put in my name and then I'll put in, hello, I'll put in stop, and then I'll put an exit, and you can see that when I type in the word exit, the loop stops because now input Str is equal to exit, this expression right here evaluates to false, and then the loop stops.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=137)** So there is a close relative of the While loop it's called the do-while loop and the main differences in how it's written.
>
> **[2:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=146)** So let's close the terminal here and now let's create a same loop.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=151)** We are going to do the same thing using the do-while loop.
>
> **[2:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=155)** So do-while loop looks a little bit different.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=158)** So I'm going to uncomment these lines here, and I will comment out our previous example using control slash, so to create the same loop using do-while I'm going to write the word do, and then the braces, and then outside the last curly brace I'm going to write while, and then input Str is not equal to exit.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=186)** Okay.
>
> **[3:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=187)** And then I'll take the same code from before, copy that, put it in here, make sure that's indented, here we go.
>
> **[3:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=203)** So now at first glance, these two loops look pretty similar, and so if we run this second example, let me scroll up a little bit and bring the terminal back up.
>
> **[3:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=213)** So I'll run it again.
>
> **[3:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=216)** So now we we have our do-while loop.
>
> **[3:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=219)** and so once again, I'll write in, you know, Joe and then hello, and then stop and then exit.
>
> **[3:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=224)** So the output looks essentially the same; however, the key difference is that the do-while loop is always guaranteed to run at least one time.
>
> **[3:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=234)** Why? Because the condition check is done at the bottom of the loop, whereas in the while case the condition is checked right at the top.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=244)** So if I initially set the value of input Str to exit and then I ran the first loop again nothing would happen because the input Str not equal to exit, that condition is already evaluating to false.
>
> **[4:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=257)** So the do-while loop would execute at least one time because that input Str not equal to exit condition gets checked until after the first iteration.
>
> **[4:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/while-loops?u=76281980&t=268)** So you can use a while loop if you want the loop to not execute one time if the condition is not met and you can use the do-while loop if you always want the loop to execute at least once before the condition is checked.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4)
> **Tools:** terminal (3)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Using break and continue](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=0)** - All right.
>
> **[0:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=1)** So, so far we've seen how the four and wild loop constructs give programs a way to perform a set of instructions repeatedly.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=8)** And in this example, we're going to learn about two other statements that give you finer grained control over how loops execute.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=15)** And these are the break and continue statements.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=18)** So here in my code, in the break continue folder I'm going to open up the program file.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=25)** So sometimes you want to be able to stop the execution of a loop before the ending condition is reached.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=33)** So for example, suppose I had a list or an array of integer values, and I wanted to find the first instance of a value that is larger than 40.
>
> **[0:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=45)** So I can have a for each loop that iterates over all the values and prints each value.
>
> **[0:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=52)** So I can use the break statement, to terminate the loop early like this.
>
> **[0:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=57)** So I can write if val is greater than or equal to 40
>
> **[1:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=66)** then break.
>
> **[1:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=68)** So I've got my for each loop.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=70)** It's going to get the value in all the values.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=73)** And if the value is greater than or equal to 40 then I break. The break statement is going to stop the loop from executing any further, because after all there's no point in continuing the process when I've found the first value that I'm looking for.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=87)** So let's go ahead and save this and then let's go back here and we'll bring up our integrated terminal.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=94)** All right So we're going to print out the values until 40 is found or the value larger than 40 is found. So I'll run this.
>
> **[1:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=107)** And you can see that when I reached the value of 41, the loop stops.
>
> **[1:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=113)** So that's the break statement.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=115)** The continuous statement is a little bit different.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=118)** It causes the loop to skip over the [[Representational State Transfer (REST)|rest]] of the statements in this iteration and continue to the next iteration of the loop.
>
> **[2:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=127)** So let's close this terminal, go back to the code.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=130)** All right.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=131)** So let's suppose that I wanted to skip over any number in the twenties while I'm iterating over this list.
>
> **[2:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=138)** So here inside my loop, what I want to do is skip.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=141)** If the current number is somewhere in the twenties I want to skip it.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=144)** So what I would do is write something like this.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=145)** I'd write if val is greater than or equal to 20 and the val is less than or equal to 29.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=153)** So in the twenties, I'm going to continue.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=159)** So let's go ahead and comment out the previous example.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=164)** So I'll select these lines, control slash that's command slash on the Mac, just a reminder.
>
> **[2:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=169)** So let's save and let's go ahead and bring our terminal back up and let's run again.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=174)** And now, as we're printing out each value, you can see that when the value is 15, 7, right then 12, then we get to 23.
>
> **[3:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=183)** And since that's greater than, or equal to 20 and less than or equal to 29, the continue statement executes which means all the rest of the code that's in here which at the moment is just this right line.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=196)** But all the rest of the code in the loop just gets skipped.
>
> **[3:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=199)** And then the loop just goes back up to that value.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=201)** And we skipped the 23, it goes straight to the 41, right?
>
> **[3:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=204)** Then we skip the 28 and go right to the 9 and then 17 and 36.
>
> **[3:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-break-and-continue?u=76281980&t=209)** So these two statements give you greater control over how your loops execute their logic and can help simplify the code needed to build some more granular looping [[Algorithms]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Algorithms]] (1)
> **Tools:** terminal (3)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - all (1)

#### [Exceptions](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=0)** - [Illustrator] Just like in life, sometimes things go wrong in our programs and it's necessary to handle those conditions so that the user doesn't get a bad experience.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=9)** In C#, like in some other languages, we use a programming technique called exception handling to catch errors before they make their way to the user.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=18)** So let's take a look at how this works.
>
> **[0:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=20)** Here in my code in the exceptions folder, I'll open up the Program File.
>
> **[0:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=27)** So here in my example code.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=28)** I have a few variables with some values and I'm going to do a simple math operation.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=33)** I'm going to assign the result to the value of X divided by Y.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=40)** So that works fine, just as long as I don't try to do something foolish, like divide by zero.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=47)** So let's make that change and see what happens.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=49)** So I make y zero and save this and let's go ahead and bring up our terminal, and what I'm going to do is run this now.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=64)** So when I run the code, I think that's going to try to execute the program and Oh, no, that's not good.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=70)** We get an error and you can see right here, there's a unhandled exception attempted to divide by zero.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=78)** Well, we don't want to subject the user to that.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=80)** So what we can do is we can handle this situation much better by using an exception handler.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=86)** So let's close the terminal.
>
> **[1:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=88)** What I'm going to do is wrap my code in what's called a try block, because I'm going to try to run this code.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=95)** So I'll write, try and then I'll move this code inside the try block.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=104)** And then what I'm going to do is, I'm going to define a catch block and that's going to catch any problems or exceptions that happen inside the try.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=114)** So, if something goes wrong with any of the statements in the try block, then the execution is going to transfer down to this catch block here where I can handle the error before the user sees it.
>
> **[2:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=126)** So in this case, I'm just going to print out a nice error message.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=130)** So I'm going to print out, whoops.
>
> **[2:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=133)** And, here we go.
>
> **[2:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=136)** So let's go ahead and bring our terminal back up.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=140)** And now try running this again.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=143)** And now you can see that instead of this ugly looking exception we get this little message here that just says, whoops.
>
> **[2:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=149)** So now we're printing out a nice error message.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=153)** And in real life, you wouldn't do this.
>
> **[2:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=155)** You would handle the error much more gracefully than this, but this is just a demonstration.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=159)** So this is a generic catch handler, which is going to catch any exception that happens in the try block.
>
> **[2:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=166)** But I can actually specify the type of exception that I want to catch cause there might be more than one.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=171)** In fact, there's an exception just for this case.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=174)** So I'm going to catch the divide by zero exception and I'm going to assign that to a variable named e, which I can then use inside my handler, so I can write out whoops, but I can also console right line e.message.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=192)** So exceptions are objects.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=193)** They have properties on those objects, just like any other object.
>
> **[3:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=198)** And so I want to print out the message and I can also add other catch handlers for other exception types.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=204)** So let's suppose I wanted to limit the value of X to 1000, and trigger an exception for larger values.
>
> **[3:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=213)** So what I can do is I can write if x is greater than 1000, then inside the if statement, what I'm going to do is trigger the exception by using the throw statement, and I'm going to throw a new argument out of range exception, and that's going to take two parameters.
>
> **[3:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=238)** The name of the variable or the parameter that's out of range, and then a message.
>
> **[4:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=243)** I'm going to say, X has to be 1000 or less.
>
> **[4:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=248)** And then I'll add my exception handler for that.
>
> **[4:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=251)** So I'll write catch, and this is going to be the argument out of range exception.
>
> **[4:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=259)** And again, I'll call that e and then I'll console that right line.
>
> **[4:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=266)** Sorry 1000 is the limit.
>
> **[4:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=275)** And then we'll also just go ahead and print out the messages like we do here.
>
> **[4:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=278)** So I'll copy and paste that.
>
> **[4:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=281)** So before we run this, there's one more part of the exception structure we can add, called a finally block.
>
> **[4:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=287)** So I'll write finally and that's not going to take any arguments.
>
> **[4:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=293)** So, this code is always going to run and I'll just simply print out a message to prove that.
>
> **[5:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=300)** This code always runs So even if there's no exception if the try block works great, doesn't really matter.
>
> **[5:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=307)** If any of these catches happen, this code in here is always going to run and it's a good place to clean up any resources like open files or anything else that needs to be disposed of.
>
> **[5:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=318)** Okay. So let's go ahead and change X to a number that's larger than a thousand.
>
> **[5:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=324)** So make 1,002 and let's go high back down to our terminal, run this again.
>
> **[5:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=331)** And now you can see that my exception handler for the argument out of range, exception is triggering.
>
> **[5:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=338)** It says, sorry, 1000 to the limit.
>
> **[5:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=340)** And then it says X has to be 1000 or less.
>
> **[5:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=343)** And then it tells me parameter X was the problem.
>
> **[5:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=345)** And you can see here this code always runs that's from the finally block.
>
> **[5:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/exceptions?u=76281980&t=349)** So exceptions are used throughout C# and .Net and they provide a good mechanism for grouping error handling code together which keeps the main program logic, easier to read.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Tools:** terminal (4)
> **Analogies:** just like (2)
> **Definitions:** is a  (1)
> **Speakers:** - [illustrator] (1)


### 3. C# Strings

[↑ Back to Table of Contents](#table-of-contents)

#### [String operations](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=0)** - [Instructor] At some point, almost all non-trivial applications have to work with string data.
>
> **[0:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=5)** And we're going to spend this chapter examining how C# makes it easy to process string content.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=11)** So we're going to start off by trying some basic string operations, and as we go through the chapter, we'll see how to perform more advanced operations.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=19)** So here in the Operations folder, in our Strings folder, I'll open the program code and you can see I have some string variables defined already.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=28)** And just like everything else in C#, strings are objects and they have properties that we can examine to find out some of their information.
>
> **[0:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=37)** So, for example, if I wanted to get the length of a string, I can use the length property.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=41)** So I'll go ahead and print out str1.length.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=49)** And that's the property on the string.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=51)** So, in other languages like [[Python (Programming Language)|Python]], for example, you might use the len function to get the length of a string, but here, it's a property.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=58)** We can also access individual characters in the string by using square brackets, as if it were an array.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=64)** So, for example, if I wanted to get the 14th character of str1, I would write str1, and then inside the square brackets, the number 14.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=75)** And strings are sequences of characters, so we can iterate over them using loops, just like we can with other sequences like arrays.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=84)** So, for example, I can use a foreach loop, which we learned about earlier in the course, and I'm going to just declare a character variable.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=91)** So for each char in str1, I'm going to Console.Write, not WriteLine.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=99)** I'm going to write the character.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=101)** And then if the character is equal to the letter b, then I'm going to write a empty line and then break out of the loop.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=115)** But again, we learned all about that in the loops chapter.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=117)** Let's save and let's try out what we have so far.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=120)** So I'm going to bring up my integrated terminal.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=128)** And I'll just go ahead and run this.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=130)** So I'll dotnet run.
>
> **[2:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=135)** All right, we've got some warnings about unused variables, but they'll be used soon.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=139)** And we can see in the output that the length of the string is 44 characters and the 14th character in str1 is the letter n.
>
> **[2:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=148)** So it's going to be this guy right here.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=151)** And then you can see that we iterate over the str1 characters until we weeks the letter b, and then we stop.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=159)** All right, so, so far so good.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=161)** Let's try a few more operations.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=164)** I'll close the terminal.
>
> **[2:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=166)** So the Concat function can be used to add strings together to make one string.
>
> **[2:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=172)** So I'll use my outstr variable, and I've declared that up here, that string is out outstr, and I'm going to set that equal to the results of the String class's Concat function.
>
> **[3:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=185)** And I'm going to pass the strs variable, which is this array of strings right here.
>
> **[3:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=191)** I'm going to concatenate that all into one string and then I'll just go ahead and print the result.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=201)** We can also use the Join function.
>
> **[3:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=203)** So the Join function creates a single string from multiple strings and you can specify a character or string to separate each one of the joined strings.
>
> **[3:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=213)** So, for example, I can set outstr equal to, and I'll call String.Join, and I'll separate each one of the strings with a period, and I'll call that on strs again, and then I'll just go ahead and copy this and print outstr.
>
> **[3:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=230)** And then let's do one more example.
>
> **[3:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=232)** So I'll copy these and paste.
>
> **[3:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=235)** And instead of using one character, I'll use a string with three dashes in it.
>
> **[4:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=241)** Okay, so let's go and save.
>
> **[4:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=242)** Now let's run our updated code.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=244)** So let's bring our terminal back.
>
> **[4:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=248)** All right. Let's run this.
>
> **[4:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=252)** So now we can see that this is the result of the Concat function with the strs being printed out.
>
> **[4:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=258)** Then we have the next example where we have all those strs, but was separated by periods, and then finally separated by dashes.
>
> **[4:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=265)** So, comparing strings is also pretty easy.
>
> **[4:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=268)** So let's go ahead and update the code to do that.
>
> **[4:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=271)** The first function is called the Compare function and it's called directly on the String class.
>
> **[4:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=276)** It's not an object method.
>
> **[4:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=278)** You call it directly on the String class.
>
> **[4:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=280)** And it performs what's called an ordinal comparison of two strings.
>
> **[4:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=284)** So I'm going to declare a result, and this variable is going to be an integer, and I'm going to call a String.Compare.
>
> **[4:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=292)** So the compare function will return an integer value.
>
> **[4:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=295)** If that value is less than zero, that means that the first string comes before the second one if you were sorting them.
>
> **[5:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=301)** Zero means that they would be at the same position, and then greater than zero means that the first string comes after the second one in a sorting order.
>
> **[5:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=309)** So if I were to compare str2 with This is a string, and if we scroll up, we'll see that str2 is actually that string.
>
> **[5:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=319)** It's This is a string.
>
> **[5:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=320)** So this should return zero because they're pretty, you know, they're the same thing.
>
> **[5:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=325)** Now, note that this function is used when you're sorting strings, it's not used to check for equality.
>
> **[5:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=329)** If you just want a straight boolean and result, like a true/false result of whether or not one string equals another one, you can use the Equals function for that.
>
> **[5:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=337)** So I'll define an isEqual variable and call str2.Equals, and I'll compare that to str3.
>
> **[5:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=348)** And then we'll go ahead and Console.WriteLine, and we'll just simply write out isEqual.
>
> **[6:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=360)** All right.
>
> **[6:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=361)** And you can see up here, let me scroll up, this is str2 right here.
>
> **[6:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=365)** str3 is the same letters, but some of them are uppercase.
>
> **[6:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=369)** So that should not be true.
>
> **[6:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=371)** That's going to return false because they're not the same.
>
> **[6:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=373)** Okay, let's go ahead now and run what we have.
>
> **[6:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=376)** We've got Compare and Equals.
>
> **[6:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=377)** So let's save, let's bring our terminal back up and run again.
>
> **[6:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=384)** And now we can see sure enough that the... Oh, whoops. I didn't print out the result.
>
> **[6:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=388)** Let me do that.
>
> **[6:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=394)** All right. Let's run that again.
>
> **[6:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=398)** All right, so the result is zero because the strings are pretty much the same.
>
> **[6:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=401)** And then the Equals function returns false because str3 has some uppercase characters in it.
>
> **[6:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=408)** So let's finish up by trying some string searching.
>
> **[6:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=411)** Let's close this again.
>
> **[6:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=413)** So let's take a look at the IndexOf function.
>
> **[6:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=416)** So I'm going to use Console.WriteLine.
>
> **[6:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=419)** And what I'm going to do is write out str1.
>
> **[7:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=423)** I'm going to call the IndexOf function and I'm going to look for the index of the letter e.
>
> **[7:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=427)** So this will tell me the first index of the letter e in that string or -1 if it's not there.
>
> **[7:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=433)** And I can do the same thing with regular strings, not just characters.
>
> **[7:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=437)** So, for example, if I were to look for the index of, say, fox in str1, and again, if we scroll up, you'll see str1 is The quick brown fox.
>
> **[7:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=445)** We've been using that string a little bit now.
>
> **[7:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=449)** And then, similarly, there's the LastIndexOf function.
>
> **[7:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=453)** So let's go ahead and copy these two lines, and paste them in.
>
> **[7:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=457)** And now I'm going to call LastIndexOf.
>
> **[7:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=462)** And I'll LastIndexOf e and then last index of the.
>
> **[7:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=468)** And one more thing we'll do is a search and replace.
>
> **[7:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=471)** So we can use the Replace function to replace content in the string.
>
> **[7:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=475)** So I'll set outstr equal to str1 and I'll call the Replace function.
>
> **[8:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=482)** And I'm going to replace the [[Microsoft Word|word]] fox with the word cat.
>
> **[8:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=489)** And then once again we'll go ahead and Console.WriteLine outstr.
>
> **[8:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=496)** And then just to prove that it's gone, we're going to write out outstr's IndexOf and we're going to look for fox.
>
> **[8:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=507)** That should be -1 after it's gone.
>
> **[8:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=509)** All right, so let's run these updated examples Let's bring up our terminal.
>
> **[8:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=519)** Okay, so let's go ahead and scroll here.
>
> **[8:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=522)** So we've got IndexOf e, so that's going to be index two, if we scroll up and see the string.
>
> **[8:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=529)** Kay?
>
> **[8:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=530)** So, yep, sure enough, there's e, index two.
>
> **[8:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=533)** And then we've got, let's see, 16 for, let's scroll back down, so index of fox is at 16.
>
> **[9:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=541)** The last index of e is at 33.
>
> **[9:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=544)** The last index of the word the is at 31.
>
> **[9:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=548)** So then we do the replace, and sure enough, fox is now replaced by cat, and sure enough,
>
> **[9:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=553)** - 1 is the result when we try to look for fox.
>
> **[9:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=556)** So the C# String class is very rich in functionality and we've only just scratched the surface here.
>
> **[9:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=562)** If you want to check out more of the functions available, you can look at the String class documentation which is available at this link.
>
> **[9:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=571)** And you might want to keep this open as we go through the [[Representational State Transfer (REST)|rest]] of the chapter to refer back to in case you want to see how the methods work or take a look at any of their variants.
>
> **[9:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-operations?u=76281980&t=580)** So keep this open as we go through the rest of the chapter, but you can read through these docs and see for yourself how many different kinds of properties and methods are available on the String class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[Python (Programming Language)|Python]] (1)
> **Analogies:** for example (6), just like (2)
> **CLI Commands:** cat (2), find (1), python (1), dotnet (1), make (1)
> **Definitions:** is a  (3), means that (2), is called (1)
> **Tools:** terminal (5)
> **UI Navigation:** scroll up (4), open the (1)
> **Code Identifiers:** isequal (2)
> **Speakers:** - [instructor] (1), - 1 (1)

#### [String formatting](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=0)** - [Instructor] All right, let's take a deeper look at Formatting Strings.
>
> **[0:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=3)** So here in the formatting folder I'm going to open up the program CS file.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=8)** So far during this course, I've been using the curly brace with index notation to print strings with the values of variables inserted into them.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=19)** And that's similar to what I have here in my code when I'm printing the strl one variable on this line.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=25)** Now we can use the same mechanism to get more control over how data is formatted into the string.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=31)** And the general format for doing this is by specifying the index, which is what we've been doing.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=36)** And you can see that this is the general format right here.
>
> **[0:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=39)** So we specify the index along with an optional alignment value which we'll talk about in a little bit and then a colon and then a format specifier.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=48)** So we'll take a closer look at the alignment in a moment but for now we'll just focus on the formatting and there are several formatting options available.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=56)** So for example, I can use N for just a general number or G for general data format, there is F for fixed-point, exponential, decimal, percent, hexadecimal, currency and a few more that are a little bit advanced, I'm not going to use here.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=71)** So let's try some of these out.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=73)** I'm going to try printing out Val1 which is an integer using a few of these options.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=78)** So what I'm going to do is use my console.wright line like I've been using and then inside that string I'm going to create a formatting string.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=87)** So I'm going to have zero, but this is what I've been doing and then a colon and then I'll specify D four decimal number and then I'll put a comma and space and then I'll just copy and paste a few of these.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=101)** So we'll do D and then we'll do N and then we'll do F for fixed point and then we'll do G for general and also remove that extra comma and then I'll call this with val1.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=115)** And then let's do the same thing with Val2, which you can see here is a decimal number.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=120)** So I'll go ahead and copy this line and paste it.
>
> **[2:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=127)** I'll call it with Val2.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=130)** I'll make the options a little bit different.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=132)** We'll change D to an E for exponent, leave the N as it is, we'll leave everything else the same, right?
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=137)** Just change the first one to an E.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=139)** All right, so let's go ahead and run this.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=141)** So I'll save and then let's bring this up in the terminal
>
> **[2:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=153)** and you can see that when I run this, you can see the output how the two different numbers were formatted by the specifiers.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=158)** So for the decimal, we have just the regular number then we have the number format with a comma for thousands, then the fixed point with no comma and then general, which for integers is the same as D.
>
> **[2:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=170)** And then for Val2, here's the exponential notation, here's again the number with the comma and here's fixed point and then general and in this case, you can see that the decimal's included.
>
> **[3:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=182)** So in addition to specifying the format, you can add what's called a precision specifier to the format string.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=189)** So let's go ahead and do this for Val1.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=192)** So what I'm going to do is copy this line and paste it down here.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=196)** So right after the letter, I'm going to add an integer numbers.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=200)** So for example, for D I'm going to use six to indicate that I want the number to take up six spaces, for N I'm going to specify two, for F I'll use one and for G I'll use three.
>
> **[3:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=212)** So let's go ahead and run this again.
>
> **[3:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=217)** And now in the output you can see that for D6, it uses six spaces including some leading zeros, for N2, it specifies two decimal places, which is what we had before.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=231)** For F1 that shortens it to just one decimal place and for G3, it uses just three digits and then puts the [[Representational State Transfer (REST)|rest]] in the exponential format.
>
> **[4:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=242)** Let's go back and take a look now at how the alignment specifier works.
>
> **[4:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=247)** So I've got some other variables in my code here and these variables represent some sample sales data over four quarter periods, along with the percentage of sales that were international instead of domestic.
>
> **[4:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=263)** We're going to use string formatting to format this data in a nice, easy to read layout.
>
> **[4:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=268)** So let's start by formatting the quarter headings.
>
> **[4:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=272)** So what I'll do, is all console.wright line and I'll build my specifier stream and I'll have my zero like I had before.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=283)** And instead of putting in a colon what I'm going to do is put a comma and then the number 12.
>
> **[4:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=289)** So I want this column to take 12 spaces and I'm going to do that for each one of these.
>
> **[4:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=294)** So I'll copy that, actually I want the space too, so I'm going to to copy that with the space and then paste, paste, paste and get rid of the last comma and set that to be one and then two and then index three and then I'm going to insert the data from the quarters array.
>
> **[5:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=313)** So I'll just specify quarters zero and I'll just fill this in or just one, two and three.
>
> **[5:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=327)** All right, so that's one, two and three, oops.
>
> **[5:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=333)** Okay, let's run the updated code And, Oh, whoops, you know, I put commas in there, didn't want to put commas, let me take the comments out.
>
> **[5:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=347)** Just spaces.
>
> **[5:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=348)** All right, let's run it again.
>
> **[5:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=351)** And now you can see, Oh, I took it out of the wrong string, nevermind.
>
> **[5:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=357)** I'll take it out of here, there we go, spaces, spaces, spaces.
>
> **[6:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=361)** All right, let's run it again.
>
> **[6:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=364)** All right, so now you can see that each one of these quarters numbers is formatted in a column that is 12 characters wide.
>
> **[6:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=371)** So now let's do the same thing for the sales data.
>
> **[6:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=374)** So what I'm going to do is just copy this line and of course, instead of quarters, I'm going to use sales.
>
> **[6:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=384)** So I'll replace each of these with sales.
>
> **[6:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=389)** What I'm also going to do is format each of these as currency.
>
> **[6:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=393)** So after the 12, I'll put in the colon and then use the letter C for currency and then I'll specify a numerical precision.
>
> **[6:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=399)** So I'll have the first column be zero and the second column also be C0 and then C0 for the third one and then C0 for the fourth one.
>
> **[6:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=414)** And then let's go ahead and add the international percentages.
>
> **[6:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=419)** So we'll copy and paste one more time and this'll be international mix percent.
>
> **[7:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=427)** So I'll copy and paste that.
>
> **[7:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=431)** Now I want these to show up as percentages.
>
> **[7:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=433)** So instead of C, what I want is P for percentage.
>
> **[7:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=437)** And I'll have the first two be P with precision zero and then just to show some variations, we'll have this one be P1, and then we'll have the last one be P2.
>
> **[7:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=450)** Okay, let's go ahead and run the code one more time.
>
> **[7:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=454)** And now you can see our nicely formatted data table here.
>
> **[7:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=457)** So we have the quarter number.
>
> **[7:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=458)** You can see that the data is being formatted as currency and then the last row is being formatted as percentages.
>
> **[7:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=466)** And the first two numbers have zero decimal points and then this has one and then this has two.
>
> **[7:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=471)** So at this point I would suggest maybe taking a few moments here to try some of your own experiments with string formatting to get a feel for how it works.
>
> **[8:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=480)** And of course you can read the standard numeric format strings documentation here at this link in the C-sharp docs.
>
> **[8:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=487)** So if you scroll down, you'll see there's a whole bunch of details on each one of these format specifiers.
>
> **[8:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-formatting?u=76281980&t=491)** So go ahead and take some time, try some of your own formatting ideas and then refer it back to these docs as you need to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (2), similar to (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [String interpolation](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=0)** - [Instructor] Now that we've seen how to use string formatting, let's take a look at a very closely related feature called string interpolation.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=7)** This feature lets you place variables and expressions directly into a string, instead of having to use the index placeholders like we've seen so far in the course.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=17)** So let's take a look at an example.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=18)** So here, in the Interpolation folder, let's open the program code.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=23)** So here in these variables, I have some information about a car in different datatypes.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=28)** So I've got some strings, an integer, a floating point, and a decimal value.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=34)** So using regular string formatting, I would have a string like this one.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=38)** So I'd have my indexes and I've got the index placeholders.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=42)** I've got my variables at the end of the string and so on.
>
> **[0:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=46)** So using string interpolation, I can skip this index notation and actually embed these variables into the string, itself.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=56)** So let's see how to do that.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=58)** What I'm going to do is copy this line and paste it here.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=64)** So interpolated strings are defined using a dollar sign character and that is outside of the opening quote.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=71)** Okay, yes, outside.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=73)** Don't put it inside the quote, it has to go outside.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=75)** That's what tells the interpreter that this is an interpolated string.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=78)** Then inside the string, you use the same curly braces but you just use the name of the variable instead of an index.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=86)** So let's rewrite this string using string interpolation.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=89)** So I'll replace index zero with just the [[Microsoft Word|word]] year.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=93)** And you can see the syntax coloring is different because the editor realizes oh, this is an interpolated string and it's highlighting my variables correctly.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=102)** So I'll replace this with year, and then make, and then model, and then I'll just put the word miles in here.
>
> **[1:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=112)** And then for the price, what I'm going to do is put in price.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=118)** So now I can take off these variables at the end 'cause I don't need them anymore and I can just end the string normally.
>
> **[2:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=127)** So this is much easier to read than this.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=130)** I can just see the variables directly in the string.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=132)** I don't have to make this mental calculation like okay, this index here corresponds to this variable.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=139)** 'Cause if you have a lot of variables, this gets really hard to read really quickly; string interpolation just makes it a lot easier.
>
> **[2:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=145)** So let's go ahead and save this and let's run this.
>
> **[2:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=149)** So we can compare them side-by-side.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=151)** So I'll bring this up in my terminal.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=156)** All right and let's run this code.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=164)** And you can see that the output is the same in both cases.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=168)** Now, what's cool about this though, is that we can still use the string formatting information that we learned about in the previous video.
>
> **[2:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=176)** So for example, I can format this price as currency.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=180)** So I'll just take off the dollar sign 'cause I'm not going to need it, and I can put price and then colon C and then 2 for two decimal places.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=189)** So let's go ahead and run this.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=194)** And you can see that when I do that, now the interpolated string actually gets formatted as currency with an actual number.
>
> **[3:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=202)** It's two decimal places instead of one and there's a comma in there for thousands.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=207)** You could also place expressions inside the braces.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=211)** So let's go back to the code.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=214)** So let's suppose that I wanted to calculate the value of the miles parameter as kilometers.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=221)** So what I would do then, is something like this.
>
> **[3:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=223)** Let's copy this line and paste it again, and then inside the braces for miles I would simply have miles times 1.6 because that's the formula for miles to kilometers.
>
> **[3:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=236)** And again, I can format this as a floating point number.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=239)** So I'll do F2 and I'll change that to kilometers to make it more clear.
>
> **[4:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=245)** And one more thing, you might be wondering how do I put an actual literal curly brace into the string if that's what I want to print out instead of having these indexes.
>
> **[4:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=255)** And the answer is you need to use a double-brace to escape the first one, so it's not interpreted as an expression.
>
> **[4:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=263)** So let's imagine that I wanted to put curly braces around the miles value, for example.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=270)** What I would do is I would leave these two in place and then I would put a double-brace and then a closing double-brace.
>
> **[4:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=278)** So the interpreter's going to see this and it's going to interpret this double-brace as an actual brace that goes into the sting.
>
> **[4:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=285)** And then it'll see this single brace and realize that that's an expression.
>
> **[4:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=290)** And then these closing double-brace will be a literal closing brace that goes into the string.
>
> **[4:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=296)** So let's go ahead and save this and let's run one more time.
>
> **[5:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=303)** And so now you can see the results.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=304)** So here's my miles calculated as kilometers with two decimal points as a fixed point number.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=311)** And here are the literal braces that we put into the string.
>
> **[5:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=315)** So this form of string formatting is a lot easier to read than the index version, which is why I prefer to use it.
>
> **[5:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-interpolation?u=76281980&t=321)** So I'll be using this in the [[Representational State Transfer (REST)|rest]] of the course when we need to print out variables and strings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** previous video (1), go back to (1)
> **Versions:** 1.6 (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)

#### [Using StringBuilder](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=0)** - [Instructor] Building strings out of other strings is another very common operation in a variety of programming scenarios and the C# StringBuilder class aims to make this both easier to accomplish and more efficient.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=14)** In .NET, the string object is immutable.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=17)** When you call functions that make changes to strings, what you're actually doing is you're creating a copy of the string behind the scenes, which requires allocating the memory for the new string each time.
>
> **[0:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=28)** And doing this over and over again can be a drag on performance and memory usage, which you can help avoid by using the StringBuilder.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=35)** So let's go ahead and open up the sample code in the Builder folder.
>
> **[0:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=39)** And the StringBuilder is located in the System.Text namespace, so that's why I'm including this here.
>
> **[0:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=46)** So what we're going to do is start off by creating a StringBuilder and the way that we do that is I'll just declare the variable of type StringBuilder.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=56)** And I'll call it sb.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=59)** And I'll make a new StringBuilder.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=64)** Now, it's not required, but if I want to, I can specify both an initial string content,
>
> **[1:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=75)** as well as a maximum string capacity.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=78)** So I'll make that 200.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=81)** So once we've created the StringBuilder, we can start putting content into it and we can inspect its properties, like the current capacity and the current length of the string content.
>
> **[1:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=92)** So let's go ahead and try that out.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=95)** So I'll write out using my string interpolation feature
>
> **[1:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=104)** that we learned about earlier in the chapter.
>
> **[1:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=106)** So I'll print out the capacity.
>
> **[1:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=108)** And that's going to be sb.Capacity.
>
> **[1:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=113)** And Length is going to be sb.Length.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=121)** So let's go ahead and try what we have so far.
>
> **[2:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=125)** So I'll just bring up the terminal.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=131)** And let's go ahead and run.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=137)** And we can see that the capacity is 200 and the length is 15 because of this initial string that I put in there.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=143)** So far, so good.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=144)** Let's go ahead and close the terminal.
>
> **[2:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=146)** There are multiple ways to add and manipulate the string content in a StringBuilder.
>
> **[2:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=152)** The easiest way is to just use the append function to add string content to the builder.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=158)** So for example, I'll write sb.Append and I'll just add the text I want, so I'll just put in the quick brown fox
>
> **[2:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=174)** and I'll put in another line after that.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=180)** Jumps over the lazy dog.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=186)** And actually, I'm just going to make that jumped.
>
> **[3:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=188)** There we go.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=192)** And we can also add line endings using AppendLine, so I'll call AppendLine.
>
> **[3:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=199)** That'll give me a carriage return.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=200)** There's also an append format function, which we can use to append a formatting string in just one step instead of just creating a formatted string and then appending it.
>
> **[3:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=210)** So I'll call sb.AppendFormat.
>
> **[3:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=216)** And I'll give it a string and I'll say He did this and I'll use my index syntax for this one, the number of times.
>
> **[3:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=225)** And you can see that if I scroll up, I've got this integer called jumpCount, so I'll put that in there.
>
> **[3:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=232)** So that should be the number 10 when we see the output.
>
> **[3:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=235)** And then I'll just put another blank line on there.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=239)** The AppendJoin function will also condense the string class's join operation with an append so you can iterate over a sequence of values.
>
> **[4:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=249)** So let's go ahead and try that one out.
>
> **[4:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=252)** I'm going to call sb.Append and say oops,
>
> **[4:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=262)** he also jumped over, and then I'm going to call sb.AppendJoin and I'm going to join using a comma and I'm going to pass in my array of other animals.
>
> **[4:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=282)** So if we look up here, you can see that I've got these other animals up here, goats, cats and pigs.
>
> **[4:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=288)** So I'll pass in my animals array.
>
> **[4:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=293)** So that's going to join that into the StringBuilder.
>
> **[4:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=297)** We can also modify the content of the StringBuilder using the replace function, just like we would a regular string.
>
> **[5:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=303)** So for example, I can call sb.Replace and I can replace fox with cat.
>
> **[5:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=312)** And we can insert string content at any index.
>
> **[5:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=315)** So I'll call sb.Insert and I'll insert right at the beginning at index zero.
>
> **[5:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=322)** And I'll pass in This is the.
>
> **[5:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=326)** And then one more time, let's print out the capacity and string length after we've done all this work.
>
> **[5:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=332)** So I'll copy this line here and paste it down here.
>
> **[5:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=338)** And then finally, let's convert the StringBuilder's content to a final string.
>
> **[5:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=343)** So I'll write Console.WriteLine and I'll call sb.ToString.
>
> **[5:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=352)** And that will take all the content that's in the StringBuilder and serialize it into a final string.
>
> **[5:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=358)** All right, so that's a lot of code that we've added there.
>
> **[6:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=360)** So let's run the updated example.
>
> **[6:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=363)** So we'll save and let's bring up our terminal.
>
> **[6:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=368)** All right, let's run this.
>
> **[6:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=371)** So we can see in the output, so here's the initial capacity and length.
>
> **[6:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=375)** And you can see how the capacity and length have grown as we've done the work.
>
> **[6:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=379)** You can also see that here's the initial string content that I created.
>
> **[6:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=383)** And then I've got my other, the quick brown fox jumped over the lazy dog.
>
> **[6:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=387)** That's my append statement.
>
> **[6:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=389)** He did this 10 times.
>
> **[6:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=391)** That's the result of my AppendFormat string right here.
>
> **[6:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=396)** Then we did he also jumped over goats, cats, pigs.
>
> **[6:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=399)** That's the AppendJoin.
>
> **[6:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=401)** We then did the replace with fox and we replaced it with cat.
>
> **[6:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=405)** And then we inserted this is the at the beginning of the string and yeah, so then we did the capacity and we converted the final output to a string.
>
> **[6:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=416)** So the StringBuilder is a really efficient way of working with strings.
>
> **[7:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=420)** So if your code needs to do a lot of string concatenation and manipulation, it's really worth taking a look at the builder class and of course, there's a C# documentation link for this.
>
> **[7:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/using-stringbuilder?u=76281980&t=431)** So if you go to this link in the C# docs, you can read all about the StringBuilder class and play around with it, try some other features that we didn't get to explore here and get to know how StringBuilder works.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), cat (2)
> **Tools:** terminal (3)
> **Analogies:** for example (2), just like (1)
> **UI Navigation:** scroll up (1), go to (1)
> **Code Identifiers:** jumpcount (1)
> **Env Vars:** net (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** sample code (1)

#### [String parsing](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=0)** - [Instructor] In this example, we're going to see how to parse the contents of a string into native C# data types and again, this is a pretty common operation that programs have to perform.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=11)** Your program might be given something like numerical data in string format and you need to convert it into an actual number.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=18)** So let's take a look in the Parsing folder.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=21)** Let's open the code up.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=26)** So here in my code, I have a few string variables defined that represent different number types.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=31)** So I've got an integer, a floating point number, a number with a comma in it for thousands, and then the same thing but with a decimal value.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=41)** So the different basic data types in C# provide a parse function that you can use to parse a string into that particular type.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=49)** And you can also specify that certain formats are allowed as well.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=53)** So let's start off with a simple integer example.
>
> **[0:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=57)** Now, the reason I'm going to put this inside a try catch block is because the parse function might throw an exception, which we learned about earlier.
>
> **[1:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=68)** So I have to have a try catch handler to catch any exceptions that might happen.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=73)** So for our first example, I have this integer named targetNum and what I'm going to try to do is call targetNum equals and then I'm going to use the int type .Parse.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=86)** And I'm going to parse, what is it called?
>
> **[1:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=90)** numStr1.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=94)** And then we'll just simply print out the output.
>
> **[1:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=103)** So the parse function's going to try to convert that string into this case an integer and it might throw an exception, so we have to make sure that we catch that and it's just a generic catch handler that's going to catch any exception that happens.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=114)** So let's go ahead and run this.
>
> **[1:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=116)** Let's open up the terminal.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=120)** And we'll run.
>
> **[2:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=124)** Yep, and sure enough, there's the output, the number one, right there, so it worked.
>
> **[2:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=127)** So now let's try parsing a floating point number into an integer.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=131)** The code is pretty much the same.
>
> **[2:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=133)** What I'm going to do here is I'm going to tell the parser to allow the floating point format.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=140)** And to do that, I need to use what's called a NumberStyles class and that is located here in the System.Globalization namespace.
>
> **[2:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=149)** So that's why I'm including this up here.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=151)** So here's how this works.
>
> **[2:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=152)** And by the way, you can only do this with a floating point number into an integer if the decimal point value is zero.
>
> **[2:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=158)** So that's why I have this here.
>
> **[2:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=160)** If this was nonzero, this wouldn't work.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=162)** So here's what I'm going to do.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=164)** I'm going to write targetNum is equal to int.Parse.
>
> **[2:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=171)** And once again, I'll call it with numStr2 this time.
>
> **[2:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=174)** And I'm going to call NumberStyles.Float.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=179)** And that tells the parser expect to see a decimal point number in here and then just like before, I'll just print out the output.
>
> **[3:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=188)** The NumberStyles class lets me specify that expect the number to be in a certain format.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=194)** So in this case, I've specified a floating point number, but I can also expect other formats.
>
> **[3:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=199)** So for example, I have a number with a thousands marker, which in this case is a comma, 'cause I'm in the US.
>
> **[3:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=205)** So I'm going to try the same thing.
>
> **[3:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=208)** So I'll copy this line and paste it in here and this time I'll try to parse numStr3 but with numStr3, what I'm going to do is instead of calling Float, I'm going to call NumberStyles.AllowThousands.
>
> **[3:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=225)** So that tells the parser hey, there might be a comma in there and once again, I will copy and print out the result.
>
> **[3:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=233)** And I can combine these styles.
>
> **[3:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=235)** So one more time, let's do something for numStr4.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=239)** And for numStr4, remember, we've got both.
>
> **[4:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=241)** So we have a thousands marker and a decimal point.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=244)** So what I'm going to do is call this with numStr4 and I'm going to pass in NumberStyles.Float and then or, a single vertical bar, NumberStyles.AllowThousands.
>
> **[4:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=263)** So now I'm telling the parser hey, you can expect to see a potential thousands marker and a decimal value.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=270)** So let's go ahead and save and let's run.
>
> **[4:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=274)** So I'll save this and then down here in the terminal one more time, we're going to run this.
>
> **[4:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=280)** And you can see that in the output, we get the expected results.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=283)** So remember, we're building integers here, so each of these is an integer and if we scroll back up, what we should be seeing is a one, a two and then a couple of 3,000s, right?
>
> **[4:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=294)** So here's our one, here's our two and then 3,000s.
>
> **[4:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=297)** So it looks like our operations are successful and we're parsing these pieces of data in strings into an integer number.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=304)** Now, this isn't just for integers.
>
> **[5:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=305)** You could do this with other data types too.
>
> **[5:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=307)** So let's go ahead and scroll down.
>
> **[5:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=310)** So for example, we can do this with a Boolean.
>
> **[5:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=313)** So I can do something like this.
>
> **[5:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=315)** I can WriteLine and what I'm going to do is I'm going to write out, and I'm going to use string interpolation for this.
>
> **[5:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=323)** I'm going to write out bool.Parse and then I'm going to try to parse the string True.
>
> **[5:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=334)** So that should result in a Boolean value that's true and then I can do the same thing, let's try this with a floating point number, so in this case, I'm going to call float.Parse and what I'm going to try to parse instead here is 1.235 and of course, once again, I can format this using my formatting knowledge that we learned earlier.
>
> **[5:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=358)** So I'll format this as a two-decimal place fixed point number.
>
> **[6:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=363)** So now let's save and let's run again.
>
> **[6:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=368)** And you can see that those work as well.
>
> **[6:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=370)** So here's our Boolean true, so that worked.
>
> **[6:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=373)** And you can see that 1.235 is being rounded up 'cause I specified two decimal places.
>
> **[6:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=378)** So that's being rounded up to 1.24.
>
> **[6:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=381)** That's how we can parse strings into numbers.
>
> **[6:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=384)** There actually is a convenience form of the parse function called TryParse, which combines the exception handling code so that you don't need to handle any errors.
>
> **[6:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=394)** You can just check to see if the conversion succeeded.
>
> **[6:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=397)** So let's go ahead and try that out.
>
> **[6:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=399)** I'm going to have a statement that says succeeded equals and then on the Int32 class, I'm going to call the TryParse function and TryParse, now, here's the thing, it's already returning whether or not it's succeeding, so we have to have some way of getting the value back but we can't use the return value.
>
> **[6:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=418)** So what I'm going to do is I'm going to call this on numStr1 and then this is a little bit strange 'cause we have to get the value back somehow.
>
> **[7:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=425)** We're going to use a feature of C# called an out parameter, which is a function parameter that is used to return a value from the function call.
>
> **[7:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=434)** We're not going to be supplying this value, it's going to be giving it back to us.
>
> **[7:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=438)** Now, we're going to learn more about this when we get to the chapter on functions but for the moment, just bear with me as I write this code.
>
> **[7:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=443)** And all you need to know is that the function will return the converted value here.
>
> **[7:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=448)** I'm going to write the code as targetNum.
>
> **[7:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=451)** So out targetNum means that's the return value or another return value in addition to this return value.
>
> **[7:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=457)** So let's go ahead and save.
>
> **[7:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=459)** And then let's run it again.
>
> **[7:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=465)** And you can see that that worked.
>
> **[7:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=466)** Here's the value one down here.
>
> **[7:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=469)** So this statement is obviously a lot less code than having a try catch handler.
>
> **[7:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=475)** Now, before moving on, I would suggest trying some of your own combinations here to get a better feel for how the parsing function works.
>
> **[8:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=483)** And of course, you can look in the .NET docs for more information on this.
>
> **[8:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-parsing?u=76281980&t=487)** At this link, you can read up on how to parse strings in .NET and I would try out some different formats, different kinds of data types just to get a feel for how the parsing function works.

> [!info]- Semantic Content
>
> **Code Identifiers:** targetnum (5), numstr4 (3), numstr1 (2), numstr3 (2), numstr2 (1)
> **Definitions:** is a  (6), is an  (1), means that (1)
> **Versions:** 1.235 (2), 1.24 (1)
> **Analogies:** for example (2), just like (1)
> **Env Vars:** net (2)
> **Tools:** terminal (2)
> **UI Navigation:** open the (1), scroll down (1)
> **CLI Commands:** make (1)

#### [Solution: Count the data types](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-count-the-data-types?u=76281980)


### 4. C# Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Function basics](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=0)** - In this chapter, we're going to learn about how to define and work with functions and sometimes they're also called methods.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=7)** And we'll learn more about that when we get to the object oriented programming chapter.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=12)** Functions are used to group related blocks of code together so that they can be easily reused and parameterized so that their logic can be used with different values.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=22)** So let's take a look at some simple examples.
>
> **[0:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=25)** So here in the Start folder in Functions we'll open up the Basics folder and open the Program and I'm going to be using C# top level statements here, I'm not going to be using the whole namespace in class program.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=38)** We learned about this earlier in the course, so I'm just going to use this to just demonstrate some functions.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=43)** So first we're going to write a function that converts miles to kilometers.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=47)** Functions can have a return value which in this case is going to be a floating point number.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=53)** So I'm going to start off by writing the [[Microsoft Word|word]] float, and then that's going to be followed by the name of the function, and I'm going to call it MilesToKm.
>
> **[1:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=63)** And then there's an optional list of parameters inside the parentheses and each parameter has its own type.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=71)** So it'll take a floating point number named miles as a parameter.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=76)** And then we have the two curly braces and the code goes in between those two curly braces.
>
> **[1:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=82)** So what we're going to do is we're going to define a variable named result and that will be a floating point number, and it's going to be equal to miles times 1.6f.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=94)** I have to have that f there for the floating point number.
>
> **[1:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=97)** And then I'm going to return the value when the function ends.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=102)** So now, we have an encapsulated block of code that we can call with different values.
>
> **[1:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=108)** So for example, let me go ahead and Console.WriteLine and I'll define an interpolated string and I'll type "The result is" and then we're going to call MilesToKm with 8.0.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=131)** And then I'll do the same thing with 52.0.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=139)** And functions can also be defined with no return value.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=143)** In which case they have a return value defined as a void.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=147)** So if I say void and I'll call this function PrintWithPrefix.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=156)** And in this case, the function will take a string argument.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=159)** And by the way, functions don't have to take arguments, you can just simply leave the parentheses empty and that's perfectly valid as well.
>
> **[2:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=167)** But in this case we'll have a string parameter called theStr and all PrintWithPrefix is going to do is call Console.WriteLine, and it's going to right out that little prefix along with whatever string was passed in.
>
> **[3:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=192)** And now we can add some calls to the second function as well.
>
> **[3:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=195)** So we'll call PrintWithPrefix and we'll call that with Test String.
>
> **[3:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=202)** And then we'll also call that with Another Test String.
>
> **[3:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=212)** So let's try running these.
>
> **[3:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=217)** So we'll right click and open the terminal, and we'll run this dotnet run.
>
> **[3:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=226)** So the program will compile and then you can see the results.
>
> **[3:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=230)** So my first function I'm converting eight and 52 miles to kilometers, as you can see the results and you can also see my PrintWithPrefix, it's printing each string with this little prefix in front of it.
>
> **[4:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=242)** So that's a basic example of how to define functions and functions basically, they have a return type, either a type or void along with the name optional parameters and then the code goes in the curly braces.
>
> **[4:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=256)** So we're going to use this as a starting point for the [[Representational State Transfer (REST)|rest]] of the chapter and see how we can use functions and to find different kinds of functions to take different kinds of parameters.
>
> **[4:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/function-basics?u=76281980&t=265)** And we'll finish up with another programming challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** dotnet (1), find (1)
> **Versions:** 8.0 (1), 52.0 (1)
> **UI Navigation:** open the (2)
> **Code Identifiers:** thestr (1)
> **Cross-References:** earlier in (1)
> **Tools:** terminal (1)
> **Definitions:** defined as (1)

#### [Named and default parameters](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=0)** - [Narrator] Functions in C-sharp have some nice convenience features that make them easy to work with while making your code more readable.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=7)** So let's open up the default params folder in our functions folder.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=13)** And we're going to take another look at our PrintWithPrefix function from the previous example.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=19)** So this function takes two arguments.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=21)** So there's the string to be printed and the prefix that we want to print in front of it.
>
> **[0:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=27)** And you can see that all it does is it calls console.writeLine and it prints the prefix, a space and then the string to print out.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=35)** Now, suppose we don't want there to be any prefix for a particular string we want to print this way.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=43)** Well, we can call this with an empty string.
>
> **[0:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=45)** So for example, I could call this like this PrintWithPrefix and I can pass in hello there as the string and then just pass in an empty string.
>
> **[0:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=56)** And that's not very readable and the empty string doesn't really do anything.
>
> **[1:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=61)** So what we can do is we can change the function definition to specify that prefix has a default value.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=69)** And what we do is write in the function definition, right after the name of the parameter, I'm going to assign a default value like this.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=78)** Just right in the function definition.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=80)** So now I can call this function without specifying a prefix if I don't want to.
>
> **[1:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=85)** So now I can take this off and you can see that there's no error.
>
> **[1:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=89)** Because there's a default value applied if we call it without one here.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=93)** So we can call this without a value or we can call it with a value.
>
> **[1:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=102)** And you can see that each of those is valid there's no error and let's go ahead and run it to make sure it works.
>
> **[1:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=108)** So let's open up the terminal and let's run.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=117)** And sure enough, they both work.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=118)** You can see that there's no prefix., and then there is a prefix.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=122)** So the other nice feature that you can use with C-sharp functions to increase readability is calling functions using named parameters.
>
> **[2:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=131)** And you might use this feature when a function has a lot of parameters that have default values.
>
> **[2:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=136)** To make the code easier to read, you can call the function using the name of the parameter along with the values to use.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=144)** So let's go ahead and try this with our PrintWithPrefix function.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=147)** And because we're specifying the parameter names we can pass them in any order.
>
> **[2:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=152)** Let's scroll up a little bit.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=153)** I can call this function right here the normal way, passing parameters in order, or I can do something like this.
>
> **[2:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=159)** I can write PrintWithPrefix.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=162)** And I can actually call the prefix first.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=164)** So I'll use the name of the parameter and then I'll pass in the value, and then I can call it with the str and pass an hello there.
>
> **[3:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=181)** So even though the parameters are out of order you can see that this still works.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=186)** Because now the compiler can match up each of my parameters with how they're defined in the function definition.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=196)** So let's go ahead and run this again.
>
> **[3:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=204)** And you can see that that works.
>
> **[3:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=205)** So if you have a situation where you've got a function that has a lot of default values, or if you just want to make your code easier to read because there's a lot of different parameters you can pass in, then you can use this convention here, where you pass in the name of the parameter, followed by the value.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/named-and-default-parameters?u=76281980&t=221)** And you can see that that's an easier to read version of my code.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Identifiers:** writeline (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Reference and out parameters](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=0)** - [Narrator] The C# language has some interesting, unique features, and we're going to look at a couple of them in this example.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=6)** So let's open up our RefAndOutParams folder, and we'll open up the program code.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=14)** So ordinarily, when you pass value arguments to a function, that function can't change the values of those arguments outside the function.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=24)** So let's see an example of this.
>
> **[0:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=27)** Here I have a function that takes a single integer argument.
>
> **[0:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=30)** And inside the function, if I add some code, and I'm going to modify the argument, so let's do something like arg1 plus equals 10.
>
> **[0:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=41)** So we're going to increment arg1 by 10.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=44)** This change is only temporary inside this function because the function receives a copy of the value in the argument when it is passed in.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=54)** So down here in the main function, when I call this function in main, and I print out the result, the value doesn't change.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=64)** And we'll see that that's the case when I run the code.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=66)** So let's go ahead and bring this up in our terminal.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=73)** And let's run this.
>
> **[1:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=80)** So you can see that val1 starts out as 10.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=83)** So I call the function with the parameter here val1.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=87)** Inside the function, it gets added to 10, so that result is 20, but outside the function, val1 hasn't changed.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=95)** It's back to 10 again.
>
> **[1:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=97)** So now let's make a copy of that function.
>
> **[1:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=105)** And let's name it TestFunc2.
>
> **[1:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=109)** Now what I'm going to do is I'm going to put the keyword ref in front of the argument.
>
> **[1:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=114)** So now, instead of just saying int arg1, I have ref int arg1.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=120)** And I'll also make a copy of the calling code.
>
> **[2:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=128)** And we'll paste that here.
>
> **[2:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=130)** And I'll call TestFunc2 with val1.
>
> **[2:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=135)** Now also you'll notice that there's an error here because it says argument one must be passed with the ref keyword.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=143)** So to make the code easier to read and make it explicit what's going on here, I have to call it like this.
>
> **[2:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=149)** So I'm going to call it with ref val, and you can see that when I do that the little red line disappears and there's no more error.
>
> **[2:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=155)** So what this keyword does is it indicates to the compiler that the argument is being passed as a reference, instead of a copy.
>
> **[2:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=163)** So now the function does have the ability to change the value, and have that change be reflected outside the function.
>
> **[2:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=172)** So let's run the code again and let's see what happens.
>
> **[2:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=177)** So here's our first example, where the change only happened inside the function, but here you can see that when I change the value inside the function, the change happens to be reflected outside the function as well.
>
> **[3:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=190)** So by adding this keyword, you can give functions the ability to change the parameters that they're given.
>
> **[3:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=197)** There's one other interesting keyword called out, which specifies that a parameter is used to return a value instead of supplying data to the function.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=207)** And we saw a very quick example of this earlier when we were working with the strings chapter.
>
> **[3:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=212)** So let's go ahead and add our example here.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=214)** So what I'm going to do is we're going to define a function, and that function is going to be called- Oops.
>
> **[3:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=223)** So we'll call it static void.
>
> **[3:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=227)** So we'll have the function, not return a value, and we'll call it PlusTimes, and it's going to take an int and an int, so it takes two integer arguments and then it's going to return, the sum, and product.
>
> **[4:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=254)** So the out keyword in this case means that the function doesn't expect to be given a value here.
>
> **[4:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=260)** These two parameters are going to be used to return values back to the caller.
>
> **[4:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=266)** So inside the function, let's have sum be arg1 plus arg2, and let's have product be arg1 times arg2.
>
> **[4:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=280)** So then when I call this function down here in main, once again, let's define two integers.
>
> **[4:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=290)** So I'm going to call PlusTimes, I'm going to call it with val1 and val2.
>
> **[4:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=297)** Now, when I call the function again, I have to specify that keyword.
>
> **[5:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=301)** So I have to say out a and out b.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=304)** So a and b are going to receive the values, the sum and the product of val1 and val2.
>
> **[5:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=312)** And then we'll just print the result.
>
> **[5:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=325)** So let's go ahead and run our updated code.
>
> **[5:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=332)** And here in the output, you can see that the sum of 20 and 20 is 40 and the product is 400.
>
> **[5:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=340)** So you might be wondering like, why do we use things like out parameters and rough parameters?
>
> **[5:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=344)** So the main purpose of the out parameter is to enable a function to return multiple values.
>
> **[5:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=351)** And you might see this in older C# code.
>
> **[5:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=353)** However, this isn't really the recommended way to do this anymore.
>
> **[5:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=356)** So while you might see this in older C# code, there's a newer way to return multiple values, and that's by using what's called a tuple structure.
>
> **[6:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/reference-and-out-parameters?u=76281980&t=366)** And we'll see how to do that in another video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Tools:** terminal (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)

#### [Returning multiple values](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=0)** - [Instructor] As we saw in a previous video, sometimes it's desirable to return more than one value from a function.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=6)** So the problem is that functions can only have one return value.
>
> **[0:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=10)** So the C# language has something called an out keyword that lets you return values in normal function parameters.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=17)** Now, unfortunately that sometimes leads to code that is hard to read, and it also kind of breaks the convention that parameters are used to give data to functions and return values are used to get results back.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=29)** So starting back in C# version seven, [[Microsoft]] added support for a data type known as a tuple.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=35)** A tuple is basically a lightweight data structure that lets you group multiple values together in one place.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=42)** So let's open up our sample code here in the MultiValues folder in our functions folder, and let's take a look at a basic tuple.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=51)** It looks something like this.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=53)** So inside parentheses, which is what you use to group tuple values together.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=58)** I can do something like this.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=59)** I can declare int a, and int b and that becomes my type.
>
> **[1:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=67)** So I'll use this type to declare a variable named tup1 and I'm going to set that equal to, and again in parentheses 5, 10.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=76)** And I can do this other way too.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=78)** I can also do it, just use the var keyword to make a tuple value like this.
>
> **[1:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=82)** And then just our tup2 and then inside my parentheses, I can put a string and maybe I'll have like a floating point value.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=91)** So in the first instance, I have a tuple with named elements a and b, and I can operate on them individually.
>
> **[1:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=98)** So for example, I can do something like tup1.b = 20.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=104)** In the second case, I didn't name the two elements but C# automatically names them for me as item one and item two.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=111)** So I can do something like tup2.Item1 = "New String" and oh, let me put those down here in this section.
>
> **[2:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=123)** So let's print these out.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=129)** And we'll use a string interpolation for this.
>
> **[2:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=132)** So I'll print out tup1.a and tup1.b
>
> **[2:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=141)** and let me copy that and make another example.
>
> **[2:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=144)** So we'll do tup2.Item1 and tup2.Item2.
>
> **[2:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=152)** So let's go ahead and run this code and see what we have so far.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=164)** Let's run this and then you can see the values of the tuples being printed out.
>
> **[2:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=172)** So everything seems to be working.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=175)** So what's nice about tuples is that they give us a very clean way of returning multiple values from a function.
>
> **[3:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=183)** So let's rewrite our plus times function from the previous example to use tuples instead of out parameters.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=193)** So I'm going to write, I'm going to declare the function as returning two ints and we're going to call it PlusTimes and it's going to take two integer arguments and it's going to return a tuple and the first value is going to be a+b, and the second value is going to be a*b.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=221)** So now let's write the code to exercise this function.
>
> **[3:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=228)** And once again, I'm going to get a tuple back with two integers.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=231)** So I'll declare my variables as having two ints and I'll call that variable result and I'm going to call PlusTimes with six and 12 and they'll print the result.
>
> **[4:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=251)** So we'll print out Sum and that's going to be result.Item1 and the product is going to be result.Item2.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=270)** So now let's go ahead and run our updated code and we can see that the sum of six and 12 is 18 and the product is 72.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=283)** So now we can see that the result we're returning has multiple values in it via tuples and we didn't have to resort to using the out keyword.
>
> **[4:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/returning-multiple-values?u=76281980&t=292)** So as I said previously, this is now the preferred way of returning multiple values from a function instead of using out parameters which you'll probably only see in older C# code but it's good to know how to do it both ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **CLI Commands:** make (2)
> **Cross-References:** as we saw (1), previous video (1)
> **Exercise Files:** sample code (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Palindrome](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=0)** - [Instructor] Let's review my solution for the palindrome challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=8)** Now, your solution might look different from mine and that's okay.
>
> **[0:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=11)** The point here is to learn different ways of solving a given problem.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=15)** So the function takes a string argument, which is the string that we are going to test for being a palindrome.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=23)** So I have a local variable named teststr, which will be used to perform the palindrome test.
>
> **[0:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=30)** So first, my code converts the string to uppercase since one of the rules we had to follow was that we need to ignore the case of the input string.
>
> **[0:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=39)** So by converting the string to uppercase, I can just compare each character in the string directly.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=44)** Then I use a string builder to strip out all the punctuation and white space from the input string.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=53)** This loop processes each character in the string and adds it to the string builder if it is not punctuation or white space.
>
> **[1:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=61)** And I check that by using the IsPunctuation and IsWhiteSpace functions.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=66)** At the end of that loop, I convert the string builder into a finished string.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=72)** And at this point, the string has been stripped of punctuation and spaces, leaving only the characters.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=78)** And this is the string that the [[Representational State Transfer (REST)|rest]] of the function will use to determine whether it's a palindrome.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=83)** So the way the code does this is by comparing each character pair.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=87)** And look, this is not necessarily the most efficient way of doing this, but because this is a learning course, I thought it was more important to focus on the algorithm rather than trying to be, as, you know, clever as possible.
>
> **[1:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=97)** So the code does this by comparing each character pair starting at the beginning and end of the string.
>
> **[1:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=105)** So I've got my i variable starts at the beginning and j starts at the end of the string, and then the loop continues until the indexes cross each other because at that point, we're done.
>
> **[1:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=116)** So each index works its way in from both sides.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=121)** So then I compare the characters at each location and if the two characters are not the same, then I know right away that the string is not a palindrome and I can immediately return a result of false.
>
> **[2:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=133)** Otherwise, I advance each index.
>
> **[2:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=136)** So I increment from the beginning and decrement from the end.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=139)** And again, if the indexes cross each other and I haven't found a situation where the characters are at the same, then well, we must have a palindrome at that point.
>
> **[2:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=148)** At that point, the loop exits and we return true.
>
> **[2:32](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=152)** And you can see down here is the teststrings.
>
> **[2:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=155)** So we've got Hello World!, Race car, Rotor, More cowbell, and Madam, I'm Adam.
>
> **[2:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=160)** So of these teststrings, Race car, Rotor, and Madam, I'm Adam should all be palindromes.
>
> **[2:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=168)** So let's go ahead and test the code, and sure enough, you can see that we've got the right answer of three.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=175)** Let's go ahead and add another argument.
>
> **[2:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=178)** Let's go ahead and put radar in here with an exclamation point and let's run it again.
>
> **[3:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=184)** So now we should have four, and sure enough, we have four.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-palindrome-22820951?u=76281980&t=189)** All right, so how does my solution compare to yours?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Object-Oriented C#

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining C# classes](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=0)** - As I mentioned at the start of the course C-sharp is an object-oriented language.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=6)** All of your code lives in classes and all the data types are fundamentally objects, and so on.
>
> **[0:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=12)** In this chapter, we're going to learn how to work with C-sharp classes which are the blueprints for creating your own objects.
>
> **[0:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=19)** And again, I just want to remind you that before you start this chapter you should already be familiar with the principles and ideas of [[Object-Oriented Programming (OOP)|object-oriented programming]].
>
> **[0:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=29)** If you're not, then check out the programming fundamentals object-oriented design course.
>
> **[0:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=34)** So let's start by learning how to define a class in C sharp.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=38)** So here in our editor, in the classes folder under the defining folder, let's open up our program file and this file named book dot CS.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=48)** So our sample class will contain information about a book.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=51)** To define a class in C-sharp, you use the class keyword followed by the name of the class, which is book in this case.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=59)** And we're going to make our class public so that any other code in our program can use it.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=66)** And we'll learn more about the concept of these access modifier keywords a bit later in the chapter.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=72)** So inside our class definition we can declare member variables, sometimes called fields, that will hold data related to the class.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=81)** So for our book, we'll declare fields to hold the name which will be a string, and I'm going to use an underscore to indicate that it's an internal variable name.
>
> **[1:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=91)** And then I'll have another string for the author, and an integer for the page count of the book.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=100)** Classes also have a function called a constructor.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=104)** This is the function that is used to create an object of this classes type.
>
> **[1:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=110)** So once again, we'll have that be a public function and it's the name of the object and it can take parameters.
>
> **[1:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=117)** So we'll pass in the name, author, and page count of the book.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=129)** And then inside the constructor, we'll simply initialize our internal fields to each of these parameters.
>
> **[2:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=137)** So, we'll have author, and then finally page count is going to be equal to pages.
>
> **[2:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=146)** And then finally we can declare other methods that operate on the class.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=151)** So let's add a method called get description that will return the book, name, and author and we'll use the string interpolation feature that we learned about earlier to do that.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=162)** So this is going to be a public function.
>
> **[2:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=163)** It's going to return a string and we'll call it, get description.
>
> **[2:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=169)** And it's going to return an interpolated string and that's going to be underscore name by underscore author.
>
> **[3:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=183)** So that completes the class definition.
>
> **[3:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=185)** So let's go over to the program code and try out our class.
>
> **[3:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=189)** So here in the main code, I'm going to create some instances of our book object and to do that I'm going to use the new keyword.
>
> **[3:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=199)** So I'll declare a variable of type book.
>
> **[3:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=202)** I'll call it b1, and then I'll make a new book and then I'll give it a name, so it'll be, let's see "War and Peace," and that was written by Leo Tolstoy.
>
> **[3:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=217)** And that's pretty big, it's like 800 pages.
>
> **[3:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=220)** And then I'll copy that and we'll make another book, call this one b2, and this will be "The Grapes of Wrath," and that of course was written by [[John the Ripper|John]] Steinbeck, and that's I think 464 pages.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=244)** Now let's call the get description method on each object.
>
> **[4:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=247)** So let's print that out.
>
> **[4:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=254)** We'll do b1 dot get description and then we'll do the same thing for b2.
>
> **[4:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=266)** So let's go ahead and run what we have.
>
> **[4:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=269)** So I'll open this up in my integrated terminal and we'll dot net run this.
>
> **[4:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=279)** All right, and when the code runs, you can see that we are able to successfully define our book objects and get their descriptions.
>
> **[4:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=287)** So you can see here in the output that that string is being printed out, so everything seems to be working.
>
> **[4:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=292)** So let's go back to the code and try something.
>
> **[4:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=295)** I'm going to try and change one of these member fields directly, right?
>
> **[4:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=299)** So I'm going to try and change the name.
>
> **[5:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=302)** So if I type something like b1 dot underscore name equals and then I'll put in some other author, like Aldous Huxley.
>
> **[5:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=312)** Now this isn't going to work, okay?
>
> **[5:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=314)** It's going to cause an error, and you can see that when I try to run this, we get an error and it says, book underscore name is inaccessible due to its protection level.
>
> **[5:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=328)** So something is keeping my code from accessing this variable, this field name in my class.
>
> **[5:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-c-sharp-classes?u=76281980&t=335)** And we're going to learn more about that in a separate video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[John the Ripper|John]] (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Analogies:** it's like (1)
> **Speakers:** - as (1)

#### [Access modifiers](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=0)** - Let's take a closer look at how access modifiers work in C-sharp classes.
>
> **[0:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=4)** These keywords let us control how the code and data within our class definitions are exposed to other parts of our program.
>
> **[0:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=13)** Now, so far in this course, you might have noticed that some of the methods that we've been working with in our classes have the keyword "public" in their definitions.
>
> **[0:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=21)** And you might be curious about what that means.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=23)** The public keyword means that the method or class member can be accessed by any other code within your program.
>
> **[0:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=30)** So there are a couple of other keywords we're going to try out in this example as well.
>
> **[0:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=33)** "Protected" means that the method or class member can be accessed by other code within the class itself or within any derived subclasses.
>
> **[0:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=42)** And "private" means that the method or class member can only be accessed within that class definition.
>
> **[0:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=47)** And this is the default setting.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=50)** Now, these are not the only access modifiers, but they're the ones that you're most likely to see in practice.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=55)** And the others are a bit advanced for this course.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=58)** So let's take a look at what this actually means in real code.
>
> **[1:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=62)** Suppose I have class A, with these three method definitions and then within my main program I have some code that creates an object of class A.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=70)** Well, the code to function A1 works because it's declared as public and that makes it available to any code in the program.
>
> **[1:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=77)** However, the call to function A2 is going to be an error because it's declared as protected.
>
> **[1:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=83)** So it's not available outside the class or A subclass.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=87)** And then the call to function A3 is also going to be an error because it's private and therefore only available in class A.
>
> **[1:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=94)** So now let's consider if I had class B, which derives from class A.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=99)** Well, once again, the call to function A1's going to work because it's public.
>
> **[1:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=103)** And now the call to function A2 also works because B is a subclass of A and therefore has access to that function.
>
> **[1:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=111)** But the call to function A3 is still not allowed because only code that's inside class A's definition can use it.
>
> **[1:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=118)** So let's go to our example in our editor and try this out.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=121)** So here in VS Code in the modifiers folder, I'm going to open up the program and book files.
>
> **[2:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=129)** And, what I'm going to do first, is make this name property public.
>
> **[2:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=134)** And I want to emphasize here, by the way, this is not the right way to make a field accessible in your class.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=139)** I'm just doing this for demonstration purposes.
>
> **[2:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=141)** So bear with me.
>
> **[2:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=143)** And then I'll make the other two fields.
>
> **[2:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=146)** One of them will be protected and one will be private and it's default, but I want to be explicit here.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=153)** So let's go ahead and save that.
>
> **[2:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=154)** So now, if we go over to our program code... Now, remember, in a previous example, we couldn't modify this member directly, right?
>
> **[2:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=161)** Because it was private by default, but this now works.
>
> **[2:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=165)** So if I try this, let's go ahead and bring this up in our terminal and I'll dot net run.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=175)** And now you can see that I'm able to change the title of the book.
>
> **[3:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=180)** But again, this is not considered a good programming practice because, now I've created this tight coupling.
>
> **[3:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=186)** So I've created this tight coupling between the program code here and the name of my field, which just isn't good programming practices.
>
> **[3:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=195)** You want to make sure that there's a separation, so that you don't have this tight coupling between your objects and how they're used.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=201)** So the other two fields are protected and private.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=207)** So how can I make those accessible?
>
> **[3:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=210)** Well, let me hide the terminal for a second.
>
> **[3:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=214)** So one way to do this is I could just simply make public methods that operate on those fields, like this.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=221)** So I could have a public string called "get name" and that would just return name.
>
> **[3:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=231)** And then I could have public void set name, which takes a string and then just sets the name variable equal to S.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=244)** And I can do the same thing for the other fields.
>
> **[4:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=246)** So for example, I could have public void set author
>
> **[4:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=257)** and that would set author to S.
>
> **[4:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=261)** And then I could do the same thing with page count.
>
> **[4:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=267)** So we'll call that said page count and that will take an integer.
>
> **[4:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=274)** And then we'll set page count to the C.
>
> **[4:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=282)** So now I have these intermediary functions that govern the access to my fields in here.
>
> **[4:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=290)** So if I ever change these fields implementations the callers of these functions don't have to change anything.
>
> **[4:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=298)** And then I can use those methods to change the book data.
>
> **[5:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=301)** So let's save this and go back over to the program.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=304)** And now I can operate on my book by doing something like this.
>
> **[5:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=308)** I can call B1 dot set name, and that would be Grapes of Wrath.
>
> **[5:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=316)** And then I can call the set author function.
>
> **[5:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=327)** And then finally I can call site page count.
>
> **[5:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=334)** And now we can just print out the description one more time.
>
> **[5:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=339)** So now let's run the updated code and let's go ahead and comment these two lines out.
>
> **[5:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=346)** So let's run this.
>
> **[5:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=349)** You can see that it worked.
>
> **[5:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=350)** So here we have the new title, the new author, and the new page count.
>
> **[5:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=355)** So everything works now but it's a bit cumbersome to have to create individual methods to access each member data field.
>
> **[6:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=363)** But if we're not supposed to make member fields public directly and writing individual functions for each field is too cumbersome.
>
> **[6:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=371)** Then what is the right solution for allowing access to internal class data?
>
> **[6:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/access-modifiers?u=76281980&t=377)** The answer is to use a C-sharp feature called properties and we'll see how to do that in a separate video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Definitions:** means that (3), is a  (1)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)

#### [Defining properties](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=0)** - [Instructor] Now that we've learned how to control and define access to the number of variables and methods within our class definition using access modifiers, we're going to take a look at how we can safely expose them to other parts of our application.
>
> **[0:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=14)** Now, in a previous example, we saw how to do this using public methods but it's a bit cumbersome to define methods just for accessing data fields.
>
> **[0:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=24)** Methods should be doing real work instead of just setting and getting values.
>
> **[0:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=29)** So instead, we're going to expose our object's data using properties, which are sort of a combination of member variables and methods.
>
> **[0:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=38)** So let's take a look at an example.
>
> **[0:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=40)** So here in our Classes folder, I'm going to open up the Properties folder and open up the Program file, as well as our Book class.
>
> **[0:51](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=51)** So here we have the Book class example that we've been working with and it has three private data members.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=58)** Name, author and pagecount.
>
> **[1:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=60)** Now, suppose I wanted to give access to the _name field.
>
> **[1:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=65)** So I can do that by declaring something called a public property as if it were a member variable.
>
> **[1:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=73)** So what I'm going to do is use the [[Microsoft Word|word]] public, 'cause I want this to be public.
>
> **[1:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=78)** I'm going to give it a type string and then I'll give it a Name, which in this case is Name.
>
> **[1:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=84)** And I'm going to declare it with curly braces.
>
> **[1:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=87)** Inside the curly braces, I'm going to add code that's called a getter and a setter.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=93)** So I'm going to use the get keyword and for get, I'm going to return _name.
>
> **[1:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=100)** And then for set, I'm going to set _name equal to this keyword named value and the value is something that's automatically passed in to each property when you set the value.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=115)** So it doesn't need to be defined anywhere, it's just like the magical value that gets passed in.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=121)** So these getters and setters are responsible for returning the value, as well as setting the value.
>
> **[2:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=127)** And in this case, what we're doing is we're setting and getting this private property _name, which in this case is called a backing field because this public property controls access to this private field that's in our class and as I mentioned, in the setter case, the value keyword's a special parameter.
>
> **[2:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=147)** You don't need to declare this.
>
> **[2:28](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=148)** It just happens to show up.
>
> **[2:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=150)** In fact, this form of getting and setting property values is so common, it actually has a shorthand way of writing it called an expression-bodied property.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=162)** So let's do this for the other two private fields.
>
> **[2:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=166)** And I'm going to collapse it down so I have more room.
>
> **[2:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=169)** So what I'm going to do is define a public string property called Author.
>
> **[2:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=176)** And then for the get case, I'm going to use the arrow notation, so it's equals and then greater than.
>
> **[3:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=183)** That basically means just return, not pagecount, I want to return author and then for set, same thing.
>
> **[3:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=195)** I'm going to set _author equal to value.
>
> **[3:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=198)** So this saves me from having to write those curly braces.
>
> **[3:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=200)** It's just a shorthand way of doing this and then I'll do the same thing for pagecount.
>
> **[3:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=206)** And that's an integer.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=207)** So I'll have public int Pagecount.
>
> **[3:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=210)** And then get will just simply return pagecount.
>
> **[3:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=216)** And then for set, we'll have pagecount equals to value.
>
> **[3:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=224)** If I wanted to make one of these properties read only or write only, I can just remove the setter or the getter.
>
> **[3:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=232)** So for example, if I take this set expression out of the page count, that would make it read only.
>
> **[3:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=238)** So because now there's only a getter, there's no setter.
>
> **[4:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=241)** So let me undo that.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=244)** So one of the great uses for properties is to create what are called computed properties, which get their values from other properties and expressions.
>
> **[4:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=254)** So let's go ahead and create a property called description, which returns a string description of the book and it's only going to have a getter, so it's read only.
>
> **[4:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=265)** So once again, I'll make a public string.
>
> **[4:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=267)** We'll call it Description.
>
> **[4:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=270)** And the getter is going to return an interpolated string and I'm going to refer to the other properties in here.
>
> **[4:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=279)** Name by Author and it's going to have Pagecount pages.
>
> **[4:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=290)** And so for the last example, let's take a look at something called autogenerated properties.
>
> **[4:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=295)** So these are properties that don't have backing fields in the class.
>
> **[4:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=299)** So they not only control the data access but they actually hold the data as well.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=304)** So let's add two properties.
>
> **[5:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=306)** So I'm going to add a public string called ISBN.
>
> **[5:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=314)** And I'll add another one called public decimal for the Price.
>
> **[5:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=321)** And then in each of these definitions, I'm going to add a very simple get; and set; and I'll do the same thing for Price.
>
> **[5:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=331)** Just get and set.
>
> **[5:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=333)** So this will autogenerate the getter and the setter for me.
>
> **[5:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=337)** So there's no internal data fields associated with these properties.
>
> **[5:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=340)** They just hold the data directly.
>
> **[5:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=342)** So let's go to our program and now try these out.
>
> **[5:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=348)** So I already have the code to create the book.
>
> **[5:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=350)** And so now I have some code here to print out the name and the description and then I have some code to set the ISBN and the price and then print those out and then you can see that I have some code that changes the name and the Pagecount and then prints out the description, name and Pagecount again.
>
> **[6:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=372)** So let's go ahead and save this.
>
> **[6:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=376)** And we'll go to the Properties folder and open this in the integrated terminal.
>
> **[6:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=384)** And then let's run this.
>
> **[6:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=391)** All right, so the results are basically what we expect.
>
> **[6:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=395)** So here is the name.
>
> **[6:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=398)** And the initial description, followed by the ISBN number and the updated price information.
>
> **[6:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=407)** And then here's the updated description after we change the name and the page count and then we have just the name and then just the page count.
>
> **[6:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=418)** So properties are probably one of my favorite features of C# because they make it really easy to control how class data is accessed and they're really easy to read and understand.
>
> **[7:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/defining-properties?u=76281980&t=431)** You can read more about properties at this link in the documentation and I suggest taking some time here and trying out your own experiments with the example code that we have here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** isbn (3)
> **UI Navigation:** go to (2)
> **Definitions:** is called (1), basically means (1)
> **Analogies:** just like (1), for example (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)

#### [Inheritance](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=0)** - [Instructor] As I said at the beginning of the course, C# is an object-oriented language which means that we can build class hierarchies using inheritance.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=8)** In this video, we're going to use inheritance to expand the Book example that we've been using to represent other types of publications.
>
> **[0:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=16)** So here, in the Inheritance folder, inside Classes in the Start folder, let's open up the Book class and we'll start here.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=26)** So let's imagine that we want to create another type of publication called a Magazine.
>
> **[0:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=31)** So one of the ways that we could do that is by creating a new Magazine class which I have here, and as you see in the editor, we could, within that class, define properties such as the publisher, the pagecount, and the price.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=44)** And if we look over at the Book class, we can see that we have some similar fields.
>
> **[0:50](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=50)** We've got the pagecount and the price.
>
> **[0:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=52)** So we've created a problem, here.
>
> **[0:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=54)** We've duplicated these fields and if we ever decide to update or change or class definitions, we're going to have to modify multiple places in the code which could lead to bugs.
>
> **[1:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=64)** So to avoid this, we're going to create a parent class that holds the common code and then use subclasses for the more specific data.
>
> **[1:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=72)** So in this file here, Publication, we're going to create a new class called Publication.
>
> **[1:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=81)** And as you can see, it contains properties for the PageCount, the Price, and the Name.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=86)** And also notice that the Publication class uses the explicit setter of the Name property to check and catch the case where the given string is empty and it throws an exception.
>
> **[1:39](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=99)** So this is a good use of properties.
>
> **[1:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=101)** You can perform error checking when values are set.
>
> **[1:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=104)** So this will prevent the Name property from being set to an empty string.
>
> **[1:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=109)** So now that we have our Publication class, we need to change Book and Magazine to be subclasses of Publication.
>
> **[1:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=116)** So let me collapse that.
>
> **[1:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=119)** So let's do Book, first.
>
> **[2:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=120)** So I need to define Book as a subclass of Publication and the way that I do that is by putting a colon after the class name, and then the name of the superclass or the parent class which is Publication.
>
> **[2:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=134)** And then I need to modify my constructor so that the base class gets initialized along with the subclass.
>
> **[2:20](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=140)** And the way that I do that is by putting a colon and then calling the base keyword along with the name, pagecount, and price.
>
> **[2:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=153)** And now, I can remove the redundant code that's in my Book class.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=157)** So I can get rid of pagecount and price because Publication already has those.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=161)** And then I'll make the same changes to Magazine.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=164)** So Magazine will now inherit from Publication.
>
> **[2:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=169)** And I'll also initialize the base class.
>
> **[2:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=173)** So that's going to be name, pagecount, and price.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=179)** And I'll get rid of these two fields that I don't need anymore.
>
> **[3:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=183)** So I'm also going to add a method to the Publication class and I'm going to add a method that can be overridden by subclasses called GetDescription.
>
> **[3:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=196)** So I'm going to define this as a public virtual method and it's going to return a string and it's going to be called GetDescription.
>
> **[3:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=207)** And it's going to return an interpolated string that contains the Name and PageCount pages.
>
> **[3:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=217)** So now, let's override this function in the Book class to further customize it.
>
> **[3:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=223)** And because that method was declared virtual I'm going to use public override string GetDescription.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=239)** And in this case, I'm going to return an interpolated string and it's going to say Name by Author and it is PageCount pages.
>
> **[4:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=256)** And we're going to leave this out of the Magazine class.
>
> **[4:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=259)** We'll simply just leave the Magazine class as it is.
>
> **[4:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=261)** So now, let's test our code.
>
> **[4:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=264)** And here in the program code, you can see that I have some code that creates a new Book and a new Magazine, and that I print out the Name and Author or Publisher, in the case of the Magazine, in each one.
>
> **[4:38](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=278)** And then let's try uncommenting this code that tries to set the Name property to the empty string.
>
> **[4:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=283)** And remember, that should throw an exception.
>
> **[4:46](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=286)** So let's go ahead and open this up in our integrated terminal and let's run this.
>
> **[4:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=297)** And, oh whoops, in Publication.cs it's capital C, PageCount.
>
> **[5:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=305)** There we go.
>
> **[5:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=307)** Let's try this again.
>
> **[5:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=311)** And you can see that sure enough in the program file the Name and Author, and Name and Publisher gets printed and then we get the Name cannot be blank exception 'cause we tried to make the Name empty.
>
> **[5:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=325)** Okay, so that's working.
>
> **[5:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=326)** So let's go ahead and comment that code back.
>
> **[5:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=329)** And now, let's uncomment this code that calls the GetDescription function on each of the objects, the Book and the Magazine.
>
> **[5:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=340)** So now let's run this again.
>
> **[5:45](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=345)** And you can see that for the Book, we get the customized output along with the Price.
>
> **[5:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=354)** And for the Magazine, it's the default version which we did not override and we get the correct Price for each one.
>
> **[6:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/inheritance?u=76281980&t=362)** So using classes, we were able to de-duplicate our code and make things more organized and C#'s object-oriented features made it all pretty easy.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Analogies:** imagine (1), such as (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [String representation](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=0)** - [Instructor] In C#, every class implicitly inherits from the base object class, which you can find in the documentation at this link.
>
> **[0:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=9)** Because of this inheritance, every class, both built-in and the ones that you create inherit the ToString function from the object class.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=18)** And if I scroll down to the ToString method, you can find that here in the documentation at this link.
>
> **[0:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=26)** The purpose of the ToString function is, as you would imagine, to return a string representation of the object that is suitable for display.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=36)** So when you create your own classes, it's a good idea to override this method and generate your own string representation of your class.
>
> **[0:43](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=43)** The built-in types use this method to display their data as strings.
>
> **[0:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=48)** So let's jump over to Visual Studio Code, and let's see how this works.
>
> **[0:53](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=53)** So here in the StringRep folder, I'm going to open up the Program code, as well as the Book code.
>
> **[0:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=59)** So let's go back to our Program code for a second and let's try a simple example.
>
> **[1:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=65)** So let's try out a built-in class.
>
> **[1:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=69)** And let me collapse that down.
>
> **[1:10](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=70)** I'll make an integer x equal to 1000.
>
> **[1:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=74)** And then I'll just simply Console.WriteLine and I'm going to call x dot and then I'm going to call the ToString function.
>
> **[1:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=86)** Now, if you don't override the method, then the default version just represents the fully qualified name of the class, along with the namespace that it's in.
>
> **[1:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=97)** So for example, if I create an object and then I write this out, if I call a.ToString, now obviously, a is just a plain object, I haven't defined a class or anything like that, then the ToString function will print out the name of the class and its namespace.
>
> **[2:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=121)** So let's go ahead and run this code.
>
> **[2:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=134)** And you can see there in the output that I have the 1000 value from the integer variable, along with System.Object, which is the string representation of the plain object.
>
> **[2:26](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=146)** So let's actually implement this method in our own Book class.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=151)** So I'm going to go ahead and hide this for a moment.
>
> **[2:34](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=154)** And let's go back to our Book class.
>
> **[2:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=156)** And you can see that we have already got some properties in our Book class here.
>
> **[2:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=161)** So we have the Name, Author and PageCount.
>
> **[2:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=164)** So I'm going to use the string function and it's a virtual method, so I can override it.
>
> **[2:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=172)** So I'm going to write public and then override string ToString.
>
> **[2:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=179)** And I'm going to return an interpolated string, which is going to say Book and then Name by Author.
>
> **[3:13](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=193)** I'm using the keyword override here to override the default behavior in the base object class.
>
> **[3:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=201)** So in our program code, we now can create this new Book object and then convert it to a string.
>
> **[3:30](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=210)** So I'm going to Console.WriteLine, b1.ToString.
>
> **[3:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=216)** So this function also gets called whenever the object is implicitly converted to a string.
>
> **[3:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=222)** So the same thing would happen, let me copy and paste this, even if I didn't have the ToString method.
>
> **[3:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=228)** Console.WriteLine is going to try to convert this to a string by calling the ToString method on it.
>
> **[3:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=234)** So it's this implicit conversion.
>
> **[3:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=236)** So let's go ahead and see what happens.
>
> **[3:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=239)** And I'm going to go ahead and comment out the previous examples.
>
> **[4:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=246)** So let's bring our terminal back up and let's run this again.
>
> **[4:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=254)** And you can see that both the direct and implicit calls to the ToString method are resulting in the string being created.
>
> **[4:24](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=264)** So we can also overload the ToString function to provide some additional formatting capabilities to our class.
>
> **[4:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=271)** Let's close this and let's go back to our Book class.
>
> **[4:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=275)** And what I'm going to do here is write public string ToString and this one's going to take a character parameter named format.
>
> **[4:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=287)** Now, notice here, I'm not using the override keyword.
>
> **[4:52](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=292)** The reason I'm not using the override keyword is because there is no base class version that takes a character parameter.
>
> **[4:59](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=299)** So I'm not overriding it, I'm overloading it.
>
> **[5:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=302)** So we'll see what that means in just a moment.
>
> **[5:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=304)** So if the user passes in a b character, then what I'm going to do is return an interpolated string of the form Book and it's just going to be condensed into Name: Author.
>
> **[5:27](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=327)** And if they pass an F instead, so if format is equal to F, then what I'm going to do is return a longer, more richly formatted string.
>
> **[5:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=341)** So in this case, it'll say Name by Author, oops, put a little space in there.
>
> **[5:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=348)** Name by Author is Pagecount pages.
>
> **[5:56](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=356)** And then what I'm going to do is if they don't specify a character at all, I'll just simply return the base ToString function.
>
> **[6:05](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=365)** So now let's go back and add some more code to our program.
>
> **[6:09](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=369)** And what I'm going to do here is copy and paste this.
>
> **[6:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=375)** So in this case, I'll call ToString with a B.
>
> **[6:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=378)** And ToString with an F.
>
> **[6:21](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=381)** So let's bring our terminal back up one more time.
>
> **[6:29](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=389)** Oops, looks like I misspelled that.
>
> **[6:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=395)** Yeah, actually it's PageCount.
>
> **[6:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=400)** So let's run that again.
>
> **[6:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=404)** And now we can see the more advanced formatting output down here.
>
> **[6:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/string-representation?u=76281980&t=408)** So again, you can learn more about the ToString function at that link I showed earlier in the docs and pay particular attention to the notes to inheritor section for some good practices to follow when using the ToString function.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (3), earlier in (1)
> **CLI Commands:** find (2), make (1)
> **Documentation:** the documentation (2), the docs (1)
> **Tools:** terminal (2), visual studio (1)
> **Analogies:** imagine (1), for example (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Bank](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=6)** So this was a pretty involved challenge.
>
> **[0:07](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=7)** You had to think about what classes you would need and how you would organize them to support a set of [[Banking]] operations on two separate types of bank accounts.
>
> **[0:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=15)** So let's take a look at my code.
>
> **[0:18](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=18)** So I chose to create three different classes.
>
> **[0:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=22)** I've got a base class called BankAccount and this class is responsible for holding the information and methods that are common to both the checking and savings accounts.
>
> **[0:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=35)** The constructor takes the first and last name of the account owner as well as the initial balance, which defaults to zero.
>
> **[0:44](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=44)** That information is stored in private fields for first and last name, and there's a public property that allows us to access the balance.
>
> **[0:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=55)** This class also contains the property, which gives us the account owner name as a single string which I implemented as an interpolated string here.
>
> **[1:06](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=66)** And then finally, there's two methods, Deposit and Withdraw, which control adding and removing money from the balance.
>
> **[1:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=75)** And note, they are defined as virtual functions, which means they can be overridden by subclasses to further customize their behavior.
>
> **[1:25](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=85)** Alright, so now let's take a look at each of the account classes I created, starting with the CheckingAcct class.
>
> **[1:33](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=93)** So this class is relatively simple.
>
> **[1:35](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=95)** It derives directly from the bank account, and I declare a constant value using the cons keyword for the overdraw charge, which was one of the rules that CheckingAccts had to follow.
>
> **[1:48](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=108)** So declaring this as a constant allows me to change the value in just one place in the future if I ever need to change it.
>
> **[1:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=115)** The constructor then just calls the base class and doesn't need to do any further initialization here.
>
> **[2:02](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=122)** I override the Withdraw function because if the user overdraws the account, then I need to apply the overdraw charge amount and then I just call the base class to actually withdraw the money.
>
> **[2:15](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=135)** Alright, now let's examine the savings account.
>
> **[2:19](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=139)** Again, it inherits directly from the BankAccount class and there are some constant values for the withdrawal charge and the number of withdrawals that are free.
>
> **[2:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=151)** There's also a private field that counts the number of withdrawals that we have so far.
>
> **[2:37](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=157)** The constructor for this account has an interest rate in addition to the other values.
>
> **[2:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=162)** So after calling the base class constructor, we initialize the interest rate property, which, you can see here, is a public property that uses automatic get and set operations.
>
> **[2:55](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=175)** So one of the rules for the savings account was that we had to apply the interest rate to the balance and that's what the Apply Interest Rate method does.
>
> **[3:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=184)** And then finally, this class also overrides the Withdraw method because we have to prevent withdrawals that overdraw the account.
>
> **[3:14](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=194)** So that's what we do in here and we have to charge the user if they perform more than the number of free withdrawals.
>
> **[3:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=202)** So I think it's three free ones to start with, if we could look up, yeah, so there's three that are free and after that, you can start getting charged.
>
> **[3:31](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=211)** So you can see here that if they go over the withdrawal limit, then we withdraw the withdrawal charge.
>
> **[3:40](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=220)** Alright, so that's my solution.
>
> **[3:41](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=221)** Let's go ahead and run the test code.
>
> **[3:42](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=222)** And you can see that here, my test code, there was a whole bunch of conditions that your code had to meet, right?
>
> **[3:47](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=227)** So you can see that, you know, we create the accounts and then we just check to see if the balances and the owners are proper and so on.
>
> **[3:54](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=234)** So this is all the test code that was down in here.
>
> **[3:57](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=237)** So let's go ahead and test my code.
>
> **[4:01](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=241)** Yep. And it looks like we got to the right answer.
>
> **[4:04](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=244)** We got to the balance that we needed to get to, and we properly applied the extra charge and we properly denied overdrawing and so on.
>
> **[4:12](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=252)** So take a look at your code, compare it to mine, see where they're different, see where they're similar.
>
> **[4:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=257)** Class design is a very personal creative thing so maybe you chose to implement the classes differently.
>
> **[4:22](https://www.linkedin.com/learning/learning-c-sharp-8581491/solution-bank-22825030?u=76281980&t=262)** Take a few moments and see how your code compares to mine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1)
> **Definitions:** is a  (2), defined as (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=0)** - [Joe] Well all right, congratulations on completing this course.
>
> **[0:03](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=3)** I hope you enjoyed learning along with me about the features of the C# programming language.
>
> **[0:08](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=8)** And of course, we've only scratched the surface of what C# can do and I encourage you to investigate some of the other great C# and .NET related content here.
>
> **[0:17](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=17)** So I have a few suggestions on where you might want to go next to continue learning about C#.
>
> **[0:23](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=23)** Visual Studio is [[Microsoft]]'s official development tool for working with C# and .NET, so check out the Visual Studio Essential Training series for an in-depth look at this great IDE.
>
> **[0:36](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=36)** To learn more about some of the more advanced C# language features, check out the C# Collections, C# Interfaces and Generics, and C# Events, Delegates, and Lambdas courses.
>
> **[0:49](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=49)** And finally, if you're looking to use C# on the web or on mobile devices, take a look at the [[[ASP.NET]]](https://ASP.NET) and Xamarin related courses.
>
> **[0:58](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=58)** C# is one of my favorite languages to program in because of its rich expressiveness and wide variety of platforms you can target, and I think that after you've spent some time with the language, you'll agree that it's one of the most complete programming environments available.
>
> **[1:11](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=71)** Thanks again for watching, and I hope to see you again in another one of my courses soon.
>
> **[1:16](https://www.linkedin.com/learning/learning-c-sharp-8581491/next-steps?u=76281980&t=76)** Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[ASP.NET]] (1)
> **Env Vars:** net (3), ide (1), asp (1)
> **Tools:** visual studio (2)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [joe] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available

## Skills Covered

- C#

## Path Context

### In [[Become a Software Developer]]
← [[Learning Java 11]] | **10 of 12** | [[Learning SQL Programming]] →

### In [[Software Development Fundamentals]]
← [[HTML Essential Training]] | **6 of 10** | [[C Sharp Algorithms]] →

## Appears In

- [[Become a Software Developer]]
- [[Software Development Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#
- [[C- and .NET Essential Training]] — C#

---

[↑ Back to top](#)