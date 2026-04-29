---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: c-sharp-exception-and-error-handling
url: "https://www.linkedin.com/learning/c-sharp-exception-and-error-handling"
duration_minutes: 56
duration: 56m
level: Advanced
updated: 3/14/2024
learners: 12992
skills:
  - Debugging
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-exception-and-error-handling-3812037/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEHKuZhVdeGtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1710284097660?e=2147483647&amp;v=beta&amp;t=bSBiVautAOtppfk3qFH7KdswMz5hbF2GKQY63uU-euE"
linkedin_topic: DevOps
learning_paths:
  - '[[Elevating C- Skills- Building Robust Applications]]'
prev_courses:
  - '[[C- Test-Driven Development]]'
next_courses:
  - '[[C- Cross-Platform Development]]'
path_nav: '[{"path":"Elevating C- Skills- Building Robust Applications","position":5,"total":8,"prev":"C- Test-Driven Development","next":"C- Cross-Platform Development"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/debugging
  - skill/c
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C-%20Exception%20and%20Error%20Handling.md)

![C# Exception and Error Handling](https://media.licdn.com/dms/image/v2/D560DAQEHKuZhVdeGtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1710284097660?e=2147483647&amp;v=beta&amp;t=bSBiVautAOtppfk3qFH7KdswMz5hbF2GKQY63uU-euE)

# C# Exception and Error Handling

> It’s just a fact that, despite all efforts to write the cleanest and most error-free programs, at some point you’re going to run into problems. Knowing how to properly handle error conditions and exceptions within your C# programs—before they affect user experience—is an absolute must. In this course, Joe Marini shows you how to work with C# exceptions and implement best-practice error handling pr

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling) | 56m | Advanced | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Exceptional times call for exception handling
  - Getting set up
- [**1. Overview**](#1-overview) (1 videos)
  - What are exceptions?
- [**2. Exception Basics**](#2-exception-basics) (7 videos)
  - Basic exception handling code
  - The System.Exception class
  - Built-in exceptions
  - Handling multiple exceptions
  - Throwing exceptions
  - Challenge: Basics
  - Solution: Basics
- [**3. Advanced Exceptions**](#3-advanced-exceptions) (7 videos)
  - Using try-catch-finally
  - Exception filtering
  - Creating custom exceptions
  - Inner exceptions
  - Exception handling best practices
  - Challenge: Custom exceptions
  - Solution: Custom exceptions
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Exceptional times call for exception handling
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980&t=0)** - Despite our best efforts as developers, the truth is, our programs are going to run into unexpected problems that need to be handled before they affect the user's experience.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980&t=9)** In C#, this is accomplished by working with exceptions, which is the modern way for object oriented software to deal with error conditions.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980&t=17)** Hi, I'm Joe Marini, and I've been building software professionally for some of the best known companies in Silicon Valley for more than 35 years.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980&t=24)** In this course, we'll learn how to use exception handling to make sure that users of our programs get the best error-free experience possible.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980&t=32)** There are a lot of things that can go wrong in modern software.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980&t=35)** And knowing how to deal with these conditions is the key to delivering resilient code that can perform under difficult circumstances.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exceptional-times-call-for-exception-handling?u=76281980&t=42)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - despite (1)

#### Getting set up
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=0)** - [Instructor] I've set up a GitHub repository with the examples, and you can find it at this link.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=5)** The course content is organized into two separate folders.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=9)** So if we go into the source folder, you'll notice that there's a finished folder and a start folder.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=15)** The finished folder contains all of the code examples in their finished state, so you can compare your code against them as you work through the course.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=23)** The start folder contains the code examples in the beginning state, and this is the folder I will be working in throughout the course as we build towards the finished state for each example.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=36)** If you want to download the examples and work with them locally on your computer, that's easy enough to do.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=41)** Just click on the code button, and then in the local tab, you can either clone the repository to your own account or download a zip file and then use your favorite code editor to work on the examples.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=52)** You'll just need to make sure that you have the appropriate dot net SDK installed on your computer.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=57)** But this repository has also been set up with a GitHub code space, so you can just work directly online with nothing to install.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=65)** All you need to do is fork a copy of the repository into your own GitHub account, and then fire up a code space.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=72)** We click on the code spaces tab.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=74)** Here's where you can create a new code space, and you won't need to install anything.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=78)** Now you can see I've already done that, and this is the code space that I've created that I'll be using in this course.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=85)** Either way works fine, but I'm going to be using the code spaces feature in this course.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=89)** So let me go ahead and open the code space and show you what it looks like.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=93)** Now when you create your own code space, it will take a few minutes to spin up, so just be patient.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=99)** When the code space starts, you'll see a browser based version of Visual Studio Code, and then here in the files list are all the files that you'll need for the course.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=107)** You also have a built-in terminal, which can be found in the view menu.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=111)** So if I click on the little view menu stack up here, choose view, and then go to terminal, you can see that we have a built-in terminal right here in the browser, and I can check to see that dot net is already installed.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=124)** So I'll write dot net dash dash version, and sure enough, I've got dot net installed.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=130)** So that's pretty much all there is to set up.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/getting-set-up?u=76281980&t=132)** Once you have the code space set up for your account and you have the coding preferences the way you want them, you are ready to go.

