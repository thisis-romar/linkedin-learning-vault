---
type: course
slug: c-sharp-interfaces-and-generics-14335425
url: "https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425"
duration_minutes: 81
duration: 1h 21m
level: Intermediate
updated: 12/13/2023
learners: 230531
skills:
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/C-sharp-Interfaces-and-generics-3152729"
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/c
status: not-started
created: 2026-04-17
---

# C#: Interfaces and Generics

> Are you looking for ways to level up your C# coding? In this course, programming expert Joe Marini guides you through how to use interfaces and generics in C#. Joe explains that interfaces and generics both are used to construct flexible classes. He walks you through how to define and implement an interface, how to use an interface when casting one C# class to another type, how to implement more t

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425) | 1h 21m | Intermediate | 231K learners

## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/C-sharp-Interfaces-and-generics-3152729)

## Skills Covered

- C#

## Table of Contents

### Introduction

#### Learning C#: Interfaces and generics
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/learning-c-sharp-interfaces-and-generics-23314002?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/learning-c-sharp-interfaces-and-generics-23314002?u=76281980&t=0)** - Hi, I am Joe Marini.
>
> **[0:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/learning-c-sharp-interfaces-and-generics-23314002?u=76281980&t=2)** In this course, we're going to learn about two very useful C Sharp features, interfaces and generics.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/learning-c-sharp-interfaces-and-generics-23314002?u=76281980&t=7)** Interfaces provide a way to specify a set of related behaviors that can be used by different classes.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/learning-c-sharp-interfaces-and-generics-23314002?u=76281980&t=13)** Generics give you a way of defining type safe data structures in your application without committing to a specific data type ahead of time.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/learning-c-sharp-interfaces-and-generics-23314002?u=76281980&t=21)** These two features help prevent bugs and improve your app's performance when working with various kinds of data.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/learning-c-sharp-interfaces-and-generics-23314002?u=76281980&t=27)** They may sound a little complex, but once you see them in action, you'll wonder how you ever got along without them.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/learning-c-sharp-interfaces-and-generics-23314002?u=76281980&t=32)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - hi (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=0)** - [Instructor] Before starting this course, there are a few concepts that you should already be familiar with.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=4)** First, you should already know the basics of the C# language, such as how to write functions, declare variables, and so on.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=11)** If you need to brush up on basic C# knowledge, check out the Learning C# course first.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=17)** I'm also going to assume that you already know about common object oriented programming concepts, such as classes, methods, inheritance, and so on.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=25)** You can learn more about these concepts in the Programming Foundations: Object-Oriented Concepts course if you need to brush up.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=31)** You should also be familiar with certain kinds of data structures, like arrays, lists, and similar ways of working with structured information.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=39)** Some of the examples will also use C# constructs, such as delegates.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=43)** If you're not familiar with delegates, then you should consider watching C#: Delegates, Events, and Lambdas before taking this course.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=49)** And finally, of course, you should know how to use an integrated development environment, or IDE, to write code and run and debug applications.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=58)** I'm going to use Visual Studio Code in this course, which is free and works both on Mac and Windows, but you can use another version of Visual Studio, such as the Community Edition as well, and it should just work fine.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=70)** If you're not familiar with Visual Studio, consider watching Visual Studio 2019 Essential Training.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-you-should-know?u=76281980&t=75)** Once you feel comfortable with these concepts, you are ready to get started on the course.

> [!info]- Semantic Content
>
> **Tools:** visual studio (4)
> **Analogies:** such as (4)
> **Code Keywords:** finally, (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)

#### Setting up the environment
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=0)** - [Instructor] Let's set up our development environment for this course.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=3)** We're going to be building C# console applications, the kind of app that runs in your terminal program.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=8)** So, you should already be familiar with using the terminal on your operating system.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=13)** You can use any code editor you want in order to complete this course, but I recommend that you either use VSCode, or you can use Visual Studio Community Edition.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=21)** Both IDEs are available as free downloads from Microsoft, and you can find them at this link.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=26)** Probably the easiest method is to use Visual Studio Community, because that will install the required .NET platform along with the editor for you.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=34)** Alternatively, you can install VSCode, or use any other editor, and then you can install the .NET SDK separately.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=42)** Now, in this course, I'm going to use VSCode because I prefer it and it's free and it works on Windows, Mac, and Linux.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=48)** If you want to use the Community Edition of Visual Studio, then come to this link.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=52)** And over here in the download section, you can see that there's a link for downloading Visual Studio Community.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=57)** And you can also see that there's a version for the Mac.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=61)** So if you want to use visual Studio for Windows or the Mac, then you're all set to go.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=65)** You'll be prompted for where to save the installer.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=67)** Once the download is complete, you run the installer and you'll be all set.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=70)** You should note that it might take a little while for the installer to complete.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=73)** When you start up Visual Studio Community for the first time, there'll be a registration process you must complete before you can use it.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=79)** Now, if you'd rather use VSCode or another editor, then you'll need to download and install the .NET SDK if you don't already have it.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=86)** You can check to see if you already have it by opening a terminal window.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=89)** So let's go ahead and do that.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=91)** And then in the terminal window, you can execute the command dotnet dash dash version.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=97)** Now, if executing this command gives you a version number, like you can see here, then it's installed correctly, and you should make sure that it's at least .NET version five.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=104)** And you can see that I've got 5.0.400 here.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=107)** If running this command gives you an error message, then you'll need to install the .NET SDK, and you can do that from the .NET SDK download page.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=115)** So let's go back to that.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=116)** You can find the .NET SDK download at dotnet.[microsoft.com/download](https://microsoft.com/download).
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=122)** And if you're going to install .NET SDK separately, make sure that you install the SDK version of .NET, not just the runtime.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=131)** So for example, on the Windows version here, you can see that there's an SDK version and a runtime version.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=135)** The SDK version is the one that you want.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=138)** And you can see there's also versions for Linux and Mac.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=141)** So, whichever operating system you're using, you should be good to go.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=144)** So go ahead and install .NET 5.0 if you don't already have it, and then try running the terminal command again.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=150)** You should also place the exercise files for this course somewhere on your computer where they'll be easy to access.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=155)** You can download the exercise files from the GitHub repository for this course.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=159)** Now I've placed them on my desktop for easy access, but that's not required.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=163)** You can put them wherever you want on your machine.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/setting-up-the-environment?u=76281980&t=165)** Once you've installed and updated the editor that you're going to use, and you've made sure that your version of .NET is at least version five, and you have the exercise files where you want them, then you're ready to proceed with the rest of the course.

> [!info]- Semantic Content
>
> **Env Vars:** net (11), sdk (9)
> **Tools:** visual studio (6), terminal (5), github (1)
> **Prerequisites:** install (8), you'll need (2), set up (1)
> **CLI Commands:** find (2), dotnet (2), make (2)
> **Exercise Files:** exercise files (3), download the (1)
> **Code Keywords:** let (3)
> **Versions:** 5.0.400 (1), 5.0 (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)


### 1. Overview

