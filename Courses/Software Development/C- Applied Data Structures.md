---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-applied-data-structures-23361126
url: "https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126"
duration_minutes: 99
duration: 1h 39m
level: Intermediate
updated: 1/3/2024
learners: 31696
skills:
  - Data Structures
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-applied-data-structures-2813283-1/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHlhDcLmjPIhw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703201046259?e=2147483647&amp;v=beta&amp;t=aKmIwORZwOLbKWxDGC3xk9bxCQ4Br3bC7OFnIlEyJQs"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Excellence- Architecting High-Performance Solutions]]'
prev_courses:
  - '[[C Sharp Algorithms]]'
next_courses:
  - '[[Advanced C- Language Features]]'
path_nav: '[{"path":"C- Excellence- Architecting High-Performance Solutions","position":2,"total":6,"prev":"C Sharp Algorithms","next":"Advanced C- Language Features"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/data-structures
  - skill/c
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Applied%20Data%20Structures.md)

![C#: Applied Data Structures](https://media.licdn.com/dms/image/v2/D560DAQHlhDcLmjPIhw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703201046259?e=2147483647&amp;v=beta&amp;t=aKmIwORZwOLbKWxDGC3xk9bxCQ4Br3bC7OFnIlEyJQs)

# C#: Applied Data Structures

> Learn how to manage data more efficiently and effectively using collection classes and data structures in C#. In this course, join instructor Joe Marini as he outlines the basic steps of how to maintain collections of data in C# and choose the right collection class that’s applicable to a wide variety of different programming scenarios. Joe begins by exploring core concepts, including the differen

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126) | 1h 39m | Intermediate | 32K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Wrangling data in C#](#wrangling-data-in-c)
  - [What you should know](#what-you-should-know)
- [**1. Overview of Data Structures**](#1-overview-of-data-structures) (4 videos)
  - [Basic C# data structures](#basic-c-data-structures)
  - [Introduction to C# data collections](#introduction-to-c-data-collections)
  - [Generic vs. non-generic collections](#generic-vs-non-generic-collections)
  - [Selecting a data structure class](#selecting-a-data-structure-class)
- [**2. Basic Data Structures**](#2-basic-data-structures) (6 videos)
  - [Basic List operations](#basic-list-operations)
  - [Searching List content](#searching-list-content)
  - [LinkedList](#linkedlist)
  - [List vs. LinkedList comparison](#list-vs-linkedlist-comparison)
  - [Challenge: Shopping list](#challenge-shopping-list)
  - [Solution: Shopping list](#solution-shopping-list)
- [**3. Advanced Data Structures**](#3-advanced-data-structures) (5 videos)
  - [Stacks](#stacks)
  - [Queues](#queues)
  - [Dictionaries](#dictionaries)
  - [Challenge: Balance the statement](#challenge-balance-the-statement)
  - [Solution: Balance the statement](#solution-balance-the-statement)
- [**4. Specialized Data Structures**](#4-specialized-data-structures) (6 videos)
  - [ListDictionary and HybridDictionary](#listdictionary-and-hybriddictionary)
  - [OrderedDictionary](#ordereddictionary)
  - [StringCollection](#stringcollection)
  - [StringBuilder](#stringbuilder)
  - [Challenge: Strings](#challenge-strings)
  - [Solution: Strings](#solution-strings)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Wrangling data in C#](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/wrangling-data-in-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/wrangling-data-in-c-sharp?u=76281980&t=0)** - Working with data and information is one of the most important jobs of any real-world application.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/wrangling-data-in-c-sharp?u=76281980&t=6)** In modern [[Software Development]], we use a variety of [[Data Structures]] to organize information so that it can be accessed and manipulated depending upon the task at hand.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/wrangling-data-in-c-sharp?u=76281980&t=15)** The data structures that you choose to perform these activities have a direct impact on the performance and effectiveness of your app.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/wrangling-data-in-c-sharp?u=76281980&t=23)** Hi, I'm Joe Marini, and I've been building software for some of the best known companies in Silicon Valley for more than 30 years.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/wrangling-data-in-c-sharp?u=76281980&t=29)** In this course, I'll discuss the most common types of data structures that are available in the .NET platform and show you how each can be used to store and organize data in a variety of different ways.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/wrangling-data-in-c-sharp?u=76281980&t=40)** Managing data efficiently is one of the foundations of building great apps, so let's get started learning about C# data structures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (4), [[Software Development]] (1)
> **Env Vars:** net (1)
> **Speakers:** - working (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=0)** - In this course, we're going to be learning about how to use various data structure classes available in .NET and we're going to be using the C# language.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=9)** So there are a few concepts that you should already be familiar with before you begin.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=13)** First, I'm going to assume that you already have experience writing code and that you're familiar with basic things like functions, variables, lubes and so on.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=21)** Specifically, I'm also going to assume that you're already familiar with at least a basic understanding of C#.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=27)** If you need to brush up, then check out Learning C# or C# Essential Training here in the online library.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=34)** Let's jump over to the code to finish the setup for this course.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=38)** There are a couple of different ways you can work with the example code in this course.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=42)** I've set up a [[GitHub]] repository with the examples, and you can find it at this link.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=46)** The course content is organized into two separate folders.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=50)** There's the finished folder, and the finished folder contains all of the code examples in their finished state so that you can compare your code against them.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=59)** The start folder, which is right here, contains the code examples in the starting state, and this is the folder that I will be working in throughout the course as we build towards the finished state for each example.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=70)** Now, if you want to download the examples and work with them locally on your computer, then that's easy enough to do.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=76)** We just click on the code button here, click on local, and then you can either clone the repository to your computer or you can download a zip file and then use your favorite code editor to work on them.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=88)** You'll just need to make sure that you have .NET installed on your computer, at least version seven, in order to use the examples.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=94)** But this repository has been set up with a GitHub code space, so you can just work directly online with nothing to install.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=102)** All you need to do is fork a copy of the repository into your own GitHub account here, and then click on the code button, go to the code spaces tab, and then fire up a code space right here in the code menu.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=116)** Now, you can see that I've already done that and this is the code space I will be using in the course.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=121)** Now, either way works fine.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=122)** If you want to work on the files locally, that's fine, but I'm going to be using the code spaces feature in this course.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=128)** So let me open my code space and show you what it looks like.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=132)** Now when you create your own code space, it will take a few moments to spin up, so you'll just need to be patient.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=138)** When the code space starts, you will see a browser-based version of Visual Studio Code, and here in the files list are all the files you'll need for the course.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=146)** You'll also have a built-in terminal, which could be found in the view menu.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=150)** So if I go up here and click on view, I can choose terminal, or I can type control backtick, which I'm going to do that now, and you'll see that the terminal starts up.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=161)** I can check to see that .NET is already installed.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=164)** I'll type dotnet -- version, and you can see that I have version seven already installed in my code space.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=172)** You also want to make sure that you have the C# extension installed, which you can see I have here in this little icon with the boxes.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=179)** These are the extensions.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=180)** Make sure that C# is installed.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=183)** If it's not already installed for you, you'll just have to go find it in the marketplace.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=186)** It's easy enough to do.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=188)** All you need to do is search the marketplace.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=191)** I'll type in C# and you can see it's one of the first two that come up.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/what-you-should-know?u=76281980&t=196)** So once you've got the extension installed and got the code space spun up, you are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3)
> **Tools:** github (3), terminal (3), visual studio (1)
> **CLI Commands:** make (3), find (2), dotnet (1)
> **Prerequisites:** set up (2), before you begin (1), setup (1), install (1), you'll need (1)
> **UI Navigation:** click on (4), go to (1)
> **Env Vars:** net (3)
> **Exercise Files:** download the (1), zip file (1)
> **Speakers:** - in (1)


### 1. Overview of Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic C# data structures](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=0)** - [Instructor] Let's start by taking a look at some of the basic built-in [[Data Structures]] in C-SHARP before we examine some of the more complex data structure classes.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=8)** For some of you, this might be a bit of a simple review.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=11)** So if you're already familiar with strings, arrays, and tuples, you can skip this video.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=15)** First, let's consider strings, and I'm going to open up my program .cs file which is in my basic folder in chapter one, so you can follow along.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=24)** A string is a collection of characters and strings are immutable objects.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=28)** In other words, they can't be directly modified once they are created.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=32)** So strings are declared using the string keyword.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=35)** So I'll create a variable named s1, and I'll give it the value of Hello World with a space.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=44)** And you don't need to use the new operator, unless you're creating a string from an array of characters.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=51)** So I'm going to uncomment this array of characters declaration right here, and then I'll make another string called s2.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=59)** And in this case, I'll type new string and then pass in the character array to create my string.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=65)** Now, it's important to understand how immutability affects strings.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=69)** When you make a change to a string in dotnet, so for example, I'm going to add s1 and s2 together.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=76)** So I'll just write s1 plus equals s2 and then we'll go ahead and print that out.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=86)** And then let's also convert s2 to uppercase.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=89)** So I'll call s2.ToUpper.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=95)** All right, and we'll print that out as well.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=102)** Okay, let's save and then let's run this.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=107)** So here in Visual Studio Code, I can just right click on the folder that my code is in and choose open in integrated terminal, so I'm going to do that.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=116)** So that opens my terminal right in that folder, and I'll just write dotnet run.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=122)** Okay. And you can see the results here of the plus equals operator and the ToUpper function.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=127)** So each one of those results, so when I do this plus equals operator, and I call ToUpper, what happens is each of those operations returns a copy.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=136)** They return a new string.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=137)** The original string is not directly modified.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=140)** And what that means is you have to be careful with string references.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=144)** So for example, if I create another string, I'll write string three string, yeah, s3, and I'll give that a value of Hello with a space.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=156)** And then let's imagine I assign another string reference to this one, so I'll have string, s4 is equal to s3.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=169)** And now what I'm going to do is I'm going to modify s3.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=172)** So I'll write s3 plus equals World.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=179)** And then I'm going to write out s4, the one that I made to point to s3 right here on line 16.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=189)** So when I run the result, so I'll run again down here in the terminal, notice how s4 still points to the original string reference which just has Hello in it.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=201)** So even though I added the World to s3, s4 was not updated, even though it's pointing to s3 because this operation right here creates a new string.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=211)** It does not use the old string reference.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=215)** Okay, let's look at arrays next.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=218)** Arrays are contiguous storage in memory of the same variable type.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=224)** So to declare an array of integers, I use the bracket syntax.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=228)** So I'll write int and then two brackets, and I'll call my variable nums, and then I'll write new, and then again the data type.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=237)** And then inside the brackets, how many of those that I want.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=240)** I can also initialize the array with a set of initial values if I want to.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=246)** So I can write int, and then I'll make another variable called nums2.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=250)** And in this case, I'll use the initializer syntax in between the two curly braces to just put some numbers in the initial array.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=258)** Arrays can also have their values implicitly typed using the Var keyword, and the compiler will infer the type from the data.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=268)** So for example, if I wrote var a equals, and then I'll use new with two brackets, and then I'll create some initial data.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=278)** So A, B, C, right?
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=280)** D, E, F, and then, G, H, I, okay?
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=287)** That's going to create an array of strings because even though I'm not supplying the data type, I'm just using Var, the compiler will look at the data and say, oh, those are strings.
>
> **[4:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=296)** And this must be a string array.
>
> **[4:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=298)** Now, if you want to have multiple data types within the same array, what you can do is create an array of objects because object is the most base class in dotnet.
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=308)** Everything in dotnet basically descends from the object base class.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=313)** So this would let me create an object array, and I'll name it objs.
>
> **[5:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=317)** And inside the curly braces, I'll put some initial data.
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=320)** So I'll put a string, and I'll put a couple of numbers, and then maybe a Boolean or two.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=329)** All right, and so, when I run this, let's go back up here and run this again.
>
> **[5:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=337)** And you can see, now, I'm not printing anything out, but you can see the string results and there's no compile error, so everything must be working.
>
> **[5:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=344)** Okay. Finally, let's look at tuples.
>
> **[5:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=347)** So tuples are lightweight data structures, and they're designed to group together multiple data elements without having to define a class.
>
> **[5:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=357)** There are several ways that you can create and use tuples.
>
> **[6:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=360)** One way is to define the data types that they will hold.
>
> **[6:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=363)** So let me scroll up here a little bit.
>
> **[6:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=366)** What I'm going to do is create inside two parentheses, I'm going to write some data types, a string, an int, and a bool, and then I'm going to name my tuple variable t1.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=378)** And then inside another set of parentheses, I'll actually provide the data.
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=381)** So the first has to be a string, the second one has to be an int, and then the last one has to be a bool.
>
> **[6:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=387)** I'll make that false.
>
> **[6:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=389)** And then I will print out my tuple one variable.
>
> **[6:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=395)** You can also name the individual fields in the tuple.
>
> **[6:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=401)** Oh, whoops, actually, first, before I'm going to print this out, I'm going to print out a string, and I'm going to use a format string for that.
>
> **[6:49](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=409)** Now, when you're working with tuples, if you don't name the items inside the tuple, the way that they're accessed is using this item syntax.
>
> **[6:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=417)** You can see that when I type the dot on my t1 variable, I'm getting statement completion for Item 1, Item 2, and Item 3.
>
> **[7:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=423)** So I'm just going to print out Item 1, and then I'll print out t1.Item3.
>
> **[7:12](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=432)** But you can name the individual fields inside the declaration if you want to.
>
> **[7:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=436)** So I could have written string s, int i, right?
>
> **[7:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=440)** And bool b, and done pretty much the same thing.
>
> **[7:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=445)** And I'll just copy the same data and put it down here, and then I'll just print this out.
>
> **[7:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=454)** So what I'll do now is inside my print statement.
>
> **[7:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=458)** Now, when I write t1, when I hit the period, notice that, oh, whoops, I'm using t1 there.
>
> **[7:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=463)** There we go, t2.
>
> **[7:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=464)** When I type t2 and then period, notice how I'm getting the variable names now.
>
> **[7:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=468)** So now I'm getting B, I, and S, rather than Item 1, Item 2, and Item 3.
>
> **[7:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=472)** So I'll just do s and then I'll do t2.b, all right?
>
> **[8:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=480)** And of course, you can use the Var keyword, and if you want, you could put the names inside the initialization code.
>
> **[8:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=487)** So I can just write var t3.
>
> **[8:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=490)** And then when I type the data inside these parentheses, the compiler will infer that this is a tuple.
>
> **[8:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=497)** So I can write s: for example, and then the string, and then i:25, and then b:true.
>
> **[8:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=509)** And when I do that, the compiler will say, okay, this is property named S, that's a string.
>
> **[8:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=513)** I is an integer, and B is a boolean.
>
> **[8:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=516)** And then let's copy and paste this right line.
>
> **[8:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=520)** And once again, let's write out t3 and t3.
>
> **[8:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=526)** All right, so let's go back up.
>
> **[8:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=527)** Let's comment out the previous example.
>
> **[8:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=532)** So I'm going to just select these console right lines and comment them.
>
> **[8:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=538)** And let's go ahead and clear this and then run.
>
> **[9:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=543)** And there you can see the results of those three tuple statements being printed out in the terminal.
>
> **[9:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=548)** So tuples are really useful for a variety of scenarios, and actually one of the most common is to return multiple values from a function.
>
> **[9:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-c-sharp-data-structures?u=76281980&t=557)** All right, so now that we've seen some of the basic data types, we can move on to some of the more complex data structures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (3)
> **CLI Commands:** make (4), dotnet (4)
> **Tools:** terminal (4), visual studio (1)
> **Definitions:** is a  (3), in other words (1), is an  (1)
> **Analogies:** for example (4), imagine (1)
> **UI Navigation:** click on (1), scroll up (1)
> **Ports:** :25 (1)
> **Env Vars:** sharp (1)

#### [Introduction to C# data collections](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=0)** - [Instructor] Any non-trivial application will usually have to create and manage groups of objects that represent data and other functionality within the program.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=9)** The .NET library provides a set of classes that help you manage these groups of objects to make the storing and processing of data much easier.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=17)** Each of these classes are tailored to particular types of [[Data Processing]].
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=22)** Later in this chapter, we'll take a closer look at how to select one of these [[Data Collection]] classes based upon what you needed to do.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=29)** But for now, I'm just going to introduce the various classes, along with a quick overview of what they do.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=34)** It's also important to note that .NET provides both generic and non-generic versions of collections, and we'll discuss the key differences between these types a bit later.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=44)** If you're not already familiar with generics and .NET, I suggest you watch the course, [[C- Interfaces and Generics]], which covers this area.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=53)** The List collection is one of the most basic collection types.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=56)** It provides an array-like structure where you can access elements using an index.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=61)** The LinkedList class implements a doubly linked list, and elements are accessed using forward and backward references.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=70)** The Stack class uses a last in, first out method for accessing elements.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=75)** While the Queue uses a first in, first out method.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=79)** The Dictionary class associates a unique key with a single object value.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=84)** Keys must be unique, but the values in a dictionary don't have to be unique.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=89)** .NET also provides some specialized collections.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=93)** The ListDictionary is a dictionary that is implemented using a singly linked list.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=98)** For smaller sets of data, this class can be more efficient than using a regular dictionary.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=104)** The HybridDictionary starts out as a ListDictionary, but then transforms into a regular dictionary when the collection starts to get large.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=112)** The OrderedDictionary is just like a regular dictionary, but it maintains the order in which items are inserted.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=119)** These three classes are a little bit older, and you might not see them used very much in newer .NET code, but you might encounter them in older codes, so it's useful to be familiar with them.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=129)** The next two are much more common.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=131)** The StringCollection class provides a collection that is dedicated to working with strings, and then finally, the StringBuilder makes it easy to build and manipulate string content.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/introduction-to-c-sharp-data-collections?u=76281980&t=140)** This one's actually pretty popular, and you'll see it quite a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (1), [[Data Collection]] (1)
> **Env Vars:** net (5)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Generic vs. non-generic collections](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=0)** - [Instructor] Let's examine the differences between the generic and non-generic collection classes a little more closely.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=5)** The .NET framework supports both, generic and non-generic collection types.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=10)** But for the most part, [[Microsoft]] recommends that you should use the generic versions in any new code that you write.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=18)** Generic collections were introduced way back in .NET 2.0 and have several benefits associated with them that the non-generic versions don't have.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=26)** If you're not familiar with generics, then I suggest you watch the C# Interfaces and Generics course to learn more about what they are and how they're used.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=34)** The generic versions of the data structure classes provide type safety at compile time, which helps to reduce programming errors.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=41)** This is because when you declare a generic data structure, you provide a type argument, which restricts that collection to containing only objects of that type.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=51)** So for example, I can declare a list data structure that contains only strings or integers, or a custom class type that I've created.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=60)** This leads to better performance for the generic classes since the non-generic classes have to store their data as objects, and then you have to cast between the object type and the data type you want to use.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=71)** For these reasons, I'm only going to be demonstrating the generic data structure classes for the [[Representational State Transfer (REST)|rest]] of this course, except for the part where we examine some of the older types that you might run into when working in older .NET code bases.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/generic-vs-non-generic-collections?u=76281980&t=84)** If you want to familiarize yourself with the older non-generic versions, then I suggest you refer to the Microsoft documentation for these classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** net (3)
> **Versions:** 2.0 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Selecting a data structure class](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=0)** - [Instructor] Let's consider some of the basic questions you'll need to ask yourself when deciding how to select a data structure to solve a particular type of problem.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=9)** First, you'll need to consider what kind of data you'll need to work with.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=13)** Will the data be individual primitive values like numbers or strings or key value pairs or complex objects?
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=21)** Next, think about how the data will be accessed and processed.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=25)** Do you need random access to the individual data items that will be kept around for a long time?
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=31)** Or will the data be accessed in sequential order with each item no longer being needed once it's been used?
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=39)** Or maybe the data needs to be processed in a particular order, such as last in first out, or first in first out.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=47)** Also, consider the performance needs of the scenario.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=50)** Is the emphasis on quickly building the collection that will then be processed over time, or do you need fast retrieval in searching?
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=58)** Okay, so let's take a look at the different collection types and how they correspond to these different kinds of usage scenarios.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=64)** Fast and random access to data are provided by the list and the list dictionary collections.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=70)** The other collection types such as linked list are better for datasets where you are mainly concerned with processing data items in order.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=78)** Those collections also trade off fast access for fast adding and removing of data compared to the list or dictionary, although it should be pointed out that you can quickly add and remove data from lists and dictionaries as long as they don't need to shift their data around or be resized.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=95)** If you're planning on keeping items in memory for a while and operating on them over and over again, then consider the list linked list and dictionary classes.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=105)** Stacks and queues are usually used for collections of data that are going to be processed, and then each element discarded after it's used.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=114)** Most of these [[Data Structures]], other than the linked list, require contiguous space in memory, so keep that in mind as you're planning how many data elements will be kept in memory at one time.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=124)** These data structures also give you a way to specify their initial size when created, so that's another good way of keeping your application performing well instead of having to constantly resize the structure as more and more items are added.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=137)** And finally, if you need to process data elements in a particular order, such as last in first out, or LIFO as it's sometimes called, or first in first out, which is known as FIFO, then the stack and queue collections are what you should consider.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=152)** Alright, so that's a quick survey of the various characteristics of the different C# collection types that we're going to work with in more detail in the [[Representational State Transfer (REST)|rest]] of the course.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/selecting-a-data-structure-class?u=76281980&t=161)** Now, of course, your particular needs are going to be unique to your application, but this mapping should help you figure out where to focus when you're choosing a data structure type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Prerequisites:** you'll need (3)
> **Env Vars:** lifo (1), fifo (1)
> **Analogies:** such as (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. Basic Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic List operations](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn about some of the basic data structure classes in C#.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=6)** So let's start off by looking at the list data structure.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=9)** And here in chapter two, I'll open up my list folder and open the program.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=16)** All right, a list is simply a strongly typed collection of objects that can be accessed by a zero-based index, similar to a regular array like we saw earlier.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=27)** The list is dynamically resized as needed to hold items as they are added or deleted.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=32)** Let's write some code to exercise the functionality of the list class.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=37)** So to create a new list, I'll use the list constructor.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=41)** And since we're using the generic version, I need to specify the type of objects that the list will hold, which for our example will be strings.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=50)** So I'll use the List class and it's going to hold a string and I'll call it the strList.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=57)** And I'll use the version of the constructor that lets me specify the initial capacity of the list and I'll set that to be 10 strings.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=65)** So I'll write new List string, and I'll give it an initial capacity of 10.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=71)** And by the way, if you'll notice, I've included the System.Collections.Generic namespace up here because that's where the generic collections are kept.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=81)** To add content to the list, I can use a variety of functions.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=84)** So for example, I can use the add range function, which takes an existing innumerable object, like an array, and then populates the list.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=92)** And you can see I already have an array of strings defined, so I'll just use that one.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=97)** So I'll write strList.AddRange and then I'll pass in the comedians array.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=106)** And we can also easily add individual items using the add function, so I'll do that as well.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=113)** So I'll use my strList and I'll call the Add function and I'll add a couple more.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=119)** There we go.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=122)** So now that we've added some content to the list, let's look at the count and capacity properties.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=128)** So the count property tells me how many items I actually have in the list at the moment.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=133)** And capacity tells me what the current capacity of the list is.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=137)** So I will WriteLine out and I'm going to use my formatting string.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=146)** So I'll write, oops, Count and Capacity.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=152)** And those are strList.Count and strList.Capacity.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=163)** So let's go ahead and run what we already have and let me collapse down some of these blank lines.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=169)** All right, so I'll right-click here on my list folder, open this in the terminal and write dotnet run and you can see that the current count is eight strings out of a capacity of 10.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=183)** All right, lists themselves are innumerable, so we can iterate over each item using a for each statement.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=191)** So let me bring this down a little bit.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=194)** And what I'm going to do, if you look down here, you'll notice that I've written a utility function named PrintList, which does exactly that.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=203)** So this PrintList function uses a for each loop and retrieves a string for each item in the list and then simply writes it out to the console.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=213)** So let's go ahead and call that function up here.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=216)** I'll simply call PrintList and we'll pass in strList.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=223)** And of course, list elements can also be directly accessed by an index, just like in an array, and that's one of the main benefits of using a list.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=231)** So let's go ahead and write out the item value and we'll simply access strList at index four.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=246)** All right, so now we're at the point where we can try out some more code.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=250)** So let me bring my terminal back up here a little bit and let's run again.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=256)** All right, so now we have the capacity and the count, and once again, and so now we're writing out the, oh, whoops, looks like I forgot to put a little dollar sign in front of that formatting string there.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=268)** So let's try that again.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=270)** Okay, so now we have our count and capacity.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=272)** We're iterating over each string in the list, and then we're accessing an individual item.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=277)** Now let's look at removing items from the list.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=279)** So to remove individual items from the list, you can use the remove function along with a zero-based index.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=286)** So let's bring this down a little bit, and I'm going to write strList and I'm going to RemoveAt, and that's the index I want to remove an item at, so I'll remove index two.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=297)** You can also call remove with a specific value and that item will be removed from the list.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=303)** So I can also write something like this.
>
> **[5:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=304)** I can write Remove and I'll write Tina Fey.
>
> **[5:12](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=312)** All right, lists can also be sorted in place using the sort function.
>
> **[5:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=318)** So let's try that out.
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=320)** So I'll write strList.Sort.
>
> **[5:22](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=322)** And then once again, we'll print out the list.
>
> **[5:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=328)** All right, so let's bring our terminal back up, let's clear the output and let's run one more time.
>
> **[5:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=337)** Okay, so up until here, we have the original output.
>
> **[5:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=340)** And now you can see that we've removed a couple of people from the list and we're calling PrintList again.
>
> **[5:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=347)** And you can also see that the list was sorted in alphabetical order, so the A comes first, then E, then the L's, and then the R.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=356)** All right, so that covers some of the basic list operations.
>
> **[5:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/basic-list-operations?u=76281980&t=359)** In a separate video, we'll learn how to search through list collections for specific information.

