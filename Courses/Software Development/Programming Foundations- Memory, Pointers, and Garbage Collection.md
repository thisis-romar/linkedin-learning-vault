---
type: course
cssclasses:
  - lle-course
slug: programming-foundations-memory-pointers-and-garbage-collection
url: "https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection"
duration_minutes: 151
duration: 2h 31m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQFbN4uqlWyxgg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663000615486?e=2147483647&amp;v=beta&amp;t=JfkDQ6JgmswOu21E5DKAT2zPxX5DSIwVq-SIFD23bJ8"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a Programmer- Foundations]]'
prev_courses:
  - '[[Programming Foundations Databases]]'
next_courses:
  - '[[Programming Foundations- APIs and Web Services]]'
path_nav: '[{"path":"Become a Programmer- Foundations","position":8,"total":12,"prev":"Programming Foundations Databases","next":"Programming Foundations- APIs and Web Services"}]'
path_count: 1
tags:
  - course
  - topic/software-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations-%20Memory%2C%20Pointers%2C%20and%20Garbage%20Collection.md)

![Programming Foundations: Memory, Pointers, and Garbage Collection](https://media.licdn.com/dms/image/v2/C4D0DAQFbN4uqlWyxgg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663000615486?e=2147483647&amp;v=beta&amp;t=JfkDQ6JgmswOu21E5DKAT2zPxX5DSIwVq-SIFD23bJ8)

# Programming Foundations: Memory, Pointers, and Garbage Collection

> Did you know that computers have both short- and long-term memory just like you? It’s true. If you peel back the layers of what it really means to be a programmer, you find that most programming tasks involve moving values around in memory. Many contemporary programming languages hide those mechanics, but as you advance they get harder to avoid.Join instructor Maaike van Putten to take your founda

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection) | 2h 31m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started with memory management](#getting-started-with-memory-management)
  - [Are you ready to learn memory management?](#are-you-ready-to-learn-memory-management)
- [**1. Memory Management Concepts**](#1-memory-management-concepts) (9 videos)
  - [What is memory?](#what-is-memory)
  - [Why do we need to manage the memory?](#why-do-we-need-to-manage-the-memory)
  - [Stack memory](#stack-memory)
  - [Heap memory](#heap-memory)
  - [Heap vs. stack memory](#heap-vs-stack-memory)
  - [Allocating memory](#allocating-memory)
  - [Deallocating memory](#deallocating-memory)
  - [Garbage collection](#garbage-collection)
  - [Actual removing or sweeping](#actual-removing-or-sweeping)
- [**2. Memory Management in Code**](#2-memory-management-in-code) (5 videos)
  - [The C way: Allocating memory](#the-c-way-allocating-memory)
  - [The C way: Deallocating and reallocating memory](#the-c-way-deallocating-and-reallocating-memory)
  - [The automagic way in modern languages](#the-automagic-way-in-modern-languages)
  - [Memory management in Python](#memory-management-in-python)
  - [Memory in Python visualized](#memory-in-python-visualized)
- [**3. Memory Leaks and Best Practices**](#3-memory-leaks-and-best-practices) (4 videos)
  - [What are memory leaks?](#what-are-memory-leaks)
  - [Out of Memory error](#out-of-memory-error)
  - [Avoiding memory leaks](#avoiding-memory-leaks)
  - [Best practices with memory](#best-practices-with-memory)
- [**Glossaries**](#glossaries) (0 videos)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps in memory management](#next-steps-in-memory-management)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with memory management](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=0)** - [Maaike] Look at this number 6 5 4 8 6 7 2.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=5)** Nice number, right?
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=6)** Can you remember it?
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=8)** All right, have a good luck and I'll pause.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=12)** Can you recall the number?
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=14)** Great, okay.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=15)** Another question.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=17)** What's your favorite childhood memory?
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=19)** Again, take a pause and perhaps a cup of tea and think about those.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=25)** Welcome back.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=26)** No, you're not in the wrong course.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=28)** I just wanted you to access your two different types of memory, short term and long term memory.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=34)** The computer has two types of memory as well and we'll focus on the computer's short term memory in this course.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=41)** First, we'll go over the basic concepts of [[Memory Management]].
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=45)** The exact implementation depends on your programming environment.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=49)** I may or may not make this point another a hundred times throughout this course.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=53)** You'll learn how a program runs and the way it interacts with memory.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=57)** Next up, we're going to see how it's done in the C language and compare and contrast it with Biden's memory management.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=65)** Finally, we'll have a look at memory leaks and best practices for memory management.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=70)** At this point, can you still remember your favorite childhood memory?
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=73)** I sure hope so.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=75)** It's in your long term memory.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=77)** What about the number?
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=78)** Can you remember it?
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=80)** Maybe you can, maybe you won't, this number was or is in your short term memory and if you haven't forgotten it yet, you will by tomorrow, I hope.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=90)** My name is Maaike and I'm a software developer and trainer.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/getting-started-with-memory-management?u=76281980&t=93)** Let me help you to get this valuable knowledge that will boost your ability to debug and help you to become application performance rockstar.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (3)
> **CLI Commands:** make (1)
> **Speakers:** - [maaike] (1)

#### [Are you ready to learn memory management?](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/are-you-ready-to-learn-memory-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/are-you-ready-to-learn-memory-management?u=76281980&t=0)** - [Narrator] Before we get started with [[Memory Management]], let's first make sure that this course is for you.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/are-you-ready-to-learn-memory-management?u=76281980&t=6)** In order to be able to follow along, you'll have to know the basics of any programming language.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/are-you-ready-to-learn-memory-management?u=76281980&t=11)** This means that you need to be able to create variables, objects, and functions.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/are-you-ready-to-learn-memory-management?u=76281980&t=15)** It's also necessary to be able to create loops and if conditions.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/are-you-ready-to-learn-memory-management?u=76281980&t=20)** If you are not familiar with a programming language at this level yet, there are some excellent courses on [[LinkedIn]], such as Learning [[Python (Programming Language)|Python]], Learning [[Java]], Learning C#, and so many more.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/are-you-ready-to-learn-memory-management?u=76281980&t=32)** If you already know at least one programming language at this level, then let's get moving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (1), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1), [[Java]] (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 1. Memory Management Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [What is memory?](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=0)** - [Instructor] Sometimes you'd want something to be stored for a really long time.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=4)** For example, the photos of your child on your phone.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=7)** Sometimes you don't want something to be stored for a long time, such as an [[Instagram]] story or a Snapchat message.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=14)** Let's start by discussing what memory is when we don't think about computers.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=19)** We humans tend to have short-term memory and long-term memory.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=24)** Short-term memory is, for example, if we need to remember a code that was texted to us and enter in a two-factor authentication field.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=32)** Most people won't remember the code the next day, or two seconds later, in my case.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=39)** Long-term memories are things we remember for, well, longer, such as a lovely party, a fun activity, the craziest things friends did, or beloved childhood memories, such as your mom learning you how to ride a bike.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=54)** All right, so let's now switch to computers.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=57)** Computers also have two types of memory, main memory and secondary storage.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=63)** The difference is similar to human short-term and long-term memory.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=67)** The main memory is the short-term memory.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=70)** When you shut down a computer, the temporary main memory gets erased.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=74)** The secondary storage is the long-term memory.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=77)** For example, files and programs on your hard drive.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=81)** Clearly it's more complicated than this.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=84)** Definitely if you're going to [[Zoom]] in.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=86)** And we are going to zoom in, but only on the main memory and not on the secondary storage.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=92)** The main memory is also often referred to as RAM, which is an abbreviation of random-access memory.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=99)** This is the memory that can be accessed by the CPU, which stands for central processing unit.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=105)** This RAM is stored on the motherboard of the computer.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=108)** And in order to run a script on your computer, for example, to analyze some data, it needs to be loaded into the main memory.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=116)** If the script or data set is really big and it doesn't fit into the RAM, the secondary storage or virtual memory on the hard drive can be involved to manage the large script or data set.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=126)** The issue with using secondary storage, though, is it will slow down your process tremendously, because using the RAM is actually very fast to access for the CPU.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=137)** When you write code, this code will be loaded into the RAM when it's being executed.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=143)** The variables and objects that you are creating with your code also live on, you may have guessed this, the RAM memory.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=150)** When you are creating more objects and variables than you're having memory, this becomes a problem, and RAM memory gets full.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=158)** In some programming languages, you'll have to allocate and deallocate memory manually.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=163)** In other languages, this is done for you.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=166)** The main memory doesn't only consist of the RAM, though.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=169)** There's also ROM.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=170)** This is the read-only memory.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=173)** As is in the name, data cannot be written to the ROM.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=176)** It's slower than RAM, and the memory is non-volatile, just like the secondary storage.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=183)** As a result, it doesn't disappear when the computer is shut down.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=187)** The ROM typically has the logic needed to start a computer and operating system so that the computer becomes ready for usage.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=194)** So let's end this video with a fun fact.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=197)** Referring to the main memory as RAM is officially incorrect because it consists of not only RAM, but also ROM.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=205)** It is common, though, when we talk about main memory that we just mean the RAM.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=209)** Just know, they're not really the same thing.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=212)** RAM is main memory, but not all main memory is RAM.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-is-memory?u=76281980&t=215)** Also, in this course, we're just talking about the RAM part, since that's the part that's being used by the applications that we'll write.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Instagram]] (1)
> **Env Vars:** ram (15), rom (4), cpu (2)
> **Analogies:** for example (4), such as (3), just like (1)
> **Definitions:** is an  (1), stands for (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Why do we need to manage the memory?](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=0)** - [Speaker] Now we know what a memory is, it's time to have a closer look at how does this work and when we are coding.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=6)** So, we already learned that opening a program means that the program gets loaded into domain memory coming from the secondary storage, and from there, it gets executed by the CPU.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=18)** The RAM is the physical memory that's being used.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=21)** This memory gets managed at roughly three levels, [[Hardware]], OS and applications.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=28)** We'll focus on [[Memory Management]] by the application.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=31)** This comes down to two type of actions.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=34)** A piece of memory gets allocated for a certain bit of information, and when it's no longer needed.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=41)** This piece of memory gets released again, this is called deallocation.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=46)** Then there are also two types of memory allocation out there, static and dynamic.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=51)** Static allocation occurs before the program is executed such as the loading of the classes.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=57)** Dynamic allocation happens during runtime.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=61)** This means during the execution of the program.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=64)** This is, for example, used for the objects and variables that are created during run time.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=71)** When the dynamic memory is no longer used, it should be released to free up memory and avoid unnecessary memory shortage during the execution of your program.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=81)** When the memory gets full, even before it's full, the computer will become slow.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=87)** So, the allocation and the releasing of the memory are considered memory management.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=92)** This is important to have a well-performing application.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=95)** That's actually not as easy as it sounds.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=97)** Complex problems like what block of memory to allocate, and when is memory ready to be released again need to be dealt with.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=106)** There are roughly two ways of managing the memory, manually and automatically.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=112)** Manual memory management means that the developer has to allocate and deallocate memory in the code, such as necessary in C and C++.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=121)** This might sound tedious, but it actually comes with some advantages.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=126)** First of all, if you learn coding this way, you really understand what's going on with memory, or at least you should in order to do it well.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=135)** And when memory is tight, this approach can be more efficient than the automatic way.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=140)** Clearly, it's a bit tedious to do.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=143)** Every time, the developer needs to code the allocation and the deallocation.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=148)** Therefore, manual memory management gives a lot of boilerplate code, and it's rather prone to errors 'cause something goes wrong when you forget to deallocate or allocate a piece of memory.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=158)** So, what about the automatic memory management then?
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=162)** This is where the language has a built-in memory management service.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=166)** This service knows when to allocate and deallocate memory by itself.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=170)** This saves boilerplate code, and it avoids a lot of common human mistakes in the management of the memory.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=177)** The developer can just focus on the features they're building instead of on the memory management code.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=182)** Programming languages such as [[Python (Programming Language)|Python]], [[JavaScript]], [[Java]], Perl, and many others take care of memory management for you.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=189)** In order to do so, many of these languages work with heap memory and stack memory.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/why-do-we-need-to-manage-the-memory?u=76281980&t=194)** Let's see what these actually are in the next few videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (8), [[Hardware]] (1), [[Python (Programming Language)|Python]] (1), [[JavaScript]] (1), [[Java]] (1)
> **Analogies:** such as (3), for example (1)
> **Env Vars:** cpu (1), ram (1)
> **Exercise Files:** boilerplate (2)
> **Definitions:** means that (1), is called (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [speaker] (1)

#### [Stack memory](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=0)** - [Instructor] Many languages, like C, C++, [[Java]], and C#, manage the memory by having a heap and a stack.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=8)** How this is implemented differs amongst different languages.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=12)** A stack is actually a special data type that works with LIFO principle: last in, first out.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=19)** Really think of a stack of plates.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=21)** If you put new plates, you do so on top of the stack.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=24)** And if you need plates, you grab them from the top of the stack, or at least you should.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=29)** With a stack memory, this isn't optional, though.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=33)** The stack area is a part of the RAM memory.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=36)** So, what do we store on the stack?
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=39)** We store the variables created by your functions on the stack.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=42)** When our functions call other functions, we create a new stack record to store that function's temporary variables.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=49)** And if that function calls another function, we create another stack record to store that function's variables.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=56)** When the function is done, the stack memory gets deallocated.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=60)** Variables created by functions are only accessible to these functions theirselves.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=67)** The order of the function calls are typically stored on another stack, the call stack.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=72)** Sometimes they're just a stack pointer.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=74)** This depends on the system that you're using.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=77)** The call stack points to the corresponding stack record on the stack memory.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=82)** All right, let's have a look at this visualized.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=84)** So, say we're having our stack memory over here.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=88)** Right now, there's nothing on the stack memory.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=90)** But, when a memory gets executed, a stack record is created.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=95)** And as you can see, indicated by the arrow, this is the current record, meaning this is the latest record, and this is what we can access.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=103)** But, this method is actually going to be calling another method.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=108)** And right now, the arrow changed one up, meaning that this one is now the current method.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=114)** This is what we can access in terms of values and references, only the ones for this method.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=120)** But, this method is yet calling another method.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=123)** And as you can see right now, on top, a new stack record has been created.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=128)** When this method 3 is done executing, it actually deallocates the stack memory immediately, and the current record is the previous one, method two.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=137)** When this one is done, it also gets deallocated, and now we're back in method one.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=143)** Clearly this is a bit simplified.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=145)** These stack records can actually receive the output of the method they've called via special mechanisms.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=150)** But again, this differs depending on the implementations.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=154)** So, when this method is done, our stack is going to be all empty again.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=159)** The stack usually has a limit of records it can take, and the records have a maximum size as well.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=166)** If that limit is exceeded, you get a stack overflow error.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=171)** This is actually what a famous troubleshooting firm called Stack Overflow is named after.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=177)** And what you're looking at right now is the homepage.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=180)** Chances are you haven't ever seen it yet, because you've just entered some sort of thread using [[Google]].
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=186)** Also have another memory area, the heap.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=189)** The items on the stack can point at memory locations on the heap.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/stack-memory?u=76281980&t=193)** Let's see what this heap exactly is in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Google]] (1)
> **Env Vars:** lifo (1), ram (1)
> **Documentation:** stack overflow (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Heap memory](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=0)** - [Instructor] The Heap memory is also part of the RAM.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=3)** It's used for storing values that need to be accessed throughout the entire application.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=9)** As I just mentioned, the stack is only accessible from within the method.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=13)** Sometimes you'd want something to be accessible outside of the method.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=17)** And in this case, we could think a bit of a freezer.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=20)** And at this point you may wonder whether you're in the right course, but you are.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=23)** This is just an analogy that might help you to understand the concept a bit better.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=28)** So if I'm cooking some food, it would be sad if it were only accessible at the point where I'm cooking the food, right?
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=34)** So what I would want to do then is that when I'm done cooking, I want to store the food in the freezer.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=40)** This means that it can also be accessed at a later moment when I'm not in a cooking method anymore.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=46)** Also, it's not only accessible by me.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=49)** It's actually accessible for everyone who's in the household with access to the freezer.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=54)** So that means if someone comes over before I'm back, the content of the freezer may actually have changed since in my head I may be holding a reference to some leftovers, but if someone else comes over and eats the said leftovers, they want to get back, they're actually going to be gone or at least partly.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=73)** So by holding this reference as something that more people have access to, it can be changed when I'm going to access it again.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=81)** Also in the case of the Heap and the stack, some things can simply not be stored on the stack.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=86)** And the same is true for our minds.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=87)** We can remember things but we cannot store food on our minds, we'll need a freezer for that.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=93)** So back to computer memory, as we just mentioned the stack memory has blocks for every function.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=100)** In this case, we have a main function, which is calling a function, which on it's turn is calling another function.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=106)** If a certain value needs to be available to different functions and even different stacks at the same time, this is where the Heap comes in.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=115)** So in this case, we have some local variables, but this special zed variable, it needs to be accessed by all these functions.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=122)** So this is why we put it on the Heap.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=126)** The stack can then hold the memory addresses of the value on Heap and access it using this address.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=132)** But remember, just as with the freezer, if someone comes along and goes ahead and modifies this value, if you're holding a pointer to this address and you're going come back later, if it's modified, it's still going to be modified.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=145)** In this very specific example in some languages six might actually be not modifiable.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=151)** There will be new value created, but that's beside the point for now.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=154)** Whether certain objects are actually being able to be modified depends on the language and it's implementation.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=161)** So say that a Function Two is going to be done.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=164)** The variable in or function that was holding the address is gone now, but there might be another variable elsewhere on the stack holding the same address, as is the case for the local variable set in Function One, and also for the set in a main function.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=180)** If one of the functions alters the values stored on the Heap, so for example, we're changing zed to nine from Function One over here.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=189)** When we're going to be accessing it later it will be changed no matter where we access it from.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=193)** So the Heap is for holding values that need to be accessible globally, but typically also bigger values such as objects are stored on the Heap, since this stack memory is rather limited.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=206)** Next, let's take a closer look at some of the biggest differences between the Heap and the stack, so we can gain a better insight into how this all works.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-memory?u=76281980&t=215)** I will review the differences that may exist among different languages.