#### What are interfaces?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=0)** - [Instructor] Let's start with a high-level conceptual overview of what interfaces are and why and how they are used.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=7)** In C#, You use classes to define and create objects.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=12)** And to define different kinds of objects, you create different class definitions.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=16)** So in this example, I have three different classes, and each can have its own properties and methods and related information.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=23)** Interfaces are different from classes in a number of important ways.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=27)** They describe behavior instead of discrete objects.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=30)** So when a class implements an interface, it is basically saying to the rest of the program this class knows how to perform this kind of behavior.
>
> **[0:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=38)** So if I wanted different types of objects in my app to have a particular capability, like, for example, being able to encrypt their data or being able to broadcast an event when the object's data changes, I could create an interface for that behavior.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=54)** And then each object would implement that interface.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=58)** Another class can then make use of those capabilities on that object without having to know much about what type of object it is.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=67)** All the calling object needs to know is that if another object implements a particular interface, then that object can perform the capabilities specified in that interface.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=77)** In this way, you can think of an interface as a kind of contract.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=81)** When you have a reference to an object that implements an interface, you know that that object can perform whatever functions that interface specifies.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=90)** Later in the interfaces chapter, we'll see how to do this in greater detail with working example code.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=96)** For now, though, there are some important things to keep in mind about C# interfaces.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=100)** Interfaces describe behavior, not individual classes.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=104)** A single interface can be used by many different classes.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=108)** It's not just tied to one class.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=110)** A C# class can only inherit from one parent class, but can implement multiple interfaces, and we'll see an example of this later on.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=120)** Interfaces don't actually provide any implementation logic themselves.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=124)** They don't contain code.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=126)** They simply indicate that an object can perform a certain function.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=130)** It's up to the object class itself to implement the actual code.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=135)** All right, so that should give you a good introduction to the concept of interfaces.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-interfaces?u=76281980&t=139)** And again, we'll see more of these later in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (9), implements (3), let (1), class. (1), class, (1)
> **Cross-References:** later in (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### What are generics?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=0)** - Now let's take a quick look at generics.
>
> **[0:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=2)** Again, we'll get into more detail on this later in the course, but for the moment, I just want to explain a little bit about what generics are.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=9)** Generics were introduced way back in C# 2.0, and they brought with them the ability to combine type safety, reusability, and efficiency, to certain kinds of C# operations.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=22)** They are usually used when working with collections of data.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=25)** Now that's not the only way that generics can be used in C#, but it's the most common way.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=30)** And it's what we're going to focus on here in this course, generics, give your code away to tell the C# compiler, what kind of data type you intend to use with a given class, without that class having to know about that data type in advance.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=44)** So perhaps an example will explain things a little bit better.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=47)** So let's imagine that you have an array of data and you know in advance that you only ever want this array to contain integers, no strings, no custom objects, just plain integers.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=59)** Now, without generics, there's no built in way to detect when something that's not an integer is added to the array.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=66)** Sure, you could do some type checking of your own whenever you operate on the array, but that's inefficient and prone to error.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=73)** And this code's just not really fun to read.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=76)** Now, wouldn't it be great if the C# compiler just took care of this for you and caught any attempt anywhere in the program that someone tried to add a non integer value to this array?
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=86)** Well, that's what generics do for you.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=88)** Generics provide the ability to instruct the compiler to restrict the contents of a wide variety of data structures, such arrays and lists, stacks, queues, and dictionaries to only permit a specific kind of data, whether it's a C# data type or a custom class of your own.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=106)** And the result is an application that is more efficient, with fewer bugs and with less code that you have to write yourself.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/what-are-generics?u=76281980&t=112)** And again, we'll see this in more detail later in the course, when we get to the chapter on generics,

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class, (1)
> **Cross-References:** later in (2)
> **Versions:** 2.0 (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - now (1)


### 2. C# Interfaces

#### Understanding C# interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=0)** - [Instructor] Let's begin learning about C# interfaces by seeing how they are different from some other C# concepts, such as class definitions.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=8)** Now, as I mentioned earlier in the course, interfaces are different from classes in some important ways.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=14)** A C# class defines an object.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=17)** Classes are used as a kind of template mechanism to create one or more kind of that object.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=25)** So, for example, you might create a class to represent the notion of a document.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=30)** And then you can use that class to create multiple document objects, each of which contain their own specific data.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=37)** Now, interfaces, on the other hand, are used to describe behavior.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=41)** Interfaces are used by classes to tell other objects in a program that they can perform certain kinds of behavior.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=49)** So classes can also implement more than one interface, which we'll see later on in the course.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=54)** So, in this example, suppose you wanted to give your documents the ability to be stored for later use, which is a behavior that's kind of useful for documents to have.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=62)** So in that case, you could define an interface named IStorable, and the letter I is kind of a standard convention in C# for naming interfaces, and give it some methods like save and load, and then have your document class declare that it implements that interface.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=79)** The document class itself would then provide the actual programming logic for those methods.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=85)** And then, each document object would have that ability.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=89)** Now, you might be wondering, why not just create a base class that contains methods for saving and loading, and have the document class inherit from it?
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=96)** Well, you could do that, but your application might have other objects that can also be stored and retrieved.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=103)** For example, what about a user's application preferences?
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=107)** Those can be stored too, but those clearly aren't documents.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=111)** So, it wouldn't make sense to have them inherit from the document centric base class.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=116)** So by using an interface, different kinds of objects can provide the same capabilities using the same set of defined methods.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=124)** Using interfaces gives you a way to separate out common sets of behavior in your application, and then consume them in multiple places, and usually between different types of objects.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=134)** So how and when you might choose to use interfaces in your own applications will depend a lot on how your app is organized and how complex it is.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=142)** So, you might choose to just use the built in C# interfaces, or you might choose to create some of your own, or both.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=149)** Just think of interfaces as another tool in your C# toolbox that you can use to solve some of the programming scenarios that you might run into.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/understanding-c-sharp-interfaces?u=76281980&t=156)** In the rest of this chapter, we'll take a look at how to define and implement interfaces, and then use our newly learned skills to complete a programming challenge involving interfaces.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (1), case, (1), implements (1), class. (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1)
> **Cross-References:** earlier in (1)
> **Tools:** notion (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Defining and implementing an interface
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=0)** - [Instructor] Okay, it's time to dispense with the theory and actually write some code.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=4)** So in this example, I'll show you how to create and then implement a simple interface.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=9)** So open your editor and if you're using visual studio code like me, then you can open up the folder here or open your code with whatever editor you're using and then here in chapter two, lesson two, we're going to open up the basic interfaces folder and let's open the program dot CS file.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=28)** So we're going to start off by creating a simple class that we'll use to implement our interface and this class will represent a document object.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=37)** Now this class will be very basic in order to focus on the interface part, but you can imagine that a real document class would be a lot more complex.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=45)** So you can see that this document class has a constructor that takes a string argument, and it has a member variable that contains the documents name, and the constructor just writes out the document name to the console when the object is created.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=59)** So if we scroll down a little bit, then here in the program's main function, I create an instance of the document class and then there's a couple of lines of code that just keep the window open while we see the results.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=72)** So before we do anything, let's just go ahead and run what we have so far.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=77)** So what I'm going to do in vs code is right click on my folder and choose open in integrated terminal and if you're not using vs code, that's fine, just open the folder that your code is in, in the terminal program, on your computer, either it's windows or Mac and what I'm going to do is type dot net run.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=97)** So it's going to get compiled and you can see that we've got the output here, it says, created a document with name test document, and so far so good, all right.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=107)** So let's go ahead and close our terminal, all right.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=111)** So now let's add an interface to the application.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=114)** We want to be able to save and load our document contents, so we're going to create an interface named Istorable, it's going to be above the class definition here.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=125)** So I'm going to use the keyword interface and name it Istorable and inside my interface, I'm going to define a couple of methods and a property.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=136)** So I'm going to create a save function and a load function, and a Boolean called needs save and that's going to have a getter and a setter.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=153)** So the definition uses the interface keyword followed by the name of the interface and then inside the curly braces, we placed the definition of the interface.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=163)** Now notice, the interface definition itself does not contain any actual code, it just defines the two methods and one property that have to be provided by the class that implements this interface.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=177)** So next, let's have the document class implement this interface.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=181)** So after the class definition, I'm going to add a colon and then type the Istorable name, all right.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=186)** So now, let's compile and try to run what we have.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=190)** So let's go back here and I'm going to open my terminal again and type dot net run and you can see that want to try to build the app.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=201)** Oh, I get some errors, right?
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=202)** And that's because I've indicated that the document class implements the Istorable interface, but I haven't actually provided that implementation in the class.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=212)** So let's fix that by implementing the code for save and load.
>
> **[3:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=217)** So I'll close my terminal and then inside my class definition, what I'm going to do is write public void, save and public void load.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=237)** And in each of these cases, I'm just going to write out to the console that you know, saving the document and I'll copy that and paste it down here.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=251)** In this case, I'm loading the document, oops.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=258)** So for now, I'm just going to stub out these functions just to indicate that they're being called and then I'll need to add the needs saved property, so let's do that and that's a Boolean and it's called need save, and then just let's add some getters and setters.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=278)** Okay, so now, right, when I run my code, let's do that again, I'm going to try to build, so everything's fine.
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=291)** I'm not getting any different output because I haven't actually called the functions yet, but you can see that now everything's okay, because I've actually implemented the logic, so now the interface is being satisfied.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=301)** All right, so let's go ahead and stop the program and then down here in the main program, let's actually exercise the interface.
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=309)** So on my document, I'm going to call load, and then I'm going to call save, oh, I need some semi-colons and then finally I'll set the needs save property to false.
>
> **[5:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=323)** All right, so let's run this one more time and you can see that when we run the app, now I create the document and then loading and saving is displayed because now you can see that the interface methods are being called, all right.
>
> **[5:42](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=342)** So, okay, let's recap.
>
> **[5:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=345)** Notice that in the interface definition, right, there are no access modifiers, right?
>
> **[5:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=350)** There's no public or private, for example, in fact, it's a compile error if you add them and other than that, it's essentially like defining methods in a class.
>
> **[5:58](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=358)** The reason for this is because interfaces are designed to expose functionality to other classes, so their contents are implicitly public.
>
> **[6:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=367)** And again, notice there's no code in the interface definition.
>
> **[6:10](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=370)** It's also not possible to declare member variables in an interface, but properties basically accomplish the same thing.
>
> **[6:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/defining-and-implementing-an-interface?u=76281980&t=377)** So there you have it, simple working example of defining and implementing an interface.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (21), let (15), public (4), function (3), implements (2)
> **Tools:** terminal (5), vs code (2), visual studio (1)
> **UI Navigation:** open the (2), scroll down (1), click on (1)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Interfaces and casting
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=0)** - [Instructor] Because interfaces are not classes, you can't instantiate them directly.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=5)** In other words, you can't create an instance of an interface.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=9)** Using the keyword new on an interface doesn't work.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=13)** However, you can cast a given object to an interface using the C# keywords is and as.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=19)** So let's take a look at how this works.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=21)** If you're not familiar with the is and as keywords, here's what they do.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=25)** The is operator can be used to determine if a given object is an instance of, or derived from a specific class.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=33)** So let's take a look at an example.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=35)** In this example, let's suppose I have class C that's derived from B, which is derived from A.
>
> **[0:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=40)** I also have some code that creates a new B object and assigns it to a variable named obj.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=46)** Now, in this case, the expression obj is B is obviously true because that's what it is.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=52)** Obj is A is also true because B derives from A.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=58)** However, obj is C is false since B is a superclass of C.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=64)** Similarly, we can use the as operator, which actually performs the cast or conversion from one type to another.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=72)** The is operator just performs a Boolean test, not the actual cast itself.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=78)** So for example, defining a new variable of type A and using the as operator to cast obj to the A type will give us an object reference that is type A.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=90)** However, trying to use as to convert B object to type C will return null because again, B as a superclass of C and we can extend these operators to be used with interfaces.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=102)** If I have a class named my class that implements ISomeInterface, then I can perform is an as operations using that interface.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=113)** So for example, I could say is like mc is ISomeInterface, which, you know, it is right, because it implements this interface.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=121)** That does the Boolean test.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=123)** I can also cast a object to an interface type.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=128)** So let's try this in some real code.
>
> **[2:10](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=130)** Let's go over to Visual Studio or whatever editor that you're using and let's open up the casting interfaces example.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=139)** Right. And here's the code.
>
> **[2:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=141)** So this example is a variation on the example we've been working with so far in this chapter.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=147)** So you can see here, I have my IStorable interface along with the document class that uses it.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=153)** And then down here in the main program, let's use some casting operators to exercise this code.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=160)** So the first example uses the is operator to test if the document is an Istorable.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=165)** And if so, it's going to call the save method.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=168)** So what I'll do is all write if D is IStorable, then I can call the save method.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=177)** The second example, we're going to use the as operator to cast the document to an IStorable interface reference.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=184)** And if the result is not null, that means the cast succeeded, and then we can call the load method.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=190)** So I'm going to define a variable called istor, and it's going to be D which is my document as IStorable.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=202)** And then I can check to see if istor, whoops, is not null, then I can call istor.load.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=215)** All right. So let's save and now let's run the app.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=220)** And once again, here in Visual Studio Code, I'm going to open my integrated terminal, but you can use the terminal app on your computer and I'll call .NET run.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=231)** And you can see here that in both cases, the save and load functions are in fact being called.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=237)** So this kind of casting ability is really useful when you combine it with data structures like collections.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=243)** So for example, you might have a list of objects of various types, and you want to be able to call certain methods on them, but only if they implement a specific interface.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/interfaces-and-casting?u=76281980&t=253)** So using the is and as operators, you can determine if an object implements that interface and call the methods appropriately if so.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (10), let (9), implements (3), class. (1), case, (1)
> **Definitions:** is an  (3), is a  (3), in other words (1)
> **Tools:** visual studio (2), terminal (2)
> **Analogies:** for example (3)
> **Env Vars:** net (1)
> **Speakers:** - [instructor] (1)

