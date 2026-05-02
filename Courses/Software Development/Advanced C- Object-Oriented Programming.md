---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-c-sharp-object-oriented-programming
url: "https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming"
duration_minutes: 106
duration: 1h 46m
level: Advanced
updated: 10/10/2023
learners: 45099
skills:
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-advanced-object-oriented-programming-4406346/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFEKONg7FNiDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696534679389?e=2147483647&amp;v=beta&amp;t=Ve3tWqEBMkLSRk-m7x-KMhzhSvfdW7rMBasGSrwyQT0"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Excellence- Architecting High-Performance Solutions]]'
prev_courses:
  - '[[Advanced C- Language Features]]'
next_courses:
  - '[[Asynchronous Programming in C-]]'
path_nav: '[{"path":"C- Excellence- Architecting High-Performance Solutions","position":4,"total":6,"prev":"Advanced C- Language Features","next":"Asynchronous Programming in C-"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20C-%20Object-Oriented%20Programming.md)

![Advanced C#: Object-Oriented Programming](https://media.licdn.com/dms/image/v2/D560DAQFEKONg7FNiDw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696534679389?e=2147483647&amp;v=beta&amp;t=Ve3tWqEBMkLSRk-m7x-KMhzhSvfdW7rMBasGSrwyQT0)

# Advanced C#: Object-Oriented Programming

> There's an old saying that goes "in .NET, everything is an object," and if that's the case, then knowing how to write great object-oriented C# code is an absolute must. In this course, Joe Marini takes you beyond the basics of writing classes and introduces some of the more advanced C# OOP concepts that make programs easier to read and maintain, address common real-world programming scenarios, and

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming) | 1h 46m | Advanced | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Next-level C# OOP](#next-level-c-oop)
  - [Getting set up](#getting-set-up)
- [**1. C# Object-Oriented Basics**](#1-c-object-oriented-basics) (5 videos)
  - [Defining classes](#defining-classes)
  - [Properties](#properties)
  - [Inheritance](#inheritance)
  - [Access modifiers](#access-modifiers)
  - [Anonymous types](#anonymous-types)
- [**2. Class Operations**](#2-class-operations) (6 videos)
  - [Using object initializers](#using-object-initializers)
  - [Read-only members](#read-only-members)
  - [Init-only properties](#init-only-properties)
  - [Required properties](#required-properties)
  - [Challenge: Build an employee class](#challenge-build-an-employee-class)
  - [Solution: Build an employee class](#solution-build-an-employee-class)
- [**3. Static Classes and Methods**](#3-static-classes-and-methods) (5 videos)
  - [Static members](#static-members)
  - [Static classes](#static-classes)
  - [Static constructors](#static-constructors)
  - [Challenge: Add static members to employee](#challenge-add-static-members-to-employee)
  - [Solution: Add static members to employee](#solution-add-static-members-to-employee)
- [**4. Abstract and Sealed Classes**](#4-abstract-and-sealed-classes) (6 videos)
  - [Overview of abstract classes](#overview-of-abstract-classes)
  - [Defining an abstract class](#defining-an-abstract-class)
  - [Abstract methods and properties](#abstract-methods-and-properties)
  - [Sealed classes](#sealed-classes)
  - [Challenge: Abstract employee class](#challenge-abstract-employee-class)
  - [Solution: Abstract employee class](#solution-abstract-employee-class)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Next-level C# OOP](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980&t=0)** - .NET has emerged as one of the premier development platforms over the past 20 years.
>
> **[0:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980&t=5)** It was one of the first comprehensive platforms to make [[Object-Oriented Programming (OOP)|object-oriented programming]] a core part of its foundation.
>
> **[0:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980&t=11)** Over time, .NET pioneered new features to make object-oriented programming easier, safer, and more efficient.
>
> **[0:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980&t=18)** This course will focus on .NET's object-oriented features and how to use them in your own projects.
>
> **[0:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980&t=24)** We'll start off with a brief refresher of core object-oriented programming principles, and then get into .NET's features, such as how to enforce data immutability in your classes and how to ensure consumers are using your classes in the right way.
>
> **[0:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980&t=38)** If you want to build great software with .NET, then you need to understand its object-oriented features and capabilities, and this course will show them to you.
>
> **[0:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-level-c-sharp-oop?u=76281980&t=45)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (3)
> **Env Vars:** net (5)
> **CLI Commands:** make (2)
> **Analogies:** such as (1)

#### [Getting set up](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=0)** - This course is intended for developers who are already familiar with C# And want to learn about some of the more advanced [[Object-Oriented Programming (OOP)|object-oriented programming]] features of the language.
>
> **[0:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=9)** You don't need to be a deep expert on C# or .NET but you do need to have an understanding of the basics Such as how to write functions, use variables, and so on.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=19)** There are a couple of different ways you can work with the example code In this course.
>
> **[0:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=24)** I've set up a [[GitHub]] repository with the examples, and you can find it at this link.
>
> **[0:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=29)** The course content is organized into two separate folders.
>
> **[0:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=33)** There's the Finished folder, which contains all of the code examples in their finished state so you can compare your code against them.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=41)** The Start folder contains the code examples in their starting state and this is the folder I'll be working in throughout the course as we build towards the finished state for each example.
>
> **[0:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=52)** If you want to download the examples and work with them locally in your computer then that's easy enough to do.
>
> **[0:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=58)** You can go to the Code menu here and you can clone the repository or you can download a ZIP file and then use your favorite code editor to work on them.
>
> **[1:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=69)** You'll just need to make sure that you have .NET installed on your computer.
>
> **[1:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=72)** At least version seven in order to use the examples.
>
> **[1:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=75)** But this repository has also been set up with a GitHub Codespace.
>
> **[1:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=79)** So, you can just work directly online with nothing to install.
>
> **[1:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=84)** All you need to do is fork a copy of the repository in your own GitHub account and then fire up a Codespace.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=90)** And you do that by going here to the Code menu clicking on the [[Codespaces]] tab and then clicking on this + button.
>
> **[1:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=97)** Now you can see I've already done that, right?
>
> **[1:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=99)** I've already created this Codespace for myself and this is the Codespace I'm going to be using in this course.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=104)** Now, either way works fine.
>
> **[1:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=105)** You can download the files locally or you can use the Codespace, but I'm going to be using the Codespace feature in this course.
>
> **[1:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=112)** So let me go ahead and open up this Codespace.
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=115)** And when the Codespace starts on your computer it may take a minute or two to spin up.
>
> **[2:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=120)** So you just need to be patient.
>
> **[2:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=121)** And when the code space starts you'll see a browser based version of Visual Studio code and here in the files list are all the files that you'll need for the course.
>
> **[2:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=131)** You'll also have a built-in terminal which can be found here in the view menu.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=137)** You can see down here I can choose terminal, all right.
>
> **[2:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=141)** or, to get the terminal using a keyboard shortcut.
>
> **[2:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=143)** I type control + ` And you can see that that causes the terminal to appear and disappear.
>
> **[2:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=150)** And I'm going to check to make sure that .NET is installed and everything is great.
>
> **[2:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=154)** So I'll type dotnet --version and sure enough, I've got 7.0 on my machine.
>
> **[2:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=161)** You may also want to make sure that the C# extension is installed.
>
> **[2:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=166)** If you click on this icon here in the sidebar, you'll see that I've got a list of installed extensions.
>
> **[2:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=171)** Now VS code will probably prompt you to install this extension if it isn't already, but if it's not installed and if VS code doesn't prompt you you can just go to the marketplace.
>
> **[3:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=183)** If you go to the search box up here and type in C# you'll see that that takes you to the marketplace.
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=188)** And right here you can see I've got the C# extension and you can install it from here.
>
> **[3:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/getting-set-up?u=76281980&t=193)** So once you've got your Codespace set up and the C# extension is installed then you are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Codespaces]] (1)
> **Tools:** terminal (4), github (3), vs code (2), visual studio (1)
> **Prerequisites:** set up (3), install (3), you'll need (1)
> **CLI Commands:** make (3), find (1), dotnet (1)
> **UI Navigation:** go to (3), click on (1), in the sidebar (1)
> **Env Vars:** net (3), zip (1)
> **Exercise Files:** download the (2), zip file (1)
> **Versions:** 7.0 (1)


### 1. C# Object-Oriented Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining classes](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=0)** - [Instructor] In this chapter, we're going to review some of the basics of [[Object-Oriented Programming (OOP)|object-oriented programming]] as they apply to C#.
>
> **[0:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=7)** If you're already familiar with the basic concepts of object-oriented programming in C# and .NET, then you can feel free to skip over or skim this chapter or come back to it as you need to if you want a refresher.
>
> **[0:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=20)** We're going to start by reviewing how to create classes and objects in C#.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=25)** So here in my editor I'm going to open up in the Start folder in chapter one, I'm going to open up the code in my Defining Classes folder.
>
> **[0:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=35)** So let's go ahead and open up my shapes.cs file.
>
> **[0:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=39)** So to define a class, we're going to use the class keyword.
>
> **[0:43](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=43)** So I'm going to create a class that will represent a rectangle.
>
> **[0:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=49)** All right, and I'll put this closing bracket down here.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=56)** All right, so to define a class, we use the class keyword.
>
> **[0:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=59)** And typically when you define a class in C#, you will also create what is called a constructor function for that class.
>
> **[1:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=67)** It uses the same name as the class itself and can accept zero or more parameters and is usually used to initialize the state of the object when it is created.
>
> **[1:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=78)** So I will define a constructor for this class that takes two arguments or parameters for the width and the height.
>
> **[1:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=86)** So this is going to be my rectangle and it's going to take integer for the width and an integer for the height.
>
> **[1:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=97)** And I'll also add two integer member variables to my class to hold that data and I'll put those down here.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=104)** So I'll have a public int width, and I'll also have one for height.
>
> **[1:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=114)** And we're going to learn more about member variables and properties later in the chapter, but for now, you just need to understand that a class can define variables that go along with each instance of the object that gets created.
>
> **[2:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=127)** So in the constructor, I will initialize those two members.
>
> **[2:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=130)** So width will be equal to W, and height will be equal to H.
>
> **[2:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=136)** The constructor, by the way, is not required.
>
> **[2:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=138)** If you don't define one, then the C# compiler will create a default constructor for you.
>
> **[2:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=146)** And I can also define more than one version of the constructor.
>
> **[2:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=150)** So for example, a square is just a special case of a rectangle where all sides are of equal length.
>
> **[2:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=158)** So I can define another constructor and I'll call this one once again Rectangle.
>
> **[2:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=165)** And this version will only take one argument called side.
>
> **[2:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=173)** And I'll just set both values, width and height, equal to the side parameter.
>
> **[3:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=182)** And you've probably noticed by now that I'm using this keyword public when I define my functions and my variables.
>
> **[3:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=190)** This is something we'll also examine more later on in the chapter.
>
> **[3:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=194)** But for now, all you need to know is that when I declare these functions, I have to make them public so that I can access them from outside the code that is defined within the class itself, but we'll cover that a little bit more later.
>
> **[3:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=208)** And then finally, let's add something useful to the class to make it do something.
>
> **[3:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=213)** I'm going to add a function called GetArea to return the area of the rectangle.
>
> **[3:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=219)** And I'll make that a public function that returns an int and it's going to be called GetArea and it's simply going to return the width times the height.
>
> **[3:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=234)** All right, so now we have a class that we can use to create objects and it actually does something useful.
>
> **[4:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=241)** So let's go over to the program code.
>
> **[4:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=244)** So I'm going to save this and then open up my program.cs file.
>
> **[4:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=248)** And let's write some code to create a couple of rectangles.
>
> **[4:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=252)** So I'll write the class type and rect1 and I'm going to use the new operator to create a new rectangle, and that one's going to have a width and a height of 10 and 20.
>
> **[4:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=267)** And then I'll make another one called rect2 and I'll use the second constructor to make a square with size equal to 30.
>
> **[4:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=280)** And then let's also exercise the GetArea function.
>
> **[4:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=287)** So we'll write out to the console, rect1.GetArea, and we'll make a copy of that.
>
> **[4:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=298)** And we'll do the same thing with rect2.
>
> **[5:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=302)** All right, so now we're in a position where we can exercise the code.
>
> **[5:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=305)** What I'm going to do is right-click on DefineClasses and choose Open In Integrated Terminal.
>
> **[5:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=311)** And that will bring up my built-in terminal here in Visual Studio Code.
>
> **[5:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=315)** And then I can just type dotnet run and that will run my examples.
>
> **[5:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=324)** And you can see in the output that we have the area of each rectangle.
>
> **[5:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=330)** So the first one is area 200 and the second one is area of 900.
>
> **[5:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=335)** All right, so let's go ahead and just change the values of the width and height.
>
> **[5:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=339)** So for rect2, I'll change the width to five and rect2's height is going to be seven.
>
> **[5:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=350)** And then let's just go ahead and write the area out again.
>
> **[5:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=354)** And when I run again, now you can see that the area of rect2 has changed.
>
> **[6:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=362)** It started out as 900, now it's down to 35, right?
>
> **[6:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=365)** So let's quickly try something else.
>
> **[6:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=367)** Let's see why that public keyword is important.
>
> **[6:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=371)** What I'm going to do is go back to my shapes code and I'm going to scroll down and I'm going to remove public from these two variable declarations and then I'll try to run my code again, all right?
>
> **[6:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=385)** And when I try to do this, so if I do dotnet run again, you'll see that I'm getting an error because if you don't explicitly declare the access type of a function or a member variable, they default to being private to the class and are not accessible outside the code that is within the class definition.
>
> **[6:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=410)** So by making, let's go back to my shapes code, so by making these private, right?
>
> **[6:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=415)** I could also just simply declare them as private which we'll learn more about later, but if I don't put any descriptor on here which indicates their access level, they default to being private.
>
> **[7:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=425)** So to make sure that I can access them from outside the class code, I have to put public here and when I do that, all right, so let's try one more time.
>
> **[7:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=438)** And now you can see that the error is fixed.
>
> **[7:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=440)** And again, we're going to learn more about that later in the chapter.
>
> **[7:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-classes?u=76281980&t=443)** But this short sample summarizes how to define and instantiate a class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2)
> **CLI Commands:** make (7), dotnet (2)
> **Cross-References:** later in (2), go back to (2)
> **Tools:** terminal (2), visual studio (1)
> **UI Navigation:** right-click (1), scroll down (1)
> **Env Vars:** net (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)

#### [Properties](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=0)** - [Instructor] Let's continue our review of C# objects by taking a look at defining properties.
>
> **[0:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=6)** Now, an important part of class definition is that classes need to be able to perform various types of logic and expose data.
>
> **[0:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=13)** Otherwise, you know, they're not very useful.
>
> **[0:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=15)** In C#, we use properties and methods to accomplish this.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=19)** And the [[Microsoft Word|word]] method is a fancy object-oriented way of referring to a function that's part of a class.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=25)** In fact, we've already seen how to define and use a method in the previous example where we created a function named get area to calculate the area of a rectangle.
>
> **[0:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=36)** So let's use that as our starting point for this example.
>
> **[0:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=39)** And here in my props and methods folder, I'll open up the shapes code and my program code.
>
> **[0:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=45)** And then I'm just going to click on this icon to give us some more room to work.
>
> **[0:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=49)** So let's update our example to use properties along with the method that we already have.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=56)** In addition to methods, C# classes can define properties which give us some flexibility in how we expose data from our class.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=65)** Properties serve as a way to expose a class's data without exposing internal implementation details.
>
> **[1:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=73)** So let's update our class to use properties for the height and width variables instead of just having public members exposed like we had in the previous example.
>
> **[1:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=86)** So you can see I've removed the public definitions from the members and I'm going to add the code for the properties.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=94)** Now, there's a couple of ways to create properties.
>
> **[1:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=97)** They can represent internal variables or they can be what's called auto implemented.
>
> **[1:43](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=103)** So for the height and the width, I'll define two properties and I'll make those public.
>
> **[1:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=108)** And one will be called width and one will be called height.
>
> **[2:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=120)** And you can see that it's almost like defining a function except that there's no parentheses and no parameters here.
>
> **[2:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=126)** So inside each of these definitions I'm going to add a getter and a setter which are responsible for connecting that property to what's called the backing field, which in this case are these two member variables I've added down here.
>
> **[2:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=140)** So I'm going to define the getter.
>
> **[2:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=146)** So to get the property, I'm going to return my internal width member.
>
> **[2:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=151)** And for set, I'm going to write width is equal to, and then there's this special argument called value that gets passed in whenever you set a property.
>
> **[2:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=161)** And then I'll do the same thing for height.
>
> **[2:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=164)** I'm going to have my getter and I'm going to return the height.
>
> **[2:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=169)** And then for the setter, I'm actually going to implement some logic here.
>
> **[2:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=174)** So what I'm going to write is if value is less than zero, I'm going to throw an exception.
>
> **[3:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=183)** I'm going to throw a new argument out of range exception and that's going to be the height property.
>
> **[3:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=191)** And the message is going to be it must be greater than or equal to zero.
>
> **[3:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=200)** Otherwise, I'll just simply set height equal to value.
>
> **[3:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=203)** And this is one of the nice things about properties is that you can use properties to implement some error checking logic whenever they get set.
>
> **[3:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=209)** So now these two properties are exposed to consumers of my class but the internal representation is kept separate.
>
> **[3:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=216)** I can change the names of these internal variables now and external classes don't have to worry about that because they're not consuming them directly.
>
> **[3:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=226)** They're simply consuming the name of my public properties.
>
> **[3:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=229)** Let's also add an auto implemented property to hold the border size of the rectangle.
>
> **[3:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=236)** So I'll make a public int and I'll call this one border size.
>
> **[4:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=241)** And inside the implementation, I'm simply going to write get, and set.
>
> **[4:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=247)** And outside the implementation, I'm going to write equals one.
>
> **[4:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=251)** So in this case, I don't define an internal field for this particular piece of data.
>
> **[4:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=257)** The C# compiler just automatically creates one for me.
>
> **[4:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=261)** So in this case, I've got width and height which represent these two properties.
>
> **[4:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=266)** But in the case of border size, I can just use border size directly without having to define an internal member.
>
> **[4:32](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=272)** Right?
>
> **[4:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=273)** So now let's go back to our program file and let's operate on our new properties.
>
> **[4:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=279)** So for rect1, I'm going to write border size is equal to five, and then we'll just simply print that out
>
> **[4:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=293)** and we'll print out rect1.BorderSize,
>
> **[5:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=302)** and then we'll change the other properties.
>
> **[5:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=305)** We'll change the width to five, and we'll change the height to six.
>
> **[5:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=315)** And then we'll call get area again.
>
> **[5:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=322)** All right, so let's go ahead and try running this.
>
> **[5:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=325)** Let's open this up in the terminal and we'll do dotnet run.
>
> **[5:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=334)** And in the output you can see that our code is now using the publicly exposed properties.
>
> **[5:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=339)** So here's the border size of five, and here's the new updated area of 30, right?
>
> **[5:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=345)** So let's try setting the height to a negative value and we'll see that our code catches that.
>
> **[5:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=355)** So I'm going to make this negative 30.
>
> **[5:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=358)** Now, I'll try to run again.
>
> **[6:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=361)** Right, and sure enough, you can see that when I try to run the code, we're getting this argument out of range exception, and it says must be greater than or equal to zero for the parameter of height, right?
>
> **[6:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/properties?u=76281980&t=375)** So properties are really useful for giving your classes flexibility in how they allow other code to work with the internal data of your class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (3), dotnet (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Inheritance](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=0)** - [Instructor] One of the foundations of [[Object-Oriented Programming (OOP)|object-oriented programming]] is the concept of inheritance.
>
> **[0:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=5)** And this is the process of defining classes that inherit their properties and methods from parent classes, so that you can reuse and customize the features and logic that they already have, without having to duplicate a whole lot of code.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=19)** So here in chapter one, let's open up the inheritance folder.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=22)** And we'll open up our program file and the shapes.cs file.
>
> **[0:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=27)** So here in my example code, I have some classes that represent two dimensional shapes.
>
> **[0:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=33)** So at the top I've got Shape2D, which serves as the base class for the other shapes.
>
> **[0:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=39)** And there are two classes that derive from Shape2D, and they are circle and rectangle.
>
> **[0:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=46)** The definition for each of these indicates Shape2D as the super class from which they derive.
>
> **[0:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=53)** The circle has a radius value.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=56)** And the rectangle, if we scroll down, has a width and a height.
>
> **[1:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=61)** And I have some code in my main program that creates some shapes that we will use to exercise the classes.
>
> **[1:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=68)** All right, so let's go back to shapes.
>
> **[1:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=70)** In dotnet, every class automatically derives from the base object class.
>
> **[1:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=76)** And let's take a quick look at that here in the [[Microsoft]] documentation.
>
> **[1:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=80)** So if we scroll down a little bit and we get to the methods part.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=89)** So because every class in dotnet derives from object, they automatically inherit these methods.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=96)** And we're going to use the ToString method and the GetType method in our code.
>
> **[1:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=100)** So let's go back to the code.
>
> **[1:43](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=103)** So let's override the ToString method, to provide a string representation of the class.
>
> **[1:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=111)** So to do that, I'm going to write public and then I'm going to use the override keyword to indicate that I'm overriding ToString.
>
> **[2:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=120)** And that's going to return a string, and then I'll implement the ToString function.
>
> **[2:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=126)** And, I'm going to get rid of this verbose automatic stuff that Visual Studio Code puts in and just do a simple arrow operator to return a string.
>
> **[2:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=136)** And I'm going to return This object is a.
>
> **[2:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=143)** And I'm also going to use the GetType method, which we can use to get the type that is represented by the current class.
>
> **[2:32](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=152)** So in single quotes, I'm going to use my interpolated string to call the GetType function.
>
> **[2:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=162)** And put my semicolon on there.
>
> **[2:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=164)** All right, so let's add some code now to our main program, to exercise this.
>
> **[2:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=170)** And I'm going to write out to the console.
>
> **[2:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=177)** And we'll print out the circle.
>
> **[3:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=181)** And then we'll also print out the rectangle.
>
> **[3:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=184)** And because each of these classes now automatically inherit ToString from Shape2D, we should get a string representation of our class.
>
> **[3:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=194)** So let's bring this up in the terminal and we'll run the code.
>
> **[3:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=205)** And sure enough, in the output that you can see each object prints out its own class name.
>
> **[3:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=210)** We can also use what's called the is operator to determine whether a particular object is an instance of a particular type.
>
> **[3:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=219)** So once again, let's use Console.WriteLine, to write out whether or not a circle is a Shape2D object.
>
> **[3:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=234)** And let's copy and paste that.
>
> **[3:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=236)** And let's write out whether or not circle is a rectangle, which we know it isn't.
>
> **[4:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=244)** All right, so now let's go ahead and run this code.
>
> **[4:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=249)** All right, and we can see that yes, circle is a Shape2D, and no circle is not a rectangle.
>
> **[4:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=259)** And of course we can define our own methods that can be overridden by our derived classes.
>
> **[4:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=264)** So let's add a method to calculate the area of each shape.
>
> **[4:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=269)** So close this.
>
> **[4:32](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=272)** What I'm going to do is add a method and I'll make it public.
>
> **[4:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=278)** So to allow a method to be overwritten, I have to mark it as being virtual.
>
> **[4:43](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=283)** So I'm going to create a virtual method, that's going to return a floating point number.
>
> **[4:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=288)** And I'll call it GetArea.
>
> **[4:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=291)** And GetArea will simply return zero in the base class, because now it's going to be overridden by the subclasses.
>
> **[5:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=300)** So in Circle, let's go ahead and override that.
>
> **[5:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=304)** So, once again I have to use the override keyword.
>
> **[5:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=309)** And we'll override GetArea.
>
> **[5:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=312)** And we are going to return, in circle, the area is pi, which is 3.14, times the radius squared.
>
> **[5:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=326)** So we'll just multiply the radius by itself.
>
> **[5:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=331)** And then of course, in the rectangle we'll do something similar.
>
> **[5:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=342)** And we will return the width times the height.
>
> **[5:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=351)** All right and that should be all there is to it.
>
> **[5:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=354)** Oh, one more thing.
>
> **[5:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=355)** While we're here, let's go ahead and derive a new subclass from rectangle.
>
> **[6:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=360)** So a square for example, is basically a special case of a rectangle, in which all sides are the same size.
>
> **[6:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=366)** So I'll create a class named square and I'll derive that from rectangle.
>
> **[6:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=373)** And I'll define a constructor.
>
> **[6:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=378)** And Square is going to take an integer for one side, and then initialize the base class with that value twice, because you know I'm only going to provide one value to the square, but the rectangle is just going to have two sides of the same size.
>
> **[6:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=396)** And there's no need to override GetArea, right?
>
> **[6:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=399)** Because the base version of the rectangles works just fine.
>
> **[6:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=402)** In the case of the square, I'll just multiply the side by itself.
>
> **[6:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=405)** But I've already got that here in the rectangle class, so there's no need to override it.
>
> **[6:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=409)** So let's go back to the main code and exercise some of this.
>
> **[6:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=414)** So back here in the main code, let's just comment out the previous examples.
>
> **[6:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=419)** And I'll add a new Square.
>
> **[7:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=425)** And we'll make that size 10.
>
> **[7:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=429)** All right, let's go ahead and call GetArea on each one.
>
> **[7:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=434)** So we'll write out c.GetArea.
>
> **[7:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=442)** And then we'll do the same thing for the rectangle, so it's r, and then s for the square.
>
> **[7:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=450)** All right, let's go ahead and run that, to make sure that it works.
>
> **[7:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=462)** Yep sure enough, we've got the areas of each object.
>
> **[7:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=466)** Finally, let's try one more operation.
>
> **[7:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=469)** So because each of these classes, let me close the terminal, each of these classes derives from Shape2D.
>
> **[7:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=477)** What that means is I can substitute the classes anytime a method argument specifies the base classes type.
>
> **[8:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=483)** So for example, what I can do is write a function, I'm going to write a function called PrintArea.
>
> **[8:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=489)** And that's going to take a Shape2D as an argument.
>
> **[8:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=496)** And I'll just simply write out the area.
>
> **[8:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=499)** So we'll call WriteLine on the shapes.
>
> **[8:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=506)** Whoops, not curly brackets, I want curly braces, there we go.
>
> **[8:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=510)** Shape.GetArea.
>
> **[8:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=515)** All right, and now I can call this function with my other class types directly, because they all derive from Shape2D.
>
> **[8:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=524)** So I can just simply substitute each one of them for that argument.
>
> **[8:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=528)** So I can do something like PrintArea of the circle.
>
> **[8:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=534)** And let's do the same thing with the square and the rectangle.
>
> **[8:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=539)** And now we should get the same results for this batch of function calls and this batch of function calls here.
>
> **[9:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=545)** So one more time, let's bring up our terminal and run it.
>
> **[9:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/inheritance?u=76281980&t=555)** And sure enough, you can see that the answers are the same in both cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Microsoft]] (1)
> **CLI Commands:** make (3), dotnet (2)
> **Tools:** terminal (3), visual studio (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll down (2)
> **Analogies:** for example (2)
> **Versions:** 3.14 (1)

#### [Access modifiers](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=0)** - [Instructor] When you create a class in C#, all of the members of that class have a specific level of accessibility by other parts of your code.
>
> **[0:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=9)** So, it's important to understand how this works.
>
> **[0:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=12)** So let's open the code for this example in our AccessModifiers folder.
>
> **[0:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=16)** I'll open up the program, and I'll open up the Modifiers.cs file.
>
> **[0:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=23)** So I have a class defined, and each item in the class has an access modifier as part of its definition.
>
> **[0:32](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=32)** The "public" keyword means that that particular member can be accessed from any other part of your program's code.
>
> **[0:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=40)** So this class has three public items: The constructor, which is usually public, because classes are often created by other parts of the program.
>
> **[0:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=49)** This function right here, Func1, and then there's a property, if we look down here, this data property is also defined as public.
>
> **[0:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=58)** Properties are usually used to expose internal data, so again, they're also often declared as public.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=65)** The "protected" modifier is used to define a class member that can only be accessed by the class itself or a subclass of that class.
>
> **[1:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=76)** So this function, Func2, can only be called within either this code, MyClass or my DerivedClass.
>
> **[1:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=87)** And then there's a private modifier.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=89)** The private modifier causes the member to only be accessible within the class definition itself.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=96)** So in this class, I have a private field that is accessed by the public data property which hides the implementation from the outside world.
>
> **[1:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=106)** The DerivedClass has a single function, Func3, which is also public.
>
> **[1:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=113)** So let's take a look at the logic.
>
> **[1:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=116)** If we look at what Func1 does, okay, Func1 increments the private integer value.
>
> **[2:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=123)** Func2, decrements this value.
>
> **[2:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=126)** And if we look down here in the DerivedClass, Func3, for the moment, just simply writes out that we're calling Func3.
>
> **[2:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=136)** And the other functions do the same thing, they have a WriteLine in them that prints out that they're being called.
>
> **[2:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=141)** So, let's exercise our code for a bit.
>
> **[2:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=144)** In my main program, I have some code that creates an instance of class1 and class2, so MyClass and the DerivedClass.
>
> **[2:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=154)** And it prints the value of the data property before and after making some function calls, right?
>
> **[2:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=161)** So here, we write out the data property, call Func1 a couple times, and then run out the data property again, and then we do the same thing with class2.
>
> **[2:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=170)** So let's run the starting point of the code just as it is right now and we'll see what happens.
>
> **[2:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=176)** So let's open this up in the terminal, and let's run it.
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=188)** So in the first case, the two calls to Func1 increment the private data which brings it from 1 up to 3.
>
> **[3:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=197)** In the second case, Func3 doesn't do anything, so the value just goes from 1 to 2.
>
> **[3:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=203)** So if I go back to the code, let's move this down a little bit.
>
> **[3:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=206)** If I go back to the code and I try to call Func2 from the main program, right, so up here, if I write class1.Func2, okay, you can see that there's an error here, right, and it says "Func2 is inaccessible due to its protection level."
>
> **[3:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=230)** So I'm already, without even trying to compile, I'm already getting an error indication in VS Code.
>
> **[3:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=236)** But if I try to run this, if I go down to my terminal again and try to run, you'll see that in fact, I do get a compile error.
>
> **[4:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=246)** And I'm getting that error because I'm trying to access the code from outside the class.
>
> **[4:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=251)** Similarly, I can't access the private integer field from the DerivedClass.
>
> **[4:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=257)** So let me delete that.
>
> **[4:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=260)** And let's go back to Modifiers, and inside the DerivedClass, if I try to write SomeValue++, right, once again, I'm getting an error indicated here and it says that it's inaccessible due to its protection level.
>
> **[4:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=280)** And if we scroll up, we can see it's because it's private.
>
> **[4:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=282)** So even though DerivedClass derives from MyClass, it can't see the private members, all right?
>
> **[4:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=288)** However, because Func2 is protected instead of private, I can actually call Func2 from here.
>
> **[4:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=297)** So, what I can do is tell the base class to call Func2.
>
> **[5:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=308)** And that works, right?
>
> **[5:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=309)** So now let's go ahead and run our code.
>
> **[5:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=311)** Again, you can see that there's no little red squiggly line.
>
> **[5:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=314)** So if we run this code again, now you can see that in the second example, right, the internal value goes from 1 back down to 1 again because Func2, if we look at the code, remember Func2 is decrementing the private internal field.
>
> **[5:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=334)** So access modifiers are intended to make your code easier to manage, especially for larger projects that have many people working in the same code base.
>
> **[5:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/access-modifiers?u=76281980&t=344)** By making use of them, you can enforce good design principles and keep internal implementation details separate from how your code is being consumed.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (3)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** open the (1), scroll up (1)
> **Definitions:** means that (1), defined as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Anonymous types](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=0)** - [Instructor] Some languages like [[JavaScript]] and [[Python (Programming Language)|Python]] make it really easy to define collections of names and values without first having to define an explicit type.
>
> **[0:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=9)** And C# also has this capability which we refer to as anonymous types.
>
> **[0:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=15)** You'll see these used in a variety of scenarios, usually with link or [[Language Integrated Query (LINQ)|language integrated query]], for example, but they can also just be a convenient way of having a collection of read-only properties.
>
> **[0:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=27)** So let's open up our code here in AnonTypes under the Chapter1 folder, and I'll open my program code.
>
> **[0:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=34)** Defining an anonymous type is achieved by using the "new" keyword and enclosing the data inside curly braces.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=41)** So in this case, I'll just create a variable called myobj, and then new, and then inside my curly braces, I can have my properties.
>
> **[0:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=50)** So I'll have name for example, and I'll just use my name.
>
> **[0:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=57)** And, oops, there we go.
>
> **[1:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=60)** And then your age, and then we can also nest these.
>
> **[1:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=66)** So for example, I can put another new anonymous type in here and have nested properties.
>
> **[1:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=74)** So this will be just some address information.
>
> **[1:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=80)** All right, and we'll put something else in here.
>
> **[1:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=86)** Okay, so the name of the type is dynamically generated by the compiler, and the compiler also infers the type of each property.
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=95)** So it'll assume that name is a string and age is an integer and address is and object and so on.
>
> **[1:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=101)** Anonymous types also override the ToString method of the base Object class and outputs the name of each property and value inside curly braces.
>
> **[1:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=112)** So let's try writing out the data to see how it looks like.
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=115)** And so I'll just write this out to the console and I'll do it a couple different ways.
>
> **[2:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=123)** First, I'll write out specific properties, so you can refer to these like any other object with properties on them.
>
> **[2:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=131)** So, I'll do my name, and then I'll do one of the nested ones, so myobj.Address.Street.
>
> **[2:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=140)** And then for the next example, I'll just... Oops, oops, there we go, I'll just write out the entire object.
>
> **[2:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=154)** So we can see how it looks.
>
> **[2:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=156)** All right, so let's go ahead and run that.
>
> **[2:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=160)** I'll bring this up in the terminal, and just run.
>
> **[2:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=169)** And when the code runs, you can see that in the first case, for this line, line 13, I'm outputting my name and address, and then line 14 just writes out the entire entire object, and you can see that it's enclosed, in curly braces, all of the properties and all of the values.
>
> **[3:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=185)** Anonymous types are read-only.
>
> **[3:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=187)** So if you try to modify a property, that's going to result in a compile error.
>
> **[3:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=190)** So let me uncomment this line, and you'll see that I'm already getting a little red underlined that says you can't change the data, so I'll just try to run it anyway.
>
> **[3:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=201)** And just for completeness, we can see that yeah, sure enough, I get a compile error because I can't change the value.
>
> **[3:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=208)** So let's go ahead and recomment this out.
>
> **[3:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=211)** The question then becomes, well, if you want to change values, what can you do?
>
> **[3:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=215)** What you need to do is use something called non-destructive mutation, and it looks something like this.
>
> **[3:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=220)** What I'm going to do is create a new object, so I'll... And what I'm going to write is myobj with, and then I'm going to specify the properties I want to change.
>
> **[3:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=233)** So in this case, I'll change the name to be Jane Doe, and then let's go ahead and write that back out again.
>
> **[4:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=243)** So now I'll just copy line 13, and paste it here, and use myobj2.
>
> **[4:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=251)** So I'm basically just creating a copy of the object and changing only the properties that I want to change.
>
> **[4:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=256)** So, let's go ahead and run this.
>
> **[4:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=265)** And now you can see that I've made a new copy of the object with all the other data is the same, but the name has now changed.
>
> **[4:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=271)** You can also check to see if an anonymous type contains a specific property by using the GetType method which is also inherited from the base Object class.
>
> **[4:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=282)** So let's comment this out, and let's comment out the previous example as well.
>
> **[4:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=292)** All right, so let's write out console.WriteLine.
>
> **[4:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=297)** What I'm going to do is write out myobj.
>
> **[5:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=304)** I'm going to call the GetType method.
>
> **[5:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=308)** That's going to return the type, that's also a class.
>
> **[5:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=311)** So I can then call on the GetType result, I can call GetProperty, and then the name of the property that I'm interested in.
>
> **[5:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=320)** So, in this case I'm interested in the Name property.
>
> **[5:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=325)** And then let's try it on a property that we know doesn't exist.
>
> **[5:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=329)** So I'll try calling this on the Job property, and if we look back up at the code, you can see that Name exists, but Job does not.
>
> **[5:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=338)** So, and then I'm going to check to make sure that the result is not equal to null.
>
> **[5:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=348)** So in the first case, this should be True, and then this one should be False.
>
> **[5:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=353)** So let's run our updated code, and oh, whoops, I have to enclose that in the curly braces to get... Here we go.
>
> **[6:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=368)** And we can see that, yes, the Name property exists, and no, the Job property does not exist.
>
> **[6:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/anonymous-types?u=76281980&t=373)** So if you find yourself in need of a temporary data structure just to hold some properties and values, then anonymous types might be what you're looking for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Python (Programming Language)|Python]] (1), [[Language Integrated Query (LINQ)|Language integrated query]] (1)
> **CLI Commands:** make (2), python (1), find (1)
> **Analogies:** for example (3)
> **Definitions:** is a  (1), is an  (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 2. Class Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [Using object initializers](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=0)** - [Instructor] One of the convenience features that C# provides is the ability to create and initialize objects without having to write a separate constructor statement followed by a lot of individual assignment statements.
>
> **[0:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=11)** So in our code here in the Object Initializers folder in chapter two, let's open up our program file and let's open up Initializers.cs.
>
> **[0:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=21)** So consider the code I have here in my Initializers file that defines a class hierarchy of pets with a pet-based class and then I've got two derived classes, Dog and Cat.
>
> **[0:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=34)** We have public properties for things like name and age and then IsTrained for dogs and IsDeclawed for cats.
>
> **[0:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=42)** And then in the main program, let's exercise some of this code.
>
> **[0:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=47)** I can create and initialize instances of these classes at the same time.
>
> **[0:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=52)** So what I'm going to do is make a new Dog object and it's going to be a new dog.
>
> **[0:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=59)** And what I'm going to do is inside curly braces just initialize each of those public properties directly by using their name and a value.
>
> **[1:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=67)** So for example, I'll have the dog's name be Fido and the age is going to be four and IsTrained will be true.
>
> **[1:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=78)** And then we'll make a cat and the cat's name will be Mr. Meowington and the age is going to be seven and IsDeclawed will be false.
>
> **[1:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=98)** All right, and then I can print out each one just to make sure that it worked.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=104)** So that's going to be the Dog object and we'll have dog.Name and dog.Age
>
> **[1:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=119)** and we'll copy and paste that and do the same thing for the cat.
>
> **[2:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=129)** Right.
>
> **[2:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=130)** Now obviously this only works for the properties and fields that are accessible to the code when the object is constructed.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=137)** And since my class has public properties, I can access all of them.
>
> **[2:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=141)** But remember what we learned about earlier when we covered access modifiers because those control what you can and can't initialize.
>
> **[2:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=149)** So if we go back to the Initializers, if this was, you know, private, for example, then I wouldn't be able to see the IsTrained property and I would not be able to initialize it.
>
> **[2:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=159)** All right, so let's go ahead and run what we have so far.
>
> **[2:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=168)** And oh, whoops.
>
> **[2:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=170)** I have to put the dollar sign outside the- There we go.
>
> **[2:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=177)** Okay, let's try that again.
>
> **[3:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=181)** There we go.
>
> **[3:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=181)** Okay, so as expected, we have two objects, one dog and one cat with the values properly initialized.
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=188)** And this also works on anonymous types which we learned about in the last chapter.
>
> **[3:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=193)** So for example, I can write something like var pet equals new.
>
> **[3:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=198)** And then, you know, name equals Charlie.
>
> **[3:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=204)** And, you know, age is five, right?
>
> **[3:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=209)** And then let's just do the same thing with our pet.
>
> **[3:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=211)** So I'll copy and paste this.
>
> **[3:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=218)** All right.
>
> **[3:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=220)** And let's run that one more time and we can see that that works as well, okay?
>
> **[3:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=226)** You can also initialize collections this way.
>
> **[3:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=229)** So let's use an array of integers as an example.
>
> **[3:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=233)** And what I'm going to do is comment out these previous examples so that we don't clog up the output.
>
> **[4:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=242)** So I'm going to create an array of integers called numbers and then to initialize that right alongside the declaration, I can just simply write new int, and then inside the curly braces, use the values that I want to have be in the array.
>
> **[4:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=259)** And then I'll just Console.WriteLine out and I'll just delete that and put in numbers.Length.
>
> **[4:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=270)** All right, so let's go ahead and try that.
>
> **[4:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=276)** And yes, we can see that there are six numbers in the array that I just defined.
>
> **[4:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=280)** So let's take another look at the pet classes.
>
> **[4:43](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=283)** Let's go ahead and close this terminal for now.
>
> **[4:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=286)** So let's scroll down to the bottom.
>
> **[4:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=289)** And you can see that there's a class here named PetOwner and it has a public name property, which is a string.
>
> **[4:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=296)** It also has a list collection that lists the pets owned by a particular person.
>
> **[5:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=303)** So let's write some code that initializes this class for a pet owner that has a few pets.
>
> **[5:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=309)** Let's go back to the program and I'm going to create a new instance of the PetOwner class.
>
> **[5:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=319)** So I'll create a new pet owner, and then inside the curly braces, I'll just set the name property and once again that'll be me.
>
> **[5:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=328)** And then I'm going to initialize the collection, the Pets collection.
>
> **[5:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=333)** That's going to be a new list of Pet, and inside that list I'm going to put a new Dog.
>
> **[5:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=344)** And the name is going to be Junebug and the age is going to be four.
>
> **[5:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=353)** And the new Cat name will be Whiskers and the age will be three.
>
> **[6:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=362)** And then finally another new Dog whose name will be Max and age will be 10.
>
> **[6:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=374)** And then let's write out the contents to make sure that it worked.
>
> **[6:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=381)** So we'll write out the owner's name so owner.Name and apostrophe S Pets.
>
> **[6:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=394)** And then I'm going to have a foreach loop.
>
> **[6:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=396)** And I'm going to loop over each pet in owner.Pets.
>
> **[6:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=406)** And we'll just simply print out, put out the name of each pet, and let's go ahead and comment out the integer example.
>
> **[7:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=423)** All right, so let's run our updated code.
>
> **[7:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=426)** Let's get that terminal back here again.
>
> **[7:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=431)** And, all right, and now we can see here's, sure enough, my list of pets.
>
> **[7:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=437)** We've got Junebug, Whiskers, and Max.
>
> **[7:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/using-object-initializers?u=76281980&t=440)** So object initializers lets you write more concise code that combines instantiating an object with the readability of initializing the object's values.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (6), make (4)
> **Cross-References:** go back to (2), we covered (1), in the last (1)
> **Analogies:** for example (3)
> **Tools:** terminal (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Read-only members](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=0)** - [Instructor] In some cases, you might want to prevent changes from being made to certain member fields in your classes, and you can accomplish this by using the readonly keyword.
>
> **[0:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=10)** So here in our ReadonlyProps folder in chapter two, let's open up our program code and let's open up our readonly example.
>
> **[0:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=18)** For this example, I have a class definition that represents a book.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=22)** It has an ISBN number, a title, and an author.
>
> **[0:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=27)** And I also have an update method that lets me change the values of these private class members here at the top of the code.
>
> **[0:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=37)** My main program creates a few instances of the class and then calls the update method to change the values.
>
> **[0:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=45)** So let's just run the code as it currently is.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=56)** And you can see that the values for the book1 are changed using the update method.
>
> **[1:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=63)** What I'd like to do is prevent the ISBN number from being changed.
>
> **[1:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=68)** So once you create the book record, I don't want ISBN number to be changed.
>
> **[1:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=71)** I want it to be initialized and then left alone from that point forward.
>
> **[1:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=75)** So to do that, I'm going to add the readonly keyword.
>
> **[1:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=79)** So let's go back up to here.
>
> **[1:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=81)** And in front of the declaration for my private member variable, I'm going to add readonly.
>
> **[1:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=91)** Okay.
>
> **[1:32](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=92)** So readonly fields can only be assigned values in certain conditions.
>
> **[1:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=97)** The first is, as you see here in the declaration, where it gets initialized to the empty string value.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=104)** It can also be set during the instance constructor of the class, like it is here.
>
> **[1:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=110)** And then the third place you can set a readonly field is in what's called a static constructor, which we will learn about later in the course.
>
> **[1:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=118)** So after I make this change, you can see now that the update method is going to produce a compiler error.
>
> **[2:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=124)** So you can see I'm getting this little red squiggle right here, and it says that a readonly field cannot be assigned to, except for the situations I just described.
>
> **[2:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=132)** So now I can't run my code.
>
> **[2:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=135)** I'll have to comment this line out in order to make the error go away.
>
> **[2:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=139)** And then once I do that, I'll be able to run the code again
>
> **[2:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=147)** and now everything's working again.
>
> **[2:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=149)** So you might be wondering what's the difference between a readonly field and a constant value?
>
> **[2:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=156)** Remember that constant values are only assigned once, at compile time, whereas readonly fields can be assigned both in the declaration, like you see here, and in the constructor.
>
> **[2:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=168)** And remember, your class might have more than one constructor, which means that your readonly field can be set to different values, depending on which constructor is used.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/read-only-members?u=76281980&t=178)** But once the value is set, it can't be changed afterward, and this helps enforce data immutability in your classes where you need it.

> [!info]- Semantic Content
>
> **Env Vars:** isbn (3)
> **CLI Commands:** make (2)
> **Cross-References:** later in (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Init-only properties](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=0)** - [Instructor] In a previous video we saw how to use the read-only keyword to prevent changes to member variables of a class after they had been initialized.
>
> **[0:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=10)** In some cases, you want to be able to do the same thing with properties.
>
> **[0:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=13)** That is create properties that can only be initialized with a value and then become read-only afterward.
>
> **[0:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=20)** This can be accomplished in C sharp using what are called nit only setters, which is a feature that was introduced back in version 9 of C sharp.
>
> **[0:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=29)** By using this feature, you can enforce immutability so that once the property value is set, it can't be changed again.
>
> **[0:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=36)** So here in our code for init props in chapter two let's open up our program code and let's open up our init example file.
>
> **[0:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=45)** Here in my example code I have a class that represents some employee data along with some program code that creates and exercises the employee class.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=56)** So each employee has an ID, a first and last name, and the department that they belong to, right?
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=65)** So ID, department, first and last name.
>
> **[1:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=67)** You can also see that the ID property is backed by a private data member here in the employee class.
>
> **[1:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=75)** Now, if I run the program exactly as it is right now, let's go ahead and open up our terminal.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=83)** So before changing anything, let's run the code.
>
> **[1:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=87)** And you can see that I can construct the employee objects with some initial data and I can make a change to the ID.
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=95)** So here, I've got my two employees and I create them and then change, in this case department and ID and then the last name and ID.
>
> **[1:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=105)** And sure enough we see those changes reflected in the output.
>
> **[1:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=109)** What I'd like to do, however is make the ID property in init only so that it can't be changed once it is assigned.
>
> **[1:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=117)** To do that, I need to use the init keyword instead of the set keyword in my property definition.
>
> **[2:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=123)** So let's go back to the code and scroll down to the ID property, and I'm going to change this from set to init.
>
> **[2:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=132)** So once I make this change, I'm now going to get a compile error if I try to run the code.
>
> **[2:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=139)** And that's because the lines where I change the ID are no longer valid.
>
> **[2:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=144)** And you can see that right here it says that the init only property or indexer employee ID can only be assigned in an object initializer or in a constructor.
>
> **[2:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=155)** So what we're going to do is change the code.
>
> **[2:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=162)** Oh, actually, before we change the code let me also show you one other thing.
>
> **[2:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=165)** Now that I've made this init only, I also can't change it in my own class, right?
>
> **[2:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=171)** So for example, if I were to put in another function, where should I do that?
>
> **[2:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=176)** Let's put it right here.
>
> **[2:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=177)** If I had define a function like public void change ID
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=186)** and I do something like ID equals new ID, that will also result in an error.
>
> **[3:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=192)** So if I try to compile, you can see that I'm getting an error on this line now as well.
>
> **[3:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=200)** So in fact, to make sure I'm really creating an immutable data field I can also add the read only modifier that we learned about earlier to my internal private field definition.
>
> **[3:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=213)** So let's scroll back up to the top and make this private read only int ID.
>
> **[3:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=222)** Now I have a data property that can only be initialized and not changed afterward.
>
> **[3:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=227)** So let's go back to the program code and let's comment out the places where we're changing the ID and let's also go back and remove that broken function that I added.
>
> **[4:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=244)** All right.
>
> **[4:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=248)** And now we can try to run our code again.
>
> **[4:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=253)** And you can see that when I run the code now the ID can no longer be changed.
>
> **[4:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=258)** So I have a data property now that can only be initialized.
>
> **[4:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/init-only-properties?u=76281980&t=261)** And this is really useful for cases where you want to enforce immutability on certain parts of your class while allowing other properties to be changed.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Cross-References:** go back to (2), previous video (1)
> **Versions:** version 9 (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Required properties](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=0)** - [Instructor] If you define classes that provide public properties, there are probably going to be times when you want consumers of your class to be required to initialize some of them.
>
> **[0:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=10)** So starting in C Sharp 11, this became possible by using the required modifier and we're going to see how it works in this example.
>
> **[0:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=18)** Here in our required props folder, let's open up the program code as well as requiredexample.cs.
>
> **[0:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=26)** So in my code here, I have a class that represents some employee information.
>
> **[0:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=30)** I have a default constructor and some public properties which allows the class to be instantiated using object initializers, which we learned about earlier.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=41)** And in fact, if you look at the program code, you'll see that there are a few instances of employees being created using the object initializer syntax.
>
> **[0:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=51)** Suppose however, we wanted to make sure that certain properties were set whenever an employee object was constructed in this way.
>
> **[1:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=60)** To do that, we can add the required modifier to the definition of the property in the class.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=65)** So for this example, let's make the ID and last name properties required and we can leave first name and department as optional during construction.
>
> **[1:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=75)** So let's go to our code.
>
> **[1:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=78)** And in my class definition, I'll make ID required and I'll also make last name required and we'll leave department and first name alone.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=89)** So let's also modify our program code to leave off the last name and ID of this first one right here.
>
> **[1:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=101)** All right.
>
> **[1:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=102)** And now when I try to run my code, you can see
>
> **[1:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=112)** that I'm getting a compiled error saying that employee ID and last name must be set in the object initializer.
>
> **[2:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=120)** So now I've effectively defined my class so that certain properties are required to be initialized when the object is constructed.
>
> **[2:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=129)** So let's go back and fix this problem, right?
>
> **[2:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=133)** Put last name and ID back in.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=137)** And let's go ahead and take first name off of this one and then let's try to run again.
>
> **[2:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=148)** And now you can see that my program succeeds because ID and last name are given in all cases.
>
> **[2:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=155)** And in the first case, we just have a missing first name.
>
> **[2:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=158)** But what about the case of creating an object using a constructor?
>
> **[2:43](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=163)** Suppose I added a constructor that creates an employee object and in fact, let me go back to the code.
>
> **[2:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=170)** Alright, let's undo that last change.
>
> **[2:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=173)** Let's go back to my code here in required sample.
>
> **[2:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=176)** And I'm going to uncomment this constructor right here.
>
> **[2:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=179)** So in this case, I have a constructor that takes the values for constructing an object and bypasses the object initializers syntax.
>
> **[3:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=189)** And then back in my program file, I'm going to add some code that does that.
>
> **[3:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=194)** So I'll have employee emp4, and in this case I'll use that employee constructor and I'll give a name and my ID will be 4 and put that in marketing.
>
> **[3:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=215)** Okay, so now I'm creating an employee without using the object initializer syntax.
>
> **[3:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=221)** But remember, I want ID and last name to be required.
>
> **[3:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=224)** So let's see what happens.
>
> **[3:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=228)** I'm going to run my code again, and when I run the code, you can see that I'm getting a compiler error indicating that the required properties need to be set even though I'm doing that in the constructor.
>
> **[4:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=241)** The reason this happens is because the C Sharp compiler doesn't check the constructor to see if the properties are indeed set because it allows developers to pass that responsibility onto class consumers and derived classes in order to avoid duplicating a lot of boilerplate code.
>
> **[4:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=260)** Now this isn't a big problem in a single class example like this one where you know, I'm just setting these properties in my constructor.
>
> **[4:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=268)** But in a complex class hierarchy, this can lead to a lot of code duplication or you might be inheriting from a base class that you don't control and it has a list of required parameters that is just invalid for your use case.
>
> **[4:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=282)** So what I need here is the ability to let the compiler know that I've taken care of things.
>
> **[4:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=287)** And to do that, I can use the sets required members attribute.
>
> **[4:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=291)** So what I'm going to do is up here at the top of my file, I'm going to add using System.Diagnostics.CodeAnalysis
>
> **[5:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=311)** and then I'm going to put an attribute in front of this constructor called SetsRequiredMembers.
>
> **[5:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=320)** Now, it's important to understand that this does not actually enforce that the properties are set, it just disables the compiler check for this constructor.
>
> **[5:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=330)** So it's up to you to make sure that the required properties are in fact being set.
>
> **[5:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=336)** But now that I've added this attribute, let's go back to the terminal.
>
> **[5:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=341)** So we'll bring this back up and let's clear and try this again.
>
> **[5:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=348)** And now you can see that my code is working again, now that I've added this sets required members attribute.
>
> **[5:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=354)** This is basically intended as an escape hatch for when you are inheriting from a class that you have no control over and can't change the code.
>
> **[6:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=365)** Or when you are building a class hierarchy that's kind of complex and you don't want to have to duplicate a whole bunch of boilerplate code.
>
> **[6:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=374)** So use this very carefully and only if you have to. Alright?
>
> **[6:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=380)** By adding the required modifier to your properties, you can ensure that your consumers of your class will set them when they create instances of the class.
>
> **[6:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/required-properties?u=76281980&t=386)** And by using this sets required attribute members, you can also inform the compiler that your constructor is doing its job.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Cross-References:** go back to (3)
> **Exercise Files:** boilerplate (2)
> **Prerequisites:** required to (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Build an employee class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=0)** - [Instructor] Let's take a moment here to practice a coding challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=8)** For this challenge, you're going to take what you've learned so far and build a class structure to represent employee information for a business.
>
> **[0:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=16)** There will be two kinds of employees, hourly and salaried.
>
> **[0:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=21)** The data that will be common to both types will be the employee ID, the department they work in, their full name as one string, and there will be a method named AdjustPay that will increase their pay by a certain percentage amount.
>
> **[0:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=36)** Note that the ID, full name and department are all required.
>
> **[0:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=42)** Hourly employees will have a decimal property named PayRate, and salaried employees will also have a decimal property named Salary.
>
> **[0:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=52)** For this challenge, you'll need to use what you've covered so far in this course.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=56)** You'll need to think about how to use inheritance to separate the common employee attributes from the specific hourly and salaried ones.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=65)** Use automatic properties to represent the data fields for each class.
>
> **[1:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=70)** Instead of passing parameters to the constructor, use the object initializer syntax that we've learned about earlier.
>
> **[1:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=77)** The ID property should be required and init only to prevent it from being changed.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=83)** Departments in full name are also required, but modifiable.
>
> **[1:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=87)** The adjust pay method should increase the employee pay by a certain percentage amount.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=94)** I've provided a starting point for your own code along with some code in the main program to test the result.
>
> **[1:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=99)** So here in the challenge folder, you'll see that there's some test code here in the program file, and I've given you a starting point for you to define your own class hierarchy.
>
> **[1:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=110)** So feel free to be creative and have fun with this challenge.
>
> **[1:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=112)** There's no right or wrong answer to worry about.
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=115)** I'll be back in the next video to review my solution and you can compare it with your own.
>
> **[1:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=119)** And before we go, I'm going to go ahead and run my finished version of the challenge so you can see what the output should look like.
>
> **[2:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=127)** So let's go ahead and run this, and this is what your code should look like when you run it.
>
> **[2:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-build-an-employee-class?u=76281980&t=135)** So go ahead, try the challenge and I'll be back in a bit.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Build an employee class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=0)** - [Instructor] Let's review my code for this challenge.
>
> **[0:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=7)** Remember that we needed to create a class hierarchy to represent different types of employees and that there were certain rules we needed to follow.
>
> **[0:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=15)** So let's go ahead and open up my solution code.
>
> **[0:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=18)** In my code, I have a base class named employee that groups together the attributes that are common to both hourly and salaried employees.
>
> **[0:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=27)** There are three properties, ID department and full name, and they're all marked as required.
>
> **[0:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=35)** And ID is init only to prevent it from being changed after it has been assigned.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=41)** The adjust pay method takes a percentage to increase the pay of the given employee.
>
> **[0:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=48)** There are two subclasses, hourly and salary employee, and you can see that hourly runs have a pay rate property which is a decimal property that could be get and set along with an override of the adjust pay method.
>
> **[1:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=66)** Salaried ones are similar except they have a salary property instead of the pay rate.
>
> **[1:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=73)** And when I run my code, so let's go ahead and bring this, this is the test code.
>
> **[1:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=77)** Let's go ahead and open this up in the terminal.
>
> **[1:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=86)** You can see the output here.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=89)** And for example, you can see I can't change the ID of an employee.
>
> **[1:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=93)** So if I try to say, you know, Emp1.ID is equal to you know, a thousand or a hundred, whatever, all right?
>
> **[1:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=102)** That's going to give me an error when I try to run this.
>
> **[1:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=110)** So you can see here the employee can only be assigned in an object initializer, so we know that that works.
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=115)** All right?
>
> **[1:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=116)** And I also can't leave out one of the required fields.
>
> **[2:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=121)** So if I take full name off of this one and try to run again, once again, I get a compiler.
>
> **[2:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=132)** So how does my solution compare to yours?
>
> **[2:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=136)** Remember, it's not important that your solution match mine exactly.
>
> **[2:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=139)** There's usually multiple ways of solving programming problems.
>
> **[2:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-build-an-employee-class?u=76281980&t=143)** So I suggest taking a few moments here and comparing your solution with mine and learning from the differences.

> [!info]- Semantic Content
>
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Static Classes and Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Static members](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=0)** - In this chapter we're going to learn about static members and static classes.
>
> **[0:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=4)** And we'll start by looking at static members and how they're used.
>
> **[0:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=8)** When you declare a class, you usually specify instance members like methods and properties that will operate on a specific instance of that class.
>
> **[0:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=17)** Then when you create instances of that class, you can access the members of each of those instances.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=25)** Static members work a little bit differently.
>
> **[0:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=28)** You declare a static member by using the static keyword or a constant value by using const.
>
> **[0:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=35)** Static members are used to perform operations or hold values that are shared by all the instances of the class.
>
> **[0:43](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=43)** They're accessed by using the name of the class and they don't apply to any single instance.
>
> **[0:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=50)** In this case, we have a constant value for our temperature class that defines the freezing point in Celsius.
>
> **[0:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=57)** It wouldn't make sense to have this value duplicated for every instance, because it never changes.
>
> **[1:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=62)** So by declaring it as a const, we only need to have one copy of it.
>
> **[1:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=67)** The isFreezing method is declared static.
>
> **[1:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=69)** So again, it is common to all instances and is accessed using the class name.
>
> **[1:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=75)** It takes a value and determines whether that temperature is at or below the freezing point of water.
>
> **[1:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=81)** And again, it wouldn't make sense to have this method be duplicated across all instances of the class, because the logic doesn't change based on the class.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=90)** So let's practice this ourselves in the code.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=94)** So here in our example code in StaticMethods in chapter three, let's open our program file and our StaticMethods.cs file.
>
> **[1:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=102)** In this example, I have a class that represents a temperature, and I have two constants that define the upper and lower boundaries for room temperature.
>
> **[1:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=112)** There's also a public property that holds the temperature value for this instance, and there's a function to determine whether this instance is room temperature or not.
>
> **[2:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=123)** And we'll come back to this in a little bit.
>
> **[2:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=125)** In my main program, I have some code that creates some sample temperature data, which we'll use in a few moments.
>
> **[2:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=135)** For now, let's add a couple of static functions that convert between Celsius and Fahrenheit temperatures.
>
> **[2:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=142)** So I'm going to go to my StaticMethods class here, and I'm going to add two functions.
>
> **[2:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=148)** One will be a static function that returns a double, and we'll call that one fToC.
>
> **[2:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=155)** And it will take a double value that will be a Fahrenheit temperature.
>
> **[2:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=162)** And the formula for this is, well, first we're going to return a Celsius temperature.
>
> **[2:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=170)** And the formula is that first, we subtract off 32 and then we multiply that value by 5/9, and then we'll return CTemp.
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=186)** And then let's do the same thing for the Celsius to Fahrenheit conversion.
>
> **[3:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=195)** And that's going to take a Celsius temperature and return a Fahrenheit temperature.
>
> **[3:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=204)** All right, so, I need to have my semicolon there, all right, so the formula in this case is that we multiply CTemp times 9/5
>
> **[3:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=222)** and then we add 32.
>
> **[3:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=228)** All right, so now we've got our formulas in place, let's go over to the main program and exercise this code.
>
> **[3:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=236)** So let's go ahead and writeLine that out, and we'll call temperature.
>
> **[4:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=249)** We'll exercise fToC first on 72 degrees Fahrenheit.
>
> **[4:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=253)** And we'll format that with two decimal places.
>
> **[4:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=257)** And then we'll add one to call cToF, and we'll give that 22 degrees Celsius.
>
> **[4:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=267)** All right, so let's go ahead and run our code.
>
> **[4:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=270)** So let's open up the terminal, and let's run.
>
> **[4:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=279)** And when we run this, we can see in the output that 72 degrees Fahrenheit is about 22.22 Celsius.
>
> **[4:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=287)** And 22 degrees Celsius is about 71.6 Fahrenheit.
>
> **[4:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=292)** Okay, so let's keep on going.
>
> **[4:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=296)** You can also override non-static members with a static member.
>
> **[5:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=301)** So let's see how that works.
>
> **[5:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=304)** Back here in my StaticMethods code, you can see that I've got my instance version of isRoomTemp.
>
> **[5:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=313)** What I'm going to do is override isRoomTemp and add a static version of it.
>
> **[5:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=321)** So this will be a public static bool isRoomTemp, and that's going to take a value and return whether the temperature is greater than or equal to the lower boundary and it's less than or equal to the upper boundary.
>
> **[5:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=347)** And then back in the main code, let's go ahead and comment out our previous example.
>
> **[5:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=355)** All right, I have a loop here which I will uncomment.
>
> **[6:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=361)** So this is going to count the number of temperature readings in my sample temperatures that I've created up here at the top.
>
> **[6:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=369)** It's going to count the number of those that are is room temperature, in other words, if isRoomTemp True, then we count the number of room temperatures.
>
> **[6:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=378)** And then let's also uncomment the next two lines that access the constant values and output the room temperature count.
>
> **[6:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=388)** And then let's add two more statements that use the new static version of isRoomTemp that we just created.
>
> **[6:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=395)** So we'll write out, we'll call Temperature.isRoomTemp, and we'll see if 22 degrees Celsius is room temp.
>
> **[6:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=412)** And then we'll call the same thing again.
>
> **[6:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=414)** And this time we'll pass 17.
>
> **[6:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=416)** So the first one should be room temperature.
>
> **[6:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=418)** The second one is not.
>
> **[7:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=421)** So if we look up here in the sample data, you'll see that there should be about four instances that fall within the room temperature band.
>
> **[7:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=429)** So the answer there should be four.
>
> **[7:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=432)** And then we'll print out those results.
>
> **[7:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=434)** And then the results of seeing isRoomTemp on these two values.
>
> **[7:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=439)** So let's bring up our terminal and let's run it again.
>
> **[7:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=448)** And sure enough, we can see room temp is between 20 and 23 degrees.
>
> **[7:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=451)** That's this line right here.
>
> **[7:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=453)** There are four measurements that are room temperature.
>
> **[7:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=457)** And sure enough, 22 degrees is room temp, whereas 17 is not.
>
> **[7:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=462)** So there's one more thing that you should be aware of, and it's that you can't currently in C# have an instance property and a static method of the same name.
>
> **[7:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=475)** So let's go back to our class code.
>
> **[7:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=478)** And what I'm going to do is comment out the instance version of isRoomTemp.
>
> **[8:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=483)** And I'm going to unco this code, which is the same logic, but just using a property instead of an instance method.
>
> **[8:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=491)** So if I go back to the terminal and I try to run this, you'll see that that results in a compiler error.
>
> **[8:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=503)** And it says the type temperature already contains a definition for isRoomTemp.
>
> **[8:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-members?u=76281980&t=507)** So at least for now, C# doesn't allow properties and static methods to coexist like instance methods and static methods can.

> [!info]- Semantic Content
>
> **Code Identifiers:** isroomtemp (9), ftoc (2), isfreezing (1), writeline (1), ctof (1)
> **Tools:** terminal (3)
> **CLI Commands:** make (2)
> **Versions:** 22.22 (1), 71.6 (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Warnings:** be aware (1)

#### [Static classes](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=0)** - [Instructor] Now that we've seen how to define static members of regular classes, let's turn our attention to static classes themselves.
>
> **[0:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=8)** Static classes have one key difference from regular non-static classes and that that is that they can't be instantiated.
>
> **[0:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=15)** The reason for this is that all of the members of a static class are themselves defined as static.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=22)** So, let's open up in our static classes folder here the program code and static class dot cs.
>
> **[0:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=30)** In my example, you can see I have a class named converter and it has a couple of static methods to convert inches to and from centimeters.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=41)** There's also a constant value that I've defined using the static keyword.
>
> **[0:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=45)** Now, this is not normally how you would do it.
>
> **[0:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=47)** The const keyword is the correct way to do this, but I just wanted to demonstrate that this way is also possible, but in real life don't do it this way.
>
> **[0:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=55)** Use the const keyword.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=56)** This will get you into a lot of trouble with your teammates.
>
> **[0:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=59)** Okay, so all we need to do to make this class a static class is add the static keyword to the class definition.
>
> **[1:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=69)** And if we look at the main program, you can see that there's some code already to exercise the methods and the constant.
>
> **[1:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=77)** So, let's run our code as we currently have it.
>
> **[1:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=81)** I'm going to open up my terminal, run this.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=90)** All right, and we can see that there's the output here.
>
> **[1:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=93)** We can see that the first result is that there are 2.54 centimeters per inch and we're using the constant here, and then we're converting five inches to centimeters.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=104)** That's about 12.7, and five centimeters to inches.
>
> **[1:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=107)** That's about 1.97 or so.
>
> **[1:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=110)** All right, so if I uncomment the code, at the bottom of my example, and if I try to run this again, you'll see that I now get a compiler error.
>
> **[2:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=125)** And the reason I'm getting this compiler error is because the class is now declared as static, I can't actually instantiate it.
>
> **[2:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=133)** And also, because the class is now declared as static, I can't have any instance members inside of it.
>
> **[2:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=139)** So, let me just go ahead and comment this out again.
>
> **[2:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=143)** If I go back to my class and I try to do something like public int temp, right?
>
> **[2:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=153)** In this case I'm adding something that depends on an instance.
>
> **[2:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=158)** If I try to run this again, right now I get another compiler error and it says, cannot declare instance members in a static class.
>
> **[2:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=171)** Similarly, static classes are sealed by default and we'll talk about that in a little bit.
>
> **[2:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=177)** If I try to derive a new class, so for example, if I come down here and I write public static class new converter
>
> **[3:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=191)** and I try to derive from the existing converter, all right, let me take out my instance variable.
>
> **[3:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=200)** Let's try to run this again.
>
> **[3:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=205)** And you can see that once again, I now get another compiler error.
>
> **[3:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=209)** It says static class new convert cannot derive from the converter.
>
> **[3:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=213)** Static classes must derive from object.
>
> **[3:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=215)** So, one of the side effects of having a static class is that you can't subclass them.
>
> **[3:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=220)** A good example of a static class is the dot net math class.
>
> **[3:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=225)** Let's go ahead and bring that up in the browser and we can look at it.
>
> **[3:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=228)** So, here is the math class in the dot net documentation and if you scroll down you'll see, hey, sure enough, it's defined as a static class.
>
> **[3:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=238)** And if we scroll down right to the methods, you'll see that all of these are all defined as static methods.
>
> **[4:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=248)** So, for example, if I click on this one, you'll see that it's a static function.
>
> **[4:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=254)** Basically, it's a static class with a large number of math related functions and a few constants.
>
> **[4:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-classes?u=76281980&t=260)** So, static classes are useful when you need to group together a set of related methods that only operate on their parameters and don't need to maintain individual state data for different instances of the class.

> [!info]- Semantic Content
>
> **Versions:** 2.54 (1), 12.7 (1), 1.97 (1)
> **UI Navigation:** scroll down (2), click on (1)
> **Definitions:** defined as (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Static constructors](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=0)** - [Instructor] C# supports a type of constructor called a static constructor and they apply to both regular and static classes.
>
> **[0:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=8)** Static constructors are typically used to initialize any static data in the class or to perform one-time operations before anything else happens in the class.
>
> **[0:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=18)** These are called automatically by the .NET framework.
>
> **[0:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=20)** You don't need to invoke these yourself.
>
> **[0:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=23)** Let's look at some sample code to see how they work.
>
> **[0:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=26)** So here in my StaticConstructor folder, let's open up the Program file and MyClass.
>
> **[0:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=33)** So I have a class named MyClass, which has two static members.
>
> **[0:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=38)** It's called Counter and LastCaller, a constructor, and there is two methods, MethodA and MethodB.
>
> **[0:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=46)** MethodA is an instance method while you can see that MethodB is a static method.
>
> **[0:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=53)** When these functions are called, the CallCounter variable will be incremented each time.
>
> **[1:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=60)** And the LastCaller string will contain the name of the last method to be called in the class.
>
> **[1:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=68)** Now, you can see that I have the code to do this already defined both in MethodA and MethodB.
>
> **[1:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=73)** What I need to do is add my static constructor to the class to initialize the static members.
>
> **[1:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=80)** Now, if I don't do this, then these members are automatically initialized to their default values, which would be zero and an empty string.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=90)** But if I want to initialize them to something else, then I need to set the data myself.
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=95)** So let's go ahead and add our static constructor.
>
> **[1:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=99)** And to do that, I'm going to write the [[Microsoft Word|word]] static and then MyClass and that's it.
>
> **[1:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=106)** Don't need to make it public.
>
> **[1:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=107)** Don't need to do anything else about this.
>
> **[1:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=109)** In my static constructor, I'm going to set CallCounter equal to zero and I'm going to set LastCaller equal to Nobody
>
> **[2:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=124)** and I'm going to write out to the console that the static constructor has been called.
>
> **[2:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=135)** So now if we look at the main program, there is some code to create and exercise the class.
>
> **[2:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=143)** So here I instantiate the class and we print out the values of CallCounter and LastCaller.
>
> **[2:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=151)** Then we call MethodA and MethodB a few times and then we output CallCounter and LastCaller again.
>
> **[2:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=157)** So let's go ahead and run this.
>
> **[2:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=159)** Let's open up the terminal and let's run.
>
> **[2:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=167)** All right, so when it executes, we can see the results and you can also see that the static constructor executed before the instance constructor did.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=178)** So you can see that, for example, in the beginning, CallCounter starts out as zero and LastCaller starts out as nobody.
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=186)** And then after we make four method calls, CallCounter is now up to four.
>
> **[3:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=191)** And sure enough, the last method to be called was MethodB.
>
> **[3:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/static-constructors?u=76281980&t=195)** Now, you may not need to use static constructors very often but when you have static class members that you need to make sure are initialized a certain way before the [[Representational State Transfer (REST)|rest]] of the class logic runs, then the static constructor is the way to do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** net (1)
> **Tools:** terminal (1)
> **Exercise Files:** sample code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add static members to employee](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=0)** - [Instructor] Now that we've learned about static class members, let's put them to use in a coding challenge.
>
> **[0:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=10)** For this challenge, we're going to update the previous coding challenge by adding a couple of static members to our Employee class.
>
> **[0:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=17)** So if you haven't already done that previous challenge, I suggest going back and trying it, but that's not required.
>
> **[0:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=23)** You should be able to handle this challenge independently of the previous one.
>
> **[0:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=27)** So I'm going to open up the code for the program file here in the editor so you can see how your code will be called.
>
> **[0:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=34)** The first change that we're going to make is the addition of this EmployeeCount property, and notice that it's static on the Employee class.
>
> **[0:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=42)** Each time an employee object is created, this property will increase the count of the number of instances.
>
> **[0:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=50)** The second change we're going to make is that the IED property will no longer be initialized by the test code.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=56)** And you can see I've removed that property from each one of the lines.
>
> **[0:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=59)** that creates an Employee class.
>
> **[1:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=62)** IDs will now be assigned within the Employee class itself.
>
> **[1:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=66)** So let me close this, and I'm going to run my finished challenge code so you can see what the output should look like.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=83)** And when I run the test code, you can see that the employee count increases when I create each object.
>
> **[1:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=91)** And then when I print out all of the employee objects at the end, they each have an ID number that starts at 1,000 and increases from there and is automatically assigned by the Employee class internally.
>
> **[1:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=102)** So each of these features should be implemented by using what we learned about static members in this chapter.
>
> **[1:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-add-static-members-to-employee?u=76281980&t=108)** So go ahead, try this challenge, and then I'll be back in the next video to explain my code.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** ied (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add static members to employee](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=0)** - [Instructor] For this challenge, we needed to update our employee class with some static members to keep track of the number of employees created, as well as assigning IDs to each employee automatically.
>
> **[0:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=16)** So let's take a look at my solution.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=19)** I created two member variables for my class.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=22)** The first is a private member that counts the number of objects, and the second is a protected member that increments each time an ID is needed.
>
> **[0:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=33)** I made the first one private so that only my Employee class could access it.
>
> **[0:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=37)** The second one is protected, just in case a subclass needs to see what the current ID counter is, and that's in the future if this program ever gets extended and so on.
>
> **[0:48](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=48)** To go along with my private empCount variable, I define a public facing, where is it?
>
> **[0:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=54)** Here it is.
>
> **[0:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=55)** I define a public facing employee count static property.
>
> **[0:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=59)** Note that it only has a get accessor, which prevents the property from being modified.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=65)** In the employee constructor.
>
> **[1:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=67)** I increment the empCount variable, which is how I keep count of the number of objects created.
>
> **[1:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=74)** The IDStart variable is initialized inside the static constructor for the class.
>
> **[1:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=79)** Now, I could have just initialized the variable as part of the declaration itself up here, but I chose to put it inside the static constructor because in a real program, this value would probably be accessed from a data store somewhere.
>
> **[1:32](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=92)** So I wanted a place where I could put some logic that's more complicated than a simple assignment, and the static constructor is a good place to do that.
>
> **[1:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=100)** Then I increment the value each time a new object is created so that they don't all get the same ID.
>
> **[1:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=107)** All right, well that's my solution.
>
> **[1:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-add-static-members-to-employee?u=76281980&t=109)** How does it compare to yours?

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Identifiers:** empcount (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Abstract and Sealed Classes

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of abstract classes](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about abstract classes and sealed classes and we're going to start with abstract classes.
>
> **[0:07](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=7)** You can think of an abstract class as sort of like a set of blueprints for how other classes can be created based on the abstract one.
>
> **[0:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=15)** And they are different from regular classes in some important ways.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=19)** First, abstract classes can only be inherited from.
>
> **[0:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=24)** You can't actually instantiate an instance of an abstract class itself.
>
> **[0:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=29)** These types of classes are typically used to group together a set of concepts that are then implemented in various subclasses that you actually can instantiate.
>
> **[0:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=38)** These are called concrete classes.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=41)** Abstract classes can be used to provide greater flexibility in the design of a class hierarchy and make it easier to introduce and extend new functionality if the program structure is likely to grow and change.
>
> **[0:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=54)** So let's take a look at how an abstract class might be used in a simple example.
>
> **[0:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=59)** Suppose we're creating a class structure to represent different kinds of vehicles.
>
> **[1:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=64)** We might create a base class named vehicle to represent some of the features that are common to vehicles, such as how many wheels they have and what their engine power is.
>
> **[1:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=74)** Then we can define subclasses to represent specific types of vehicles such as a car or a pickup truck or a motorcycle.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=83)** Each of these subclasses can be created by using their new operator and their constructor but there's a problem.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=90)** Our base class can also be instantiated which is something that we want to prevent.
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=95)** After all, when you go to a dealership you don't buy a vehicle.
>
> **[1:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=99)** You buy a specific type of vehicle.
>
> **[1:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=101)** So it doesn't make sense to create a vehicle class just by itself.
>
> **[1:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=106)** To do this, we need to add the abstract keyword to our class definition.
>
> **[1:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=112)** Now, when you try to create an instance of this class, that's going to result in a compile error.
>
> **[1:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/overview-of-abstract-classes?u=76281980&t=118)** By declaring the base vehicle class as abstract we're forcing implementers of the class to create a concrete subclass in order to add the particular attributes that are related to that subclass while still taking advantage of the default properties and methods and logic of the base class.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Defining an abstract class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=0)** - Now that we've learned a little bit about what an abstract class is let's try it out in some real code.
>
> **[0:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=5)** So let's open up our program file and our vehicles.cs file here in the abstract classes folder.
>
> **[0:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=12)** And I have some code that defines a vehicle based class along with two subclasses, one for car and one for motorcycle.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=22)** The base class has two string properties that represent the make and model of the vehicle and there's a method called sound horn to make the horn sound along with an override of the two string method to represent the vehicle as a string.
>
> **[0:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=39)** In my main program file, I have some code that creates a car and a motorcycle and then writes each one to the console and calls the sound horn method.
>
> **[0:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=49)** So let's also add some code that creates a vehicle object and we'll write that out to the console.
>
> **[1:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=61)** Alright, let's run what we have so far.
>
> **[1:03](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=63)** So we'll bring this up in the terminal.
>
> **[1:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=70)** Alright, and in the output you can see the car information along with the sound horn function results.
>
> **[1:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=76)** So we have our forward escort that does a beep beep and then we have our motorcycle and that does a honk honk.
>
> **[1:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=82)** But as you can see we're able to instantiate the vehicle base class.
>
> **[1:26](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=86)** So let's fix that by adding the abstract keyword to the class definition.
>
> **[1:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=91)** So I'll go back here to my vehicle class and I'll write public abstract class vehicle.
>
> **[1:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=99)** So now let's try to run the code again.
>
> **[1:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=105)** And you can see that when I try to compile I get a compile error and it says cannot create an instance of the abstract type or interface vehicle.
>
> **[1:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=114)** However, there's another problem even though I've successfully prevented the instantiation of the vehicle base class, I've got another issue.
>
> **[2:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=122)** Alright, so I'm going to go into my code.
>
> **[2:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=125)** So let's go ahead and close this terminal for a second.
>
> **[2:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=128)** I'm going to go into my code for motorcycle.
>
> **[2:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=130)** Where is that? Scroll down and I'm going to remove the sound horn function.
>
> **[2:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=138)** All right, let's get rid of that.
>
> **[2:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=140)** And now let's run the code again.
>
> **[2:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=143)** And also I'm going to go ahead and take out this code that's causing the problem.
>
> **[2:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=148)** Alright let's bring our terminal back up and let's run the code.
>
> **[2:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=157)** Alright, so now that I've moved that override of the sound horn function I'm getting the default base class of the sound horn function, which isn't what I want, right?
>
> **[2:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=167)** So if we look at the base class you can see that there's a, where is it?
>
> **[2:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=173)** There's a placeholder that says add sound horn here.
>
> **[2:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=177)** And since motorcycle didn't override sound horn we're getting this ad sound horn here or add horn sound here, message for the motorcycle.
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=186)** And that's not what I want.
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=188)** The base class method is just intended to be a placeholder.
>
> **[3:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=190)** I want developers that implement a subclass of vehicle to have to provide their own implementation of the sound horn method.
>
> **[3:18](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/defining-an-abstract-class?u=76281980&t=198)** I want to force them to do this and we'll see how to do that in a separate video.

> [!info]- Semantic Content
>
> **Tools:** terminal (3)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - now (1)

#### [Abstract methods and properties](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=0)** - [Instructor] In a previous video, we saw how to use abstract classes to provide a basic foundation for a class structure that prevents developers from instantiating the base class itself.
>
> **[0:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=11)** But we ran into a problem.
>
> **[0:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=13)** Developers were able to create and instantiate derived classes that didn't override certain members of the abstract base class that we want them to.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=22)** So what we want to be able to do is specify that there are certain members of the base class that have to be implemented by the derived classes.
>
> **[0:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=30)** To do this, we can use the abstract keyword that we learned about earlier to define specific base class members that must be implemented by subclasses.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=41)** So here in our code in the abstract props funks folder let's open up our program and vehicle files.
>
> **[0:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=50)** So let's take a look at the code for our vehicles class that we saw earlier.
>
> **[0:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=54)** It's mostly the same with some slight changes.
>
> **[0:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=57)** So I added a property for the number of wheels that a vehicle has and I also simplified the car and motorcycle classes.
>
> **[1:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=68)** And if we go back to the main code here you can see that we've got a couple of instances of classes being created.
>
> **[1:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=75)** So let's just run the code that we have the way it is.
>
> **[1:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=79)** And when I do that, let's see, we bring up the terminal and dot net run and in the result you can see that we have the default implementations of wheel count and sound horn are used.
>
> **[1:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=97)** So here if I scroll back up over to the vehicles we've got wheel count is going to start off as zero.
>
> **[1:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=105)** And the default implementation of sound horn is just add horn sound here and we've got both of those in the output.
>
> **[1:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=114)** So in order to require developers to provide implementations of these members, we can use the abstract modifier.
>
> **[2:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=122)** So let's make those changes.
>
> **[2:04](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=124)** In the case of sound horn, I'm going to replace virtual with abstract and abstract functions can't have any implementations where they're declared.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=137)** So I'm going to replace the default code here with just a semicolon.
>
> **[2:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=142)** So now I'm just defining the fact that there's going to be a function called sound horn and I'm going to do the same thing with my wheel count property.
>
> **[2:32](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=152)** I'll make that abstract as well.
>
> **[2:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=157)** Alright, so now when I try to run my existing code you can see that we get a compile error because I haven't implemented these functions.
>
> **[2:51](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=171)** So you can see car does not implement the wheel count get motorcycles, not implement, you know sound horn and so on.
>
> **[2:57](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=177)** So let's close the terminal and let's fix these problems.
>
> **[3:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=181)** So first let's add some code for the car class.
>
> **[3:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=185)** And you can see that there's a little red squiggly line indicating that we have to inherit the abstract member's wheel count and sound horn.
>
> **[3:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=192)** So let's do that.
>
> **[3:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=195)** So I'll make a public override of wheel count
>
> **[3:24](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=204)** and that is going to just return the number four in the case.
>
> **[3:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=209)** Oh, oops, sorry, I misspelled it.
>
> **[3:31](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=211)** That's going to return the number four for the case of a car.
>
> **[3:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=214)** And then let's also, let's override sound horn as well.
>
> **[3:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=226)** And let's console right line beep beep.
>
> **[3:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=233)** All right.
>
> **[3:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=235)** And then we'll add the same code for the motorcycle.
>
> **[4:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=240)** And that's going to return two for the motorcycle.
>
> **[4:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=250)** And for sound horn, we'll do honk honk.
>
> **[4:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=263)** Alright, so now that I've made this fix you can see that the little red squiggles have gone away from my editor and we can run the code again.
>
> **[4:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=273)** So let's bring our terminal back up and we'll run.
>
> **[4:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=281)** Okay, so now everything's working and there are different results for the car and motorcycle classes.
>
> **[4:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=287)** So for the car we have four wheels and beep beep.
>
> **[4:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=290)** And for the motorcycle we have two wheels and honk honk.
>
> **[4:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/abstract-methods-and-properties?u=76281980&t=293)** So in addition to defining abstract classes we can make individual members in a class abstract which then requires developers to override them and provide implementations in the subclass.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Tools:** terminal (3)
> **Cross-References:** previous video (1), go back to (1)
> **Speakers:** - [instructor] (1)

#### [Sealed classes](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=0)** - [Instructor] In C#, we can create classes that cannot be inherited from by using the sealed modifier.
>
> **[0:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=6)** In this way, this is the direct opposite of the abstract modifier, which defines a class that must be inherited from, and can't be individually instantiated.
>
> **[0:15](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=15)** By sealing a class, you can ensure that the functionality of the class can't be modified by other developers in unintended ways.
>
> **[0:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=23)** And in fact, one of the most basic classes in the .NET framework is sealed, and that's the string class.
>
> **[0:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=29)** So if you look at the string class definition, you can see that sure enough, it's a sealed class.
>
> **[0:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=33)** All right, so let's take a look at how this works back in the main program.
>
> **[0:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=38)** Let's open up our program code and our example code.
>
> **[0:43](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=43)** And let's take a look at the first example.
>
> **[0:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=46)** So I have two classes, I have class A and class B, and you can see that B inherits from class A.
>
> **[0:53](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=53)** In my main program, the code creates an instance of Class B.
>
> **[0:58](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=58)** So if I run this code, let's just run what we have right now.
>
> **[1:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=68)** And at the output, we can see that, first, the A constructor has a console right line in it.
>
> **[1:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=76)** So does the constructor for B, and then Func1 has a console output that says Func1 in Class B.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=83)** And sure enough, we get what we expect.
>
> **[1:25](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=85)** Class A is constructed, so is class B, and then Func1 in class B gets called.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=90)** So now I'm going to add the sealed declaration to the class.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=94)** So up here, I'm going to write public sealed class A.
>
> **[1:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=99)** And when I do that, you notice a few things happen.
>
> **[1:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=102)** First, I now get this red error line that says Func1 is a virtual member in a sealed type.
>
> **[1:49](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=109)** It doesn't make much sense to have a virtual function inside a sealed class because nobody can override it.
>
> **[1:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=114)** You'll also notice that there's an error here on this declaration, it says class B cannot derive from sealed type A.
>
> **[2:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=122)** So because A is now sealed, you can't create a subclass.
>
> **[2:05](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=125)** And then finally, there's one more error that says that there's no suitable method found to override.
>
> **[2:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=131)** And that makes sense because this function is no longer visible from within class A.
>
> **[2:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=136)** So by sealing the class, I've made it impossible for anyone to derive a new class from it.
>
> **[2:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=142)** Right, so let's go back and change that back.
>
> **[2:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=148)** Okay, and let's close our terminal.
>
> **[2:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=153)** It's also possible to apply the sealed modifier to individual members of a class.
>
> **[2:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=159)** So let's scroll down a little bit further, and you'll notice that I've got classes C, D, and E.
>
> **[2:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=166)** And so C is the base class, D is a subclass, and then E derives from D.
>
> **[2:52](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=172)** And you'll notice that there's a function called Func2, which is defined in Class C, and then overridden in both classes, D and E.
>
> **[3:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=182)** So what I'm going to do is apply the sealed modifier to D to prevent the method from being overridden any further.
>
> **[3:10](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=190)** So what I'm going to do here is leave the override in place, and put the sealed keyword in front of it.
>
> **[3:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=196)** So now, class C is fine, that's unchanged.
>
> **[3:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=199)** In Class D, I can define my own version of Func2, because I'm overriding it, but because it's sealed in class D, class E can no longer override it.
>
> **[3:28](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=208)** And you can see that there's a little red compile error right here that says cannot override inherited member Func2 because it is sealed.
>
> **[3:35](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=215)** So in this case, I've applied, sealed just to an individual member of the class and not the entire class.
>
> **[3:43](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=223)** All right, let's go back and take that back off again.
>
> **[3:45](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=225)** So one of the main reasons you might want to use a sealed classes or sealed methods is to be able to ensure that the functionality of the class or method isn't changed by a subclass.
>
> **[3:56](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=236)** This can be for security reasons or just for general class design reasons.
>
> **[4:01](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=241)** In the case of the string class, [[Microsoft]] sealed the class because a string is an immutable object, and there really isn't any good reason for other classes to subclass the string object.
>
> **[4:12](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/sealed-classes?u=76281980&t=252)** So if you have such code in your application system, then it might be a good idea to seal the class unless you have a good reason to let the object be modifiable by subclasses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** net (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Abstract employee class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=0)** - [Instructor] For our final programming challenge, we're going to apply the lessons of this chapter to the employee classes that we've built up in the previous challenges.
>
> **[0:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=14)** So if we look at the code as we left it in the last challenge, we can see that there's some room for improvement.
>
> **[0:21](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=21)** First, we don't want developers to be able to instantiate the employee base class.
>
> **[0:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=27)** They should have to choose between either hourly employee or salaried employee.
>
> **[0:33](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=33)** Next, notice how the adjust pay method is defined in the employee base class and has an empty implementation.
>
> **[0:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=42)** We should require that derived classes implement this method for themselves.
>
> **[0:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=47)** And then finally, let's make sure that the hourly and salaried employee classes can't be extended any further.
>
> **[0:55](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=55)** We've learned how to do all three of those things in this chapter, so let's put that knowledge to work in this challenge.
>
> **[1:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/challenge-abstract-employee-class?u=76281980&t=60)** And I'll explain my solution in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Abstract employee class](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=0)** - [Instructor] All right, let's review the requirements that we had for this challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=8)** First, we wanted to make sure that the Employee base class itself could not be instantiated.
>
> **[0:14](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=14)** Next, we wanted to make sure that the AdjustPay method was required to be implemented by subclasses.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=19)** And finally, we wanted to make sure that the Hourly and Salaried subclasses could not be subclassed themselves any further.
>
> **[0:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=27)** All right, let's open up my solution code to this.
>
> **[0:30](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=30)** So for the first part, we just need to modify our class definition for Employee to include the abstract keyword.
>
> **[0:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=37)** This prevents the Employee class from being instantiated itself.
>
> **[0:42](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=42)** The abstract keyword also helps us solve the second requirement.
>
> **[0:46](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=46)** We defined AdjustPay as abstract and subclasses of Employee now have to provide their own implementation.
>
> **[0:54](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=54)** And if we look down in Hourly and SalariedEmployee we can see that that is the case.
>
> **[1:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=60)** They both have their own implementations.
>
> **[1:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=62)** And then finally, to prevent our subclasses from being extended any further, we just need to apply the sealed keyword to their definitions.
>
> **[1:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=71)** So I have now a sealed class for HourlyEmployee and sealed class for SalariedEmployee.
>
> **[1:17](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=77)** Just to make sure everything's working, let's go ahead and bring this up in the terminal.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=83)** And let's run.
>
> **[1:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=87)** And sure enough, everything works.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=89)** And let's go back and try to make a few things that we know are going to work.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=96)** If I write var empl equals new Employee, oh, we can see that that doesn't work, right?
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=104)** Because that's obviously abstract.
>
> **[1:47](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=107)** All right, let's go ahead and take that back out.
>
> **[1:50](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=110)** If I go to the employees and I try to take out my override of AdjustPay, all right?
>
> **[1:59](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=119)** Oh, now we can see that that's an error because it says, "Hey, 'HourlyEmployee' does not implement "inherited abstract member," AdjustPay.
>
> **[2:06](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=126)** So that's all good. So let's put that back in.
>
> **[2:09](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=129)** All right, oh, let's try one more thing.
>
> **[2:13](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=133)** Let's try to make a subclass of SalariedEmployee.
>
> **[2:16](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=136)** So if I make, what's this?
>
> **[2:20](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=140)** public class, let's just call it A, and it's going to be SalariedEmployee.
>
> **[2:27](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=147)** Oh, okay, that's clearly an error, why?
>
> **[2:29](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=149)** Ah, "'A': cannot derive "from sealed type "SalariedEmployee'."
>
> **[2:34](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=154)** So it looks like we fulfilled all the requirements for this challenge.
>
> **[2:38](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=158)** So how'd you do?
>
> **[2:39](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=159)** Did you get the same result?
>
> **[2:41](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/solution-abstract-employee-class?u=76281980&t=161)** Take a look at my code, compare it to yours and see if there are any differences.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980&t=0)** - Congratulations on finishing the course.
>
> **[0:02](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980&t=2)** I hope you enjoyed learning along with me about .NET [[Object-Oriented Programming (OOP)|Object-Oriented Programming]], and that you now have a good understanding of how to apply what we've covered in some of your own projects.
>
> **[0:11](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980&t=11)** We saw how to define classes, apply access controls to your logic, make use of properties, and use of advanced features, like static members and abstract and sealed classes.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980&t=22)** There's plenty more .NET content in the library, so I would suggest taking some time to look through the courses and continue learning about the great features that the .NET Platform provides.
>
> **[0:32](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980&t=32)** Just go to the homepage of the library, type .NET into the Search box, you'll be on your way.
>
> **[0:37](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980&t=37)** I hope to see you again in another one of my courses soon.
>
> **[0:40](https://www.linkedin.com/learning/advanced-c-sharp-object-oriented-programming/next-steps?u=76281980&t=40)** Until then, happy coding!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Env Vars:** net (4)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-advanced-object-oriented-programming-4406346/codespaces)

## Skills Covered

- C#

## Path Context

### In [[C- Excellence- Architecting High-Performance Solutions]]
← [[Advanced C- Language Features]] | **4 of 6** | [[Asynchronous Programming in C-]] →

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