> [!info]- Semantic Content
>
> **Tools:** github (3), terminal (3), visual studio (1)
> **Prerequisites:** set up (4), install (2), you'll need (1)
> **UI Navigation:** click on (3), open the (1), go to (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** download the (1), zip file (1)
> **Code Keywords:** let (1)
> **Env Vars:** sdk (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

> [↑ Back to Table of Contents](#table-of-contents)

#### What are exceptions?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=0)** - [Instructor] Let's begin with a basic definition and understanding of what exceptions are and why they happen.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=5)** An exception is an error condition that happens during the course of the execution of your program's code.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=12)** When this happens, the exception makes its way through your application until it is caught and handled by an exception handler.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=20)** So let's take a look at how this process works.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=23)** Your application consists of the code that you write in various classes, and it sits on top of the .NET framework along with any third-party libraries that you include in your app.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=32)** Exceptions have a point of origin and a point at which they are handled.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=37)** They can originate almost anywhere, in the .NET CLR itself or within a third-party library that you're using or within the .NET framework, or of course, within your own application code.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=49)** If an exception makes it all the way to your application without being handled, then your app will terminate, and that's not the kind of experience we want our users to have.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=59)** So how do we prevent this kind of bad experience?
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=63)** In our program, we enclose any code that might cause an exception within a try block.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=69)** If the code within this block causes an exception to happen, then the program flow will immediately transfer to the nearest appropriate catch block, which encloses the code that handles the exception that just happened.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=82)** If the CLR can't find an appropriate catch block to handle the exception, this is when the program will terminate.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/what-are-exceptions?u=76281980&t=89)** In the rest of this course, we'll learn about what the different kinds of exceptions are, how to handle them, and even how to generate our own exceptions.