> [!info]- Semantic Content
>
> **Env Vars:** ram (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Heap vs. stack memory](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=0)** - Let's compare and contrast the stack and the heap area.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=4)** Both are areas of the RAM.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=6)** which again is part of the main memory of the computer and needed to run an application.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=12)** Both of them can hold values needed for the runtime of your program.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=16)** So the most obvious difference between the heap and the stack it's different purpose they're serving.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=23)** The heap memory is used for variables, values and objects that need to be accessible globally and that can be accessed by multiple threats.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=32)** The stack keeps the order of execution and the internal values of each function.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=37)** This is done in the stack record.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=39)** Stack records get added for every function that's being called.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=43)** The next difference is Deallocation.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=46)** Stack records are removed after a function is finished executing.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=50)** As long as a function hasn't finished executing the stack will remain and can continue to grow.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=56)** As for heat memory it can stay there for the full application run time.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=60)** Memory allocated for items on the heap get deallocated when the item is no longer required.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=66)** After that, the memory can be allocated to another part of the program again.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=71)** Another difference is the speed.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=74)** Accessing elements on the stack is typically faster than accessing elements on heap.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=79)** Elements on heap are accessed via their memory address.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=82)** This address can be on the stack but also on another object on heap.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=87)** For example, when a certain object has another object, think of a person object, having an address object, the pointer to the address is actually stored on a person object.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=98)** From there, the memory address needs to be located.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=101)** And this means that the stack is built a memory as an actual stack.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=105)** This means that there's no real need to search when adding or removing from the stack, since the stack records are released in the reverse order they were added.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=114)** This also makes the adding to the stack straightforward since the memory location is fixed.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=119)** This is not the case for the heap.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=121)** A special algorithm is used to find a memory block that's a favorable.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=125)** Clearly this is more costly and it will take more time.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=128)** Also, the heap becomes fragmented over time.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=131)** However, there's typically less space reserved for stack 10 for the heap since stack memory consists of stack records that can only be accessed from within the same function.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=142)** Closely related to this last point there's not a cool thing to know.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=146)** The stack is usually only accessible to its owner threat.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=151)** The heap can be accessed by any threat.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=154)** Therefore, the stack is usually considered more secure.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=157)** This can be a bit confusing, so let's break it down.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=161)** First of all, in an application multiple things can happen at the same time.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=166)** This multiple things happening at the same time is actually an important computer science concept.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=171)** You may have heard of it, it's called concurrency.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=174)** In order to make this possible multiple threads are active at the same time.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=179)** A thread is a part of execution within an application and every thread has its own stack.
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=185)** So one thread can be calling an API to [[Fetch]] a certain calculation while the other thread is awaiting a call to the database.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=193)** So let's say some function is initiated by a certain thread that has a certain stack.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=197)** This thread is the one creating the stack record on its own stack and only this thread can access the stack record.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=205)** The heap can be accessed by any thread since all these threads share the same heap.
>
> **[3:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=210)** So in order to understand this we need to dive into the concurrency topic briefly but before we do so, actually I want to reflect on the freezer analogy of the previous videos.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=221)** So, concurrency is actually happening when you have a household with multiple people.
>
> **[3:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=226)** So if there's multiple people in the household it's probably multiple parts of execution happening.
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=232)** So some people might be doing the households and other people might be studying or working or maybe just relaxing.
>
> **[3:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=239)** But these threats can actually sometimes have sort of miscommunications happening and this needs to be managed.
>
> **[4:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=246)** So say there's this really nice piece of fine refrigerator and both the housemates hold a reference in their head to it.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=253)** So let's say that person one goes ahead and use this reference in its head to eat piece of pie.
>
> **[4:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=259)** When person two is going to try and do so the piece of pie is going to be gone.
>
> **[4:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=263)** So for now, think of threads just as things happening in an application, and you're good to go.
>
> **[4:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=270)** Let's now have a look at computer memory and multiple threads.
>
> **[4:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=275)** Sometimes there is just one thread and when there's one thread, there's one stack.
>
> **[4:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=280)** And if there's only one thread focused on executing the logic of the program not a lot will go wrong in terms of memory conflicts.
>
> **[4:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=288)** But sometimes there are multiple threads executing simultaneously.
>
> **[4:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=292)** Concurrency can be applied to increase the performance of your application, but it comes with consequences for [[Memory Management]].
>
> **[4:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=299)** So to go back to the household example again, if I'm doing the household for two people, it's probably going to be more efficient and done faster but things need to be managed a bit better than when I'm doing it myself since we need to split tasks and communicate well.
>
> **[5:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=314)** In here we see two stack that are going to be trying to access a value on heap at the same time, and actually they want to increment it.
>
> **[5:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=323)** If they both read it at the same time and then increment it, it'll only be incremented by one.
>
> **[5:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=331)** Why is that you may wonder?
>
> **[5:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=332)** Well, say that the first one comes over and read six first and then the second one comes over and still read six as well.
>
> **[5:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=340)** They're both going to be incrementing six by one and conclude that it's seven.
>
> **[5:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=344)** Then whoever comes first is going to write seven to the place in the heap and then the second one is just going to be overriding it with the same value.
>
> **[5:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=353)** This is different outcome from when the order of things was a bit different.
>
> **[5:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=356)** So for example, if right now they're going to do the same thing again but now function four is going to access the value first and increment it by one, and then after that, function one is going to be accessing the value and then also increment by one, It will be incremented by two even though we execute the same logic.
>
> **[6:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=377)** So what happens when we work with concurrency?
>
> **[6:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=380)** Well, if we don't manage it well, we actually don't know, It can either be the one or the other.
>
> **[6:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=385)** Neither one of these is correct or incorrect in this case, It really depends on the exact business needs.
>
> **[6:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=390)** Unpredictable outcomes are typically not what you want for a business need though.
>
> **[6:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=394)** And this is something to be very mindful of when working with heap memory.
>
> **[6:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/heap-vs-stack-memory?u=76281980&t=399)** Now that we've sorted out a difference between the stack and the heap, let's [[Zoom]] in on the concepts of allocation and deallocation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[Memory Management]] (1), [[Zoom]] (1)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** ram (1), api (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Speakers:** - let (1)

#### [Allocating memory](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=0)** - [Instructor] The assigning of a piece of memory, a memory address, and reserving it to store a certain value, program, or process is called memory allocation.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=11)** We already mentioned that we had two ways of allocation, static and dynamic.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=17)** Static memory allocation is for compile time allocation and dynamic memory allocation is for runtime allocation.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=24)** Dynamic memory allocation happens whenever we need to create new values on the heap.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=29)** What happens is that a memory area gets selected to put their value in.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=34)** The value gets written to the heap or it is reserved for certain purposes, and a variable on the stack holds the pointer to the element on the heap.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=44)** This point to the element on the heap can be passed to other functions.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=47)** The exact terminology for these principles differs per programming language.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=53)** Also, allocating the memory is part of the [[Memory Management]], and how this is done differs for different systems and languages.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=61)** It can be done manually by coding the allocation of the memory, and it can be done automatically by having it built into a language or interpreter.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=69)** It depends on the exact language, how it will be done.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=73)** Some languages make a distinction between allocation stack and heap memory.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=77)** For example, in C, stack memory is automatically managed, but heap is manually managed.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=84)** Most programming languages have an allocator for the heap memory that will take care of the allocation requests, either made by the programmer or the automatic memory manager.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=95)** Allocating memory means that less memory becomes available.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=99)** Luckily we can also deallocate memory and make it available again.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/allocating-memory?u=76281980&t=104)** This is exactly what we're going to be looking at next, deallocation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is called (1), means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Deallocating memory](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=0)** - [Instructor] The releasing of a piece of memory and making it available again is called deallocation.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=7)** For the stack, this is sort of easy.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=10)** When a function is done, the stack memory that was holding the variables for the function gets released by the system and pointer of the stack or called stack goes down by one to the previously called function.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=22)** For the heap, this is slightly more complicated.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=26)** First of all, the heap memory gets fragmented by this process.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=30)** When the heap memory is reserved, blocks are reserved in a sequence.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=34)** Releasing blocks makes the heap fragmented.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=37)** And this means that finding a memory space for a bigger type can be tough since it may not fit in the gap and the allocator could have to add it to the end or defragment the heap.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=48)** All of this actually depends on the system and the logic of the allocate of the language that you're using.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=54)** But this is not all.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=56)** In some situations, it's easy.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=59)** For example, writing a tiny piece of logic you can see.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=62)** You allocate a bit of memory and at the end of the function, it could be deallocated and that will be it.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=68)** And as a bonus, it's hard to determine when an item is ready for deallocation.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=74)** It can become way more complicated.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=77)** Say that we're creating a multi-thread application.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=80)** Every thread has its own stack and things are happening on these stacks.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=85)** All the threads share one heap.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=87)** How to know that none of the threads is still using an allocated memory spot and that it's ready for deallocation?
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=95)** In some languages, when we have to do it manually, you'll need to manage which threads are accessing the memory spot when.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=101)** And in some other languages, this is done automatically by a process called garbage collection.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/deallocating-memory?u=76281980&t=107)** In the next video, we're going to have a look at this garbage collection process in more detail.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), means that (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Garbage collection](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=0)** - [Narrator] So freeing up the memory of the heap can be done by a process called garbage collection.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=6)** Some languages like C and C++ require manual garbage collection by code.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=12)** Typically, it's not called garbage collection then.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=15)** Languages that have an automatic garbage collection building are for example, CCR, [[Java]], [[Python (Programming Language)|Python]] and actually many other high level languages.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=23)** There are some common errors that are not happening when we use a garbage collector.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=28)** First of all, the dangling pointer bugs can be avoided.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=32)** This is when the developer did free up the memory space but the pointer is still pointing to the old place where a certain variable is stored.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=40)** You can imagine that this can lead to unpredictable events such as a pointer returning a surprise value, when the memory location has been reassigned to another value.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=50)** Another common problem that developers with automatic garbage collection don't run into is the bug of freeing up a memory region twice.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=58)** This can especially be a problem when it has been reassigned to some other value that should not be deleted yet.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=65)** This is all not a problem for high-level language developers.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=69)** Thank you, garbage collector.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=71)** And lastly, all search memory leaks by not freeing up memory that should be freed up but cannot be reached anymore because the pointers are gone, all solved.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=81)** Not a problem when we use the garbage collector.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=84)** Well, this garbage collector must sound pretty awesome by now.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=88)** But when are elements on the heap ready for garbage collection?
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=92)** Well, when they no longer have a connection to the stack.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=96)** So how do we know?
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=98)** Now, that's a fun, classic struggle of computer scientists.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=101)** Let's explore some of the strategies and issues for garbage collection together.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=107)** In order to do so, let's grab a simple example of stack and heap.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=111)** Now, if you were a garbage collector and you had to find out which element still had a connection with heap, how would you go about that?
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=120)** There's one obvious two-step approach that would make sense to suggest here.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=124)** First of all, we could check out the stack, see what connections with the heap we're having and add the connected elements to a list and then check all the elements in the heap and see which ones are not on a connection with stack list.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=138)** So in this example, object one, object five and object six are on the stack.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=144)** So they're good to go.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=146)** And in this specific case, they have relations to other objects on the heap.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=150)** So object five has relation to object two, object six has a relation to object seven, and object seven on its turn has a relation to object four.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=159)** So these are all good to go.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=162)** In some languages, this phase would be called marking.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=165)** We're going to mark all the items that have a connection and garbage collects all the unmarked items.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=171)** But what if an item gets created after checking the stack?
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=176)** It would be unmarked but still have a connection to the stack and then be freed up by the garbage collector because it was unmarked.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=184)** And that's a problem right there.
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=185)** Do we have a solution?
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=187)** Sure, let's pause the execution until we're done with the garbage collection.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=192)** And we remove the elements that we no longer need.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=195)** You may wonder isn't that bad for the performance of our application though?
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=199)** And you are right.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=200)** It's sure is bad because we would have to pause our application until we're done removing the objects.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=207)** All right, so isn't there a less costly way you may wonder?
>
> **[3:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=211)** And there is, we could keep a counter on every object on heap.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=216)** And this counter shows how often they were referenced.
>
> **[3:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=220)** When a reference was removed, the counter would be decremented.
>
> **[3:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=224)** And when reference was added, the counter would be incremented.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=228)** When the counter is zero, it could be removed by the garbage collector.
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=232)** As far as probably, this sounds like a very clever and more efficient way, but there is one problem.
>
> **[3:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=238)** A problem with cyclic references.
>
> **[4:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=241)** You may wonder cyclic references, what do you mean?
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=243)** Well, let's have a look.
>
> **[4:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=245)** So let's say that we have two objects here that are referencing each other.
>
> **[4:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=250)** In this case, object eight and object nine are referencing each other.
>
> **[4:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=255)** They both have the counter of one right now, even though they do not have a connection to the stack, they can never be called from within the application anymore.
>
> **[4:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=264)** And these so called islands of isolation would live unnecessarily on the heap forever.
>
> **[4:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=270)** We could probably add another counter here and that's for direct connections to the stack.
>
> **[4:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=274)** And then say something like, if the item is not connected to an item that's connected indirectly or directly, to an item that connects to the stack, it should be removed.
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=283)** But again, this will only work if we're going to be pausing our application again.
>
> **[4:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=291)** Cyclic references are two objects that reference each other.
>
> **[4:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=294)** So let's have a look at situation right now.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=298)** We're having object one, two, five, and six on our stack.
>
> **[5:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=301)** So therefore, they all have a one but object two is actually being referenced by object five as well and therefore, as a counter of two.
>
> **[5:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=310)** There are three objects with no reference to the stack.
>
> **[5:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=313)** These are object three, eight and nine, but what if object eight and nine would hold a reference to each other?
>
> **[5:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=320)** Their counters would be one for both of them.
>
> **[5:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=324)** And even though they do not have a connection to the stack because there's only connection to one, two, five, six, and also indirectly to seven and four, they would live on the heap forever.
>
> **[5:36](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=336)** Usually when I teach this someone asks, but what if you would add another counter here?
>
> **[5:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=341)** And this counters actually going to be for the direct connection to the stack or to items with a direct connection to the stack.
>
> **[5:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=348)** So say something like if the item is not connected to an item that's connected indirectly or directly to an item with a connection to the stack, it should be removed.
>
> **[5:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=357)** Sure, this would work, but it would require pausing the application until the garbage collection process is done and it would become costly again because it would not be able to do anything else until all the objects that we don't need were removed.
>
> **[6:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=372)** So what is the best option?
>
> **[6:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=374)** Well, first of all, garbage collection is an expensive process in terms of performance, but it's also necessary and we don't have limited memory, so we need it anyways.
>
> **[6:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=385)** Different languages have different implementations.
>
> **[6:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=388)** Amongst them, define the heap in different parts and having objects that live longer being checked less often to make the past shorter.
>
> **[6:36](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=396)** This is simplified explanation.
>
> **[6:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=398)** And again, the exact implementation of the garbage collection depends on the system and language that you're using.
>
> **[6:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/garbage-collection?u=76281980&t=404)** In the next video, let's have a closer look at the actual removing also called sweeping.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1), find (1)
> **Analogies:** for example (1), imagine (1), such as (1)
> **Env Vars:** ccr (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Actual removing or sweeping](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=0)** - [Instructor] The actual removing is often referred to as sweeping.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=4)** So sweeping is just removing objects that we no longer need.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=8)** Sweeping is also something that can be done in different ways.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=11)** We have three options for sweeping: Normal sweeping, sweeping with compacting, and sweeping with copying.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=19)** Let's start out with normal.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=21)** Say, this is the memory usage here and these bits are marked.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=26)** They can be deleted.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=28)** This is what happens after deletion.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=30)** The memory is fragmented.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=33)** It's the old memory, but with available blocks of free space in between.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=38)** So if you want to store a new bits like this one, we can store it here.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=42)** And if we'd like to store a bigger value, it might not fit in the middle, but it'll fit at the end, but say we'd like to store an even bigger value.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=52)** We do not have enough memory available.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=54)** Well, we do have enough memory available in total but not in big enough block.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=60)** So this will actually result in an out-of-memory error, even though we technically have enough space available.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=67)** So this could have been avoided if you would've used the second option for sweeping, sweeping with compacting.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=74)** So say that this is our memory again, and these bits are marked and thus will be swept.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=81)** We don't just delete these bits and leave gaps, but apply compacting, so that after compacting, the memory looks like this.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=90)** And if we want to store the bigger value now, we do have memory block large enough available, and we don't get an out of memory error.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=98)** There is a similar strategy to sweeping with compacting available and that is sweeping with copying.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=104)** Here is a memory again but this time we're having an extra piece of memory since we're going to copy.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=111)** These are marked objects and can be removed.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=113)** Instead of removing them and then compacting the memory, we're just going to be copying the unmarked elements to the other memory region, and then delete a full block.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=123)** You may think this sounds a lot better than just sweeping with compacting.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=127)** So why choose one or the other?
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=130)** And the key is in performance and memory usage here.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=134)** The garbage collection topic is a real fun one and a true brain teaser and want to really improve the performance of an application with, when done well.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=143)** Usually you just use a high-level language and the garage collector will do the work for you.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=148)** And in most situations you don't need to understand how it's working, but where there are cases in which it's of great importance to understand how this is working exactly.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=158)** For example, to avoid memory leaks, improve performance and understand certain concurrency problems better.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/actual-removing-or-sweeping?u=76281980&t=164)** You'll thank yourself having a good understanding of this process.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)