> [!info]- Semantic Content
>
> **Code Identifiers:** strlist (9)
> **Tools:** terminal (3)
> **Analogies:** similar to (1), for example (1), just like (1)
> **UI Navigation:** open the (1), right-click (1)
> **CLI Commands:** dotnet (1)
> **Speakers:** - [instructor] (1)

#### [Searching List content](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=0)** - [Instructor] Now that we've seen how to add and manipulate objects in list collections, let's turn our attention to searching that data.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=7)** And again, I'm working on the same Program.cs file in the list folder in chapter two, so we're just going to pick up from where we left off in the previous video, So if you haven't already done the previous video where we added items to a list, you should go back and do that so that you're at the same point in this video.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=25)** So let's go ahead and scroll down to the searching the list content section.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=31)** Perhaps the easiest and most straightforward way to find a piece of data in a list is to use the contains function, which returns a Boolean result indicating whether the value is in the list.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=43)** So for example, to find out if a particular lame is in the list, I can use contains to search for a given string.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=50)** So what I'll do is I'll write out the result of whether or not, actually, I'm not going to do the string, I'll just write strList, and I'll just write Contains, and let's see if the string contains Ron Gallagher.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=73)** All right.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=74)** Another useful method for finding data in a list with a bit more flexibility, is the exists function.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=81)** So exists will return true if an object in the list is present that matches a set of criteria that the argument, which is a predicate function, checks for.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=93)** So for example, if I wanted to see if the list contains a name that is longer than 15 characters, I can write some code that looks like this.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=102)** I'll make a Boolean variable called found, and I'm going to assign that to the result of strList.Exists.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=112)** And the argument to exist is going to be a predicate function or a callback function.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=117)** In this case, I'm going to use a local Lambda, and so the argument is going to be X, and the body of that function is going to be, X.Length is greater than 15.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=133)** And then I'll print out whether that item was found, item found, and that's going to be the result of the found variable right there.
>
> **[2:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=146)** Okay. So let's go ahead and run what we have.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=149)** And I'm going to go back up and comment out some of the previous right lines just so that we don't have a whole bunch of pollution in our code, so I'll comment that guy, and we'll comment that guy there, and we'll comment out the call to PrintList, as well as that one.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=168)** Okay, so let's go ahead and bring up our terminal, and we'll dotnet run.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=177)** All right.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=179)** And we can see that the list does not contain a name Ron Gallagher, because the actual name was Leo Gallagher, so that's good, so it contains succeeded there.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=190)** And then of course we have X.Length is greater than 15, and it looks like there was in fact a name that has at least, well, at least there's one that is longer than 15 characters.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=201)** So to perform an even more advanced search, we can use the find and find all functions.
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=207)** The Find function also takes a predicate, or a Lambda, or a callback as an argument, and then executes that function against each element in the list.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=218)** So to take an example, let's imagine we wanted to find the first element in the list that starts with the letter L.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=225)** So I'll have a string result named item, and it'll be an empty string to start, and what I'm going to do is write item is equal to, and on the list, I'm going to call the find function.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=240)** And the function I'm going to pass in is going to take a single argument, and the logic is going to be that X starts with L.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=254)** And then we'll print out whether that was found.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=261)** All right.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=263)** So I'll have item, and that's going to be item.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=269)** And the find all function is similar in that it returns a list collection of all the items that match the predicate function, not just the first one.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=279)** So to find every name in the list that starts with L, the code would look pretty similar.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=285)** So what I would do is I would write, instead of a single item, I'm going to have a list of strings, and that's going to be an item list, and I'm going to assign that to the result of calling strList.FindAll, and then I'll just use the same predicate, so I'll just go ahead and copy this one right here and paste, and then I'll use my print list function to print out that item list.
>
> **[5:22](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=322)** Finally, let's look at the true for all function, which once again uses a predicate as its argument, and it returns true if every element in the list matches the criteria specified by the Lambda.
>
> **[5:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=337)** So to see if all the names in the list are longer than 10 characters, I could write some code that looks like this, I'll have a Bool result, and I'm going to call strList, and I'm going to call TrueForAll, and the True for All is going to take X, whoops, X, such that X.Length is greater than 10.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=367)** And then we will print that out.
>
> **[6:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=377)** All right.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=378)** Okay, so let's run what we have, and I'm going to go ahead and comment out the previous two examples.
>
> **[6:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=390)** All right, let's bring this up a little more and let's clear the terminal, and let's run.
>
> **[6:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=401)** And we can see that the first name, this is the result of the find function, the first name is Lenny Bruce.
>
> **[6:49](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=409)** And then we have our find all result, which is a list of three items of strings that start with L, so we've got Lenny Bruce, Leo Gallagher, and Louis Anderson, and so there's three there.
>
> **[7:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/searching-list-content?u=76281980&t=421)** And then finally, we can see that the result of the true for all function is true, because all of the names are in fact longer than 10 characters.