> [!info]- Semantic Content
>
> **Env Vars:** net (3), clr (2)
> **Code Keywords:** let (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. Exception Basics

> [↑ Back to Table of Contents](#table-of-contents)

#### Basic exception handling code
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=0)** - [Instructor] Let's start by taking a look at how basic exception handling works.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=4)** So here in my code space, in the Start folder in chapter two, I'm going to open up the example code in the Basic folder.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=13)** And you can see here in my example code, I have an array of integer numbers and a statement that calls a function I've created named IntDivider, and that's down here, which takes two arguments, divides the first argument by the second one, and returns the result, which I then write out to the console.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=32)** And then the next line writes out the value at a particular index into this nums array.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=38)** So let's go ahead and run what we have already.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=41)** So I'm going to right click on the folder name and choose Open in Integrated Terminal.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=48)** And then I'm just going to dotnet run.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=50)** I'll just type it out.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=52)** And you can see that when I do that, we get the results and the output here.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=56)** So the result of, let's see, nums two, it's two, right?
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=62)** And the nums at five is four.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=64)** So four divided by two is in two.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=67)** And the number at index eight is eight.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=70)** Okay, everything's looking like it's working pretty well.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=72)** Alright, so let's cause a problem.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=75)** I'm going to change this argument to zero.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=80)** All right, and let's go ahead and run the code again.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=85)** And now you can see that the program terminates with an error message indicating that I tried to divide by zero.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=93)** And similarly, let's go back and fix that.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=96)** If I try to index beyond the end of the array, right?
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=101)** Let's run the code again.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=105)** Okay, so now I get a different error.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=107)** I'm getting an index out of range exception because I'm trying to index beyond the end of this array.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=114)** So in each of these cases, my app is causing an exception to happen.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=118)** And what I want to do is catch these problems before they cause my program to terminate with this terrible looking message.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=124)** So to fix this, I'm going to add exception handling code to my program.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=129)** So let's close the terminal.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=131)** So what I'm going to do is enclose all of my code inside a try block.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=136)** So I'm going to write try, and then I'm going to put the closing bracket down here.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=145)** All right, and then let's indent this code.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=148)** Okay, so I'm going to put the code I'm trying to execute in the try block, and then I'm going to add what's called a catch block.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=156)** And I'm going to specify that I'm catching a generic system exception object.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=165)** And then inside the catch block, all I'm going to do is just write out a message to the console.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=172)** And what I'm going to do is write out the error message so each exception object has a message property.
>
> **[2:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=179)** I'll just write that out.
>
> **[3:02](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=182)** Now, if any piece of code that is called within the try block causes an exception to happen, then the flow of the program will immediately transfer to the nearest catch block, and that's this one right here, where I can deal with the problem.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=195)** This allows me to separate the code that deals with errors from the rest of the app logic, and centralize it in one place.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=202)** So let's go ahead and try the code again.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=204)** So let's open up the terminal, and now let's go ahead and create that problem.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=210)** So let's try to divide by zero again.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=215)** So I'll run the code and now you can see I get a much nicer looking error message, right?
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=221)** It says attempted to divide by zero.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=224)** And then let's try the same thing where I try to index beyond the end of the array.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=228)** So let's go ahead and run this.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=235)** And now you can see that I'm getting the index was outside the bounds of the array message, which is the message from the exception.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=240)** Now this is a much better experience than having my program just crash with this ugly error message in stack trace.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=248)** My program has an opportunity to deal with the problem and give the user a better experience.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=254)** Now, in this case, I'm not really doing that.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=256)** I'm just printing a nicer looking error message.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=258)** But in real code, you would just deal with the problem in a much better way.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=261)** The exception object that the code is catching is an instance of the system exception class.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=267)** Let's take a quick look at the documentation for that class.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=269)** You can find it at this link.
>
> **[4:31](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=271)** Now we're going to learn more about that class in a separate video.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=273)** So don't worry about reading through this right now.
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=276)** Just keep it handy as a reference to refer back to.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=279)** Now in this example, I'm using this base exception class to catch both the divide by zero as well as the index out of range exceptions, because those are both subclasses of the base exception class.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=294)** But you can exercise a much more granular level of control over how you catch individual exception types.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/basic-exception-handling-code?u=76281980&t=301)** And we'll see examples of how to do that later in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), class. (3), function (1), this, (1), try, (1)
> **Tools:** terminal (3)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **CLI Commands:** dotnet (1), find (1)
> **Cross-References:** later in (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### The System.Exception class
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=0)** - [Instructor] Let's take a closer look at the system exception class that we briefly learned about in a previous video.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=6)** This is the base class for all other exceptions in the .NET framework.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=11)** And .NET defines many subclasses of exception that you can use within your applications to handle specific error conditions and we'll examine those more closely later on.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=21)** The exception class provides several useful methods and properties, and if I scroll down, you can see some of them listed here.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=27)** And you could use these within your exception handling code.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=30)** And I'm going to highlight some of the more useful ones in this example.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=34)** You can read more about the exception class at your own pace at this link, of course.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=39)** All right, so let's switch over to the code.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=43)** And here in chapter two, I'm going to open up my example code in the SystemException folder.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=50)** So this code is pretty similar to the previous basic example and you can see that my code intentionally triggers an exception by trying to index beyond the length of this array.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=63)** So let's run what we have, and I'm going to open up this in the terminal and just run this.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=73)** And you can see that sure enough my code currently is just writing out the exception to the console.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=80)** I'm going to add some code that accesses some of the more important parts of the exception object.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=87)** So let's go ahead and close that.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=90)** All right, so we can use the get type function, which is defined in the object based class to get the actual type of the exception itself.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=100)** So I can write Console.WriteLine, and I'm going to write out the Type and then I'm just on the exception, I'm going to call GetType.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=112)** Okay, let's keep on going.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=115)** So I'll copy and paste that.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=116)** The message property, which we kind of saw already in a previous example, is the text string that is shown to the user.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=125)** So I'll print that out as well.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=128)** There's a property called HelpLink, and that's optional and can be used to provide a link to documentation about the exception.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=136)** So you should provide this when you define your own exceptions, so developers will know what to do when they see it and we'll see how to do that later.
>
> **[2:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=143)** So I'll just write out the HelpLink.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=147)** And this property right here.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=153)** All right, the source property tells us the application or the object where the exception occurred, so we'll print that out as well.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=166)** TargetSite is the name of the method that through the exception, so let's go ahead and put that in.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=178)** And then finally, the StackTrace contains the stack of function calls that led up to the exception.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=186)** And this information can be very useful when you're debugging your code.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=189)** So let's go ahead and copy this line and paste that in.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=193)** And we will have this be printed out as the stack, and that's going to be the StackTrace property.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=202)** Okay, so let's comment out the original Console.WriteLine code there, and then let's run the code again.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=211)** So let's bring this up in the terminal and let's run.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=221)** All right, and now you can see that we have a much richer set of information about the exception.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=227)** So here's the type, that's the class name, right?
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=230)** There's the message.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=231)** We can see that there's no HelpLink for this one because it wasn't provided.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=235)** We can see that the source was the SystemException app, right?
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=239)** That's what we're currently working in.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=241)** The TargetSite is the main function.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=243)** Okay, sure enough.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=244)** And then the stack, we can see the stack trace here.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/the-system-exception-class?u=76281980&t=247)** So you can use each of these properties to provide more information to either yourself or other developers as they're working your code to help handle the exceptions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (3), switch (1), this. (1), finally, (1)
> **Env Vars:** net (2)
> **Tools:** terminal (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Built-in exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=0)** - [Instructor] Now that we've learned a little bit about the system exception base class, let's take a look at some of the more specific exception classes that are derived from the base.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=9)** It is generally considered a best practice to use the most specific exception class possible that meets your program's needs in order to keep your codes simple and avoid having many different exception types being caught by your catch statements.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=23)** So here's some of the more common built-in exception types that your code will encounter.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=28)** An ArgumentException occurs when an argument that was passed to a function is invalid for some reason.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=34)** And similarly, the ArgumentNullException indicates that an argument to a method was null when it shouldn't have been.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=42)** The ArgumentOutOfRange exception occurs when an argument is outside of a range of acceptable values.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=50)** DividedByZeroException is pretty self-explanatory, as is the file not found exception, which happens when you try to operate on a non-existent file.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=59)** We've already seen the IndexOutOfRangeException, and the InvalidOperationException happens when you try to perform an operation on an object and that operation isn't valid for the current state of that object.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=74)** So let's take a look at these and try out a couple in our code.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=79)** All right, so let's go into the chapter two built in project and we'll bring up the code here.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=85)** So this is the same code as my original example from a previous video.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=89)** And my catch statement is catching every single exception when it should just be looking for divide by zero or index out of range.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=99)** So to fix this, I can just use the specific exception type.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=103)** So I'll change this to DivideByZeroException.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=110)** All right, and then let's go ahead and run our code, which divides by zero.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=115)** So let's bring this up in the terminal, and then let's run this code.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=125)** And sure enough, you can see that the DivideByZeroException is in fact getting caught.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=130)** I can also change it to the IndexOutOfRangeException.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=138)** And let's go ahead and fix that problem.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=139)** And now try to index out of range, which you can see is happening right here.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=144)** We'll run this again.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=147)** And now the index out of range exception is being caught.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=150)** Now of course you've probably noticed that we need a way to catch both exceptions, not just one or the other.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/built-in-exceptions?u=76281980&t=157)** And we'll see how to do that in a separate video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class, (1), function (1), self (1), this, (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Handling multiple exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=0)** - [Instructor] In our original exceptions example, we saw how to handle an exception in our code by declaring a catch block that indicates the type of exception.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=9)** Now, let's go back to our code.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=11)** And in the multiple folder in chapter two start, let's open up the program code.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=16)** And this is the same example I've been using.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=18)** So this example uses the exception base class, which pretty much means it's going to catch any type of exception that is thrown, but that's not usually the best way to handle exceptions.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=29)** What you usually want to do is create a catch block for a specific exception type, and then handle that specific exception within that code.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=38)** Now of course, in order to do this, you need to have a way of handling more than one exception type.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=43)** And you can do this by simply declaring multiple catch blocks with different exception types.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=49)** So let's go ahead and modify our original example to handle the divide by zero and index out of range exceptions individually.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=58)** So first I'll change this catch block to handle divide by zero.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=66)** All right.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=67)** And now I need to create another block for the index out of range.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=71)** So I'll just copy and paste this one, and we'll replace this with index out of range exception.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=80)** And I can create as many of these catch blocks as I need, depending on how many exceptions my code might generate.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=87)** All right, so let's go ahead and exercise our updated code.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=90)** So first, let's go ahead and trigger the divide by zero exception, you can see that that's happening here.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=97)** So let's open this up in the terminal, and we'll run our code.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=108)** And sure enough, there's the divide by zero exception happening.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=111)** All right, let's go ahead and fix that code.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=113)** And now let's trigger the index out of range one.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=119)** All right.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=121)** Now you might be wondering what happens if I try to put a more generic exception handler in front of these two.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=128)** So for example, let's go and add the generic exception handler that we started with up here.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=137)** And I'll just change this one back to exception.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=140)** All right, and so now let me hide this for a second.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=145)** Now I have the original exception, and these two down here, but you can see that when I try to run this code, well, I'm not actually going to be able to run it.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=153)** You can see there's errors already, but let's just bring up the integrated terminal anyway and let's just try to run the code.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=161)** All right.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=164)** And you can see I'm getting an error.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=166)** And the error is informing me that the two more specific catch blocks can no longer be reached.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=173)** That's because this generic one is going to handle all the exceptions that come its way.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=178)** So as a best practice, what you need to do is handle the more specific exceptions first and handle the more generic ones later.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=186)** So if I took this catch block and moved it down to the bottom, now you can see that that's okay, the error goes away, and let's clear this and run our code again.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/handling-multiple-exceptions?u=76281980&t=202)** And now I can run the code once again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), class, (1), type, (1), this, (1), type. (1)
> **Tools:** terminal (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Throwing exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=0)** - [Instructor] So far, we've seen how to write code that handles exceptions.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=4)** But of course, there'll be times when your code will need to raise its own exceptions during the normal course of execution.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=10)** This is done using the throw keyword.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=13)** So let's open up our sample code in the Throwing folder of chapter 2.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=19)** And what I've done is I've got some sample code here that represents a digital oven.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=27)** I've got a class called MyOven.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=29)** And there's two functions, one for setting the oven temperature and one for retrieving it.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=35)** Now, the oven can only be set to a temperature between 100 and 500 degrees, otherwise, that's an error.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=41)** And right now, there's no code to catch this condition.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=44)** So if you look up here in my main code, I have two calls to the SetOvenTemp function, one for 300 and one for 600.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=53)** So let's go ahead and bring this up in our terminal.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=57)** And let's run the code.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=60)** So, if I run the program as it is right now, you can see that MyOven dutifully tries to set the temperature to 600 and retrieves the value just fine.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=71)** So what I'm going to do is throw an exception if the collar of the SetOvenTemp function passes a value that's outside the acceptable range.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=81)** So let's go ahead and fix that code.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=84)** And let's bring this down a little bit, there we go.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=88)** So here in my SetOvenTemp function, I'm going to write some logic that says if the temperature is less than 100 or the temperature is greater than 500, I am going to throw a new argument out of range exception.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=115)** And the argument out of range exception takes a few arguments.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=118)** First, I'll give it the argument that caused the problem, and that's going to be TemperatureF.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=125)** Okay.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=126)** And then I'm going to pass in the actual value that was given by TemperatureF.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=131)** And then I'm going to have my message, which is going to say, "The oven temp setting must be between 100 and 500."
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=147)** All right. So now, let's try to run the code again.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=155)** All right. And now, you can see that the code is throwing an exception, right?
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=160)** It says right here, exception.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=161)** The oven temp must be between 100 and 500.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=164)** It shows that the parameter that was passed in that was wrong is this one named TemperatureF, and the actual value given was 600.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=174)** Now, in this example, I'm using one of the built-in exception classes, which is called ArgumentOutOfRangeException, we saw those earlier.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=183)** However, I can also define my own exception classes, my own custom version of exception classes that descend from the base exception class.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/throwing-exceptions?u=76281980&t=193)** And we'll see how to do that later in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), throw (3), function (3), raise (1), pass (1)
> **Exercise Files:** sample code (2)
> **Cross-References:** later in (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Basics
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=0)** - [Instructor] All right, let's try a programming challenge.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=3)** So for this challenge, you're going to create a simple program that reads in two integer numbers and performs a user-specified operation on them.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=11)** So I'm going to run my finished code so you can see what the application looks like.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=16)** So here in my finished chapter two, I'm going to open up my finished challenge, and let's give this a full screen and I'm going to run the code.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=27)** All right, so you can see I'm being prompted for the first integer number, so I'll enter 10.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=33)** And then, "Enter the second integer number," and I'll enter five.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=37)** And then, "Enter the operation," I can either add, subtract, multiply, divide, or I can type exit to quit.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=44)** So I'll choose D for divide.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=47)** And you can see the result is two, okay?
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=49)** So the program needs to be able to handle exception conditions.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=54)** So for example, if I enter a value that's not a number, so I'll enter A and then B, and then I'll do add, right?
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=64)** You can see that I'm getting this message that says, "The input string was not in a correct format," so I'm handling an exception there.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=71)** And then also, if I try to divide by zero, that's an exception.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=75)** So if I enter 10 and zero and then do divide, right, you can see that I'm getting my "Attempted to divide by zero" message.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=84)** And if I try to choose an operation that isn't one of the four that I'm given, that's also an exception.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=91)** So I'll enter 10 and then 5, and then I'll enter C for something.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=99)** And you can see that I'm getting a "'c' is not a valid operation."
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=103)** And I'm being told that there's a parameter that's wrong there, okay?
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=107)** And to exit, I'll just have to type exit, so I'll put in one, one, and then I'll just type exit.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=113)** And then my program exits.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=116)** Now in the Start folder, I have given you a starting point for this code, okay?
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=124)** So here is the starting point.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=126)** You might need to define some of your own local variables.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=129)** The ReadLine function reads in the input from the console as a string, and I'll give you a hint, okay?
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=137)** You'll need to use the Parse function to convert the string that you read in into an integer, and you can see the documentation for that here at this link.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=147)** So the Parse function will take a string and try to parse it into, in this case, an integer.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=153)** And if we scroll down a little bit, you'll see that it throws a format exception if the string can't be converted to a number.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=162)** So that might be one of the exceptions you'll need to deal with.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-basics?u=76281980&t=166)** All right, so go ahead, give the challenge a try, and then I'll be back to explain my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), case, (1), try, (1)
> **Prerequisites:** you'll need (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: Basics
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=0)** - [Instructor] All right, so how did you do?
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=1)** Were you able to handle the different exceptions?
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=4)** Let's take a look at my code.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=6)** So the first part of my solution is the same as the starting point that I provided for your challenge.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=11)** I've defined a few local variables to use.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=15)** And so here I have the code that reads in the user input.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=19)** All right.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=20)** And let's see, if we scroll down a little bit.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=23)** This is where the challenge part was.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=25)** So I needed to convert the string to a number and then perform the operation that I was told to do.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=31)** So I enclosed my code in a try block.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=33)** And the first two operations here, the first two calls to Parse are to convert the strings that the user entered up here in the calls to the ReadLine.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=45)** And I'm doing that using the Parse function.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=49)** Now, as I showed in the documentation, this function may throw a FormatException.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=54)** So I catch that FormatException as my first catch block.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=58)** And then I write out the message that the exception comes along with.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=63)** We already saw how to handle the DivideByZeroException earlier in the course.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=67)** So that one was easy enough to implement as well as the second catch block.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=71)** And then the third exception is one that my code throws on its own.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=76)** So you'll see that I have a switch statement here that switches the operation that was chosen.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=81)** And if they chose add, subtract, multiply or divide, everything's fine.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=85)** But if they enter anything else, you can see I'm throwing a new ArgumentException with a message and the name of the parameter that caused the exception.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-basics?u=76281980&t=96)** Otherwise, my code computes the result, and then the loop continues until they type the word, exit.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), throw (1), switch (1), else, (1)
> **Cross-References:** earlier in (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Exceptions

> [↑ Back to Table of Contents](#table-of-contents)

#### Using try-catch-finally
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=0)** - [Host] One of the challenges of writing good exception handling code is that there are going to be times when you want a certain piece of code to always execute regardless of whether an exception occurred.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=12)** And a good example of this is when you need to clean up any shared resources that were allocated to your code that need to be released, such as closing a file that was opened earlier in the code.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=22)** And the way to accomplish this in C Sharp is by using the finally keyword.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=27)** So let's take a look at the example code in the finally folder here in chapter three start.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=36)** So to define a block of code that has to always execute, I'm going to add a finally block after all of the catch blocks, and it just works like it sounds.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=47)** I'll just simply say, finally, and then I'll just console out right line.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=54)** This code always runs.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=58)** All right, so let's go ahead and try this out.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=62)** And first I'll make sure that the code is going to run with no problems.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=66)** Looks like it. All right.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=67)** So let's open this up in our terminal and let's run this code.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=77)** And you can see, sure enough, we get valid output and then the message this code always runs.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=83)** Alright, so now let's introduce an exception by indexing out of bounds on the nums array.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=90)** So let's go ahead and make that 15, and let's clear the console and then let's run again.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=102)** Okay.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=103)** And sure enough, you can see that when I run the code, we can see the exception that the index was out of range, but that this code always runs.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=110)** And this is useful.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=112)** So for example, if we go back to the code and take a look, if I had allocated a shared resource in here, like opening a file, but then an exception happened, I might not ever get to the code in my tri block that closes the file when I'm done with it.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/using-try-catch-finally?u=76281980&t=126)** So I need to put things like that inside my finally block to make sure that any shared resources get de-allocated whenever the code completes, regardless of whether or not an exception happened.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), finally, (1)
> **CLI Commands:** make (3)
> **Cross-References:** earlier in (1), go back to (1)
> **Analogies:** such as (1), for example (1)
> **Tools:** terminal (1)
> **Speakers:** - [host] (1)