#### Implementing multiple interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=0)** - [Narrator] One of the limitations that C# imposes on class design is that classes can only inherit from a single parent class, and even though it isn't common among most modern languages to allow classes to inherit from multiple parent classes, there are times when you want to draw functionality from different sources and interfaces in C# can help solve this problem.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=21)** So C# classes can implement multiple interfaces, which can help when designing classes that have to support a variety of features.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=30)** So to do this in C#, you just need to place a comma between the names of the interfaces that you want your class to implement, so let's make this work in some real code.
>
> **[0:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=39)** So here in my editor, I'm going to open up in chapter two, video four, the MultipleInterfaces folder, and we'll open up the program code.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=49)** All right, so to return once again to our original document example, let's suppose we wanted our document class to support storage operations as well as a new data encryption feature.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=61)** So you can see I've already got my IStorable interface and the document already implements it, and since these two features are separate and unrelated, ideally we would like to place them within separate interfaces.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=74)** All right, so let's define a new interface named IEncryptable, so I'll make a new interface and I'll call it IEncryptable, and it's going to have two methods, encrypt and decrypt, and just to make things simple, I'll make them voids and there's no arguments.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=98)** So next, let's change the class definition for the document to include IEncryptable by typing a comma after IStorable and then adding IEncryptable.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=111)** So now that we've added the IEncryptable interface, we need to provide implementations of the encrypt and decrypt functions.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=117)** So let's go ahead and add those to the document class, so I'll make those public.
>
> **[2:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=128)** And again, we'll just simply write out to the console that we are encrypting the document, and let's just copy and paste this line and we'll call this one decrypt, and we'll say that we're decrypting the document.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=150)** So at this point we have a document class that implements the two different interfaces, each of which provides its own behavior.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=156)** There's one for storing and loading data and one for encrypting and decrypting data.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=160)** So the last thing we got to do now is add the statements down in the main program to exercise these methods.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=167)** So on my document object, I'll call load, and then I'll call encrypt, and then I'll call save, and then I'll call decrypt.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=184)** All right, so now let's go ahead and test the code.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=186)** I'm going to run the program by opening this up in my integrated terminal, and of course you can use your terminal program if you're not using VS Code, and I will simply call dotnet run, and when the program compiles and runs, you can see in the output, we've got the loading, encrypting, saving, and decrypting statements indicating that both interfaces are being exercised.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=212)** So in this way, interfaces provide a useful ability to separate out clear, distinct sets of behavior so that you can use as many of them as you need in your programs classes.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=223)** However, this raises an interesting question, right?
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=226)** So what happens when you have multiple interfaces and each of them happen to have the same name for a method?
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=232)** How do you implement each method when combining multiple interfaces and avoid collisions?
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/implementing-multiple-interfaces?u=76281980&t=237)** We're going to see how to do that in the next example.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), interface (4), class, (2), implements (2), public (1)
> **CLI Commands:** make (5), dotnet (1)
> **Tools:** terminal (2), vs code (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Using explicit interface implementation
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=0)** - [Instructor] In the previous example, we saw how to implement multiple interfaces on a single C# class, and how that feature can help overcome the limitation that C# places on class inheritance.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=11)** However, the question arises, what happens when two separate interfaces define the same method?
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=17)** So, to solve this problem, you need to use explicit interface implementation, which I'll demonstrate in this example.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=23)** So in our editor, in chapter two, example five, I'm going to open the explicit interfaces folder, and open the program code.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=33)** And when I do that, you can see that I have a couple of interfaces defined, Intf1 and Intf2.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=41)** They both define the same method.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=44)** And I have a class called InterfaceTest, and that also defines a SomeMethod, which just writes out something to the console.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=53)** And what we're going to do is add both of the interfaces to this test class.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=59)** All right, so we'll add Intf1 and Intf2.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=63)** Okay, so now that I've added those interfaces, I have to implement the SomeMethod of each of them in order to avoid compile problems.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=72)** So I'm going to go ahead and put, void SomeMethod.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=76)** Well, but I've already got a SomeMethod implementation.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=78)** So that's a problem.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=80)** How do I disambiguate this version from this version?
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=83)** What I need to do now, is use the interface name itself, along with the method name, when I implement the method in the class.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=91)** So what I'm going to do is just put the interface name in front of the method definition.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=97)** And I'll just copy this console write line here, and paste it in here.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=106)** And we'll write out that this is the Intf1 version of the SomeMethod.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=111)** And then I'll just do the same thing with Intf2.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=117)** In order to run this code, I have to call the proper version of the method.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=122)** So, if we scroll down to the main program, we can see that our test code creates an instance of the interface test class, and then calls the class's version of the SomeMethod method, which is this one right here.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=138)** So how do we call the other two?
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=140)** Well, what I'm going to do is cast the object to an interface type, and then call the method on the interface.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=147)** And remember, we learned earlier in the course about how to cast objects to interfaces.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=153)** So what I'm going to do is write Intf1 i1.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=158)** And I'm going to cast test class as Intf1.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=164)** So, when I do that, I can then call the method on i1, and then I'll do the same thing for interface two.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=176)** So I'll cast the test class as Intf2.
>
> **[3:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=184)** And then call the SomeMethod on that interface.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=187)** So we create the object, call the method, and then cast the object to each of the interfaces, and then call the method each time as on that interface.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=197)** So, let's go ahead and save this, and let's run.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=202)** And I'll open my integrated terminal and dotnet run.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=208)** And in the output, you can see that each individual interface's method is being executed.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=214)** So here's the class version.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=216)** Here's Intf1 method.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=218)** And, oops, looks like I made a mistake.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=221)** I just copied and pasted this right here without calling Intf2.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=225)** So let's fix that and let's run it again.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=229)** All right, so now we're getting the right output.
>
> **[3:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=230)** So we have the class version, the Intf1 version, and the Intf2 version.
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=236)** So, we've been able to assign each method to the proper interface, using explicit naming.
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-explicit-interface-implementation?u=76281980&t=241)** And with this technique, you can easily resolve any naming conflicts among interfaces that your application uses.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (11), let (4), class, (2), class. (2), type, (1)
> **UI Navigation:** open the (2), scroll down (1)
> **CLI Commands:** dotnet (1)
> **Cross-References:** earlier in (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Using .NET-defined interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=0)** - [Instructor] In addition to defining your own interfaces, your application can use the ones that are already built into the .NET framework.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=8)** So in this example, I'll review some of the more useful .NET interfaces and then work through an example, demonstrating one of them.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=14)** So this table lists some of the more popular and useful .NET interfaces.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=19)** The IComparable and IComparer interfaces are used to compare objects to each other.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=25)** By implementing these two interfaces, .NET data collection types can perform sorting operations on your objects.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=31)** The IDisposable interface is used to implement a dispose method on your class.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=37)** So if your class uses resources that are not managed by the .NET system, such as file handles, then you should provide a way for users of your class to dispose of it in a way that safely releases those resources and IDisposable gives you a way to do that.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=52)** The IEquatable interface provides a single method named equals, and you can implement this interface to allow objects to be compared to other objects of the same type.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=62)** So this method is called by some of the collection classes in .NET when searching and sorting operations are performed.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=68)** The INotifyPropertyChanged interface can be used to inform other objects that the value of a property on your object has changed.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=77)** This interface provides an event for other objects to subscribe to in order to listen to for value changes.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=84)** And you can read more about these interfaces in the MSDN documentation.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=89)** So for now, let's look at an actual example of using one of these interfaces.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=94)** And so for this example, we'll use the INotifyPropertyChanged interface.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=99)** So let's take a look at the documentation for this interface.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=102)** And you can find that here at this link, and you can see that in the MSDN docs, there are no methods on this interface, right?
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=110)** So expand this right here.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=112)** There's just a single event and it's called PropertyChanged.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=117)** Let's click on that.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=119)** And you can see that this event has an event type of PropertyChanged event handler.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=124)** This event is triggered by an object when a change is made to the value of one of its properties.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=131)** And usually this is done to support data binding on an object, but you can use it for your own purposes too.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=137)** So let's take a look at how to implement this interface.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=140)** So I'm going to jump over to my editor and let's open up the .NET interface example in chapter two, video six, and let's open up the code.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=153)** In the program.cs file, note that this is the same example we've been using throughout the chapter.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=159)** And here's my document class and it implements IStorable.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=162)** And what we need to do first is include the correct namespace to get access to INotifyPropertyChanged interface, and this interface is defined in system.component model.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=174)** So let's go ahead and add a reference to that.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=180)** Then we need to add the INotifyPropertyChanged interface to our class definition.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=186)** So let's go ahead and add INotifyPropertyChanged.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=191)** This interface requires us to implement an event of type PropertyChanged event handler.
>
> **[3:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=198)** So let's go ahead and add that.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=201)** So I'll add a public event and it's going to be PropertyChanged event handler.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=210)** I'm going to call it that PropertyChanged.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=213)** So this code declares the event that our object will use to broadcast the value change.
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=219)** So next, let's add a utility function that will actually trigger the event.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=225)** So I'm going to add a private function and it's just going to be called NotifyPropChanged.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=235)** And that's going to take a string, which is going to be the name of the property that changed.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=240)** And all it's going to do is call PropertyChanged with this object, and I'm going to create a new PropertyChangedEventArgs with the name of the property that changed.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=257)** So it takes a string argument, and this is the name of the property that changed.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=261)** And I'm going to trigger the event, which is this call right here that contains that property name.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=266)** So we need to call this function when the properties on our object change, that we want other objects to be able to listen to.
>
> **[4:34](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=274)** So let's go ahead and call this function from within the property sector is of our document name and the NeedsSave properties.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=282)** So I'm going to scroll down and here's the document name property.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=285)** So right after we set the name to whatever the new value is, I'm going to call NotifyPropChanged, and that's going to be the DocName property.
>
> **[4:58](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=298)** And I'll copy that and scroll down here in NeedsSave, you can say that we see, we save the new value into the member variable called NeedsSave which is defined up here.
>
> **[5:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=312)** And so after we changed that property, I'll do the same thing and I'll call it with NeedsSave.
>
> **[5:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=318)** So that's all we need to do for our document class.
>
> **[5:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=322)** Last, we just need to add some code to listen for the PropertyChanged event and then try triggering it.
>
> **[5:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=330)** So let's add the code for the PropertyChanged event down in our main function.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=335)** So what I'm going to do is after we create the document, I'm going to create on the PropertyChanged event handler for the document a new delegate, and that's going to take a sender object and PropertyChangedEventArgs and what I'm going to do inside that delegate is just simply write out that the document property changed
>
> **[6:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=373)** and the name of the property is going to be the event.propertyname.
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=381)** So this event delegates listens for the PropertyChanged event.
>
> **[6:24](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=384)** And all it does is write out the name of the property that changed to the console window.
>
> **[6:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=389)** And you can see that these next two lines are going to actually change the properties.
>
> **[6:34](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=394)** So that should cause the event to be fired, which will in turn, trigger the event listener code, which is right here.
>
> **[6:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=400)** And that should cause this to be written out to the console.
>
> **[6:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=404)** So let's go ahead and save everything that we have.
>
> **[6:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=408)** And let's open this up in our terminal and let's run this and oh, it looks like I forgot a semi-colon on line 68.
>
> **[7:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=420)** Let me go fix that.
>
> **[7:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=423)** Let me do that right. There we go.
>
> **[7:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=426)** Okay. Let's try running again.
>
> **[7:10](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=430)** So we can see that when we run the app, the console window contains messages from the event handler right here.
>
> **[7:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=435)** So we can see document property changed DocName and document property changed NeedsSave, right?
>
> **[7:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=441)** So that indicates that the event was fired and it was caught by our listener for each of the properties.
>
> **[7:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=446)** So this interface and several others are among the useful predefined interfaces available to you in the .NET platform.
>
> **[7:34](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/using-dot-net-defined-interfaces?u=76281980&t=454)** So before you go and invent your own interface to solve a particular problem, it's probably worth checking first to see if .NET has already solved it for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), interface (16), function (5), class. (2), type. (1)
> **Env Vars:** net (9), msdn (2)
> **UI Navigation:** scroll down (2), click on (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)