### 2. Memory Management in Code

[↑ Back to Table of Contents](#table-of-contents)

#### [The C way: Allocating memory](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=0)** - [Instructor] In order to explain [[Memory Management]] in real life, I'd like to start with C.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=5)** Before you think something along the lines of, but Micah, why should we go back to something that was hot in the early 70s When we have fancy languages like [[Python (Programming Language)|Python]], [[Java]], and C# now?
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=16)** Well, first of all, Python's most popular implementation is CPython and it actually means that it's written in C.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=25)** Second of all, memory management is beautifully visible in C and even though it's probably not the best idea to write your new web backend in C, it's a great idea to start with C to understand memory management in coding.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=40)** Now, what's really happening, and what is memory management like in C?
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=45)** The memory in C consists of different parts, the Stack, the Heap, BSS which stands for block starting symbol, DS, data segment, and the text segment.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=58)** These last three may sound very new to you, so let's go over them briefly.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=64)** BSS is a special segment for a static and global variables that are un-initialized at compiled time.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=71)** The data segment usually just abbreviated to DS is for the initialized global and static variables.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=79)** Then there's one last segment and that's for a compiled code that's being stored, this is called the text segment.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=87)** When we're coding, we're using the first four memory areas in the list, we're not going to be worrying about static variables for now, just know that they get special region in the memory, let's have a look at the Stack memory.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=99)** Local variables in C are placed in the Stack.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=103)** Local variables in C are sometimes also called automatic variables because they're giving us space in memory automatically, this memory space gets freed up automatically as well when they're no longer needed or actually accessible, 'cause the method is done executing.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=120)** All right, so here we're having a very basic C program.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=124)** Let's just go ahead now and create a variable which is going to be placed on the Stack.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=131)** Here we have in a and I'm going to be assigning 1 to int a, at this point our int a is now a local variable and it's automatically managed.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=142)** I do not need to assign a memory to it.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=145)** I can actually do this in multiple ways, I could first declare it on the one line and then actually initialize it on the second line.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=155)** These are all still local variables.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=158)** Also, when I go ahead and I'm going to be creating a new method up here which is going to be returning an int, let's say a very silly one, adding two numbers, clearly we could just use the plus symbol for this but let's go ahead and create a method for this.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=173)** And in here I can be returning the result of x + y, now, x and y are actually local variables to the method add and not to the method main.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=184)** And in here I could create a new one called maybe result and just store the result of adding a and b in there.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=194)** So these are local variables and they're stored on the Stack and when I'm sending them to our method, add, this means that I'm actually just sending the value over not to reference to this number so to say.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=208)** So this is what the Stack memory looks like when we're in a method add, on the Stack, this frame for method add is the current frame and method main is the one that we're going to return to when method add is done executing, you can see the local variables for each here.
>
> **[3:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=225)** There are some problems with using the Stack memory though, first, it can only be used if the size of the variables is known at compile time.
>
> **[3:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=234)** And secondly, Stack space is limited.
>
> **[3:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=237)** Lastly, elements on the Stack can only be accessed by the function that they're declared in and this is where the Heap comes in.
>
> **[4:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=245)** The Heap allows dynamic memory allocation.
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=248)** The one that happens during run time, this means that you don't need the size yet during compile time.
>
> **[4:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=254)** And this is actually where we have to allocate memory manually in C, let's first have a look at the visualization before we start with some possibly confusing symbols.
>
> **[4:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=265)** There are three concepts we need to think of here.
>
> **[4:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=268)** If we have an element on the Heap, we need to know where this element is.
>
> **[4:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=272)** This is called the address.
>
> **[4:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=274)** The address to this element can be considered a pointer, in order for the Stack to know where to find element on the Heap, we stored a pointer on the Stack, this is a special type of variable.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=287)** The variable on the Stack is not holding the actual element but it's just the location.
>
> **[4:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=293)** So if you have two variables holding the same pointer and one of them uses the point to access the element and update it, the other variable, holding the same pointer, is also going to see the updated element since it's pointing to the same element, the point is here, pun intended, there's only one element and two pointers to this very same element.
>
> **[5:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=314)** In C, we actually have three out-of-the-box methods that we can use to assign a memory area to a pointer, malloc, calloc, and realloc, malloc and calloc are used to assign a memory area on the Heap and realloc is used to reassign a new area where you need to resize the memory block, meaning that you can actually make it smaller and bigger.
>
> **[5:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=337)** The allocator is going to look for a suitable memory block of the right size.
>
> **[5:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=341)** This is actually a difference in which the Stack would be especially faster than the Heap, since for the Stack it's very clear where the memory block is going to be, just the next one on the Stack.
>
> **[5:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=352)** The Heap can be more fragmented and this is actually the difference in speed.
>
> **[5:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=356)** Let's have look at malloc.
>
> **[5:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=359)** Malloc is a function that returns a pointer to some memory address without it being typed.
>
> **[6:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=365)** This is indicated with the void asterisk return type.
>
> **[6:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=369)** We have to send in the size of a memory block as the parameter.
>
> **[6:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=372)** For example, we could say malloc 8 and this would return pointer to 8 bytes of memory.
>
> **[6:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=378)** So, let's go ahead and create pointer.
>
> **[6:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=383)** The asterisk here is indicating that this is going to be a pointer of type int, but at this point, our pointer is not pointing to a memory address yet, in order to have it point to a memory location, we need to assign the memory location and we're going to do this with malloc.
>
> **[6:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=399)** So I'm going to go ahead and say x = and then I'm going to be casting the result of our malloc to the right int pointer and then I'm going to say malloc and now I'm just going to give it a 4, meaning that's going to be the size of 4 bytes.
>
> **[6:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=419)** Now I can go ahead and just assign a value to this address and I'm going to give it the value of 42.
>
> **[7:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=426)** So I could go ahead and print this just like this, so I can say our value and then in here I'm going to say %d and in your line, oh, a bit early,
>
> **[7:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=443)** and then I'm going to say here I want to print the value of x.
>
> **[7:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=453)** Let's go ahead and see what happens if we run this program, as you can see, it's printing our value 42.
>
> **[7:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=464)** Let's just see if I can make this slightly more complicated for you to still understand what's going on.
>
> **[7:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=469)** So I'm also going to be creating a pointer of type int called y right now and I'm going to be assigning the same memory address as I did for x by assigning x to it.
>
> **[8:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=481)** So what I'm then going to do, I'm again going to be printing a value, this time I'm going to be printing y and I'm going to say before update here and you'll see y again, pun intended, just in a second now because clearly what I'm going to do is going to be updating x and then see whether y has changed or not.
>
> **[8:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=504)** So what do you think?
>
> **[8:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=505)** Is y going to be changed here?
>
> **[8:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=508)** So then I'm going to be updating x, let's just assign 20 to it now.
>
> **[8:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=514)** And then again, let's go ahead and print y after,
>
> **[8:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=529)** all right, let's run our program again As you can see now, our value for x still 42, before we update x, y is 42, and after the update, it's 20.
>
> **[9:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=546)** So this proves our point that actually it's pointed to the same memory address since y changes when x does.
>
> **[9:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=554)** So this is not a course on C, but there's actually one thing in here that's a bit silly to do that I'd like to point out.
>
> **[9:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=560)** And the thing is you usually don't assign real values to this, you typically go ahead and say sizeof and then just go ahead and say sizeof int which actually would also have been 4.
>
> **[9:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=574)** And if you need more of them, say, you would like to have four times this size, we would go ahead say four times the size of int.
>
> **[9:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=582)** I'm not going to dive into calloc because it's doing something similar and even though it's very interesting, we're just trying to understand memory management basics here.
>
> **[9:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=591)** There is something that I haven't discussed yet, how long do these variables stay on the Heap?
>
> **[9:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=597)** Well, in this case until the end of the program.
>
> **[10:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=600)** C doesn't know when you're done with the variable in the Heap, so you need to remove it manually and if you don't, it'll live there until the end of the program.
>
> **[10:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=609)** In this case, our program is very small and there's not a lot of time between the end of the variable and until when we need the variables.
>
> **[10:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=616)** So, it's not that bad in this particular case but it's not hard to imagine situations in which you're storing a lot more on the Heap and in which case it would be very bad.
>
> **[10:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=626)** So, what to do, we need to help C a bit.
>
> **[10:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-allocating-memory?u=76281980&t=630)** In the next video, we're going to have a look at deallocation to do just that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (5), [[Python (Programming Language)|Python]] (2), [[Java]] (1)
> **Definitions:** is a  (3), means that (2), is called (2), stands for (1)
> **CLI Commands:** python (2), make (2), find (1)
> **Analogies:** for example (1), just like (1), imagine (1)
> **Env Vars:** bss (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [The C way: Deallocating and reallocating memory](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=0)** - [Instructor] As we've just discussed, if we don't remove a variable, it will live on the heap forever, or, well, that's a bit dramatic.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=8)** It will live on the heap until a program ends.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=11)** Of course, we don't want that.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=13)** If we leave it there when we no longer need it, the heap will get unnecessarily full, and this can lead to memory problems, such as running out of memory.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=21)** Yikes.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=22)** So what do we do?
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=24)** We clean up.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=25)** And how do we do that?
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=27)** We deallocate the memory when we're done with it.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=30)** And how do we do that, you may wonder.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=32)** We do so with a special method, free.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=36)** Free takes the starting address of the memory block that should be freed as an argument and then frees the memory.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=42)** What this exactly means depends on the exact C implementation, but it could be that the memory gets erased, or that the memory just gets released and can be overwritten with new data when we use malloc again.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=55)** So in here, I'm just going to go ahead, and when we're done with it, I'm going to be setting the memory address free.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=62)** So I'm just going to call free, and then I'm going to be sending in x here.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=68)** All right, let's just go ahead and run this program and see what happens.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=76)** As you can see, we don't see any noticeable changes here, because we're just freeing memory at the end of a program, and it was going to be released at the end of our program as well.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=87)** Actually, I should change the pointers to point to NULL now, because now we have two dangling pointers that are still pointing to the freed up memory address.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=96)** So you may wonder what happens.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=98)** Well, let's just go ahead and print a value of y after freeing your memory region.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=111)** As you can see, after freeing, it's still going to be 20.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=115)** This means that my implementation did not reset this memory block.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=119)** It just marked it to be ready for allocation again.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=122)** So, let's see if we can break it.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=126)** I'm going to be copying this first line here.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=130)** And I'm just going to be assigning some new memory area, but this time it's going to be z.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=139)** And also, I'm going to be adding some values in z here.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=143)** Just go for a long number, and run it again.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=152)** As you can see, this time we have something really weird when we want to have the memory address for y.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=158)** Why is this, you may wonder.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=160)** Well, on line 15, we called the free method.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=163)** This means that the memory address that both x and y pointer were pointing to are ready for new allocation again.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=171)** And this is actually what happened on line 16.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=174)** It was a bit of a guess, but it was a very educated guess.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=176)** There's nothing else happening.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=178)** It's very likely that C will just grab the first free block of memory that it finds.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=183)** And it did so the previous time as well.
>
> **[3:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=185)** So the first block is still going to be the same block.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=188)** And in this case, I'm assigning a value on line 17, which is then where y is pointing to accidentally as well.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=196)** So what happened?
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=197)** Well, this is actually the dangling pointer bug in action.
>
> **[3:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=201)** So what should we do?
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=203)** We should point y and x to NULL.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=206)** So let's just go ahead and do just that.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=215)** So let's go ahead and run it again, so you can see what will happen now.
>
> **[3:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=222)** At this point, we get an exception.
>
> **[3:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=224)** And you may wonder how that's better.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=227)** And trust me, this is better.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=228)** You want to have the exception in this case, because if you don't get the exception, you get a surprise, and it's going to be terrible to debug.
>
> **[3:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=236)** So always make sure that when you're freeing a memory address that you also set your pointers to NULL.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=242)** So now we can allocate and deallocate.
>
> **[4:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=245)** There's one more important concept that we're just going to be discussing here.
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=248)** It's reallocate.
>
> **[4:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=250)** This is done with the realloc function.
>
> **[4:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=252)** It assigns a new block with a new size to a variable.
>
> **[4:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=256)** This means that we're going to move our memory block to another memory block with a different size.
>
> **[4:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=261)** And we do so with the realloc function.
>
> **[4:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=265)** This will assign a new block with a new size or resize the old block, if possible.
>
> **[4:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=270)** It is done by sending in the old block and then specifying the new size.
>
> **[4:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=275)** The result is again a void pointer.
>
> **[4:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=277)** If we want to have a specific type, we need to cast it.
>
> **[4:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=281)** So realloc returns a new block in a memory, and if it's possible, it will just stretch the old block, but if there's something else that's coming after the old block, then it will have to go ahead and assign a new block.
>
> **[4:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=292)** And after having returned this, it's not going to free the old memory.
>
> **[4:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=296)** It's just going to be returning the new address.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=298)** It's not freeing anything up.
>
> **[4:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=299)** If there's values on there, they will remain on there until they're overwritten.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=304)** So this is how [[Memory Management]] works if you have to do it manually.
>
> **[5:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=307)** Nowadays, we have the luxury of not having to worry about it in many languages.
>
> **[5:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-c-way-deallocating-and-reallocating-memory?u=76281980&t=312)** Let's explore this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (1)
> **Env Vars:** null (3)
> **Definitions:** means that (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Best Practices:** always make sure (1)
> **Speakers:** - [instructor] (1)

#### [The automagic way in modern languages](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=0)** - [Instructor] All right, there is a lot of good news here.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=3)** Many popular languages nowadays will help you so much with [[Memory Management]] that you don't need to worry about allocation and deallocation at all.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=12)** Well, sort of.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=14)** It's still happening, but there's no manual allocation and deallocation.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=18)** Actually, some more good news.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=20)** Using the language with automatic memory management helps avoid so many bugs.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=25)** Automatic memory management will prevent dangling pointer bugs and it'll also avoid freeing of memory regions twice accidentally.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=33)** Also, performance issues with your application due to poor memory management are less common.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=38)** It's even so great that whenever you have the opportunity it's best to use the language with automatic memory management.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=45)** Then there's a tiny downside.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=47)** Since it's always going to be done for you, it can be hard to grasp what's going on beneath the surface, especially when something goes wrong.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=55)** It can be hard to tell what exactly.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=57)** Therefore, it really helps to understand how automatic memory management is working.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=63)** It may not surprise you at this point, but this is going to be different depending on the language, the implementation of the language, the settings, and the system that you're using.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=74)** Some languages that implement automatic memory management are [[Java]], C#, [[Python (Programming Language)|Python]], Ruby, [[JavaScript]], and actually many, many more.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=83)** They all have their own system in place for allocating memory.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=87)** And the most common automatic memory management for releasing of the memory is one that we have seen, the garbage collector, which is as you can guess different for every system and language that you're using.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=99)** As I already said, the languages are going to have different implementations of automatic memory management and handle allocation and garbage collection differently.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/the-automagic-way-in-modern-languages?u=76281980&t=107)** Let's have a look at how is Python is putting this off in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (8), [[Python (Programming Language)|Python]] (2), [[Java]] (1), [[JavaScript]] (1)
> **CLI Commands:** python (2), ruby (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Memory management in Python](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=0)** - [Narrator] [[Python (Programming Language)|Python]] is a very popular language amongst beginning programmers, well, not only amongst beginners.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=6)** It has a beautiful, clean syntax, but one of the reasons for this popularity is that it helps with both [[Memory Management]] and that it's dynamically typed.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=16)** Well, what do I mean with dynamically typed?
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=19)** In Python, when you create a variable, you don't need to tell Python what type the variable will have, Python will figure it out for you.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=28)** How Python manages the memory exactly?
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=30)** Depends on the Python implementation that you're using.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=33)** CPython is by far the most popular implementation, so let's dive into how it's done for CPython.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=40)** Since CPython is written in C, this story might sound familiar but it's going to be a bit more detailed.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=48)** When we run a Python program, we do so in a designated area of the RAM.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=53)** Our computer is using the RAM memory to run more applications than just our Python program though.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=58)** So only the reserved area is going to be meant for Python.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=63)** In Python, there's a stack area and a private heap area.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=67)** On this private heap, we're dealing with objects, and almost everything in Python is an object, so there's a lot living on the heap in Python.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=75)** The stack is just keeping track of the method we're executing and the variables of this method.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=80)** This might sound familiar to what we have seen before.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=83)** The variables on the stack hold addresses of objects on the heap.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=87)** Here, we see the Python docs and more specifically, the type PyObject.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=93)** Every object in Python is a PyObject and this PyObject holds the type of the PyObject, and the number of times the object is referenced.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=102)** The reference counter.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=105)** Reference counter gets used for garbage collection.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=108)** It literally is a count of the references to a certain object.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=112)** If an object has a reference count of zero, it's safe to say that it can be garbage collected since it's not being used anywhere anymore.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=121)** It then gets freed.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=123)** The allocation is more complicated.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=125)** The CPython implementation has a special allocator that's allocating a memory for any object that needs a memory area.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=132)** The allocator is a complex piece of code that's using the C functions to allocate memory.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=137)** CPython has a special way of allocating memory.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=141)** In order to understand it well, we need to know the three key concepts, arenas, pools, and blocks, these are all bits of memory.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=151)** Arenas are the largest bits of memory, they are parts of the computer memory that have sequential blocks of memory.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=158)** The Python memory consists of multiple arenas and these are kept in a link list.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=163)** On the arenas, we have pools, and pools contain blocks.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=167)** Blocks are the actual memory addresses that are going to be assigned.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=171)** These pools contain blocks of memory of a certain same size.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=176)** So if you need a certain size, you need to select a certain pool for this.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=180)** The allocator is going to look for an available block of the right size, so we can have a pool of four by blocks and a pool of eight by blocks, etcetera.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=189)** All the blocks on the pool are the same size, this way, it's easy for the allocator to find a block of the right size.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=196)** But how does the allocator know which arena has a pool with a free block?
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=202)** The arenas are on a doubly linked list called usable arenas, and this list is sorted by pool availability.
>
> **[3:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=210)** The arenas with the fullest pools are on the front of the list.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=215)** Then, there is a special list that holds pools that are used, the used pools list.
>
> **[3:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=220)** And there's a special list that holds the empty pools, the free pools list.
>
> **[3:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=225)** Python tries to use the arenas with the fullest pools first.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=229)** And on these fullest arenas, it's going to try to use the used pools first.
>
> **[3:55](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=235)** Why?
>
> **[3:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=236)** Well, when memory on a pool gets freed, it doesn't get freed for the whole OS to use, but just for Python to use.
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=243)** Only when a complete arena gets freed, this is given back to the OS.
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=248)** If Python would use an unnecessary amount of arenas, Python would have an unnecessary large footprint on the system's main memory.
>
> **[4:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=257)** So how do pools get organized?
>
> **[4:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=259)** Pools have a state, they can either be used, full, or empty.
>
> **[4:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=264)** If memory on a full one gets freed, it changes back to used.
>
> **[4:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=268)** And if memory on an empty pool gets used, it changes, well, to used.
>
> **[4:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=273)** CPython tries to find a block on used one first.
>
> **[4:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=277)** If there is not a large enough block of memory available, it'll use a block on an empty pool, that's going to be containing blocks of the size of the memory block that we needed.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=287)** And this previously empty pool is then removed from the free pools list and you may have guessed it, added to the used pools list.
>
> **[4:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=294)** Blocks on a pool hold a state as well, untouched, free, and allocated.
>
> **[5:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=300)** Untouched means that a block was never allocated during the run time of a program.
>
> **[5:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=304)** Free means that it was allocated, but that it got freed and can be overwritten.
>
> **[5:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=309)** Allocated means that the data on the memory block is allocated and still in use.
>
> **[5:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=314)** So this is roughly how the allocator works.
>
> **[5:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=318)** There's one more concept that you should be familiar with when we talk about memory management, and that's the add complexity of multithreading and memory management.
>
> **[5:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=327)** Multitreading means that there are multiple things happening at the same time.
>
> **[5:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=331)** And when there are multiple things happening at the same time, it's possible that multiple things are trying to access the same memory resource to do something with this.
>
> **[5:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=341)** Things may get messy.
>
> **[5:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=342)** The multiple things happening at the same time is also called concurrency.
>
> **[5:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=348)** Luckily, there is a mechanism in place to avoid multiple threads accessing the same shared resource.
>
> **[5:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=354)** This is the global interpreter lock.
>
> **[5:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=357)** When a CPython thread access to memory, the global interpreter lock is activated and this guarantees that no funny business will happen because it avoids that multiple threads can access the same shared resource, this way, shared resources can be used safely.
>
> **[6:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=374)** All right. So this was all very theoretical.
>
> **[6:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-management-in-python?u=76281980&t=377)** Let's have a look at the simplified [[Simulation]] of what happens to the stack and the heap when we're coding Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (20), [[Memory Management]] (3), [[Simulation]] (1)
> **CLI Commands:** python (20), find (2)
> **Definitions:** is a  (6), means that (3), is an  (1)
> **Env Vars:** ram (2)
> **Speakers:** - [narrator] (1)