#### Exception filtering
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=0)** - [Host] One of the really interesting features of C Sharp Exceptions is the ability to attach Boolean conditions to individual catch blocks.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=9)** This is called exception filtering, and it gives you the ability to indicate that the catch block should only match the exception if the associated Boolean condition returns true.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=19)** So let's take a look at how this works.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=21)** So here in my filtering folder in start chapter three, let's open the code.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=26)** And in this example, I have some code that attempts to retrieve a value at a given index from this array.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=35)** And if the index is not within the bounds of the array, then an index out of range exception gets generated.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=43)** And you can see here that it's handled by my code, right?
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=45)** So let's go ahead and run this.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=48)** Let's open up this in the terminal and let's run it.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=56)** Right, and you can see that if I index into the array, that's fine, but if I make this out of range, let's run it again.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=65)** You can see that I'm getting my exception.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=68)** It says parameter index cannot be greater than the array size, which, and I passed in 15, which is wrong.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=75)** All right?
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=77)** And if I do something really dumb, like if I make this negative 15, and sure enough you can see same exception as being generated and caught.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=92)** Now I can further fine tune this code by adding another exception handler with an exception filter.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=100)** So let's close this and what I'm going to do is I'm going to add another catch handler and I'm going to catch index out of range exception again.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=113)** And I'm going to add a clause that says when Index is less than zero.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=124)** And actually I need to put that in front of my other catch handler because it's more specific.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=131)** Alright, so when this happens, I'm going to just copy this message from my existing handler and we'll paste that in.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=142)** And in this case I'm going to have a different message.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=144)** So my regular exception says parameter index cannot be greater than, but if I pass in a negative number, I want my message to say parameter index cannot be negative.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=159)** Alright, so now I'll get a different error message when my index parameter, which is passed into my function here, is less than zero.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=168)** Alright, so let's go ahead and try accessing my array with a negative number again, and let's go ahead and run this.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=183)** All right, so let's execute our code.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=190)** And sure enough, you can see now it says parameter index cannot be negative when I pass in a negative number and when I pass in a positive number, we should get the original... yes.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=200)** Now we get the original exception message.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=204)** So if the exception filter returns false, then the exception will continue to bubble up through the stack until another handler is able to process it or the program terminates.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-filtering?u=76281980&t=214)** So using this technique, you can fine tune how your exception handlers trigger based upon the values of other elements in your code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (3), this. (2), function (1), continue (1)
> **CLI Commands:** make (2)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Definitions:** is called (1)
> **Speakers:** - [host] (1)