#### Challenge: Programming C# interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=8)** It's time to take what we've learned so far and apply it to a programming challenge.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=12)** So in this challenge, we're going to create a C# console application like we've been working so far within this course, and let's take a look at the finished application first.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=23)** So I'm going to open up my finished solution here in the terminal and I'll type dotnet run.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=33)** And let's take a look at what the challenge is.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=36)** So this application is going to generate random numbers between zero and an upper bound supplied by the user.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=45)** So notice that when I type in a number, I get a floating point number of back between zero and the number that I entered, in this case, it was 9.27 something.
>
> **[0:56](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=56)** And then I'll do another one onto 20.
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=59)** And you can see that I got 2.18 this time.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=62)** I'll enter 30, right, I get 29.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=64)** Okay, so you can see that what's happening is I'm getting random numbers between zero and this upper bound.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=72)** And if I type in something, that's not a number, then I don't get a random number back.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=76)** I just, you know, it catches that condition and says, oh, that wasn't a number and asks me for input again.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=83)** And then finally, if I type the word exit the program exits, all right, so let's review the rules for this challenge.
>
> **[1:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=90)** So for this challenge, here's what your program is going to do.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=93)** Your console app is going to generate random numbers.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=96)** And so the user is going to supply an input number and the app will generate a random number between zero and the user supplied number.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=106)** There's going to be no result if the user enters something that is not a number and when the user types exit, the program ends.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=114)** So here's the catch.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=115)** You're going to implement the random number generator by creating an interface named iRandomizable.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=122)** It defines one method named GetRandomNum, okay.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=126)** That method takes one parameter, which is the upper bound of the range.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=131)** And it's going to return the random number and then your class is going to implement this interface.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-interfaces?u=76281980&t=138)** Alright, so go ahead, try to tackle this challenge and then I'll be back in the next video to explain my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (2), case, (1), finally, (1), catch. (1)
> **Versions:** 9.27 (1), 2.18 (1)
> **CLI Commands:** dotnet (1)
> **Code Identifiers:** irandomizable (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Programming C# interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=0)** - [Instructor] All right, let's review the solution to this programming challenge that I came up with, and, remember, it's not important that you arrive at the same solution as I do, there's different ways to solve every problem, so that's not really the focus here.
>
> **[0:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=19)** If you arrived at a different solution then that's fine, but it's useful to see how other people solve similar problems.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=26)** All right, so let's go ahead and open up the solution code and we'll open up Program.CS.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=31)** So, here in my code, I created the IRandomizable interface, which was one of the constraints of the challenge, and inside the interface definition is the GetRandomNum method, which you can see accepts a double precision number and returns a double precision result.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=51)** And the reason I use a double is because that's what the .net random class uses which we'll see in just a moment.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=58)** All right, next, I created my class, which will implement the IRandomizable interface, and I called it MyRandomizer, and you can call it whatever you want, I just happened to call it this, and you can see it implements the IRandomizable interface.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=71)** So my implementation of the GetRandomNum function uses the built-in .net class named Random, which provides a function called NextDouble.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=83)** That function returns a double precision number between zero and one, and then I multiply that result by the UpperBound to get my result.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=94)** So, down here, in the program's main function, I create an instance of the MyRandomizer class, then I have a loop that asks the user for input.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=108)** And let me just close that there so we have more space.
>
> **[1:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=111)** I use a try/catch block to attempt to convert the string, that the user enters, by using the Double classes Parse function.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=121)** So that function will throw an exception if the conversion from the string to a double fails, which is what's caught down here, and, you can see, I don't do anything, I just catch the exception so that the program doesn't crash.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=135)** Now if the conversion succeeds then I call my classes GetRandomNum function, and then I write that result out to the console window.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=147)** And if the user types the word exit then the while condition will terminate right here, and then the code will fall through to the exit case.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=158)** All right, so how did you do?
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=160)** Were you able to solve the challenge?
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-interfaces?u=76281980&t=162)** Take a few moments here to compare your solution with mine and see how they're similar and where they're different.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), interface (4), let (3), class, (2), this, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. C# Generics