> [!info]- Semantic Content
>
> **CLI Commands:** find (11), make (1), dotnet (1)
> **Code Identifiers:** strlist (4)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** previous video (2)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [LinkedList](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=0)** - [Instructor] The linked list is another data structure used for keeping track of a list of elements.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=5)** The main difference between a list and a linked list is that the elements of a linked list are accessed sequentially instead of directly using an index.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=16)** Each element in the linked list, in addition to holding the value of the element, also maintains a pointer to the next item and the previous item in the list.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=26)** For this reason, the linked list class in C# is called a doubly linked list.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=32)** This allows the individual items of the list to be dispersed throughout the system's memory instead of having to be stored in one contiguous memory block.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=41)** It also makes the process of inserting and deleting items from the list very fast.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=45)** Essentially an order one operation.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=48)** The main downside of the linked list is that items can't be looked up as quickly as in a regular list, but if the contents of the list will be processed sequentially, then that doesn't really matter.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=60)** You can imagine a scenario such as an online music service, for example, where the user can move forward or backward in a list of songs.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=69)** Since it's not necessary to randomly access an individual song, a linked list can handle this very easily.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=75)** All right, so let's switch over to the code to exercise the linked list class.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=80)** Right here I am in my code editor and in my linked list folder, I'll open up my Program.cs file.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=86)** And once again you can see I've got my system collections generic namespace here, and I already have a string array that holds a list of song names.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=96)** So to create a linked list, I'll use the generic version of the class and specify that I want a linked list that holds strings.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=105)** And I'll do that by using the linked list constructor.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=110)** And it's going to hold string types. I'll name it my list.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=116)** And then I'm going to initialize the list using the constructor that takes an existing array and then adds the items to the linked list.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=124)** So I'll write new linked list and I'll pass in these songs array.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=131)** And of course I can also add individual items one at a time, and I can specify whether they should get added to the front of the list with add first.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=140)** So let's try that.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=145)** And we'll add a song and I can also use the add last function.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=156)** All right, there we go.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=157)** So just like other C# [[Data Structures]], I can iterate over the contents of the list without disturbing the list contents.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=164)** What I'm going to do is use a for each statement like this, and I'll get each string in my list and I'll write out each string.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=180)** All right, so let's run what we have so far.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=183)** We create our list, we add some items, and then we're going to iterate over the list and print out the contents.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=188)** So I'll right click and bring up my integrated terminal and I will dotnet run.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=196)** And when I run the example, we can see all the song names that were added in the constructor.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=201)** So that starts here and ends there.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=204)** And we have the ones that were added at the first and the last positions.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=210)** Okay, so let's try a few more operations.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=213)** Let's go ahead and close the terminal.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=215)** So remember that linked list collections have a first and last element.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=221)** So let's get references to each of those.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=225)** What I'm going to do is use a linked list node structure, and of course that's going to be a string.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=231)** So I have to define that as a string type.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=234)** And I'm going to call this one first, and that's going to be equal to my list first.
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=242)** And I'll copy that and paste it.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=244)** And next one will be called last.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=251)** All right. And then let's access the value property of each of those nodes.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=259)** So I'll write out the first value and then I will write out the last value.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=277)** Items can also be added or removed relative to an existing item in the list.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=284)** So let's add an element using the add after function to add a new song after the first one.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=292)** So on my list, I'm going to call the add after function, and I have to give it a node that's relative.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=299)** So I'm going to use the first node and I'll add, here comes the sun.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=307)** All right. And then once again, let's just print out the contents of the list.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=314)** So I'll copy that, paste that there, and just so we can easily distinguish the two, I'll put in a line.
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=325)** There we go. Okay.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=329)** And then just to make the output easier to read, let's go ahead and well, actually, you know what, we've only got two outputs right now, so let's go ahead and just run what we have.
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=341)** So I'll right click on my integrated terminal and run this.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=348)** All right, so we have our first output where we have the original list of songs.
>
> **[5:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=354)** All right, and then you can see that we are writing out the first and last value.
>
> **[5:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=358)** So that's this output right here.
>
> **[6:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=361)** And then we add, we call add after.
>
> **[6:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=363)** So after Africa we add, Here Comes the Sun, and then we iterate over each string.
>
> **[6:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=369)** So that starts here and goes all the way down to the last song.
>
> **[6:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=373)** Okay, so let's keep on going.
>
> **[6:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=376)** Just a couple more things to try. Let's close our terminal.
>
> **[6:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=380)** Let's try searching for content within the linked list.
>
> **[6:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=383)** First, let's use the Contains function to see if the linked list contains a specific value.
>
> **[6:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=391)** So to do that, I'm going to write my list and I'm going to call contains, and I'm going to look for the song Satisfaction, and I'm going to wrap that in a call to Console dot WriteLine.
>
> **[6:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=410)** So that's the Contains function.
>
> **[6:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=412)** Let's use the find function to find a specific node in the list.
>
> **[6:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=417)** So I'll call find and find's going to come back with a node, and I'm going to try to look for the Help song.
>
> **[7:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=426)** And we can also use the next and previous properties to traverse the list.
>
> **[7:12](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=432)** Now, in the interest of time, I'm not going to do that, but let's use these properties to access the value of a node that's adjacent to the first and last one.
>
> **[7:22](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=442)** So for example, I can write Console WriteLine.
>
> **[7:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=446)** I'm going to use the first reference, and I'm going to use the next field to get the node that comes after the first node.
>
> **[7:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=455)** And then I can access the value of that node.
>
> **[7:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=458)** And I can do the same thing with the last node reference that we already have.
>
> **[7:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=468)** And I'm going to use the previous reference to get the value.
>
> **[7:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=472)** Okay, so one more time, let's go ahead and I'm going to just comment out these other print statements just so that we can easily read our output.
>
> **[8:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=485)** All right, let's scroll.
>
> **[8:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=487)** Let's bring up the terminal and let's run.
>
> **[8:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=493)** Okay, so we can see that the result of the Contains function is true.
>
> **[8:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=497)** So sure enough, the list does contain the song Satisfaction.
>
> **[8:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=501)** We call the find function on the song Help.
>
> **[8:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=504)** And sure enough, there is a node that contains that song.
>
> **[8:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=508)** So that's good. And then we look at the first and last references and we get the next and previous value of each of those.
>
> **[8:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=516)** So if we go back and look at our list, so remember, well, I didn't print it out, but remember that we had Africa as the first song, and then the next one was Here Comes the Sun, and then the last song was The Twist, and then the previous one to that was Right Here Right Now.
>
> **[8:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=533)** Okay, so that's a quick exercising of the Linked list data structure.
>
> **[8:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/linkedlist?u=76281980&t=537)** I would suggest maybe taking a few minutes here to play with some of the functions and properties that we didn't get a chance to look at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **CLI Commands:** node (11), find (5), dotnet (1), make (1)
> **Tools:** terminal (5)
> **Analogies:** for example (2), imagine (1), such as (1), just like (1)
> **Definitions:** is called (1), is a  (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [List vs. LinkedList comparison](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=0)** - [Instructor] Now that we've had a chance to look at the list data structure as well as the linked list, let's pause for a moment and discuss how you would go about comparing the two collection types to fit your particular needs.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=12)** Now, I'm not going to do this for every collection type in the course.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=15)** I just want to give you an idea of how to look at the advantages and disadvantages of each data structure.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=21)** So in a regular list, the process of looking up items is very fast.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=26)** It has a big O order of one, which is pretty much constant time.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=30)** In other words, no matter how many items are in the list, the time it takes to access a random element doesn't change.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=37)** And this is probably the main advantage of using a list.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=41)** Adding elements to the very end of a list is also usually order of one, unless the list has to be resized and copied, in which case it's closer to order N, where N is the number of items in the list.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=55)** Similarly, to add an element within the list is order N, usually, because the other elements need to be shifted down in order to make room for the new element.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=66)** Removing an item is also order of N for the same reason the remaining items need to be shifted up and the time this takes grows linearly as more items are in the list.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=76)** So let's compare that with a linked list.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=78)** In a linked list looking up a random item is order N.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=82)** And remember, that's because each element in the list can only be accessed sequentially by following the next and previous pointers.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=90)** Adding elements to a linked list, however, is very fast.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=93)** And this is one of the main advantages of a linked list.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=97)** To add an element to the very first or very last position, or relative to another known element, is order of one.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=105)** And likewise, removing items from the list is also constant time.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=110)** Adding elements within the list is order N, since you first have to traverse the list to the position where you want to add something.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=117)** Similarly, removing a random element from the list is also order N.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=122)** So looking at this comparison, you can see that if your algorithm mainly needs to look up items, then a regular list might fit the bill.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=131)** However, if your main issue is getting the list built and then processing it in order, a linked list might be better.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/list-vs-linkedlist-comparison?u=76281980&t=138)** You can use a similar comparison framework with the other data structure types to help you determine which is the right one to use.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Shopping list](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=0)** - [Instructor] Okay, let's try a programming challenge using some of what we've learned so far.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=9)** For this challenge, you are going to implement a class that represents a shopping list.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=15)** So here in the challenge folder, in the start folder of chapter two, I'm going to open up my program file and you can see that I've already given you some starting code that will be used to test the class that you're going to build, which will be this class down here, the shopping list class.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=33)** Your class will provide three methods.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=36)** There's the add item method, and that will add an item with the given name, price, and quantity to the shopping list.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=43)** The remove item method will remove a given item from the list, so you'll need to check the quantity of the item and then only remove one of them.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=53)** If there's only one of the given item, then you can remove it completely from the list.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=58)** And then there's the get count method, which will return the total number of items in the list.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=63)** So you'll need to count the quantity of each item.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=66)** I've also given you the starting point of a print list function for you to print out the contents of the list when you're ready to use it.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=73)** So let's scroll back up to the top here, and you can see that what I'm doing is I'm creating a new instance of the shopping list and then adding some items to it.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=83)** And notice that in some cases I'm only adding one item, but sometimes I'm adding more than one.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=88)** So your remove item function's going to have to take that into account.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=91)** I'm going to go into my finished folder, and I'm going to run my finished challenge so that you can see what the output looks like.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=100)** So I'm going to dot net run, and this is what the correct results should look like.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=107)** So you can see that I've added the items.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=109)** The list starts out with five things in it, and then I perform some more operations.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=114)** Then the list has 13 items, and then we perform some more operations.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=117)** And then this is the final printout right here.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-shopping-list?u=76281980&t=120)** Okay, so go ahead and try this challenge and then I'll explain my solution in a separate video.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Shopping list](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=0)** - [Instructor] Let's review my solution to the code.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=8)** For this challenge, we needed to build a class to represent a shopping list and implement three methods to add, remove, and count the items in the list.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=16)** So I'm going to open up my finished version here.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=19)** For my solution, I decided to create a helper class called shopping item, and that's going to represent an individual item entry in the list that contains the name, the price, and the quantity.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=34)** I also decided to use a regular list structure to represent the list.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=40)** The code for the add item function creates a new shopping item and adds to my list and sets the value of each of the fields to the incoming arguments to the add item function.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=51)** The remove item function is a little more complex because we had to check if there was more than one of the given item in the list.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=60)** So I use a loop to find the item by the name in the list.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=65)** If the item was found, then I check to see if the quantity is greater than one, and if so, I only decrement the quantity.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=73)** Otherwise I remove the item entirely.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=76)** And then the get count function iterates over the list and counts all of the items by looking at the quantity property.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=83)** Remember, you couldn't just simply return the count property of the list itself.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=87)** And then of course, I filled out my print list function to loop over the list and just print out each item.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=94)** Alright, so how does my solution compare to yours?
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=96)** Remember, it's not important that your code matches mine.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=100)** There's almost always multiple approaches to solving programming problems, and your solution might even be better than mine.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-shopping-list?u=76281980&t=105)** The important takeaway here is to compare your code with mine and then note and learn from the differences.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Advanced Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Stacks](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=1)** - [Instructor] In this chapter, we'll move on to the more advanced [[Data Structures]], and we'll start with the stack.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=6)** A stack is a data structure that stores elements similar to an array, except that items are added or pushed onto the top of the stack and then removed or popped off of the top of the stack.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=18)** In this exercise, we're going to try out the C# version of the Stack Data Structure.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=23)** So I'm going to open up my stack code here in the editor, and you can see I'm including the generic collections module at the top of my file.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=32)** So let's create a new stack using the appropriate constructor, and I'm going to make a stack that holds string objects.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=40)** And I'll name that myStack, and that will be a new stack of strings.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=48)** So to add elements to the stack, we use the push functions.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=52)** Let's go ahead and try that out.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=57)** And I'll push on some strings and do this a few times.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=66)** So two, three, and four.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=71)** So now that we've added some strings to the stack, we can use the count property to see how many elements the stack contains.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=77)** So let's write that out to the console, and we'll write out the item count.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=84)** And that is going to be my stack.count.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=92)** Alright, and of course, like other C# data structures collections, we can use the for-each iterator to iterate over the contents of the stack.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=104)** So I'll do that here.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=105)** I'll just get each string that's inside the stack.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=113)** Okay, so we've created a new stack, added some content, and, oh, hang on one second.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=120)** Let's see what's going on with that error right there.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=122)** Oh, it's not a function.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=124)** There we go.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=125)** (clears throat) Okay, so we've got the items added.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=128)** Looking at the count and printing out each item, let's go ahead and run what we have.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=133)** So we'll bring this up in the terminal, and we'll run it.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=138)** Alright, and in the output we see the item count is four, and here's the output of the for-each loop.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=144)** And notice how it's in reverse order of the items that were added.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=148)** That's because the stack is a Last-In-First-Out structure.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=151)** So the last one in is the first one out.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=154)** So we added one, two, three, and four, and they're being iterated over four, three, two, and one.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=159)** Alright, so now that we've seen how to add elements to the stack, let's take a look at how to observe and remove content.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=166)** We can use the peak function to examine the element that is at the top of the stack without actually removing it.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=173)** So I'll create a string variable, and then I'll call on my stack.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=178)** I'll call peak, and that will get me the top item, and we'll print that out.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=185)** Now, if you want to actually remove the element and work with it, I can use the pop function, which is the opposite of the push function.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=193)** So I'll make another string and I'll call my stack .Pop.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=200)** And once again, we will write that out, okay.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=205)** And now that we've removed an element, let's print out the element count again.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=210)** So to do that, I'll just go ahead and copy this line one more time.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=215)** And last but not least, let's use the contains function to search the stack for specific content.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=222)** And again, this doesn't actually remove anything, so we're going to call WriteLine.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=230)** So let's see if we are able to find- So we'll call Contains, oops, Contains, and we'll look for the string five.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=246)** And then we'll do the same thing and we'll look for the string four, alright?
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=255)** Okay, so let's run our updated code, get our terminal backup here.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=263)** So this is the original output from the first iteration.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=267)** And you can see now that the top of the stack, the result of peak and the result of pop are both the item four.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=273)** And after we remove an item, the count drops down to three.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=278)** And obviously five does not exist because we never added a five, and four is no longer there.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=284)** So let's try quickly modifying this to look for two, and let's run this again.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stacks?u=76281980&t=292)** And sure enough, two does exist in the stack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2)
> **CLI Commands:** make (2), find (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** mystack (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Queues](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=0)** - [Instructor] The queue data structure is similar to the stack in that elements are processed in a particular order with the main difference being that instead of last-in-first-out, the queue processes elements in a first-in-first-out order.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=14)** And this is obviously very similar to real life situations, where people get online for various reasons or cars enter a highway ramp and so on.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=23)** So let's open up the code in the Queue folder, and I'll start by creating a queue that contains string data, and again, this is a generic class, so I've got that namespace included up there, and I'm going to specify what type of data my queue is going to hold.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=39)** So I'll create a queue, and it's going to hold strings, and I'll call it myQ, and it's going to be a new queue holding strings, and I'll just use the default constructor.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=51)** So to add items to the end of the queue, I use the enqueue function, so I'll call myQ.Enqueue, and we'll do pretty much the same thing that we did in the stack example.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=65)** So I'll just do one, two, three, four, five, and let's go ahead and replace these.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=73)** So after the items have been added similar to the stack, the count property will reflect how many items that there are in the queue.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=81)** So let's go ahead and print that out.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=87)** And I'll go ahead and write out the item count, and that is going to be myQ.Count.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=100)** And just like other collection types we've seen so far, the queue data structure can be iterated in a loop, so I'll use the foreach, and I'll get each string in my queue and print it out.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=118)** Okay, so let's run the code that we have so far.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=121)** Let's bring up the terminal and run this.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=126)** Sure enough, we have five items in the queue, and there's the output of the foreach loop.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=132)** And notice that the difference, remember in the stack example, five came first and then four, because it was last-in-first-out.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=139)** But in this case, it's first-in-first-out, so the order is what we would expect to see.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=145)** Okay, so let's take a look at how to process elements in the queue.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=149)** To access the first elements in the queue without actually removing it, we use the peek function.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=154)** So I'll make a string variable and call myQ.Peek, and then let's write that out.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=167)** The first item is, and that'll be str.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=174)** Now, to get things off the front of the queue, what we do is we call the dequeue function.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=180)** This is the opposite of enqueue, and it removes the item that's currently at the front.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=185)** Let's go ahead and do that, so str is equal to MyQ, and I'm going to call the dequeue function, and let's print out what we dequeue, format string in there.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=204)** The dequeued item is str, and then let's do it again.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=214)** Okay, and then after we do that, we'll print out the item count one more time, so I'll just go ahead and copy this line up here and put that in down here.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=228)** All right, okay, so let's run our updated code.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=234)** Let's get our terminal back and let's run.
>
> **[4:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=242)** Okay, so we start out with five items.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=244)** Here's the original output. So the first item is one, right?
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=247)** That's the result of the peek function.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=250)** Then we call dequeue, so we dequeue the string one, and then we dequeue the string two, and then after we do the two calls to dequeue, that reduces the count by two, so now we have three items left in the queue.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=265)** All right, so far so good. Let's keep on going.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=269)** So, like other [[Data Structures]], there's a contains function to search for data, so let's go ahead and try searching for something.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=281)** And we'll write, let's see, Queue contains 'one': and that's going to be the result of myQ.Contains, and we're going to be looking for the string one, and we know that's going to be false, because we've dequeued it.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=305)** So let's try finding a string that we know is going to be there.
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=309)** So let's try looking for the string four.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=313)** And there's also a clear function to empty the entire queue, so let's exercise that.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=321)** And then once we've cleared the queue, let's make sure that all the items are gone.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=329)** All right, okay, let's go ahead and run the updated example.
>
> **[5:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=336)** Whoops, one more time, back to the terminal.
>
> **[5:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=346)** All right, so here's our existing items.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=348)** So sure enough, we can see that the queue no longer contains the string one.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=353)** Oh, whoops, it looks like I forgot to name that four.
>
> **[5:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=357)** So let's go ahead and clear this and run it again.
>
> **[6:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/queues?u=76281980&t=363)** All right, sure enough, one is no longer there, but four is there, and then after we clear the queue, the item count is zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Code Identifiers:** myq (5)
> **Analogies:** similar to (3), just like (1)
> **Tools:** terminal (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Dictionaries](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=0)** - [Instructor] The dictionary data structure is very useful for mapping a unique key to an associated value.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=8)** And as you might expect, there are many real world applications for this.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=13)** For example, you can imagine an application that keeps track of a set of [[Microsoft Products|products]], each of which has a product ID.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=20)** Each one of those IDs can be mapped to an object that describes each product, the name, the price, the quantity in stock, and so on.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=28)** The main advantages of the dictionary are very fast lookup times, and the ability to enforce a unique key-to-value mapping.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=37)** So, let's go ahead and try out the C# version of the dictionary.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=40)** I'm going to open up my Program file.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=44)** So, to create a dictionary, I need to specify both the type of the key, as well as the type of the values that the keys will map to.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=54)** So for our example, to keep things simple, I'm going to define a dictionary that uses strings for both keys and values.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=62)** So I'm going to create a dictionary that maps string to string, and I'm going to call it the fileTypes array.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=72)** And that's going to be a new Dictionary.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=75)** Once I've created the dictionary, I can add key value pairs by using the add function.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=81)** So for example, I'm going to map file extensions to a more descriptive string.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=91)** So, on my fileTypes dictionary, I will add, and I'm going to add a mapping from .bmp to the more friendly string Bitmap file.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=103)** And I'll just copy this a few times and make a couple of other examples.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=108)** So for example, we'll map .txt to Text file.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=114)** Actually, we'll call it Plain text.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=118)** And we will map .[[HTML]] to HTML Document.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=130)** And then finally, let's map .jpg to JPEG Image.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=139)** And then let's use the count property to see how many elements there are in the dictionary.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=152)** And we'll just use the fileTypes.Count.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=161)** All right.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=162)** An interesting feature of dictionaries is that if you try to add an element and there's already an existing key, that's going to throw an exception.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=172)** And actually this only happens in C# and .NET.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=175)** Other languages like [[Python (Programming Language)|Python]] don't do this, but C# does.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=178)** So, let's go ahead and try that.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=180)** So, I'll uncomment this line.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=182)** So, let's go ahead and try what we have so far.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=190)** And let's run.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=193)** All right, and so when we run, okay, so you can see that the count is four, and, oh, there's an exception, right?
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=199)** And the exception gets thrown.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=201)** It says that an item with the same key has already been added, and the key is .txt.
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=207)** All right, let's go back and fix that.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=208)** So, let's just comment this back out again.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=212)** All right, and I can either add an exception handler, or I can actually try this nifty function called TryAdd, which attempts to add the key, and then returns whether it was successful.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=225)** So, let's just try that instead.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=228)** I'm going to make a Boolean variable named added, and I'm going to call fileTypes.TryAdd, and I'm going to try to add .txt and a string that just says "Just plain text".
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=246)** And then we'll write out whether the string was actually added.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=258)** All right, so let's run that again.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=265)** Okay, and you can see now the exception is gone, and I can just check the Boolean result.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=271)** There's no error thrown.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=272)** And sure enough, that triad failed, because .txt is already there.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=277)** Dictionaries can also be treated as associative arrays.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=281)** So, for example, I can just look up a value by using a key as a type of index.
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=287)** So, let's write out, and I am going to write out a key value, and what I'm going to do is use the fileTypes array as if it was an actual array.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=303)** So, inside these brackets I'm going to put in .html.
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=311)** I can also change values in this way.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=314)** So, when you set an existing key, it just overwrites what's already there.
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=320)** So, fileTypes, and once again, inside the brackets I'm going to write .html, equals, and I'll just change it to say Web page.
>
> **[5:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=332)** And then let's go ahead and write that out again.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=335)** So, I'll just copy this line and paste it.
>
> **[5:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=339)** All right, so let's try our new code.
>
> **[5:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=343)** Let's get our terminal back, and let's run.
>
> **[5:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=352)** Okay, and you can see that the key value starts out as HTML document because that's what it starts out up here.
>
> **[5:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=358)** But then, this line of code actually changes it to say webpage.
>
> **[6:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=365)** Let's keep on going.
>
> **[6:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=368)** There are a couple of search functions to see if a dictionary contains a key or a value.
>
> **[6:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=375)** So, I'm going to write, I'm going to use the Console, and I'm going to WriteLine whether or not the file type contains a key.
>
> **[6:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=390)** And I'm going to call fileTypes., and in this case, I'm going to use the ContainsKey function to see if it contains a .bmp key.
>
> **[6:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=404)** And, I'll do the same thing, but in this case, I'll use ContainsValue, and I'll look for HTML Document, which should be false now that we've changed it to webpage.
>
> **[7:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=425)** All right.
>
> **[7:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=426)** And then finally, we can remove items using the Remove function.
>
> **[7:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=431)** So I'll write fileTtypes.Remove, and we'll remove .bmp.
>
> **[7:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=439)** And then we'll take a look to see if it contains the key of .bmp anymore.
>
> **[7:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=446)** And let's go ahead and run our updated code.
>
> **[7:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=450)** So, one more time, back to the terminal.
>
> **[7:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=454)** Okay, so we can see that sure enough, .bmp, that result is true because that key is still there.
>
> **[7:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=461)** Let's see, the ContainsValue HTML Document, well that's false now, because we changed it to webpage.
>
> **[7:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=466)** That should be false, which is correct.
>
> **[7:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/dictionaries?u=76281980&t=468)** And then we removed .bmp, which means that the last WriteLine of containing the key, sure enough returns false, because that key has now been removed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[Microsoft Products|Products]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** filetypes (7), filettypes (1)
> **Env Vars:** html (4), jpeg (1), net (1)
> **Analogies:** for example (4), imagine (1)
> **CLI Commands:** make (2), python (1)
> **Tools:** terminal (2)
> **Definitions:** means that (1)
> **Best Practices:** the key is (1)