#### [Memory in Python visualized](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=0)** - [Instructor] Let's make it more visual.
>
> **[0:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=2)** We're going to have a look at [[Python (Programming Language)|Python]] code and a visualization of what is happening with the stack and the heap for every line of code.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=10)** We're not going to show the allocator as explained in a previous video, but just assume that there is some space on the heap available.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=18)** In order to build it up slowly, let's just start with something simple in our main method.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=29)** On the stack, we have a frame for the main method.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=32)** And our main method contains a variable x that is pointing to an object on the heap.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=37)** And that object is of type int and holds the number 5.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=41)** So if we add a variable, say y is 7, we're going to be adding a variable to our main that is pointing to another object on the heap, namely an object that is storing an int of 7.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=56)** Please note that in Python, if you would've made y 5, it would not have created a new object of 5 on the heap, but just pointed to the old one.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=66)** Numbers in Python are immutable.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=68)** So if the x would be modified, say x would turn into 2, it would lead to the creation of a new object, and y would still be pointing to the 5.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=79)** So this would not lead to [[Data Integrity]] problems and y all of a sudden pointing at 2 as well.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=84)** All right, so let's go back to our situation and add a method to add these numbers.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=99)** And in here I'm going to be creating yet another variable, result, and that's going to be the result of number 1 plus number 2, and will return result.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=110)** Please note that I'm not learning you how to code Python efficiently, but I'm just trying to point out how the memory is working here.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=117)** And when we call these methods from our main, a new block on the stack would be created.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=124)** And this block would have the variables that are necessary in the block, meaning the number 1, the number 2, and the result.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=132)** As you can see, the number 1 and number 2 are double.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=136)** And they point to the same objects as x and y of our main.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=141)** When the add method is done executing, the stack frame will disappear.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=145)** And the objects on the heap that have no relation anymore to the stack will disappear as well, because their counter is going to be 0.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=153)** When the main is done executing, also that frame will be removed, and our stack is going to be empty.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=161)** All right, so that's how CPython memory is working.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=164)** There's plenty of room to dive deeper, but this is enough knowledge to understand the foundation of [[Memory Management]] in Python.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=171)** And it will help you understand how other languages do it as well, even though they might do it a bit differently.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=177)** You may think, "Now we have automatic memory management.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=180)** What could possibly go wrong?"
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=182)** But still, it's very important to be aware of what could possibly go wrong.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/memory-in-python-visualized?u=76281980&t=186)** So next up let's have a look at memory leaks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Memory Management]] (2), [[Data Integrity]] (1)
> **CLI Commands:** python (5), make (1)
> **Warnings:** note that (2), be aware (1)
> **Cross-References:** previous video (1), go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Memory Leaks and Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [What are memory leaks?](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=0)** - [Instructor] Let's talk about one of the biggest problems that can come from poor [[Memory Management]], memory leaks.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=7)** When I ask students what they think a memory leak is at least one of them always answers that this is random memory loss.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=15)** This is not what it means, but it makes sense considering how we use leaks in day-to-day vocabulary.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=22)** So with our memory leaks?
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=24)** Memory leaks are the accumulation of objects on memory that are actually no longer needed.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=30)** Objects are created, but the memory doesn't get freed when they are no longer needed.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=35)** The reasons for this may vary.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=37)** And the number of objects on a memory will just keep on increasing, sometimes this goes very slowly, but it can also go quite fast.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=45)** What happens if we have a memory leak?
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=47)** Eventually, the memory gets so full, it slows down the application and possibly entire system.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=54)** If the memory is really full, it'll crash.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=58)** Memory leaks are serious problem.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=60)** Even nowadays, when most applications are developed in a high level language with memory management built-in.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=66)** And also even on super fast servers, RAM is a limited resource that can get full.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=72)** And if you host your application in the cloud, poor memory management and actually poor configuration of the cloud, will result in unnecessarily high cloud cost because you need to run instance that's bigger than it should be due to memory leaks.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=88)** Crashed applications are unavailable applications, but also when it's very slowed down, it might be unavailable or perceived as malfunctioning by your end users.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=98)** There is no need to tell that unavailable applications are not good for keeping, let alone growing users of your application.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=107)** Let's see, pun intended, some common causes for memory leaks.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=112)** In C, and languages where you have to manage the releasing of research manually, there are different causes for memory leaks than for other languages.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=121)** Because memory leaks can just come from forgetting to call the free method.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=126)** If you do this at one spot, that's rarely used, it is a memory leak, but the impact will be very small and it won't lead to a crashed application very soon.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=135)** But if you do this at a very important piece of your code, or even in a loop, the impact will be noticeable way sooner.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=144)** In languages with automatic memory management, this is a different story.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=148)** For various reasons, the automatic garbage collector sometimes doesn't perceive the useless object as garbage.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=155)** This is typically due to a coding or design flaw of the code.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=159)** For example, given the sort of database aesthetic variable, this would keep all the objects on the (indistinct) alive and it's a horrible practice.
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=168)** When a memory is so full and a memory block we need is not available anymore, We'll encounter some sort of out-of-memory error.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=175)** This kills the application.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/what-are-memory-leaks?u=76281980&t=177)** Let's have a look at this error and create it in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (4)
> **Definitions:** is a  (3)
> **Env Vars:** ram (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Out of Memory error](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=0)** - [Instructor] The out-of-memory error occurs when you're, well, out of memory.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=5)** This happens when the system cannot allocate a requested memory block anymore.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=10)** Usually, before this happens, the application starts to slow down first.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=15)** Some applications that have memory leak will request a restart every now and then, sometimes even only every few weeks or months, in order to free the unnecessarily kept memory and make the application perform well again.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=30)** If you're not running the application on a memory restricted system, for example in the cloud with a lot of resources available, the sign might not be a slow application but an unnecessarily high cloud provider bill.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=44)** The slowing down is one of the signs that your application is having a memory leak, and it may end in an out-of-memory error when it's not restarted to boost performance again.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=53)** Part of the reason that the application gets slow before running out of memory is due to the system having issues with finding free spots for allocation of variables, so the allocation process takes longer than when a lot of memory is still free.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=68)** Another reason for slowing down beforehand is that some languages with built-in garbage collectors can get very slow before ending in an out-of-memory error, since a garbage collector will work very, very hard and this will pause the program in many cases, and it does so trying to avoid the out-of-memory error.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=86)** This has a huge impact on performance.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=90)** Other optimizations might also slow down the application.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=94)** For example, reorganizing the fragmented memory in order to free bigger blocks.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=99)** If all this fails, we'll get an out-of-memory error and our program crashes.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=104)** Let's go ahead and cause an out-of-memory in C.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=109)** All right, so here we're having a very basic C program.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=114)** Let's now just go ahead and create a pointer X, and X is actually going to be pointing to a really big block of memory.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=123)** It's an end pointer, and we're going to call malloc here and say that we want to have, well, 200,000 times the size of an inch.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=138)** All right.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=139)** Will this make our application go out of memory?
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=142)** Well, in my case, definitely not, in your case, probably not.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=146)** But if I'm going to do this in a loop, then that's actually a different story.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=157)** Let's go ahead and see what will happen if we run our program.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=161)** I'm going to run it in debug mode so I can see the output in a debug console.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=173)** As you can see, it's running right now, and it won't be long before it actually runs out of memory.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=180)** And there we have it.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=182)** Now it's running out of memory, but it keeps doing so.
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=186)** Why, you may wonder.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=187)** Well, we're calling this in a loop, and it's not dying because of the error, it's just returning NULL, and we get the error: malloc can't allocate region.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=197)** And it keeps on doing so.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=199)** So what's a better way to do this?
>
> **[3:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=201)** Well, first of all, don't do this, but if you must, go ahead and make sure that your malloc is actually going to be returning a value.
>
> **[3:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=211)** So how to do this?
>
> **[3:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=213)** Well, I'm going to say if our X is NULL then I'd like to break the program.
>
> **[3:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=224)** So if we run the program again right now, you'll see that it's only going to show the error once, and then it breaks and it shuts down.
>
> **[3:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=238)** The reason that it shuts down is because we're having nothing after the program.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=242)** Our program would actually just continue if you had other statements in place.
>
> **[4:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=248)** And there we have the error.
>
> **[4:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=250)** As you can see, it's only printing it once now.
>
> **[4:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/out-of-memory-error?u=76281980&t=254)** In the next video, we're going to have a look at avoiding memory leaks.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** null (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Avoiding memory leaks](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=0)** - [Instructor] How to avoid memory leaks?
>
> **[0:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=2)** Of course, this depends a bit on the exact system and language, but let's have a look at [[Python (Programming Language)|Python]].
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=9)** How to avoid memory leaks in Python?
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=12)** Well, in order to answer that question, let's start with creating some memory leaks in Python.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=17)** When Python runs out of memory, you get a memory error.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=22)** An easy one to run out of memory is to load a file that is too large.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=26)** This is actually something that can easily happen when working with large data sets or by keeping references unnecessarily.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=34)** Data can be fetched using special generator functions or processing it in batches instead.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=40)** The generator functions return an iterator to loop over the data without having all the data in the RAM.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=47)** There are actually solutions to avoid working with huge data sets in the memory that can be used out of the box, such as [[TensorFlow]] or Keras.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=55)** This way, you can operate on large data sets and get the data only when you need it.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=61)** They manage the memory effectively for you.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=64)** There's actually an important side note to make for Python in particular.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=68)** It can happen that you feel that your RAM size should definitely be big enough for a data set, but you still get a memory error.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=75)** It might be due to the Python version you are using.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=78)** Make sure that you have the 60-bit version if your system is 64-bit.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=83)** There's another great way to run out of memory, and that's allocating objects and not letting them go.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=89)** It's a bit like not managing your house.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=91)** You may have space for all the things you need, but you wouldn't have enough space if you kept everything that you don't need.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=99)** So, here we're having a little example that's keeping objects for too long.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=104)** Let's have a look at what's happening line by line.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=107)** On the first line, we are importing resource.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=110)** And then, on the fourth line, we could also choose to just go ahead and set the limit for address space.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=117)** In my case, it doesn't really matter, because it's not working on any of these, which is why I'm going to show you how to run this in a different environment.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=124)** But let's continue first.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=126)** Just note that if you have a MacBook and you try to code along, this might not work for you.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=131)** Why I want to set the limit, you may wonder.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=133)** Well, I'm going to tell you in a minute.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=135)** So, we're setting this limit, and we're setting this limit very low.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=138)** Then, on line 6, I'm creating a list, just some list, doesn't really matter.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=143)** And on line 8 to 10, I'm just having a class which has the property x.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=148)** Then, I'm creating a loop, and I'm using a counter in this loop.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=152)** And I'm just going to be appending endlessly elements of Example, with an incremented i to our some_list.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=161)** And this is why I've set a limit, because if you don't set a limit and you have a good computer, this is taking super long before it's going to run out of memory.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=169)** But, this is why I'm going to be copying this code over to the browser and run it over there to show you that you get a memory error if you do this.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=179)** So, I'm using Replit for this, and I have selected Python 3.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=184)** So, I'm going to go ahead and copy our code.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=189)** Now I'm going to run our program, and you will soon see we get a memory error.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=195)** It managed to get up to 525, and then it got our memory error.
>
> **[3:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=201)** So, memory errors like these are perhaps a bit less likely to happen in Python than it would be in C#, [[Java]], or a similar language.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=209)** Why, you may wonder.
>
> **[3:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=211)** Well, it's more common over there to keep, even though it's a horrible practice, things in static variables for a really long time.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=218)** So the over-allocating, so pretty much allocating many, many objects, less likely to happen in Python.
>
> **[3:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=225)** But, that doesn't mean it won't happen in Python.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=227)** I've definitely seen this happen in Python as well.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=231)** Well, how to solve this?
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=232)** That's actually not too bad.
>
> **[3:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=234)** Just remove the references when you no longer need them anymore.
>
> **[3:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=237)** This way, the reference count will reach zero, and the garbage collector will pick them up.
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/avoiding-memory-leaks?u=76281980&t=243)** Let's have a look at some best practices for [[Memory Management]] and Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[TensorFlow]] (1), [[Java]] (1), [[Memory Management]] (1)
> **CLI Commands:** python (12), make (2)
> **Env Vars:** ram (2)
> **Code Identifiers:** some_list (1)
> **Versions:** python 3 (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Best practices with memory](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=0)** - [Instructor] This point, you already know what pointers or references are.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=4)** We have seen that when we share the reference, the object on the heap can be accessed from multiple places.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=10)** This means that if we modify the object on the heap via one pointer, the object also was modified for other places in our code that are holding the same pointer, since there's only one object, and this very object has changed.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=24)** So no news there.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=26)** But this passing by reference is also true for returning objects from methods or for creating objects using other objects.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=35)** The reference to the object gets sent.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=37)** This way, the object can be accessed by the caller of the method.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=41)** This can also happen through third-party libraries in our application.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=45)** Whenever this happens without it being the intention, we call this escaping references.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=51)** Even though this might not be too surprising to you, security breaches that this behavior can cause might be a surprise.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=58)** Let's have a look at a very simple escaping reference example.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=63)** So here we have some code.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=65)** Let me go over it.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=67)** On line 1 to 4, I'm creating a class, Course.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=70)** It has two properties, topic and learners.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=73)** Then I have two methods.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=75)** Delete_first, which is going to do nothing but deleting the first item of some list.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=80)** Then I have method main.
>
> **[1:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=82)** And in this method main, I have a list of learners.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=86)** I'm printing them on line 12.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=88)** Then on line 13, I'm creating a new Course called [[Memory Management]] with a list of learners.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=94)** Then I'm going to be calling the delete_first using my list of learners as an argument.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=101)** Then on line 15 and 16, I'm going to be printing the learners.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=105)** First of all the learners in the main, but also the learners that are in our course.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=110)** You can probably guess what the outcome will be based on my previous explanation, but let's put it to the test.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=120)** As you can see, the outcome says the learners contains four items.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=124)** Then the list in main and the list in Course have changed after calling the delete_first, because there's only one list, and if this gets changed, even if this is inside some other methods, it's going to be changed everywhere.
>
> **[2:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=141)** This is why you should be very careful with this principle called passing by reference.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=145)** And often you would want a solution for this and avoid security breaches.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=151)** You will only need a solution for objects that are mutable, since immutable objects are not changed, but a new object at a new address is being created.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=161)** So this won't influence the behavior at different locations.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=165)** The solution for mutable objects is typically creating copies.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=169)** Be careful to not just create a copy of the object, because this would be considered a shallow copy.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=175)** References of the object to other mutual objects are copied literally.
>
> **[3:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=180)** So these references may escape.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=183)** In order to be safe, a deep copy needs to be created.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=187)** A deep copy is a copy of the object and a copy of all the mutual attributes and a copy of all their mutual attributes, and so on.
>
> **[3:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=198)** So in our situation, we would've grabbed the learners inside our init method in Course and actually have made a copy of it over there to make sure that they could not be modified from outside.
>
> **[3:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=210)** Then there are some other practices to be aware of.
>
> **[3:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=213)** In [[Python (Programming Language)|Python]] specifically, you cannot really control the memory management, at least not directly.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=218)** We have already discussed some best practices to avoid memory leaks, but there're also some best practices to not use more memory than necessary.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=227)** So what can you control?
>
> **[3:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=230)** Well, first of all, you can control object creation, and you can also control to not unnecessarily recreate an object or getting rid of the object later than necessary to some extent.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=242)** The first tip would be to not utilize the plus for string concatenation.
>
> **[4:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=247)** At least not when you want to do many of them.
>
> **[4:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=250)** The string is immutable, and you'll be creating a new string for every concatenation.
>
> **[4:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=255)** So if you are concatenating five separate words, how many strings have been created on the fly?
>
> **[4:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=261)** Well, five actually, because for every step in the concatenation, a new string is created.
>
> **[4:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=267)** It's better to use the join method.
>
> **[4:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=270)** I actually have a little script for you.
>
> **[4:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=272)** In the script, on line 1, I'm importing timeit, and timeit doesn't say everything about memory management, but it gives some good indications about performance, though.
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=283)** So on line 4 to 8, I'm having a method add.
>
> **[4:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=286)** And in add, I'm sending in a list of items, and in a for loop, I'm just going to be concatenating all these items to the result.
>
> **[4:54](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=294)** Then I'm returning the result.
>
> **[4:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=297)** Then on line 11, I'm having a huge list.
>
> **[5:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=300)** Well, actually, that's maybe a bit overexaggerated.
>
> **[5:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=303)** It's actually only 10 hi's.
>
> **[5:06](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=306)** Then on line 12 and 13, I'm doing timeit, and I'm doing it in two ways.
>
> **[5:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=311)** I'm using the add function for this, and I'm using the join function for this.
>
> **[5:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=316)** And then I'm measuring how long it takes me to actually do this.
>
> **[5:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=320)** So let's have a look what this is printing.
>
> **[5:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=322)** You may have some ideas based on the story I just told you.
>
> **[5:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=330)** And as you can see, the first one takes much longer, and this is the old-fashioned add.
>
> **[5:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=335)** The second one with join is much faster.
>
> **[5:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=338)** I could run this a few times, but it comes down to numbers like this all the time.
>
> **[5:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=343)** So what does this tell us?
>
> **[5:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=345)** Well, that join is a much better choice for performance.
>
> **[5:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=350)** Another best practice for the memory would be to work with setting the slots property for your own Python classes.
>
> **[5:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=356)** Whatever you specify in slots are the attributes for which space will be allocated.
>
> **[6:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=362)** This way, the object is not using a dynamic dict, and better in terms of memory usage, since it saves space in the memory.
>
> **[6:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=371)** So I've written a little program here, and let's go over it briefly.
>
> **[6:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=376)** I have two classes, one class Course on line 4 to 7.
>
> **[6:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=380)** We have seen this one already.
>
> **[6:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=381)** It has a topic and a list of learners.
>
> **[6:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=384)** Then we have another class, Course_Restricted.
>
> **[6:28](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=388)** And it's actually the same as our previous course, but this time we have a slots attribute, and we specify only topic and learners as allowed attributes.
>
> **[6:38](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=398)** This has the added side effect that if we want to extend our object, this is not possible.
>
> **[6:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=405)** So on line 18, I go ahead and I'm creating some learners.
>
> **[6:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=408)** Then on line 19, I'm creating a Course object, and on line 20, I'm creating a Course_Restricted object.
>
> **[6:56](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=416)** So if I would go ahead and expand c, this would be fine.
>
> **[6:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=419)** I could just say something like c.level equals beginner.
>
> **[7:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=425)** But I cannot go ahead and say cr.level equals beginner.
>
> **[7:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=429)** Why?
>
> **[7:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=430)** Well, it's restricted, and there's no level in the list of allowed attributes.
>
> **[7:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=435)** Let me show the error that we'll get.
>
> **[7:19](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=439)** As you can see, we get the AttributeError.
>
> **[7:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=441)** It simply says Course_Restricted has no attribute level, and we cannot add it.
>
> **[7:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=446)** Great.
>
> **[7:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=452)** So let's clean this up again, because actually what I'm doing next is I'm measuring two things.
>
> **[7:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=457)** I'm measuring Course_Restricted, and I'm measuring Course.
>
> **[7:42](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=462)** How am I doing this?
>
> **[7:43](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=463)** I'm using tracemalloc for this.
>
> **[7:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=465)** And what we'll get are two printed values.
>
> **[7:48](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=468)** One for Course_Restricted, one for the regular Course.
>
> **[7:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=471)** Let me add this in so we can see which one it is.
>
> **[8:11](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=491)** So let's go ahead and run this program.
>
> **[8:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=495)** Here we have our sizes in the output.
>
> **[8:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=498)** And as you can see, the Course is a lot bigger than the Course_Restricted.
>
> **[8:22](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=502)** So it definitely pays off to use slots if you know which attribute your object is going to get and you really need to mind your memory.
>
> **[8:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=512)** And lastly for now, if you do not know what's going on, explore it.
>
> **[8:36](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=516)** Most languages have tools to get insights in memory usage.
>
> **[8:40](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=520)** For Python, for example, we have heapy, but here we're going to have a bit of a light version to see what's going on.
>
> **[8:46](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=526)** 'Cause we just have a simple example, and we're going to be working with a basic memory profiler.
>
> **[8:51](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=531)** Of course, you would need to install it with pip first.
>
> **[8:55](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=535)** So here's my script.
>
> **[8:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=537)** If you haven't done this, you need to install two packages.
>
> **[8:59](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=539)** We need wheel, and we need memory profiler.
>
> **[9:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=542)** Let me show you.
>
> **[9:08](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=548)** First, you'll need wheel, pip install wheel.
>
> **[9:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=553)** I already have it.
>
> **[9:14](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=554)** That makes sense, because I've already set this up.
>
> **[9:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=556)** And then you would also need the memory profiler, pip install memory_profiler.
>
> **[9:24](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=564)** Also I have this one already.
>
> **[9:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=566)** Good.
>
> **[9:27](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=567)** So let's have a look at what I'm doing in my code.
>
> **[9:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=571)** Actually, there's not a lot of code.
>
> **[9:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=573)** I'm just importing profile from the memory profiler.
>
> **[9:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=577)** And I'm using this as a decorator for my main function.
>
> **[9:41](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=581)** This is the function that the memory profiler is going to analyze, which makes a lot of sense, since there's only one function in here that's actually doing something.
>
> **[9:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=590)** Okay, so I'm just creating some variables on line 5 and 6, and I'm creating some bigger variables lists on line 7 and 8, and on line 9, I'm deleting one of these bigger ones.
>
> **[10:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=601)** So let's just go ahead and run this.
>
> **[10:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=605)** I need to run this in a special way, though, to activate the memory profiler.
>
> **[10:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=609)** So I'm going to be opening up a terminal.
>
> **[10:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=613)** So I'm going to say python3, and then I'm going to say -m memory_profiler, and then I'm going to say analyze.py, and I'm going to go ahead and run this.
>
> **[10:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=630)** And there's our output.
>
> **[10:32](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=632)** I really like this output.
>
> **[10:33](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=633)** It's so simple, but it's telling me what's happening on every exact line.
>
> **[10:37](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=637)** So it starts at the @profile decorator, and the memory usage at that point is 16.6.
>
> **[10:45](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=645)** Then you can see at line 5 and 6, 0 gets added.
>
> **[10:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=650)** This is technically not true, but it's so small that you won't notice it, because we're talking about MiBs here.
>
> **[10:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=657)** Then on line 7, you can see quite something gets added there.
>
> **[11:01](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=661)** And on line 8, only a little bit gets added.
>
> **[11:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=664)** Then on line 9, we'll remove the big one, and you can see that the increment right now is negative.
>
> **[11:10](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=670)** We actually get something else when we install the memory profiler, and that's mprof.
>
> **[11:15](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=675)** Let me show this to you.
>
> **[11:16](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=676)** I'm going to say mprof run, and then I'm going to run our analyze.py again.
>
> **[11:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=685)** And now this is done.
>
> **[11:26](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=686)** I'm going to go mprof plot.
>
> **[11:31](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=691)** As you can see, it says matplotlib is needed for plotting.
>
> **[11:35](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=695)** So we need to import pylab.
>
> **[11:36](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=696)** So let's go ahead and say pip install matplotlib over here.
>
> **[11:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=710)** And now let's run mprof plot again.
>
> **[11:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=717)** And it has opened it on my other screen.
>
> **[12:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=720)** So let me show you what it created.
>
> **[12:03](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=723)** There we have it.
>
> **[12:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=724)** This is our graph.
>
> **[12:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=725)** And you can see the similar numbers as we just saw on the table.
>
> **[12:09](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=729)** We can easily see the memory used, versus your time in seconds, in this table.
>
> **[12:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=733)** There's actually quite a bit more possible, but that's something you'll definitely find out once you need it.
>
> **[12:20](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=740)** All right, we've seen quite a bit of the best practices.
>
> **[12:23](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=743)** We have seen the memory error and what not to do.
>
> **[12:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=745)** We've seen how to work with string concatenation.
>
> **[12:29](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=749)** We have seen slots.
>
> **[12:30](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=750)** And we've made a very, very brief introduction to profiling memory.
>
> **[12:34](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/best-practices-with-memory?u=76281980&t=754)** Let's continue with our conclusion and see which next steps you could take.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Memory Management]] (3), [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** pip (4), python (3), make (1), python3 (1), find (1)
> **Prerequisites:** install (6), you'll need (1)
> **Definitions:** is a  (3), means that (1), we call this (1)
> **Code Identifiers:** delete_first (2), memory_profiler (2)
> **File Paths:** analyze.py (2)
> **Warnings:** be careful (1), be aware (1)
> **Versions:** 16.6 (1)