#### The benefits of generics
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=0)** - As I mentioned earlier in the course, generics were introduced way back in .NET version 2.0 and they provide a way of using data structures like lists and stacks and so on, in a type-safe and more efficient way than using non-generic counterparts.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=15)** Now, if you're already using data structures like ArrayList in your applications which you probably aren't, it's kind of old.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=21)** But you might come across older code that does.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=23)** Then you really need to consider moving to their generic counterparts.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=27)** And in this example, I'll try to show why.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=30)** So the best way to understand how generics improve .NET data collections is to see the two compared side-by-side.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=36)** So here in VS Code, and the code for chapter 301 let's go into the intro to generics folder and let's open the Program.cs file.
>
> **[0:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=47)** And you can see I already have some code in this example that uses the ArrayList which is a non-generic collection and it builds a list of integers.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=57)** And then it computes a total of all the integers in the list by looping over the list and adding up all the numbers.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=65)** So before we do anything, let's just go ahead and run this.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=68)** And what I'm going to do is I'm going to... Now in VS Code, I can just right click and choose Open in integrated terminal.
>
> **[1:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=73)** If you're not using VS Code just use the terminal that comes with your system and go into the folder here for this example.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=81)** And what I'm going to do is just type dotnet run.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=84)** Oops, not ruin dotnet run that's better.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=88)** And the application will compile and run and you can see that the total is six, right?
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=93)** So seems pretty straight forward.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=95)** Now the problem is, this kind of code is prone to some errors.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=99)** And that's because the ArrayList class allows any object to be added to the list.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=105)** Now, that provides some degree of flexibility but it can lead to problems.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=109)** So suppose somewhere else in the program, someone adds a line that looks like this.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=114)** And they'll say Add, and they'll put a string says four. Right?
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=119)** Now, when I run the application again (keyboard rattling) and you see that it says I have an Unhandled exception and that's because it's unable to cast object of type String to Int32.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=134)** So I can't convert that string four to an integer.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=137)** This obviously wouldn't be an issue in a small, trivial program like this one.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=142)** But in a large code base where data structures are being accessed and modified from multiple locations, things like this can easily happen.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=149)** So what if I wanted to have a list-based data structure like an ArrayList, but I wanted to restrict it to a specific data type in this case, integers.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=158)** Well that's where generics come in.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=160)** So let's go ahead and close this terminal and let's comment this out.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=166)** Let's go ahead and comment out these lines of code.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=170)** And what I'm going to do is use a generic list.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=175)** So what I'm going to do here is type List and then in angle brackets, I'm going to put the data type that I want the list to hold in this case it's going to be int. Right?
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=185)** And I'll call it arrList.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=188)** And then once again I'll create a new List which is going to hold ints.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=195)** And then I'll just simply, copy these lines and paste them there and then uncomment them, that's Ctrl Slash by the way.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=206)** All right, so I'll save.
>
> **[3:28](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=208)** So this code uses the list object, which is a generic version of the ArrayList.
>
> **[3:34](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=214)** And what makes this list different is that within these little angle brackets, I can specify the data type that I want the list to hold in this case, I'm specifying that I want the list to hold integers but, I'm not limited to the built-in types of .NET.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=227)** I can specify a custom class here if I want to, but the end result is that only data of this type can be added to the list.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=235)** If I try to add a data type that's different then that error gets caught at compile time .Aright?
>
> **[4:01](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=241)** So let's go ahead and save.
>
> **[4:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=243)** Oh, by the way in order to access that List, I have to add System.Collections.Generic.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=249)** Let's go ahead and add that.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=251)** So I'll save and now I'm going to run.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=255)** So, open this in the terminal and I'll do my dotnet run And you can see that the total is six.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=264)** But now let's go back and change the code like what we did earlier.
>
> **[4:28](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=268)** So I'll type arrList.Add and four.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=273)** or actually, put the string four and now I'll try to run again.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=280)** And now you can see that I don't get an exception.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=283)** I actually get a build error. Right?
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=284)** And it says, can't convert the string to an int.
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=287)** And that is on line-24 right there. Okay?
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=291)** So, generics provide a way to use data structures that are type-safe.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=295)** Which means you can be sure that the items being added to the collection are of a specific type.
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=301)** But the benefits go further.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=303)** What I mean by that is, generics give you better performance.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=305)** And the reason is because .NET has a concept of boxing and unboxing.
>
> **[5:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=309)** So in other words, when a value type like an integer has to be converted to an object, which is what the array list holds that's called boxing.
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=316)** The integer has to be put into this little box.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=319)** And unboxing is when that object is converted back into a value type, like an int.
>
> **[5:24](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=324)** And as you might imagine, that's not an efficient process.
>
> **[5:27](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=327)** So by telling the generic collection ahead of time, what the data type is going to be, this process can be avoided which dramatically improves performance.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=335)** All right, So that's a quick introduction to using Generics.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=338)** In the rest of the chapter, I'll review some of the different generic data collection types that .NET provides.
>
> **[5:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/the-benefits-of-generics?u=76281980&t=343)** And we'll see examples of how each one works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (2), case, (2), type. (1), type, (1)
> **Tools:** terminal (4), vs code (3)
> **Env Vars:** net (5)
> **CLI Commands:** dotnet (3)
> **Definitions:** is a  (2), in other words (1)
> **Code Identifiers:** arrlist (2)
> **Versions:** version 2 (1)
> **Cross-References:** earlier in (1)