#### Creating custom exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=0)** - [Instructor] Up until now we've seen how to use the built-in exception classes that .NET provides, but in any real software project there will most likely be a need to create your own custom exception classes.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=11)** So, let's see how to do that.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=13)** So, for this example my code is in the Start folder in chapter three in the Custom folder, so let's open up the Program code.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=21)** All right, so for this example I have some code that controls a digital oven, so this is very similar to a previous example that we saw in the course earlier.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=30)** And the oven temperature range is limited to between 100 and 500 degrees.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=36)** So, if a developer tries to set a temperature outside that range I want to throw an exception.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=43)** And you can see down here I've got my oven code, and this is where the oven temperature is set.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=48)** And I'd like to throw that exception right here.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=51)** So, for my program I'm going to create a custom exception for this case.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=55)** Previously we used one of the built-in exceptions, but now we're going to create a custom exception class.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=60)** So, let's open up the OvenTempException.cs file.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=65)** And you can see that I have the beginnings of a custom exception class here that derives from the base system exception class.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=73)** My exception has a data field named OvenTemp, which will be set by the caller when the exception is created.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=80)** Now, it's considered a best practice to create three particular constructors when defining your own exceptions.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=89)** And we're not going to use them in this example, but I want to at least show you what they look like because it is considered a best practice to do this in .NET.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=96)** So, the first is the default constructor, which takes no arguments.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=100)** So, I'm going to create a OvenTempException that doesn't take any arguments and just initializes the base exception class.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=111)** And I'll set my OvenTemp to be zero.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=115)** All right, the next one is a constructor that takes a string argument, and in this case it'll take the message.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=124)** And once again, I'll initialize the base class and set my OvenTemp to zero.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=135)** And then the third required constructor is one that takes a string and something called an inner exception, and that is an exception type.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=149)** So, I'm just going to pass in this InnerException, and I will initialize the base class with the message and the InnerException.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=164)** And then once again, I'll set my OvenTemp to zero.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=169)** Okay, now again, we're not going to use these three constructors in this particular example, but this is considered a base class to make these three.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=178)** And now that I've defined my three required constructors I'm going to add a fourth one.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=185)** And before I do that actually, don't worry too much about what this is, the InnerException.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=189)** I'm going to explain this in a separate video, okay?
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=190)** So, don't get hung up on that.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=192)** But what I need to do now is define my fourth constructor, and that's going to take an integer value.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=205)** And I'm going to initialize the base constructor with the oven cannot be set to, and then we'll put the value in there.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=219)** All right, and then once again, inside my class this time we'll set OvenTemp equal to Value.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=233)** All right, so now we've created the custom exception class, and we can go back to our code and use it.
>
> **[3:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=239)** So, let's go back to, oh, whoops.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=243)** That's uppercase V, there we go.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=247)** Okay, so let's go back to our main code.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=250)** So, let's first add the catch handler to handle our new custom exception.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=256)** So, here before my finally clause I'm going to put in a catch, and it's going to handle the OvenTempException.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=264)** And I'll just simply write out to the console that we got an exception, and let's output the message from the exception.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=279)** All right, so all we need to do now is create and throw the exception when the temperature is outside the acceptable range.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=288)** And remember, earlier in the course we did this using a built-in exception, so I'm going to have pretty much the same logic now.
>
> **[4:54](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=294)** So, if the temperature is less than 100 or it's greater than 500 I'm going to throw a new OvenTempException, and I'll pass in the temperature as the argument.
>
> **[5:13](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=313)** And that's all we need to do.
>
> **[5:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=315)** All right, so let's go ahead and run our code.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=319)** Let's bring this up in the terminal.
>
> **[5:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=324)** And you can see that when I do this, so the call for 200 should work, which it does.
>
> **[5:32](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/creating-custom-exceptions?u=76281980&t=332)** And then when I try to call it with 600 degrees we can see that our custom exception is being thrown and caught.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), throw (4), class. (3), pass (2), case. (1)
> **Cross-References:** go back to (3), earlier in (1)
> **Env Vars:** net (2)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** best practice (2)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Analogies:** similar to (1)