### Glossaries

[↑ Back to Table of Contents](#table-of-contents)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps in memory management](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=0)** - [Instructor] Congratulations, you've made it truly [[Memory Management]] fundamentals.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=4)** You're ready for some next topics now.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=7)** Topics that could be a great fit at this moment are for example, math and general computer science topics, but also a deeper dive in your programming language that you know most about.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=17)** Or perhaps, it's the right time for you to learn a new programming language.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=21)** And depending on your current level, it might actually be nice to pick up some more advanced topics, such as [[Design Patterns]] and concurrency.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=29)** Some of the courses that would be a great follow up based on this are [[Programming Foundations]], discreet mathematics, but also monitoring and logging, or for example, as a new programming language, [[JavaScript Essential Training]] if you don't know [[JavaScript]] yet.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=44)** Also interesting would be advanced design patterns, design principles, if you're a bit further already.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=50)** All right, thank you so much for taking my course, and let's connect.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=53)** You can find me on [[LinkedIn]], my name is Maaike van Putten.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=57)** If you share you finish this course and you tag me, I'll make sure to like your post.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=62)** So that concludes our course.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=65)** But wait, there's one more thing, do you remember the number that we've placed in your short term memory, at the very beginning of the course?
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=73)** If you do go ahead and post on LinkedIn, perhaps share what you've learned in this course and tag me.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=78)** I will then congratulate you on finishing the course.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=81)** Hopefully this course will become a happy, long-term memory for you.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-memory-pointers-and-garbage-collection/next-steps-in-memory-management?u=76281980&t=85)** Thank you so much and good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (2), [[JavaScript]] (2), [[LinkedIn]] (2), [[Memory Management]] (1), [[Programming Foundations]] (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Maaike van Putten]]

## Path Context

### In [[Become a Programmer- Foundations]]
← [[Programming Foundations Databases]] | **8 of 12** | [[Programming Foundations- APIs and Web Services]] →

## Appears In

- [[Become a Programmer- Foundations]]

---

[↑ Back to top](#)