#### Generic list collections
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=0)** - [Instructor] The dotnet library provides many useful generic collections that you can use in your applications.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=6)** They can be found in the system.collections.generics namespace.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=10)** In this lesson, we'll begin learning about dotnet's generic collections by looking at the list class.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=15)** List is the generic version of the array list class, and we saw a quick example of list in the previous video.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=22)** The MSDN documentation for the generics namespace lists all of the built in generic collection classes that you can use in your applications.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=31)** And you can see that there are quite a few and we'll cover some more of these later in the chapter.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=36)** But for now, let's look at the list documentation, and that's this link here.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=43)** So you can see here in the documentation for list that there is a lot of properties and methods that you can call.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=50)** Now, I'm not going to go into depth on all of these, but we'll see how to use some of the more common ones.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=57)** So let's switch over to the editor.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=60)** So here I'm using VS code and you're using whatever editor you're using.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=64)** So here in chapter three, example two, we're going to open up the generic list folder and let's open the program.cs file.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=72)** So you can see here at the top of the program file that I've included the System.Collections.Generic namespace, which I need to get access to the list class.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=81)** And in the previous example, we created a list to hold basic integers.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=85)** But in this example, we'll use a custom object definition.
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=88)** It's going to be a small class to hold some employee related information.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=93)** So let's start by creating a new list object.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=97)** And we're going to specify that it's going to hold employee objects.
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=101)** So pick a list of employees and we'll call that the empList and of course, we'll make that a new employee list and then let's add some data.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=114)** In the empList, I'll call the Add function to add data to the list.
>
> **[1:59](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=119)** And I'm going to add a new Employee and I'll add some fake data like "John Doe" and "John Doe" makes 50,000, and then I'll just copy and paste a few of these.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=137)** Let's add four employees.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=140)** And so we'll change some of these, this will be "Jane Smith" and she gets 60,000 and then it will have, let's see, "Nick Slick" and Nick gets 55 and lastly we'll have "Mildred Mintz"
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=161)** and she gets 70,000.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=164)** So let's also exercise some of the properties on a list that we can use to inspect its capacity and the number of items in the list.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=173)** So I'm going to write out to the console at the "empList Capacity is:
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=186)** and I'll just write out empList.Capacity
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=199)** and I'll copy and paste that.
>
> **[3:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=202)** And in this case, instead of capacity, I'll write out the Count.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=210)** So, let's go ahead and run what we have.
>
> **[3:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=212)** So we've added some items and we've got a couple of properties.
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=216)** So I'm going to bring up my terminal and I'll do a dotnet run.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=223)** And we can see that the capacity is four and the count are both four.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=228)** And that's because I didn't specify a capacity when I created the list, so the list just grows as new items are added.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=235)** I can specify a capacity in the constructor for the list.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=240)** So for example, let's add the capacity to be 10.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=245)** And now let's go ahead and run again.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=249)** And when I run the new version, now you can see that the capacity is 10, but the count is four.
>
> **[4:14](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=254)** So if you know how many items your list is going to contain, you can help performance by specifying that upfront, especially if you have a lot of items, because the list can then pre allocate the memory needed to hold all those items.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=266)** So let's close that terminal, so let's try something else.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=270)** We can use the exists and find functions to see if an item is in the list.
>
> **[4:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=275)** So exists is a simple boolean test, whereas find will return the found item or whatever the default value is for the datatype, if it isn't in the list.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=286)** So let's try that out.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=288)** What we'll do is we'll use the exists function to see if there is a highly paid employee in the list, and we'll use the find function to find the first employee whose name starts with a J.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=300)** So for the exists function, we need you to supply a delegate that will perform the necessary checking logic.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=306)** And I've already defined that function down here in the code.
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=311)** So, that's this function right here.
>
> **[5:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=316)** So let's uncomment that, and it returns a boolean value and checks to see if the given employee is paid more than 65,000 and if so, it returns true.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=326)** So this function is going to be called by the list object for each item, until one is found that matches the criteria and causes the function to return true.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=335)** So let's add the code that calls this function.
>
> **[5:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=338)** So, I'll write, if empList, and I'm going to call Exists,
>
> **[5:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=347)** and then I'll give it the delegate, which is HighPay, then we'll simply write out "Highly paid employee found."
>
> **[6:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=365)** So for the find function, we're going to declare an inline delegate in Lambda function form.
>
> **[6:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=371)** Now, if you're not familiar with the syntax, you should consider watching the C#: events, delegates, and Lambdas scores.
>
> **[6:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=377)** And so the Lambda takes one argument, the employee object and returns whether the name starts with a J.
>
> **[6:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=383)** So I'm going to write Employee e = and I'm going to call empList.Find.
>
> **[6:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=392)** And then for the Find function, I'm going to declare an in-line Lambda.
>
> **[6:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=396)** So function X such that X.mName.StartsWith the letter "J".
>
> **[6:49](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=409)** And so if he is not, null, then we will write out "Found Employee whose name starts with J"
>
> **[7:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=427)** and then we'll print that out and that's going to be e.mName.
>
> **[7:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=438)** So let me close it down so we can see some more room here.
>
> **[7:20](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=440)** So remember in the employee class, I have the mName and mSalary.
>
> **[7:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=445)** So what I'm doing is I'm checking to see if mName starts with J and if we find one, then great.
>
> **[7:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=452)** So let's save and now let's run what we have.
>
> **[7:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=455)** So we'll bring back up my terminal.
>
> **[7:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=459)** And once again, we'll go ahead and dotnet run and oh, looks like I forgot a semi-colon somewhere.
>
> **[7:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=471)** Yep, right there.
>
> **[7:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=474)** Let's try that again.
>
> **[7:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=477)** So we can see that 'Highly paid employee was found' because there is one that is paid more than 65,000, and we found the employee whose name starts with J and that's John Doe.
>
> **[8:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=487)** So let's try one more example.
>
> **[8:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=488)** We can try the, for each method, which can be used to iterate or loop over each item in the list.
>
> **[8:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=495)** So let's close this.
>
> **[8:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=498)** Let's try using for each again.
>
> **[8:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=501)** This method takes a delegate.
>
> **[8:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=503)** So what we're going to do is uncomment this function here named TotalSalaries.
>
> **[8:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=510)** So what we're going to do is call a method that's going to add up all the salaries of all the employees to produce a payroll total, which we will then print to the console.
>
> **[8:41](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=521)** So let's go ahead now and write that code.
>
> **[8:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=523)** So I'll write empList.ForEach,
>
> **[8:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=532)** I'm going to call the TotalSalaries delegate, and then I'll just simply write out "Total payroll is:"
>
> **[9:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=545)** and that's going to be the total, which is this variable here.
>
> **[9:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=553)** So this variable is going to hold all of the salaries added up.
>
> **[9:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=558)** So let's save and let's run this one more time.
>
> **[9:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=563)** So back to the terminal and let's go ahead and run and sure enough, you can see that the total payroll is printing right here.
>
> **[9:34](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=574)** So that's a quick introduction to the generic list class, and we didn't get a chance to see all the methods.
>
> **[9:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/generic-list-collections?u=76281980&t=579)** So I would suggest maybe taking a few moments here to try out some of the methods we didn't cover and experiment with how they work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (27), function (14), class, (3), lambda (3), class. (2)
> **CLI Commands:** find (8), dotnet (4), make (1)
> **Code Identifiers:** emplist (7), mname (4), msalary (1)
> **Tools:** terminal (4), vs code (1)
> **Definitions:** is a  (3)
> **Cross-References:** previous video (1), later in (1)
> **Env Vars:** msdn (1)
> **Documentation:** the documentation (1)