#### Inner exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=0)** - [Instructor] In a previous video, I briefly talked about inner exceptions.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=4)** And if you look at the documentation for the base exception class, you can see that, if I scroll down a little bit here, there's a property called Inner Exception.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=14)** And so it's a part of every base exception class.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=18)** So every exception that derives from the base exception class has this property in it.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=24)** So in this example, we're going to take a closer look at what inner exceptions are and how they're used.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=30)** The easiest way to think about this is that an inner exception is the exception that caused another exception to happen.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=39)** So you use the inner exception property to keep track of this, so that the original exception doesn't get lost.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=46)** So let's go over to our code.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=48)** And in chapter three, I'm going to open up the Inner Except example here.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=53)** And I'll open up my program code.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=56)** And I'm going to show a small example of how this works.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=59)** Now, let me be clear before we start by saying that what I'm about to demonstrate is a very contrived example.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=65)** This is only to demonstrate how inner exceptions work.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=69)** In reality, the particular example I'm about to show you is probably not one that you would encounter, but it's a very concise way of showing how these work.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=79)** So this code is a variation of the example we saw at the beginning of the course.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=83)** So I'm going to divide two numbers, which is going to cause a divide by zero exception to happen.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=90)** Now, in this case, my exception handler calls a function named Log Exception that will log the exception out to a file.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=100)** Ah, but there's a problem.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=102)** The file that I want to log the data into doesn't exist.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=106)** So now that's going to cause another exception to happen.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=109)** So let's go ahead and run this code in its current form.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=116)** So let's write "dotnet run," okay?
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=121)** And when we do this, ah, you can see, sure enough, that the log exception function, let me scroll down to that, sure enough, is catching the fact that the file not found exception is happening because the log file doesn't exist.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=135)** But that's masking the real problem, right?
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=138)** The real problem is that the divide by zero exception is what caused all of this to happen in the first place.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=145)** So what I really want to do is rethrow the file not found exception, so that it will be resurfaced in the program and get the attention of the developers so that we can fix it.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=156)** To do that, I can add a throw statement to the handler, and I'm going to use the form of the constructor that takes the inner exception argument.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=166)** So let's go ahead and change our code.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=168)** So, what I'm going to do is down here where I catch my file not found exception in the log exception code, I'll go ahead and write out that console, but then I'm going to throw a new file not found exception.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=189)** And I'll just say, "Hey, exceptions.txt is missing."
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=196)** And I'm going to include this exception here, the argument that I was trying to log out in the first place.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=203)** That's now my inner exception argument, all right?
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=207)** Okay, so now let's run again.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=213)** So we'll run this again.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=218)** And sure enough, okay, the log file doesn't exist, but oh, no, right now my file not found exception bubbles all the way up through the program and it terminates the program because it's not being handled by anybody.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=231)** So if you look at the output, you'll see that buried in here, sure enough, there's a divide by zero exception, right?
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=238)** Because we passed it as the argument in the rethrow statement, that's the inner exception, right?
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=243)** This is the exception that's being passed as the inner exception to the one that I'm rethrowing.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=249)** But this is really messy, right?
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=250)** This isn't fun to read.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=252)** So let's add some code to handle this a little bit better, where we call the log exception function in the first place.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=259)** So let's close this.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=261)** And up here where we're calling log exception, let's go ahead and enclose log exception inside its own triblock.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=274)** And then let's catch the file not found exception that might happen, and we'll label that "fnf."
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=285)** And in this case, I'm going to just write out to the console that the file was not found, and I'll just write out that exception.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=301)** And I'm going to check, I'm going to say, "Hey, if that file not found exception, if that inner exception property is not equal to null, right?
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=311)** Let's write that out too."
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=316)** And I'll make a note that there's an inner exception here.
>
> **[5:18](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=318)** "Hey, we've got an inner exception," and that's going to be the fnf.InnerException.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=329)** All right, so now let's run this one more time.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=338)** All right, and when we run this, we can see, sure enough, that we are getting our... oh wait, oops, hang on a second.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=348)** Oh no, this is the, yeah, this is the stack trace that I'm writing out.
>
> **[5:51](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=351)** Let's go ahead and just print out the message instead, so it's a lot easier to read.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=356)** ".Message," there we go.
>
> **[5:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=359)** Let's clear this and run it one more time.
>
> **[6:06](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=366)** All right, so now we can see that the log file doesn't exist, right?
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=370)** We have our stack trace, because exceptions is missing.
>
> **[6:12](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=372)** And down here you can see it says, "InnerException: Attempted to divide by zero."
>
> **[6:17](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=377)** Ah, okay, that's a little bit easier now, as a developer, I can say, "Oh, I'll have an easier time tracking down the real problem because whatever's causing my log file to not be there, looks like this has something to do with that, right?"
>
> **[6:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=389)** The inner exception property allows me to attach the original exception to any new exception that gets generated along the way.
>
> **[6:38](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=398)** And of course, you can have as many of these chained together as needed.
>
> **[6:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=401)** Now, my example only shows two, right?
>
> **[6:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=403)** The divide by zero, and the file not found that was caused.
>
> **[6:46](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=406)** But you can imagine that this file not found exception, could itself become another inner exception elsewhere in the program.
>
> **[6:53](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/inner-exceptions?u=76281980&t=413)** So it basically gives you a way of maintaining the full context of what happened, when handling an exception might cause one or more other exceptions to happen in the process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), this, (3), function (3), case, (2), throw (2)
> **CLI Commands:** dotnet (1), make (1)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (2)
> **File Paths:** exceptions.txt (1)
> **Cross-References:** previous video (1)
> **Documentation:** the documentation (1)
> **Analogies:** imagine (1)