#### [Challenge: Balance the statement](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=0)** - [Instructor] Let's try another programming challenge using the [[Data Structures]] that we learned about in this chapter.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=11)** So as a developer, I'm sure you've probably used a coding tool such as VS code that I'm using here that indicates when a program statement is unbalanced.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=20)** In other words, you don't have correctly matching parentheses, brackets, and or braces within your program.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=29)** For this challenge, you're going to write some code that accepts a string and determines if the statement is balanced or not.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=37)** So let's open up the starting point of the challenge.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=41)** Alright, so here in the starting point, you can see that I've defined an array of strings and each one has some code in it that uses these parentheses and brackets and brace characters.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=53)** Now, some of the statements are properly balanced, like this one, you can see it has a opening parentheses and a closing one.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=60)** This one is also balanced because the brackets and parentheses are correctly nested, while others are deliberately unbalanced.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=69)** So the test code calls this function, it's called check balanced.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=74)** Check balanced will return whether the statement is balanced or not.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=78)** And your challenge is to fill out the code for this function.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=83)** So what I'm going to do is I'm going to run my finished code, and you can see that the test code is going to run over each test string in the statements and print out whether the statement is balanced or not.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=96)** So I'm going to go into chapter three for the challenge, and I'm going to open up the terminal and I'm going to run my finished challenge.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=107)** And you can see here that when I run this, there's a list of statements and whether or not they are balanced.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=113)** So we can see for example, that hello world, right, that's balanced.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=116)** This one is also balanced.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=118)** Here's one that has only one closing parentheses, that's not balanced.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=122)** This one has parentheses, but a bracket.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=126)** This one is really unbalanced, it has no brace.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=129)** And of course the single opening and single closing brace are also not balanced.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=134)** So go ahead and give this challenge a try and then I'll be back in a separate video to explain my solution.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=142)** So if you want to hint, keep listening for another few moments, otherwise you can stop the video now and get started and then I'll explain my solution.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=149)** Okay, are you sure you want the hint?
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=152)** You sure?
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=152)** Last chance.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=154)** Okay, so the hint is that you're going to need to use a stack data structure to solve this problem.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-balance-the-statement?u=76281980&t=162)** So think about how you might use a stack in this situation and give it a try, and then I'll show you my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **Tools:** vs code (1), terminal (1)
> **Analogies:** such as (1), for example (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Balance the statement](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=0)** - [Instructor] Let's take a look at how I solve this particular challenge, and then you can compare your code to mine.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=10)** For this challenge, we needed to implement a function that would determine whether a programming statement containing parentheses, brackets, and braces was properly balanced.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=20)** I used a stack structure to solve this.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=23)** So let's go ahead and scroll down.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=26)** So let's take a look at my code for the CheckBalanced function.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=30)** My code takes the incoming string and then processes each character in the string.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=36)** So, well, first of course, I create a stack that's going to hold characters.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=41)** So in my foreach loop, I'm going to loop over each character in the statement.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=47)** If the character is an opening parentheses, or brace, or bracket, then I push it onto the stack.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=56)** If the character is a closing one of those three, then I first check to see if the stack is empty.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=62)** Because if it is, then we are obviously unbalanced and I can just return false right away.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=68)** Otherwise, I pop the next character off the stack and check to see if it matches the closing character that we have encountered.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=78)** So if the character that we're looking at is a closing parentheses, then the character that's on the stack needs to be an opening parentheses in order to be properly balanced and nested.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=88)** And if they don't match, then obviously we're unbalanced and we can return false in each of those cases.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=95)** So this process continues until all the characters have been processed by my foreach loop.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=101)** Now, after the loop completes, we have to check to see if the stack still has anything in it, because if it does, then we are unbalanced, because what that means is that there was an opening character that was not accounted for.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=115)** All right, well, that's my solution.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-balance-the-statement?u=76281980&t=116)** How does my code compare to yours?

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Specialized Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [ListDictionary and HybridDictionary](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=0)** - [Instructor] There are some dot net data structure classes that were introduced in older versions of the framework and aren't really used that much in newer app development, but you might still run into them when working in older code.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=13)** In this chapter, we will review some of these classes so you can familiarize yourself with them in case you have to work with them in an older code base.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=20)** But we'll also take a look at some of the specialized [[Data Structures]] that are still very commonly used today.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=27)** So the first of these are the list dictionary and its close relative, the hybrid dictionary.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=33)** And I'm going to open up the sample code here.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=37)** And these collections are stored in the Collections.Specialized namespace, and you can see that I've got that namespace being included up here.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=46)** The list dictionary implements a dictionary using a linked list.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=51)** It's actually a bit faster than a regular dictionary for a very small collection.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=55)** Like less than 100 elements.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=57)** The hybrid dictionary starts out as a list dictionary, but then it transforms itself into a regular dictionary when the number of elements gets larger.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=66)** So for simplicity in this example, I'm just going to demonstrate the hybrid dictionary since it's basically the same as the list dictionary version.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=74)** So, to create a hybrid dictionary, I'm going to use the constructor along with some options to specify the initial capacity and whether I want the dictionary to treat its elements in a case sensitive manner.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=87)** So I will create a hybrid, oops, HybridDictionary, and I'll call that myHBD = new HybridDictionary.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=102)** And I'll give it an initial capacity of 20 and false because you can see it says caseInsensitive.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=109)** A Boolean that denotes whether the HybridDictionary is case-sensitive, or is case-insensitive.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=114)** I want my dictionary to not be case-insensitive.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=117)** Okay, so let's add some items.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=120)** And to do that I'm going to use the Add function.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=125)** So I'll add a key and a value, and we'll do this a few times.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=134)** So I'll just add items 1, 2, 3, and 4 and make those values 1, 2, 3, and 4.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=144)** And we'll print out the item count as well.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=147)** And we'll print out the dictionary size.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=151)** And that's going to be myHBD.Count. There we go.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=157)** There's also a basic search function we can use to find content, and it is called contains like with some of the other data structures we've seen.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=165)** So let's write out whether or not myHBD.Contains("item1").
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=176)** And of course, we can also remove items.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=181)** So let's call myHBD.Remove, and let's remove item3.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=189)** And then once we've removed it, let's iterate over each item in the dictionary.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=195)** And so what I'm going to do is in this loop, I need to get each element in the hybrid dictionary, and that's going to give me what's called a DictionaryEntry.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=206)** And I'll just call that de in myHBD.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=213)** And then I'll simply write out.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=219)** And we'll write out the key.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=225)** Followed by the value.
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=232)** And then finally, let's clear the dictionary content.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=241)** And then once we've done that, let's go ahead and write out the dictionary size again.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=246)** So I'll just copy this line and paste it here.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=250)** That's a pretty good set of exercising code.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=253)** So let's go ahead and run what we have.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=257)** Let's bring up our terminal.
>
> **[4:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=260)** And let's shrink that down so we can see the code, and we'll call dotnet run.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=269)** And so here you can see the results.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=271)** So after adding our elements, we have four items and the result of contains is true 'cause item1 is still there.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=278)** And then we iterate over all the items after removing item3.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=283)** So you can see that item3 is gone.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=284)** And then after we call the clear function, the dictionary size is zero.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/listdictionary-and-hybriddictionary?u=76281980&t=288)** So again, not a data structure type that you're going to typically use in a lot of new code, but you might encounter it in some of the older dot net apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (2)
> **Code Identifiers:** myhbd (5), caseinsensitive (1)
> **CLI Commands:** make (1), find (1), dotnet (1)
> **Tools:** terminal (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [OrderedDictionary](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=0)** - [Instructor] With regular dictionaries, there is usually no guarantee that the collection will maintain the order in which items are added to the data structure.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=9)** Most of the time this isn't important.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=11)** But occasionally there'll be scenarios in which you want to process dictionary elements in the order in which they were added.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=18)** For this scenario, you can use the OrderedDictionary.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=21)** So let's go ahead and open up our example.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=25)** So let's jump straight to the code.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=26)** And here in my source, I have created an OrderedDictionary, which is also available in the specialized collections module.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=35)** You can see that I've got that up here.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=38)** Alright, let's scroll down a little bit.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=40)** So let's go ahead and add some items to the dictionary in a particular order.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=45)** So I'm going to add item one, and I'll give that a value one.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=53)** And then I'll just make a few, oops, make a few copies of this and we'll just go ahead and make item two, three, and four.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=64)** So I'm going to use my PrintDictionary function down here at the bottom of my code.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=69)** This basically is the helper function that I've written to print out the contents of the dictionary.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=75)** So let's go ahead and run what we have, and I'm going to pass in my dictionary for that.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=89)** Alright, let's bring up our terminal, and let's run our code.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=96)** And there you can see the contents of the dictionary are in the order in which they were added.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=102)** So now let's make some modifications.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=104)** So first I'm going to remove an item from the dictionary.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=108)** So I'll call the Remove function, and I'll remove item three.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=112)** And then let's add a new one.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=119)** And in this case I'll add item five, and I'll give that a value of five.
>
> **[2:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=127)** And then I'll modify one of the items in place.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=131)** So let's change item two to be equal to new value two.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=143)** And then let's add one more new item, and we'll add item six with a value of six.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=155)** And then let's print the contents again.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=158)** So let's go ahead and run our code again.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=162)** Let's go ahead and clear the value here, and we'll run again.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=170)** Alright, so you can see that when I run the code, all of the items are still in a consistent order.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=176)** So value one is unchanged.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=177)** I changed value two, right?
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=179)** Value three is gone now, and values five and six are at the end.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=184)** So everything's in the order that they were added.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=186)** And once again, this particular collection type, not probably one you're going to see used in a whole lot of new .net code, but it's been around .net for a while and it is still used.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=196)** So you might come across it in some older applications, although there are probably people still using it.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=201)** I do want to point out that this is not the same thing as keeping the dictionary sorted.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=206)** What I mean by order is the order in which things happened to the dictionary.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=211)** That's different than sorting the dictionary by keys, if you want to do that, turns out that there's actually a data structure to do this called the SortedDictionary class.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=222)** So you can use this to keep your dictionary sorted by the keys.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=226)** And if you feel up to it, I would encourage you to try converting this example that we just did to use the SortedDictionary to see the difference.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/ordereddictionary?u=76281980&t=235)** I'll leave that as an exercise for you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [StringCollection](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=0)** - [Instructor] In this example, we'll take a look at the string collection data structure, which is used to manipulate groups of string objects.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=8)** Now this particular class was introduced in .net before generics were added.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=14)** Yeah, I know it's kind of old.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=16)** So these days it's preferred to use the generic list data structure with a string type for new application code.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=25)** However, you might still run into it when working in older code bases, and it actually is still kind of used sometimes, so it's worth covering here.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=32)** Let's go ahead and open up the sample code.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=37)** All right, so I've got my sample open in the editor, and you can see I've included the specialized module up here and I already have an array of strings defined.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=49)** So to create a new string collection, I'll use the appropriate constructor.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=54)** So I'll just simply use a string collection and I'll call it strcoll, and that's going to be a new string collection.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=65)** And then I can initialize the collection with the add range function.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=71)** And I'll call add range with my colors array.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=77)** All right, so that will initialize my string collection with all the strings that you see here.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=82)** And of course, just like other [[Data Structures]], I can add individual items with the add and insert functions.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=88)** So let's try that.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=93)** So we'll add the black color and we'll add, we'll use insert for the white color at the zero index.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=108)** And at this point we can use the count property to see how many we have.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=114)** So let's do that.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=117)** And of course, you've seen this many times now, we can iterate over the collection using a for each loop.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=124)** So let's try that out.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=136)** And I'm going to use write for this one.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=138)** So we'll write out the string with a space after each one, and then we'll just write out a blank line.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=156)** And let's put a little divider line in there so we can clearly delineate our examples.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=163)** Okay, let's run what we have so far.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=165)** So we've created a new string collection, added the array, put some new things in there, looking at the count, iterating over each item.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=174)** Let's open our terminal and let's exercise our code.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=182)** And sure enough, you can see that there's eight different strings, there's eight colors.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=186)** White has been inserted at the beginning, black has been added at the end, so everything appears to be working the way we want.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=194)** So let's go back to the code.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=196)** So the string collection also supports the index operator, so you can treat it like any other array.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=202)** So for example, I can write out, let's access a specific item.
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=207)** I'll write item at three is, and we'll do strcoll sub three.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=217)** And there's also a couple of ways to search for content.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=219)** So we can use the contains function to see if the class contains a certain string.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=226)** So let's see if the collection contains the string blue and we'll call it strcoll.contains.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=235)** And we're looking for blue.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=238)** And, oh, whoops, I got to close off that quote there.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=241)** Or we can use the index of function and let me show you how that one works.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=249)** So green is... Oops, green is at location.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=257)** And what I'm going to do is call strcoll.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=259)** I'm going to use the index of function to look for the string green.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=266)** Okay. And then finally, let's just clear the collection.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=273)** And then once we've done that, let's go ahead and use our count property again just to make sure everything's working the way we think.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=283)** All right, so let's run our updated code one more time.
>
> **[4:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=292)** And sure enough, yes, item three is yellow, blue is in the collection.
>
> **[4:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=297)** Green, looks like green is not there. Is green not there?
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=301)** Green was minus one. Why the, why is that?
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=305)** Why did we not find... Oh, because I misspelled it.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=307)** That's why.
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=308)** Let's try writing it again. There we go.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringcollection?u=76281980&t=313)** Green is at four now and there was zero strings after we clear the collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### [StringBuilder](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=0)** - [Instructor] Manipulating string content is probably one of the most common operations that many developers have to contend with.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=6)** .Net provides a great data structure class for working with strings called the String Builder.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=12)** One of the key advantages of the string builder is that it is much more efficient at making multiple changes to a string than it is to use regular string functions.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=21)** And that's because the string builder allocates an internal buffer for working with the string and expands the buffer space only when it's needed.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=28)** So let's try exercising some of the string builder features.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=33)** So I'll open the code here and string builder lives in the system text module, so I'm including that.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=39)** Let's begin by creating a new string builder with an initial capacity of 50 characters and an initial string.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=46)** And these are both optional parameters.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=48)** So I'll create a string builder, I'll call it sb.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=52)** So I'll make a new string builder and I'll give it a default string and a default size of 50.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=60)** And then we will write out the capacity, which will be the string builders capacity and the max capacity, which will be the string builders max capacity.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=82)** And then there's multiple ways of getting string content into the string builders.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=86)** So I'll use the append function and I'm going to add an array of characters.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=96)** So I'll add a D, E, F, and that'll be it.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=103)** In fact, I can even use a format string.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=108)** I'll append format.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=110)** And I'm going to specify a format string here.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=113)** So that's going to be GHI.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=114)** And then I'll put some placeholders in here.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=117)** And for the placeholders, I'll specify some letters.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=120)** A J and a lowercase K.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=123)** So at this point, let's write out the string builder content and try out what we have so far.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=130)** So I'll write out, so I'll use the length to say how many characters we have, and the string itself is going to be the string builder.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=145)** And I will call the two string method on it, which is what creates the string from its contents.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=151)** And let's go ahead and run this.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=155)** Let's bring up our terminal.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=162)** Okay and we can see that we've got a capacity of 50 characters initially.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=167)** The max capacity is, okay, well that's a very large number.
>
> **[2:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=171)** It's in the gigabytes there.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=173)** And then we have 11 characters currently in the string.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=176)** And this is the actual string content.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=179)** So far, so good.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=180)** Let's keep on going.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=181)** We'll try some more examples.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=184)** I'm going to use the append join function to add more characters and append join, lets me specify a character or a string that goes in between the strings that I'm adding.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=195)** So I'm going to specify a dash, and then I'm going to add a new character array.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=201)** And I'll put in some more characters here.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=204)** And I can also insert strings at any point within the existing string using the insert function.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=211)** So let's try that out.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=213)** I'll use insert to insert a string at the beginning of the string position zero.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=219)** And I'll put the [[Microsoft Word|word]] alphabet in front.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=223)** And then I'll use the replace function.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=226)** So the replace function will replace the lowercase K with the uppercase version, and there's only one of these.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=234)** And then let's write out the contents one more time.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=237)** So I'll copy and paste this line.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=240)** Okay, let's run our updated code.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=246)** Let's get that terminal and let's run.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=255)** Alright, so now you can see that this is our original input, and now we're up to 28 characters.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=261)** And so here's the inserted string alphabet right at the front, and the K is now uppercase.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=267)** And you can see that the L through the O characters were inserted.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=271)** And because we use the join, there's a dash between each one of them.
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=276)** So the string builder is a really useful data structure for working with string data in an efficient way.
>
> **[4:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/stringbuilder?u=76281980&t=281)** In fact, I would suggest maybe taking a few minutes here and checking out the string builder documentation and maybe trying out some of the other functions to get more familiar with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Tools:** terminal (2)
> **CLI Commands:** make (1)
> **Env Vars:** ghi (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Strings](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=0)** - [Instructor] All right, it's time for another programming challenge.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=8)** For this challenge, we are going to do some work with strings using the string [[Data Structures]] that we learned about earlier in the chapter.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=15)** Let's open up our code in the Start folder here.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=19)** And if you turn your attention to the Main function of the program, I'll scroll down a little bit, you will see that I have several lines of text in a string array.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=29)** And these are the opening lines of Abraham Lincoln's famous Gettysburg Address.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=34)** Your challenge will be to calculate some data related to these strings by filling out the code for the PrintStringStats function, which is up here.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=43)** And you can see that the code needs to be filled out.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=46)** Notice that the PrintStringStats function takes a single string argument, and I've also given you a little bit of a headstart by using the Split function to split the string into multiple lines, 'cause you might need to do that.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=60)** The first part of the challenge will be creating a single string to pass to this function out of the array.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=65)** Next, your code will count the total number of unique words.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=71)** Well, actually, it'll count the total number of words, period, in the string using a string collection.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=75)** I want you to use a string collection for this part, and it will write that information out to the console.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=80)** Your code will also calculate the longest [[Microsoft Word|word]] in the text and also print that word.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=87)** Then your code will calculate the number of times each unique word appears in the text and will print that information out to the console.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=96)** So I'm going to run my finished code, so you can see what the output should look like.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=101)** So I'll go into my Finished folder, and in here, I'll open up this in my terminal.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=107)** And I will run this.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=111)** And let's expand this, so we can see some more.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=115)** And you can see, let me scroll back up, 'cause there's a lot of words in this.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=120)** All right, so there's 102 total words, the longest word was proposition, and then that's followed by the number of times each unique word was found in the text.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=132)** And notice that all the words have been converted to lowercase, so that we don't duplicate words due to capitalization.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=141)** So for this challenge, you're going to need to use a couple of the data structures that we covered in this chapter, such as the string collection and the string builder.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=150)** And you might also need to use a data structure that we learned about earlier in the course.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=156)** I've already given you a starting point by taking out all the punctuation, and let's go back to the code, so I can show you.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=162)** So all the punctuation's already been taken out, and I've already added this line of code up here to the PrintStringStats function that you might find useful.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/challenge-strings?u=76281980&t=170)** So go ahead and give this challenge a try, and then I'll be back in a separate video to go over my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[Data Structures]] (2)
> **Cross-References:** earlier in (2), we covered (1), go back to (1)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Strings](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=0)** - All right,. So how did you do on this one?
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=7)** Let's review my solution.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=10)** For this challenge, we had to work with a set of strings and calculate some pieces of data about them.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=15)** So we needed to figure out the number of words in the total text along with the longest [[Microsoft Word|word]].
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=20)** And we needed to count the number of occurrences of each word in the entire string.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=25)** So let's scroll down a little bit.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=28)** To handle the first part of the challenge, we needed to get an array of strings and assemble them together as a single string in order to call the print string stats function.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=40)** And for this part of the challenge, I use the string builder in order to construct a single string out of an array of strings.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=48)** The string builder data structure provides a function called a pen join, which lets me specify a character that will be inserted between each of the strings and then joins them together.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=58)** So the result of that function call, is a single string that consists of all the strings in the array and then I just need to call the two string function on the string builder and then pass the resulting single string to my print string stats function.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=74)** So that was the first part.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=75)** Let's take a look at the inner workings of that function.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=81)** All right, so the first task was to count the number of words in the string.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=87)** And so to accomplish that, I provided a starting point using the string classes split function to split the incoming string along space boundaries.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=97)** And by the way, you might be wondering, hey, why do we just turn an array into a single string and then back into an array again?
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=104)** You're actually going to run into this in the real world.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=106)** Sometimes you'll be dealing with APIs that don't have exactly the interface you need.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=111)** And so even though internally the function might work with the original array, you're going to have to do some manipulation.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=119)** So once I use the split function, that gives me an array of all the words in the single string.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=125)** I then create a new string collection structure, and then I call the add range function on the collection to add the array of words that I just created.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=135)** Then I can just use the count property, and the count property just tells me the number of words that are in the string collection.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=143)** So that was simple enough.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=145)** The next task was to find the longest word in the entire string.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=150)** To do this, I loop over each word in the string collection structure and check to see if each word is longer than the previous word found.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=160)** So I keep track of the longest word in these two variables, and then just calculate the longest one.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=167)** And then at the end of that loop, I have the longest word here in my max word variable, and I just print it out.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=173)** And then the final task was to print out the number of occurrences of each of the unique words in the string.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=179)** And for that, I chose to use a dictionary structure.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=182)** So I created a dictionary that maps strings to integers.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=186)** And then what I do is I loop over each word in the collection and convert it to lowercase so that I don't miscount words due to capitalization.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=196)** Each word in the string becomes a key into the dictionary and the integer of value that the key maps to becomes the count for that word.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=204)** After that loop completes, I then just loop over all the keys in the dictionary and print out the count associated with each key.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=212)** All right, so how does my code compare to yours?
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=215)** Remember, there's several different ways to solve any given challenge.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=218)** So there's no right or wrong answer here.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/solution-strings?u=76281980&t=220)** Take a look at my code, compare it to yours, and just learn from the similarities and differences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (12)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980&t=0)** - [Joe] Thanks so much for watching my course, and congratulations on finishing it.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980&t=4)** As you work more and more with C# code, you'll grow more comfortable with the data structure types we learned about in this course, and you'll gain experience in deciding which collection type is the best one to use for the particular problem that you're trying to solve.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980&t=17)** There's a lot more to learn about C# though, so I'd suggest browsing through some of my other C# related courses here in the library.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980&t=25)** You also might want to consider checking out some of the other programming language courses to see how the data structure types in those languages work and the kinds of options available.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980&t=34)** As always, you should also stay up to date on the latest .NET documentation so you can be aware of changes and improvements to the language.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980&t=42)** I hope to see you again soon in another one of my courses.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-applied-data-structures-23361126/next-steps?u=76281980&t=45)** Until then, happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** net (1)
> **Warnings:** be aware (1)
> **Speakers:** - [joe] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-applied-data-structures-2813283-1/codespaces)

## Skills Covered

- Data Structures
- C#

## Path Context

### In [[C- Excellence- Architecting High-Performance Solutions]]
← [[C Sharp Algorithms]] | **2 of 6** | [[Advanced C- Language Features]] →

## Appears In

- [[C- Excellence- Architecting High-Performance Solutions]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Structures- Trees]] — Data Structures
- [[Python Data Structures- Linked Lists]] — Data Structures
- [[Python Data Structures- Stacks, Deques, and Queues]] — Data Structures
- [[Python Data Structures and Algorithms]] — Data Structures
- [[Learning C-]] — C#

---

[↑ Back to top](#)