#### Queue and stack
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=0)** - [Narrator] Two other popular data structures are the stack in the queue.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=3)** The stack is a last in, first out data structure, and that is the items that get pushed onto the stack last are the first ones to be popped off.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=12)** It's sort of like when people board an airplane, those people that board first are usually seated in the back of the plane.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=17)** And they're usually the last ones off.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=20)** The queue is a little bit different.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=21)** It's a first in first out structure, more like people waiting in line at a place like a movie theater to buy tickets.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=29)** Each of these data structures has its uses in a variety of programming problems, but that's beyond the scope of this chapter.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=35)** I'm just going to show you how the dotnet generic versions work.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=37)** If you want to learn more about how various data structures like these can be applied in the real world, check out foundations of programming, data structures course.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=46)** So the main properties and methods for working with stacks are shown here.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=50)** The count property is the number of items in the stack.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=53)** The clear method clears all the items from the stack and contains, indicates whether the stack contains a given object, the push and pop methods add and remove items from the stack.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=65)** While the peak method simply looks at the top item without actually removing it.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=69)** For queue, the methods are very similar, except for, instead of push and pop, there are methods for and queuing and de queuing items.
>
> **[1:17](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=77)** All right, so let's go head over to Visual Studio.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=79)** And here in the code, what we're going to do is under chapter three, video three, we're going to open up the program.CS file, and you can see here in the main function, I have already added code to create a new stack and a new queue, each of which holds string objects.
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=99)** You can see that in the angle brackets, where the generic data type is specified, I'm specifying strings.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=105)** So let's exercise some of the methods that we just learned about, and you can see that the stack and the queue contained names of some popular sports.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=113)** So that's what we'll be working on.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=115)** So first let's use the count property to see how many items are in the stack.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=120)** So I'll write out, there are, and have a little place holder there, sports in the stack,
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=131)** and that's going to be sports stack.count.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=136)** And we can also use the peak method to inspect the top item without actually removing it, so let's do that.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=145)** Let's write out the top item is, and that's going to be sports stack.peak.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=158)** All right, and the pop method is used to actually remove an item from the stack.
>
> **[2:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=165)** So let's do this, let's pop the top two items and then call the contains method to see if the stack contains the string hockey.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=174)** Now, since hockey was one of the top two items, right, that's going to returned false because remember, the last two that get pushed in are going to be the first to popped out.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=186)** So let's go ahead and write that, we'll call sports stack.pop, and then we'll do it again.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=196)** And then we'll write out, stack contains hockey, and then we'll call sports stack.contains.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=213)** And we're going to look for the string hockey.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=218)** All right.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=222)** All right, so let's go ahead and save and let's run what we have.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=227)** So let's open this in our terminal.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=231)** And I'll just run this.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=234)** All right, so in the output, this is essentially what we'd expect.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=238)** So the count property reports that there are six sports in the stack, which is followed by rugby, which is the top item.
>
> **[4:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=245)** That's the result of the peak function.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=247)** And then we see the result false because we pop off the rugby and hockey values.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=253)** All right, so far so good.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=255)** Okay, let's go ahead and try the queue and collapse that down, so we have some more room.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=261)** Okay, so you can see that I've used the NQ function to add content to the queue data structure, which is again, string data.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=270)** Similar to the stack, the queue has a count property along with a peak function.
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=276)** So let's go ahead and copy the two lines I wrote up here.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=280)** So I'll copy this one and paste that.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=284)** Only in this case, I'll use sports queue.
>
> **[4:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=290)** All right, and then let's go ahead and copy the peak.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=295)** So we'll copy that and paste.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=300)** And once again, we'll use the queue.
>
> **[5:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=302)** Now the queue doesn't have a pop function to remove items.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=306)** Instead, the function is called DQ.
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=308)** So let's use that to remove the two front items and then test to see if hockey is in the queue.
>
> **[5:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=315)** So in this case, I'll call sports queue.DQ, and I'll do that twice.
>
> **[5:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=325)** And then we'll call
>
> **[5:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=339)** sports queue.contains, and then we'll look for the string hockey.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=348)** Now remember, in this case, the ones that are pushed on first get removed first.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=353)** So unlike in the stack where we pop off the last two that pushed on, in the queue, we're going to dequeue the first two that were added.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=362)** So hockey should still be there.
>
> **[6:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=364)** So let's go ahead and save, and let's run this one more time.
>
> **[6:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=375)** And you can see that once again, we get the output that we expect.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=378)** So there's six sports in the queue.
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=381)** The top item is baseball because that's the first one in the list.
>
> **[6:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=385)** And the queue contains hockey, this time it's true because baseball and football were the ones that got removed first.
>
> **[6:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=392)** So now this example just scratched the surface of the stack and queue structures.
>
> **[6:36](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/queue-and-stack?u=76281980&t=396)** So I would suggest maybe taking a look at the docs for each and doing some of your own experimentation to explore further.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (6), case, (3), for, (1), this, (1)
> **Definitions:** is a  (2), is called (1)
> **Tools:** visual studio (1), terminal (1)
> **CLI Commands:** dotnet (1)
> **Documentation:** the docs (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)