#### Exception handling best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=0)** - [Instructor] We've learned quite a bit about exceptions so far during the course.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=3)** So let's take a moment now and review some of the best practices for working with exceptions in C#.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=9)** Many of these practices might seem like common sense, such as our first one, and that is, one, try to avoid throwing exceptions whenever possible.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=17)** Many kinds of exceptions can be avoided just by doing some common checking for problems, like arguments with values that are null or invalid, or indexes that will be out of range, trying to read or write files that don't exist and so on.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=31)** So by performing some basic checks, you can avoid executing code that will cause exceptions in the first place.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=38)** Also, remember that exceptions are intended to handle error conditions within your program.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=42)** Don't use exceptions intentionally to change the flow of your program.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=47)** There are other better logical constructs for doing this.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=52)** When writing your catch blocks, start with the most specific exceptions and then move to the more generic ones.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=59)** Remember that the first catch handler that matches an exception is the one that gets invoked.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=63)** So if you put the more generic ones first, then the specific ones are less likely to get called, or not at all.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=70)** A related best practice is to not catch System.Exception directly.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=75)** And the reason for this is because doing this will catch all the exceptions that get thrown in the program, including the ones coming from the CLR, and that might mask other problems or catch exceptions that your code isn't even designed to handle.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=92)** Remember to use finally blocks to clean up any resources that might get left allocated as a result of an exception happening, and this includes closing any files that were opened or other shared system resources that need to be released.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=106)** The next few practices are related to defining your own exception classes.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=111)** When defining an exception class, end the name with the word "Exception."
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=116)** This ensures that it's clear what the class does, and the name is consistent with other exception code throughout .NET.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=123)** Before you go defining your own exception classes, try to use the ones that are already predefined in .NET.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=129)** By using the predefined exception classes, you can reduce the amount of additional learning that other developers working in your code will have to do, and it cuts down on code size and complexity.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=141)** When you create your own custom exceptions, you need to supply three constructors.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=145)** There's the base constructor, which uses default values; the constructor that takes a string message, and the constructor that takes a message along with an inner exception.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=156)** By defining these three constructors, your code will be compatible with the rest of the exception handling code in .NET.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/exception-handling-best-practices?u=76281980&t=162)** By following these practices, you can help ensure that your code is using exceptions properly and will be able to operate with the rest of the .NET framework.