#### Dictionary
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=0)** - [Instructor] The dictionary class is particularly useful.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=3)** It gives you a way of associating unique individual keys with values.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=9)** Keys and values can be pretty much anything, integers, strings, and even objects.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=14)** The dictionary maintains a one-to-one mapping of a key to an associated value and prevents another key with the same ID from being added.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=23)** So, in this case, let's suppose you wanted to keep a mapping from file extension types to descriptive text strings.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=31)** Now, you can see that each of the keys is unique, but values don't have to be.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=37)** So in this case, for example, I've got .htm and .html as keys, but they both map to the same string, which is HTML File.
>
> **[0:46](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=46)** So, like the other generic collection classes, the dictionary has certain important properties and methods.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=51)** The count and clear methods are pretty self-explanatory.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=54)** You can use the ContainsKey and ContainsValue methods to search the dictionary for either type of data, a key or a value, and add and remove are used to add and remove data to and from the dictionary.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=67)** The nice thing about the add method is that it throws an exception, if you try to add an existing key so you don't have to worry about maintaining uniqueness yourself.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=75)** All right, let's go ahead over to the editor and try out some of these examples.
>
> **[1:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=79)** Okay, so here in my editor, in the folder for chapter three, video four, I'm going to open up program.cs.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=89)** And you can see I've already created a dictionary object and in this case, my generic dictionary is going to map string keys to string values, right?
>
> **[1:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=99)** And I've initialized the dictionary with some starting values.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=104)** So I've got some file extensions mapped to their text equivalents.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=108)** So let's try exercising some of the methods that we just learned about.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=112)** So let's add a line that prints out the number of key value pairs that are in the dictionary.
>
> **[1:58](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=118)** So to do that, we're going to use the count property.
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=123)** So, I'll write there are key/value pairs
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=133)** and that's going to be fileTypes.Count.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=138)** Oops, not continue.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=140)** Count. There we go.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=142)** And now let's try to add a key that already exists.
>
> **[2:27](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=147)** And for this, we need to use a try catch and remember that's because the add method throws an exception when a key already exists.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=155)** So I'm going to write try and then fileTypes.Add.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=160)** And I'm going to try to Add.htm and map that to a web page.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=168)** And then I'm going to catch, oops, catch an argument exception.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=180)** And I'll just simply write out key already exists.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=191)** All right.
>
> **[3:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=192)** And then let's try removing an item and then seeing if it still exists.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=196)** So I'm going to type fileTypes.Remove, and I'm going to remove the key named CSS, and then let's call the console WriteLine.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=221)** And that's going to be the result of calling fileTypes.ContainsKey.
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=232)** And we're going to look for the .CSS key.
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=236)** All right.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=237)** And then finally, let's write some code that uses for each construct, along with a key value pair helper class to just dump out the contents of the dictionary.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=248)** So what I'm going to do here is write Console.WriteLine dumping dictionary contents.
>
> **[4:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=259)** All right.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=261)** And then I'm going to write foreach, and what I'm going to have in my variable is going to be a KeyValuePair.
>
> **[4:30](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=270)** And that is going to be a KeyValuePair of a string maps to a string.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=277)** All right.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=278)** And then my item, I'm just going to call that kvp and I'm going to be looking in my fileTypes variable.
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=287)** All right.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=288)** And then what I'm going to do is write out the key
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=299)** and then the value.
>
> **[5:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=304)** Okay.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=305)** And that's going to be kvb.Key and kvp.Value.
>
> **[5:14](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=314)** All right, so going to use the foreach loop.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=319)** This class right here enables me to get a single item as the key value pair when I'm looping over the entire fileTypes dictionary.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=329)** And then that kvp variable then contains a key property and a value property.
>
> **[5:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=335)** So this little helper class right here is pretty useful for extracting the contents of dictionaries.
>
> **[5:41](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=341)** So let's go ahead and save and then let's bring up our terminal.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=348)** All right.
>
> **[5:49](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=349)** And let's go ahead and run the code and we can see that, all right, scroll a little bit there.
>
> **[5:56](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=356)** All right, so here in the output, you can see that there are five key value pairs to start, which is correct, all right.
>
> **[6:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=362)** Then we get an exception when we try to add the same key again, that's how we're getting this key already exists output, because remember up here in my try catch, that's what happens when the exception happens.
>
> **[6:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=375)** Then we remove.css and sure enough, it's not there anymore.
>
> **[6:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=378)** So contains key returns false.
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=381)** And then we have the four remaining pairs when we dumped the contents.
>
> **[6:26](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=386)** So we have the keys and values written out, each of them right here at the end.
>
> **[6:31](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=391)** So you can see the dictionaries are a pretty commonly used programming structure in real world applications.
>
> **[6:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=397)** And I'll give you a hint now.
>
> **[6:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/dictionary?u=76281980&t=400)** You might want to use one of these in the upcoming programming challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), case, (3), catch, (2), self (1), continue (1)
> **Code Identifiers:** filetypes (6)
> **Env Vars:** css (2), html (1)
> **File Paths:** remove.css (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Programming C# generics
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=0)** (exciting electronic music)
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=7)** - [Instructor] Okay, it's time for another programming challenge.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=9)** In this challenge, we're going to use what we've learned about working with generic collection classes, to calculate information based upon a set of data records.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=18)** In this case, we'll be using a set of information about classic cars, and I'm going to give you a bit of a head start, by providing a starting point with the dataset already populated.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=28)** So let's open up the starting point code, and let's take a look at the data.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=33)** So, here you can see that we have a class named ClassicCar, which contains fields for the Make, Model, Year, and the current Value.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=43)** And we have our constructor.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=45)** And then down here, in our program, I've written some code to create a generic list, which is a list containing ClassicCar objects, and then I've written some code which will populate that list with some ClassicCar data.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=63)** And if we scroll down, we can see that the populateData function adds a whole bunch of ClassicCar information to the list.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=72)** So, here's what your program is going to calculate.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=75)** So first, you're going to calculate how many cars are in the collection.
>
> **[1:20](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=80)** Then you're going to calculate how many of the cars are Fords.
>
> **[1:25](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=85)** Next, you're going to determine which car is the most valuable in the collection, and then you'll determine what the value of the entire collection is.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=95)** And then finally, you'll find out how many unique manufacturers are there.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=100)** In other words, you only count every unique make once.
>
> **[1:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=104)** So let's run the finished application, so you can see the results that you should arrive at.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=110)** So I'm going to open my finished solution in my integrated terminal.
>
> **[1:56](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=116)** And again, you can do this in your regular terminal on your computer, if you're not using VS Code.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=122)** So here, inside my solution, I'm going to type dotnet run.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=126)** And you can see that when the example runs, these are the results.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=131)** So, we have 14 cars total in the entire collection.
>
> **[2:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=136)** There are four Fords.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=138)** The most valuable car in the collection is a 1978 Alfa Romeo Giuletta, which is $45000.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=144)** The entire collection is worth $278400.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=149)** And the collection contains four unique manufacturers.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=152)** Okay, so that should be enough to get you started.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/challenge-programming-c-sharp-generics?u=76281980&t=155)** Take some time to complete the challenge, and then when you're ready, I'll review my solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), function (1), finally, (1)
> **CLI Commands:** make (2), find (1), dotnet (1)
> **Tools:** terminal (2), vs code (1)
> **Definitions:** is a  (2), in other words (1)
> **Code Identifiers:** populatedata (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Solution: Programming C# generics
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=0)** - [Instructor] All right, so, how'd you do?
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=9)** Were you able to get all the parts of the challenge working?
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=11)** So solving this particular challenge requires a variety of techniques, and I'll review each one of those here.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=18)** And just to be clear, again, it's okay if your solution doesn't exactly match mine.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=23)** So let's open up the solution code.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=27)** And we'll walk through each part of the solution to see how I addressed the different parts of the challenge.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=33)** All right, so remember, we had our ClassicCar custom object and we had to find out different parts of the information set that we were given.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=43)** So first, we need to figure out how many cars were in the entire collection.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=48)** Now, this one's pretty straightforward.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=50)** You just need to use the count property of the list object, which you can see I'm using right here, and that tells us how many objects, in this case, individual cars, are in the collection.
>
> **[1:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=62)** So that one was pretty easy.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=63)** The next question involved figuring out how many Fords there were.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=68)** Now, there were a couple of ways you could have gone about this one, and if you found yourself iterating over each element in the list and counting the number of times the make field was Ford, well, then, that's one way.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=78)** I, however, decided to use the FindAll function.
>
> **[1:23](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=83)** So the FindAll function takes a delegate as a parameter, which is used to determine if a given element in the list should be included in the result.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=93)** So I have this delegate called find Fords, and if I scroll down... You'll see the findFords function right here.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=103)** It essentially checks to see if the given car is a Ford, and if it is, it returns true.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=112)** Otherwise, it returns false.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=115)** So as we scroll back up, you can see that the FindAll function creates a new list.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=122)** So when FindAll is finished, the resulting list contains the matches, and then I just need to use the count property on that new list to see how many Fords there were in the original collection.
>
> **[2:15](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=135)** All right, so far, so good.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=138)** The next part is a little more involved.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=140)** So I needed to create a couple of local variables here, the most valuable car and high value, and one tracks the current car, and then one keeps track of the high value mark.
>
> **[2:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=152)** So this code loops over each element in the list of classic cars and checks to see if that car's value is higher than the highest value encountered so far.
>
> **[2:44](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=164)** If it is, then I set the local car variable, which is now currently the most valuable one, to the current car, and then I keep track of the new high value mark.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=176)** So at the end of this loop, the car that this variable is referring to will be the one with the highest value, and so I just simply write out those fields to the console.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=189)** All right, so that's how we find the most valuable car.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=193)** Next, we had to figure out what the entire collection was worth.
>
> **[3:16](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=196)** In this case, it's just a matter of looping over the entire collection and adding up all of the fields to get the total.
>
> **[3:24](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=204)** So I have my totalValue variable here, and I loop over each one of the cars, add that car's value to the total, and then print out the total at the end of the loop.
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=213)** Again, pretty straightforward.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=215)** Finally, we had to figure out how many unique manufacturers there were in the collection.
>
> **[3:41](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=221)** Now, solving this by using a loop would have been a bit convoluted, so instead, I decided to use a dictionary.
>
> **[3:47](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=227)** So I create a dictionary, which is going to hold a string and boolean values.
>
> **[3:52](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=232)** So it's going to map strings to booleans.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=234)** So I create that new generic list, and then the loop iterates over each element in the list and then tries to add the manufacturer name to the dictionary.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=244)** Now, the add method will throw an exception if you try to add a name that's already in the dictionary, so I used this try-catch mechanism to make sure that each manufacturer is added only once.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=258)** So when that loop is finished, I just need to read the count property of the dictionary keys property, which gives me the number of unique manufacturers.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=269)** Now, again, you're probably wondering, why did I map string to booleans?
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=272)** Well, I needed to use the dictionary to keep track of unique values and I have to map the strings to something.
>
> **[4:38](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=278)** I could have chosen anything.
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=279)** I just chose a boolean just to, you know, make something point to the key.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=283)** That's the only reason I'm doing that.
>
> **[4:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/solution-programming-c-sharp-generics?u=76281980&t=285)** So I hope this challenge illustrates that there are several ways to solve a given problem, and that you can use the various collection objects together when you need them.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), case, (2), let (1), finally, (1), throw (1)
> **CLI Commands:** find (3), make (3)
> **Code Identifiers:** findfords (1), totalvalue (1)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/next-steps?u=76281980&t=0)** - [Joe] All right, well, that brings us to the end of this course on C# interfaces and generics.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/next-steps?u=76281980&t=5)** I hope you really enjoyed learning about these two useful parts of C# and that you're inspired to use them in your own programs.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/next-steps?u=76281980&t=11)** I have some suggestions on where you might want to go next to continue learning about the great programming language that is C#.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/next-steps?u=76281980&t=18)** At a few points in this course, we used events and delegates, and if you want to learn more about how delegates and events work, check out the course C#: Delegates, Events, and Lambdas.
>
> **[0:28](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/next-steps?u=76281980&t=28)** We also used some collection classes, like list and dictionary, and there's a whole course that covers the collection types in C#s called, appropriately enough, C#: Collections.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/next-steps?u=76281980&t=37)** And if you want to see how some of these features are used in real-world applications, then take a look at the Code Clinic: C# course.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-interfaces-and-generics-14335425/next-steps?u=76281980&t=45)** I hope to see you back again soon in another one of my titles, until then, happy coding.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Speakers:** - [joe] (1)


## Path Context

### In [[Elevating C- Skills- Building Robust Applications]]
← [[C- Delegates, Events, and Lambdas]] | **3 of 8** | [[C- Test-Driven Development]] →

### In [[Getting Started as a C- Developer]]
← [[C- Delegates, Events, and Lambdas]] | **6 of 9** | [[C- Design Patterns Part 1]] →

## Appears In

- [[Elevating C- Skills- Building Robust Applications]]
- [[Getting Started as a C- Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#