> [!info]- Semantic Content
>
> **Env Vars:** net (4), clr (1)
> **Code Keywords:** let (1), this. (1), class, (1)
> **Best Practices:** best practice (1), remember to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Custom exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=0)** - [Instructor] Okay, let's try another programming challenge.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=3)** For this challenge, you're going to implement a coin counting program, and you might have seen machines that do this in one of your local stores.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=10)** You put your coins in the machine and it counts them for you.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=14)** So we're going to build that.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=16)** And here is the starting point for the challenge.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=19)** This array of strings will represent the test input to your code.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=24)** Your program will then be called using this logic.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=28)** So we're going to create the CoinCounter class, which you're going to implement.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=33)** And then for each one of the coins in the test coin array, we're going to call the CountCoin method with that coin.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=40)** You're going to total up all the coins, and then you're also going to maintain a list of bad inputs and write those out to the console when your program is done.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=49)** Because sometimes people put things in the machine that are not valid coins, and you can see examples of that here in the list, like a washer and medallion and so on.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=59)** So I've given you the starting point for the program.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=62)** What you're going to need to do is implement the CountCoin method, the ListBadCoins method, and down here there's a custom coin exception class.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=74)** So if your program detects a bad coin, then it needs to throw and handle the coin exception, and that will be, just as a little hint, how you detect and maintain the bad coins list.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=86)** So I'm going to run my finished version of the code so you can see what the output looks like.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=93)** So I'll open up this in the terminal and let's make that full screen and let's run the code.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=101)** All right, and there you can see the result.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=103)** So the total amount counted is, in this case, $3.37.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=108)** And there were five bad coins counted.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=110)** There were a washer, well, there's two washers, a spacer, a token, and a medallion.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=116)** So you need to maintain that list as you're counting the coins.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/challenge-custom-exceptions?u=76281980&t=120)** So go ahead, give this challenge a try, and then I'll explain my solution in a separate video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class, (1), class. (1), throw (1), case, (1)
> **CLI Commands:** make (1)
> **Versions:** 3.37 (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Solution: Custom exceptions
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=0)** - [Instructor] All right, let's take a look at my solution to the challenge.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=3)** So remember, we needed to implement a coin counting program using these test coins as input.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=10)** And our job was to implement inside of our coin counter class, we had to count the number of coins, we need to list the bad coins, and we needed to use this custom CoinException class.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=25)** So let me explain each step.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=27)** So I start off by creating a List variable that's a local list of strings.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=34)** And this is where I'm going to maintain the list of bad coins because this gives me the ability to keep track of each one of the names of the bad coin examples, as well as automatically give me a count.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=48)** There's also a local variable that I'm going to return, which is going to be the total amount of the coins counted.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=55)** All right, so here in my CountCoin function, it takes a string as an input.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=60)** And what I'm going to do is use a try-catch block.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=63)** So the try block is going to try to add to the total amount the value represented by the coin type.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=71)** If an exception happens, in this case the custom CoinException, then we add to the badCoins list the object type.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=80)** Then this is a local variable that's inside the custom CoinException.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=83)** I'll explain that in a moment.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=84)** We're going to add that to the badCoins list.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=87)** All right, so let's scroll down and see the logic.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=89)** My CoinValue function takes in the string, looks to see what the string is to check against all of the known valid coin types, right?
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=98)** So we've got penny, nickel, dime, quarter, half dollar, and dollar, and returns the value of each one of those coins.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=107)** If it's not one of those valid coin types, then I throw a new CoinException and I pass in the CoinType string that I was given along with the message "Bad coin type".
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=120)** All right, so let's scroll down to the exception.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=122)** We'll come back to the list in a second.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=125)** My custom CoinException has a local variable named ObjectType, which is the coin type that I was given.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=131)** I define the three constructors needed for the best practices, even though I'm not using them in this example, it's always the best practice to define them.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=139)** And then this is the function that I'm going to use.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=141)** So when I throw a new coin exception, I pass in the coin type and set that to my local property along with the message and I initialize the base exception class with my message.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=153)** Let's scroll back up.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=156)** So when the exception happens, you can see that in the badCoins list, we now add the type of that exception coin, right?
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=165)** So this is where we're keeping track of all the lists.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=168)** And then finally, remember, after we count all the coins, we have to write out the total.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=174)** Well, that's pretty much easy, right?
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=176)** I just simply output the total property of my coin counter class, which is represented by this internal property here.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=183)** And then the ListBadCoins function is right here.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=190)** The ListBadCoins function simply outputs the count property of the badCoins list, which is the total number of bad coins counted.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=197)** And then I loop over each string in the bad coins list and output the name of the bad coin.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=203)** All right, so that's my solution. How did you do?
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/solution-custom-exceptions?u=76281980&t=206)** Were you able to count the bad coins and get the right total?

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), class, (2), type. (2), throw (2)
> **Code Identifiers:** badcoins (4)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=0)** - [Joe] All right.
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=1)** Congratulations on completing the course.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=3)** Exceptions are a core feature of C# and .NET programming, and understanding how they work will help you become a better .NET developer.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=9)** If you're looking for some suggestions on where to go next, I have some ideas for you.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=14)** To learn more about other key features of C#, consider checking out C# Events, Delegates, and Lambdas or [[C- Interfaces and Generics]].
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=23)** Each of these courses cover parts of the C# language that you will encounter as you build more sophisticated and complex applications.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=30)** Of course, there are plenty of other C# titles to check out here in the library, as well as to help you stay up to date with the .NET platform.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=37)** I'll see you again soon.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-exception-and-error-handling/next-steps?u=76281980&t=39)** Until then, happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** net (3)
> **Speakers:** - [joe] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-exception-and-error-handling-3812037/codespaces)

## Skills Covered

- Debugging
- C#

## Path Context

### In [[Elevating C- Skills- Building Robust Applications]]
← [[C- Test-Driven Development]] | **5 of 8** | [[C- Cross-Platform Development]] →

## Appears In

- [[Elevating C- Skills- Building Robust Applications]]

## Related Courses

_Courses sharing skills:_

- [[React- Testing and Debugging]] — Debugging
- [[Advanced PHP- Debugging Techniques]] — Debugging
- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#

---

[↑ Back to top](#)